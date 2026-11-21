// ============================================================
//  사용자 데이터 저장 — localStorage.
//  즐겨찾기(id 목록)를 다룬다.
//  file:// 에서도 동작 확인됨. 차단된 환경에선 메모리로만 동작(세션 한정).
// ============================================================

const FAV_KEY = "colorlib.favorites";


// 저장 흐름: 읽기 시도 → 실패하면 메모리 모드로 낮추고
// 이후 저장도 조용히 포기한다. 앱이 죽는 것보다 안 남는 게 낫다.
function store(key, label, fallback) {
  let persistent = true;
  let data = fallback;
  try {
    const raw = localStorage.getItem(key);
    if (raw) data = JSON.parse(raw);
  } catch (e) {
    persistent = false;
    console.warn(`[${label}] localStorage 사용 불가 — 이번 세션에만 유지됩니다.`, e.name);
  }
  return {
    data,                                    // 처음 읽어온 값
    save(value) {
      if (!persistent) return false;
      try { localStorage.setItem(key, JSON.stringify(value)); return true; }
      catch (e) {
        if (e.name !== "QuotaExceededError") persistent = false;
        console.warn(`[${label}] 저장 실패`, e.name);
      }
      return false;
    },
    isPersistent: () => persistent,
  };
}

/* Personal palettes, projects and favorites share one atomic localStorage write. */
const WORKSPACE_KEY = "colorlib.workspace.v1";
function folderFromProject(p) {
  return {id:p.id, name:p.name, description:p.description || "", variants:p.variants || [],
    entries:p.entries.map(e=>e.id), notes:Object.fromEntries(p.entries.filter(e=>e.note).map(e=>[e.id,e.note]))};
}

function absorbProjects(data) {
  if (!data.projects?.length) return data;
  const folders=[...(data.favoriteFolders || [])], favorites=new Set(data.favorites);
  for (const project of data.projects) {
    const f=folderFromProject(project);
    f.id=project.id.replace(/^project-/, "folder-");
    while (folders.some(old=>old.id===f.id)) f.id=workspaceId("folder");
    let suffix=2;
    while (folders.some(old=>old.name===f.name)) { f.name=project.name.slice(0,110)+" ("+suffix+")"; suffix++; }
    folders.push(f);
    f.entries.forEach(id=>favorites.add(id));
  }
  return {...data,projects:[],favoriteFolders:folders,favorites:[...favorites]};
}

const Workspace = (() => {
  const legacy = store(FAV_KEY, "즐겨찾기", []).data;
  const storage = store(WORKSPACE_KEY, "내 작업실", {
    palettes: [], projects: [], favorites: Array.isArray(legacy) ? legacy : []
  });
  let current = absorbProjects(storage.data);
  if(current!==storage.data) storage.save(current);
  return {
    get data() { return current; },
    save(next) {
      const favorites = new Set(next.favorites);
      next = {...next, favoriteFolders:(next.favoriteFolders || []).map(f => ({
        ...f, entries:f.entries.filter(id => favorites.has(id)),
        notes:Object.fromEntries(Object.entries(f.notes || {}).filter(([id])=>favorites.has(id) && f.entries.includes(id)))
      }))};
      if (!storage.save(next)) return false;
      current = next;
      return true;
    }
  };
})();

function workspaceId(prefix) {
  return prefix + "-" + Array.from(crypto.getRandomValues(new Uint32Array(4)),
    n => n.toString(16).padStart(8, "0")).join("");
}

function workspaceRecordKey(record) {
  return JSON.stringify(record, (_, value) =>
    value && typeof value === "object" && !Array.isArray(value)
      ? Object.fromEntries(Object.keys(value).sort().map(key => [key, value[key]]))
      : value);
}

function mergeWorkspace(current, incoming, replace) {
  incoming = absorbProjects(incoming);
  const next = replace ? {palettes: [], projects: [], favorites: []} : structuredClone(current);
  const paletteIds = new Map();
  for (const palette of incoming.palettes) {
    const existing = next.palettes.find(p => p.id === palette.id);
    const same = existing && workspaceRecordKey(existing) === workspaceRecordKey(palette);
    const id = existing && !same ? workspaceId("user") : palette.id;
    paletteIds.set(palette.id, id);
    if (!same) next.palettes.push({...palette, id});
  }
  next.favorites = [...new Set([...next.favorites, ...incoming.favorites.map(id => paletteIds.get(id) || id)])];
  next.favoriteFolders ||= [];
  for (const folder of incoming.favoriteFolders || []) {
    const incomingNotes=Object.entries(folder.notes || {}).map(([id,note])=>[paletteIds.get(id) || id,note]);
    const compatible=f=>!(f.description && folder.description && f.description!==folder.description)
      && incomingNotes.every(([id,note])=>!f.notes?.[id] || !note || f.notes[id]===note);
    let target = next.favoriteFolders.find(f => f.id === folder.id && f.name === folder.name && compatible(f));
    if (!target) target=next.favoriteFolders.find(f=>f.importedFrom===folder.id && f.name===folder.name && compatible(f));
    if (!target) {
      const conflict = next.favoriteFolders.some(f => f.id === folder.id);
      target = {...folder,id:conflict ? workspaceId("folder") : folder.id, ...(conflict ? {importedFrom:folder.id} : {}),entries:[],notes:{},variants:[]};
      next.favoriteFolders.push(target);
    }
    target.notes ||= {};
    target.variants ||= [];
    if(folder.description && !target.description)target.description=folder.description;
    // Keep repeated imports idempotent, including multiple identical snapshots.
    const available=target.variants.map(workspaceRecordKey);
    for(const v of folder.variants || []){
      const key=workspaceRecordKey(v),i=available.indexOf(key);
      if(i<0)target.variants.push(v);else available.splice(i,1);
    }
    for (const entry of folder.entries) {
      const id = paletteIds.get(entry) || entry;
      if (!target.entries.includes(id)) target.entries.push(id);
      if (folder.notes?.[entry] && !target.notes[id])target.notes[id]=folder.notes[entry];
    }
  }
  return next;
}

const Favorites = {
  has: id => Workspace.data.favorites.includes(id),
  all: () => [...Workspace.data.favorites],
  count: () => Workspace.data.favorites.length,
  toggle(id) {
    const favorites = Favorites.has(id) ? Favorites.all().filter(x => x !== id) : [...Favorites.all(), id];
    return Workspace.save({...Workspace.data, favorites});
  }
};
