// ============================================================
//  UI 목업 — 팔레트를 실제 화면 배치에 얹어 보여준다.
//  60-30-10 비율 바는 추상적이라, 헤더/버튼/카드에 적용해 판단을 돕는다.
// ============================================================

// 역할 배정: 비율이 큰 순으로 배경 → 표면 → 강조
function assignRoles(colors) {
  const byRatio = [...colors].sort((a,b) => b.ratio - a.ratio);
  const point = colors.find(c => c.role === "point") || byRatio[byRatio.length-1];
  const base  = byRatio[0];
  const sub   = byRatio.find(c => c !== base && c !== point) || byRatio[1] || base;
  return { base: base.hex, sub: sub.hex, point: point.hex };
}

// 배경 위에서 읽히는 텍스트색 (팔레트 안에서 못 찾으면 흑/백)
function textOn(bg, palette) {
  const cand = palette.map(c => c.hex).filter(h => contrast(bg, h) >= 4.5);
  if (cand.length) return cand.sort((a,b) => contrast(bg,b) - contrast(bg,a))[0];
  return bestTextOn(bg);
}

function mockupHTML(p, transform = h => h, roles = null) {
  const cols = p.colors.map(c => ({ ...c, hex: transform(c.hex) }));
  const { base, sub, point } = roles || assignRoles(cols);
  const onBase  = roles?.title || textOn(base, cols);
  const onSub   = textOn(sub, cols);
  const onPoint = bestTextOn(point);
  const muted   = c => `color-mix(in srgb, ${c} 65%, transparent)`;

  return `
  <div class="mk" style="background:${base};color:${onBase}">
    <div class="mk-nav" style="border-color:${muted(onBase)}">
      <b>Acme</b>
      <span class="mk-links" style="color:${muted(onBase)}">홈 · 제품 · 요금</span>
      <span class="mk-btn" style="background:${point};color:${onPoint}">시작하기</span>
    </div>

    <div class="mk-hero">
      <h3 style="color:${onBase}">더 나은 배색을 더 빠르게</h3>
      <p style="color:${muted(onBase)}">이 팔레트를 실제 화면에 적용하면 이렇게 보입니다.</p>
      <div class="mk-cta">
        <span class="mk-btn lg" style="background:${point};color:${onPoint}">무료로 체험</span>
        <span class="mk-btn lg ghost" style="border-color:${muted(onBase)};color:${onBase}">더 알아보기</span>
      </div>
    </div>

    <div class="mk-cards">
      ${[["빠른 속도","즉시 반영됩니다"],["정확한 대비","접근성을 지킵니다"],["간편한 복사","한 번에 가져갑니다"]]
        .map(([t,d]) => `
        <div class="mk-card" style="background:${sub};color:${onSub}">
          <span class="mk-dot" style="background:${point}"></span>
          <b>${t}</b>
          <small style="color:${muted(onSub)}">${d}</small>
        </div>`).join("")}
    </div>
  </div>`;
}

// 그래픽 컬렉션은 지정 순서, 기존 팔레트는 주조 역할과 비율을 우선한다.
function posterColors(p, transform = h => h) {
  const colors = p.colors.map(c => ({...c, hex:transform(c.hex)}));
  let ordered = colors;
  if (p.collection !== "graphic") {
    const byRatio = [...colors].sort((a,b) => b.ratio-a.ratio);
    const base = byRatio.find(c => c.role === "base") || byRatio[0];
    ordered = [base, ...byRatio.filter(c => c !== base)];
  }
  // 제목은 팔레트 안에서만 교환한다. 작은 정보만 흑백 대체를 허용한다.
  if (contrast(ordered[0].hex, ordered[1].hex) < 3) {
    let best = 1;
    for (let i=2; i<ordered.length; i++) {
      if (contrast(ordered[0].hex, ordered[i].hex) > contrast(ordered[0].hex, ordered[best].hex)) best=i;
    }
    [ordered[1],ordered[best]] = [ordered[best],ordered[1]];
  }
  return ordered.map(c => c.hex);
}

function posterMockupHTML(p, transform = h => h, roles = null, layout = "type", design = {}) {
  const colors = roles
    ? [roles.base, roles.title, roles.sub, roles.point, ...(design.extra !== undefined ? [design.extra].filter(Boolean) : posterColors(p,transform).slice(4))]
    : posterColors(p, transform);
  const [bg, title] = colors;
  const graphic = colors[2] || title, accent = colors[3] || title;
  const info = textOn(bg, colors.map(hex => ({hex})));
  const number = (p.id || '').match(/\d+$/)?.[0] || '01';
  const svg = (description,body) => {
    if (design.position && design.position !== "top") {
      const shift = design.position === "middle" ? 170 : 345;
      const group = /<g [^>]*class="poster-mk-title"[^>]*>[\s\S]*?<\/g>/.exec(body);
      if (group) body = body.replace(group[0],"") + `<g transform="translate(0 ${shift})">${group[0]}</g>`;
    }
    const font = layout === "editorial" ? 'font-family="Georgia, serif" font-weight="400"' : 'font-family="GMarketSans, Arial, sans-serif" font-weight="900"';
    body=body.replaceAll('class="poster-mk-title"', 'class="poster-mk-title" '+font)
      .replaceAll('class="poster-mk-info"','class="poster-mk-info" font-family="Galmuri11, Segoe UI, sans-serif" font-size="11" font-weight="500" letter-spacing="1"');
    return `<svg class="poster-mk" data-layout="${layout}" viewBox="0 0 600 800" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="포스터 목업: ${description}">
    <rect width="600" height="800" fill="${bg}"/>${design.photo ? `<image width="600" height="800" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="${design.photo}"/><rect data-photo-overlay="" width="600" height="800" fill="#000000" opacity="${design.shade/100}"/>` : ""}${body}
  </svg>`;
  };

  if ([2,3].includes(design.templateVersion) && layout !== "blocks") {
    const detailed = design.templateVersion === 3;
    const header = `<g fill="${info}" class="poster-mk-info">
      <text x="40" y="42">${layout === "editorial" ? "FIELD NOTES / DESIGN &amp; CULTURE" : "GRAPHIC STUDIES / EXHIBITION"}</text>
      <text x="560" y="42" text-anchor="end">${layout === "editorial" ? "VOL. 04" : number}</text>
    </g><path d="M40 58H560" stroke="${info}"/>`;
    const footer = `<path d="M40 738H560" stroke="${info}"/>
      <g fill="${info}" class="poster-mk-info">
        <text x="40" y="766">11.20 / 20:00</text>
        <text x="560" y="766" text-anchor="end">${layout === "editorial" ? "GALLERY 02" : "CINEMA HALL"}</text>
      </g>`;
    if (layout === "editorial") return svg("에디토리얼 · 정물과 짧은 에세이", `${header}
      <g fill="${title}" class="poster-mk-title">
        <text x="39" y="156" font-size="88">The shape</text>
        <text x="554" y="235" text-anchor="end" font-size="82" font-style="italic">of colour.</text>
      </g>
      <rect x="40" y="276" width="322" height="346" fill="${graphic}"/>
      <circle cx="273" cy="362" r="49" fill="${accent}"/>
      <path d="M40 521L362 460V622H40Z" fill="${colors[4] || bg}"/>
      <path d="M93 559Q66 548 72 498Q74 464 108 436Q136 412 130 373L127 352H174L171 373Q165 412 193 436Q228 465 229 498Q233 545 208 559Z" fill="${title}"/>
      ${detailed ? `<path d="M87 518Q81 484 111 452" fill="none" stroke="${bg}" stroke-width="3" stroke-linecap="round" opacity=".6"/>` : ""}
      <ellipse cx="151" cy="352" rx="24" ry="5" fill="${bg}"/>
      <path d="M202 542H329Q319 584 266 584Q214 584 202 542Z" fill="${accent}"/>
      ${detailed ? `<path d="M207 548Q266 554 324 548" fill="none" stroke="${title}" stroke-width="2" opacity=".65"/>` : ""}
      <text x="40" y="649" class="poster-mk-info" fill="${info}">FIG. 01 / STILL LIFE</text>
      <path d="M388 277H560" stroke="${info}"/>
      <g fill="${info}" font-family="Georgia, serif">
        <text x="388" y="324" font-size="26">Colour in</text>
        <text x="388" y="355" font-size="26" font-style="italic">context</text>
        <text x="388" y="411" font-size="16">
          <tspan x="388">A colour changes</tspan><tspan x="388" dy="24">when it meets another.</tspan>
          <tspan x="388" dy="34">On a broad surface,</tspan><tspan x="388" dy="24">it sets the mood.</tspan>
          <tspan x="388" dy="34">In a small detail,</tspan><tspan x="388" dy="24">it draws the eye.</tspan>
        </text>
        <text x="40" y="700" font-size="28" font-style="italic">“Every colour has a neighbour.”</text>
      </g>${footer}`);
    return svg("타이포 · 사선으로 흐르는 글자와 궤도", `${header}
      <g fill="${title}" class="poster-mk-title">
        <text x="36" y="204" font-size="142" textLength="466" lengthAdjust="spacingAndGlyphs">COLOR</text>
        <text x="40" y="338" font-size="114">IN</text>
        <text x="560" y="670" text-anchor="end" font-size="116" textLength="520" lengthAdjust="spacingAndGlyphs">MOTION</text>
      </g>
      <g transform="translate(336 415) rotate(-31)" fill="none">
        <ellipse rx="185" ry="92" stroke="${graphic}" stroke-width="42"/>
        <path d="M-185 0a185 92 0 0 1 185-92" stroke="${accent}" stroke-width="42"/>
        <ellipse rx="117" ry="44" stroke="${colors[4] || title}" stroke-width="5"/>
        ${detailed ? `<g fill="${accent}"><circle cx="98" cy="-24" r="6"/><circle cx="83" cy="-31" r="3"/></g>` : ""}
        <circle cx="112" cy="-13" r="13" fill="${accent}"/>
      </g>${footer}`);
  }

  // Repeat selected inks on contrasting fields so their relationships are visible.
  const extra = colors[4] || bg;
  if (layout === "blocks") return svg("컬러 블록: 큰 색면, 반전 제목, 교차하는 강조색", `
    <g class="poster-mk-info" fill="${info}">
      <text x="32" y="36">COLOR FIELD / GRAPHIC EXHIBITION</text>
      <text x="568" y="36" text-anchor="end">${number}</text>
    </g>
    <g class="poster-mk-title" fill="${title}">
      <text x="28" y="125" font-size="80">FORM &amp;</text>
      <text x="28" y="210" font-size="80" textLength="540" lengthAdjust="spacingAndGlyphs">COUNTERFORM</text>
    </g>
    <rect y="244" width="300" height="346" fill="${graphic}"/>
    <rect x="300" y="244" width="300" height="346" fill="${title}"/>
    <circle cx="300" cy="405" r="126" fill="${bg}"/>
    <path d="M300 279A126 126 0 0 1 300 531Z" fill="${accent}"/>
    <rect x="40" y="368" width="92" height="92" fill="${accent}"/>
    <rect x="468" y="368" width="92" height="92" fill="${graphic}"/>
    <g font-family="Arial,sans-serif" font-size="18" font-weight="700">
      <text x="32" y="280" fill="${bg}">SHAPE</text>
      <text x="568" y="280" text-anchor="end" fill="${accent}">SPACE</text>
      <text x="32" y="563" fill="${title}">POSITIVE / NEGATIVE</text>
      <text x="568" y="563" text-anchor="end" fill="${bg}">01—05</text>
    </g>
    <rect y="590" width="600" height="132" fill="${accent}"/>
    <text x="28" y="677" fill="${title}" font-family="Arial Black,Arial,sans-serif" font-size="76" textLength="540" lengthAdjust="spacingAndGlyphs" font-weight="900">IN BALANCE</text>
    <rect x="432" y="694" width="136" height="12" fill="${extra}"/>
    <g class="poster-mk-info" fill="${info}">
      <text x="32" y="751">A STUDY OF SCALE, CONTRAST AND RHYTHM</text>
      <text x="32" y="776">11.20 / GALLERY 02 / 10:00—18:00</text>
      <text x="568" y="776" text-anchor="end">${p.colors.length} INKS</text>
    </g>`);

  if (layout === "editorial") return svg("에디토리얼: 표제, 두 단 본문, 인용문과 도판", `
    <g class="poster-mk-info" fill="${info}">
      <text x="36" y="38">FIELD NOTES / DESIGN &amp; CULTURE</text>
      <text x="564" y="38" text-anchor="end">VOL. 04</text>
    </g>
    <path d="M36 54H564" stroke="${title}"/>
    <g class="poster-mk-title" fill="${title}">
      <text x="32" y="145" font-size="88">The shape</text>
      <text x="32" y="230" font-size="88" font-style="italic">of colour.</text>
    </g>
    <rect x="36" y="254" width="528" height="222" fill="${graphic}"/>
    <path d="M80 476V367a84 84 0 0 1 168 0v109Z" fill="${title}"/>
    <circle cx="372" cy="365" r="88" fill="${accent}"/>
    <rect x="320" y="342" width="104" height="46" fill="${bg}"/>
    <rect x="486" y="280" width="52" height="170" fill="${extra}"/>
    <text x="36" y="496" class="poster-mk-info" fill="${info}">FIG. 01 — COLOUR AS MATERIAL, SHAPE AS LANGUAGE</text>
    <g font-family="Georgia,serif" font-size="15" fill="${title}">
      <text x="36" y="536" font-size="24" font-weight="700">Colour in context</text>
      <text x="36" y="562">A colour changes when it meets</text>
      <text x="36" y="584">another. Across a broad surface,</text>
      <text x="36" y="606">it becomes the atmosphere;</text>
      <text x="36" y="628">in a small detail, a point of focus.</text>
      <text x="318" y="536">Type gives that surface a voice.</text>
      <text x="318" y="558">A headline, a quiet paragraph,</text>
      <text x="318" y="580">a fine rule: each asks something</text>
      <text x="318" y="602">different of the same ink.</text>
      <text x="318" y="624" font-style="italic">Look at the whole, then the detail.</text>
    </g>
    <rect x="36" y="654" width="528" height="91" fill="${accent}"/>
    <g font-family="Georgia,serif" fill="${title}">
      <text x="52" y="690" font-size="27" font-style="italic">“Every colour has a neighbour.”</text>
      <text x="52" y="722" font-size="14">ON CONTRAST, PROPORTION AND THE PRINTED PAGE</text>
    </g>
    <path d="M36 762H564" stroke="${title}"/>
    <g class="poster-mk-info" fill="${info}">
      <text x="36" y="784">11.20 / 20:00 — GALLERY 02</text>
      <text x="564" y="784" text-anchor="end">${number}</text>
    </g>`);

  return svg("배경, 대형 제목과 기하학 그래픽", `
    <g fill="${info}" class="poster-mk-info">
      <text x="32" y="39">GRAPHIC STUDIES / COLOR &amp; FORM</text>
      <text x="568" y="39" text-anchor="end">${number}</text>
    </g>
    <path d="M32 57H568" stroke="${title}" stroke-width="2"/>
    <g fill="${title}" class="poster-mk-title">
      <text x="26" y="178" font-size="132">COLOR</text>
      <text x="28" y="282" font-size="116">IN</text>
      <text x="26" y="387" font-size="119">MOTION</text>
    </g>
    <path d="M245 237H551M513 199L551 237L513 275" fill="none" stroke="${graphic}" stroke-width="24"/>
    <circle cx="171" cy="548" r="139" fill="${graphic}"/>
    <path d="M318 687V548A125 125 0 0 1 568 548V687Z" fill="${accent}"/>
    <path d="M318 548H568" stroke="${bg}" stroke-width="24"/>
    <circle cx="171" cy="548" r="54" fill="${bg}"/>
    ${colors[4] ? `<rect x="318" y="620" width="250" height="67" fill="${colors[4]}"/>` : ''}
    <path d="M32 721H568" stroke="${title}" stroke-width="2"/>
    <g fill="${info}" class="poster-mk-info">
      <text x="32" y="748">EXHIBITION / VISUAL DESIGN</text>
      <text x="32" y="772">11.20 / 20:00 — CINEMA HALL</text>
      <text x="568" y="772" text-anchor="end">${p.colors.length} COLORS / STUDY ${number}</text>
    </g>
  `);
}
