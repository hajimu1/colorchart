// Working poster settings live with the palette until a project snapshot is saved.
const posterDrafts = new WeakMap();
function posterDraft(p) {
  if (!posterDrafts.has(p)) posterDrafts.set(p, {label:"", project:""});
  return posterDrafts.get(p);
}

function posterSnapshot(p) {
  const selection = mockupStates.get(p)?.poster || defaultRoleIndices(p);
  const colors = p.colors.map(c => shown(c.hex));
  const roles = selection.map(i => colors[i] || colors[1]);
  return {templateVersion:3, name:p.name || "포스터", number:(p.id || "").match(/\d+$/)?.[0] || "01",
    colors, roles, extra:posterColors(p,shown)[4] || "", layout:posterLayout, photo:"", shade:0, position:"top"};
}

function validPoster(v) {
  const hex = h => typeof h === "string" && /^#[a-f0-9]{6}$/i.test(h);
  return v && typeof v.name === "string" && v.name.length <= 240 &&
    typeof v.number === "string" && /^\d{1,20}$/.test(v.number) && Array.isArray(v.colors) && v.colors.length >= 2 && v.colors.length <= 5 &&
    v.colors.every(hex) && Array.isArray(v.roles) && v.roles.length === 4 && v.roles.every(hex) &&
    (v.extra === "" || hex(v.extra)) && ["type","blocks","editorial"].includes(v.layout) &&
    ["top","middle","bottom"].includes(v.position) && Number.isInteger(v.shade) && v.shade >= 0 && v.shade <= 100 &&
    typeof v.photo === "string" && (v.photo === "" || (v.photo.length <= 1800000 && /^data:image\/jpeg;base64,[A-Za-z0-9+/]+=*$/.test(v.photo)));
}

function renderPoster(v) {
  const p = {id:v.number, collection:"graphic", colors:v.colors.map(hex => ({hex}))};
  const roles = Object.fromEntries(["base","title","sub","point"].map((key,i) => [key,v.roles[i]]));
  return posterMockupHTML(p,h=>h,roles,v.layout,v);
}

function posterTools(p) {
  const v = posterSnapshot(p), draft = posterDraft(p);
  const projects = favoriteFolders();
  const options = projects.map(item => `<option value="${esc(item.id)}" ${item.id===draft.project?"selected":""}>${esc(item.name)}</option>`).join("");
  const ratio = contrast(v.roles[0], v.roles[1]).toFixed(2);
  const info = textOn(v.roles[0],[...v.roles,v.extra].filter(Boolean).map(hex=>({hex})));
  const infoRatio = contrast(v.roles[0],info).toFixed(2);
  return `<div class="poster-tools poster-options">
    <p>바탕색 기준 대비 · 제목 ${ratio}:1 · 일정 글자 ${infoRatio}:1</p>
    </div>${renderPoster(v)}
    <div class="poster-tools poster-export"><button class="toggle" data-poster-action="svg">이 시안 SVG 저장</button>
    <button class="toggle" data-poster-action="ase">Adobe 견본 저장 (.ase)</button></div>
    <div class="poster-tools poster-save"><label>폴더 <select data-poster-project>${options}<option value="" ${draft.project==="new"?"selected":""}>새 폴더</option></select></label>
    <label>시안 이름 <input maxlength="80" placeholder="예: A안" value="${esc(draft.label)}" data-poster-label></label>
    <button class="toggle" data-poster-action="save">폴더에 시안 저장</button></div>`;
}

function posterVariantsHTML(project) {
  if (!project.variants?.length) return "";
  return '<h3>저장한 시안</h3><div class="poster-variants">'+project.variants.map((v,i)=>
    `<figure><figcaption>${esc(v.label)} · ${esc(v.name)}</figcaption>${renderPoster(v)}
    <button class="toggle" data-variant-export="${i}" data-project-id="${esc(project.id)}">SVG 저장</button>
    <button class="toggle" data-variant-remove="${i}" data-project-id="${esc(project.id)}">시안 삭제</button></figure>`).join("")+"</div>";
}

function savePosterSvg(svg, name) {
  const copy = svg.cloneNode(true);
  copy.setAttribute("width","600");
  copy.setAttribute("height","800");
  downloadPaletteBlob(new Blob([new XMLSerializer().serializeToString(copy)],{type:"image/svg+xml"}),name,"svg");
}

document.addEventListener("input", e => {
  const panel = e.target.closest(".mockup-panel");
  if (!panel) return;
  const p = panelPalette(panel), draft=posterDraft(p);
  if (e.target.matches("[data-poster-label]")) draft.label=e.target.value;
  if (e.target.matches("[data-poster-project]")) draft.project=e.target.value || "new";
});


document.addEventListener("click", e => {
  const button=e.target.closest("[data-poster-action],[data-variant-export],[data-variant-remove]");
  if (!button) return;
  if (button.dataset.projectId) {
    const project=projectById(button.dataset.projectId);
    if (!project) return;
    const i=Number(button.dataset.variantExport ?? button.dataset.variantRemove);
    if (button.hasAttribute("data-variant-export")) savePosterSvg(button.closest("figure").querySelector("svg"),project.variants[i].label);
    else if (confirm("이 시안을 삭제할까요?")) updateProject({...project,variants:project.variants.filter((_,j)=>j!==i)});
    return;
  }
  const panel=button.closest(".mockup-panel"), p=panelPalette(panel), draft=posterDraft(p);
  const v=posterSnapshot(p);
  switch(button.dataset.posterAction) {
    case "svg": savePosterSvg(panel.querySelector(".poster-mk"),draft.label || v.name);return;
    case "ase": saveAdobeSwatches(v);return;
    case "save": {
      let project=projectById(panel.querySelector("[data-poster-project]").value);
      const fresh=!project;
      if (fresh) {
        const name=prompt("새 폴더 이름",v.name);
        if (!name?.trim()) return;
        if(favoriteFolders().some(f=>f.name===name.trim().slice(0,80)))return toast("이미 있는 폴더입니다. 목록에서 선택해 주세요.");
        project={id:workspaceId("folder"),name:name.trim().slice(0,80),description:"",entries:[]};
      }
      const variants=project.variants || [];
      const label=draft.label.trim() || (variants.length<26 ? String.fromCharCode(65+variants.length)+"안" : "시안 "+(variants.length+1));
      const entries=p!==edDraft && BY_ID.has(p.id) && !project.entries.some(e=>e.id===p.id)
        ? [...project.entries,{id:p.id,note:""}] : project.entries;
      const next={...project,entries,variants:[...variants,{...v,label}]};
      const ok=updateProject(next);
      if (ok) {draft.project=project.id;draft.label="";panel.innerHTML=mockupContentHTML(p);toast(project.name+"에 "+label+" 저장");}
    }
  }
});
