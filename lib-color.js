// ============================================================
//  색 계산 유틸 — 순수 함수만. DOM·상태에 의존하지 않는다.
//  변환 / 분류 / WCAG 대비비 / 색약 시뮬레이션
// ============================================================

/* ── 변환 ── */
function hexToRgb(hex) {
  const n = hex.replace("#", "");
  return { r: parseInt(n.slice(0,2),16), g: parseInt(n.slice(2,4),16), b: parseInt(n.slice(4,6),16) };
}
function rgbToHex(r, g, b) {
  const f = v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2,"0").toUpperCase();
  return "#" + f(r) + f(g) + f(b);
}
function hexToHsl(hex) {
  const { r:R, g:G, b:B } = hexToRgb(hex);
  const r = R/255, g = G/255, b = B/255;
  const max = Math.max(r,g,b), min = Math.min(r,g,b), d = max - min;
  let h = 0;
  if (d !== 0) {
    if (max === r) h = ((g-b)/d) % 6;
    else if (max === g) h = (b-r)/d + 2;
    else h = (r-g)/d + 4;
    h *= 60; if (h < 0) h += 360;
  }
  const l = (max+min)/2;
  const s = d === 0 ? 0 : d/(1 - Math.abs(2*l - 1));
  return { h, s: s*100, l: l*100 };
}
function hslToHex(h, s, l) {
  h = ((h % 360) + 360) % 360; s /= 100; l /= 100;
  const c = (1 - Math.abs(2*l - 1)) * s, x = c * (1 - Math.abs((h/60) % 2 - 1)), m = l - c/2;
  let r, g, b;
  if (h < 60)       [r,g,b] = [c,x,0];
  else if (h < 120) [r,g,b] = [x,c,0];
  else if (h < 180) [r,g,b] = [0,c,x];
  else if (h < 240) [r,g,b] = [0,x,c];
  else if (h < 300) [r,g,b] = [x,0,c];
  else              [r,g,b] = [c,0,x];
  return rgbToHex((r+m)*255, (g+m)*255, (b+m)*255);
}

/* ── 분류 ── */
function familyOf({ h, s, l }) {
  if (s < 12 || l < 8 || l > 94) return "neutral";
  if (h < 15 || h >= 345) return "red";
  if (h < 45)  return "orange";
  if (h < 70)  return "yellow";
  if (h < 160) return "green";
  if (h < 200) return "cyan";
  if (h < 260) return "blue";
  if (h < 300) return "purple";
  return "pink";
}
function tempOf(h) { return (h < 90 || h >= 300) ? "warm" : "cool"; }

// 비율 가중 평균 HSL — hue는 원형이라 벡터 평균
function paletteSignature(colors) {
  let x=0, y=0, s=0, l=0, w=0;
  for (const c of colors) {
    const { h, s:cs, l:cl } = hexToHsl(c.hex);
    const rad = h * Math.PI/180, weight = c.ratio;
    x += Math.cos(rad)*weight; y += Math.sin(rad)*weight;
    s += cs*weight; l += cl*weight; w += weight;
  }
  let h = Math.atan2(y, x) * 180/Math.PI;
  if (h < 0) h += 360;
  return { h, s: s/w, l: l/w };
}

/* ── WCAG 대비비 ── */
// sRGB 채널 → 선형 광량
const toLinear = c => { c /= 255; return c <= 0.04045 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4); };
function luminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  return 0.2126*toLinear(r) + 0.7152*toLinear(g) + 0.0722*toLinear(b);
}
// 1.0 ~ 21.0
function contrast(hex1, hex2) {
  const a = luminance(hex1), b = luminance(hex2);
  return (Math.max(a,b) + 0.05) / (Math.min(a,b) + 0.05);
}
// 배경 위에 올릴 흰/검 중 더 잘 보이는 쪽
function bestTextOn(bg) {
  return contrast(bg, "#FFFFFF") >= contrast(bg, "#000000") ? "#FFFFFF" : "#000000";
}
// WCAG 등급. large=큰 텍스트(18pt+ 또는 14pt bold)
function wcagLevel(ratio, large = false) {
  if (large) return ratio >= 4.5 ? "AAA" : ratio >= 3 ? "AA" : "실패";
  return ratio >= 7 ? "AAA" : ratio >= 4.5 ? "AA" : ratio >= 3 ? "AA Large" : "실패";
}
// 팔레트가 본문 텍스트로 쓸 만한가 = 어떤 색쌍이든 4.5:1 이상이 있는가
function hasReadablePair(colors) {
  for (let i = 0; i < colors.length; i++)
    for (let j = i+1; j < colors.length; j++)
      if (contrast(colors[i].hex, colors[j].hex) >= 4.5) return true;
  return false;
}
// 팔레트 내 최대 대비비
function maxContrast(colors) {
  let m = 1;
  for (const [a, b] of pairs(colors)) m = Math.max(m, contrast(a.hex, b.hex));
  return m;
}
// 색 배열의 모든 색쌍
function pairs(colors) {
  const out = [];
  for (let i = 0; i < colors.length; i++)
    for (let j = i+1; j < colors.length; j++) out.push([colors[i], colors[j]]);
  return out;
}

// 대비 교정: fg의 명도만 움직여 bg 대비 target을 넘기는 가장 가까운 색.
// 색상·채도는 그대로라 팔레트의 인상이 유지된다. 불가능하면 null.
function fixContrast(fg, bg, target = 4.5) {
  const { h, s, l } = hexToHsl(fg);
  for (let d = 1; d <= 100; d++) {                 // 원래 명도에서 1%씩 멀어지며 탐색
    for (const nl of [l - d, l + d]) {
      if (nl < 0 || nl > 100) continue;
      const hex = hslToHex(h, s, nl);
      const r = contrast(hex, bg);
      if (r >= target) return { hex, ratio: r, dl: Math.round(nl - l) };
    }
  }
  return null;
}

/* ── 색약 시뮬레이션 ── */
// sRGB 공간 근사 변환 행렬 (Viénot/Brettel 계열)
const CVD_MATRIX = {
  protanopia:   [0.567,0.433,0.000, 0.558,0.442,0.000, 0.000,0.242,0.758], // 적색맹
  deuteranopia: [0.625,0.375,0.000, 0.700,0.300,0.000, 0.000,0.300,0.700], // 녹색맹(가장 흔함)
  tritanopia:   [0.950,0.050,0.000, 0.000,0.433,0.567, 0.000,0.475,0.525], // 청황색맹
  achromatopsia:[0.299,0.587,0.114, 0.299,0.587,0.114, 0.299,0.587,0.114], // 전색맹
};
const CVD_LABEL = {
  normal: "정상 시각", protanopia: "적색맹 (1%)", deuteranopia: "녹색맹 (6%)",
  tritanopia: "청황색맹 (0.01%)", achromatopsia: "전색맹",
};
function simulateCVD(hex, type) {
  const m = CVD_MATRIX[type];
  if (!m) return hex;
  const { r, g, b } = hexToRgb(hex);
  return rgbToHex(m[0]*r + m[1]*g + m[2]*b,
                  m[3]*r + m[4]*g + m[5]*b,
                  m[6]*r + m[7]*g + m[8]*b);
}
// 색약 상태에서 두 색이 구분되는가 (거리 기준)
function distinguishable(hex1, hex2, type) {
  const a = hexToRgb(simulateCVD(hex1, type)), b = hexToRgb(simulateCVD(hex2, type));
  return Math.hypot(a.r-b.r, a.g-b.g, a.b-b.b) >= 40;
}
// 정상 시각에선 구분되지만 색약에선 뭉개지는 색쌍이 있는 유형들.
// 전색맹은 거의 모든 배색이 걸려 경고로서 의미가 없어 제외한다.
const CVD_CHECK = ["protanopia", "deuteranopia", "tritanopia"];
function cvdRisks(colors) {
  return CVD_CHECK.filter(type => pairs(colors).some(([a, b]) =>
    distinguishable(a.hex, b.hex, "normal") && !distinguishable(a.hex, b.hex, type)));
}
/* OKLab distances for palette matching. Cache by normalized sRGB HEX. */
const paletteLabCache = new Map();
function paletteLab(hex) {
  const key = hex.toUpperCase();
  if (paletteLabCache.has(key)) return paletteLabCache.get(key);
  const [r,g,b] = [1,3,5].map(i => {
    const v = parseInt(key.slice(i,i+2),16)/255;
    return v <= .04045 ? v/12.92 : ((v+.055)/1.055)**2.4;
  });
  const l = Math.cbrt(.4122214708*r+.5363325363*g+.0514459929*b);
  const m = Math.cbrt(.2119034982*r+.6806995451*g+.1073969566*b);
  const s = Math.cbrt(.0883024619*r+.2817188376*g+.6299787005*b);
  const lab = [
    .2104542553*l+.7936177850*m-.0040720468*s,
    1.9779984951*l-2.4285922050*m+.4505937099*s,
    .0259040371*l+.7827717662*m-.8086757660*s
  ];
  paletteLabCache.set(key,lab);
  return lab;
}

const SEARCH_TOLERANCE = {strict:.045, normal:.085, broad:.14};

function matchPalette(query, colors, {limit=Infinity, partial=false, recommend=false}={}) {
  const keys = [...new Set(colors.map(c => c.hex.toUpperCase()))];
  if (!partial && keys.length < query.length) return null;
  const options = query.map(q => {
    const [l,a,b] = paletteLab(q.hex);
    return colors.flatMap(c => {
      if (!recommend && q.role && q.role !== c.role) return [];
      const [cl,ca,cb] = paletteLab(c.hex);
      const distance = Math.hypot(l-cl,a-ca,b-cb);
      if (distance > limit) return [];
      const penalty = recommend ? (q.role === c.role ? 0 : .02) + Math.abs(q.ratio-c.ratio)*.0005 : 0;
      const weight = recommend ? 1 + q.ratio/65 : 1;
      return [{bit:1<<keys.indexOf(c.hex.toUpperCase()),distance,cost:(distance+penalty)*weight,weight}];
    });
  });
  let best = null;
  function visit(i,used,count,sum,worst,weight) {
    if (best && count+query.length-i < best.count) return;
    if (i === query.length) {
      if (!count || !partial && count !== query.length) return;
      const score = .55*sum/weight + .45*worst;
      if (!best || count > best.count || count === best.count && score < best.score)
        best = {count,score,worst};
      return;
    }
    for (const option of options[i]) {
      if (!(used & option.bit)) visit(i+1,used|option.bit,count+1,sum+option.cost,
        Math.max(worst,option.distance),weight+option.weight);
    }
    if (partial) visit(i+1,used,count,sum,worst,weight);
  }
  visit(0,0,0,0,0,0);
  return best;
}

function recommendedPaletteScore(target,candidate) {
  const match = matchPalette(target,candidate,{partial:true,recommend:true});
  return match ? match.score + .11*(target.length-match.count) + .035*Math.max(0,candidate.length-match.count) : Infinity;
}

/* HSL hue-wheel geometry. OKLab chroma suppresses unstable hues near grey.
   Coverage is palette area. A tiny accent may qualify if its chroma is strong. */
function classifyHarmony(colors) {
  const distance = (a,b) => Math.abs(((a-b+540)%360)-180);
  const groups = [];
  const total = colors.reduce((sum,c) => sum+c.ratio,0);
  let neutralArea = 0;
  for (const color of colors) {
    const [,a,b] = paletteLab(color.hex);
    const chroma = Math.hypot(a,b);
    const area = color.ratio/total;
    if (chroma < 0.038) {
      neutralArea += area;
      continue;
    }
    groups.push([{h:hexToHsl(color.hex).h,area,chroma}]);
  }
  // Complete linkage prevents a chain of neighbouring hues forming one family.
  groups.sort((a,b)=>a[0].h-b[0].h);
  while (groups.length>1) {
    let best=Infinity, pair;
    for (let i=0;i<groups.length;i++) for (let j=i+1;j<groups.length;j++) {
      const span=Math.max(...groups[i].flatMap(a=>groups[j].map(b=>distance(a.h,b.h))));
      if (span<=18 && span<best) { best=span; pair=[i,j]; }
    }
    if (!pair) break;
    groups[pair[0]].push(...groups.splice(pair[1],1)[0]);
  }
  const hues=[];
  for (const group of groups) {
    const area=group.reduce((n,c)=>n+c.area,0);
    const weight=group.reduce((n,c)=>n+c.area*c.chroma,0);
    if (area<0.05 && weight<0.004) continue;
    let x=0,y=0;
    for (const c of group) {
      const angle=c.h*Math.PI/180;
      x+=c.area*c.chroma*Math.cos(angle);
      y+=c.area*c.chroma*Math.sin(angle);
    }
    hues.push((Math.atan2(y,x)*180/Math.PI+360)%360);
  }
  hues.sort((a,b)=>a-b);
  const n=hues.length;
  const gaps=hues.map((h,i)=>(hues[(i+1)%n]-h+360)%360);
  let primary="mixed";
  if (neutralArea<0.85 && n) {
    if (n===1) primary="monochromatic";
    else if (360-Math.max(...gaps)<=60) primary="analogous";
    else if (n===2 && distance(...hues)>=157) primary="complementary";
    else if (n===3 && gaps.every(g=>Math.abs(g-120)<=17)) primary="triadic";
    else if (n===3 && gaps.some((g,i)=>Math.abs(g-60)<=18 &&
      Math.abs(gaps[(i+1)%3]-150)<=18 && Math.abs(gaps[(i+2)%3]-150)<=18)) primary="split-complementary";
    else if (n===4 && distance(hues[0],hues[2])>=160 && distance(hues[1],hues[3])>=160)
      primary=gaps.every(g=>Math.abs(g-90)<=15)?"square":"tetradic";
  }
  return {primary,matches:primary==="square"?["square","tetradic"]:[primary],neutralDominant:neutralArea>=0.5};
}

