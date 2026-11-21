// 보색 추가 240개: 2·3·4·5색 각 60개. HSL 색상환의 180도 반대색 기준.
const COMPLEMENTARY_PALETTES = [
  {
    "id": "complement-more-001",
    "name": "딸기우유 바탕의 빙하색",
    "searchAliases": ["레드 · 시안 파스텔 보색 2색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E5ACA9",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CCEEEF",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","파스텔","보색"]
  },
  {
    "id": "complement-more-002",
    "name": "딸기우유에서 빙하색까지",
    "searchAliases": ["레드 · 시안 파스텔 보색 3색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E5ACA9",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F1E9E9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#CCEEEF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","파스텔","보색"]
  },
  {
    "id": "complement-more-003",
    "name": "딸기우유와 빙하색 사이",
    "searchAliases": ["레드 · 시안 파스텔 보색 4색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E5ACA9",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F1E9E9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#EBF4F5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CCEEEF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","파스텔","보색"]
  },
  {
    "id": "complement-more-004",
    "name": "딸기우유 곁의 빙하색",
    "searchAliases": ["레드 · 시안 파스텔 보색 5색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E5ACA9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F1E9E9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C8736F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EBF4F5",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CCEEEF",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","파스텔","보색"]
  },
  {
    "id": "complement-more-005",
    "name": "레드 · 시안 소프트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BF7B78",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#97CBCE",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","소프트","보색"]
  },
  {
    "id": "complement-more-006",
    "name": "레드 · 시안 소프트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BF7B78",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F0EBEA",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#97CBCE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","소프트","보색"]
  },
  {
    "id": "complement-more-007",
    "name": "레드 · 시안 소프트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BF7B78",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F0EBEA",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#CDDEDF",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#97CBCE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","소프트","보색"]
  },
  {
    "id": "complement-more-008",
    "name": "레드 · 시안 소프트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BF7B78",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F0EBEA",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#93514E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CDDEDF",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#97CBCE",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","소프트","보색"]
  },
  {
    "id": "complement-more-009",
    "name": "레드 · 시안 뮤트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#885653",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#679FA2",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","뮤트","보색"]
  },
  {
    "id": "complement-more-010",
    "name": "레드 · 시안 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#885653",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EFEBEB",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#679FA2",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","뮤트","보색","무채색"]
  },
  {
    "id": "complement-more-011",
    "name": "레드 · 시안 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#885653",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EFEBEB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#9CB4B5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#679FA2",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","뮤트","보색","무채색"]
  },
  {
    "id": "complement-more-012",
    "name": "레드 · 시안 뮤트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#885653",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EFEBEB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#503635",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9CB4B5",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#679FA2",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","뮤트","보색","무채색"]
  },
  {
    "id": "complement-more-013",
    "name": "레드 · 시안 비비드 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DB231A",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#3BDFE8",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","비비드","보색"]
  },
  {
    "id": "complement-more-014",
    "name": "레드 · 시안 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DB231A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F3E7E7",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#3BDFE8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","비비드","보색"]
  },
  {
    "id": "complement-more-015",
    "name": "레드 · 시안 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DB231A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F3E7E7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#92D5D8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#3BDFE8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","비비드","보색"]
  },
  {
    "id": "complement-more-016",
    "name": "레드 · 시안 비비드 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DB231A",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F3E7E7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#841F1A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#92D5D8",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#3BDFE8",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","비비드","보색"]
  },
  {
    "id": "complement-more-017",
    "name": "레드 · 시안 딥 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#601E1A",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#247F84",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","딥","보색"]
  },
  {
    "id": "complement-more-018",
    "name": "레드 · 시안 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#601E1A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F2E9E9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#247F84",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","딥","보색"]
  },
  {
    "id": "complement-more-019",
    "name": "레드 · 시안 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#601E1A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F2E9E9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#4F9DA1",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#247F84",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","딥","보색"]
  },
  {
    "id": "complement-more-020",
    "name": "레드 · 시안 딥 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#601E1A",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F2E9E9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#1E0C0B",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#4F9DA1",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#247F84",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","시안","딥","보색"]
  },
  {
    "id": "complement-more-021",
    "name": "코랄 · 스카이 파스텔 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E5C0A9",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CCE2EF",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","파스텔","보색","오렌지","블루"]
  },
  {
    "id": "complement-more-022",
    "name": "코랄 · 스카이 파스텔 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E5C0A9",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F1ECE9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#CCE2EF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","파스텔","보색","오렌지"]
  },
  {
    "id": "complement-more-023",
    "name": "코랄 · 스카이 파스텔 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E5C0A9",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F1ECE9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#EBF1F5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CCE2EF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","파스텔","보색","오렌지"]
  },
  {
    "id": "complement-more-024",
    "name": "코랄 · 스카이 파스텔 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E5C0A9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F1ECE9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C8916F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EBF1F5",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CCE2EF",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","파스텔","보색","오렌지"]
  },
  {
    "id": "complement-more-025",
    "name": "코랄 · 스카이 소프트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BF9378",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#97B9CE",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","소프트","보색","오렌지","블루"]
  },
  {
    "id": "complement-more-026",
    "name": "코랄 · 스카이 소프트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BF9378",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F0ECEA",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#97B9CE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","소프트","보색","오렌지"]
  },
  {
    "id": "complement-more-027",
    "name": "코랄 · 스카이 소프트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BF9378",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F0ECEA",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#CDD8DF",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#97B9CE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","소프트","보색","오렌지"]
  },
  {
    "id": "complement-more-028",
    "name": "코랄 · 스카이 소프트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BF9378",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F0ECEA",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#93684E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CDD8DF",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#97B9CE",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","소프트","보색","오렌지"]
  },
  {
    "id": "complement-more-029",
    "name": "코랄 · 스카이 뮤트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#886853",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#678BA2",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","뮤트","보색","오렌지","블루"]
  },
  {
    "id": "complement-more-030",
    "name": "코랄 · 스카이 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#886853",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EFEDEB",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#678BA2",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","뮤트","보색","오렌지","무채색"]
  },
  {
    "id": "complement-more-031",
    "name": "코랄 · 스카이 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#886853",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EFEDEB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#9CABB5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#678BA2",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","뮤트","보색","오렌지","무채색"]
  },
  {
    "id": "complement-more-032",
    "name": "코랄 · 스카이 뮤트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#886853",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EFEDEB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#503F35",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9CABB5",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#678BA2",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","뮤트","보색","오렌지","무채색"]
  },
  {
    "id": "complement-more-033",
    "name": "코랄 · 스카이 비비드 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DB641A",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#3BA6E8",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","비비드","보색","오렌지","블루"]
  },
  {
    "id": "complement-more-034",
    "name": "코랄 · 스카이 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DB641A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F3ECE7",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#3BA6E8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","비비드","보색","오렌지"]
  },
  {
    "id": "complement-more-035",
    "name": "코랄 · 스카이 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DB641A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F3ECE7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#92BDD8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#3BA6E8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","비비드","보색","오렌지"]
  },
  {
    "id": "complement-more-036",
    "name": "코랄 · 스카이 비비드 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DB641A",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F3ECE7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#84431A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#92BDD8",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#3BA6E8",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","비비드","보색","오렌지"]
  },
  {
    "id": "complement-more-037",
    "name": "코랄 · 스카이 딥 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#60351A",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#245F84",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","딥","보색","오렌지","블루"]
  },
  {
    "id": "complement-more-038",
    "name": "코랄 · 스카이 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#60351A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F2ECE9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#245F84",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","딥","보색","오렌지"]
  },
  {
    "id": "complement-more-039",
    "name": "코랄 · 스카이 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#60351A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F2ECE9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#4F81A1",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#245F84",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","딥","보색","오렌지"]
  },
  {
    "id": "complement-more-040",
    "name": "코랄 · 스카이 딥 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#60351A",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F2ECE9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#1E120B",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#4F81A1",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#245F84",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["코랄","스카이","딥","보색","오렌지"]
  },
  {
    "id": "complement-more-041",
    "name": "밀짚색 바탕의 물빛",
    "searchAliases": ["앰버 · 블루 파스텔 보색 2색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E5D4A9",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CCD6EF",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","파스텔","보색","오렌지"]
  },
  {
    "id": "complement-more-042",
    "name": "밀짚색 바탕의 아이보리",
    "searchAliases": ["앰버 · 블루 파스텔 보색 3색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E5D4A9",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F1EFE9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#CCD6EF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","파스텔","보색","오렌지","옐로우"]
  },
  {
    "id": "complement-more-043",
    "name": "밀짚색에서 아이보리까지",
    "searchAliases": ["앰버 · 블루 파스텔 보색 4색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E5D4A9",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F1EFE9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#EBEEF5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CCD6EF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","파스텔","보색","오렌지","옐로우"]
  },
  {
    "id": "complement-more-044",
    "name": "밀짚색과 모래색, 아이보리",
    "searchAliases": ["앰버 · 블루 파스텔 보색 5색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E5D4A9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F1EFE9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C8AF6F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EBEEF5",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CCD6EF",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","파스텔","보색","오렌지","옐로우"]
  },
  {
    "id": "complement-more-045",
    "name": "앰버 · 블루 소프트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BFAB78",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#97A7CE",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","소프트","보색","오렌지"]
  },
  {
    "id": "complement-more-046",
    "name": "앰버 · 블루 소프트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BFAB78",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F0EEEA",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#97A7CE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","소프트","보색","오렌지"]
  },
  {
    "id": "complement-more-047",
    "name": "앰버 · 블루 소프트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BFAB78",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F0EEEA",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#CDD2DF",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#97A7CE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","소프트","보색","오렌지"]
  },
  {
    "id": "complement-more-048",
    "name": "앰버 · 블루 소프트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BFAB78",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F0EEEA",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#937F4E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CDD2DF",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#97A7CE",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","소프트","보색","오렌지"]
  },
  {
    "id": "complement-more-049",
    "name": "앰버 · 블루 뮤트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#887953",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#6778A2",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","뮤트","보색","오렌지"]
  },
  {
    "id": "complement-more-050",
    "name": "앰버 · 블루 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#887953",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EFEEEB",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#6778A2",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","뮤트","보색","오렌지","무채색"]
  },
  {
    "id": "complement-more-051",
    "name": "앰버 · 블루 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#887953",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EFEEEB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#9CA3B5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#6778A2",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","뮤트","보색","오렌지","무채색"]
  },
  {
    "id": "complement-more-052",
    "name": "앰버 · 블루 뮤트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#887953",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EFEEEB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#504835",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9CA3B5",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#6778A2",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","뮤트","보색","오렌지","무채색"]
  },
  {
    "id": "complement-more-053",
    "name": "앰버 · 블루 비비드 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DBA41A",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#3B6CE8",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","비비드","보색","오렌지"]
  },
  {
    "id": "complement-more-054",
    "name": "앰버 · 블루 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DBA41A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F3F0E7",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#3B6CE8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","비비드","보색","오렌지","옐로우"]
  },
  {
    "id": "complement-more-055",
    "name": "앰버 · 블루 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DBA41A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F3F0E7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#92A6D8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#3B6CE8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","비비드","보색","오렌지","옐로우"]
  },
  {
    "id": "complement-more-056",
    "name": "앰버 · 블루 비비드 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DBA41A",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F3F0E7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#84661A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#92A6D8",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#3B6CE8",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","비비드","보색","오렌지","옐로우"]
  },
  {
    "id": "complement-more-057",
    "name": "앰버 · 블루 딥 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#604C1A",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#243F84",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","딥","보색","오렌지"]
  },
  {
    "id": "complement-more-058",
    "name": "앰버 · 블루 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#604C1A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F2EFE9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#243F84",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","딥","보색","오렌지"]
  },
  {
    "id": "complement-more-059",
    "name": "앰버 · 블루 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#604C1A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F2EFE9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#4F66A1",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#243F84",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","딥","보색","오렌지"]
  },
  {
    "id": "complement-more-060",
    "name": "앰버 · 블루 딥 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#604C1A",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F2EFE9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#1E190B",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#4F66A1",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#243F84",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["앰버","블루","딥","보색","오렌지"]
  },
  {
    "id": "complement-more-061",
    "name": "연녹색 바탕의 라일락",
    "searchAliases": ["옐로우 · 퍼플 파스텔 보색 2색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E2E5A9",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CECCEF",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","파스텔","보색","블루"]
  },
  {
    "id": "complement-more-062",
    "name": "연녹색 바탕의 아이보리",
    "searchAliases": ["옐로우 · 퍼플 파스텔 보색 3색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E2E5A9",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F1F1E9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#CECCEF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","파스텔","보색"]
  },
  {
    "id": "complement-more-063",
    "name": "연녹색 위에 라일락 한 점",
    "searchAliases": ["옐로우 · 퍼플 파스텔 보색 4색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E2E5A9",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F1F1E9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#EBEBF5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CECCEF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","파스텔","보색"]
  },
  {
    "id": "complement-more-064",
    "name": "연녹색과 아이보리",
    "searchAliases": ["옐로우 · 퍼플 파스텔 보색 5색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E2E5A9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F1F1E9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C4C86F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EBEBF5",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CECCEF",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","파스텔","보색"]
  },
  {
    "id": "complement-more-065",
    "name": "피스타치오 바탕의 등꽃색",
    "searchAliases": ["옐로우 · 퍼플 소프트 보색 2색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BCBF78",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#9A97CE",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","소프트","보색","블루"]
  },
  {
    "id": "complement-more-066",
    "name": "피스타치오 바탕의 아이보리",
    "searchAliases": ["옐로우 · 퍼플 소프트 보색 3색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BCBF78",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F0F0EA",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#9A97CE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","소프트","보색"]
  },
  {
    "id": "complement-more-067",
    "name": "피스타치오 위에 겹친 아이보리",
    "searchAliases": ["옐로우 · 퍼플 소프트 보색 4색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BCBF78",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F0F0EA",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#CECDDF",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9A97CE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","소프트","보색"]
  },
  {
    "id": "complement-more-068",
    "name": "피스타치오와 아이보리 사이",
    "searchAliases": ["옐로우 · 퍼플 소프트 보색 5색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BCBF78",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F0F0EA",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#8F934E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CECDDF",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#9A97CE",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","소프트","보색"]
  },
  {
    "id": "complement-more-069",
    "name": "올리브 바탕의 제비꽃",
    "searchAliases": ["옐로우 · 퍼플 뮤트 보색 2색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#858853",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#6A67A2",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","뮤트","보색","블루"]
  },
  {
    "id": "complement-more-070",
    "name": "올리브 바탕의 아이보리",
    "searchAliases": ["옐로우 · 퍼플 뮤트 보색 3색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#858853",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EFEFEB",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#6A67A2",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","뮤트","보색","무채색"]
  },
  {
    "id": "complement-more-071",
    "name": "올리브 바탕의 밝은 아이보리",
    "searchAliases": ["옐로우 · 퍼플 뮤트 보색 4색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#858853",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EFEFEB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#9D9CB5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#6A67A2",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","뮤트","보색","무채색"]
  },
  {
    "id": "complement-more-072",
    "name": "올리브 곁의 아이보리",
    "searchAliases": ["옐로우 · 퍼플 뮤트 보색 5색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#858853",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EFEFEB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#4E5035",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9D9CB5",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#6A67A2",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","뮤트","보색","무채색"]
  },
  {
    "id": "complement-more-073",
    "name": "라임 바탕의 울트라마린",
    "searchAliases": ["옐로우 · 퍼플 비비드 보색 2색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#D1DB1A",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#433BE8",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","비비드","보색","블루"]
  },
  {
    "id": "complement-more-074",
    "name": "라임의 울트라마린 테두리",
    "searchAliases": ["옐로우 · 퍼플 비비드 보색 3색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#D1DB1A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F3F3E7",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#433BE8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","비비드","보색"]
  },
  {
    "id": "complement-more-075",
    "name": "라임 위에 울트라마린 한 점",
    "searchAliases": ["옐로우 · 퍼플 비비드 보색 4색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#D1DB1A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F3F3E7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#9692D8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#433BE8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","비비드","보색"]
  },
  {
    "id": "complement-more-076",
    "name": "라임과 아이보리, 울트라마린",
    "searchAliases": ["옐로우 · 퍼플 비비드 보색 5색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#D1DB1A",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F3F3E7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#7F841A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9692D8",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#433BE8",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","비비드","보색"]
  },
  {
    "id": "complement-more-077",
    "name": "다크 올리브 바탕의 남색",
    "searchAliases": ["옐로우 · 퍼플 딥 보색 2색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#5D601A",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#292484",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","딥","보색","블루"]
  },
  {
    "id": "complement-more-078",
    "name": "다크 올리브 바탕의 아이보리",
    "searchAliases": ["옐로우 · 퍼플 딥 보색 3색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#5D601A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F1F2E9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#292484",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","딥","보색"]
  },
  {
    "id": "complement-more-079",
    "name": "다크 올리브 바탕의 밝은 아이보리",
    "searchAliases": ["옐로우 · 퍼플 딥 보색 4색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#5D601A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F1F2E9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#534FA1",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#292484",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","딥","보색"]
  },
  {
    "id": "complement-more-080",
    "name": "다크 올리브와 아이보리",
    "searchAliases": ["옐로우 · 퍼플 딥 보색 5색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#5D601A",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F1F2E9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#1D1E0B",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#534FA1",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#292484",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","퍼플","딥","보색"]
  },
  {
    "id": "complement-more-081",
    "name": "라임 · 바이올렛 파스텔 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#CEE5A9",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#DACCEF",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","파스텔","보색","그린","퍼플"]
  },
  {
    "id": "complement-more-082",
    "name": "라임 · 바이올렛 파스텔 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#CEE5A9",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EEF1E9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#DACCEF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","파스텔","보색","그린"]
  },
  {
    "id": "complement-more-083",
    "name": "라임 · 바이올렛 파스텔 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#CEE5A9",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EEF1E9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#EFEBF5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DACCEF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","파스텔","보색","그린"]
  },
  {
    "id": "complement-more-084",
    "name": "라임 · 바이올렛 파스텔 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#CEE5A9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EEF1E9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A6C86F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EFEBF5",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#DACCEF",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","파스텔","보색","그린"]
  },
  {
    "id": "complement-more-085",
    "name": "라임 · 바이올렛 소프트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A4BF78",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#AC97CE",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","소프트","보색","그린","퍼플"]
  },
  {
    "id": "complement-more-086",
    "name": "라임 · 바이올렛 소프트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A4BF78",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EEF0EA",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#AC97CE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","소프트","보색","그린"]
  },
  {
    "id": "complement-more-087",
    "name": "라임 · 바이올렛 소프트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A4BF78",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EEF0EA",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D4CDDF",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#AC97CE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","소프트","보색","그린"]
  },
  {
    "id": "complement-more-088",
    "name": "라임 · 바이올렛 소프트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A4BF78",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EEF0EA",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#78934E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D4CDDF",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#AC97CE",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","소프트","보색","그린"]
  },
  {
    "id": "complement-more-089",
    "name": "라임 · 바이올렛 뮤트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#748853",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#7E67A2",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","뮤트","보색","그린","퍼플"]
  },
  {
    "id": "complement-more-090",
    "name": "라임 · 바이올렛 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#748853",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EEEFEB",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#7E67A2",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","뮤트","보색","그린","무채색"]
  },
  {
    "id": "complement-more-091",
    "name": "라임 · 바이올렛 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#748853",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EEEFEB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A59CB5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#7E67A2",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","뮤트","보색","그린","무채색"]
  },
  {
    "id": "complement-more-092",
    "name": "라임 · 바이올렛 뮤트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#748853",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EEEFEB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#455035",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A59CB5",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#7E67A2",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","뮤트","보색","그린","무채색"]
  },
  {
    "id": "complement-more-093",
    "name": "라임 · 바이올렛 비비드 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#91DB1A",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#7D3BE8",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","비비드","보색","그린","퍼플"]
  },
  {
    "id": "complement-more-094",
    "name": "라임 · 바이올렛 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#91DB1A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EFF3E7",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#7D3BE8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","비비드","보색","그린"]
  },
  {
    "id": "complement-more-095",
    "name": "라임 · 바이올렛 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#91DB1A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EFF3E7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#AD92D8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#7D3BE8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","비비드","보색","그린"]
  },
  {
    "id": "complement-more-096",
    "name": "라임 · 바이올렛 비비드 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#91DB1A",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EFF3E7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#5B841A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#AD92D8",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#7D3BE8",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","비비드","보색","그린"]
  },
  {
    "id": "complement-more-097",
    "name": "라임 · 바이올렛 딥 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#45601A",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#492484",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","딥","보색","그린","퍼플"]
  },
  {
    "id": "complement-more-098",
    "name": "라임 · 바이올렛 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#45601A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EEF2E9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#492484",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","딥","보색","그린"]
  },
  {
    "id": "complement-more-099",
    "name": "라임 · 바이올렛 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#45601A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EEF2E9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#6E4FA1",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#492484",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","딥","보색","그린"]
  },
  {
    "id": "complement-more-100",
    "name": "라임 · 바이올렛 딥 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#45601A",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EEF2E9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#171E0B",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#6E4FA1",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#492484",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["라임","바이올렛","딥","보색","그린"]
  },
  {
    "id": "complement-more-101",
    "name": "그린 · 마젠타 파스텔 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A9E5AC",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#EFCCEE",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","파스텔","보색","핑크"]
  },
  {
    "id": "complement-more-102",
    "name": "그린 · 마젠타 파스텔 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A9E5AC",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E9F1E9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#EFCCEE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","파스텔","보색"]
  },
  {
    "id": "complement-more-103",
    "name": "그린 · 마젠타 파스텔 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A9E5AC",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E9F1E9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F5EBF4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EFCCEE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","파스텔","보색"]
  },
  {
    "id": "complement-more-104",
    "name": "그린 · 마젠타 파스텔 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A9E5AC",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E9F1E9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#6FC873",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F5EBF4",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#EFCCEE",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","파스텔","보색"]
  },
  {
    "id": "complement-more-105",
    "name": "그린 · 마젠타 소프트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#78BF7B",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CE97CB",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","소프트","보색","핑크"]
  },
  {
    "id": "complement-more-106",
    "name": "그린 · 마젠타 소프트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#78BF7B",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EAF0EB",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#CE97CB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","소프트","보색"]
  },
  {
    "id": "complement-more-107",
    "name": "그린 · 마젠타 소프트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#78BF7B",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EAF0EB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#DFCDDE",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CE97CB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","소프트","보색"]
  },
  {
    "id": "complement-more-108",
    "name": "그린 · 마젠타 소프트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#78BF7B",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EAF0EB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#4E9351",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DFCDDE",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CE97CB",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","소프트","보색"]
  },
  {
    "id": "complement-more-109",
    "name": "그린 · 마젠타 뮤트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#538856",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#A2679F",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","뮤트","보색","핑크"]
  },
  {
    "id": "complement-more-110",
    "name": "그린 · 마젠타 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#538856",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EBEFEB",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#A2679F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","뮤트","보색","무채색"]
  },
  {
    "id": "complement-more-111",
    "name": "그린 · 마젠타 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#538856",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EBEFEB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#B59CB4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A2679F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","뮤트","보색","무채색"]
  },
  {
    "id": "complement-more-112",
    "name": "그린 · 마젠타 뮤트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#538856",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EBEFEB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#355036",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#B59CB4",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#A2679F",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","뮤트","보색","무채색"]
  },
  {
    "id": "complement-more-113",
    "name": "그린 · 마젠타 비비드 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1ADB23",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#E83BDF",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","비비드","보색","핑크"]
  },
  {
    "id": "complement-more-114",
    "name": "그린 · 마젠타 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1ADB23",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E7F3E7",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E83BDF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","비비드","보색"]
  },
  {
    "id": "complement-more-115",
    "name": "그린 · 마젠타 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1ADB23",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E7F3E7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D892D5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E83BDF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","비비드","보색"]
  },
  {
    "id": "complement-more-116",
    "name": "그린 · 마젠타 비비드 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1ADB23",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E7F3E7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#1A841F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D892D5",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#E83BDF",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","비비드","보색"]
  },
  {
    "id": "complement-more-117",
    "name": "그린 · 마젠타 딥 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A601E",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#84247F",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","딥","보색","핑크"]
  },
  {
    "id": "complement-more-118",
    "name": "그린 · 마젠타 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A601E",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E9F2E9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#84247F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","딥","보색"]
  },
  {
    "id": "complement-more-119",
    "name": "그린 · 마젠타 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A601E",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E9F2E9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A14F9D",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#84247F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","딥","보색"]
  },
  {
    "id": "complement-more-120",
    "name": "그린 · 마젠타 딥 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A601E",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E9F2E9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#0B1E0C",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A14F9D",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#84247F",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","마젠타","딥","보색"]
  },
  {
    "id": "complement-more-121",
    "name": "민트 · 로즈 파스텔 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A9E5CA",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#EFCCDC",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","파스텔","보색","그린","핑크"]
  },
  {
    "id": "complement-more-122",
    "name": "민트 · 로즈 파스텔 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A9E5CA",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E9F1EE",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#EFCCDC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","파스텔","보색","그린"]
  },
  {
    "id": "complement-more-123",
    "name": "민트 · 로즈 파스텔 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A9E5CA",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E9F1EE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F5EBEF",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EFCCDC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","파스텔","보색","그린"]
  },
  {
    "id": "complement-more-124",
    "name": "민트 · 로즈 파스텔 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A9E5CA",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E9F1EE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#6FC8A0",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F5EBEF",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#EFCCDC",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","파스텔","보색","그린"]
  },
  {
    "id": "complement-more-125",
    "name": "민트 · 로즈 소프트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#78BF9F",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CE97B0",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","소프트","보색","그린","핑크"]
  },
  {
    "id": "complement-more-126",
    "name": "민트 · 로즈 소프트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#78BF9F",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EAF0ED",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#CE97B0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","소프트","보색","그린"]
  },
  {
    "id": "complement-more-127",
    "name": "민트 · 로즈 소프트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#78BF9F",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EAF0ED",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#DFCDD5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CE97B0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","소프트","보색","그린"]
  },
  {
    "id": "complement-more-128",
    "name": "민트 · 로즈 소프트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#78BF9F",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EAF0ED",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#4E9374",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DFCDD5",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CE97B0",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","소프트","보색","그린"]
  },
  {
    "id": "complement-more-129",
    "name": "민트 · 로즈 뮤트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#538870",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#A26782",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","뮤트","보색","그린","핑크"]
  },
  {
    "id": "complement-more-130",
    "name": "민트 · 로즈 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#538870",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EBEFED",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#A26782",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","뮤트","보색","그린","무채색"]
  },
  {
    "id": "complement-more-131",
    "name": "민트 · 로즈 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#538870",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EBEFED",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#B59CA7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A26782",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","뮤트","보색","그린","무채색"]
  },
  {
    "id": "complement-more-132",
    "name": "민트 · 로즈 뮤트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#538870",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EBEFED",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#355044",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#B59CA7",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#A26782",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","뮤트","보색","그린","무채색"]
  },
  {
    "id": "complement-more-133",
    "name": "민트 · 로즈 비비드 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1ADB84",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#E83B89",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","비비드","보색","그린","핑크"]
  },
  {
    "id": "complement-more-134",
    "name": "민트 · 로즈 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1ADB84",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E7F3EE",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E83B89",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","비비드","보색","그린"]
  },
  {
    "id": "complement-more-135",
    "name": "민트 · 로즈 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1ADB84",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E7F3EE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D892B2",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E83B89",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","비비드","보색","그린"]
  },
  {
    "id": "complement-more-136",
    "name": "민트 · 로즈 비비드 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1ADB84",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E7F3EE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#1A8454",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D892B2",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#E83B89",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","비비드","보색","그린"]
  },
  {
    "id": "complement-more-137",
    "name": "민트 · 로즈 딥 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A6041",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#84244F",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","딥","보색","그린","핑크"]
  },
  {
    "id": "complement-more-138",
    "name": "민트 · 로즈 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A6041",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E9F2EE",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#84244F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","딥","보색","그린"]
  },
  {
    "id": "complement-more-139",
    "name": "민트 · 로즈 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A6041",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E9F2EE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A14F74",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#84244F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","딥","보색","그린"]
  },
  {
    "id": "complement-more-140",
    "name": "민트 · 로즈 딥 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A6041",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E9F2EE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#0B1E15",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A14F74",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#84244F",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["민트","로즈","딥","보색","그린"]
  },
  {
    "id": "complement-more-141",
    "name": "틸 · 코랄 파스텔 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A9E2E5",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#EFCECC",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","파스텔","보색","시안","레드"]
  },
  {
    "id": "complement-more-142",
    "name": "틸 · 코랄 파스텔 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A9E2E5",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E9F1F1",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#EFCECC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","파스텔","보색","시안"]
  },
  {
    "id": "complement-more-143",
    "name": "틸 · 코랄 파스텔 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A9E2E5",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E9F1F1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F5EBEB",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EFCECC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","파스텔","보색","시안"]
  },
  {
    "id": "complement-more-144",
    "name": "틸 · 코랄 파스텔 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A9E2E5",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E9F1F1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#6FC4C8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F5EBEB",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#EFCECC",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","파스텔","보색","시안"]
  },
  {
    "id": "complement-more-145",
    "name": "틸 · 코랄 소프트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#78BCBF",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CE9A97",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","소프트","보색","시안","레드"]
  },
  {
    "id": "complement-more-146",
    "name": "틸 · 코랄 소프트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#78BCBF",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EAF0F0",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#CE9A97",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","소프트","보색","시안"]
  },
  {
    "id": "complement-more-147",
    "name": "틸 · 코랄 소프트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#78BCBF",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EAF0F0",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#DFCECD",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CE9A97",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","소프트","보색","시안"]
  },
  {
    "id": "complement-more-148",
    "name": "틸 · 코랄 소프트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#78BCBF",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EAF0F0",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#4E8F93",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DFCECD",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CE9A97",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","소프트","보색","시안"]
  },
  {
    "id": "complement-more-149",
    "name": "틸 · 코랄 뮤트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#538588",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#A26A67",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","뮤트","보색","시안","레드"]
  },
  {
    "id": "complement-more-150",
    "name": "틸 · 코랄 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#538588",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EBEFEF",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#A26A67",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","뮤트","보색","시안","무채색"]
  },
  {
    "id": "complement-more-151",
    "name": "틸 · 코랄 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#538588",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EBEFEF",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#B59D9C",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A26A67",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","뮤트","보색","시안","무채색"]
  },
  {
    "id": "complement-more-152",
    "name": "틸 · 코랄 뮤트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#538588",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EBEFEF",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#354E50",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#B59D9C",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#A26A67",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","뮤트","보색","시안","무채색"]
  },
  {
    "id": "complement-more-153",
    "name": "틸 · 코랄 비비드 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1AD1DB",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#E8433B",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","비비드","보색","시안","레드"]
  },
  {
    "id": "complement-more-154",
    "name": "틸 · 코랄 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1AD1DB",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E7F3F3",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E8433B",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","비비드","보색","시안"]
  },
  {
    "id": "complement-more-155",
    "name": "틸 · 코랄 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1AD1DB",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E7F3F3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D89692",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E8433B",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","비비드","보색","시안"]
  },
  {
    "id": "complement-more-156",
    "name": "틸 · 코랄 비비드 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1AD1DB",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E7F3F3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#1A7F84",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D89692",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#E8433B",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","비비드","보색","시안"]
  },
  {
    "id": "complement-more-157",
    "name": "틸 · 코랄 딥 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A5D60",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#842924",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","딥","보색","시안","레드"]
  },
  {
    "id": "complement-more-158",
    "name": "틸 · 코랄 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A5D60",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E9F1F2",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#842924",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","딥","보색","시안"]
  },
  {
    "id": "complement-more-159",
    "name": "틸 · 코랄 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A5D60",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E9F1F2",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A1534F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#842924",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","딥","보색","시안"]
  },
  {
    "id": "complement-more-160",
    "name": "틸 · 코랄 딥 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A5D60",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E9F1F2",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#0B1D1E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A1534F",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#842924",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["틸","코랄","딥","보색","시안"]
  },
  {
    "id": "complement-more-161",
    "name": "하늘색 바탕의 상아색",
    "searchAliases": ["블루 · 오렌지 파스텔 보색 2색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A9C4E5",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#EFE0CC",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","파스텔","보색"]
  },
  {
    "id": "complement-more-162",
    "name": "하늘색 바탕의 빙하색",
    "searchAliases": ["블루 · 오렌지 파스텔 보색 3색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A9C4E5",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E9EDF1",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#EFE0CC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","파스텔","보색"]
  },
  {
    "id": "complement-more-163",
    "name": "하늘색에서 빙하색까지",
    "searchAliases": ["블루 · 오렌지 파스텔 보색 4색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A9C4E5",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E9EDF1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F5F0EB",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EFE0CC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","파스텔","보색"]
  },
  {
    "id": "complement-more-164",
    "name": "하늘색 위에 겹친 빙하색",
    "searchAliases": ["블루 · 오렌지 파스텔 보색 5색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A9C4E5",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E9EDF1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#6F97C8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F5F0EB",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#EFE0CC",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","파스텔","보색"]
  },
  {
    "id": "complement-more-165",
    "name": "블루 · 오렌지 소프트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#7898BF",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CEB597",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","소프트","보색"]
  },
  {
    "id": "complement-more-166",
    "name": "블루 · 오렌지 소프트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#7898BF",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EAEDF0",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#CEB597",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","소프트","보색"]
  },
  {
    "id": "complement-more-167",
    "name": "블루 · 오렌지 소프트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#7898BF",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EAEDF0",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#DFD7CD",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CEB597",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","소프트","보색"]
  },
  {
    "id": "complement-more-168",
    "name": "블루 · 오렌지 소프트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#7898BF",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EAEDF0",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#4E6D93",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DFD7CD",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CEB597",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","소프트","보색"]
  },
  {
    "id": "complement-more-169",
    "name": "블루 · 오렌지 뮤트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#536B88",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#A28867",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","뮤트","보색"]
  },
  {
    "id": "complement-more-170",
    "name": "블루 · 오렌지 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#536B88",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EBEDEF",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#A28867",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","뮤트","보색","무채색"]
  },
  {
    "id": "complement-more-171",
    "name": "블루 · 오렌지 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#536B88",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EBEDEF",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#B5AA9C",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A28867",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","뮤트","보색","무채색"]
  },
  {
    "id": "complement-more-172",
    "name": "블루 · 오렌지 뮤트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#536B88",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EBEDEF",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#354150",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#B5AA9C",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#A28867",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","뮤트","보색","무채색"]
  },
  {
    "id": "complement-more-173",
    "name": "블루 · 오렌지 비비드 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A71DB",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#E89A3B",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","비비드","보색"]
  },
  {
    "id": "complement-more-174",
    "name": "블루 · 오렌지 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A71DB",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E7EDF3",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E89A3B",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","비비드","보색"]
  },
  {
    "id": "complement-more-175",
    "name": "블루 · 오렌지 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A71DB",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E7EDF3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D8B992",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E89A3B",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","비비드","보색"]
  },
  {
    "id": "complement-more-176",
    "name": "블루 · 오렌지 비비드 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A71DB",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E7EDF3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#1A4A84",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D8B992",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#E89A3B",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","비비드","보색"]
  },
  {
    "id": "complement-more-177",
    "name": "블루 · 오렌지 딥 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A3A60",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#845924",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","딥","보색"]
  },
  {
    "id": "complement-more-178",
    "name": "블루 · 오렌지 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A3A60",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E9EDF2",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#845924",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","딥","보색"]
  },
  {
    "id": "complement-more-179",
    "name": "블루 · 오렌지 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A3A60",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E9EDF2",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A17C4F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#845924",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","딥","보색"]
  },
  {
    "id": "complement-more-180",
    "name": "블루 · 오렌지 딥 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1A3A60",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E9EDF2",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#0B131E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A17C4F",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#845924",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","오렌지","딥","보색"]
  },
  {
    "id": "complement-more-181",
    "name": "인디고 · 골드 파스텔 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#ACA9E5",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#EEEFCC",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","파스텔","보색","블루","옐로우"]
  },
  {
    "id": "complement-more-182",
    "name": "인디고 · 골드 파스텔 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#ACA9E5",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E9E9F1",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#EEEFCC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","파스텔","보색","블루"]
  },
  {
    "id": "complement-more-183",
    "name": "인디고 · 골드 파스텔 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#ACA9E5",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E9E9F1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F4F5EB",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EEEFCC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","파스텔","보색","블루"]
  },
  {
    "id": "complement-more-184",
    "name": "인디고 · 골드 파스텔 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#ACA9E5",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E9E9F1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#736FC8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F4F5EB",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#EEEFCC",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","파스텔","보색","블루"]
  },
  {
    "id": "complement-more-185",
    "name": "인디고 · 골드 소프트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#7B78BF",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CBCE97",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","소프트","보색","블루","옐로우"]
  },
  {
    "id": "complement-more-186",
    "name": "인디고 · 골드 소프트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#7B78BF",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EBEAF0",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#CBCE97",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","소프트","보색","블루"]
  },
  {
    "id": "complement-more-187",
    "name": "인디고 · 골드 소프트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#7B78BF",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EBEAF0",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#DEDFCD",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CBCE97",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","소프트","보색","블루"]
  },
  {
    "id": "complement-more-188",
    "name": "인디고 · 골드 소프트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#7B78BF",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EBEAF0",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#514E93",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DEDFCD",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CBCE97",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","소프트","보색","블루"]
  },
  {
    "id": "complement-more-189",
    "name": "인디고 · 골드 뮤트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#565388",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#9FA267",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","뮤트","보색","블루","옐로우"]
  },
  {
    "id": "complement-more-190",
    "name": "인디고 · 골드 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#565388",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EBEBEF",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#9FA267",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","뮤트","보색","블루","무채색"]
  },
  {
    "id": "complement-more-191",
    "name": "인디고 · 골드 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#565388",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EBEBEF",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#B4B59C",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9FA267",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","뮤트","보색","블루","무채색"]
  },
  {
    "id": "complement-more-192",
    "name": "인디고 · 골드 뮤트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#565388",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EBEBEF",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#363550",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#B4B59C",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#9FA267",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","뮤트","보색","블루","무채색"]
  },
  {
    "id": "complement-more-193",
    "name": "인디고 · 골드 비비드 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#231ADB",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#DFE83B",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","비비드","보색","블루","옐로우"]
  },
  {
    "id": "complement-more-194",
    "name": "인디고 · 골드 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#231ADB",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E7E7F3",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#DFE83B",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","비비드","보색","블루"]
  },
  {
    "id": "complement-more-195",
    "name": "인디고 · 골드 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#231ADB",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E7E7F3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D5D892",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DFE83B",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","비비드","보색","블루"]
  },
  {
    "id": "complement-more-196",
    "name": "인디고 · 골드 비비드 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#231ADB",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E7E7F3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#1F1A84",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D5D892",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#DFE83B",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","비비드","보색","블루"]
  },
  {
    "id": "complement-more-197",
    "name": "인디고 · 골드 딥 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1E1A60",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#7F8424",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","딥","보색","블루","옐로우"]
  },
  {
    "id": "complement-more-198",
    "name": "인디고 · 골드 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1E1A60",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E9E9F2",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#7F8424",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","딥","보색","블루"]
  },
  {
    "id": "complement-more-199",
    "name": "인디고 · 골드 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1E1A60",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E9E9F2",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#9DA14F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#7F8424",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","딥","보색","블루"]
  },
  {
    "id": "complement-more-200",
    "name": "인디고 · 골드 딥 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1E1A60",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E9E9F2",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#0C0B1E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9DA14F",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#7F8424",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["인디고","골드","딥","보색","블루"]
  },
  {
    "id": "complement-more-201",
    "name": "퍼플 · 라임 파스텔 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#CAA9E5",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#DCEFCC",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","파스텔","보색","그린"]
  },
  {
    "id": "complement-more-202",
    "name": "퍼플 · 라임 파스텔 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#CAA9E5",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EEE9F1",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#DCEFCC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","파스텔","보색"]
  },
  {
    "id": "complement-more-203",
    "name": "퍼플 · 라임 파스텔 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#CAA9E5",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EEE9F1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#EFF5EB",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DCEFCC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","파스텔","보색"]
  },
  {
    "id": "complement-more-204",
    "name": "퍼플 · 라임 파스텔 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#CAA9E5",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EEE9F1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A06FC8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EFF5EB",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#DCEFCC",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","파스텔","보색"]
  },
  {
    "id": "complement-more-205",
    "name": "퍼플 · 라임 소프트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#9F78BF",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#B0CE97",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","소프트","보색","그린"]
  },
  {
    "id": "complement-more-206",
    "name": "퍼플 · 라임 소프트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#9F78BF",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EDEAF0",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#B0CE97",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","소프트","보색"]
  },
  {
    "id": "complement-more-207",
    "name": "퍼플 · 라임 소프트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#9F78BF",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EDEAF0",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D5DFCD",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#B0CE97",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","소프트","보색"]
  },
  {
    "id": "complement-more-208",
    "name": "퍼플 · 라임 소프트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#9F78BF",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EDEAF0",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#744E93",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D5DFCD",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#B0CE97",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","소프트","보색"]
  },
  {
    "id": "complement-more-209",
    "name": "퍼플 · 라임 뮤트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#705388",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#82A267",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","뮤트","보색","그린"]
  },
  {
    "id": "complement-more-210",
    "name": "퍼플 · 라임 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#705388",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EDEBEF",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#82A267",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","뮤트","보색","무채색"]
  },
  {
    "id": "complement-more-211",
    "name": "퍼플 · 라임 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#705388",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EDEBEF",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A7B59C",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#82A267",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","뮤트","보색","무채색"]
  },
  {
    "id": "complement-more-212",
    "name": "퍼플 · 라임 뮤트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#705388",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EDEBEF",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#443550",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A7B59C",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#82A267",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","뮤트","보색","무채색"]
  },
  {
    "id": "complement-more-213",
    "name": "퍼플 · 라임 비비드 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#841ADB",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#89E83B",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","비비드","보색","그린"]
  },
  {
    "id": "complement-more-214",
    "name": "퍼플 · 라임 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#841ADB",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EEE7F3",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#89E83B",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","비비드","보색"]
  },
  {
    "id": "complement-more-215",
    "name": "퍼플 · 라임 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#841ADB",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EEE7F3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#B2D892",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#89E83B",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","비비드","보색"]
  },
  {
    "id": "complement-more-216",
    "name": "퍼플 · 라임 비비드 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#841ADB",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EEE7F3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#541A84",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#B2D892",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#89E83B",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","비비드","보색"]
  },
  {
    "id": "complement-more-217",
    "name": "퍼플 · 라임 딥 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#411A60",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#4F8424",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","딥","보색","그린"]
  },
  {
    "id": "complement-more-218",
    "name": "퍼플 · 라임 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#411A60",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EEE9F2",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#4F8424",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","딥","보색"]
  },
  {
    "id": "complement-more-219",
    "name": "퍼플 · 라임 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#411A60",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EEE9F2",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#74A14F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#4F8424",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","딥","보색"]
  },
  {
    "id": "complement-more-220",
    "name": "퍼플 · 라임 딥 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#411A60",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EEE9F2",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#150B1E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#74A14F",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#4F8424",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","딥","보색"]
  },
  {
    "id": "complement-more-221",
    "name": "핑크 · 그린 파스텔 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E5A9CE",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CCEFDA",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","파스텔","보색"]
  },
  {
    "id": "complement-more-222",
    "name": "핑크 · 그린 파스텔 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E5A9CE",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F1E9EE",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#CCEFDA",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","파스텔","보색"]
  },
  {
    "id": "complement-more-223",
    "name": "핑크 · 그린 파스텔 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E5A9CE",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F1E9EE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#EBF5EF",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CCEFDA",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","파스텔","보색"]
  },
  {
    "id": "complement-more-224",
    "name": "핑크 · 그린 파스텔 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E5A9CE",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F1E9EE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C86FA6",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EBF5EF",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CCEFDA",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","파스텔","보색"]
  },
  {
    "id": "complement-more-225",
    "name": "핑크 · 그린 소프트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BF78A4",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#97CEAC",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","소프트","보색"]
  },
  {
    "id": "complement-more-226",
    "name": "핑크 · 그린 소프트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BF78A4",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F0EAEE",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#97CEAC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","소프트","보색"]
  },
  {
    "id": "complement-more-227",
    "name": "핑크 · 그린 소프트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BF78A4",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F0EAEE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#CDDFD4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#97CEAC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","소프트","보색"]
  },
  {
    "id": "complement-more-228",
    "name": "핑크 · 그린 소프트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BF78A4",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F0EAEE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#934E78",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CDDFD4",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#97CEAC",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","소프트","보색"]
  },
  {
    "id": "complement-more-229",
    "name": "핑크 · 그린 뮤트 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#885374",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#67A27E",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","뮤트","보색"]
  },
  {
    "id": "complement-more-230",
    "name": "핑크 · 그린 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#885374",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EFEBEE",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#67A27E",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","뮤트","보색","무채색"]
  },
  {
    "id": "complement-more-231",
    "name": "핑크 · 그린 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#885374",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EFEBEE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#9CB5A5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#67A27E",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","뮤트","보색","무채색"]
  },
  {
    "id": "complement-more-232",
    "name": "핑크 · 그린 뮤트 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#885374",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EFEBEE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#503545",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9CB5A5",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#67A27E",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","뮤트","보색","무채색"]
  },
  {
    "id": "complement-more-233",
    "name": "핑크 · 그린 비비드 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DB1A91",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#3BE87D",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","비비드","보색"]
  },
  {
    "id": "complement-more-234",
    "name": "핑크 · 그린 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DB1A91",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F3E7EF",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#3BE87D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","비비드","보색"]
  },
  {
    "id": "complement-more-235",
    "name": "핑크 · 그린 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DB1A91",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F3E7EF",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#92D8AD",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#3BE87D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","비비드","보색"]
  },
  {
    "id": "complement-more-236",
    "name": "핑크 · 그린 비비드 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DB1A91",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F3E7EF",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#841A5B",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#92D8AD",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#3BE87D",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","비비드","보색"]
  },
  {
    "id": "complement-more-237",
    "name": "핑크 · 그린 딥 보색 2색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#601A45",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#248449",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","딥","보색"]
  },
  {
    "id": "complement-more-238",
    "name": "핑크 · 그린 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#601A45",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F2E9EE",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#248449",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","딥","보색"]
  },
  {
    "id": "complement-more-239",
    "name": "핑크 · 그린 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#601A45",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F2E9EE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#4FA16E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#248449",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","딥","보색"]
  },
  {
    "id": "complement-more-240",
    "name": "핑크 · 그린 딥 보색 5색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#601A45",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F2E9EE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#1E0B17",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#4FA16E",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#248449",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["핑크","그린","딥","보색"]
  }
];
