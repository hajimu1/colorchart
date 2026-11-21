// ============================================================
//  Color Hunt 수집 팔레트 862개 (전부 4색)
//  - newcolor/*.js 원본에서 중복 제거 후 생성 (990개 → 862개)
//  - name / scheme / tags 는 HSL 기반 자동 생성값. 손으로 고쳐도 됨.
//  - scheme: tone-on-tone(톤온톤) | tone-in-tone(톤인톤) | complementary(완전 보색)
//  - ratio 합 = 100 / role: base(주조) · sub(보조) · point(강조=★·복사대상)
//  - 손으로 큐레이션한 조합은 palettes-data.js 에 있음 (이 파일과 분리 관리)
// ============================================================

const COLORHUNT_PALETTES = [

  { id: "ch-001", name: "가지색 그늘에 번진 민트", searchAliases: ["딥 퍼플 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#321E48", ratio: 40, role: "base" },
      { hex: "#43637E", ratio: 30, role: "sub" },
      { hex: "#65DCD5", ratio: 20, role: "sub" },
      { hex: "#D9FFF4", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","딥","블루"] },

  { id: "ch-002", name: "군청에서 옅은 물빛까지", searchAliases: ["블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#293681", ratio: 40, role: "base" },
      { hex: "#4274D9", ratio: 30, role: "sub" },
      { hex: "#95CCDD", ratio: 20, role: "sub" },
      { hex: "#D0E7E6", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤"] },

  { id: "ch-003", name: "코발트 잉크의 푸른 층", searchAliases: ["비비드 블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#112E81", ratio: 40, role: "base" },
      { hex: "#4647AE", ratio: 30, role: "sub" },
      { hex: "#4382DF", ratio: 20, role: "sub" },
      { hex: "#AACCD6", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-004", name: "버터빛 해변과 깊은 청록", searchAliases: ["페일 옐로우 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#FDEB9E", ratio: 40, role: "base" },
      { hex: "#7AE2CF", ratio: 30, role: "sub" },
      { hex: "#077A7D", ratio: 20, role: "sub" },
      { hex: "#06202B", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","파스텔","시안"] },

  { id: "ch-005", name: "밤하늘 끝의 상아빛", searchAliases: ["딥 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#111844", ratio: 40, role: "base" },
      { hex: "#4B5694", ratio: 30, role: "sub" },
      { hex: "#7288AE", ratio: 20, role: "sub" },
      { hex: "#EAE0CF", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-006", name: "파랑이 걷힌 자리", searchAliases: ["블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#2C5EAD", ratio: 40, role: "base" },
      { hex: "#1591DC", ratio: 30, role: "sub" },
      { hex: "#4BB8FA", ratio: 20, role: "sub" },
      { hex: "#C4E2F5", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤"] },

  { id: "ch-007", name: "남색 수면의 청록 반사", searchAliases: ["딥 블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#121358", ratio: 40, role: "base" },
      { hex: "#232F72", ratio: 30, role: "sub" },
      { hex: "#2F578A", ratio: 20, role: "sub" },
      { hex: "#36ADA3", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-008", name: "짙은 바다와 민트 포말", searchAliases: ["딥 블루 × 시안"], scheme: "tone-on-tone",
    colors: [
      { hex: "#093C5D", ratio: 40, role: "base" },
      { hex: "#3B7597", ratio: 30, role: "sub" },
      { hex: "#6FD1D7", ratio: 20, role: "sub" },
      { hex: "#5DF8D8", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-009", name: "청록 연못의 어린 잎", searchAliases: ["시안 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#35858E", ratio: 40, role: "base" },
      { hex: "#7DA78C", ratio: 30, role: "sub" },
      { hex: "#C2D099", ratio: 20, role: "sub" },
      { hex: "#E6EEC9", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","그린"] },

  { id: "ch-010", name: "민트 잎 아래 남색 그늘", searchAliases: ["페일 그린 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#AAFFC7", ratio: 40, role: "base" },
      { hex: "#67C090", ratio: 30, role: "sub" },
      { hex: "#215B63", ratio: 20, role: "sub" },
      { hex: "#124170", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔"] },

  { id: "ch-011", name: "전깃빛 파랑의 잔상", searchAliases: ["비비드 블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#2F2FE4", ratio: 40, role: "base" },
      { hex: "#162E93", ratio: 30, role: "sub" },
      { hex: "#1A1953", ratio: 20, role: "sub" },
      { hex: "#080616", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-012", name: "비취색 유리와 흰 종이", searchAliases: ["딥 시안 × 그린"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1F6F5F", ratio: 40, role: "base" },
      { hex: "#2FA084", ratio: 30, role: "sub" },
      { hex: "#6FCF97", ratio: 20, role: "sub" },
      { hex: "#EEEEEE", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "딥"] },

  { id: "ch-013", name: "솔숲 사이로 비친 옥빛", searchAliases: ["딥 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#091413", ratio: 40, role: "base" },
      { hex: "#285A48", ratio: 30, role: "sub" },
      { hex: "#408A71", ratio: 20, role: "sub" },
      { hex: "#B0E4CC", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","딥","무채색"] },

  { id: "ch-014", name: "남보라 밤과 연녹색 새벽", searchAliases: ["딥 블루 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#281C59", ratio: 40, role: "base" },
      { hex: "#4E8D9C", ratio: 30, role: "sub" },
      { hex: "#85C79A", ratio: 20, role: "sub" },
      { hex: "#EDF7BD", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","시안"] },

  { id: "ch-015", name: "노란 돛과 파란 물결", searchAliases: ["비비드 옐로우 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FFDE42", ratio: 40, role: "base" },
      { hex: "#53CBF3", ratio: 30, role: "sub" },
      { hex: "#5478FF", ratio: 20, role: "sub" },
      { hex: "#111FA2", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","비비드","시안"] },

  { id: "ch-016", name: "연두 들판 너머 남색 산", searchAliases: ["페일 그린 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#EEFABD", ratio: 40, role: "base" },
      { hex: "#A0D585", ratio: 30, role: "sub" },
      { hex: "#6984A9", ratio: 20, role: "sub" },
      { hex: "#263B6A", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔"] },

  { id: "ch-017", name: "청보라에서 벚꽃빛으로", searchAliases: ["비비드 블루 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#6367FF", ratio: 40, role: "base" },
      { hex: "#8494FF", ratio: 30, role: "sub" },
      { hex: "#C9BEFF", ratio: 20, role: "sub" },
      { hex: "#FFDBFD", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-018", name: "겨울 하늘과 흰 수평선", searchAliases: ["블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#355872", ratio: 40, role: "base" },
      { hex: "#7AAACE", ratio: 30, role: "sub" },
      { hex: "#9CD5FF", ratio: 20, role: "sub" },
      { hex: "#F7F8F0", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤"] },

  { id: "ch-019", name: "감청 바다의 모래톱", searchAliases: ["딥 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#0B2D72", ratio: 40, role: "base" },
      { hex: "#0992C2", ratio: 30, role: "sub" },
      { hex: "#0AC4E0", ratio: 20, role: "sub" },
      { hex: "#F6E7BC", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","시안"] },

  { id: "ch-020", name: "군청 바탕의 귤빛 신호", searchAliases: ["딥 블루 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#0D1A63", ratio: 40, role: "base" },
      { hex: "#1A2CA3", ratio: 30, role: "sub" },
      { hex: "#2845D6", ratio: 20, role: "sub" },
      { hex: "#F68048", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-021", name: "암청색 바탕의 밝은 딸기우유", searchAliases: ["딥 블루 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#15173D", ratio: 40, role: "base" },
      { hex: "#982598", ratio: 30, role: "sub" },
      { hex: "#E491C9", ratio: 20, role: "sub" },
      { hex: "#F1E9E9", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","핑크"] },

  { id: "ch-022", name: "청록 위에 백자 한 점", searchAliases: ["비비드 시안 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#09637E", ratio: 40, role: "base" },
      { hex: "#088395", ratio: 30, role: "sub" },
      { hex: "#7AB2B2", ratio: 20, role: "sub" },
      { hex: "#EBF4F6", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "비비드"] },

  { id: "ch-023", name: "잉크 네이비와 연필심, 아이보리", searchAliases: ["딥 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#0C2C55", ratio: 40, role: "base" },
      { hex: "#296374", ratio: 30, role: "sub" },
      { hex: "#629FAD", ratio: 20, role: "sub" },
      { hex: "#EDEDCE", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","시안"] },

  { id: "ch-024", name: "감청과 난초색", searchAliases: ["비비드 블루 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#0E21A0", ratio: 40, role: "base" },
      { hex: "#4D2FB2", ratio: 30, role: "sub" },
      { hex: "#B153D7", ratio: 20, role: "sub" },
      { hex: "#F375C2", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-025", name: "딥 틸에서 터쿼이즈까지", searchAliases: ["딥 시안 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#005461", ratio: 40, role: "base" },
      { hex: "#0C7779", ratio: 30, role: "sub" },
      { hex: "#249E94", ratio: 20, role: "sub" },
      { hex: "#3BC1A8", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "딥"] },

  { id: "ch-026", name: "먹색 위에 겹친 백자", searchAliases: ["딥 시안 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#061E29", ratio: 40, role: "base" },
      { hex: "#1D546D", ratio: 30, role: "sub" },
      { hex: "#5F9598", ratio: 20, role: "sub" },
      { hex: "#F3F4F4", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "딥"] },

  { id: "ch-027", name: "잉크 네이비와 물빛 사이", searchAliases: ["딥 블루 × 시안"], scheme: "tone-on-tone",
    colors: [
      { hex: "#0F2854", ratio: 40, role: "base" },
      { hex: "#1C4D8D", ratio: 30, role: "sub" },
      { hex: "#4988C4", ratio: 20, role: "sub" },
      { hex: "#BDE8F5", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-028", name: "딥 틸 곁의 백자", searchAliases: ["딥 시안 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#005461", ratio: 40, role: "base" },
      { hex: "#018790", ratio: 30, role: "sub" },
      { hex: "#00B7B5", ratio: 20, role: "sub" },
      { hex: "#F4F4F4", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "딥"] },

  { id: "ch-029", name: "짙은 청록의 빙하색 테두리", searchAliases: ["딥 블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1B3C53", ratio: 40, role: "base" },
      { hex: "#234C6A", ratio: 30, role: "sub" },
      { hex: "#456882", ratio: 20, role: "sub" },
      { hex: "#E3E3E3", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-030", name: "옥색 아래 짙은 남색", searchAliases: ["시안 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#6DC3BB", ratio: 40, role: "base" },
      { hex: "#393D7E", ratio: 30, role: "sub" },
      { hex: "#5459AC", ratio: 20, role: "sub" },
      { hex: "#F2AEBB", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","블루"] },

  { id: "ch-031", name: "짙은 보라 위에 연민트 한 점", searchAliases: ["블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#473472", ratio: 40, role: "base" },
      { hex: "#53629E", ratio: 30, role: "sub" },
      { hex: "#87BAC3", ratio: 20, role: "sub" },
      { hex: "#D6F4ED", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤"] },

  { id: "ch-032", name: "아이보리에서 먹색까지", searchAliases: ["페일 옐로우 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#EFECE3", ratio: 40, role: "base" },
      { hex: "#8FABD4", ratio: 30, role: "sub" },
      { hex: "#4A70A9", ratio: 20, role: "sub" },
      { hex: "#000000", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","파스텔","블루"] },

  { id: "ch-033", name: "잉크 네이비와 남색, 백자", searchAliases: ["딥 블루 × 시안"], scheme: "tone-on-tone",
    colors: [
      { hex: "#0C2B4E", ratio: 40, role: "base" },
      { hex: "#1A3D64", ratio: 30, role: "sub" },
      { hex: "#1D546C", ratio: 20, role: "sub" },
      { hex: "#F4F4F4", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-034", name: "솔잎색과 청자색", searchAliases: ["딥 시안 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#016B61", ratio: 40, role: "base" },
      { hex: "#70B2B2", ratio: 30, role: "sub" },
      { hex: "#9ECFD4", ratio: 20, role: "sub" },
      { hex: "#E5E9C5", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "딥"] },

  { id: "ch-035", name: "코발트 위에 겹친 연보라", searchAliases: ["블루 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#4E56C0", ratio: 40, role: "base" },
      { hex: "#9B5DE0", ratio: 30, role: "sub" },
      { hex: "#D78FEE", ratio: 20, role: "sub" },
      { hex: "#FDCFFA", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","퍼플"] },

  { id: "ch-036", name: "감청과 수레국화색 사이", searchAliases: ["뮤트 블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3C467B", ratio: 40, role: "base" },
      { hex: "#50589C", ratio: 30, role: "sub" },
      { hex: "#636CCB", ratio: 20, role: "sub" },
      { hex: "#6E8CFB", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "뮤트"] },

  { id: "ch-037", name: "짙은 청록 곁의 오트밀", searchAliases: ["딥 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#1B3C53", ratio: 40, role: "base" },
      { hex: "#234C6A", ratio: 30, role: "sub" },
      { hex: "#456882", ratio: 20, role: "sub" },
      { hex: "#D2C1B6", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-038", name: "연옥색의 남색 테두리", searchAliases: ["페일 그린 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#A8FBD3", ratio: 40, role: "base" },
      { hex: "#4FB7B3", ratio: 30, role: "sub" },
      { hex: "#637AB9", ratio: 20, role: "sub" },
      { hex: "#31326F", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","파스텔","시안"] },

  { id: "ch-039", name: "데님 바탕의 밝은 아이보리", searchAliases: ["블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#647FBC", ratio: 40, role: "base" },
      { hex: "#91ADC8", ratio: 30, role: "sub" },
      { hex: "#AED6CF", ratio: 20, role: "sub" },
      { hex: "#FAFDD6", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤"] },

  { id: "ch-040", name: "검은 종이에 비친 데님", searchAliases: ["블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#000000", ratio: 40, role: "base" },
      { hex: "#5682B1", ratio: 30, role: "sub" },
      { hex: "#739EC9", ratio: 20, role: "sub" },
      { hex: "#FFE8DB", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","무채색"] },

  { id: "ch-041", name: "연민트에서 청록까지", searchAliases: ["페일 그린 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#DDF4E7", ratio: 40, role: "base" },
      { hex: "#67C090", ratio: 30, role: "sub" },
      { hex: "#26667F", ratio: 20, role: "sub" },
      { hex: "#124170", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔"] },

  { id: "ch-042", name: "남색 위에 라벤더 한 점", searchAliases: ["비비드 블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1A2A80", ratio: 40, role: "base" },
      { hex: "#3B38A0", ratio: 30, role: "sub" },
      { hex: "#7A85C1", ratio: 20, role: "sub" },
      { hex: "#B2B0E8", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-043", name: "숲색과 유칼립투스, 연두", searchAliases: ["뮤트 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3E5F44", ratio: 40, role: "base" },
      { hex: "#5E936C", ratio: 30, role: "sub" },
      { hex: "#93DA97", ratio: 20, role: "sub" },
      { hex: "#E8FFD7", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "뮤트"] },

  { id: "ch-044", name: "청자색과 더스티블루", searchAliases: ["라이트 시안 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#9ECAD6", ratio: 40, role: "base" },
      { hex: "#748DAE", ratio: 30, role: "sub" },
      { hex: "#F5CBCB", ratio: 20, role: "sub" },
      { hex: "#FFEAEA", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","블루"] },

  { id: "ch-045", name: "옥색 위에 겹친 짙은 보라", searchAliases: ["뮤트 시안 × 퍼플"], scheme: "tone-in-tone",
    colors: [
      { hex: "#78B9B5", ratio: 40, role: "base" },
      { hex: "#0F828C", ratio: 30, role: "sub" },
      { hex: "#065084", ratio: 20, role: "sub" },
      { hex: "#320A6B", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "뮤트"] },

  { id: "ch-046", name: "검정과 우윳빛 민트", searchAliases: ["페일 그린 × 시안"], scheme: "tone-on-tone",
    colors: [
      { hex: "#000000", ratio: 40, role: "base" },
      { hex: "#CFFFE2", ratio: 30, role: "sub" },
      { hex: "#A2D5C6", ratio: 20, role: "sub" },
      { hex: "#F6F6F6", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","무채색"] },

  { id: "ch-047", name: "하늘색과 아이보리 사이", searchAliases: ["뮤트 시안 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#8DBCC7", ratio: 40, role: "base" },
      { hex: "#A4CCD9", ratio: 30, role: "sub" },
      { hex: "#C4E1E6", ratio: 20, role: "sub" },
      { hex: "#EBFFD8", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "뮤트"] },

  { id: "ch-048", name: "짙은 보라 곁의 청자색", searchAliases: ["퍼플 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#52357B", ratio: 40, role: "base" },
      { hex: "#5459AC", ratio: 30, role: "sub" },
      { hex: "#648DB3", ratio: 20, role: "sub" },
      { hex: "#B2D8CE", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","블루"] },

  { id: "ch-049", name: "잉크 네이비 바탕의 밝은 옥색", searchAliases: ["딥 블루 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#332D56", ratio: 40, role: "base" },
      { hex: "#4E6688", ratio: 30, role: "sub" },
      { hex: "#71C0BB", ratio: 20, role: "sub" },
      { hex: "#E3EEB2", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-050", name: "울트라마린과 청보라, 하늘색", searchAliases: ["비비드 퍼플 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#5409DA", ratio: 40, role: "base" },
      { hex: "#4E71FF", ratio: 30, role: "sub" },
      { hex: "#8DD8FF", ratio: 20, role: "sub" },
      { hex: "#BBFBFF", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","블루"] },

  { id: "ch-051", name: "백자의 먹색 테두리", searchAliases: ["페일 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F2F2F2", ratio: 40, role: "base" },
      { hex: "#EAE4D5", ratio: 30, role: "sub" },
      { hex: "#B6B09F", ratio: 20, role: "sub" },
      { hex: "#000000", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-052", name: "짙은 청록 위에 크림 한 점", searchAliases: ["딥 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#213448", ratio: 40, role: "base" },
      { hex: "#547792", ratio: 30, role: "sub" },
      { hex: "#94B4C1", ratio: 20, role: "sub" },
      { hex: "#ECEFCA", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-053", name: "코발트와 연옥색", searchAliases: ["블루 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#3A59D1", ratio: 40, role: "base" },
      { hex: "#3D90D7", ratio: 30, role: "sub" },
      { hex: "#7AC6D2", ratio: 20, role: "sub" },
      { hex: "#B5FCCD", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤"] },

  { id: "ch-054", name: "아이보리에서 청록까지", searchAliases: ["페일 오렌지 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#F2EFE7", ratio: 40, role: "base" },
      { hex: "#9ACBD0", ratio: 30, role: "sub" },
      { hex: "#48A6A7", ratio: 20, role: "sub" },
      { hex: "#006A71", ratio: 10, role: "point" }],
    tags: ["오렌지","쿨톤","파스텔","시안"] },

  { id: "ch-055", name: "아이보리 위에 겹친 청록", searchAliases: ["페일 오렌지 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#F5ECE0", ratio: 40, role: "base" },
      { hex: "#5F99AE", ratio: 30, role: "sub" },
      { hex: "#336D82", ratio: 20, role: "sub" },
      { hex: "#693382", ratio: 10, role: "point" }],
    tags: ["오렌지","쿨톤","파스텔","시안"] },

  { id: "ch-056", name: "감청과 청자색 사이", searchAliases: ["블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#205781", ratio: 40, role: "base" },
      { hex: "#4F959D", ratio: 30, role: "sub" },
      { hex: "#98D2C0", ratio: 20, role: "sub" },
      { hex: "#F6F8D5", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","시안"] },

  { id: "ch-057", name: "연청보라 곁의 연민트", searchAliases: ["뮤트 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#ADB2D4", ratio: 40, role: "base" },
      { hex: "#C7D9DD", ratio: 30, role: "sub" },
      { hex: "#D5E5D5", ratio: 20, role: "sub" },
      { hex: "#EEF1DA", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","뮤트","시안"] },

  { id: "ch-058", name: "남색의 연청보라 테두리", searchAliases: ["비비드 블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#211C84", ratio: 40, role: "base" },
      { hex: "#4D55CC", ratio: 30, role: "sub" },
      { hex: "#7A73D1", ratio: 20, role: "sub" },
      { hex: "#B5A8D5", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-059", name: "녹청색 바탕의 밝은 백자", searchAliases: ["시안 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#3D8D7A", ratio: 40, role: "base" },
      { hex: "#B3D8A8", ratio: 30, role: "sub" },
      { hex: "#FBFFE4", ratio: 20, role: "sub" },
      { hex: "#A3D1C6", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","그린"] },

  { id: "ch-060", name: "백자 위에 남색 한 점", searchAliases: ["라이트 블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFF2F2", ratio: 40, role: "base" },
      { hex: "#A9B5DF", ratio: 30, role: "sub" },
      { hex: "#7886C7", ratio: 20, role: "sub" },
      { hex: "#2D336B", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","파스텔","무채색"] },

  { id: "ch-061", name: "연녹색과 연두, 청록", searchAliases: ["라이트 그린 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#DDEB9D", ratio: 40, role: "base" },
      { hex: "#A0C878", ratio: 30, role: "sub" },
      { hex: "#27667B", ratio: 20, role: "sub" },
      { hex: "#143D60", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔"] },

  { id: "ch-062", name: "남색에서 아이보리까지", searchAliases: ["딥 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#27445D", ratio: 40, role: "base" },
      { hex: "#497D74", ratio: 30, role: "sub" },
      { hex: "#71BBB2", ratio: 20, role: "sub" },
      { hex: "#EFE9D5", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","시안"] },

  { id: "ch-063", name: "데님과 물빛", searchAliases: ["블루 × 시안"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3674B5", ratio: 40, role: "base" },
      { hex: "#578FCA", ratio: 30, role: "sub" },
      { hex: "#A1E3F9", ratio: 20, role: "sub" },
      { hex: "#D1F8EF", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤"] },

  { id: "ch-064", name: "백자 위에 겹친 짙은 자주", searchAliases: ["페일 핑크 × 퍼플"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F5F5F5", ratio: 40, role: "base" },
      { hex: "#F8E7F6", ratio: 30, role: "sub" },
      { hex: "#DD88CF", ratio: 20, role: "sub" },
      { hex: "#4B164C", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","파스텔","무채색"] },

  { id: "ch-065", name: "슬레이트와 상아색 사이", searchAliases: ["뮤트 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#5C7285", ratio: 40, role: "base" },
      { hex: "#818C78", ratio: 30, role: "sub" },
      { hex: "#A7B49E", ratio: 20, role: "sub" },
      { hex: "#E2E0C8", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","뮤트","무채색"] },

  { id: "ch-066", name: "아이보리 곁의 바다색", searchAliases: ["페일 오렌지 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#F2EFE7", ratio: 40, role: "base" },
      { hex: "#9ACBD0", ratio: 30, role: "sub" },
      { hex: "#48A6A7", ratio: 20, role: "sub" },
      { hex: "#2973B2", ratio: 10, role: "point" }],
    tags: ["오렌지","쿨톤","파스텔","시안"] },

  { id: "ch-067", name: "돌빛 바탕의 밝은 석회색", searchAliases: ["뮤트 그린 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#727D73", ratio: 40, role: "base" },
      { hex: "#AAB99A", ratio: 30, role: "sub" },
      { hex: "#D0DDD0", ratio: 20, role: "sub" },
      { hex: "#F0F0D7", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","뮤트","무채색"] },

  { id: "ch-068", name: "짙은 솔잎색의 상아색 테두리", searchAliases: ["딥 그린 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#123524", ratio: 40, role: "base" },
      { hex: "#3E7B27", ratio: 30, role: "sub" },
      { hex: "#85A947", ratio: 20, role: "sub" },
      { hex: "#EFE3C2", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "딥"] },

  { id: "ch-069", name: "감청에서 민트까지", searchAliases: ["블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#2E5077", ratio: 40, role: "base" },
      { hex: "#4DA1A9", ratio: 30, role: "sub" },
      { hex: "#79D7BE", ratio: 20, role: "sub" },
      { hex: "#F6F4F0", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","시안"] },

  { id: "ch-070", name: "짙은 청록과 연필심, 오트밀", searchAliases: ["딥 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#213555", ratio: 40, role: "base" },
      { hex: "#3E5879", ratio: 30, role: "sub" },
      { hex: "#D8C4B6", ratio: 20, role: "sub" },
      { hex: "#F5EFE7", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-071", name: "잉크 네이비 위에 연노랑 한 점", searchAliases: ["딥 블루 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#001A6E", ratio: 40, role: "base" },
      { hex: "#074799", ratio: 30, role: "sub" },
      { hex: "#009990", ratio: 20, role: "sub" },
      { hex: "#E1FFBB", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-072", name: "다크 올리브와 세이지", searchAliases: ["뮤트 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4B5945", ratio: 40, role: "base" },
      { hex: "#66785F", ratio: 30, role: "sub" },
      { hex: "#91AC8F", ratio: 20, role: "sub" },
      { hex: "#B2C9AD", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","뮤트","무채색"] },

  { id: "ch-073", name: "연보라 위에 겹친 코발트", searchAliases: ["페일 핑크 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FFCFEF", ratio: 40, role: "base" },
      { hex: "#0A97B0", ratio: 30, role: "sub" },
      { hex: "#0A5EB0", ratio: 20, role: "sub" },
      { hex: "#2A3335", ratio: 10, role: "point" }],
    tags: ["핑크","쿨톤","파스텔","시안"] },

  { id: "ch-074", name: "회청색과 백자 사이", searchAliases: ["라이트 시안 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#78B3CE", ratio: 40, role: "base" },
      { hex: "#C9E6F0", ratio: 30, role: "sub" },
      { hex: "#FBF8EF", ratio: 20, role: "sub" },
      { hex: "#F96E2A", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "파스텔"] },

  { id: "ch-075", name: "암청색 곁의 연노랑", searchAliases: ["딥 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#000B58", ratio: 40, role: "base" },
      { hex: "#003161", ratio: 30, role: "sub" },
      { hex: "#006A67", ratio: 20, role: "sub" },
      { hex: "#FFF4B7", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-076", name: "아이보리 아래 짙은 감청", searchAliases: ["페일 옐로우 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#F3F3E0", ratio: 40, role: "base" },
      { hex: "#133E87", ratio: 30, role: "sub" },
      { hex: "#608BC1", ratio: 20, role: "sub" },
      { hex: "#CBDCEB", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","파스텔","블루"] },

  { id: "ch-077", name: "빙하색의 데님 테두리", searchAliases: ["페일 그린 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#DFF2EB", ratio: 40, role: "base" },
      { hex: "#B9E5E8", ratio: 30, role: "sub" },
      { hex: "#7AB2D3", ratio: 20, role: "sub" },
      { hex: "#4A628A", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","파스텔","시안"] },

  { id: "ch-078", name: "짙은 자주에서 라일락까지", searchAliases: ["딥 퍼플 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3B1E54", ratio: 40, role: "base" },
      { hex: "#9B7EBD", ratio: 30, role: "sub" },
      { hex: "#D4BEE4", ratio: 20, role: "sub" },
      { hex: "#EEEEEE", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥"] },

  { id: "ch-079", name: "짙은 보라와 아이리스, 라벤더", searchAliases: ["블루 × 퍼플"], scheme: "tone-on-tone",
    colors: [
      { hex: "#433878", ratio: 40, role: "base" },
      { hex: "#7E60BF", ratio: 30, role: "sub" },
      { hex: "#E4B1F0", ratio: 20, role: "sub" },
      { hex: "#FFE1FF", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤"] },

  { id: "ch-080", name: "암청색 위에 상아색 한 점", searchAliases: ["딥 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#001F3F", ratio: 40, role: "base" },
      { hex: "#3A6D8C", ratio: 30, role: "sub" },
      { hex: "#6A9AB0", ratio: 20, role: "sub" },
      { hex: "#EAD8B1", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-081", name: "연보라와 등꽃색", searchAliases: ["페일 퍼플 × 블루"], scheme: "tone-on-tone",
    colors: [
      { hex: "#E5D9F2", ratio: 40, role: "base" },
      { hex: "#F5EFFF", ratio: 30, role: "sub" },
      { hex: "#CDC1FF", ratio: 20, role: "sub" },
      { hex: "#A594F9", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","파스텔","무채색"] },

  { id: "ch-082", name: "청보라 위에 겹친 시안", searchAliases: ["비비드 블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#6439FF", ratio: 40, role: "base" },
      { hex: "#4F75FF", ratio: 30, role: "sub" },
      { hex: "#00CCDD", ratio: 20, role: "sub" },
      { hex: "#7CF5FF", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-083", name: "울트라마린과 백자 사이", searchAliases: ["비비드 블루 × 퍼플"], scheme: "tone-in-tone",
    colors: [
      { hex: "#1230AE", ratio: 40, role: "base" },
      { hex: "#6C48C5", ratio: 30, role: "sub" },
      { hex: "#C68FE6", ratio: 20, role: "sub" },
      { hex: "#FFF7F7", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-084", name: "짙은 솔잎색 곁의 석회색", searchAliases: ["딥 시안 × 그린"], scheme: "tone-on-tone",
    colors: [
      { hex: "#16423C", ratio: 40, role: "base" },
      { hex: "#6A9C89", ratio: 30, role: "sub" },
      { hex: "#C4DAD2", ratio: 20, role: "sub" },
      { hex: "#E9EFEC", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","딥","그린"] },

  { id: "ch-085", name: "잉크 네이비 바탕의 밝은 민트", searchAliases: ["비비드 블루 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#161D6F", ratio: 40, role: "base" },
      { hex: "#0B2F9F", ratio: 30, role: "sub" },
      { hex: "#98DED9", ratio: 20, role: "sub" },
      { hex: "#C7FFD8", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-086", name: "백자의 차콜 테두리", searchAliases: ["시안 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F5F5F5", ratio: 40, role: "base" },
      { hex: "#48CFCB", ratio: 30, role: "sub" },
      { hex: "#229799", ratio: 20, role: "sub" },
      { hex: "#424242", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","무채색"] },

  { id: "ch-087", name: "짙은 보라 위에 백자 한 점", searchAliases: ["비비드 퍼플 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#3A1078", ratio: 40, role: "base" },
      { hex: "#4E31AA", ratio: 30, role: "sub" },
      { hex: "#3795BD", ratio: 20, role: "sub" },
      { hex: "#F7F7F8", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","블루"] },

  { id: "ch-088", name: "데님에서 상아색까지", searchAliases: ["뮤트 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#6482AD", ratio: 40, role: "base" },
      { hex: "#7FA1C3", ratio: 30, role: "sub" },
      { hex: "#E2DAD6", ratio: 20, role: "sub" },
      { hex: "#F5EDED", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "뮤트"] },

  { id: "ch-089", name: "암청색과 남색, 빙하색", searchAliases: ["딥 블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#201E43", ratio: 40, role: "base" },
      { hex: "#134B70", ratio: 30, role: "sub" },
      { hex: "#508C9B", ratio: 20, role: "sub" },
      { hex: "#EEEEEE", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-090", name: "민트와 울트라마린", searchAliases: ["비비드 시안 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#77E4C8", ratio: 40, role: "base" },
      { hex: "#36C2CE", ratio: 30, role: "sub" },
      { hex: "#478CCF", ratio: 20, role: "sub" },
      { hex: "#4535C1", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "비비드"] },

  { id: "ch-091", name: "암청색 위에 겹친 백자", searchAliases: ["딥 블루 × 시안"], scheme: "tone-on-tone",
    colors: [
      { hex: "#071952", ratio: 40, role: "base" },
      { hex: "#088395", ratio: 30, role: "sub" },
      { hex: "#37B7C3", ratio: 20, role: "sub" },
      { hex: "#EBF4F6", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","시안"] },

  { id: "ch-092", name: "짙은 보라와 시안 사이", searchAliases: ["블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#402E7A", ratio: 40, role: "base" },
      { hex: "#4C3BCF", ratio: 30, role: "sub" },
      { hex: "#4B70F5", ratio: 20, role: "sub" },
      { hex: "#3DC2EC", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤"] },

  { id: "ch-093", name: "제비꽃 곁의 라일락", searchAliases: ["뮤트 블루 × 퍼플"], scheme: "tone-in-tone",
    colors: [
      { hex: "#5A639C", ratio: 40, role: "base" },
      { hex: "#7776B3", ratio: 30, role: "sub" },
      { hex: "#9B86BD", ratio: 20, role: "sub" },
      { hex: "#E2BBE9", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "뮤트"] },

  { id: "ch-094", name: "데님의 연옥색 테두리", searchAliases: ["뮤트 시안 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#538392", ratio: 40, role: "base" },
      { hex: "#6295A2", ratio: 30, role: "sub" },
      { hex: "#80B9AD", ratio: 20, role: "sub" },
      { hex: "#B3E2A7", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "뮤트"] },

  { id: "ch-095", name: "감청에서 얼음 하늘까지", searchAliases: ["비비드 블루 × 시안"], scheme: "tone-on-tone",
    colors: [
      { hex: "#050C9C", ratio: 40, role: "base" },
      { hex: "#3572EF", ratio: 30, role: "sub" },
      { hex: "#3ABEF9", ratio: 20, role: "sub" },
      { hex: "#A7E6FF", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-096", name: "청보라 바탕의 밝은 석회색", searchAliases: ["비비드 블루 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#615EFC", ratio: 40, role: "base" },
      { hex: "#7E8EF1", ratio: 30, role: "sub" },
      { hex: "#D1D8C5", ratio: 20, role: "sub" },
      { hex: "#EEEEEE", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-097", name: "암청색과 딥 틸, 슬레이트", searchAliases: ["딥 퍼플 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#240750", ratio: 40, role: "base" },
      { hex: "#344C64", ratio: 30, role: "sub" },
      { hex: "#577B8D", ratio: 20, role: "sub" },
      { hex: "#57A6A1", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","딥","블루"] },

  { id: "ch-098", name: "솔잎색과 연두", searchAliases: ["딥 시안 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#006769", ratio: 40, role: "base" },
      { hex: "#40A578", ratio: 30, role: "sub" },
      { hex: "#9DDE8B", ratio: 20, role: "sub" },
      { hex: "#E6FF94", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","딥","그린"] },

  { id: "ch-099", name: "연민트 위에 바다색 한 점", searchAliases: ["페일 시안 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#CDE8E5", ratio: 40, role: "base" },
      { hex: "#EEF7FF", ratio: 30, role: "sub" },
      { hex: "#7AB2B2", ratio: 20, role: "sub" },
      { hex: "#4D869C", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","무채색"] },

  { id: "ch-100", name: "군청 위에 겹친 난초색", searchAliases: ["비비드 블루 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#10439F", ratio: 40, role: "base" },
      { hex: "#874CCC", ratio: 30, role: "sub" },
      { hex: "#C65BCF", ratio: 20, role: "sub" },
      { hex: "#F27BBD", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","비비드","퍼플"] },

  { id: "ch-101", name: "암청색과 청자색 사이", searchAliases: ["딥 퍼플 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#1E0342", ratio: 40, role: "base" },
      { hex: "#0E46A3", ratio: 30, role: "sub" },
      { hex: "#9AC8CD", ratio: 20, role: "sub" },
      { hex: "#E1F7F5", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","딥","블루"] },

  { id: "ch-102", name: "남색 곁의 민트", searchAliases: ["딥 블루 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#074173", ratio: 40, role: "base" },
      { hex: "#1679AB", ratio: 30, role: "sub" },
      { hex: "#5DEBD7", ratio: 20, role: "sub" },
      { hex: "#C5FF95", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-103", name: "잉크 네이비 바탕의 밝은 하늘색", searchAliases: ["비비드 블루 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#1C1678", ratio: 40, role: "base" },
      { hex: "#8576FF", ratio: 30, role: "sub" },
      { hex: "#7BC9FF", ratio: 20, role: "sub" },
      { hex: "#A3FFD6", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-104", name: "짙은 청록에서 백자까지", searchAliases: ["딥 시안 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#003C43", ratio: 40, role: "base" },
      { hex: "#135D66", ratio: 30, role: "sub" },
      { hex: "#77B0AA", ratio: 20, role: "sub" },
      { hex: "#E3FEF7", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "딥"] },

  { id: "ch-105", name: "백자와 수레국화색, 청보라", searchAliases: ["라이트 블루 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FFF7FC", ratio: 40, role: "base" },
      { hex: "#8B93FF", ratio: 30, role: "sub" },
      { hex: "#5755FE", ratio: 20, role: "sub" },
      { hex: "#FF71CD", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","파스텔","무채색"] },

  { id: "ch-106", name: "데님과 피스타치오", searchAliases: ["뮤트 블루 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#496989", ratio: 40, role: "base" },
      { hex: "#58A399", ratio: 30, role: "sub" },
      { hex: "#A8CD9F", ratio: 20, role: "sub" },
      { hex: "#E2F4C5", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","뮤트","시안"] },

  { id: "ch-107", name: "청보라의 빙하색 테두리", searchAliases: ["비비드 블루 × 시안"], scheme: "tone-on-tone",
    colors: [
      { hex: "#5356FF", ratio: 40, role: "base" },
      { hex: "#378CE7", ratio: 30, role: "sub" },
      { hex: "#67C6E3", ratio: 20, role: "sub" },
      { hex: "#DFF5FF", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-108", name: "차콜 위에 유칼립투스 한 점", searchAliases: ["딥 블루 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#35374B", ratio: 40, role: "base" },
      { hex: "#344955", ratio: 30, role: "sub" },
      { hex: "#50727B", ratio: 20, role: "sub" },
      { hex: "#78A083", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-109", name: "암청색 위에 겹친 연청보라", searchAliases: ["딥 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#201658", ratio: 40, role: "base" },
      { hex: "#1D24CA", ratio: 30, role: "sub" },
      { hex: "#98ABEE", ratio: 20, role: "sub" },
      { hex: "#F9E8C9", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-110", name: "감청 곁의 청자색", searchAliases: ["블루 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#265073", ratio: 40, role: "base" },
      { hex: "#2D9596", ratio: 30, role: "sub" },
      { hex: "#9AD0C2", ratio: 20, role: "sub" },
      { hex: "#F1FADA", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","시안"] },

  { id: "ch-111", name: "암청색에서 등꽃색까지", searchAliases: ["딥 블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#070F2B", ratio: 40, role: "base" },
      { hex: "#1B1A55", ratio: 30, role: "sub" },
      { hex: "#535C91", ratio: 20, role: "sub" },
      { hex: "#9290C3", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-112", name: "잉크 네이비와 연두 사이", searchAliases: ["딥 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#211C6A", ratio: 40, role: "base" },
      { hex: "#59B4C3", ratio: 30, role: "sub" },
      { hex: "#74E291", ratio: 20, role: "sub" },
      { hex: "#EFF396", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","시안"] },

  { id: "ch-113", name: "수레국화색 바탕의 밝은 백자", searchAliases: ["비비드 블루 × 시안"], scheme: "tone-on-tone",
    colors: [
      { hex: "#40A2E3", ratio: 40, role: "base" },
      { hex: "#FFF6E9", ratio: 30, role: "sub" },
      { hex: "#BBE2EC", ratio: 20, role: "sub" },
      { hex: "#0D9276", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","비비드","무채색"] },

  { id: "ch-114", name: "잉크 네이비의 연분홍 테두리", searchAliases: ["딥 블루 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#1F2544", ratio: 40, role: "base" },
      { hex: "#474F7A", ratio: 30, role: "sub" },
      { hex: "#81689D", ratio: 20, role: "sub" },
      { hex: "#FFD0EC", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-115", name: "남보라와 제비꽃, 옥색", searchAliases: ["비비드 퍼플 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#6C22A6", ratio: 40, role: "base" },
      { hex: "#6962AD", ratio: 30, role: "sub" },
      { hex: "#83C0C1", ratio: 20, role: "sub" },
      { hex: "#96E9C6", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","블루"] },

  { id: "ch-116", name: "검은 부표와 파란 물결", searchAliases: ["비비드 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#000000", ratio: 40, role: "base" },
      { hex: "#0B60B0", ratio: 30, role: "sub" },
      { hex: "#40A2D8", ratio: 20, role: "sub" },
      { hex: "#F0EDCF", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","비비드","무채색"] },

  { id: "ch-117", name: "잉크 네이비 위에 레몬 한 점", searchAliases: ["딥 퍼플 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#332941", ratio: 40, role: "base" },
      { hex: "#3B3486", ratio: 30, role: "sub" },
      { hex: "#864AF9", ratio: 20, role: "sub" },
      { hex: "#F8E559", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","딥","블루"] },

  { id: "ch-118", name: "빙하색에서 암청색까지", searchAliases: ["페일 시안 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#DCF2F1", ratio: 40, role: "base" },
      { hex: "#7FC7D9", ratio: 30, role: "sub" },
      { hex: "#365486", ratio: 20, role: "sub" },
      { hex: "#0F1035", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "파스텔"] },

  { id: "ch-119", name: "잉크 네이비와 살구", searchAliases: ["딥 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#2D3250", ratio: 40, role: "base" },
      { hex: "#424769", ratio: 30, role: "sub" },
      { hex: "#7077A1", ratio: 20, role: "sub" },
      { hex: "#F6B17A", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-120", name: "백자 위에 겹친 청록", searchAliases: ["페일 블루 × 시안"], scheme: "tone-on-tone",
    colors: [
      { hex: "#EEF5FF", ratio: 40, role: "base" },
      { hex: "#B4D4FF", ratio: 30, role: "sub" },
      { hex: "#86B6F6", ratio: 20, role: "sub" },
      { hex: "#176B87", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","파스텔","무채색"] },

  { id: "ch-121", name: "잉크 네이비와 연어색 사이", searchAliases: ["딥 시안 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#0F3040", ratio: 40, role: "base" },
      { hex: "#464858", ratio: 30, role: "sub" },
      { hex: "#A56F63", ratio: 20, role: "sub" },
      { hex: "#D99B7F", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","딥","무채색"] },

  { id: "ch-122", name: "버건디 곁의 오렌지", searchAliases: ["딥 레드 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#60241E", ratio: 40, role: "base" },
      { hex: "#95271D", ratio: 30, role: "sub" },
      { hex: "#B34A44", ratio: 20, role: "sub" },
      { hex: "#E77B49", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥"] },

  { id: "ch-123", name: "아이보리의 진홍 테두리", searchAliases: ["페일 옐로우 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F5F5DC", ratio: 40, role: "base" },
      { hex: "#FBC02D", ratio: 30, role: "sub" },
      { hex: "#FF8F00", ratio: 20, role: "sub" },
      { hex: "#C62828", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","오렌지"] },

  { id: "ch-124", name: "먹색 바탕의 밝은 라벤더", searchAliases: ["딥 시안 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#0B0909", ratio: 40, role: "base" },
      { hex: "#2E4540", ratio: 30, role: "sub" },
      { hex: "#408175", ratio: 20, role: "sub" },
      { hex: "#B5B9F0", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","딥","무채색"] },

  { id: "ch-125", name: "버건디 위에 크림 한 점", searchAliases: ["딥 핑크 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#5E244E", ratio: 40, role: "base" },
      { hex: "#AA1C41", ratio: 30, role: "sub" },
      { hex: "#E68457", ratio: 20, role: "sub" },
      { hex: "#FFE8B4", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥"] },

  { id: "ch-126", name: "유칼립투스에서 아이보리까지", searchAliases: ["뮤트 시안 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#659287", ratio: 40, role: "base" },
      { hex: "#88BDA4", ratio: 30, role: "sub" },
      { hex: "#B1D3B9", ratio: 20, role: "sub" },
      { hex: "#E6F2DD", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","뮤트","그린"] },

  { id: "ch-127", name: "짙은 솔잎색과 녹청색, 민트", searchAliases: ["딥 시안 × 그린"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1A312C", ratio: 40, role: "base" },
      { hex: "#428475", ratio: 30, role: "sub" },
      { hex: "#89D7B7", ratio: 20, role: "sub" },
      { hex: "#FFF4E1", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "딥"] },

  { id: "ch-128", name: "세이지와 숲색", searchAliases: ["뮤트 그린 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#9CB080", ratio: 40, role: "base" },
      { hex: "#618764", ratio: 30, role: "sub" },
      { hex: "#2B5748", ratio: 20, role: "sub" },
      { hex: "#273338", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "뮤트"] },

  { id: "ch-129", name: "남보라 위에 겹친 산딸기색", searchAliases: ["블루 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#443199", ratio: 40, role: "base" },
      { hex: "#792CA2", ratio: 30, role: "sub" },
      { hex: "#C13383", ratio: 20, role: "sub" },
      { hex: "#E05454", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","퍼플"] },

  { id: "ch-130", name: "가지색과 청자색 사이", searchAliases: ["뮤트 블루 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#4A4466", ratio: 40, role: "base" },
      { hex: "#6EADBC", ratio: 30, role: "sub" },
      { hex: "#9FCBAD", ratio: 20, role: "sub" },
      { hex: "#F1F7D4", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","뮤트","시안"] },

  { id: "ch-131", name: "진분홍 곁의 백자", searchAliases: ["비비드 핑크 × 레드"], scheme: "tone-on-tone",
    colors: [
      { hex: "#D6336C", ratio: 40, role: "base" },
      { hex: "#FF4081", ratio: 30, role: "sub" },
      { hex: "#FFB6C1", ratio: 20, role: "sub" },
      { hex: "#FFF5F8", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "비비드"] },

  { id: "ch-132", name: "짙은 보라와 보라, 자홍", searchAliases: ["블루 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#462C7D", ratio: 40, role: "base" },
      { hex: "#831C91", ratio: 30, role: "sub" },
      { hex: "#D552A3", ratio: 20, role: "sub" },
      { hex: "#FF70BF", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","퍼플"] },

  { id: "ch-133", name: "연어색의 연노랑 테두리", searchAliases: ["라이트 레드 × 옐로우"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FF9A86", ratio: 40, role: "base" },
      { hex: "#FFB399", ratio: 30, role: "sub" },
      { hex: "#FFD6A6", ratio: 20, role: "sub" },
      { hex: "#FFF0BE", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","오렌지"] },

  { id: "ch-134", name: "아이보리 아래 짙은 짙은 보라", searchAliases: ["페일 오렌지 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#FFF1D3", ratio: 40, role: "base" },
      { hex: "#FFB090", ratio: 30, role: "sub" },
      { hex: "#CA5995", ratio: 20, role: "sub" },
      { hex: "#5D1C6A", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-135", name: "아이보리 위에 다홍 한 점", searchAliases: ["페일 오렌지 × 레드"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFEDCE", ratio: 40, role: "base" },
      { hex: "#FFC193", ratio: 30, role: "sub" },
      { hex: "#FF8383", ratio: 20, role: "sub" },
      { hex: "#FF3737", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-136", name: "암청색과 딸기우유", searchAliases: ["딥 블루 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#021A54", ratio: 40, role: "base" },
      { hex: "#FF85BB", ratio: 30, role: "sub" },
      { hex: "#FFCEE3", ratio: 20, role: "sub" },
      { hex: "#F5F5F5", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","핑크"] },

  { id: "ch-137", name: "세이지에서 상아색까지", searchAliases: ["뮤트 그린 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#9AB17A", ratio: 40, role: "base" },
      { hex: "#C3CC9B", ratio: 30, role: "sub" },
      { hex: "#E4DFB5", ratio: 20, role: "sub" },
      { hex: "#FBE8CE", ratio: 10, role: "point" }],
    tags: ["그린", "웜톤", "뮤트"] },

  { id: "ch-138", name: "아이보리 위에 겹친 등꽃색", searchAliases: ["페일 오렌지 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#F2EAE0", ratio: 40, role: "base" },
      { hex: "#B4D3D9", ratio: 30, role: "sub" },
      { hex: "#BDA6CE", ratio: 20, role: "sub" },
      { hex: "#9B8EC7", ratio: 10, role: "point" }],
    tags: ["오렌지","쿨톤","파스텔","시안"] },

  { id: "ch-139", name: "잉크 네이비와 귤색 사이", searchAliases: ["딥 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#003049", ratio: 40, role: "base" },
      { hex: "#D62828", ratio: 30, role: "sub" },
      { hex: "#F77F00", ratio: 20, role: "sub" },
      { hex: "#FCBF49", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","딥","레드"] },

  { id: "ch-140", name: "검붉은색 곁의 상아색", searchAliases: ["딥 레드 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#5E0006", ratio: 40, role: "base" },
      { hex: "#9B0F06", ratio: 30, role: "sub" },
      { hex: "#D53E0F", ratio: 20, role: "sub" },
      { hex: "#EED9B9", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥"] },

  { id: "ch-141", name: "남보라 극장의 귤빛 조명", searchAliases: ["비비드 블루 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#1A05A2", ratio: 40, role: "base" },
      { hex: "#8F0177", ratio: 30, role: "sub" },
      { hex: "#DE1A58", ratio: 20, role: "sub" },
      { hex: "#F67D31", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","비비드","핑크"] },

  { id: "ch-142", name: "짙은 솔잎색 바탕의 밝은 상아색", searchAliases: ["딥 옐로우 × 그린"], scheme: "tone-on-tone",
    colors: [
      { hex: "#41431B", ratio: 40, role: "base" },
      { hex: "#AEB784", ratio: 30, role: "sub" },
      { hex: "#E3DBBB", ratio: 20, role: "sub" },
      { hex: "#F8F3E1", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","딥","그린"] },

  { id: "ch-143", name: "주홍의 크림 테두리", searchAliases: ["비비드 레드 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#EB4C4C", ratio: 40, role: "base" },
      { hex: "#FF7070", ratio: 30, role: "sub" },
      { hex: "#FFA6A6", ratio: 20, role: "sub" },
      { hex: "#FFEDC7", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "비비드"] },

  { id: "ch-144", name: "연노랑과 살구, 연어색", searchAliases: ["페일 옐로우 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FFF7CD", ratio: 40, role: "base" },
      { hex: "#FDC3A1", ratio: 30, role: "sub" },
      { hex: "#FB9B8F", ratio: 20, role: "sub" },
      { hex: "#F57799", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","오렌지"] },

  { id: "ch-145", name: "다홍과 연노랑", searchAliases: ["비비드 레드 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FF5B5B", ratio: 40, role: "base" },
      { hex: "#F0FFC3", ratio: 30, role: "sub" },
      { hex: "#9CCFFF", ratio: 20, role: "sub" },
      { hex: "#685AFF", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","그린"] },

  { id: "ch-146", name: "먹색에서 진홍까지", searchAliases: ["딥 레드 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#280905", ratio: 40, role: "base" },
      { hex: "#740A03", ratio: 30, role: "sub" },
      { hex: "#C3110C", ratio: 20, role: "sub" },
      { hex: "#E6501B", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥"] },

  { id: "ch-147", name: "가지색 위에 형광 연두 한 점", searchAliases: ["딥 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#362F4F", ratio: 40, role: "base" },
      { hex: "#5B23FF", ratio: 30, role: "sub" },
      { hex: "#008BFF", ratio: 20, role: "sub" },
      { hex: "#E4FF30", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-148", name: "빨강 위에 겹친 암청색", searchAliases: ["비비드 레드 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#F63049", ratio: 40, role: "base" },
      { hex: "#D02752", ratio: 30, role: "sub" },
      { hex: "#8A244B", ratio: 20, role: "sub" },
      { hex: "#111F35", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","핑크"] },

  { id: "ch-149", name: "연필심과 복숭아색 사이", searchAliases: ["뮤트 퍼플 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#574964", ratio: 40, role: "base" },
      { hex: "#9F8383", ratio: 30, role: "sub" },
      { hex: "#C8AAAA", ratio: 20, role: "sub" },
      { hex: "#FFDAB3", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","뮤트","레드"] },

  { id: "ch-150", name: "다홍 곁의 레몬", searchAliases: ["비비드 레드 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FA5C5C", ratio: 40, role: "base" },
      { hex: "#FD8A6B", ratio: 30, role: "sub" },
      { hex: "#FEC288", ratio: 20, role: "sub" },
      { hex: "#FBEF76", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "비비드"] },

  { id: "ch-151", name: "솔잎색 바탕의 밝은 밀짚색", searchAliases: ["뮤트 시안 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#36656B", ratio: 40, role: "base" },
      { hex: "#75B06F", ratio: 30, role: "sub" },
      { hex: "#DAD887", ratio: 20, role: "sub" },
      { hex: "#F0F8A4", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","뮤트","그린"] },

  { id: "ch-152", name: "아이보리에서 녹청색까지", searchAliases: ["페일 그린 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#EBF4DD", ratio: 40, role: "base" },
      { hex: "#90AB8B", ratio: 30, role: "sub" },
      { hex: "#5A7863", ratio: 20, role: "sub" },
      { hex: "#3B4953", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔"] },

  { id: "ch-153", name: "짙은 청록과 데님, 은회색", searchAliases: ["딥 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#213448", ratio: 40, role: "base" },
      { hex: "#547792", ratio: 30, role: "sub" },
      { hex: "#94B4C1", ratio: 20, role: "sub" },
      { hex: "#EAE0CF", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-154", name: "흑단과 풀색", searchAliases: ["뮤트 그린 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#1B211A", ratio: 40, role: "base" },
      { hex: "#628141", ratio: 30, role: "sub" },
      { hex: "#8BAE66", ratio: 20, role: "sub" },
      { hex: "#EBD5AB", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","뮤트","무채색"] },

  { id: "ch-155", name: "백자의 딸기우유 테두리", searchAliases: ["페일 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FCF8F8", ratio: 40, role: "base" },
      { hex: "#FBEFEF", ratio: 30, role: "sub" },
      { hex: "#F9DFDF", ratio: 20, role: "sub" },
      { hex: "#F5AFAF", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","무채색"] },

  { id: "ch-156", name: "짙은 보라 위에 꿀빛 한 점", searchAliases: ["비비드 퍼플 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#360185", ratio: 40, role: "base" },
      { hex: "#8F0177", ratio: 30, role: "sub" },
      { hex: "#DE1A58", ratio: 20, role: "sub" },
      { hex: "#F4B342", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","비비드","핑크"] },

  { id: "ch-157", name: "딸기우유 위에 겹친 보라", searchAliases: ["라이트 레드 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F29AAE", ratio: 40, role: "base" },
      { hex: "#C47BE4", ratio: 30, role: "sub" },
      { hex: "#7132CA", ratio: 20, role: "sub" },
      { hex: "#301CA0", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","퍼플"] },

  { id: "ch-158", name: "아이보리와 돌빛 사이", searchAliases: ["페일 옐로우 × 그린"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F1F3E0", ratio: 40, role: "base" },
      { hex: "#D2DCB6", ratio: 30, role: "sub" },
      { hex: "#A1BC98", ratio: 20, role: "sub" },
      { hex: "#778873", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","그린"] },

  { id: "ch-159", name: "백자 곁의 와인", searchAliases: ["페일 레드 × 핑크"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FCF5EE", ratio: 40, role: "base" },
      { hex: "#FFC4C4", ratio: 30, role: "sub" },
      { hex: "#EE6983", ratio: 20, role: "sub" },
      { hex: "#850E35", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","무채색"] },

  { id: "ch-160", name: "백자의 모래색 테두리", searchAliases: ["페일 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F9F8F6", ratio: 40, role: "base" },
      { hex: "#EFE9E3", ratio: 30, role: "sub" },
      { hex: "#D9CFC7", ratio: 20, role: "sub" },
      { hex: "#C9B59C", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-161", name: "차콜 바탕의 밝은 아이보리", searchAliases: ["딥 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#313647", ratio: 40, role: "base" },
      { hex: "#435663", ratio: 30, role: "sub" },
      { hex: "#A3B087", ratio: 20, role: "sub" },
      { hex: "#FFF8D4", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-162", name: "버터와 연두, 올리브", searchAliases: ["라이트 옐로우 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F0E491", ratio: 40, role: "base" },
      { hex: "#BBC863", ratio: 30, role: "sub" },
      { hex: "#658C58", ratio: 20, role: "sub" },
      { hex: "#31694E", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "파스텔"] },

  { id: "ch-163", name: "체리에서 복숭아색까지", searchAliases: ["핑크 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#CD2C58", ratio: 40, role: "base" },
      { hex: "#E06B80", ratio: 30, role: "sub" },
      { hex: "#FFC69D", ratio: 20, role: "sub" },
      { hex: "#FFE6D4", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","레드"] },

  { id: "ch-164", name: "돌빛과 안개색", searchAliases: ["뮤트 옐로우 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#777C6D", ratio: 40, role: "base" },
      { hex: "#B7B89F", ratio: 30, role: "sub" },
      { hex: "#CBCBCB", ratio: 20, role: "sub" },
      { hex: "#EEEEEE", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","뮤트","무채색"] },

  { id: "ch-165", name: "머시룸 위에 아이보리 한 점", searchAliases: ["뮤트 오렌지 × 옐로우"], scheme: "tone-on-tone",
    colors: [
      { hex: "#B6AE9F", ratio: 40, role: "base" },
      { hex: "#C5C7BC", ratio: 30, role: "sub" },
      { hex: "#DEDED1", ratio: 20, role: "sub" },
      { hex: "#FBF3D1", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","뮤트","무채색"] },

  { id: "ch-166", name: "회청색 위에 겹친 아이보리", searchAliases: ["뮤트 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#80A1BA", ratio: 40, role: "base" },
      { hex: "#91C4C3", ratio: 30, role: "sub" },
      { hex: "#B4DEBD", ratio: 20, role: "sub" },
      { hex: "#FFF7DD", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","뮤트","시안"] },

  { id: "ch-167", name: "검붉은색과 석회색 사이", searchAliases: ["딥 레드 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#432323", ratio: 40, role: "base" },
      { hex: "#2F5755", ratio: 30, role: "sub" },
      { hex: "#5A9690", ratio: 20, role: "sub" },
      { hex: "#E0D9D9", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","딥","시안"] },

  { id: "ch-168", name: "아이보리 곁의 빨강", searchAliases: ["비비드 오렌지 × 레드"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FEF3E2", ratio: 40, role: "base" },
      { hex: "#FAB12F", ratio: 30, role: "sub" },
      { hex: "#FA812F", ratio: 20, role: "sub" },
      { hex: "#DD0303", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","비비드","무채색"] },

  { id: "ch-169", name: "자두의 석회색 테두리", searchAliases: ["뮤트 핑크 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#6B3F69", ratio: 40, role: "base" },
      { hex: "#8D5F8C", ratio: 30, role: "sub" },
      { hex: "#A376A2", ratio: 20, role: "sub" },
      { hex: "#DDC3C3", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "뮤트"] },

  { id: "ch-170", name: "크림 위에 산딸기색 한 점", searchAliases: ["페일 오렌지 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FFECC0", ratio: 40, role: "base" },
      { hex: "#FFC29B", ratio: 30, role: "sub" },
      { hex: "#F39F9F", ratio: 20, role: "sub" },
      { hex: "#B95E82", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-171", name: "짙은 보라 바탕의 밝은 라벤더", searchAliases: ["딥 퍼플 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3B0270", ratio: 40, role: "base" },
      { hex: "#6F00FF", ratio: 30, role: "sub" },
      { hex: "#E9B3FB", ratio: 20, role: "sub" },
      { hex: "#FFF1F1", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥"] },

  { id: "ch-172", name: "세이지에서 연민트까지", searchAliases: ["뮤트 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#96A78D", ratio: 40, role: "base" },
      { hex: "#B6CEB4", ratio: 30, role: "sub" },
      { hex: "#D9E9CF", ratio: 20, role: "sub" },
      { hex: "#F0F0F0", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "뮤트"] },

  { id: "ch-173", name: "짙은 보라와 딸기우유, 진분홍", searchAliases: ["딥 퍼플 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#3E1E68", ratio: 40, role: "base" },
      { hex: "#5D2F77", ratio: 30, role: "sub" },
      { hex: "#E45A92", ratio: 20, role: "sub" },
      { hex: "#FFACAC", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥"] },

  { id: "ch-174", name: "암청색과 옥색", searchAliases: ["딥 블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#19183B", ratio: 40, role: "base" },
      { hex: "#708993", ratio: 30, role: "sub" },
      { hex: "#A1C2BD", ratio: 20, role: "sub" },
      { hex: "#E7F2EF", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","시안"] },

  { id: "ch-175", name: "데님 위에 겹친 피스타치오", searchAliases: ["블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#476EAE", ratio: 40, role: "base" },
      { hex: "#48B3AF", ratio: 30, role: "sub" },
      { hex: "#A7E399", ratio: 20, role: "sub" },
      { hex: "#F6FF99", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","시안"] },

  { id: "ch-176", name: "빨강과 벚꽃색 사이", searchAliases: ["비비드 레드 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#DC143C", ratio: 40, role: "base" },
      { hex: "#F75270", ratio: 30, role: "sub" },
      { hex: "#F7CAC9", ratio: 20, role: "sub" },
      { hex: "#FDEBD0", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "비비드"] },

  { id: "ch-177", name: "솔잎색 곁의 라임", searchAliases: ["그린 × 옐로우"], scheme: "tone-on-tone",
    colors: [
      { hex: "#556B2F", ratio: 40, role: "base" },
      { hex: "#8FA31E", ratio: 30, role: "sub" },
      { hex: "#C6D870", ratio: 20, role: "sub" },
      { hex: "#EFF5D2", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","옐로우"] },

  { id: "ch-178", name: "데님 바탕의 밝은 복숭아색", searchAliases: ["뮤트 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#5D688A", ratio: 40, role: "base" },
      { hex: "#F7A5A5", ratio: 30, role: "sub" },
      { hex: "#FFDBB6", ratio: 20, role: "sub" },
      { hex: "#FFF2EF", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","뮤트","레드"] },

  { id: "ch-179", name: "암청색과 짙은 보라, 진분홍", searchAliases: ["딥 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#0D1164", ratio: 40, role: "base" },
      { hex: "#640D5F", ratio: 30, role: "sub" },
      { hex: "#EA2264", ratio: 20, role: "sub" },
      { hex: "#F78D60", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","핑크"] },

  { id: "ch-180", name: "아이보리의 암청색 테두리", searchAliases: ["페일 옐로우 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#F2EDD1", ratio: 40, role: "base" },
      { hex: "#F9CB99", ratio: 30, role: "sub" },
      { hex: "#689B8A", ratio: 20, role: "sub" },
      { hex: "#280A3E", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","오렌지"] },

  { id: "ch-181", name: "상아색과 연필심", searchAliases: ["페일 오렌지 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#F3E2D4", ratio: 40, role: "base" },
      { hex: "#C5B0CD", ratio: 30, role: "sub" },
      { hex: "#415E72", ratio: 20, role: "sub" },
      { hex: "#17313E", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","퍼플"] },

  { id: "ch-182", name: "체리에서 석회색까지", searchAliases: ["핑크 × 레드"], scheme: "tone-on-tone",
    colors: [
      { hex: "#B9375D", ratio: 40, role: "base" },
      { hex: "#D25D5D", ratio: 30, role: "sub" },
      { hex: "#E7D3D3", ratio: 20, role: "sub" },
      { hex: "#EEEEEE", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","레드"] },

  { id: "ch-183", name: "연필심 위에 겹친 상아색", searchAliases: ["페일 옐로우 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#57564F", ratio: 40, role: "base" },
      { hex: "#7A7A73", ratio: 30, role: "sub" },
      { hex: "#DDDAD0", ratio: 20, role: "sub" },
      { hex: "#F8F3CE", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","무채색"] },

  { id: "ch-184", name: "짙은 보라 위에 노랑 한 점", searchAliases: ["딥 핑크 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#640D5F", ratio: 40, role: "base" },
      { hex: "#B12C00", ratio: 30, role: "sub" },
      { hex: "#EB5B00", ratio: 20, role: "sub" },
      { hex: "#FFCC00", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","딥","레드"] },

  { id: "ch-185", name: "백자와 연어색 사이", searchAliases: ["페일 오렌지 × 레드"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FAF7F3", ratio: 40, role: "base" },
      { hex: "#F0E4D3", ratio: 30, role: "sub" },
      { hex: "#DCC5B2", ratio: 20, role: "sub" },
      { hex: "#D9A299", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-186", name: "짙은 솔잎색 곁의 백자", searchAliases: ["딥 그린 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#0A400C", ratio: 40, role: "base" },
      { hex: "#819067", ratio: 30, role: "sub" },
      { hex: "#B1AB86", ratio: 20, role: "sub" },
      { hex: "#FEFAE0", ratio: 10, role: "point" }],
    tags: ["그린", "웜톤", "딥"] },

  { id: "ch-187", name: "딥 틸의 레몬 테두리", searchAliases: ["딥 시안 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#2F5249", ratio: 40, role: "base" },
      { hex: "#437057", ratio: 30, role: "sub" },
      { hex: "#97B067", ratio: 20, role: "sub" },
      { hex: "#E3DE61", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","딥","그린"] },

  { id: "ch-188", name: "버건디 바탕의 밝은 아이보리", searchAliases: ["레드 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#722323", ratio: 40, role: "base" },
      { hex: "#BA487F", ratio: 30, role: "sub" },
      { hex: "#FF9587", ratio: 20, role: "sub" },
      { hex: "#FFECCC", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","핑크"] },

  { id: "ch-189", name: "아이보리와 연어색, 홍매색", searchAliases: ["페일 오렌지 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FFEAD8", ratio: 40, role: "base" },
      { hex: "#E8988A", ratio: 30, role: "sub" },
      { hex: "#9B177E", ratio: 20, role: "sub" },
      { hex: "#2A1458", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","레드"] },

  { id: "ch-190", name: "흑단 위에 레몬 한 점", searchAliases: ["딥 레드 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#3B060A", ratio: 40, role: "base" },
      { hex: "#8A0000", ratio: 30, role: "sub" },
      { hex: "#C83F12", ratio: 20, role: "sub" },
      { hex: "#FFF287", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥"] },

  { id: "ch-191", name: "고동색에서 살구까지", searchAliases: ["비비드 오렌지 × 옐로우"], scheme: "tone-on-tone",
    colors: [
      { hex: "#7B4019", ratio: 40, role: "base" },
      { hex: "#FF7D29", ratio: 30, role: "sub" },
      { hex: "#FFBF78", ratio: 20, role: "sub" },
      { hex: "#FFEEA9", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "비비드"] },

  { id: "ch-192", name: "터쿼이즈와 백자", searchAliases: ["비비드 시안 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#0ABAB5", ratio: 40, role: "base" },
      { hex: "#56DFCF", ratio: 30, role: "sub" },
      { hex: "#ADEED9", ratio: 20, role: "sub" },
      { hex: "#FFEDF3", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "비비드"] },

  { id: "ch-193", name: "유칼립투스 위에 겹친 석회색", searchAliases: ["뮤트 그린 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#819A91", ratio: 40, role: "base" },
      { hex: "#A7C1A8", ratio: 30, role: "sub" },
      { hex: "#D1D8BE", ratio: 20, role: "sub" },
      { hex: "#EEEFE0", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","뮤트","무채색"] },

  { id: "ch-194", name: "홍매색과 벚꽃색 사이", searchAliases: ["핑크 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#B33791", ratio: 40, role: "base" },
      { hex: "#C562AF", ratio: 30, role: "sub" },
      { hex: "#DB8DD0", ratio: 20, role: "sub" },
      { hex: "#FEC5F6", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤"] },

  { id: "ch-195", name: "레몬 곁의 주홍", searchAliases: ["라이트 옐로우 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FCEF91", ratio: 40, role: "base" },
      { hex: "#FB9E3A", ratio: 30, role: "sub" },
      { hex: "#E6521F", ratio: 20, role: "sub" },
      { hex: "#EA2F14", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","오렌지"] },

  { id: "ch-196", name: "연노랑의 짙은 솔잎색 테두리", searchAliases: ["페일 그린 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E7EFC7", ratio: 40, role: "base" },
      { hex: "#AEC8A4", ratio: 30, role: "sub" },
      { hex: "#8A784E", ratio: 20, role: "sub" },
      { hex: "#3B3B1A", ratio: 10, role: "point" }],
    tags: ["그린", "웜톤", "파스텔"] },

  { id: "ch-197", name: "녹청색 바탕의 밝은 연노랑", searchAliases: ["뮤트 시안 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#5A827E", ratio: 40, role: "base" },
      { hex: "#84AE92", ratio: 30, role: "sub" },
      { hex: "#B9D4AA", ratio: 20, role: "sub" },
      { hex: "#FAFFCA", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","뮤트","그린"] },

  { id: "ch-198", name: "녹청색 위에 밀짚색 한 점", searchAliases: ["뮤트 그린 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#537D5D", ratio: 40, role: "base" },
      { hex: "#73946B", ratio: 30, role: "sub" },
      { hex: "#9EBC8A", ratio: 20, role: "sub" },
      { hex: "#D2D0A0", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "뮤트"] },

  { id: "ch-199", name: "아이보리에서 노랑까지", searchAliases: ["비비드 옐로우 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FEF3E2", ratio: 40, role: "base" },
      { hex: "#F3C623", ratio: 30, role: "sub" },
      { hex: "#FFB22C", ratio: 20, role: "sub" },
      { hex: "#FA812F", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","비비드","무채색"] },

  { id: "ch-200", name: "캐러멜과 꿀빛, 버터", searchAliases: ["비비드 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#A86523", ratio: 40, role: "base" },
      { hex: "#E9A319", ratio: 30, role: "sub" },
      { hex: "#FAD59A", ratio: 20, role: "sub" },
      { hex: "#FCEFCB", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "비비드"] },

  { id: "ch-201", name: "검붉은색과 레몬", searchAliases: ["딥 핑크 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#4A102A", ratio: 40, role: "base" },
      { hex: "#85193C", ratio: 30, role: "sub" },
      { hex: "#C5172E", ratio: 20, role: "sub" },
      { hex: "#FCF259", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥"] },

  { id: "ch-202", name: "녹청색 위에 겹친 연녹색", searchAliases: ["그린 그라데이션"], scheme: "tone-in-tone",
    colors: [
      { hex: "#328E6E", ratio: 40, role: "base" },
      { hex: "#67AE6E", ratio: 30, role: "sub" },
      { hex: "#90C67C", ratio: 20, role: "sub" },
      { hex: "#E1EEBC", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤"] },

  { id: "ch-203", name: "석류와 밀짚색 사이", searchAliases: ["레드 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#A62C2C", ratio: 40, role: "base" },
      { hex: "#E83F25", ratio: 30, role: "sub" },
      { hex: "#EA7300", ratio: 20, role: "sub" },
      { hex: "#D3CA79", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤"] },

  { id: "ch-204", name: "빨강 곁의 짙은 자주", searchAliases: ["비비드 레드 × 핑크"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F7374F", ratio: 40, role: "base" },
      { hex: "#88304E", ratio: 30, role: "sub" },
      { hex: "#522546", ratio: 20, role: "sub" },
      { hex: "#2C2C2C", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","핑크"] },

  { id: "ch-205", name: "수레국화색의 연분홍 테두리", searchAliases: ["비비드 블루 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#8F87F1", ratio: 40, role: "base" },
      { hex: "#C68EFD", ratio: 30, role: "sub" },
      { hex: "#E9A5F1", ratio: 20, role: "sub" },
      { hex: "#FED2E2", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","비비드","퍼플"] },

  { id: "ch-206", name: "카키브라운 바탕의 밝은 석회색", searchAliases: ["뮤트 옐로우 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#706D54", ratio: 40, role: "base" },
      { hex: "#A08963", ratio: 30, role: "sub" },
      { hex: "#C9B194", ratio: 20, role: "sub" },
      { hex: "#DBDBDB", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","뮤트","오렌지"] },

  { id: "ch-207", name: "흑단 위에 녹청색 한 점", searchAliases: ["딥 그린 그라데이션"], scheme: "tone-in-tone",
    colors: [
      { hex: "#18230F", ratio: 40, role: "base" },
      { hex: "#27391C", ratio: 30, role: "sub" },
      { hex: "#255F38", ratio: 20, role: "sub" },
      { hex: "#1F7D53", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "딥"] },

  { id: "ch-208", name: "백자에서 산딸기색까지", searchAliases: ["페일 핑크 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFEDFA", ratio: 40, role: "base" },
      { hex: "#FFB8E0", ratio: 30, role: "sub" },
      { hex: "#EC7FA9", ratio: 20, role: "sub" },
      { hex: "#BE5985", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","파스텔","무채색"] },

  { id: "ch-209", name: "백자와 크림, 모래색", searchAliases: ["페일 옐로우 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F6F0F0", ratio: 40, role: "base" },
      { hex: "#F2E2B1", ratio: 30, role: "sub" },
      { hex: "#D5C7A3", ratio: 20, role: "sub" },
      { hex: "#BDB395", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","무채색"] },

  { id: "ch-210", name: "회보라와 백자", searchAliases: ["뮤트 핑크 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C599B6", ratio: 40, role: "base" },
      { hex: "#E6B2BA", ratio: 30, role: "sub" },
      { hex: "#FAD0C4", ratio: 20, role: "sub" },
      { hex: "#FFF7F3", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","뮤트","레드"] },

  { id: "ch-211", name: "홍매색 위에 겹친 딸기우유", searchAliases: ["비비드 핑크 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#AC1754", ratio: 40, role: "base" },
      { hex: "#E53888", ratio: 30, role: "sub" },
      { hex: "#F37199", ratio: 20, role: "sub" },
      { hex: "#F7A8C4", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "비비드"] },

  { id: "ch-212", name: "에스프레소와 상아색 사이", searchAliases: ["딥 오렌지 × 옐로우"], scheme: "tone-on-tone",
    colors: [
      { hex: "#443627", ratio: 40, role: "base" },
      { hex: "#D98324", ratio: 30, role: "sub" },
      { hex: "#EFDCAB", ratio: 20, role: "sub" },
      { hex: "#F2F6D0", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "딥"] },

  { id: "ch-213", name: "자수정 곁의 벚꽃색", searchAliases: ["퍼플 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#AA60C8", ratio: 40, role: "base" },
      { hex: "#D69ADE", ratio: 30, role: "sub" },
      { hex: "#EABDE6", ratio: 20, role: "sub" },
      { hex: "#FFDFEF", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤"] },

  { id: "ch-214", name: "검붉은색의 라일락 테두리", searchAliases: ["딥 핑크 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#56021F", ratio: 40, role: "base" },
      { hex: "#7D1C4A", ratio: 30, role: "sub" },
      { hex: "#D17D98", ratio: 20, role: "sub" },
      { hex: "#F4CCE9", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥"] },

  { id: "ch-215", name: "황금빛 아래 짙은 짙은 보라", searchAliases: ["비비드 오렌지 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FFB200", ratio: 40, role: "base" },
      { hex: "#EB5B00", ratio: 30, role: "sub" },
      { hex: "#D91656", ratio: 20, role: "sub" },
      { hex: "#640D5F", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "비비드"] },

  { id: "ch-216", name: "남보라와 연청보라, 라일락", searchAliases: ["블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#493D9E", ratio: 40, role: "base" },
      { hex: "#B2A5FF", ratio: 30, role: "sub" },
      { hex: "#DAD2FF", ratio: 20, role: "sub" },
      { hex: "#FFF2AF", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤"] },

  { id: "ch-217", name: "복숭아색 위에 더스티로즈 한 점", searchAliases: ["페일 오렌지 × 레드"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFCDB2", ratio: 40, role: "base" },
      { hex: "#FFB4A2", ratio: 30, role: "sub" },
      { hex: "#E5989B", ratio: 20, role: "sub" },
      { hex: "#B5828C", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","레드"] },

  { id: "ch-218", name: "진홍에서 살구까지", searchAliases: ["비비드 레드 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#B82132", ratio: 40, role: "base" },
      { hex: "#D2665A", ratio: 30, role: "sub" },
      { hex: "#F2B28C", ratio: 20, role: "sub" },
      { hex: "#F6DED8", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "비비드"] },

  { id: "ch-219", name: "암청색과 진홍", searchAliases: ["딥 블루 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#09122C", ratio: 40, role: "base" },
      { hex: "#872341", ratio: 30, role: "sub" },
      { hex: "#BE3144", ratio: 20, role: "sub" },
      { hex: "#E17564", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","딥","핑크"] },

  { id: "ch-220", name: "주홍 위에 겹친 밀짚색", searchAliases: ["비비드 레드 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#EB5A3C", ratio: 40, role: "base" },
      { hex: "#DF9755", ratio: 30, role: "sub" },
      { hex: "#E7D283", ratio: 20, role: "sub" },
      { hex: "#EDF4C2", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","오렌지"] },

  { id: "ch-221", name: "올리브와 연노랑 사이", searchAliases: ["그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#5D8736", ratio: 40, role: "base" },
      { hex: "#809D3C", ratio: 30, role: "sub" },
      { hex: "#A9C46C", ratio: 20, role: "sub" },
      { hex: "#F4FFC3", ratio: 10, role: "point" }],
    tags: ["그린", "웜톤"] },

  { id: "ch-222", name: "짙은 자주 곁의 벚꽃색", searchAliases: ["딥 퍼플 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#441752", ratio: 40, role: "base" },
      { hex: "#8174A0", ratio: 30, role: "sub" },
      { hex: "#A888B5", ratio: 20, role: "sub" },
      { hex: "#EFB6C8", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","딥","블루"] },

  { id: "ch-223", name: "연노랑과 옥색, 슬레이트", searchAliases: ["페일 옐로우 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FAFFC5", ratio: 40, role: "base" },
      { hex: "#A9BFA8", ratio: 30, role: "sub" },
      { hex: "#5E686D", ratio: 20, role: "sub" },
      { hex: "#3A3960", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","파스텔","그린"] },

  { id: "ch-224", name: "와인의 귤색 테두리", searchAliases: ["뮤트 레드 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#7C444F", ratio: 40, role: "base" },
      { hex: "#9F5255", ratio: 30, role: "sub" },
      { hex: "#E16A54", ratio: 20, role: "sub" },
      { hex: "#F39E60", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "뮤트"] },

  { id: "ch-225", name: "연필심 바탕의 밝은 아이보리", searchAliases: ["뮤트 시안 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#4C585B", ratio: 40, role: "base" },
      { hex: "#7E99A3", ratio: 30, role: "sub" },
      { hex: "#A5BFCC", ratio: 20, role: "sub" },
      { hex: "#F4EDD3", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","뮤트","무채색"] },

  { id: "ch-226", name: "짙은 보라와 밀짚색", searchAliases: ["퍼플 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#69247C", ratio: 40, role: "base" },
      { hex: "#DA498D", ratio: 30, role: "sub" },
      { hex: "#FAC67A", ratio: 20, role: "sub" },
      { hex: "#F9E6CF", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","핑크"] },

  { id: "ch-227", name: "백자 위에 등꽃색 한 점", searchAliases: ["페일 퍼플 × 블루"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F5EFFF", ratio: 40, role: "base" },
      { hex: "#E5D9F2", ratio: 30, role: "sub" },
      { hex: "#CDC1FF", ratio: 20, role: "sub" },
      { hex: "#A294F9", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","파스텔","무채색"] },

  { id: "ch-228", name: "아이보리에서 고동색까지", searchAliases: ["페일 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFF0DC", ratio: 40, role: "base" },
      { hex: "#F0BB78", ratio: 30, role: "sub" },
      { hex: "#543A14", ratio: 20, role: "sub" },
      { hex: "#131010", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-229", name: "백자 위에 겹친 회청색", searchAliases: ["페일 블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F8FAFC", ratio: 40, role: "base" },
      { hex: "#D9EAFD", ratio: 30, role: "sub" },
      { hex: "#BCCCDC", ratio: 20, role: "sub" },
      { hex: "#9AA6B2", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","파스텔","무채색"] },

  { id: "ch-230", name: "꿀빛과 짙은 자주 사이", searchAliases: ["비비드 오렌지 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#F29F58", ratio: 40, role: "base" },
      { hex: "#AB4459", ratio: 30, role: "sub" },
      { hex: "#441752", ratio: 20, role: "sub" },
      { hex: "#1B1833", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","비비드","레드"] },

  { id: "ch-231", name: "웜그레이 곁의 아이보리", searchAliases: ["뮤트 옐로우 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#A59D84", ratio: 40, role: "base" },
      { hex: "#C1BAA1", ratio: 30, role: "sub" },
      { hex: "#D7D3BF", ratio: 20, role: "sub" },
      { hex: "#ECEBDE", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "뮤트"] },

  { id: "ch-232", name: "슬레이트 바탕의 밝은 벚꽃색", searchAliases: ["뮤트 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#8174A0", ratio: 40, role: "base" },
      { hex: "#A888B5", ratio: 30, role: "sub" },
      { hex: "#EFB6C8", ratio: 20, role: "sub" },
      { hex: "#FFD2A0", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","뮤트","퍼플"] },

  { id: "ch-233", name: "연민트에서 솔잎색까지", searchAliases: ["페일 그린 그라데이션"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D3F1DF", ratio: 40, role: "base" },
      { hex: "#85A98F", ratio: 30, role: "sub" },
      { hex: "#5A6C57", ratio: 20, role: "sub" },
      { hex: "#525B44", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔"] },

  { id: "ch-234", name: "남색의 연녹색 테두리", searchAliases: ["비비드 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#22177A", ratio: 40, role: "base" },
      { hex: "#605EA1", ratio: 30, role: "sub" },
      { hex: "#8EA3A6", ratio: 20, role: "sub" },
      { hex: "#E6E9AF", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-235", name: "연분홍과 연노랑, 연옥색", searchAliases: ["페일 레드 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#F6D6D6", ratio: 40, role: "base" },
      { hex: "#F6F7C4", ratio: 30, role: "sub" },
      { hex: "#A1EEBD", ratio: 20, role: "sub" },
      { hex: "#7BD3EA", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","옐로우"] },

  { id: "ch-236", name: "산딸기색과 크림", searchAliases: ["뮤트 핑크 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#AA5486", ratio: 40, role: "base" },
      { hex: "#FC8F54", ratio: 30, role: "sub" },
      { hex: "#FDE7BB", ratio: 20, role: "sub" },
      { hex: "#FBF4DB", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","뮤트","오렌지"] },

  { id: "ch-237", name: "먹색 위에 산딸기색 한 점", searchAliases: ["딥 핑크 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1A1A1D", ratio: 40, role: "base" },
      { hex: "#3B1C32", ratio: 30, role: "sub" },
      { hex: "#6A1E55", ratio: 20, role: "sub" },
      { hex: "#A64D79", ratio: 10, role: "point" }],
    tags: ["핑크","쿨톤","딥","무채색"] },

  { id: "ch-238", name: "연노랑 위에 겹친 다홍", searchAliases: ["페일 옐로우 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FCF596", ratio: 40, role: "base" },
      { hex: "#FBD288", ratio: 30, role: "sub" },
      { hex: "#FF9C73", ratio: 20, role: "sub" },
      { hex: "#FF4545", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","오렌지"] },

  { id: "ch-239", name: "버건디와 산호색 사이", searchAliases: ["딥 핑크 × 레드"], scheme: "tone-on-tone",
    colors: [
      { hex: "#740938", ratio: 40, role: "base" },
      { hex: "#AF1740", ratio: 30, role: "sub" },
      { hex: "#CC2B52", ratio: 20, role: "sub" },
      { hex: "#DE7C7D", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥"] },

  { id: "ch-240", name: "먹색 곁의 아이보리", searchAliases: ["딥 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1A1A19", ratio: 40, role: "base" },
      { hex: "#31511E", ratio: 30, role: "sub" },
      { hex: "#859F3D", ratio: 20, role: "sub" },
      { hex: "#F6FCDF", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","딥","무채색"] },

  { id: "ch-241", name: "아이보리의 고동색 테두리", searchAliases: ["페일 그린 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E9EED9", ratio: 40, role: "base" },
      { hex: "#CBD2A4", ratio: 30, role: "sub" },
      { hex: "#9A7E6F", ratio: 20, role: "sub" },
      { hex: "#54473F", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","옐로우"] },

  { id: "ch-242", name: "연분홍 아래 짙은 에스프레소", searchAliases: ["뮤트 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#E4E0E1", ratio: 40, role: "base" },
      { hex: "#D6C0B3", ratio: 30, role: "sub" },
      { hex: "#AB886D", ratio: 20, role: "sub" },
      { hex: "#493628", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","뮤트","무채색"] },

  { id: "ch-243", name: "짙은 청록 위에 연민트 한 점", searchAliases: ["딥 블루 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#243642", ratio: 40, role: "base" },
      { hex: "#387478", ratio: 30, role: "sub" },
      { hex: "#629584", ratio: 20, role: "sub" },
      { hex: "#E2F1E7", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","시안"] },

  { id: "ch-244", name: "연두와 연노랑, 연녹색", searchAliases: ["그린 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#72BF78", ratio: 40, role: "base" },
      { hex: "#A0D683", ratio: 30, role: "sub" },
      { hex: "#D3EE98", ratio: 20, role: "sub" },
      { hex: "#FEFF9F", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤"] },

  { id: "ch-245", name: "아이보리에서 딸기우유까지", searchAliases: ["페일 옐로우 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FFF7D1", ratio: 40, role: "base" },
      { hex: "#FFECC8", ratio: 30, role: "sub" },
      { hex: "#FFD09B", ratio: 20, role: "sub" },
      { hex: "#FFB0B0", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","오렌지"] },

  { id: "ch-246", name: "형광 연두와 옥색", searchAliases: ["비비드 그린 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D2FF72", ratio: 40, role: "base" },
      { hex: "#73EC8B", ratio: 30, role: "sub" },
      { hex: "#54C392", ratio: 20, role: "sub" },
      { hex: "#15B392", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "비비드"] },

  { id: "ch-247", name: "제비꽃 위에 겹친 밀짚색", searchAliases: ["뮤트 퍼플 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#624E88", ratio: 40, role: "base" },
      { hex: "#8967B3", ratio: 30, role: "sub" },
      { hex: "#CB80AB", ratio: 20, role: "sub" },
      { hex: "#E6D9A2", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "뮤트"] },

  { id: "ch-248", name: "에스프레소와 호박색 사이", searchAliases: ["레드 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#343131", ratio: 40, role: "base" },
      { hex: "#A04747", ratio: 30, role: "sub" },
      { hex: "#D8A25E", ratio: 20, role: "sub" },
      { hex: "#EEDF7A", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","무채색"] },

  { id: "ch-249", name: "황금빛 곁의 진홍", searchAliases: ["비비드 오렌지 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FABC3F", ratio: 40, role: "base" },
      { hex: "#E85C0D", ratio: 30, role: "sub" },
      { hex: "#C7253E", ratio: 20, role: "sub" },
      { hex: "#821131", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "비비드"] },

  { id: "ch-250", name: "암청색의 연보라 테두리", searchAliases: ["딥 퍼플 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#2E073F", ratio: 40, role: "base" },
      { hex: "#7A1CAC", ratio: 30, role: "sub" },
      { hex: "#AD49E1", ratio: 20, role: "sub" },
      { hex: "#EBD3F8", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥"] },

  { id: "ch-251", name: "흑단 바탕의 밝은 상아색", searchAliases: ["페일 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1E201E", ratio: 40, role: "base" },
      { hex: "#3C3D37", ratio: 30, role: "sub" },
      { hex: "#697565", ratio: 20, role: "sub" },
      { hex: "#ECDFCC", ratio: 10, role: "point" }],
    tags: ["오렌지","쿨톤","파스텔","무채색"] },

  { id: "ch-252", name: "아이보리 위에 남보라 한 점", searchAliases: ["페일 오렌지 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#F7EFE5", ratio: 40, role: "base" },
      { hex: "#E2BFD9", ratio: 30, role: "sub" },
      { hex: "#C8A1E0", ratio: 20, role: "sub" },
      { hex: "#674188", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","핑크"] },

  { id: "ch-253", name: "아이보리와 석회색, 테라코타", searchAliases: ["페일 오렌지 × 레드"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F8EDE3", ratio: 40, role: "base" },
      { hex: "#DFD3C3", ratio: 30, role: "sub" },
      { hex: "#D0B8A8", ratio: 20, role: "sub" },
      { hex: "#C5705D", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-254", name: "레몬과 녹청색", searchAliases: ["비비드 옐로우 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F6E96B", ratio: 40, role: "base" },
      { hex: "#BEDC74", ratio: 30, role: "sub" },
      { hex: "#A2CA71", ratio: 20, role: "sub" },
      { hex: "#387F39", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","비비드","그린"] },

  { id: "ch-255", name: "와인에서 딸기우유까지", searchAliases: ["비비드 핑크 × 레드"], scheme: "tone-on-tone",
    colors: [
      { hex: "#921A40", ratio: 40, role: "base" },
      { hex: "#C75B7A", ratio: 30, role: "sub" },
      { hex: "#D9ABAB", ratio: 20, role: "sub" },
      { hex: "#F4D9D0", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "비비드"] },

  { id: "ch-256", name: "딸기우유 위에 겹친 아이보리", searchAliases: ["페일 핑크 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F0A8D0", ratio: 40, role: "base" },
      { hex: "#F7B5CA", ratio: 30, role: "sub" },
      { hex: "#FFC6C6", ratio: 20, role: "sub" },
      { hex: "#FFEBD4", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "파스텔"] },

  { id: "ch-257", name: "석회색과 솔잎색 사이", searchAliases: ["페일 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#C9DABF", ratio: 40, role: "base" },
      { hex: "#9CA986", ratio: 30, role: "sub" },
      { hex: "#808D7C", ratio: 20, role: "sub" },
      { hex: "#5F6F65", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔"] },

  { id: "ch-258", name: "먹색 곁의 수레국화색", searchAliases: ["딥 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#021526", ratio: 40, role: "base" },
      { hex: "#03346E", ratio: 30, role: "sub" },
      { hex: "#6EACDA", ratio: 20, role: "sub" },
      { hex: "#E2E2B6", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","무채색"] },

  { id: "ch-259", name: "연분홍의 제비꽃 테두리", searchAliases: ["페일 레드 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#FFDFD6", ratio: 40, role: "base" },
      { hex: "#E3A5C7", ratio: 30, role: "sub" },
      { hex: "#B692C2", ratio: 20, role: "sub" },
      { hex: "#694F8E", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","핑크"] },

  { id: "ch-260", name: "짙은 청록 바탕의 밝은 오트밀", searchAliases: ["딥 시안 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#1A3636", ratio: 40, role: "base" },
      { hex: "#40534C", ratio: 30, role: "sub" },
      { hex: "#677D6A", ratio: 20, role: "sub" },
      { hex: "#D6BD98", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","딥","그린"] },

  { id: "ch-261", name: "아이보리 위에 적갈색 한 점", searchAliases: ["페일 오렌지 × 레드"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F8EDE3", ratio: 40, role: "base" },
      { hex: "#DFD3C3", ratio: 30, role: "sub" },
      { hex: "#D0B8A8", ratio: 20, role: "sub" },
      { hex: "#8D493A", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-262", name: "암청색에서 라벤더까지", searchAliases: ["딥 블루 × 퍼플"], scheme: "tone-on-tone",
    colors: [
      { hex: "#17153B", ratio: 40, role: "base" },
      { hex: "#2E236C", ratio: 30, role: "sub" },
      { hex: "#433D8B", ratio: 20, role: "sub" },
      { hex: "#C8ACD6", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-263", name: "모브와 회보라, 아이보리", searchAliases: ["뮤트 퍼플 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#987D9A", ratio: 40, role: "base" },
      { hex: "#BB9AB1", ratio: 30, role: "sub" },
      { hex: "#EECEB9", ratio: 20, role: "sub" },
      { hex: "#FEFBD8", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","뮤트","핑크"] },

  { id: "ch-264", name: "연노랑과 녹청색", searchAliases: ["페일 그린 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#DEF9C4", ratio: 40, role: "base" },
      { hex: "#9CDBA6", ratio: 30, role: "sub" },
      { hex: "#50B498", ratio: 20, role: "sub" },
      { hex: "#468585", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔"] },

  { id: "ch-265", name: "연민트 위에 겹친 숲색", searchAliases: ["페일 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#D6EFD8", ratio: 40, role: "base" },
      { hex: "#80AF81", ratio: 30, role: "sub" },
      { hex: "#508D4E", ratio: 20, role: "sub" },
      { hex: "#1A5319", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔"] },

  { id: "ch-266", name: "아이보리와 남색 사이", searchAliases: ["페일 옐로우 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FFF8DB", ratio: 40, role: "base" },
      { hex: "#FFC7ED", ratio: 30, role: "sub" },
      { hex: "#7D8ABC", ratio: 20, role: "sub" },
      { hex: "#304463", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","핑크"] },

  { id: "ch-267", name: "석류 곁의 버터", searchAliases: ["레드 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#973131", ratio: 40, role: "base" },
      { hex: "#E0A75E", ratio: 30, role: "sub" },
      { hex: "#F9D689", ratio: 20, role: "sub" },
      { hex: "#F5E7B2", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","오렌지"] },

  { id: "ch-268", name: "에메랄드 바탕의 밝은 형광 연두", searchAliases: ["비비드 그린 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#059212", ratio: 40, role: "base" },
      { hex: "#06D001", ratio: 30, role: "sub" },
      { hex: "#9BEC00", ratio: 20, role: "sub" },
      { hex: "#F3FF90", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "비비드"] },

  { id: "ch-269", name: "짙은 솔잎색과 유칼립투스, 모래색", searchAliases: ["딥 그린 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#254336", ratio: 40, role: "base" },
      { hex: "#6B8A7A", ratio: 30, role: "sub" },
      { hex: "#B7B597", ratio: 20, role: "sub" },
      { hex: "#DAD3BE", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "딥"] },

  { id: "ch-270", name: "연노랑의 귤색 테두리", searchAliases: ["페일 옐로우 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FEFFD2", ratio: 40, role: "base" },
      { hex: "#FFEEA9", ratio: 30, role: "sub" },
      { hex: "#FFBF78", ratio: 20, role: "sub" },
      { hex: "#FF7D29", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "파스텔"] },

  { id: "ch-271", name: "아이보리에서 밤색까지", searchAliases: ["페일 옐로우 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F8F4E1", ratio: 40, role: "base" },
      { hex: "#AF8F6F", ratio: 30, role: "sub" },
      { hex: "#74512D", ratio: 20, role: "sub" },
      { hex: "#543310", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","오렌지"] },

  { id: "ch-272", name: "민트 위에 연민트 한 점", searchAliases: ["라이트 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#ACE1AF", ratio: 40, role: "base" },
      { hex: "#B0EBB4", ratio: 30, role: "sub" },
      { hex: "#BFF6C3", ratio: 20, role: "sub" },
      { hex: "#E0FBE2", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔"] },

  { id: "ch-273", name: "아이리스와 연분홍", searchAliases: ["뮤트 블루 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#7469B6", ratio: 40, role: "base" },
      { hex: "#AD88C6", ratio: 30, role: "sub" },
      { hex: "#E1AFD1", ratio: 20, role: "sub" },
      { hex: "#FFE6E6", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","뮤트","퍼플"] },

  { id: "ch-274", name: "짙은 보라 위에 겹친 버터", searchAliases: ["딥 퍼플 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#640D6B", ratio: 40, role: "base" },
      { hex: "#B51B75", ratio: 30, role: "sub" },
      { hex: "#E65C19", ratio: 20, role: "sub" },
      { hex: "#F8D082", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","딥","핑크"] },

  { id: "ch-275", name: "오트밀과 와인 사이", searchAliases: ["라이트 오렌지 × 레드"], scheme: "tone-on-tone",
    colors: [
      { hex: "#E4C59E", ratio: 40, role: "base" },
      { hex: "#AF8260", ratio: 30, role: "sub" },
      { hex: "#803D3B", ratio: 20, role: "sub" },
      { hex: "#322C2B", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-276", name: "카키 곁의 상아색", searchAliases: ["뮤트 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#A79277", ratio: 40, role: "base" },
      { hex: "#D1BB9E", ratio: 30, role: "sub" },
      { hex: "#EAD8C0", ratio: 20, role: "sub" },
      { hex: "#FFF2E1", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "뮤트"] },

  { id: "ch-277", name: "제비꽃 바탕의 밝은 딸기우유", searchAliases: ["퍼플 × 핑크"], scheme: "tone-on-tone",
    colors: [
      { hex: "#86469C", ratio: 40, role: "base" },
      { hex: "#BC7FCD", ratio: 30, role: "sub" },
      { hex: "#FB9AD1", ratio: 20, role: "sub" },
      { hex: "#FFCDEA", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤"] },

  { id: "ch-278", name: "연노랑의 보라 테두리", searchAliases: ["페일 오렌지 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#FFEBB2", ratio: 40, role: "base" },
      { hex: "#E9A89B", ratio: 30, role: "sub" },
      { hex: "#D875C7", ratio: 20, role: "sub" },
      { hex: "#912BBC", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","레드"] },

  { id: "ch-279", name: "체리 위에 물빛 한 점", searchAliases: ["비비드 핑크 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#D20062", ratio: 40, role: "base" },
      { hex: "#D6589F", ratio: 30, role: "sub" },
      { hex: "#D895DA", ratio: 20, role: "sub" },
      { hex: "#C4E4FF", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "비비드"] },

  { id: "ch-280", name: "꿀빛과 오렌지, 자두", searchAliases: ["비비드 오렌지 × 퍼플"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FFAF45", ratio: 40, role: "base" },
      { hex: "#FB6D48", ratio: 30, role: "sub" },
      { hex: "#D74B76", ratio: 20, role: "sub" },
      { hex: "#673F69", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","비비드","레드"] },

  { id: "ch-281", name: "짙은 보라와 살구", searchAliases: ["퍼플 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#401F71", ratio: 40, role: "base" },
      { hex: "#824D74", ratio: 30, role: "sub" },
      { hex: "#BE7B72", ratio: 20, role: "sub" },
      { hex: "#FDAF7B", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","핑크"] },

  { id: "ch-282", name: "파랑에서 물빛까지", searchAliases: ["비비드 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#008DDA", ratio: 40, role: "base" },
      { hex: "#41C9E2", ratio: 30, role: "sub" },
      { hex: "#ACE2E1", ratio: 20, role: "sub" },
      { hex: "#F7EEDD", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","비비드","시안"] },

  { id: "ch-283", name: "빨강 위에 겹친 짙은 자주", searchAliases: ["비비드 레드 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FF204E", ratio: 40, role: "base" },
      { hex: "#A0153E", ratio: 30, role: "sub" },
      { hex: "#5D0E41", ratio: 20, role: "sub" },
      { hex: "#00224D", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","핑크"] },

  { id: "ch-284", name: "짙은 자주와 크림 사이", searchAliases: ["딥 퍼플 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#430A5D", ratio: 40, role: "base" },
      { hex: "#5F374B", ratio: 30, role: "sub" },
      { hex: "#8C6A5D", ratio: 20, role: "sub" },
      { hex: "#EEE4B1", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","딥","핑크"] },

  { id: "ch-285", name: "난초색 곁의 연노랑", searchAliases: ["라이트 핑크 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#E178C5", ratio: 40, role: "base" },
      { hex: "#FF8E8F", ratio: 30, role: "sub" },
      { hex: "#FFB38E", ratio: 20, role: "sub" },
      { hex: "#FFFDCB", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","파스텔","레드"] },

  { id: "ch-286", name: "연노랑의 진분홍 테두리", searchAliases: ["페일 옐로우 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FFF3C7", ratio: 40, role: "base" },
      { hex: "#FEC7B4", ratio: 30, role: "sub" },
      { hex: "#FC819E", ratio: 20, role: "sub" },
      { hex: "#F7418F", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","오렌지"] },

  { id: "ch-287", name: "제비꽃 바탕의 밝은 피스타치오", searchAliases: ["뮤트 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#5F5D9C", ratio: 40, role: "base" },
      { hex: "#6196A6", ratio: 30, role: "sub" },
      { hex: "#A4CE95", ratio: 20, role: "sub" },
      { hex: "#F4EDCC", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","뮤트","시안"] },

  { id: "ch-288", name: "세이지에서 레몬까지", searchAliases: ["뮤트 옐로우 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#B2B377", ratio: 40, role: "base" },
      { hex: "#D2D180", ratio: 30, role: "sub" },
      { hex: "#E5E483", ratio: 20, role: "sub" },
      { hex: "#F1F5A8", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "뮤트"] },

  { id: "ch-289", name: "남보라와 난초색, 마젠타", searchAliases: ["비비드 퍼플 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#6420AA", ratio: 40, role: "base" },
      { hex: "#FF3EA5", ratio: 30, role: "sub" },
      { hex: "#FF7ED4", ratio: 20, role: "sub" },
      { hex: "#FFB5DA", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","비비드","핑크"] },

  { id: "ch-290", name: "감청과 크림", searchAliases: ["비비드 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#0C359E", ratio: 40, role: "base" },
      { hex: "#EE99C2", ratio: 30, role: "sub" },
      { hex: "#FFE3CA", ratio: 20, role: "sub" },
      { hex: "#F6F5F5", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","비비드","핑크"] },

  { id: "ch-291", name: "자수정 위에 겹친 딸기우유", searchAliases: ["뮤트 퍼플 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#8E7AB5", ratio: 40, role: "base" },
      { hex: "#B784B7", ratio: 30, role: "sub" },
      { hex: "#E493B3", ratio: 20, role: "sub" },
      { hex: "#EEA5A6", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","뮤트","핑크"] },

  { id: "ch-292", name: "회청색과 상아색 사이", searchAliases: ["라이트 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#81A6C6", ratio: 40, role: "base" },
      { hex: "#AACDDC", ratio: 30, role: "sub" },
      { hex: "#F3E3D0", ratio: 20, role: "sub" },
      { hex: "#D2C4B4", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","파스텔","시안"] },

  { id: "ch-293", name: "물빛 곁의 아이보리", searchAliases: ["페일 시안 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#BBDCE5", ratio: 40, role: "base" },
      { hex: "#ECEEDF", ratio: 30, role: "sub" },
      { hex: "#D9C4B0", ratio: 20, role: "sub" },
      { hex: "#CFAB8D", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","옐로우"] },

  { id: "ch-294", name: "모래색 바탕의 밝은 아이보리", searchAliases: ["라이트 레드 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D6A99D", ratio: 40, role: "base" },
      { hex: "#FBF3D5", ratio: 30, role: "sub" },
      { hex: "#D6DAC8", ratio: 20, role: "sub" },
      { hex: "#9CAFAA", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","옐로우"] },

  { id: "ch-295", name: "백자와 석회색, 세이지", searchAliases: ["페일 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FAF9EE", ratio: 40, role: "base" },
      { hex: "#A2AF9B", ratio: 30, role: "sub" },
      { hex: "#DCCFC0", ratio: 20, role: "sub" },
      { hex: "#EEEEEE", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-296", name: "아이보리에서 연청보라까지", searchAliases: ["페일 오렌지 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FFF2E0", ratio: 40, role: "base" },
      { hex: "#C0C9EE", ratio: 30, role: "sub" },
      { hex: "#A2AADB", ratio: 20, role: "sub" },
      { hex: "#898AC4", ratio: 10, role: "point" }],
    tags: ["오렌지","쿨톤","파스텔","블루"] },

  { id: "ch-297", name: "연분홍과 백자", searchAliases: ["페일 레드 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFDCDC", ratio: 40, role: "base" },
      { hex: "#FFF2EB", ratio: 30, role: "sub" },
      { hex: "#FFE8CD", ratio: 20, role: "sub" },
      { hex: "#FFD6BA", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","무채색"] },

  { id: "ch-298", name: "백자 위에 피스타치오 한 점", searchAliases: ["페일 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#ECFAE5", ratio: 40, role: "base" },
      { hex: "#DDF6D2", ratio: 30, role: "sub" },
      { hex: "#CAE8BD", ratio: 20, role: "sub" },
      { hex: "#B0DB9C", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔"] },

  { id: "ch-299", name: "백자의 연두 테두리", searchAliases: ["라이트 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFFDF6", ratio: 40, role: "base" },
      { hex: "#FAF6E9", ratio: 30, role: "sub" },
      { hex: "#DDEB9D", ratio: 20, role: "sub" },
      { hex: "#A0C878", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","무채색"] },

  { id: "ch-300", name: "아이보리 위에 옥색 한 점", searchAliases: ["페일 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FAF1E6", ratio: 40, role: "base" },
      { hex: "#FDFAF6", ratio: 30, role: "sub" },
      { hex: "#E4EFE7", ratio: 20, role: "sub" },
      { hex: "#99BC85", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","무채색"] },

  { id: "ch-301", name: "아이보리 위에 겹친 다크 올리브", searchAliases: ["페일 옐로우 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F8F3D9", ratio: 40, role: "base" },
      { hex: "#EBE5C2", ratio: 30, role: "sub" },
      { hex: "#B9B28A", ratio: 20, role: "sub" },
      { hex: "#504B38", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "파스텔"] },

  { id: "ch-302", name: "상아색과 백자 사이", searchAliases: ["페일 그린 × 옐로우"], scheme: "tone-on-tone",
    colors: [
      { hex: "#D9DFC6", ratio: 40, role: "base" },
      { hex: "#EFF3EA", ratio: 30, role: "sub" },
      { hex: "#FFFDF0", ratio: 20, role: "sub" },
      { hex: "#FFF2C2", ratio: 10, role: "point" }],
    tags: ["그린", "웜톤", "파스텔"] },

  { id: "ch-303", name: "회청색 곁의 상아색", searchAliases: ["뮤트 시안 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#89A8B2", ratio: 40, role: "base" },
      { hex: "#B3C8CF", ratio: 30, role: "sub" },
      { hex: "#E5E1DA", ratio: 20, role: "sub" },
      { hex: "#F1F0E8", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "뮤트"] },

  { id: "ch-304", name: "은회색에서 연녹색까지", searchAliases: ["뮤트 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#A6AEBF", ratio: 40, role: "base" },
      { hex: "#C5D3E8", ratio: 30, role: "sub" },
      { hex: "#D0E8C5", ratio: 20, role: "sub" },
      { hex: "#FFF8DE", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "뮤트"] },

  { id: "ch-305", name: "아이보리와 고동색, 코코아", searchAliases: ["페일 오렌지 × 레드"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFF0D1", ratio: 40, role: "base" },
      { hex: "#795757", ratio: 30, role: "sub" },
      { hex: "#664343", ratio: 20, role: "sub" },
      { hex: "#3B3030", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","레드"] },

  { id: "ch-306", name: "밀짚색과 아이보리", searchAliases: ["뮤트 그린 × 옐로우"], scheme: "tone-on-tone",
    colors: [
      { hex: "#CCD5AE", ratio: 40, role: "base" },
      { hex: "#E0E5B6", ratio: 30, role: "sub" },
      { hex: "#FAEDCE", ratio: 20, role: "sub" },
      { hex: "#FEFAE0", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","뮤트","옐로우"] },

  { id: "ch-307", name: "상아색의 팥색 테두리", searchAliases: ["페일 오렌지 × 레드"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F1E5D1", ratio: 40, role: "base" },
      { hex: "#DBB5B5", ratio: 30, role: "sub" },
      { hex: "#C39898", ratio: 20, role: "sub" },
      { hex: "#987070", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","레드"] },

  { id: "ch-308", name: "아이보리 위에 모래색 한 점", searchAliases: ["페일 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFF2D7", ratio: 40, role: "base" },
      { hex: "#FFE0B5", ratio: 30, role: "sub" },
      { hex: "#F8C794", ratio: 20, role: "sub" },
      { hex: "#D8AE7E", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-309", name: "백자 위에 겹친 연분홍", searchAliases: ["페일 오렌지 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F6F5F2", ratio: 40, role: "base" },
      { hex: "#F0EBE3", ratio: 30, role: "sub" },
      { hex: "#F3D0D7", ratio: 20, role: "sub" },
      { hex: "#FFEFEF", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-310", name: "안개색과 아이보리 사이", searchAliases: ["뮤트 시안 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#B3C8CF", ratio: 40, role: "base" },
      { hex: "#BED7DC", ratio: 30, role: "sub" },
      { hex: "#F1EEDC", ratio: 20, role: "sub" },
      { hex: "#E5DDC5", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "뮤트"] },

  { id: "ch-311", name: "안개색 곁의 아이보리", searchAliases: ["뮤트 블루 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#B5C0D0", ratio: 40, role: "base" },
      { hex: "#CCD3CA", ratio: 30, role: "sub" },
      { hex: "#F5E8DD", ratio: 20, role: "sub" },
      { hex: "#EED3D9", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","뮤트","무채색"] },

  { id: "ch-312", name: "은회색과 안개색, 상아색", searchAliases: ["페일 옐로우 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#B4B4B8", ratio: 40, role: "base" },
      { hex: "#C7C8CC", ratio: 30, role: "sub" },
      { hex: "#E3E1D9", ratio: 20, role: "sub" },
      { hex: "#F2EFE5", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","파스텔","무채색"] },

  { id: "ch-313", name: "연민트의 옥색 테두리", searchAliases: ["페일 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#E1F0DA", ratio: 40, role: "base" },
      { hex: "#D4E7C5", ratio: 30, role: "sub" },
      { hex: "#BFD8AF", ratio: 20, role: "sub" },
      { hex: "#99BC85", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔"] },

  { id: "ch-314", name: "아이보리 위에 딸기우유 한 점", searchAliases: ["페일 오렌지 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F5EEE6", ratio: 40, role: "base" },
      { hex: "#FFF8E3", ratio: 30, role: "sub" },
      { hex: "#F3D7CA", ratio: 20, role: "sub" },
      { hex: "#E6A4B4", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-315", name: "연녹색과 더스티로즈", searchAliases: ["페일 그린 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C3E2C2", ratio: 40, role: "base" },
      { hex: "#EAECCC", ratio: 30, role: "sub" },
      { hex: "#DBCC95", ratio: 20, role: "sub" },
      { hex: "#CD8D7A", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","옐로우"] },

  { id: "ch-316", name: "슬레이트 바탕의 밝은 아이보리", searchAliases: ["페일 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#607274", ratio: 40, role: "base" },
      { hex: "#FAEED1", ratio: 30, role: "sub" },
      { hex: "#DED0B6", ratio: 20, role: "sub" },
      { hex: "#B2A59B", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-317", name: "세이지 바탕의 밝은 아이보리", searchAliases: ["뮤트 그린 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#88AB8E", ratio: 40, role: "base" },
      { hex: "#AFC8AD", ratio: 30, role: "sub" },
      { hex: "#EEE7DA", ratio: 20, role: "sub" },
      { hex: "#F2F1EB", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "뮤트"] },

  { id: "ch-318", name: "백자에서 모래색까지", searchAliases: ["페일 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FDF7E4", ratio: 40, role: "base" },
      { hex: "#FAEED1", ratio: 30, role: "sub" },
      { hex: "#DED0B6", ratio: 20, role: "sub" },
      { hex: "#BBAB8C", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-319", name: "아이보리 위에 겹친 카키브라운", searchAliases: ["페일 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F3EEEA", ratio: 40, role: "base" },
      { hex: "#EBE3D5", ratio: 30, role: "sub" },
      { hex: "#B0A695", ratio: 20, role: "sub" },
      { hex: "#776B5D", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-320", name: "빙하색과 라벤더 사이", searchAliases: ["페일 퍼플 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F1EAFF", ratio: 40, role: "base" },
      { hex: "#E5D4FF", ratio: 30, role: "sub" },
      { hex: "#DCBFFF", ratio: 20, role: "sub" },
      { hex: "#D0A2F7", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","파스텔","무채색"] },

  { id: "ch-321", name: "코코아 곁의 밀짚색", searchAliases: ["옐로우 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#706233", ratio: 40, role: "base" },
      { hex: "#B0926A", ratio: 30, role: "sub" },
      { hex: "#E1C78F", ratio: 20, role: "sub" },
      { hex: "#FAE7C9", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","오렌지"] },

  { id: "ch-322", name: "세이지 바탕의 밝은 연녹색", searchAliases: ["뮤트 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#86A789", ratio: 40, role: "base" },
      { hex: "#B2C8BA", ratio: 30, role: "sub" },
      { hex: "#D2E3C8", ratio: 20, role: "sub" },
      { hex: "#EBF3E8", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "뮤트"] },

  { id: "ch-323", name: "연녹색에서 머시룸까지", searchAliases: ["페일 옐로우 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#DADDB1", ratio: 40, role: "base" },
      { hex: "#B3A492", ratio: 30, role: "sub" },
      { hex: "#BFB29E", ratio: 20, role: "sub" },
      { hex: "#D6C7AE", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","오렌지"] },

  { id: "ch-324", name: "아이보리의 잉크 네이비 테두리", searchAliases: ["페일 오렌지 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#F8F0E5", ratio: 40, role: "base" },
      { hex: "#EADBC8", ratio: 30, role: "sub" },
      { hex: "#DAC0A3", ratio: 20, role: "sub" },
      { hex: "#0F2C59", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-325", name: "세이지와 청자색, 상아색", searchAliases: ["뮤트 그린 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#94A684", ratio: 40, role: "base" },
      { hex: "#AEC3AE", ratio: 30, role: "sub" },
      { hex: "#E4E4D0", ratio: 20, role: "sub" },
      { hex: "#FFEEF4", ratio: 10, role: "point" }],
    tags: ["그린", "웜톤", "뮤트"] },

  { id: "ch-326", name: "아이보리와 라벤더", searchAliases: ["페일 오렌지 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FFF3DA", ratio: 40, role: "base" },
      { hex: "#DFCCFB", ratio: 30, role: "sub" },
      { hex: "#D0BFFF", ratio: 20, role: "sub" },
      { hex: "#BEADFA", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","퍼플"] },

  { id: "ch-327", name: "은회색 위에 겹친 상아색", searchAliases: ["뮤트 시안 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#96B6C5", ratio: 40, role: "base" },
      { hex: "#ADC4CE", ratio: 30, role: "sub" },
      { hex: "#EEE0C9", ratio: 20, role: "sub" },
      { hex: "#F1F0E8", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "뮤트"] },

  { id: "ch-328", name: "아이보리 위에 벚꽃색 한 점", searchAliases: ["페일 오렌지 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FFEECC", ratio: 40, role: "base" },
      { hex: "#FFDDCC", ratio: 30, role: "sub" },
      { hex: "#FFCCCC", ratio: 20, role: "sub" },
      { hex: "#FEBBCC", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-329", name: "백자와 벚꽃색 사이", searchAliases: ["페일 그린 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#FAF3F0", ratio: 40, role: "base" },
      { hex: "#D4E2D4", ratio: 30, role: "sub" },
      { hex: "#FFCACC", ratio: 20, role: "sub" },
      { hex: "#DBC4F0", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","무채색"] },

  { id: "ch-330", name: "피스타치오 곁의 연노랑", searchAliases: ["뮤트 그린 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#AAC8A7", ratio: 40, role: "base" },
      { hex: "#C3EDC0", ratio: 30, role: "sub" },
      { hex: "#E9FFC2", ratio: 20, role: "sub" },
      { hex: "#FDFFAE", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "뮤트"] },

  { id: "ch-331", name: "옥색의 백자 테두리", searchAliases: ["뮤트 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#A0C49D", ratio: 40, role: "base" },
      { hex: "#C4D7B2", ratio: 30, role: "sub" },
      { hex: "#E1ECC8", ratio: 20, role: "sub" },
      { hex: "#F7FFE5", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "뮤트"] },

  { id: "ch-332", name: "백자 위에 벚꽃색 한 점", searchAliases: ["페일 핑크 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F9F5F6", ratio: 40, role: "base" },
      { hex: "#F8E8EE", ratio: 30, role: "sub" },
      { hex: "#FDCEDF", ratio: 20, role: "sub" },
      { hex: "#F2BED1", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","파스텔","무채색"] },

  { id: "ch-333", name: "물빛과 백자, 빙하색", searchAliases: ["페일 시안 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#C4DFDF", ratio: 40, role: "base" },
      { hex: "#D2E9E9", ratio: 30, role: "sub" },
      { hex: "#E3F4F4", ratio: 20, role: "sub" },
      { hex: "#F8F6F4", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "파스텔"] },

  { id: "ch-334", name: "연노랑과 회청색", searchAliases: ["페일 옐로우 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#F5F0BB", ratio: 40, role: "base" },
      { hex: "#DBDFAA", ratio: 30, role: "sub" },
      { hex: "#B3C890", ratio: 20, role: "sub" },
      { hex: "#73A9AD", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "파스텔"] },

  { id: "ch-335", name: "백자에서 딸기우유까지", searchAliases: ["페일 옐로우 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F9FBE7", ratio: 40, role: "base" },
      { hex: "#F0EDD4", ratio: 30, role: "sub" },
      { hex: "#ECCDB4", ratio: 20, role: "sub" },
      { hex: "#FEA1A1", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","무채색"] },

  { id: "ch-336", name: "세이지 바탕의 밝은 연민트", searchAliases: ["뮤트 그린 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#99A98F", ratio: 40, role: "base" },
      { hex: "#C1D0B5", ratio: 30, role: "sub" },
      { hex: "#D6E8DB", ratio: 20, role: "sub" },
      { hex: "#FFF8DE", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "뮤트"] },

  { id: "ch-337", name: "백자 위에 겹친 피스타치오", searchAliases: ["페일 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F6FFDE", ratio: 40, role: "base" },
      { hex: "#E3F2C1", ratio: 30, role: "sub" },
      { hex: "#C9DBB2", ratio: 20, role: "sub" },
      { hex: "#AAC8A7", ratio: 10, role: "point" }],
    tags: ["그린", "웜톤", "파스텔"] },

  { id: "ch-338", name: "진분홍과 벚꽃색 사이", searchAliases: ["핑크 × 레드"], scheme: "tone-on-tone",
    colors: [
      { hex: "#D14D72", ratio: 40, role: "base" },
      { hex: "#FFABAB", ratio: 30, role: "sub" },
      { hex: "#FCC8D1", ratio: 20, role: "sub" },
      { hex: "#FEF2F4", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","레드"] },

  { id: "ch-339", name: "백자 곁의 등꽃색", searchAliases: ["라이트 핑크 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FDF4F5", ratio: 40, role: "base" },
      { hex: "#E8A0BF", ratio: 30, role: "sub" },
      { hex: "#BA90C6", ratio: 20, role: "sub" },
      { hex: "#C0DBEA", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","파스텔","무채색"] },

  { id: "ch-340", name: "연노랑에서 피스타치오까지", searchAliases: ["페일 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#DDFFBB", ratio: 40, role: "base" },
      { hex: "#C7E9B0", ratio: 30, role: "sub" },
      { hex: "#B3C99C", ratio: 20, role: "sub" },
      { hex: "#A4BC92", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔"] },

  { id: "ch-341", name: "웜그레이 바탕의 밝은 상아색", searchAliases: ["뮤트 오렌지 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#A9907E", ratio: 40, role: "base" },
      { hex: "#F3DEBA", ratio: 30, role: "sub" },
      { hex: "#ABC4AA", ratio: 20, role: "sub" },
      { hex: "#675D50", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "뮤트"] },

  { id: "ch-342", name: "슬레이트와 딸기우유, 석회색", searchAliases: ["뮤트 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#867070", ratio: 40, role: "base" },
      { hex: "#D5B4B4", ratio: 30, role: "sub" },
      { hex: "#E4D0D0", ratio: 20, role: "sub" },
      { hex: "#F5EBEB", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","뮤트","무채색"] },

  { id: "ch-343", name: "밀짚색과 백자", searchAliases: ["뮤트 그린 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#CCD5AE", ratio: 40, role: "base" },
      { hex: "#E9EDC9", ratio: 30, role: "sub" },
      { hex: "#FEFAE0", ratio: 20, role: "sub" },
      { hex: "#FAEDCD", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","뮤트","옐로우"] },

  { id: "ch-344", name: "빙하색 위에 겹친 라일락", searchAliases: ["페일 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#ECF2FF", ratio: 40, role: "base" },
      { hex: "#E3DFFD", ratio: 30, role: "sub" },
      { hex: "#E5D1FA", ratio: 20, role: "sub" },
      { hex: "#FFF4D2", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","파스텔","무채색"] },

  { id: "ch-345", name: "모브와 상아색 사이", searchAliases: ["뮤트 레드 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#A7727D", ratio: 40, role: "base" },
      { hex: "#EDDBC7", ratio: 30, role: "sub" },
      { hex: "#F8EAD8", ratio: 20, role: "sub" },
      { hex: "#F9F5E7", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","뮤트","오렌지"] },

  { id: "ch-346", name: "백자의 복숭아색 테두리", searchAliases: ["페일 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#ECF9FF", ratio: 40, role: "base" },
      { hex: "#FFFBEB", ratio: 30, role: "sub" },
      { hex: "#FFE7CC", ratio: 20, role: "sub" },
      { hex: "#F8CBA6", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-347", name: "벚꽃색 곁의 하늘색", searchAliases: ["페일 레드 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#EAC7C7", ratio: 40, role: "base" },
      { hex: "#A0C3D2", ratio: 30, role: "sub" },
      { hex: "#F7F5EB", ratio: 20, role: "sub" },
      { hex: "#EAE0DA", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","시안"] },

  { id: "ch-348", name: "더스티블루 바탕의 밝은 상아색", searchAliases: ["시안 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#579BB1", ratio: 40, role: "base" },
      { hex: "#E1D7C6", ratio: 30, role: "sub" },
      { hex: "#ECE8DD", ratio: 20, role: "sub" },
      { hex: "#F8F4EA", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","오렌지"] },

  { id: "ch-349", name: "아이보리 위에 팥색 한 점", searchAliases: ["페일 오렌지 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F8EDE3", ratio: 40, role: "base" },
      { hex: "#DFD3C3", ratio: 30, role: "sub" },
      { hex: "#D0B8A8", ratio: 20, role: "sub" },
      { hex: "#85586F", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-350", name: "아이보리의 살구 테두리", searchAliases: ["페일 그린 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E8F3D6", ratio: 40, role: "base" },
      { hex: "#FCF9BE", ratio: 30, role: "sub" },
      { hex: "#FFDCA9", ratio: 20, role: "sub" },
      { hex: "#FAAB78", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","옐로우"] },

  { id: "ch-351", name: "백자 위에 연어색 한 점", searchAliases: ["페일 오렌지 × 레드"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FEFCF3", ratio: 40, role: "base" },
      { hex: "#F5EBE0", ratio: 30, role: "sub" },
      { hex: "#F0DBDB", ratio: 20, role: "sub" },
      { hex: "#DBA39A", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-352", name: "슬레이트에서 오트밀까지", searchAliases: ["뮤트 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#65647C", ratio: 40, role: "base" },
      { hex: "#8B7E74", ratio: 30, role: "sub" },
      { hex: "#C7BCA1", ratio: 20, role: "sub" },
      { hex: "#F1D3B3", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","뮤트","무채색"] },

  { id: "ch-353", name: "연노랑과 벚꽃색, 제비꽃", searchAliases: ["페일 옐로우 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#FBFACD", ratio: 40, role: "base" },
      { hex: "#DEBACE", ratio: 30, role: "sub" },
      { hex: "#BA94D1", ratio: 20, role: "sub" },
      { hex: "#7F669D", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","핑크"] },

  { id: "ch-354", name: "연민트와 옥색", searchAliases: ["페일 그린 × 시안"], scheme: "tone-on-tone",
    colors: [
      { hex: "#DEF5E5", ratio: 40, role: "base" },
      { hex: "#BCEAD5", ratio: 30, role: "sub" },
      { hex: "#9ED5C5", ratio: 20, role: "sub" },
      { hex: "#8EC3B0", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔"] },

  { id: "ch-355", name: "산호색 위에 겹친 연녹색", searchAliases: ["라이트 레드 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FF8787", ratio: 40, role: "base" },
      { hex: "#F8C4B4", ratio: 30, role: "sub" },
      { hex: "#E5EBB2", ratio: 20, role: "sub" },
      { hex: "#BCE29E", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "파스텔"] },

  { id: "ch-356", name: "백자와 코코아 사이", searchAliases: ["뮤트 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFF8EA", ratio: 40, role: "base" },
      { hex: "#9E7676", ratio: 30, role: "sub" },
      { hex: "#815B5B", ratio: 20, role: "sub" },
      { hex: "#594545", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","뮤트","무채색"] },

  { id: "ch-357", name: "아이보리 곁의 슬레이트", searchAliases: ["페일 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F8EDE3", ratio: 40, role: "base" },
      { hex: "#DFD3C3", ratio: 30, role: "sub" },
      { hex: "#D0B8A8", ratio: 20, role: "sub" },
      { hex: "#7D6E83", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-358", name: "아이보리의 더스티블루 테두리", searchAliases: ["페일 오렌지 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#F5EFE6", ratio: 40, role: "base" },
      { hex: "#E8DFCA", ratio: 30, role: "sub" },
      { hex: "#AEBDCA", ratio: 20, role: "sub" },
      { hex: "#7895B2", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-359", name: "백자에서 연어색까지", searchAliases: ["페일 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFF5E4", ratio: 40, role: "base" },
      { hex: "#FFE3E1", ratio: 30, role: "sub" },
      { hex: "#FFD1D1", ratio: 20, role: "sub" },
      { hex: "#FF9494", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","무채색"] },

  { id: "ch-360", name: "라벤더 위에 빙하색 한 점", searchAliases: ["페일 블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#B1B2FF", ratio: 40, role: "base" },
      { hex: "#AAC4FF", ratio: 30, role: "sub" },
      { hex: "#D2DAFF", ratio: 20, role: "sub" },
      { hex: "#EEF1FF", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "파스텔"] },

  { id: "ch-361", name: "연민트와 백자, 라일락", searchAliases: ["페일 시안 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CDF0EA", ratio: 40, role: "base" },
      { hex: "#F9F9F9", ratio: 30, role: "sub" },
      { hex: "#ECC5FB", ratio: 20, role: "sub" },
      { hex: "#FAF4B7", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","무채색"] },

  { id: "ch-362", name: "비취색 바탕의 밝은 아이보리", searchAliases: ["뮤트 그린 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#7FB77E", ratio: 40, role: "base" },
      { hex: "#B1D7B4", ratio: 30, role: "sub" },
      { hex: "#F7F6DC", ratio: 20, role: "sub" },
      { hex: "#FFC090", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "뮤트"] },

  { id: "ch-363", name: "아이보리와 터쿼이즈", searchAliases: ["페일 오렌지 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F7ECDE", ratio: 40, role: "base" },
      { hex: "#E9DAC1", ratio: 30, role: "sub" },
      { hex: "#9ED2C6", ratio: 20, role: "sub" },
      { hex: "#54BAB9", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-364", name: "크림 위에 겹친 모브", searchAliases: ["페일 오렌지 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F5E8C7", ratio: 40, role: "base" },
      { hex: "#ECCCB2", ratio: 30, role: "sub" },
      { hex: "#DEB6AB", ratio: 20, role: "sub" },
      { hex: "#AC7088", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-365", name: "연노랑과 연청보라 사이", searchAliases: ["페일 옐로우 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FFF9CA", ratio: 40, role: "base" },
      { hex: "#FFDEB4", ratio: 30, role: "sub" },
      { hex: "#FFB4B4", ratio: 20, role: "sub" },
      { hex: "#B2A4FF", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","오렌지"] },

  { id: "ch-366", name: "세이지 곁의 백자", searchAliases: ["뮤트 그린 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#94B49F", ratio: 40, role: "base" },
      { hex: "#CEE5D0", ratio: 30, role: "sub" },
      { hex: "#FCF8E8", ratio: 20, role: "sub" },
      { hex: "#ECB390", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "뮤트"] },

  { id: "ch-367", name: "밀짚색의 아이보리 테두리", searchAliases: ["라이트 그린 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#CCD6A6", ratio: 40, role: "base" },
      { hex: "#DAE2B6", ratio: 30, role: "sub" },
      { hex: "#DFE8CC", ratio: 20, role: "sub" },
      { hex: "#F7EDDB", ratio: 10, role: "point" }],
    tags: ["그린", "웜톤", "파스텔"] },

  { id: "ch-368", name: "연분홍 위에 더스티블루 한 점", searchAliases: ["페일 레드 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F2D7D9", ratio: 40, role: "base" },
      { hex: "#D3CEDF", ratio: 30, role: "sub" },
      { hex: "#9CB4CC", ratio: 20, role: "sub" },
      { hex: "#748DA6", ratio: 10, role: "point" }],
    tags: ["레드","쿨톤","파스텔","블루"] },

  { id: "ch-369", name: "올리브 바탕의 밝은 오트밀", searchAliases: ["뮤트 옐로우 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#87805E", ratio: 40, role: "base" },
      { hex: "#B09B71", ratio: 30, role: "sub" },
      { hex: "#D8CCA3", ratio: 20, role: "sub" },
      { hex: "#EDDFB3", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","뮤트","오렌지"] },

  { id: "ch-370", name: "연민트와 백자, 벚꽃색", searchAliases: ["페일 시안 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CDF0EA", ratio: 40, role: "base" },
      { hex: "#F9F9F9", ratio: 30, role: "sub" },
      { hex: "#F6C6EA", ratio: 20, role: "sub" },
      { hex: "#FAF4B7", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","파스텔","무채색"] },

  { id: "ch-371", name: "물빛과 차콜", searchAliases: ["페일 그린 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#C2DED1", ratio: 40, role: "base" },
      { hex: "#ECE5C7", ratio: 30, role: "sub" },
      { hex: "#CDC2AE", ratio: 20, role: "sub" },
      { hex: "#354259", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","파스텔","옐로우"] },

  { id: "ch-372", name: "산호색에서 연분홍까지", searchAliases: ["비비드 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F47C7C", ratio: 40, role: "base" },
      { hex: "#EF9F9F", ratio: 30, role: "sub" },
      { hex: "#FAD4D4", ratio: 20, role: "sub" },
      { hex: "#FFF2F2", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "비비드"] },

  { id: "ch-373", name: "벚꽃색 위에 겹친 아이보리", searchAliases: ["페일 레드 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#F4BFBF", ratio: 40, role: "base" },
      { hex: "#FFD9C0", ratio: 30, role: "sub" },
      { hex: "#FAF0D7", ratio: 20, role: "sub" },
      { hex: "#8CC0DE", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","오렌지"] },

  { id: "ch-374", name: "연보라와 백자 사이", searchAliases: ["페일 핑크 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#F9CEEE", ratio: 40, role: "base" },
      { hex: "#F9F3EE", ratio: 30, role: "sub" },
      { hex: "#CCF3EE", ratio: 20, role: "sub" },
      { hex: "#97C4B8", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","파스텔","무채색"] },

  { id: "ch-375", name: "크림 곁의 은회색", searchAliases: ["페일 오렌지 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#F9EBC8", ratio: 40, role: "base" },
      { hex: "#FEFBE7", ratio: 30, role: "sub" },
      { hex: "#DAE5D0", ratio: 20, role: "sub" },
      { hex: "#A0BCC2", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-376", name: "살구에서 아이보리까지", searchAliases: ["라이트 오렌지 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E6BA95", ratio: 40, role: "base" },
      { hex: "#FAFDD6", ratio: 30, role: "sub" },
      { hex: "#E4E9BE", ratio: 20, role: "sub" },
      { hex: "#A2B38B", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","옐로우"] },

  { id: "ch-377", name: "백자의 상아색 테두리", searchAliases: ["페일 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFEEEE", ratio: 40, role: "base" },
      { hex: "#FFF6EA", ratio: 30, role: "sub" },
      { hex: "#F7E9D7", ratio: 20, role: "sub" },
      { hex: "#EBD8C3", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-378", name: "살구와 아이보리, 백자", searchAliases: ["라이트 오렌지 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#DAB88B", ratio: 40, role: "base" },
      { hex: "#F3E9DD", ratio: 30, role: "sub" },
      { hex: "#FDF6EC", ratio: 20, role: "sub" },
      { hex: "#B7CADB", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-379", name: "연녹색과 등꽃색", searchAliases: ["라이트 옐로우 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E2DEA9", ratio: 40, role: "base" },
      { hex: "#D18CE0", ratio: 30, role: "sub" },
      { hex: "#ECA6A6", ratio: 20, role: "sub" },
      { hex: "#EEEEEE", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","퍼플"] },

  { id: "ch-380", name: "토프 바탕의 밝은 백자", searchAliases: ["뮤트 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#AD8B73", ratio: 40, role: "base" },
      { hex: "#CEAB93", ratio: 30, role: "sub" },
      { hex: "#E3CAA5", ratio: 20, role: "sub" },
      { hex: "#FFFBE9", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "뮤트"] },

  { id: "ch-381", name: "상아색 위에 유칼립투스 한 점", searchAliases: ["페일 옐로우 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E5E3C9", ratio: 40, role: "base" },
      { hex: "#B4CFB0", ratio: 30, role: "sub" },
      { hex: "#94B49F", ratio: 20, role: "sub" },
      { hex: "#789395", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","파스텔","그린"] },

  { id: "ch-382", name: "더스티블루 위에 겹친 석회색", searchAliases: ["뮤트 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#7882A4", ratio: 40, role: "base" },
      { hex: "#C0A080", ratio: 30, role: "sub" },
      { hex: "#D1D1D1", ratio: 20, role: "sub" },
      { hex: "#EFEFEF", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","뮤트","오렌지"] },

  { id: "ch-383", name: "백자와 터쿼이즈 사이", searchAliases: ["페일 오렌지 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FBF8F1", ratio: 40, role: "base" },
      { hex: "#F7ECDE", ratio: 30, role: "sub" },
      { hex: "#E9DAC1", ratio: 20, role: "sub" },
      { hex: "#54BAB9", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-384", name: "아이보리 곁의 황토", searchAliases: ["페일 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFEDDB", ratio: 40, role: "base" },
      { hex: "#EDCDBB", ratio: 30, role: "sub" },
      { hex: "#E3B7A0", ratio: 20, role: "sub" },
      { hex: "#BF9270", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-385", name: "벚꽃색에서 팥색까지", searchAliases: ["페일 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F3C5C5", ratio: 40, role: "base" },
      { hex: "#C1A3A3", ratio: 30, role: "sub" },
      { hex: "#886F6F", ratio: 20, role: "sub" },
      { hex: "#694E4E", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "파스텔"] },

  { id: "ch-386", name: "연보라와 연노랑, 백자", searchAliases: ["페일 블루 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#D9D7F1", ratio: 40, role: "base" },
      { hex: "#FFFDDE", ratio: 30, role: "sub" },
      { hex: "#E7FBBE", ratio: 20, role: "sub" },
      { hex: "#FFCBCB", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","파스텔","옐로우"] },

  { id: "ch-387", name: "물빛과 더스티블루", searchAliases: ["페일 시안 × 블루"], scheme: "tone-on-tone",
    colors: [
      { hex: "#D3DEDC", ratio: 40, role: "base" },
      { hex: "#92A9BD", ratio: 30, role: "sub" },
      { hex: "#7C99AC", ratio: 20, role: "sub" },
      { hex: "#FFEFEF", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","블루"] },

  { id: "ch-388", name: "더스티로즈 바탕의 밝은 연보라", searchAliases: ["라이트 핑크 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#D77FA1", ratio: 40, role: "base" },
      { hex: "#BAABDA", ratio: 30, role: "sub" },
      { hex: "#D6E5FA", ratio: 20, role: "sub" },
      { hex: "#FFF9F9", ratio: 10, role: "point" }],
    tags: ["핑크","쿨톤","파스텔","블루"] },

  { id: "ch-389", name: "아이보리의 모브 테두리", searchAliases: ["페일 오렌지 × 퍼플"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F0ECE3", ratio: 40, role: "base" },
      { hex: "#DFD3C3", ratio: 30, role: "sub" },
      { hex: "#C7B198", ratio: 20, role: "sub" },
      { hex: "#A68DAD", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-390", name: "돌빛 위에 겹친 밀짚색", searchAliases: ["뮤트 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#8E806A", ratio: 40, role: "base" },
      { hex: "#C3B091", ratio: 30, role: "sub" },
      { hex: "#E4CDA7", ratio: 20, role: "sub" },
      { hex: "#FFE6BC", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "뮤트"] },

  { id: "ch-391", name: "상아색과 세이지 사이", searchAliases: ["페일 그린 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D3E4CD", ratio: 40, role: "base" },
      { hex: "#99A799", ratio: 30, role: "sub" },
      { hex: "#F2DDC1", ratio: 20, role: "sub" },
      { hex: "#E2C2B9", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","무채색"] },

  { id: "ch-392", name: "밀짚색 위에 연노랑 한 점", searchAliases: ["라이트 옐로우 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#DAD992", ratio: 40, role: "base" },
      { hex: "#E6DF9A", ratio: 30, role: "sub" },
      { hex: "#F3ED9E", ratio: 20, role: "sub" },
      { hex: "#FFFEA9", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "파스텔"] },

  { id: "ch-393", name: "아이보리 곁의 암청색", searchAliases: ["페일 옐로우 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#F0E9D2", ratio: 40, role: "base" },
      { hex: "#E6DDC4", ratio: 30, role: "sub" },
      { hex: "#678983", ratio: 20, role: "sub" },
      { hex: "#181D31", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","오렌지"] },

  { id: "ch-394", name: "옥색에서 상아색까지", searchAliases: ["뮤트 시안 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#89B5AF", ratio: 40, role: "base" },
      { hex: "#96C7C1", ratio: 30, role: "sub" },
      { hex: "#DED9C4", ratio: 20, role: "sub" },
      { hex: "#D0CAB2", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "뮤트"] },

  { id: "ch-395", name: "연민트의 살구 테두리", searchAliases: ["페일 그린 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CEE5D0", ratio: 40, role: "base" },
      { hex: "#F3F0D7", ratio: 30, role: "sub" },
      { hex: "#FED2AA", ratio: 20, role: "sub" },
      { hex: "#FFBF86", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","옐로우"] },

  { id: "ch-396", name: "복숭아색 위에 회청색 한 점", searchAliases: ["페일 오렌지 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#F6D7A7", ratio: 40, role: "base" },
      { hex: "#F6EABE", ratio: 30, role: "sub" },
      { hex: "#C8E3D4", ratio: 20, role: "sub" },
      { hex: "#87AAAA", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","옐로우"] },

  { id: "ch-397", name: "백자와 상아색, 옥색", searchAliases: ["페일 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FEF5ED", ratio: 40, role: "base" },
      { hex: "#D3E4CD", ratio: 30, role: "sub" },
      { hex: "#ADC2A9", ratio: 20, role: "sub" },
      { hex: "#99A799", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","무채색"] },

  { id: "ch-398", name: "연민트와 더스티로즈", searchAliases: ["페일 시안 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#D1E8E4", ratio: 40, role: "base" },
      { hex: "#C37B89", ratio: 30, role: "sub" },
      { hex: "#BCCC9A", ratio: 20, role: "sub" },
      { hex: "#EAE7C6", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","레드"] },

  { id: "ch-399", name: "연필심 바탕의 밝은 오트밀", searchAliases: ["뮤트 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#6C4A4A", ratio: 40, role: "base" },
      { hex: "#C89595", ratio: 30, role: "sub" },
      { hex: "#DDBEBE", ratio: 20, role: "sub" },
      { hex: "#EDEDED", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "뮤트"] },

  { id: "ch-400", name: "상아색 위에 겹친 머시룸", searchAliases: ["페일 오렌지 × 옐로우"], scheme: "tone-on-tone",
    colors: [
      { hex: "#E5DCC3", ratio: 40, role: "base" },
      { hex: "#C7BEA2", ratio: 30, role: "sub" },
      { hex: "#AAA492", ratio: 20, role: "sub" },
      { hex: "#9A9483", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","옐로우"] },

  { id: "ch-401", name: "석회색과 아이보리 사이", searchAliases: ["페일 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#DBD0C0", ratio: 40, role: "base" },
      { hex: "#FAEEE0", ratio: 30, role: "sub" },
      { hex: "#F9E4C8", ratio: 20, role: "sub" },
      { hex: "#F9CF93", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-402", name: "딸기우유 곁의 연노랑", searchAliases: ["페일 레드 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FFADAD", ratio: 40, role: "base" },
      { hex: "#FFDAC7", ratio: 30, role: "sub" },
      { hex: "#FFEFBC", ratio: 20, role: "sub" },
      { hex: "#FFFEB7", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","오렌지"] },

  { id: "ch-403", name: "터쿼이즈 바탕의 밝은 백자", searchAliases: ["뮤트 시안 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#79B4B7", ratio: 40, role: "base" },
      { hex: "#FEFBF3", ratio: 30, role: "sub" },
      { hex: "#F8F0DF", ratio: 20, role: "sub" },
      { hex: "#9D9D9D", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","뮤트","무채색"] },

  { id: "ch-404", name: "상아색의 데님 테두리", searchAliases: ["페일 오렌지 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#F0E5CF", ratio: 40, role: "base" },
      { hex: "#F7F6F2", ratio: 30, role: "sub" },
      { hex: "#C8C6C6", ratio: 20, role: "sub" },
      { hex: "#4B6587", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-405", name: "은회색에서 연분홍까지", searchAliases: ["뮤트 시안 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#93B5C6", ratio: 40, role: "base" },
      { hex: "#C9CCD5", ratio: 30, role: "sub" },
      { hex: "#E4D8DC", ratio: 20, role: "sub" },
      { hex: "#FFE3E3", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","뮤트","블루"] },

  { id: "ch-406", name: "크림 위에 연필심 한 점", searchAliases: ["페일 오렌지 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F5E8C7", ratio: 40, role: "base" },
      { hex: "#DEBA9D", ratio: 30, role: "sub" },
      { hex: "#9E7777", ratio: 20, role: "sub" },
      { hex: "#6F4C5B", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-407", name: "모래색과 밀짚색, 연노랑", searchAliases: ["뮤트 옐로우 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#C3BA85", ratio: 40, role: "base" },
      { hex: "#DAD5AB", ratio: 30, role: "sub" },
      { hex: "#F0F0CB", ratio: 20, role: "sub" },
      { hex: "#FEFFE2", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "뮤트"] },

  { id: "ch-408", name: "백자와 오트밀", searchAliases: ["페일 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FDEFEF", ratio: 40, role: "base" },
      { hex: "#F4DFD0", ratio: 30, role: "sub" },
      { hex: "#DAD0C2", ratio: 20, role: "sub" },
      { hex: "#CDBBA7", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-409", name: "연분홍 위에 겹친 백자", searchAliases: ["페일 레드 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FCD8D4", ratio: 40, role: "base" },
      { hex: "#FDF6F0", ratio: 30, role: "sub" },
      { hex: "#F8E2CF", ratio: 20, role: "sub" },
      { hex: "#F5C6AA", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","무채색"] },

  { id: "ch-410", name: "아이보리와 웜그레이 사이", searchAliases: ["페일 옐로우 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FEF7DC", ratio: 40, role: "base" },
      { hex: "#E6DDC6", ratio: 30, role: "sub" },
      { hex: "#C2B8A3", ratio: 20, role: "sub" },
      { hex: "#A19882", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","오렌지"] },

  { id: "ch-411", name: "연분홍 곁의 연필심", searchAliases: ["페일 레드 × 옐로우"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F7DAD9", ratio: 40, role: "base" },
      { hex: "#FFF5DA", ratio: 30, role: "sub" },
      { hex: "#D6D2C4", ratio: 20, role: "sub" },
      { hex: "#5D534A", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","오렌지"] },

  { id: "ch-412", name: "연민트의 등꽃색 테두리", searchAliases: ["페일 시안 × 퍼플"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CDF0EA", ratio: 40, role: "base" },
      { hex: "#F9F9F9", ratio: 30, role: "sub" },
      { hex: "#F6C6EA", ratio: 20, role: "sub" },
      { hex: "#C490E4", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","무채색"] },

  { id: "ch-413", name: "연민트 아래 짙은 고동색", searchAliases: ["페일 그린 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#CEE5D0", ratio: 40, role: "base" },
      { hex: "#F3F0D7", ratio: 30, role: "sub" },
      { hex: "#D8B384", ratio: 20, role: "sub" },
      { hex: "#5E454B", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","옐로우"] },

  { id: "ch-414", name: "백자 위에 세이지 한 점", searchAliases: ["페일 시안 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#FFF5EB", ratio: 40, role: "base" },
      { hex: "#DEEDF0", ratio: 30, role: "sub" },
      { hex: "#F4C7AB", ratio: 20, role: "sub" },
      { hex: "#B2B8A3", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","파스텔","무채색"] },

  { id: "ch-415", name: "연민트와 벚꽃색", searchAliases: ["페일 그린 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#CAF7E3", ratio: 40, role: "base" },
      { hex: "#F8EDED", ratio: 30, role: "sub" },
      { hex: "#F6DFEB", ratio: 20, role: "sub" },
      { hex: "#E4BAD4", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","무채색"] },

  { id: "ch-416", name: "아이보리와 백자, 짙은 솔잎색", searchAliases: ["페일 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FAF1E6", ratio: 40, role: "base" },
      { hex: "#FDFAF6", ratio: 30, role: "sub" },
      { hex: "#E4EFE7", ratio: 20, role: "sub" },
      { hex: "#064420", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","무채색"] },

  { id: "ch-417", name: "복숭아색에서 더스티로즈까지", searchAliases: ["페일 오렌지 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FBC6A4", ratio: 40, role: "base" },
      { hex: "#F4A9A8", ratio: 30, role: "sub" },
      { hex: "#CE97B0", ratio: 20, role: "sub" },
      { hex: "#AFB9C8", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","레드"] },

  { id: "ch-418", name: "백자 위에 겹친 더스티로즈", searchAliases: ["페일 블루 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#FAF3F3", ratio: 40, role: "base" },
      { hex: "#E1E5EA", ratio: 30, role: "sub" },
      { hex: "#A7BBC7", ratio: 20, role: "sub" },
      { hex: "#DA7F8F", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","파스텔","무채색"] },

  { id: "ch-419", name: "백랍과 크림 사이", searchAliases: ["뮤트 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#A0937D", ratio: 40, role: "base" },
      { hex: "#E7D4B5", ratio: 30, role: "sub" },
      { hex: "#F6E6CB", ratio: 20, role: "sub" },
      { hex: "#E3CDC1", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "뮤트"] },

  { id: "ch-420", name: "코코아 곁의 안개색", searchAliases: ["뮤트 시안 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#766161", ratio: 40, role: "base" },
      { hex: "#87A7B3", ratio: 30, role: "sub" },
      { hex: "#CDC7BE", ratio: 20, role: "sub" },
      { hex: "#E1F1DD", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","뮤트","무채색"] },

  { id: "ch-421", name: "아이보리의 오렌지 테두리", searchAliases: ["페일 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FCECDD", ratio: 40, role: "base" },
      { hex: "#FFC288", ratio: 30, role: "sub" },
      { hex: "#FEA82F", ratio: 20, role: "sub" },
      { hex: "#FF6701", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-422", name: "민트와 연녹색, 복숭아색", searchAliases: ["라이트 시안 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#98DDCA", ratio: 40, role: "base" },
      { hex: "#D5ECC2", ratio: 30, role: "sub" },
      { hex: "#FFD3B4", ratio: 20, role: "sub" },
      { hex: "#FFAAA7", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","그린"] },

  { id: "ch-423", name: "백자와 터쿼이즈", searchAliases: ["뮤트 시안 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#F7F3E9", ratio: 40, role: "base" },
      { hex: "#A3D2CA", ratio: 30, role: "sub" },
      { hex: "#5EAAA8", ratio: 20, role: "sub" },
      { hex: "#F05945", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","뮤트","무채색"] },

  { id: "ch-424", name: "백자 위에 겹친 연필심", searchAliases: ["비비드 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F3F4ED", ratio: 40, role: "base" },
      { hex: "#536162", ratio: 30, role: "sub" },
      { hex: "#424642", ratio: 20, role: "sub" },
      { hex: "#C06014", ratio: 10, role: "point" }],
    tags: ["오렌지","쿨톤","비비드","무채색"] },

  { id: "ch-425", name: "웜그레이 바탕의 밝은 석회색", searchAliases: ["페일 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#9E9D89", ratio: 40, role: "base" },
      { hex: "#E4D3CF", ratio: 30, role: "sub" },
      { hex: "#E2BCB7", ratio: 20, role: "sub" },
      { hex: "#B67162", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","무채색"] },

  { id: "ch-426", name: "연민트 위에 벚꽃색 한 점", searchAliases: ["페일 그린 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#CAF7E3", ratio: 40, role: "base" },
      { hex: "#EDFFEC", ratio: 30, role: "sub" },
      { hex: "#F6DFEB", ratio: 20, role: "sub" },
      { hex: "#E4BAD4", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","파스텔","무채색"] },

  { id: "ch-427", name: "코코아에서 안개색까지", searchAliases: ["뮤트 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#865858", ratio: 40, role: "base" },
      { hex: "#8E7F7F", ratio: 30, role: "sub" },
      { hex: "#BBBBBB", ratio: 20, role: "sub" },
      { hex: "#E2D5D5", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","뮤트","무채색"] },

  { id: "ch-428", name: "상아색과 산호색 사이", searchAliases: ["페일 오렌지 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#F0E4D7", ratio: 40, role: "base" },
      { hex: "#F5C0C0", ratio: 30, role: "sub" },
      { hex: "#FF7171", ratio: 20, role: "sub" },
      { hex: "#9FD8DF", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","레드"] },

  { id: "ch-429", name: "오트밀 곁의 연필심", searchAliases: ["뮤트 옐로우 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C8C6A7", ratio: 40, role: "base" },
      { hex: "#92967D", ratio: 30, role: "sub" },
      { hex: "#6E7C7C", ratio: 20, role: "sub" },
      { hex: "#435560", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","뮤트","무채색"] },

  { id: "ch-430", name: "상아색의 진분홍 테두리", searchAliases: ["페일 레드 × 핑크"], scheme: "tone-on-tone",
    colors: [
      { hex: "#DDDDDD", ratio: 40, role: "base" },
      { hex: "#F9F3F3", ratio: 30, role: "sub" },
      { hex: "#F7D9D9", ratio: 20, role: "sub" },
      { hex: "#F25287", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","무채색"] },

  { id: "ch-431", name: "하늘색과 오트밀, 모래색", searchAliases: ["라이트 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#A1CAE2", ratio: 40, role: "base" },
      { hex: "#C2B092", ratio: 30, role: "sub" },
      { hex: "#CFC5A5", ratio: 20, role: "sub" },
      { hex: "#EAE3C8", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","파스텔","오렌지"] },

  { id: "ch-432", name: "옥색과 상아색", searchAliases: ["뮤트 그린 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#99BBAD", ratio: 40, role: "base" },
      { hex: "#EBD8B7", ratio: 30, role: "sub" },
      { hex: "#C6A9A3", ratio: 20, role: "sub" },
      { hex: "#9A8194", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","뮤트","오렌지"] },

  { id: "ch-433", name: "빙하색 아래 짙은 딥 틸", searchAliases: ["페일 옐로우 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#E7E6E1", ratio: 40, role: "base" },
      { hex: "#F7F6E7", ratio: 30, role: "sub" },
      { hex: "#F2A154", ratio: 20, role: "sub" },
      { hex: "#314E52", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","무채색"] },

  { id: "ch-434", name: "연어색에서 연분홍까지", searchAliases: ["페일 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FF9292", ratio: 40, role: "base" },
      { hex: "#FFB4B4", ratio: 30, role: "sub" },
      { hex: "#FFDCDC", ratio: 20, role: "sub" },
      { hex: "#FFE8E8", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "파스텔"] },

  { id: "ch-435", name: "연분홍 위에 물빛 한 점", searchAliases: ["페일 레드 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#FCD1D1", ratio: 40, role: "base" },
      { hex: "#ECE2E1", ratio: 30, role: "sub" },
      { hex: "#D3E0DC", ratio: 20, role: "sub" },
      { hex: "#AEE1E1", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "파스텔"] },

  { id: "ch-436", name: "백자 위에 겹친 슬레이트", searchAliases: ["페일 옐로우 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#F7F7E8", ratio: 40, role: "base" },
      { hex: "#C7CFB7", ratio: 30, role: "sub" },
      { hex: "#9DAD7F", ratio: 20, role: "sub" },
      { hex: "#557174", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","그린"] },

  { id: "ch-437", name: "아이보리와 바다색 사이", searchAliases: ["페일 옐로우 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#F4F5DB", ratio: 40, role: "base" },
      { hex: "#D9DAB0", ratio: 30, role: "sub" },
      { hex: "#487E95", ratio: 20, role: "sub" },
      { hex: "#23689B", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "파스텔"] },

  { id: "ch-438", name: "연옥색 곁의 팥색", searchAliases: ["페일 그린 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#BEE5D3", ratio: 40, role: "base" },
      { hex: "#D6B0B1", ratio: 30, role: "sub" },
      { hex: "#8B5E83", ratio: 20, role: "sub" },
      { hex: "#3B5360", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","파스텔","레드"] },

  { id: "ch-439", name: "연노랑의 벚꽃색 테두리", searchAliases: ["페일 옐로우 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FDFFBC", ratio: 40, role: "base" },
      { hex: "#FFEEBB", ratio: 30, role: "sub" },
      { hex: "#FFDCB8", ratio: 20, role: "sub" },
      { hex: "#FFC1B6", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "파스텔"] },

  { id: "ch-440", name: "숲색 바탕의 밝은 딸기우유", searchAliases: ["딥 그린 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#295939", ratio: 40, role: "base" },
      { hex: "#E9B0DF", ratio: 30, role: "sub" },
      { hex: "#ADEECF", ratio: 20, role: "sub" },
      { hex: "#E8EFEB", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","딥","핑크"] },

  { id: "ch-441", name: "유칼립투스에서 빙하색까지", searchAliases: ["뮤트 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#7C9473", ratio: 40, role: "base" },
      { hex: "#CFDAC8", ratio: 30, role: "sub" },
      { hex: "#E8EAE6", ratio: 20, role: "sub" },
      { hex: "#CDD0CB", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "뮤트"] },

  { id: "ch-442", name: "백자 위에 테라코타 한 점", searchAliases: ["페일 그린 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#FCF8E8", ratio: 40, role: "base" },
      { hex: "#D4E2D4", ratio: 30, role: "sub" },
      { hex: "#ECB390", ratio: 20, role: "sub" },
      { hex: "#DF7861", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","무채색"] },

  { id: "ch-443", name: "백랍과 모래색, 연분홍", searchAliases: ["라이트 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#999B84", ratio: 40, role: "base" },
      { hex: "#D8AC9C", ratio: 30, role: "sub" },
      { hex: "#EFD9D1", ratio: 20, role: "sub" },
      { hex: "#F4EEED", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-444", name: "토프와 연민트", searchAliases: ["뮤트 레드 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#A07676", ratio: 40, role: "base" },
      { hex: "#825959", ratio: 30, role: "sub" },
      { hex: "#8AD7C1", ratio: 20, role: "sub" },
      { hex: "#C6FCED", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "뮤트"] },

  { id: "ch-445", name: "물빛 위에 겹친 딸기우유", searchAliases: ["페일 시안 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#BCE6EB", ratio: 40, role: "base" },
      { hex: "#FDCFDF", ratio: 30, role: "sub" },
      { hex: "#FBBEDF", ratio: 20, role: "sub" },
      { hex: "#FCA3CC", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","핑크"] },

  { id: "ch-446", name: "아이보리와 안개색 사이", searchAliases: ["페일 옐로우 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F9F7CF", ratio: 40, role: "base" },
      { hex: "#F2DCBB", ratio: 30, role: "sub" },
      { hex: "#BBBBBB", ratio: 20, role: "sub" },
      { hex: "#AAAAAA", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","오렌지"] },

  { id: "ch-447", name: "아이보리 곁의 데님", searchAliases: ["페일 오렌지 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FFF3E2", ratio: 40, role: "base" },
      { hex: "#EBCFC4", ratio: 30, role: "sub" },
      { hex: "#706897", ratio: 20, role: "sub" },
      { hex: "#9088D4", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-448", name: "백자의 연필심 테두리", searchAliases: ["뮤트 블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F4F4F2", ratio: 40, role: "base" },
      { hex: "#E8E8E8", ratio: 30, role: "sub" },
      { hex: "#BBBFCA", ratio: 20, role: "sub" },
      { hex: "#495464", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","뮤트","무채색"] },

  { id: "ch-449", name: "토프와 석회색, 백자", searchAliases: ["페일 옐로우 × 레드"], scheme: "tone-on-tone",
    colors: [
      { hex: "#968C83", ratio: 40, role: "base" },
      { hex: "#D6D2C4", ratio: 30, role: "sub" },
      { hex: "#FFF5EA", ratio: 20, role: "sub" },
      { hex: "#F7DAD9", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","무채색"] },

  { id: "ch-450", name: "연민트 아래 짙은 연필심", searchAliases: ["페일 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#D9E4DD", ratio: 40, role: "base" },
      { hex: "#FBF7F0", ratio: 30, role: "sub" },
      { hex: "#CDC9C3", ratio: 20, role: "sub" },
      { hex: "#555555", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","무채색"] },

  { id: "ch-451", name: "백자에서 코코아까지", searchAliases: ["페일 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFF0F0", ratio: 40, role: "base" },
      { hex: "#EBD4D4", ratio: 30, role: "sub" },
      { hex: "#835858", ratio: 20, role: "sub" },
      { hex: "#463333", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","무채색"] },

  { id: "ch-452", name: "백자 위에 은회색 한 점", searchAliases: ["페일 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F6F6F6", ratio: 40, role: "base" },
      { hex: "#FFE2E2", ratio: 30, role: "sub" },
      { hex: "#FFC7C7", ratio: 20, role: "sub" },
      { hex: "#AAAAAA", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","무채색"] },

  { id: "ch-453", name: "복숭아색과 벽돌색", searchAliases: ["페일 오렌지 × 레드"], scheme: "tone-on-tone",
    colors: [
      { hex: "#EDCFA9", ratio: 40, role: "base" },
      { hex: "#E89F71", ratio: 30, role: "sub" },
      { hex: "#D57149", ratio: 20, role: "sub" },
      { hex: "#AA4A30", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-454", name: "백자 위에 겹친 차콜", searchAliases: ["페일 블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F1F3F8", ratio: 40, role: "base" },
      { hex: "#D6E0F0", ratio: 30, role: "sub" },
      { hex: "#8D93AB", ratio: 20, role: "sub" },
      { hex: "#393B44", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","파스텔","무채색"] },

  { id: "ch-455", name: "연민트와 슬레이트 사이", searchAliases: ["페일 그린 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#E0ECE4", ratio: 40, role: "base" },
      { hex: "#F7F2E7", ratio: 30, role: "sub" },
      { hex: "#D8D3CD", ratio: 20, role: "sub" },
      { hex: "#797A7E", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","오렌지"] },

  { id: "ch-456", name: "돌빛 곁의 벚꽃색", searchAliases: ["라이트 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#838383", ratio: 40, role: "base" },
      { hex: "#AD9D9D", ratio: 30, role: "sub" },
      { hex: "#D9ADAD", ratio: 20, role: "sub" },
      { hex: "#FCCBCB", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","무채색"] },

  { id: "ch-457", name: "상아색에서 세이지까지", searchAliases: ["페일 옐로우 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E3DFC8", ratio: 40, role: "base" },
      { hex: "#F5F1DA", ratio: 30, role: "sub" },
      { hex: "#96BB7C", ratio: 20, role: "sub" },
      { hex: "#EEBB4D", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "파스텔"] },

  { id: "ch-458", name: "아이보리의 슬레이트 테두리", searchAliases: ["페일 오렌지 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#F0ECE3", ratio: 40, role: "base" },
      { hex: "#DFD3C3", ratio: 30, role: "sub" },
      { hex: "#C7B198", ratio: 20, role: "sub" },
      { hex: "#596E79", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-459", name: "상아색과 아이보리, 세이지", searchAliases: ["페일 옐로우 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E3DFC8", ratio: 40, role: "base" },
      { hex: "#F5F1DA", ratio: 30, role: "sub" },
      { hex: "#9BB67C", ratio: 20, role: "sub" },
      { hex: "#EEBB4D", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "파스텔"] },

  { id: "ch-460", name: "모래색과 꿀빛", searchAliases: ["뮤트 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#B9AC92", ratio: 40, role: "base" },
      { hex: "#FFA931", ratio: 30, role: "sub" },
      { hex: "#FECB89", ratio: 20, role: "sub" },
      { hex: "#FBE6D4", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "뮤트"] },

  { id: "ch-461", name: "머시룸 아래 짙은 와인", searchAliases: ["뮤트 레드 × 핑크"], scheme: "tone-on-tone",
    colors: [
      { hex: "#CCAFAF", ratio: 40, role: "base" },
      { hex: "#FFCAC2", ratio: 30, role: "sub" },
      { hex: "#FC9D9D", ratio: 20, role: "sub" },
      { hex: "#900C3F", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "뮤트"] },

  { id: "ch-462", name: "상아색 위에 겹친 딸기우유", searchAliases: ["페일 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#DDDDDD", ratio: 40, role: "base" },
      { hex: "#FAB7B7", ratio: 30, role: "sub" },
      { hex: "#F5A8A8", ratio: 20, role: "sub" },
      { hex: "#E19999", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","무채색"] },

  { id: "ch-463", name: "코코아와 연분홍 사이", searchAliases: ["뮤트 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#7D5A5A", ratio: 40, role: "base" },
      { hex: "#F1D1D1", ratio: 30, role: "sub" },
      { hex: "#F3E1E1", ratio: 20, role: "sub" },
      { hex: "#FAF2F2", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "뮤트"] },

  { id: "ch-464", name: "아이보리 위에 돌빛 한 점", searchAliases: ["페일 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFE8DF", ratio: 40, role: "base" },
      { hex: "#FFFFFF", ratio: 30, role: "sub" },
      { hex: "#F0F0F0", ratio: 20, role: "sub" },
      { hex: "#888888", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-465", name: "에스프레소 곁의 아이보리", searchAliases: ["딥 레드 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#442727", ratio: 40, role: "base" },
      { hex: "#EAE7D9", ratio: 30, role: "sub" },
      { hex: "#D2C6B2", ratio: 20, role: "sub" },
      { hex: "#937D14", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","딥","옐로우"] },

  { id: "ch-466", name: "벚꽃색의 유칼립투스 테두리", searchAliases: ["페일 레드 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#FFB6B6", ratio: 40, role: "base" },
      { hex: "#FDE2E2", ratio: 30, role: "sub" },
      { hex: "#AACFCF", ratio: 20, role: "sub" },
      { hex: "#679B9B", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "파스텔"] },

  { id: "ch-467", name: "백자 아래 짙은 감청", searchAliases: ["페일 블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F4EEFF", ratio: 40, role: "base" },
      { hex: "#DCD6F7", ratio: 30, role: "sub" },
      { hex: "#A6B1E1", ratio: 20, role: "sub" },
      { hex: "#424874", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","파스텔","무채색"] },

  { id: "ch-468", name: "연민트와 연분홍, 벚꽃색", searchAliases: ["페일 시안 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#BEEBE9", ratio: 40, role: "base" },
      { hex: "#F4DADA", ratio: 30, role: "sub" },
      { hex: "#FFB6B9", ratio: 20, role: "sub" },
      { hex: "#F6EEC7", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","파스텔","레드"] },

  { id: "ch-469", name: "백자에서 테라코타까지", searchAliases: ["페일 오렌지 × 레드"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FCF8E8", ratio: 40, role: "base" },
      { hex: "#ECDFC8", ratio: 30, role: "sub" },
      { hex: "#ECB390", ratio: 20, role: "sub" },
      { hex: "#DF7861", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-470", name: "빙하색 위에 딸기우유 한 점", searchAliases: ["페일 블루 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E1F2FB", ratio: 40, role: "base" },
      { hex: "#F1F9F9", ratio: 30, role: "sub" },
      { hex: "#F3DFE3", ratio: 20, role: "sub" },
      { hex: "#E9B2BC", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","파스텔","무채색"] },

  { id: "ch-471", name: "연분홍과 라일락", searchAliases: ["페일 핑크 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F6E5F5", ratio: 40, role: "base" },
      { hex: "#FBF4F9", ratio: 30, role: "sub" },
      { hex: "#F6E7E6", ratio: 20, role: "sub" },
      { hex: "#B9CCED", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","파스텔","무채색"] },

  { id: "ch-472", name: "아이보리 위에 겹친 황금빛", searchAliases: ["페일 옐로우 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F6F4E6", ratio: 40, role: "base" },
      { hex: "#EDE59A", ratio: 30, role: "sub" },
      { hex: "#D5C455", ratio: 20, role: "sub" },
      { hex: "#FDDB3A", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "파스텔"] },

  { id: "ch-473", name: "연청보라와 백자 사이", searchAliases: ["라이트 퍼플 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#BE9FE1", ratio: 40, role: "base" },
      { hex: "#C9B6E4", ratio: 30, role: "sub" },
      { hex: "#E1CCEC", ratio: 20, role: "sub" },
      { hex: "#F1F1F6", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "파스텔"] },

  { id: "ch-474", name: "산호색 곁의 빙하색", searchAliases: ["비비드 레드 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FF896B", ratio: 40, role: "base" },
      { hex: "#E8D4B4", ratio: 30, role: "sub" },
      { hex: "#EBE6E6", ratio: 20, role: "sub" },
      { hex: "#F3F3F3", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","오렌지"] },

  { id: "ch-475", name: "백자의 귤색 테두리", searchAliases: ["페일 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFFFFF", ratio: 40, role: "base" },
      { hex: "#F9F6F7", ratio: 30, role: "sub" },
      { hex: "#FFE8D6", ratio: 20, role: "sub" },
      { hex: "#FF971D", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-476", name: "아이보리 위에 보라 한 점", searchAliases: ["페일 옐로우 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#F4EFD3", ratio: 40, role: "base" },
      { hex: "#CCCCCC", ratio: 30, role: "sub" },
      { hex: "#C2B0C9", ratio: 20, role: "sub" },
      { hex: "#9656A1", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","무채색"] },

  { id: "ch-477", name: "민트에서 백자까지", searchAliases: ["라이트 시안 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#9BE3DE", ratio: 40, role: "base" },
      { hex: "#BEEBE9", ratio: 30, role: "sub" },
      { hex: "#FFFDF9", ratio: 20, role: "sub" },
      { hex: "#FFE3ED", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "파스텔"] },

  { id: "ch-478", name: "연옥색과 아이보리, 테라코타", searchAliases: ["페일 그린 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#C2E8CE", ratio: 40, role: "base" },
      { hex: "#F2EEE5", ratio: 30, role: "sub" },
      { hex: "#F6AD7B", ratio: 20, role: "sub" },
      { hex: "#BE7575", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","오렌지"] },

  { id: "ch-479", name: "크림과 살구", searchAliases: ["페일 옐로우 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#EFE9CC", ratio: 40, role: "base" },
      { hex: "#EADEA6", ratio: 30, role: "sub" },
      { hex: "#F6CD90", ratio: 20, role: "sub" },
      { hex: "#DEB881", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "파스텔"] },

  { id: "ch-480", name: "연분홍 아래 짙은 남보라", searchAliases: ["페일 레드 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#F1D4D4", ratio: 40, role: "base" },
      { hex: "#DDB6C6", ratio: 30, role: "sub" },
      { hex: "#AC8DAF", ratio: 20, role: "sub" },
      { hex: "#484C7F", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","핑크"] },

  { id: "ch-481", name: "연분홍 위에 겹친 등꽃색", searchAliases: ["페일 핑크 × 퍼플"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F7E8F6", ratio: 40, role: "base" },
      { hex: "#F1C6E7", ratio: 30, role: "sub" },
      { hex: "#E5B0EA", ratio: 20, role: "sub" },
      { hex: "#BD83CE", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "파스텔"] },

  { id: "ch-482", name: "백자와 살구 사이", searchAliases: ["페일 시안 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#FCF9EA", ratio: 40, role: "base" },
      { hex: "#BADFDB", ratio: 30, role: "sub" },
      { hex: "#F8A978", ratio: 20, role: "sub" },
      { hex: "#FFC5A1", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","파스텔","무채색"] },

  { id: "ch-483", name: "백자 곁의 짙은 솔잎색", searchAliases: ["페일 오렌지 × 그린"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F9F6F2", ratio: 40, role: "base" },
      { hex: "#F1D6AB", ratio: 30, role: "sub" },
      { hex: "#A0855B", ratio: 20, role: "sub" },
      { hex: "#38470B", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-484", name: "연분홍의 모브 테두리", searchAliases: ["페일 오렌지 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#FFDFD3", ratio: 40, role: "base" },
      { hex: "#FEC8D8", ratio: 30, role: "sub" },
      { hex: "#D291BC", ratio: 20, role: "sub" },
      { hex: "#957DAD", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","핑크"] },

  { id: "ch-485", name: "연민트와 벚꽃색, 딸기우유", searchAliases: ["페일 그린 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#D2F3E0", ratio: 40, role: "base" },
      { hex: "#FEB9C8", ratio: 30, role: "sub" },
      { hex: "#F6A7BA", ratio: 20, role: "sub" },
      { hex: "#F5FBF1", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","레드"] },

  { id: "ch-486", name: "백자 아래 짙은 연필심", searchAliases: ["페일 오렌지 × 옐로우"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFF5EB", ratio: 40, role: "base" },
      { hex: "#F6E0B3", ratio: 30, role: "sub" },
      { hex: "#DBCC8F", ratio: 20, role: "sub" },
      { hex: "#4E4E4E", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-487", name: "빙하색 위에 짙은 보라 한 점", searchAliases: ["페일 오렌지 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#EEEEEE", ratio: 40, role: "base" },
      { hex: "#D8CBBB", ratio: 30, role: "sub" },
      { hex: "#BB8FA9", ratio: 20, role: "sub" },
      { hex: "#560764", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","무채색"] },

  { id: "ch-488", name: "백자와 암청색", searchAliases: ["뮤트 오렌지 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#F8F1F1", ratio: 40, role: "base" },
      { hex: "#D2C8C8", ratio: 30, role: "sub" },
      { hex: "#A3816A", ratio: 20, role: "sub" },
      { hex: "#0A065D", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","뮤트","무채색"] },

  { id: "ch-489", name: "연분홍에서 물빛까지", searchAliases: ["페일 시안 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFE6EB", ratio: 40, role: "base" },
      { hex: "#DEFCFC", ratio: 30, role: "sub" },
      { hex: "#CBF1F5", ratio: 20, role: "sub" },
      { hex: "#A6E3E9", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","무채색"] },

  { id: "ch-490", name: "백자 위에 겹친 벚꽃색", searchAliases: ["페일 레드 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FFFAFA", ratio: 40, role: "base" },
      { hex: "#FFE0E0", ratio: 30, role: "sub" },
      { hex: "#FFC0D0", ratio: 20, role: "sub" },
      { hex: "#EFDFBF", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","무채색"] },

  { id: "ch-491", name: "아이보리 곁의 돌빛", searchAliases: ["페일 오렌지 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFEFE0", ratio: 40, role: "base" },
      { hex: "#FED9CA", ratio: 30, role: "sub" },
      { hex: "#C5C5C5", ratio: 20, role: "sub" },
      { hex: "#7D7D7D", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-492", name: "백자와 안개색 사이", searchAliases: ["페일 시안 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F4F3F3", ratio: 40, role: "base" },
      { hex: "#DFDFDF", ratio: 30, role: "sub" },
      { hex: "#BFD8D5", ratio: 20, role: "sub" },
      { hex: "#B1BED5", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","파스텔","무채색"] },

  { id: "ch-493", name: "아이보리와 연분홍, 물빛", searchAliases: ["페일 레드 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F9ECEC", ratio: 40, role: "base" },
      { hex: "#F0D9DA", ratio: 30, role: "sub" },
      { hex: "#C8D9EB", ratio: 20, role: "sub" },
      { hex: "#ECF2F9", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","무채색"] },

  { id: "ch-494", name: "백자의 벚꽃색 테두리", searchAliases: ["페일 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FCF5EE", ratio: 40, role: "base" },
      { hex: "#FBE8E7", ratio: 30, role: "sub" },
      { hex: "#F7DDDE", ratio: 20, role: "sub" },
      { hex: "#FFC4D0", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","무채색"] },

  { id: "ch-495", name: "백자 아래 짙은 차콜", searchAliases: ["뮤트 블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F7F7F7", ratio: 40, role: "base" },
      { hex: "#EEEEEE", ratio: 30, role: "sub" },
      { hex: "#393E46", ratio: 20, role: "sub" },
      { hex: "#929AAB", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","뮤트","무채색"] },

  { id: "ch-496", name: "황토에서 백자까지", searchAliases: ["오렌지 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#CB9B42", ratio: 40, role: "base" },
      { hex: "#B1D1C5", ratio: 30, role: "sub" },
      { hex: "#F2F3EE", ratio: 20, role: "sub" },
      { hex: "#DBD7CB", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","그린"] },

  { id: "ch-497", name: "아이보리와 상아색", searchAliases: ["페일 옐로우 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F7F4E3", ratio: 40, role: "base" },
      { hex: "#D2E1C8", ratio: 30, role: "sub" },
      { hex: "#FEE4A6", ratio: 20, role: "sub" },
      { hex: "#F9C4AA", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","그린"] },

  { id: "ch-498", name: "백자 위에 연필심 한 점", searchAliases: ["페일 옐로우 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FAF6E9", ratio: 40, role: "base" },
      { hex: "#ECE8D9", ratio: 30, role: "sub" },
      { hex: "#FFFDF6", ratio: 20, role: "sub" },
      { hex: "#494949", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","무채색"] },

  { id: "ch-499", name: "연노랑 위에 겹친 연분홍", searchAliases: ["페일 옐로우 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#FDFDC4", ratio: 40, role: "base" },
      { hex: "#FFE8CF", ratio: 30, role: "sub" },
      { hex: "#FFDEDE", ratio: 20, role: "sub" },
      { hex: "#CCFFEC", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","오렌지"] },

  { id: "ch-500", name: "백자와 연필심 사이", searchAliases: ["페일 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F2F2F2", ratio: 40, role: "base" },
      { hex: "#EBD5D5", ratio: 30, role: "sub" },
      { hex: "#EA8A8A", ratio: 20, role: "sub" },
      { hex: "#685454", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","무채색"] },

  { id: "ch-501", name: "장밋빛 곁의 벚꽃색", searchAliases: ["비비드 레드 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#DE5B7B", ratio: 40, role: "base" },
      { hex: "#ECCFD1", ratio: 30, role: "sub" },
      { hex: "#F0E3C4", ratio: 20, role: "sub" },
      { hex: "#98DED3", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "비비드"] },

  { id: "ch-502", name: "아이보리의 장밋빛 테두리", searchAliases: ["페일 오렌지 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F5EEE6", ratio: 40, role: "base" },
      { hex: "#F3D7CA", ratio: 30, role: "sub" },
      { hex: "#E6A4B4", ratio: 20, role: "sub" },
      { hex: "#C86B85", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "파스텔"] },

  { id: "ch-503", name: "물빛과 백자, 연분홍", searchAliases: ["페일 시안 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#BAD7DF", ratio: 40, role: "base" },
      { hex: "#FFE2E2", ratio: 30, role: "sub" },
      { hex: "#F6F6F6", ratio: 20, role: "sub" },
      { hex: "#99DDCC", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","무채색"] },

  { id: "ch-504", name: "백자 위에 슬레이트 한 점", searchAliases: ["페일 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FBF0F0", ratio: 40, role: "base" },
      { hex: "#DFD3D3", ratio: 30, role: "sub" },
      { hex: "#B8B0B0", ratio: 20, role: "sub" },
      { hex: "#7C7575", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","무채색"] },

  { id: "ch-505", name: "빙하색과 데님", searchAliases: ["페일 옐로우 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#E7E6E1", ratio: 40, role: "base" },
      { hex: "#F7F6E7", ratio: 30, role: "sub" },
      { hex: "#C1C0B9", ratio: 20, role: "sub" },
      { hex: "#537791", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","무채색"] },

  { id: "ch-506", name: "연옥색 위에 겹친 연노랑", searchAliases: ["페일 그린 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#A9ECA2", ratio: 40, role: "base" },
      { hex: "#F5FFCB", ratio: 30, role: "sub" },
      { hex: "#FFE3B0", ratio: 20, role: "sub" },
      { hex: "#F5C8BD", ratio: 10, role: "point" }],
    tags: ["그린", "웜톤", "파스텔"] },

  { id: "ch-507", name: "벚꽃색과 더스티블루 사이", searchAliases: ["페일 레드 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FFC7C7", ratio: 40, role: "base" },
      { hex: "#FFE2E2", ratio: 30, role: "sub" },
      { hex: "#F6F6F6", ratio: 20, role: "sub" },
      { hex: "#8785A2", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","무채색"] },

  { id: "ch-508", name: "연필심 바탕의 밝은 상아색", searchAliases: ["페일 옐로우 × 그린"], scheme: "tone-on-tone",
    colors: [
      { hex: "#626060", ratio: 40, role: "base" },
      { hex: "#928B8B", ratio: 30, role: "sub" },
      { hex: "#DADBC0", ratio: 20, role: "sub" },
      { hex: "#E7E9DE", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","무채색"] },

  { id: "ch-509", name: "빙하색 곁의 연필심", searchAliases: ["페일 옐로우 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#E9E9E5", ratio: 40, role: "base" },
      { hex: "#D4D6C8", ratio: 30, role: "sub" },
      { hex: "#9A9B94", ratio: 20, role: "sub" },
      { hex: "#52524E", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","무채색"] },

  { id: "ch-510", name: "백자에서 겨자까지", searchAliases: ["페일 옐로우 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FDFCE0", ratio: 40, role: "base" },
      { hex: "#F0EEB1", ratio: 30, role: "sub" },
      { hex: "#DAD773", ratio: 20, role: "sub" },
      { hex: "#B1AD25", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "파스텔"] },

  { id: "ch-511", name: "아이보리의 풀색 테두리", searchAliases: ["페일 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#E7F0D2", ratio: 40, role: "base" },
      { hex: "#D2EA9B", ratio: 30, role: "sub" },
      { hex: "#ABCB89", ratio: 20, role: "sub" },
      { hex: "#83B271", ratio: 10, role: "point" }],
    tags: ["그린", "웜톤", "파스텔"] },

  { id: "ch-512", name: "백자 위에 솔잎색 한 점", searchAliases: ["페일 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F2F9F1", ratio: 40, role: "base" },
      { hex: "#DDEEDF", ratio: 30, role: "sub" },
      { hex: "#B6CDBD", ratio: 20, role: "sub" },
      { hex: "#5C715E", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","파스텔","무채색"] },

  { id: "ch-513", name: "흑단 위의 상아 조각", searchAliases: ["딥 오렌지 × 옐로우"], scheme: "tone-on-tone",
    colors: [
      { hex: "#000000", ratio: 40, role: "base" },
      { hex: "#1F150C", ratio: 30, role: "sub" },
      { hex: "#412D15", ratio: 20, role: "sub" },
      { hex: "#E1DCC9", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","딥","무채색"] },

  { id: "ch-514", name: "잉크 네이비와 차콜, 토프", searchAliases: ["딥 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#202940", ratio: 40, role: "base" },
      { hex: "#4B4038", ratio: 30, role: "sub" },
      { hex: "#9A8678", ratio: 20, role: "sub" },
      { hex: "#CAAA98", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","딥","오렌지"] },

  { id: "ch-515", name: "남색 제복의 진홍 견장", searchAliases: ["비비드 블루 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#000080", ratio: 40, role: "base" },
      { hex: "#FF0000", ratio: 30, role: "sub" },
      { hex: "#9E2A3A", ratio: 20, role: "sub" },
      { hex: "#3A2525", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","비비드","레드"] },

  { id: "ch-516", name: "진홍 아래 짙은 잉크 네이비", searchAliases: ["비비드 레드 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#BF092F", ratio: 40, role: "base" },
      { hex: "#132440", ratio: 30, role: "sub" },
      { hex: "#16476A", ratio: 20, role: "sub" },
      { hex: "#3B9797", ratio: 10, role: "point" }],
    tags: ["레드","쿨톤","비비드","블루"] },

  { id: "ch-517", name: "오렌지와 남보라", searchAliases: ["비비드 오렌지 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#F25912", ratio: 40, role: "base" },
      { hex: "#5C3E94", ratio: 30, role: "sub" },
      { hex: "#412B6B", ratio: 20, role: "sub" },
      { hex: "#211832", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","비비드","퍼플"] },

  { id: "ch-518", name: "차콜 위에 겹친 석회색", searchAliases: ["딥 무채색 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#37353E", ratio: 40, role: "base" },
      { hex: "#44444E", ratio: 30, role: "sub" },
      { hex: "#715A5A", ratio: 20, role: "sub" },
      { hex: "#D3DAD9", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥"] },

  { id: "ch-519", name: "암청색과 노랑 사이", searchAliases: ["딥 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#090040", ratio: 40, role: "base" },
      { hex: "#471396", ratio: 30, role: "sub" },
      { hex: "#B13BFF", ratio: 20, role: "sub" },
      { hex: "#FFCC00", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","퍼플"] },

  { id: "ch-520", name: "짙은 자주 곁의 옥색", searchAliases: ["딥 핑크 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#511D43", ratio: 40, role: "base" },
      { hex: "#901E3E", ratio: 30, role: "sub" },
      { hex: "#DC2525", ratio: 20, role: "sub" },
      { hex: "#9BC09C", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥"] },

  { id: "ch-521", name: "흑단에서 산호색까지", searchAliases: ["딥 핑크 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3A0519", ratio: 40, role: "base" },
      { hex: "#670D2F", ratio: 30, role: "sub" },
      { hex: "#A53860", ratio: 20, role: "sub" },
      { hex: "#EF88AD", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥"] },

  { id: "ch-522", name: "잉크 네이비의 석회색 테두리", searchAliases: ["딥 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#222831", ratio: 40, role: "base" },
      { hex: "#393E46", ratio: 30, role: "sub" },
      { hex: "#948979", ratio: 20, role: "sub" },
      { hex: "#DFD0B8", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","무채색"] },

  { id: "ch-523", name: "암청색 바탕의 밝은 모래색", searchAliases: ["딥 퍼플 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#210F37", ratio: 40, role: "base" },
      { hex: "#4F1C51", ratio: 30, role: "sub" },
      { hex: "#A55B4B", ratio: 20, role: "sub" },
      { hex: "#DCA06D", ratio: 10, role: "point" }],
    tags: ["퍼플", "웜톤", "딥"] },

  { id: "ch-524", name: "짙은 솔잎색 위에 석회색 한 점", searchAliases: ["딥 그린 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#2C3930", ratio: 40, role: "base" },
      { hex: "#3F4F44", ratio: 30, role: "sub" },
      { hex: "#A27B5C", ratio: 20, role: "sub" },
      { hex: "#DCD7C9", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","딥","무채색"] },

  { id: "ch-525", name: "먹색에서 빙하색까지", searchAliases: ["딥 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1D1616", ratio: 40, role: "base" },
      { hex: "#8E1616", ratio: 30, role: "sub" },
      { hex: "#D84040", ratio: 20, role: "sub" },
      { hex: "#EEEEEE", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥"] },

  { id: "ch-526", name: "암청색과 짙은 보라, 진홍", searchAliases: ["딥 퍼플 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#2A004E", ratio: 40, role: "base" },
      { hex: "#500073", ratio: 30, role: "sub" },
      { hex: "#C62300", ratio: 20, role: "sub" },
      { hex: "#F14A00", ratio: 10, role: "point" }],
    tags: ["퍼플", "웜톤", "딥"] },

  { id: "ch-527", name: "가지색과 벚꽃색", searchAliases: ["딥 퍼플 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#432E54", ratio: 40, role: "base" },
      { hex: "#4B4376", ratio: 30, role: "sub" },
      { hex: "#AE445A", ratio: 20, role: "sub" },
      { hex: "#E8BCB9", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","딥","블루"] },

  { id: "ch-528", name: "오렌지 위에 겹친 암청색", searchAliases: ["비비드 오렌지 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FF6500", ratio: 40, role: "base" },
      { hex: "#1E3E62", ratio: 30, role: "sub" },
      { hex: "#0B192C", ratio: 20, role: "sub" },
      { hex: "#000000", ratio: 10, role: "point" }],
    tags: ["오렌지","쿨톤","비비드","블루"] },

  { id: "ch-529", name: "먹색과 상아색 사이", searchAliases: ["딥 그린 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#181C14", ratio: 40, role: "base" },
      { hex: "#3C3D37", ratio: 30, role: "sub" },
      { hex: "#697565", ratio: 20, role: "sub" },
      { hex: "#ECDFCC", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","딥","무채색"] },

  { id: "ch-530", name: "짙은 자주 곁의 체리", searchAliases: ["딥 퍼플 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#522258", ratio: 40, role: "base" },
      { hex: "#8C3061", ratio: 30, role: "sub" },
      { hex: "#C63C51", ratio: 20, role: "sub" },
      { hex: "#D95F59", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","딥","핑크"] },

  { id: "ch-531", name: "암청색과 진분홍", searchAliases: ["딥 블루 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#180161", ratio: 40, role: "base" },
      { hex: "#4F1787", ratio: 30, role: "sub" },
      { hex: "#EB3678", ratio: 20, role: "sub" },
      { hex: "#FB773C", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","퍼플"] },

  { id: "ch-532", name: "암청색 바탕의 밝은 상아색", searchAliases: ["딥 핑크 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#32012F", ratio: 40, role: "base" },
      { hex: "#524C42", ratio: 30, role: "sub" },
      { hex: "#E2DFD0", ratio: 20, role: "sub" },
      { hex: "#F97300", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","딥","무채색"] },

  { id: "ch-533", name: "짙은 자주에서 더스티로즈까지", searchAliases: ["딥 핑크 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#49243E", ratio: 40, role: "base" },
      { hex: "#704264", ratio: 30, role: "sub" },
      { hex: "#BB8493", ratio: 20, role: "sub" },
      { hex: "#DBAFA0", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥"] },

  { id: "ch-534", name: "먹색의 다홍 테두리", searchAliases: ["딥 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#0C0C0C", ratio: 40, role: "base" },
      { hex: "#481E14", ratio: 30, role: "sub" },
      { hex: "#9B3922", ratio: 20, role: "sub" },
      { hex: "#F2613F", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","딥","무채색"] },

  { id: "ch-535", name: "잉크 네이비 위에 빙하색 한 점", searchAliases: ["딥 블루 × 시안"], scheme: "tone-on-tone",
    colors: [
      { hex: "#222831", ratio: 40, role: "base" },
      { hex: "#31363F", ratio: 30, role: "sub" },
      { hex: "#76ABAE", ratio: 20, role: "sub" },
      { hex: "#EEEEEE", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-536", name: "암청색과 짙은 자주, 버건디", searchAliases: ["딥 블루 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#030637", ratio: 40, role: "base" },
      { hex: "#3C0753", ratio: 30, role: "sub" },
      { hex: "#720455", ratio: 20, role: "sub" },
      { hex: "#910A67", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","퍼플"] },

  { id: "ch-537", name: "에스프레소 위에 겹친 토프", searchAliases: ["딥 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3E3232", ratio: 40, role: "base" },
      { hex: "#503C3C", ratio: 30, role: "sub" },
      { hex: "#7E6363", ratio: 20, role: "sub" },
      { hex: "#A87C7C", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","딥","무채색"] },

  { id: "ch-538", name: "잉크 네이비와 청자색 사이", searchAliases: ["딥 블루 × 그린"], scheme: "tone-on-tone",
    colors: [
      { hex: "#092635", ratio: 40, role: "base" },
      { hex: "#1B4242", ratio: 30, role: "sub" },
      { hex: "#5C8374", ratio: 20, role: "sub" },
      { hex: "#9EC8B9", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","시안"] },

  { id: "ch-539", name: "먹색 곁의 오렌지", searchAliases: ["비비드 레드 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#191919", ratio: 40, role: "base" },
      { hex: "#750E21", ratio: 30, role: "sub" },
      { hex: "#E3651D", ratio: 20, role: "sub" },
      { hex: "#BED754", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","무채색"] },

  { id: "ch-540", name: "암청색과 와인, 진홍", searchAliases: ["딥 퍼플 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#22092C", ratio: 40, role: "base" },
      { hex: "#872341", ratio: 30, role: "sub" },
      { hex: "#BE3144", ratio: 20, role: "sub" },
      { hex: "#F05941", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","딥","핑크"] },

  { id: "ch-541", name: "남색의 크림 테두리", searchAliases: ["뮤트 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#363062", ratio: 40, role: "base" },
      { hex: "#435585", ratio: 30, role: "sub" },
      { hex: "#818FB4", ratio: 20, role: "sub" },
      { hex: "#F5E8C7", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "뮤트"] },

  { id: "ch-542", name: "짙은 보라에서 진분홍까지", searchAliases: ["비비드 퍼플 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#610C9F", ratio: 40, role: "base" },
      { hex: "#940B92", ratio: 30, role: "sub" },
      { hex: "#DA0C81", ratio: 20, role: "sub" },
      { hex: "#E95793", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","핑크"] },

  { id: "ch-543", name: "먹색 위에 청록 한 점", searchAliases: ["딥 블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#0F0F0F", ratio: 40, role: "base" },
      { hex: "#232D3F", ratio: 30, role: "sub" },
      { hex: "#005B41", ratio: 20, role: "sub" },
      { hex: "#008170", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","무채색"] },

  { id: "ch-544", name: "짙은 자주 바탕의 밝은 꿀빛", searchAliases: ["딥 퍼플 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#451952", ratio: 40, role: "base" },
      { hex: "#662549", ratio: 30, role: "sub" },
      { hex: "#AE445A", ratio: 20, role: "sub" },
      { hex: "#F39F5A", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","딥","핑크"] },

  { id: "ch-545", name: "먹색과 녹청색", searchAliases: ["딥 시안 × 그린"], scheme: "tone-on-tone",
    colors: [
      { hex: "#040D12", ratio: 40, role: "base" },
      { hex: "#183D3D", ratio: 30, role: "sub" },
      { hex: "#5C8374", ratio: 20, role: "sub" },
      { hex: "#93B1A6", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","딥","무채색"] },

  { id: "ch-546", name: "차콜 위에 겹친 라벤더", searchAliases: ["딥 블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#352F44", ratio: 40, role: "base" },
      { hex: "#5C5470", ratio: 30, role: "sub" },
      { hex: "#B9B4C7", ratio: 20, role: "sub" },
      { hex: "#FAF0E6", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-547", name: "연어색과 남보라 사이", searchAliases: ["라이트 레드 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#E19898", ratio: 40, role: "base" },
      { hex: "#A2678A", ratio: 30, role: "sub" },
      { hex: "#4D3C77", ratio: 20, role: "sub" },
      { hex: "#3F1D38", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","핑크"] },

  { id: "ch-548", name: "짙은 자주 곁의 연청보라", searchAliases: ["딥 퍼플 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#35155D", ratio: 40, role: "base" },
      { hex: "#512B81", ratio: 30, role: "sub" },
      { hex: "#4477CE", ratio: 20, role: "sub" },
      { hex: "#8CABFF", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥"] },

  { id: "ch-549", name: "흑단의 상아색 테두리", searchAliases: ["딥 핑크 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#331D2C", ratio: 40, role: "base" },
      { hex: "#3F2E3E", ratio: 30, role: "sub" },
      { hex: "#A78295", ratio: 20, role: "sub" },
      { hex: "#EFE1D1", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥"] },

  { id: "ch-550", name: "차콜 바탕의 밝은 살구", searchAliases: ["딥 블루 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#2D4356", ratio: 40, role: "base" },
      { hex: "#435B66", ratio: 30, role: "sub" },
      { hex: "#A76F6F", ratio: 20, role: "sub" },
      { hex: "#EAB2A0", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","시안"] },

  { id: "ch-551", name: "잉크 네이비에서 바다색까지", searchAliases: ["딥 블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#0E2954", ratio: 40, role: "base" },
      { hex: "#1F6E8C", ratio: 30, role: "sub" },
      { hex: "#2E8A99", ratio: 20, role: "sub" },
      { hex: "#84A7A1", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","시안"] },

  { id: "ch-552", name: "청록과 에스프레소, 흑단", searchAliases: ["딥 시안 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#116D6E", ratio: 40, role: "base" },
      { hex: "#321E1E", ratio: 30, role: "sub" },
      { hex: "#4E3636", ratio: 20, role: "sub" },
      { hex: "#CD1818", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","딥","레드"] },

  { id: "ch-553", name: "짙은 청록과 은회색", searchAliases: ["딥 블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#27374D", ratio: 40, role: "base" },
      { hex: "#526D82", ratio: 30, role: "sub" },
      { hex: "#9DB2BF", ratio: 20, role: "sub" },
      { hex: "#DDE6ED", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-554", name: "암청색 위에 라벤더 한 점", searchAliases: ["딥 블루 × 퍼플"], scheme: "tone-on-tone",
    colors: [
      { hex: "#0C134F", ratio: 40, role: "base" },
      { hex: "#1D267D", ratio: 30, role: "sub" },
      { hex: "#5C469C", ratio: 20, role: "sub" },
      { hex: "#D4ADFC", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-555", name: "버건디 위에 겹친 머시룸", searchAliases: ["딥 핑크 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#5F264A", ratio: 40, role: "base" },
      { hex: "#643A6B", ratio: 30, role: "sub" },
      { hex: "#957777", ratio: 20, role: "sub" },
      { hex: "#B0A4A4", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","딥","퍼플"] },

  { id: "ch-556", name: "암청색과 진홍 사이", searchAliases: ["딥 블루 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#070A52", ratio: 40, role: "base" },
      { hex: "#D21312", ratio: 30, role: "sub" },
      { hex: "#ED2B2A", ratio: 20, role: "sub" },
      { hex: "#F15A59", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","딥","레드"] },

  { id: "ch-557", name: "차콜 곁의 아이보리", searchAliases: ["딥 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#393646", ratio: 40, role: "base" },
      { hex: "#4F4557", ratio: 30, role: "sub" },
      { hex: "#6D5D6E", ratio: 20, role: "sub" },
      { hex: "#F4EEE0", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","무채색"] },

  { id: "ch-558", name: "잉크 네이비의 물빛 테두리", searchAliases: ["딥 블루 × 시안"], scheme: "tone-on-tone",
    colors: [
      { hex: "#0B2447", ratio: 40, role: "base" },
      { hex: "#19376D", ratio: 30, role: "sub" },
      { hex: "#576CBC", ratio: 20, role: "sub" },
      { hex: "#A5D7E8", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-559", name: "남색 위에 장밋빛 한 점", searchAliases: ["블루 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#37306B", ratio: 40, role: "base" },
      { hex: "#66347F", ratio: 30, role: "sub" },
      { hex: "#9E4784", ratio: 20, role: "sub" },
      { hex: "#D27685", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","퍼플"] },

  { id: "ch-560", name: "짙은 청록 바탕의 밝은 물빛", searchAliases: ["딥 시안 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#2C3333", ratio: 40, role: "base" },
      { hex: "#2E4F4F", ratio: 30, role: "sub" },
      { hex: "#0E8388", ratio: 20, role: "sub" },
      { hex: "#CBE4DE", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","딥","무채색"] },

  { id: "ch-561", name: "짙은 보라와 남보라, 더스티블루", searchAliases: ["비비드 퍼플 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#3A1078", ratio: 40, role: "base" },
      { hex: "#4E31AA", ratio: 30, role: "sub" },
      { hex: "#2F58CD", ratio: 20, role: "sub" },
      { hex: "#3795BD", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","블루"] },

  { id: "ch-562", name: "제비꽃에서 암청색까지", searchAliases: ["뮤트 블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#635985", ratio: 40, role: "base" },
      { hex: "#443C68", ratio: 30, role: "sub" },
      { hex: "#393053", ratio: 20, role: "sub" },
      { hex: "#18122B", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "뮤트"] },

  { id: "ch-563", name: "밤바다 가장자리의 연옥색", searchAliases: ["딥 블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#03001C", ratio: 40, role: "base" },
      { hex: "#301E67", ratio: 30, role: "sub" },
      { hex: "#5B8FB9", ratio: 20, role: "sub" },
      { hex: "#B6EADA", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","무채색"] },

  { id: "ch-564", name: "암청색과 비취색", searchAliases: ["딥 블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#13005A", ratio: 40, role: "base" },
      { hex: "#00337C", ratio: 30, role: "sub" },
      { hex: "#1C82AD", ratio: 20, role: "sub" },
      { hex: "#03C988", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-565", name: "잉크 네이비 위에 겹친 바다색", searchAliases: ["딥 블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#0A2647", ratio: 40, role: "base" },
      { hex: "#144272", ratio: 30, role: "sub" },
      { hex: "#205295", ratio: 20, role: "sub" },
      { hex: "#2C74B3", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-566", name: "먹색과 밀짚색 사이", searchAliases: ["딥 오렌지 × 옐로우"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1A120B", ratio: 40, role: "base" },
      { hex: "#3C2A21", ratio: 30, role: "sub" },
      { hex: "#D5CEA3", ratio: 20, role: "sub" },
      { hex: "#E5E5CB", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","딥","무채색"] },

  { id: "ch-567", name: "가지색 곁의 연노랑", searchAliases: ["뮤트 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#453C67", ratio: 40, role: "base" },
      { hex: "#6D67E4", ratio: 30, role: "sub" },
      { hex: "#46C2CB", ratio: 20, role: "sub" },
      { hex: "#F2F7A1", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "뮤트"] },

  { id: "ch-568", name: "암청색의 라벤더 테두리", searchAliases: ["딥 퍼플 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#2D033B", ratio: 40, role: "base" },
      { hex: "#810CA8", ratio: 30, role: "sub" },
      { hex: "#C147E9", ratio: 20, role: "sub" },
      { hex: "#E5B8F4", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥"] },

  { id: "ch-569", name: "암청색 바탕의 밝은 복숭아색", searchAliases: ["딥 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#00005C", ratio: 40, role: "base" },
      { hex: "#3B185F", ratio: 30, role: "sub" },
      { hex: "#C060A1", ratio: 20, role: "sub" },
      { hex: "#F0CAA3", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","퍼플"] },

  { id: "ch-570", name: "검은 철판의 황동 글씨", searchAliases: ["딥 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#000000", ratio: 40, role: "base" },
      { hex: "#282A3A", ratio: 30, role: "sub" },
      { hex: "#735F32", ratio: 20, role: "sub" },
      { hex: "#C69749", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","딥","무채색"] },

  { id: "ch-571", name: "차콜 위에 슬레이트 한 점", searchAliases: ["뮤트 블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#404258", ratio: 40, role: "base" },
      { hex: "#474E68", ratio: 30, role: "sub" },
      { hex: "#50577A", ratio: 20, role: "sub" },
      { hex: "#6B728E", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "뮤트"] },

  { id: "ch-572", name: "남색과 제비꽃, 안개색", searchAliases: ["뮤트 블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#3F3B6C", ratio: 40, role: "base" },
      { hex: "#624F82", ratio: 30, role: "sub" },
      { hex: "#9F73AB", ratio: 20, role: "sub" },
      { hex: "#A3C7D6", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","뮤트","퍼플"] },

  { id: "ch-573", name: "자줏빛 암실의 핑크 불빛", searchAliases: ["딥 블루 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#000000", ratio: 40, role: "base" },
      { hex: "#150050", ratio: 30, role: "sub" },
      { hex: "#3F0071", ratio: 20, role: "sub" },
      { hex: "#FB2576", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","딥","무채색"] },

  { id: "ch-574", name: "잉크 네이비와 석회색", searchAliases: ["딥 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#182747", ratio: 40, role: "base" },
      { hex: "#562B08", ratio: 30, role: "sub" },
      { hex: "#647E68", ratio: 20, role: "sub" },
      { hex: "#D8D8D8", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","오렌지"] },

  { id: "ch-575", name: "짙은 자주에서 진분홍까지", searchAliases: ["딥 핑크 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4C0033", ratio: 40, role: "base" },
      { hex: "#790252", ratio: 30, role: "sub" },
      { hex: "#AF0171", ratio: 20, role: "sub" },
      { hex: "#E80F88", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥"] },

  { id: "ch-576", name: "암청색 위에 겹친 진분홍", searchAliases: ["딥 블루 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#16213E", ratio: 40, role: "base" },
      { hex: "#0F3460", ratio: 30, role: "sub" },
      { hex: "#533483", ratio: 20, role: "sub" },
      { hex: "#E94560", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-577", name: "에스프레소와 토프 사이", searchAliases: ["딥 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#472D2D", ratio: 40, role: "base" },
      { hex: "#553939", ratio: 30, role: "sub" },
      { hex: "#704F4F", ratio: 20, role: "sub" },
      { hex: "#A77979", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥"] },

  { id: "ch-578", name: "짙은 청록 곁의 청자색", searchAliases: ["뮤트 시안 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#2C3333", ratio: 40, role: "base" },
      { hex: "#395B64", ratio: 30, role: "sub" },
      { hex: "#A5C9CA", ratio: 20, role: "sub" },
      { hex: "#E7F6F2", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","뮤트","무채색"] },

  { id: "ch-579", name: "차콜의 석회색 테두리", searchAliases: ["딥 시안 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#2C3639", ratio: 40, role: "base" },
      { hex: "#3F4E4F", ratio: 30, role: "sub" },
      { hex: "#A27B5C", ratio: 20, role: "sub" },
      { hex: "#DCD7C9", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","딥","무채색"] },

  { id: "ch-580", name: "가지색 바탕의 밝은 모래색", searchAliases: ["딥 퍼플 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#4C3A51", ratio: 40, role: "base" },
      { hex: "#774360", ratio: 30, role: "sub" },
      { hex: "#B25068", ratio: 20, role: "sub" },
      { hex: "#E7AB79", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","딥","핑크"] },

  { id: "ch-581", name: "흑단 위에 밀짚색 한 점", searchAliases: ["딥 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#1B2430", ratio: 40, role: "base" },
      { hex: "#51557E", ratio: 30, role: "sub" },
      { hex: "#816797", ratio: 20, role: "sub" },
      { hex: "#D6D5A8", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-582", name: "짙은 자주에서 제비꽃까지", searchAliases: ["딥 퍼플 × 블루"], scheme: "tone-on-tone",
    colors: [
      { hex: "#371B58", ratio: 40, role: "base" },
      { hex: "#4C3575", ratio: 30, role: "sub" },
      { hex: "#5B4B8A", ratio: 20, role: "sub" },
      { hex: "#7858A6", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥"] },

  { id: "ch-583", name: "암청색과 짙은 자주, 마젠타", searchAliases: ["딥 퍼플 × 핑크"], scheme: "tone-on-tone",
    colors: [
      { hex: "#2E0249", ratio: 40, role: "base" },
      { hex: "#570A57", ratio: 30, role: "sub" },
      { hex: "#A91079", ratio: 20, role: "sub" },
      { hex: "#F806CC", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","딥","핑크"] },

  { id: "ch-584", name: "진분홍과 암청색", searchAliases: ["비비드 핑크 × 퍼플"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F73D93", ratio: 40, role: "base" },
      { hex: "#16003B", ratio: 30, role: "sub" },
      { hex: "#413F42", ratio: 20, role: "sub" },
      { hex: "#7F8487", ratio: 10, role: "point" }],
    tags: ["핑크","쿨톤","비비드","퍼플"] },

  { id: "ch-585", name: "짙은 자주 위에 겹친 황토", searchAliases: ["딥 퍼플 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#46244C", ratio: 40, role: "base" },
      { hex: "#712B75", ratio: 30, role: "sub" },
      { hex: "#C74B50", ratio: 20, role: "sub" },
      { hex: "#D49B54", ratio: 10, role: "point" }],
    tags: ["퍼플", "웜톤", "딥"] },

  { id: "ch-586", name: "먹색과 진분홍 사이", searchAliases: ["퍼플 × 핑크"], scheme: "tone-on-tone",
    colors: [
      { hex: "#180A0A", ratio: 40, role: "base" },
      { hex: "#711A75", ratio: 30, role: "sub" },
      { hex: "#F10086", ratio: 20, role: "sub" },
      { hex: "#F582A7", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","무채색"] },

  { id: "ch-587", name: "암청색 곁의 마젠타", searchAliases: ["딥 블루 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#1A1A40", ratio: 40, role: "base" },
      { hex: "#270082", ratio: 30, role: "sub" },
      { hex: "#7A0BC0", ratio: 20, role: "sub" },
      { hex: "#FA58B6", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-588", name: "검붉은색의 홍매색 테두리", searchAliases: ["딥 핑크 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4C0027", ratio: 40, role: "base" },
      { hex: "#570530", ratio: 30, role: "sub" },
      { hex: "#750550", ratio: 20, role: "sub" },
      { hex: "#980F5A", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥"] },

  { id: "ch-589", name: "먹색 바탕의 밝은 빙하색", searchAliases: ["딥 레드 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#0F0E0E", ratio: 40, role: "base" },
      { hex: "#541212", ratio: 30, role: "sub" },
      { hex: "#8B9A46", ratio: 20, role: "sub" },
      { hex: "#EEEEEE", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","딥","무채색"] },

  { id: "ch-590", name: "먹색 위에 상아색 한 점", searchAliases: ["블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#191919", ratio: 40, role: "base" },
      { hex: "#2D4263", ratio: 30, role: "sub" },
      { hex: "#C84B31", ratio: 20, role: "sub" },
      { hex: "#ECDBBA", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","무채색"] },

  { id: "ch-591", name: "암청색과 잉크 네이비, 꿀빛", searchAliases: ["딥 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#041C32", ratio: 40, role: "base" },
      { hex: "#04293A", ratio: 30, role: "sub" },
      { hex: "#064663", ratio: 20, role: "sub" },
      { hex: "#ECB365", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","시안"] },

  { id: "ch-592", name: "먹색에서 석류까지", searchAliases: ["딥 레드 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#040303", ratio: 40, role: "base" },
      { hex: "#461111", ratio: 30, role: "sub" },
      { hex: "#A13333", ratio: 20, role: "sub" },
      { hex: "#B3541E", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","딥","무채색"] },

  { id: "ch-593", name: "홍매색과 암청색", searchAliases: ["비비드 핑크 × 퍼플"], scheme: "tone-in-tone",
    colors: [
      { hex: "#9A0680", ratio: 40, role: "base" },
      { hex: "#79018C", ratio: 30, role: "sub" },
      { hex: "#4C0070", ratio: 20, role: "sub" },
      { hex: "#160040", ratio: 10, role: "point" }],
    tags: ["핑크","쿨톤","비비드","퍼플"] },

  { id: "ch-594", name: "암청색 위에 겹친 딸기우유", searchAliases: ["딥 블루 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#1F1D36", ratio: 40, role: "base" },
      { hex: "#3F3351", ratio: 30, role: "sub" },
      { hex: "#864879", ratio: 20, role: "sub" },
      { hex: "#E9A6A6", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","퍼플"] },

  { id: "ch-595", name: "검은 벨벳과 보라 잉크", searchAliases: ["딥 퍼플 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#000000", ratio: 40, role: "base" },
      { hex: "#3E065F", ratio: 30, role: "sub" },
      { hex: "#700B97", ratio: 20, role: "sub" },
      { hex: "#8E05C2", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","딥","무채색"] },

  { id: "ch-596", name: "먹색과 연녹색 사이", searchAliases: ["딥 그린 그라데이션"], scheme: "tone-in-tone",
    colors: [
      { hex: "#191A19", ratio: 40, role: "base" },
      { hex: "#1E5128", ratio: 30, role: "sub" },
      { hex: "#4E9F3D", ratio: 20, role: "sub" },
      { hex: "#D8E9A8", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","딥","무채색"] },

  { id: "ch-597", name: "칠흑에서 빨강까지", searchAliases: ["딥 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#000000", ratio: 40, role: "base" },
      { hex: "#3D0000", ratio: 30, role: "sub" },
      { hex: "#950101", ratio: 20, role: "sub" },
      { hex: "#FF0000", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","딥","무채색"] },

  { id: "ch-598", name: "암청색 곁의 자수정", searchAliases: ["딥 블루 × 퍼플"], scheme: "tone-in-tone",
    colors: [
      { hex: "#1C0C5B", ratio: 40, role: "base" },
      { hex: "#3D2C8D", ratio: 30, role: "sub" },
      { hex: "#916BBF", ratio: 20, role: "sub" },
      { hex: "#C996CC", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-599", name: "어둠 속의 보라 세 겹", searchAliases: ["딥 블루 × 퍼플"], scheme: "tone-on-tone",
    colors: [
      { hex: "#000000", ratio: 40, role: "base" },
      { hex: "#150050", ratio: 30, role: "sub" },
      { hex: "#3F0071", ratio: 20, role: "sub" },
      { hex: "#610094", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","딥","무채색"] },

  { id: "ch-600", name: "암청색의 황금빛 테두리", searchAliases: ["딥 퍼플 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#2A0944", ratio: 40, role: "base" },
      { hex: "#3B185F", ratio: 30, role: "sub" },
      { hex: "#A12568", ratio: 20, role: "sub" },
      { hex: "#FEC260", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥"] },

  { id: "ch-601", name: "검붉은색에서 체리까지", searchAliases: ["딥 핑크 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#420516", ratio: 40, role: "base" },
      { hex: "#7D1935", ratio: 30, role: "sub" },
      { hex: "#B42B51", ratio: 20, role: "sub" },
      { hex: "#E63E6D", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥"] },

  { id: "ch-602", name: "흑단 위에 더스티블루 한 점", searchAliases: ["딥 퍼플 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#261C2C", ratio: 40, role: "base" },
      { hex: "#3E2C41", ratio: 30, role: "sub" },
      { hex: "#5C527F", ratio: 20, role: "sub" },
      { hex: "#6E85B2", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥"] },

  { id: "ch-603", name: "민트와 진분홍, 홍매색", searchAliases: ["비비드 시안 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#00E0BA", ratio: 40, role: "base" },
      { hex: "#91008D", ratio: 30, role: "sub" },
      { hex: "#FF3483", ratio: 20, role: "sub" },
      { hex: "#FFCF00", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","핑크"] },

  { id: "ch-604", name: "시안 바탕의 밝은 형광 연두", searchAliases: ["시안 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#39B1D1", ratio: 40, role: "base" },
      { hex: "#D6FB61", ratio: 30, role: "sub" },
      { hex: "#F6850C", ratio: 20, role: "sub" },
      { hex: "#DE3E3E", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","그린"] },

  { id: "ch-605", name: "시안과 노랑", searchAliases: ["비비드 시안 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#03AED2", ratio: 40, role: "base" },
      { hex: "#F8DE22", ratio: 30, role: "sub" },
      { hex: "#F45B26", ratio: 20, role: "sub" },
      { hex: "#D12052", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","비비드","옐로우"] },

  { id: "ch-606", name: "보라 무대의 분홍과 레몬", searchAliases: ["비비드 퍼플 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#000000", ratio: 40, role: "base" },
      { hex: "#9929EA", ratio: 30, role: "sub" },
      { hex: "#FF5FCF", ratio: 20, role: "sub" },
      { hex: "#FAEB92", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","비비드","무채색"] },

  { id: "ch-607", name: "민트 위에 겹친 마젠타", searchAliases: ["비비드 시안 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#00F7FF", ratio: 40, role: "base" },
      { hex: "#B0FFFA", ratio: 30, role: "sub" },
      { hex: "#FF0087", ratio: 20, role: "sub" },
      { hex: "#FF7DB0", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "비비드"] },

  { id: "ch-608", name: "민트와 레몬 사이", searchAliases: ["비비드 시안 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#6AECE1", ratio: 40, role: "base" },
      { hex: "#26CCC2", ratio: 30, role: "sub" },
      { hex: "#FFF57E", ratio: 20, role: "sub" },
      { hex: "#FFB76C", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "비비드"] },

  { id: "ch-609", name: "물빛 곁의 꿀빛", searchAliases: ["라이트 시안 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#8CE4FF", ratio: 40, role: "base" },
      { hex: "#FEEE91", ratio: 30, role: "sub" },
      { hex: "#FFA239", ratio: 20, role: "sub" },
      { hex: "#FF5656", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","파스텔","옐로우"] },

  { id: "ch-610", name: "짙은 보라의 노랑 테두리", searchAliases: ["비비드 퍼플 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#450693", ratio: 40, role: "base" },
      { hex: "#8C00FF", ratio: 30, role: "sub" },
      { hex: "#FF3F7F", ratio: 20, role: "sub" },
      { hex: "#FFC400", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "비비드"] },

  { id: "ch-611", name: "검은 그늘의 전깃빛 초록", searchAliases: ["비비드 그린 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#08CB00", ratio: 40, role: "base" },
      { hex: "#253900", ratio: 30, role: "sub" },
      { hex: "#000000", ratio: 20, role: "sub" },
      { hex: "#EEEEEE", ratio: 10, role: "point" }],
    tags: ["그린", "웜톤", "비비드"] },

  { id: "ch-612", name: "난초빛 그림자와 버터 조각", searchAliases: ["비비드 퍼플 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#000000", ratio: 40, role: "base" },
      { hex: "#9929EA", ratio: 30, role: "sub" },
      { hex: "#CC66DA", ratio: 20, role: "sub" },
      { hex: "#FAEB92", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","비비드","무채색"] },

  { id: "ch-613", name: "마젠타 바탕의 밝은 연노랑", searchAliases: ["비비드 핑크 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FF2DD1", ratio: 40, role: "base" },
      { hex: "#FDFFB8", ratio: 30, role: "sub" },
      { hex: "#4DFFBE", ratio: 20, role: "sub" },
      { hex: "#63C8FF", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","옐로우"] },

  { id: "ch-614", name: "아이보리에서 형광 연두까지", searchAliases: ["페일 옐로우 × 그린"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FFFADC", ratio: 40, role: "base" },
      { hex: "#B6F500", ratio: 30, role: "sub" },
      { hex: "#A4DD00", ratio: 20, role: "sub" },
      { hex: "#98CD00", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","그린"] },

  { id: "ch-615", name: "울트라마린 위에 연옥색 한 점", searchAliases: ["비비드 블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#4300FF", ratio: 40, role: "base" },
      { hex: "#0065F8", ratio: 30, role: "sub" },
      { hex: "#00CAFF", ratio: 20, role: "sub" },
      { hex: "#00FFDE", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-616", name: "검은 바탕에 찍힌 산딸기", searchAliases: ["비비드 핑크 × 레드"], scheme: "tone-on-tone",
    colors: [
      { hex: "#000000", ratio: 40, role: "base" },
      { hex: "#CF0F47", ratio: 30, role: "sub" },
      { hex: "#FF0B55", ratio: 20, role: "sub" },
      { hex: "#FFDEDE", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","무채색"] },

  { id: "ch-617", name: "짙은 자주와 홍매색, 노랑", searchAliases: ["딥 퍼플 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#410445", ratio: 40, role: "base" },
      { hex: "#A5158C", ratio: 30, role: "sub" },
      { hex: "#FF2DF1", ratio: 20, role: "sub" },
      { hex: "#F6DC43", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","딥","핑크"] },

  { id: "ch-618", name: "울트라마린과 연옥색", searchAliases: ["블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#4635B1", ratio: 40, role: "base" },
      { hex: "#B771E5", ratio: 30, role: "sub" },
      { hex: "#AEEA94", ratio: 20, role: "sub" },
      { hex: "#FFFBCA", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","퍼플"] },

  { id: "ch-619", name: "암청색 위에 겹친 레몬", searchAliases: ["딥 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#000957", ratio: 40, role: "base" },
      { hex: "#344CB7", ratio: 30, role: "sub" },
      { hex: "#577BC1", ratio: 20, role: "sub" },
      { hex: "#FFEB00", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-620", name: "비취색과 노랑 사이", searchAliases: ["비비드 그린 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#16C47F", ratio: 40, role: "base" },
      { hex: "#FFD65A", ratio: 30, role: "sub" },
      { hex: "#FF9D23", ratio: 20, role: "sub" },
      { hex: "#F93827", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","비비드","옐로우"] },

  { id: "ch-621", name: "아이보리 곁의 청보라", searchAliases: ["페일 옐로우 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FFF7D1", ratio: 40, role: "base" },
      { hex: "#8B5DFF", ratio: 30, role: "sub" },
      { hex: "#6A42C2", ratio: 20, role: "sub" },
      { hex: "#563A9C", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","파스텔","블루"] },

  { id: "ch-622", name: "형광 연두와 연옥색, 연노랑", searchAliases: ["비비드 그린 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#00FF9C", ratio: 40, role: "base" },
      { hex: "#B6FFA1", ratio: 30, role: "sub" },
      { hex: "#FEFFA7", ratio: 20, role: "sub" },
      { hex: "#FFE700", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "비비드"] },

  { id: "ch-623", name: "짙은 보라의 레몬 테두리", searchAliases: ["딥 핑크 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#640D5F", ratio: 40, role: "base" },
      { hex: "#D91656", ratio: 30, role: "sub" },
      { hex: "#EE66A6", ratio: 20, role: "sub" },
      { hex: "#FFEB55", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥"] },

  { id: "ch-624", name: "청보라 바탕의 밝은 레몬", searchAliases: ["비비드 퍼플 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#7C00FE", ratio: 40, role: "base" },
      { hex: "#F9E400", ratio: 30, role: "sub" },
      { hex: "#FFAF00", ratio: 20, role: "sub" },
      { hex: "#F5004F", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","비비드","옐로우"] },

  { id: "ch-625", name: "레몬 위에 난초색 한 점", searchAliases: ["페일 그린 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E9FF97", ratio: 40, role: "base" },
      { hex: "#FFD18E", ratio: 30, role: "sub" },
      { hex: "#FFA38F", ratio: 20, role: "sub" },
      { hex: "#FF7EE2", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","오렌지"] },

  { id: "ch-626", name: "남색과 귤색", searchAliases: ["딥 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#26355D", ratio: 40, role: "base" },
      { hex: "#AF47D2", ratio: 30, role: "sub" },
      { hex: "#FF8F00", ratio: 20, role: "sub" },
      { hex: "#FFDB00", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","퍼플"] },

  { id: "ch-627", name: "레몬 위에 겹친 다홍", searchAliases: ["라이트 옐로우 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FFFF80", ratio: 40, role: "base" },
      { hex: "#FFAA80", ratio: 30, role: "sub" },
      { hex: "#FF5580", ratio: 20, role: "sub" },
      { hex: "#FF0080", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","오렌지"] },

  { id: "ch-628", name: "레몬과 산호색 사이", searchAliases: ["페일 그린 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C3FF93", ratio: 40, role: "base" },
      { hex: "#FFDB5C", ratio: 30, role: "sub" },
      { hex: "#FFAF61", ratio: 20, role: "sub" },
      { hex: "#FF70AB", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","옐로우"] },

  { id: "ch-629", name: "난초색 바탕의 밝은 연노랑", searchAliases: ["비비드 핑크 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FF76CE", ratio: 40, role: "base" },
      { hex: "#FDFFC2", ratio: 30, role: "sub" },
      { hex: "#94FFD8", ratio: 20, role: "sub" },
      { hex: "#A3D8FF", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","옐로우"] },

  { id: "ch-630", name: "청록 곁의 노랑", searchAliases: ["딥 시안 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#007F73", ratio: 40, role: "base" },
      { hex: "#4CCD99", ratio: 30, role: "sub" },
      { hex: "#FFC700", ratio: 20, role: "sub" },
      { hex: "#FFF455", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","딥","그린"] },

  { id: "ch-631", name: "잉크 네이비와 청보라, 연옥색", searchAliases: ["딥 블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#211951", ratio: 40, role: "base" },
      { hex: "#836FFF", ratio: 30, role: "sub" },
      { hex: "#15F5BA", ratio: 20, role: "sub" },
      { hex: "#F0F3FF", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-632", name: "검은 밤의 형광 간판", searchAliases: ["비비드 핑크 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#000000", ratio: 40, role: "base" },
      { hex: "#F72798", ratio: 30, role: "sub" },
      { hex: "#F57D1F", ratio: 20, role: "sub" },
      { hex: "#EBF400", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","무채색"] },

  { id: "ch-633", name: "연노랑과 다홍", searchAliases: ["페일 그린 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#DCFFB7", ratio: 40, role: "base" },
      { hex: "#FF6868", ratio: 30, role: "sub" },
      { hex: "#FFBB64", ratio: 20, role: "sub" },
      { hex: "#FFEAA7", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","레드"] },

  { id: "ch-634", name: "잉크 네이비의 레몬 테두리", searchAliases: ["딥 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#1D2B53", ratio: 40, role: "base" },
      { hex: "#7E2553", ratio: 30, role: "sub" },
      { hex: "#FF004D", ratio: 20, role: "sub" },
      { hex: "#FAEF5D", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","핑크"] },

  { id: "ch-635", name: "백자에서 보라까지", searchAliases: ["비비드 퍼플 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F3F8FF", ratio: 40, role: "base" },
      { hex: "#E26EE5", ratio: 30, role: "sub" },
      { hex: "#7E30E1", ratio: 20, role: "sub" },
      { hex: "#49108B", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","무채색"] },

  { id: "ch-636", name: "연민트 위에 파랑 한 점", searchAliases: ["페일 시안 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#B6FFFA", ratio: 40, role: "base" },
      { hex: "#98E4FF", ratio: 30, role: "sub" },
      { hex: "#80B3FF", ratio: 20, role: "sub" },
      { hex: "#687EFF", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "파스텔"] },

  { id: "ch-637", name: "수레국화색에서 연민트까지", searchAliases: ["비비드 블루 × 시안"], scheme: "tone-on-tone",
    colors: [
      { hex: "#6499E9", ratio: 40, role: "base" },
      { hex: "#9EDDFF", ratio: 30, role: "sub" },
      { hex: "#A6F6FF", ratio: 20, role: "sub" },
      { hex: "#BEFFF7", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-638", name: "암청색 위에 겹친 물빛", searchAliases: ["딥 퍼플 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#27005D", ratio: 40, role: "base" },
      { hex: "#9400FF", ratio: 30, role: "sub" },
      { hex: "#AED2FF", ratio: 20, role: "sub" },
      { hex: "#E4F1FF", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥"] },

  { id: "ch-639", name: "딸기우유와 레몬 사이", searchAliases: ["페일 핑크 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#FFA1F5", ratio: 40, role: "base" },
      { hex: "#BC7AF9", ratio: 30, role: "sub" },
      { hex: "#F8FF95", ratio: 20, role: "sub" },
      { hex: "#A6FF96", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","파스텔","퍼플"] },

  { id: "ch-640", name: "연옥색 곁의 난초색", searchAliases: ["비비드 시안 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#45FFCA", ratio: 40, role: "base" },
      { hex: "#FEFFAC", ratio: 30, role: "sub" },
      { hex: "#FFB6D9", ratio: 20, role: "sub" },
      { hex: "#D67BFF", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","옐로우"] },

  { id: "ch-641", name: "청보라 바탕의 밝은 연옥색", searchAliases: ["비비드 퍼플 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#793FDF", ratio: 40, role: "base" },
      { hex: "#7091F5", ratio: 30, role: "sub" },
      { hex: "#97FFF4", ratio: 20, role: "sub" },
      { hex: "#FFFD8C", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","블루"] },

  { id: "ch-642", name: "와인의 노랑 테두리", searchAliases: ["비비드 핑크 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#900C3F", ratio: 40, role: "base" },
      { hex: "#C70039", ratio: 30, role: "sub" },
      { hex: "#F94C10", ratio: 20, role: "sub" },
      { hex: "#F8DE22", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "비비드"] },

  { id: "ch-643", name: "아이리스와 등꽃색, 민트", searchAliases: ["블루 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#6F61C0", ratio: 40, role: "base" },
      { hex: "#A084E8", ratio: 30, role: "sub" },
      { hex: "#8BE8E5", ratio: 20, role: "sub" },
      { hex: "#D5FFE4", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤"] },

  { id: "ch-644", name: "연노랑 위에 아이리스 한 점", searchAliases: ["페일 그린 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#E8FFCE", ratio: 40, role: "base" },
      { hex: "#ACFADF", ratio: 30, role: "sub" },
      { hex: "#94ADD7", ratio: 20, role: "sub" },
      { hex: "#7C73C0", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔"] },

  { id: "ch-645", name: "진분홍과 검붉은색", searchAliases: ["비비드 핑크 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F11A7B", ratio: 40, role: "base" },
      { hex: "#982176", ratio: 30, role: "sub" },
      { hex: "#3E001F", ratio: 20, role: "sub" },
      { hex: "#FFE5AD", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "비비드"] },

  { id: "ch-646", name: "청보라에서 라벤더까지", searchAliases: ["비비드 블루 × 퍼플"], scheme: "tone-on-tone",
    colors: [
      { hex: "#6528F7", ratio: 40, role: "base" },
      { hex: "#A076F9", ratio: 30, role: "sub" },
      { hex: "#D7BBF5", ratio: 20, role: "sub" },
      { hex: "#EDE4FF", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-647", name: "암청색 위에 겹친 연옥색", searchAliases: ["딥 블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#071952", ratio: 40, role: "base" },
      { hex: "#0B666A", ratio: 30, role: "sub" },
      { hex: "#35A29F", ratio: 20, role: "sub" },
      { hex: "#97FEED", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","시안"] },

  { id: "ch-648", name: "짙은 보라와 연노랑 사이", searchAliases: ["비비드 퍼플 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#40128B", ratio: 40, role: "base" },
      { hex: "#9336B4", ratio: 30, role: "sub" },
      { hex: "#DD58D6", ratio: 20, role: "sub" },
      { hex: "#FFE79B", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "비비드"] },

  { id: "ch-649", name: "파랑 곁의 레몬", searchAliases: ["비비드 블루 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#0079FF", ratio: 40, role: "base" },
      { hex: "#00DFA2", ratio: 30, role: "sub" },
      { hex: "#F6FA70", ratio: 20, role: "sub" },
      { hex: "#FF0060", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","비비드","시안"] },

  { id: "ch-650", name: "민트와 연옥색, 연녹색", searchAliases: ["비비드 시안 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#79E0EE", ratio: 40, role: "base" },
      { hex: "#98EECC", ratio: 30, role: "sub" },
      { hex: "#D0F5BE", ratio: 20, role: "sub" },
      { hex: "#FBFFDC", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","그린"] },

  { id: "ch-651", name: "황금빛과 자수정", searchAliases: ["비비드 오렌지 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#FFB84C", ratio: 40, role: "base" },
      { hex: "#F266AB", ratio: 30, role: "sub" },
      { hex: "#A459D1", ratio: 20, role: "sub" },
      { hex: "#2CD3E1", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","비비드","핑크"] },

  { id: "ch-652", name: "마젠타 위에 겹친 연노랑", searchAliases: ["비비드 핑크 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#FF55BB", ratio: 40, role: "base" },
      { hex: "#FFD3A3", ratio: 30, role: "sub" },
      { hex: "#FCFFB2", ratio: 20, role: "sub" },
      { hex: "#B6EAFA", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","오렌지"] },

  { id: "ch-653", name: "아이보리의 검붉은색 테두리", searchAliases: ["페일 오렌지 × 옐로우"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F6F1E9", ratio: 40, role: "base" },
      { hex: "#FFD93D", ratio: 30, role: "sub" },
      { hex: "#FF8400", ratio: 20, role: "sub" },
      { hex: "#4F200D", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","옐로우"] },

  { id: "ch-654", name: "보라와 빨강 사이", searchAliases: ["블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#7149C6", ratio: 40, role: "base" },
      { hex: "#FC2947", ratio: 30, role: "sub" },
      { hex: "#FE6244", ratio: 20, role: "sub" },
      { hex: "#FFDEB9", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","레드"] },

  { id: "ch-655", name: "딸기우유에서 연노랑까지", searchAliases: ["페일 레드 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FFACAC", ratio: 40, role: "base" },
      { hex: "#FFBFA9", ratio: 30, role: "sub" },
      { hex: "#FFEBB4", ratio: 20, role: "sub" },
      { hex: "#FBFFB1", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","오렌지"] },

  { id: "ch-656", name: "먹색 바탕의 밝은 난초색", searchAliases: ["딥 블루 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#191825", ratio: 40, role: "base" },
      { hex: "#865DFF", ratio: 30, role: "sub" },
      { hex: "#E384FF", ratio: 20, role: "sub" },
      { hex: "#FFA3FD", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-657", name: "암청색 곁의 진분홍", searchAliases: ["딥 블루 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#060047", ratio: 40, role: "base" },
      { hex: "#B3005E", ratio: 30, role: "sub" },
      { hex: "#E90064", ratio: 20, role: "sub" },
      { hex: "#FF5F9E", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","핑크"] },

  { id: "ch-658", name: "검정 위에 켜진 초록과 노랑", searchAliases: ["비비드 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#000000", ratio: 40, role: "base" },
      { hex: "#0F6292", ratio: 30, role: "sub" },
      { hex: "#16FF00", ratio: 20, role: "sub" },
      { hex: "#FFED00", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","비비드","무채색"] },

  { id: "ch-659", name: "레몬과 연옥색, 하늘색", searchAliases: ["비비드 옐로우 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#FFEA20", ratio: 40, role: "base" },
      { hex: "#8DCBE6", ratio: 30, role: "sub" },
      { hex: "#9DF1DF", ratio: 20, role: "sub" },
      { hex: "#E3F6FF", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","비비드","시안"] },

  { id: "ch-660", name: "시안과 보라", searchAliases: ["비비드 시안 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#39B5E0", ratio: 40, role: "base" },
      { hex: "#A31ACB", ratio: 30, role: "sub" },
      { hex: "#FF78F0", ratio: 20, role: "sub" },
      { hex: "#F5EA5A", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","퍼플"] },

  { id: "ch-661", name: "연노랑 위에 자수정 한 점", searchAliases: ["페일 옐로우 × 퍼플"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FFFFD0", ratio: 40, role: "base" },
      { hex: "#F3CCFF", ratio: 30, role: "sub" },
      { hex: "#D09CFA", ratio: 20, role: "sub" },
      { hex: "#A555EC", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","퍼플"] },

  { id: "ch-662", name: "연민트 위에 겹친 레몬", searchAliases: ["페일 시안 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#C0EEE4", ratio: 40, role: "base" },
      { hex: "#F8F988", ratio: 30, role: "sub" },
      { hex: "#FFCAC8", ratio: 20, role: "sub" },
      { hex: "#FF9E9E", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","파스텔","옐로우"] },

  { id: "ch-663", name: "짙은 보라와 진분홍 사이", searchAliases: ["딥 퍼플 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#3F0071", ratio: 40, role: "base" },
      { hex: "#FB2576", ratio: 30, role: "sub" },
      { hex: "#332FD0", ratio: 20, role: "sub" },
      { hex: "#0002A1", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","딥","핑크"] },

  { id: "ch-664", name: "레몬에서 초록까지", searchAliases: ["비비드 옐로우 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F0FF42", ratio: 40, role: "base" },
      { hex: "#82CD47", ratio: 30, role: "sub" },
      { hex: "#54B435", ratio: 20, role: "sub" },
      { hex: "#379237", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","비비드","그린"] },

  { id: "ch-665", name: "연옥색 곁의 다홍", searchAliases: ["페일 그린 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#B3FFAE", ratio: 40, role: "base" },
      { hex: "#F8FFDB", ratio: 30, role: "sub" },
      { hex: "#FF6464", ratio: 20, role: "sub" },
      { hex: "#FF7D7D", ratio: 10, role: "point" }],
    tags: ["그린", "웜톤", "파스텔"] },

  { id: "ch-666", name: "진분홍 바탕의 밝은 레몬", searchAliases: ["비비드 핑크 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#EA047E", ratio: 40, role: "base" },
      { hex: "#FF6D28", ratio: 30, role: "sub" },
      { hex: "#FCE700", ratio: 20, role: "sub" },
      { hex: "#00F5FF", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","오렌지"] },

  { id: "ch-667", name: "파랑과 레몬, 형광 연두", searchAliases: ["비비드 블루 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#2192FF", ratio: 40, role: "base" },
      { hex: "#38E54D", ratio: 30, role: "sub" },
      { hex: "#9CFF2E", ratio: 20, role: "sub" },
      { hex: "#FDFF00", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","비비드","그린"] },

  { id: "ch-668", name: "연옥색의 빨강 테두리", searchAliases: ["비비드 시안 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#00FFD1", ratio: 40, role: "base" },
      { hex: "#31C6D4", ratio: 30, role: "sub" },
      { hex: "#FFFF00", ratio: 20, role: "sub" },
      { hex: "#FF1E1E", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "비비드"] },

  { id: "ch-669", name: "민트 아래 짙은 짙은 자주", searchAliases: ["비비드 시안 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#31E1F7", ratio: 40, role: "base" },
      { hex: "#400D51", ratio: 30, role: "sub" },
      { hex: "#D800A6", ratio: 20, role: "sub" },
      { hex: "#FF7777", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","퍼플"] },

  { id: "ch-670", name: "연민트 위에 다홍 한 점", searchAliases: ["페일 시안 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#B9FFF8", ratio: 40, role: "base" },
      { hex: "#6FEDD6", ratio: 30, role: "sub" },
      { hex: "#FF9551", ratio: 20, role: "sub" },
      { hex: "#FF4A4A", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "파스텔"] },

  { id: "ch-671", name: "남색과 노랑", searchAliases: ["딥 블루 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#293462", ratio: 40, role: "base" },
      { hex: "#1CD6CE", ratio: 30, role: "sub" },
      { hex: "#FEDB39", ratio: 20, role: "sub" },
      { hex: "#D61C4E", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","시안"] },

  { id: "ch-672", name: "울트라마린 위에 겹친 시안", searchAliases: ["비비드 퍼플 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#5800FF", ratio: 40, role: "base" },
      { hex: "#0096FF", ratio: 30, role: "sub" },
      { hex: "#00D7FF", ratio: 20, role: "sub" },
      { hex: "#72FFFF", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","블루"] },

  { id: "ch-673", name: "울트라마린과 꿀빛 사이", searchAliases: ["비비드 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#3330E4", ratio: 40, role: "base" },
      { hex: "#F637EC", ratio: 30, role: "sub" },
      { hex: "#FBB454", ratio: 20, role: "sub" },
      { hex: "#FAEA48", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","비비드","핑크"] },

  { id: "ch-674", name: "레몬 곁의 울트라마린", searchAliases: ["비비드 옐로우 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#F7EC09", ratio: 40, role: "base" },
      { hex: "#3EC70B", ratio: 30, role: "sub" },
      { hex: "#3B44F6", ratio: 20, role: "sub" },
      { hex: "#A149FA", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","비비드","그린"] },

  { id: "ch-675", name: "민트 아래 짙은 짙은 보라", searchAliases: ["비비드 시안 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#37E2D5", ratio: 40, role: "base" },
      { hex: "#590696", ratio: 30, role: "sub" },
      { hex: "#C70A80", ratio: 20, role: "sub" },
      { hex: "#FBCB0A", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","퍼플"] },

  { id: "ch-676", name: "형광 연두와 연옥색, 비취색", searchAliases: ["비비드 시안 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#00FFAB", ratio: 40, role: "base" },
      { hex: "#14C38E", ratio: 30, role: "sub" },
      { hex: "#B8F1B0", ratio: 20, role: "sub" },
      { hex: "#E3FCBF", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "비비드"] },

  { id: "ch-677", name: "짙은 보라와 다홍", searchAliases: ["비비드 퍼플 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#541690", ratio: 40, role: "base" },
      { hex: "#FF4949", ratio: 30, role: "sub" },
      { hex: "#FF8D29", ratio: 20, role: "sub" },
      { hex: "#FFCD38", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","비비드","레드"] },

  { id: "ch-678", name: "남색 위에 겹친 꿀빛", searchAliases: ["딥 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#143F6B", ratio: 40, role: "base" },
      { hex: "#F55353", ratio: 30, role: "sub" },
      { hex: "#FEB139", ratio: 20, role: "sub" },
      { hex: "#F6F54D", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","딥","레드"] },

  { id: "ch-679", name: "울트라마린과 마젠타 사이", searchAliases: ["비비드 블루 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#4700D8", ratio: 40, role: "base" },
      { hex: "#9900F0", ratio: 30, role: "sub" },
      { hex: "#F900BF", ratio: 20, role: "sub" },
      { hex: "#FF85B3", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","비비드","퍼플"] },

  { id: "ch-680", name: "청록의 연옥색 테두리", searchAliases: ["시안 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#247881", ratio: 40, role: "base" },
      { hex: "#43919B", ratio: 30, role: "sub" },
      { hex: "#30AADD", ratio: 20, role: "sub" },
      { hex: "#00FFC6", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤"] },

  { id: "ch-681", name: "버터 위에 연청보라 한 점", searchAliases: ["비비드 오렌지 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FFD36E", ratio: 40, role: "base" },
      { hex: "#FFF56D", ratio: 30, role: "sub" },
      { hex: "#99FFCD", ratio: 20, role: "sub" },
      { hex: "#9FB4FF", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","비비드","옐로우"] },

  { id: "ch-682", name: "울트라마린 곁의 난초색", searchAliases: ["블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#332FD0", ratio: 40, role: "base" },
      { hex: "#9254C8", ratio: 30, role: "sub" },
      { hex: "#E15FED", ratio: 20, role: "sub" },
      { hex: "#6EDCD9", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","퍼플"] },

  { id: "ch-683", name: "청보라의 레몬 테두리", searchAliases: ["비비드 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#4D77FF", ratio: 40, role: "base" },
      { hex: "#56BBF1", ratio: 30, role: "sub" },
      { hex: "#5EE6EB", ratio: 20, role: "sub" },
      { hex: "#F2FA5A", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-684", name: "암청색 바탕의 밝은 연옥색", searchAliases: ["딥 블루 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#0E185F", ratio: 40, role: "base" },
      { hex: "#2FA4FF", ratio: 30, role: "sub" },
      { hex: "#00FFDD", ratio: 20, role: "sub" },
      { hex: "#E8FFC2", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-685", name: "레몬과 연두, 다홍", searchAliases: ["비비드 옐로우 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#FFE162", ratio: 40, role: "base" },
      { hex: "#FF6464", ratio: 30, role: "sub" },
      { hex: "#91C483", ratio: 20, role: "sub" },
      { hex: "#EEEEEE", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","비비드","레드"] },

  { id: "ch-686", name: "보랏빛 방전과 금빛 섬광", searchAliases: ["비비드 퍼플 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#000000", ratio: 40, role: "base" },
      { hex: "#5800FF", ratio: 30, role: "sub" },
      { hex: "#E900FF", ratio: 20, role: "sub" },
      { hex: "#FFC600", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","비비드","무채색"] },

  { id: "ch-687", name: "마젠타 위에 남색 한 점", searchAliases: ["비비드 핑크 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FF008E", ratio: 40, role: "base" },
      { hex: "#D22779", ratio: 30, role: "sub" },
      { hex: "#612897", ratio: 20, role: "sub" },
      { hex: "#0C1E7F", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "비비드"] },

  { id: "ch-688", name: "다홍 위에 겹친 연노랑", searchAliases: ["비비드 레드 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FF6363", ratio: 40, role: "base" },
      { hex: "#FFAB76", ratio: 30, role: "sub" },
      { hex: "#FFFDA2", ratio: 20, role: "sub" },
      { hex: "#BAFFB4", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","오렌지"] },

  { id: "ch-689", name: "버터와 진분홍", searchAliases: ["비비드 오렌지 × 퍼플"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F9D371", ratio: 40, role: "base" },
      { hex: "#F47340", ratio: 30, role: "sub" },
      { hex: "#EF2F88", ratio: 20, role: "sub" },
      { hex: "#8843F2", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "비비드"] },

  { id: "ch-690", name: "청보라와 연옥색 사이", searchAliases: ["비비드 퍼플 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#7900FF", ratio: 40, role: "base" },
      { hex: "#548CFF", ratio: 30, role: "sub" },
      { hex: "#93FFD8", ratio: 20, role: "sub" },
      { hex: "#CFFFDC", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","블루"] },

  { id: "ch-691", name: "빨강 곁의 레몬", searchAliases: ["비비드 레드 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FF1700", ratio: 40, role: "base" },
      { hex: "#FF8E00", ratio: 30, role: "sub" },
      { hex: "#FFE400", ratio: 20, role: "sub" },
      { hex: "#06FF00", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","오렌지"] },

  { id: "ch-692", name: "빨강에서 노랑까지", searchAliases: ["비비드 레드 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F90716", ratio: 40, role: "base" },
      { hex: "#FF5403", ratio: 30, role: "sub" },
      { hex: "#FFCA03", ratio: 20, role: "sub" },
      { hex: "#FFF323", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","오렌지"] },

  { id: "ch-693", name: "등꽃색의 연옥색 테두리", searchAliases: ["라이트 퍼플 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#B983FF", ratio: 40, role: "base" },
      { hex: "#94B3FD", ratio: 30, role: "sub" },
      { hex: "#94DAFF", ratio: 20, role: "sub" },
      { hex: "#99FEFF", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","파스텔","블루"] },

  { id: "ch-694", name: "레몬 위에 등꽃색 한 점", searchAliases: ["비비드 옐로우 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FBF46D", ratio: 40, role: "base" },
      { hex: "#B4FE98", ratio: 30, role: "sub" },
      { hex: "#77E4D4", ratio: 20, role: "sub" },
      { hex: "#998CEB", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","비비드","그린"] },

  { id: "ch-695", name: "암청색과 보라, 진분홍", searchAliases: ["딥 블루 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#000D6B", ratio: 40, role: "base" },
      { hex: "#9C19E0", ratio: 30, role: "sub" },
      { hex: "#FF5DA2", ratio: 20, role: "sub" },
      { hex: "#99DDCC", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","퍼플"] },

  { id: "ch-696", name: "형광 연두의 빨강 테두리", searchAliases: ["비비드 그린 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#49FF00", ratio: 40, role: "base" },
      { hex: "#FBFF00", ratio: 30, role: "sub" },
      { hex: "#FF9300", ratio: 20, role: "sub" },
      { hex: "#FF0000", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","비비드","옐로우"] },

  { id: "ch-697", name: "진분홍 아래 짙은 남색", searchAliases: ["비비드 핑크 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#FF0075", ratio: 40, role: "base" },
      { hex: "#172774", ratio: 30, role: "sub" },
      { hex: "#77D970", ratio: 20, role: "sub" },
      { hex: "#EEEEEE", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","블루"] },

  { id: "ch-698", name: "터쿼이즈와 남보라", searchAliases: ["비비드 시안 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#1DB9C3", ratio: 40, role: "base" },
      { hex: "#7027A0", ratio: 30, role: "sub" },
      { hex: "#C32BAD", ratio: 20, role: "sub" },
      { hex: "#F56FAD", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","퍼플"] },

  { id: "ch-699", name: "마젠타에서 백자까지", searchAliases: ["비비드 핑크 × 퍼플"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FF00E4", ratio: 40, role: "base" },
      { hex: "#ED50F1", ratio: 30, role: "sub" },
      { hex: "#FDB9FC", ratio: 20, role: "sub" },
      { hex: "#FFEDED", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","퍼플"] },

  { id: "ch-700", name: "흑단 위에 겹친 딸기우유", searchAliases: ["딥 레드 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#3B0000", ratio: 40, role: "base" },
      { hex: "#FF0000", ratio: 30, role: "sub" },
      { hex: "#FF95C5", ratio: 20, role: "sub" },
      { hex: "#FFF6CD", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥"] },

  { id: "ch-701", name: "남색 위에 백자 한 점", searchAliases: ["딥 블루 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#1E3163", ratio: 40, role: "base" },
      { hex: "#2D46B9", ratio: 30, role: "sub" },
      { hex: "#F037A5", ratio: 20, role: "sub" },
      { hex: "#F8F8F8", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-702", name: "암청색과 연옥색 사이", searchAliases: ["딥 블루 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#170055", ratio: 40, role: "base" },
      { hex: "#3E00FF", ratio: 30, role: "sub" },
      { hex: "#AE00FB", ratio: 20, role: "sub" },
      { hex: "#B5FFD9", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-703", name: "다홍 곁의 연옥색", searchAliases: ["비비드 레드 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#FF4848", ratio: 40, role: "base" },
      { hex: "#FFD371", ratio: 30, role: "sub" },
      { hex: "#C2FFD9", ratio: 20, role: "sub" },
      { hex: "#9DDAC6", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","오렌지"] },

  { id: "ch-704", name: "연옥색과 크림, 연노랑", searchAliases: ["비비드 시안 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#28FFBF", ratio: 40, role: "base" },
      { hex: "#BCFFB9", ratio: 30, role: "sub" },
      { hex: "#F5FDB0", ratio: 20, role: "sub" },
      { hex: "#F7E6AD", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","그린"] },

  { id: "ch-705", name: "민트와 난초색", searchAliases: ["비비드 시안 × 퍼플"], scheme: "tone-in-tone",
    colors: [
      { hex: "#0CECDD", ratio: 40, role: "base" },
      { hex: "#FFF338", ratio: 30, role: "sub" },
      { hex: "#FF67E7", ratio: 20, role: "sub" },
      { hex: "#C400FF", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","옐로우"] },

  { id: "ch-706", name: "수레국화색에서 민트까지", searchAliases: ["비비드 블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#7C83FD", ratio: 40, role: "base" },
      { hex: "#96BAFF", ratio: 30, role: "sub" },
      { hex: "#7DEDFF", ratio: 20, role: "sub" },
      { hex: "#88FFF7", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-707", name: "민트 위에 겹친 자홍", searchAliases: ["라이트 시안 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#78DEC7", ratio: 40, role: "base" },
      { hex: "#D62AD0", ratio: 30, role: "sub" },
      { hex: "#FB7AFC", ratio: 20, role: "sub" },
      { hex: "#FBC7F7", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","핑크"] },

  { id: "ch-708", name: "연분홍과 보라 사이", searchAliases: ["페일 핑크 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F0D9E7", ratio: 40, role: "base" },
      { hex: "#FF94CC", ratio: 30, role: "sub" },
      { hex: "#A239EA", ratio: 20, role: "sub" },
      { hex: "#5C33F6", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "파스텔"] },

  { id: "ch-709", name: "감청 수면과 밀짚빛 돛", searchAliases: ["비비드 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#04009A", ratio: 40, role: "base" },
      { hex: "#77ACF1", ratio: 30, role: "sub" },
      { hex: "#3EDBF0", ratio: 20, role: "sub" },
      { hex: "#F0EBCC", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-710", name: "민트 곁의 마젠타", searchAliases: ["비비드 시안 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#00EAD3", ratio: 40, role: "base" },
      { hex: "#FFF5B7", ratio: 30, role: "sub" },
      { hex: "#FF449F", ratio: 20, role: "sub" },
      { hex: "#005F99", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","옐로우"] },

  { id: "ch-711", name: "짙은 자주 바탕의 밝은 딸기우유", searchAliases: ["딥 핑크 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#480032", ratio: 40, role: "base" },
      { hex: "#005792", ratio: 30, role: "sub" },
      { hex: "#FC92E3", ratio: 20, role: "sub" },
      { hex: "#F2F4C3", ratio: 10, role: "point" }],
    tags: ["핑크","쿨톤","딥","블루"] },

  { id: "ch-712", name: "레몬에서 귤색까지", searchAliases: ["비비드 옐로우 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F7FD04", ratio: 40, role: "base" },
      { hex: "#F9B208", ratio: 30, role: "sub" },
      { hex: "#F98404", ratio: 20, role: "sub" },
      { hex: "#FC5404", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","비비드","오렌지"] },

  { id: "ch-713", name: "감청 바탕의 밝은 연옥색", searchAliases: ["블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#233E8B", ratio: 40, role: "base" },
      { hex: "#1EAE98", ratio: 30, role: "sub" },
      { hex: "#A9F1DF", ratio: 20, role: "sub" },
      { hex: "#FFFFC7", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","시안"] },

  { id: "ch-714", name: "파란 유리에 비친 청록 물결", searchAliases: ["비비드 블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#04009A", ratio: 40, role: "base" },
      { hex: "#77ACF1", ratio: 30, role: "sub" },
      { hex: "#3EDBF0", ratio: 20, role: "sub" },
      { hex: "#C0FEFC", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-715", name: "연노랑과 시안, 보라", searchAliases: ["페일 옐로우 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#F5F7B2", ratio: 40, role: "base" },
      { hex: "#1CC5DC", ratio: 30, role: "sub" },
      { hex: "#890596", ratio: 20, role: "sub" },
      { hex: "#CF0000", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","시안"] },

  { id: "ch-716", name: "보라와 분홍 사이 노란 빛", searchAliases: ["비비드 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#23049D", ratio: 40, role: "base" },
      { hex: "#AA2EE6", ratio: 30, role: "sub" },
      { hex: "#FF79CD", ratio: 20, role: "sub" },
      { hex: "#FFDF6B", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","비비드","퍼플"] },

  { id: "ch-717", name: "짙은 보라와 호박색", searchAliases: ["비비드 퍼플 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#72147E", ratio: 40, role: "base" },
      { hex: "#F21170", ratio: 30, role: "sub" },
      { hex: "#FA9905", ratio: 20, role: "sub" },
      { hex: "#FF5200", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","비비드","핑크"] },

  { id: "ch-718", name: "짙은 보라 위에 겹친 노랑", searchAliases: ["퍼플 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#542E71", ratio: 40, role: "base" },
      { hex: "#FB3640", ratio: 30, role: "sub" },
      { hex: "#FDCA40", ratio: 20, role: "sub" },
      { hex: "#A799B7", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","레드"] },

  { id: "ch-719", name: "난초색과 연녹색 사이", searchAliases: ["라이트 퍼플 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#C67ACE", ratio: 40, role: "base" },
      { hex: "#D8F8B7", ratio: 30, role: "sub" },
      { hex: "#FF9A8C", ratio: 20, role: "sub" },
      { hex: "#CE1F6A", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","파스텔","그린"] },

  { id: "ch-720", name: "백자의 솔잎색 테두리", searchAliases: ["페일 옐로우 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FEFFDE", ratio: 40, role: "base" },
      { hex: "#DDFFBC", ratio: 30, role: "sub" },
      { hex: "#91C788", ratio: 20, role: "sub" },
      { hex: "#52734D", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","그린"] },

  { id: "ch-721", name: "라임 위에 진홍 한 점", searchAliases: ["라이트 그린 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#9EDE73", ratio: 40, role: "base" },
      { hex: "#F7EA00", ratio: 30, role: "sub" },
      { hex: "#E48900", ratio: 20, role: "sub" },
      { hex: "#BE0000", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","파스텔","옐로우"] },

  { id: "ch-722", name: "연옥색 곁의 차콜", searchAliases: ["페일 그린 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#CCFFBD", ratio: 40, role: "base" },
      { hex: "#7ECA9C", ratio: 30, role: "sub" },
      { hex: "#40394A", ratio: 20, role: "sub" },
      { hex: "#1C1427", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔"] },

  { id: "ch-723", name: "짙은 보라에서 라벤더까지", searchAliases: ["딥 퍼플 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#440A67", ratio: 40, role: "base" },
      { hex: "#93329E", ratio: 30, role: "sub" },
      { hex: "#B4AEE8", ratio: 20, role: "sub" },
      { hex: "#FFE3FE", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥"] },

  { id: "ch-724", name: "백자에서 아이리스까지", searchAliases: ["페일 블루 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#E4FBFF", ratio: 40, role: "base" },
      { hex: "#B8B5FF", ratio: 30, role: "sub" },
      { hex: "#7868E6", ratio: 20, role: "sub" },
      { hex: "#EDEEF7", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","파스텔","무채색"] },

  { id: "ch-725", name: "먹색의 레몬 테두리", searchAliases: ["비비드 핑크 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#26001B", ratio: 40, role: "base" },
      { hex: "#810034", ratio: 30, role: "sub" },
      { hex: "#FF005C", ratio: 20, role: "sub" },
      { hex: "#FFF600", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","무채색"] },

  { id: "ch-726", name: "와인 위에 황금빛 한 점", searchAliases: ["비비드 레드 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#8C0000", ratio: 40, role: "base" },
      { hex: "#BD2000", ratio: 30, role: "sub" },
      { hex: "#FA1E0E", ratio: 20, role: "sub" },
      { hex: "#FFBE0F", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "비비드"] },

  { id: "ch-727", name: "백자의 잉크 네이비 테두리", searchAliases: ["페일 그린 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F6F6F6", ratio: 40, role: "base" },
      { hex: "#C7FFD8", ratio: 30, role: "sub" },
      { hex: "#98DED9", ratio: 20, role: "sub" },
      { hex: "#161D6F", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","파스텔","무채색"] },

  { id: "ch-728", name: "아이리스 바탕의 밝은 레몬", searchAliases: ["퍼플 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#845EC2", ratio: 40, role: "base" },
      { hex: "#FFC75F", ratio: 30, role: "sub" },
      { hex: "#F9F871", ratio: 20, role: "sub" },
      { hex: "#FF5E78", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","오렌지"] },

  { id: "ch-729", name: "레몬과 다홍, 가지색", searchAliases: ["비비드 옐로우 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#FFE227", ratio: 40, role: "base" },
      { hex: "#EB596E", ratio: 30, role: "sub" },
      { hex: "#4D375D", ratio: 20, role: "sub" },
      { hex: "#121013", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","비비드","레드"] },

  { id: "ch-730", name: "흑단과 민트", searchAliases: ["퍼플 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#252525", ratio: 40, role: "base" },
      { hex: "#6930C3", ratio: 30, role: "sub" },
      { hex: "#64DFDF", ratio: 20, role: "sub" },
      { hex: "#80FFDB", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","무채색"] },

  { id: "ch-731", name: "비취색 위에 겹친 귤색", searchAliases: ["비비드 시안 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#00AF91", ratio: 40, role: "base" },
      { hex: "#007965", ratio: 30, role: "sub" },
      { hex: "#F58634", ratio: 20, role: "sub" },
      { hex: "#FFCC29", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "비비드"] },

  { id: "ch-732", name: "다홍 위에 빙하색 한 점", searchAliases: ["비비드 레드 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#FF577F", ratio: 40, role: "base" },
      { hex: "#FF884B", ratio: 30, role: "sub" },
      { hex: "#FFC764", ratio: 20, role: "sub" },
      { hex: "#CDFFFC", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","오렌지"] },

  { id: "ch-733", name: "잉크 네이비와 오렌지 사이", searchAliases: ["딥 블루 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#111D5E", ratio: 40, role: "base" },
      { hex: "#C70039", ratio: 30, role: "sub" },
      { hex: "#F37121", ratio: 20, role: "sub" },
      { hex: "#C0E218", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","딥","핑크"] },

  { id: "ch-734", name: "백자 곁의 군청", searchAliases: ["비비드 오렌지 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#F1F1F1", ratio: 40, role: "base" },
      { hex: "#FDB827", ratio: 30, role: "sub" },
      { hex: "#21209C", ratio: 20, role: "sub" },
      { hex: "#23120B", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","비비드","무채색"] },

  { id: "ch-735", name: "감청 바탕의 밝은 형광 연두", searchAliases: ["비비드 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#153E90", ratio: 40, role: "base" },
      { hex: "#0E49B5", ratio: 30, role: "sub" },
      { hex: "#54E346", ratio: 20, role: "sub" },
      { hex: "#FFFAA4", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-736", name: "잉크 네이비에서 버터까지", searchAliases: ["딥 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#222831", ratio: 40, role: "base" },
      { hex: "#393E46", ratio: 30, role: "sub" },
      { hex: "#FFD369", ratio: 20, role: "sub" },
      { hex: "#EEEEEE", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","무채색"] },

  { id: "ch-737", name: "잉크 네이비와 홍매색, 진분홍", searchAliases: ["딥 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#120078", ratio: 40, role: "base" },
      { hex: "#9D0191", ratio: 30, role: "sub" },
      { hex: "#FD3A69", ratio: 20, role: "sub" },
      { hex: "#FECD1A", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","핑크"] },

  { id: "ch-738", name: "먹빛에서 등꽃빛까지", searchAliases: ["비비드 퍼플 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#000000", ratio: 40, role: "base" },
      { hex: "#52057B", ratio: 30, role: "sub" },
      { hex: "#892CDC", ratio: 20, role: "sub" },
      { hex: "#BC6FF1", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","비비드","무채색"] },

  { id: "ch-739", name: "레몬의 유칼립투스 테두리", searchAliases: ["비비드 옐로우 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#FCF876", ratio: 40, role: "base" },
      { hex: "#CEE397", ratio: 30, role: "sub" },
      { hex: "#8BCDCD", ratio: 20, role: "sub" },
      { hex: "#3797A4", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","비비드","그린"] },

  { id: "ch-740", name: "아이리스에서 물빛까지", searchAliases: ["비비드 블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#7579E7", ratio: 40, role: "base" },
      { hex: "#9AB3F5", ratio: 30, role: "sub" },
      { hex: "#A3D8F4", ratio: 20, role: "sub" },
      { hex: "#B9FFFC", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-741", name: "백자 위에 짙은 청록 한 점", searchAliases: ["페일 시안 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#E8FFFF", ratio: 40, role: "base" },
      { hex: "#A6F6F1", ratio: 30, role: "sub" },
      { hex: "#41AEA9", ratio: 20, role: "sub" },
      { hex: "#213E3B", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","무채색"] },

  { id: "ch-742", name: "빙하색과 흑단", searchAliases: ["비비드 시안 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#EEEEEE", ratio: 40, role: "base" },
      { hex: "#32E0C4", ratio: 30, role: "sub" },
      { hex: "#0D7377", ratio: 20, role: "sub" },
      { hex: "#212121", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","비비드","무채색"] },

  { id: "ch-743", name: "연두 위에 겹친 연녹색", searchAliases: ["비비드 그린 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#28DF99", ratio: 40, role: "base" },
      { hex: "#99F3BD", ratio: 30, role: "sub" },
      { hex: "#D2F6C5", ratio: 20, role: "sub" },
      { hex: "#F6F7D4", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "비비드"] },

  { id: "ch-744", name: "터쿼이즈와 라임 사이", searchAliases: ["시안 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#2EC1AC", ratio: 40, role: "base" },
      { hex: "#3E978B", ratio: 30, role: "sub" },
      { hex: "#D2E603", ratio: 20, role: "sub" },
      { hex: "#EFF48E", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤"] },

  { id: "ch-745", name: "빙하색 곁의 벚꽃색", searchAliases: ["페일 시안 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#CFFFFE", ratio: 40, role: "base" },
      { hex: "#F9F7D9", ratio: 30, role: "sub" },
      { hex: "#FCE2CE", ratio: 20, role: "sub" },
      { hex: "#FFC1F3", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","파스텔","옐로우"] },

  { id: "ch-746", name: "흑단과 감청, 터쿼이즈", searchAliases: ["딥 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#1B262C", ratio: 40, role: "base" },
      { hex: "#0F4C75", ratio: 30, role: "sub" },
      { hex: "#00B7C2", ratio: 20, role: "sub" },
      { hex: "#FDCB9E", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-747", name: "마젠타와 시안", searchAliases: ["비비드 핑크 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#FA26A0", ratio: 40, role: "base" },
      { hex: "#05DFD7", ratio: 30, role: "sub" },
      { hex: "#A3F7BF", ratio: 20, role: "sub" },
      { hex: "#FFF591", ratio: 10, role: "point" }],
    tags: ["핑크","쿨톤","비비드","시안"] },

  { id: "ch-748", name: "빙하색 아래 짙은 차콜", searchAliases: ["비비드 시안 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#EEEEEE", ratio: 40, role: "base" },
      { hex: "#393E46", ratio: 30, role: "sub" },
      { hex: "#76EAD7", ratio: 20, role: "sub" },
      { hex: "#C4FB6D", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","무채색"] },

  { id: "ch-749", name: "라임의 청록 테두리", searchAliases: ["비비드 그린 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#B6EB7A", ratio: 40, role: "base" },
      { hex: "#F7F7EE", ratio: 30, role: "sub" },
      { hex: "#FB7813", ratio: 20, role: "sub" },
      { hex: "#17706E", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","비비드","무채색"] },

  { id: "ch-750", name: "빙하색에서 차콜까지", searchAliases: ["비비드 시안 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#EEEEEE", ratio: 40, role: "base" },
      { hex: "#32E0C4", ratio: 30, role: "sub" },
      { hex: "#393E46", ratio: 20, role: "sub" },
      { hex: "#222831", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","무채색"] },

  { id: "ch-751", name: "아이보리 위에 겹친 진분홍", searchAliases: ["비비드 핑크 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#FAEEE7", ratio: 40, role: "base" },
      { hex: "#F54291", ratio: 30, role: "sub" },
      { hex: "#4CD3C2", ratio: 20, role: "sub" },
      { hex: "#0A97B0", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","무채색"] },

  { id: "ch-752", name: "터쿼이즈와 빨강 사이", searchAliases: ["시안 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#2FC4B2", ratio: 40, role: "base" },
      { hex: "#12947F", ratio: 30, role: "sub" },
      { hex: "#E71414", ratio: 20, role: "sub" },
      { hex: "#F17808", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤"] },

  { id: "ch-753", name: "다홍 곁의 암청색", searchAliases: ["비비드 오렌지 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#FF5200", ratio: 40, role: "base" },
      { hex: "#6F0000", ratio: 30, role: "sub" },
      { hex: "#00263B", ratio: 20, role: "sub" },
      { hex: "#00A1AB", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","비비드","레드"] },

  { id: "ch-754", name: "백자 위에 먹색 한 점", searchAliases: ["비비드 시안 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#F7F7F7", ratio: 40, role: "base" },
      { hex: "#43D8C9", ratio: 30, role: "sub" },
      { hex: "#95389E", ratio: 20, role: "sub" },
      { hex: "#100303", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","비비드","무채색"] },

  { id: "ch-755", name: "딸기우유와 연분홍, 백자", searchAliases: ["페일 핑크 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#EFA8E4", ratio: 40, role: "base" },
      { hex: "#F8E1F4", ratio: 30, role: "sub" },
      { hex: "#FFF0F5", ratio: 20, role: "sub" },
      { hex: "#97E5EF", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "파스텔"] },

  { id: "ch-756", name: "터쿼이즈 아래 짙은 짙은 보라", searchAliases: ["비비드 시안 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#00BDAA", ratio: 40, role: "base" },
      { hex: "#400082", ratio: 30, role: "sub" },
      { hex: "#FE346E", ratio: 20, role: "sub" },
      { hex: "#F1E7B6", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","퍼플"] },

  { id: "ch-757", name: "백자와 딸기우유", searchAliases: ["페일 시안 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#D7FFFD", ratio: 40, role: "base" },
      { hex: "#A1E6E3", ratio: 30, role: "sub" },
      { hex: "#ECA0B6", ratio: 20, role: "sub" },
      { hex: "#FAFBA4", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "파스텔"] },

  { id: "ch-758", name: "짙은 보라 위에 레몬 한 점", searchAliases: ["비비드 퍼플 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#4D089A", ratio: 40, role: "base" },
      { hex: "#323EDD", ratio: 30, role: "sub" },
      { hex: "#DC2ADE", ratio: 20, role: "sub" },
      { hex: "#E8F044", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","블루"] },

  { id: "ch-759", name: "진분홍 위에 겹친 시안", searchAliases: ["비비드 핑크 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#F35588", ratio: 40, role: "base" },
      { hex: "#05DFD7", ratio: 30, role: "sub" },
      { hex: "#A3F7BF", ratio: 20, role: "sub" },
      { hex: "#FFF591", ratio: 10, role: "point" }],
    tags: ["핑크","쿨톤","비비드","시안"] },

  { id: "ch-760", name: "짙은 자주와 진분홍 사이", searchAliases: ["딥 퍼플 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#381460", ratio: 40, role: "base" },
      { hex: "#B21F66", ratio: 30, role: "sub" },
      { hex: "#FE346E", ratio: 20, role: "sub" },
      { hex: "#FFBD69", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","딥","핑크"] },

  { id: "ch-761", name: "빙하색의 보라 테두리", searchAliases: ["비비드 오렌지 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#EDEDED", ratio: 40, role: "base" },
      { hex: "#FFA41B", ratio: 30, role: "sub" },
      { hex: "#FF5151", ratio: 20, role: "sub" },
      { hex: "#9818D6", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","비비드","무채색"] },

  { id: "ch-762", name: "연분홍 곁의 연옥색", searchAliases: ["페일 핑크 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#FFD5E5", ratio: 40, role: "base" },
      { hex: "#FFFFDD", ratio: 30, role: "sub" },
      { hex: "#A0FFE6", ratio: 20, role: "sub" },
      { hex: "#81F5FF", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","파스텔","옐로우"] },

  { id: "ch-763", name: "연두 바탕의 밝은 레몬", searchAliases: ["그린 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#8CBA51", ratio: 40, role: "base" },
      { hex: "#DEFF8B", ratio: 30, role: "sub" },
      { hex: "#FBCEB5", ratio: 20, role: "sub" },
      { hex: "#FF5D6C", ratio: 10, role: "point" }],
    tags: ["그린", "웜톤"] },

  { id: "ch-764", name: "빨강과 산호색, 아이보리", searchAliases: ["비비드 핑크 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#F0134D", ratio: 40, role: "base" },
      { hex: "#FF6F5E", ratio: 30, role: "sub" },
      { hex: "#F5F0E3", ratio: 20, role: "sub" },
      { hex: "#40BFC1", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","레드"] },

  { id: "ch-765", name: "황금빛의 청록 테두리", searchAliases: ["비비드 오렌지 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#FFBA5A", ratio: 40, role: "base" },
      { hex: "#C0FFB3", ratio: 30, role: "sub" },
      { hex: "#52DE97", ratio: 20, role: "sub" },
      { hex: "#2C7873", ratio: 10, role: "point" }],
    tags: ["오렌지","쿨톤","비비드","그린"] },

  { id: "ch-766", name: "빨강과 시안", searchAliases: ["비비드 레드 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#FA163F", ratio: 40, role: "base" },
      { hex: "#12CAD6", ratio: 30, role: "sub" },
      { hex: "#0FABBC", ratio: 20, role: "sub" },
      { hex: "#E4F9FF", ratio: 10, role: "point" }],
    tags: ["레드","쿨톤","비비드","시안"] },

  { id: "ch-767", name: "청록 위에 겹친 연두", searchAliases: ["비비드 시안 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#018383", ratio: 40, role: "base" },
      { hex: "#02A8A8", ratio: 30, role: "sub" },
      { hex: "#42E6A4", ratio: 20, role: "sub" },
      { hex: "#F5DEA3", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "비비드"] },

  { id: "ch-768", name: "다홍과 연노랑 사이", searchAliases: ["비비드 레드 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F65C78", ratio: 40, role: "base" },
      { hex: "#FFD271", ratio: 30, role: "sub" },
      { hex: "#FFF3AF", ratio: 20, role: "sub" },
      { hex: "#C3F584", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","오렌지"] },

  { id: "ch-769", name: "산호색 곁의 보라", searchAliases: ["비비드 레드 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FA697C", ratio: 40, role: "base" },
      { hex: "#E13A9D", ratio: 30, role: "sub" },
      { hex: "#9B45E4", ratio: 20, role: "sub" },
      { hex: "#FCC169", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","핑크"] },

  { id: "ch-770", name: "민트 위에 주홍 한 점", searchAliases: ["비비드 시안 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#51EAEA", ratio: 40, role: "base" },
      { hex: "#FFDBC5", ratio: 30, role: "sub" },
      { hex: "#FF9D76", ratio: 20, role: "sub" },
      { hex: "#EF4339", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","비비드","오렌지"] },

  { id: "ch-771", name: "시안의 연노랑 테두리", searchAliases: ["비비드 시안 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#3FC5F0", ratio: 40, role: "base" },
      { hex: "#42DEE1", ratio: 30, role: "sub" },
      { hex: "#6DECB9", ratio: 20, role: "sub" },
      { hex: "#EEF5B2", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "비비드"] },

  { id: "ch-772", name: "보라 바탕의 밝은 레몬", searchAliases: ["비비드 퍼플 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#851DE0", ratio: 40, role: "base" },
      { hex: "#AA26DA", ratio: 30, role: "sub" },
      { hex: "#C355F5", ratio: 20, role: "sub" },
      { hex: "#F1FA3C", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "비비드"] },

  { id: "ch-773", name: "청보라 위에 노랑 한 점", searchAliases: ["비비드 퍼플 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#6807F9", ratio: 40, role: "base" },
      { hex: "#9852F9", ratio: 30, role: "sub" },
      { hex: "#C299FC", ratio: 20, role: "sub" },
      { hex: "#FFD739", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "비비드"] },

  { id: "ch-774", name: "백자에서 청보라까지", searchAliases: ["페일 시안 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#ECFCFF", ratio: 40, role: "base" },
      { hex: "#B2FCFF", ratio: 30, role: "sub" },
      { hex: "#5EDFFF", ratio: 20, role: "sub" },
      { hex: "#3E64FF", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","무채색"] },

  { id: "ch-775", name: "차콜에서 빨강까지", searchAliases: ["비비드 레드 × 오렌지"], scheme: "tone-on-tone",
    colors: [
      { hex: "#443737", ratio: 40, role: "base" },
      { hex: "#272121", ratio: 30, role: "sub" },
      { hex: "#FF0000", ratio: 20, role: "sub" },
      { hex: "#FF4D00", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","무채색"] },

  { id: "ch-776", name: "짙은 자주에서 마젠타까지", searchAliases: ["딥 퍼플 × 핑크"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3B064D", ratio: 40, role: "base" },
      { hex: "#8105D8", ratio: 30, role: "sub" },
      { hex: "#ED0CEF", ratio: 20, role: "sub" },
      { hex: "#FE59D7", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥"] },

  { id: "ch-777", name: "암청색과 짙은 보라, 다홍", searchAliases: ["딥 블루 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#000272", ratio: 40, role: "base" },
      { hex: "#341677", ratio: 30, role: "sub" },
      { hex: "#A32F80", ratio: 20, role: "sub" },
      { hex: "#FF6363", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥"] },

  { id: "ch-778", name: "연민트와 딸기우유", searchAliases: ["페일 시안 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#B6FFEA", ratio: 40, role: "base" },
      { hex: "#FCE2AE", ratio: 30, role: "sub" },
      { hex: "#FFB3B3", ratio: 20, role: "sub" },
      { hex: "#FFDCF7", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","파스텔","오렌지"] },

  { id: "ch-779", name: "민트 위에 겹친 자두", searchAliases: ["비비드 시안 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#61F2F5", ratio: 40, role: "base" },
      { hex: "#FFFFFF", ratio: 30, role: "sub" },
      { hex: "#E0E0E0", ratio: 20, role: "sub" },
      { hex: "#723881", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","비비드","무채색"] },

  { id: "ch-780", name: "연옥색과 남색 사이", searchAliases: ["비비드 시안 × 블루"], scheme: "tone-on-tone",
    colors: [
      { hex: "#08FFC8", ratio: 40, role: "base" },
      { hex: "#FFF7F7", ratio: 30, role: "sub" },
      { hex: "#DADADA", ratio: 20, role: "sub" },
      { hex: "#204969", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","비비드","무채색"] },

  { id: "ch-781", name: "흑단 곁의 빨강", searchAliases: ["비비드 레드 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#252525", ratio: 40, role: "base" },
      { hex: "#FF0000", ratio: 30, role: "sub" },
      { hex: "#AF0404", ratio: 20, role: "sub" },
      { hex: "#414141", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","무채색"] },

  { id: "ch-782", name: "라일락과 레몬, 연옥색", searchAliases: ["페일 퍼플 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#F5B5FC", ratio: 40, role: "base" },
      { hex: "#96F7D2", ratio: 30, role: "sub" },
      { hex: "#F0F696", ratio: 20, role: "sub" },
      { hex: "#FCB1B1", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","파스텔","그린"] },

  { id: "ch-783", name: "자홍빛 꽃잎과 연분홍 종이", searchAliases: ["라이트 퍼플 × 레드"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F38EFF", ratio: 40, role: "base" },
      { hex: "#FF00C8", ratio: 30, role: "sub" },
      { hex: "#FFCECE", ratio: 20, role: "sub" },
      { hex: "#FFF0F0", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","파스텔","핑크"] },

  { id: "ch-784", name: "레몬의 비취색 테두리", searchAliases: ["비비드 옐로우 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F4FF61", ratio: 40, role: "base" },
      { hex: "#A8FF3E", ratio: 30, role: "sub" },
      { hex: "#32FF6A", ratio: 20, role: "sub" },
      { hex: "#27AA80", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","비비드","그린"] },

  { id: "ch-785", name: "남보라와 자홍 사이의 호박빛", searchAliases: ["비비드 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#090088", ratio: 40, role: "base" },
      { hex: "#930077", ratio: 30, role: "sub" },
      { hex: "#E4007C", ratio: 20, role: "sub" },
      { hex: "#FFBD39", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","비비드","핑크"] },

  { id: "ch-786", name: "백자와 청보라", searchAliases: ["비비드 시안 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F2F4F6", ratio: 40, role: "base" },
      { hex: "#1EE3CF", ratio: 30, role: "sub" },
      { hex: "#6B48FF", ratio: 20, role: "sub" },
      { hex: "#0D3F67", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","무채색"] },

  { id: "ch-787", name: "아이보리 위에 겹친 울트라마린", searchAliases: ["페일 옐로우 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#F1F4DF", ratio: 40, role: "base" },
      { hex: "#10EAF0", ratio: 30, role: "sub" },
      { hex: "#0028FF", ratio: 20, role: "sub" },
      { hex: "#24009C", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","파스텔","시안"] },

  { id: "ch-788", name: "보라 바탕의 밝은 황금빛", searchAliases: ["비비드 퍼플 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#8A00D4", ratio: 40, role: "base" },
      { hex: "#D527B7", ratio: 30, role: "sub" },
      { hex: "#FF82C3", ratio: 20, role: "sub" },
      { hex: "#FFC46B", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","비비드","핑크"] },

  { id: "ch-789", name: "레몬 위에 잉크 네이비 한 점", searchAliases: ["비비드 옐로우 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#F7FF56", ratio: 40, role: "base" },
      { hex: "#94FC13", ratio: 30, role: "sub" },
      { hex: "#4BE3AC", ratio: 20, role: "sub" },
      { hex: "#032D3C", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","비비드","그린"] },

  { id: "ch-790", name: "민트와 홍매색 사이", searchAliases: ["비비드 시안 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#22EACA", ratio: 40, role: "base" },
      { hex: "#B31E6F", ratio: 30, role: "sub" },
      { hex: "#EE5A5A", ratio: 20, role: "sub" },
      { hex: "#FF9E74", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","비비드","핑크"] },

  { id: "ch-791", name: "빨강의 레몬 테두리", searchAliases: ["비비드 레드 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E41749", ratio: 40, role: "base" },
      { hex: "#F5587B", ratio: 30, role: "sub" },
      { hex: "#FF8A5C", ratio: 20, role: "sub" },
      { hex: "#FFF591", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "비비드"] },

  { id: "ch-792", name: "연노랑 곁의 진분홍", searchAliases: ["페일 옐로우 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FFF3A3", ratio: 40, role: "base" },
      { hex: "#FF7BB0", ratio: 30, role: "sub" },
      { hex: "#FF3E6D", ratio: 20, role: "sub" },
      { hex: "#7572F4", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","핑크"] },

  { id: "ch-793", name: "차콜과 시안, 진분홍", searchAliases: ["비비드 핑크 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#444444", ratio: 40, role: "base" },
      { hex: "#F30067", ratio: 30, role: "sub" },
      { hex: "#00D1CD", ratio: 20, role: "sub" },
      { hex: "#EAEAEA", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","무채색"] },

  { id: "ch-794", name: "연민트와 난초색", searchAliases: ["페일 그린 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#C5FAD9", ratio: 40, role: "base" },
      { hex: "#ACEACF", ratio: 30, role: "sub" },
      { hex: "#F77FEE", ratio: 20, role: "sub" },
      { hex: "#DB66E4", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔"] },

  { id: "ch-795", name: "짙은 보라 바탕의 밝은 형광 연두", searchAliases: ["블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#302387", ratio: 40, role: "base" },
      { hex: "#FF3796", ratio: 30, role: "sub" },
      { hex: "#00FAAC", ratio: 20, role: "sub" },
      { hex: "#FFFDAF", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","핑크"] },

  { id: "ch-796", name: "레몬 위에 파랑 한 점", searchAliases: ["비비드 옐로우 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#F9FD50", ratio: 40, role: "base" },
      { hex: "#85EF47", ratio: 30, role: "sub" },
      { hex: "#00BD56", ratio: 20, role: "sub" },
      { hex: "#207DFF", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","비비드","그린"] },

  { id: "ch-797", name: "진분홍 위에 겹친 자수정", searchAliases: ["비비드 핑크 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#FF5D9E", ratio: 40, role: "base" },
      { hex: "#8F71FF", ratio: 30, role: "sub" },
      { hex: "#82ACFF", ratio: 20, role: "sub" },
      { hex: "#8BFFFF", ratio: 10, role: "point" }],
    tags: ["핑크","쿨톤","비비드","블루"] },

  { id: "ch-798", name: "레몬과 자홍 사이", searchAliases: ["비비드 옐로우 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FAF562", ratio: 40, role: "base" },
      { hex: "#F36A7B", ratio: 30, role: "sub" },
      { hex: "#B824A4", ratio: 20, role: "sub" },
      { hex: "#AAAAAA", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","비비드","레드"] },

  { id: "ch-799", name: "민트 곁의 진분홍", searchAliases: ["비비드 시안 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#51EAEA", ratio: 40, role: "base" },
      { hex: "#FFFDE1", ratio: 30, role: "sub" },
      { hex: "#FF9D76", ratio: 20, role: "sub" },
      { hex: "#FB3569", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","비비드","무채색"] },

  { id: "ch-800", name: "산호색 바탕의 밝은 연노랑", searchAliases: ["비비드 레드 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#F68787", ratio: 40, role: "base" },
      { hex: "#F8A978", ratio: 30, role: "sub" },
      { hex: "#F1EB9A", ratio: 20, role: "sub" },
      { hex: "#A4F6A5", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","오렌지"] },

  { id: "ch-801", name: "청보라의 버터 테두리", searchAliases: ["비비드 블루 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#6927FF", ratio: 40, role: "base" },
      { hex: "#837DFF", ratio: 30, role: "sub" },
      { hex: "#BF81FF", ratio: 20, role: "sub" },
      { hex: "#FFD581", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-802", name: "백자에서 딥 틸까지", searchAliases: ["비비드 시안 × 블루"], scheme: "tone-on-tone",
    colors: [
      { hex: "#F5F5F5", ratio: 40, role: "base" },
      { hex: "#30E3CA", ratio: 30, role: "sub" },
      { hex: "#2F89FC", ratio: 20, role: "sub" },
      { hex: "#40514E", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","무채색"] },

  { id: "ch-803", name: "백자와 마젠타, 짙은 보라", searchAliases: ["비비드 핑크 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#EEF2F5", ratio: 40, role: "base" },
      { hex: "#EA168E", ratio: 30, role: "sub" },
      { hex: "#612570", ratio: 20, role: "sub" },
      { hex: "#1EAFED", ratio: 10, role: "point" }],
    tags: ["핑크","쿨톤","비비드","무채색"] },

  { id: "ch-804", name: "주홍에서 황금빛까지", searchAliases: ["레드 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D34848", ratio: 40, role: "base" },
      { hex: "#FF8162", ratio: 30, role: "sub" },
      { hex: "#FFCD60", ratio: 20, role: "sub" },
      { hex: "#FFFA67", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤"] },

  { id: "ch-805", name: "암청색과 빨강", searchAliases: ["딥 블루 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#0C005A", ratio: 40, role: "base" },
      { hex: "#BC2525", ratio: 30, role: "sub" },
      { hex: "#FF0000", ratio: 20, role: "sub" },
      { hex: "#EAEAEA", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","딥","레드"] },

  { id: "ch-806", name: "짙은 보라 위에 겹친 레몬", searchAliases: ["비비드 퍼플 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#3A0088", ratio: 40, role: "base" },
      { hex: "#930077", ratio: 30, role: "sub" },
      { hex: "#E61C5D", ratio: 20, role: "sub" },
      { hex: "#FFE98A", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","비비드","핑크"] },

  { id: "ch-807", name: "연옥색과 라벤더 사이", searchAliases: ["비비드 그린 × 오렌지"], scheme: "complementary",
    colors: [
      { hex: "#6EFFBF", ratio: 40, role: "base" },
      { hex: "#DCAEE8", ratio: 30, role: "sub" },
      { hex: "#FFC5E6", ratio: 20, role: "sub" },
      { hex: "#FCF2DB", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","비비드","퍼플"] },

  { id: "ch-808", name: "백자 위에 코발트 한 점", searchAliases: ["비비드 시안 × 블루"], scheme: "tone-on-tone",
    colors: [
      { hex: "#EBFFFB", ratio: 40, role: "base" },
      { hex: "#7EFAFF", ratio: 30, role: "sub" },
      { hex: "#13ABC4", ratio: 20, role: "sub" },
      { hex: "#3161A3", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","무채색"] },

  { id: "ch-809", name: "딸기우유 곁의 민트", searchAliases: ["라이트 핑크 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#FA86BE", ratio: 40, role: "base" },
      { hex: "#A275E3", ratio: 30, role: "sub" },
      { hex: "#9AEBED", ratio: 20, role: "sub" },
      { hex: "#FFFCAB", ratio: 10, role: "point" }],
    tags: ["핑크","쿨톤","파스텔","퍼플"] },

  { id: "ch-810", name: "형광 연두와 옥색, 유칼립투스", searchAliases: ["비비드 그린 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#C9F658", ratio: 40, role: "base" },
      { hex: "#DBFF3D", ratio: 30, role: "sub" },
      { hex: "#55968F", ratio: 20, role: "sub" },
      { hex: "#8ACBBB", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "비비드"] },

  { id: "ch-811", name: "백자와 진분홍", searchAliases: ["비비드 핑크 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#F2F4FB", ratio: 40, role: "base" },
      { hex: "#D22780", ratio: 30, role: "sub" },
      { hex: "#F8B500", ratio: 20, role: "sub" },
      { hex: "#5E227F", ratio: 10, role: "point" }],
    tags: ["핑크","쿨톤","비비드","무채색"] },

  { id: "ch-812", name: "아이보리 위에 겹친 빨강", searchAliases: ["페일 오렌지 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FDF1DB", ratio: 40, role: "base" },
      { hex: "#A6CB12", ratio: 30, role: "sub" },
      { hex: "#E00543", ratio: 20, role: "sub" },
      { hex: "#84253E", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","그린"] },

  { id: "ch-813", name: "버터와 홍매색 사이", searchAliases: ["라이트 옐로우 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#EAEC96", ratio: 40, role: "base" },
      { hex: "#43C0AC", ratio: 30, role: "sub" },
      { hex: "#A93199", ratio: 20, role: "sub" },
      { hex: "#FA0559", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","시안"] },

  { id: "ch-814", name: "연옥색의 라벤더 테두리", searchAliases: ["페일 그린 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#B8FFD0", ratio: 40, role: "base" },
      { hex: "#ECFFC1", ratio: 30, role: "sub" },
      { hex: "#FFE6CC", ratio: 20, role: "sub" },
      { hex: "#DFBAF7", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔"] },

  { id: "ch-815", name: "울트라마린에서 민트까지", searchAliases: ["비비드 블루 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#033FFF", ratio: 40, role: "base" },
      { hex: "#4A9FF5", ratio: 30, role: "sub" },
      { hex: "#5FF4EE", ratio: 20, role: "sub" },
      { hex: "#C2FCF6", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드"] },

  { id: "ch-816", name: "민트와 백자, 마젠타", searchAliases: ["라이트 시안 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#73DBC4", ratio: 40, role: "base" },
      { hex: "#FAF7E6", ratio: 30, role: "sub" },
      { hex: "#FF008B", ratio: 20, role: "sub" },
      { hex: "#FFF8A1", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","파스텔","무채색"] },

  { id: "ch-817", name: "빨강 바탕의 밝은 레몬", searchAliases: ["비비드 핑크 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FF1F5A", ratio: 40, role: "base" },
      { hex: "#FFD615", ratio: 30, role: "sub" },
      { hex: "#F9FF21", ratio: 20, role: "sub" },
      { hex: "#1E2A78", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","옐로우"] },

  { id: "ch-818", name: "연옥색 곁의 노랑", searchAliases: ["페일 시안 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#A3F3EB", ratio: 40, role: "base" },
      { hex: "#F1FFAB", ratio: 30, role: "sub" },
      { hex: "#FBD341", ratio: 20, role: "sub" },
      { hex: "#FB9A40", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","그린"] },

  { id: "ch-819", name: "레몬과 진분홍", searchAliases: ["비비드 옐로우 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#F5E965", ratio: 40, role: "base" },
      { hex: "#FF9668", ratio: 30, role: "sub" },
      { hex: "#DB456F", ratio: 20, role: "sub" },
      { hex: "#A74FAF", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","비비드","오렌지"] },

  { id: "ch-820", name: "짙은 자주 위에 겹친 진분홍", searchAliases: ["딥 퍼플 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#35013F", ratio: 40, role: "base" },
      { hex: "#B643CD", ratio: 30, role: "sub" },
      { hex: "#FF5DA2", ratio: 20, role: "sub" },
      { hex: "#99DDCC", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥"] },

  { id: "ch-821", name: "연옥색 위에 라벤더 한 점", searchAliases: ["라이트 그린 × 퍼플"], scheme: "complementary",
    colors: [
      { hex: "#89F8CE", ratio: 40, role: "base" },
      { hex: "#F5FAC7", ratio: 30, role: "sub" },
      { hex: "#DEC8ED", ratio: 20, role: "sub" },
      { hex: "#CC99F9", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","파스텔","옐로우"] },

  { id: "ch-822", name: "아이보리의 흑단 테두리", searchAliases: ["페일 옐로우 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#FFF6DA", ratio: 40, role: "base" },
      { hex: "#84F2D6", ratio: 30, role: "sub" },
      { hex: "#FC6B3F", ratio: 20, role: "sub" },
      { hex: "#262525", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","시안"] },

  { id: "ch-823", name: "시안과 진홍 사이", searchAliases: ["시안 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#35D0BA", ratio: 40, role: "base" },
      { hex: "#F8C43A", ratio: 30, role: "sub" },
      { hex: "#C93D1B", ratio: 20, role: "sub" },
      { hex: "#04322E", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","오렌지"] },

  { id: "ch-824", name: "와인 바탕의 밝은 레몬", searchAliases: ["핑크 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#7C203A", ratio: 40, role: "base" },
      { hex: "#F85959", ratio: 30, role: "sub" },
      { hex: "#FF9F68", ratio: 20, role: "sub" },
      { hex: "#FEFF89", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","레드"] },

  { id: "ch-825", name: "백자에서 코발트까지", searchAliases: ["비비드 시안 × 블루"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FAFAF6", ratio: 40, role: "base" },
      { hex: "#00FFF0", ratio: 30, role: "sub" },
      { hex: "#00D1FF", ratio: 20, role: "sub" },
      { hex: "#3D6CB9", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","무채색"] },

  { id: "ch-826", name: "연옥색 곁의 유칼립투스", searchAliases: ["비비드 시안 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#78FEE0", ratio: 40, role: "base" },
      { hex: "#4BC2C5", ratio: 30, role: "sub" },
      { hex: "#3B9A9C", ratio: 20, role: "sub" },
      { hex: "#FEF4A9", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "비비드"] },

  { id: "ch-827", name: "연노랑과 연옥색, 민트", searchAliases: ["페일 옐로우 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#FFFB97", ratio: 40, role: "base" },
      { hex: "#97FFCF", ratio: 30, role: "sub" },
      { hex: "#2FE1D6", ratio: 20, role: "sub" },
      { hex: "#38C6BD", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","파스텔","그린"] },

  { id: "ch-828", name: "백자 위에 흑단 한 점", searchAliases: ["라이트 시안 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#FCFCFC", ratio: 40, role: "base" },
      { hex: "#83FFE6", ratio: 30, role: "sub" },
      { hex: "#FF5F5F", ratio: 20, role: "sub" },
      { hex: "#2C2C2C", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","파스텔","무채색"] },

  { id: "ch-829", name: "남보라의 꿀빛 테두리", searchAliases: ["블루 × 오렌지"], scheme: "tone-in-tone",
    colors: [
      { hex: "#5628B4", ratio: 40, role: "base" },
      { hex: "#D80E70", ratio: 30, role: "sub" },
      { hex: "#E7455F", ratio: 20, role: "sub" },
      { hex: "#F7B236", ratio: 10, role: "point" }],
    tags: ["블루","웜톤","핑크"] },

  { id: "ch-830", name: "백자 위에 차콜 한 점", searchAliases: ["비비드 그린 × 레드"], scheme: "complementary",
    colors: [
      { hex: "#F4F4F4", ratio: 40, role: "base" },
      { hex: "#65EEB7", ratio: 30, role: "sub" },
      { hex: "#FF5722", ratio: 20, role: "sub" },
      { hex: "#474744", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","비비드","무채색"] },

  { id: "ch-831", name: "백자와 바다색", searchAliases: ["비비드 시안 × 그린"], scheme: "tone-in-tone",
    colors: [
      { hex: "#ECFEFF", ratio: 40, role: "base" },
      { hex: "#00B7C2", ratio: 30, role: "sub" },
      { hex: "#128494", ratio: 20, role: "sub" },
      { hex: "#4EF037", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","무채색"] },

  { id: "ch-832", name: "암청색 바탕의 밝은 형광 연두", searchAliases: ["딥 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#08085E", ratio: 40, role: "base" },
      { hex: "#A2EF44", ratio: 30, role: "sub" },
      { hex: "#FFF07A", ratio: 20, role: "sub" },
      { hex: "#E8FCF6", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","그린"] },

  { id: "ch-833", name: "암청색 위에 겹친 형광 연두", searchAliases: ["딥 블루 × 그린"], scheme: "complementary",
    colors: [
      { hex: "#071A52", ratio: 40, role: "base" },
      { hex: "#086972", ratio: 30, role: "sub" },
      { hex: "#17B978", ratio: 20, role: "sub" },
      { hex: "#A7FF83", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","시안"] },

  { id: "ch-834", name: "백자에서 연두까지", searchAliases: ["비비드 옐로우 × 그린"], scheme: "tone-on-tone",
    colors: [
      { hex: "#FCF9F9", ratio: 40, role: "base" },
      { hex: "#F1F864", ratio: 30, role: "sub" },
      { hex: "#BCEB3C", ratio: 20, role: "sub" },
      { hex: "#7CBD1E", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","비비드","무채색"] },

  { id: "ch-835", name: "연옥색과 진분홍 사이", searchAliases: ["비비드 시안 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#1FFFFF", ratio: 40, role: "base" },
      { hex: "#FFFDE1", ratio: 30, role: "sub" },
      { hex: "#FF9D76", ratio: 20, role: "sub" },
      { hex: "#FF4273", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","비비드","무채색"] },

  { id: "ch-836", name: "진분홍 곁의 물빛", searchAliases: ["비비드 핑크 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#E9007F", ratio: 40, role: "base" },
      { hex: "#7CDFFF", ratio: 30, role: "sub" },
      { hex: "#D5FFFB", ratio: 20, role: "sub" },
      { hex: "#FCFFC8", ratio: 10, role: "point" }],
    tags: ["핑크","쿨톤","비비드","시안"] },

  { id: "ch-837", name: "백자의 짙은 보라 테두리", searchAliases: ["비비드 시안 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#F7F7F8", ratio: 40, role: "base" },
      { hex: "#4EEAF6", ratio: 30, role: "sub" },
      { hex: "#C82586", ratio: 20, role: "sub" },
      { hex: "#291F71", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","무채색"] },

  { id: "ch-838", name: "짙은 보라와 민트, 산호색", searchAliases: ["딥 퍼플 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#432160", ratio: 40, role: "base" },
      { hex: "#FF7A5A", ratio: 30, role: "sub" },
      { hex: "#50E3C2", ratio: 20, role: "sub" },
      { hex: "#FCF4D9", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","딥","레드"] },

  { id: "ch-839", name: "연노랑과 민트", searchAliases: ["페일 옐로우 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FEFF9A", ratio: 40, role: "base" },
      { hex: "#6FE8C8", ratio: 30, role: "sub" },
      { hex: "#85FEDE", ratio: 20, role: "sub" },
      { hex: "#B7ABFB", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","파스텔","시안"] },

  { id: "ch-840", name: "연옥색 위에 겹친 보라", searchAliases: ["페일 시안 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#9FFBFB", ratio: 40, role: "base" },
      { hex: "#A100FF", ratio: 30, role: "sub" },
      { hex: "#DB97FF", ratio: 20, role: "sub" },
      { hex: "#FFB6FF", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","퍼플"] },

  { id: "ch-841", name: "빙하색 곁의 라벤더", searchAliases: ["페일 시안 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C7F5FE", ratio: 40, role: "base" },
      { hex: "#FCC8F8", ratio: 30, role: "sub" },
      { hex: "#EAB4F8", ratio: 20, role: "sub" },
      { hex: "#F3F798", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","핑크"] },

  { id: "ch-842", name: "연옥색과 등꽃색 사이", searchAliases: ["비비드 시안 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#7EFFDB", ratio: 40, role: "base" },
      { hex: "#B693FE", ratio: 30, role: "sub" },
      { hex: "#8C82FC", ratio: 20, role: "sub" },
      { hex: "#FF9DE2", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","블루"] },

  { id: "ch-843", name: "산호색 바탕의 밝은 레몬", searchAliases: ["비비드 레드 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FF6F6F", ratio: 40, role: "base" },
      { hex: "#FFF46E", ratio: 30, role: "sub" },
      { hex: "#F6F6F6", ratio: 20, role: "sub" },
      { hex: "#A58BFF", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","옐로우"] },

  { id: "ch-844", name: "라벤더와 연옥색, 레몬", searchAliases: ["페일 퍼플 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D7AEF3", ratio: 40, role: "base" },
      { hex: "#94F6F2", ratio: 30, role: "sub" },
      { hex: "#F7F680", ratio: 20, role: "sub" },
      { hex: "#FBD0F5", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","파스텔","시안"] },

  { id: "ch-845", name: "딸기우유와 빙하색", searchAliases: ["페일 핑크 × 옐로우"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FFABE5", ratio: 40, role: "base" },
      { hex: "#C7F5FF", ratio: 30, role: "sub" },
      { hex: "#D89FFF", ratio: 20, role: "sub" },
      { hex: "#F6FCAE", ratio: 10, role: "point" }],
    tags: ["핑크","쿨톤","파스텔","시안"] },

  { id: "ch-846", name: "흑단에서 연옥색까지", searchAliases: ["비비드 시안 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#212121", ratio: 40, role: "base" },
      { hex: "#323232", ratio: 30, role: "sub" },
      { hex: "#0D7377", ratio: 20, role: "sub" },
      { hex: "#14FFEC", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","비비드","무채색"] },

  { id: "ch-847", name: "딸기우유 위에 겹친 레몬", searchAliases: ["페일 핑크 × 블루"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FF8FE5", ratio: 40, role: "base" },
      { hex: "#FBFF64", ratio: 30, role: "sub" },
      { hex: "#76E3FF", ratio: 20, role: "sub" },
      { hex: "#7BC7FA", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","파스텔","옐로우"] },

  { id: "ch-848", name: "비취색 바탕의 밝은 형광 연두", searchAliases: ["비비드 시안 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#00AD7C", ratio: 40, role: "base" },
      { hex: "#52D681", ratio: 30, role: "sub" },
      { hex: "#B5FF7D", ratio: 20, role: "sub" },
      { hex: "#FFF8B5", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","그린"] },

  { id: "ch-849", name: "백자 위에 자수정 한 점", searchAliases: ["페일 시안 × 퍼플"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E4FFFE", ratio: 40, role: "base" },
      { hex: "#A4F6F9", ratio: 30, role: "sub" },
      { hex: "#FF99FE", ratio: 20, role: "sub" },
      { hex: "#BA52ED", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","무채색"] },

  { id: "ch-850", name: "연노랑과 자홍 사이", searchAliases: ["페일 옐로우 × 시안"], scheme: "tone-in-tone",
    colors: [
      { hex: "#FFF9C1", ratio: 40, role: "base" },
      { hex: "#FFA1D0", ratio: 30, role: "sub" },
      { hex: "#C244FB", ratio: 20, role: "sub" },
      { hex: "#84E9FF", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","핑크"] },

  { id: "ch-851", name: "시안의 백자 테두리", searchAliases: ["비비드 시안 그라데이션"], scheme: "tone-on-tone",
    colors: [
      { hex: "#00E0FF", ratio: 40, role: "base" },
      { hex: "#74F9FF", ratio: 30, role: "sub" },
      { hex: "#A6FFF2", ratio: 20, role: "sub" },
      { hex: "#E8FFE8", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "비비드"] },

  { id: "ch-852", name: "연어색 곁의 레몬", searchAliases: ["페일 레드 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FF9090", ratio: 40, role: "base" },
      { hex: "#FFCF7F", ratio: 30, role: "sub" },
      { hex: "#FFFA62", ratio: 20, role: "sub" },
      { hex: "#89C4FF", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","오렌지"] },

  { id: "ch-853", name: "잉크 네이비 바탕의 밝은 레몬", searchAliases: ["딥 블루 × 옐로우"], scheme: "complementary",
    colors: [
      { hex: "#1D2B53", ratio: 40, role: "base" },
      { hex: "#7E2553", ratio: 30, role: "sub" },
      { hex: "#FF004D", ratio: 20, role: "sub" },
      { hex: "#FFF024", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","핑크"] },

  { id: "ch-854", name: "레몬과 진분홍, 가지색", searchAliases: ["비비드 옐로우 × 블루"], scheme: "complementary",
    colors: [
      { hex: "#FDEA2E", ratio: 40, role: "base" },
      { hex: "#F40968", ratio: 30, role: "sub" },
      { hex: "#512E5E", ratio: 20, role: "sub" },
      { hex: "#20194A", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","비비드","핑크"] },

  { id: "ch-855", name: "잉크 네이비에서 연옥색까지", searchAliases: ["딥 블루 × 시안"], scheme: "tone-on-tone",
    colors: [
      { hex: "#222831", ratio: 40, role: "base" },
      { hex: "#393E46", ratio: 30, role: "sub" },
      { hex: "#00ADB5", ratio: 20, role: "sub" },
      { hex: "#00FFF5", ratio: 10, role: "point" }],
    tags: ["블루","쿨톤","딥","무채색"] },

  { id: "ch-856", name: "시안과 잉크 네이비", searchAliases: ["비비드 시안 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#08D9D6", ratio: 40, role: "base" },
      { hex: "#252A34", ratio: 30, role: "sub" },
      { hex: "#FF2E63", ratio: 20, role: "sub" },
      { hex: "#EAEAEA", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","블루"] },

  { id: "ch-857", name: "시안 위에 겹친 아이보리", searchAliases: ["시안 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#3EC1D3", ratio: 40, role: "base" },
      { hex: "#F6F7D7", ratio: 30, role: "sub" },
      { hex: "#FF9A00", ratio: 20, role: "sub" },
      { hex: "#FF165D", ratio: 10, role: "point" }],
    tags: ["시안","웜톤","옐로우"] },

  { id: "ch-858", name: "연노랑과 청보라 사이", searchAliases: ["페일 옐로우 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#FFF395", ratio: 40, role: "base" },
      { hex: "#7459DC", ratio: 30, role: "sub" },
      { hex: "#41B3FF", ratio: 20, role: "sub" },
      { hex: "#63F5EF", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","파스텔","블루"] },

  { id: "ch-859", name: "레몬 곁의 남보라", searchAliases: ["비비드 옐로우 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#FFEE7D", ratio: 40, role: "base" },
      { hex: "#B767FF", ratio: 30, role: "sub" },
      { hex: "#534C98", ratio: 20, role: "sub" },
      { hex: "#44FADD", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","비비드","퍼플"] },

  { id: "ch-860", name: "연옥색과 난초색, 청보라", searchAliases: ["라이트 시안 × 핑크"], scheme: "tone-in-tone",
    colors: [
      { hex: "#83FFE1", ratio: 40, role: "base" },
      { hex: "#7045FF", ratio: 30, role: "sub" },
      { hex: "#C768FF", ratio: 20, role: "sub" },
      { hex: "#FFADED", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","블루"] },

  { id: "ch-861", name: "연노랑과 자수정", searchAliases: ["페일 옐로우 × 시안"], scheme: "complementary",
    colors: [
      { hex: "#FEFF94", ratio: 40, role: "base" },
      { hex: "#AD64C5", ratio: 30, role: "sub" },
      { hex: "#88D8EC", ratio: 20, role: "sub" },
      { hex: "#BCFFF2", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","파스텔","퍼플"] },

  { id: "ch-862", name: "아이보리 위에 겹친 파랑", searchAliases: ["페일 옐로우 × 핑크"], scheme: "complementary",
    colors: [
      { hex: "#F6F6D9", ratio: 40, role: "base" },
      { hex: "#47E4E0", ratio: 30, role: "sub" },
      { hex: "#5F81E4", ratio: 20, role: "sub" },
      { hex: "#F67FF5", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","파스텔","시안"] },

];

if (typeof module !== "undefined") module.exports = COLORHUNT_PALETTES;
