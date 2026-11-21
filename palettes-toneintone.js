// 톤인톤 120개: 동일 HSL 명도·채도, 다양한 색상 간격. 3색 60개 / 4색 60개.
const TONEINTONE_PALETTES = [
  {
    "id": "tint-more-001",
    "name": "코랄 페일 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#EAD6D1",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E5EAD1",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#EAD1E5",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","페일","톤인톤","레드","그린"]
  },
  {
    "id": "tint-more-002",
    "name": "코랄 페일 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#EAD6D1",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EAE3D1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D1EAE3",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D1E5EA",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","페일","톤인톤","레드","오렌지"]
  },
  {
    "id": "tint-more-003",
    "name": "딸기우유 바탕의 연녹색",
    "searchAliases": ["코랄 파스텔 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E4ADA0",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#D6E4A0",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E4A0D6",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","파스텔","톤인톤","레드","그린"]
  },
  {
    "id": "tint-more-004",
    "name": "딸기우유 위에 민트 한 점",
    "searchAliases": ["코랄 파스텔 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E4ADA0",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E4D0A0",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A0E4D0",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A0D6E4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","파스텔","톤인톤","레드","오렌지"]
  },
  {
    "id": "tint-more-005",
    "name": "코랄 소프트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#C19286",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#B5C186",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#C186B5",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","소프트","톤인톤","레드","그린"]
  },
  {
    "id": "tint-more-006",
    "name": "코랄 소프트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#C19286",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#C1AF86",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#86C1AF",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#86B5C1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","소프트","톤인톤","레드","오렌지"]
  },
  {
    "id": "tint-more-007",
    "name": "팥색과 올리브",
    "searchAliases": ["코랄 뮤트 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#8A6960",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#828A60",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#8A6082",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","뮤트","톤인톤","레드","그린"]
  },
  {
    "id": "tint-more-008",
    "name": "팥색 위에 유칼립투스 한 점",
    "searchAliases": ["코랄 뮤트 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#8A6960",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#8A7E60",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#608A7E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#60828A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","뮤트","톤인톤","레드","오렌지"]
  },
  {
    "id": "tint-more-009",
    "name": "고동색 위에 겹친 솔잎색",
    "searchAliases": ["코랄 딥 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#673528",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#5A6728",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#67285A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","딥","톤인톤","레드","그린"]
  },
  {
    "id": "tint-more-010",
    "name": "고동색 위에 솔잎색 한 점",
    "searchAliases": ["코랄 딥 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#673528",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#675428",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#286754",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#285A67",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["코랄","딥","톤인톤","레드","오렌지"]
  },
  {
    "id": "tint-more-011",
    "name": "살구 페일 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#EADED1",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#DEEAD1",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#EAD1DE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["살구","페일","톤인톤","오렌지","그린"]
  },
  {
    "id": "tint-more-012",
    "name": "살구 페일 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#EADED1",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EAEAD1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D1EAEA",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D1DEEA",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["살구","페일","톤인톤","오렌지","옐로우"]
  },
  {
    "id": "tint-more-013",
    "name": "살구 파스텔 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E4C2A0",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#C2E4A0",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E4A0C2",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["살구","파스텔","톤인톤","오렌지","그린"]
  },
  {
    "id": "tint-more-014",
    "name": "살구 파스텔 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E4C2A0",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E4E4A0",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A0E4E4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A0C2E4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["살구","파스텔","톤인톤","오렌지","옐로우"]
  },
  {
    "id": "tint-more-015",
    "name": "살구 소프트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#C1A386",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#A3C186",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#C186A3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["살구","소프트","톤인톤","오렌지","그린"]
  },
  {
    "id": "tint-more-016",
    "name": "살구 소프트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#C1A386",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#C1C186",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#86C1C1",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#86A3C1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["살구","소프트","톤인톤","오렌지","옐로우"]
  },
  {
    "id": "tint-more-017",
    "name": "살구 뮤트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#8A7560",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#758A60",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#8A6075",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["살구","뮤트","톤인톤","오렌지","그린"]
  },
  {
    "id": "tint-more-018",
    "name": "살구 뮤트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#8A7560",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#8A8A60",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#608A8A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#60758A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["살구","뮤트","톤인톤","오렌지","옐로우"]
  },
  {
    "id": "tint-more-019",
    "name": "살구 딥 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#674728",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#476728",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#672847",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["살구","딥","톤인톤","오렌지","그린"]
  },
  {
    "id": "tint-more-020",
    "name": "살구 딥 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#674728",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#676728",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#286767",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#284767",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["살구","딥","톤인톤","오렌지","옐로우"]
  },
  {
    "id": "tint-more-021",
    "name": "골드 페일 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#EAE5D1",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#D6EAD1",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#EAD1D6",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["골드","페일","톤인톤","옐로우","그린"]
  },
  {
    "id": "tint-more-022",
    "name": "골드 페일 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#EAE5D1",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E3EAD1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D1E3EA",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D1D6EA",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["골드","페일","톤인톤","옐로우","그린"]
  },
  {
    "id": "tint-more-023",
    "name": "골드 파스텔 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E4D6A0",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#ADE4A0",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E4A0AD",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["골드","파스텔","톤인톤","옐로우","그린"]
  },
  {
    "id": "tint-more-024",
    "name": "골드 파스텔 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E4D6A0",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#D0E4A0",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A0D0E4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A0ADE4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["골드","파스텔","톤인톤","옐로우","그린"]
  },
  {
    "id": "tint-more-025",
    "name": "골드 소프트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#C1B586",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#92C186",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#C18692",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["골드","소프트","톤인톤","옐로우","그린"]
  },
  {
    "id": "tint-more-026",
    "name": "골드 소프트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#C1B586",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#AFC186",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#86AFC1",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#8692C1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["골드","소프트","톤인톤","옐로우","그린"]
  },
  {
    "id": "tint-more-027",
    "name": "골드 뮤트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#8A8260",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#698A60",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#8A6069",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["골드","뮤트","톤인톤","옐로우","그린"]
  },
  {
    "id": "tint-more-028",
    "name": "골드 뮤트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#8A8260",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#7E8A60",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#607E8A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#60698A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["골드","뮤트","톤인톤","옐로우","그린"]
  },
  {
    "id": "tint-more-029",
    "name": "골드 딥 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#675A28",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#356728",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#672835",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["골드","딥","톤인톤","옐로우","그린"]
  },
  {
    "id": "tint-more-030",
    "name": "골드 딥 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#675A28",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#546728",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#285467",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#283567",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["골드","딥","톤인톤","옐로우","그린"]
  },
  {
    "id": "tint-more-031",
    "name": "라임 페일 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E0EAD1",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#D1EADC",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#EADCD1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","페일","톤인톤","그린"]
  },
  {
    "id": "tint-more-032",
    "name": "라임 페일 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E0EAD1",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#D3EAD1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D1D3EA",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DCD1EA",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","페일","톤인톤","그린"]
  },
  {
    "id": "tint-more-033",
    "name": "라임 파스텔 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#C8E4A0",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#A0E4BC",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E4BCA0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","파스텔","톤인톤","그린"]
  },
  {
    "id": "tint-more-034",
    "name": "라임 파스텔 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#C8E4A0",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#A5E4A0",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A0A5E4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#BCA0E4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","파스텔","톤인톤","그린"]
  },
  {
    "id": "tint-more-035",
    "name": "라임 소프트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A8C186",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#86C19E",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#C19E86",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","소프트","톤인톤","그린"]
  },
  {
    "id": "tint-more-036",
    "name": "라임 소프트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A8C186",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#8BC186",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#868BC1",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9E86C1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","소프트","톤인톤","그린"]
  },
  {
    "id": "tint-more-037",
    "name": "라임 뮤트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#798A60",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#608A72",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#8A7260",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","뮤트","톤인톤","그린"]
  },
  {
    "id": "tint-more-038",
    "name": "라임 뮤트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#798A60",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#648A60",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#60648A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#72608A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","뮤트","톤인톤","그린"]
  },
  {
    "id": "tint-more-039",
    "name": "라임 딥 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#4D6728",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#286742",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#674228",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","딥","톤인톤","그린"]
  },
  {
    "id": "tint-more-040",
    "name": "라임 딥 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#4D6728",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#2D6728",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#282D67",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#422867",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라임","딥","톤인톤","그린"]
  },
  {
    "id": "tint-more-041",
    "name": "세이지 페일 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#D1EAD3",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#D1E8EA",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E8EAD1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["세이지","페일","톤인톤","그린","시안"]
  },
  {
    "id": "tint-more-042",
    "name": "세이지 페일 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#D1EAD3",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#D1EAE0",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E0D1EA",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EAD1E8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["세이지","페일","톤인톤","그린"]
  },
  {
    "id": "tint-more-043",
    "name": "세이지 파스텔 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A0E4A5",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#A0DEE4",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#DEE4A0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["세이지","파스텔","톤인톤","그린","시안"]
  },
  {
    "id": "tint-more-044",
    "name": "세이지 파스텔 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A0E4A5",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#A0E4C8",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C8A0E4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E4A0DE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["세이지","파스텔","톤인톤","그린"]
  },
  {
    "id": "tint-more-045",
    "name": "세이지 소프트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#86C18B",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#86BCC1",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#BCC186",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["세이지","소프트","톤인톤","그린","시안"]
  },
  {
    "id": "tint-more-046",
    "name": "세이지 소프트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#86C18B",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#86C1A8",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A886C1",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#C186BC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["세이지","소프트","톤인톤","그린"]
  },
  {
    "id": "tint-more-047",
    "name": "세이지 뮤트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#608A64",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#60878A",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#878A60",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["세이지","뮤트","톤인톤","그린","시안"]
  },
  {
    "id": "tint-more-048",
    "name": "세이지 뮤트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#608A64",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#608A79",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#79608A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#8A6087",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["세이지","뮤트","톤인톤","그린"]
  },
  {
    "id": "tint-more-049",
    "name": "세이지 딥 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#28672D",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#286267",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#626728",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["세이지","딥","톤인톤","그린","시안"]
  },
  {
    "id": "tint-more-050",
    "name": "세이지 딥 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#28672D",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#28674D",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#4D2867",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#672862",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["세이지","딥","톤인톤","그린"]
  },
  {
    "id": "tint-more-051",
    "name": "민트 페일 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#D1EAE2",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#D1DAEA",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#DAEAD1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","페일","톤인톤","시안","블루"]
  },
  {
    "id": "tint-more-052",
    "name": "민트 페일 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#D1EAE2",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#D1E6EA",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#EAD1E6",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EAD1DA",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","페일","톤인톤","시안"]
  },
  {
    "id": "tint-more-053",
    "name": "민트 파스텔 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A0E4CD",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#A0B6E4",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#B6E4A0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","파스텔","톤인톤","그린","블루"]
  },
  {
    "id": "tint-more-054",
    "name": "민트 파스텔 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A0E4CD",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#A0D9E4",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E4A0D9",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E4A0B6",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","파스텔","톤인톤","그린","시안"]
  },
  {
    "id": "tint-more-055",
    "name": "민트 소프트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#86C1AD",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#8699C1",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#99C186",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","소프트","톤인톤","그린","블루"]
  },
  {
    "id": "tint-more-056",
    "name": "민트 소프트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#86C1AD",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#86B7C1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C186B7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#C18699",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","소프트","톤인톤","그린","시안"]
  },
  {
    "id": "tint-more-057",
    "name": "민트 뮤트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#608A7C",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#606E8A",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#6E8A60",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","뮤트","톤인톤","시안","블루"]
  },
  {
    "id": "tint-more-058",
    "name": "민트 뮤트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#608A7C",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#60838A",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#8A6083",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#8A606E",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","뮤트","톤인톤","시안"]
  },
  {
    "id": "tint-more-059",
    "name": "민트 딥 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#286752",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#283D67",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#3D6728",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","딥","톤인톤","시안","블루"]
  },
  {
    "id": "tint-more-060",
    "name": "민트 딥 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#286752",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#285C67",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#67285C",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#67283D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["민트","딥","톤인톤","시안"]
  },
  {
    "id": "tint-more-061",
    "name": "틸 페일 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#D1E8EA",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#D3D1EA",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D1EAD3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","페일","톤인톤","시안","블루"]
  },
  {
    "id": "tint-more-062",
    "name": "틸 페일 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#D1E8EA",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#D1DCEA",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#EAD1DC",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EAD3D1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","페일","톤인톤","시안","블루"]
  },
  {
    "id": "tint-more-063",
    "name": "민트와 연청보라 사이",
    "searchAliases": ["틸 파스텔 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A0DEE4",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#A5A0E4",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#A0E4A5",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","파스텔","톤인톤","시안","블루"]
  },
  {
    "id": "tint-more-064",
    "name": "민트와 하늘색, 딸기우유",
    "searchAliases": ["틸 파스텔 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A0DEE4",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#A0BCE4",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E4A0BC",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E4A5A0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","파스텔","톤인톤","시안","블루"]
  },
  {
    "id": "tint-more-065",
    "name": "틸 소프트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#86BCC1",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#8B86C1",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#86C18B",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","소프트","톤인톤","시안","블루"]
  },
  {
    "id": "tint-more-066",
    "name": "틸 소프트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#86BCC1",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#869EC1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C1869E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#C18B86",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","소프트","톤인톤","시안","블루"]
  },
  {
    "id": "tint-more-067",
    "name": "슬레이트 곁의 데님",
    "searchAliases": ["틸 뮤트 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#60878A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#64608A",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#608A64",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","뮤트","톤인톤","시안","블루"]
  },
  {
    "id": "tint-more-068",
    "name": "슬레이트 위에 팥색 한 점",
    "searchAliases": ["틸 뮤트 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#60878A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#60728A",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#8A6072",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#8A6460",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","뮤트","톤인톤","시안","블루"]
  },
  {
    "id": "tint-more-069",
    "name": "솔잎색과 남색",
    "searchAliases": ["틸 딥 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#286267",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#2D2867",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#28672D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","딥","톤인톤","시안","블루"]
  },
  {
    "id": "tint-more-070",
    "name": "솔잎색 바탕의 버건디",
    "searchAliases": ["틸 딥 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#286267",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#284267",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#672842",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#672D28",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["틸","딥","톤인톤","시안","블루"]
  },
  {
    "id": "tint-more-071",
    "name": "스카이 페일 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#D1DFEA",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#DDD1EA",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D1EADD",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["스카이","페일","톤인톤","블루","퍼플"]
  },
  {
    "id": "tint-more-072",
    "name": "스카이 페일 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#D1DFEA",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#D1D2EA",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#EAD1D2",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EADDD1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["스카이","페일","톤인톤","블루"]
  },
  {
    "id": "tint-more-073",
    "name": "스카이 파스텔 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A0C4E4",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#C0A0E4",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#A0E4C0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["스카이","파스텔","톤인톤","블루","퍼플"]
  },
  {
    "id": "tint-more-074",
    "name": "스카이 파스텔 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A0C4E4",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#A0A2E4",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E4A0A2",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E4C0A0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["스카이","파스텔","톤인톤","블루"]
  },
  {
    "id": "tint-more-075",
    "name": "스카이 소프트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#86A5C1",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#A186C1",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#86C1A1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["스카이","소프트","톤인톤","블루","퍼플"]
  },
  {
    "id": "tint-more-076",
    "name": "스카이 소프트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#86A5C1",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#8688C1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C18688",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#C1A186",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["스카이","소프트","톤인톤","블루"]
  },
  {
    "id": "tint-more-077",
    "name": "스카이 뮤트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#60778A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#74608A",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#608A74",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["스카이","뮤트","톤인톤","블루","퍼플"]
  },
  {
    "id": "tint-more-078",
    "name": "스카이 뮤트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#60778A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#60628A",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#8A6062",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#8A7460",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["스카이","뮤트","톤인톤","블루"]
  },
  {
    "id": "tint-more-079",
    "name": "스카이 딥 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#284967",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#452867",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#286745",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["스카이","딥","톤인톤","블루","퍼플"]
  },
  {
    "id": "tint-more-080",
    "name": "스카이 딥 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#284967",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#282A67",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#67282A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#674528",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["스카이","딥","톤인톤","블루"]
  },
  {
    "id": "tint-more-081",
    "name": "라일락에서 빙하색까지",
    "searchAliases": ["블루 페일 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#D1D2EA",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EAD1EA",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D1EAEA",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","페일","톤인톤","핑크"]
  },
  {
    "id": "tint-more-082",
    "name": "라일락의 아이보리 테두리",
    "searchAliases": ["블루 페일 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#D1D2EA",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#DDD1EA",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#EADDD1",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EAEAD1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","페일","톤인톤","퍼플"]
  },
  {
    "id": "tint-more-083",
    "name": "연청보라의 민트 테두리",
    "searchAliases": ["블루 파스텔 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A0A2E4",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E2A0E4",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#A0E4E2",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","파스텔","톤인톤","퍼플"]
  },
  {
    "id": "tint-more-084",
    "name": "연청보라와 살구, 버터",
    "searchAliases": ["블루 파스텔 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#A0A2E4",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#C0A0E4",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E4C0A0",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E4E2A0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","파스텔","톤인톤","퍼플"]
  },
  {
    "id": "tint-more-085",
    "name": "블루 소프트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#8688C1",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#BF86C1",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#86C1BF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","소프트","톤인톤","퍼플"]
  },
  {
    "id": "tint-more-086",
    "name": "블루 소프트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#8688C1",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#A186C1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C1A186",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#C1BF86",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","소프트","톤인톤","퍼플"]
  },
  {
    "id": "tint-more-087",
    "name": "데님 위에 겹친 유칼립투스",
    "searchAliases": ["블루 뮤트 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#60628A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#89608A",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#608A89",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","뮤트","톤인톤","퍼플"]
  },
  {
    "id": "tint-more-088",
    "name": "데님과 올리브 사이",
    "searchAliases": ["블루 뮤트 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#60628A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#74608A",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#8A7460",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#8A8960",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","뮤트","톤인톤","퍼플"]
  },
  {
    "id": "tint-more-089",
    "name": "남색 곁의 자두",
    "searchAliases": ["블루 딥 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#282A67",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#652867",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#286765",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","딥","톤인톤","퍼플"]
  },
  {
    "id": "tint-more-090",
    "name": "남색의 솔잎색 테두리",
    "searchAliases": ["블루 딥 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#282A67",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#452867",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#674528",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#676528",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","딥","톤인톤","퍼플"]
  },
  {
    "id": "tint-more-091",
    "name": "라벤더 페일 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#DCD1EA",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EAD1E0",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D1E0EA",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라벤더","페일","톤인톤","퍼플","핑크"]
  },
  {
    "id": "tint-more-092",
    "name": "라벤더 페일 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#DCD1EA",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E8D1EA",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#EAE8D1",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E0EAD1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라벤더","페일","톤인톤","퍼플"]
  },
  {
    "id": "tint-more-093",
    "name": "라벤더 파스텔 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#BCA0E4",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E4A0C8",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#A0C8E4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라벤더","파스텔","톤인톤","퍼플","핑크"]
  },
  {
    "id": "tint-more-094",
    "name": "라벤더 파스텔 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#BCA0E4",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#DEA0E4",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E4DEA0",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#C8E4A0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라벤더","파스텔","톤인톤","퍼플"]
  },
  {
    "id": "tint-more-095",
    "name": "라벤더 소프트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#9E86C1",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#C186A8",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#86A8C1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라벤더","소프트","톤인톤","퍼플","핑크"]
  },
  {
    "id": "tint-more-096",
    "name": "라벤더 소프트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#9E86C1",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#BC86C1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C1BC86",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A8C186",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라벤더","소프트","톤인톤","퍼플"]
  },
  {
    "id": "tint-more-097",
    "name": "라벤더 뮤트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#72608A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#8A6079",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#60798A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라벤더","뮤트","톤인톤","퍼플","핑크"]
  },
  {
    "id": "tint-more-098",
    "name": "라벤더 뮤트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#72608A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#87608A",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#8A8760",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#798A60",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라벤더","뮤트","톤인톤","퍼플"]
  },
  {
    "id": "tint-more-099",
    "name": "라벤더 딥 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#422867",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#67284D",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#284D67",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라벤더","딥","톤인톤","퍼플","핑크"]
  },
  {
    "id": "tint-more-100",
    "name": "라벤더 딥 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#422867",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#622867",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#676228",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#4D6728",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["라벤더","딥","톤인톤","퍼플"]
  },
  {
    "id": "tint-more-101",
    "name": "모브 페일 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E8D1EA",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EAD1D3",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D1D3EA",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["모브","페일","톤인톤","퍼플","레드"]
  },
  {
    "id": "tint-more-102",
    "name": "모브 페일 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E8D1EA",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EAD1E0",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E0EAD1",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D3EAD1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["모브","페일","톤인톤","퍼플","핑크"]
  },
  {
    "id": "tint-more-103",
    "name": "모브 파스텔 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#DEA0E4",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E4A0A5",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#A0A5E4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["모브","파스텔","톤인톤","퍼플","레드"]
  },
  {
    "id": "tint-more-104",
    "name": "모브 파스텔 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#DEA0E4",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E4A0C8",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C8E4A0",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A5E4A0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["모브","파스텔","톤인톤","퍼플","핑크"]
  },
  {
    "id": "tint-more-105",
    "name": "모브 소프트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#BC86C1",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#C1868B",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#868BC1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["모브","소프트","톤인톤","퍼플","레드"]
  },
  {
    "id": "tint-more-106",
    "name": "모브 소프트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#BC86C1",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#C186A8",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A8C186",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#8BC186",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["모브","소프트","톤인톤","퍼플","핑크"]
  },
  {
    "id": "tint-more-107",
    "name": "모브 뮤트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#87608A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#8A6064",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#60648A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["모브","뮤트","톤인톤","퍼플","레드"]
  },
  {
    "id": "tint-more-108",
    "name": "모브 뮤트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#87608A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#8A6079",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#798A60",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#648A60",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["모브","뮤트","톤인톤","퍼플","핑크"]
  },
  {
    "id": "tint-more-109",
    "name": "모브 딥 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#622867",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#67282D",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#282D67",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["모브","딥","톤인톤","퍼플","레드"]
  },
  {
    "id": "tint-more-110",
    "name": "모브 딥 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#622867",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#67284D",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#4D6728",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#2D6728",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["모브","딥","톤인톤","퍼플","핑크"]
  },
  {
    "id": "tint-more-111",
    "name": "로즈 페일 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#EAD1E0",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EADCD1",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#DCD1EA",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","페일","톤인톤","핑크","오렌지"]
  },
  {
    "id": "tint-more-112",
    "name": "로즈 페일 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#EAD1E0",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EAD1D3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D3EAD1",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D1EADC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","페일","톤인톤","핑크","레드"]
  },
  {
    "id": "tint-more-113",
    "name": "딸기우유 바탕의 살구",
    "searchAliases": ["로즈 파스텔 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E4A0C8",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E4BCA0",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#BCA0E4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","파스텔","톤인톤","핑크","오렌지"]
  },
  {
    "id": "tint-more-114",
    "name": "딸기우유 위에 연옥색 한 점",
    "searchAliases": ["로즈 파스텔 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#E4A0C8",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E4A0A5",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A5E4A0",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A0E4BC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","파스텔","톤인톤","핑크","레드"]
  },
  {
    "id": "tint-more-115",
    "name": "로즈 소프트 톤인톤 3색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#C186A8",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#C19E86",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#9E86C1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","소프트","톤인톤","핑크","오렌지"]
  },
  {
    "id": "tint-more-116",
    "name": "로즈 소프트 톤인톤 4색",
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#C186A8",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#C1868B",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#8BC186",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#86C19E",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","소프트","톤인톤","핑크","레드"]
  },
  {
    "id": "tint-more-117",
    "name": "팥색과 카키브라운",
    "searchAliases": ["로즈 뮤트 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#8A6079",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#8A7260",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#72608A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","뮤트","톤인톤","핑크","오렌지"]
  },
  {
    "id": "tint-more-118",
    "name": "팥색과 녹청색, 올리브",
    "searchAliases": ["로즈 뮤트 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#8A6079",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#8A6064",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#648A60",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#608A72",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","뮤트","톤인톤","핑크","레드"]
  },
  {
    "id": "tint-more-119",
    "name": "버건디 위에 겹친 고동색",
    "searchAliases": ["로즈 딥 톤인톤 3색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#67284D",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#674228",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#422867",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","딥","톤인톤","핑크","오렌지"]
  },
  {
    "id": "tint-more-120",
    "name": "버건디와 숲색 사이",
    "searchAliases": ["로즈 딥 톤인톤 4색"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#67284D",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#67282D",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#2D6728",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#286742",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["로즈","딥","톤인톤","핑크","레드"]
  }
];
