// ============================================================
//  배색 생성 · 색 유사도 검색 — 기준색 하나에서 팔레트를 만든다. 순수 함수.
//  lib-color.js의 hexToHsl / hslToHex 에 의존.
// ============================================================

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
// 명도가 범위를 벗어나면 잘라내지 않고 되접는다 (어두운 기준색도 계단이 살아남게)
function foldL(l) {
  l = ((l % 200) + 200) % 200;
  return clamp(l > 100 ? 200 - l : l, 6, 94);
}

// 색 개수별 비율 (합 100)
const RATIOS = { 2: [70,30], 3: [60,30,10], 4: [50,25,15,10], 5: [40,25,15,12,8] };
const GEN_COUNTS = [2, 3, 5];
const roleAt = (i, n) => i === 0 ? "base" : i === n-1 ? "point" : "sub";

// scheme별 [hue 오프셋, 명도 오프셋, 채도 배수]. 인덱스 = 몇 번째 색.
// 0번은 항상 [0,0,1] — 입력한 색이 팔레트에 그대로 들어가야 하기 때문.
const STEPS = {
  "tone-on-tone":  [[0,0,1], [0,26,.95], [0,-22,1.05], [0,44,.85], [0,-38,1.1]],
  "tone-in-tone":  [[0,0,1], [34,4,1],   [-34,-4,1],   [68,8,.95], [-68,-8,.95]],
  "complementary": [[0,0,1], [180,6,1],  [0,30,.7],    [180,-26,1.05], [0,-34,.9]],
};

// 기준색 + 유형 + 개수 → colors 배열
function generate(hex, scheme, count) {
  const base = hexToHsl(hex);
  const steps = STEPS[scheme];
  return RATIOS[count].map((ratio, i) => {
    const [dh, dl, ms] = steps[i];
    return {
      hex: i === 0 ? hex.toUpperCase()
                   : hslToHex(base.h + dh, clamp(base.s * ms, 6, 100), foldL(base.l + dl)),
      ratio,
      role: roleAt(i, count),
    };
  });
}

// 한 기준색에서 나올 수 있는 배색 전부 (유형 3 × 개수 3)
function generateAll(hex) {
  return Object.keys(STEPS).flatMap(scheme =>
    GEN_COUNTS.map(count => ({ scheme, count, colors: generate(hex, scheme, count) })));
}

/* ── 잠금 재생성 ── */
// 잠긴 색은 그대로 두고 나머지만 다시 뽑는다. 잠긴 색이 없으면 기준부터 새로.
function reroll(colors, scheme, graphic = []) {
  const locked = colors.find(c => c.lock);
  const base = locked ? hexToHsl(locked.hex)
                      : { h: Math.random()*360, s: 30 + Math.random()*50, l: 30 + Math.random()*40 };
  const used = colors.filter(c => c.lock).map(c => c.hex);
  const templates = scheme === "free" ? graphic.filter(p => p.colors.length === colors.length) : [];
  const sample = templates[Math.floor(Math.random()*templates.length)];
  const anchor = sample && hexToHsl(sample.colors[colors.indexOf(locked) < 0 ? 0 : colors.indexOf(locked)].hex);
  return colors.map((c,i) => {
    if (c.lock) return c;
    const choices = [];
    if (sample) {
      const color = hexToHsl(sample.colors[i].hex);
      const shift = locked ? base.h - anchor.h : 0;
      choices.push(hslToHex(color.h+shift,color.s,color.l));
    }
    for (let j=0;j<20;j++) {
      choices.push(scheme === "free"
        ? hslToHex(Math.random()*360, 8+Math.random()*86, 12+Math.random()*77)
        : variant(base,scheme));
    }
    const separation = hex => Math.min(...used.map(h => colorDist(h,hex)));
    const hex = choices.find(h => separation(h) >= .08)
      || choices.sort((a,b) => separation(b)-separation(a))[0];
    used.push(hex);
    return { ...c, hex };
  });
}
// 기준색 주변에서 유형에 맞게 흔들린 색 하나
function variant(base, scheme) {
  const r = n => (Math.random()*2 - 1) * n;
  const s = d => clamp(base.s + r(d), 6, 100);
  if (scheme === "tone-on-tone") return hslToHex(base.h + r(6),       s(18), foldL(base.l + r(45)));
  if (scheme === "tone-in-tone") return hslToHex(base.h + r(60),      s(10), foldL(base.l + r(10)));
  return hslToHex(base.h + 180 + r(30), s(20), foldL(base.l + r(40)));   // complementary
}

/* ── 색 유사도 검색 ── */
const CW = { hue:0.5, sat:0.25, light:0.25 };   // 팔레트 거리(§4)와 같은 비중

function colorDist(hex1, hex2) {
  const a = hexToHsl(hex1), b = hexToHsl(hex2);
  const dh = Math.min(Math.abs(a.h-b.h), 360 - Math.abs(a.h-b.h)) / 180;
  const gray = Math.min(a.s, b.s) < 12;         // 무채색끼리는 hue 차이가 의미 없다
  return (gray ? 0 : dh*CW.hue) + Math.abs(a.s-b.s)/100*CW.sat + Math.abs(a.l-b.l)/100*CW.light;
}
// 팔레트와 기준색의 거리 = 팔레트 색 중 가장 가까운 색까지의 거리
function paletteDistTo(hex, p) {
  return Math.min(...p.colors.map(c => colorDist(hex, c.hex)));
}

// Each locked color must match a different swatch. A missing exact match
// costs more than the sum of all possible perceptual distances.
function lockedDistance(locks, colors) {
  const costs = locks.map(hex => colors.map(c =>
    hex === c.hex.toUpperCase() ? 0 : locks.length + 1 + colorDist(hex,c.hex)));
  function match(row, used) {
    if (row === costs.length) return 0;
    return Math.min(...costs[row].map((cost,i) => used & (1<<i) ? Infinity
      : cost + match(row+1,used | (1<<i))));
  }
  return match(0,0);
}
