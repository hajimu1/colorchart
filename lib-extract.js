// ============================================================
//  이미지 → 대표색 추출. canvas로 축소 후 색 구간별 빈도 집계.
//  DOM 트리를 건드리지 않는다 (임시 canvas만 만들어 쓰고 버림).
// ============================================================

const EXTRACT_W = 120;   // 이 폭으로 축소해서 훑는다 (속도)
const MIN_SEP  = 48;     // 뽑은 색끼리 최소 RGB 거리 — 비슷한 색이 연달아 나오는 걸 막는다

// img(로드 완료된 HTMLImageElement) → hex 배열 (빈도순, 최대 k개)
function extractColors(img, k = 5) {
  const w = Math.max(1, Math.min(EXTRACT_W, img.naturalWidth));
  const h = Math.max(1, Math.round(img.naturalHeight * (w / img.naturalWidth)));
  const cv = document.createElement("canvas");
  cv.width = w; cv.height = h;
  const ctx = cv.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(img, 0, 0, w, h);

  let data;
  try { data = ctx.getImageData(0, 0, w, h).data; }
  catch (e) { throw new Error("이미지를 읽을 수 없습니다 (다른 사이트의 이미지일 수 있음)"); }

  // 채널당 4비트로 뭉뚱그려 구간별 평균색과 빈도를 모은다
  const bins = new Map();
  for (let i = 0; i < data.length; i += 4) {
    if (data[i+3] < 128) continue;                       // 투명 픽셀 제외
    const key = (data[i]>>4 << 8) | (data[i+1]>>4 << 4) | (data[i+2]>>4);
    const b = bins.get(key) || { r:0, g:0, b:0, n:0 };
    b.r += data[i]; b.g += data[i+1]; b.b += data[i+2]; b.n++;
    bins.set(key, b);
  }
  if (!bins.size) throw new Error("색을 찾지 못했습니다");

  const ranked = [...bins.values()]
    .sort((a, b) => b.n - a.n)
    .map(b => ({ r: b.r/b.n, g: b.g/b.n, b: b.b/b.n }));

  // 빈도순으로 훑으며 이미 뽑은 색과 충분히 떨어진 것만 채택
  const picked = [];
  for (const c of ranked) {
    if (picked.length >= k) break;
    if (picked.every(p => Math.hypot(p.r-c.r, p.g-c.g, p.b-c.b) >= MIN_SEP)) picked.push(c);
  }
  // 단색 이미지라 개수가 모자라면 빈도순으로 그냥 채운다
  for (const c of ranked) {
    if (picked.length >= k) break;
    if (!picked.includes(c)) picked.push(c);
  }
  return picked.map(c => rgbToHex(c.r, c.g, c.b));
}

// 추출한 hex 배열 → 팔레트 colors (빈도순 = 비율순)
function colorsFromHexes(hexes) {
  const n = hexes.length;
  const ratios = RATIOS[n] || RATIOS[5].slice(0, n);
  return hexes.map((hex, i) => ({ hex, ratio: ratios[i], role: roleAt(i, n) }));
}
