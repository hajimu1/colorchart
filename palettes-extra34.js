// 3색·4색 추가 배색 240개 — 색상환 규칙 기반, 원본 데이터와 별도 관리.
const EXTRA34_PALETTES = [
  {
    "id": "extra34-001",
    "name": "코랄 파스텔 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E7C1BB",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#CF8377",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#974235",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","파스텔","톤온톤","레드"]
  },
  {
    "id": "extra34-002",
    "name": "코랄 파스텔 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E7C1BB",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#CF8377",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#974235",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#5B2820",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","파스텔","톤온톤","레드"]
  },
  {
    "id": "extra34-003",
    "name": "벚꽃색 바탕의 상아색",
    "searchAliases": ["코랄 파스텔 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E7C1BB",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E7E2BB",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E7BBD6",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","파스텔","톤인톤","레드","옐로우"]
  },
  {
    "id": "extra34-004",
    "name": "벚꽃색과 상아색 사이",
    "searchAliases": ["코랄 파스텔 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E7C1BB",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E7E2BB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E7BBD6",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CBE7BB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","파스텔","톤인톤","레드","옐로우"]
  },
  {
    "id": "extra34-005",
    "name": "코랄 파스텔 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E7C1BB",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#BBE1E7",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#9F4538",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","파스텔","보색","레드","시안"]
  },
  {
    "id": "extra34-006",
    "name": "코랄 파스텔 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E7C1BB",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#BBE1E7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#9F4538",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#245D66",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","파스텔","보색","레드","시안"]
  },
  {
    "id": "extra34-007",
    "name": "코랄 뮤트 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#A98079",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#D5C1BE",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F3EDEC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","뮤트","톤온톤","레드"]
  },
  {
    "id": "extra34-008",
    "name": "코랄 뮤트 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#A98079",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#D5C1BE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F3EDEC",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#835A54",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","뮤트","톤온톤","레드"]
  },
  {
    "id": "extra34-009",
    "name": "토프 바탕의 세이지",
    "searchAliases": ["코랄 뮤트 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A98079",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#A9A479",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#A97997",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","뮤트","톤인톤","레드","옐로우"]
  },
  {
    "id": "extra34-010",
    "name": "토프 곁의 세이지",
    "searchAliases": ["코랄 뮤트 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A98079",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#A9A479",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A97997",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#8BA979",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","뮤트","톤인톤","레드","옐로우"]
  },
  {
    "id": "extra34-011",
    "name": "코랄 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A98079",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#79A3A9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E5D9D7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","뮤트","보색","레드","시안"]
  },
  {
    "id": "extra34-012",
    "name": "코랄 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A98079",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#79A3A9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E5D9D7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#ECF2F3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","뮤트","보색","레드","시안"]
  },
  {
    "id": "extra34-013",
    "name": "코랄 비비드 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E34831",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F0A093",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#FBE7E4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","비비드","톤온톤","레드"]
  },
  {
    "id": "extra34-014",
    "name": "코랄 비비드 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E34831",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F0A093",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#FBE7E4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#AF2C18",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","비비드","톤온톤","레드"]
  },
  {
    "id": "extra34-015",
    "name": "코랄 비비드 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E34831",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E3CE31",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E3319F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","비비드","톤인톤","레드","옐로우"]
  },
  {
    "id": "extra34-016",
    "name": "코랄 비비드 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E34831",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E3CE31",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E3319F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#72E331",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","비비드","톤인톤","레드","옐로우"]
  },
  {
    "id": "extra34-017",
    "name": "코랄 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E34831",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#31CBE3",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F5BFB7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","비비드","보색","레드","시안"]
  },
  {
    "id": "extra34-018",
    "name": "코랄 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E34831",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#31CBE3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F5BFB7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E4F8FB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","비비드","보색","레드","시안"]
  },
  {
    "id": "extra34-019",
    "name": "코랄 딥 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#662D24",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#B95141",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D6948A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","딥","톤온톤","레드"]
  },
  {
    "id": "extra34-020",
    "name": "코랄 딥 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#662D24",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#B95141",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D6948A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#2D1410",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","딥","톤온톤","레드"]
  },
  {
    "id": "extra34-021",
    "name": "고동색 바탕의 다크 올리브",
    "searchAliases": ["코랄 딥 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#662D24",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#665E24",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#66244D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","딥","톤인톤","레드","옐로우"]
  },
  {
    "id": "extra34-022",
    "name": "고동색과 버건디, 다크 올리브",
    "searchAliases": ["코랄 딥 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#662D24",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#665E24",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#66244D",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#3C6624",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","딥","톤인톤","레드","옐로우"]
  },
  {
    "id": "extra34-023",
    "name": "코랄 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#662D24",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#245D66",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#C66B5D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","딥","보색","레드","시안"]
  },
  {
    "id": "extra34-024",
    "name": "코랄 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#662D24",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#245D66",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C66B5D",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#99D2DB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","딥","보색","레드","시안"]
  },
  {
    "id": "extra34-025",
    "name": "앰버 파스텔 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E7D5BB",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#CFAB77",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#976E35",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","파스텔","톤온톤","오렌지"]
  },
  {
    "id": "extra34-026",
    "name": "앰버 파스텔 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E7D5BB",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#CFAB77",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#976E35",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#5B4220",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","파스텔","톤온톤","오렌지"]
  },
  {
    "id": "extra34-027",
    "name": "앰버 파스텔 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E7D5BB",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#D8E7BB",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E7BBC2",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","파스텔","톤인톤","오렌지","그린"]
  },
  {
    "id": "extra34-028",
    "name": "앰버 파스텔 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E7D5BB",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#D8E7BB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E7BBC2",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#BBE7BF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","파스텔","톤인톤","오렌지","그린"]
  },
  {
    "id": "extra34-029",
    "name": "앰버 파스텔 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E7D5BB",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#BBCDE7",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#9F7438",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","파스텔","보색","오렌지","블루"]
  },
  {
    "id": "extra34-030",
    "name": "앰버 파스텔 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E7D5BB",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#BBCDE7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#9F7438",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#243F66",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","파스텔","보색","오렌지","블루"]
  },
  {
    "id": "extra34-031",
    "name": "앰버 뮤트 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#A99579",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#D5CBBE",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F3F0EC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","뮤트","톤온톤","오렌지"]
  },
  {
    "id": "extra34-032",
    "name": "앰버 뮤트 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#A99579",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#D5CBBE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F3F0EC",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#836F54",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","뮤트","톤온톤","오렌지"]
  },
  {
    "id": "extra34-033",
    "name": "앰버 뮤트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A99579",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#99A979",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#A97981",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","뮤트","톤인톤","오렌지","그린"]
  },
  {
    "id": "extra34-034",
    "name": "앰버 뮤트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A99579",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#99A979",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A97981",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#79A97D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","뮤트","톤인톤","오렌지","그린"]
  },
  {
    "id": "extra34-035",
    "name": "앰버 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A99579",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#798DA9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E5DFD7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","뮤트","보색","오렌지","블루"]
  },
  {
    "id": "extra34-036",
    "name": "앰버 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A99579",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#798DA9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E5DFD7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#ECEFF3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","뮤트","보색","오렌지","블루"]
  },
  {
    "id": "extra34-037",
    "name": "앰버 비비드 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E39931",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F0CA93",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#FBF2E4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","비비드","톤온톤","오렌지"]
  },
  {
    "id": "extra34-038",
    "name": "앰버 비비드 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E39931",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F0CA93",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#FBF2E4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#AF7018",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","비비드","톤온톤","오렌지"]
  },
  {
    "id": "extra34-039",
    "name": "앰버 비비드 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E39931",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#A7E331",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E3314E",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","비비드","톤인톤","오렌지","그린"]
  },
  {
    "id": "extra34-040",
    "name": "앰버 비비드 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E39931",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#A7E331",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E3314E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#31E33F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","비비드","톤인톤","오렌지","그린"]
  },
  {
    "id": "extra34-041",
    "name": "앰버 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E39931",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#317BE3",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F5DBB7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","비비드","보색","오렌지","블루"]
  },
  {
    "id": "extra34-042",
    "name": "앰버 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E39931",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#317BE3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F5DBB7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E4EEFB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","비비드","보색","오렌지","블루"]
  },
  {
    "id": "extra34-043",
    "name": "앰버 딥 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#664A24",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#B98741",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D6B68A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","딥","톤온톤","오렌지"]
  },
  {
    "id": "extra34-044",
    "name": "앰버 딥 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#664A24",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#B98741",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D6B68A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#2D2110",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","딥","톤온톤","오렌지"]
  },
  {
    "id": "extra34-045",
    "name": "앰버 딥 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#664A24",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#506624",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#66242F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","딥","톤인톤","오렌지","그린"]
  },
  {
    "id": "extra34-046",
    "name": "앰버 딥 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#664A24",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#506624",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#66242F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#246629",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","딥","톤인톤","오렌지","그린"]
  },
  {
    "id": "extra34-047",
    "name": "앰버 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#664A24",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#243F66",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#C69A5D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","딥","보색","오렌지","블루"]
  },
  {
    "id": "extra34-048",
    "name": "앰버 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#664A24",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#243F66",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C69A5D",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#99B5DB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["앰버","딥","보색","오렌지","블루"]
  },
  {
    "id": "extra34-049",
    "name": "옐로우 파스텔 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E7E3BB",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#CFC877",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#978F35",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","파스텔","톤온톤"]
  },
  {
    "id": "extra34-050",
    "name": "옐로우 파스텔 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E7E3BB",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#CFC877",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#978F35",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#5B5620",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","파스텔","톤온톤"]
  },
  {
    "id": "extra34-051",
    "name": "옐로우 파스텔 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E7E3BB",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#CAE7BB",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E7C2BB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","파스텔","톤인톤","그린"]
  },
  {
    "id": "extra34-052",
    "name": "옐로우 파스텔 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E7E3BB",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#CAE7BB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E7C2BB",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#BBE7CD",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","파스텔","톤인톤","그린"]
  },
  {
    "id": "extra34-053",
    "name": "옐로우 파스텔 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E7E3BB",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#BBBFE7",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#9F9638",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","파스텔","보색","블루"]
  },
  {
    "id": "extra34-054",
    "name": "옐로우 파스텔 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E7E3BB",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#BBBFE7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#9F9638",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#242966",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","파스텔","보색","블루"]
  },
  {
    "id": "extra34-055",
    "name": "옐로우 뮤트 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#A9A579",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#D5D3BE",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F3F3EC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","뮤트","톤온톤"]
  },
  {
    "id": "extra34-056",
    "name": "옐로우 뮤트 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#A9A579",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#D5D3BE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F3F3EC",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#837F54",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","뮤트","톤온톤"]
  },
  {
    "id": "extra34-057",
    "name": "옐로우 뮤트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A9A579",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#89A979",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#A98179",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","뮤트","톤인톤","그린"]
  },
  {
    "id": "extra34-058",
    "name": "옐로우 뮤트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A9A579",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#89A979",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A98179",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#79A98D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","뮤트","톤인톤","그린"]
  },
  {
    "id": "extra34-059",
    "name": "옐로우 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A9A579",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#797DA9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E5E4D7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","뮤트","보색","블루"]
  },
  {
    "id": "extra34-060",
    "name": "옐로우 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A9A579",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#797DA9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E5E4D7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#ECEDF3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","뮤트","보색","블루"]
  },
  {
    "id": "extra34-061",
    "name": "옐로우 비비드 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E3D431",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F0E993",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#FBF9E4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","비비드","톤온톤"]
  },
  {
    "id": "extra34-062",
    "name": "옐로우 비비드 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E3D431",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F0E993",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#FBF9E4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#AFA218",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","비비드","톤온톤"]
  },
  {
    "id": "extra34-063",
    "name": "옐로우 비비드 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E3D431",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#6CE331",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E34E31",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","비비드","톤인톤","그린"]
  },
  {
    "id": "extra34-064",
    "name": "옐로우 비비드 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E3D431",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#6CE331",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E34E31",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#31E37B",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","비비드","톤인톤","그린"]
  },
  {
    "id": "extra34-065",
    "name": "옐로우 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E3D431",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#313FE3",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F5F0B7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","비비드","보색","블루"]
  },
  {
    "id": "extra34-066",
    "name": "옐로우 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E3D431",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#313FE3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F5F0B7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E4E6FB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","비비드","보색","블루"]
  },
  {
    "id": "extra34-067",
    "name": "옐로우 딥 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#666024",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#B9AF41",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D6D08A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","딥","톤온톤"]
  },
  {
    "id": "extra34-068",
    "name": "옐로우 딥 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#666024",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#B9AF41",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D6D08A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#2D2B10",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","딥","톤온톤"]
  },
  {
    "id": "extra34-069",
    "name": "옐로우 딥 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#666024",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#3A6624",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#662F24",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","딥","톤인톤","그린"]
  },
  {
    "id": "extra34-070",
    "name": "옐로우 딥 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#666024",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#3A6624",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#662F24",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#24663F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","딥","톤인톤","그린"]
  },
  {
    "id": "extra34-071",
    "name": "옐로우 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#666024",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#242966",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#C6BD5D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","딥","보색","블루"]
  },
  {
    "id": "extra34-072",
    "name": "옐로우 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#666024",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#242966",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C6BD5D",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#999FDB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","딥","보색","블루"]
  },
  {
    "id": "extra34-073",
    "name": "올리브 파스텔 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#D8E7BB",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#B2CF77",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#769735",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","파스텔","톤온톤","그린"]
  },
  {
    "id": "extra34-074",
    "name": "올리브 파스텔 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#D8E7BB",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#B2CF77",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#769735",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#475B20",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","파스텔","톤온톤","그린"]
  },
  {
    "id": "extra34-075",
    "name": "올리브 파스텔 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#D8E7BB",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#BBE7BF",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E7D5BB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","파스텔","톤인톤","그린"]
  },
  {
    "id": "extra34-076",
    "name": "올리브 파스텔 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#D8E7BB",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#BBE7BF",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E7D5BB",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#BBE7E0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","파스텔","톤인톤","그린"]
  },
  {
    "id": "extra34-077",
    "name": "올리브 파스텔 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#D8E7BB",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#CABBE7",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#7C9F38",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","파스텔","보색","그린","퍼플"]
  },
  {
    "id": "extra34-078",
    "name": "올리브 파스텔 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#D8E7BB",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#CABBE7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#7C9F38",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#3A2466",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","파스텔","보색","그린","퍼플"]
  },
  {
    "id": "extra34-079",
    "name": "올리브 뮤트 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#99A979",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#CDD5BE",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F1F3EC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","뮤트","톤온톤","그린"]
  },
  {
    "id": "extra34-080",
    "name": "올리브 뮤트 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#99A979",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#CDD5BE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F1F3EC",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#738354",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","뮤트","톤온톤","그린"]
  },
  {
    "id": "extra34-081",
    "name": "올리브 뮤트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#99A979",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#79A97D",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#A99579",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","뮤트","톤인톤","그린"]
  },
  {
    "id": "extra34-082",
    "name": "올리브 뮤트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#99A979",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#79A97D",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A99579",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#79A9A1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","뮤트","톤인톤","그린"]
  },
  {
    "id": "extra34-083",
    "name": "올리브 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#99A979",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#8979A9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E0E5D7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","뮤트","보색","그린","퍼플"]
  },
  {
    "id": "extra34-084",
    "name": "올리브 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#99A979",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#8979A9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E0E5D7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EFECF3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","뮤트","보색","그린","퍼플"]
  },
  {
    "id": "extra34-085",
    "name": "올리브 비비드 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#A7E331",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#D1F093",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F4FBE4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","비비드","톤온톤","그린"]
  },
  {
    "id": "extra34-086",
    "name": "올리브 비비드 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#A7E331",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#D1F093",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F4FBE4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#7DAF18",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","비비드","톤온톤","그린"]
  },
  {
    "id": "extra34-087",
    "name": "올리브 비비드 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A7E331",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#31E33F",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E39931",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","비비드","톤인톤","그린"]
  },
  {
    "id": "extra34-088",
    "name": "올리브 비비드 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A7E331",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#31E33F",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E39931",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#31E3C5",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","비비드","톤인톤","그린"]
  },
  {
    "id": "extra34-089",
    "name": "올리브 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A7E331",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#6C31E3",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E1F5B7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","비비드","보색","그린","블루"]
  },
  {
    "id": "extra34-090",
    "name": "올리브 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A7E331",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#6C31E3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E1F5B7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#ECE4FB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","비비드","보색","그린","블루"]
  },
  {
    "id": "extra34-091",
    "name": "올리브 딥 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#506624",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#91B941",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#BDD68A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","딥","톤온톤","그린"]
  },
  {
    "id": "extra34-092",
    "name": "올리브 딥 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#506624",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#91B941",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#BDD68A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#232D10",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","딥","톤온톤","그린"]
  },
  {
    "id": "extra34-093",
    "name": "올리브 딥 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#506624",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#246629",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#664A24",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","딥","톤인톤","그린"]
  },
  {
    "id": "extra34-094",
    "name": "올리브 딥 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#506624",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#246629",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#664A24",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#24665B",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","딥","톤인톤","그린"]
  },
  {
    "id": "extra34-095",
    "name": "올리브 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#506624",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#3A2466",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#A3C65D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","딥","보색","그린","퍼플"]
  },
  {
    "id": "extra34-096",
    "name": "올리브 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#506624",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#3A2466",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A3C65D",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#AF99DB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["올리브","딥","보색","그린","퍼플"]
  },
  {
    "id": "extra34-097",
    "name": "그린 파스텔 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#BBE7CA",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#77CF95",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#359756",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","파스텔","톤온톤"]
  },
  {
    "id": "extra34-098",
    "name": "그린 파스텔 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#BBE7CA",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#77CF95",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#359756",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#205B33",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","파스텔","톤온톤"]
  },
  {
    "id": "extra34-099",
    "name": "그린 파스텔 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#BBE7CA",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#BBE3E7",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#CDE7BB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","파스텔","톤인톤","시안"]
  },
  {
    "id": "extra34-100",
    "name": "그린 파스텔 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#BBE7CA",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#BBE3E7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#CDE7BB",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#BBC2E7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","파스텔","톤인톤","시안"]
  },
  {
    "id": "extra34-101",
    "name": "그린 파스텔 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BBE7CA",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E7BBD8",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#389F5A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","파스텔","보색","핑크"]
  },
  {
    "id": "extra34-102",
    "name": "그린 파스텔 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BBE7CA",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E7BBD8",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#389F5A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#662450",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","파스텔","보색","핑크"]
  },
  {
    "id": "extra34-103",
    "name": "그린 뮤트 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#79A989",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#BED5C6",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#ECF3EF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","뮤트","톤온톤"]
  },
  {
    "id": "extra34-104",
    "name": "그린 뮤트 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#79A989",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#BED5C6",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#ECF3EF",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#548363",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","뮤트","톤온톤"]
  },
  {
    "id": "extra34-105",
    "name": "그린 뮤트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#79A989",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#79A5A9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#8DA979",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","뮤트","톤인톤","시안"]
  },
  {
    "id": "extra34-106",
    "name": "그린 뮤트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#79A989",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#79A5A9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#8DA979",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#7981A9",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","뮤트","톤인톤","시안"]
  },
  {
    "id": "extra34-107",
    "name": "그린 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#79A989",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#A97999",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D7E5DB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","뮤트","보색","핑크"]
  },
  {
    "id": "extra34-108",
    "name": "그린 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#79A989",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#A97999",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D7E5DB",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F3ECF1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","뮤트","보색","핑크"]
  },
  {
    "id": "extra34-109",
    "name": "그린 비비드 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#31E36C",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#93F0B2",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E4FBEC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","비비드","톤온톤"]
  },
  {
    "id": "extra34-110",
    "name": "그린 비비드 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#31E36C",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#93F0B2",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E4FBEC",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#18AF4A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","비비드","톤온톤"]
  },
  {
    "id": "extra34-111",
    "name": "그린 비비드 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#31E36C",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#31D4E3",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#7BE331",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","비비드","톤인톤","시안"]
  },
  {
    "id": "extra34-112",
    "name": "그린 비비드 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#31E36C",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#31D4E3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#7BE331",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#314EE3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","비비드","톤인톤","시안"]
  },
  {
    "id": "extra34-113",
    "name": "그린 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#31E36C",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E331A7",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#B7F5CC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","비비드","보색","핑크"]
  },
  {
    "id": "extra34-114",
    "name": "그린 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#31E36C",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E331A7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#B7F5CC",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#FBE4F4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","비비드","보색","핑크"]
  },
  {
    "id": "extra34-115",
    "name": "그린 딥 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#24663A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#41B969",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#8AD6A3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","딥","톤온톤"]
  },
  {
    "id": "extra34-116",
    "name": "그린 딥 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#24663A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#41B969",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#8AD6A3",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#102D1A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","딥","톤온톤"]
  },
  {
    "id": "extra34-117",
    "name": "그린 딥 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#24663A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#246066",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#3F6624",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","딥","톤인톤","시안"]
  },
  {
    "id": "extra34-118",
    "name": "그린 딥 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#24663A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#246066",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#3F6624",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#242F66",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","딥","톤인톤","시안"]
  },
  {
    "id": "extra34-119",
    "name": "그린 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#24663A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#662450",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#5DC680",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","딥","보색","핑크"]
  },
  {
    "id": "extra34-120",
    "name": "그린 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#24663A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#662450",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#5DC680",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DB99C5",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","딥","보색","핑크"]
  },
  {
    "id": "extra34-121",
    "name": "틸 파스텔 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#BBE7E3",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#77CFC8",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#35978F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","파스텔","톤온톤","시안"]
  },
  {
    "id": "extra34-122",
    "name": "틸 파스텔 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#BBE7E3",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#77CFC8",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#35978F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#205B56",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","파스텔","톤온톤","시안"]
  },
  {
    "id": "extra34-123",
    "name": "물빛 바탕의 안개색",
    "searchAliases": ["틸 파스텔 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#BBE7E3",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#BBCAE7",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#BBE7C2",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","파스텔","톤인톤","시안","블루"]
  },
  {
    "id": "extra34-124",
    "name": "물빛과 안개색",
    "searchAliases": ["틸 파스텔 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#BBE7E3",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#BBCAE7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#BBE7C2",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CDBBE7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","파스텔","톤인톤","시안","블루"]
  },
  {
    "id": "extra34-125",
    "name": "틸 파스텔 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BBE7E3",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E7BBBF",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#389F96",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","파스텔","보색","시안","레드"]
  },
  {
    "id": "extra34-126",
    "name": "틸 파스텔 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BBE7E3",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E7BBBF",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#389F96",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#662429",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","파스텔","보색","시안","레드"]
  },
  {
    "id": "extra34-127",
    "name": "틸 뮤트 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#79A9A5",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#BED5D3",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#ECF3F3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","뮤트","톤온톤","시안"]
  },
  {
    "id": "extra34-128",
    "name": "틸 뮤트 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#79A9A5",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#BED5D3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#ECF3F3",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#54837F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","뮤트","톤온톤","시안"]
  },
  {
    "id": "extra34-129",
    "name": "회청색 바탕의 더스티블루",
    "searchAliases": ["틸 뮤트 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#79A9A5",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#7989A9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#79A981",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","뮤트","톤인톤","시안","블루"]
  },
  {
    "id": "extra34-130",
    "name": "회청색 위에 겹친 더스티블루",
    "searchAliases": ["틸 뮤트 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#79A9A5",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#7989A9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#79A981",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#8D79A9",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","뮤트","톤인톤","시안","블루"]
  },
  {
    "id": "extra34-131",
    "name": "틸 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#79A9A5",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#A9797D",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D7E5E4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","뮤트","보색","시안","레드"]
  },
  {
    "id": "extra34-132",
    "name": "틸 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#79A9A5",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#A9797D",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D7E5E4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F3ECED",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","뮤트","보색","시안","레드"]
  },
  {
    "id": "extra34-133",
    "name": "틸 비비드 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#31E3D4",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#93F0E9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E4FBF9",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","비비드","톤온톤","시안"]
  },
  {
    "id": "extra34-134",
    "name": "틸 비비드 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#31E3D4",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#93F0E9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E4FBF9",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#18AFA2",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","비비드","톤온톤","시안"]
  },
  {
    "id": "extra34-135",
    "name": "틸 비비드 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#31E3D4",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#316CE3",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#31E34E",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","비비드","톤인톤","시안","블루"]
  },
  {
    "id": "extra34-136",
    "name": "틸 비비드 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#31E3D4",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#316CE3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#31E34E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#7B31E3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","비비드","톤인톤","시안","블루"]
  },
  {
    "id": "extra34-137",
    "name": "틸 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#31E3D4",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E3313F",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#B7F5F0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","비비드","보색","시안","레드"]
  },
  {
    "id": "extra34-138",
    "name": "틸 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#31E3D4",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E3313F",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#B7F5F0",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#FBE4E6",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","비비드","보색","시안","레드"]
  },
  {
    "id": "extra34-139",
    "name": "틸 딥 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#246660",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#41B9AF",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#8AD6D0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","딥","톤온톤","시안"]
  },
  {
    "id": "extra34-140",
    "name": "틸 딥 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#246660",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#41B9AF",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#8AD6D0",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#102D2B",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","딥","톤온톤","시안"]
  },
  {
    "id": "extra34-141",
    "name": "솔잎색 바탕의 남색",
    "searchAliases": ["틸 딥 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#246660",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#243A66",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#24662F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","딥","톤인톤","시안","블루"]
  },
  {
    "id": "extra34-142",
    "name": "솔잎색과 남색 사이",
    "searchAliases": ["틸 딥 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#246660",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#243A66",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#24662F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#3F2466",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","딥","톤인톤","시안","블루"]
  },
  {
    "id": "extra34-143",
    "name": "틸 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#246660",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#662429",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#5DC6BD",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","딥","보색","시안","레드"]
  },
  {
    "id": "extra34-144",
    "name": "틸 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#246660",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#662429",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#5DC6BD",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DB999F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","딥","보색","시안","레드"]
  },
  {
    "id": "extra34-145",
    "name": "시안 파스텔 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#BBDCE7",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#77B9CF",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#357E97",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","파스텔","톤온톤"]
  },
  {
    "id": "extra34-146",
    "name": "시안 파스텔 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#BBDCE7",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#77B9CF",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#357E97",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#204C5B",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","파스텔","톤온톤"]
  },
  {
    "id": "extra34-147",
    "name": "물빛 바탕의 라벤더",
    "searchAliases": ["시안 파스텔 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#BBDCE7",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#BBBBE7",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#BBE7D1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","파스텔","톤인톤","블루"]
  },
  {
    "id": "extra34-148",
    "name": "물빛 곁의 라벤더",
    "searchAliases": ["시안 파스텔 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#BBDCE7",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#BBBBE7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#BBE7D1",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DCBBE7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","파스텔","톤인톤","블루"]
  },
  {
    "id": "extra34-149",
    "name": "시안 파스텔 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BBDCE7",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E7C6BB",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#38859F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","파스텔","보색","오렌지"]
  },
  {
    "id": "extra34-150",
    "name": "시안 파스텔 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BBDCE7",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E7C6BB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#38859F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#663424",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","파스텔","보색","오렌지"]
  },
  {
    "id": "extra34-151",
    "name": "더스티블루 바탕의 안개색",
    "searchAliases": ["시안 뮤트 톤온톤 3색"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#799DA9",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#BECFD5",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#ECF1F3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","뮤트","톤온톤"]
  },
  {
    "id": "extra34-152",
    "name": "더스티블루 바탕의 빙하색",
    "searchAliases": ["시안 뮤트 톤온톤 4색"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#799DA9",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#BECFD5",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#ECF1F3",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#547783",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","뮤트","톤온톤"]
  },
  {
    "id": "extra34-153",
    "name": "더스티블루 바탕의 데님",
    "searchAliases": ["시안 뮤트 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#799DA9",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#7979A9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#79A991",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","뮤트","톤인톤","블루"]
  },
  {
    "id": "extra34-154",
    "name": "더스티블루와 비취색, 데님",
    "searchAliases": ["시안 뮤트 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#799DA9",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#7979A9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#79A991",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9D79A9",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","뮤트","톤인톤","블루"]
  },
  {
    "id": "extra34-155",
    "name": "더스티블루 바탕의 물빛",
    "searchAliases": ["시안 뮤트 보색 3색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#799DA9",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#A98579",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D7E1E5",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","뮤트","보색","오렌지"]
  },
  {
    "id": "extra34-156",
    "name": "더스티블루 위에 물빛 한 점",
    "searchAliases": ["시안 뮤트 보색 4색"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#799DA9",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#A98579",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D7E1E5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F3EEEC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","뮤트","보색","오렌지"]
  },
  {
    "id": "extra34-157",
    "name": "시안 비비드 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#31B6E3",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#93D9F0",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E4F6FB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","비비드","톤온톤"]
  },
  {
    "id": "extra34-158",
    "name": "시안 비비드 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#31B6E3",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#93D9F0",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E4F6FB",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#1889AF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","비비드","톤온톤"]
  },
  {
    "id": "extra34-159",
    "name": "시안 비비드 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#31B6E3",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#3131E3",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#31E38A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","비비드","톤인톤","블루"]
  },
  {
    "id": "extra34-160",
    "name": "시안 비비드 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#31B6E3",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#3131E3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#31E38A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#B631E3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","비비드","톤인톤","블루"]
  },
  {
    "id": "extra34-161",
    "name": "시안 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#31B6E3",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E35D31",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#B7E6F5",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","비비드","보색","레드"]
  },
  {
    "id": "extra34-162",
    "name": "시안 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#31B6E3",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E35D31",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#B7E6F5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#FBEAE4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","비비드","보색","레드"]
  },
  {
    "id": "extra34-163",
    "name": "시안 딥 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#245566",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#419BB9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#8AC3D6",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","딥","톤온톤"]
  },
  {
    "id": "extra34-164",
    "name": "시안 딥 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#245566",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#419BB9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#8AC3D6",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#10262D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","딥","톤온톤"]
  },
  {
    "id": "extra34-165",
    "name": "시안 딥 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#245566",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#242466",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#246645",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","딥","톤인톤","블루"]
  },
  {
    "id": "extra34-166",
    "name": "시안 딥 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#245566",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#242466",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#246645",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#552466",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","딥","톤인톤","블루"]
  },
  {
    "id": "extra34-167",
    "name": "시안 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#245566",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#663424",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#5DACC6",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","딥","보색","레드"]
  },
  {
    "id": "extra34-168",
    "name": "시안 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#245566",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#663424",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#5DACC6",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DBAA99",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","딥","보색","레드"]
  },
  {
    "id": "extra34-169",
    "name": "블루 파스텔 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#BBC6E7",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#778DCF",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#354E97",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","파스텔","톤온톤"]
  },
  {
    "id": "extra34-170",
    "name": "블루 파스텔 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#BBC6E7",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#778DCF",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#354E97",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#202F5B",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","파스텔","톤온톤"]
  },
  {
    "id": "extra34-171",
    "name": "안개색 바탕의 물빛",
    "searchAliases": ["블루 파스텔 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#BBC6E7",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#D1BBE7",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#BBE7E7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","파스텔","톤인톤","퍼플"]
  },
  {
    "id": "extra34-172",
    "name": "안개색 위에 물빛 한 점",
    "searchAliases": ["블루 파스텔 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#BBC6E7",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#D1BBE7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#BBE7E7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E7BBDC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","파스텔","톤인톤","퍼플"]
  },
  {
    "id": "extra34-173",
    "name": "블루 파스텔 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BBC6E7",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E7DCBB",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#38519F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","파스텔","보색","옐로우"]
  },
  {
    "id": "extra34-174",
    "name": "블루 파스텔 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#BBC6E7",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E7DCBB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#38519F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#665524",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","파스텔","보색","옐로우"]
  },
  {
    "id": "extra34-175",
    "name": "블루 뮤트 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#7985A9",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#BEC4D5",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#ECEEF3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","뮤트","톤온톤"]
  },
  {
    "id": "extra34-176",
    "name": "블루 뮤트 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#7985A9",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#BEC4D5",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#ECEEF3",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#545F83",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","뮤트","톤온톤"]
  },
  {
    "id": "extra34-177",
    "name": "더스티블루 바탕의 회청색",
    "searchAliases": ["블루 뮤트 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#7985A9",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#9179A9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#79A9A9",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","뮤트","톤인톤","퍼플"]
  },
  {
    "id": "extra34-178",
    "name": "더스티블루 위에 회청색 한 점",
    "searchAliases": ["블루 뮤트 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#7985A9",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#9179A9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#79A9A9",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A9799D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","뮤트","톤인톤","퍼플"]
  },
  {
    "id": "extra34-179",
    "name": "블루 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#7985A9",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#A99D79",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D7DAE5",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","뮤트","보색","옐로우"]
  },
  {
    "id": "extra34-180",
    "name": "블루 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#7985A9",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#A99D79",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D7DAE5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F3F1EC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","뮤트","보색","옐로우"]
  },
  {
    "id": "extra34-181",
    "name": "블루 비비드 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#315DE3",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#93ABF0",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E4EAFB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","비비드","톤온톤"]
  },
  {
    "id": "extra34-182",
    "name": "블루 비비드 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#315DE3",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#93ABF0",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E4EAFB",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#183EAF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","비비드","톤온톤"]
  },
  {
    "id": "extra34-183",
    "name": "블루 비비드 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#315DE3",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#8A31E3",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#31E3E3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","비비드","톤인톤","퍼플"]
  },
  {
    "id": "extra34-184",
    "name": "블루 비비드 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#315DE3",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#8A31E3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#31E3E3",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E331B6",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","비비드","톤인톤","퍼플"]
  },
  {
    "id": "extra34-185",
    "name": "블루 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#315DE3",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E3B631",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#B7C7F5",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","비비드","보색","오렌지"]
  },
  {
    "id": "extra34-186",
    "name": "블루 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#315DE3",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E3B631",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#B7C7F5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#FBF6E4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","비비드","보색","오렌지"]
  },
  {
    "id": "extra34-187",
    "name": "블루 딥 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#243466",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#415FB9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#8A9DD6",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","딥","톤온톤"]
  },
  {
    "id": "extra34-188",
    "name": "블루 딥 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#243466",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#415FB9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#8A9DD6",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#10172D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","딥","톤온톤"]
  },
  {
    "id": "extra34-189",
    "name": "남색 바탕의 솔잎색",
    "searchAliases": ["블루 딥 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#243466",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#452466",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#246666",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","딥","톤인톤","퍼플"]
  },
  {
    "id": "extra34-190",
    "name": "남색 위에 솔잎색 한 점",
    "searchAliases": ["블루 딥 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#243466",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#452466",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#246666",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#662455",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","딥","톤인톤","퍼플"]
  },
  {
    "id": "extra34-191",
    "name": "블루 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#243466",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#665524",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#5D77C6",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","딥","보색","오렌지"]
  },
  {
    "id": "extra34-192",
    "name": "블루 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#243466",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#665524",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#5D77C6",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DBCB99",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","딥","보색","오렌지"]
  },
  {
    "id": "extra34-193",
    "name": "퍼플 파스텔 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#D5BBE7",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#AB77CF",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#6E3597",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","파스텔","톤온톤"]
  },
  {
    "id": "extra34-194",
    "name": "퍼플 파스텔 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#D5BBE7",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#AB77CF",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#6E3597",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#42205B",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","파스텔","톤온톤"]
  },
  {
    "id": "extra34-195",
    "name": "퍼플 파스텔 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#D5BBE7",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E7BBD8",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#BBC2E7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","파스텔","톤인톤","핑크"]
  },
  {
    "id": "extra34-196",
    "name": "퍼플 파스텔 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#D5BBE7",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E7BBD8",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#BBC2E7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E7BFBB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","파스텔","톤인톤","핑크"]
  },
  {
    "id": "extra34-197",
    "name": "퍼플 파스텔 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#D5BBE7",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#CDE7BB",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#74389F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","파스텔","보색","그린"]
  },
  {
    "id": "extra34-198",
    "name": "퍼플 파스텔 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#D5BBE7",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#CDE7BB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#74389F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#3F6624",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","파스텔","보색","그린"]
  },
  {
    "id": "extra34-199",
    "name": "퍼플 뮤트 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#9579A9",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#CBBED5",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F0ECF3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","뮤트","톤온톤"]
  },
  {
    "id": "extra34-200",
    "name": "퍼플 뮤트 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#9579A9",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#CBBED5",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F0ECF3",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#6F5483",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","뮤트","톤온톤"]
  },
  {
    "id": "extra34-201",
    "name": "퍼플 뮤트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#9579A9",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#A97999",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#7981A9",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","뮤트","톤인톤","핑크"]
  },
  {
    "id": "extra34-202",
    "name": "퍼플 뮤트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#9579A9",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#A97999",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#7981A9",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A97D79",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","뮤트","톤인톤","핑크"]
  },
  {
    "id": "extra34-203",
    "name": "퍼플 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#9579A9",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#8DA979",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#DFD7E5",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","뮤트","보색","그린"]
  },
  {
    "id": "extra34-204",
    "name": "퍼플 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#9579A9",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#8DA979",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#DFD7E5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EFF3EC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","뮤트","보색","그린"]
  },
  {
    "id": "extra34-205",
    "name": "퍼플 비비드 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#9931E3",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#CA93F0",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F2E4FB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","비비드","톤온톤"]
  },
  {
    "id": "extra34-206",
    "name": "퍼플 비비드 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#9931E3",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#CA93F0",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F2E4FB",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#7018AF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","비비드","톤온톤"]
  },
  {
    "id": "extra34-207",
    "name": "퍼플 비비드 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#9931E3",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E331A7",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#314EE3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","비비드","톤인톤","핑크"]
  },
  {
    "id": "extra34-208",
    "name": "퍼플 비비드 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#9931E3",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E331A7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#314EE3",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E33F31",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","비비드","톤인톤","핑크"]
  },
  {
    "id": "extra34-209",
    "name": "퍼플 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#9931E3",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#7BE331",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#DBB7F5",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","비비드","보색","그린"]
  },
  {
    "id": "extra34-210",
    "name": "퍼플 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#9931E3",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#7BE331",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#DBB7F5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EEFBE4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","비비드","보색","그린"]
  },
  {
    "id": "extra34-211",
    "name": "퍼플 딥 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#4A2466",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#8741B9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#B68AD6",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","딥","톤온톤"]
  },
  {
    "id": "extra34-212",
    "name": "퍼플 딥 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#4A2466",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#8741B9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#B68AD6",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#21102D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","딥","톤온톤"]
  },
  {
    "id": "extra34-213",
    "name": "퍼플 딥 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#4A2466",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#662450",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#242F66",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","딥","톤인톤","핑크"]
  },
  {
    "id": "extra34-214",
    "name": "퍼플 딥 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#4A2466",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#662450",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#242F66",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#662924",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","딥","톤인톤","핑크"]
  },
  {
    "id": "extra34-215",
    "name": "퍼플 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#4A2466",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#3F6624",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#9A5DC6",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","딥","보색","그린"]
  },
  {
    "id": "extra34-216",
    "name": "퍼플 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#4A2466",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#3F6624",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#9A5DC6",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#B5DB99",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","딥","보색","그린"]
  },
  {
    "id": "extra34-217",
    "name": "로즈 파스텔 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E7BBD1",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#CF77A3",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#973566",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","파스텔","톤온톤","핑크"]
  },
  {
    "id": "extra34-218",
    "name": "로즈 파스텔 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E7BBD1",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#CF77A3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#973566",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#5B203D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","파스텔","톤온톤","핑크"]
  },
  {
    "id": "extra34-219",
    "name": "벚꽃색 바탕의 오트밀",
    "searchAliases": ["로즈 파스텔 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E7BBD1",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E7C6BB",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#DCBBE7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","파스텔","톤인톤","핑크","오렌지"]
  },
  {
    "id": "extra34-220",
    "name": "벚꽃색 바탕의 연녹색",
    "searchAliases": ["로즈 파스텔 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E7BBD1",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E7C6BB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#DCBBE7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E7E7BB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","파스텔","톤인톤","핑크","오렌지"]
  },
  {
    "id": "extra34-221",
    "name": "로즈 파스텔 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E7BBD1",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#BBE7D1",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#9F386B",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","파스텔","보색","핑크","그린"]
  },
  {
    "id": "extra34-222",
    "name": "로즈 파스텔 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E7BBD1",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#BBE7D1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#9F386B",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#246645",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","파스텔","보색","핑크","그린"]
  },
  {
    "id": "extra34-223",
    "name": "로즈 뮤트 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#A97991",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#D5BEC9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F3ECF0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","뮤트","톤온톤","핑크"]
  },
  {
    "id": "extra34-224",
    "name": "로즈 뮤트 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#A97991",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#D5BEC9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F3ECF0",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#83546B",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","뮤트","톤온톤","핑크"]
  },
  {
    "id": "extra34-225",
    "name": "모브 바탕의 토프",
    "searchAliases": ["로즈 뮤트 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A97991",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#A98579",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#9D79A9",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","뮤트","톤인톤","핑크","오렌지"]
  },
  {
    "id": "extra34-226",
    "name": "모브 바탕의 세이지",
    "searchAliases": ["로즈 뮤트 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A97991",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#A98579",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#9D79A9",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A9A979",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","뮤트","톤인톤","핑크","오렌지"]
  },
  {
    "id": "extra34-227",
    "name": "로즈 뮤트 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A97991",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#79A991",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E5D7DE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","뮤트","보색","핑크","그린"]
  },
  {
    "id": "extra34-228",
    "name": "로즈 뮤트 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#A97991",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#79A991",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E5D7DE",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#ECF3F0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","뮤트","보색","핑크","그린"]
  },
  {
    "id": "extra34-229",
    "name": "로즈 비비드 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E3318A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F093C2",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#FBE4F0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","비비드","톤온톤","핑크"]
  },
  {
    "id": "extra34-230",
    "name": "로즈 비비드 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E3318A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F093C2",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#FBE4F0",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#AF1863",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","비비드","톤온톤","핑크"]
  },
  {
    "id": "extra34-231",
    "name": "로즈 비비드 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E3318A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E35D31",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#B631E3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","비비드","톤인톤","핑크","레드"]
  },
  {
    "id": "extra34-232",
    "name": "로즈 비비드 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E3318A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E35D31",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#B631E3",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E3E331",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","비비드","톤인톤","핑크","레드"]
  },
  {
    "id": "extra34-233",
    "name": "로즈 비비드 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E3318A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#31E38A",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F5B7D6",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","비비드","보색","핑크","그린"]
  },
  {
    "id": "extra34-234",
    "name": "로즈 비비드 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E3318A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#31E38A",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F5B7D6",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E4FBF0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","비비드","보색","핑크","그린"]
  },
  {
    "id": "extra34-235",
    "name": "로즈 딥 톤온톤 3색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#662445",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#B9417D",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D68AB0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","딥","톤온톤","핑크"]
  },
  {
    "id": "extra34-236",
    "name": "로즈 딥 톤온톤 4색",
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#662445",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#B9417D",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D68AB0",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#2D101F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","딥","톤온톤","핑크"]
  },
  {
    "id": "extra34-237",
    "name": "버건디 바탕의 고동색",
    "searchAliases": ["로즈 딥 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#662445",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#663424",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#552466",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","딥","톤인톤","핑크","레드"]
  },
  {
    "id": "extra34-238",
    "name": "버건디 바탕의 솔잎색",
    "searchAliases": ["로즈 딥 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#662445",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#663424",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#552466",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#666624",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","딥","톤인톤","핑크","레드"]
  },
  {
    "id": "extra34-239",
    "name": "로즈 딥 보색 3색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#662445",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#246645",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#C65D91",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","딥","보색","핑크","그린"]
  },
  {
    "id": "extra34-240",
    "name": "로즈 딥 보색 4색",
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#662445",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#246645",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C65D91",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#99DBBA",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","딥","보색","핑크","그린"]
  },

  {
    "id": "mix5-001",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4816",
      "올리브 수확과 석재"
    ],
    "scheme": "free",
    "name": "Color Palette #4816 · 올리브 수확과 석재",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#2E3604"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#4E5E07"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E19D29"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#D8D2CF"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#8D8179"
      }
    ],
    "note": "ColorPalettes.net #4816에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · Yana Gorbunova · https://colorpalettes.net/color-palette-4816/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4816/",
      "title": "Color Palette #4816 · 올리브 수확과 석재",
      "method": "source_published_5hex",
      "source": "Yana Gorbunova"
    }
  },
  {
    "id": "mix5-002",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4815",
      "숲과 연한 청회색"
    ],
    "scheme": "free",
    "name": "Color Palette #4815 · 숲과 연한 청회색",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#223125"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#729969"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#A1C0C2"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#E6E7EB"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#F6F6F6"
      }
    ],
    "note": "ColorPalettes.net #4815에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · Raychan · https://colorpalettes.net/color-palette-4815/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4815/",
      "title": "Color Palette #4815 · 숲과 연한 청회색",
      "method": "source_published_5hex",
      "source": "Raychan"
    }
  },
  {
    "id": "mix5-003",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4814",
      "수목 그림자와 스톤블루"
    ],
    "scheme": "free",
    "name": "Color Palette #4814 · 수목 그림자와 스톤블루",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#0B161E"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#51625C"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#A6B9BE"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#D8D2C6"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#4F6734"
      }
    ],
    "note": "ColorPalettes.net #4814에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · laura adai · https://colorpalettes.net/color-palette-4814/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4814/",
      "title": "Color Palette #4814 · 수목 그림자와 스톤블루",
      "method": "source_published_5hex",
      "source": "laura adai"
    }
  },
  {
    "id": "mix5-004",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4813",
      "이끼와 회청색 안개"
    ],
    "scheme": "free",
    "name": "Color Palette #4813 · 이끼와 회청색 안개",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#2D3939"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#5B6972"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#CFD8DF"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#9DADA3"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#273E20"
      }
    ],
    "note": "ColorPalettes.net #4813에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · laura adai · https://colorpalettes.net/color-palette-4813/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4813/",
      "title": "Color Palette #4813 · 이끼와 회청색 안개",
      "method": "source_published_5hex",
      "source": "laura adai"
    }
  },
  {
    "id": "mix5-005",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4812",
      "보랏빛 회색과 오렌지"
    ],
    "scheme": "free",
    "name": "Color Palette #4812 · 보랏빛 회색과 오렌지",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#5A5059"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#92887F"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#B8ADAB"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#D7EEF3"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#D18E5F"
      }
    ],
    "note": "ColorPalettes.net #4812에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · Raimond Klavins · https://colorpalettes.net/color-palette-4812/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4812/",
      "title": "Color Palette #4812 · 보랏빛 회색과 오렌지",
      "method": "source_published_5hex",
      "source": "Raimond Klavins"
    }
  },
  {
    "id": "mix5-006",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4811",
      "따뜻한 원목과 아이보리"
    ],
    "scheme": "free",
    "name": "Color Palette #4811 · 따뜻한 원목과 아이보리",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#624621"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#9F6D2D"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#F8DAB2"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#EEEBE4"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#D2D2D2"
      }
    ],
    "note": "ColorPalettes.net #4811에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · Anita Austvika · https://colorpalettes.net/color-palette-4811/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4811/",
      "title": "Color Palette #4811 · 따뜻한 원목과 아이보리",
      "method": "source_published_5hex",
      "source": "Anita Austvika"
    }
  },
  {
    "id": "mix5-007",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4810",
      "회청색과 붉은 포인트"
    ],
    "scheme": "free",
    "name": "Color Palette #4810 · 회청색과 붉은 포인트",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#2B3034"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#627C8C"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#989398"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#B9C7D2"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E93C35"
      }
    ],
    "note": "ColorPalettes.net #4810에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · 출처 페이지 기재 · https://colorpalettes.net/color-palette-4810/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4810/",
      "title": "Color Palette #4810 · 회청색과 붉은 포인트",
      "method": "source_published_5hex",
      "source": "출처 페이지 기재"
    }
  },
  {
    "id": "mix5-008",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4809",
      "안개 낀 회청색 그라데이션"
    ],
    "scheme": "free",
    "name": "Color Palette #4809 · 안개 낀 회청색 그라데이션",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#738488"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#A6B6BA"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#D0D8DA"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#E1DDD7"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#EFECE7"
      }
    ],
    "note": "ColorPalettes.net #4809에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · Royce Fonseca · https://colorpalettes.net/color-palette-4809/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4809/",
      "title": "Color Palette #4809 · 안개 낀 회청색 그라데이션",
      "method": "source_published_5hex",
      "source": "Royce Fonseca"
    }
  },
  {
    "id": "mix5-009",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4808",
      "먼지 낀 자주색 그림자"
    ],
    "scheme": "free",
    "name": "Color Palette #4808 · 먼지 낀 자주색 그림자",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#353C52"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#554A53"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#726364"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#9A686B"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#BA897A"
      }
    ],
    "note": "ColorPalettes.net #4808에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · Mauricio Arias · https://colorpalettes.net/color-palette-4808/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4808/",
      "title": "Color Palette #4808 · 먼지 낀 자주색 그림자",
      "method": "source_published_5hex",
      "source": "Mauricio Arias"
    }
  },
  {
    "id": "mix5-010",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4807",
      "청록 배경과 황금빛 오렌지"
    ],
    "scheme": "free",
    "name": "Color Palette #4807 · 청록 배경과 황금빛 오렌지",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#D1ECE7"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#FEE16C"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#BD7F01"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#A23D01"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#22352C"
      }
    ],
    "note": "ColorPalettes.net #4807에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · Jassim Shanavas · https://colorpalettes.net/color-palette-4807/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4807/",
      "title": "Color Palette #4807 · 청록 배경과 황금빛 오렌지",
      "method": "source_published_5hex",
      "source": "Jassim Shanavas"
    }
  },
  {
    "id": "mix5-011",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4806",
      "오렌지 철광석의 명암"
    ],
    "scheme": "free",
    "name": "Color Palette #4806 · 오렌지 철광석의 명암",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#E0E5E8"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#DD8607"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#C25006"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#943A02"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#401600"
      }
    ],
    "note": "ColorPalettes.net #4806에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · Alexey Kuleshov · https://colorpalettes.net/color-palette-4806/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4806/",
      "title": "Color Palette #4806 · 오렌지 철광석의 명암",
      "method": "source_published_5hex",
      "source": "Alexey Kuleshov"
    }
  },
  {
    "id": "mix5-012",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4805",
      "틸 그라데이션과 적갈색"
    ],
    "scheme": "free",
    "name": "Color Palette #4805 · 틸 그라데이션과 적갈색",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#102020"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#2D4C4F"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#78B4B7"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#D9E9E9"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#83241E"
      }
    ],
    "note": "ColorPalettes.net #4805에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · Ugur Akdemir · https://colorpalettes.net/color-palette-4805/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4805/",
      "title": "Color Palette #4805 · 틸 그라데이션과 적갈색",
      "method": "source_published_5hex",
      "source": "Ugur Akdemir"
    }
  },
  {
    "id": "mix5-013",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4804",
      "크림색 석벽의 회색 음영"
    ],
    "scheme": "free",
    "name": "Color Palette #4804 · 크림색 석벽의 회색 음영",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#6F5B42"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#B5A892"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#D2D2D1"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#BEBBB4"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#15160A"
      }
    ],
    "note": "ColorPalettes.net #4804에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · Pawel Czerwinski · https://colorpalettes.net/color-palette-4804/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4804/",
      "title": "Color Palette #4804 · 크림색 석벽의 회색 음영",
      "method": "source_published_5hex",
      "source": "Pawel Czerwinski"
    }
  },
  {
    "id": "mix5-014",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4803",
      "밤의 청록과 빛 반사"
    ],
    "scheme": "free",
    "name": "Color Palette #4803 · 밤의 청록과 빛 반사",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#020608"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#1C252B"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#486B85"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#93B4BC"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#CAD2CB"
      }
    ],
    "note": "ColorPalettes.net #4803에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · Julian Rösner · https://colorpalettes.net/color-palette-4803/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4803/",
      "title": "Color Palette #4803 · 밤의 청록과 빛 반사",
      "method": "source_published_5hex",
      "source": "Julian Rösner"
    }
  },
  {
    "id": "mix5-015",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4802",
      "해안의 짙은 청록과 모래"
    ],
    "scheme": "free",
    "name": "Color Palette #4802 · 해안의 짙은 청록과 모래",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#010A13"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#497683"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#8AB0A5"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#F5E9D4"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#82797A"
      }
    ],
    "note": "ColorPalettes.net #4802에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · Rapha Wilde · https://colorpalettes.net/color-palette-4802/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4802/",
      "title": "Color Palette #4802 · 해안의 짙은 청록과 모래",
      "method": "source_published_5hex",
      "source": "Rapha Wilde"
    }
  },
  {
    "id": "mix5-016",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4801",
      "푸른빛 하늘 다섯 단계"
    ],
    "scheme": "free",
    "name": "Color Palette #4801 · 푸른빛 하늘 다섯 단계",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#031725"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#022E5B"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#499BED"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#A1C6F6"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#DAEAFF"
      }
    ],
    "note": "ColorPalettes.net #4801에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · Nattipat Vesvarute · https://colorpalettes.net/color-palette-4801/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4801/",
      "title": "Color Palette #4801 · 푸른빛 하늘 다섯 단계",
      "method": "source_published_5hex",
      "source": "Nattipat Vesvarute"
    }
  },
  {
    "id": "mix5-017",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4800",
      "가을 수확과 버섯 갈색"
    ],
    "scheme": "free",
    "name": "Color Palette #4800 · 가을 수확과 버섯 갈색",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#232E20"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#D2A16E"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#B55E28"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#4F4B40"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#3F2512"
      }
    ],
    "note": "ColorPalettes.net #4800에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · 사이트 편집 배색 · https://colorpalettes.net/color-palette-4800/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4800/",
      "title": "Color Palette #4800 · 가을 수확과 버섯 갈색",
      "method": "source_published_5hex",
      "source": "사이트 편집 배색"
    }
  },
  {
    "id": "mix5-018",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4799",
      "겨울 꽃과 올리브"
    ],
    "scheme": "free",
    "name": "Color Palette #4799 · 겨울 꽃과 올리브",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#77737A"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#4B4048"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#511936"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#A06B27"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#4B5039"
      }
    ],
    "note": "ColorPalettes.net #4799에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · 사이트 편집 배색 · https://colorpalettes.net/color-palette-4799/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4799/",
      "title": "Color Palette #4799 · 겨울 꽃과 올리브",
      "method": "source_published_5hex",
      "source": "사이트 편집 배색"
    }
  },
  {
    "id": "mix5-019",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4798",
      "겨울 열매의 빨강"
    ],
    "scheme": "free",
    "name": "Color Palette #4798 · 겨울 열매의 빨강",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#E8E8E8"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#C1C6C9"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#AC2724"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#583E24"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#3E4524"
      }
    ],
    "note": "ColorPalettes.net #4798에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · 사이트 편집 배색 · https://colorpalettes.net/color-palette-4798/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4798/",
      "title": "Color Palette #4798 · 겨울 열매의 빨강",
      "method": "source_published_5hex",
      "source": "사이트 편집 배색"
    }
  },
  {
    "id": "mix5-020",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4797",
      "파우더 핑크와 벽돌빛"
    ],
    "scheme": "free",
    "name": "Color Palette #4797 · 파우더 핑크와 벽돌빛",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#D1D2D4"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#909483"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#616657"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#C19386"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#B25C40"
      }
    ],
    "note": "ColorPalettes.net #4797에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · 사이트 편집 배색 · https://colorpalettes.net/color-palette-4797/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4797/",
      "title": "Color Palette #4797 · 파우더 핑크와 벽돌빛",
      "method": "source_published_5hex",
      "source": "사이트 편집 배색"
    }
  },
  {
    "id": "mix5-021",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4796",
      "안개 봉우리와 황갈색"
    ],
    "scheme": "free",
    "name": "Color Palette #4796 · 안개 봉우리와 황갈색",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#FAFAFA"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#D0D2CF"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#575C55"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#86612F"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#52311B"
      }
    ],
    "note": "ColorPalettes.net #4796에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · 사이트 편집 배색 · https://colorpalettes.net/color-palette-4796/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4796/",
      "title": "Color Palette #4796 · 안개 봉우리와 황갈색",
      "method": "source_published_5hex",
      "source": "사이트 편집 배색"
    }
  },
  {
    "id": "mix5-022",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4795",
      "차가운 산과 청보라 그림자"
    ],
    "scheme": "free",
    "name": "Color Palette #4795 · 차가운 산과 청보라 그림자",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#F6FBFC"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E0E7F0"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#9BAFBF"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#3F4963"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#342756"
      }
    ],
    "note": "ColorPalettes.net #4795에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · 사이트 편집 배색 · https://colorpalettes.net/color-palette-4795/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4795/",
      "title": "Color Palette #4795 · 차가운 산과 청보라 그림자",
      "method": "source_published_5hex",
      "source": "사이트 편집 배색"
    }
  },
  {
    "id": "mix5-023",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4794",
      "북쪽 바다의 흑청색"
    ],
    "scheme": "free",
    "name": "Color Palette #4794 · 북쪽 바다의 흑청색",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#E3DBD2"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#7F888D"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#324E59"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#011F28"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#000201"
      }
    ],
    "note": "ColorPalettes.net #4794에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · 사이트 편집 배색 · https://colorpalettes.net/color-palette-4794/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4794/",
      "title": "Color Palette #4794 · 북쪽 바다의 흑청색",
      "method": "source_published_5hex",
      "source": "사이트 편집 배색"
    }
  },
  {
    "id": "mix5-024",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4793",
      "눈 속 허스키와 회청색"
    ],
    "scheme": "free",
    "name": "Color Palette #4793 · 눈 속 허스키와 회청색",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#5D6474"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#A7A6B0"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#ECEDE6"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#8CA9BD"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#6498AF"
      }
    ],
    "note": "ColorPalettes.net #4793에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · 사이트 편집 배색 · https://colorpalettes.net/color-palette-4793/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4793/",
      "title": "Color Palette #4793 · 눈 속 허스키와 회청색",
      "method": "source_published_5hex",
      "source": "사이트 편집 배색"
    }
  },
  {
    "id": "mix5-025",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4792",
      "열대 해변과 분홍 모래"
    ],
    "scheme": "free",
    "name": "Color Palette #4792 · 열대 해변과 분홍 모래",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#0B4E65"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#3F7F9E"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E2C9CA"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#D8A996"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#B47C50"
      }
    ],
    "note": "ColorPalettes.net #4792에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · 사이트 편집 배색 · https://colorpalettes.net/color-palette-4792/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4792/",
      "title": "Color Palette #4792 · 열대 해변과 분홍 모래",
      "method": "source_published_5hex",
      "source": "사이트 편집 배색"
    }
  },
  {
    "id": "mix5-026",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4791",
      "심해 해파리의 자홍색"
    ],
    "scheme": "free",
    "name": "Color Palette #4791 · 심해 해파리의 자홍색",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#120223"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#430357"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#6E022F"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#8C0286"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#C40361"
      }
    ],
    "note": "ColorPalettes.net #4791에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · 사이트 편집 배색 · https://colorpalettes.net/color-palette-4791/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4791/",
      "title": "Color Palette #4791 · 심해 해파리의 자홍색",
      "method": "source_published_5hex",
      "source": "사이트 편집 배색"
    }
  },
  {
    "id": "mix5-027",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4790",
      "고양이와 린넨 정물"
    ],
    "scheme": "free",
    "name": "Color Palette #4790 · 고양이와 린넨 정물",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#CDB08E"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#BFB6A6"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#AAAAA4"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#4A4944"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#11100B"
      }
    ],
    "note": "ColorPalettes.net #4790에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · 사이트 편집 배색 · https://colorpalettes.net/color-palette-4790/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4790/",
      "title": "Color Palette #4790 · 고양이와 린넨 정물",
      "method": "source_published_5hex",
      "source": "사이트 편집 배색"
    }
  },
  {
    "id": "mix5-028",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4789",
      "해바라기와 그림자 녹색"
    ],
    "scheme": "free",
    "name": "Color Palette #4789 · 해바라기와 그림자 녹색",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#8A889E"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#EDD600"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#956B00"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#1A4208"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#051107"
      }
    ],
    "note": "ColorPalettes.net #4789에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · 사이트 편집 배색 · https://colorpalettes.net/color-palette-4789/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4789/",
      "title": "Color Palette #4789 · 해바라기와 그림자 녹색",
      "method": "source_published_5hex",
      "source": "사이트 편집 배색"
    }
  },
  {
    "id": "mix5-029",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4788",
      "별빛과 코발트 산맥"
    ],
    "scheme": "free",
    "name": "Color Palette #4788 · 별빛과 코발트 산맥",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#FDFEE8"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#90B1E6"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#4C6794"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#234485"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#000000"
      }
    ],
    "note": "ColorPalettes.net #4788에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · 사이트 편집 배색 · https://colorpalettes.net/color-palette-4788/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4788/",
      "title": "Color Palette #4788 · 별빛과 코발트 산맥",
      "method": "source_published_5hex",
      "source": "사이트 편집 배색"
    }
  },
  {
    "id": "mix5-030",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4787",
      "안개 속 붉은 다리"
    ],
    "scheme": "free",
    "name": "Color Palette #4787 · 안개 속 붉은 다리",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#E8EDF0"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E1E4E3"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#8FA8AE"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#425363"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#A90101"
      }
    ],
    "note": "ColorPalettes.net #4787에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · 사이트 편집 배색 · https://colorpalettes.net/color-palette-4787/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4787/",
      "title": "Color Palette #4787 · 안개 속 붉은 다리",
      "method": "source_published_5hex",
      "source": "사이트 편집 배색"
    }
  },
  {
    "id": "mix5-031",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4786",
      "밤의 부엉이와 슬레이트"
    ],
    "scheme": "free",
    "name": "Color Palette #4786 · 밤의 부엉이와 슬레이트",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#1B2234"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#A49B95"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#64646D"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#414049"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#030303"
      }
    ],
    "note": "ColorPalettes.net #4786에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · 사이트 편집 배색 · https://colorpalettes.net/color-palette-4786/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4786/",
      "title": "Color Palette #4786 · 밤의 부엉이와 슬레이트",
      "method": "source_published_5hex",
      "source": "사이트 편집 배색"
    }
  },
  {
    "id": "mix5-032",
    "tags": [
      "공개 색상 레퍼런스",
      "웹 공개 5색 팔레트",
      "Color Palette #4785",
      "달 표면의 흑백 명도"
    ],
    "scheme": "free",
    "name": "Color Palette #4785 · 달 표면의 흑백 명도",
    "colors": [
      {
        "role": "base",
        "ratio": 20,
        "hex": "#06151E"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#5D6466"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#898A8C"
      },
      {
        "role": "point",
        "ratio": 20,
        "hex": "#CDCBC6"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#F1E9E1"
      }
    ],
    "note": "ColorPalettes.net #4785에 게시된 5색 배색 · 웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님. · 사이트 편집 배색 · https://colorpalettes.net/color-palette-4785/",
    "reference": {
      "description": "웹페이지에 공개된 다섯 HEX 값을 원순서대로 기록. 당사 측색 아님.",
      "url": "https://colorpalettes.net/color-palette-4785/",
      "title": "Color Palette #4785 · 달 표면의 흑백 명도",
      "method": "source_published_5hex",
      "source": "사이트 편집 배색"
    }
  },
  {
    "id": "mix5-033",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "심야 세탁소의 형광등"
    ],
    "scheme": "free",
    "name": "심야 세탁소의 형광등",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#305B68"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#E2EDE7"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#676C6B"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#E9783B"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#672838"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 심야 세탁소의 형광등. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "심야 세탁소의 형광등",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-034",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "마지막 열차의 붉은 좌석"
    ],
    "scheme": "free",
    "name": "마지막 열차의 붉은 좌석",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#5B2538"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#C73E36"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#D99642"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#292D35"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F2E8D8"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 마지막 열차의 붉은 좌석. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "마지막 열차의 붉은 좌석",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-035",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "폭우가 내리는 유리 터널"
    ],
    "scheme": "free",
    "name": "폭우가 내리는 유리 터널",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#15233E"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#60C4CF"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#617B8F"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#676C6B"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#FF54AF"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 폭우가 내리는 유리 터널. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "폭우가 내리는 유리 터널",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-036",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "새벽 호텔 복도의 노란 불빛"
    ],
    "scheme": "free",
    "name": "새벽 호텔 복도의 노란 불빛",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#1A3058"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#9D7B3C"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#755344"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#E0D5C9"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#6F7550"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 새벽 호텔 복도의 노란 불빛. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "새벽 호텔 복도의 노란 불빛",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-037",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "황혼의 옥상에서 춤추는 인물"
    ],
    "scheme": "free",
    "name": "황혼의 옥상에서 춤추는 인물",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#5D437E"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#F88B6D"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E8AF91"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#9B9A99"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#15233E"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 황혼의 옥상에서 춤추는 인물. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "황혼의 옥상에서 춤추는 인물",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-038",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "무대 뒤편의 벨벳 커튼"
    ],
    "scheme": "free",
    "name": "무대 뒤편의 벨벳 커튼",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#672838"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#A83288"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#9D7B3C"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#0D1011"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#EBC0B9"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 무대 뒤편의 벨벳 커튼. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "무대 뒤편의 벨벳 커튼",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-039",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "촛불이 가득한 수도원 복도"
    ],
    "scheme": "free",
    "name": "촛불이 가득한 수도원 복도",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#4E362F"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#D8A24F"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#D9A48B"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#292D35"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F8E7D4"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 촛불이 가득한 수도원 복도. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "촛불이 가득한 수도원 복도",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-040",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "녹색 조명의 지하 주차장"
    ],
    "scheme": "free",
    "name": "녹색 조명의 지하 주차장",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#1B4944"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#509B7E"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#DAE3E5"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#45494C"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#C73E36"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 녹색 조명의 지하 주차장. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "녹색 조명의 지하 주차장",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-041",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "청록 수족관 앞의 붉은 스카프"
    ],
    "scheme": "free",
    "name": "청록 수족관 앞의 붉은 스카프",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#164C54"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#3BA6AC"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#DE8B88"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#1A3058"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#E4F4F4"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 청록 수족관 앞의 붉은 스카프. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "청록 수족관 앞의 붉은 스카프",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-042",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "열대 온실에서의 비밀 대화"
    ],
    "scheme": "free",
    "name": "열대 온실에서의 비밀 대화",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#254B42"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#509B7E"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#6A8B58"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#D99642"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#5B2538"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 열대 온실에서의 비밀 대화. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "열대 온실에서의 비밀 대화",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-043",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "푸른 달빛의 안뜰"
    ],
    "scheme": "free",
    "name": "푸른 달빛의 안뜰",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#111E2D"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#899ACB"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#91989B"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#F2E8D8"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F3D250"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 푸른 달빛의 안뜰. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "푸른 달빛의 안뜰",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-044",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "기차 객실의 늦은 오후"
    ],
    "scheme": "free",
    "name": "기차 객실의 늦은 오후",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#4E362F"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#996F51"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#D99642"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#CC9D9B"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#617B8F"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 기차 객실의 늦은 오후. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "기차 객실의 늦은 오후",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-045",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "자주색 연무가 낀 클럽"
    ],
    "scheme": "free",
    "name": "자주색 연무가 낀 클럽",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#4B3557"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#9E4BFB"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#FF54AF"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#164C54"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#181A1A"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 자주색 연무가 낀 클럽. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "자주색 연무가 낀 클럽",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-046",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "먼지 쌓인 영사실"
    ],
    "scheme": "free",
    "name": "먼지 쌓인 영사실",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#755344"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#D8A24F"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#6F7550"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#292D35"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#E6DCCB"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 먼지 쌓인 영사실. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "먼지 쌓인 영사실",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-047",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "설원 위 빨간 우산"
    ],
    "scheme": "free",
    "name": "설원 위 빨간 우산",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#D7E9EE"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#C73E36"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#111E2D"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#CFD3D3"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#B9B5AB"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 설원 위 빨간 우산. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "설원 위 빨간 우산",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-048",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "사막 결투의 푸른 그림자"
    ],
    "scheme": "free",
    "name": "사막 결투의 푸른 그림자",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#D5B58A"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#BE794D"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#305B68"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#11141D"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F1BC78"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 사막 결투의 푸른 그림자. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "사막 결투의 푸른 그림자",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-049",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "낡은 극장 객석의 금빛"
    ],
    "scheme": "free",
    "name": "낡은 극장 객석의 금빛",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#5B2538"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#D8A24F"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#6E2A4C"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#1A3058"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F8E7D4"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 낡은 극장 객석의 금빛. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "낡은 극장 객석의 금빛",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-050",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "병원 복도의 차가운 조명"
    ],
    "scheme": "free",
    "name": "병원 복도의 차가운 조명",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E4F4F4"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#60C4CF"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#536679"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#676C6B"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#E87572"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 병원 복도의 차가운 조명. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "병원 복도의 차가운 조명",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-051",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "빨간 네온과 청색 비상구"
    ],
    "scheme": "free",
    "name": "빨간 네온과 청색 비상구",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#111E2D"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#24A6F0"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E75432"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#8D939A"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#11141D"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 빨간 네온과 청색 비상구. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "빨간 네온과 청색 비상구",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-052",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "해 질 무렵 무도회"
    ],
    "scheme": "free",
    "name": "해 질 무렵 무도회",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#BF6786"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#CFAB55"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#B2A1C3"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#672838"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F2E8D8"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 해 질 무렵 무도회. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "해 질 무렵 무도회",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-053",
    "tags": [
      "창작 배색 모티프",
      "영화적 조명",
      "청록색 부엌의 밤샘 식사"
    ],
    "scheme": "free",
    "name": "청록색 부엌의 밤샘 식사",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#2D7D82"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#E2EDE7"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#A64832"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#996F51"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#181A1A"
      }
    ],
    "note": "영화적 조명의 시각적 모티프: 청록색 부엌의 밤샘 식사. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "청록색 부엌의 밤샘 식사",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-054",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "비 온 뒤 시장 천막"
    ],
    "scheme": "free",
    "name": "비 온 뒤 시장 천막",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#2456A6"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#E75432"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#F3D250"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#91989B"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#164C54"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 비 온 뒤 시장 천막. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "비 온 뒤 시장 천막",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-055",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "도쿄 골목의 플라스틱 간판"
    ],
    "scheme": "free",
    "name": "도쿄 골목의 플라스틱 간판",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#FF54AF"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#B8DB53"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#1A3058"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#DAE3E5"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#D03481"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 도쿄 골목의 플라스틱 간판. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "도쿄 골목의 플라스틱 간판",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-056",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "새벽 버스정류장의 주황등"
    ],
    "scheme": "free",
    "name": "새벽 버스정류장의 주황등",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#D99642"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#536679"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#292D35"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#CFD3D3"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#E8AF91"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 새벽 버스정류장의 주황등. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "새벽 버스정류장의 주황등",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-057",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "파란 셔터와 낡은 오토바이"
    ],
    "scheme": "free",
    "name": "파란 셔터와 낡은 오토바이",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#1A3058"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#2D6F94"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#A64832"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#ACA7A0"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#C2A14C"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 파란 셔터와 낡은 오토바이. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "파란 셔터와 낡은 오토바이",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-058",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "홍콩 간판 아래 인파"
    ],
    "scheme": "free",
    "name": "홍콩 간판 아래 인파",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#A9303C"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#60C4CF"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#5D437E"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#0D1011"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#D99642"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 홍콩 간판 아래 인파. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "홍콩 간판 아래 인파",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-059",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "푸른 유리 빌딩의 인도"
    ],
    "scheme": "free",
    "name": "푸른 유리 빌딩의 인도",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#617B8F"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#DAE3E5"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#1A3058"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#91989B"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#E87572"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 푸른 유리 빌딩의 인도. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "푸른 유리 빌딩의 인도",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-060",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "리마의 분홍 외벽과 전선"
    ],
    "scheme": "free",
    "name": "리마의 분홍 외벽과 전선",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#CC9D9B"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#E9783B"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#164C54"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#676C6B"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F8E7D4"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 리마의 분홍 외벽과 전선. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "리마의 분홍 외벽과 전선",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-061",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "리스본 노란 전차의 뒷모습"
    ],
    "scheme": "free",
    "name": "리스본 노란 전차의 뒷모습",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#F8D976"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#D99642"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#6F7550"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#292D35"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F9F8F1"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 리스본 노란 전차의 뒷모습. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "리스본 노란 전차의 뒷모습",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-062",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "지하철 계단의 보라색 광고"
    ],
    "scheme": "free",
    "name": "지하철 계단의 보라색 광고",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#6A3D6D"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#FF54AF"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#CFD3D3"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#11141D"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#60C4CF"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 지하철 계단의 보라색 광고. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "지하철 계단의 보라색 광고",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-063",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "석양에 비친 공장 굴뚝"
    ],
    "scheme": "free",
    "name": "석양에 비친 공장 굴뚝",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#9B9A99"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#BE794D"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E9783B"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#292D35"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#536679"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 석양에 비친 공장 굴뚝. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "석양에 비친 공장 굴뚝",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-064",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "여름밤 편의점 앞 플라스틱 의자"
    ],
    "scheme": "free",
    "name": "여름밤 편의점 앞 플라스틱 의자",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#24A6F0"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#C2F035"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#842D37"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#2D7D82"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F2E8D8"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 여름밤 편의점 앞 플라스틱 의자. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "여름밤 편의점 앞 플라스틱 의자",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-065",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "벚꽃 축제의 강변 노점"
    ],
    "scheme": "free",
    "name": "벚꽃 축제의 강변 노점",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#EBC0B9"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#C73E36"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E8AF91"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#A5CEDC"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#292D35"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 벚꽃 축제의 강변 노점. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "벚꽃 축제의 강변 노점",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-066",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "폭설 속 빨간 교통신호"
    ],
    "scheme": "free",
    "name": "폭설 속 빨간 교통신호",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E7EDF1"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#A9303C"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#45494C"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#536679"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#617B8F"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 폭설 속 빨간 교통신호. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "폭설 속 빨간 교통신호",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-067",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "물에 비친 보라색 교량"
    ],
    "scheme": "free",
    "name": "물에 비친 보라색 교량",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#5D437E"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#B2A1C3"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#2D6F94"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#15233E"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#CFD3D3"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 물에 비친 보라색 교량. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "물에 비친 보라색 교량",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-068",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "붉은 벽돌 창고의 그래피티"
    ],
    "scheme": "free",
    "name": "붉은 벽돌 창고의 그래피티",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#8E433C"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#D03481"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#B8DB53"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#617B8F"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F2E8D8"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 붉은 벽돌 창고의 그래피티. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "붉은 벽돌 창고의 그래피티",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-069",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "인도네시아 스쿠터 행렬"
    ],
    "scheme": "free",
    "name": "인도네시아 스쿠터 행렬",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#F59A45"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#60C4CF"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#8F8B6C"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#292D35"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#EFA6C1"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 인도네시아 스쿠터 행렬. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "인도네시아 스쿠터 행렬",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-070",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "마라케시의 시장 차양"
    ],
    "scheme": "free",
    "name": "마라케시의 시장 차양",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#A64832"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#E4B638"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#2D7D82"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#4E362F"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#BF6786"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 마라케시의 시장 차양. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "마라케시의 시장 차양",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-071",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "서울의 푸른 새벽 횡단보도"
    ],
    "scheme": "free",
    "name": "서울의 푸른 새벽 횡단보도",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#111E2D"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#60C4CF"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#8D939A"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#F8E7D4"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#D99642"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 서울의 푸른 새벽 횡단보도. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "서울의 푸른 새벽 횡단보도",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-072",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "뉴욕 계단의 초록 이끼"
    ],
    "scheme": "free",
    "name": "뉴욕 계단의 초록 이끼",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#576B50"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#509B7E"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#8E433C"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#91989B"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F2E8D8"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 뉴욕 계단의 초록 이끼. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "뉴욕 계단의 초록 이끼",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-073",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "멕시코 골목의 다색 벽"
    ],
    "scheme": "free",
    "name": "멕시코 골목의 다색 벽",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E9E95B"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#E87572"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#248EBA"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#509B7E"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#795AA0"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 멕시코 골목의 다색 벽. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "멕시코 골목의 다색 벽",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-074",
    "tags": [
      "창작 배색 모티프",
      "도시 거리 사진",
      "안개 낀 항구와 컨테이너"
    ],
    "scheme": "free",
    "name": "안개 낀 항구와 컨테이너",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#305B68"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#676C6B"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#ADB9C1"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#A64832"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#9D7B3C"
      }
    ],
    "note": "도시 거리 사진의 시각적 모티프: 안개 낀 항구와 컨테이너. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "안개 낀 항구와 컨테이너",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-075",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "우박 내린 자두나무"
    ],
    "scheme": "free",
    "name": "우박 내린 자두나무",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#672838"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#509B7E"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E4F4F4"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#9B9A99"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#D1BDA2"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 우박 내린 자두나무. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "우박 내린 자두나무",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-076",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "화산 분화구의 황빛 유황"
    ],
    "scheme": "free",
    "name": "화산 분화구의 황빛 유황",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E4B638"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#292D35"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#8D939A"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#B46B4E"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#D7E9EE"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 화산 분화구의 황빛 유황. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "화산 분화구의 황빛 유황",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-077",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "북극 여명의 오로라"
    ],
    "scheme": "free",
    "name": "북극 여명의 오로라",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#15233E"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#136C63"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#A4FF61"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#795AA0"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#D0E5F0"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 북극 여명의 오로라. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "북극 여명의 오로라",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-078",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "가을 낙엽 사이 보라 버섯"
    ],
    "scheme": "free",
    "name": "가을 낙엽 사이 보라 버섯",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#755344"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#5D437E"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#BE794D"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#6F7550"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#E0D5C9"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 가을 낙엽 사이 보라 버섯. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "가을 낙엽 사이 보라 버섯",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-079",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "일출 직전 소금 호수"
    ],
    "scheme": "free",
    "name": "일출 직전 소금 호수",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#CC9D9B"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#B2A1C3"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#A5CEDC"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#1A3058"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#CFD3D3"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 일출 직전 소금 호수. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "일출 직전 소금 호수",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-080",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "겨울 갈대밭에 내린 서리"
    ],
    "scheme": "free",
    "name": "겨울 갈대밭에 내린 서리",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#D0AF70"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#E5D3B6"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E4F4F4"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#8F8B6C"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#536679"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 겨울 갈대밭에 내린 서리. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "겨울 갈대밭에 내린 서리",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-081",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "폭풍 전 바다의 초록 파도"
    ],
    "scheme": "free",
    "name": "폭풍 전 바다의 초록 파도",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#164C54"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#509B7E"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#8D939A"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#E4F4F4"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#0D1011"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 폭풍 전 바다의 초록 파도. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "폭풍 전 바다의 초록 파도",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-082",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "진홍빛 단풍과 노란 이끼"
    ],
    "scheme": "free",
    "name": "진홍빛 단풍과 노란 이끼",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#5B2538"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#C73E36"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E9A91D"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#254B42"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#E6DCCB"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 진홍빛 단풍과 노란 이끼. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "진홍빛 단풍과 노란 이끼",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-083",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "열대 산호초의 얕은 바다"
    ],
    "scheme": "free",
    "name": "열대 산호초의 얕은 바다",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#3BA6AC"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#E87572"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#F8D976"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#1A3058"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F9F8F1"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 열대 산호초의 얕은 바다. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "열대 산호초의 얕은 바다",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-084",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "절벽 위 분홍 구름"
    ],
    "scheme": "free",
    "name": "절벽 위 분홍 구름",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#B9B5AB"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#EBC0B9"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#CCB6D9"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#617B8F"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#343A76"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 절벽 위 분홍 구름. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "절벽 위 분홍 구름",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-085",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "사막 협곡의 밤 그림자"
    ],
    "scheme": "free",
    "name": "사막 협곡의 밤 그림자",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#A64832"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#C56B4B"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#4E362F"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#795AA0"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#D5B58A"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 사막 협곡의 밤 그림자. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "사막 협곡의 밤 그림자",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-086",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "태양 아래 에메랄드 빙하"
    ],
    "scheme": "free",
    "name": "태양 아래 에메랄드 빙하",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#60C4CF"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#2D7D82"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E4F4F4"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#111E2D"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#CFD3D3"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 태양 아래 에메랄드 빙하. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "태양 아래 에메랄드 빙하",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-087",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "보름달 아래 붉은 사암"
    ],
    "scheme": "free",
    "name": "보름달 아래 붉은 사암",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#A9303C"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#5B2538"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#A5CEDC"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#292D35"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#D5B58A"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 보름달 아래 붉은 사암. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "보름달 아래 붉은 사암",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-088",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "숲속 폭포에 걸린 무지개"
    ],
    "scheme": "free",
    "name": "숲속 폭포에 걸린 무지개",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#254B42"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#9DCFC2"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#2456A6"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#F1BC78"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#CCB6D9"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 숲속 폭포에 걸린 무지개. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "숲속 폭포에 걸린 무지개",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-089",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "안개 속 연보라 라벤더 밭"
    ],
    "scheme": "free",
    "name": "안개 속 연보라 라벤더 밭",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#B2A1C3"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#A47F96"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#91A888"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#ADB9C1"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#A18E7F"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 안개 속 연보라 라벤더 밭. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "안개 속 연보라 라벤더 밭",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-090",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "봄 들판의 유채와 진흙"
    ],
    "scheme": "free",
    "name": "봄 들판의 유채와 진흙",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E9E95B"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#C2A14C"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#254B42"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#4E362F"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#A5CEDC"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 봄 들판의 유채와 진흙. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "봄 들판의 유채와 진흙",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-091",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "보랏빛 이끼가 덮인 바위"
    ],
    "scheme": "free",
    "name": "보랏빛 이끼가 덮인 바위",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#6A3D6D"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#576B50"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#676C6B"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#CFD3D3"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#91A888"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 보랏빛 이끼가 덮인 바위. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "보랏빛 이끼가 덮인 바위",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-092",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "노을에 젖은 억새밭"
    ],
    "scheme": "free",
    "name": "노을에 젖은 억새밭",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#D0AF70"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#F88B6D"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#A47F96"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#1A3058"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#9B9A99"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 노을에 젖은 억새밭. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "노을에 젖은 억새밭",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-093",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "수면에 비친 주황 갈대"
    ],
    "scheme": "free",
    "name": "수면에 비친 주황 갈대",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#F59A45"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#D99642"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#305B68"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#254B42"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#D1BDA2"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 수면에 비친 주황 갈대. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "수면에 비친 주황 갈대",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-094",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "설산에 비친 핑크 알펜글로우"
    ],
    "scheme": "free",
    "name": "설산에 비친 핑크 알펜글로우",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E7EDF1"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#C1D5E7"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#CC9D9B"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#1A3058"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#B9B5AB"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 설산에 비친 핑크 알펜글로우. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "설산에 비친 핑크 알펜글로우",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-095",
    "tags": [
      "창작 배색 모티프",
      "자연·날씨 사진",
      "청록색 동굴의 빛 기둥"
    ],
    "scheme": "free",
    "name": "청록색 동굴의 빛 기둥",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#164C54"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#2D7D82"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E2EDE7"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#45494C"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F2E8D8"
      }
    ],
    "note": "자연·날씨 사진의 시각적 모티프: 청록색 동굴의 빛 기둥. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "청록색 동굴의 빛 기둥",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-096",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "붉은 작약과 청동 화병"
    ],
    "scheme": "free",
    "name": "붉은 작약과 청동 화병",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#C73E36"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#672838"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#509B7E"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#9D7B3C"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F8E7D4"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 붉은 작약과 청동 화병. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "붉은 작약과 청동 화병",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-097",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "노란 미모사와 연한 분홍벽"
    ],
    "scheme": "free",
    "name": "노란 미모사와 연한 분홍벽",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#F8D976"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#E4B638"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#EBC0B9"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#91A888"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F2E8D8"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 노란 미모사와 연한 분홍벽. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "노란 미모사와 연한 분홍벽",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-098",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "보라 수국과 젖은 잎"
    ],
    "scheme": "free",
    "name": "보라 수국과 젖은 잎",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#795AA0"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#B2A1C3"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#1B4944"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#E2EDE7"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#8D939A"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 보라 수국과 젖은 잎. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "보라 수국과 젖은 잎",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-099",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "초록 잎 사이 검붉은 튤립"
    ],
    "scheme": "free",
    "name": "초록 잎 사이 검붉은 튤립",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#254B42"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#A9303C"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#672838"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#0D1011"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#A5CEDC"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 초록 잎 사이 검붉은 튤립. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "초록 잎 사이 검붉은 튤립",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-100",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "유리병 속 청색 델피늄"
    ],
    "scheme": "free",
    "name": "유리병 속 청색 델피늄",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#2456A6"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#899ACB"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E4F4F4"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#91A888"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#E0D5C9"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 유리병 속 청색 델피늄. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "유리병 속 청색 델피늄",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-101",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "하늘빛 접시 위 흰 매화"
    ],
    "scheme": "free",
    "name": "하늘빛 접시 위 흰 매화",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#C1D5E7"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#F2E8D8"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#755344"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#EBC0B9"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#676C6B"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 하늘빛 접시 위 흰 매화. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "하늘빛 접시 위 흰 매화",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-102",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "선인장 꽃의 형광 분홍"
    ],
    "scheme": "free",
    "name": "선인장 꽃의 형광 분홍",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#8F8B6C"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#FF54AF"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#91A888"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#D5B58A"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#181A1A"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 선인장 꽃의 형광 분홍. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "선인장 꽃의 형광 분홍",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-103",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "오렌지빛 금잔화 정원"
    ],
    "scheme": "free",
    "name": "오렌지빛 금잔화 정원",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E9A91D"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#BE794D"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#6F7550"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#509B7E"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#E5D3B6"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 오렌지빛 금잔화 정원. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "오렌지빛 금잔화 정원",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-104",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "분홍 난초의 그늘진 온실"
    ],
    "scheme": "free",
    "name": "분홍 난초의 그늘진 온실",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#BE82B9"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#EFA6C1"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#1B4944"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#576B50"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#DAE3E5"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 분홍 난초의 그늘진 온실. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "분홍 난초의 그늘진 온실",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-105",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "카키색 잎과 푸른 아이리스"
    ],
    "scheme": "free",
    "name": "카키색 잎과 푸른 아이리스",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#6F7550"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#343A76"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#B2A1C3"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#B9B5AB"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#FFF1D9"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 카키색 잎과 푸른 아이리스. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "카키색 잎과 푸른 아이리스",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-106",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "와인색 달리아 클로즈업"
    ],
    "scheme": "free",
    "name": "와인색 달리아 클로즈업",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#5B2538"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#802D62"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#BF6786"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#576B50"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#CFD3D3"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 와인색 달리아 클로즈업. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "와인색 달리아 클로즈업",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-107",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "노란 은행잎과 검정 줄기"
    ],
    "scheme": "free",
    "name": "노란 은행잎과 검정 줄기",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#F3D250"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#C2A14C"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#181A1A"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#8D939A"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F2E8D8"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 노란 은행잎과 검정 줄기. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "노란 은행잎과 검정 줄기",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-108",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "비 온 뒤 연두색 고사리"
    ],
    "scheme": "free",
    "name": "비 온 뒤 연두색 고사리",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#B8DB53"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#509B7E"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#536679"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#E4F4F4"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#164C54"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 비 온 뒤 연두색 고사리. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "비 온 뒤 연두색 고사리",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-109",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "푸른 튤립 조명 실험"
    ],
    "scheme": "free",
    "name": "푸른 튤립 조명 실험",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#24A6F0"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#B2A1C3"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#676C6B"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#111E2D"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F8E7D4"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 푸른 튤립 조명 실험. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "푸른 튤립 조명 실험",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-110",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "복숭아빛 장미와 석재"
    ],
    "scheme": "free",
    "name": "복숭아빛 장미와 석재",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E8AF91"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#DE8B88"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#B1A29D"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#B9B5AB"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#91A888"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 복숭아빛 장미와 석재. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "복숭아빛 장미와 석재",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-111",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "목화꽃과 갈색 줄기"
    ],
    "scheme": "free",
    "name": "목화꽃과 갈색 줄기",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E5D3B6"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#F8E7D4"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#4E362F"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#A18E7F"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#509B7E"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 목화꽃과 갈색 줄기. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "목화꽃과 갈색 줄기",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-112",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "보랏빛 제비꽃 벽면"
    ],
    "scheme": "free",
    "name": "보랏빛 제비꽃 벽면",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#633F63"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#CCB6D9"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#45494C"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#91A888"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F2EDEA"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 보랏빛 제비꽃 벽면. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "보랏빛 제비꽃 벽면",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-113",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "붉은 양귀비와 초록 야생화"
    ],
    "scheme": "free",
    "name": "붉은 양귀비와 초록 야생화",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E75432"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#C73E36"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#6F7550"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#A5CEDC"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#181A1A"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 붉은 양귀비와 초록 야생화. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "붉은 양귀비와 초록 야생화",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-114",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "은빛 잎의 유칼립투스"
    ],
    "scheme": "free",
    "name": "은빛 잎의 유칼립투스",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#658D7D"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#91A888"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#BDC9C3"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#CFD3D3"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#1A3058"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 은빛 잎의 유칼립투스. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "은빛 잎의 유칼립투스",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-115",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "노란 해바라기와 파란 울타리"
    ],
    "scheme": "free",
    "name": "노란 해바라기와 파란 울타리",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E4B638"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#D8A24F"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#2D6F94"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#1A3058"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#4E362F"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 노란 해바라기와 파란 울타리. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "노란 해바라기와 파란 울타리",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-116",
    "tags": [
      "창작 배색 모티프",
      "꽃·식물 사진",
      "빨간 꽃병과 하얀 카라"
    ],
    "scheme": "free",
    "name": "빨간 꽃병과 하얀 카라",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#A9303C"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#254B42"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#F9F8F1"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#EFA6C1"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#B9B5AB"
      }
    ],
    "note": "꽃·식물 사진의 시각적 모티프: 빨간 꽃병과 하얀 카라. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "빨간 꽃병과 하얀 카라",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-117",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "레몬 타르트와 회색 접시"
    ],
    "scheme": "free",
    "name": "레몬 타르트와 회색 접시",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E9E95B"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#F8D976"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#FFF1D9"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#8D939A"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#4E362F"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 레몬 타르트와 회색 접시. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "레몬 타르트와 회색 접시",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-118",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "석류가 터진 도자기 쟁반"
    ],
    "scheme": "free",
    "name": "석류가 터진 도자기 쟁반",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#A9303C"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#5B2538"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E8AF91"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#6F7550"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#E5D3B6"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 석류가 터진 도자기 쟁반. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "석류가 터진 도자기 쟁반",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-119",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "피스타치오 크림과 분홍 딸기"
    ],
    "scheme": "free",
    "name": "피스타치오 크림과 분홍 딸기",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#C3C995"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#576B50"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#EBC0B9"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#C73E36"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F2E8D8"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 피스타치오 크림과 분홍 딸기. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "피스타치오 크림과 분홍 딸기",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-120",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "남색 테이블 위 노란 배"
    ],
    "scheme": "free",
    "name": "남색 테이블 위 노란 배",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#1A3058"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#343A76"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E4B638"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#D5B58A"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#996F51"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 남색 테이블 위 노란 배. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "남색 테이블 위 노란 배",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-121",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "흰 접시의 보랏빛 무화과"
    ],
    "scheme": "free",
    "name": "흰 접시의 보랏빛 무화과",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#FFF1D9"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#5D437E"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#802D62"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#6F7550"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#D1BDA2"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 흰 접시의 보랏빛 무화과. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "흰 접시의 보랏빛 무화과",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-122",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "얼음컵 속 청록 라임에이드"
    ],
    "scheme": "free",
    "name": "얼음컵 속 청록 라임에이드",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#60C4CF"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#B8DB53"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E4F4F4"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#2D7D82"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F9F8F1"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 얼음컵 속 청록 라임에이드. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "얼음컵 속 청록 라임에이드",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-123",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "초코 케이크와 금색 포크"
    ],
    "scheme": "free",
    "name": "초코 케이크와 금색 포크",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#4E362F"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#755344"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#9D7B3C"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#EBC0B9"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F2E8D8"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 초코 케이크와 금색 포크. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "초코 케이크와 금색 포크",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-124",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "복숭아와 청자 그릇"
    ],
    "scheme": "free",
    "name": "복숭아와 청자 그릇",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#F1BC78"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#E8AF91"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#509B7E"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#164C54"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#E0D5C9"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 복숭아와 청자 그릇. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "복숭아와 청자 그릇",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-125",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "흑맥주잔과 따뜻한 오크 테이블"
    ],
    "scheme": "free",
    "name": "흑맥주잔과 따뜻한 오크 테이블",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#181A1A"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#996F51"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#D8A24F"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#AF754B"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F2E8D8"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 흑맥주잔과 따뜻한 오크 테이블. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "흑맥주잔과 따뜻한 오크 테이블",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-126",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "토마토와 베이지 린넨"
    ],
    "scheme": "free",
    "name": "토마토와 베이지 린넨",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#D94138"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#A64832"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#254B42"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#E0D5C9"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#E6DCCB"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 토마토와 베이지 린넨. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "토마토와 베이지 린넨",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-127",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "녹색 올리브와 흰 타일"
    ],
    "scheme": "free",
    "name": "녹색 올리브와 흰 타일",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#6F7550"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#91A888"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E2EDE7"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#F2EDEA"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#181A1A"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 녹색 올리브와 흰 타일. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "녹색 올리브와 흰 타일",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-128",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "붉은 파프리카와 코발트 천"
    ],
    "scheme": "free",
    "name": "붉은 파프리카와 코발트 천",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E75432"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#2456A6"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E8AF91"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#F8E7D4"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#8F8B6C"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 붉은 파프리카와 코발트 천. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "붉은 파프리카와 코발트 천",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-129",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "붉은 체리와 청회색 배경"
    ],
    "scheme": "free",
    "name": "붉은 체리와 청회색 배경",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#C73E36"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#802D62"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#536679"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#CFD3D3"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#E5D3B6"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 붉은 체리와 청회색 배경. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "붉은 체리와 청회색 배경",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-130",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "자색 양배추 단면"
    ],
    "scheme": "free",
    "name": "자색 양배추 단면",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#633F63"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#795AA0"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#CCB6D9"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#B0D6B9"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#292D35"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 자색 양배추 단면. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "자색 양배추 단면",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-131",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "노란 국수와 검은 그릇"
    ],
    "scheme": "free",
    "name": "노란 국수와 검은 그릇",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#F8D976"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#E4B638"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#181A1A"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#B9B5AB"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#2D7D82"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 노란 국수와 검은 그릇. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "노란 국수와 검은 그릇",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-132",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "오렌지 마카롱과 민트 접시"
    ],
    "scheme": "free",
    "name": "오렌지 마카롱과 민트 접시",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#F59A45"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#E8AF91"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#9DCFC2"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#509B7E"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F2E8D8"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 오렌지 마카롱과 민트 접시. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "오렌지 마카롱과 민트 접시",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-133",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "에스프레소와 붉은 책 표지"
    ],
    "scheme": "free",
    "name": "에스프레소와 붉은 책 표지",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#4E362F"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#5B2538"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E0D5C9"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#CFAB55"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#9B9A99"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 에스프레소와 붉은 책 표지. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "에스프레소와 붉은 책 표지",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-134",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "핑크 무스와 금빛 포장지"
    ],
    "scheme": "free",
    "name": "핑크 무스와 금빛 포장지",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#EFA6C1"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#CC9D9B"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#9D7B3C"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#FFF1D9"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#672838"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 핑크 무스와 금빛 포장지. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "핑크 무스와 금빛 포장지",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-135",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "블루베리와 노란 접시"
    ],
    "scheme": "free",
    "name": "블루베리와 노란 접시",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#343A76"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#6A3D6D"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#F3D250"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#F2E8D8"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#576B50"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 블루베리와 노란 접시. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "블루베리와 노란 접시",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-136",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "오렌지 슬라이스의 투명 유리"
    ],
    "scheme": "free",
    "name": "오렌지 슬라이스의 투명 유리",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E9783B"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#F59A45"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#A5CEDC"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#E4F4F4"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#6F7550"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 오렌지 슬라이스의 투명 유리. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "오렌지 슬라이스의 투명 유리",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-137",
    "tags": [
      "창작 배색 모티프",
      "음식·정물 사진",
      "오래된 와인병과 양초"
    ],
    "scheme": "free",
    "name": "오래된 와인병과 양초",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#672838"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#633F63"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#755344"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#F8E7D4"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#D99642"
      }
    ],
    "note": "음식·정물 사진의 시각적 모티프: 오래된 와인병과 양초. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "오래된 와인병과 양초",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-138",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "민트빛 계단과 빨간 난간"
    ],
    "scheme": "free",
    "name": "민트빛 계단과 빨간 난간",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#9DCFC2"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#509B7E"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#D94138"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#F2E8D8"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#91989B"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 민트빛 계단과 빨간 난간. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "민트빛 계단과 빨간 난간",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-139",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "스테인드글라스가 비친 회랑"
    ],
    "scheme": "free",
    "name": "스테인드글라스가 비친 회랑",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#2456A6"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#E75432"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#C2A14C"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#5D437E"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#292D35"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 스테인드글라스가 비친 회랑. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "스테인드글라스가 비친 회랑",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-140",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "황토색 미술관의 삼각 그늘"
    ],
    "scheme": "free",
    "name": "황토색 미술관의 삼각 그늘",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#B46B4E"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#D5B58A"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#4E362F"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#536679"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#E6DCCB"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 황토색 미술관의 삼각 그늘. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "황토색 미술관의 삼각 그늘",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-141",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "코랄색 호텔 수영장"
    ],
    "scheme": "free",
    "name": "코랄색 호텔 수영장",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E87572"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#3BA6AC"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E8AF91"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#F2E8D8"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#164C54"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 코랄색 호텔 수영장. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "코랄색 호텔 수영장",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-142",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "에메랄드 타일의 오래된 목욕탕"
    ],
    "scheme": "free",
    "name": "에메랄드 타일의 오래된 목욕탕",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#136C63"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#B0D6B9"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#9D7B3C"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#E0D5C9"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#0D1011"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 에메랄드 타일의 오래된 목욕탕. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "에메랄드 타일의 오래된 목욕탕",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-143",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "푸른 네온의 콘크리트 계단"
    ],
    "scheme": "free",
    "name": "푸른 네온의 콘크리트 계단",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#24A6F0"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#617B8F"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#676C6B"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#0D1011"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#E4F4F4"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 푸른 네온의 콘크리트 계단. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "푸른 네온의 콘크리트 계단",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-144",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "주황 커튼과 청록 벨벳 의자"
    ],
    "scheme": "free",
    "name": "주황 커튼과 청록 벨벳 의자",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#F59A45"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#2D7D82"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#164C54"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#EBC0B9"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#E5D3B6"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 주황 커튼과 청록 벨벳 의자. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "주황 커튼과 청록 벨벳 의자",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-145",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "햇빛 든 미색 갤러리"
    ],
    "scheme": "free",
    "name": "햇빛 든 미색 갤러리",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#F2EDEA"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#E5D3B6"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#B9B5AB"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#676C6B"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#755344"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 햇빛 든 미색 갤러리. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "햇빛 든 미색 갤러리",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-146",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "보라 카펫의 아르데코 로비"
    ],
    "scheme": "free",
    "name": "보라 카펫의 아르데코 로비",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#795AA0"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#6A3D6D"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#9D7B3C"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#672838"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#FFF1D9"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 보라 카펫의 아르데코 로비. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "보라 카펫의 아르데코 로비",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-147",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "감색 문과 노란 우편함"
    ],
    "scheme": "free",
    "name": "감색 문과 노란 우편함",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#1A3058"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#2D6F94"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E4B638"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#E6DCCB"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#C56B4B"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 감색 문과 노란 우편함. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "감색 문과 노란 우편함",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-148",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "이끼 낀 녹슨 철문"
    ],
    "scheme": "free",
    "name": "이끼 낀 녹슨 철문",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#576B50"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#A64832"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#BE794D"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#676C6B"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#CFD3D3"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 이끼 낀 녹슨 철문. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "이끼 낀 녹슨 철문",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-149",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "베를린의 분홍색 브루탈리즘 벽"
    ],
    "scheme": "free",
    "name": "베를린의 분홍색 브루탈리즘 벽",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#CC9D9B"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#A47F96"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#91989B"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#292D35"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#A5CEDC"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 베를린의 분홍색 브루탈리즘 벽. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "베를린의 분홍색 브루탈리즘 벽",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-150",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "빨간 벽난로의 미드센추리 거실"
    ],
    "scheme": "free",
    "name": "빨간 벽난로의 미드센추리 거실",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#8E433C"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#C2A14C"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#6F7550"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#F8E7D4"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#996F51"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 빨간 벽난로의 미드센추리 거실. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "빨간 벽난로의 미드센추리 거실",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-151",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "라임 의자가 놓인 흑백 스튜디오"
    ],
    "scheme": "free",
    "name": "라임 의자가 놓인 흑백 스튜디오",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#F9F8F1"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#0D1011"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#B8DB53"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#CFD3D3"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#45494C"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 라임 의자가 놓인 흑백 스튜디오. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "라임 의자가 놓인 흑백 스튜디오",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-152",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "자개가 빛나는 어두운 응접실"
    ],
    "scheme": "free",
    "name": "자개가 빛나는 어두운 응접실",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#4B3557"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#633F63"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#DAE3E5"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#9D7B3C"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#ECD8B2"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 자개가 빛나는 어두운 응접실. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "자개가 빛나는 어두운 응접실",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-153",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "옥색 석재와 하얀 세면대"
    ],
    "scheme": "free",
    "name": "옥색 석재와 하얀 세면대",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#509B7E"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#254B42"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#F2EDEA"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#B9B5AB"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#CFAB55"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 옥색 석재와 하얀 세면대. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "옥색 석재와 하얀 세면대",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-154",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "노란 복도와 하늘색 문"
    ],
    "scheme": "free",
    "name": "노란 복도와 하늘색 문",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#F8D976"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#C08C32"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#A5CEDC"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#F2E8D8"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#536679"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 노란 복도와 하늘색 문. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "노란 복도와 하늘색 문",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-155",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "청동 조각과 붉은 대리석"
    ],
    "scheme": "free",
    "name": "청동 조각과 붉은 대리석",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#9D7B3C"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#5B2538"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#A9303C"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#4E362F"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#FFF1D9"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 청동 조각과 붉은 대리석. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "청동 조각과 붉은 대리석",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-156",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "청록 커튼과 버터색 벽지"
    ],
    "scheme": "free",
    "name": "청록 커튼과 버터색 벽지",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#2D7D82"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#60C4CF"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#F8D976"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#E5D3B6"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#A18E7F"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 청록 커튼과 버터색 벽지. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "청록 커튼과 버터색 벽지",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-157",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "검은 벽의 라벤더 조명"
    ],
    "scheme": "free",
    "name": "검은 벽의 라벤더 조명",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#11141D"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#0D1011"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#CCB6D9"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#9E4BFB"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#CFD3D3"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 검은 벽의 라벤더 조명. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "검은 벽의 라벤더 조명",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-158",
    "tags": [
      "창작 배색 모티프",
      "건축·인테리어 사진",
      "주황색 아치와 파란 타일"
    ],
    "scheme": "free",
    "name": "주황색 아치와 파란 타일",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E9783B"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#C56B4B"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#2456A6"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#C1D5E7"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#D1BDA2"
      }
    ],
    "note": "건축·인테리어 사진의 시각적 모티프: 주황색 아치와 파란 타일. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "주황색 아치와 파란 타일",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-159",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "버건디 코트와 은색 비"
    ],
    "scheme": "free",
    "name": "버건디 코트와 은색 비",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#672838"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#5B2538"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#CFD3D3"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#617B8F"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#292D35"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 버건디 코트와 은색 비. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "버건디 코트와 은색 비",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-160",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "라임 선글라스와 코발트 셔츠"
    ],
    "scheme": "free",
    "name": "라임 선글라스와 코발트 셔츠",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#B8DB53"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#C2F035"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#2456A6"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#F2E8D8"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#0D1011"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 라임 선글라스와 코발트 셔츠. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "라임 선글라스와 코발트 셔츠",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-161",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "초록 벨벳 드레스와 분홍 장미"
    ],
    "scheme": "free",
    "name": "초록 벨벳 드레스와 분홍 장미",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#254B42"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#509B7E"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#EFA6C1"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#EBC0B9"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#CFAB55"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 초록 벨벳 드레스와 분홍 장미. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "초록 벨벳 드레스와 분홍 장미",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-162",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "호박색 유리 귀걸이의 클로즈업"
    ],
    "scheme": "free",
    "name": "호박색 유리 귀걸이의 클로즈업",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#D99642"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#D8A24F"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#D9A48B"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#4E362F"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F2EDEA"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 호박색 유리 귀걸이의 클로즈업. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "호박색 유리 귀걸이의 클로즈업",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-163",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "빨간 입술과 연한 파란 베일"
    ],
    "scheme": "free",
    "name": "빨간 입술과 연한 파란 베일",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#D94138"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#E87572"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#C1D5E7"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#F9F8F1"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#11141D"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 빨간 입술과 연한 파란 베일. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "빨간 입술과 연한 파란 베일",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-164",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "보랏빛 튤 가운의 역광"
    ],
    "scheme": "free",
    "name": "보랏빛 튤 가운의 역광",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#795AA0"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#B2A1C3"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#A47F96"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#F8E7D4"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#292D35"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 보랏빛 튤 가운의 역광. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "보랏빛 튤 가운의 역광",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-165",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "시나몬 가죽 재킷과 청록 벽"
    ],
    "scheme": "free",
    "name": "시나몬 가죽 재킷과 청록 벽",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#BE794D"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#996F51"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#2D7D82"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#E2EDE7"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#1A3058"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 시나몬 가죽 재킷과 청록 벽. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "시나몬 가죽 재킷과 청록 벽",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-166",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "검정 수트와 네온 연두 백"
    ],
    "scheme": "free",
    "name": "검정 수트와 네온 연두 백",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#0D1011"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#45494C"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#A4FF61"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#B8DB53"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#CFD3D3"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 검정 수트와 네온 연두 백. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "검정 수트와 네온 연두 백",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-167",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "한복 비단의 다섯 색 자수"
    ],
    "scheme": "free",
    "name": "한복 비단의 다섯 색 자수",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#A9303C"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#343A76"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E4B638"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#509B7E"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#FFF1D9"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 한복 비단의 다섯 색 자수. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "한복 비단의 다섯 색 자수",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-168",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "진주 목걸이와 회색 새틴"
    ],
    "scheme": "free",
    "name": "진주 목걸이와 회색 새틴",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#CFD3D3"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#F2EDEA"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#ACA7A0"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#9B9A99"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#4E362F"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 진주 목걸이와 회색 새틴. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "진주 목걸이와 회색 새틴",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-169",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "핑크 장갑과 올리브 코트"
    ],
    "scheme": "free",
    "name": "핑크 장갑과 올리브 코트",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#FF54AF"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#BF6786"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#6F7550"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#54583F"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F2E8D8"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 핑크 장갑과 올리브 코트. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "핑크 장갑과 올리브 코트",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-170",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "청동빛 피부와 에메랄드 스카프"
    ],
    "scheme": "free",
    "name": "청동빛 피부와 에메랄드 스카프",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#D9A48B"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#BE794D"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#136C63"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#164C54"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#672838"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 청동빛 피부와 에메랄드 스카프. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "청동빛 피부와 에메랄드 스카프",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-171",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "겨울 모피와 보라색 조명"
    ],
    "scheme": "free",
    "name": "겨울 모피와 보라색 조명",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E0D5C9"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#ACA7A0"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#B2A1C3"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#343A76"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#0D1011"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 겨울 모피와 보라색 조명. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "겨울 모피와 보라색 조명",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-172",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "푸른 모자와 주황 수트"
    ],
    "scheme": "free",
    "name": "푸른 모자와 주황 수트",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#2456A6"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#3980C4"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#F59A45"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#C56B4B"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#FFF1D9"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 푸른 모자와 주황 수트. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "푸른 모자와 주황 수트",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-173",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "보석 장식 왕관의 클로즈업"
    ],
    "scheme": "free",
    "name": "보석 장식 왕관의 클로즈업",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#9D7B3C"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#CFAB55"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#509B7E"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#9A2A43"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#15233E"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 보석 장식 왕관의 클로즈업. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "보석 장식 왕관의 클로즈업",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-174",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "민트 메이크업과 살구빛 천"
    ],
    "scheme": "free",
    "name": "민트 메이크업과 살구빛 천",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#9DCFC2"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#B0D6B9"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#F1BC78"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#E8AF91"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#CFD3D3"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 민트 메이크업과 살구빛 천. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "민트 메이크업과 살구빛 천",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-175",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "붉은 격자무늬와 주황 벽"
    ],
    "scheme": "free",
    "name": "붉은 격자무늬와 주황 벽",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#A9303C"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#8E433C"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E9783B"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#0D1011"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#E5D3B6"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 붉은 격자무늬와 주황 벽. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "붉은 격자무늬와 주황 벽",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-176",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "녹색 체크 원피스와 라벤더 벽"
    ],
    "scheme": "free",
    "name": "녹색 체크 원피스와 라벤더 벽",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#509B7E"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#6F7550"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#B2A1C3"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#CCB6D9"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#D1BDA2"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 녹색 체크 원피스와 라벤더 벽. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "녹색 체크 원피스와 라벤더 벽",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-177",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "블루 스팽글 드레스와 검정 장막"
    ],
    "scheme": "free",
    "name": "블루 스팽글 드레스와 검정 장막",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#24A6F0"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#2D6F94"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#11141D"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#CFD3D3"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#D03481"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 블루 스팽글 드레스와 검정 장막. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "블루 스팽글 드레스와 검정 장막",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-178",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "황금빛 머리카락과 남색 배경"
    ],
    "scheme": "free",
    "name": "황금빛 머리카락과 남색 배경",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#D8A24F"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#D0AF70"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#343A76"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#1A3058"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F2E8D8"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 황금빛 머리카락과 남색 배경. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "황금빛 머리카락과 남색 배경",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-179",
    "tags": [
      "창작 배색 모티프",
      "패션·인물 사진",
      "회색 트렌치와 형광 분홍 우산"
    ],
    "scheme": "free",
    "name": "회색 트렌치와 형광 분홍 우산",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#8D939A"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#536679"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#FF54AF"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#D03481"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F9F8F1"
      }
    ],
    "note": "패션·인물 사진의 시각적 모티프: 회색 트렌치와 형광 분홍 우산. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "회색 트렌치와 형광 분홍 우산",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-180",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "리소 인쇄의 남색과 형광 주황"
    ],
    "scheme": "free",
    "name": "리소 인쇄의 남색과 형광 주황",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#343A76"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#2456A6"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#FF7433"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#E6DCCB"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#292D35"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: 리소 인쇄의 남색과 형광 주황. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "리소 인쇄의 남색과 형광 주황",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-181",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "초기 웹사이트의 자주색 픽셀"
    ],
    "scheme": "free",
    "name": "초기 웹사이트의 자주색 픽셀",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#5D437E"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#9E4BFB"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#C2F035"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#60C4CF"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#0D1011"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: 초기 웹사이트의 자주색 픽셀. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "초기 웹사이트의 자주색 픽셀",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-182",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "멤피스 조형물의 파스텔 조각"
    ],
    "scheme": "free",
    "name": "멤피스 조형물의 파스텔 조각",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#EFA6C1"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#3BA6AC"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#F3D250"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#B2A1C3"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#181A1A"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: 멤피스 조형물의 파스텔 조각. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "멤피스 조형물의 파스텔 조각",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-183",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "그런지 진의 손글씨 콜라주"
    ],
    "scheme": "free",
    "name": "그런지 진의 손글씨 콜라주",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#292D35"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#9B9A99"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#A64832"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#8F8B6C"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F2E8D8"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: 그런지 진의 손글씨 콜라주. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "그런지 진의 손글씨 콜라주",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-184",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "사이키델릭 꽃의 굴곡 활자"
    ],
    "scheme": "free",
    "name": "사이키델릭 꽃의 굴곡 활자",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E75432"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#D03481"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#795AA0"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#C2A14C"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#509B7E"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: 사이키델릭 꽃의 굴곡 활자. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "사이키델릭 꽃의 굴곡 활자",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-185",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "CRT 화면의 녹색 잔상"
    ],
    "scheme": "free",
    "name": "CRT 화면의 녹색 잔상",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#0D1011"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#A4FF61"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#1B4944"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#536679"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#8D939A"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: CRT 화면의 녹색 잔상. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "CRT 화면의 녹색 잔상",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-186",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "홀로그램 은박지의 보랏빛 간섭"
    ],
    "scheme": "free",
    "name": "홀로그램 은박지의 보랏빛 간섭",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#CFD3D3"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#B2A1C3"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#60C4CF"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#D03481"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#11141D"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: 홀로그램 은박지의 보랏빛 간섭. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "홀로그램 은박지의 보랏빛 간섭",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-187",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "스위스 타입 포스터의 원색 점"
    ],
    "scheme": "free",
    "name": "스위스 타입 포스터의 원색 점",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#F2EDEA"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#292D35"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#2456A6"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#D94138"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#E4B638"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: 스위스 타입 포스터의 원색 점. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "스위스 타입 포스터의 원색 점",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-188",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "실크스크린 오버프린트의 겹침"
    ],
    "scheme": "free",
    "name": "실크스크린 오버프린트의 겹침",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#A83288"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#2D7D82"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#5D437E"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#F2E8D8"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#0D1011"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: 실크스크린 오버프린트의 겹침. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "실크스크린 오버프린트의 겹침",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-189",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "스텐실 문자와 스프레이 텍스처"
    ],
    "scheme": "free",
    "name": "스텐실 문자와 스프레이 텍스처",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#181A1A"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#91989B"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#E87572"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#C2F035"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#DAE3E5"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: 스텐실 문자와 스프레이 텍스처. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "스텐실 문자와 스프레이 텍스처",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-190",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "디지털 모션의 분홍 잔상"
    ],
    "scheme": "free",
    "name": "디지털 모션의 분홍 잔상",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#FF54AF"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#24A6F0"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#795AA0"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#15233E"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F9F8F1"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: 디지털 모션의 분홍 잔상. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "디지털 모션의 분홍 잔상",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-191",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "앤티크 지도 도형의 다색 잉크"
    ],
    "scheme": "free",
    "name": "앤티크 지도 도형의 다색 잉크",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E6DCCB"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#6F7550"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#5B2538"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#9D7B3C"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#1A3058"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: 앤티크 지도 도형의 다색 잉크. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "앤티크 지도 도형의 다색 잉크",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-192",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "지오메트릭 플래그의 강한 분할"
    ],
    "scheme": "free",
    "name": "지오메트릭 플래그의 강한 분할",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#2456A6"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#D94138"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#F3D250"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#0D1011"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F9F8F1"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: 지오메트릭 플래그의 강한 분할. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "지오메트릭 플래그의 강한 분할",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-193",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "레이브 전단의 산성 초록"
    ],
    "scheme": "free",
    "name": "레이브 전단의 산성 초록",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#C2F035"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#FF7433"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#9E4BFB"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#181A1A"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#60C4CF"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: 레이브 전단의 산성 초록. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "레이브 전단의 산성 초록",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-194",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "브랜드 가이드의 부드러운 젤리톤"
    ],
    "scheme": "free",
    "name": "브랜드 가이드의 부드러운 젤리톤",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#EBC0B9"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#B2A1C3"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#9DCFC2"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#F8D976"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#A5CEDC"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: 브랜드 가이드의 부드러운 젤리톤. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "브랜드 가이드의 부드러운 젤리톤",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-195",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "3D 유리체의 푸른 굴절"
    ],
    "scheme": "free",
    "name": "3D 유리체의 푸른 굴절",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#DAE3E5"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#60C4CF"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#2456A6"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#343A76"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#CCB6D9"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: 3D 유리체의 푸른 굴절. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "3D 유리체의 푸른 굴절",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-196",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "타이포그래피 위 얹힌 금속 질감"
    ],
    "scheme": "free",
    "name": "타이포그래피 위 얹힌 금속 질감",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#CFD3D3"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#536679"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#BE794D"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#0D1011"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#E5D3B6"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: 타이포그래피 위 얹힌 금속 질감. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "타이포그래피 위 얹힌 금속 질감",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-197",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "열전사 프린트의 색차 어긋남"
    ],
    "scheme": "free",
    "name": "열전사 프린트의 색차 어긋남",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#D03481"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#60C4CF"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#F3D250"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#292D35"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F2E8D8"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: 열전사 프린트의 색차 어긋남. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "열전사 프린트의 색차 어긋남",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-198",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "거친 복사물의 붉은 스탬프"
    ],
    "scheme": "free",
    "name": "거친 복사물의 붉은 스탬프",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#E6DCCB"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#676C6B"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#A9303C"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#0D1011"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#996F51"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: 거친 복사물의 붉은 스탬프. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "거친 복사물의 붉은 스탬프",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-199",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "Y2K 플라스틱 버튼과 크롬"
    ],
    "scheme": "free",
    "name": "Y2K 플라스틱 버튼과 크롬",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#CFD3D3"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#EFA6C1"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#899ACB"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#60C4CF"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#1A3058"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: Y2K 플라스틱 버튼과 크롬. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "Y2K 플라스틱 버튼과 크롬",
      "method": "original_concept_curation",
      "source": ""
    }
  },
  {
    "id": "mix5-200",
    "tags": [
      "창작 배색 모티프",
      "그래픽·실험 이미지",
      "현대 데이터아트의 야광 격자"
    ],
    "scheme": "free",
    "name": "현대 데이터아트의 야광 격자",
    "colors": [
      {
        "role": "base",
        "ratio": 35,
        "hex": "#11141D"
      },
      {
        "role": "sub",
        "ratio": 25,
        "hex": "#24A6F0"
      },
      {
        "role": "sub",
        "ratio": 20,
        "hex": "#FF54AF"
      },
      {
        "role": "point",
        "ratio": 12,
        "hex": "#B8DB53"
      },
      {
        "role": "sub",
        "ratio": 8,
        "hex": "#F9F8F1"
      }
    ],
    "note": "그래픽·실험 이미지의 시각적 모티프: 현대 데이터아트의 야광 격자. 구체적 원본 사진·영화 스틸을 측색한 것은 아님. · 이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
    "reference": {
      "description": "이미지를 직접 측색하지 않은 독립적인 5색 창작 배색. 참조 작품의 공식색이 아님.",
      "url": "",
      "title": "현대 데이터아트의 야광 격자",
      "method": "original_concept_curation",
      "source": ""
    }
  }
];