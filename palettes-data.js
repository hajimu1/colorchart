// ============================================================
//  색 조합 초기 데이터 50개
//  - 그대로 index.html의 RAW_PALETTES에 붙여넣거나, 이 파일을
//    data.js로 쓰고 <script src="palettes-data.js"> 로 불러오면 됨
//  - scheme: tone-on-tone(톤온톤) | tone-in-tone(톤인톤) | complementary(완전 보색)
//  - ratio 합 = 100 / role: base(주조) · sub(보조) · point(강조=★·복사대상)
// ============================================================

const RAW_PALETTES = [

  // ─────────── 톤온톤 (같은 색상, 명도 차이) ───────────
  { id: "ton-001", name: "네이비 미니멀", scheme: "tone-on-tone",
    colors: [
      { hex: "#1B263B", ratio: 70, role: "base"  },
      { hex: "#778DA9", ratio: 30, role: "point" }],
    tags: ["차분","비즈니스","쿨톤","블루"] },

  { id: "ton-002", name: "차콜 그레이블루", scheme: "tone-on-tone",
    colors: [
      { hex: "#2B2D42", ratio: 70, role: "base"  },
      { hex: "#8D99AE", ratio: 30, role: "point" }],
    tags: ["모던","시크","쿨톤","블루"] },

  { id: "ton-003", name: "테라코타 2톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#E76F51", ratio: 70, role: "base"  },
      { hex: "#F4A28C", ratio: 30, role: "point" }],
    tags: ["따뜻함","우드","웜톤","레드"] },

  { id: "ton-004", name: "포레스트 2톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#2D6A4F", ratio: 70, role: "base"  },
      { hex: "#95D5B2", ratio: 30, role: "point" }],
    tags: ["자연", "신선", "그린"] },

  { id: "ton-005", name: "오션 블루 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#023E8A", ratio: 60, role: "base"  },
      { hex: "#0077B6", ratio: 30, role: "sub"   },
      { hex: "#90E0EF", ratio: 10, role: "point" }],
    tags: ["시원함","여름","쿨톤","블루"] },

  { id: "ton-006", name: "딥 그린 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#1B4332", ratio: 60, role: "base"  },
      { hex: "#40916C", ratio: 30, role: "sub"   },
      { hex: "#B7E4C7", ratio: 10, role: "point" }],
    tags: ["자연", "안정감", "그린"] },

  { id: "ton-007", name: "로즈 버건디 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#641220", ratio: 60, role: "base"  },
      { hex: "#A4133C", ratio: 30, role: "sub"   },
      { hex: "#FF758F", ratio: 10, role: "point" }],
    tags: ["우아함","여성적","레드","핑크"] },

  { id: "ton-008", name: "브라운 우드 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#4E342E", ratio: 60, role: "base"  },
      { hex: "#8D6E63", ratio: 30, role: "sub"   },
      { hex: "#D7CCC8", ratio: 10, role: "point" }],
    tags: ["빈티지","우드","웜톤","레드","오렌지"] },

  { id: "ton-009", name: "퍼플 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#3C096C", ratio: 60, role: "base"  },
      { hex: "#7B2CBF", ratio: 30, role: "sub"   },
      { hex: "#C77DFF", ratio: 10, role: "point" }],
    tags: ["몽환적", "개성", "퍼플"] },

  { id: "ton-010", name: "골드 머스타드 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#8A6D00", ratio: 60, role: "base"  },
      { hex: "#C9A227", ratio: 30, role: "sub"   },
      { hex: "#F2D680", ratio: 10, role: "point" }],
    tags: ["고급","따뜻함","웜톤","옐로우"] },

  { id: "ton-011", name: "슬레이트 블루그레이 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#212D40", ratio: 60, role: "base"  },
      { hex: "#364156", ratio: 30, role: "sub"   },
      { hex: "#7D8597", ratio: 10, role: "point" }],
    tags: ["모던","차분","쿨톤","블루"] },

  { id: "ton-012", name: "코럴 핑크 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#C9184A", ratio: 60, role: "base"  },
      { hex: "#FF758F", ratio: 30, role: "sub"   },
      { hex: "#FFCCD5", ratio: 10, role: "point" }],
    tags: ["발랄","여성적","핑크","레드"] },

  { id: "ton-013", name: "네이비 풀스케일", scheme: "tone-on-tone",
    colors: [
      { hex: "#0D1B2A", ratio: 30, role: "base"  },
      { hex: "#1B263B", ratio: 25, role: "sub"   },
      { hex: "#415A77", ratio: 20, role: "sub"   },
      { hex: "#778DA9", ratio: 15, role: "sub"   },
      { hex: "#E0E1DD", ratio: 10, role: "point" }],
    tags: ["차분","비즈니스","쿨톤","블루"] },

  { id: "ton-014", name: "포레스트 풀스케일", scheme: "tone-on-tone",
    colors: [
      { hex: "#081C15", ratio: 30, role: "base"  },
      { hex: "#1B4332", ratio: 25, role: "sub"   },
      { hex: "#2D6A4F", ratio: 20, role: "sub"   },
      { hex: "#52B788", ratio: 15, role: "sub"   },
      { hex: "#B7E4C7", ratio: 10, role: "point" }],
    tags: ["자연","깊이감","그린","무채색"] },

  { id: "ton-015", name: "로즈 풀스케일", scheme: "tone-on-tone",
    colors: [
      { hex: "#590D22", ratio: 30, role: "base"  },
      { hex: "#A4133C", ratio: 25, role: "sub"   },
      { hex: "#FF4D6D", ratio: 20, role: "sub"   },
      { hex: "#FF8FA3", ratio: 15, role: "sub"   },
      { hex: "#FFCCD5", ratio: 10, role: "point" }],
    tags: ["로맨틱","여성적","레드","핑크"] },

  { id: "ton-016", name: "뉴트럴 그레이 풀스케일", scheme: "tone-on-tone",
    colors: [
      { hex: "#212529", ratio: 30, role: "base"  },
      { hex: "#495057", ratio: 25, role: "sub"   },
      { hex: "#6C757D", ratio: 20, role: "sub"   },
      { hex: "#ADB5BD", ratio: 15, role: "sub"   },
      { hex: "#DEE2E6", ratio: 10, role: "point" }],
    tags: ["미니멀", "무채색", "모던"] },

  { id: "ton-017", name: "스카이 블루 풀스케일", scheme: "tone-on-tone",
    colors: [
      { hex: "#03045E", ratio: 30, role: "base"  },
      { hex: "#0077B6", ratio: 25, role: "sub"   },
      { hex: "#00B4D8", ratio: 20, role: "sub"   },
      { hex: "#90E0EF", ratio: 15, role: "sub"   },
      { hex: "#CAF0F8", ratio: 10, role: "point" }],
    tags: ["시원함","여름","쿨톤","블루"] },

  // ─────────── 톤인톤 (같은 톤, 색상 차이) ───────────
  { id: "tin-001", name: "민트 & 피치 파스텔", scheme: "tone-in-tone",
    colors: [
      { hex: "#B8E0D2", ratio: 60, role: "base"  },
      { hex: "#FCD5CE", ratio: 40, role: "point" }],
    tags: ["파스텔","부드러움","봄","그린","레드"] },

  { id: "tin-002", name: "더스티 로즈 & 세이지", scheme: "tone-in-tone",
    colors: [
      { hex: "#C9ADA7", ratio: 60, role: "base"  },
      { hex: "#A3B18A", ratio: 40, role: "point" }],
    tags: ["뮤트","내추럴","가을","레드","그린"] },

  { id: "tin-003", name: "테라코타 & 세이지", scheme: "tone-in-tone",
    colors: [
      { hex: "#CB997E", ratio: 60, role: "base"  },
      { hex: "#A5A58D", ratio: 40, role: "point" }],
    tags: ["뮤트","우드","웜톤","오렌지","무채색"] },

  { id: "tin-004", name: "라벤더 & 베이비블루", scheme: "tone-in-tone",
    colors: [
      { hex: "#CDB4DB", ratio: 60, role: "base"  },
      { hex: "#A2D2FF", ratio: 40, role: "point" }],
    tags: ["파스텔","몽환적","봄","퍼플","블루"] },

  { id: "tin-005", name: "파스텔 트리오", scheme: "tone-in-tone",
    colors: [
      { hex: "#FFC8DD", ratio: 60, role: "base"  },
      { hex: "#BDE0FE", ratio: 30, role: "sub"   },
      { hex: "#CDB4DB", ratio: 10, role: "point" }],
    tags: ["파스텔","사랑스러움","봄","핑크","블루"] },

  { id: "tin-006", name: "뮤트 어스 트리오", scheme: "tone-in-tone",
    colors: [
      { hex: "#C9ADA7", ratio: 60, role: "base"  },
      { hex: "#A3B18A", ratio: 30, role: "sub"   },
      { hex: "#B7B7A4", ratio: 10, role: "point" }],
    tags: ["뮤트","내추럴","가을","레드","그린"] },

  { id: "tin-007", name: "테라코타·세이지·샌드", scheme: "tone-in-tone",
    colors: [
      { hex: "#E07A5F", ratio: 60, role: "base"  },
      { hex: "#81B29A", ratio: 30, role: "sub"   },
      { hex: "#F2CC8F", ratio: 10, role: "point" }],
    tags: ["트렌디","내추럴","웜톤","레드","그린"] },

  { id: "tin-008", name: "젤라토 파스텔 트리오", scheme: "tone-in-tone",
    colors: [
      { hex: "#FFADAD", ratio: 60, role: "base"  },
      { hex: "#FDFFB6", ratio: 30, role: "sub"   },
      { hex: "#CAFFBF", ratio: 10, role: "point" }],
    tags: ["파스텔","상큼","여름","레드","옐로우"] },

  { id: "tin-009", name: "비비드 트리오", scheme: "tone-in-tone",
    colors: [
      { hex: "#EF476F", ratio: 60, role: "base"  },
      { hex: "#FFD166", ratio: 30, role: "sub"   },
      { hex: "#06D6A0", ratio: 10, role: "point" }],
    tags: ["비비드","경쾌","팝","레드","오렌지"] },

  { id: "tin-010", name: "라이트 블루·퍼플 트리오", scheme: "tone-in-tone",
    colors: [
      { hex: "#8ECAE6", ratio: 60, role: "base"  },
      { hex: "#A2D2FF", ratio: 30, role: "sub"   },
      { hex: "#BDB2FF", ratio: 10, role: "point" }],
    tags: ["파스텔","시원함","쿨톤","시안","블루"] },

  { id: "tin-011", name: "선셋 웜 트리오", scheme: "tone-in-tone",
    colors: [
      { hex: "#E9C46A", ratio: 60, role: "base"  },
      { hex: "#F4A261", ratio: 30, role: "sub"   },
      { hex: "#E76F51", ratio: 10, role: "point" }],
    tags: ["따뜻함","석양","웜톤","오렌지"] },

  { id: "tin-012", name: "봄 파스텔 트리오", scheme: "tone-in-tone",
    colors: [
      { hex: "#FFCFD2", ratio: 60, role: "base"  },
      { hex: "#FDE4CF", ratio: 30, role: "sub"   },
      { hex: "#B9FBC0", ratio: 10, role: "point" }],
    tags: ["파스텔","봄","화사","레드","오렌지"] },

  { id: "tin-013", name: "파스텔 레인보우", scheme: "tone-in-tone",
    colors: [
      { hex: "#FFADAD", ratio: 30, role: "base"  },
      { hex: "#FFD6A5", ratio: 25, role: "sub"   },
      { hex: "#FDFFB6", ratio: 20, role: "sub"   },
      { hex: "#CAFFBF", ratio: 15, role: "sub"   },
      { hex: "#A0C4FF", ratio: 10, role: "point" }],
    tags: ["파스텔","다채로움","키치","레드","오렌지"] },

  { id: "tin-014", name: "뮤트 어스 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#CB997E", ratio: 30, role: "base"  },
      { hex: "#DDBEA9", ratio: 25, role: "sub"   },
      { hex: "#B7B7A4", ratio: 20, role: "sub"   },
      { hex: "#A5A58D", ratio: 15, role: "sub"   },
      { hex: "#6B705C", ratio: 10, role: "point" }],
    tags: ["뮤트","내추럴","가을","오렌지"] },

  { id: "tin-015", name: "비비드 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#F94144", ratio: 30, role: "base"  },
      { hex: "#F8961E", ratio: 25, role: "sub"   },
      { hex: "#F9C74F", ratio: 20, role: "sub"   },
      { hex: "#90BE6D", ratio: 15, role: "sub"   },
      { hex: "#577590", ratio: 10, role: "point" }],
    tags: ["비비드","활기","팝","레드","오렌지"] },

  { id: "tin-016", name: "젤라토 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#FBF8CC", ratio: 30, role: "base"  },
      { hex: "#FDE4CF", ratio: 25, role: "sub"   },
      { hex: "#FFCFD2", ratio: 20, role: "sub"   },
      { hex: "#F1C0E8", ratio: 15, role: "sub"   },
      { hex: "#A3C4F3", ratio: 10, role: "point" }],
    tags: ["파스텔","달콤","여름","옐로우","오렌지"] },

  { id: "tin-017", name: "아이스크림 파스텔 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#CDB4DB", ratio: 30, role: "base"  },
      { hex: "#FFC8DD", ratio: 25, role: "sub"   },
      { hex: "#FFAFCC", ratio: 20, role: "sub"   },
      { hex: "#BDE0FE", ratio: 15, role: "sub"   },
      { hex: "#A2D2FF", ratio: 10, role: "point" }],
    tags: ["파스텔","사랑스러움","봄","퍼플","핑크"] },

  // ─────────── 완전 보색 (색상환 반대편) ───────────
  { id: "com-001", name: "블루 & 오렌지", scheme: "complementary",
    colors: [
      { hex: "#219EBC", ratio: 70, role: "base"  },
      { hex: "#FB8500", ratio: 30, role: "point" }],
    tags: ["대비","활기","보색","시안","오렌지"] },

  { id: "com-002", name: "네이비 & 머스타드", scheme: "complementary",
    colors: [
      { hex: "#14213D", ratio: 70, role: "base"  },
      { hex: "#FCA311", ratio: 30, role: "point" }],
    tags: ["고급","대비","웜쿨","블루","오렌지"] },

  { id: "com-003", name: "레드 & 포레스트", scheme: "complementary",
    colors: [
      { hex: "#C1121F", ratio: 70, role: "base"  },
      { hex: "#386641", ratio: 30, role: "point" }],
    tags: ["강렬","클래식","대비","레드","그린"] },

  { id: "com-004", name: "퍼플 & 옐로우", scheme: "complementary",
    colors: [
      { hex: "#7209B7", ratio: 70, role: "base"  },
      { hex: "#F9C74F", ratio: 30, role: "point" }],
    tags: ["개성","대비","팝","퍼플","오렌지"] },

  { id: "com-005", name: "틸 & 코럴", scheme: "complementary",
    colors: [
      { hex: "#006D77", ratio: 70, role: "base"  },
      { hex: "#E29578", ratio: 30, role: "point" }],
    tags: ["트렌디","대비","웜쿨","시안","오렌지"] },

  { id: "com-006", name: "마젠타 & 민트", scheme: "complementary",
    colors: [
      { hex: "#FF5D8F", ratio: 70, role: "base"  },
      { hex: "#06D6A0", ratio: 30, role: "point" }],
    tags: ["발랄","대비","팝","핑크","시안"] },

  { id: "com-007", name: "네이비·오렌지·라이트그레이", scheme: "complementary",
    colors: [
      { hex: "#14213D", ratio: 60, role: "base"  },
      { hex: "#FCA311", ratio: 30, role: "sub"   },
      { hex: "#E5E5E5", ratio: 10, role: "point" }],
    tags: ["모던","대비","비즈니스","블루","오렌지"] },

  { id: "com-008", name: "포레스트·테라코타·크림", scheme: "complementary",
    colors: [
      { hex: "#386641", ratio: 60, role: "base"  },
      { hex: "#BC4749", ratio: 30, role: "sub"   },
      { hex: "#F2E8CF", ratio: 10, role: "point" }],
    tags: ["내추럴","클래식","가을","그린","레드"] },

  { id: "com-009", name: "퍼플·옐로우·그레이", scheme: "complementary",
    colors: [
      { hex: "#5A189A", ratio: 60, role: "base"  },
      { hex: "#FFD60A", ratio: 30, role: "sub"   },
      { hex: "#CED4DA", ratio: 10, role: "point" }],
    tags: ["개성","대비","모던","퍼플","옐로우"] },

  { id: "com-010", name: "틸·코럴·오프화이트", scheme: "complementary",
    colors: [
      { hex: "#006D77", ratio: 60, role: "base"  },
      { hex: "#E29578", ratio: 30, role: "sub"   },
      { hex: "#EDF6F9", ratio: 10, role: "point" }],
    tags: ["트렌디","부드러움","웜쿨","시안","오렌지"] },

  { id: "com-011", name: "레드·그린·크림", scheme: "complementary",
    colors: [
      { hex: "#A4161A", ratio: 60, role: "base"  },
      { hex: "#4C956C", ratio: 30, role: "sub"   },
      { hex: "#FEFEE3", ratio: 10, role: "point" }],
    tags: ["클래식","대비","자연","레드","그린"] },

  { id: "com-012", name: "네이비·오렌지·레드", scheme: "complementary",
    colors: [
      { hex: "#003049", ratio: 60, role: "base"  },
      { hex: "#F77F00", ratio: 30, role: "sub"   },
      { hex: "#D62828", ratio: 10, role: "point" }],
    tags: ["강렬","에너지","대비","블루","오렌지"] },

  { id: "com-013", name: "블루-레드 확장", scheme: "complementary",
    colors: [
      { hex: "#003049", ratio: 30, role: "base"  },
      { hex: "#669BBC", ratio: 25, role: "sub"   },
      { hex: "#FDF0D5", ratio: 20, role: "sub"   },
      { hex: "#C1121F", ratio: 15, role: "sub"   },
      { hex: "#780000", ratio: 10, role: "point" }],
    tags: ["클래식","대비","레트로","블루"] },

  { id: "com-014", name: "틸-코럴 확장", scheme: "complementary",
    colors: [
      { hex: "#006D77", ratio: 30, role: "base"  },
      { hex: "#83C5BE", ratio: 25, role: "sub"   },
      { hex: "#EDF6F9", ratio: 20, role: "sub"   },
      { hex: "#FFDDD2", ratio: 15, role: "sub"   },
      { hex: "#E29578", ratio: 10, role: "point" }],
    tags: ["트렌디","부드러움","웜쿨","시안"] },

  { id: "com-015", name: "퍼플-옐로우 확장", scheme: "complementary",
    colors: [
      { hex: "#240046", ratio: 30, role: "base"  },
      { hex: "#5A189A", ratio: 25, role: "sub"   },
      { hex: "#9D4EDD", ratio: 20, role: "sub"   },
      { hex: "#E0AAFF", ratio: 15, role: "sub"   },
      { hex: "#FFD60A", ratio: 10, role: "point" }],
    tags: ["개성","몽환","대비","퍼플"] },

  { id: "com-016", name: "그린-러스트 확장", scheme: "complementary",
    colors: [
      { hex: "#283618", ratio: 30, role: "base"  },
      { hex: "#606C38", ratio: 25, role: "sub"   },
      { hex: "#FEFAE0", ratio: 20, role: "sub"   },
      { hex: "#DDA15E", ratio: 15, role: "sub"   },
      { hex: "#BC6C25", ratio: 10, role: "point" }],
    tags: ["내추럴","가을","어스톤","그린"] },

  // ═══════════ 확장분 (2차 추가) ═══════════

  // ─────────── 톤온톤 추가 ───────────
  { id: "ton-018", name: "틸 2톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#0F4C5C", ratio: 70, role: "base"  },
      { hex: "#4A9BAA", ratio: 30, role: "point" }],
    tags: ["차분","시원함","쿨톤","시안"] },

  { id: "ton-019", name: "인디고 2톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#2A1A5E", ratio: 70, role: "base"  },
      { hex: "#6C63FF", ratio: 30, role: "point" }],
    tags: ["모던","테크","쿨톤","블루"] },

  { id: "ton-020", name: "올리브 2톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#4B5320", ratio: 70, role: "base"  },
      { hex: "#A3B18A", ratio: 30, role: "point" }],
    tags: ["내추럴","밀리터리","그린","옐로우"] },

  { id: "ton-021", name: "러스트 2톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#8B3A1A", ratio: 70, role: "base"  },
      { hex: "#D98E63", ratio: 30, role: "point" }],
    tags: ["빈티지","가을","웜톤","오렌지"] },

  { id: "ton-022", name: "플럼 2톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#4A1942", ratio: 70, role: "base"  },
      { hex: "#9C6B94", ratio: 30, role: "point" }],
    tags: ["우아함","고급","퍼플","핑크"] },

  { id: "ton-023", name: "샌드 베이지 2톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#A67B5B", ratio: 70, role: "base"  },
      { hex: "#E8D5C0", ratio: 30, role: "point" }],
    tags: ["내추럴","따뜻함","웜톤","오렌지"] },

  { id: "ton-024", name: "아쿠아 2톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#00636E", ratio: 70, role: "base"  },
      { hex: "#7FD8DE", ratio: 30, role: "point" }],
    tags: ["시원함","여름","쿨톤","시안"] },

  { id: "ton-025", name: "와인 2톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#5C1A2E", ratio: 70, role: "base"  },
      { hex: "#A85A6E", ratio: 30, role: "point" }],
    tags: ["고급","클래식","레드","핑크"] },

  { id: "ton-026", name: "스틸 블루 2톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#34495E", ratio: 70, role: "base"  },
      { hex: "#90A4B8", ratio: 30, role: "point" }],
    tags: ["모던","비즈니스","쿨톤","블루"] },

  { id: "ton-027", name: "라임 2톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#4F6D0B", ratio: 70, role: "base"  },
      { hex: "#B5D33D", ratio: 30, role: "point" }],
    tags: ["활기", "신선", "그린"] },

  { id: "ton-028", name: "시안 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#084C61", ratio: 60, role: "base"  },
      { hex: "#1B8A9C", ratio: 30, role: "sub"   },
      { hex: "#A8E0E8", ratio: 10, role: "point" }],
    tags: ["시원함","청량","쿨톤","시안"] },

  { id: "ton-029", name: "마젠타 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#6A0F49", ratio: 60, role: "base"  },
      { hex: "#B03A7A", ratio: 30, role: "sub"   },
      { hex: "#F0A8CE", ratio: 10, role: "point" }],
    tags: ["여성적", "화려함", "핑크"] },

  { id: "ton-030", name: "앰버 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#7A4A02", ratio: 60, role: "base"  },
      { hex: "#C87F0A", ratio: 30, role: "sub"   },
      { hex: "#F5C87A", ratio: 10, role: "point" }],
    tags: ["따뜻함","가을","웜톤","오렌지"] },

  { id: "ton-031", name: "모카 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#3E2B23", ratio: 60, role: "base"  },
      { hex: "#7A5A48", ratio: 30, role: "sub"   },
      { hex: "#C9AE9A", ratio: 10, role: "point" }],
    tags: ["차분","카페","웜톤","오렌지"] },

  { id: "ton-032", name: "코발트 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#10256E", ratio: 60, role: "base"  },
      { hex: "#2E4FC4", ratio: 30, role: "sub"   },
      { hex: "#9FB4F0", ratio: 10, role: "point" }],
    tags: ["신뢰감","테크","쿨톤","블루"] },

  { id: "ton-033", name: "세이지 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#4A5D45", ratio: 60, role: "base"  },
      { hex: "#7D9471", ratio: 30, role: "sub"   },
      { hex: "#C4D3B5", ratio: 10, role: "point" }],
    tags: ["내추럴", "편안함", "그린"] },

  { id: "ton-034", name: "살몬 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#A63E3E", ratio: 60, role: "base"  },
      { hex: "#E07A6A", ratio: 30, role: "sub"   },
      { hex: "#F7C4B4", ratio: 10, role: "point" }],
    tags: ["따뜻함","부드러움","웜톤","레드"] },

  { id: "ton-035", name: "카키 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#4C4B2A", ratio: 60, role: "base"  },
      { hex: "#8A8654", ratio: 30, role: "sub"   },
      { hex: "#D3CFA5", ratio: 10, role: "point" }],
    tags: ["내추럴","빈티지","어스톤","옐로우"] },

  { id: "ton-036", name: "바이올렛 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#2E1A47", ratio: 60, role: "base"  },
      { hex: "#6B4A9C", ratio: 30, role: "sub"   },
      { hex: "#B79CE0", ratio: 10, role: "point" }],
    tags: ["몽환적", "개성", "퍼플"] },

  { id: "ton-037", name: "버건디 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#4A0E1E", ratio: 60, role: "base"  },
      { hex: "#8C1F38", ratio: 30, role: "sub"   },
      { hex: "#D4667E", ratio: 10, role: "point" }],
    tags: ["고급","클래식","레드","핑크"] },

  { id: "ton-038", name: "딥 틸 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#06373E", ratio: 60, role: "base"  },
      { hex: "#128C86", ratio: 30, role: "sub"   },
      { hex: "#85D6CE", ratio: 10, role: "point" }],
    tags: ["시원함","모던","쿨톤","시안"] },

  { id: "ton-039", name: "초콜릿 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#33211A", ratio: 60, role: "base"  },
      { hex: "#6F4530", ratio: 30, role: "sub"   },
      { hex: "#B98D6F", ratio: 10, role: "point" }],
    tags: ["따뜻함","카페","웜톤","오렌지"] },

  { id: "ton-040", name: "데님 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#1F3550", ratio: 60, role: "base"  },
      { hex: "#4C6B93", ratio: 30, role: "sub"   },
      { hex: "#A6BEDB", ratio: 10, role: "point" }],
    tags: ["캐주얼","차분","쿨톤","블루"] },

  { id: "ton-041", name: "틸 풀스케일", scheme: "tone-on-tone",
    colors: [
      { hex: "#032F30", ratio: 30, role: "base"  },
      { hex: "#0A5C5E", ratio: 25, role: "sub"   },
      { hex: "#128C86", ratio: 20, role: "sub"   },
      { hex: "#56B7AE", ratio: 15, role: "sub"   },
      { hex: "#B3E3DC", ratio: 10, role: "point" }],
    tags: ["시원함","깊이감","쿨톤","시안"] },

  { id: "ton-042", name: "퍼플 풀스케일", scheme: "tone-on-tone",
    colors: [
      { hex: "#1E0A33", ratio: 30, role: "base"  },
      { hex: "#3C096C", ratio: 25, role: "sub"   },
      { hex: "#7B2CBF", ratio: 20, role: "sub"   },
      { hex: "#B07CE8", ratio: 15, role: "sub"   },
      { hex: "#E5D0FA", ratio: 10, role: "point" }],
    tags: ["몽환적", "개성", "퍼플"] },

  { id: "ton-043", name: "앰버 풀스케일", scheme: "tone-on-tone",
    colors: [
      { hex: "#4A2C00", ratio: 30, role: "base"  },
      { hex: "#7A4A02", ratio: 25, role: "sub"   },
      { hex: "#C87F0A", ratio: 20, role: "sub"   },
      { hex: "#EBA53E", ratio: 15, role: "sub"   },
      { hex: "#F7DCA8", ratio: 10, role: "point" }],
    tags: ["따뜻함","가을","웜톤","오렌지"] },

  { id: "ton-044", name: "브라운 풀스케일", scheme: "tone-on-tone",
    colors: [
      { hex: "#2B1A12", ratio: 30, role: "base"  },
      { hex: "#4E342E", ratio: 25, role: "sub"   },
      { hex: "#7A5548", ratio: 20, role: "sub"   },
      { hex: "#B08D77", ratio: 15, role: "sub"   },
      { hex: "#E4D3C4", ratio: 10, role: "point" }],
    tags: ["빈티지","우드","웜톤","오렌지","레드"] },

  { id: "ton-045", name: "크림슨 풀스케일", scheme: "tone-on-tone",
    colors: [
      { hex: "#3D0A14", ratio: 30, role: "base"  },
      { hex: "#6E1224", ratio: 25, role: "sub"   },
      { hex: "#A81E38", ratio: 20, role: "sub"   },
      { hex: "#D95C74", ratio: 15, role: "sub"   },
      { hex: "#F2B5C1", ratio: 10, role: "point" }],
    tags: ["강렬", "우아함", "레드"] },

  { id: "ton-046", name: "올리브 풀스케일", scheme: "tone-on-tone",
    colors: [
      { hex: "#23290E", ratio: 30, role: "base"  },
      { hex: "#3D4A17", ratio: 25, role: "sub"   },
      { hex: "#667A2A", ratio: 20, role: "sub"   },
      { hex: "#9BB05C", ratio: 15, role: "sub"   },
      { hex: "#D4DFA8", ratio: 10, role: "point" }],
    tags: ["내추럴", "자연", "그린"] },

  { id: "ton-047", name: "인디고 풀스케일", scheme: "tone-on-tone",
    colors: [
      { hex: "#14103A", ratio: 30, role: "base"  },
      { hex: "#241A6B", ratio: 25, role: "sub"   },
      { hex: "#3D33A8", ratio: 20, role: "sub"   },
      { hex: "#7A70D6", ratio: 15, role: "sub"   },
      { hex: "#C4BFF0", ratio: 10, role: "point" }],
    tags: ["모던","테크","쿨톤","블루"] },

  { id: "ton-048", name: "시안 풀스케일", scheme: "tone-on-tone",
    colors: [
      { hex: "#032A33", ratio: 30, role: "base"  },
      { hex: "#075566", ratio: 25, role: "sub"   },
      { hex: "#0E8FA8", ratio: 20, role: "sub"   },
      { hex: "#5AC6DB", ratio: 15, role: "sub"   },
      { hex: "#B8ECF5", ratio: 10, role: "point" }],
    tags: ["청량","여름","쿨톤","시안"] },

  { id: "ton-049", name: "로즈골드 풀스케일", scheme: "tone-on-tone",
    colors: [
      { hex: "#4A2A28", ratio: 30, role: "base"  },
      { hex: "#7A4744", ratio: 25, role: "sub"   },
      { hex: "#B0736C", ratio: 20, role: "sub"   },
      { hex: "#DAA69C", ratio: 15, role: "sub"   },
      { hex: "#F2D7CE", ratio: 10, role: "point" }],
    tags: ["우아함","여성적","웜톤","레드"] },

  { id: "ton-050", name: "슬레이트 풀스케일", scheme: "tone-on-tone",
    colors: [
      { hex: "#191E24", ratio: 30, role: "base"  },
      { hex: "#2E3742", ratio: 25, role: "sub"   },
      { hex: "#4E5C6B", ratio: 20, role: "sub"   },
      { hex: "#8494A3", ratio: 15, role: "sub"   },
      { hex: "#C4CFD9", ratio: 10, role: "point" }],
    tags: ["모던","미니멀","쿨톤","블루"] },

  // ─────────── 톤인톤 추가 ───────────
  { id: "tin-018", name: "뮤트 블루 & 뮤트 로즈", scheme: "tone-in-tone",
    colors: [
      { hex: "#7A93A8", ratio: 60, role: "base"  },
      { hex: "#B98E92", ratio: 40, role: "point" }],
    tags: ["뮤트","차분","가을","블루","레드"] },

  { id: "tin-019", name: "파스텔 옐로우 & 그린", scheme: "tone-in-tone",
    colors: [
      { hex: "#FDF3B0", ratio: 60, role: "base"  },
      { hex: "#C8EFC0", ratio: 40, role: "point" }],
    tags: ["파스텔","상큼","봄","옐로우","그린"] },

  { id: "tin-020", name: "딥 틸 & 플럼", scheme: "tone-in-tone",
    colors: [
      { hex: "#2F5E63", ratio: 60, role: "base"  },
      { hex: "#5E2F52", ratio: 40, role: "point" }],
    tags: ["딥톤","고급","겨울","시안","핑크"] },

  { id: "tin-021", name: "뮤트 올리브 & 테라코타", scheme: "tone-in-tone",
    colors: [
      { hex: "#8A8B5C", ratio: 60, role: "base"  },
      { hex: "#B57A62", ratio: 40, role: "point" }],
    tags: ["뮤트","내추럴","가을","옐로우","오렌지"] },

  { id: "tin-022", name: "파스텔 라일락 & 민트", scheme: "tone-in-tone",
    colors: [
      { hex: "#D7C4E8", ratio: 60, role: "base"  },
      { hex: "#BFE8D6", ratio: 40, role: "point" }],
    tags: ["파스텔","몽환적","봄","퍼플","그린"] },

  { id: "tin-023", name: "비비드 시안 & 마젠타", scheme: "tone-in-tone",
    colors: [
      { hex: "#00B9D6", ratio: 60, role: "base"  },
      { hex: "#E5399B", ratio: 40, role: "point" }],
    tags: ["비비드","팝","강렬","시안","핑크"] },

  { id: "tin-024", name: "스모키 그린 & 블루", scheme: "tone-in-tone",
    colors: [
      { hex: "#6E8574", ratio: 60, role: "base"  },
      { hex: "#6E7C8F", ratio: 40, role: "point" }],
    tags: ["뮤트","차분","쿨톤","무채색","블루"] },

  { id: "tin-025", name: "크림 & 파우더 핑크", scheme: "tone-in-tone",
    colors: [
      { hex: "#F5E9DA", ratio: 60, role: "base"  },
      { hex: "#F3D5D8", ratio: 40, role: "point" }],
    tags: ["파스텔","부드러움","웜톤","오렌지","레드"] },

  { id: "tin-026", name: "딥 와인 & 포레스트", scheme: "tone-in-tone",
    colors: [
      { hex: "#5C1A2E", ratio: 60, role: "base"  },
      { hex: "#1E4632", ratio: 40, role: "point" }],
    tags: ["딥톤","클래식","겨울","핑크","그린"] },

  { id: "tin-027", name: "파스텔 피치 & 스카이", scheme: "tone-in-tone",
    colors: [
      { hex: "#FCD9C0", ratio: 60, role: "base"  },
      { hex: "#C4E3F5", ratio: 40, role: "point" }],
    tags: ["파스텔","부드러움","봄","오렌지","블루"] },

  { id: "tin-028", name: "뮤트 블루·그린·로즈", scheme: "tone-in-tone",
    colors: [
      { hex: "#7A93A8", ratio: 60, role: "base"  },
      { hex: "#8FA98D", ratio: 30, role: "sub"   },
      { hex: "#B98E92", ratio: 10, role: "point" }],
    tags: ["뮤트","내추럴","가을","블루","그린"] },

  { id: "tin-029", name: "딥 주얼 트리오", scheme: "tone-in-tone",
    colors: [
      { hex: "#1E4632", ratio: 60, role: "base"  },
      { hex: "#2F4A73", ratio: 30, role: "sub"   },
      { hex: "#5E2F52", ratio: 10, role: "point" }],
    tags: ["딥톤","고급","겨울","그린","블루"] },

  { id: "tin-030", name: "파스텔 시트러스", scheme: "tone-in-tone",
    colors: [
      { hex: "#FDF3B0", ratio: 60, role: "base"  },
      { hex: "#FBD9A8", ratio: 30, role: "sub"   },
      { hex: "#F8BFB0", ratio: 10, role: "point" }],
    tags: ["파스텔","상큼","여름","옐로우","오렌지"] },

  { id: "tin-031", name: "스모키 트리오", scheme: "tone-in-tone",
    colors: [
      { hex: "#6E8574", ratio: 60, role: "base"  },
      { hex: "#6E7C8F", ratio: 30, role: "sub"   },
      { hex: "#8A7C8F", ratio: 10, role: "point" }],
    tags: ["뮤트","차분","쿨톤","무채색","블루"] },

  { id: "tin-032", name: "어스 뮤트 트리오", scheme: "tone-in-tone",
    colors: [
      { hex: "#B08968", ratio: 60, role: "base"  },
      { hex: "#7F8C6B", ratio: 30, role: "sub"   },
      { hex: "#A3907E", ratio: 10, role: "point" }],
    tags: ["뮤트","어스톤","내추럴","오렌지","그린"] },

  { id: "tin-033", name: "비비드 팝 트리오", scheme: "tone-in-tone",
    colors: [
      { hex: "#FF6B35", ratio: 60, role: "base"  },
      { hex: "#F7C548", ratio: 30, role: "sub"   },
      { hex: "#4ECDC4", ratio: 10, role: "point" }],
    tags: ["비비드","팝","활기","오렌지"] },

  { id: "tin-034", name: "파우더 트리오", scheme: "tone-in-tone",
    colors: [
      { hex: "#F3D5D8", ratio: 60, role: "base"  },
      { hex: "#DCE6F0", ratio: 30, role: "sub"   },
      { hex: "#E4E0D0", ratio: 10, role: "point" }],
    tags: ["파스텔","부드러움","미니멀","레드","블루"] },

  { id: "tin-035", name: "미드톤 트리오", scheme: "tone-in-tone",
    colors: [
      { hex: "#C4785C", ratio: 60, role: "base"  },
      { hex: "#6F9B8C", ratio: 30, role: "sub"   },
      { hex: "#C4A45C", ratio: 10, role: "point" }],
    tags: ["뮤트","내추럴","가을","오렌지","그린"] },

  { id: "tin-036", name: "라이트 뉴트럴 트리오", scheme: "tone-in-tone",
    colors: [
      { hex: "#E8DFD3", ratio: 60, role: "base"  },
      { hex: "#DCE0DA", ratio: 30, role: "sub"   },
      { hex: "#E3D9E0", ratio: 10, role: "point" }],
    tags: ["미니멀","부드러움","무채색","오렌지"] },

  { id: "tin-037", name: "딥 오션 트리오", scheme: "tone-in-tone",
    colors: [
      { hex: "#123C5A", ratio: 60, role: "base"  },
      { hex: "#14544A", ratio: 30, role: "sub"   },
      { hex: "#3A2E5C", ratio: 10, role: "point" }],
    tags: ["딥톤","차분","쿨톤","블루","시안"] },

  { id: "tin-038", name: "살구·연두·하늘 파스텔", scheme: "tone-in-tone",
    colors: [
      { hex: "#FBD3B4", ratio: 60, role: "base"  },
      { hex: "#D6EAB4", ratio: 30, role: "sub"   },
      { hex: "#B4D8EA", ratio: 10, role: "point" }],
    tags: ["파스텔","봄","화사","오렌지","그린"] },

  { id: "tin-039", name: "뮤트 가을 트리오", scheme: "tone-in-tone",
    colors: [
      { hex: "#A65E44", ratio: 60, role: "base"  },
      { hex: "#8A7A3F", ratio: 30, role: "sub"   },
      { hex: "#5C6E52", ratio: 10, role: "point" }],
    tags: ["뮤트","가을","어스톤","오렌지","옐로우"] },

  { id: "tin-040", name: "캔디 트리오", scheme: "tone-in-tone",
    colors: [
      { hex: "#FF8FAB", ratio: 60, role: "base"  },
      { hex: "#FFC482", ratio: 30, role: "sub"   },
      { hex: "#A0E7A0", ratio: 10, role: "point" }],
    tags: ["파스텔","발랄","키치","레드","오렌지"] },

  { id: "tin-041", name: "뮤트 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#7A93A8", ratio: 30, role: "base"  },
      { hex: "#8FA98D", ratio: 25, role: "sub"   },
      { hex: "#B98E92", ratio: 20, role: "sub"   },
      { hex: "#A3907E", ratio: 15, role: "sub"   },
      { hex: "#8A7C8F", ratio: 10, role: "point" }],
    tags: ["뮤트","차분","가을","블루","그린"] },

  { id: "tin-042", name: "파스텔 시트러스 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#FDF3B0", ratio: 30, role: "base"  },
      { hex: "#FBE0A8", ratio: 25, role: "sub"   },
      { hex: "#FBC9A8", ratio: 20, role: "sub"   },
      { hex: "#F8B0AE", ratio: 15, role: "sub"   },
      { hex: "#F5D3E0", ratio: 10, role: "point" }],
    tags: ["파스텔","상큼","여름","옐로우","오렌지"] },

  { id: "tin-043", name: "딥 주얼 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#1E4632", ratio: 30, role: "base"  },
      { hex: "#14544A", ratio: 25, role: "sub"   },
      { hex: "#2F4A73", ratio: 20, role: "sub"   },
      { hex: "#3A2E5C", ratio: 15, role: "sub"   },
      { hex: "#5E2F52", ratio: 10, role: "point" }],
    tags: ["딥톤","고급","겨울","그린","시안"] },

  { id: "tin-044", name: "어스 미드톤 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#B08968", ratio: 30, role: "base"  },
      { hex: "#C4785C", ratio: 25, role: "sub"   },
      { hex: "#8A7A3F", ratio: 20, role: "sub"   },
      { hex: "#7F8C6B", ratio: 15, role: "sub"   },
      { hex: "#6F5C4A", ratio: 10, role: "point" }],
    tags: ["어스톤","내추럴","가을","오렌지"] },

  { id: "tin-045", name: "비비드 팝 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#FF6B35", ratio: 30, role: "base"  },
      { hex: "#F7C548", ratio: 25, role: "sub"   },
      { hex: "#4ECDC4", ratio: 20, role: "sub"   },
      { hex: "#556FB5", ratio: 15, role: "sub"   },
      { hex: "#C04CCB", ratio: 10, role: "point" }],
    tags: ["비비드","팝","다채로움","오렌지"] },

  { id: "tin-046", name: "라이트 뉴트럴 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#F0EAE0", ratio: 30, role: "base"  },
      { hex: "#E8DFD3", ratio: 25, role: "sub"   },
      { hex: "#DCE0DA", ratio: 20, role: "sub"   },
      { hex: "#E3D9E0", ratio: 15, role: "sub"   },
      { hex: "#D8D2C8", ratio: 10, role: "point" }],
    tags: ["미니멀","무채색","부드러움","오렌지"] },

  { id: "tin-047", name: "파스텔 스프링 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#FBD3B4", ratio: 30, role: "base"  },
      { hex: "#FBEFB4", ratio: 25, role: "sub"   },
      { hex: "#D6EAB4", ratio: 20, role: "sub"   },
      { hex: "#B4D8EA", ratio: 15, role: "sub"   },
      { hex: "#D4C4EA", ratio: 10, role: "point" }],
    tags: ["파스텔","봄","화사","오렌지","옐로우"] },

  { id: "tin-048", name: "스모키 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#6E8574", ratio: 30, role: "base"  },
      { hex: "#6E7C8F", ratio: 25, role: "sub"   },
      { hex: "#8A7C8F", ratio: 20, role: "sub"   },
      { hex: "#8F7C6E", ratio: 15, role: "sub"   },
      { hex: "#7C8F8A", ratio: 10, role: "point" }],
    tags: ["뮤트","차분","미니멀","무채색","블루"] },

  { id: "tin-049", name: "캔디 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#FF8FAB", ratio: 30, role: "base"  },
      { hex: "#FFC482", ratio: 25, role: "sub"   },
      { hex: "#FFF08F", ratio: 20, role: "sub"   },
      { hex: "#A0E7A0", ratio: 15, role: "sub"   },
      { hex: "#8FC7FF", ratio: 10, role: "point" }],
    tags: ["파스텔","발랄","키치","레드","오렌지"] },

  { id: "tin-050", name: "뮤트 가을 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#A65E44", ratio: 30, role: "base"  },
      { hex: "#B58A50", ratio: 25, role: "sub"   },
      { hex: "#8A7A3F", ratio: 20, role: "sub"   },
      { hex: "#5C6E52", ratio: 15, role: "sub"   },
      { hex: "#7A5C50", ratio: 10, role: "point" }],
    tags: ["뮤트","가을","어스톤","오렌지"] },

  // ─────────── 완전 보색 추가 ───────────
  { id: "com-017", name: "옐로우그린 & 바이올렛", scheme: "complementary",
    colors: [
      { hex: "#7CB518", ratio: 70, role: "base"  },
      { hex: "#6A18B5", ratio: 30, role: "point" }],
    tags: ["강렬","개성","대비","그린","퍼플"] },

  { id: "com-018", name: "시안 & 레드", scheme: "complementary",
    colors: [
      { hex: "#00A8B5", ratio: 70, role: "base"  },
      { hex: "#B52A00", ratio: 30, role: "point" }],
    tags: ["대비","활기","보색","시안","레드"] },

  { id: "com-019", name: "그린 & 마젠타", scheme: "complementary",
    colors: [
      { hex: "#18B54F", ratio: 70, role: "base"  },
      { hex: "#B5188A", ratio: 30, role: "point" }],
    tags: ["비비드","팝","대비","그린","핑크"] },

  { id: "com-020", name: "블루 & 앰버", scheme: "complementary",
    colors: [
      { hex: "#1D4E89", ratio: 70, role: "base"  },
      { hex: "#E8A020", ratio: 30, role: "point" }],
    tags: ["신뢰감","대비","비즈니스","블루","오렌지"] },

  { id: "com-021", name: "민트 & 로즈", scheme: "complementary",
    colors: [
      { hex: "#3FC1A0", ratio: 70, role: "base"  },
      { hex: "#C13F60", ratio: 30, role: "point" }],
    tags: ["상큼","대비","여름","시안","핑크"] },

  { id: "com-022", name: "스카이 & 피치", scheme: "complementary",
    colors: [
      { hex: "#4EA8DE", ratio: 70, role: "base"  },
      { hex: "#DE844E", ratio: 30, role: "point" }],
    tags: ["부드러움","대비","웜쿨","블루","오렌지"] },

  { id: "com-023", name: "딥그린 & 버건디", scheme: "complementary",
    colors: [
      { hex: "#245C3B", ratio: 70, role: "base"  },
      { hex: "#5C2438", ratio: 30, role: "point" }],
    tags: ["딥톤","클래식","겨울","그린","핑크"] },

  { id: "com-024", name: "옐로우 & 인디고", scheme: "complementary",
    colors: [
      { hex: "#FFD23F", ratio: 70, role: "base"  },
      { hex: "#3F4BFF", ratio: 30, role: "point" }],
    tags: ["강렬","팝","대비","옐로우","블루"] },

  { id: "com-025", name: "올리브 & 퍼플", scheme: "complementary",
    colors: [
      { hex: "#6B7A2E", ratio: 70, role: "base"  },
      { hex: "#6B2E7A", ratio: 30, role: "point" }],
    tags: ["개성","뮤트","대비","그린","퍼플"] },

  { id: "com-026", name: "터콰이즈 & 코럴", scheme: "complementary",
    colors: [
      { hex: "#17A398", ratio: 70, role: "base"  },
      { hex: "#F26B5B", ratio: 30, role: "point" }],
    tags: ["트렌디","여름","웜쿨","시안","레드"] },

  { id: "com-027", name: "블루·앰버·아이보리", scheme: "complementary",
    colors: [
      { hex: "#1D4E89", ratio: 60, role: "base"  },
      { hex: "#E8A020", ratio: 30, role: "sub"   },
      { hex: "#FAF3E0", ratio: 10, role: "point" }],
    tags: ["비즈니스","대비","모던","블루","오렌지"] },

  { id: "com-028", name: "그린·마젠타·라이트그레이", scheme: "complementary",
    colors: [
      { hex: "#2E8B57", ratio: 60, role: "base"  },
      { hex: "#B5338A", ratio: 30, role: "sub"   },
      { hex: "#E6E6E6", ratio: 10, role: "point" }],
    tags: ["팝","대비","모던","그린","핑크"] },

  { id: "com-029", name: "틸·러스트·크림", scheme: "complementary",
    colors: [
      { hex: "#17A398", ratio: 60, role: "base"  },
      { hex: "#B45A2A", ratio: 30, role: "sub"   },
      { hex: "#F5EBDD", ratio: 10, role: "point" }],
    tags: ["트렌디","내추럴","웜쿨","시안","오렌지"] },

  { id: "com-030", name: "인디고·옐로우·화이트그레이", scheme: "complementary",
    colors: [
      { hex: "#3F4BFF", ratio: 60, role: "base"  },
      { hex: "#FFD23F", ratio: 30, role: "sub"   },
      { hex: "#F0F0F5", ratio: 10, role: "point" }],
    tags: ["팝","대비","테크","블루","옐로우"] },

  { id: "com-031", name: "포레스트·플럼·샌드", scheme: "complementary",
    colors: [
      { hex: "#245C3B", ratio: 60, role: "base"  },
      { hex: "#6B2E5C", ratio: 30, role: "sub"   },
      { hex: "#E5D3B3", ratio: 10, role: "point" }],
    tags: ["딥톤","내추럴","가을","그린","핑크"] },

  { id: "com-032", name: "스카이·피치·차콜", scheme: "complementary",
    colors: [
      { hex: "#4EA8DE", ratio: 60, role: "base"  },
      { hex: "#DE844E", ratio: 30, role: "sub"   },
      { hex: "#2B2B2B", ratio: 10, role: "point" }],
    tags: ["모던","대비","웜쿨","블루","오렌지"] },

  { id: "com-033", name: "민트·로즈·오프화이트", scheme: "complementary",
    colors: [
      { hex: "#3FC1A0", ratio: 60, role: "base"  },
      { hex: "#C13F60", ratio: 30, role: "sub"   },
      { hex: "#FBF7F2", ratio: 10, role: "point" }],
    tags: ["상큼","부드러움","여름","시안","핑크"] },

  { id: "com-034", name: "올리브·퍼플·베이지", scheme: "complementary",
    colors: [
      { hex: "#6B7A2E", ratio: 60, role: "base"  },
      { hex: "#6B2E7A", ratio: 30, role: "sub"   },
      { hex: "#DDD5C0", ratio: 10, role: "point" }],
    tags: ["개성","뮤트","가을","그린","퍼플"] },

  { id: "com-035", name: "시안·레드·네이비", scheme: "complementary",
    colors: [
      { hex: "#00A8B5", ratio: 60, role: "base"  },
      { hex: "#B52A00", ratio: 30, role: "sub"   },
      { hex: "#0B2545", ratio: 10, role: "point" }],
    tags: ["강렬","대비","레트로","시안","레드"] },

  { id: "com-036", name: "라임·바이올렛·블랙", scheme: "complementary",
    colors: [
      { hex: "#A8D818", ratio: 60, role: "base"  },
      { hex: "#6A18B5", ratio: 30, role: "sub"   },
      { hex: "#1A1A1A", ratio: 10, role: "point" }],
    tags: ["강렬","개성","팝","그린","퍼플"] },

  { id: "com-037", name: "코럴·터콰이즈·크림", scheme: "complementary",
    colors: [
      { hex: "#F26B5B", ratio: 60, role: "base"  },
      { hex: "#17A398", ratio: 30, role: "sub"   },
      { hex: "#FDF6EC", ratio: 10, role: "point" }],
    tags: ["트렌디","여름","웜쿨","레드","시안"] },

  { id: "com-038", name: "머스타드·블루·오프화이트", scheme: "complementary",
    colors: [
      { hex: "#E8B520", ratio: 60, role: "base"  },
      { hex: "#2050E8", ratio: 30, role: "sub"   },
      { hex: "#F7F7F2", ratio: 10, role: "point" }],
    tags: ["대비","모던","팝","오렌지","블루"] },

  { id: "com-039", name: "블루-앰버 확장", scheme: "complementary",
    colors: [
      { hex: "#0B2545", ratio: 30, role: "base"  },
      { hex: "#1D4E89", ratio: 25, role: "sub"   },
      { hex: "#8DA9C4", ratio: 20, role: "sub"   },
      { hex: "#EEF4ED", ratio: 15, role: "sub"   },
      { hex: "#E8A020", ratio: 10, role: "point" }],
    tags: ["비즈니스","대비","모던","블루"] },

  { id: "com-040", name: "그린-마젠타 확장", scheme: "complementary",
    colors: [
      { hex: "#14372A", ratio: 30, role: "base"  },
      { hex: "#2E8B57", ratio: 25, role: "sub"   },
      { hex: "#A8D5BA", ratio: 20, role: "sub"   },
      { hex: "#E8B8D8", ratio: 15, role: "sub"   },
      { hex: "#B5338A", ratio: 10, role: "point" }],
    tags: ["대비","자연","팝","그린"] },

  { id: "com-041", name: "틸-러스트 확장", scheme: "complementary",
    colors: [
      { hex: "#063B39", ratio: 30, role: "base"  },
      { hex: "#17A398", ratio: 25, role: "sub"   },
      { hex: "#A8DDD8", ratio: 20, role: "sub"   },
      { hex: "#E8C4A8", ratio: 15, role: "sub"   },
      { hex: "#B45A2A", ratio: 10, role: "point" }],
    tags: ["트렌디","내추럴","웜쿨","시안"] },

  { id: "com-042", name: "인디고-옐로우 확장", scheme: "complementary",
    colors: [
      { hex: "#1A1F5C", ratio: 30, role: "base"  },
      { hex: "#3F4BFF", ratio: 25, role: "sub"   },
      { hex: "#A8AEFF", ratio: 20, role: "sub"   },
      { hex: "#FFE8A3", ratio: 15, role: "sub"   },
      { hex: "#FFD23F", ratio: 10, role: "point" }],
    tags: ["테크","대비","팝","블루"] },

  { id: "com-043", name: "포레스트-플럼 확장", scheme: "complementary",
    colors: [
      { hex: "#14301F", ratio: 30, role: "base"  },
      { hex: "#245C3B", ratio: 25, role: "sub"   },
      { hex: "#7FA88F", ratio: 20, role: "sub"   },
      { hex: "#C79FBC", ratio: 15, role: "sub"   },
      { hex: "#6B2E5C", ratio: 10, role: "point" }],
    tags: ["딥톤","우아함","가을","그린"] },

  { id: "com-044", name: "스카이-피치 확장", scheme: "complementary",
    colors: [
      { hex: "#1B4965", ratio: 30, role: "base"  },
      { hex: "#4EA8DE", ratio: 25, role: "sub"   },
      { hex: "#BEE9E8", ratio: 20, role: "sub"   },
      { hex: "#F5C9A8", ratio: 15, role: "sub"   },
      { hex: "#DE844E", ratio: 10, role: "point" }],
    tags: ["부드러움","여름","웜쿨","블루"] },

  { id: "com-045", name: "올리브-퍼플 확장", scheme: "complementary",
    colors: [
      { hex: "#333D14", ratio: 30, role: "base"  },
      { hex: "#6B7A2E", ratio: 25, role: "sub"   },
      { hex: "#B5C47A", ratio: 20, role: "sub"   },
      { hex: "#C4A3D1", ratio: 15, role: "sub"   },
      { hex: "#6B2E7A", ratio: 10, role: "point" }],
    tags: ["개성","내추럴","가을","그린"] },

  { id: "com-046", name: "레드-그린 확장", scheme: "complementary",
    colors: [
      { hex: "#4A0F14", ratio: 30, role: "base"  },
      { hex: "#B02E38", ratio: 25, role: "sub"   },
      { hex: "#E8A8AC", ratio: 20, role: "sub"   },
      { hex: "#A8CBA8", ratio: 15, role: "sub"   },
      { hex: "#2E7A3D", ratio: 10, role: "point" }],
    tags: ["클래식","대비","겨울","레드"] },

  { id: "com-047", name: "코럴-터콰이즈 확장", scheme: "complementary",
    colors: [
      { hex: "#7A2A1E", ratio: 30, role: "base"  },
      { hex: "#F26B5B", ratio: 25, role: "sub"   },
      { hex: "#FBC4B8", ratio: 20, role: "sub"   },
      { hex: "#A8DDD8", ratio: 15, role: "sub"   },
      { hex: "#17A398", ratio: 10, role: "point" }],
    tags: ["트렌디","여름","웜쿨","레드"] },

  { id: "com-048", name: "네이비-오렌지 확장", scheme: "complementary",
    colors: [
      { hex: "#0A1128", ratio: 30, role: "base"  },
      { hex: "#1C3F72", ratio: 25, role: "sub"   },
      { hex: "#7A9CC6", ratio: 20, role: "sub"   },
      { hex: "#F5B563", ratio: 15, role: "sub"   },
      { hex: "#E86A17", ratio: 10, role: "point" }],
    tags: ["비즈니스","대비","모던","블루"] },

  { id: "com-049", name: "퍼플-라임 확장", scheme: "complementary",
    colors: [
      { hex: "#2A0F45", ratio: 30, role: "base"  },
      { hex: "#6A18B5", ratio: 25, role: "sub"   },
      { hex: "#B98FE0", ratio: 20, role: "sub"   },
      { hex: "#D4E88F", ratio: 15, role: "sub"   },
      { hex: "#A8D818", ratio: 10, role: "point" }],
    tags: ["개성","팝","강렬","퍼플"] },

  { id: "com-050", name: "브라운-틸 확장", scheme: "complementary",
    colors: [
      { hex: "#3A241A", ratio: 30, role: "base"  },
      { hex: "#7A4A30", ratio: 25, role: "sub"   },
      { hex: "#C49A78", ratio: 20, role: "sub"   },
      { hex: "#7FC4BE", ratio: 15, role: "sub"   },
      { hex: "#1E7A72", ratio: 10, role: "point" }],
    tags: ["내추럴","웜쿨","가을","오렌지"] },

  // ─────────── 톤온톤 보강 (무채색·퍼플·핑크·다크모드·뮤트) ───────────
  { id: "ton-051", name: "웜 그레이 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#44403C", ratio: 60, role: "base"  },
      { hex: "#A8A29E", ratio: 30, role: "sub"   },
      { hex: "#F5F3F0", ratio: 10, role: "point" }],
    tags: ["무채색", "미니멀", "웜톤"] },

  { id: "ton-052", name: "쿨 그레이 2톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#3C3F44", ratio: 70, role: "base"  },
      { hex: "#E8E8EA", ratio: 30, role: "point" }],
    tags: ["무채색", "모던", "쿨톤"] },

  { id: "ton-053", name: "잉크 모노 5톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#0A0A0A", ratio: 30, role: "base"  },
      { hex: "#262626", ratio: 25, role: "sub"   },
      { hex: "#525252", ratio: 20, role: "sub"   },
      { hex: "#A3A3A3", ratio: 15, role: "sub"   },
      { hex: "#E5E5E5", ratio: 10, role: "point" }],
    tags: ["무채색", "미니멀", "시크"] },

  { id: "ton-054", name: "아이보리 & 차콜", scheme: "tone-on-tone",
    colors: [
      { hex: "#FAF9F6", ratio: 70, role: "base"  },
      { hex: "#2B2B2B", ratio: 30, role: "point" }],
    tags: ["무채색", "미니멀", "클래식"] },

  { id: "ton-055", name: "콘크리트 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#4A4A47", ratio: 60, role: "base"  },
      { hex: "#9C9C99", ratio: 30, role: "sub"   },
      { hex: "#DEDEDC", ratio: 10, role: "point" }],
    tags: ["무채색", "모던", "차분"] },

  { id: "ton-056", name: "웜 뉴트럴 5톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#4A453D", ratio: 30, role: "base"  },
      { hex: "#8A8175", ratio: 25, role: "sub"   },
      { hex: "#C9C0B4", ratio: 20, role: "sub"   },
      { hex: "#EDE8E0", ratio: 15, role: "sub"   },
      { hex: "#FDFCFA", ratio: 10, role: "point" }],
    tags: ["무채색", "내추럴", "웜톤"] },

  { id: "ton-057", name: "라벤더 톤온톤 3색", scheme: "tone-on-tone",
    colors: [
      { hex: "#2E1065", ratio: 60, role: "base"  },
      { hex: "#6D28D9", ratio: 30, role: "sub"   },
      { hex: "#C4B5FD", ratio: 10, role: "point" }],
    tags: ["퍼플", "몽환적", "쿨톤"] },

  { id: "ton-058", name: "플럼 풀스케일", scheme: "tone-on-tone",
    colors: [
      { hex: "#2A0A3D", ratio: 30, role: "base"  },
      { hex: "#4C1D6B", ratio: 25, role: "sub"   },
      { hex: "#7C3AED", ratio: 20, role: "sub"   },
      { hex: "#A78BFA", ratio: 15, role: "sub"   },
      { hex: "#E9D5FF", ratio: 10, role: "point" }],
    tags: ["퍼플", "깊이감", "우아함"] },

  { id: "ton-059", name: "모브 2톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#4A2C4D", ratio: 70, role: "base"  },
      { hex: "#B98FBC", ratio: 30, role: "point" }],
    tags: ["퍼플", "뮤트", "우아함"] },

  { id: "ton-060", name: "바이올렛 뮤트 3색", scheme: "tone-on-tone",
    colors: [
      { hex: "#3D3155", ratio: 60, role: "base"  },
      { hex: "#6E5F8C", ratio: 30, role: "sub"   },
      { hex: "#BDB2CE", ratio: 10, role: "point" }],
    tags: ["퍼플", "뮤트", "차분"] },

  { id: "ton-061", name: "더스티 로즈 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#6B2740", ratio: 60, role: "base"  },
      { hex: "#B76E85", ratio: 30, role: "sub"   },
      { hex: "#F2D4DE", ratio: 10, role: "point" }],
    tags: ["핑크", "우아함", "뮤트"] },

  { id: "ton-062", name: "푸시아 2톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#9D174D", ratio: 70, role: "base"  },
      { hex: "#FBCFE8", ratio: 30, role: "point" }],
    tags: ["핑크", "여성적", "대비"] },

  { id: "ton-063", name: "로즈 풀스케일 5색", scheme: "tone-on-tone",
    colors: [
      { hex: "#4A1027", ratio: 30, role: "base"  },
      { hex: "#8C2F4A", ratio: 25, role: "sub"   },
      { hex: "#C46A83", ratio: 20, role: "sub"   },
      { hex: "#E6A9B8", ratio: 15, role: "sub"   },
      { hex: "#FBE4E9", ratio: 10, role: "point" }],
    tags: ["핑크", "로맨틱", "깊이감"] },

  { id: "ton-064", name: "다크 뉴트럴 UI", scheme: "tone-on-tone",
    colors: [
      { hex: "#0D1117", ratio: 60, role: "base"  },
      { hex: "#161B22", ratio: 30, role: "sub"   },
      { hex: "#30363D", ratio: 10, role: "point" }],
    tags: ["다크모드","무채색","모던","블루"] },

  { id: "ton-065", name: "다크 네이비 UI", scheme: "tone-on-tone",
    colors: [
      { hex: "#0F172A", ratio: 60, role: "base"  },
      { hex: "#1E293B", ratio: 30, role: "sub"   },
      { hex: "#334155", ratio: 10, role: "point" }],
    tags: ["다크모드","비즈니스","쿨톤","블루"] },

  { id: "ton-066", name: "다크 포레스트 UI", scheme: "tone-on-tone",
    colors: [
      { hex: "#0B1F17", ratio: 60, role: "base"  },
      { hex: "#14352A", ratio: 30, role: "sub"   },
      { hex: "#1F4D3A", ratio: 10, role: "point" }],
    tags: ["다크모드","자연","그린","시안"] },

  { id: "ton-067", name: "다크 퍼플 UI", scheme: "tone-on-tone",
    colors: [
      { hex: "#16091F", ratio: 60, role: "base"  },
      { hex: "#2A1240", ratio: 30, role: "sub"   },
      { hex: "#43206B", ratio: 10, role: "point" }],
    tags: ["다크모드","퍼플","몽환적","무채색"] },

  { id: "ton-068", name: "다크 웜 UI", scheme: "tone-on-tone",
    colors: [
      { hex: "#1A1412", ratio: 60, role: "base"  },
      { hex: "#2A211D", ratio: 30, role: "sub"   },
      { hex: "#3D2F28", ratio: 10, role: "point" }],
    tags: ["다크모드","웜톤","우드","오렌지"] },

  { id: "ton-069", name: "다크 와인 UI", scheme: "tone-on-tone",
    colors: [
      { hex: "#1A0E14", ratio: 60, role: "base"  },
      { hex: "#2E1622", ratio: 30, role: "sub"   },
      { hex: "#4A2036", ratio: 10, role: "point" }],
    tags: ["다크모드","우아함","레드","무채색","핑크"] },

  { id: "ton-070", name: "세이지 뮤트 3색", scheme: "tone-on-tone",
    colors: [
      { hex: "#6B7A63", ratio: 60, role: "base"  },
      { hex: "#A9B4A0", ratio: 30, role: "sub"   },
      { hex: "#DDE3DA", ratio: 10, role: "point" }],
    tags: ["그린","뮤트","내추럴","무채색"] },

  { id: "ton-071", name: "더스티 블루 3색", scheme: "tone-on-tone",
    colors: [
      { hex: "#5E7183", ratio: 60, role: "base"  },
      { hex: "#A3B5C2", ratio: 30, role: "sub"   },
      { hex: "#DCE3E8", ratio: 10, role: "point" }],
    tags: ["블루", "뮤트", "차분"] },

  { id: "ton-072", name: "뮤트 테라코타 3색", scheme: "tone-on-tone",
    colors: [
      { hex: "#8C6A5A", ratio: 60, role: "base"  },
      { hex: "#C9A594", ratio: 30, role: "sub"   },
      { hex: "#EADED6", ratio: 10, role: "point" }],
    tags: ["오렌지", "뮤트", "우드"] },

  { id: "ton-073", name: "뮤트 라일락 3색", scheme: "tone-on-tone",
    colors: [
      { hex: "#7D7391", ratio: 60, role: "base"  },
      { hex: "#B8AEC4", ratio: 30, role: "sub"   },
      { hex: "#E6E1EA", ratio: 10, role: "point" }],
    tags: ["퍼플","뮤트","부드러움","무채색"] },

  // ─────────── 톤인톤 보강 ───────────
  { id: "tin-051", name: "블러시 파스텔 3색", scheme: "tone-in-tone",
    colors: [
      { hex: "#F9D5E5", ratio: 60, role: "base"  },
      { hex: "#EED9C4", ratio: 30, role: "sub"   },
      { hex: "#D6E5FA", ratio: 10, role: "point" }],
    tags: ["핑크","파스텔","사랑스러움","오렌지"] },

  { id: "tin-052", name: "뮤트 어스 톤인톤", scheme: "tone-in-tone",
    colors: [
      { hex: "#9A8467", ratio: 60, role: "base"  },
      { hex: "#6F9480", ratio: 30, role: "sub"   },
      { hex: "#8A7594", ratio: 10, role: "point" }],
    tags: ["뮤트","내추럴","가을","오렌지","그린"] },

  { id: "tin-053", name: "포그 톤인톤", scheme: "tone-in-tone",
    colors: [
      { hex: "#A3B0B8", ratio: 60, role: "base"  },
      { hex: "#B8B0A3", ratio: 30, role: "sub"   },
      { hex: "#A5BCA5", ratio: 10, role: "point" }],
    tags: ["뮤트","차분","무채색","블루","오렌지"] },

  // ─────────── 톤온톤 · 실사용 태그 보강 (비즈니스·카페·테크·다크모드·럭셔리·웨딩·헬스·금융) ───────────
  { id: "ton-074", name: "코퍼레이트 네이비", scheme: "tone-on-tone",
    colors: [
      { hex: "#0A2540", ratio: 70, role: "base"  },
      { hex: "#8898AA", ratio: 30, role: "point" }],
    tags: ["비즈니스", "브랜딩", "블루", "쿨톤", "신뢰감"] },

  { id: "ton-075", name: "딥 그린 파이낸스", scheme: "tone-on-tone",
    colors: [
      { hex: "#0B3D2E", ratio: 60, role: "base"  },
      { hex: "#2E7D5B", ratio: 30, role: "sub"   },
      { hex: "#D9C89E", ratio: 10, role: "point" }],
    tags: ["비즈니스","금융","그린","신뢰감","시안"] },

  { id: "ton-076", name: "슬레이트 컨설팅", scheme: "tone-on-tone",
    colors: [
      { hex: "#334155", ratio: 60, role: "base"  },
      { hex: "#64748B", ratio: 30, role: "sub"   },
      { hex: "#CBD5E1", ratio: 10, role: "point" }],
    tags: ["비즈니스", "브랜딩", "블루", "쿨톤", "미니멀"] },

  { id: "ton-077", name: "버건디 프리미엄 브랜딩", scheme: "tone-on-tone",
    colors: [
      { hex: "#4B1621", ratio: 70, role: "base"  },
      { hex: "#D4AF37", ratio: 30, role: "point" }],
    tags: ["비즈니스","브랜딩","고급","레드","옐로우"] },

  { id: "ton-078", name: "딥 퍼플 컨설팅", scheme: "tone-on-tone",
    colors: [
      { hex: "#2E1065", ratio: 60, role: "base"  },
      { hex: "#6D28D9", ratio: 30, role: "sub"   },
      { hex: "#EDE9FE", ratio: 10, role: "point" }],
    tags: ["비즈니스", "브랜딩", "퍼플", "고급"] },

  { id: "ton-079", name: "라떼 & 에스프레소", scheme: "tone-on-tone",
    colors: [
      { hex: "#3C2415", ratio: 60, role: "base"  },
      { hex: "#8B5E3C", ratio: 30, role: "sub"   },
      { hex: "#E8D5B5", ratio: 10, role: "point" }],
    tags: ["카페", "푸드", "오렌지", "웜톤", "따뜻함"] },

  { id: "ton-080", name: "크림 & 캐러멜 베이커리", scheme: "tone-on-tone",
    colors: [
      { hex: "#6B4423", ratio: 60, role: "base"  },
      { hex: "#C08552", ratio: 30, role: "sub"   },
      { hex: "#FBF3E7", ratio: 10, role: "point" }],
    tags: ["카페", "푸드", "오렌지", "웜톤"] },

  { id: "ton-081", name: "모카 다크 카페 인테리어", scheme: "tone-on-tone",
    colors: [
      { hex: "#2A1810", ratio: 70, role: "base"  },
      { hex: "#A47551", ratio: 30, role: "point" }],
    tags: ["카페", "다크모드", "오렌지", "웜톤"] },

  { id: "ton-082", name: "인디고 SaaS 프로덕트", scheme: "tone-on-tone",
    colors: [
      { hex: "#451F7A", ratio: 60, role: "base"  },
      { hex: "#9951EC", ratio: 30, role: "sub"   },
      { hex: "#EEF2FF", ratio: 10, role: "point" }],
    tags: ["테크", "웹", "앱", "퍼플", "모던"] },

  { id: "ton-083", name: "스카이블루 대시보드", scheme: "tone-on-tone",
    colors: [
      { hex: "#0C4A6E", ratio: 60, role: "base"  },
      { hex: "#0EA5E9", ratio: 30, role: "sub"   },
      { hex: "#E0F2FE", ratio: 10, role: "point" }],
    tags: ["테크","웹","블루","모던","시안"] },

  { id: "ton-084", name: "그린 핀테크 앱", scheme: "tone-on-tone",
    colors: [
      { hex: "#064C29", ratio: 60, role: "base"  },
      { hex: "#10B763", ratio: 30, role: "sub"   },
      { hex: "#ECFDF5", ratio: 10, role: "point" }],
    tags: ["테크", "앱", "금융", "그린"] },

  { id: "ton-085", name: "딥블루 SNS 앱", scheme: "tone-on-tone",
    colors: [
      { hex: "#1E3A8A", ratio: 60, role: "base"  },
      { hex: "#3B82F6", ratio: 30, role: "sub"   },
      { hex: "#DBEAFE", ratio: 10, role: "point" }],
    tags: ["테크", "앱", "SNS", "블루"] },

  { id: "ton-086", name: "퍼플 그라데이션 랜딩", scheme: "tone-on-tone",
    colors: [
      { hex: "#4C1D95", ratio: 30, role: "base"  },
      { hex: "#7C3AED", ratio: 25, role: "sub"   },
      { hex: "#A78BFA", ratio: 20, role: "sub"   },
      { hex: "#DDD6FE", ratio: 15, role: "sub"   },
      { hex: "#F5F3FF", ratio: 10, role: "point" }],
    tags: ["테크", "웹", "퍼플", "트렌디"] },

  { id: "ton-087", name: "다크 SaaS 대시보드", scheme: "tone-on-tone",
    colors: [
      { hex: "#09090B", ratio: 60, role: "base"  },
      { hex: "#18181B", ratio: 30, role: "sub"   },
      { hex: "#6366F1", ratio: 10, role: "point" }],
    tags: ["다크모드", "테크", "앱", "무채색"] },

  { id: "ton-088", name: "다크 코드 에디터", scheme: "tone-on-tone",
    colors: [
      { hex: "#1E1E1E", ratio: 60, role: "base"  },
      { hex: "#2D2D30", ratio: 30, role: "sub"   },
      { hex: "#569CD6", ratio: 10, role: "point" }],
    tags: ["다크모드","테크","블루","무채색"] },

  { id: "ton-089", name: "다크 그린 콘솔", scheme: "tone-on-tone",
    colors: [
      { hex: "#0D1F17", ratio: 60, role: "base"  },
      { hex: "#1B3A2B", ratio: 30, role: "sub"   },
      { hex: "#4ADE80", ratio: 10, role: "point" }],
    tags: ["다크모드", "테크", "그린"] },

  { id: "ton-090", name: "다크 럭셔리 UI", scheme: "tone-on-tone",
    colors: [
      { hex: "#000000", ratio: 70, role: "base"  },
      { hex: "#C9A227", ratio: 30, role: "point" }],
    tags: ["다크모드","럭셔리","고급","무채색","옐로우"] },

  { id: "ton-091", name: "다크 미드나이트 웹", scheme: "tone-on-tone",
    colors: [
      { hex: "#0B1120", ratio: 60, role: "base"  },
      { hex: "#1E2A47", ratio: 30, role: "sub"   },
      { hex: "#38BDF8", ratio: 10, role: "point" }],
    tags: ["다크모드", "웹", "블루"] },

  { id: "ton-092", name: "블랙 & 골드", scheme: "tone-on-tone",
    colors: [
      { hex: "#000000", ratio: 70, role: "base"  },
      { hex: "#D4AF37", ratio: 30, role: "point" }],
    tags: ["럭셔리","고급","무채색","옐로우"] },

  { id: "ton-093", name: "딥버건디 & 로즈골드", scheme: "tone-on-tone",
    colors: [
      { hex: "#3A0F1E", ratio: 70, role: "base"  },
      { hex: "#B76E79", ratio: 30, role: "point" }],
    tags: ["럭셔리","뷰티","레드","우아함","핑크"] },

  { id: "ton-094", name: "딥그린 & 골드 코스메틱", scheme: "tone-on-tone",
    colors: [
      { hex: "#0F3E26", ratio: 70, role: "base"  },
      { hex: "#C9A227", ratio: 30, role: "point" }],
    tags: ["럭셔리","뷰티","그린","고급","옐로우"] },

  { id: "ton-095", name: "누드 & 브라운 뷰티", scheme: "tone-on-tone",
    colors: [
      { hex: "#5C3A2E", ratio: 60, role: "base"  },
      { hex: "#C89F84", ratio: 30, role: "sub"   },
      { hex: "#F3E4D7", ratio: 10, role: "point" }],
    tags: ["뷰티", "오렌지", "웜톤", "우아함"] },

  { id: "ton-096", name: "블랙 & 실버 프레스티지", scheme: "tone-on-tone",
    colors: [
      { hex: "#0A0A0A", ratio: 70, role: "base"  },
      { hex: "#C0C0C0", ratio: 30, role: "point" }],
    tags: ["럭셔리", "무채색", "고급"] },

  { id: "ton-097", name: "딥네이비 & 골드 워치", scheme: "tone-on-tone",
    colors: [
      { hex: "#0B1E3D", ratio: 70, role: "base"  },
      { hex: "#C9A227", ratio: 30, role: "point" }],
    tags: ["럭셔리","블루","고급","옐로우"] },

  { id: "ton-098", name: "버건디 & 골드 겨울웨딩", scheme: "tone-on-tone",
    colors: [
      { hex: "#5C1A2E", ratio: 60, role: "base"  },
      { hex: "#9C4A5C", ratio: 30, role: "sub"   },
      { hex: "#D4AF37", ratio: 10, role: "point" }],
    tags: ["웨딩","레드","고급","겨울","핑크"] },

  { id: "ton-099", name: "소프트블루 메디컬", scheme: "tone-on-tone",
    colors: [
      { hex: "#2C6E8C", ratio: 60, role: "base"  },
      { hex: "#7FB3D5", ratio: 30, role: "sub"   },
      { hex: "#EAF4FA", ratio: 10, role: "point" }],
    tags: ["헬스","블루","신뢰감","청량","시안"] },

  { id: "ton-100", name: "세이지 웰니스 스파", scheme: "tone-on-tone",
    colors: [
      { hex: "#4A6B57", ratio: 60, role: "base"  },
      { hex: "#8FAE9B", ratio: 30, role: "sub"   },
      { hex: "#E8F0EA", ratio: 10, role: "point" }],
    tags: ["헬스", "그린", "내추럴", "편안함"] },

  { id: "ton-101", name: "라벤더 명상 앱", scheme: "tone-on-tone",
    colors: [
      { hex: "#765B95", ratio: 60, role: "base"  },
      { hex: "#A99BC7", ratio: 30, role: "sub"   },
      { hex: "#F0EDF7", ratio: 10, role: "point" }],
    tags: ["헬스","앱","퍼플","편안함","블루"] },

  { id: "ton-102", name: "딥틸 헬스 브랜딩", scheme: "tone-on-tone",
    colors: [
      { hex: "#0D3B3E", ratio: 60, role: "base"  },
      { hex: "#2C7A7B", ratio: 30, role: "sub"   },
      { hex: "#D3F0EF", ratio: 10, role: "point" }],
    tags: ["헬스", "시안", "신뢰감"] },

  { id: "ton-103", name: "딥네이비 프라이빗뱅킹", scheme: "tone-on-tone",
    colors: [
      { hex: "#0A1F3D", ratio: 70, role: "base"  },
      { hex: "#B8860B", ratio: 30, role: "point" }],
    tags: ["금융","비즈니스","블루","신뢰감","오렌지"] },

  { id: "ton-104", name: "그린 & 화이트 핀테크", scheme: "tone-on-tone",
    colors: [
      { hex: "#00563F", ratio: 60, role: "base"  },
      { hex: "#00A854", ratio: 30, role: "sub"   },
      { hex: "#F0FAF7", ratio: 10, role: "point" }],
    tags: ["금융","테크","그린","신뢰감","시안"] },

  { id: "ton-105", name: "딥블루 뱅킹 UI", scheme: "tone-on-tone",
    colors: [
      { hex: "#0B2545", ratio: 60, role: "base"  },
      { hex: "#1D4E89", ratio: 30, role: "sub"   },
      { hex: "#D6E4F0", ratio: 10, role: "point" }],
    tags: ["금융", "앱", "블루", "신뢰감"] },

  { id: "ton-106", name: "그레이 & 골드 자산관리", scheme: "tone-on-tone",
    colors: [
      { hex: "#2B2B2B", ratio: 70, role: "base"  },
      { hex: "#B8860B", ratio: 30, role: "point" }],
    tags: ["금융","비즈니스","고급","무채색","오렌지"] },

  // ─────────── 톤인톤 · 실사용 태그 보강 ───────────
  { id: "tin-054", name: "모던 오피스 그레이블루", scheme: "tone-in-tone",
    colors: [
      { hex: "#475569", ratio: 60, role: "base"  },
      { hex: "#0EA5E9", ratio: 30, role: "sub"   },
      { hex: "#F1F5F9", ratio: 10, role: "point" }],
    tags: ["비즈니스","브랜딩","블루","모던","시안"] },

  { id: "tin-055", name: "민트 & 크림 디저트", scheme: "tone-in-tone",
    colors: [
      { hex: "#A8D5BA", ratio: 60, role: "base"  },
      { hex: "#FBF3E7", ratio: 30, role: "sub"   },
      { hex: "#E8C4A0", ratio: 10, role: "point" }],
    tags: ["카페","푸드","그린","파스텔","무채색"] },

  { id: "tin-056", name: "올리브 & 테라코타 비스트로", scheme: "tone-in-tone",
    colors: [
      { hex: "#6B7A3A", ratio: 60, role: "base"  },
      { hex: "#C1663A", ratio: 30, role: "sub"   },
      { hex: "#F2E4D0", ratio: 10, role: "point" }],
    tags: ["카페","푸드","오렌지","웜톤","내추럴","그린"] },

  { id: "tin-057", name: "딸기 우유 디저트샵", scheme: "tone-in-tone",
    colors: [
      { hex: "#F8C4D4", ratio: 60, role: "base"  },
      { hex: "#FFF3E4", ratio: 30, role: "sub"   },
      { hex: "#D98695", ratio: 10, role: "point" }],
    tags: ["카페","푸드","핑크","파스텔","사랑스러움","무채색"] },

  { id: "tin-058", name: "세이지 & 오트 카페", scheme: "tone-in-tone",
    colors: [
      { hex: "#7C9470", ratio: 60, role: "base"  },
      { hex: "#D9C7A3", ratio: 30, role: "sub"   },
      { hex: "#F5F0E6", ratio: 10, role: "point" }],
    tags: ["카페","푸드","그린","내추럴","뮤트","오렌지"] },

  { id: "tin-059", name: "바이올렛 & 핑크 앱 UI", scheme: "tone-in-tone",
    colors: [
      { hex: "#7C3AED", ratio: 60, role: "base"  },
      { hex: "#EC4899", ratio: 30, role: "sub"   },
      { hex: "#FDF4FF", ratio: 10, role: "point" }],
    tags: ["테크","앱","퍼플","비비드","트렌디","핑크"] },

  { id: "tin-060", name: "라이트 미니멀 SaaS", scheme: "tone-in-tone",
    colors: [
      { hex: "#F8FAFC", ratio: 50, role: "base"  },
      { hex: "#1E293B", ratio: 35, role: "sub"   },
      { hex: "#6366F1", ratio: 15, role: "point" }],
    tags: ["테크","웹","미니멀","무채색","블루"] },

  { id: "tin-061", name: "샴페인 뷰티 브랜딩", scheme: "tone-in-tone",
    colors: [
      { hex: "#F5E6D3", ratio: 60, role: "base"  },
      { hex: "#E8B4B8", ratio: 30, role: "sub"   },
      { hex: "#B08D57", ratio: 10, role: "point" }],
    tags: ["뷰티","럭셔리","파스텔","우아함","오렌지","레드"] },

  { id: "tin-062", name: "플럼 & 로즈 코스메틱", scheme: "tone-in-tone",
    colors: [
      { hex: "#5B2A5C", ratio: 60, role: "base"  },
      { hex: "#D68FA0", ratio: 30, role: "sub"   },
      { hex: "#F7E1E8", ratio: 10, role: "point" }],
    tags: ["뷰티","럭셔리","퍼플","우아함","레드"] },

  { id: "tin-063", name: "블러쉬 & 아이보리 웨딩", scheme: "tone-in-tone",
    colors: [
      { hex: "#EED3E0", ratio: 60, role: "base"  },
      { hex: "#FFF8F0", ratio: 30, role: "sub"   },
      { hex: "#D4AF8B", ratio: 10, role: "point" }],
    tags: ["웨딩","핑크","파스텔","로맨틱","무채색"] },

  { id: "tin-064", name: "세이지 & 아이보리 가든웨딩", scheme: "tone-in-tone",
    colors: [
      { hex: "#A8B79A", ratio: 60, role: "base"  },
      { hex: "#FFF8F0", ratio: 30, role: "sub"   },
      { hex: "#E8C4A0", ratio: 10, role: "point" }],
    tags: ["웨딩","그린","내추럴","파스텔","무채색"] },

  { id: "tin-065", name: "더스티블루 & 로즈 웨딩", scheme: "tone-in-tone",
    colors: [
      { hex: "#A3B3C2", ratio: 60, role: "base"  },
      { hex: "#E8C4C4", ratio: 30, role: "sub"   },
      { hex: "#FFF8F0", ratio: 10, role: "point" }],
    tags: ["웨딩","블루","파스텔","로맨틱","레드"] },

  { id: "tin-066", name: "라벤더 & 그레이 웨딩", scheme: "tone-in-tone",
    colors: [
      { hex: "#C4B5D4", ratio: 60, role: "base"  },
      { hex: "#E5E1E8", ratio: 30, role: "sub"   },
      { hex: "#8A7B99", ratio: 10, role: "point" }],
    tags: ["웨딩", "퍼플", "파스텔", "몽환적"] },

  { id: "tin-067", name: "피치 & 코럴 웨딩", scheme: "tone-in-tone",
    colors: [
      { hex: "#F6C4A5", ratio: 60, role: "base"  },
      { hex: "#FFF0E5", ratio: 30, role: "sub"   },
      { hex: "#E8927C", ratio: 10, role: "point" }],
    tags: ["웨딩","오렌지","화사","봄","무채색"] },

  { id: "tin-068", name: "딥그린 & 크림 웨딩", scheme: "tone-in-tone",
    colors: [
      { hex: "#2F4F3A", ratio: 60, role: "base"  },
      { hex: "#FFF8F0", ratio: 30, role: "sub"   },
      { hex: "#C9A227", ratio: 10, role: "point" }],
    tags: ["웨딩","그린","고급","무채색"] },

  { id: "tin-069", name: "파우더핑크 & 그레이 웨딩", scheme: "tone-in-tone",
    colors: [
      { hex: "#E6C7D9", ratio: 60, role: "base"  },
      { hex: "#D9D4D0", ratio: 30, role: "sub"   },
      { hex: "#B08D57", ratio: 10, role: "point" }],
    tags: ["웨딩","핑크","파스텔","우아함","무채색"] },

  { id: "tin-070", name: "민트 & 화이트 헬스케어", scheme: "tone-in-tone",
    colors: [
      { hex: "#7ED7AB", ratio: 60, role: "base"  },
      { hex: "#F5FBFA", ratio: 30, role: "sub"   },
      { hex: "#3D9C8F", ratio: 10, role: "point" }],
    tags: ["헬스","그린","파스텔","신선","무채색"] },

  // ─────────── 완전 보색 · 실사용 태그 보강 ───────────
  { id: "com-051", name: "차콜 & 골드 브랜딩", scheme: "complementary",
    colors: [
      { hex: "#1C1C1E", ratio: 70, role: "base"  },
      { hex: "#C9A227", ratio: 30, role: "point" }],
    tags: ["비즈니스","브랜딩","고급","무채색","옐로우"] },

  { id: "com-052", name: "네이비 & 민트 스타트업", scheme: "complementary",
    colors: [
      { hex: "#0F2A47", ratio: 60, role: "base"  },
      { hex: "#3ECF8E", ratio: 30, role: "sub"   },
      { hex: "#F4F7F5", ratio: 10, role: "point" }],
    tags: ["비즈니스","브랜딩","테크","블루","그린"] },

  { id: "com-053", name: "그레이 & 오렌지 브랜딩", scheme: "complementary",
    colors: [
      { hex: "#2B2D31", ratio: 60, role: "base"  },
      { hex: "#F97316", ratio: 30, role: "sub"   },
      { hex: "#F5F5F4", ratio: 10, role: "point" }],
    tags: ["비즈니스","브랜딩","오렌지","모던","무채색"] },

  { id: "com-054", name: "레드 브릭 로스터리", scheme: "complementary",
    colors: [
      { hex: "#7A3B2E", ratio: 60, role: "base"  },
      { hex: "#4A6B5A", ratio: 30, role: "sub"   },
      { hex: "#F0E4D3", ratio: 10, role: "point" }],
    tags: ["카페","푸드","레드","웜톤","빈티지","그린"] },

  { id: "com-055", name: "레몬 & 민트 브런치", scheme: "complementary",
    colors: [
      { hex: "#F3D34A", ratio: 60, role: "base"  },
      { hex: "#4F8A6D", ratio: 30, role: "sub"   },
      { hex: "#FFFBF0", ratio: 10, role: "point" }],
    tags: ["카페","푸드","옐로우","상큼","화사","그린"] },

  { id: "com-056", name: "토마토 & 바질 레스토랑", scheme: "complementary",
    colors: [
      { hex: "#C0392B", ratio: 60, role: "base"  },
      { hex: "#4A7C59", ratio: 30, role: "sub"   },
      { hex: "#FBF6EE", ratio: 10, role: "point" }],
    tags: ["카페","푸드","레드","웜톤","그린"] },

  { id: "com-057", name: "오렌지 & 네이비 프로덕트", scheme: "complementary",
    colors: [
      { hex: "#0F1E3D", ratio: 60, role: "base"  },
      { hex: "#F97316", ratio: 30, role: "sub"   },
      { hex: "#F8FAFC", ratio: 10, role: "point" }],
    tags: ["테크","웹","앱","오렌지","블루"] },

  { id: "com-058", name: "틸 & 코럴 앱 UI", scheme: "complementary",
    colors: [
      { hex: "#0D9488", ratio: 60, role: "base"  },
      { hex: "#FB7185", ratio: 30, role: "sub"   },
      { hex: "#F0FDFA", ratio: 10, role: "point" }],
    tags: ["테크","앱","시안","트렌디","레드"] },

  { id: "com-059", name: "옐로우 액센트 대시보드", scheme: "complementary",
    colors: [
      { hex: "#1F2937", ratio: 60, role: "base"  },
      { hex: "#FACC15", ratio: 30, role: "sub"   },
      { hex: "#F9FAFB", ratio: 10, role: "point" }],
    tags: ["테크","웹","앱","옐로우","모던","블루"] },

  { id: "com-060", name: "다크 게이밍 UI", scheme: "complementary",
    colors: [
      { hex: "#0A0E14", ratio: 60, role: "base"  },
      { hex: "#1A1F2B", ratio: 25, role: "sub"   },
      { hex: "#00E5FF", ratio: 15, role: "point" }],
    tags: ["다크모드","테크","시안","비비드","무채색","블루"] },

  { id: "com-061", name: "다크 오렌지 액센트", scheme: "complementary",
    colors: [
      { hex: "#121212", ratio: 60, role: "base"  },
      { hex: "#242424", ratio: 25, role: "sub"   },
      { hex: "#FF8A3D", ratio: 15, role: "point" }],
    tags: ["다크모드","앱","오렌지","무채색"] },

  { id: "com-062", name: "다크 핑크 크리에이티브", scheme: "complementary",
    colors: [
      { hex: "#18121A", ratio: 60, role: "base"  },
      { hex: "#2B1F2E", ratio: 25, role: "sub"   },
      { hex: "#F472B6", ratio: 15, role: "point" }],
    tags: ["다크모드","앱","핑크","퍼플"] },

  { id: "com-063", name: "코랄 & 민트 피트니스", scheme: "complementary",
    colors: [
      { hex: "#FF6B6B", ratio: 60, role: "base"  },
      { hex: "#4ECDC4", ratio: 30, role: "sub"   },
      { hex: "#FFFFFF", ratio: 10, role: "point" }],
    tags: ["헬스","앱","비비드","에너지","레드","시안"] },

  { id: "com-064", name: "피치 & 세이지 웰빙", scheme: "complementary",
    colors: [
      { hex: "#F4B183", ratio: 60, role: "base"  },
      { hex: "#87A96B", ratio: 30, role: "sub"   },
      { hex: "#FAF6F0", ratio: 10, role: "point" }],
    tags: ["헬스","오렌지","내추럴","상큼","그린"] },

  { id: "com-065", name: "네이비 & 라임 핀테크앱", scheme: "complementary",
    colors: [
      { hex: "#0F2A47", ratio: 60, role: "base"  },
      { hex: "#C6F135", ratio: 30, role: "sub"   },
      { hex: "#F7FAF0", ratio: 10, role: "point" }],
    tags: ["금융","테크","앱","블루","그린"] },

  { id: "com-066", name: "차콜 & 민트 인베스트먼트", scheme: "complementary",
    colors: [
      { hex: "#1F2937", ratio: 60, role: "base"  },
      { hex: "#34D399", ratio: 30, role: "sub"   },
      { hex: "#F0FDF4", ratio: 10, role: "point" }],
    tags: ["금융","테크","그린","모던","블루"] },

  // ─────────── 톤인톤 · 계열쌍 공백 보강 (옐로우×퍼플/시안, 시안×핑크/퍼플, 레드×블루, 옐로우×핑크, 오렌지×퍼플, 그린×블루) ───────────
  { id: "tin-071", name: "파스텔 머스타드 & 플럼", scheme: "tone-in-tone",
    colors: [
      { hex: "#E4E2BE", ratio: 70, role: "base"  },
      { hex: "#D8BEE4", ratio: 30, role: "point" }],
    tags: ["옐로우", "퍼플", "파스텔"] },

  { id: "tin-072", name: "비비드 머스타드 & 플럼", scheme: "tone-in-tone",
    colors: [
      { hex: "#D8D031", ratio: 70, role: "base"  },
      { hex: "#A031D8", ratio: 30, role: "point" }],
    tags: ["옐로우", "퍼플", "비비드"] },

  { id: "tin-073", name: "딥 머스타드 & 플럼", scheme: "tone-in-tone",
    colors: [
      { hex: "#5F5B1C", ratio: 70, role: "base"  },
      { hex: "#481C5F", ratio: 30, role: "point" }],
    tags: ["옐로우", "퍼플", "딥"] },

  { id: "tin-074", name: "파스텔 레몬 & 트로피컬", scheme: "tone-in-tone",
    colors: [
      { hex: "#E4E2BE", ratio: 70, role: "base"  },
      { hex: "#BEE4E4", ratio: 30, role: "point" }],
    tags: ["옐로우", "시안", "파스텔"] },

  { id: "tin-075", name: "비비드 레몬 & 트로피컬", scheme: "tone-in-tone",
    colors: [
      { hex: "#D8D031", ratio: 70, role: "base"  },
      { hex: "#31D8D8", ratio: 30, role: "point" }],
    tags: ["옐로우", "시안", "비비드"] },

  { id: "tin-076", name: "딥 레몬 & 트로피컬", scheme: "tone-in-tone",
    colors: [
      { hex: "#5F5B1C", ratio: 70, role: "base"  },
      { hex: "#1C5F5F", ratio: 30, role: "point" }],
    tags: ["옐로우", "시안", "딥"] },

  { id: "tin-077", name: "파스텔 마이애미 틸 & 핑크", scheme: "tone-in-tone",
    colors: [
      { hex: "#BEE4E4", ratio: 70, role: "base"  },
      { hex: "#E4BED6", ratio: 30, role: "point" }],
    tags: ["시안", "핑크", "파스텔"] },

  { id: "tin-078", name: "비비드 마이애미 틸 & 핑크", scheme: "tone-in-tone",
    colors: [
      { hex: "#31D8D8", ratio: 70, role: "base"  },
      { hex: "#D8319B", ratio: 30, role: "point" }],
    tags: ["시안", "핑크", "비비드"] },

  { id: "tin-079", name: "딥 마이애미 틸 & 핑크", scheme: "tone-in-tone",
    colors: [
      { hex: "#1C5F5F", ratio: 70, role: "base"  },
      { hex: "#5F1C46", ratio: 30, role: "point" }],
    tags: ["시안", "핑크", "딥"] },

  { id: "tin-080", name: "파스텔 틸 & 라일락", scheme: "tone-in-tone",
    colors: [
      { hex: "#BEE4E4", ratio: 70, role: "base"  },
      { hex: "#D8BEE4", ratio: 30, role: "point" }],
    tags: ["시안", "퍼플", "파스텔"] },

  { id: "tin-081", name: "비비드 틸 & 라일락", scheme: "tone-in-tone",
    colors: [
      { hex: "#31D8D8", ratio: 70, role: "base"  },
      { hex: "#A031D8", ratio: 30, role: "point" }],
    tags: ["시안", "퍼플", "비비드"] },

  { id: "tin-082", name: "딥 틸 & 라일락", scheme: "tone-in-tone",
    colors: [
      { hex: "#1C5F5F", ratio: 70, role: "base"  },
      { hex: "#481C5F", ratio: 30, role: "point" }],
    tags: ["시안", "퍼플", "딥"] },

  { id: "tin-083", name: "파스텔 루비 & 코발트", scheme: "tone-in-tone",
    colors: [
      { hex: "#E4C1BE", ratio: 70, role: "base"  },
      { hex: "#BEC4E4", ratio: 30, role: "point" }],
    tags: ["레드", "블루", "파스텔"] },

  { id: "tin-084", name: "비비드 루비 & 코발트", scheme: "tone-in-tone",
    colors: [
      { hex: "#D83F31", ratio: 70, role: "base"  },
      { hex: "#314DD8", ratio: 30, role: "point" }],
    tags: ["레드", "블루", "비비드"] },

  { id: "tin-085", name: "딥 루비 & 코발트", scheme: "tone-in-tone",
    colors: [
      { hex: "#5F211C", ratio: 70, role: "base"  },
      { hex: "#1C275F", ratio: 30, role: "point" }],
    tags: ["레드", "블루", "딥"] },

  { id: "tin-086", name: "파스텔 머스타드 & 로즈", scheme: "tone-in-tone",
    colors: [
      { hex: "#E4E2BE", ratio: 70, role: "base"  },
      { hex: "#E4BED6", ratio: 30, role: "point" }],
    tags: ["옐로우", "핑크", "파스텔"] },

  { id: "tin-087", name: "비비드 머스타드 & 로즈", scheme: "tone-in-tone",
    colors: [
      { hex: "#D8D031", ratio: 70, role: "base"  },
      { hex: "#D8319B", ratio: 30, role: "point" }],
    tags: ["옐로우", "핑크", "비비드"] },

  { id: "tin-088", name: "딥 머스타드 & 로즈", scheme: "tone-in-tone",
    colors: [
      { hex: "#5F5B1C", ratio: 70, role: "base"  },
      { hex: "#5F1C46", ratio: 30, role: "point" }],
    tags: ["옐로우", "핑크", "딥"] },

  { id: "tin-089", name: "파스텔 테라코타 & 자수정", scheme: "tone-in-tone",
    colors: [
      { hex: "#E4D1BE", ratio: 70, role: "base"  },
      { hex: "#D8BEE4", ratio: 30, role: "point" }],
    tags: ["오렌지", "퍼플", "파스텔"] },

  { id: "tin-090", name: "비비드 테라코타 & 자수정", scheme: "tone-in-tone",
    colors: [
      { hex: "#D88531", ratio: 70, role: "base"  },
      { hex: "#A031D8", ratio: 30, role: "point" }],
    tags: ["오렌지", "퍼플", "비비드"] },

  { id: "tin-091", name: "딥 테라코타 & 자수정", scheme: "tone-in-tone",
    colors: [
      { hex: "#5F3D1C", ratio: 70, role: "base"  },
      { hex: "#481C5F", ratio: 30, role: "point" }],
    tags: ["오렌지", "퍼플", "딥"] },

  { id: "tin-092", name: "파스텔 세이지 & 코발트", scheme: "tone-in-tone",
    colors: [
      { hex: "#C1E4BE", ratio: 70, role: "base"  },
      { hex: "#BEC4E4", ratio: 30, role: "point" }],
    tags: ["그린", "블루", "파스텔"] },

  { id: "tin-093", name: "비비드 세이지 & 코발트", scheme: "tone-in-tone",
    colors: [
      { hex: "#3FD831", ratio: 70, role: "base"  },
      { hex: "#314DD8", ratio: 30, role: "point" }],
    tags: ["그린", "블루", "비비드"] },

  { id: "tin-094", name: "딥 세이지 & 코발트", scheme: "tone-in-tone",
    colors: [
      { hex: "#215F1C", ratio: 70, role: "base"  },
      { hex: "#1C275F", ratio: 30, role: "point" }],
    tags: ["그린", "블루", "딥"] },

  // ── 희소 태그 보강 ──────────────────────────────────────────
  // 아래 13개 태그는 조합이 1~2개뿐이라 필터로서 쓸모가 없었다.
  // 태그당 6~8개가 되도록 채운 묶음. (안정감·경쾌·석양·달콤·몽환·밀리터리
  //  ·화려함·캐주얼·SNS·시크·다채로움·에너지·레트로)

  /* 안정감 */
  { id: "ton-107", name: "네이비 안정 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#16324F", ratio: 60, role: "base"  },
      { hex: "#3E6B96", ratio: 30, role: "sub"   },
      { hex: "#C7DAEA", ratio: 10, role: "point" }],
    tags: ["안정감", "블루", "차분"] },

  { id: "ton-108", name: "포레스트 안정 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#22372B", ratio: 60, role: "base"  },
      { hex: "#4F7A5E", ratio: 30, role: "sub"   },
      { hex: "#C3D8C7", ratio: 10, role: "point" }],
    tags: ["안정감", "자연", "그린"] },

  { id: "ton-109", name: "스톤 그레이 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#33383D", ratio: 60, role: "base"  },
      { hex: "#6B747D", ratio: 30, role: "sub"   },
      { hex: "#D2D7DC", ratio: 10, role: "point" }],
    tags: ["안정감", "시크", "무채색"] },

  { id: "ton-110", name: "브라운 안정 2톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#3A2C23", ratio: 70, role: "base"  },
      { hex: "#B9A08A", ratio: 30, role: "point" }],
    tags: ["안정감","우드","웜톤","오렌지"] },

  { id: "com-067", name: "딥틸 & 테라코타", scheme: "complementary",
    colors: [
      { hex: "#14453F", ratio: 60, role: "base"  },
      { hex: "#B5643F", ratio: 30, role: "sub"   },
      { hex: "#F0E3D6", ratio: 10, role: "point" }],
    tags: ["안정감","대비","어스톤","시안","오렌지"] },

  /* 경쾌 */
  { id: "ton-111", name: "스카이 경쾌 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#1C7ED6", ratio: 60, role: "base"  },
      { hex: "#66B2F2", ratio: 30, role: "sub"   },
      { hex: "#D5EBFF", ratio: 10, role: "point" }],
    tags: ["경쾌", "블루", "화사"] },

  { id: "tin-095", name: "레몬 & 스카이", scheme: "tone-in-tone",
    colors: [
      { hex: "#FFD93D", ratio: 60, role: "base"  },
      { hex: "#4DA8DA", ratio: 30, role: "sub"   },
      { hex: "#FF6B6B", ratio: 10, role: "point" }],
    tags: ["경쾌","비비드","팝","옐로우","블루"] },

  { id: "tin-096", name: "민트 팝 3색", scheme: "tone-in-tone",
    colors: [
      { hex: "#6BE3B0", ratio: 60, role: "base"  },
      { hex: "#FFD166", ratio: 30, role: "sub"   },
      { hex: "#FF7BA9", ratio: 10, role: "point" }],
    tags: ["경쾌","달콤","팝","그린","오렌지"] },

  { id: "com-068", name: "오렌지 & 시안 경쾌", scheme: "complementary",
    colors: [
      { hex: "#FF8C42", ratio: 60, role: "base"  },
      { hex: "#3AC0D9", ratio: 30, role: "sub"   },
      { hex: "#FFF3E0", ratio: 10, role: "point" }],
    tags: ["경쾌","에너지","대비","오렌지","시안"] },

  /* 석양 */
  { id: "ton-112", name: "노을 오렌지 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#7A2E12", ratio: 60, role: "base"  },
      { hex: "#C75B2A", ratio: 30, role: "sub"   },
      { hex: "#F5C9A3", ratio: 10, role: "point" }],
    tags: ["석양","웜톤","깊이감","오렌지"] },

  { id: "ton-113", name: "황혼 핑크 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#8E4C6E", ratio: 60, role: "base"  },
      { hex: "#E2717E", ratio: 30, role: "sub"   },
      { hex: "#F7A399", ratio: 10, role: "point" }],
    tags: ["석양","로맨틱","여성적","핑크","레드"] },

  { id: "tin-097", name: "선셋 글로우 3색", scheme: "tone-in-tone",
    colors: [
      { hex: "#FFB25B", ratio: 60, role: "base"  },
      { hex: "#F4713E", ratio: 30, role: "sub"   },
      { hex: "#C2426B", ratio: 10, role: "point" }],
    tags: ["석양","따뜻함","웜톤","오렌지"] },

  { id: "tin-098", name: "석양 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#FFD9A0", ratio: 30, role: "base"  },
      { hex: "#FFAA6B", ratio: 25, role: "sub"   },
      { hex: "#F4735E", ratio: 20, role: "sub"   },
      { hex: "#C4527F", ratio: 15, role: "sub"   },
      { hex: "#6B3A73", ratio: 10, role: "point" }],
    tags: ["석양","다채로움","몽환","오렌지"] },

  { id: "com-069", name: "석양 & 야경", scheme: "complementary",
    colors: [
      { hex: "#E8703A", ratio: 60, role: "base"  },
      { hex: "#2B3A67", ratio: 30, role: "sub"   },
      { hex: "#FFE0C2", ratio: 10, role: "point" }],
    tags: ["석양","화려함","대비","오렌지","블루"] },

  /* 달콤 */
  { id: "ton-114", name: "딸기 우유 2톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#A84763", ratio: 70, role: "base"  },
      { hex: "#FFF0F3", ratio: 30, role: "point" }],
    tags: ["달콤","파스텔","여성적","핑크","무채색"] },

  { id: "ton-115", name: "카라멜 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#4A2C1A", ratio: 60, role: "base"  },
      { hex: "#A5734A", ratio: 30, role: "sub"   },
      { hex: "#EBCFA8", ratio: 10, role: "point" }],
    tags: ["달콤","우드","웜톤","오렌지"] },

  { id: "tin-099", name: "코튼 캔디 3색", scheme: "tone-in-tone",
    colors: [
      { hex: "#FFC2E2", ratio: 60, role: "base"  },
      { hex: "#C5B3F0", ratio: 30, role: "sub"   },
      { hex: "#A8DCF0", ratio: 10, role: "point" }],
    tags: ["달콤","파스텔","몽환","핑크","블루"] },

  { id: "tin-100", name: "마카롱 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#FFE0E9", ratio: 30, role: "base"  },
      { hex: "#FFE8CC", ratio: 25, role: "sub"   },
      { hex: "#E8F6D0", ratio: 20, role: "sub"   },
      { hex: "#D4E9F7", ratio: 15, role: "sub"   },
      { hex: "#6E4152", ratio: 10, role: "point" }],
    tags: ["달콤","파스텔","다채로움","핑크","오렌지"] },

  /* 몽환 */
  { id: "ton-116", name: "라벤더 몽환 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#3B2A5E", ratio: 60, role: "base"  },
      { hex: "#7A66B5", ratio: 30, role: "sub"   },
      { hex: "#DCD2F0", ratio: 10, role: "point" }],
    tags: ["몽환","퍼플","차분","블루"] },

  { id: "ton-117", name: "퍼플 미스트 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#3E2F6B", ratio: 60, role: "base"  },
      { hex: "#7E6BB8", ratio: 30, role: "sub"   },
      { hex: "#E6DFF5", ratio: 10, role: "point" }],
    tags: ["몽환","시크","퍼플","블루"] },

  { id: "tin-101", name: "미스티 드림 3색", scheme: "tone-in-tone",
    colors: [
      { hex: "#A9C4E8", ratio: 60, role: "base"  },
      { hex: "#C7B3E0", ratio: 30, role: "sub"   },
      { hex: "#E8C2D6", ratio: 10, role: "point" }],
    tags: ["몽환","파스텔","화사","블루","퍼플"] },

  /* 밀리터리 */
  { id: "ton-118", name: "카키 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#3C4032", ratio: 60, role: "base"  },
      { hex: "#6E7558", ratio: 30, role: "sub"   },
      { hex: "#C3C7AE", ratio: 10, role: "point" }],
    tags: ["밀리터리", "내추럴", "그린"] },

  { id: "ton-119", name: "올리브 드랩 2톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#454B33", ratio: 70, role: "base"  },
      { hex: "#C5CCAE", ratio: 30, role: "point" }],
    tags: ["밀리터리", "그린", "차분"] },

  { id: "ton-120", name: "네이비 밀리터리 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#23303A", ratio: 60, role: "base"  },
      { hex: "#4E6472", ratio: 30, role: "sub"   },
      { hex: "#AEBCC4", ratio: 10, role: "point" }],
    tags: ["밀리터리", "안정감", "블루"] },

  { id: "tin-102", name: "필드 카키 & 샌드", scheme: "tone-in-tone",
    colors: [
      { hex: "#3A3E2A", ratio: 70, role: "base"  },
      { hex: "#B3A87C", ratio: 30, role: "point" }],
    tags: ["밀리터리","캐주얼","어스톤","그린","옐로우"] },

  { id: "com-070", name: "올리브 & 바이올렛", scheme: "complementary",
    colors: [
      { hex: "#545C3E", ratio: 60, role: "base"  },
      { hex: "#58407F", ratio: 30, role: "sub"   },
      { hex: "#DCD8C4", ratio: 10, role: "point" }],
    tags: ["밀리터리","개성","대비","그린","퍼플"] },

  /* 화려함 */
  { id: "ton-121", name: "골드 럭셔리 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#2E2411", ratio: 60, role: "base"  },
      { hex: "#A8862F", ratio: 30, role: "sub"   },
      { hex: "#F0DFA8", ratio: 10, role: "point" }],
    tags: ["화려함","고급","웜톤","오렌지"] },

  { id: "tin-103", name: "주얼 톤 3색", scheme: "tone-in-tone",
    colors: [
      { hex: "#A3195B", ratio: 60, role: "base"  },
      { hex: "#1B7A6E", ratio: 30, role: "sub"   },
      { hex: "#E3B23C", ratio: 10, role: "point" }],
    tags: ["화려함","비비드","다채로움","핑크","시안"] },

  { id: "tin-104", name: "보석함 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#7B1E5C", ratio: 30, role: "base"  },
      { hex: "#1E4E7B", ratio: 25, role: "sub"   },
      { hex: "#1E7B5C", ratio: 20, role: "sub"   },
      { hex: "#EFD98A", ratio: 15, role: "sub"   },
      { hex: "#B22A4E", ratio: 10, role: "point" }],
    tags: ["화려함","다채로움","고급","핑크","블루"] },

  { id: "com-071", name: "에메랄드 & 루비", scheme: "complementary",
    colors: [
      { hex: "#0F5C4A", ratio: 60, role: "base"  },
      { hex: "#A81E45", ratio: 30, role: "sub"   },
      { hex: "#F5F0E1", ratio: 10, role: "point" }],
    tags: ["화려함","고급","대비","시안","핑크"] },

  /* 캐주얼 */
  { id: "ton-122", name: "워시드 데님 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#2F4A63", ratio: 60, role: "base"  },
      { hex: "#7391AD", ratio: 30, role: "sub"   },
      { hex: "#CBDCE8", ratio: 10, role: "point" }],
    tags: ["캐주얼", "블루", "내추럴"] },

  { id: "com-072", name: "데님 & 머스터드", scheme: "complementary",
    colors: [
      { hex: "#3E5C76", ratio: 60, role: "base"  },
      { hex: "#D9A441", ratio: 30, role: "sub"   },
      { hex: "#F0EBE3", ratio: 10, role: "point" }],
    tags: ["캐주얼","레트로","대비","블루","오렌지"] },

  { id: "com-073", name: "티셔츠 3색", scheme: "complementary",
    colors: [
      { hex: "#E8E3D9", ratio: 60, role: "base"  },
      { hex: "#5B7B7A", ratio: 30, role: "sub"   },
      { hex: "#D96C4F", ratio: 10, role: "point" }],
    tags: ["캐주얼","편안함","내추럴","오렌지","시안"] },

  { id: "com-074", name: "코랄 & 데님 캐주얼", scheme: "complementary",
    colors: [
      { hex: "#E9705B", ratio: 60, role: "base"  },
      { hex: "#3D5A80", ratio: 30, role: "sub"   },
      { hex: "#F2E9E4", ratio: 10, role: "point" }],
    tags: ["캐주얼","경쾌","대비","레드","블루"] },

  /* SNS */
  { id: "ton-123", name: "퍼플 SNS 앱", scheme: "tone-on-tone",
    colors: [
      { hex: "#4C1D95", ratio: 60, role: "base"  },
      { hex: "#8B5CF6", ratio: 30, role: "sub"   },
      { hex: "#EDE9FE", ratio: 10, role: "point" }],
    tags: ["SNS","앱","퍼플","블루"] },

  { id: "tin-105", name: "SNS 팝 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#FF5E7E", ratio: 30, role: "base"  },
      { hex: "#FFB84D", ratio: 25, role: "sub"   },
      { hex: "#FFE66D", ratio: 20, role: "sub"   },
      { hex: "#5AD8A6", ratio: 15, role: "sub"   },
      { hex: "#2749B8", ratio: 10, role: "point" }],
    tags: ["SNS","경쾌","다채로움","레드","오렌지"] },

  { id: "tin-106", name: "그라데이션 SNS 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#FF6A88", ratio: 30, role: "base"  },
      { hex: "#FF99AC", ratio: 25, role: "sub"   },
      { hex: "#C86DD7", ratio: 20, role: "sub"   },
      { hex: "#7F7FD5", ratio: 15, role: "sub"   },
      { hex: "#3B3A8C", ratio: 10, role: "point" }],
    tags: ["SNS","몽환","다채로움","레드"] },

  { id: "com-075", name: "핑크 & 틸 SNS", scheme: "complementary",
    colors: [
      { hex: "#FF4D8D", ratio: 60, role: "base"  },
      { hex: "#22C1B8", ratio: 30, role: "sub"   },
      { hex: "#FFF5F8", ratio: 10, role: "point" }],
    tags: ["SNS","앱","비비드","핑크","시안"] },

  /* 시크 */
  { id: "ton-124", name: "블랙 & 샴페인 2톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#1A1A1A", ratio: 70, role: "base"  },
      { hex: "#C9BCA5", ratio: 30, role: "point" }],
    tags: ["시크","고급","무채색","오렌지"] },

  { id: "ton-125", name: "그레이지 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#4A3F3A", ratio: 60, role: "base"  },
      { hex: "#8C8078", ratio: 30, role: "sub"   },
      { hex: "#E5DED8", ratio: 10, role: "point" }],
    tags: ["시크","차분","어스톤","오렌지","무채색"] },

  /* 에너지 */
  { id: "tin-107", name: "네온 스포츠 3색", scheme: "tone-in-tone",
    colors: [
      { hex: "#D7FF1E", ratio: 60, role: "base"  },
      { hex: "#1EC8FF", ratio: 30, role: "sub"   },
      { hex: "#FF1E6B", ratio: 10, role: "point" }],
    tags: ["에너지","경쾌","비비드","그린","시안"] },

  { id: "com-076", name: "레드 & 그린 에너지", scheme: "complementary",
    colors: [
      { hex: "#E23B2E", ratio: 60, role: "base"  },
      { hex: "#1FA774", ratio: 30, role: "sub"   },
      { hex: "#FFF1E6", ratio: 10, role: "point" }],
    tags: ["에너지","비비드","대비","레드","그린"] },

  { id: "com-077", name: "블루 & 오렌지 스포츠", scheme: "complementary",
    colors: [
      { hex: "#0B3C8C", ratio: 60, role: "base"  },
      { hex: "#FF7A00", ratio: 30, role: "sub"   },
      { hex: "#F2F5FA", ratio: 10, role: "point" }],
    tags: ["에너지","헬스","대비","블루","오렌지"] },

  /* 레트로 */
  { id: "ton-126", name: "빈티지 브라운 3톤", scheme: "tone-on-tone",
    colors: [
      { hex: "#3B2A20", ratio: 60, role: "base"  },
      { hex: "#8A6A50", ratio: 30, role: "sub"   },
      { hex: "#DCC9B0", ratio: 10, role: "point" }],
    tags: ["레트로","빈티지","우드","오렌지"] },

  { id: "tin-108", name: "70년대 어스 5색", scheme: "tone-in-tone",
    colors: [
      { hex: "#A34B2B", ratio: 30, role: "base"  },
      { hex: "#C98B3A", ratio: 25, role: "sub"   },
      { hex: "#D9C27E", ratio: 20, role: "sub"   },
      { hex: "#6E7B4E", ratio: 15, role: "sub"   },
      { hex: "#3E4A3D", ratio: 10, role: "point" }],
    tags: ["레트로","빈티지","어스톤","오렌지"] },

  { id: "com-078", name: "머스터드 & 인디고 레트로", scheme: "complementary",
    colors: [
      { hex: "#D8A215", ratio: 60, role: "base"  },
      { hex: "#2A4B7B", ratio: 30, role: "sub"   },
      { hex: "#F4EDDC", ratio: 10, role: "point" }],
    tags: ["레트로","빈티지","대비","오렌지","블루"] },

];

// 단일 파일로 쓸 땐 위 배열만 index.html의 <script>에 옮겨도 됨.
if (typeof module !== "undefined") module.exports = RAW_PALETTES;
