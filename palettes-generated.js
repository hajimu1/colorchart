// ============================================================
//  자동 생성 팔레트 600개 — 계열/유형 불균형 보정용
//  - 색상환 규칙 기반: 톤온톤=명도 스케일 / 톤인톤=톤 고정 색상 회전 / 보색=180° 쌍
//  - 결손이 큰 (계열 × 유형) 구간부터 채움. 색 개수는 2·3·5색만(4색 편중 상쇄).
//  - 전부 기존 데이터와 hex 조합 중복 없음. 의도한 계열로 분류되는 것만 채택.
//  - 재생성 스크립트: scratchpad/generate.js (시드 고정 = 결과 재현 가능)
//  - 손 큐레이션 조합은 palettes-data.js 에 있음 (이 파일과 분리 관리)
// ============================================================

const GENERATED_PALETTES = [

  { id: "gen-001", name: "석류 곁의 연어색", searchAliases: ["레드 2톤 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#9D1617", ratio: 70, role: "base"  },
      { hex: "#E38D8C", ratio: 30, role: "point" }],
    tags: ["레드", "웜톤", "비비드", "톤온톤"] },

  { id: "gen-002", name: "버건디 위에 벚꽃색 한 점", searchAliases: ["버건디 3색 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#731E1C", ratio: 60, role: "base"  },
      { hex: "#C85059", ratio: 30, role: "sub"   },
      { hex: "#EBCCCC", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "톤온톤"] },

  { id: "gen-003", name: "검붉은색의 석회색 테두리", searchAliases: ["버건디 5색 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#511C15", ratio: 30, role: "base"  },
      { hex: "#8D3A2A", ratio: 25, role: "sub"   },
      { hex: "#C14A48", ratio: 20, role: "sub"   },
      { hex: "#D59790", ratio: 15, role: "sub"   },
      { hex: "#EACECD", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥", "톤온톤"] },

  { id: "gen-004", name: "적갈색 바탕의 밝은 연어색", searchAliases: ["버건디 2톤"], scheme: "tone-on-tone",
    colors: [
      { hex: "#913321", ratio: 70, role: "base"  },
      { hex: "#DC9E93", ratio: 30, role: "point" }],
    tags: ["레드", "웜톤", "톤온톤"] },

  { id: "gen-005", name: "와인 위에 벚꽃색 한 점", searchAliases: ["버건디 3색 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#830C20", ratio: 60, role: "base"  },
      { hex: "#DF3958", ratio: 30, role: "sub"   },
      { hex: "#F1C6CE", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "비비드", "톤온톤"] },

  { id: "gen-006", name: "검붉은색에서 벚꽃색까지", searchAliases: ["버건디 5색 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#5A0C1C", ratio: 30, role: "base"  },
      { hex: "#9D1B33", ratio: 25, role: "sub"   },
      { hex: "#D4354B", ratio: 20, role: "sub"   },
      { hex: "#DF8696", ratio: 15, role: "sub"   },
      { hex: "#EEC9CE", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥", "톤온톤"] },

  { id: "gen-007", name: "적갈색 바탕의 모래색", searchAliases: ["버건디 × 애프리콧 2톤"], scheme: "tone-on-tone",
    colors: [
      { hex: "#873B2B", ratio: 70, role: "base"  },
      { hex: "#D5AC9A", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","톤온톤","오렌지"] },

  { id: "gen-008", name: "검붉은색과 연어색", searchAliases: ["버건디 3색 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#52160A", ratio: 60, role: "base"  },
      { hex: "#C14B25", ratio: 30, role: "sub"   },
      { hex: "#E4A59B", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥", "톤온톤"] },

  { id: "gen-009", name: "검붉은색과 와인, 벚꽃색", searchAliases: ["버건디 5색 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#511523", ratio: 30, role: "base"  },
      { hex: "#8E2935", ratio: 25, role: "sub"   },
      { hex: "#C2475C", ratio: 20, role: "sub"   },
      { hex: "#D590A1", ratio: 15, role: "sub"   },
      { hex: "#EACDD1", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥", "톤온톤"] },

  { id: "gen-010", name: "석류 위에 겹친 연어색", searchAliases: ["레드 2톤 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#9C2517", ratio: 70, role: "base"  },
      { hex: "#E3978D", ratio: 30, role: "point" }],
    tags: ["레드", "웜톤", "비비드", "톤온톤"] },

  { id: "gen-011", name: "검붉은색과 벚꽃색 사이", searchAliases: ["버건디 3색 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#63170D", ratio: 60, role: "base"  },
      { hex: "#D43F2B", ratio: 30, role: "sub"   },
      { hex: "#EABBB8", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥", "톤온톤"] },

  { id: "gen-012", name: "검붉은색 곁의 벚꽃색", searchAliases: ["버건디 5색 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#5D1609", ratio: 30, role: "base"  },
      { hex: "#A12116", ratio: 25, role: "sub"   },
      { hex: "#DA5130", ratio: 20, role: "sub"   },
      { hex: "#E28C83", ratio: 15, role: "sub"   },
      { hex: "#EFC9C7", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥", "톤온톤"] },

  { id: "gen-013", name: "버건디의 자두 테두리", searchAliases: ["버건디 × 와인 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#6E1C2E", ratio: 70, role: "base"  },
      { hex: "#74225A", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","딥","톤인톤","핑크"] },

  { id: "gen-014", name: "주홍 위에 자홍 한 점", searchAliases: ["레드 × 퍼플 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E75953", ratio: 60, role: "base"  },
      { hex: "#E866B3", ratio: 30, role: "sub"   },
      { hex: "#B930E1", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","톤인톤","핑크"] },

  { id: "gen-015", name: "테라코타와 더스티로즈, 자수정", searchAliases: ["레드 × 블루 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C27468", ratio: 30, role: "base"  },
      { hex: "#C8829A", ratio: 25, role: "sub"   },
      { hex: "#C178B3", ratio: 20, role: "sub"   },
      { hex: "#AC73C1", ratio: 15, role: "sub"   },
      { hex: "#9B89CE", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","톤인톤","핑크"] },

  { id: "gen-016", name: "딸기우유에서 난초색까지", searchAliases: ["로즈 × 핑크 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#EBADAC", ratio: 70, role: "base"  },
      { hex: "#E374C9", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","파스텔","톤인톤","핑크"] },

  { id: "gen-017", name: "딸기우유 바탕의 라벤더", searchAliases: ["로즈 × 라일락 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E3ACA0", ratio: 60, role: "base"  },
      { hex: "#E49DC9", ratio: 30, role: "sub"   },
      { hex: "#CDAFE3", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","톤인톤","핑크"] },

  { id: "gen-018", name: "더스티로즈와 피스타치오", searchAliases: ["레드 × 민트 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C9837E", ratio: 30, role: "base"  },
      { hex: "#C2AE80", ratio: 25, role: "sub"   },
      { hex: "#B9CB94", ratio: 20, role: "sub"   },
      { hex: "#9AD698", ratio: 15, role: "sub"   },
      { hex: "#9ED6C0", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","톤인톤","오렌지"] },

  { id: "gen-019", name: "더스티로즈 위에 겹친 황토", searchAliases: ["로즈 × 오렌지 2톤 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CA97A2", ratio: 70, role: "base"  },
      { hex: "#BB9C71", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","뮤트","톤인톤","오렌지"] },

  { id: "gen-020", name: "진홍 바탕의 밝은 피스타치오", searchAliases: ["레드 × 옐로우 3색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#BC3B3D", ratio: 60, role: "base"  },
      { hex: "#B1723D", ratio: 30, role: "sub"   },
      { hex: "#C7C066", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","톤인톤","오렌지"] },

  { id: "gen-021", name: "더스티로즈와 연두 사이", searchAliases: ["레드 × 그린 5색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C0868D", ratio: 30, role: "base"  },
      { hex: "#B99E82", ratio: 25, role: "sub"   },
      { hex: "#ADBA64", ratio: 20, role: "sub"   },
      { hex: "#88BC79", ratio: 15, role: "sub"   },
      { hex: "#67B989", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","뮤트","톤인톤","오렌지"] },

  { id: "gen-022", name: "딸기우유의 옅고 짙은 결", searchAliases: ["로즈 × 블러시 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#DCADAB", ratio: 70, role: "base"  },
      { hex: "#D49EB5", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","파스텔","톤인톤","핑크"] },

  { id: "gen-023", name: "적갈색 곁의 보라", searchAliases: ["버건디 × 퍼플 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#7D4132", ratio: 60, role: "base"  },
      { hex: "#772F4E", ratio: 30, role: "sub"   },
      { hex: "#8D3593", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","톤인톤","핑크"] },

  { id: "gen-024", name: "더스티로즈의 민트 테두리", searchAliases: ["레드 × 시안 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D97E84", ratio: 30, role: "base"  },
      { hex: "#DD85D2", ratio: 25, role: "sub"   },
      { hex: "#A388D9", ratio: 20, role: "sub"   },
      { hex: "#A7C4E4", ratio: 15, role: "sub"   },
      { hex: "#7DDDC3", ratio: 10, role: "point" }],
    tags: ["레드","쿨톤","파스텔","톤인톤","핑크"] },

  { id: "gen-025", name: "연어색에서 황금빛까지", searchAliases: ["로즈 × 오렌지 2톤 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E18B90", ratio: 70, role: "base"  },
      { hex: "#E5C66C", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","파스텔","톤인톤","오렌지"] },

  { id: "gen-026", name: "더스티로즈 바탕의 오트밀", searchAliases: ["로즈 × 그린 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D68585", ratio: 60, role: "base"  },
      { hex: "#DDC498", ratio: 30, role: "sub"   },
      { hex: "#BBD76F", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","파스텔","톤인톤","오렌지"] },

  { id: "gen-027", name: "진홍 바탕의 밝은 연두", searchAliases: ["레드 × 그린 5색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CA302A", ratio: 30, role: "base"  },
      { hex: "#D19254", ratio: 25, role: "sub"   },
      { hex: "#B0AC33", ratio: 20, role: "sub"   },
      { hex: "#93CB4B", ratio: 15, role: "sub"   },
      { hex: "#40C132", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","톤인톤","오렌지"] },

  { id: "gen-028", name: "진홍과 난초색", searchAliases: ["레드 × 퍼플 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#B13D49", ratio: 70, role: "base"  },
      { hex: "#B969C3", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","톤인톤","퍼플"] },

  { id: "gen-029", name: "주홍 위에 라임 한 점", searchAliases: ["레드 × 옐로우 3색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#DB542C", ratio: 60, role: "base"  },
      { hex: "#C7982D", ratio: 30, role: "sub"   },
      { hex: "#B9D42F", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","톤인톤","오렌지"] },

  { id: "gen-030", name: "머시룸과 더스티로즈, 등꽃색", searchAliases: ["로즈 × 스카이 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C99F9A", ratio: 30, role: "base"  },
      { hex: "#C8839A", ratio: 25, role: "sub"   },
      { hex: "#C386B8", ratio: 20, role: "sub"   },
      { hex: "#D0B4DB", ratio: 15, role: "sub"   },
      { hex: "#A192CE", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","뮤트","톤인톤","핑크"] },

  { id: "gen-031", name: "벽돌색 위에 겹친 홍매색", searchAliases: ["레드 × 핑크 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#B64A39", ratio: 70, role: "base"  },
      { hex: "#B63776", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","톤인톤","핑크"] },

  { id: "gen-032", name: "석류와 민트 사이", searchAliases: ["레드 × 아쿠아 2톤 01"], scheme: "complementary",
    colors: [
      { hex: "#B51B26", ratio: 70, role: "base"  },
      { hex: "#8AEBEC", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","비비드","보색","시안"] },

  { id: "gen-033", name: "석류 곁의 하늘색", searchAliases: ["버건디 × 시안 3색 01"], scheme: "complementary",
    colors: [
      { hex: "#92180D", ratio: 60, role: "base"  },
      { hex: "#59C7EE", ratio: 30, role: "sub"   },
      { hex: "#E3D0CE", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","보색","시안"] },

  { id: "gen-034", name: "검붉은색 바탕의 밝은 석회색", searchAliases: ["버건디 × 시안 5색 01"], scheme: "complementary",
    colors: [
      { hex: "#581718", ratio: 30, role: "base"  },
      { hex: "#913031", ratio: 25, role: "sub"   },
      { hex: "#E1D7D7", ratio: 20, role: "sub"   },
      { hex: "#6FCED2", ratio: 15, role: "sub"   },
      { hex: "#268C8F", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥", "보색"] },

  { id: "gen-035", name: "버건디의 옥색 테두리", searchAliases: ["버건디 × 시안 2톤 01"], scheme: "complementary",
    colors: [
      { hex: "#73242C", ratio: 70, role: "base"  },
      { hex: "#6FCEB8", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","보색","시안"] },

  { id: "gen-036", name: "버건디 바탕의 터쿼이즈", searchAliases: ["버건디 × 시안 3색 02"], scheme: "complementary",
    colors: [
      { hex: "#61201B", ratio: 60, role: "base"  },
      { hex: "#50B7C6", ratio: 30, role: "sub"   },
      { hex: "#E8E3E3", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","딥","보색","시안"] },

  { id: "gen-037", name: "버건디와 적갈색, 연분홍", searchAliases: ["버건디 × 시안 5색 02"], scheme: "complementary",
    colors: [
      { hex: "#67160B", ratio: 30, role: "base"  },
      { hex: "#8E3023", ratio: 25, role: "sub"   },
      { hex: "#EDE6E5", ratio: 20, role: "sub"   },
      { hex: "#4CDAE4", ratio: 15, role: "sub"   },
      { hex: "#14A7B2", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥", "보색"] },

  { id: "gen-038", name: "적갈색과 시안", searchAliases: ["버건디 × 시안 2톤 02"], scheme: "complementary",
    colors: [
      { hex: "#9D3112", ratio: 70, role: "base"  },
      { hex: "#43C0E8", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","비비드","보색","시안"] },

  { id: "gen-039", name: "버건디 위에 겹친 터쿼이즈", searchAliases: ["버건디 × 시안 3색 03"], scheme: "complementary",
    colors: [
      { hex: "#71242B", ratio: 60, role: "base"  },
      { hex: "#49B9BA", ratio: 30, role: "sub"   },
      { hex: "#DFD4D5", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","보색","시안"] },

  { id: "gen-040", name: "검붉은색 곁의 석회색", searchAliases: ["버건디 × 시안 5색 03"], scheme: "complementary",
    colors: [
      { hex: "#4E151D", ratio: 30, role: "base"  },
      { hex: "#8E3341", ratio: 25, role: "sub"   },
      { hex: "#DBD5D5", ratio: 20, role: "sub"   },
      { hex: "#74CCB8", ratio: 15, role: "sub"   },
      { hex: "#2A9E84", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥", "보색"] },

  { id: "gen-041", name: "진홍과 민트 사이", searchAliases: ["레드 × 아쿠아 2톤 02"], scheme: "complementary",
    colors: [
      { hex: "#B72A1C", ratio: 70, role: "base"  },
      { hex: "#84E9E3", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","비비드","보색","시안"] },

  { id: "gen-042", name: "버건디 바탕의 밝은 민트", searchAliases: ["버건디 × 시안 3색 04"], scheme: "complementary",
    colors: [
      { hex: "#790E26", ratio: 60, role: "base"  },
      { hex: "#2BE4C4", ratio: 30, role: "sub"   },
      { hex: "#DBC9CD", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","보색","시안"] },

  { id: "gen-043", name: "흑단과 밤색, 석회색", searchAliases: ["버건디 × 네이비 5색"], scheme: "complementary",
    colors: [
      { hex: "#361A13", ratio: 30, role: "base"  },
      { hex: "#824A3B", ratio: 25, role: "sub"   },
      { hex: "#DED6D4", ratio: 20, role: "sub"   },
      { hex: "#73AAC5", ratio: 15, role: "sub"   },
      { hex: "#2B617C", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥", "보색"] },

  { id: "gen-044", name: "와인의 민트 테두리", searchAliases: ["버건디 × 아쿠아 2톤"], scheme: "complementary",
    colors: [
      { hex: "#8E2033", ratio: 70, role: "base"  },
      { hex: "#93DDD9", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","보색","시안"] },

  { id: "gen-045", name: "고동색 바탕의 시안", searchAliases: ["버건디 × 시안 3색 05"], scheme: "complementary",
    colors: [
      { hex: "#7B200E", ratio: 60, role: "base"  },
      { hex: "#40B4E5", ratio: 30, role: "sub"   },
      { hex: "#DED4D2", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","보색","시안"] },

  { id: "gen-046", name: "버건디와 연분홍", searchAliases: ["버건디 × 시안 5색 04"], scheme: "complementary",
    colors: [
      { hex: "#631910", ratio: 30, role: "base"  },
      { hex: "#B03426", ratio: 25, role: "sub"   },
      { hex: "#EDE5E4", ratio: 20, role: "sub"   },
      { hex: "#44CED7", ratio: 15, role: "sub"   },
      { hex: "#19959D", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥", "보색"] },

  { id: "gen-047", name: "버건디 위에 겹친 시안", searchAliases: ["버건디 × 시안 2톤 03"], scheme: "complementary",
    colors: [
      { hex: "#711F16", ratio: 70, role: "base"  },
      { hex: "#56D1D5", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","비비드","보색","시안"] },

  { id: "gen-048", name: "버건디와 터쿼이즈 사이", searchAliases: ["버건디 × 시안 3색 06"], scheme: "complementary",
    colors: [
      { hex: "#63201C", ratio: 60, role: "base"  },
      { hex: "#61B1C7", ratio: 30, role: "sub"   },
      { hex: "#D8D1D0", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","딥","보색","시안"] },

  { id: "gen-049", name: "검붉은색과 진홍, 석회색", searchAliases: ["버건디 × 시안 5색 05"], scheme: "complementary",
    colors: [
      { hex: "#500E13", ratio: 30, role: "base"  },
      { hex: "#BA303A", ratio: 25, role: "sub"   },
      { hex: "#DCD4D5", ratio: 20, role: "sub"   },
      { hex: "#6DCDBB", ratio: 15, role: "sub"   },
      { hex: "#20B397", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥", "보색"] },

  { id: "gen-050", name: "적갈색 곁의 민트", searchAliases: ["버건디 × 시안 2톤 04"], scheme: "complementary",
    colors: [
      { hex: "#8C321F", ratio: 70, role: "base"  },
      { hex: "#7CD8DA", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","보색","시안"] },

  { id: "gen-051", name: "석류 바탕의 밝은 민트", searchAliases: ["레드 × 시안 3색 01"], scheme: "complementary",
    colors: [
      { hex: "#A31216", ratio: 60, role: "base"  },
      { hex: "#3CE7E1", ratio: 30, role: "sub"   },
      { hex: "#EAE3E3", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","보색","시안"] },

  { id: "gen-052", name: "버건디 위에 겹친 연분홍", searchAliases: ["버건디 × 시안 5색 06"], scheme: "complementary",
    colors: [
      { hex: "#6D0A0D", ratio: 30, role: "base"  },
      { hex: "#A7272A", ratio: 25, role: "sub"   },
      { hex: "#EEE6E7", ratio: 20, role: "sub"   },
      { hex: "#5AD6C2", ratio: 15, role: "sub"   },
      { hex: "#11B298", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥", "보색"] },

  { id: "gen-053", name: "석류의 시안 테두리", searchAliases: ["버건디 × 시안 2톤 05"], scheme: "complementary",
    colors: [
      { hex: "#9B1717", ratio: 70, role: "base"  },
      { hex: "#48C6E4", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","비비드","보색","시안"] },

  { id: "gen-054", name: "검붉은색 바탕의 하늘색", searchAliases: ["버건디 × 시안 3색 07"], scheme: "complementary",
    colors: [
      { hex: "#541D19", ratio: 60, role: "base"  },
      { hex: "#7BC5D1", ratio: 30, role: "sub"   },
      { hex: "#E3DAD9", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","딥","보색","시안"] },

  { id: "gen-055", name: "검붉은색과 연분홍", searchAliases: ["버건디 × 시안 5색 07"], scheme: "complementary",
    colors: [
      { hex: "#4D1C23", ratio: 30, role: "base"  },
      { hex: "#7F3641", ratio: 25, role: "sub"   },
      { hex: "#E7E2E3", ratio: 20, role: "sub"   },
      { hex: "#55B6A8", ratio: 15, role: "sub"   },
      { hex: "#3CA393", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥", "보색"] },

  { id: "gen-056", name: "적갈색과 민트 사이", searchAliases: ["레드 × 아쿠아 2톤 03"], scheme: "complementary",
    colors: [
      { hex: "#9E3320", ratio: 70, role: "base"  },
      { hex: "#87D9E1", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","비비드","보색","시안"] },

  { id: "gen-057", name: "고동색 곁의 터쿼이즈", searchAliases: ["버건디 × 시안 3색 08"], scheme: "complementary",
    colors: [
      { hex: "#7A3829", ratio: 60, role: "base"  },
      { hex: "#58BEC0", ratio: 30, role: "sub"   },
      { hex: "#E4DBD9", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","보색","시안"] },

  { id: "gen-058", name: "검붉은색 바탕의 밝은 연분홍", searchAliases: ["버건디 × 시안 5색 08"], scheme: "complementary",
    colors: [
      { hex: "#541C23", ratio: 30, role: "base"  },
      { hex: "#A24551", ratio: 25, role: "sub"   },
      { hex: "#E6DEDF", ratio: 20, role: "sub"   },
      { hex: "#76C4B4", ratio: 15, role: "sub"   },
      { hex: "#308F7B", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥", "보색"] },

  { id: "gen-059", name: "버건디 바탕의 옥색", searchAliases: ["버건디 × 시안 2톤 06"], scheme: "complementary",
    colors: [
      { hex: "#692731", ratio: 70, role: "base"  },
      { hex: "#6EC5B4", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","보색","시안"] },

  { id: "gen-060", name: "석류와 시안", searchAliases: ["레드 × 시안 3색 02"], scheme: "complementary",
    colors: [
      { hex: "#A22D1F", ratio: 60, role: "base"  },
      { hex: "#4AC3CC", ratio: 30, role: "sub"   },
      { hex: "#E9DFDE", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","비비드","보색","시안"] },

  { id: "gen-061", name: "버건디와 와인, 연분홍", searchAliases: ["버건디 × 시안 5색 09"], scheme: "complementary",
    colors: [
      { hex: "#59202A", ratio: 30, role: "base"  },
      { hex: "#883E4B", ratio: 25, role: "sub"   },
      { hex: "#E5DFE0", ratio: 20, role: "sub"   },
      { hex: "#80C4BC", ratio: 15, role: "sub"   },
      { hex: "#3AA296", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥", "보색"] },

  { id: "gen-062", name: "석류의 민트 테두리", searchAliases: ["레드 × 시안 2톤"], scheme: "complementary",
    colors: [
      { hex: "#A81D24", ratio: 70, role: "base"  },
      { hex: "#54D9C8", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","비비드","보색","시안"] },

  { id: "gen-063", name: "버건디 위에 겹친 옥색", searchAliases: ["버건디 × 시안 3색 09"], scheme: "complementary",
    colors: [
      { hex: "#631E29", ratio: 60, role: "base"  },
      { hex: "#64CFC2", ratio: 30, role: "sub"   },
      { hex: "#E6DEDF", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","딥","보색","시안"] },

  { id: "gen-064", name: "에스프레소와 연분홍 사이", searchAliases: ["버건디 × 시안 5색 10"], scheme: "complementary",
    colors: [
      { hex: "#51271A", ratio: 30, role: "base"  },
      { hex: "#894C39", ratio: 25, role: "sub"   },
      { hex: "#E5E1E0", ratio: 20, role: "sub"   },
      { hex: "#6AB2B9", ratio: 15, role: "sub"   },
      { hex: "#31919B", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥", "보색"] },

  { id: "gen-065", name: "석류의 하늘색 테두리", searchAliases: ["레드 × 아쿠아 2톤 04"], scheme: "complementary",
    colors: [
      { hex: "#AC3132", ratio: 70, role: "base"  },
      { hex: "#8BCBD3", ratio: 30, role: "point" }],
    tags: ["레드","웜톤","보색","시안"] },

  { id: "gen-066", name: "검붉은색 곁의 시안", searchAliases: ["버건디 × 애프리콧 3색"], scheme: "complementary",
    colors: [
      { hex: "#542013", ratio: 60, role: "base"  },
      { hex: "#4AC0CF", ratio: 30, role: "sub"   },
      { hex: "#E5DCD9", ratio: 10, role: "point" }],
    tags: ["레드","웜톤","딥","보색","시안"] },

  { id: "gen-067", name: "검붉은색과 석류, 연분홍", searchAliases: ["버건디 × 틸 5색"], scheme: "complementary",
    colors: [
      { hex: "#521515", ratio: 30, role: "base"  },
      { hex: "#A43332", ratio: 25, role: "sub"   },
      { hex: "#E2D9D9", ratio: 20, role: "sub"   },
      { hex: "#6EC0C6", ratio: 15, role: "sub"   },
      { hex: "#217D84", ratio: 10, role: "point" }],
    tags: ["레드", "웜톤", "딥", "보색"] },

  { id: "gen-068", name: "테라코타에서 자홍까지", searchAliases: ["오렌지 × 핑크 2톤 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CF6F3F", ratio: 70, role: "base"  },
      { hex: "#C74D9E", ratio: 30, role: "point" }],
    tags: ["오렌지","웜톤","톤인톤","핑크"] },

  { id: "gen-069", name: "구릿빛 바탕의 겨자", searchAliases: ["오렌지 × 그린 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#AC6B4D", ratio: 60, role: "base"  },
      { hex: "#B7B258", ratio: 30, role: "sub"   },
      { hex: "#86C55A", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","톤인톤","옐로우"] },

  { id: "gen-070", name: "상아색 위에 수레국화색 한 점", searchAliases: ["애프리콧 × 민트 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#EDDAB5", ratio: 30, role: "base"  },
      { hex: "#EDB7CA", ratio: 25, role: "sub"   },
      { hex: "#CFA4E6", ratio: 20, role: "sub"   },
      { hex: "#81A3E2", ratio: 15, role: "sub"   },
      { hex: "#97E5CA", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","톤인톤","핑크"] },

  { id: "gen-071", name: "모래색에서 장밋빛까지", searchAliases: ["오렌지 × 레드 2톤 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D7A27A", ratio: 70, role: "base"  },
      { hex: "#D06379", ratio: 30, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","톤인톤","레드"] },

  { id: "gen-072", name: "황토와 난초색", searchAliases: ["오렌지 × 퍼플 3색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D7986F", ratio: 60, role: "base"  },
      { hex: "#DC71B2", ratio: 30, role: "sub"   },
      { hex: "#9E78D8", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","톤인톤","핑크"] },

  { id: "gen-073", name: "모래색 위에 수레국화색 한 점", searchAliases: ["애프리콧 × 아쿠아 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CAAE9A", ratio: 30, role: "base"  },
      { hex: "#D0A0B3", ratio: 25, role: "sub"   },
      { hex: "#C9A3D2", ratio: 20, role: "sub"   },
      { hex: "#8C8BC5", ratio: 15, role: "sub"   },
      { hex: "#A2C4CE", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","뮤트","톤인톤","핑크"] },

  { id: "gen-074", name: "구릿빛 위에 겹친 연두", searchAliases: ["오렌지 × 그린 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#A88364", ratio: 70, role: "base"  },
      { hex: "#9BBD73", ratio: 30, role: "point" }],
    tags: ["오렌지","웜톤","뮤트","톤인톤","그린"] },

  { id: "gen-075", name: "꿀빛과 체리 사이", searchAliases: ["오렌지 × 핑크 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D7AA4A", ratio: 60, role: "base"  },
      { hex: "#CE4052", ratio: 30, role: "sub"   },
      { hex: "#CA37BE", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","톤인톤","레드"] },

  { id: "gen-076", name: "벽돌색 위에 보라 한 점", searchAliases: ["오렌지 × 블루 5색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#B05126", ratio: 30, role: "base"  },
      { hex: "#D92961", ratio: 25, role: "sub"   },
      { hex: "#AB21A4", ratio: 20, role: "sub"   },
      { hex: "#6A29C5", ratio: 15, role: "sub"   },
      { hex: "#2346C3", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","톤인톤","핑크"] },

  { id: "gen-077", name: "오트밀에서 딸기우유까지", searchAliases: ["애프리콧 × 블러시 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#DFC8B9", ratio: 70, role: "base"  },
      { hex: "#D8ADC8", ratio: 30, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","톤인톤","핑크"] },

  { id: "gen-078", name: "오트밀 곁의 피스타치오", searchAliases: ["애프리콧 × 그린 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D0B7A9", ratio: 60, role: "base"  },
      { hex: "#BFCFA4", ratio: 30, role: "sub"   },
      { hex: "#89BB9C", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","뮤트","톤인톤","그린"] },

  { id: "gen-079", name: "모래색과 석회색, 연녹색", searchAliases: ["애프리콧 × 스카이 5색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CDB1A2", ratio: 30, role: "base"  },
      { hex: "#D2D8B4", ratio: 25, role: "sub"   },
      { hex: "#C0E1BE", ratio: 20, role: "sub"   },
      { hex: "#A1D2C6", ratio: 15, role: "sub"   },
      { hex: "#C7D3E2", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","뮤트","톤인톤","그린"] },

  { id: "gen-080", name: "모래색의 장밋빛 테두리", searchAliases: ["오렌지 × 레드 2톤 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#BEA87F", ratio: 70, role: "base"  },
      { hex: "#BF6E7B", ratio: 30, role: "point" }],
    tags: ["오렌지","웜톤","뮤트","톤인톤","레드"] },

  { id: "gen-081", name: "모래색 바탕의 더스티로즈", searchAliases: ["애프리콧 × 라일락 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D9AB95", ratio: 60, role: "base"  },
      { hex: "#CD7EA4", ratio: 30, role: "sub"   },
      { hex: "#C088D6", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","톤인톤","핑크"] },

  { id: "gen-082", name: "오트밀 위에 연청보라 한 점", searchAliases: ["애프리콧 × 스카이 5색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#DEC8B1", ratio: 30, role: "base"  },
      { hex: "#CCDBAA", ratio: 25, role: "sub"   },
      { hex: "#ABDEB0", ratio: 20, role: "sub"   },
      { hex: "#91D7D0", ratio: 15, role: "sub"   },
      { hex: "#9BACD5", ratio: 10, role: "point" }],
    tags: ["오렌지","쿨톤","파스텔","톤인톤","그린"] },

  { id: "gen-083", name: "황토에서 테라코타까지", searchAliases: ["오렌지 × 레드 2톤 03"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CAA160", ratio: 70, role: "base"  },
      { hex: "#C96453", ratio: 30, role: "point" }],
    tags: ["오렌지","웜톤","톤인톤","레드"] },

  { id: "gen-084", name: "구릿빛과 와인", searchAliases: ["오렌지 × 퍼플 3색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#A27A53", ratio: 60, role: "base"  },
      { hex: "#86384F", ratio: 30, role: "sub"   },
      { hex: "#86468D", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","뮤트","톤인톤","핑크"] },

  { id: "gen-085", name: "황토 위에 울트라마린 한 점", searchAliases: ["오렌지 × 블루 5색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C28931", ratio: 30, role: "base"  },
      { hex: "#D2546C", ratio: 25, role: "sub"   },
      { hex: "#CB47C9", ratio: 20, role: "sub"   },
      { hex: "#5635D0", ratio: 15, role: "sub"   },
      { hex: "#509BCE", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","톤인톤","레드"] },

  { id: "gen-086", name: "벽돌색에서 겨자까지", searchAliases: ["오렌지 × 옐로우 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#A96642", ratio: 70, role: "base"  },
      { hex: "#A2B14D", ratio: 30, role: "point" }],
    tags: ["오렌지","웜톤","톤인톤","옐로우"] },

  { id: "gen-087", name: "살구 위에 겹친 연녹색", searchAliases: ["애프리콧 × 민트 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E3B9A6", ratio: 60, role: "base"  },
      { hex: "#D9E29B", ratio: 30, role: "sub"   },
      { hex: "#9DDE97", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","파스텔","톤인톤","옐로우"] },

  { id: "gen-088", name: "테라코타 바탕의 밝은 라임", searchAliases: ["오렌지 × 그린 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D36534", ratio: 30, role: "base"  },
      { hex: "#D8B640", ratio: 25, role: "sub"   },
      { hex: "#BDE24A", ratio: 20, role: "sub"   },
      { hex: "#7BDA54", ratio: 15, role: "sub"   },
      { hex: "#42D25B", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","톤인톤","옐로우"] },

  { id: "gen-089", name: "모래색에서 모브까지", searchAliases: ["오렌지 × 핑크 2톤 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C5A677", ratio: 70, role: "base"  },
      { hex: "#BA7F96", ratio: 30, role: "point" }],
    tags: ["오렌지","웜톤","톤인톤","핑크"] },

  { id: "gen-090", name: "황토와 밀짚색 사이", searchAliases: ["오렌지 × 민트 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C88F69", ratio: 60, role: "base"  },
      { hex: "#CCDA95", ratio: 30, role: "sub"   },
      { hex: "#86D686", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","톤인톤","그린"] },

  { id: "gen-091", name: "캐러멜 곁의 파랑", searchAliases: ["오렌지 × 블루 2톤 01"], scheme: "complementary",
    colors: [
      { hex: "#BE6B24", ratio: 70, role: "base"  },
      { hex: "#5E8BD7", ratio: 30, role: "point" }],
    tags: ["오렌지","웜톤","비비드","보색","블루"] },

  { id: "gen-092", name: "적갈색 바탕의 밝은 연분홍", searchAliases: ["브라운 × 블루 3색 01"], scheme: "complementary",
    colors: [
      { hex: "#884527", ratio: 60, role: "base"  },
      { hex: "#598FBF", ratio: 30, role: "sub"   },
      { hex: "#E9E4E2", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","보색","블루"] },

  { id: "gen-093", name: "고동색 바탕의 밝은 연분홍", searchAliases: ["브라운 × 네이비 5색"], scheme: "complementary",
    colors: [
      { hex: "#5F2C09", ratio: 30, role: "base"  },
      { hex: "#A55723", ratio: 25, role: "sub"   },
      { hex: "#E7E0DB", ratio: 20, role: "sub"   },
      { hex: "#44A7DF", ratio: 15, role: "sub"   },
      { hex: "#0F6DA3", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "딥", "보색"] },

  { id: "gen-094", name: "고동색의 하늘색 테두리", searchAliases: ["브라운 × 스카이 2톤 01"], scheme: "complementary",
    colors: [
      { hex: "#72471D", ratio: 70, role: "base"  },
      { hex: "#90B4DF", ratio: 30, role: "point" }],
    tags: ["오렌지","웜톤","보색","블루"] },

  { id: "gen-095", name: "적갈색 바탕의 수레국화색", searchAliases: ["브라운 × 블루 3색 02"], scheme: "complementary",
    colors: [
      { hex: "#9F3D0F", ratio: 60, role: "base"  },
      { hex: "#4AA1E8", ratio: 30, role: "sub"   },
      { hex: "#DCCFCA", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","비비드","보색","블루"] },

  { id: "gen-096", name: "고동색과 캐러멜, 상아색", searchAliases: ["브라운 × 블루 5색 01"], scheme: "complementary",
    colors: [
      { hex: "#6C470E", ratio: 30, role: "base"  },
      { hex: "#AC7B31", ratio: 25, role: "sub"   },
      { hex: "#E3DDD4", ratio: 20, role: "sub"   },
      { hex: "#3B66D3", ratio: 15, role: "sub"   },
      { hex: "#1843B4", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "딥", "보색"] },

  { id: "gen-097", name: "고동색과 하늘색", searchAliases: ["브라운 × 시안 2톤"], scheme: "complementary",
    colors: [
      { hex: "#643720", ratio: 70, role: "base"  },
      { hex: "#81C5D3", ratio: 30, role: "point" }],
    tags: ["오렌지","웜톤","딥","보색","시안"] },

  { id: "gen-098", name: "다크 올리브 위에 상아색 한 점", searchAliases: ["브라운 × 블루 3색 03"], scheme: "complementary",
    colors: [
      { hex: "#6C4B1D", ratio: 60, role: "base"  },
      { hex: "#4E75C6", ratio: 30, role: "sub"   },
      { hex: "#E7E2DB", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","딥","보색","블루"] },

  { id: "gen-099", name: "에스프레소 위에 겹친 빙하색", searchAliases: ["브라운 × 블루 5색 02"], scheme: "complementary",
    colors: [
      { hex: "#4C3208", ratio: 30, role: "base"  },
      { hex: "#936822", ratio: 25, role: "sub"   },
      { hex: "#EBE7E1", ratio: 20, role: "sub"   },
      { hex: "#4C9BD7", ratio: 15, role: "sub"   },
      { hex: "#126CAF", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "딥", "보색"] },

  { id: "gen-100", name: "카키브라운과 하늘색 사이", searchAliases: ["오렌지 × 스카이 2톤"], scheme: "complementary",
    colors: [
      { hex: "#946825", ratio: 70, role: "base"  },
      { hex: "#95BCDF", ratio: 30, role: "point" }],
    tags: ["오렌지","웜톤","보색","블루"] },

  { id: "gen-101", name: "다크 올리브 위에 석회색 한 점", searchAliases: ["브라운 × 블루 3색 04"], scheme: "complementary",
    colors: [
      { hex: "#5E481C", ratio: 60, role: "base"  },
      { hex: "#6575D0", ratio: 30, role: "sub"   },
      { hex: "#DBD9D4", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","딥","보색","블루"] },

  { id: "gen-102", name: "에스프레소 곁의 상아색", searchAliases: ["브라운 × 블루 5색 03"], scheme: "complementary",
    colors: [
      { hex: "#53360A", ratio: 30, role: "base"  },
      { hex: "#BF8122", ratio: 25, role: "sub"   },
      { hex: "#E4DFD6", ratio: 20, role: "sub"   },
      { hex: "#6289D3", ratio: 15, role: "sub"   },
      { hex: "#164FBB", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "딥", "보색"] },

  { id: "gen-103", name: "카키브라운의 연청보라 테두리", searchAliases: ["브라운 × 스카이 2톤 02"], scheme: "complementary",
    colors: [
      { hex: "#9B5E0D", ratio: 70, role: "base"  },
      { hex: "#82AAED", ratio: 30, role: "point" }],
    tags: ["오렌지","웜톤","비비드","보색","블루"] },

  { id: "gen-104", name: "고동색 바탕의 밝은 하늘색", searchAliases: ["브라운 × 블루 3색 05"], scheme: "complementary",
    colors: [
      { hex: "#763E14", ratio: 60, role: "base"  },
      { hex: "#74B9DD", ratio: 30, role: "sub"   },
      { hex: "#EAE6E3", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","비비드","보색","블루"] },

  { id: "gen-105", name: "에스프레소와 캐러멜, 빙하색", searchAliases: ["브라운 × 블루 5색 04"], scheme: "complementary",
    colors: [
      { hex: "#442C15", ratio: 30, role: "base"  },
      { hex: "#A87440", ratio: 25, role: "sub"   },
      { hex: "#EAE7E5", ratio: 20, role: "sub"   },
      { hex: "#6A8AC9", ratio: 15, role: "sub"   },
      { hex: "#2E5194", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "딥", "보색"] },

  { id: "gen-106", name: "밤색 바탕의 하늘색", searchAliases: ["브라운 × 스카이 2톤 03"], scheme: "complementary",
    colors: [
      { hex: "#7B5423", ratio: 70, role: "base"  },
      { hex: "#97B4D7", ratio: 30, role: "point" }],
    tags: ["오렌지","웜톤","보색","블루"] },

  { id: "gen-107", name: "고동색과 수레국화색", searchAliases: ["브라운 × 블루 3색 06"], scheme: "complementary",
    colors: [
      { hex: "#77400F", ratio: 60, role: "base"  },
      { hex: "#6C9EDE", ratio: 30, role: "sub"   },
      { hex: "#EBE8E5", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","비비드","보색","블루"] },

  { id: "gen-108", name: "다크 올리브 위에 겹친 아이보리", searchAliases: ["브라운 × 블루 5색 05"], scheme: "complementary",
    colors: [
      { hex: "#6A4F16", ratio: 30, role: "base"  },
      { hex: "#947531", ratio: 25, role: "sub"   },
      { hex: "#EDECE7", ratio: 20, role: "sub"   },
      { hex: "#5378D1", ratio: 15, role: "sub"   },
      { hex: "#2650B8", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "비비드", "보색"] },

  { id: "gen-109", name: "겨자와 파랑 사이", searchAliases: ["오렌지 × 블루 2톤 02"], scheme: "complementary",
    colors: [
      { hex: "#C89217", ratio: 70, role: "base"  },
      { hex: "#4876DC", ratio: 30, role: "point" }],
    tags: ["오렌지","웜톤","비비드","보색","블루"] },

  { id: "gen-110", name: "고동색 곁의 파랑", searchAliases: ["브라운 × 블루 3색 07"], scheme: "complementary",
    colors: [
      { hex: "#6D450C", ratio: 60, role: "base"  },
      { hex: "#2C7FD6", ratio: 30, role: "sub"   },
      { hex: "#DDD4C6", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","딥","보색","블루"] },

  { id: "gen-111", name: "에스프레소 바탕의 밝은 상아색", searchAliases: ["브라운 × 블루 5색 06"], scheme: "complementary",
    colors: [
      { hex: "#4D2D09", ratio: 30, role: "base"  },
      { hex: "#A36620", ratio: 25, role: "sub"   },
      { hex: "#E4E0DB", ratio: 20, role: "sub"   },
      { hex: "#4179DE", ratio: 15, role: "sub"   },
      { hex: "#1753BF", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "딥", "보색"] },

  { id: "gen-112", name: "밤색의 수레국화색 테두리", searchAliases: ["오렌지 × 블루 2톤 03"], scheme: "complementary",
    colors: [
      { hex: "#A25017", ratio: 70, role: "base"  },
      { hex: "#57A5DA", ratio: 30, role: "point" }],
    tags: ["오렌지","웜톤","비비드","보색","블루"] },

  { id: "gen-113", name: "고동색 바탕의 수레국화색", searchAliases: ["브라운 × 블루 3색 08"], scheme: "complementary",
    colors: [
      { hex: "#78300E", ratio: 60, role: "base"  },
      { hex: "#2C9FDB", ratio: 30, role: "sub"   },
      { hex: "#E2D7D1", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","비비드","보색","블루"] },

  { id: "gen-114", name: "에스프레소와 캐러멜, 상아색", searchAliases: ["브라운 × 블루 5색 07"], scheme: "complementary",
    colors: [
      { hex: "#4A3111", ratio: 30, role: "base"  },
      { hex: "#A7783A", ratio: 25, role: "sub"   },
      { hex: "#DEDBD8", ratio: 20, role: "sub"   },
      { hex: "#5F7DC2", ratio: 15, role: "sub"   },
      { hex: "#234695", ratio: 10, role: "point" }],
    tags: ["오렌지", "웜톤", "딥", "보색"] },

  { id: "gen-115", name: "밤색과 수레국화색", searchAliases: ["오렌지 × 블루 2톤 04"], scheme: "complementary",
    colors: [
      { hex: "#895634", ratio: 70, role: "base"  },
      { hex: "#7698C7", ratio: 30, role: "point" }],
    tags: ["오렌지","웜톤","보색","블루"] },

  { id: "gen-116", name: "밤색 위에 겹친 수레국화색", searchAliases: ["브라운 × 블루 3색 09"], scheme: "complementary",
    colors: [
      { hex: "#7F5920", ratio: 60, role: "base"  },
      { hex: "#659FCB", ratio: 30, role: "sub"   },
      { hex: "#DBD5CB", ratio: 10, role: "point" }],
    tags: ["오렌지","웜톤","보색","블루"] },

  { id: "gen-117", name: "올리브에서 연노랑까지", searchAliases: ["올리브 2톤 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#818807", ratio: 70, role: "base"  },
      { hex: "#EDECA1", ratio: 30, role: "point" }],
    tags: ["옐로우", "웜톤", "비비드", "톤온톤"] },

  { id: "gen-118", name: "다크 올리브에서 라임까지", searchAliases: ["올리브 3색 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#555C14", ratio: 60, role: "base"  },
      { hex: "#C4C639", ratio: 30, role: "sub"   },
      { hex: "#E3E6BC", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "톤온톤"] },

  { id: "gen-119", name: "짙은 솔잎색 위에 밀짚색 한 점", searchAliases: ["올리브 5색 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3C3C10", ratio: 30, role: "base"  },
      { hex: "#7D7D26", ratio: 25, role: "sub"   },
      { hex: "#BEAD41", ratio: 20, role: "sub"   },
      { hex: "#CFD18A", ratio: 15, role: "sub"   },
      { hex: "#ECECD5", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "톤온톤"] },

  { id: "gen-120", name: "올리브에서 연녹색까지", searchAliases: ["올리브 2톤 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#727817", ratio: 70, role: "base"  },
      { hex: "#DFE3AA", ratio: 30, role: "point" }],
    tags: ["옐로우", "웜톤", "비비드", "톤온톤"] },

  { id: "gen-121", name: "카키브라운과 꿀빛 사이", searchAliases: ["올리브 3색 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#7A6515", ratio: 60, role: "base"  },
      { hex: "#D3BB46", ratio: 30, role: "sub"   },
      { hex: "#EDEAC9", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "비비드", "톤온톤"] },

  { id: "gen-122", name: "에스프레소 곁의 연두", searchAliases: ["올리브 5색 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#382F05", ratio: 30, role: "base"  },
      { hex: "#7F6B10", ratio: 25, role: "sub"   },
      { hex: "#C9BF22", ratio: 20, role: "sub"   },
      { hex: "#DEDA68", ratio: 15, role: "sub"   },
      { hex: "#EBEBB7", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "톤온톤"] },

  { id: "gen-123", name: "카키브라운의 상아색 테두리", searchAliases: ["올리브 2톤 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#716A1E", ratio: 70, role: "base"  },
      { hex: "#DFDBAE", ratio: 30, role: "point" }],
    tags: ["옐로우", "웜톤", "톤온톤"] },

  { id: "gen-124", name: "올리브 바탕의 밝은 라임", searchAliases: ["올리브 × 민트 3색"], scheme: "tone-on-tone",
    colors: [
      { hex: "#67731C", ratio: 60, role: "base"  },
      { hex: "#C8C850", ratio: 30, role: "sub"   },
      { hex: "#E5EBCC", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "톤온톤"] },

  { id: "gen-125", name: "에스프레소에서 라임까지", searchAliases: ["올리브 5색 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#393104", ratio: 30, role: "base"  },
      { hex: "#81770E", ratio: 25, role: "sub"   },
      { hex: "#CBC120", ratio: 20, role: "sub"   },
      { hex: "#E0CE67", ratio: 15, role: "sub"   },
      { hex: "#ECEAB6", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "톤온톤"] },

  { id: "gen-126", name: "올리브 바탕의 연녹색", searchAliases: ["올리브 2톤 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#6F731C", ratio: 70, role: "base"  },
      { hex: "#D9E1AD", ratio: 30, role: "point" }],
    tags: ["옐로우", "웜톤", "톤온톤"] },

  { id: "gen-127", name: "에스프레소와 겨자", searchAliases: ["올리브 3색 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#443A17", ratio: 60, role: "base"  },
      { hex: "#A49A42", ratio: 30, role: "sub"   },
      { hex: "#D6CEA8", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "톤온톤"] },

  { id: "gen-128", name: "다크 올리브와 짙은 라임, 라임", searchAliases: ["올리브 5색 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#484903", ratio: 30, role: "base"  },
      { hex: "#8F960D", ratio: 25, role: "sub"   },
      { hex: "#D8E11E", ratio: 20, role: "sub"   },
      { hex: "#E0E576", ratio: 15, role: "sub"   },
      { hex: "#F0F3CE", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "톤온톤"] },

  { id: "gen-129", name: "다크 올리브 위에 겹친 상아색", searchAliases: ["올리브 2톤 05"], scheme: "tone-on-tone",
    colors: [
      { hex: "#5A5B15", ratio: 70, role: "base"  },
      { hex: "#E8E5C4", ratio: 30, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "톤온톤"] },

  { id: "gen-130", name: "다크 올리브와 꿀빛 사이", searchAliases: ["올리브 3색 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#5C4E14", ratio: 60, role: "base"  },
      { hex: "#C6B239", ratio: 30, role: "sub"   },
      { hex: "#E6E3BC", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "톤온톤"] },

  { id: "gen-131", name: "짙은 솔잎색 위에 피스타치오 한 점", searchAliases: ["올리브 5색 05"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3B3912", ratio: 30, role: "base"  },
      { hex: "#7A7229", ratio: 25, role: "sub"   },
      { hex: "#B4B946", ratio: 20, role: "sub"   },
      { hex: "#CCCF8C", ratio: 15, role: "sub"   },
      { hex: "#EAEBD5", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "톤온톤"] },

  { id: "gen-132", name: "카키브라운 곁의 연녹색", searchAliases: ["올리브 2톤 06"], scheme: "tone-on-tone",
    colors: [
      { hex: "#736E1B", ratio: 70, role: "base"  },
      { hex: "#E1DFAD", ratio: 30, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "톤온톤"] },

  { id: "gen-133", name: "다크 올리브에서 겨자까지", searchAliases: ["올리브 3색 05"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4F4D0D", ratio: 60, role: "base"  },
      { hex: "#BBAF2A", ratio: 30, role: "sub"   },
      { hex: "#E1DC9D", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "톤온톤"] },

  { id: "gen-134", name: "흑단과 카키브라운, 겨자", searchAliases: ["올리브 5색 06"], scheme: "tone-on-tone",
    colors: [
      { hex: "#30290D", ratio: 30, role: "base"  },
      { hex: "#6D6122", ratio: 25, role: "sub"   },
      { hex: "#AEAA3D", ratio: 20, role: "sub"   },
      { hex: "#CBBD7B", ratio: 15, role: "sub"   },
      { hex: "#E3DBBF", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "톤온톤"] },

  { id: "gen-135", name: "카키브라운의 버터 테두리", searchAliases: ["올리브 2톤 07"], scheme: "tone-on-tone",
    colors: [
      { hex: "#7F6510", ratio: 70, role: "base"  },
      { hex: "#E8DCA6", ratio: 30, role: "point" }],
    tags: ["옐로우", "웜톤", "비비드", "톤온톤"] },

  { id: "gen-136", name: "다크 올리브 바탕의 연두", searchAliases: ["올리브 3색 06"], scheme: "tone-on-tone",
    colors: [
      { hex: "#494F0D", ratio: 60, role: "base"  },
      { hex: "#B7BA2B", ratio: 30, role: "sub"   },
      { hex: "#DDE19E", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "톤온톤"] },

  { id: "gen-137", name: "짙은 솔잎색 바탕의 밝은 피스타치오", searchAliases: ["올리브 5색 07"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3A3913", ratio: 30, role: "base"  },
      { hex: "#78742B", ratio: 25, role: "sub"   },
      { hex: "#B6A949", ratio: 20, role: "sub"   },
      { hex: "#CDC88E", ratio: 15, role: "sub"   },
      { hex: "#EBE9D6", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "톤온톤"] },

  { id: "gen-138", name: "카키브라운과 연녹색", searchAliases: ["올리브 2톤 08"], scheme: "tone-on-tone",
    colors: [
      { hex: "#786F17", ratio: 70, role: "base"  },
      { hex: "#E4DFAA", ratio: 30, role: "point" }],
    tags: ["옐로우", "웜톤", "비비드", "톤온톤"] },

  { id: "gen-139", name: "다크 올리브 위에 겹친 겨자", searchAliases: ["올리브 × 애프리콧 3색"], scheme: "tone-on-tone",
    colors: [
      { hex: "#554A07", ratio: 60, role: "base"  },
      { hex: "#C8A61D", ratio: 30, role: "sub"   },
      { hex: "#E7D298", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "톤온톤"] },

  { id: "gen-140", name: "다크 올리브와 노랑 사이", searchAliases: ["올리브 5색 08"], scheme: "tone-on-tone",
    colors: [
      { hex: "#5F5707", ratio: 30, role: "base"  },
      { hex: "#A69D12", ratio: 25, role: "sub"   },
      { hex: "#DFCD2A", ratio: 20, role: "sub"   },
      { hex: "#E5DF80", ratio: 15, role: "sub"   },
      { hex: "#F1F0C6", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "톤온톤"] },

  { id: "gen-141", name: "올리브 곁의 밀짚색", searchAliases: ["올리브 2톤 09"], scheme: "tone-on-tone",
    colors: [
      { hex: "#928820", ratio: 70, role: "base"  },
      { hex: "#DCCF93", ratio: 30, role: "point" }],
    tags: ["옐로우", "웜톤", "톤온톤"] },

  { id: "gen-142", name: "올리브 바탕의 밝은 노랑", searchAliases: ["올리브 3색 07"], scheme: "tone-on-tone",
    colors: [
      { hex: "#888007", ratio: 60, role: "base"  },
      { hex: "#E6D533", ratio: 30, role: "sub"   },
      { hex: "#F2F1C4", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "비비드", "톤온톤"] },

  { id: "gen-143", name: "짙은 솔잎색에서 라임까지", searchAliases: ["올리브 5색 09"], scheme: "tone-on-tone",
    colors: [
      { hex: "#383904", ratio: 30, role: "base"  },
      { hex: "#817C0E", ratio: 25, role: "sub"   },
      { hex: "#CCC91F", ratio: 20, role: "sub"   },
      { hex: "#D6E066", ratio: 15, role: "sub"   },
      { hex: "#ECE7B6", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "톤온톤"] },

  { id: "gen-144", name: "솔잎색의 연노랑 테두리", searchAliases: ["올리브 2톤 10"], scheme: "tone-on-tone",
    colors: [
      { hex: "#60670A", ratio: 70, role: "base"  },
      { hex: "#ECEEBE", ratio: 30, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "톤온톤"] },

  { id: "gen-145", name: "밀짚색 바탕의 모래색", searchAliases: ["옐로우 × 오렌지 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CCD274", ratio: 70, role: "base"  },
      { hex: "#D69D73", ratio: 30, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","톤인톤","오렌지"] },

  { id: "gen-146", name: "밀짚색과 연두", searchAliases: ["옐로우 × 그린 3색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D6D483", ratio: 60, role: "base"  },
      { hex: "#8FD463", ratio: 30, role: "sub"   },
      { hex: "#56D174", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","톤인톤","그린"] },

  { id: "gen-147", name: "올리브와 밤색, 와인", searchAliases: ["옐로우 × 퍼플 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#90803A", ratio: 30, role: "base"  },
      { hex: "#965939", ratio: 25, role: "sub"   },
      { hex: "#892A35", ratio: 20, role: "sub"   },
      { hex: "#9B3270", ratio: 15, role: "sub"   },
      { hex: "#B33BBA", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","톤인톤","오렌지"] },

  { id: "gen-148", name: "밀짚색 위에 겹친 모래색", searchAliases: ["크림 × 애프리콧 2톤 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D1CC96", ratio: 70, role: "base"  },
      { hex: "#D1B199", ratio: 30, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","톤인톤","오렌지"] },

  { id: "gen-149", name: "황금빛과 라임 사이", searchAliases: ["옐로우 × 그린 3색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E0CD5C", ratio: 60, role: "base"  },
      { hex: "#8CDA3A", ratio: 30, role: "sub"   },
      { hex: "#58D567", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","비비드","톤인톤","그린"] },

  { id: "gen-150", name: "상아색 위에 연청보라 한 점", searchAliases: ["크림 × 블러시 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E2E3C4", ratio: 30, role: "base"  },
      { hex: "#91D095", ratio: 25, role: "sub"   },
      { hex: "#96CCCF", ratio: 20, role: "sub"   },
      { hex: "#B1AEDE", ratio: 15, role: "sub"   },
      { hex: "#D3A4D1", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","파스텔","톤인톤","그린"] },

  { id: "gen-151", name: "올리브 곁의 짙은 라임", searchAliases: ["옐로우 × 그린 2톤 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#827E3C", ratio: 70, role: "base"  },
      { hex: "#6F913E", ratio: 30, role: "point" }],
    tags: ["옐로우","웜톤","톤인톤","그린"] },

  { id: "gen-152", name: "라임에서 모래색까지", searchAliases: ["옐로우 × 레드 3색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CDD25A", ratio: 60, role: "base"  },
      { hex: "#D4A260", ratio: 30, role: "sub"   },
      { hex: "#D4847B", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","톤인톤","오렌지"] },

  { id: "gen-153", name: "겨자 위에 바다색 한 점", searchAliases: ["옐로우 × 블루 5색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#ACA23D", ratio: 30, role: "base"  },
      { hex: "#629437", ratio: 25, role: "sub"   },
      { hex: "#369246", ratio: 20, role: "sub"   },
      { hex: "#329E89", ratio: 15, role: "sub"   },
      { hex: "#2F6FA2", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","톤인톤","그린"] },

  { id: "gen-154", name: "밀짚색의 모래색 테두리", searchAliases: ["크림 × 애프리콧 2톤 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D3CE97", ratio: 70, role: "base"  },
      { hex: "#D0A08D", ratio: 30, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","톤인톤","오렌지"] },

  { id: "gen-155", name: "상아색 바탕의 딸기우유", searchAliases: ["크림 × 라일락 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E0DAAF", ratio: 60, role: "base"  },
      { hex: "#E5B3B9", ratio: 30, role: "sub"   },
      { hex: "#E0BFE5", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","톤인톤","레드"] },

  { id: "gen-156", name: "올리브 위에 자두 한 점", searchAliases: ["올리브 × 플럼 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#797939", ratio: 30, role: "base"  },
      { hex: "#855A42", ratio: 25, role: "sub"   },
      { hex: "#76414F", ratio: 20, role: "sub"   },
      { hex: "#82417C", ratio: 15, role: "sub"   },
      { hex: "#4A3662", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","톤인톤","오렌지"] },

  { id: "gen-157", name: "카키브라운과 올리브", searchAliases: ["올리브 × 그린 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#736C31", ratio: 70, role: "base"  },
      { hex: "#6B8342", ratio: 30, role: "point" }],
    tags: ["옐로우","웜톤","톤인톤","그린"] },

  { id: "gen-158", name: "겨자 위에 겹친 초록", searchAliases: ["옐로우 × 시안 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#AB9B50", ratio: 60, role: "base"  },
      { hex: "#5BA44C", ratio: 30, role: "sub"   },
      { hex: "#399485", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","톤인톤","그린"] },

  { id: "gen-159", name: "올리브 아래 짙은 남보라", searchAliases: ["올리브 × 블루 5색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#848226", ratio: 30, role: "base"  },
      { hex: "#4DA433", ratio: 25, role: "sub"   },
      { hex: "#21885C", ratio: 20, role: "sub"   },
      { hex: "#276D97", ratio: 15, role: "sub"   },
      { hex: "#3E2A9F", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","톤인톤","그린"] },

  { id: "gen-160", name: "버터와 라임 사이", searchAliases: ["크림 × 민트 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E6DD8D", ratio: 70, role: "base"  },
      { hex: "#B0E781", ratio: 30, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","톤인톤","그린"] },

  { id: "gen-161", name: "밀짚색 곁의 피스타치오", searchAliases: ["크림 × 아쿠아 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D4D8AB", ratio: 60, role: "base"  },
      { hex: "#A7D4AB", ratio: 30, role: "sub"   },
      { hex: "#9BC8CC", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","파스텔","톤인톤","그린"] },

  { id: "gen-162", name: "버터와 연두, 연청보라", searchAliases: ["크림 × 스카이 5색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#DFDD85", ratio: 30, role: "base"  },
      { hex: "#8BD875", ratio: 25, role: "sub"   },
      { hex: "#8FE2BF", ratio: 20, role: "sub"   },
      { hex: "#9BCBE9", ratio: 15, role: "sub"   },
      { hex: "#A798E9", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","파스텔","톤인톤","그린"] },

  { id: "gen-163", name: "피스타치오의 풀색 테두리", searchAliases: ["옐로우 × 그린 2톤 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C8C088", ratio: 70, role: "base"  },
      { hex: "#92AD5D", ratio: 30, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","톤인톤","그린"] },

  { id: "gen-164", name: "피스타치오의 옅고 짙은 결", searchAliases: ["옐로우 × 민트 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#BDC078", ratio: 60, role: "base"  },
      { hex: "#B2D293", ratio: 30, role: "sub"   },
      { hex: "#A1D49F", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","톤인톤","그린"] },

  { id: "gen-165", name: "겨자와 테라코타, 산딸기색", searchAliases: ["옐로우 × 블루 5색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#A2A751", ratio: 30, role: "base"  },
      { hex: "#B7826F", ratio: 25, role: "sub"   },
      { hex: "#A94D7E", ratio: 20, role: "sub"   },
      { hex: "#935CAF", ratio: 15, role: "sub"   },
      { hex: "#6570B5", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","뮤트","톤인톤","오렌지"] },

  { id: "gen-166", name: "겨자 바탕의 적갈색", searchAliases: ["옐로우 × 레드 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#B4B764", ratio: 70, role: "base"  },
      { hex: "#A04C49", ratio: 30, role: "point" }],
    tags: ["옐로우","웜톤","톤인톤","레드"] },

  { id: "gen-167", name: "연두와 진홍", searchAliases: ["옐로우 × 핑크 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#BCBF40", ratio: 60, role: "base"  },
      { hex: "#C73E3B", ratio: 30, role: "sub"   },
      { hex: "#BC44BA", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","톤인톤","레드"] },

  { id: "gen-168", name: "연두 위에 옥색 한 점", searchAliases: ["옐로우 × 시안 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C3BF56", ratio: 30, role: "base"  },
      { hex: "#9EC66A", ratio: 25, role: "sub"   },
      { hex: "#83D17A", ratio: 20, role: "sub"   },
      { hex: "#6DC08B", ratio: 15, role: "sub"   },
      { hex: "#7BC8BB", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","톤인톤","그린"] },

  { id: "gen-169", name: "겨자 위에 겹친 연두", searchAliases: ["옐로우 × 그린 2톤 03"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C0A430", ratio: 70, role: "base"  },
      { hex: "#4BD92A", ratio: 30, role: "point" }],
    tags: ["옐로우","웜톤","톤인톤","그린"] },

  { id: "gen-170", name: "올리브 아래 짙은 와인", searchAliases: ["올리브 × 플럼 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#877F26", ratio: 60, role: "base"  },
      { hex: "#791E25", ratio: 30, role: "sub"   },
      { hex: "#691A6F", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","톤인톤","레드"] },

  { id: "gen-171", name: "연녹색 위에 난초색 한 점", searchAliases: ["크림 × 라일락 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E2E3A3", ratio: 30, role: "base"  },
      { hex: "#DF9468", ratio: 25, role: "sub"   },
      { hex: "#DF97AA", ratio: 20, role: "sub"   },
      { hex: "#E186D7", ratio: 15, role: "sub"   },
      { hex: "#C29FE9", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","파스텔","톤인톤","오렌지"] },

  { id: "gen-172", name: "겨자에서 연두까지", searchAliases: ["옐로우 × 그린 2톤 04"], scheme: "tone-in-tone",
    colors: [
      { hex: "#A99530", ratio: 70, role: "base"  },
      { hex: "#90BB2D", ratio: 30, role: "point" }],
    tags: ["옐로우","웜톤","톤인톤","그린"] },

  { id: "gen-173", name: "라임과 진분홍 사이", searchAliases: ["옐로우 × 레드 3색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D2DB2D", ratio: 60, role: "base"  },
      { hex: "#DD8D53", ratio: 30, role: "sub"   },
      { hex: "#D34866", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","비비드","톤인톤","오렌지"] },

  { id: "gen-174", name: "카키 곁의 산딸기색", searchAliases: ["옐로우 × 블루 5색 03"], scheme: "tone-in-tone",
    colors: [
      { hex: "#9F984B", ratio: 30, role: "base"  },
      { hex: "#AA594E", ratio: 25, role: "sub"   },
      { hex: "#B34A91", ratio: 20, role: "sub"   },
      { hex: "#8B5CB6", ratio: 15, role: "sub"   },
      { hex: "#4B6095", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","톤인톤","레드"] },

  { id: "gen-175", name: "모래색의 연어색 테두리", searchAliases: ["옐로우 × 로즈 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C3BA78", ratio: 70, role: "base"  },
      { hex: "#D3A19D", ratio: 30, role: "point" }],
    tags: ["옐로우","웜톤","톤인톤","레드"] },

  { id: "gen-176", name: "카키브라운 위에 와인 한 점", searchAliases: ["올리브 × 와인 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#716624", ratio: 60, role: "base"  },
      { hex: "#92422B", ratio: 30, role: "sub"   },
      { hex: "#8B234E", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","톤인톤","레드"] },

  { id: "gen-177", name: "버터와 라임, 하늘색", searchAliases: ["크림 × 스카이 5색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E6DC85", ratio: 30, role: "base"  },
      { hex: "#BBEB90", ratio: 25, role: "sub"   },
      { hex: "#9CF0AA", ratio: 20, role: "sub"   },
      { hex: "#93EEDC", ratio: 15, role: "sub"   },
      { hex: "#A2CEEF", ratio: 10, role: "point" }],
    tags: ["옐로우","쿨톤","비비드","톤인톤","그린"] },

  { id: "gen-178", name: "다크 올리브 바탕의 아이리스", searchAliases: ["올리브 × 블루 2톤 01"], scheme: "complementary",
    colors: [
      { hex: "#5F621A", ratio: 70, role: "base"  },
      { hex: "#7B6FD6", ratio: 30, role: "point" }],
    tags: ["옐로우","웜톤","딥","보색","블루"] },

  { id: "gen-179", name: "다크 올리브 바탕의 밝은 빙하색", searchAliases: ["올리브 × 블루 3색 01"], scheme: "complementary",
    colors: [
      { hex: "#625312", ratio: 60, role: "base"  },
      { hex: "#7082D8", ratio: 30, role: "sub"   },
      { hex: "#EAE9E2", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","딥","보색","블루"] },

  { id: "gen-180", name: "에스프레소와 상아색", searchAliases: ["올리브 × 블루 5색 02"], scheme: "complementary",
    colors: [
      { hex: "#42370A", ratio: 30, role: "base"  },
      { hex: "#917C22", ratio: 25, role: "sub"   },
      { hex: "#E3E2DC", ratio: 20, role: "sub"   },
      { hex: "#405DD7", ratio: 15, role: "sub"   },
      { hex: "#1B38AF", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "보색"] },

  { id: "gen-181", name: "다크 올리브 위에 겹친 수레국화색", searchAliases: ["올리브 × 스카이 2톤"], scheme: "complementary",
    colors: [
      { hex: "#6F5F0D", ratio: 70, role: "base"  },
      { hex: "#849EED", ratio: 30, role: "point" }],
    tags: ["옐로우","웜톤","딥","보색","블루"] },

  { id: "gen-182", name: "다크 올리브 곁의 울트라마린", searchAliases: ["올리브 × 블루 3색 02"], scheme: "complementary",
    colors: [
      { hex: "#605A0D", ratio: 60, role: "base"  },
      { hex: "#3434CF", ratio: 30, role: "sub"   },
      { hex: "#E0DECE", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","딥","보색","블루"] },

  { id: "gen-183", name: "카키브라운과 아이보리 사이", searchAliases: ["올리브 × 블루 5색 03"], scheme: "complementary",
    colors: [
      { hex: "#676F0D", ratio: 30, role: "base"  },
      { hex: "#A4B01E", ratio: 25, role: "sub"   },
      { hex: "#EEEFE5", ratio: 20, role: "sub"   },
      { hex: "#4E36D5", ratio: 15, role: "sub"   },
      { hex: "#2E15B7", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "보색"] },

  { id: "gen-184", name: "카키브라운의 아이리스 테두리", searchAliases: ["올리브 × 블루 2톤 02"], scheme: "complementary",
    colors: [
      { hex: "#6B6B1E", ratio: 70, role: "base"  },
      { hex: "#707DD0", ratio: 30, role: "point" }],
    tags: ["옐로우","웜톤","딥","보색","블루"] },

  { id: "gen-185", name: "올리브 바탕의 코발트", searchAliases: ["올리브 × 블루 3색 03"], scheme: "complementary",
    colors: [
      { hex: "#807F2C", ratio: 60, role: "base"  },
      { hex: "#495DB9", ratio: 30, role: "sub"   },
      { hex: "#EBEBE4", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","보색","블루"] },

  { id: "gen-186", name: "에스프레소 바탕의 밝은 빙하색", searchAliases: ["올리브 × 블루 5색 04"], scheme: "complementary",
    colors: [
      { hex: "#3E3615", ratio: 30, role: "base"  },
      { hex: "#A49140", ratio: 25, role: "sub"   },
      { hex: "#E6E6E3", ratio: 20, role: "sub"   },
      { hex: "#637EBE", ratio: 15, role: "sub"   },
      { hex: "#34529C", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "보색"] },

  { id: "gen-187", name: "연두와 청보라", searchAliases: ["옐로우 × 블루 2톤 01"], scheme: "complementary",
    colors: [
      { hex: "#B3C028", ratio: 70, role: "base"  },
      { hex: "#7250D3", ratio: 30, role: "point" }],
    tags: ["옐로우","웜톤","비비드","보색","블루"] },

  { id: "gen-188", name: "올리브 위에 겹친 청보라", searchAliases: ["올리브 × 블루 3색 04"], scheme: "complementary",
    colors: [
      { hex: "#95840E", ratio: 60, role: "base"  },
      { hex: "#585EEE", ratio: 30, role: "sub"   },
      { hex: "#E0DDCE", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","비비드","보색","블루"] },

  { id: "gen-189", name: "에스프레소와 겨자, 아이보리", searchAliases: ["올리브 × 블루 5색 05"], scheme: "complementary",
    colors: [
      { hex: "#483E07", ratio: 30, role: "base"  },
      { hex: "#BBA524", ratio: 25, role: "sub"   },
      { hex: "#EBE9DE", ratio: 20, role: "sub"   },
      { hex: "#334ADB", ratio: 15, role: "sub"   },
      { hex: "#1026B2", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "보색"] },

  { id: "gen-190", name: "겨자와 아이리스 사이", searchAliases: ["옐로우 × 블루 2톤 02"], scheme: "complementary",
    colors: [
      { hex: "#B0AE1F", ratio: 70, role: "base"  },
      { hex: "#7666D6", ratio: 30, role: "point" }],
    tags: ["옐로우","웜톤","비비드","보색","블루"] },

  { id: "gen-191", name: "다크 올리브 곁의 석회색", searchAliases: ["올리브 × 블루 3색 05"], scheme: "complementary",
    colors: [
      { hex: "#4D4F1E", ratio: 60, role: "base"  },
      { hex: "#6875C3", ratio: 30, role: "sub"   },
      { hex: "#D8D8CE", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","딥","보색","블루"] },

  { id: "gen-192", name: "짙은 솔잎색과 짙은 라임, 상아색", searchAliases: ["올리브 × 네이비 5색"], scheme: "complementary",
    colors: [
      { hex: "#41400A", ratio: 30, role: "base"  },
      { hex: "#939028", ratio: 25, role: "sub"   },
      { hex: "#E0DFD4", ratio: 20, role: "sub"   },
      { hex: "#6061E2", ratio: 15, role: "sub"   },
      { hex: "#171897", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "보색"] },

  { id: "gen-193", name: "올리브의 코발트 테두리", searchAliases: ["올리브 × 블루 2톤 03"], scheme: "complementary",
    colors: [
      { hex: "#978715", ratio: 70, role: "base"  },
      { hex: "#495EDB", ratio: 30, role: "point" }],
    tags: ["옐로우","웜톤","비비드","보색","블루"] },

  { id: "gen-194", name: "다크 올리브 바탕의 코발트", searchAliases: ["올리브 × 블루 3색 06"], scheme: "complementary",
    colors: [
      { hex: "#625F08", ratio: 60, role: "base"  },
      { hex: "#2E52E5", ratio: 30, role: "sub"   },
      { hex: "#DBDACF", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","딥","보색","블루"] },

  { id: "gen-195", name: "다크 올리브 바탕의 밝은 상아색", searchAliases: ["올리브 × 블루 5색 06"], scheme: "complementary",
    colors: [
      { hex: "#504E0C", ratio: 30, role: "base"  },
      { hex: "#AEAA2E", ratio: 25, role: "sub"   },
      { hex: "#E6E6DB", ratio: 20, role: "sub"   },
      { hex: "#4C3DCD", ratio: 15, role: "sub"   },
      { hex: "#2618A2", ratio: 10, role: "point" }],
    tags: ["옐로우", "웜톤", "딥", "보색"] },

  { id: "gen-196", name: "카키브라운과 아이리스", searchAliases: ["올리브 × 블루 2톤 04"], scheme: "complementary",
    colors: [
      { hex: "#807326", ratio: 70, role: "base"  },
      { hex: "#5169C9", ratio: 30, role: "point" }],
    tags: ["옐로우","웜톤","보색","블루"] },

  { id: "gen-197", name: "카키브라운 위에 겹친 아이리스", searchAliases: ["올리브 × 블루 3색 07"], scheme: "complementary",
    colors: [
      { hex: "#676D24", ratio: 60, role: "base"  },
      { hex: "#727AC4", ratio: 30, role: "sub"   },
      { hex: "#DADAD3", ratio: 10, role: "point" }],
    tags: ["옐로우","웜톤","보색","블루"] },

  { id: "gen-198", name: "에메랄드에서 피스타치오까지", searchAliases: ["그린 2톤 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#53892A", ratio: 70, role: "base"  },
      { hex: "#ACD799", ratio: 30, role: "point" }],
    tags: ["그린", "쿨톤", "톤온톤"] },

  { id: "gen-199", name: "숲색에서 초록까지", searchAliases: ["포레스트 3색 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1E5C14", ratio: 60, role: "base"  },
      { hex: "#40C639", ratio: 30, role: "sub"   },
      { hex: "#C1E6BC", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-200", name: "숲색에서 형광 연두까지", searchAliases: ["포레스트 5색 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#216303", ratio: 30, role: "base"  },
      { hex: "#43AB0D", ratio: 25, role: "sub"   },
      { hex: "#60E624", ratio: 20, role: "sub"   },
      { hex: "#A6E97C", ratio: 15, role: "sub"   },
      { hex: "#D2F2C4", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-201", name: "숲색과 연옥색 사이", searchAliases: ["포레스트 2톤 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#046C24", ratio: 70, role: "base"  },
      { hex: "#BCF1C5", ratio: 30, role: "point" }],
    tags: ["그린", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-202", name: "숲색 바탕의 밝은 초록", searchAliases: ["포레스트 3색 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#0E5506", ratio: 60, role: "base"  },
      { hex: "#37C91D", ratio: 30, role: "sub"   },
      { hex: "#A5E797", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-203", name: "짙은 솔잎색 위에 연두 한 점", searchAliases: ["포레스트 5색 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#0F2E13", ratio: 30, role: "base"  },
      { hex: "#256A25", ratio: 25, role: "sub"   },
      { hex: "#42A94B", ratio: 20, role: "sub"   },
      { hex: "#7FC88A", ratio: 15, role: "sub"   },
      { hex: "#C1E1C1", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-204", name: "숲색 곁의 연옥색", searchAliases: ["포레스트 2톤 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#076914", ratio: 70, role: "base"  },
      { hex: "#BDEFBF", ratio: 30, role: "point" }],
    tags: ["그린", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-205", name: "숲색 바탕의 연두", searchAliases: ["포레스트 3색 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#29630D", ratio: 60, role: "base"  },
      { hex: "#79D42B", ratio: 30, role: "sub"   },
      { hex: "#D1EAB8", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-206", name: "짙은 솔잎색 위에 연민트 한 점", searchAliases: ["포레스트 5색 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#0E3E1B", ratio: 30, role: "base"  },
      { hex: "#22813B", ratio: 25, role: "sub"   },
      { hex: "#3CC34E", ratio: 20, role: "sub"   },
      { hex: "#87D4A0", ratio: 15, role: "sub"   },
      { hex: "#D4EDD8", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-207", name: "초록의 라임 테두리", searchAliases: ["그린 2톤 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#389B18", ratio: 70, role: "base"  },
      { hex: "#9BE28D", ratio: 30, role: "point" }],
    tags: ["그린", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-208", name: "솔잎색에서 연두까지", searchAliases: ["포레스트 3색 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1A7524", ratio: 60, role: "base"  },
      { hex: "#4DCC5A", ratio: 30, role: "sub"   },
      { hex: "#CBECD1", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "톤온톤"] },

  { id: "gen-209", name: "짙은 솔잎색과 솔잎색, 연두", searchAliases: ["포레스트 5색 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#143607", ratio: 30, role: "base"  },
      { hex: "#327A15", ratio: 25, role: "sub"   },
      { hex: "#40C129", ratio: 20, role: "sub"   },
      { hex: "#8AD96E", ratio: 15, role: "sub"   },
      { hex: "#C4E9B9", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-210", name: "에메랄드와 피스타치오", searchAliases: ["그린 2톤 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#2D8642", ratio: 70, role: "base"  },
      { hex: "#9BD5A2", ratio: 30, role: "point" }],
    tags: ["그린", "쿨톤", "톤온톤"] },

  { id: "gen-211", name: "숲색 위에 연민트 한 점", searchAliases: ["포레스트 3색 05"], scheme: "tone-on-tone",
    colors: [
      { hex: "#276B24", ratio: 60, role: "base"  },
      { hex: "#5BBD64", ratio: 30, role: "sub"   },
      { hex: "#CFE8D1", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "톤온톤"] },

  { id: "gen-212", name: "짙은 솔잎색 위에 겹친 연민트", searchAliases: ["포레스트 5색 05"], scheme: "tone-on-tone",
    colors: [
      { hex: "#0D401A", ratio: 30, role: "base"  },
      { hex: "#20842B", ratio: 25, role: "sub"   },
      { hex: "#38C762", ratio: 20, role: "sub"   },
      { hex: "#84D698", ratio: 15, role: "sub"   },
      { hex: "#D3EED6", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-213", name: "초록과 라임 사이", searchAliases: ["포레스트 2톤 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#469919", ratio: 70, role: "base"  },
      { hex: "#AFE18E", ratio: 30, role: "point" }],
    tags: ["그린", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-214", name: "숲색 곁의 비취색", searchAliases: ["포레스트 3색 06"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1B552F", ratio: 60, role: "base"  },
      { hex: "#46B97E", ratio: 30, role: "sub"   },
      { hex: "#C0E2D1", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-215", name: "짙은 솔잎색 바탕의 밝은 연두", searchAliases: ["포레스트 5색 06"], scheme: "tone-on-tone",
    colors: [
      { hex: "#2D3F0D", ratio: 30, role: "base"  },
      { hex: "#618321", ratio: 25, role: "sub"   },
      { hex: "#8AC53A", ratio: 20, role: "sub"   },
      { hex: "#B1D585", ratio: 15, role: "sub"   },
      { hex: "#E0EED3", ratio: 10, role: "point" }],
    tags: ["그린", "웜톤", "딥", "톤온톤"] },

  { id: "gen-216", name: "솔잎색의 연녹색 테두리", searchAliases: ["포레스트 2톤 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3C6C04", ratio: 70, role: "base"  },
      { hex: "#D0F1BC", ratio: 30, role: "point" }],
    tags: ["그린", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-217", name: "숲색과 연두", searchAliases: ["포레스트 3색 07"], scheme: "tone-on-tone",
    colors: [
      { hex: "#275705", ratio: 60, role: "base"  },
      { hex: "#82CC1A", ratio: 30, role: "sub"   },
      { hex: "#BBE996", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-218", name: "짙은 솔잎색에서 연민트까지", searchAliases: ["포레스트 5색 07"], scheme: "tone-on-tone",
    colors: [
      { hex: "#143D10", ratio: 30, role: "base"  },
      { hex: "#327E25", ratio: 25, role: "sub"   },
      { hex: "#4FBE41", ratio: 20, role: "sub"   },
      { hex: "#95D289", ratio: 15, role: "sub"   },
      { hex: "#D6ECD4", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-219", name: "초록 바탕의 짙은 라임", searchAliases: ["그린 2톤 04"], scheme: "tone-in-tone",
    colors: [
      { hex: "#30AB28", ratio: 70, role: "base"  },
      { hex: "#8AB52C", ratio: 30, role: "point" }],
    tags: ["그린", "쿨톤", "톤인톤"] },

  { id: "gen-220", name: "연두 위에 황토 한 점", searchAliases: ["그린 × 오렌지 3색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#9BC07F", ratio: 60, role: "base"  },
      { hex: "#BAC185", ratio: 30, role: "sub"   },
      { hex: "#B7955A", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","뮤트","톤인톤","옐로우"] },

  { id: "gen-221", name: "연두와 민트, 난초색", searchAliases: ["그린 × 레드 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#6FDA53", ratio: 30, role: "base"  },
      { hex: "#4EDBBE", ratio: 25, role: "sub"   },
      { hex: "#8497E1", ratio: 20, role: "sub"   },
      { hex: "#D07EE5", ratio: 15, role: "sub"   },
      { hex: "#E05D78", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","톤인톤","시안"] },

  { id: "gen-222", name: "라임 위에 겹친 옥색", searchAliases: ["그린 × 시안 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#7BDF60", ratio: 70, role: "base"  },
      { hex: "#52D3B7", ratio: 30, role: "point" }],
    tags: ["그린","쿨톤","비비드","톤인톤","시안"] },

  { id: "gen-223", name: "연두와 수레국화색 사이", searchAliases: ["민트 × 스카이 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#7BE689", ratio: 60, role: "base"  },
      { hex: "#6FE3DB", ratio: 30, role: "sub"   },
      { hex: "#8099E1", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","비비드","톤인톤","시안"] },

  { id: "gen-224", name: "연두 곁의 난초색", searchAliases: ["그린 × 핑크 5색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#96BB7B", ratio: 30, role: "base"  },
      { hex: "#AFAB73", ratio: 25, role: "sub"   },
      { hex: "#B68570", ratio: 20, role: "sub"   },
      { hex: "#B77B8F", ratio: 15, role: "sub"   },
      { hex: "#C077BD", ratio: 10, role: "point" }],
    tags: ["그린","웜톤","뮤트","톤인톤","옐로우"] },

  { id: "gen-225", name: "옥색의 피스타치오 테두리", searchAliases: ["그린 2톤 05"], scheme: "tone-in-tone",
    colors: [
      { hex: "#72C28B", ratio: 70, role: "base"  },
      { hex: "#AED18D", ratio: 30, role: "point" }],
    tags: ["그린", "쿨톤", "톤인톤"] },

  { id: "gen-226", name: "녹청색 바탕의 유칼립투스", searchAliases: ["그린 × 블루 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#37894F", ratio: 60, role: "base"  },
      { hex: "#409A94", ratio: 30, role: "sub"   },
      { hex: "#496B97", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","톤인톤","시안"] },

  { id: "gen-227", name: "연두 위에 울트라마린 한 점", searchAliases: ["그린 × 블루 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#42D654", ratio: 30, role: "base"  },
      { hex: "#4BD89E", ratio: 25, role: "sub"   },
      { hex: "#31BBC3", ratio: 20, role: "sub"   },
      { hex: "#2973C3", ratio: 15, role: "sub"   },
      { hex: "#4546CD", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "톤인톤"] },

  { id: "gen-228", name: "연두에서 라임까지", searchAliases: ["그린 2톤 06"], scheme: "tone-in-tone",
    colors: [
      { hex: "#6ADA6A", ratio: 70, role: "base"  },
      { hex: "#93DD53", ratio: 30, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔", "톤인톤"] },

  { id: "gen-229", name: "에메랄드와 카키브라운", searchAliases: ["그린 × 오렌지 3색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#3E9944", ratio: 60, role: "base"  },
      { hex: "#81944D", ratio: 30, role: "sub"   },
      { hex: "#99704B", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "톤인톤"] },

  { id: "gen-230", name: "피스타치오와 옥색, 등꽃색", searchAliases: ["민트 × 핑크 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#B2CF93", ratio: 30, role: "base"  },
      { hex: "#71BE97", ratio: 25, role: "sub"   },
      { hex: "#78A0C6", ratio: 20, role: "sub"   },
      { hex: "#B08FD2", ratio: 15, role: "sub"   },
      { hex: "#C481A3", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "파스텔", "톤인톤"] },

  { id: "gen-231", name: "솔잎색 위에 겹친 짙은 라임", searchAliases: ["포레스트 × 옐로우 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#1A711E", ratio: 70, role: "base"  },
      { hex: "#929726", ratio: 30, role: "point" }],
    tags: ["그린","쿨톤","딥","톤인톤","옐로우"] },

  { id: "gen-232", name: "초록과 겨자 사이", searchAliases: ["그린 × 오렌지 3색 03"], scheme: "tone-in-tone",
    colors: [
      { hex: "#4CB16D", ratio: 60, role: "base"  },
      { hex: "#7CBE42", ratio: 30, role: "sub"   },
      { hex: "#C4A552", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "톤인톤"] },

  { id: "gen-233", name: "연두 위에 난초색 한 점", searchAliases: ["그린 × 핑크 5색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#79DA55", ratio: 30, role: "base"  },
      { hex: "#5FDEBB", ratio: 25, role: "sub"   },
      { hex: "#7C97DD", ratio: 20, role: "sub"   },
      { hex: "#BD66DD", ratio: 15, role: "sub"   },
      { hex: "#D85C7D", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","톤인톤","시안"] },

  { id: "gen-234", name: "초록 곁의 자수정", searchAliases: ["그린 × 퍼플 2톤"], scheme: "complementary",
    colors: [
      { hex: "#4C9729", ratio: 70, role: "base"  },
      { hex: "#B75FD2", ratio: 30, role: "point" }],
    tags: ["그린","쿨톤","보색","퍼플"] },

  { id: "gen-235", name: "숲색 바탕의 자홍", searchAliases: ["포레스트 × 핑크 3색 01"], scheme: "complementary",
    colors: [
      { hex: "#0D5E2F", ratio: 60, role: "base"  },
      { hex: "#E251BE", ratio: 30, role: "sub"   },
      { hex: "#E3EBE6", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","딥","보색","핑크"] },

  { id: "gen-236", name: "숲색 바탕의 밝은 연민트", searchAliases: ["포레스트 × 핑크 5색 01"], scheme: "complementary",
    colors: [
      { hex: "#186941", ratio: 30, role: "base"  },
      { hex: "#32AE71", ratio: 25, role: "sub"   },
      { hex: "#D6E3DD", ratio: 20, role: "sub"   },
      { hex: "#D25584", ratio: 15, role: "sub"   },
      { hex: "#96224D", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "딥", "보색"] },

  { id: "gen-237", name: "연두의 난초색 테두리", searchAliases: ["그린 × 핑크 2톤 01"], scheme: "complementary",
    colors: [
      { hex: "#13D67D", ratio: 70, role: "base"  },
      { hex: "#F069B8", ratio: 30, role: "point" }],
    tags: ["그린","쿨톤","비비드","보색","핑크"] },

  { id: "gen-238", name: "에메랄드와 진분홍", searchAliases: ["포레스트 × 핑크 3색 02"], scheme: "complementary",
    colors: [
      { hex: "#1F9160", ratio: 60, role: "base"  },
      { hex: "#CD436F", ratio: 30, role: "sub"   },
      { hex: "#DCE8E3", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","보색","핑크"] },

  { id: "gen-239", name: "짙은 솔잎색 바탕의 밝은 빙하색", searchAliases: ["포레스트 × 핑크 5색 02"], scheme: "complementary",
    colors: [
      { hex: "#08482D", ratio: 30, role: "base"  },
      { hex: "#1E9060", ratio: 25, role: "sub"   },
      { hex: "#DDE8E4", ratio: 20, role: "sub"   },
      { hex: "#DC479A", ratio: 15, role: "sub"   },
      { hex: "#B4156D", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "딥", "보색"] },

  { id: "gen-240", name: "녹청색 위에 겹친 난초색", searchAliases: ["포레스트 × 핑크 2톤"], scheme: "complementary",
    colors: [
      { hex: "#188031", ratio: 70, role: "base"  },
      { hex: "#DC60B1", ratio: 30, role: "point" }],
    tags: ["그린","쿨톤","비비드","보색","핑크"] },

  { id: "gen-241", name: "숲색과 난초색 사이", searchAliases: ["포레스트 × 핑크 3색 03"], scheme: "complementary",
    colors: [
      { hex: "#10622C", ratio: 60, role: "base"  },
      { hex: "#DB64B4", ratio: 30, role: "sub"   },
      { hex: "#E0ECE4", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","딥","보색","핑크"] },

  { id: "gen-242", name: "짙은 솔잎색과 초록, 빙하색", searchAliases: ["포레스트 × 퍼플 5색 01"], scheme: "complementary",
    colors: [
      { hex: "#084307", ratio: 30, role: "base"  },
      { hex: "#23981F", ratio: 25, role: "sub"   },
      { hex: "#E5EDE5", ratio: 20, role: "sub"   },
      { hex: "#BD46DE", ratio: 15, role: "sub"   },
      { hex: "#9C13C1", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "딥", "보색"] },

  { id: "gen-243", name: "숲색 곁의 연어색", searchAliases: ["포레스트 × 블러시 2톤"], scheme: "complementary",
    colors: [
      { hex: "#156644", ratio: 70, role: "base"  },
      { hex: "#E38CAA", ratio: 30, role: "point" }],
    tags: ["그린","쿨톤","딥","보색","핑크"] },

  { id: "gen-244", name: "녹청색 바탕의 자홍", searchAliases: ["포레스트 × 핑크 3색 04"], scheme: "complementary",
    colors: [
      { hex: "#1B8339", ratio: 60, role: "base"  },
      { hex: "#D13ABA", ratio: 30, role: "sub"   },
      { hex: "#E0EBE3", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","비비드","보색","핑크"] },

  { id: "gen-245", name: "숲색 바탕의 밝은 빙하색", searchAliases: ["포레스트 × 퍼플 5색 02"], scheme: "complementary",
    colors: [
      { hex: "#36531E", ratio: 30, role: "base"  },
      { hex: "#6A9D41", ratio: 25, role: "sub"   },
      { hex: "#E3E6E0", ratio: 20, role: "sub"   },
      { hex: "#9F7BCB", ratio: 15, role: "sub"   },
      { hex: "#583087", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "딥", "보색"] },

  { id: "gen-246", name: "에메랄드의 난초색 테두리", searchAliases: ["그린 × 핑크 2톤 02"], scheme: "complementary",
    colors: [
      { hex: "#2A9860", ratio: 70, role: "base"  },
      { hex: "#CA70A4", ratio: 30, role: "point" }],
    tags: ["그린","쿨톤","보색","핑크"] },

  { id: "gen-247", name: "에메랄드 위에 겹친 진분홍", searchAliases: ["그린 × 핑크 3색"], scheme: "complementary",
    colors: [
      { hex: "#179C51", ratio: 60, role: "base"  },
      { hex: "#DB3A7F", ratio: 30, role: "sub"   },
      { hex: "#D4E3DB", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","비비드","보색","핑크"] },

  { id: "gen-248", name: "숲색과 초록, 상아색", searchAliases: ["포레스트 × 핑크 5색 03"], scheme: "complementary",
    colors: [
      { hex: "#0F4F09", ratio: 30, role: "base"  },
      { hex: "#26981B", ratio: 25, role: "sub"   },
      { hex: "#D8E1D7", ratio: 20, role: "sub"   },
      { hex: "#D861D0", ratio: 15, role: "sub"   },
      { hex: "#A41299", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "딥", "보색"] },

  { id: "gen-249", name: "숲색과 난초색", searchAliases: ["포레스트 × 퍼플 2톤"], scheme: "complementary",
    colors: [
      { hex: "#306C1B", ratio: 70, role: "base"  },
      { hex: "#AF76D2", ratio: 30, role: "point" }],
    tags: ["그린","쿨톤","딥","보색","퍼플"] },

  { id: "gen-250", name: "에메랄드와 자수정 사이", searchAliases: ["포레스트 × 퍼플 3색"], scheme: "complementary",
    colors: [
      { hex: "#328815", ratio: 60, role: "base"  },
      { hex: "#B347E2", ratio: 30, role: "sub"   },
      { hex: "#D2DCCF", ratio: 10, role: "point" }],
    tags: ["그린","쿨톤","비비드","보색","퍼플"] },

  { id: "gen-251", name: "솔잎색 곁의 빙하색", searchAliases: ["포레스트 × 핑크 5색 04"], scheme: "complementary",
    colors: [
      { hex: "#0F731B", ratio: 30, role: "base"  },
      { hex: "#1F982E", ratio: 25, role: "sub"   },
      { hex: "#E2EAE3", ratio: 20, role: "sub"   },
      { hex: "#DC66BE", ratio: 15, role: "sub"   },
      { hex: "#A41580", ratio: 10, role: "point" }],
    tags: ["그린", "쿨톤", "비비드", "보색"] },

  { id: "gen-252", name: "딥 틸에서 물빛까지", searchAliases: ["틸 2톤 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#255D69", ratio: 70, role: "base"  },
      { hex: "#B3D4DB", ratio: 30, role: "point" }],
    tags: ["시안", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-253", name: "딥 틸 바탕의 터쿼이즈", searchAliases: ["틸 3색 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#0D474F", ratio: 60, role: "base"  },
      { hex: "#2BA9BB", ratio: 30, role: "sub"   },
      { hex: "#9EDFE1", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-254", name: "짙은 솔잎색에서 시안까지", searchAliases: ["틸 5색 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#08453A", ratio: 30, role: "base"  },
      { hex: "#158E77", ratio: 25, role: "sub"   },
      { hex: "#2AD5C5", ratio: 20, role: "sub"   },
      { hex: "#7CDFD4", ratio: 15, role: "sub"   },
      { hex: "#D0F1E8", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-255", name: "솔잎색의 물빛 테두리", searchAliases: ["틸 2톤 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#276862", ratio: 70, role: "base"  },
      { hex: "#B4DAD7", ratio: 30, role: "point" }],
    tags: ["시안", "쿨톤", "톤온톤"] },

  { id: "gen-256", name: "딥 틸에서 비취색까지", searchAliases: ["틸 3색 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#154743", ratio: 60, role: "base"  },
      { hex: "#3CAAA0", ratio: 30, role: "sub"   },
      { hex: "#A6D9D4", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-257", name: "딥 틸 위에 민트 한 점", searchAliases: ["틸 5색 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#145243", ratio: 30, role: "base"  },
      { hex: "#298F82", ratio: 25, role: "sub"   },
      { hex: "#46C3B0", ratio: 20, role: "sub"   },
      { hex: "#8FD6C8", ratio: 15, role: "sub"   },
      { hex: "#CDEAE3", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-258", name: "딥 틸 바탕의 밝은 물빛", searchAliases: ["틸 × 스카이 2톤"], scheme: "tone-on-tone",
    colors: [
      { hex: "#085768", ratio: 70, role: "base"  },
      { hex: "#BEDEEF", ratio: 30, role: "point" }],
    tags: ["시안","쿨톤","딥","톤온톤","블루"] },

  { id: "gen-259", name: "솔잎색과 터쿼이즈", searchAliases: ["틸 3색 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#286761", ratio: 60, role: "base"  },
      { hex: "#60B9AD", ratio: 30, role: "sub"   },
      { hex: "#D0E7E1", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "톤온톤"] },

  { id: "gen-260", name: "짙은 솔잎색 위에 옥색 한 점", searchAliases: ["틸 5색 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#0E2F2B", ratio: 30, role: "base"  },
      { hex: "#246B65", ratio: 25, role: "sub"   },
      { hex: "#40AB9F", ratio: 20, role: "sub"   },
      { hex: "#7EC9C2", ratio: 15, role: "sub"   },
      { hex: "#C0E2E2", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-261", name: "녹청색 위에 겹친 연옥색", searchAliases: ["틸 2톤 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#078876", ratio: 70, role: "base"  },
      { hex: "#A1EDE2", ratio: 30, role: "point" }],
    tags: ["시안", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-262", name: "딥 틸과 터쿼이즈 사이", searchAliases: ["틸 3색 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1C5054", ratio: 60, role: "base"  },
      { hex: "#49B6B6", ratio: 30, role: "sub"   },
      { hex: "#C1E0E1", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-263", name: "짙은 청록과 청록, 시안", searchAliases: ["틸 5색 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#023C39", ratio: 30, role: "base"  },
      { hex: "#097786", ratio: 25, role: "sub"   },
      { hex: "#18CFD3", ratio: 20, role: "sub"   },
      { hex: "#61DBE5", ratio: 15, role: "sub"   },
      { hex: "#B4ECEF", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-264", name: "바다색 곁의 민트", searchAliases: ["시안 2톤 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1295A1", ratio: 70, role: "base"  },
      { hex: "#89E6E6", ratio: 30, role: "point" }],
    tags: ["시안", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-265", name: "딥 틸에서 시안까지", searchAliases: ["틸 3색 05"], scheme: "tone-on-tone",
    colors: [
      { hex: "#105D60", ratio: 60, role: "base"  },
      { hex: "#31BECE", ratio: 30, role: "sub"   },
      { hex: "#BAE8E7", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-266", name: "딥 틸 바탕의 밝은 청자색", searchAliases: ["틸 5색 05"], scheme: "tone-on-tone",
    colors: [
      { hex: "#174F3F", ratio: 30, role: "base"  },
      { hex: "#2C8B77", ratio: 25, role: "sub"   },
      { hex: "#4BBEA9", ratio: 20, role: "sub"   },
      { hex: "#92D3C8", ratio: 15, role: "sub"   },
      { hex: "#CEE9E6", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-267", name: "딥 틸의 물빛 테두리", searchAliases: ["틸 2톤 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1F5150", ratio: 70, role: "base"  },
      { hex: "#C9E3E2", ratio: 30, role: "point" }],
    tags: ["시안", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-268", name: "솔잎색 바탕의 터쿼이즈", searchAliases: ["틸 3색 06"], scheme: "tone-on-tone",
    colors: [
      { hex: "#296666", ratio: 60, role: "base"  },
      { hex: "#61B7B1", ratio: 30, role: "sub"   },
      { hex: "#D0E6E3", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "톤온톤"] },

  { id: "gen-269", name: "딥 틸 위에 청자색 한 점", searchAliases: ["틸 5색 06"], scheme: "tone-on-tone",
    colors: [
      { hex: "#155146", ratio: 30, role: "base"  },
      { hex: "#2A8D79", ratio: 25, role: "sub"   },
      { hex: "#48C1BD", ratio: 20, role: "sub"   },
      { hex: "#91D4CD", ratio: 15, role: "sub"   },
      { hex: "#CDEAE7", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-270", name: "비취색과 민트", searchAliases: ["시안 2톤 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#11A29A", ratio: 70, role: "base"  },
      { hex: "#89E6E6", ratio: 30, role: "point" }],
    tags: ["시안", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-271", name: "청록 위에 겹친 시안", searchAliases: ["틸 3색 07"], scheme: "tone-on-tone",
    colors: [
      { hex: "#107F75", ratio: 60, role: "base"  },
      { hex: "#3FD7D9", ratio: 30, role: "sub"   },
      { hex: "#C8EFEB", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-272", name: "딥 틸과 녹청색, 시안", searchAliases: ["틸 5색 07"], scheme: "tone-on-tone",
    colors: [
      { hex: "#064744", ratio: 30, role: "base"  },
      { hex: "#129189", ratio: 25, role: "sub"   },
      { hex: "#25DAD6", ratio: 20, role: "sub"   },
      { hex: "#79E2D5", ratio: 15, role: "sub"   },
      { hex: "#CFF2F0", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-273", name: "에메랄드와 민트 사이", searchAliases: ["시안 2톤 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#0CA779", ratio: 70, role: "base"  },
      { hex: "#85EADD", ratio: 30, role: "point" }],
    tags: ["시안", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-274", name: "솔잎색 곁의 연민트", searchAliases: ["틸 3색 08"], scheme: "tone-on-tone",
    colors: [
      { hex: "#286759", ratio: 60, role: "base"  },
      { hex: "#60B8A7", ratio: 30, role: "sub"   },
      { hex: "#D0E7E3", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "톤온톤"] },

  { id: "gen-275", name: "짙은 솔잎색 바탕의 밝은 민트", searchAliases: ["틸 5색 08"], scheme: "tone-on-tone",
    colors: [
      { hex: "#093531", ratio: 30, role: "base"  },
      { hex: "#187761", ratio: 25, role: "sub"   },
      { hex: "#2EBCA9", ratio: 20, role: "sub"   },
      { hex: "#71D5C0", ratio: 15, role: "sub"   },
      { hex: "#BBE7E1", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-276", name: "딥 틸 바탕의 물빛", searchAliases: ["틸 2톤 05"], scheme: "tone-on-tone",
    colors: [
      { hex: "#134E5D", ratio: 70, role: "base"  },
      { hex: "#C3E6E9", ratio: 30, role: "point" }],
    tags: ["시안", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-277", name: "청록에서 시안까지", searchAliases: ["틸 3색 09"], scheme: "tone-on-tone",
    colors: [
      { hex: "#166D79", ratio: 60, role: "base"  },
      { hex: "#48BFD1", ratio: 30, role: "sub"   },
      { hex: "#CAE6ED", ratio: 10, role: "point" }],
    tags: ["시안", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-278", name: "바다색의 솔잎색 테두리", searchAliases: ["시안 × 포레스트 2톤 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#32848C", ratio: 70, role: "base"  },
      { hex: "#2E734D", ratio: 30, role: "point" }],
    tags: ["시안","쿨톤","톤인톤","그린"] },

  { id: "gen-279", name: "솔잎색 위에 초록 한 점", searchAliases: ["틸 × 그린 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#257160", ratio: 60, role: "base"  },
      { hex: "#227C2F", ratio: 30, role: "sub"   },
      { hex: "#649D2C", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","톤인톤","그린"] },

  { id: "gen-280", name: "민트와 연옥색, 라임", searchAliases: ["시안 × 애프리콧 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#68D9D6", ratio: 30, role: "base"  },
      { hex: "#92E9B0", ratio: 25, role: "sub"   },
      { hex: "#89DD66", ratio: 20, role: "sub"   },
      { hex: "#E0E695", ratio: 15, role: "sub"   },
      { hex: "#E7BB98", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","톤인톤","그린"] },

  { id: "gen-281", name: "물빛 위에 겹친 안개색", searchAliases: ["아쿠아 × 스카이 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#B3DCE4", ratio: 70, role: "base"  },
      { hex: "#B2C3E2", ratio: 30, role: "point" }],
    tags: ["시안","쿨톤","파스텔","톤인톤","블루"] },

  { id: "gen-282", name: "물빛과 수레국화색", searchAliases: ["아쿠아 × 라일락 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#B7DBE4", ratio: 60, role: "base"  },
      { hex: "#9091DA", ratio: 30, role: "sub"   },
      { hex: "#CE99DC", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","톤인톤","블루"] },

  { id: "gen-283", name: "녹청색과 와인 사이", searchAliases: ["시안 × 퍼플 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#2E937B", ratio: 30, role: "base"  },
      { hex: "#3B8A22", ratio: 25, role: "sub"   },
      { hex: "#957921", ratio: 20, role: "sub"   },
      { hex: "#7F2439", ratio: 15, role: "sub"   },
      { hex: "#7A2595", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","톤인톤","그린"] },

  { id: "gen-284", name: "터쿼이즈 곁의 코발트", searchAliases: ["시안 × 블루 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#2ACCB3", ratio: 70, role: "base"  },
      { hex: "#364CC1", ratio: 30, role: "point" }],
    tags: ["시안","쿨톤","비비드","톤인톤","블루"] },

  { id: "gen-285", name: "회청색의 아이리스 테두리", searchAliases: ["시안 × 블루 3색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#70A8B7", ratio: 60, role: "base"  },
      { hex: "#8199C9", ratio: 30, role: "sub"   },
      { hex: "#7F74C5", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","뮤트","톤인톤","블루"] },

  { id: "gen-286", name: "청록과 남보라, 자두", searchAliases: ["틸 × 옐로우 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#3A7376", ratio: 30, role: "base"  },
      { hex: "#4B4887", ratio: 25, role: "sub"   },
      { hex: "#6E3F6C", ratio: 20, role: "sub"   },
      { hex: "#89504C", ratio: 15, role: "sub"   },
      { hex: "#84884B", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","뮤트","톤인톤","블루"] },

  { id: "gen-287", name: "에메랄드에서 초록까지", searchAliases: ["시안 × 그린 2톤 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#1F9F7F", ratio: 70, role: "base"  },
      { hex: "#40AF1C", ratio: 30, role: "point" }],
    tags: ["시안","쿨톤","비비드","톤인톤","그린"] },

  { id: "gen-288", name: "터쿼이즈 위에 제비꽃 한 점", searchAliases: ["시안 × 퍼플 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#59B9AE", ratio: 60, role: "base"  },
      { hex: "#7089C0", ratio: 30, role: "sub"   },
      { hex: "#784FA4", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","톤인톤","블루"] },

  { id: "gen-289", name: "녹청색 아래 짙은 짙은 보라", searchAliases: ["틸 × 버건디 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#1B867C", ratio: 30, role: "base"  },
      { hex: "#193474", ratio: 25, role: "sub"   },
      { hex: "#3F1964", ratio: 20, role: "sub"   },
      { hex: "#6F1554", ratio: 15, role: "sub"   },
      { hex: "#812419", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","비비드","톤인톤","블루"] },

  { id: "gen-290", name: "터쿼이즈 바탕의 비취색", searchAliases: ["시안 2톤 04"], scheme: "tone-in-tone",
    colors: [
      { hex: "#47A7BE", ratio: 70, role: "base"  },
      { hex: "#3CB998", ratio: 30, role: "point" }],
    tags: ["시안", "쿨톤", "톤인톤"] },

  { id: "gen-291", name: "하늘색과 더스티블루", searchAliases: ["아쿠아 × 퍼플 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#9CC6CF", ratio: 60, role: "base"  },
      { hex: "#8D96BA", ratio: 30, role: "sub"   },
      { hex: "#A48CC3", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","뮤트","톤인톤","블루"] },

  { id: "gen-292", name: "수레국화색 위에 겹친 보라", searchAliases: ["시안 × 핑크 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#2FA1CB", ratio: 30, role: "base"  },
      { hex: "#345DCE", ratio: 25, role: "sub"   },
      { hex: "#5C40CB", ratio: 20, role: "sub"   },
      { hex: "#8227B0", ratio: 15, role: "sub"   },
      { hex: "#C72BB3", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","톤인톤","블루"] },

  { id: "gen-293", name: "터쿼이즈와 연두 사이", searchAliases: ["시안 × 그린 2톤 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#5ABEC5", ratio: 70, role: "base"  },
      { hex: "#51CC71", ratio: 30, role: "point" }],
    tags: ["시안","쿨톤","톤인톤","그린"] },

  { id: "gen-294", name: "옥색 곁의 더스티블루", searchAliases: ["시안 × 블루 3색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#87BFBD", ratio: 60, role: "base"  },
      { hex: "#708CB6", ratio: 30, role: "sub"   },
      { hex: "#8B7EB7", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","뮤트","톤인톤","블루"] },

  { id: "gen-295", name: "녹청색 위에 석류 한 점", searchAliases: ["틸 × 플럼 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#23847F", ratio: 30, role: "base"  },
      { hex: "#369930", ratio: 25, role: "sub"   },
      { hex: "#807B29", ratio: 20, role: "sub"   },
      { hex: "#942A30", ratio: 15, role: "sub"   },
      { hex: "#7D2883", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","톤인톤","그린"] },

  { id: "gen-296", name: "유칼립투스의 녹청색 테두리", searchAliases: ["시안 × 포레스트 2톤 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#2A9790", ratio: 70, role: "base"  },
      { hex: "#1F7D2C", ratio: 30, role: "point" }],
    tags: ["시안","쿨톤","톤인톤","그린"] },

  { id: "gen-297", name: "물빛 바탕의 연옥색", searchAliases: ["아쿠아 × 민트 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#A6E1E5", ratio: 60, role: "base"  },
      { hex: "#B2E8C0", ratio: 30, role: "sub"   },
      { hex: "#C4E59E", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","파스텔","톤인톤","그린"] },

  { id: "gen-298", name: "터쿼이즈와 비취색, 초록", searchAliases: ["시안 × 옐로우 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#43B9B6", ratio: 30, role: "base"  },
      { hex: "#44A777", ratio: 25, role: "sub"   },
      { hex: "#46BC4B", ratio: 20, role: "sub"   },
      { hex: "#73B244", ratio: 15, role: "sub"   },
      { hex: "#8D973A", ratio: 10, role: "point" }],
    tags: ["시안","쿨톤","톤인톤","그린"] },

  { id: "gen-299", name: "군청에서 수레국화색까지", searchAliases: ["블루 2톤"], scheme: "tone-on-tone",
    colors: [
      { hex: "#0D38A6", ratio: 70, role: "base"  },
      { hex: "#8699E9", ratio: 30, role: "point" }],
    tags: ["블루", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-300", name: "남색 바탕의 밝은 물빛", searchAliases: ["네이비 3색"], scheme: "tone-on-tone",
    colors: [
      { hex: "#13337C", ratio: 60, role: "base"  },
      { hex: "#4374D5", ratio: 30, role: "sub"   },
      { hex: "#C9D6EE", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-301", name: "암청색과 라벤더", searchAliases: ["네이비 5색"], scheme: "tone-on-tone",
    colors: [
      { hex: "#070837", ratio: 30, role: "base"  },
      { hex: "#13237B", ratio: 25, role: "sub"   },
      { hex: "#272EC3", ratio: 20, role: "sub"   },
      { hex: "#6C71DA", ratio: 15, role: "sub"   },
      { hex: "#B9C1EA", ratio: 10, role: "point" }],
    tags: ["블루", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-302", name: "감청 위에 겹친 연청보라", searchAliases: ["네이비 2톤"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1C3296", ratio: 70, role: "base"  },
      { hex: "#909FDF", ratio: 30, role: "point" }],
    tags: ["블루", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-303", name: "짙은 보라와 라벤더 사이", searchAliases: ["플럼 2톤 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#601A75", ratio: 70, role: "base"  },
      { hex: "#CEACE2", ratio: 30, role: "point" }],
    tags: ["퍼플", "쿨톤", "톤온톤"] },

  { id: "gen-304", name: "짙은 자주의 연청보라 테두리", searchAliases: ["플럼 3색 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#360755", ratio: 60, role: "base"  },
      { hex: "#961DC8", ratio: 30, role: "sub"   },
      { hex: "#C797E7", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-305", name: "짙은 보라 곁의 라일락", searchAliases: ["플럼 5색 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4E0363", ratio: 30, role: "base"  },
      { hex: "#750CAC", ratio: 25, role: "sub"   },
      { hex: "#B923E6", ratio: 20, role: "sub"   },
      { hex: "#D67CE9", ratio: 15, role: "sub"   },
      { hex: "#E6C4F2", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-306", name: "짙은 보라에서 등꽃색까지", searchAliases: ["퍼플 2톤 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#5E1D96", ratio: 70, role: "base"  },
      { hex: "#B490DF", ratio: 30, role: "point" }],
    tags: ["퍼플", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-307", name: "잉크 네이비 바탕의 밝은 라벤더", searchAliases: ["플럼 3색 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#2E1745", ratio: 60, role: "base"  },
      { hex: "#8341A5", ratio: 30, role: "sub"   },
      { hex: "#C2A8D6", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-308", name: "암청색 위에 라일락 한 점", searchAliases: ["플럼 5색 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#2C0B32", ratio: 30, role: "base"  },
      { hex: "#5F1E71", ratio: 25, role: "sub"   },
      { hex: "#8E37B3", ratio: 20, role: "sub"   },
      { hex: "#C577CF", ratio: 15, role: "sub"   },
      { hex: "#DABEE5", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-309", name: "짙은 자주 바탕의 라일락", searchAliases: ["플럼 2톤 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#351E53", ratio: 70, role: "base"  },
      { hex: "#D7C9E4", ratio: 30, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-310", name: "짙은 보라와 라벤더", searchAliases: ["플럼 3색 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4C056B", ratio: 60, role: "base"  },
      { hex: "#AB1BE4", ratio: 30, role: "sub"   },
      { hex: "#D7B3EF", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-311", name: "짙은 자주와 짙은 보라, 라벤더", searchAliases: ["플럼 5색 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#33023B", ratio: 30, role: "base"  },
      { hex: "#720A84", ratio: 25, role: "sub"   },
      { hex: "#BB1AD1", ratio: 20, role: "sub"   },
      { hex: "#D963E4", ratio: 15, role: "sub"   },
      { hex: "#E1B4EE", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-312", name: "보라 위에 겹친 등꽃색", searchAliases: ["퍼플 2톤 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#77179C", ratio: 70, role: "base"  },
      { hex: "#CB8CE3", ratio: 30, role: "point" }],
    tags: ["퍼플", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-313", name: "짙은 자주와 라일락 사이", searchAliases: ["플럼 3색 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#341E53", ratio: 60, role: "base"  },
      { hex: "#7A4CB3", ratio: 30, role: "sub"   },
      { hex: "#D0C2E0", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-314", name: "짙은 자주 곁의 라일락", searchAliases: ["플럼 5색 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#440C5A", ratio: 30, role: "base"  },
      { hex: "#691B9C", ratio: 25, role: "sub"   },
      { hex: "#A036D3", ratio: 20, role: "sub"   },
      { hex: "#BD86DF", ratio: 15, role: "sub"   },
      { hex: "#E1C9EE", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-315", name: "짙은 보라의 라벤더 테두리", searchAliases: ["플럼 2톤 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#640C83", ratio: 70, role: "base"  },
      { hex: "#D5A4EA", ratio: 30, role: "point" }],
    tags: ["퍼플", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-316", name: "짙은 보라 바탕의 밝은 라일락", searchAliases: ["플럼 3색 05"], scheme: "tone-on-tone",
    colors: [
      { hex: "#681976", ratio: 60, role: "base"  },
      { hex: "#B34BCD", ratio: 30, role: "sub"   },
      { hex: "#E4CBEC", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-317", name: "암청색과 짙은 보라, 라벤더", searchAliases: ["플럼 5색 05"], scheme: "tone-on-tone",
    colors: [
      { hex: "#250835", ratio: 30, role: "base"  },
      { hex: "#531777", ratio: 25, role: "sub"   },
      { hex: "#902DBD", ratio: 20, role: "sub"   },
      { hex: "#AC70D6", ratio: 15, role: "sub"   },
      { hex: "#D8BAE8", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-318", name: "짙은 보라에서 라일락까지", searchAliases: ["플럼 2톤 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4B0967", ratio: 70, role: "base"  },
      { hex: "#E0BEEE", ratio: 30, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-319", name: "짙은 보라 위에 라일락 한 점", searchAliases: ["플럼 3색 06"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4A1D71", ratio: 60, role: "base"  },
      { hex: "#9752C7", ratio: 30, role: "sub"   },
      { hex: "#DECCEA", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-320", name: "짙은 자주와 연보라", searchAliases: ["플럼 5색 06"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3A0844", ratio: 30, role: "base"  },
      { hex: "#7F168D", ratio: 25, role: "sub"   },
      { hex: "#CF2CD3", ratio: 20, role: "sub"   },
      { hex: "#D27DDE", ratio: 15, role: "sub"   },
      { hex: "#EFD1F0", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-321", name: "짙은 보라 바탕의 등꽃색", searchAliases: ["플럼 2톤 05"], scheme: "tone-on-tone",
    colors: [
      { hex: "#5911A1", ratio: 70, role: "base"  },
      { hex: "#BC89E6", ratio: 30, role: "point" }],
    tags: ["퍼플", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-322", name: "짙은 보라 위에 겹친 라일락", searchAliases: ["플럼 3색 07"], scheme: "tone-on-tone",
    colors: [
      { hex: "#740D81", ratio: 60, role: "base"  },
      { hex: "#CE3BDD", ratio: 30, role: "sub"   },
      { hex: "#E6C7F0", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-323", name: "잉크 네이비와 라일락 사이", searchAliases: ["플럼 5색 07"], scheme: "tone-on-tone",
    colors: [
      { hex: "#311C4A", ratio: 30, role: "base"  },
      { hex: "#5B3582", ratio: 25, role: "sub"   },
      { hex: "#8556B4", ratio: 20, role: "sub"   },
      { hex: "#B498CD", ratio: 15, role: "sub"   },
      { hex: "#DBD0E6", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-324", name: "보라 곁의 등꽃색", searchAliases: ["플럼 2톤 06"], scheme: "tone-on-tone",
    colors: [
      { hex: "#791A98", ratio: 70, role: "base"  },
      { hex: "#C18FE0", ratio: 30, role: "point" }],
    tags: ["퍼플", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-325", name: "짙은 자주의 라일락 테두리", searchAliases: ["플럼 3색 08"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4C165A", ratio: 60, role: "base"  },
      { hex: "#B03CC3", ratio: 30, role: "sub"   },
      { hex: "#DCBDE5", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-326", name: "짙은 자주 바탕의 밝은 라일락", searchAliases: ["플럼 5색 08"], scheme: "tone-on-tone",
    colors: [
      { hex: "#391551", ratio: 30, role: "base"  },
      { hex: "#682A8D", ratio: 25, role: "sub"   },
      { hex: "#9048C1", ratio: 20, role: "sub"   },
      { hex: "#B290D5", ratio: 15, role: "sub"   },
      { hex: "#DDCDEA", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-327", name: "짙은 보라와 등꽃색", searchAliases: ["플럼 2톤 07"], scheme: "tone-on-tone",
    colors: [
      { hex: "#731B97", ratio: 70, role: "base"  },
      { hex: "#C68FE0", ratio: 30, role: "point" }],
    tags: ["퍼플", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-328", name: "짙은 자주 위에 등꽃색 한 점", searchAliases: ["플럼 3색 09"], scheme: "tone-on-tone",
    colors: [
      { hex: "#400359", ratio: 60, role: "base"  },
      { hex: "#8815D0", ratio: 30, role: "sub"   },
      { hex: "#C494EB", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-329", name: "암청색에서 라일락까지", searchAliases: ["플럼 5색 09"], scheme: "tone-on-tone",
    colors: [
      { hex: "#2D0E2F", ratio: 30, role: "base"  },
      { hex: "#67246B", ratio: 25, role: "sub"   },
      { hex: "#A440AA", ratio: 20, role: "sub"   },
      { hex: "#C27EC9", ratio: 15, role: "sub"   },
      { hex: "#E1C0E2", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-330", name: "짙은 자주 위에 겹친 라일락", searchAliases: ["플럼 2톤 08"], scheme: "tone-on-tone",
    colors: [
      { hex: "#321061", ratio: 70, role: "base"  },
      { hex: "#D2C2EB", ratio: 30, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-331", name: "짙은 자주 바탕의 자홍", searchAliases: ["플럼 3색 10"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4F0953", ratio: 60, role: "base"  },
      { hex: "#B523C3", ratio: 30, role: "sub"   },
      { hex: "#D59AE4", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-332", name: "짙은 보라와 보라, 라일락", searchAliases: ["플럼 5색 10"], scheme: "tone-on-tone",
    colors: [
      { hex: "#550462", ratio: 30, role: "base"  },
      { hex: "#970DAA", ratio: 25, role: "sub"   },
      { hex: "#B325E5", ratio: 20, role: "sub"   },
      { hex: "#D07DE8", ratio: 15, role: "sub"   },
      { hex: "#EBC5F2", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-333", name: "짙은 보라와 연청보라 사이", searchAliases: ["퍼플 2톤 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#642E85", ratio: 70, role: "base"  },
      { hex: "#C39CD4", ratio: 30, role: "point" }],
    tags: ["퍼플", "쿨톤", "톤온톤"] },

  { id: "gen-334", name: "짙은 자주 위에 라일락 한 점", searchAliases: ["플럼 × 블러시 3색"], scheme: "tone-on-tone",
    colors: [
      { hex: "#54135E", ratio: 60, role: "base"  },
      { hex: "#BC36C9", ratio: 30, role: "sub"   },
      { hex: "#E7BBE7", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-335", name: "암청색 곁의 라일락", searchAliases: ["플럼 5색 11"], scheme: "tone-on-tone",
    colors: [
      { hex: "#28034A", ratio: 30, role: "base"  },
      { hex: "#560C97", ratio: 25, role: "sub"   },
      { hex: "#831DE2", ratio: 20, role: "sub"   },
      { hex: "#B474E6", ratio: 15, role: "sub"   },
      { hex: "#E4CEF3", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-336", name: "짙은 자주와 라일락", searchAliases: ["플럼 2톤 09"], scheme: "tone-on-tone",
    colors: [
      { hex: "#36125E", ratio: 70, role: "base"  },
      { hex: "#D8C3E9", ratio: 30, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-337", name: "짙은 보라의 라일락 테두리", searchAliases: ["플럼 3색 11"], scheme: "tone-on-tone",
    colors: [
      { hex: "#53117E", ratio: 60, role: "base"  },
      { hex: "#9A41D8", ratio: 30, role: "sub"   },
      { hex: "#DCC8EF", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "비비드", "톤온톤"] },

  { id: "gen-338", name: "짙은 자주와 보라, 라일락", searchAliases: ["플럼 5색 12"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4E0C5A", ratio: 30, role: "base"  },
      { hex: "#881C9C", ratio: 25, role: "sub"   },
      { hex: "#BC36D3", ratio: 20, role: "sub"   },
      { hex: "#D286DF", ratio: 15, role: "sub"   },
      { hex: "#E5C9EE", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-339", name: "연청보라 바탕의 장밋빛", searchAliases: ["라일락 × 핑크 2톤 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C19DD9", ratio: 70, role: "base"  },
      { hex: "#C87294", ratio: 30, role: "point" }],
    tags: ["퍼플","쿨톤","파스텔","톤인톤","핑크"] },

  { id: "gen-340", name: "가지색 위에 겹친 와인", searchAliases: ["플럼 × 레드 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#442A5E", ratio: 60, role: "base"  },
      { hex: "#61285A", ratio: 30, role: "sub"   },
      { hex: "#803A4B", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","딥","톤인톤","핑크"] },

  { id: "gen-341", name: "라벤더와 연옥색 사이", searchAliases: ["라일락 × 민트 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D0B0EB", ratio: 30, role: "base"  },
      { hex: "#AABBEA", ratio: 25, role: "sub"   },
      { hex: "#A2E3DE", ratio: 20, role: "sub"   },
      { hex: "#B3EBBA", ratio: 15, role: "sub"   },
      { hex: "#D9EBB4", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","파스텔","톤인톤","블루"] },

  { id: "gen-342", name: "자두에서 군청까지", searchAliases: ["플럼 × 블루 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#5A3770", ratio: 70, role: "base"  },
      { hex: "#3A4988", ratio: 30, role: "point" }],
    tags: ["퍼플","쿨톤","뮤트","톤인톤","블루"] },

  { id: "gen-343", name: "제비꽃 곁의 산딸기색", searchAliases: ["퍼플 × 레드 3색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#674594", ratio: 60, role: "base"  },
      { hex: "#B54C9D", ratio: 30, role: "sub"   },
      { hex: "#B05B59", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","톤인톤","핑크"] },

  { id: "gen-344", name: "라벤더 위에 피스타치오 한 점", searchAliases: ["라일락 × 오렌지 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C5A3E1", ratio: 30, role: "base"  },
      { hex: "#B0C8E5", ratio: 25, role: "sub"   },
      { hex: "#92D8B8", ratio: 20, role: "sub"   },
      { hex: "#AED58C", ratio: 15, role: "sub"   },
      { hex: "#D6AE7E", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","파스텔","톤인톤","블루"] },

  { id: "gen-345", name: "보라의 자홍 테두리", searchAliases: ["퍼플 × 핑크 2톤 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#A83ED9", ratio: 70, role: "base"  },
      { hex: "#CD30B6", ratio: 30, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","톤인톤","핑크"] },

  { id: "gen-346", name: "라벤더 바탕의 벚꽃색", searchAliases: ["라일락 × 애프리콧 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CA9ED4", ratio: 60, role: "base"  },
      { hex: "#E2BDCC", ratio: 30, role: "sub"   },
      { hex: "#D4B8A5", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","파스텔","톤인톤","핑크"] },

  { id: "gen-347", name: "제비꽃과 데님, 비취색", searchAliases: ["퍼플 × 오렌지 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#7A54A8", ratio: 30, role: "base"  },
      { hex: "#46769E", ratio: 25, role: "sub"   },
      { hex: "#63B186", ratio: 20, role: "sub"   },
      { hex: "#799E4C", ratio: 15, role: "sub"   },
      { hex: "#956E4D", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","뮤트","톤인톤","블루"] },

  { id: "gen-348", name: "등꽃색에서 난초색까지", searchAliases: ["라일락 × 핑크 2톤 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#B889DE", ratio: 70, role: "base"  },
      { hex: "#DB7AA6", ratio: 30, role: "point" }],
    tags: ["퍼플","쿨톤","파스텔","톤인톤","핑크"] },

  { id: "gen-349", name: "자수정과 황토", searchAliases: ["퍼플 × 오렌지 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#9E73C4", ratio: 60, role: "base"  },
      { hex: "#B9658C", ratio: 30, role: "sub"   },
      { hex: "#C29059", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","톤인톤","핑크"] },

  { id: "gen-350", name: "짙은 보라 위에 겹친 카키브라운", searchAliases: ["플럼 × 그린 5색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#593878", ratio: 30, role: "base"  },
      { hex: "#7F396A", ratio: 25, role: "sub"   },
      { hex: "#62342E", ratio: 20, role: "sub"   },
      { hex: "#777132", ratio: 15, role: "sub"   },
      { hex: "#4F783E", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","톤인톤","핑크"] },

  { id: "gen-351", name: "자수정과 모브 사이", searchAliases: ["퍼플 × 핑크 2톤 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#9173B3", ratio: 70, role: "base"  },
      { hex: "#B17595", ratio: 30, role: "point" }],
    tags: ["퍼플","쿨톤","뮤트","톤인톤","핑크"] },

  { id: "gen-352", name: "보라 곁의 난초색", searchAliases: ["퍼플 × 레드 3색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#8753B6", ratio: 60, role: "base"  },
      { hex: "#C676BA", ratio: 30, role: "sub"   },
      { hex: "#CC7789", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","톤인톤","핑크"] },

  { id: "gen-353", name: "등꽃색의 레몬 테두리", searchAliases: ["라일락 × 크림 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C495E1", ratio: 30, role: "base"  },
      { hex: "#E8A0D6", ratio: 25, role: "sub"   },
      { hex: "#E698A1", ratio: 20, role: "sub"   },
      { hex: "#E7C29A", ratio: 15, role: "sub"   },
      { hex: "#D1E07B", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","파스텔","톤인톤","핑크"] },

  { id: "gen-354", name: "보라 바탕의 코발트", searchAliases: ["퍼플 × 블루 2톤 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#762A97", ratio: 70, role: "base"  },
      { hex: "#3361C7", ratio: 30, role: "point" }],
    tags: ["퍼플","쿨톤","톤인톤","블루"] },

  { id: "gen-355", name: "라벤더 위에 안개색 한 점", searchAliases: ["라일락 × 스카이 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CEABDC", ratio: 60, role: "base"  },
      { hex: "#B8B5D9", ratio: 30, role: "sub"   },
      { hex: "#B0C8DC", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","파스텔","톤인톤","블루"] },

  { id: "gen-356", name: "짙은 보라와 홍매색, 올리브", searchAliases: ["플럼 × 그린 5색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#542688", ratio: 30, role: "base"  },
      { hex: "#8A2E72", ratio: 25, role: "sub"   },
      { hex: "#8A2E28", ratio: 20, role: "sub"   },
      { hex: "#91832C", ratio: 15, role: "sub"   },
      { hex: "#589738", ratio: 10, role: "point" }],
    tags: ["퍼플","웜톤","톤인톤","핑크"] },

  { id: "gen-357", name: "보라에서 파랑까지", searchAliases: ["퍼플 × 블루 2톤 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#9554DC", ratio: 70, role: "base"  },
      { hex: "#6186D5", ratio: 30, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","톤인톤","블루"] },

  { id: "gen-358", name: "보라와 울트라마린", searchAliases: ["퍼플 × 블루 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#7E1EB5", ratio: 60, role: "base"  },
      { hex: "#3219A8", ratio: 30, role: "sub"   },
      { hex: "#1941A3", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","톤인톤","블루"] },

  { id: "gen-359", name: "보라 위에 겹친 에메랄드", searchAliases: ["퍼플 × 그린 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#8B2895", ratio: 30, role: "base"  },
      { hex: "#2F257E", ratio: 25, role: "sub"   },
      { hex: "#27627C", ratio: 20, role: "sub"   },
      { hex: "#32A46C", ratio: 15, role: "sub"   },
      { hex: "#4D9E2C", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","톤인톤","블루"] },

  { id: "gen-360", name: "등꽃색과 더스티로즈 사이", searchAliases: ["퍼플 × 블러시 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C686CC", ratio: 70, role: "base"  },
      { hex: "#D391AF", ratio: 30, role: "point" }],
    tags: ["퍼플","웜톤","파스텔","톤인톤","핑크"] },

  { id: "gen-361", name: "짙은 보라 바탕의 밝은 라임", searchAliases: ["플럼 × 민트 2톤"], scheme: "complementary",
    colors: [
      { hex: "#751A92", ratio: 70, role: "base"  },
      { hex: "#94E590", ratio: 30, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","보색","그린"] },

  { id: "gen-362", name: "짙은 보라 곁의 라임", searchAliases: ["플럼 × 그린 3색 01"], scheme: "complementary",
    colors: [
      { hex: "#3E1574", ratio: 60, role: "base"  },
      { hex: "#A7D244", ratio: 30, role: "sub"   },
      { hex: "#DBD4E5", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","보색","그린"] },

  { id: "gen-363", name: "짙은 자주 바탕의 밝은 연분홍", searchAliases: ["플럼 × 그린 5색 03"], scheme: "complementary",
    colors: [
      { hex: "#45225B", ratio: 30, role: "base"  },
      { hex: "#5E3876", ratio: 25, role: "sub"   },
      { hex: "#E3E0E6", ratio: 20, role: "sub"   },
      { hex: "#8EB96F", ratio: 15, role: "sub"   },
      { hex: "#598B35", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "보색"] },

  { id: "gen-364", name: "짙은 보라의 형광 연두 테두리", searchAliases: ["플럼 × 그린 2톤 01"], scheme: "complementary",
    colors: [
      { hex: "#430D87", ratio: 70, role: "base"  },
      { hex: "#A2E837", ratio: 30, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","보색","그린"] },

  { id: "gen-365", name: "짙은 보라 바탕의 밝은 연두", searchAliases: ["플럼 × 그린 3색 02"], scheme: "complementary",
    colors: [
      { hex: "#5C1F6D", ratio: 60, role: "base"  },
      { hex: "#53C842", ratio: 30, role: "sub"   },
      { hex: "#E4DAE6", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","딥","보색","그린"] },

  { id: "gen-366", name: "짙은 자주와 짙은 보라, 연분홍", searchAliases: ["플럼 × 그린 5색 04"], scheme: "complementary",
    colors: [
      { hex: "#371D52", ratio: 30, role: "base"  },
      { hex: "#58337D", ratio: 25, role: "sub"   },
      { hex: "#E5E3E7", ratio: 20, role: "sub"   },
      { hex: "#8DBF57", ratio: 15, role: "sub"   },
      { hex: "#5F8930", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "보색"] },

  { id: "gen-367", name: "보라 바탕의 밝은 라임", searchAliases: ["퍼플 × 그린 2톤 01"], scheme: "complementary",
    colors: [
      { hex: "#951EB3", ratio: 70, role: "base"  },
      { hex: "#88DC5C", ratio: 30, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","보색","그린"] },

  { id: "gen-368", name: "짙은 보라 바탕의 연두", searchAliases: ["플럼 × 그린 3색 03"], scheme: "complementary",
    colors: [
      { hex: "#581E72", ratio: 60, role: "base"  },
      { hex: "#90D16D", ratio: 30, role: "sub"   },
      { hex: "#E4DFE6", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","보색","그린"] },

  { id: "gen-369", name: "짙은 보라와 연보라", searchAliases: ["플럼 × 포레스트 5색 01"], scheme: "complementary",
    colors: [
      { hex: "#580C64", ratio: 30, role: "base"  },
      { hex: "#A324B8", ratio: 25, role: "sub"   },
      { hex: "#E6DBE8", ratio: 20, role: "sub"   },
      { hex: "#5FE35B", ratio: 15, role: "sub"   },
      { hex: "#169311", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "보색"] },

  { id: "gen-370", name: "보라 위에 겹친 라임", searchAliases: ["퍼플 × 그린 2톤 02"], scheme: "complementary",
    colors: [
      { hex: "#861BB5", ratio: 70, role: "base"  },
      { hex: "#8EDA4D", ratio: 30, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","보색","그린"] },

  { id: "gen-371", name: "짙은 보라와 연두 사이", searchAliases: ["퍼플 × 그린 3색 01"], scheme: "complementary",
    colors: [
      { hex: "#6A2B8A", ratio: 60, role: "base"  },
      { hex: "#83CE71", ratio: 30, role: "sub"   },
      { hex: "#DAD6DC", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","보색","그린"] },

  { id: "gen-372", name: "짙은 보라 곁의 연분홍", searchAliases: ["플럼 × 그린 5색 05"], scheme: "complementary",
    colors: [
      { hex: "#381764", ratio: 30, role: "base"  },
      { hex: "#642FA9", ratio: 25, role: "sub"   },
      { hex: "#E3E1E5", ratio: 20, role: "sub"   },
      { hex: "#9ECA4F", ratio: 15, role: "sub"   },
      { hex: "#7CAB27", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "보색"] },

  { id: "gen-373", name: "짙은 보라의 연두 테두리", searchAliases: ["플럼 × 그린 2톤 02"], scheme: "complementary",
    colors: [
      { hex: "#4E1867", ratio: 70, role: "base"  },
      { hex: "#64CE4E", ratio: 30, role: "point" }],
    tags: ["퍼플","쿨톤","딥","보색","그린"] },

  { id: "gen-374", name: "짙은 자주 바탕의 밝은 연두", searchAliases: ["플럼 × 그린 3색 04"], scheme: "complementary",
    colors: [
      { hex: "#3F1A58", ratio: 60, role: "base"  },
      { hex: "#92CF64", ratio: 30, role: "sub"   },
      { hex: "#D9D4DC", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","딥","보색","그린"] },

  { id: "gen-375", name: "암청색과 제비꽃, 연보라", searchAliases: ["플럼 × 그린 5색 06"], scheme: "complementary",
    colors: [
      { hex: "#301447", ratio: 30, role: "base"  },
      { hex: "#7843A4", ratio: 25, role: "sub"   },
      { hex: "#DED9E3", ratio: 20, role: "sub"   },
      { hex: "#98BE50", ratio: 15, role: "sub"   },
      { hex: "#6E9429", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "보색"] },

  { id: "gen-376", name: "남보라 바탕의 라임", searchAliases: ["퍼플 × 그린 2톤 03"], scheme: "complementary",
    colors: [
      { hex: "#6011AD", ratio: 70, role: "base"  },
      { hex: "#ABE66B", ratio: 30, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","보색","그린"] },

  { id: "gen-377", name: "짙은 보라와 연두", searchAliases: ["플럼 × 그린 3색 05"], scheme: "complementary",
    colors: [
      { hex: "#4E1C68", ratio: 60, role: "base"  },
      { hex: "#89D877", ratio: 30, role: "sub"   },
      { hex: "#E0D9E3", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","딥","보색","그린"] },

  { id: "gen-378", name: "암청색 위에 겹친 빙하색", searchAliases: ["플럼 × 포레스트 5색 02"], scheme: "complementary",
    colors: [
      { hex: "#2C0F3A", ratio: 30, role: "base"  },
      { hex: "#723890", ratio: 25, role: "sub"   },
      { hex: "#E9E7EB", ratio: 20, role: "sub"   },
      { hex: "#88CB51", ratio: 15, role: "sub"   },
      { hex: "#548E24", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "보색"] },

  { id: "gen-379", name: "제비꽃과 연두 사이", searchAliases: ["퍼플 × 그린 2톤 04"], scheme: "complementary",
    colors: [
      { hex: "#792A8F", ratio: 70, role: "base"  },
      { hex: "#7FD675", ratio: 30, role: "point" }],
    tags: ["퍼플","쿨톤","보색","그린"] },

  { id: "gen-380", name: "남보라 곁의 라임", searchAliases: ["퍼플 × 그린 3색 02"], scheme: "complementary",
    colors: [
      { hex: "#631AA8", ratio: 60, role: "base"  },
      { hex: "#ACD84E", ratio: 30, role: "sub"   },
      { hex: "#D9D2E0", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","보색","그린"] },

  { id: "gen-381", name: "짙은 보라 바탕의 밝은 연보라", searchAliases: ["플럼 × 그린 5색 07"], scheme: "complementary",
    colors: [
      { hex: "#4F1E60", ratio: 30, role: "base"  },
      { hex: "#783F8C", ratio: 25, role: "sub"   },
      { hex: "#E0D9E2", ratio: 20, role: "sub"   },
      { hex: "#72C25A", ratio: 15, role: "sub"   },
      { hex: "#428D2C", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "보색"] },

  { id: "gen-382", name: "짙은 보라 위에 겹친 연두", searchAliases: ["퍼플 × 그린 2톤 05"], scheme: "complementary",
    colors: [
      { hex: "#542493", ratio: 70, role: "base"  },
      { hex: "#ABD174", ratio: 30, role: "point" }],
    tags: ["퍼플","쿨톤","보색","그린"] },

  { id: "gen-383", name: "짙은 보라 바탕의 형광 연두", searchAliases: ["플럼 × 그린 3색 06"], scheme: "complementary",
    colors: [
      { hex: "#610E8F", ratio: 60, role: "base"  },
      { hex: "#84E039", ratio: 30, role: "sub"   },
      { hex: "#E7E0EC", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","비비드","보색","그린"] },

  { id: "gen-384", name: "암청색과 짙은 보라, 연보라", searchAliases: ["플럼 × 그린 5색 08"], scheme: "complementary",
    colors: [
      { hex: "#2F0B55", ratio: 30, role: "base"  },
      { hex: "#591D99", ratio: 25, role: "sub"   },
      { hex: "#E4E0E8", ratio: 20, role: "sub"   },
      { hex: "#A9DC53", ratio: 15, role: "sub"   },
      { hex: "#74AE16", ratio: 10, role: "point" }],
    tags: ["퍼플", "쿨톤", "딥", "보색"] },

  { id: "gen-385", name: "남보라의 피스타치오 테두리", searchAliases: ["퍼플 × 민트 2톤"], scheme: "complementary",
    colors: [
      { hex: "#6A3396", ratio: 70, role: "base"  },
      { hex: "#A6DA91", ratio: 30, role: "point" }],
    tags: ["퍼플","쿨톤","보색","그린"] },

  { id: "gen-386", name: "짙은 보라 곁의 연두", searchAliases: ["플럼 × 그린 3색 07"], scheme: "complementary",
    colors: [
      { hex: "#6F2191", ratio: 60, role: "base"  },
      { hex: "#75D364", ratio: 30, role: "sub"   },
      { hex: "#DAD0DE", ratio: 10, role: "point" }],
    tags: ["퍼플","쿨톤","보색","그린"] },

  { id: "gen-387", name: "짙은 자주에서 벚꽃색까지", searchAliases: ["와인 2톤 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#581838", ratio: 70, role: "base"  },
      { hex: "#E7C6DA", ratio: 30, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-388", name: "자두 껍질과 연보라 속지", searchAliases: ["와인 3색 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#551C51", ratio: 60, role: "base"  },
      { hex: "#B847AF", ratio: 30, role: "sub"   },
      { hex: "#E2C0DD", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-389", name: "짙은 자주 위에 벚꽃색 한 점", searchAliases: ["와인 5색 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#5B0B39", ratio: 30, role: "base"  },
      { hex: "#9F1957", ratio: 25, role: "sub"   },
      { hex: "#D63395", ratio: 20, role: "sub"   },
      { hex: "#E085B0", ratio: 15, role: "sub"   },
      { hex: "#EFC8DD", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-390", name: "자두에서 딸기우유까지", searchAliases: ["와인 2톤 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#850A77", ratio: 70, role: "base"  },
      { hex: "#EBA3DB", ratio: 30, role: "point" }],
    tags: ["핑크", "웜톤", "비비드", "톤온톤"] },

  { id: "gen-391", name: "짙은 자주와 진분홍", searchAliases: ["와인 3색 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#570537", ratio: 60, role: "base"  },
      { hex: "#CC1A7D", ratio: 30, role: "sub"   },
      { hex: "#E996C1", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-392", name: "검붉은색 위에 벚꽃색 한 점", searchAliases: ["와인 5색 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#580E23", ratio: 30, role: "base"  },
      { hex: "#9A1E4E", ratio: 25, role: "sub"   },
      { hex: "#D03974", ratio: 20, role: "sub"   },
      { hex: "#DD889F", ratio: 15, role: "sub"   },
      { hex: "#EDC9D4", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-393", name: "버건디에서 벚꽃색까지", searchAliases: ["와인 2톤 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#620E30", ratio: 70, role: "base"  },
      { hex: "#ECC1D6", ratio: 30, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-394", name: "버건디 위에 딸기우유 한 점", searchAliases: ["와인 × 레드 3색"], scheme: "tone-on-tone",
    colors: [
      { hex: "#6C041F", ratio: 60, role: "base"  },
      { hex: "#E6194B", ratio: 30, role: "sub"   },
      { hex: "#EFB3CD", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","딥","톤온톤","레드"] },

  { id: "gen-395", name: "짙은 자주와 딸기우유 사이", searchAliases: ["와인 5색 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3D0036", ratio: 30, role: "base"  },
      { hex: "#890677", ratio: 25, role: "sub"   },
      { hex: "#D714B4", ratio: 20, role: "sub"   },
      { hex: "#E85EC0", ratio: 15, role: "sub"   },
      { hex: "#F0B2DE", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-396", name: "와인의 딸기우유 테두리", searchAliases: ["와인 2톤 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#850A41", ratio: 70, role: "base"  },
      { hex: "#EBA2BF", ratio: 30, role: "point" }],
    tags: ["핑크", "웜톤", "비비드", "톤온톤"] },

  { id: "gen-397", name: "검붉은색 바탕의 밝은 딸기우유", searchAliases: ["와인 3색 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4F0D21", ratio: 60, role: "base"  },
      { hex: "#BB2A5B", ratio: 30, role: "sub"   },
      { hex: "#E19EBB", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-398", name: "짙은 자주와 홍매색, 라일락", searchAliases: ["와인 5색 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#54123C", ratio: 30, role: "base"  },
      { hex: "#92266C", ratio: 25, role: "sub"   },
      { hex: "#C74297", ratio: 20, role: "sub"   },
      { hex: "#D88DBD", ratio: 15, role: "sub"   },
      { hex: "#EBCCE3", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-399", name: "버건디에서 딸기우유까지", searchAliases: ["와인 2톤 05"], scheme: "tone-on-tone",
    colors: [
      { hex: "#751A37", ratio: 70, role: "base"  },
      { hex: "#E2ACBC", ratio: 30, role: "point" }],
    tags: ["핑크", "웜톤", "톤온톤"] },

  { id: "gen-400", name: "검붉은색 위에 딸기우유 한 점", searchAliases: ["와인 × 로즈 3색"], scheme: "tone-on-tone",
    colors: [
      { hex: "#431925", ratio: 60, role: "base"  },
      { hex: "#A14562", ratio: 30, role: "sub"   },
      { hex: "#D5AAB4", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-401", name: "검붉은색과 벚꽃색", searchAliases: ["와인 5색 05"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4A0320", ratio: 30, role: "base"  },
      { hex: "#970C36", ratio: 25, role: "sub"   },
      { hex: "#E21D62", ratio: 20, role: "sub"   },
      { hex: "#E6759A", ratio: 15, role: "sub"   },
      { hex: "#F3CED8", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-402", name: "와인 바탕의 딸기우유", searchAliases: ["와인 2톤 06"], scheme: "tone-on-tone",
    colors: [
      { hex: "#810E58", ratio: 70, role: "base"  },
      { hex: "#E9A5CB", ratio: 30, role: "point" }],
    tags: ["핑크", "웜톤", "비비드", "톤온톤"] },

  { id: "gen-403", name: "검붉은색 위에 겹친 딸기우유", searchAliases: ["와인 3색 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4C102B", ratio: 60, role: "base"  },
      { hex: "#B43163", ratio: 30, role: "sub"   },
      { hex: "#DEA1C1", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-404", name: "짙은 자주와 연분홍 사이", searchAliases: ["와인 5색 06"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3A122D", ratio: 30, role: "base"  },
      { hex: "#792A57", ratio: 25, role: "sub"   },
      { hex: "#B84784", ratio: 20, role: "sub"   },
      { hex: "#CE8DBB", ratio: 15, role: "sub"   },
      { hex: "#EBD6E2", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-405", name: "버건디 곁의 벚꽃색", searchAliases: ["와인 2톤 07"], scheme: "tone-on-tone",
    colors: [
      { hex: "#68083D", ratio: 70, role: "base"  },
      { hex: "#EFBEDC", ratio: 30, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-406", name: "짙은 자주의 딸기우유 테두리", searchAliases: ["와인 3색 05"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4C103A", ratio: 60, role: "base"  },
      { hex: "#B4317E", ratio: 30, role: "sub"   },
      { hex: "#DEA1C6", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-407", name: "검붉은색 바탕의 밝은 연보라", searchAliases: ["와인 5색 07"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3D1029", ratio: 30, role: "base"  },
      { hex: "#7D2656", ratio: 25, role: "sub"   },
      { hex: "#BE418A", ratio: 20, role: "sub"   },
      { hex: "#D18AB8", ratio: 15, role: "sub"   },
      { hex: "#ECD5E4", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-408", name: "버건디 바탕의 벚꽃색", searchAliases: ["와인 2톤 08"], scheme: "tone-on-tone",
    colors: [
      { hex: "#6D0326", ratio: 70, role: "base"  },
      { hex: "#F1BBCF", ratio: 30, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-409", name: "와인에서 벚꽃색까지", searchAliases: ["와인 3색 06"], scheme: "tone-on-tone",
    colors: [
      { hex: "#860850", ratio: 60, role: "base"  },
      { hex: "#E43494", ratio: 30, role: "sub"   },
      { hex: "#F2C5DA", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "비비드", "톤온톤"] },

  { id: "gen-410", name: "검붉은 자주에서 진분홍까지", searchAliases: ["와인 5색 08"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4B0131", ratio: 30, role: "base"  },
      { hex: "#9B0967", ratio: 25, role: "sub"   },
      { hex: "#E71888", ratio: 20, role: "sub"   },
      { hex: "#E972C5", ratio: 15, role: "sub"   },
      { hex: "#F4CDE8", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-411", name: "자주 벨벳과 옅은 모브", searchAliases: ["와인 2톤 09"], scheme: "tone-on-tone",
    colors: [
      { hex: "#531D43", ratio: 70, role: "base"  },
      { hex: "#E4C9DC", ratio: 30, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-412", name: "검붉은색과 딸기우유", searchAliases: ["와인 3색 07"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4C1021", ratio: 60, role: "base"  },
      { hex: "#B4326E", ratio: 30, role: "sub"   },
      { hex: "#DDA1B4", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-413", name: "자홍 잉크의 다섯 겹", searchAliases: ["와인 5색 09"], scheme: "tone-on-tone",
    colors: [
      { hex: "#580E43", ratio: 30, role: "base"  },
      { hex: "#9A1E80", ratio: 25, role: "sub"   },
      { hex: "#D039AE", ratio: 20, role: "sub"   },
      { hex: "#DD88CE", ratio: 15, role: "sub"   },
      { hex: "#EDC9E9", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-414", name: "버건디 위에 겹친 벚꽃색", searchAliases: ["와인 2톤 10"], scheme: "tone-on-tone",
    colors: [
      { hex: "#670A39", ratio: 70, role: "base"  },
      { hex: "#EEBFDA", ratio: 30, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-415", name: "와인과 벚꽃색 사이", searchAliases: ["와인 3색 08"], scheme: "tone-on-tone",
    colors: [
      { hex: "#810E4B", ratio: 60, role: "base"  },
      { hex: "#DD3C8F", ratio: 30, role: "sub"   },
      { hex: "#F0C7DD", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "비비드", "톤온톤"] },

  { id: "gen-416", name: "흑단 위에 벚꽃색 한 점", searchAliases: ["와인 5색 10"], scheme: "tone-on-tone",
    colors: [
      { hex: "#390518", ratio: 30, role: "base"  },
      { hex: "#800F40", ratio: 25, role: "sub"   },
      { hex: "#CA2169", ratio: 20, role: "sub"   },
      { hex: "#DF689A", ratio: 15, role: "sub"   },
      { hex: "#ECB7CD", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "톤온톤"] },

  { id: "gen-417", name: "자두 곁의 딸기우유", searchAliases: ["와인 2톤 11"], scheme: "tone-on-tone",
    colors: [
      { hex: "#820D68", ratio: 70, role: "base"  },
      { hex: "#EAA4D8", ratio: 30, role: "point" }],
    tags: ["핑크", "웜톤", "비비드", "톤온톤"] },

  { id: "gen-418", name: "난초색의 황토 테두리", searchAliases: ["핑크 × 오렌지 2톤 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CC74A3", ratio: 70, role: "base"  },
      { hex: "#C49771", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","파스텔","톤인톤","오렌지"] },

  { id: "gen-419", name: "홍매색에서 짙은 보라까지", searchAliases: ["핑크 × 플럼 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#9A206E", ratio: 60, role: "base"  },
      { hex: "#62186B", ratio: 30, role: "sub"   },
      { hex: "#431F74", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","톤인톤","퍼플"] },

  { id: "gen-420", name: "홍매색과 적갈색, 겨자", searchAliases: ["핑크 × 그린 5색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#88466E", ratio: 30, role: "base"  },
      { hex: "#884535", ratio: 25, role: "sub"   },
      { hex: "#A5A342", ratio: 20, role: "sub"   },
      { hex: "#5BA547", ratio: 15, role: "sub"   },
      { hex: "#46AA81", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","뮤트","톤인톤","레드"] },

  { id: "gen-421", name: "와인 바탕의 카키브라운", searchAliases: ["와인 × 브라운 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#7C2944", ratio: 70, role: "base"  },
      { hex: "#886A2A", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","톤인톤","오렌지"] },

  { id: "gen-422", name: "난초색과 아이리스", searchAliases: ["핑크 × 아쿠아 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#E660C7", ratio: 60, role: "base"  },
      { hex: "#886EE0", ratio: 30, role: "sub"   },
      { hex: "#88D4EB", ratio: 10, role: "point" }],
    tags: ["핑크","쿨톤","비비드","톤인톤","블루"] },

  { id: "gen-423", name: "난초색 바탕의 밝은 황금빛", searchAliases: ["핑크 × 옐로우 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CC5DBF", ratio: 30, role: "base"  },
      { hex: "#D27098", ratio: 25, role: "sub"   },
      { hex: "#DB7A74", ratio: 20, role: "sub"   },
      { hex: "#CC9457", ratio: 15, role: "sub"   },
      { hex: "#D1D063", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "톤인톤"] },

  { id: "gen-424", name: "홍매색 위에 겹친 벽돌색", searchAliases: ["핑크 × 레드 2톤 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#9E486B", ratio: 70, role: "base"  },
      { hex: "#AF5B56", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","톤인톤","레드"] },

  { id: "gen-425", name: "더스티로즈 위에 피스타치오 한 점", searchAliases: ["핑크 × 옐로우 3색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C77DA3", ratio: 60, role: "base"  },
      { hex: "#C69B89", ratio: 30, role: "sub"   },
      { hex: "#BAC178", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","파스텔","톤인톤","오렌지"] },

  { id: "gen-426", name: "산딸기색과 벽돌색, 연두", searchAliases: ["핑크 × 시안 5색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C75893", ratio: 30, role: "base"  },
      { hex: "#B86749", ratio: 25, role: "sub"   },
      { hex: "#AAB23E", ratio: 20, role: "sub"   },
      { hex: "#61C651", ratio: 15, role: "sub"   },
      { hex: "#5BCAA5", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","톤인톤","오렌지"] },

  { id: "gen-427", name: "난초색과 청보라 사이", searchAliases: ["핑크 × 블루 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#DF77C7", ratio: 70, role: "base"  },
      { hex: "#785BDA", ratio: 30, role: "point" }],
    tags: ["핑크","쿨톤","파스텔","톤인톤","블루"] },

  { id: "gen-428", name: "산딸기색 곁의 남보라", searchAliases: ["핑크 × 퍼플 3색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#AB496A", ratio: 60, role: "base"  },
      { hex: "#AC45A9", ratio: 30, role: "sub"   },
      { hex: "#55318C", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "톤인톤"] },

  { id: "gen-429", name: "산딸기색의 연두 테두리", searchAliases: ["핑크 × 그린 5색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C53687", ratio: 30, role: "base"  },
      { hex: "#CE3C4A", ratio: 25, role: "sub"   },
      { hex: "#C68259", ratio: 20, role: "sub"   },
      { hex: "#B9A437", ratio: 15, role: "sub"   },
      { hex: "#A8D04D", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","톤인톤","레드"] },

  { id: "gen-430", name: "모브에서 등꽃색까지", searchAliases: ["핑크 × 퍼플 2톤 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#BC749B", ratio: 70, role: "base"  },
      { hex: "#9A7EBA", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","뮤트","톤인톤","퍼플"] },

  { id: "gen-431", name: "자홍 위에 청보라 한 점", searchAliases: ["핑크 × 블루 3색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CB4BB5", ratio: 60, role: "base"  },
      { hex: "#BC6BDD", ratio: 30, role: "sub"   },
      { hex: "#7050D4", ratio: 10, role: "point" }],
    tags: ["핑크","쿨톤","톤인톤","퍼플"] },

  { id: "gen-432", name: "난초색과 자수정, 청자색", searchAliases: ["핑크 × 그린 5색 03"], scheme: "tone-in-tone",
    colors: [
      { hex: "#BD80B4", ratio: 30, role: "base"  },
      { hex: "#9077BD", ratio: 25, role: "sub"   },
      { hex: "#A1B2C8", ratio: 20, role: "sub"   },
      { hex: "#96CEC0", ratio: 15, role: "sub"   },
      { hex: "#87BE84", ratio: 10, role: "point" }],
    tags: ["핑크","쿨톤","뮤트","톤인톤","퍼플"] },

  { id: "gen-433", name: "홍매색 바탕의 석류", searchAliases: ["핑크 × 레드 2톤 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#B5256E", ratio: 70, role: "base"  },
      { hex: "#AC262B", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","비비드","톤인톤","레드"] },

  { id: "gen-434", name: "홍매색과 짙은 보라", searchAliases: ["핑크 × 네이비 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#962C66", ratio: 60, role: "base"  },
      { hex: "#52208F", ratio: 30, role: "sub"   },
      { hex: "#1F4B6F", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","톤인톤","퍼플"] },

  { id: "gen-435", name: "자두 위에 겹친 녹청색", searchAliases: ["와인 × 옐로우 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#6E3F69", ratio: 30, role: "base"  },
      { hex: "#3A356C", ratio: 25, role: "sub"   },
      { hex: "#4D797E", ratio: 20, role: "sub"   },
      { hex: "#508A56", ratio: 15, role: "sub"   },
      { hex: "#888E51", ratio: 10, role: "point" }],
    tags: ["핑크","쿨톤","뮤트","톤인톤","블루"] },

  { id: "gen-436", name: "난초색과 테라코타 사이", searchAliases: ["핑크 × 레드 2톤 03"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D162C5", ratio: 70, role: "base"  },
      { hex: "#C86459", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","톤인톤","레드"] },

  { id: "gen-437", name: "더스티로즈 곁의 아이리스", searchAliases: ["핑크 × 블루 3색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CB7AA1", ratio: 60, role: "base"  },
      { hex: "#B87DCE", ratio: 30, role: "sub"   },
      { hex: "#656CC3", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","파스텔","톤인톤","퍼플"] },

  { id: "gen-438", name: "산딸기색과 캐러멜, 초록", searchAliases: ["핑크 × 블루 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C9427E", ratio: 30, role: "base"  },
      { hex: "#BC8135", ratio: 25, role: "sub"   },
      { hex: "#64B127", ratio: 20, role: "sub"   },
      { hex: "#29C07D", ratio: 15, role: "sub"   },
      { hex: "#3A76C2", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","톤인톤","오렌지"] },

  { id: "gen-439", name: "체리의 오렌지 테두리", searchAliases: ["핑크 × 오렌지 2톤 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CA2972", ratio: 70, role: "base"  },
      { hex: "#D8692E", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","비비드","톤인톤","오렌지"] },

  { id: "gen-440", name: "난초색에서 등꽃색까지", searchAliases: ["핑크 × 퍼플 3색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C575A1", ratio: 60, role: "base"  },
      { hex: "#C887C9", ratio: 30, role: "sub"   },
      { hex: "#A06FCB", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","톤인톤","퍼플"] },

  { id: "gen-441", name: "산딸기색과 풀색", searchAliases: ["핑크 × 시안 5색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#AD4D6F", ratio: 30, role: "base"  },
      { hex: "#946948", ratio: 25, role: "sub"   },
      { hex: "#8DA348", ratio: 20, role: "sub"   },
      { hex: "#54A557", ratio: 15, role: "sub"   },
      { hex: "#45998C", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","톤인톤","오렌지"] },

  { id: "gen-442", name: "자홍 바탕의 보라", searchAliases: ["핑크 × 퍼플 2톤 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CB3A9F", ratio: 70, role: "base"  },
      { hex: "#863ECC", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","톤인톤","퍼플"] },

  { id: "gen-443", name: "딸기우유 위에 겹친 벚꽃색", searchAliases: ["블러시 × 애프리콧 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#DC97B9", ratio: 60, role: "base"  },
      { hex: "#E7BBBD", ratio: 30, role: "sub"   },
      { hex: "#E0B694", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","파스텔","톤인톤","레드"] },

  { id: "gen-444", name: "산딸기색 바탕의 밝은 겨자", searchAliases: ["핑크 × 그린 5색 04"], scheme: "tone-in-tone",
    colors: [
      { hex: "#AF4B76", ratio: 30, role: "base"  },
      { hex: "#97503E", ratio: 25, role: "sub"   },
      { hex: "#BBAB59", ratio: 20, role: "sub"   },
      { hex: "#8BB65A", ratio: 15, role: "sub"   },
      { hex: "#48B653", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","톤인톤","레드"] },

  { id: "gen-445", name: "난초색의 겹빛", searchAliases: ["블러시 × 퍼플 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#EB75CD", ratio: 70, role: "base"  },
      { hex: "#CA61E6", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","비비드","톤인톤","퍼플"] },

  { id: "gen-446", name: "장밋빛 위에 밀짚색 한 점", searchAliases: ["핑크 × 크림 3색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D8639C", ratio: 60, role: "base"  },
      { hex: "#D56451", ratio: 30, role: "sub"   },
      { hex: "#DBC782", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","톤인톤","레드"] },

  { id: "gen-447", name: "더스티로즈와 밀짚색 사이", searchAliases: ["핑크 × 그린 5색 05"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D67B9F", ratio: 30, role: "base"  },
      { hex: "#C97F79", ratio: 25, role: "sub"   },
      { hex: "#D1AE86", ratio: 20, role: "sub"   },
      { hex: "#D2D28A", ratio: 15, role: "sub"   },
      { hex: "#AED780", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","파스텔","톤인톤","레드"] },

  { id: "gen-448", name: "홍매색 곁의 벽돌색", searchAliases: ["핑크 × 레드 2톤 04"], scheme: "tone-in-tone",
    colors: [
      { hex: "#9B497B", ratio: 70, role: "base"  },
      { hex: "#B3615E", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","톤인톤","레드"] },

  { id: "gen-449", name: "난초색 바탕의 밝은 라임", searchAliases: ["핑크 × 옐로우 3색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D562CA", ratio: 60, role: "base"  },
      { hex: "#DF8A80", ratio: 30, role: "sub"   },
      { hex: "#CED870", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","톤인톤","레드"] },

  { id: "gen-450", name: "난초색 위에 연두 한 점", searchAliases: ["블러시 × 그린 5색"], scheme: "tone-in-tone",
    colors: [
      { hex: "#DE84D0", ratio: 30, role: "base"  },
      { hex: "#D77377", ratio: 25, role: "sub"   },
      { hex: "#DAC072", ratio: 20, role: "sub"   },
      { hex: "#A0D476", ratio: 15, role: "sub"   },
      { hex: "#81D9A0", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","파스텔","톤인톤","레드"] },

  { id: "gen-451", name: "난초색의 살구 테두리", searchAliases: ["핑크 × 애프리콧 2톤"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D279B2", ratio: 70, role: "base"  },
      { hex: "#DFB298", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","파스텔","톤인톤","오렌지"] },

  { id: "gen-452", name: "짙은 자주 바탕의 연두", searchAliases: ["와인 × 그린 2톤 01"], scheme: "complementary",
    colors: [
      { hex: "#611B50", ratio: 70, role: "base"  },
      { hex: "#6FD18E", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","딥","보색","그린"] },

  { id: "gen-453", name: "와인 바탕의 밝은 연두", searchAliases: ["와인 × 그린 3색 01"], scheme: "complementary",
    colors: [
      { hex: "#7C1459", ratio: 60, role: "base"  },
      { hex: "#6DE298", ratio: 30, role: "sub"   },
      { hex: "#DFD3DB", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","보색","그린"] },

  { id: "gen-454", name: "검붉은색과 홍매색, 연분홍", searchAliases: ["와인 × 포레스트 5색 01"], scheme: "complementary",
    colors: [
      { hex: "#4E192C", ratio: 30, role: "base"  },
      { hex: "#9A4060", ratio: 25, role: "sub"   },
      { hex: "#EAE5E6", ratio: 20, role: "sub"   },
      { hex: "#7AC6A3", ratio: 15, role: "sub"   },
      { hex: "#2B845B", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "보색"] },

  { id: "gen-455", name: "와인과 연두", searchAliases: ["와인 × 그린 2톤 02"], scheme: "complementary",
    colors: [
      { hex: "#7E1856", ratio: 70, role: "base"  },
      { hex: "#55DB93", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","비비드","보색","그린"] },

  { id: "gen-456", name: "홍매색 위에 겹친 연두", searchAliases: ["와인 × 그린 3색 02"], scheme: "complementary",
    colors: [
      { hex: "#A21082", ratio: 60, role: "base"  },
      { hex: "#2FDB47", ratio: 30, role: "sub"   },
      { hex: "#E8DCE5", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","보색","그린"] },

  { id: "gen-457", name: "버건디와 연분홍 사이", searchAliases: ["와인 × 그린 5색 01"], scheme: "complementary",
    colors: [
      { hex: "#5D082B", ratio: 30, role: "base"  },
      { hex: "#A41A52", ratio: 25, role: "sub"   },
      { hex: "#E8DFE3", ratio: 20, role: "sub"   },
      { hex: "#65E097", ratio: 15, role: "sub"   },
      { hex: "#11B855", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "보색"] },

  { id: "gen-458", name: "와인 곁의 연두", searchAliases: ["와인 × 그린 2톤 03"], scheme: "complementary",
    colors: [
      { hex: "#931854", ratio: 70, role: "base"  },
      { hex: "#3EDE78", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","비비드","보색","그린"] },

  { id: "gen-459", name: "와인 바탕의 밝은 옥색", searchAliases: ["와인 × 그린 3색 03"], scheme: "complementary",
    colors: [
      { hex: "#8D2460", ratio: 60, role: "base"  },
      { hex: "#69CC96", ratio: 30, role: "sub"   },
      { hex: "#E4DBE0", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","보색","그린"] },

  { id: "gen-460", name: "짙은 자주와 와인, 연분홍", searchAliases: ["와인 × 포레스트 5색 02"], scheme: "complementary",
    colors: [
      { hex: "#4E122F", ratio: 30, role: "base"  },
      { hex: "#8B2B5A", ratio: 25, role: "sub"   },
      { hex: "#E4DCE0", ratio: 20, role: "sub"   },
      { hex: "#6CC898", ratio: 15, role: "sub"   },
      { hex: "#209055", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "보색"] },

  { id: "gen-461", name: "자홍의 연두 테두리", searchAliases: ["핑크 × 그린 2톤 01"], scheme: "complementary",
    colors: [
      { hex: "#B022A3", ratio: 70, role: "base"  },
      { hex: "#73DE8A", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","비비드","보색","그린"] },

  { id: "gen-462", name: "홍매색 바탕의 연두", searchAliases: ["와인 × 그린 3색 04"], scheme: "complementary",
    colors: [
      { hex: "#95187B", ratio: 60, role: "base"  },
      { hex: "#59D586", ratio: 30, role: "sub"   },
      { hex: "#DACCD7", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","보색","그린"] },

  { id: "gen-463", name: "짙은 자주와 연분홍", searchAliases: ["와인 × 그린 5색 02"], scheme: "complementary",
    colors: [
      { hex: "#4F1942", ratio: 30, role: "base"  },
      { hex: "#993B82", ratio: 25, role: "sub"   },
      { hex: "#E5E0E4", ratio: 20, role: "sub"   },
      { hex: "#5BB36D", ratio: 15, role: "sub"   },
      { hex: "#2E9243", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "보색"] },

  { id: "gen-464", name: "홍매색과 연두 사이", searchAliases: ["핑크 × 민트 2톤"], scheme: "complementary",
    colors: [
      { hex: "#A82483", ratio: 70, role: "base"  },
      { hex: "#8CE29A", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","보색","그린"] },

  { id: "gen-465", name: "버건디 위에 겹친 연두", searchAliases: ["와인 × 그린 3색 05"], scheme: "complementary",
    colors: [
      { hex: "#631641", ratio: 60, role: "base"  },
      { hex: "#3ECA88", ratio: 30, role: "sub"   },
      { hex: "#D6CED3", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","딥","보색","그린"] },

  { id: "gen-466", name: "짙은 자주 곁의 연분홍", searchAliases: ["와인 × 그린 5색 03"], scheme: "complementary",
    colors: [
      { hex: "#5B1245", ratio: 30, role: "base"  },
      { hex: "#A1337F", ratio: 25, role: "sub"   },
      { hex: "#ECE5EA", ratio: 20, role: "sub"   },
      { hex: "#53CB84", ratio: 15, role: "sub"   },
      { hex: "#23AF5D", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "보색"] },

  { id: "gen-467", name: "홍매색의 연두 테두리", searchAliases: ["와인 × 그린 2톤 04"], scheme: "complementary",
    colors: [
      { hex: "#912182", ratio: 70, role: "base"  },
      { hex: "#49D250", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","보색","그린"] },

  { id: "gen-468", name: "와인 바탕의 연두", searchAliases: ["와인 × 그린 3색 06"], scheme: "complementary",
    colors: [
      { hex: "#820C4E", ratio: 60, role: "base"  },
      { hex: "#43DB9B", ratio: 30, role: "sub"   },
      { hex: "#E2D3DC", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","보색","그린"] },

  { id: "gen-469", name: "검붉은색과 홍매색, 석회색", searchAliases: ["와인 × 포레스트 5색 03"], scheme: "complementary",
    colors: [
      { hex: "#3B132A", ratio: 30, role: "base"  },
      { hex: "#914471", ratio: 25, role: "sub"   },
      { hex: "#DAD5D8", ratio: 20, role: "sub"   },
      { hex: "#59BE95", ratio: 15, role: "sub"   },
      { hex: "#2C8662", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "보색"] },

  { id: "gen-470", name: "홍매색 바탕의 밝은 연두", searchAliases: ["핑크 × 그린 2톤 02"], scheme: "complementary",
    colors: [
      { hex: "#932C80", ratio: 70, role: "base"  },
      { hex: "#68D07A", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","보색","그린"] },

  { id: "gen-471", name: "자두와 초록", searchAliases: ["와인 × 그린 3색 07"], scheme: "complementary",
    colors: [
      { hex: "#6D255A", ratio: 60, role: "base"  },
      { hex: "#50B66D", ratio: 30, role: "sub"   },
      { hex: "#E5E0E4", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","보색","그린"] },

  { id: "gen-472", name: "짙은 자주 위에 겹친 연분홍", searchAliases: ["와인 × 포레스트 5색 04"], scheme: "complementary",
    colors: [
      { hex: "#440C2F", ratio: 30, role: "base"  },
      { hex: "#95266B", ratio: 25, role: "sub"   },
      { hex: "#E6DDE2", ratio: 20, role: "sub"   },
      { hex: "#4AC366", ratio: 15, role: "sub"   },
      { hex: "#1A9736", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "보색"] },

  { id: "gen-473", name: "자두와 연두 사이", searchAliases: ["와인 × 그린 2톤 05"], scheme: "complementary",
    colors: [
      { hex: "#7B1966", ratio: 70, role: "base"  },
      { hex: "#7BDE86", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","비비드","보색","그린"] },

  { id: "gen-474", name: "버건디 곁의 연두", searchAliases: ["와인 × 그린 3색 08"], scheme: "complementary",
    colors: [
      { hex: "#6D0C39", ratio: 60, role: "base"  },
      { hex: "#37D97B", ratio: 30, role: "sub"   },
      { hex: "#E8DAE1", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","딥","보색","그린"] },

  { id: "gen-475", name: "자주색 꽃받침과 풀잎", searchAliases: ["와인 × 그린 5색 04"], scheme: "complementary",
    colors: [
      { hex: "#660F59", ratio: 30, role: "base"  },
      { hex: "#AB2A97", ratio: 25, role: "sub"   },
      { hex: "#E1D2DF", ratio: 20, role: "sub"   },
      { hex: "#4EC74A", ratio: 15, role: "sub"   },
      { hex: "#1FB119", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "보색"] },

  { id: "gen-476", name: "버건디의 민트 테두리", searchAliases: ["와인 × 민트 2톤"], scheme: "complementary",
    colors: [
      { hex: "#681B3D", ratio: 70, role: "base"  },
      { hex: "#88DABA", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","딥","보색","그린"] },

  { id: "gen-477", name: "홍매색과 연두", searchAliases: ["핑크 × 그린 3색"], scheme: "complementary",
    colors: [
      { hex: "#A41768", ratio: 60, role: "base"  },
      { hex: "#45DE9A", ratio: 30, role: "sub"   },
      { hex: "#E1D7DD", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","보색","그린"] },

  { id: "gen-478", name: "적자색 가지와 비취 잎", searchAliases: ["와인 × 그린 5색 05"], scheme: "complementary",
    colors: [
      { hex: "#4A1933", ratio: 30, role: "base"  },
      { hex: "#80325B", ratio: 25, role: "sub"   },
      { hex: "#E9E4E7", ratio: 20, role: "sub"   },
      { hex: "#5DB494", ratio: 15, role: "sub"   },
      { hex: "#339A74", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "보색"] },

  { id: "gen-479", name: "자두 바탕의 밝은 연두", searchAliases: ["와인 × 그린 2톤 06"], scheme: "complementary",
    colors: [
      { hex: "#841A78", ratio: 70, role: "base"  },
      { hex: "#76DC78", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","비비드","보색","그린"] },

  { id: "gen-480", name: "홍매색 곁의 연두", searchAliases: ["와인 × 그린 3색 09"], scheme: "complementary",
    colors: [
      { hex: "#9B0F6B", ratio: 60, role: "base"  },
      { hex: "#2DE98D", ratio: 30, role: "sub"   },
      { hex: "#E0C8D8", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","비비드","보색","그린"] },

  { id: "gen-481", name: "검붉은색과 와인, 연분홍", searchAliases: ["와인 × 그린 5색 06"], scheme: "complementary",
    colors: [
      { hex: "#461A2B", ratio: 30, role: "base"  },
      { hex: "#783952", ratio: 25, role: "sub"   },
      { hex: "#E0DBDD", ratio: 20, role: "sub"   },
      { hex: "#5DBB9B", ratio: 15, role: "sub"   },
      { hex: "#369273", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "보색"] },

  { id: "gen-482", name: "자홍빛 꽃잎과 선명한 민트", searchAliases: ["핑크 × 그린 2톤 03"], scheme: "complementary",
    colors: [
      { hex: "#A41E83", ratio: 70, role: "base"  },
      { hex: "#51DC88", ratio: 30, role: "point" }],
    tags: ["핑크","웜톤","비비드","보색","그린"] },

  { id: "gen-483", name: "와인 바탕의 옥색", searchAliases: ["와인 × 그린 3색 10"], scheme: "complementary",
    colors: [
      { hex: "#742347", ratio: 60, role: "base"  },
      { hex: "#6DD2AF", ratio: 30, role: "sub"   },
      { hex: "#E3DADE", ratio: 10, role: "point" }],
    tags: ["핑크","웜톤","보색","그린"] },

  { id: "gen-484", name: "검붉은색 위에 겹친 빙하색", searchAliases: ["와인 × 포레스트 5색 05"], scheme: "complementary",
    colors: [
      { hex: "#471428", ratio: 30, role: "base"  },
      { hex: "#8D3859", ratio: 25, role: "sub"   },
      { hex: "#ECE9EA", ratio: 20, role: "sub"   },
      { hex: "#73CD9F", ratio: 15, role: "sub"   },
      { hex: "#278A58", ratio: 10, role: "point" }],
    tags: ["핑크", "웜톤", "딥", "보색"] },

  { id: "gen-485", name: "차콜과 석회색 사이", searchAliases: ["잉크 2톤 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3B3735", ratio: 70, role: "base"  },
      { hex: "#D8D5D4", ratio: 30, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-486", name: "잉크 네이비 위에 안개색 한 점", searchAliases: ["잉크 3색 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#2B2C31", ratio: 60, role: "base"  },
      { hex: "#6B6E7B", ratio: 30, role: "sub"   },
      { hex: "#BBBDC4", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-487", name: "흑단 위에 빙하색 한 점", searchAliases: ["잉크 5색 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#252827", ratio: 30, role: "base"  },
      { hex: "#4E5553", ratio: 25, role: "sub"   },
      { hex: "#7B8482", ratio: 20, role: "sub"   },
      { hex: "#AAB1B0", ratio: 15, role: "sub"   },
      { hex: "#DFE2E1", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-488", name: "차콜의 안개색 테두리", searchAliases: ["잉크 2톤 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4C4346", ratio: 70, role: "base"  },
      { hex: "#CAC3C5", ratio: 30, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-489", name: "잉크 네이비 바탕의 밝은 안개색", searchAliases: ["잉크 3색 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#2F2A32", ratio: 60, role: "base"  },
      { hex: "#74697C", ratio: 30, role: "sub"   },
      { hex: "#C0BAC5", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-490", name: "흑단 위에 연분홍 한 점", searchAliases: ["잉크 5색 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#272428", ratio: 30, role: "base"  },
      { hex: "#534E55", ratio: 25, role: "sub"   },
      { hex: "#817A85", ratio: 20, role: "sub"   },
      { hex: "#AEAAB1", ratio: 15, role: "sub"   },
      { hex: "#E1DFE2", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-491", name: "차콜 바탕의 석회색", searchAliases: ["잉크 2톤 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3B3B35", ratio: 70, role: "base"  },
      { hex: "#D8D9D4", ratio: 30, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-492", name: "에스프레소 위에 안개색 한 점", searchAliases: ["잉크 3색 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#302C2E", ratio: 60, role: "base"  },
      { hex: "#786E72", ratio: 30, role: "sub"   },
      { hex: "#C2BCC0", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-493", name: "흑단과 차콜, 석회색", searchAliases: ["잉크 5색 03"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1F1C21", ratio: 30, role: "base"  },
      { hex: "#48424D", ratio: 25, role: "sub"   },
      { hex: "#776C7E", ratio: 20, role: "sub"   },
      { hex: "#A69CAA", ratio: 15, role: "sub"   },
      { hex: "#D1CED5", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-494", name: "차콜과 안개색", searchAliases: ["잉크 2톤 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#48424D", ratio: 70, role: "base"  },
      { hex: "#C7C3CB", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-495", name: "짙은 솔잎색 위에 겹친 안개색", searchAliases: ["잉크 3색 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#2C312B", ratio: 60, role: "base"  },
      { hex: "#6F7B6B", ratio: 30, role: "sub"   },
      { hex: "#BDC4BB", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-496", name: "흑단과 석회색 사이", searchAliases: ["잉크 5색 04"], scheme: "tone-on-tone",
    colors: [
      { hex: "#201F1D", ratio: 30, role: "base"  },
      { hex: "#4B4944", ratio: 25, role: "sub"   },
      { hex: "#7B7970", ratio: 20, role: "sub"   },
      { hex: "#A7A59F", ratio: 15, role: "sub"   },
      { hex: "#D3D2CF", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-497", name: "연필심 곁의 안개색", searchAliases: ["그레이 2톤 01"], scheme: "tone-on-tone",
    colors: [
      { hex: "#545D5F", ratio: 70, role: "base"  },
      { hex: "#B3BBBC", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤온톤"] },

  { id: "gen-498", name: "에스프레소의 안개색 테두리", searchAliases: ["잉크 3색 05"], scheme: "tone-on-tone",
    colors: [
      { hex: "#312B30", ratio: 60, role: "base"  },
      { hex: "#7A6B76", ratio: 30, role: "sub"   },
      { hex: "#C3BBC2", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-499", name: "흑단 바탕의 밝은 연분홍", searchAliases: ["잉크 5색 05"], scheme: "tone-on-tone",
    colors: [
      { hex: "#272428", ratio: 30, role: "base"  },
      { hex: "#544D56", ratio: 25, role: "sub"   },
      { hex: "#827887", ratio: 20, role: "sub"   },
      { hex: "#AFA9B2", ratio: 15, role: "sub"   },
      { hex: "#E1DFE2", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-500", name: "솔잎색 바탕의 안개색", searchAliases: ["잉크 2톤 05"], scheme: "tone-on-tone",
    colors: [
      { hex: "#546052", ratio: 70, role: "base"  },
      { hex: "#B3BDB2", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤온톤"] },

  { id: "gen-501", name: "에스프레소와 안개색", searchAliases: ["잉크 3색 06"], scheme: "tone-on-tone",
    colors: [
      { hex: "#312B2C", ratio: 60, role: "base"  },
      { hex: "#7A6C6F", ratio: 30, role: "sub"   },
      { hex: "#C3BBBD", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-502", name: "흑단 위에 석회색 한 점", searchAliases: ["잉크 5색 06"], scheme: "tone-on-tone",
    colors: [
      { hex: "#211D1D", ratio: 30, role: "base"  },
      { hex: "#4C4443", ratio: 25, role: "sub"   },
      { hex: "#7D6E6E", ratio: 20, role: "sub"   },
      { hex: "#A99D9D", ratio: 15, role: "sub"   },
      { hex: "#D4CECE", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-503", name: "차콜 곁의 석회색", searchAliases: ["잉크 2톤 06"], scheme: "tone-on-tone",
    colors: [
      { hex: "#343C34", ratio: 70, role: "base"  },
      { hex: "#D3D9D3", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-504", name: "차콜 바탕의 밝은 석회색", searchAliases: ["잉크 3색 07"], scheme: "tone-on-tone",
    colors: [
      { hex: "#39363A", ratio: 60, role: "base"  },
      { hex: "#807A85", ratio: 30, role: "sub"   },
      { hex: "#D2CFD3", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-505", name: "흑단과 다크 올리브, 석회색", searchAliases: ["잉크 5색 07"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1F211C", ratio: 30, role: "base"  },
      { hex: "#494D42", ratio: 25, role: "sub"   },
      { hex: "#767F6C", ratio: 20, role: "sub"   },
      { hex: "#A4AB9C", ratio: 15, role: "sub"   },
      { hex: "#D2D5CD", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-506", name: "차콜 위에 겹친 안개색", searchAliases: ["잉크 2톤 07"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4B4446", ratio: 70, role: "base"  },
      { hex: "#C9C4C6", ratio: 30, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-507", name: "차콜 위에 석회색 한 점", searchAliases: ["잉크 3색 08"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3C3C34", ratio: 60, role: "base"  },
      { hex: "#888877", ratio: 30, role: "sub"   },
      { hex: "#D3D4CE", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-508", name: "흑단과 연보라 사이", searchAliases: ["잉크 5색 08"], scheme: "tone-on-tone",
    colors: [
      { hex: "#23262A", ratio: 30, role: "base"  },
      { hex: "#4A5059", ratio: 25, role: "sub"   },
      { hex: "#747D8B", ratio: 20, role: "sub"   },
      { hex: "#A6ADB5", ratio: 15, role: "sub"   },
      { hex: "#DEE0E3", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-509", name: "딥 틸의 안개색 테두리", searchAliases: ["잉크 2톤 08"], scheme: "tone-on-tone",
    colors: [
      { hex: "#434C43", ratio: 70, role: "base"  },
      { hex: "#C3CBC4", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-510", name: "차콜과 석회색", searchAliases: ["잉크 3색 09"], scheme: "tone-on-tone",
    colors: [
      { hex: "#353C36", ratio: 60, role: "base"  },
      { hex: "#78877B", ratio: 30, role: "sub"   },
      { hex: "#CED4D0", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-511", name: "차콜과 연필심, 석회색", searchAliases: ["잉크 5색 09"], scheme: "tone-on-tone",
    colors: [
      { hex: "#323135", ratio: 30, role: "base"  },
      { hex: "#5A585F", ratio: 25, role: "sub"   },
      { hex: "#82808A", ratio: 20, role: "sub"   },
      { hex: "#B0AFB6", ratio: 15, role: "sub"   },
      { hex: "#DBDADD", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-512", name: "가지색 바탕의 안개색", searchAliases: ["잉크 2톤 09"], scheme: "tone-on-tone",
    colors: [
      { hex: "#4E414D", ratio: 70, role: "base"  },
      { hex: "#CCC2CC", ratio: 30, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-513", name: "에스프레소 위에 겹친 안개색", searchAliases: ["잉크 3색 10"], scheme: "tone-on-tone",
    colors: [
      { hex: "#2C2C30", ratio: 60, role: "base"  },
      { hex: "#6E6F78", ratio: 30, role: "sub"   },
      { hex: "#BDBCC2", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-514", name: "흑단과 연분홍 사이", searchAliases: ["잉크 5색 10"], scheme: "tone-on-tone",
    colors: [
      { hex: "#272428", ratio: 30, role: "base"  },
      { hex: "#534D56", ratio: 25, role: "sub"   },
      { hex: "#817986", ratio: 20, role: "sub"   },
      { hex: "#AEA9B2", ratio: 15, role: "sub"   },
      { hex: "#E1DFE2", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-515", name: "따뜻한 먹과 잿빛 종이", searchAliases: ["잉크 2톤 10"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3B3835", ratio: 70, role: "base"  },
      { hex: "#D9D6D4", ratio: 30, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-516", name: "녹회색 안개와 짙은 솔그늘", searchAliases: ["잉크 3색 11"], scheme: "tone-on-tone",
    colors: [
      { hex: "#343C36", ratio: 60, role: "base"  },
      { hex: "#77887B", ratio: 30, role: "sub"   },
      { hex: "#CED4CF", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-517", name: "흑단 곁의 연분홍", searchAliases: ["잉크 5색 11"], scheme: "tone-on-tone",
    colors: [
      { hex: "#262527", ratio: 30, role: "base"  },
      { hex: "#514F54", ratio: 25, role: "sub"   },
      { hex: "#7F7C83", ratio: 20, role: "sub"   },
      { hex: "#ADABB0", ratio: 15, role: "sub"   },
      { hex: "#E0DFE1", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-518", name: "딥 틸 바탕의 밝은 안개색", searchAliases: ["잉크 2톤 11"], scheme: "tone-on-tone",
    colors: [
      { hex: "#434B46", ratio: 70, role: "base"  },
      { hex: "#C4CAC6", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-519", name: "재에 섞인 보랏빛", searchAliases: ["잉크 3색 12"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3A363A", ratio: 60, role: "base"  },
      { hex: "#847B84", ratio: 30, role: "sub"   },
      { hex: "#D3D0D2", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-520", name: "흑단의 연분홍 테두리", searchAliases: ["잉크 5색 12"], scheme: "tone-on-tone",
    colors: [
      { hex: "#282428", ratio: 30, role: "base"  },
      { hex: "#534D56", ratio: 25, role: "sub"   },
      { hex: "#847887", ratio: 20, role: "sub"   },
      { hex: "#AFA9B2", ratio: 15, role: "sub"   },
      { hex: "#E1DFE2", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-521", name: "딥 틸 바탕의 안개색", searchAliases: ["잉크 2톤 12"], scheme: "tone-on-tone",
    colors: [
      { hex: "#424A4D", ratio: 70, role: "base"  },
      { hex: "#C3C9CB", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-522", name: "흑연 가루와 회청빛 안개", searchAliases: ["잉크 3색 13"], scheme: "tone-on-tone",
    colors: [
      { hex: "#35353C", ratio: 60, role: "base"  },
      { hex: "#777888", ratio: 30, role: "sub"   },
      { hex: "#CECFD4", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-523", name: "흑단과 석회색", searchAliases: ["잉크 5색 13"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1E201D", ratio: 30, role: "base"  },
      { hex: "#474C43", ratio: 25, role: "sub"   },
      { hex: "#757C6E", ratio: 20, role: "sub"   },
      { hex: "#A3A99E", ratio: 15, role: "sub"   },
      { hex: "#D1D4CE", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-524", name: "연필심 위에 겹친 안개색", searchAliases: ["잉크 2톤 13"], scheme: "tone-on-tone",
    colors: [
      { hex: "#565B5C", ratio: 70, role: "base"  },
      { hex: "#B5B9BA", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤온톤"] },

  { id: "gen-525", name: "짙은 청록 위에 안개색 한 점", searchAliases: ["잉크 3색 14"], scheme: "tone-on-tone",
    colors: [
      { hex: "#2B3030", ratio: 60, role: "base"  },
      { hex: "#6D7976", ratio: 30, role: "sub"   },
      { hex: "#BCC3C1", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-526", name: "에스프레소와 연필심, 연보라", searchAliases: ["잉크 5색 14"], scheme: "tone-on-tone",
    colors: [
      { hex: "#372F35", ratio: 30, role: "base"  },
      { hex: "#63555E", ratio: 25, role: "sub"   },
      { hex: "#8E7B88", ratio: 20, role: "sub"   },
      { hex: "#B8ADB6", ratio: 15, role: "sub"   },
      { hex: "#DED9DD", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-527", name: "푸른 기 머금은 재", searchAliases: ["잉크 2톤 14"], scheme: "tone-on-tone",
    colors: [
      { hex: "#353B35", ratio: 70, role: "base"  },
      { hex: "#D4D8D4", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-528", name: "올리브 그늘의 회색 층", searchAliases: ["잉크 3색 15"], scheme: "tone-on-tone",
    colors: [
      { hex: "#373B35", ratio: 60, role: "base"  },
      { hex: "#7E8679", ratio: 30, role: "sub"   },
      { hex: "#D1D3CF", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-529", name: "흑단과 연필심, 연분홍", searchAliases: ["잉크 5색 15"], scheme: "tone-on-tone",
    colors: [
      { hex: "#282525", ratio: 30, role: "base"  },
      { hex: "#554F4F", ratio: 25, role: "sub"   },
      { hex: "#847D7B", ratio: 20, role: "sub"   },
      { hex: "#B0ACAA", ratio: 15, role: "sub"   },
      { hex: "#E2E0DF", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-530", name: "마른 잉크와 연한 회보라", searchAliases: ["잉크 2톤 15"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3D333C", ratio: 70, role: "base"  },
      { hex: "#DAD3D9", ratio: 30, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-531", name: "에스프레소와 안개색 사이", searchAliases: ["잉크 3색 16"], scheme: "tone-on-tone",
    colors: [
      { hex: "#2E312B", ratio: 60, role: "base"  },
      { hex: "#737A6C", ratio: 30, role: "sub"   },
      { hex: "#C1C3BB", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-532", name: "흑단 곁의 석회색", searchAliases: ["잉크 5색 16"], scheme: "tone-on-tone",
    colors: [
      { hex: "#1D1F20", ratio: 30, role: "base"  },
      { hex: "#43494B", ratio: 25, role: "sub"   },
      { hex: "#6F777C", ratio: 20, role: "sub"   },
      { hex: "#9EA4A8", ratio: 15, role: "sub"   },
      { hex: "#CED2D4", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-533", name: "연필심의 안개색 테두리", searchAliases: ["잉크 2톤 16"], scheme: "tone-on-tone",
    colors: [
      { hex: "#5D5D55", ratio: 70, role: "base"  },
      { hex: "#BABBB4", ratio: 30, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤온톤"] },

  { id: "gen-534", name: "돌담에 남은 이끼빛", searchAliases: ["잉크 3색 17"], scheme: "tone-on-tone",
    colors: [
      { hex: "#393A36", ratio: 60, role: "base"  },
      { hex: "#80857A", ratio: 30, role: "sub"   },
      { hex: "#D2D3CF", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-535", name: "흑단 바탕의 밝은 빙하색", searchAliases: ["잉크 5색 17"], scheme: "tone-on-tone",
    colors: [
      { hex: "#232A25", ratio: 30, role: "base"  },
      { hex: "#4B5950", ratio: 25, role: "sub"   },
      { hex: "#758A7E", ratio: 20, role: "sub"   },
      { hex: "#A6B4AB", ratio: 15, role: "sub"   },
      { hex: "#DEE3E0", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-536", name: "검은 돌과 옅은 회벽", searchAliases: ["잉크 2톤 17"], scheme: "tone-on-tone",
    colors: [
      { hex: "#3A3636", ratio: 70, role: "base"  },
      { hex: "#D8D5D4", ratio: 30, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤온톤"] },

  { id: "gen-537", name: "청록 기 도는 잿빛 수면", searchAliases: ["잉크 3색 18"], scheme: "tone-on-tone",
    colors: [
      { hex: "#343D3A", ratio: 60, role: "base"  },
      { hex: "#758A84", ratio: 30, role: "sub"   },
      { hex: "#CDD5D2", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-538", name: "흑단과 연분홍", searchAliases: ["잉크 5색 18"], scheme: "tone-on-tone",
    colors: [
      { hex: "#242528", ratio: 30, role: "base"  },
      { hex: "#4D5056", ratio: 25, role: "sub"   },
      { hex: "#797D86", ratio: 20, role: "sub"   },
      { hex: "#A9ACB2", ratio: 15, role: "sub"   },
      { hex: "#DFE0E2", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤온톤"] },

  { id: "gen-539", name: "연필심 바탕의 은회색", searchAliases: ["그레이 2톤 02"], scheme: "tone-on-tone",
    colors: [
      { hex: "#55545F", ratio: 70, role: "base"  },
      { hex: "#B4B3BC", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤온톤"] },

  { id: "gen-540", name: "안개색 위에 겹친 은회색", searchAliases: ["실버 2톤 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#BEBEC5", ratio: 70, role: "base"  },
      { hex: "#A9A7AA", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "파스텔", "톤인톤"] },

  { id: "gen-541", name: "은회색과 안개색 사이", searchAliases: ["실버 3색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#B6B6B9", ratio: 60, role: "base"  },
      { hex: "#BBBEBF", ratio: 30, role: "sub"   },
      { hex: "#9DB0AB", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-542", name: "은회색 위에 석회색 한 점", searchAliases: ["실버 5색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#B0B4B8", ratio: 30, role: "base"  },
      { hex: "#C7C3CA", ratio: 25, role: "sub"   },
      { hex: "#C2BFC1", ratio: 20, role: "sub"   },
      { hex: "#C0BBB6", ratio: 15, role: "sub"   },
      { hex: "#D3D7CE", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-543", name: "슬레이트의 옅고 짙은 결", searchAliases: ["그레이 2톤 03"], scheme: "tone-in-tone",
    colors: [
      { hex: "#727371", ratio: 70, role: "base"  },
      { hex: "#68686C", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-544", name: "안개색의 겹빛", searchAliases: ["실버 3색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C9C9BC", ratio: 60, role: "base"  },
      { hex: "#B9BDB3", ratio: 30, role: "sub"   },
      { hex: "#B4BFB3", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "파스텔", "톤인톤"] },

  { id: "gen-545", name: "은회색 곁의 회청색", searchAliases: ["실버 5색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#BDB4BF", ratio: 30, role: "base"  },
      { hex: "#9D9DA5", ratio: 25, role: "sub"   },
      { hex: "#B3BABD", ratio: 20, role: "sub"   },
      { hex: "#A6AEAA", ratio: 15, role: "sub"   },
      { hex: "#BFC1BD", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-546", name: "슬레이트의 솔잎색 테두리", searchAliases: ["그레이 2톤 04"], scheme: "tone-in-tone",
    colors: [
      { hex: "#5E6A6E", ratio: 70, role: "base"  },
      { hex: "#5D6862", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-547", name: "회보라 바탕의 모브", searchAliases: ["그레이 3색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#A8A1B3", ratio: 60, role: "base"  },
      { hex: "#A28A99", ratio: 30, role: "sub"   },
      { hex: "#9F958F", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-548", name: "차콜과 연필심", searchAliases: ["잉크 5색 19"], scheme: "tone-in-tone",
    colors: [
      { hex: "#4B4340", ratio: 30, role: "base"  },
      { hex: "#5B5C56", ratio: 25, role: "sub"   },
      { hex: "#575D59", ratio: 20, role: "sub"   },
      { hex: "#445055", ratio: 15, role: "sub"   },
      { hex: "#535256", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "딥", "톤인톤"] },

  { id: "gen-549", name: "코코아 위에 겹친 연필심", searchAliases: ["그레이 2톤 05"], scheme: "tone-in-tone",
    colors: [
      { hex: "#6B6A64", ratio: 70, role: "base"  },
      { hex: "#5B544E", ratio: 30, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-550", name: "코코아와 슬레이트 사이", searchAliases: ["그레이 3색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#6C6963", ratio: 60, role: "base"  },
      { hex: "#757577", ratio: 30, role: "sub"   },
      { hex: "#707170", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-551", name: "웜그레이와 회보라, 안개색", searchAliases: ["그레이 5색 01"], scheme: "tone-in-tone",
    colors: [
      { hex: "#A19FA4", ratio: 30, role: "base"  },
      { hex: "#AAA0A9", ratio: 25, role: "sub"   },
      { hex: "#C5B9BC", ratio: 20, role: "sub"   },
      { hex: "#BCB3AE", ratio: 15, role: "sub"   },
      { hex: "#B5B5AA", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-552", name: "백랍 곁의 슬레이트", searchAliases: ["그레이 2톤 06"], scheme: "tone-in-tone",
    colors: [
      { hex: "#8B9083", ratio: 70, role: "base"  },
      { hex: "#787569", ratio: 30, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-553", name: "연필심 위에 카키브라운 한 점", searchAliases: ["그레이 3색 03"], scheme: "tone-in-tone",
    colors: [
      { hex: "#586363", ratio: 60, role: "base"  },
      { hex: "#525852", ratio: 30, role: "sub"   },
      { hex: "#76755F", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-554", name: "솔잎색 위에 슬레이트 한 점", searchAliases: ["그레이 5색 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#626D62", ratio: 30, role: "base"  },
      { hex: "#707060", ratio: 25, role: "sub"   },
      { hex: "#7E6C6B", ratio: 20, role: "sub"   },
      { hex: "#7C6D7B", ratio: 15, role: "sub"   },
      { hex: "#59595C", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-555", name: "슬레이트의 연필심 테두리", searchAliases: ["그레이 2톤 07"], scheme: "tone-in-tone",
    colors: [
      { hex: "#636874", ratio: 70, role: "base"  },
      { hex: "#565958", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-556", name: "돌빛 바탕의 백랍", searchAliases: ["그레이 3색 04"], scheme: "tone-in-tone",
    colors: [
      { hex: "#718A88", ratio: 60, role: "base"  },
      { hex: "#8DA08B", ratio: 30, role: "sub"   },
      { hex: "#959485", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-557", name: "안개색과 은회색, 회보라", searchAliases: ["실버 5색 03"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C5C6BE", ratio: 30, role: "base"  },
      { hex: "#C9C0BF", ratio: 25, role: "sub"   },
      { hex: "#BBAAB9", ratio: 20, role: "sub"   },
      { hex: "#BDBCC2", ratio: 15, role: "sub"   },
      { hex: "#9FA6A7", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "파스텔", "톤인톤"] },

  { id: "gen-558", name: "연필심과 다크 올리브", searchAliases: ["잉크 2톤 18"], scheme: "tone-in-tone",
    colors: [
      { hex: "#48534D", ratio: 70, role: "base"  },
      { hex: "#53594A", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-559", name: "코코아 위에 겹친 돌빛", searchAliases: ["그레이 3색 05"], scheme: "tone-in-tone",
    colors: [
      { hex: "#666559", ratio: 60, role: "base"  },
      { hex: "#717D68", ratio: 30, role: "sub"   },
      { hex: "#4D5F50", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-560", name: "돌빛과 백랍 사이", searchAliases: ["그레이 5색 03"], scheme: "tone-in-tone",
    colors: [
      { hex: "#8C7888", ratio: 30, role: "base"  },
      { hex: "#8C8B8C", ratio: 25, role: "sub"   },
      { hex: "#9F9286", ratio: 20, role: "sub"   },
      { hex: "#939581", ratio: 15, role: "sub"   },
      { hex: "#8C9589", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-561", name: "연필심의 옅고 짙은 결", searchAliases: ["잉크 2톤 19"], scheme: "tone-in-tone",
    colors: [
      { hex: "#535E57", ratio: 70, role: "base"  },
      { hex: "#575D55", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-562", name: "안개색 곁의 은회색", searchAliases: ["실버 3색 03"], scheme: "tone-in-tone",
    colors: [
      { hex: "#C4C3CA", ratio: 60, role: "base"  },
      { hex: "#B2B6B7", ratio: 30, role: "sub"   },
      { hex: "#B8BBB8", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "파스텔", "톤인톤"] },

  { id: "gen-563", name: "은회색과 머시룸, 웜그레이", searchAliases: ["실버 5색 04"], scheme: "tone-in-tone",
    colors: [
      { hex: "#B2B6AD", ratio: 30, role: "base"  },
      { hex: "#B3B2AD", ratio: 25, role: "sub"   },
      { hex: "#A3A19F", ratio: 20, role: "sub"   },
      { hex: "#B2A3A3", ratio: 15, role: "sub"   },
      { hex: "#BDACB4", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-564", name: "토프의 백랍 테두리", searchAliases: ["그레이 2톤 08"], scheme: "tone-in-tone",
    colors: [
      { hex: "#94878E", ratio: 70, role: "base"  },
      { hex: "#999596", ratio: 30, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-565", name: "안개색의 옅고 짙은 결", searchAliases: ["실버 3색 04"], scheme: "tone-in-tone",
    colors: [
      { hex: "#BFB7B8", ratio: 60, role: "base"  },
      { hex: "#C0C0C0", ratio: 30, role: "sub"   },
      { hex: "#B7B8BE", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-566", name: "연필심과 고동색", searchAliases: ["잉크 5색 20"], scheme: "tone-in-tone",
    colors: [
      { hex: "#5B5355", ratio: 30, role: "base"  },
      { hex: "#4D4740", ratio: 25, role: "sub"   },
      { hex: "#5B6054", ratio: 20, role: "sub"   },
      { hex: "#576559", ratio: 15, role: "sub"   },
      { hex: "#5C6E6D", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-567", name: "석회색 바탕의 안개색", searchAliases: ["실버 2톤 02"], scheme: "tone-in-tone",
    colors: [
      { hex: "#D0D4CA", ratio: 70, role: "base"  },
      { hex: "#B3BBB3", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "파스텔", "톤인톤"] },

  { id: "gen-568", name: "석회색 위에 안개색 한 점", searchAliases: ["실버 3색 05"], scheme: "tone-in-tone",
    colors: [
      { hex: "#CFCEC5", ratio: 60, role: "base"  },
      { hex: "#D2CCCA", ratio: 30, role: "sub"   },
      { hex: "#CFC4C8", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "파스텔", "톤인톤"] },

  { id: "gen-569", name: "돌빛 위에 겹친 웜그레이", searchAliases: ["그레이 5색 04"], scheme: "tone-in-tone",
    colors: [
      { hex: "#7C8493", ratio: 30, role: "base"  },
      { hex: "#A0A0A1", ratio: 25, role: "sub"   },
      { hex: "#948F98", ratio: 20, role: "sub"   },
      { hex: "#907E8E", ratio: 15, role: "sub"   },
      { hex: "#A09399", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-570", name: "돌빛 곁의 백랍", searchAliases: ["그레이 2톤 09"], scheme: "tone-in-tone",
    colors: [
      { hex: "#7F8080", ratio: 70, role: "base"  },
      { hex: "#8A908F", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-571", name: "슬레이트와 돌빛 사이", searchAliases: ["그레이 3색 06"], scheme: "tone-in-tone",
    colors: [
      { hex: "#6B6A6B", ratio: 60, role: "base"  },
      { hex: "#758480", ratio: 30, role: "sub"   },
      { hex: "#757778", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-572", name: "연필심과 솔잎색, 차콜", searchAliases: ["그레이 5색 05"], scheme: "tone-in-tone",
    colors: [
      { hex: "#526068", ratio: 30, role: "base"  },
      { hex: "#3D3846", ratio: 25, role: "sub"   },
      { hex: "#4C464A", ratio: 20, role: "sub"   },
      { hex: "#413F3D", ratio: 15, role: "sub"   },
      { hex: "#636957", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-573", name: "머시룸의 안개색 테두리", searchAliases: ["그레이 2톤 10"], scheme: "tone-in-tone",
    colors: [
      { hex: "#B2A2A5", ratio: 70, role: "base"  },
      { hex: "#BDBCBC", ratio: 30, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-574", name: "모브에서 슬레이트까지", searchAliases: ["그레이 3색 07"], scheme: "tone-in-tone",
    colors: [
      { hex: "#8F748E", ratio: 60, role: "base"  },
      { hex: "#7F6A6A", ratio: 30, role: "sub"   },
      { hex: "#90907B", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-575", name: "슬레이트 위에 돌빛 한 점", searchAliases: ["그레이 5색 06"], scheme: "tone-in-tone",
    colors: [
      { hex: "#69686D", ratio: 30, role: "base"  },
      { hex: "#6B717B", ratio: 25, role: "sub"   },
      { hex: "#7B8282", ratio: 20, role: "sub"   },
      { hex: "#788B7F", ratio: 15, role: "sub"   },
      { hex: "#697266", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-576", name: "슬레이트의 겹빛", searchAliases: ["그레이 2톤 11"], scheme: "tone-in-tone",
    colors: [
      { hex: "#606778", ratio: 70, role: "base"  },
      { hex: "#646B6C", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-577", name: "딥 틸 바탕의 솔잎색", searchAliases: ["잉크 3색 19"], scheme: "tone-in-tone",
    colors: [
      { hex: "#414B4E", ratio: 60, role: "base"  },
      { hex: "#54655C", ratio: 30, role: "sub"   },
      { hex: "#4A5047", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "딥", "톤인톤"] },

  { id: "gen-578", name: "연필심과 돌빛", searchAliases: ["그레이 5색 07"], scheme: "tone-in-tone",
    colors: [
      { hex: "#675D63", ratio: 30, role: "base"  },
      { hex: "#635E64", ratio: 25, role: "sub"   },
      { hex: "#73727E", ratio: 20, role: "sub"   },
      { hex: "#585A5C", ratio: 15, role: "sub"   },
      { hex: "#6D8581", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-579", name: "웜그레이 위에 겹친 은회색", searchAliases: ["그레이 2톤 12"], scheme: "tone-in-tone",
    colors: [
      { hex: "#A29792", ratio: 70, role: "base"  },
      { hex: "#AFAEA3", ratio: 30, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-580", name: "모브에서 돌빛까지", searchAliases: ["그레이 3색 08"], scheme: "tone-in-tone",
    colors: [
      { hex: "#9C829A", ratio: 60, role: "base"  },
      { hex: "#928589", ratio: 30, role: "sub"   },
      { hex: "#9A887F", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-581", name: "백랍과 머시룸 사이", searchAliases: ["그레이 5색 08"], scheme: "tone-in-tone",
    colors: [
      { hex: "#959599", ratio: 30, role: "base"  },
      { hex: "#B6A9B5", ratio: 25, role: "sub"   },
      { hex: "#BDAEAD", ratio: 20, role: "sub"   },
      { hex: "#A8A99F", ratio: 15, role: "sub"   },
      { hex: "#97AB99", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-582", name: "솔잎색 곁의 차콜", searchAliases: ["잉크 2톤 20"], scheme: "tone-in-tone",
    colors: [
      { hex: "#60604C", ratio: 70, role: "base"  },
      { hex: "#43403D", ratio: 30, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-583", name: "연필심의 딥 틸 테두리", searchAliases: ["잉크 3색 20"], scheme: "tone-in-tone",
    colors: [
      { hex: "#56575A", ratio: 60, role: "base"  },
      { hex: "#505756", ratio: 30, role: "sub"   },
      { hex: "#454B45", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-584", name: "은회색과 웜그레이", searchAliases: ["그레이 5색 09"], scheme: "tone-in-tone",
    colors: [
      { hex: "#ACB1A4", ratio: 30, role: "base"  },
      { hex: "#ACABA2", ratio: 25, role: "sub"   },
      { hex: "#A59F99", ratio: 20, role: "sub"   },
      { hex: "#BBAEAE", ratio: 15, role: "sub"   },
      { hex: "#A99EA3", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-585", name: "돌빛 바탕의 슬레이트", searchAliases: ["그레이 2톤 13"], scheme: "tone-in-tone",
    colors: [
      { hex: "#818172", ratio: 70, role: "base"  },
      { hex: "#7B7877", ratio: 30, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-586", name: "팥색 위에 겹친 연필심", searchAliases: ["그레이 3색 09"], scheme: "tone-in-tone",
    colors: [
      { hex: "#836C6B", ratio: 60, role: "base"  },
      { hex: "#5D5D5E", ratio: 30, role: "sub"   },
      { hex: "#6B6D69", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-587", name: "은회색과 회청색, 백랍", searchAliases: ["그레이 5색 10"], scheme: "tone-in-tone",
    colors: [
      { hex: "#9DA5A4", ratio: 30, role: "base"  },
      { hex: "#9A9CA8", ratio: 25, role: "sub"   },
      { hex: "#9A969A", ratio: 20, role: "sub"   },
      { hex: "#ACA8A9", ratio: 15, role: "sub"   },
      { hex: "#A39E8A", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-588", name: "연필심의 겹빛", searchAliases: ["그레이 2톤 14"], scheme: "tone-in-tone",
    colors: [
      { hex: "#645153", ratio: 70, role: "base"  },
      { hex: "#645C54", ratio: 30, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-589", name: "솔잎색과 다크 올리브 사이", searchAliases: ["그레이 3색 10"], scheme: "tone-in-tone",
    colors: [
      { hex: "#586257", ratio: 60, role: "base"  },
      { hex: "#4B4F44", ratio: 30, role: "sub"   },
      { hex: "#585848", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-590", name: "돌빛에서 카키브라운까지", searchAliases: ["그레이 5색 11"], scheme: "tone-in-tone",
    colors: [
      { hex: "#887F7E", ratio: 30, role: "base"  },
      { hex: "#6E6B5D", ratio: 25, role: "sub"   },
      { hex: "#6D7C63", ratio: 20, role: "sub"   },
      { hex: "#5F7368", ratio: 15, role: "sub"   },
      { hex: "#788588", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-591", name: "은회색 곁의 돌빛", searchAliases: ["그레이 2톤 15"], scheme: "tone-in-tone",
    colors: [
      { hex: "#A1A5A6", ratio: 70, role: "base"  },
      { hex: "#888E8C", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-592", name: "은회색 바탕의 머시룸", searchAliases: ["그레이 3색 11"], scheme: "tone-in-tone",
    colors: [
      { hex: "#ADA9AD", ratio: 60, role: "base"  },
      { hex: "#BAA9A9", ratio: 30, role: "sub"   },
      { hex: "#B6B6B1", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-593", name: "슬레이트와 코코아, 연필심", searchAliases: ["그레이 5색 12"], scheme: "tone-in-tone",
    colors: [
      { hex: "#786B7A", ratio: 30, role: "base"  },
      { hex: "#645C5D", ratio: 25, role: "sub"   },
      { hex: "#6A685B", ratio: 20, role: "sub"   },
      { hex: "#6C726A", ratio: 15, role: "sub"   },
      { hex: "#596C68", ratio: 10, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-594", name: "웜그레이의 옅고 짙은 결", searchAliases: ["그레이 2톤 16"], scheme: "tone-in-tone",
    colors: [
      { hex: "#9DA094", ratio: 70, role: "base"  },
      { hex: "#99A196", ratio: 30, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-595", name: "백랍과 회보라", searchAliases: ["그레이 3색 12"], scheme: "tone-in-tone",
    colors: [
      { hex: "#999B9A", ratio: 60, role: "base"  },
      { hex: "#A697A8", ratio: 30, role: "sub"   },
      { hex: "#8E8D9B", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-596", name: "은회색 위에 겹친 백랍", searchAliases: ["그레이 5색 13"], scheme: "tone-in-tone",
    colors: [
      { hex: "#9DA6AC", ratio: 30, role: "base"  },
      { hex: "#A4A5AD", ratio: 25, role: "sub"   },
      { hex: "#9C97A5", ratio: 20, role: "sub"   },
      { hex: "#A899AB", ratio: 15, role: "sub"   },
      { hex: "#9B9499", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-597", name: "은회색의 웜그레이 테두리", searchAliases: ["실버 2톤 03"], scheme: "tone-in-tone",
    colors: [
      { hex: "#B8B4B5", ratio: 70, role: "base"  },
      { hex: "#A29F9E", ratio: 30, role: "point" }],
    tags: ["무채색", "웜톤", "뮤트", "톤인톤"] },

  { id: "gen-598", name: "팥색에서 연필심까지", searchAliases: ["그레이 3색 13"], scheme: "tone-in-tone",
    colors: [
      { hex: "#7C6479", ratio: 60, role: "base"  },
      { hex: "#777184", ratio: 30, role: "sub"   },
      { hex: "#5D5F61", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-599", name: "솔잎색과 연필심 사이", searchAliases: ["그레이 5색 14"], scheme: "tone-in-tone",
    colors: [
      { hex: "#53655E", ratio: 30, role: "base"  },
      { hex: "#505350", ratio: 25, role: "sub"   },
      { hex: "#696C67", ratio: 20, role: "sub"   },
      { hex: "#606258", ratio: 15, role: "sub"   },
      { hex: "#595959", ratio: 10, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

  { id: "gen-600", name: "유칼립투스 곁의 은회색", searchAliases: ["그레이 2톤 17"], scheme: "tone-in-tone",
    colors: [
      { hex: "#839289", ratio: 70, role: "base"  },
      { hex: "#98A8A7", ratio: 30, role: "point" }],
    tags: ["무채색", "쿨톤", "뮤트", "톤인톤"] },

];

if (typeof module !== "undefined") module.exports = GENERATED_PALETTES;
