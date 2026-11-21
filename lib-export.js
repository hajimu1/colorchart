// ============================================================
//  팔레트 복사 포맷 — 팔레트 객체 → 문자열. 순수 함수.
//  새 포맷을 늘리려면 EXPORTERS에 한 줄만 추가하면 된다.
// ============================================================

// role 기반 변수명: base / sub1 / sub2 / point (중복 없이)
function varNames(colors) {
  let sub = 0;
  return colors.map(c => c.role === "sub" ? `sub${++sub}` : c.role);
}

const EXPORTERS = {
  "HEX 목록": p => p.colors.map(c => c.hex).join("\n"),

  "CSS 변수": p => {
    const n = varNames(p.colors);
    return ":root {\n" + p.colors.map((c,i) =>
      `  --color-${n[i]}: ${c.hex};${" ".repeat(Math.max(1, 10-n[i].length))}/* ${c.ratio}% */`
    ).join("\n") + "\n}";
  },

  "Tailwind": p => {
    const n = varNames(p.colors);
    return "// tailwind.config.js\ntheme: {\n  extend: {\n    colors: {\n" +
      p.colors.map((c,i) => `      ${n[i]}: "${c.hex}",`).join("\n") +
      "\n    },\n  },\n}";
  },

  "SCSS 변수": p => {
    const n = varNames(p.colors);
    return p.colors.map((c,i) => `$color-${n[i]}: ${c.hex}; // ${c.ratio}%`).join("\n");
  },

  "RGB": p => p.colors.map(c => {
    const { r, g, b } = hexToRgb(c.hex);
    return `rgb(${r}, ${g}, ${b})`;
  }).join("\n"),

  "HSL": p => p.colors.map(c => {
    const { h, s, l } = hexToHsl(c.hex);
    return `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
  }).join("\n"),

  "JSON": p => JSON.stringify({
    id: p.id, name: p.name, scheme: p.scheme, tags: p.tags,
    colors: p.colors.map(c => ({ hex: c.hex, ratio: c.ratio, role: c.role })),
  }, null, 2),
};

const EXPORT_FORMATS = Object.keys(EXPORTERS);
const exportPalette = (p, fmt) => (EXPORTERS[fmt] || EXPORTERS["HEX 목록"])(p);

// 팔레트의 색상 비율을 가로 띠의 너비로 표현한다.
async function savePaletteImage(p, format) {
  const width = 1200, height = 400;
  const weights = p.colors.map(c => Number(c.ratio));
  if (!weights.every(w => Number.isFinite(w) && w > 0)) weights.fill(1);
  const total = weights.reduce((sum, w) => sum + w, 0);
  let used = 0, end = 0;
  const bands = p.colors.map((c, i) => {
    if (!/^#[0-9a-f]{6}$/i.test(c.hex)) throw new Error("Invalid color");
    const x = end;
    used += weights[i];
    end = Math.round(width * used / total);
    return {x, width: end - x, hex: c.hex};
  });

  let blob;
  if (format === "svg") {
    const rects = bands.map(b =>
      `<rect x="${b.x}" width="${b.width}" height="${height}" fill="${b.hex}"/>`
    ).join("\n");
    blob = new Blob([`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">\n${rects}\n</svg>`], {type: "image/svg+xml"});
  } else {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    for (const b of bands) {
      ctx.fillStyle = b.hex;
      ctx.fillRect(b.x, 0, b.width, height);
    }
    blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
    if (!blob) throw new Error("PNG encoding failed");
  }

  downloadPaletteBlob(blob,p.name,format);
}

function downloadPaletteBlob(blob,name,format) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = (name || "palette").replace(/[<>:"/\\|?*\u0000-\u001f]/g, "_").slice(0, 100) + "." + format;
  document.body.append(link);
  try { link.click(); }
  finally {
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  }
}

// Adobe Swatch Exchange 1.0: RGB process swatches with UTF-16BE names.
function saveAdobeSwatches(v) {
  const bytes=[];
  const u16=n=>bytes.push((n>>>8)&255,n&255);
  const u32=n=>{u16(n>>>16);u16(n);};
  const ascii=s=>{for(const ch of s) bytes.push(ch.charCodeAt(0));};
  ascii("ASEF"); u16(1); u16(0); u32(v.colors.length);
  const float=new DataView(new ArrayBuffer(4));
  v.colors.forEach((hex,i)=>{
    const labels=["배경","제목","그래픽","포인트"].filter((_,j)=>v.roles?.[j]===hex);
    const name=[v.name,labels.join("/"),hex].filter(Boolean).join(" · ");
    u16(1); u32(2+(name.length+1)*2+4+12+2);
    u16(name.length+1);
    for(let j=0;j<name.length;j++) u16(name.charCodeAt(j));
    u16(0);ascii("RGB ");
    for(const start of [1,3,5]) {
      float.setFloat32(0,parseInt(hex.slice(start,start+2),16)/255);
      u32(float.getUint32(0));
    }
    u16(2);
  });
  downloadPaletteBlob(new Blob([new Uint8Array(bytes)],{type:"application/octet-stream"}),v.name,"ase");
}


// Render the visible responsive mockup as editable SVG shapes and text.
function saveWebMockupSvg(root, name) {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  const bounds = root.getBoundingClientRect();
  svg.setAttribute("viewBox", `0 0 ${bounds.width} ${bounds.height}`);
  svg.setAttribute("width", bounds.width);
  svg.setAttribute("height", bounds.height);
  const ctx = document.createElement("canvas").getContext("2d", {willReadFrequently:true});
  function paint(color) {
    ctx.clearRect(0,0,1,1);
    ctx.fillStyle=color;
    ctx.fillRect(0,0,1,1);
    const [r,g,b,a]=ctx.getImageData(0,0,1,1).data;
    return {fill:`rgb(${r},${g},${b})`, "fill-opacity":a/255};
  }
  function add(tag, attrs, content) {
    const node=document.createElementNS(ns,tag);
    for(const [key,value] of Object.entries(attrs)) node.setAttribute(key,value);
    if(content) node.textContent=content;
    svg.append(node);
  }
  const range=document.createRange();
  for(const el of [root,...root.querySelectorAll("*")]) {
    const style=getComputedStyle(el), rect=el.getBoundingClientRect();
    if(!rect.width || !rect.height) continue;
    const x=rect.left-bounds.left, y=rect.top-bounds.top;
    const width=rect.width,height=rect.height,rx=parseFloat(style.borderTopLeftRadius)||0;
    if(style.backgroundColor!=="rgba(0, 0, 0, 0)") add("rect",{x,y,width,height,rx,...paint(style.backgroundColor)});
    const border=parseFloat(style.borderBottomWidth);
    if(border>0) {
      const ink=paint(style.borderBottomColor);
      if(parseFloat(style.borderTopWidth)>0) add("rect",{x:x+border/2,y:y+border/2,width:width-border,height:height-border,rx,fill:"none",stroke:ink.fill,"stroke-opacity":ink["fill-opacity"],"stroke-width":border});
      else add("rect",{x,y:y+height-border,width,height:border,...ink});
    }
    for(const child of el.childNodes) {
      if(child.nodeType!==Node.TEXT_NODE || !child.textContent.trim())continue;
      const lines=[];
      for(let i=0;i<child.length;i++){
        range.setStart(child,i);range.setEnd(child,i+1);
        const glyph=range.getBoundingClientRect();
        if(!glyph.width)continue;
        const last=lines.at(-1);
        if(last && Math.abs(last.top-glyph.top)<0.5)last.text+=child.data[i];
        else lines.push({left:glyph.left,top:glyph.top,height:glyph.height,text:child.data[i]});
      }
      for(const line of lines) add("text",{x:line.left-bounds.left,y:line.top-bounds.top+line.height/2,"dominant-baseline":"central","font-family":style.fontFamily,"font-weight":style.fontWeight,"font-size":style.fontSize,...paint(style.color)},line.text);
    }
  }
  downloadPaletteBlob(new Blob([new XMLSerializer().serializeToString(svg)],{type:"image/svg+xml"}), (name || "팔레트")+" - 웹 UI","svg");
}
