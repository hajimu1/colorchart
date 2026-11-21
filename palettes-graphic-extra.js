// 창작 포스터·그래픽 배색. 비율은 면적 기준 백분율.
const GRAPHIC_EXTRA_PALETTES = [
  {
    "id": "graphic-extra-001",
    "name": "철문 위의 산성 라임",
    "scheme": "free",
    "colors": [
      {
        "hex": "#20241F",
        "ratio": 80,
        "role": "base"
      },
      {
        "hex": "#C9EA32",
        "ratio": 20,
        "role": "point"
      }
    ],
    "tags": ["차콜","라임","브루탈리즘","무채색","그린"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "브루탈리즘"
    ],
    "graphicCategories": [
      "accent-color",
      "deep-color"
    ]
  },
  {
    "id": "graphic-extra-002",
    "name": "주황 안전선",
    "scheme": "free",
    "colors": [
      {
        "hex": "#292726",
        "ratio": 64,
        "role": "base"
      },
      {
        "hex": "#BAB1A2",
        "ratio": 24,
        "role": "sub"
      },
      {
        "hex": "#F86E28",
        "ratio": 12,
        "role": "point"
      }
    ],
    "tags": ["콘크리트","안전선","브루탈리즘","무채색","오렌지"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "브루탈리즘"
    ],
    "graphicCategories": [
      "accent-color",
      "deep-color"
    ]
  },
  {
    "id": "graphic-extra-003",
    "name": "코발트 집회 공고",
    "scheme": "free",
    "colors": [
      {
        "hex": "#243B82",
        "ratio": 55,
        "role": "base"
      },
      {
        "hex": "#D9D9CA",
        "ratio": 33,
        "role": "sub"
      },
      {
        "hex": "#14191D",
        "ratio": 12,
        "role": "point"
      }
    ],
    "tags": ["코발트","타이포그래피","브루탈리즘","블루","옐로우"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "브루탈리즘"
    ],
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-extra-004",
    "name": "철가루와 분필",
    "scheme": "free",
    "colors": [
      {
        "hex": "#384743",
        "ratio": 52,
        "role": "base"
      },
      {
        "hex": "#8E9A8A",
        "ratio": 29,
        "role": "sub"
      },
      {
        "hex": "#E9D9B8",
        "ratio": 19,
        "role": "point"
      }
    ],
    "tags": ["차콜","분필","브루탈리즘","무채색"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "브루탈리즘"
    ],
    "graphicCategories": [
      "deep-color"
    ]
  },
  {
    "id": "graphic-extra-005",
    "name": "지하 계단의 보라 표지",
    "scheme": "free",
    "colors": [
      {
        "hex": "#272432",
        "ratio": 55,
        "role": "base"
      },
      {
        "hex": "#555064",
        "ratio": 24,
        "role": "sub"
      },
      {
        "hex": "#D6CDEA",
        "ratio": 13,
        "role": "sub"
      },
      {
        "hex": "#ACFF60",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["퍼플","라임","브루탈리즘","블루","무채색"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "브루탈리즘"
    ],
    "graphicCategories": [
      "deep-color",
      "accent-color"
    ]
  },
  {
    "id": "graphic-extra-006",
    "name": "경고문과 청록 테이프",
    "scheme": "free",
    "colors": [
      {
        "hex": "#DDD6BF",
        "ratio": 42,
        "role": "base"
      },
      {
        "hex": "#192A28",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#009C92",
        "ratio": 18,
        "role": "sub"
      },
      {
        "hex": "#E14D32",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["청록","경고문","브루탈리즘","옐로우","시안"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "브루탈리즘"
    ],
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-extra-007",
    "name": "철망 사이의 분홍",
    "scheme": "free",
    "colors": [
      {
        "hex": "#232529",
        "ratio": 57,
        "role": "base"
      },
      {
        "hex": "#515961",
        "ratio": 20,
        "role": "sub"
      },
      {
        "hex": "#C8CABD",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#F95193",
        "ratio": 7,
        "role": "sub"
      },
      {
        "hex": "#838452",
        "ratio": 4,
        "role": "point"
      }
    ],
    "tags": ["철망","핑크","브루탈리즘","무채색"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "브루탈리즘"
    ],
    "graphicCategories": [
      "deep-color",
      "accent-color"
    ]
  },
  {
    "id": "graphic-extra-008",
    "name": "야간 하역장",
    "scheme": "free",
    "colors": [
      {
        "hex": "#172D27",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#3B6453",
        "ratio": 23,
        "role": "sub"
      },
      {
        "hex": "#B6BFA3",
        "ratio": 14,
        "role": "sub"
      },
      {
        "hex": "#FA9C3C",
        "ratio": 9,
        "role": "sub"
      },
      {
        "hex": "#8E4841",
        "ratio": 4,
        "role": "point"
      }
    ],
    "tags": ["딥그린","하역장","브루탈리즘","시안","그린"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "브루탈리즘"
    ],
    "graphicCategories": [
      "deep-color"
    ]
  },
  {
    "id": "graphic-extra-009",
    "name": "먹지의 파란 절취선",
    "scheme": "free",
    "colors": [
      {
        "hex": "#303138",
        "ratio": 55,
        "role": "base"
      },
      {
        "hex": "#555D68",
        "ratio": 20,
        "role": "sub"
      },
      {
        "hex": "#999791",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#D2C7B7",
        "ratio": 8,
        "role": "sub"
      },
      {
        "hex": "#466A9D",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": ["먹색","절취선","브루탈리즘","무채색"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "브루탈리즘"
    ],
    "graphicCategories": [
      "deep-color"
    ]
  },
  {
    "id": "graphic-extra-010",
    "name": "수련 잎과 백랍",
    "scheme": "free",
    "colors": [
      {
        "hex": "#788676",
        "ratio": 58,
        "role": "base"
      },
      {
        "hex": "#D9D4BF",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#A49C89",
        "ratio": 12,
        "role": "point"
      }
    ],
    "tags": ["아르누보","세이지","아르누보·아르데코","무채색","옐로우"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicCategories": [
      "soft-graphic"
    ]
  },
  {
    "id": "graphic-extra-011",
    "name": "청동 잠자리",
    "scheme": "free",
    "colors": [
      {
        "hex": "#354B47",
        "ratio": 56,
        "role": "base"
      },
      {
        "hex": "#798579",
        "ratio": 26,
        "role": "sub"
      },
      {
        "hex": "#BFA27C",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#E1D6BA",
        "ratio": 6,
        "role": "point"
      }
    ],
    "tags": ["아르누보","브론즈","아르누보·아르데코","시안","무채색"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicCategories": [
      "vintage-muted"
    ]
  },
  {
    "id": "graphic-extra-012",
    "name": "포도넝쿨 스테인드글라스",
    "scheme": "free",
    "colors": [
      {
        "hex": "#493845",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#79677C",
        "ratio": 20,
        "role": "sub"
      },
      {
        "hex": "#72826F",
        "ratio": 16,
        "role": "sub"
      },
      {
        "hex": "#BEAF83",
        "ratio": 9,
        "role": "sub"
      },
      {
        "hex": "#E8DCC2",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": ["아르누보","포도","아르누보·아르데코","핑크","무채색"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicCategories": [
      "vintage-muted"
    ]
  },
  {
    "id": "graphic-extra-013",
    "name": "창포 무늬 벽지",
    "scheme": "free",
    "colors": [
      {
        "hex": "#D7D1BD",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#A5A993",
        "ratio": 23,
        "role": "sub"
      },
      {
        "hex": "#84889F",
        "ratio": 17,
        "role": "sub"
      },
      {
        "hex": "#525F6C",
        "ratio": 13,
        "role": "sub"
      },
      {
        "hex": "#C3A285",
        "ratio": 7,
        "role": "point"
      }
    ],
    "tags": ["아르누보","창포","아르누보·아르데코","옐로우","무채색"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicCategories": [
      "soft-graphic"
    ]
  },
  {
    "id": "graphic-extra-014",
    "name": "자주빛 부채와 금박",
    "scheme": "free",
    "colors": [
      {
        "hex": "#452B36",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#74505C",
        "ratio": 18,
        "role": "sub"
      },
      {
        "hex": "#AD8750",
        "ratio": 14,
        "role": "sub"
      },
      {
        "hex": "#E0CAAB",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["아르데코","버건디","아르누보·아르데코","핑크"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicCategories": [
      "deep-color"
    ]
  },
  {
    "id": "graphic-extra-015",
    "name": "옥빛 승강기 문",
    "scheme": "free",
    "colors": [
      {
        "hex": "#184C4B",
        "ratio": 47,
        "role": "base"
      },
      {
        "hex": "#287976",
        "ratio": 21,
        "role": "sub"
      },
      {
        "hex": "#B59D68",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E2D8BB",
        "ratio": 11,
        "role": "sub"
      },
      {
        "hex": "#282C35",
        "ratio": 6,
        "role": "point"
      }
    ],
    "tags": ["아르데코","옥색","아르누보·아르데코","시안"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-extra-016",
    "name": "흑단의 황동 손잡이",
    "scheme": "free",
    "colors": [
      {
        "hex": "#272326",
        "ratio": 72,
        "role": "base"
      },
      {
        "hex": "#BB9860",
        "ratio": 28,
        "role": "point"
      }
    ],
    "tags": ["아르데코","황동","아르누보·아르데코","무채색","오렌지"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicCategories": [
      "deep-color"
    ]
  },
  {
    "id": "graphic-extra-017",
    "name": "자개 계단",
    "scheme": "free",
    "colors": [
      {
        "hex": "#282E42",
        "ratio": 46,
        "role": "base"
      },
      {
        "hex": "#57617B",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A695B0",
        "ratio": 17,
        "role": "sub"
      },
      {
        "hex": "#E1CD9B",
        "ratio": 12,
        "role": "point"
      }
    ],
    "tags": ["아르데코","자개","아르누보·아르데코","블루"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicCategories": [
      "deep-color"
    ]
  },
  {
    "id": "graphic-extra-018",
    "name": "동백 문양의 병풍",
    "scheme": "free",
    "colors": [
      {
        "hex": "#D9CEAA",
        "ratio": 39,
        "role": "base"
      },
      {
        "hex": "#546B50",
        "ratio": 22,
        "role": "sub"
      },
      {
        "hex": "#883D44",
        "ratio": 19,
        "role": "sub"
      },
      {
        "hex": "#423C37",
        "ratio": 13,
        "role": "sub"
      },
      {
        "hex": "#AC835E",
        "ratio": 7,
        "role": "point"
      }
    ],
    "tags": ["아르누보","동백","아르누보·아르데코","옐로우","그린"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicCategories": [
      "vintage-muted"
    ]
  },
  {
    "id": "graphic-extra-019",
    "name": "청록 활자 견본",
    "scheme": "free",
    "colors": [
      {
        "hex": "#00776C",
        "ratio": 62,
        "role": "base"
      },
      {
        "hex": "#E9E3CF",
        "ratio": 38,
        "role": "point"
      }
    ],
    "tags": ["청록","활자","스위스·모더니즘","시안","옐로우"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-extra-020",
    "name": "남색 환승 노선도",
    "scheme": "free",
    "colors": [
      {
        "hex": "#213657",
        "ratio": 57,
        "role": "base"
      },
      {
        "hex": "#E4DFD2",
        "ratio": 31,
        "role": "sub"
      },
      {
        "hex": "#E1A130",
        "ratio": 12,
        "role": "point"
      }
    ],
    "tags": ["네이비","노선도","스위스·모더니즘","블루","오렌지"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicCategories": [
      "accent-color"
    ]
  },
  {
    "id": "graphic-extra-021",
    "name": "접지선과 주홍 점",
    "scheme": "free",
    "colors": [
      {
        "hex": "#DBDCD0",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#505C62",
        "ratio": 28,
        "role": "sub"
      },
      {
        "hex": "#BB503C",
        "ratio": 14,
        "role": "sub"
      },
      {
        "hex": "#20282B",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["주홍","접지","스위스·모더니즘","옐로우","무채색"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-extra-022",
    "name": "연두색 비례자",
    "scheme": "free",
    "colors": [
      {
        "hex": "#BACA68",
        "ratio": 45,
        "role": "base"
      },
      {
        "hex": "#293D51",
        "ratio": 28,
        "role": "sub"
      },
      {
        "hex": "#E1DCC9",
        "ratio": 17,
        "role": "sub"
      },
      {
        "hex": "#7B8482",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["연두","네이비","스위스·모더니즘","옐로우","블루"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-extra-023",
    "name": "회청색 색인 부호",
    "scheme": "free",
    "colors": [
      {
        "hex": "#425362",
        "ratio": 54,
        "role": "base"
      },
      {
        "hex": "#788489",
        "ratio": 24,
        "role": "sub"
      },
      {
        "hex": "#CDD1C9",
        "ratio": 14,
        "role": "sub"
      },
      {
        "hex": "#AE8069",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["색인","회청색","스위스·모더니즘","블루","무채색"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicCategories": [
      "soft-graphic"
    ]
  },
  {
    "id": "graphic-extra-024",
    "name": "야간 열차 시각표",
    "scheme": "free",
    "colors": [
      {
        "hex": "#21282F",
        "ratio": 54,
        "role": "base"
      },
      {
        "hex": "#55616B",
        "ratio": 20,
        "role": "sub"
      },
      {
        "hex": "#B5B8AE",
        "ratio": 13,
        "role": "sub"
      },
      {
        "hex": "#E8DDC6",
        "ratio": 8,
        "role": "sub"
      },
      {
        "hex": "#E36E47",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": ["시간표","차콜","스위스·모더니즘","블루","무채색"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicCategories": [
      "deep-color",
      "accent-color"
    ]
  },
  {
    "id": "graphic-extra-025",
    "name": "머시룸 서평지",
    "scheme": "free",
    "colors": [
      {
        "hex": "#D0C5B7",
        "ratio": 55,
        "role": "base"
      },
      {
        "hex": "#80776D",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#494743",
        "ratio": 15,
        "role": "point"
      }
    ],
    "tags": ["서평","토프","에디토리얼","오렌지","무채색"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicCategories": [
      "soft-graphic"
    ]
  },
  {
    "id": "graphic-extra-026",
    "name": "겨울 호의 면지",
    "scheme": "free",
    "colors": [
      {
        "hex": "#D7D8D5",
        "ratio": 62,
        "role": "base"
      },
      {
        "hex": "#778A98",
        "ratio": 38,
        "role": "point"
      }
    ],
    "tags": ["면지","회청색","에디토리얼","무채색","블루"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicCategories": [
      "soft-graphic"
    ]
  },
  {
    "id": "graphic-extra-027",
    "name": "올리브색 주간지",
    "scheme": "free",
    "colors": [
      {
        "hex": "#505346",
        "ratio": 54,
        "role": "base"
      },
      {
        "hex": "#777B66",
        "ratio": 22,
        "role": "sub"
      },
      {
        "hex": "#BCB49E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#C79988",
        "ratio": 9,
        "role": "point"
      }
    ],
    "tags": ["올리브","주간지","에디토리얼","무채색"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicCategories": [
      "vintage-muted"
    ]
  },
  {
    "id": "graphic-extra-028",
    "name": "커피 얼룩이 남은 서문",
    "scheme": "free",
    "colors": [
      {
        "hex": "#392729",
        "ratio": 54,
        "role": "base"
      },
      {
        "hex": "#755B4C",
        "ratio": 20,
        "role": "sub"
      },
      {
        "hex": "#B19A88",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#E1C996",
        "ratio": 8,
        "role": "sub"
      },
      {
        "hex": "#717C70",
        "ratio": 6,
        "role": "point"
      }
    ],
    "tags": ["에스프레소","서문","에디토리얼","레드","오렌지"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicCategories": [
      "deep-color",
      "vintage-muted"
    ]
  },
  {
    "id": "graphic-extra-029",
    "name": "시집의 장밋빛 여백",
    "scheme": "free",
    "colors": [
      {
        "hex": "#E0D2C8",
        "ratio": 43,
        "role": "base"
      },
      {
        "hex": "#BB9698",
        "ratio": 24,
        "role": "sub"
      },
      {
        "hex": "#8D848C",
        "ratio": 16,
        "role": "sub"
      },
      {
        "hex": "#605960",
        "ratio": 11,
        "role": "sub"
      },
      {
        "hex": "#8C535A",
        "ratio": 6,
        "role": "point"
      }
    ],
    "tags": ["더스티핑크","시집","에디토리얼","오렌지","레드"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicCategories": [
      "soft-graphic"
    ]
  },
  {
    "id": "graphic-extra-030",
    "name": "군청 잉크와 귤껍질",
    "scheme": "free",
    "colors": [
      {
        "hex": "#334874",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#EBA15A",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F2DFBC",
        "ratio": 20,
        "role": "point"
      }
    ],
    "tags": ["군청","귤색","리소그래프·인쇄","블루","오렌지"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-extra-031",
    "name": "딸기색 겹인쇄",
    "scheme": "free",
    "colors": [
      {
        "hex": "#F0DCC3",
        "ratio": 43,
        "role": "base"
      },
      {
        "hex": "#E15E80",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#55759B",
        "ratio": 19,
        "role": "sub"
      },
      {
        "hex": "#765777",
        "ratio": 13,
        "role": "point"
      }
    ],
    "tags": ["핑크","겹인쇄","리소그래프·인쇄","오렌지"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-extra-032",
    "name": "침엽수 잉크 견본",
    "scheme": "free",
    "colors": [
      {
        "hex": "#264C3B",
        "ratio": 55,
        "role": "base"
      },
      {
        "hex": "#718568",
        "ratio": 24,
        "role": "sub"
      },
      {
        "hex": "#DBD1AE",
        "ratio": 14,
        "role": "sub"
      },
      {
        "hex": "#E2A388",
        "ratio": 7,
        "role": "point"
      }
    ],
    "tags": ["녹색","인쇄","리소그래프·인쇄","그린"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicCategories": [
      "deep-color"
    ]
  },
  {
    "id": "graphic-extra-033",
    "name": "살구빛 교정쇄",
    "scheme": "free",
    "colors": [
      {
        "hex": "#EEC8A5",
        "ratio": 41,
        "role": "base"
      },
      {
        "hex": "#E18270",
        "ratio": 24,
        "role": "sub"
      },
      {
        "hex": "#437A86",
        "ratio": 17,
        "role": "sub"
      },
      {
        "hex": "#394963",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#A2A484",
        "ratio": 6,
        "role": "point"
      }
    ],
    "tags": ["살구","교정쇄","리소그래프·인쇄","오렌지","레드"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicCategories": [
      "soft-graphic"
    ]
  },
  {
    "id": "graphic-extra-034",
    "name": "등사판의 먹 번짐",
    "scheme": "free",
    "colors": [
      {
        "hex": "#37383B",
        "ratio": 53,
        "role": "base"
      },
      {
        "hex": "#666D77",
        "ratio": 23,
        "role": "sub"
      },
      {
        "hex": "#9A9A92",
        "ratio": 13,
        "role": "sub"
      },
      {
        "hex": "#C6BDA5",
        "ratio": 7,
        "role": "sub"
      },
      {
        "hex": "#AB7379",
        "ratio": 4,
        "role": "point"
      }
    ],
    "tags": ["등사판","먹색","리소그래프·인쇄","무채색"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicCategories": [
      "deep-color"
    ]
  },
  {
    "id": "graphic-extra-035",
    "name": "자두와 유황 결정",
    "scheme": "free",
    "colors": [
      {
        "hex": "#684665",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#BEB754",
        "ratio": 32,
        "role": "sub"
      },
      {
        "hex": "#DAB8B0",
        "ratio": 18,
        "role": "point"
      }
    ],
    "tags": ["자두","유황","실험·추상","핑크","옐로우"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "실험·추상"
    ],
    "graphicCategories": [
      "experimental"
    ]
  },
  {
    "id": "graphic-extra-036",
    "name": "청회색 간섭무늬",
    "scheme": "free",
    "colors": [
      {
        "hex": "#6F828C",
        "ratio": 48,
        "role": "base"
      },
      {
        "hex": "#A6A39A",
        "ratio": 27,
        "role": "sub"
      },
      {
        "hex": "#C68479",
        "ratio": 16,
        "role": "sub"
      },
      {
        "hex": "#55536A",
        "ratio": 9,
        "role": "point"
      }
    ],
    "tags": ["간섭무늬","회청색","실험·추상","무채색"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "실험·추상"
    ],
    "graphicCategories": [
      "experimental"
    ]
  },
  {
    "id": "graphic-extra-037",
    "name": "귤빛 파형",
    "scheme": "free",
    "colors": [
      {
        "hex": "#405262",
        "ratio": 42,
        "role": "base"
      },
      {
        "hex": "#C18F79",
        "ratio": 22,
        "role": "sub"
      },
      {
        "hex": "#E7A037",
        "ratio": 17,
        "role": "sub"
      },
      {
        "hex": "#97ADB4",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#6F627B",
        "ratio": 7,
        "role": "point"
      }
    ],
    "tags": ["파형","귤색","실험·추상","블루","오렌지"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "실험·추상"
    ],
    "graphicCategories": [
      "experimental"
    ]
  },
  {
    "id": "graphic-extra-038",
    "name": "심해의 보라 등표",
    "scheme": "free",
    "colors": [
      {
        "hex": "#173D49",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#375A68",
        "ratio": 23,
        "role": "sub"
      },
      {
        "hex": "#746A96",
        "ratio": 13,
        "role": "sub"
      },
      {
        "hex": "#E58872",
        "ratio": 9,
        "role": "sub"
      },
      {
        "hex": "#BECF94",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": ["심해","보라","실험·추상","시안"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "실험·추상"
    ],
    "graphicCategories": [
      "deep-color",
      "experimental"
    ]
  },
  {
    "id": "graphic-extra-039",
    "name": "점토 단면의 푸른 띠",
    "scheme": "free",
    "colors": [
      {
        "hex": "#976E5D",
        "ratio": 38,
        "role": "base"
      },
      {
        "hex": "#C5A287",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#74786D",
        "ratio": 18,
        "role": "sub"
      },
      {
        "hex": "#396F91",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#D0C8B4",
        "ratio": 7,
        "role": "point"
      }
    ],
    "tags": ["점토","단면","실험·추상","오렌지"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "실험·추상"
    ],
    "graphicCategories": [
      "experimental"
    ]
  },
  {
    "id": "graphic-extra-040",
    "name": "라벤더 음화",
    "scheme": "free",
    "colors": [
      {
        "hex": "#ABA3BA",
        "ratio": 42,
        "role": "base"
      },
      {
        "hex": "#706A83",
        "ratio": 22,
        "role": "sub"
      },
      {
        "hex": "#515C60",
        "ratio": 17,
        "role": "sub"
      },
      {
        "hex": "#B7BEA9",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#D3AF99",
        "ratio": 7,
        "role": "point"
      }
    ],
    "tags": ["라벤더","음화","실험·추상","퍼플","무채색"],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "실험·추상"
    ],
    "graphicCategories": [
      "experimental",
      "soft-graphic"
    ]
  },

  {
    "id": "graphic-ref-gd-001",
    "reference": {
      "creator": "Henri de Toulouse-Lautrec",
      "description": "노랑 지면·검은 실루엣·붉은 활자 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1891",
      "title": "Moulin Rouge: La Goulue",
      "method": "inspired",
      "url": "https://www.musee-toulouse-lautrec.com/en/collections/masterpieces/Moulin-Rouge-poster/"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["아르누보·아르데코","타이포그래피"],
    "colors": [
      {
        "hex": "#D7BD58",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#1C1C19",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#C94B31",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#E9D7B1",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","아르누보·벨에포크","Henri de Toulouse-Lautrec","노랑 지면","검은 실루엣","붉은 활자","옐로우","무채색","아르누보·아르데코","타이포그래피"],
    "name": "Moulin Rouge: La Goulue"
  },
  {
    "id": "graphic-ref-gd-002",
    "reference": {
      "creator": "Henri de Toulouse-Lautrec",
      "description": "검정 의상·오렌지 머리·현악기 곡선 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1893",
      "title": "Jane Avril (Jardin de Paris)",
      "method": "inspired",
      "url": "https://www.moma.org/collection/works/69402"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["아르누보·아르데코"],
    "colors": [
      {
        "hex": "#D4BC93",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#24211E",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#BA572D",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#6A6555",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","아르누보·벨에포크","Henri de Toulouse-Lautrec","검정 의상","오렌지 머리","현악기 곡선","오렌지","무채색","아르누보·아르데코"],
    "name": "Jane Avril (Jardin de Paris)"
  },
  {
    "id": "graphic-ref-gd-003",
    "reference": {
      "creator": "Henri de Toulouse-Lautrec",
      "description": "검정 망토·붉은 스카프·노랑 종이 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1893",
      "title": "Aristide Bruant dans son cabaret",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["아르누보·아르데코"],
    "colors": [
      {
        "hex": "#191A1B",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#BD332B",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#E1C06B",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#EAE1CA",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["deep-color","color-block"],
    "tags": ["그래픽","아르누보·벨에포크","Henri de Toulouse-Lautrec","검정 망토","붉은 스카프","노랑 종이","무채색","레드","아르누보·아르데코"],
    "name": "Aristide Bruant dans son cabaret"
  },
  {
    "id": "graphic-ref-gd-004",
    "reference": {
      "creator": "Henri de Toulouse-Lautrec",
      "description": "검정 면·살구색 지면·오렌지 무대 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1893",
      "title": "Divan Japonais",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["아르누보·아르데코"],
    "colors": [
      {
        "hex": "#242021",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E4BD99",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#B45E3A",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#B9A280",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","아르누보·벨에포크","Henri de Toulouse-Lautrec","검정 면","살구색 지면","오렌지 무대","무채색","오렌지","아르누보·아르데코"],
    "name": "Divan Japonais"
  },
  {
    "id": "graphic-ref-gd-005",
    "reference": {
      "creator": "Alphonse Mucha",
      "description": "아이보리·꽃무늬·보석색 의상 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1894",
      "title": "Gismonda",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["아르누보·아르데코"],
    "colors": [
      {
        "hex": "#E9DCBD",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#866D50",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#678A77",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#BB6F76",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","아르누보·벨에포크","Alphonse Mucha","아이보리","꽃무늬","보석색 의상","오렌지","아르누보·아르데코"],
    "name": "Gismonda"
  },
  {
    "id": "graphic-ref-gd-006",
    "reference": {
      "creator": "Alphonse Mucha",
      "description": "금빛 원형 장식·민트·여성 측면상 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1896",
      "title": "Zodiac",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["아르누보·아르데코"],
    "colors": [
      {
        "hex": "#C9A25A",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#9CBEB0",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#423C35",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#EBDFBF",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","아르누보·벨에포크","Alphonse Mucha","금빛 원형 장식","민트","여성 측면상","오렌지","그린","아르누보·아르데코"],
    "name": "Zodiac"
  },
  {
    "id": "graphic-ref-gd-007",
    "reference": {
      "creator": "Alphonse Mucha",
      "description": "네 계절별 별도 패널·파스텔 대비 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1896",
      "title": "The Seasons",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["아르누보·아르데코"],
    "colors": [
      {
        "hex": "#D7A2AA",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#CFB86D",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#8DAD8D",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#9BAECB",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["soft-graphic"],
    "tags": ["그래픽","아르누보·벨에포크","Alphonse Mucha","네 계절별 별도 패널","파스텔 대비","레드","옐로우","아르누보·아르데코"],
    "name": "The Seasons"
  },
  {
    "id": "graphic-ref-gd-008",
    "reference": {
      "creator": "Alphonse Mucha",
      "description": "청록·복숭아·꽃 장식의 곡선 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1897",
      "title": "Monaco–Monte-Carlo",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["아르누보·아르데코"],
    "colors": [
      {
        "hex": "#4C9C92",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F2BF9C",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#E7D9B9",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#4F6863",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","아르누보·벨에포크","Alphonse Mucha","청록","복숭아","꽃 장식의 곡선","시안","오렌지","아르누보·아르데코"],
    "name": "Monaco–Monte-Carlo"
  },
  {
    "id": "graphic-ref-gd-009",
    "reference": {
      "creator": "Privat Livemont",
      "description": "짙은 옥색·황금빛 머리·오렌지 선 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1896",
      "title": "Absinthe Robette",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["아르누보·아르데코"],
    "colors": [
      {
        "hex": "#2C615C",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#D2AF62",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#CD7446",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F1E6C4",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","아르누보·벨에포크","Privat Livemont","짙은 옥색","황금빛 머리","오렌지 선","시안","오렌지","아르누보·아르데코"],
    "name": "Absinthe Robette"
  },
  {
    "id": "graphic-ref-gd-010",
    "reference": {
      "creator": "Edward Penfield",
      "description": "여백·큰 단색 면·모자 쓴 인물 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1893",
      "title": "Harper's Magazine 1893 Poster",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["아르누보·아르데코"],
    "colors": [
      {
        "hex": "#EADBC0",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#1D2B24",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#C5A77F",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#B24C35",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","아르누보·벨에포크","Edward Penfield","여백","큰 단색 면","모자 쓴 인물","오렌지","그린","아르누보·아르데코"],
    "name": "Harper's Magazine 1893 Poster"
  },
  {
    "id": "graphic-ref-gd-011",
    "reference": {
      "creator": "Will H. Bradley",
      "description": "검정 실루엣·크림·기하학적 식물 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1895",
      "title": "The Chap-Book (poster)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["아르누보·아르데코"],
    "colors": [
      {
        "hex": "#111716",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E8D9B5",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#687C57",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#B1A27B",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["deep-color"],
    "tags": ["그래픽","아르누보·벨에포크","Will H. Bradley","검정 실루엣","크림","기하학적 식물","무채색","오렌지","아르누보·아르데코"],
    "name": "The Chap-Book (poster)"
  },
  {
    "id": "graphic-ref-gd-012",
    "reference": {
      "creator": "Aubrey Beardsley",
      "description": "흑백 선화·검정 면적·초정밀 장식 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1894",
      "title": "Salomé (illustrations)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["아르누보·아르데코"],
    "colors": [
      {
        "hex": "#171717",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#FCF8EC",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#6E6862",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#B9B1A3",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["accent-color","vintage-muted"],
    "tags": ["그래픽","아르누보·벨에포크","Aubrey Beardsley","흑백 선화","검정 면적","초정밀 장식","무채색","아르누보·아르데코"],
    "name": "Salomé (illustrations)"
  },
  {
    "id": "graphic-ref-gd-013",
    "reference": {
      "creator": "Koloman Moser / Vienna Secession",
      "description": "정사각 프레임·금색·세세션 장식 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1898–1903",
      "title": "Ver Sacrum (magazine covers)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["아르누보·아르데코"],
    "colors": [
      {
        "hex": "#C7AD65",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#262823",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D8D4BF",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#7C816D",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["vintage-muted"],
    "tags": ["그래픽","아르누보·벨에포크","Koloman Moser / Vienna Secession","정사각 프레임","금색","세세션 장식","오렌지","무채색","아르누보·아르데코"],
    "name": "Ver Sacrum (magazine covers)"
  },
  {
    "id": "graphic-ref-gd-014",
    "reference": {
      "creator": "Margaret Macdonald / Frances Macdonald / James Herbert McNair",
      "description": "길게 늘인 인물·세이지·연보라 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1895",
      "title": "Glasgow Institute of the Fine Arts (poster)",
      "method": "inspired",
      "url": "https://www.moma.org/collection/works/199904"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["아르누보·아르데코"],
    "colors": [
      {
        "hex": "#A6B7A3",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#A9A0BA",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#393E37",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#EADCCF",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["vintage-muted"],
    "tags": ["그래픽","아르누보·벨에포크","Margaret Macdonald / Frances Macdonald / James Herbert McNair","길게 늘인 인물","세이지","연보라","그린","퍼플","아르누보·아르데코"],
    "name": "Glasgow Institute of the Fine Arts (poster)"
  },
  {
    "id": "graphic-ref-gd-015",
    "reference": {
      "creator": "William Morris",
      "description": "식물 반복 패턴·딥인디고·그린·레드 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1883",
      "title": "Strawberry Thief (pattern)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["아르누보·아르데코"],
    "colors": [
      {
        "hex": "#273753",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#607C55",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#A34243",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#E3C99A",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["deep-color"],
    "tags": ["그래픽","아르누보·벨에포크","William Morris","식물 반복 패턴","딥인디고","그린","레드","블루","아르누보·아르데코"],
    "name": "Strawberry Thief (pattern)"
  },
  {
    "id": "graphic-ref-gd-016",
    "reference": {
      "creator": "Henri de Toulouse-Lautrec",
      "description": "오렌지·검정 재킷·대각 레터링 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1892",
      "title": "La Reine de Joie",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["아르누보·아르데코","타이포그래피"],
    "colors": [
      {
        "hex": "#C66627",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#191818",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D8BB6D",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#E0C7A9",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","아르누보·벨에포크","Henri de Toulouse-Lautrec","오렌지","검정 재킷","대각 레터링","무채색","아르누보·아르데코","타이포그래피"],
    "name": "La Reine de Joie"
  },
  {
    "id": "graphic-ref-gd-017",
    "reference": {
      "creator": "Lucian Bernhard",
      "description": "검정 지면·성냥 두 개·황색 글자 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1905",
      "title": "Priester Matches poster",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#191A18",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E0B754",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#B9B3A1",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#B54D37",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["deep-color"],
    "tags": ["그래픽","전위·초기 모더니즘","Lucian Bernhard","검정 지면","성냥 두 개","황색 글자","무채색","오렌지"],
    "name": "Priester Matches poster"
  },
  {
    "id": "graphic-ref-gd-018",
    "reference": {
      "creator": "Leonetto Cappiello",
      "description": "초록 악마·진홍 지면·노란 글자 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1906",
      "title": "Maurin Quina",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#4C8F43",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#B52928",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D9B94A",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#1B2520",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","전위·초기 모더니즘","Leonetto Cappiello","초록 악마","진홍 지면","노란 글자","그린","레드"],
    "name": "Maurin Quina"
  },
  {
    "id": "graphic-ref-gd-019",
    "reference": {
      "creator": "Leonetto Cappiello",
      "description": "다이내믹한 빨강·검정·금색 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1921",
      "title": "Bitter Campari (sprite poster)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#CD3027",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#25211F",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D3AA52",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F0D9A1",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","전위·초기 모더니즘","Leonetto Cappiello","다이내믹한 빨강","검정","금색","레드","무채색"],
    "name": "Bitter Campari (sprite poster)"
  },
  {
    "id": "graphic-ref-gd-020",
    "reference": {
      "creator": "Fortunato Depero",
      "description": "붉은 기하학·술잔의 도형화 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1926",
      "title": "Campari Futurist Advertising",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#C83727",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E2B993",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#2E302A",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#E6D6B1",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","전위·초기 모더니즘","Fortunato Depero","붉은 기하학","술잔의 도형화","레드","오렌지"],
    "name": "Campari Futurist Advertising"
  },
  {
    "id": "graphic-ref-gd-021",
    "reference": {
      "creator": "Fortunato Depero",
      "description": "기계적 서체·검정·주황·나사 장정 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1927",
      "title": "Depero Futurista (Bolted Book)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#D65D2F",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#1E1B1B",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D6C6A4",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#9B4937",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","전위·초기 모더니즘","Fortunato Depero","기계적 서체","검정","주황","나사 장정","오렌지","무채색","타이포그래피"],
    "name": "Depero Futurista (Bolted Book)"
  },
  {
    "id": "graphic-ref-gd-022",
    "reference": {
      "creator": "El Lissitzky",
      "description": "빨강 삼각형·크림 원·검정 도형 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1919",
      "title": "Beat the Whites with the Red Wedge",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#CD302C",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F2E8D7",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#1F2120",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#958A79",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","전위·초기 모더니즘","El Lissitzky","빨강 삼각형","크림 원","검정 도형","레드","오렌지"],
    "name": "Beat the Whites with the Red Wedge"
  },
  {
    "id": "graphic-ref-gd-023",
    "reference": {
      "creator": "Alexander Rodchenko",
      "description": "여성 외침·빨간 쐐기·검정과 크림 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1924",
      "title": "Books! (Lengiz) poster",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#C8262C",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#22201F",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#E7DECA",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#B77E6B",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","전위·초기 모더니즘","Alexander Rodchenko","여성 외침","빨간 쐐기","검정과 크림","레드","무채색"],
    "name": "Books! (Lengiz) poster"
  },
  {
    "id": "graphic-ref-gd-024",
    "reference": {
      "creator": "Raoul Hausmann",
      "description": "타이포 콜라주·흑백 지면 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1919",
      "title": "Der Dada No. 2 magazine cover",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#242423",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E5E1D5",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#B6ADA0",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#B53E31",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","전위·초기 모더니즘","Raoul Hausmann","타이포 콜라주","흑백 지면","무채색","오렌지","타이포그래피"],
    "name": "Der Dada No. 2 magazine cover"
  },
  {
    "id": "graphic-ref-gd-025",
    "reference": {
      "creator": "Theo van Doesburg",
      "description": "흰 여백·검정 활자·기하학 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1917",
      "title": "De Stijl magazine cover",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#F2F0E5",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#212324",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#9B9C98",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#B13731",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","전위·초기 모더니즘","Theo van Doesburg","흰 여백","검정 활자","기하학","옐로우","무채색","타이포그래피"],
    "name": "De Stijl magazine cover"
  },
  {
    "id": "graphic-ref-gd-026",
    "reference": {
      "creator": "Herbert Bayer",
      "description": "소문자 기반 기하학 서체·흑백 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1925",
      "title": "Universal Alphabet specimen",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#1E1F1E",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F6F4ED",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#BFC0BB",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#777A78",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","전위·초기 모더니즘","Herbert Bayer","소문자 기반 기하학 서체","흑백","무채색","타이포그래피"],
    "name": "Universal Alphabet specimen"
  },
  {
    "id": "graphic-ref-gd-027",
    "reference": {
      "creator": "Jan Tschichold",
      "description": "붉은 띠·검정 타이포·명확한 축 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1928",
      "title": "Die Neue Typographie (book cover)",
      "method": "inspired",
      "url": "https://mcbcollection.com/jan-tschichold-designer-theorist-collector"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#C32930",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#1E2021",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#F0E9D6",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#85817B",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","전위·초기 모더니즘","Jan Tschichold","붉은 띠","검정 타이포","명확한 축","레드","무채색","타이포그래피"],
    "name": "Die Neue Typographie (book cover)"
  },
  {
    "id": "graphic-ref-gd-028",
    "reference": {
      "creator": "Piet Zwart",
      "description": "포토몽타주·빨강과 검정·기하 조판 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1927–1928",
      "title": "NKF Cable Catalogue",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#C7322D",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#1A1B1A",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#DDD9CB",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#929895",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","전위·초기 모더니즘","Piet Zwart","포토몽타주","빨강과 검정","기하 조판","레드","무채색"],
    "name": "NKF Cable Catalogue"
  },
  {
    "id": "graphic-ref-gd-029",
    "reference": {
      "creator": "A. M. Cassandre",
      "description": "연속 동작·강한 레드·골드·블랙 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1932",
      "title": "Dubonnet Triptych",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#B7232C",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#D5AB59",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#21211D",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#E8D6AD",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","전위·초기 모더니즘","A. M. Cassandre","연속 동작","강한 레드","골드","블랙","레드","오렌지"],
    "name": "Dubonnet Triptych"
  },
  {
    "id": "graphic-ref-gd-030",
    "reference": {
      "creator": "A. M. Cassandre",
      "description": "객차·에메랄드·청회색·골드 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1932",
      "title": "Wagon-Bar",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#2E7772",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#7B9CA5",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D3B06B",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#E6D8BD",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","전위·초기 모더니즘","A. M. Cassandre","객차","에메랄드","청회색","골드","시안"],
    "name": "Wagon-Bar"
  },
  {
    "id": "graphic-ref-gd-031",
    "reference": {
      "creator": "A. M. Cassandre",
      "description": "철도 선로 원근·차가운 블루·레드 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1927",
      "title": "Étoile du Nord",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#31658B",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#C34336",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#E5D5B6",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#1B3344",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","전위·초기 모더니즘","A. M. Cassandre","철도 선로 원근","차가운 블루","레드","블루"],
    "name": "Étoile du Nord"
  },
  {
    "id": "graphic-ref-gd-032",
    "reference": {
      "creator": "E. McKnight Kauffer",
      "description": "새와 구름의 기하학적 면 분할 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1919",
      "title": "Flight poster",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#7FA4B2",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E9E6D8",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#1E2B36",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#CB9E66",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","전위·초기 모더니즘","E. McKnight Kauffer","새와 구름의 기하학적 면 분할","시안","옐로우"],
    "name": "Flight poster"
  },
  {
    "id": "graphic-ref-gd-033",
    "reference": {
      "creator": "Joseph Binder",
      "description": "블루·오렌지·화이트·삼각 구도 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1939",
      "title": "New York World's Fair poster",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#2F6A9B",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E78544",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#F3F0E6",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#243747",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": [
      "그래픽",
      "전위·초기 모더니즘",
      "Joseph Binder",
      "블루",
      "오렌지",
      "화이트",
      "삼각 구도"
    ],
    "name": "New York World's Fair poster"
  },
  {
    "id": "graphic-ref-gd-034",
    "reference": {
      "creator": "László Moholy-Nagy",
      "description": "바우하우스 포토그램·기하학 타이포 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1930",
      "title": "The New Vision (cover)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피","스위스·모더니즘"],
    "colors": [
      {
        "hex": "#D9D9D1",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#1E2324",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#7F969B",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#BC4B3A",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","전위·초기 모더니즘","László Moholy-Nagy","바우하우스 포토그램","기하학 타이포","무채색","타이포그래피","스위스·모더니즘"],
    "name": "The New Vision (cover)"
  },
  {
    "id": "graphic-ref-gd-035",
    "reference": {
      "creator": "Gustav Klutsis",
      "description": "사진 집단·붉은 면·대형 산세리프 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1930",
      "title": "Constructivist Photomontage 'Let's Fulfil the Plan of Great Works'",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#BF2E2C",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#232527",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#DFD7C7",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#8E9190",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","전위·초기 모더니즘","Gustav Klutsis","사진 집단","붉은 면","대형 산세리프","레드","무채색"],
    "name": "Constructivist Photomontage 'Let's Fulfil the Plan of Great Works'"
  },
  {
    "id": "graphic-ref-gd-036",
    "reference": {
      "creator": "Alex Steinweiss",
      "description": "손그림 타이포·색채 추상 무대 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1940",
      "title": "Smash Song Hits by Rodgers and Hart (Columbia LP)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피","에디토리얼"],
    "colors": [
      {
        "hex": "#D25943",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#3B547B",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D9C06D",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F3E8D8",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","Alex Steinweiss","손그림 타이포","색채 추상 무대","레드","블루","타이포그래피","에디토리얼"],
    "name": "Smash Song Hits by Rodgers and Hart (Columbia LP)"
  },
  {
    "id": "graphic-ref-gd-037",
    "reference": {
      "creator": "Romek Marber",
      "description": "상단 녹색 블록·하단 일러스트 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1961",
      "title": "Penguin Crime / Marber Grid",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["일러스트레이션","에디토리얼"],
    "colors": [
      {
        "hex": "#2C8063",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F0E4C9",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#232624",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#A9B2A0",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","Romek Marber","상단 녹색 블록","하단 일러스트","그린","오렌지","일러스트레이션","에디토리얼"],
    "name": "Penguin Crime / Marber Grid"
  },
  {
    "id": "graphic-ref-gd-038",
    "reference": {
      "creator": "Saul Bass",
      "description": "찢긴 검정 팔·블록 색면 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1955",
      "title": "The Man with the Golden Arm (poster)",
      "method": "inspired",
      "url": "https://www.moma.org/artists/372-saul-bass"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["에디토리얼"],
    "colors": [
      {
        "hex": "#16191A",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#EBE4CE",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#C84A2B",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#E1AA49",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","Saul Bass","찢긴 검정 팔","블록 색면","무채색","옐로우","에디토리얼"],
    "name": "The Man with the Golden Arm (poster)"
  },
  {
    "id": "graphic-ref-gd-039",
    "reference": {
      "creator": "Saul Bass",
      "description": "오렌지 스파이럴·검정 실루엣 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1958",
      "title": "Vertigo (film poster)",
      "method": "inspired",
      "url": "https://www.moma.org/artists/372-saul-bass"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["에디토리얼"],
    "colors": [
      {
        "hex": "#DA6230",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#1B1B1C",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#E8C79B",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F4EBDB",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","Saul Bass","오렌지 스파이럴","검정 실루엣","오렌지","무채색","에디토리얼"],
    "name": "Vertigo (film poster)"
  },
  {
    "id": "graphic-ref-gd-040",
    "reference": {
      "creator": "Saul Bass",
      "description": "절단 인체 실루엣·블랙·레드 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1959",
      "title": "Anatomy of a Murder (poster)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["에디토리얼"],
    "colors": [
      {
        "hex": "#18191A",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#D34236",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#EFE1C9",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#967E69",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["deep-color"],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","Saul Bass","절단 인체 실루엣","블랙","레드","무채색","에디토리얼"],
    "name": "Anatomy of a Murder (poster)"
  },
  {
    "id": "graphic-ref-gd-041",
    "reference": {
      "creator": "Saul Bass",
      "description": "우는 얼굴·청색·검정·핑크 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1958",
      "title": "Bonjour Tristesse (poster)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["에디토리얼"],
    "colors": [
      {
        "hex": "#477A9A",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#21232A",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#E0A5A2",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F7E0BD",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","Saul Bass","우는 얼굴","청색","검정","핑크","블루","무채색","에디토리얼"],
    "name": "Bonjour Tristesse (poster)"
  },
  {
    "id": "graphic-ref-gd-042",
    "reference": {
      "creator": "Saul Bass",
      "description": "찢긴 종이 형상·흑백 면 분할 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1965",
      "title": "Bunny Lake Is Missing (poster)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["에디토리얼"],
    "colors": [
      {
        "hex": "#191919",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#EEEDE8",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#9C9C97",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#C8C7C0",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["accent-color","vintage-muted"],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","Saul Bass","찢긴 종이 형상","흑백 면 분할","무채색","옐로우","에디토리얼"],
    "name": "Bunny Lake Is Missing (poster)"
  },
  {
    "id": "graphic-ref-gd-043",
    "reference": {
      "creator": "William Golden",
      "description": "검정·화이트·타원 음양 형상 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1951",
      "title": "CBS Eye symbol",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["에디토리얼"],
    "colors": [
      {
        "hex": "#171717",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#FBFAF6",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#777777",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#D9D8D3",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","William Golden","검정","화이트","타원 음양 형상","무채색","에디토리얼"],
    "name": "CBS Eye symbol"
  },
  {
    "id": "graphic-ref-gd-044",
    "reference": {
      "creator": "Paul Rand",
      "description": "블루 원형 레터링·리듬 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1960",
      "title": "Westinghouse symbol",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피","에디토리얼"],
    "colors": [
      {
        "hex": "#3276B7",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#FFFFFF",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#1E476D",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#B9CEDF",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","Paul Rand","블루 원형 레터링","리듬","블루","무채색","타이포그래피","에디토리얼"],
    "name": "Westinghouse symbol"
  },
  {
    "id": "graphic-ref-gd-045",
    "reference": {
      "creator": "Paul Rand",
      "description": "브라운·골드·방패·소포 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1961",
      "title": "UPS shield identity",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["에디토리얼"],
    "colors": [
      {
        "hex": "#392C23",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#D8B05E",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#F4E0AF",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#926B3F",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","Paul Rand","브라운","골드","방패","소포","오렌지","에디토리얼"],
    "name": "UPS shield identity"
  },
  {
    "id": "graphic-ref-gd-046",
    "reference": {
      "creator": "Reid Miles",
      "description": "청록 단색 사진·화이트 타이포 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1957",
      "title": "Blue Train (Blue Note album)",
      "method": "inspired",
      "url": "https://www.moma.org/artists/38897-reid-miles"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피","에디토리얼"],
    "colors": [
      {
        "hex": "#06393D",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#2B8F8B",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#DADDD0",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#96B83A",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["deep-color"],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","Reid Miles","청록 단색 사진","화이트 타이포","시안","타이포그래피","에디토리얼"],
    "name": "Blue Train (Blue Note album)"
  },
  {
    "id": "graphic-ref-gd-047",
    "reference": {
      "creator": "Reid Miles",
      "description": "모노톤 사진·도전적 흰 활자 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1958",
      "title": "Moanin' (Blue Note album)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피","에디토리얼"],
    "colors": [
      {
        "hex": "#202122",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#CBCAC4",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#FFFFFF",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#827D74",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","Reid Miles","모노톤 사진","도전적 흰 활자","무채색","타이포그래피","에디토리얼"],
    "name": "Moanin' (Blue Note album)"
  },
  {
    "id": "graphic-ref-gd-048",
    "reference": {
      "creator": "Reid Miles",
      "description": "검정·오렌지·사진 조판 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1964",
      "title": "The Sidewinder (Blue Note album)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["에디토리얼"],
    "colors": [
      {
        "hex": "#161717",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#C46026",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#F4E4C9",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#8A7466",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["deep-color","color-block"],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","Reid Miles","검정","오렌지","사진 조판","무채색","에디토리얼"],
    "name": "The Sidewinder (Blue Note album)"
  },
  {
    "id": "graphic-ref-gd-049",
    "reference": {
      "creator": "Herb Lubalin",
      "description": "곡선형 결합 활자·흑백·레드 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1968",
      "title": "Avant Garde magazine masthead",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피","에디토리얼"],
    "colors": [
      {
        "hex": "#1C1D20",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F4F1E7",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#CF3B33",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#777674",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","Herb Lubalin","곡선형 결합 활자","흑백","레드","무채색","옐로우","타이포그래피","에디토리얼"],
    "name": "Avant Garde magazine masthead"
  },
  {
    "id": "graphic-ref-gd-050",
    "reference": {
      "creator": "George Lois",
      "description": "화이트 사진 지면·붉은 화살 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1968",
      "title": "Esquire 'Ali as Saint Sebastian' cover",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["에디토리얼"],
    "colors": [
      {
        "hex": "#F2F0E9",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#C5483A",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#22262A",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#A6A6A3",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["soft-graphic"],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","George Lois","화이트 사진 지면","붉은 화살","옐로우","레드","에디토리얼"],
    "name": "Esquire 'Ali as Saint Sebastian' cover"
  },
  {
    "id": "graphic-ref-gd-051",
    "reference": {
      "creator": "Milton Glaser",
      "description": "검정 얼굴 측면·컬러 웨이브 머리 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1966",
      "title": "Bob Dylan (silhouette poster)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["에디토리얼"],
    "colors": [
      {
        "hex": "#191919",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E2A33A",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#C43B55",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#31967B",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["deep-color"],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","Milton Glaser","검정 얼굴 측면","컬러 웨이브 머리","무채색","오렌지","에디토리얼"],
    "name": "Bob Dylan (silhouette poster)"
  },
  {
    "id": "graphic-ref-gd-052",
    "reference": {
      "creator": "Klaus Voormann",
      "description": "흑백 콜라주·머리카락 선 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1966",
      "title": "Revolver (Beatles sleeve)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["에디토리얼"],
    "colors": [
      {
        "hex": "#151515",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F4F3EC",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#AAA8A1",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#61615F",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","Klaus Voormann","흑백 콜라주","머리카락 선","무채색","에디토리얼"],
    "name": "Revolver (Beatles sleeve)"
  },
  {
    "id": "graphic-ref-gd-053",
    "reference": {
      "creator": "Peter Blake / Jann Haworth",
      "description": "다색 군상 콜라주·화단 레터링 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1967",
      "title": "Sgt. Pepper's Lonely Hearts Club Band sleeve",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피","에디토리얼"],
    "colors": [
      {
        "hex": "#C22D3D",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#EBC95B",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#2A657A",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#648E6A",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","Peter Blake / Jann Haworth","다색 군상 콜라주","화단 레터링","레드","옐로우","타이포그래피","에디토리얼"],
    "name": "Sgt. Pepper's Lonely Hearts Club Band sleeve"
  },
  {
    "id": "graphic-ref-gd-054",
    "reference": {
      "creator": "Reid Miles",
      "description": "그레이 스케일 사진·머스터드 계열 타이포 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1957",
      "title": "Jutta Hipp with Zoot Sims (Blue Note sleeve)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피","에디토리얼"],
    "colors": [
      {
        "hex": "#B49B51",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#353735",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#C6C7C2",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#EFEADF",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["vintage-muted"],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","Reid Miles","그레이 스케일 사진","머스터드 계열 타이포","오렌지","무채색","타이포그래피","에디토리얼"],
    "name": "Jutta Hipp with Zoot Sims (Blue Note sleeve)"
  },
  {
    "id": "graphic-ref-gd-055",
    "reference": {
      "creator": "Mati Klarwein",
      "description": "초현실 인물·컬러 천체 콜라주 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1970",
      "title": "Bitches Brew (Miles Davis sleeve)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["에디토리얼"],
    "colors": [
      {
        "hex": "#BD6D46",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#5F8F95",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D1B46B",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#302F3D",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","미드센추리·잡지·영화포스터","Mati Klarwein","초현실 인물","컬러 천체 콜라주","오렌지","시안","에디토리얼"],
    "name": "Bitches Brew (Miles Davis sleeve)"
  },
  {
    "id": "graphic-ref-gd-056",
    "reference": {
      "creator": "Lance Wyman / Peter Murdoch",
      "description": "동심원 착시·블랙·화이트·멕시코 컬러 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1968",
      "title": "Mexico 68 Olympic identity",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#191919",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F4F3EC",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#C53E39",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#2F7D7B",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","Lance Wyman / Peter Murdoch","동심원 착시","블랙","화이트","멕시코 컬러","무채색","음악·문화"],
    "name": "Mexico 68 Olympic identity"
  },
  {
    "id": "graphic-ref-gd-057",
    "reference": {
      "creator": "Otl Aicher",
      "description": "픽토그램·청록·백색·모듈 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1972",
      "title": "Munich 72 Olympic pictograms",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#3D97A8",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E8EEE8",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#236F7A",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F0CF6E",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","Otl Aicher","픽토그램","청록","백색","모듈","시안","그린","음악·문화"],
    "name": "Munich 72 Olympic pictograms"
  },
  {
    "id": "graphic-ref-gd-058",
    "reference": {
      "creator": "Massimo Vignelli / team",
      "description": "노선별 다채로운 선·그리드 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1972",
      "title": "New York Subway Map (Vignelli)",
      "method": "inspired",
      "url": "https://www.nytransitmuseum.org/vignelli/"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#E5E7E2",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#D14747",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#258A75",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#316AA5",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["soft-graphic","color-block"],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","Massimo Vignelli / team","노선별 다채로운 선","그리드","무채색","레드","음악·문화"],
    "name": "New York Subway Map (Vignelli)"
  },
  {
    "id": "graphic-ref-gd-059",
    "reference": {
      "creator": "Richard Danne / Bruce Blackburn",
      "description": "우주선형 붉은 워드마크·백지 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1975",
      "title": "NASA Worm visual identity",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피","음악·문화"],
    "colors": [
      {
        "hex": "#D52D36",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F5F4F0",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#202529",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#B9B8B1",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","Richard Danne / Bruce Blackburn","우주선형 붉은 워드마크","백지","레드","무채색","타이포그래피","음악·문화"],
    "name": "NASA Worm visual identity"
  },
  {
    "id": "graphic-ref-gd-060",
    "reference": {
      "creator": "Paul Rand",
      "description": "파란 가로 스트라이프·화이트 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1972",
      "title": "IBM Striped Logo",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#1F6393",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#FFFFFF",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#17466D",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#B9C7D3",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","Paul Rand","파란 가로 스트라이프","화이트","블루","무채색","음악·문화"],
    "name": "IBM Striped Logo"
  },
  {
    "id": "graphic-ref-gd-061",
    "reference": {
      "creator": "Milton Glaser",
      "description": "하트 레드·블랙·화이트 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1977",
      "title": "I ♥ NY logo and campaign",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#202020",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#D7373F",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#FCFCF8",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#B7B6AE",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["accent-color"],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","Milton Glaser","하트 레드","블랙","화이트","무채색","레드","음악·문화"],
    "name": "I ♥ NY logo and campaign"
  },
  {
    "id": "graphic-ref-gd-062",
    "reference": {
      "creator": "Jamie Reid",
      "description": "핑크·옐로·신문 활자 콜라주 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1977",
      "title": "God Save the Queen (Sex Pistols sleeve)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피","음악·문화"],
    "colors": [
      {
        "hex": "#EAA4BD",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#EBC83D",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#23232A",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#E6DFCB",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","Jamie Reid","핑크","옐로","신문 활자 콜라주","옐로우","타이포그래피","음악·문화"],
    "name": "God Save the Queen (Sex Pistols sleeve)"
  },
  {
    "id": "graphic-ref-gd-063",
    "reference": {
      "creator": "Jamie Reid",
      "description": "핫핑크·산성 옐로·블랙 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1977",
      "title": "Never Mind the Bollocks (Sex Pistols sleeve)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#E82F86",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F6E52A",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#202223",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#EAE7CF",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","Jamie Reid","핫핑크","산성 옐로","블랙","핑크","옐로우","음악·문화"],
    "name": "Never Mind the Bollocks (Sex Pistols sleeve)"
  },
  {
    "id": "graphic-ref-gd-064",
    "reference": {
      "creator": "Peter Saville",
      "description": "블랙·화이트 물결 파형 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1979",
      "title": "Unknown Pleasures (Joy Division sleeve)",
      "method": "inspired",
      "url": "https://designmuseum.org/designers/peter-saville"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#121314",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F5F4F1",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#6D6E70",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#CACACA",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","Peter Saville","블랙","화이트 물결 파형","무채색","음악·문화"],
    "name": "Unknown Pleasures (Joy Division sleeve)"
  },
  {
    "id": "graphic-ref-gd-065",
    "reference": {
      "creator": "Peter Saville",
      "description": "플로피디스크 은유·색점 코드 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1983",
      "title": "Blue Monday (New Order sleeve)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#121314",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E7E5E7",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#F2CA33",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#4E8F6F",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","Peter Saville","플로피디스크 은유","색점 코드","무채색","음악·문화"],
    "name": "Blue Monday (New Order sleeve)"
  },
  {
    "id": "graphic-ref-gd-066",
    "reference": {
      "creator": "Peter Saville",
      "description": "회화적인 장미·컬러코드 조합 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1983",
      "title": "Power, Corruption & Lies (New Order sleeve)",
      "method": "inspired",
      "url": "https://designmuseum.org/designers/peter-saville"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#632D36",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#B38577",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#5F7A64",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#E4D9C6",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["vintage-muted"],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","Peter Saville","회화적인 장미","컬러코드 조합","레드","음악·문화"],
    "name": "Power, Corruption & Lies (New Order sleeve)"
  },
  {
    "id": "graphic-ref-gd-067",
    "reference": {
      "creator": "Peter Saville",
      "description": "초상 사진·종이·바랜 브라운 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1985",
      "title": "Low-Life (New Order sleeve)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#4A463D",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#B9A58D",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D8C9B4",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#222426",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["vintage-muted"],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","Peter Saville","초상 사진","종이","바랜 브라운","무채색","오렌지","음악·문화"],
    "name": "Low-Life (New Order sleeve)"
  },
  {
    "id": "graphic-ref-gd-068",
    "reference": {
      "creator": "Hipgnosis / George Hardie",
      "description": "검정·프리즘 빛의 분광 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1973",
      "title": "The Dark Side of the Moon (Pink Floyd sleeve)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#171818",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#EE3E47",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#E6BA3E",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#3094B8",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["deep-color","color-block"],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","Hipgnosis / George Hardie","검정","프리즘 빛의 분광","무채색","레드","음악·문화"],
    "name": "The Dark Side of the Moon (Pink Floyd sleeve)"
  },
  {
    "id": "graphic-ref-gd-069",
    "reference": {
      "creator": "Hipgnosis / Aubrey Powell",
      "description": "화염 인물·갈색·빛바랜 블루 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1975",
      "title": "Wish You Were Here (Pink Floyd sleeve)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#79533C",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#A46F41",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#C4B6A0",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#527C8D",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["vintage-muted"],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","Hipgnosis / Aubrey Powell","화염 인물","갈색","빛바랜 블루","오렌지","음악·문화"],
    "name": "Wish You Were Here (Pink Floyd sleeve)"
  },
  {
    "id": "graphic-ref-gd-070",
    "reference": {
      "creator": "Patrick Nagel",
      "description": "평면적인 크림 피부·레드 립·퍼플 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1982",
      "title": "Rio (Duran Duran sleeve)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#F4D7C1",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#C13248",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#6D487D",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#2E324F",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","Patrick Nagel","평면적인 크림 피부","레드 립","퍼플","오렌지","레드","음악·문화"],
    "name": "Rio (Duran Duran sleeve)"
  },
  {
    "id": "graphic-ref-gd-071",
    "reference": {
      "creator": "Jean-Paul Goude",
      "description": "그래픽 사진·앰버·딥블루 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1985",
      "title": "Island Life (Grace Jones sleeve)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#D6AA67",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#22395B",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#3A2D2B",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#D58A55",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","Jean-Paul Goude","그래픽 사진","앰버","딥블루","오렌지","블루","음악·문화"],
    "name": "Island Life (Grace Jones sleeve)"
  },
  {
    "id": "graphic-ref-gd-072",
    "reference": {
      "creator": "April Greiman",
      "description": "거대 픽셀·스크롤 이미지·파스텔 혼합 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1986",
      "title": "Design Quarterly No. 133: Does It Make Sense?",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#E1C4B1",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#75A4C6",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#CE7998",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#DCC96F",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["soft-graphic"],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","April Greiman","거대 픽셀","스크롤 이미지","파스텔 혼합","오렌지","블루","음악·문화"],
    "name": "Design Quarterly No. 133: Does It Make Sense?"
  },
  {
    "id": "graphic-ref-gd-073",
    "reference": {
      "creator": "Neville Brody",
      "description": "컷아웃 활자·스테이지 사진·대비 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1981–1986",
      "title": "The Face (1980s editorial covers)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피","음악·문화"],
    "colors": [
      {
        "hex": "#29282A",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#EAE6DB",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#C64B47",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#6E8DA8",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","Neville Brody","컷아웃 활자","스테이지 사진","대비","무채색","오렌지","타이포그래피","음악·문화"],
    "name": "The Face (1980s editorial covers)"
  },
  {
    "id": "graphic-ref-gd-074",
    "reference": {
      "creator": "Rudy VanderLans / Zuzana Licko",
      "description": "초기 디지털 비트맵·형태 실험 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1989",
      "title": "Emigre No. 11: Ambition/Fear",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#1B2023",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#D5D5CA",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#6C7C82",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#C64D52",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","Rudy VanderLans / Zuzana Licko","초기 디지털 비트맵","형태 실험","블루","무채색","음악·문화"],
    "name": "Emigre No. 11: Ambition/Fear"
  },
  {
    "id": "graphic-ref-gd-075",
    "reference": {
      "creator": "Barbara Kruger",
      "description": "흑백 얼굴·레드 박스·대문자 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1989",
      "title": "Your Body Is a Battleground",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#1B1B1C",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F1EEE5",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D42C36",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#898B8C",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","70·80년대 기업·음악·대중문화","Barbara Kruger","흑백 얼굴","레드 박스","대문자","무채색","옐로우","음악·문화"],
    "name": "Your Body Is a Battleground"
  },
  {
    "id": "graphic-ref-gd-076",
    "reference": {
      "creator": "David Carson",
      "description": "해체된 활자·사진 질감·노이즈 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1994",
      "title": "Ray Gun magazine (1994 editorial)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#23222C",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#D9D1C7",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#DC543C",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#62777D",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","90년대·초기 디지털","David Carson","해체된 활자","사진 질감","노이즈","블루","오렌지","타이포그래피"],
    "name": "Ray Gun magazine (1994 editorial)"
  },
  {
    "id": "graphic-ref-gd-077",
    "reference": {
      "creator": "David Carson",
      "description": "분절 타이포·회색 사진 표면 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1995",
      "title": "The End of Print (book cover)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#44454A",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#C1B7AF",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#EDE5DC",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#1D1D20",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["vintage-muted"],
    "tags": ["그래픽","90년대·초기 디지털","David Carson","분절 타이포","회색 사진 표면","무채색","오렌지","타이포그래피"],
    "name": "The End of Print (book cover)"
  },
  {
    "id": "graphic-ref-gd-078",
    "reference": {
      "creator": "Paula Scher",
      "description": "목재 활자풍 초대형 글자·레드·블랙 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1994",
      "title": "The Public Theater identity",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#D33D2B",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#12191D",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#F2EEE6",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#D2AA84",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","90년대·초기 디지털","Paula Scher","목재 활자풍 초대형 글자","레드","블랙","블루","타이포그래피"],
    "name": "The Public Theater identity"
  },
  {
    "id": "graphic-ref-gd-079",
    "reference": {
      "creator": "Paula Scher",
      "description": "검정 인물 사진·대형 문자·오렌지 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1995",
      "title": "Bring in 'da Noise, Bring in 'da Funk poster",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#232322",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#D46A2C",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#EDE3CB",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#7C7B75",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["deep-color"],
    "tags": ["그래픽","90년대·초기 디지털","Paula Scher","검정 인물 사진","대형 문자","오렌지","무채색"],
    "name": "Bring in 'da Noise, Bring in 'da Funk poster"
  },
  {
    "id": "graphic-ref-gd-080",
    "reference": {
      "creator": "Stefan Sagmeister",
      "description": "신체에 직접 새긴 타이포·살색·레드 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1999",
      "title": "AIGA Detroit poster (Sagmeister)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#E3B1A3",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#A52D2D",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#292326",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F0D5C6",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","90년대·초기 디지털","Stefan Sagmeister","신체에 직접 새긴 타이포","살색","레드","타이포그래피"],
    "name": "AIGA Detroit poster (Sagmeister)"
  },
  {
    "id": "graphic-ref-gd-081",
    "reference": {
      "creator": "Neville Brody / FontShop",
      "description": "디지털 모듈 글꼴·컬러실험 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1991–1999",
      "title": "Fuse magazine type experiments",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#2C485F",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#C44A64",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#E7C66D",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#C6D8DD",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","90년대·초기 디지털","Neville Brody / FontShop","디지털 모듈 글꼴","컬러실험","블루","레드"],
    "name": "Fuse magazine type experiments"
  },
  {
    "id": "graphic-ref-gd-082",
    "reference": {
      "creator": "The Designers Republic",
      "description": "레이브 아이콘·블랙·산성 블루 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1996",
      "title": "WipEout 2097 game graphics",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#0D0E13",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#2964D9",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#B8DDF2",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#D4E62F",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["deep-color","color-block"],
    "tags": ["그래픽","90년대·초기 디지털","The Designers Republic","레이브 아이콘","블랙","산성 블루","무채색","블루"],
    "name": "WipEout 2097 game graphics"
  },
  {
    "id": "graphic-ref-gd-083",
    "reference": {
      "creator": "The Designers Republic",
      "description": "초소형 유형·하이테크 채도 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1999",
      "title": "Wip3out game graphics",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#121620",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#2E95C2",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#B4CFD0",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#E64C45",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["deep-color"],
    "tags": ["그래픽","90년대·초기 디지털","The Designers Republic","초소형 유형","하이테크 채도","블루","시안"],
    "name": "Wip3out game graphics"
  },
  {
    "id": "graphic-ref-gd-084",
    "reference": {
      "creator": "Tibor Kalman / Oliviero Toscani",
      "description": "사회적 사진과 쨍한 활자 대비 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1991",
      "title": "COLORS magazine No. 1",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#E4CA3C",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#252A2A",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#EBE8D8",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#BA443B",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","90년대·초기 디지털","Tibor Kalman / Oliviero Toscani","사회적 사진과 쨍한 활자 대비","옐로우","무채색","타이포그래피"],
    "name": "COLORS magazine No. 1"
  },
  {
    "id": "graphic-ref-gd-085",
    "reference": {
      "creator": "Tibor Kalman / team",
      "description": "흑백 얼굴·변형된 피부톤·레드 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1993",
      "title": "COLORS magazine Race issue",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#1C1C1C",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E8E6DE",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#BB453C",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#8A6A5D",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","90년대·초기 디지털","Tibor Kalman / team","흑백 얼굴","변형된 피부톤","레드","무채색","옐로우"],
    "name": "COLORS magazine Race issue"
  },
  {
    "id": "graphic-ref-gd-086",
    "reference": {
      "creator": "Shepard Fairey",
      "description": "프로파간다 레드·크림·블랙 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1989–1990s",
      "title": "OBEY Giant campaign",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#C7312B",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E8D9BB",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#22201C",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#A9885F",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","90년대·초기 디지털","Shepard Fairey","프로파간다 레드","크림","블랙","레드","오렌지"],
    "name": "OBEY Giant campaign"
  },
  {
    "id": "graphic-ref-gd-087",
    "reference": {
      "creator": "Barbara Kruger",
      "description": "레드 직사각·검정·화이트 선언 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "1987",
      "title": "I Shop Therefore I Am",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#C63032",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E9E7E2",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#1F1F20",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#A1A09C",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","90년대·초기 디지털","Barbara Kruger","레드 직사각","검정","화이트 선언","레드","오렌지"],
    "name": "I Shop Therefore I Am"
  },
  {
    "id": "graphic-ref-gd-088",
    "reference": {
      "creator": "Anthony Burrill",
      "description": "활판 활자·블랙·화이트 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2004",
      "title": "Work Hard & Be Nice to People",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#191919",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F1F0EA",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#A7A49E",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#D8CBB8",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["vintage-muted"],
    "tags": ["그래픽","90년대·초기 디지털","Anthony Burrill","활판 활자","블랙","화이트","무채색","옐로우","타이포그래피"],
    "name": "Work Hard & Be Nice to People"
  },
  {
    "id": "graphic-ref-gd-089",
    "reference": {
      "creator": "TBWA\\Chiat\\Day / Apple",
      "description": "고채도 단색 배경·검정 실루엣·흰 기기 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2003",
      "title": "iPod Silhouette advertising campaign",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#E0458D",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#161617",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#F5F5F2",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F2BB37",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","90년대·초기 디지털","TBWA\\Chiat\\Day / Apple","고채도 단색 배경","검정 실루엣","흰 기기","핑크","무채색"],
    "name": "iPod Silhouette advertising campaign"
  },
  {
    "id": "graphic-ref-gd-090",
    "reference": {
      "creator": "Stanley Donwood",
      "description": "우주 질감·무지개 네온 타이포 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2007",
      "title": "In Rainbows (Radiohead sleeve)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#25202F",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E64A69",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#3D81BD",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#D4B34E",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["deep-color"],
    "tags": ["그래픽","90년대·초기 디지털","Stanley Donwood","우주 질감","무지개 네온 타이포","퍼플","레드","타이포그래피"],
    "name": "In Rainbows (Radiohead sleeve)"
  },
  {
    "id": "graphic-ref-gd-091",
    "reference": {
      "creator": "Shepard Fairey",
      "description": "레드·오프화이트·블루 기하 사진 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2008",
      "title": "Hope (Obama campaign poster)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#B93540",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E7E4DC",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#345671",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#243E52",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","90년대·초기 디지털","Shepard Fairey","레드","오프화이트","블루 기하 사진","오렌지"],
    "name": "Hope (Obama campaign poster)"
  },
  {
    "id": "graphic-ref-gd-092",
    "reference": {
      "creator": "Experimental Jetset",
      "description": "개폐형 W·적응형 그리드·흑백 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2013",
      "title": "Whitney Museum 'Responsive W' identity",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#111111",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#FFFFFF",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#A7A8A7",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#DBDCD8",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2010년대 브랜딩·커버","Experimental Jetset","개폐형 W","적응형 그리드","흑백","무채색"],
    "name": "Whitney Museum 'Responsive W' identity"
  },
  {
    "id": "graphic-ref-gd-093",
    "reference": {
      "creator": "Pentagram",
      "description": "사다리꼴 하늘 블루·흰 창 모양 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2012",
      "title": "Windows 8 visual identity",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#148BCA",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F9FCFD",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#16608D",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#B5E1F0",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2010년대 브랜딩·커버","Pentagram","사다리꼴 하늘 블루","흰 창 모양","블루","무채색"],
    "name": "Windows 8 visual identity"
  },
  {
    "id": "graphic-ref-gd-094",
    "reference": {
      "creator": "Michael Bierut / Pentagram",
      "description": "블루 H·레드 화살표 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2015",
      "title": "Hillary Clinton 'H' campaign identity",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#2467A8",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#D74443",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#FDFBF5",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#244A69",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2010년대 브랜딩·커버","Michael Bierut / Pentagram","블루 H","레드 화살표","블루","레드"],
    "name": "Hillary Clinton 'H' campaign identity"
  },
  {
    "id": "graphic-ref-gd-095",
    "reference": {
      "creator": "Pentagram",
      "description": "레드·옐로 겹원·화이트 여백 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2016",
      "title": "Mastercard symbol and identity refresh",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#EA3323",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F7B600",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#FFFFFF",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F08B2E",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2010년대 브랜딩·커버","Pentagram","레드","옐로 겹원","화이트 여백","오렌지"],
    "name": "Mastercard symbol and identity refresh"
  },
  {
    "id": "graphic-ref-gd-096",
    "reference": {
      "creator": "COLLINS / Dropbox",
      "description": "다색 조합·블루 워드마크·굵은 프레임 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2017",
      "title": "Dropbox visual identity refresh",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#2255D7",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E57AC0",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#F5BD57",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#2D8B6B",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2010년대 브랜딩·커버","COLLINS / Dropbox","다색 조합","블루 워드마크","굵은 프레임","블루","핑크","타이포그래피"],
    "name": "Dropbox visual identity refresh"
  },
  {
    "id": "graphic-ref-gd-097",
    "reference": {
      "creator": "COLLINS / Mailchimp",
      "description": "옐로·차콜·개성 있는 타이포 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2018",
      "title": "Mailchimp identity refresh",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#F5CF48",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#262624",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#F4EEE1",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#6B624F",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2010년대 브랜딩·커버","COLLINS / Mailchimp","옐로","차콜","개성 있는 타이포","옐로우","무채색","타이포그래피"],
    "name": "Mailchimp identity refresh"
  },
  {
    "id": "graphic-ref-gd-098",
    "reference": {
      "creator": "johnson banks",
      "description": "검정+화이트·콜론//문자 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2017",
      "title": "Mozilla 2017 Open Design identity",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#161616",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F5F5F1",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#7E7F7D",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#C9C7BF",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2010년대 브랜딩·커버","johnson banks","검정+화이트","콜론//문자","무채색"],
    "name": "Mozilla 2017 Open Design identity"
  },
  {
    "id": "graphic-ref-gd-099",
    "reference": {
      "creator": "Spotify in-house",
      "description": "강렬한 보색·데이터 타이포 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2019",
      "title": "Spotify Wrapped 2019 campaign",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#A9E12C",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#DA3EC3",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#1A3260",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F9BD37",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2010년대 브랜딩·커버","Spotify in-house","강렬한 보색","데이터 타이포","그린","핑크","타이포그래피"],
    "name": "Spotify Wrapped 2019 campaign"
  },
  {
    "id": "graphic-ref-gd-100",
    "reference": {
      "creator": "Jonathan Barnbrook",
      "description": "검정 별 형태·암시적인 서체 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2016",
      "title": "Blackstar (David Bowie sleeve)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#131313",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F7F7F5",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#6F6F6F",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#C8C7C2",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2010년대 브랜딩·커버","Jonathan Barnbrook","검정 별 형태","암시적인 서체","무채색","타이포그래피"],
    "name": "Blackstar (David Bowie sleeve)"
  },
  {
    "id": "graphic-ref-gd-101",
    "reference": {
      "creator": "Robert Beatty",
      "description": "핑크·퍼플·파형 착시 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2015",
      "title": "Currents (Tame Impala sleeve)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#CE6B9F",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#7F5DAD",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#2D4260",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#EAA8B9",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": [
      "그래픽",
      "2010년대 브랜딩·커버",
      "Robert Beatty",
      "핑크",
      "퍼플",
      "파형 착시"
    ],
    "name": "Currents (Tame Impala sleeve)"
  },
  {
    "id": "graphic-ref-gd-102",
    "reference": {
      "creator": "Wolfgang Tillmans (photography)",
      "description": "민트 머리·크림 배경·녹색 활자 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2016",
      "title": "Blonde (Frank Ocean cover)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#96BDA5",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#EBE8DA",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#1D5E3E",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#977669",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2010년대 브랜딩·커버","Wolfgang Tillmans (photography)","민트 머리","크림 배경","녹색 활자","그린","옐로우","타이포그래피"],
    "name": "Blonde (Frank Ocean cover)"
  },
  {
    "id": "graphic-ref-gd-103",
    "reference": {
      "creator": "studio / distributor campaign",
      "description": "대형 산세리프·얼굴 사진·그레이블루 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2010",
      "title": "The Social Network (film poster)",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#606E79",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#273342",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#E2D8CE",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F8F7F2",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["vintage-muted"],
    "tags": ["그래픽","2010년대 브랜딩·커버","studio / distributor campaign","대형 산세리프","얼굴 사진","그레이블루","무채색","블루"],
    "name": "The Social Network (film poster)"
  },
  {
    "id": "graphic-ref-gd-104",
    "reference": {
      "creator": "editorial design team",
      "description": "세리프 타이포·화이트·정제된 사진 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2013",
      "title": "The New York Times T Magazine redesign",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#171717",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#FCFCFA",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#989898",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#D0CAC1",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["accent-color","vintage-muted"],
    "tags": ["그래픽","2010년대 브랜딩·커버","editorial design team","세리프 타이포","화이트","정제된 사진","무채색","타이포그래피"],
    "name": "The New York Times T Magazine redesign"
  },
  {
    "id": "graphic-ref-gd-105",
    "reference": {
      "creator": "Chobani / design team",
      "description": "크림·레트로 세리프·식물 컬러 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2017",
      "title": "Chobani identity redesign",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#F5E9D6",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#7B9862",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#C46F62",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#313E35",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["soft-graphic"],
    "tags": ["그래픽","2010년대 브랜딩·커버","Chobani / design team","크림","레트로 세리프","식물 컬러","오렌지","그린"],
    "name": "Chobani identity redesign"
  },
  {
    "id": "graphic-ref-gd-106",
    "reference": {
      "creator": "Wieden+Kennedy London",
      "description": "강한 스포츠사진·대형 블록 타이포 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2018",
      "title": "Nike: Nothing Beats a Londoner campaign",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#1C2228",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E8E7E0",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#C94337",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#5C7789",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2010년대 브랜딩·커버","Wieden+Kennedy London","강한 스포츠사진","대형 블록 타이포","블루","옐로우","타이포그래피"],
    "name": "Nike: Nothing Beats a Londoner campaign"
  },
  {
    "id": "graphic-ref-gd-107",
    "reference": {
      "creator": "LA28 / design collaborators",
      "description": "변화하는 A 타이포·강한 아이콘 색상 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2020",
      "title": "LA28 dynamic Olympic emblem identity",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#F1C04C",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#2A88B0",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D75052",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#2D2C50",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2020~24 아이덴티티","LA28 / design collaborators","변화하는 A 타이포","강한 아이콘 색상","오렌지","시안","타이포그래피"],
    "name": "LA28 dynamic Olympic emblem identity"
  },
  {
    "id": "graphic-ref-gd-108",
    "reference": {
      "creator": "Wolff Olins / Instacart",
      "description": "당근 상징·그린·오렌지·부드러운 타이포 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2022",
      "title": "Instacart identity refresh",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#237544",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F3982C",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#F4F2E8",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#2E4D35",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2020~24 아이덴티티","Wolff Olins / Instacart","당근 상징","그린","오렌지","부드러운 타이포","타이포그래피"],
    "name": "Instacart identity refresh"
  },
  {
    "id": "graphic-ref-gd-109",
    "reference": {
      "creator": "PepsiCo Design",
      "description": "블루·레드·블랙의 강한 대비 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2023",
      "title": "Pepsi visual identity refresh",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#0A4A92",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E23F38",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#16191E",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F5F1E8",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": [
      "그래픽",
      "2020~24 아이덴티티",
      "PepsiCo Design",
      "블루",
      "레드",
      "블랙의 강한 대비"
    ],
    "name": "Pepsi visual identity refresh"
  },
  {
    "id": "graphic-ref-gd-110",
    "reference": {
      "creator": "Pentagram",
      "description": "브랜드 오렌지·흰 스누 아이콘·라운딩 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2023",
      "title": "Reddit visual identity refresh",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#F04424",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#FDFDFB",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#222323",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F3BEA2",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2020~24 아이덴티티","Pentagram","브랜드 오렌지","흰 스누 아이콘","라운딩","레드","무채색"],
    "name": "Reddit visual identity refresh"
  },
  {
    "id": "graphic-ref-gd-111",
    "reference": {
      "creator": "Jones Knowles Ritchie",
      "description": "검정·옐로·텍스처·플래그 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2024",
      "title": "Mozilla Rebrand (flag symbol)",
      "method": "inspired",
      "url": "https://www.mozilla.org/en-US/foundation/annualreport/2024/article/a-rebrand-and-a-call-to-action-reclaim-the-internet/"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#F5D84D",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#1B1B1B",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#F4F4F0",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#8C8855",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2020~24 아이덴티티","Jones Knowles Ritchie","검정","옐로","텍스처","플래그","옐로우","무채색"],
    "name": "Mozilla Rebrand (flag symbol)"
  },
  {
    "id": "graphic-ref-gd-112",
    "reference": {
      "creator": "Wolff Olins",
      "description": "새 파란 로고·고대비 타이포 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2024",
      "title": "Decathlon new brand identity",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#2865D3",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F5F5F4",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#182D53",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#9DB8EF",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2020~24 아이덴티티","Wolff Olins","새 파란 로고","고대비 타이포","블루","무채색","타이포그래피"],
    "name": "Decathlon new brand identity"
  },
  {
    "id": "graphic-ref-gd-113",
    "reference": {
      "creator": "Paris 2024 design team",
      "description": "아르데코 테마·파스텔 올림픽 그래픽 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2024",
      "title": "Paris 2024 Olympic graphic system",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["아르누보·아르데코"],
    "colors": [
      {
        "hex": "#E8CC92",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#C6DDE3",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#8BA8BF",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#D1A3B6",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2020~24 아이덴티티","Paris 2024 design team","아르데코 테마","파스텔 올림픽 그래픽","오렌지","시안","아르누보·아르데코"],
    "name": "Paris 2024 Olympic graphic system"
  },
  {
    "id": "graphic-ref-gd-114",
    "reference": {
      "creator": "Jones Knowles Ritchie",
      "description": "과장된 과일 일러스트·오렌지·블루 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2023",
      "title": "Fanta global brand refresh",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["일러스트레이션"],
    "colors": [
      {
        "hex": "#F57A24",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#1765BD",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#F6D836",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F5EFE3",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2020~24 아이덴티티","Jones Knowles Ritchie","과장된 과일 일러스트","오렌지","블루","일러스트레이션"],
    "name": "Fanta global brand refresh"
  },
  {
    "id": "graphic-ref-gd-115",
    "reference": {
      "creator": "BrandOpus",
      "description": "레트로 젤리 로고·레드·블루 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2023",
      "title": "Jell-O visual identity refresh",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#D7353F",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#2E66A4",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#F8E6C9",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F7B44A",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": [
      "그래픽",
      "2020~24 아이덴티티",
      "BrandOpus",
      "레트로 젤리 로고",
      "레드",
      "블루"
    ],
    "name": "Jell-O visual identity refresh"
  },
  {
    "id": "graphic-ref-gd-116",
    "reference": {
      "creator": "festival design team",
      "description": "축제 포스터 시스템·타이포 변주 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2024",
      "title": "Sundance Film Festival 2024 visual campaign",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피","음악·문화"],
    "colors": [
      {
        "hex": "#212022",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F2EAE3",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D9686B",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#6D9DC7",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2020~24 아이덴티티","festival design team","축제 포스터 시스템","타이포 변주","무채색","오렌지","타이포그래피","음악·문화"],
    "name": "Sundance Film Festival 2024 visual campaign"
  },
  {
    "id": "graphic-ref-gd-117",
    "reference": {
      "creator": "Spotify in-house",
      "description": "시각적 데이터 레이어·네온·퍼플 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2023",
      "title": "Spotify Wrapped 2023 campaign",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#7CE336",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#8B47CF",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#E3BDF8",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#183C5A",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2020~24 아이덴티티","Spotify in-house","시각적 데이터 레이어","네온","퍼플","그린"],
    "name": "Spotify Wrapped 2023 campaign"
  },
  {
    "id": "graphic-ref-gd-118",
    "reference": {
      "creator": "Pentagram",
      "description": "대조적인 타이포·미술관 표지 체계 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2024",
      "title": "Guggenheim identity refresh",
      "method": "inspired",
      "url": "https://www.guggenheim.org/press-release/guggenheim-unveils-new-visual-identity-uniting-its-global-constellation-of-museums"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#1E2123",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F9F9F6",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D8D3C8",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#81807C",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["accent-color","vintage-muted"],
    "tags": ["그래픽","2020~24 아이덴티티","Pentagram","대조적인 타이포","미술관 표지 체계","무채색","타이포그래피"],
    "name": "Guggenheim identity refresh"
  },
  {
    "id": "graphic-ref-gd-119",
    "reference": {
      "creator": "Pentagram / V&A",
      "description": "검정·화이트·전시 사진·타이포 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2023–2024",
      "title": "Pentagram V&A East identity",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#161719",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F8F7F3",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D6AD7A",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#6C6B67",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["accent-color"],
    "tags": ["그래픽","2020~24 아이덴티티","Pentagram / V&A","검정","화이트","전시 사진","타이포","무채색","타이포그래피"],
    "name": "Pentagram V&A East identity"
  },
  {
    "id": "graphic-ref-gd-120",
    "reference": {
      "creator": "UnderConsideration",
      "description": "장식적 행사별 시스템·배색 변주 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2024",
      "title": "The 2024 Brand New Conference visual identity",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#A35C9B",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#DDE552",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D64D3B",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#2F3335",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2020~24 아이덴티티","UnderConsideration","장식적 행사별 시스템","배색 변주","핑크","옐로우"],
    "name": "The 2024 Brand New Conference visual identity"
  },
  {
    "id": "graphic-ref-gd-121",
    "reference": {
      "creator": "ManvsMachine",
      "description": "실험적 타이포·기계적 3D 질감 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2024",
      "title": "OFFF Barcelona 2024 LIFFFE/FFFORMS campaign",
      "method": "inspired",
      "url": "https://mvsm.com/project/lifffe-ffforms"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#1B1D1E",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#EDE8E3",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#B2B2AD",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#B8E12F",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2020~24 아이덴티티","ManvsMachine","실험적 타이포","기계적 3D 질감","무채색","오렌지","타이포그래피"],
    "name": "OFFF Barcelona 2024 LIFFFE/FFFORMS campaign"
  },
  {
    "id": "graphic-ref-gd-122",
    "reference": {
      "creator": "Studio Nari",
      "description": "가변 워드마크·음악 행사 포스터 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2025",
      "title": "Field Day Festival 2025 rebrand",
      "method": "inspired",
      "url": "https://www.itsnicethat.com/articles/studio-nari-field-day-graphic-design-project-240225"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피","음악·문화"],
    "colors": [
      {
        "hex": "#22202B",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#FC854E",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#CCB9FF",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#D0E75F",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2025~26 최신 실무 사례","Studio Nari","가변 워드마크","음악 행사 포스터","블루","오렌지","타이포그래피","음악·문화"],
    "name": "Field Day Festival 2025 rebrand"
  },
  {
    "id": "graphic-ref-gd-123",
    "reference": {
      "creator": "Studio Dial",
      "description": "열지도 개념·지도형 타이포 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2025",
      "title": "It's Nice That Ones to Watch 2025 identity",
      "method": "inspired",
      "url": "https://studiodial.com/work/ones-to-watch/"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#EA4C4B",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#EFC64E",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#3B746B",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F2EBDD",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2025~26 최신 실무 사례","Studio Dial","열지도 개념","지도형 타이포","레드","오렌지","타이포그래피"],
    "name": "It's Nice That Ones to Watch 2025 identity"
  },
  {
    "id": "graphic-ref-gd-124",
    "reference": {
      "creator": "Pentagram",
      "description": "페스티벌 타이포 시스템·시각 구조 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2025",
      "title": "London Design Festival 2025 identity",
      "method": "inspired",
      "url": "https://www.pentagram.com/work/london-design-festival-2025"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피","음악·문화"],
    "colors": [
      {
        "hex": "#111B27",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F1EAE1",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#CB673F",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#A8BFC0",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2025~26 최신 실무 사례","Pentagram","페스티벌 타이포 시스템","시각 구조","블루","오렌지","타이포그래피","음악·문화"],
    "name": "London Design Festival 2025 identity"
  },
  {
    "id": "graphic-ref-gd-125",
    "reference": {
      "creator": "COLLINS",
      "description": "강한 글자·프로그램별 다채로운 그래픽 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2025",
      "title": "OFFF Barcelona 2025 25th anniversary identity",
      "method": "inspired",
      "url": "https://www.offf.barcelona/post/offf-barcelona-celebrated-25-years"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#F55151",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#162529",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#C8FF39",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#D2A3F3",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2025~26 최신 실무 사례","COLLINS","강한 글자","프로그램별 다채로운 그래픽","레드","시안"],
    "name": "OFFF Barcelona 2025 25th anniversary identity"
  },
  {
    "id": "graphic-ref-gd-126",
    "reference": {
      "creator": "Studio Lotta Nieminen",
      "description": "정교한 배색·세리프·여백 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2025",
      "title": "Erly brand identity",
      "method": "inspired",
      "url": "https://www.itsnicethat.com/graphic-design?page=14"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#F1E9DD",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#563A37",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#A4AA91",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#D4A398",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["soft-graphic","vintage-muted"],
    "tags": ["그래픽","2025~26 최신 실무 사례","Studio Lotta Nieminen","정교한 배색","세리프","여백","오렌지","레드"],
    "name": "Erly brand identity"
  },
  {
    "id": "graphic-ref-gd-127",
    "reference": {
      "creator": "design team / Soho Radio",
      "description": "DJ 프로필을 조합하는 가변 도형 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2025",
      "title": "Soho Radio rebrand",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#E94C4D",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#282A30",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#F1EBCF",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#A6D8CE",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2025~26 최신 실무 사례","design team / Soho Radio","DJ 프로필을 조합하는 가변 도형","레드","무채색"],
    "name": "Soho Radio rebrand"
  },
  {
    "id": "graphic-ref-gd-128",
    "reference": {
      "creator": "Wolff Olins",
      "description": "음악 레이블형 브랜드 구성 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2025",
      "title": "BMG new brand identity",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#111820",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E8E2D9",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D14B39",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#5B7193",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2025~26 최신 실무 사례","Wolff Olins","음악 레이블형 브랜드 구성","블루","오렌지","음악·문화"],
    "name": "BMG new brand identity"
  },
  {
    "id": "graphic-ref-gd-129",
    "reference": {
      "creator": "Wolff Olins",
      "description": "뷰티 브랜드 패키징·리듬감 있는 타입 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2025",
      "title": "Benefit rebrand",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#ECAEB7",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#C63E5A",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#F4EACD",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#2C3439",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["soft-graphic","color-block"],
    "tags": ["그래픽","2025~26 최신 실무 사례","Wolff Olins","뷰티 브랜드 패키징","리듬감 있는 타입","레드"],
    "name": "Benefit rebrand"
  },
  {
    "id": "graphic-ref-gd-130",
    "reference": {
      "creator": "Jones Knowles Ritchie",
      "description": "데이터 기반 입체·유동성 그래픽 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2025",
      "title": "Centersquare rebrand",
      "method": "inspired",
      "url": "https://www.fastcompany.com/91388508/graphic-design-branding-innovation-by-design-2025"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#3C56AB",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#B1E6D2",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#1C2248",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#E6C96C",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2025~26 최신 실무 사례","Jones Knowles Ritchie","데이터 기반 입체","유동성 그래픽","블루","그린"],
    "name": "Centersquare rebrand"
  },
  {
    "id": "graphic-ref-gd-131",
    "reference": {
      "creator": "Saint Urbain",
      "description": "숙박 브랜드 타이포·따뜻한 색 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2025",
      "title": "Now Now Hotel identity",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#D8A278",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F3E5D2",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#464438",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#879385",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2025~26 최신 실무 사례","Saint Urbain","숙박 브랜드 타이포","따뜻한 색","오렌지","타이포그래피"],
    "name": "Now Now Hotel identity"
  },
  {
    "id": "graphic-ref-gd-132",
    "reference": {
      "creator": "Frontify / design partners",
      "description": "가변 레터링·키네틱 형태 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2025",
      "title": "Frontify Future custom type identity",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#1C1C28",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E7DAEC",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#CF6BDB",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#9AE6D7",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2025~26 최신 실무 사례","Frontify / design partners","가변 레터링","키네틱 형태","블루","퍼플","타이포그래피"],
    "name": "Frontify Future custom type identity"
  },
  {
    "id": "graphic-ref-gd-133",
    "reference": {
      "creator": "Companion–Platform",
      "description": "계절에 따라 바뀌는 로고 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2025",
      "title": "Uncommon Fruits identity",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#C9E14F",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#ED653F",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#436F5C",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#FAE9C6",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2025~26 최신 실무 사례","Companion–Platform","계절에 따라 바뀌는 로고","옐로우","레드"],
    "name": "Uncommon Fruits identity"
  },
  {
    "id": "graphic-ref-gd-134",
    "reference": {
      "creator": "Manual",
      "description": "다색 사회적 커뮤니티 그래픽 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2025",
      "title": "Obama Foundation identity expansion",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#2F7EAA",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E5B645",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#BB524A",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#E8E3D5",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2025~26 최신 실무 사례","Manual","다색 사회적 커뮤니티 그래픽","블루","오렌지"],
    "name": "Obama Foundation identity expansion"
  },
  {
    "id": "graphic-ref-gd-135",
    "reference": {
      "creator": "design studio / Wim",
      "description": "빵가루·밀가루 질감·먹색 활자 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2025",
      "title": "Wim Bakery brand identity",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#E6C9A1",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#2C2A28",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#AA8265",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F1E6D4",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2025~26 최신 실무 사례","design studio / Wim","빵가루","밀가루 질감","먹색 활자","오렌지","무채색","타이포그래피"],
    "name": "Wim Bakery brand identity"
  },
  {
    "id": "graphic-ref-gd-136",
    "reference": {
      "creator": "Studio Dumbar",
      "description": "행사형 모션 타이포·디지털 색층 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2025",
      "title": "OpenAI DevDay 2025 event graphics",
      "method": "inspired",
      "url": "https://www.unblock.coffee/awards/d-ad/2026/graphic-design/"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#161D29",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#51D9E8",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#C36DDF",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F4E8DE",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2025~26 최신 실무 사례","Studio Dumbar","행사형 모션 타이포","디지털 색층","블루","시안","타이포그래피"],
    "name": "OpenAI DevDay 2025 event graphics"
  },
  {
    "id": "graphic-ref-gd-137",
    "reference": {
      "creator": "Marina Willer / Pentagram",
      "description": "실물 광원 투사로 만든 레터링 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2026",
      "title": "BFI London Film Festival 2026 identity",
      "method": "inspired",
      "url": "https://www.pentagram.com/work/bfi-london-film-festival?page=1&rel=search"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피","음악·문화"],
    "colors": [
      {
        "hex": "#2B0739",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#EF4A60",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#3CC6D8",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F5BA71",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["deep-color","color-block"],
    "tags": ["그래픽","2025~26 최신 실무 사례","Marina Willer / Pentagram","실물 광원 투사로 만든 레터링","퍼플","레드","타이포그래피","음악·문화"],
    "name": "BFI London Film Festival 2026 identity"
  },
  {
    "id": "graphic-ref-gd-138",
    "reference": {
      "creator": "Domenic Lippa / Pentagram",
      "description": "프레이밍 시스템·조합형 장면 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2026",
      "title": "London Design Festival 2026 Framing LDF",
      "method": "inspired",
      "url": "https://www.pentagram.com/work/london-design-festival-2026"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#151B20",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#EDEDE8",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#EF7F4E",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#84ACB1",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2025~26 최신 실무 사례","Domenic Lippa / Pentagram","프레이밍 시스템","조합형 장면","블루","옐로우","음악·문화"],
    "name": "London Design Festival 2026 Framing LDF"
  },
  {
    "id": "graphic-ref-gd-139",
    "reference": {
      "creator": "Pentagram",
      "description": "블록 장식문자·대담한 글꼴 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2026",
      "title": "Storefront Gala 2026 identity",
      "method": "inspired",
      "url": "https://www.pentagram.com/work/storefront-gala-2026"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#1A1C20",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F4E9D8",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D4A6BA",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#E66C4D",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2025~26 최신 실무 사례","Pentagram","블록 장식문자","대담한 글꼴","무채색","오렌지"],
    "name": "Storefront Gala 2026 identity"
  },
  {
    "id": "graphic-ref-gd-140",
    "reference": {
      "creator": "Uncommon Creative Studio",
      "description": "곰팡이 배양 패턴·바이오 텍스처 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2026",
      "title": "OFFF Barcelona 2026 Cultured campaign",
      "method": "inspired",
      "url": "https://www.offf.barcelona/post/offf-barcelona-2026-visual-campaign-by-uncommon-studio"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#A9C2A1",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#C1A38C",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#3B5844",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#DCCFC1",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["vintage-muted"],
    "tags": ["그래픽","2025~26 최신 실무 사례","Uncommon Creative Studio","곰팡이 배양 패턴","바이오 텍스처","그린","오렌지"],
    "name": "OFFF Barcelona 2026 Cultured campaign"
  },
  {
    "id": "graphic-ref-gd-141",
    "reference": {
      "creator": "KONTEJNER",
      "description": "라임 형광 바탕·기계형 타이포 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2026",
      "title": "Device Art Festival 2026 identity",
      "method": "inspired",
      "url": "https://kontejner.org/"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피","음악·문화"],
    "colors": [
      {
        "hex": "#C9EE3C",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#151A1A",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#F6F7E2",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#818C59",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2025~26 최신 실무 사례","KONTEJNER","라임 형광 바탕","기계형 타이포","그린","무채색","타이포그래피","음악·문화"],
    "name": "Device Art Festival 2026 identity"
  },
  {
    "id": "graphic-ref-gd-142",
    "reference": {
      "creator": "BIEFF design collaborators",
      "description": "타이포 파편·연보라·그레이 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2026",
      "title": "BIEFF 2026 Vanishing Futures poster",
      "method": "inspired",
      "url": "https://agenda.liternet.ro/articol/31801/Comunicat-de-presa/Festivalul-International-de-Film-Experimental-Bucuresti-BIEFF-revine-intre-23-si-30-septembrie-2026-sub-tema-Vanishing-Futures.html"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#B6A5DB",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#5C536B",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D9D6DC",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#1D1E21",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["vintage-muted"],
    "tags": ["그래픽","2025~26 최신 실무 사례","BIEFF design collaborators","타이포 파편","연보라","그레이","블루","퍼플","타이포그래피"],
    "name": "BIEFF 2026 Vanishing Futures poster"
  },
  {
    "id": "graphic-ref-gd-143",
    "reference": {
      "creator": "Baillat Studio",
      "description": "시안·민트 분할·검정 모듈 서체 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2025",
      "title": "MUTEK Montréal 26 poster",
      "method": "inspired",
      "url": "https://montreal.mutek.org/en/news/official-poster-for-the-26th-edition"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#28CFD0",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#AEF4CC",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#1D1E23",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#F8F9EE",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2025~26 최신 실무 사례","Baillat Studio","시안","민트 분할","검정 모듈 서체","그린","타이포그래피"],
    "name": "MUTEK Montréal 26 poster"
  },
  {
    "id": "graphic-ref-gd-144",
    "reference": {
      "creator": "HKU / festival design team",
      "description": "민트 배경·종이 콜라주·블랙 레터 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2026",
      "title": "HKU Exposure 2026 identity",
      "method": "inspired",
      "url": "https://www.hku.nl/agenda/exposure-2026"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#A7E7CB",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#161917",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#F3EADB",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#C47365",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2025~26 최신 실무 사례","HKU / festival design team","민트 배경","종이 콜라주","블랙 레터","그린","무채색","음악·문화"],
    "name": "HKU Exposure 2026 identity"
  },
  {
    "id": "graphic-ref-gd-145",
    "reference": {
      "creator": "Museum für Gestaltung Zürich",
      "description": "검정·화이트 구조+형광 곡선 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2025–2026",
      "title": "Museum of the Future: 17 Digital Experiments poster",
      "method": "inspired",
      "url": "https://museum-gestaltung.ch/de/ausstellung/museum-future"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#191A1D",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F7F7F6",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#C7FF4F",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#B1B6B9",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["accent-color"],
    "tags": ["그래픽","2025~26 최신 실무 사례","Museum für Gestaltung Zürich","검정","화이트 구조+형광 곡선","무채색"],
    "name": "Museum of the Future: 17 Digital Experiments poster"
  },
  {
    "id": "graphic-ref-gd-146",
    "reference": {
      "creator": "JKR / Studio DRAMA",
      "description": "드로잉 타입·다이내믹 레터링 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2026",
      "title": "D&AD Drawn to D&AD identity",
      "method": "inspired",
      "url": "https://www.oneclub.org/AWARDS/THEONESHOW/-archive/awards/2026/354/all/Digital%2BProduct"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["타이포그래피"],
    "colors": [
      {
        "hex": "#E5D2C4",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#171818",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D6514F",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#8B90B6",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2025~26 최신 실무 사례","JKR / Studio DRAMA","드로잉 타입","다이내믹 레터링","오렌지","무채색","타이포그래피"],
    "name": "D&AD Drawn to D&AD identity"
  },
  {
    "id": "graphic-ref-gd-147",
    "reference": {
      "creator": "MullenLowe",
      "description": "브랜드 시스템·전시 비주얼 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2026",
      "title": "The Branch Museum of Design visual identity",
      "method": "inspired",
      "url": ""
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#2C393F",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#E6B781",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#F3EDE4",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#BD6860",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2025~26 최신 실무 사례","MullenLowe","브랜드 시스템","전시 비주얼","시안","오렌지"],
    "name": "The Branch Museum of Design visual identity"
  },
  {
    "id": "graphic-ref-gd-148",
    "reference": {
      "creator": "Andrea Trabucco-Campos / Pentagram",
      "description": "문장 텍스트가 블록이 되는 조판 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2026",
      "title": "Poetry Foundation identity refresh",
      "method": "inspired",
      "url": "https://www.pentagram.com/"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": [],
    "colors": [
      {
        "hex": "#1A1B1C",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#F5F4EF",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#D8D5CF",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#9E9A95",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2025~26 최신 실무 사례","Andrea Trabucco-Campos / Pentagram","문장 텍스트가 블록이 되는 조판","무채색"],
    "name": "Poetry Foundation identity refresh"
  },
  {
    "id": "graphic-ref-gd-149",
    "reference": {
      "creator": "festival design team",
      "description": "입체 거친 문자·블랙 포스터 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2025",
      "title": "International Assembly 2025 identity",
      "method": "inspired",
      "url": "https://www.creativeboom.com/inspiration/international-assembly-identity-when-bending-the-rules-of-typography-makes-perfect-sense/"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#202125",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#BAB0AA",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#F5E9D5",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#E0A24F",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": [],
    "tags": ["그래픽","2025~26 최신 실무 사례","festival design team","입체 거친 문자","블랙 포스터","무채색","음악·문화"],
    "name": "International Assembly 2025 identity"
  },
  {
    "id": "graphic-ref-gd-150",
    "reference": {
      "creator": "Lit & Luz design team",
      "description": "3D 기하 로고·주황·노랑·민트 · 실제 작품 이미지를 픽셀 단위로 측정한 값이 아님. 원본의 확정/공식 색으로 사용하지 말 것.",
      "year": "2025–2026",
      "title": "Lit & Luz Festival 2025–26 identity",
      "method": "inspired",
      "url": "https://www.litluz.org/lit-luz-cdmx-2026-proximamente"
    },
    "scheme": "free",
    "graphicOrigin": "inspired",
    "collection": "graphic",
    "graphicStyles": ["음악·문화"],
    "colors": [
      {
        "hex": "#F37735",
        "role": "base",
        "ratio": 50
      },
      {
        "hex": "#EAD84B",
        "role": "sub",
        "ratio": 25
      },
      {
        "hex": "#92C9B4",
        "role": "sub",
        "ratio": 15
      },
      {
        "hex": "#262B34",
        "role": "point",
        "ratio": 10
      }
    ],
    "graphicCategories": ["color-block"],
    "tags": ["그래픽","2025~26 최신 실무 사례","Lit & Luz design team","3D 기하 로고","주황","노랑","민트","오렌지","옐로우","음악·문화"],
    "name": "Lit & Luz Festival 2025–26 identity"
  },

  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "검은 활판 잉크·따뜻한 인쇄지",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-001",
    "name": "잉크 블랙과 낡은 옥수수지",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#20201E"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#E9D7AA"
      }
    ]
  },
  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "주홍 잉크·거친 크림 종이",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-002",
    "name": "버밀리언 전단",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#BB322A"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#F0E0BC"
      }
    ]
  },
  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "깊은 청색 활자·미색 지면",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-003",
    "name": "프러시안 블루 견본",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#173E63"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#E9E0CA"
      }
    ]
  },
  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "녹색 양각 글자·티켓",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-004",
    "name": "포레스트 그린 입장권",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#254C3D"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#E8DFBE"
      }
    ]
  },
  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "보라 단색 잉크·황색 종이",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-005",
    "name": "바이올렛 극장 표",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#543E70"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#F3DDB7"
      }
    ]
  },
  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "갈색 활판·오래된 목록 표지",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-006",
    "name": "코코아 카탈로그",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#543C32"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#E8CDA7"
      }
    ]
  },
  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "식품 라벨용 코발트·오프화이트",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-007",
    "name": "코발트 라벨",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#174FA3"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#F7EBDD"
      }
    ]
  },
  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "적홍 잉크·분홍기 도는 지면",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-008",
    "name": "카민 인쇄 실험",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#A51E37"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#F2E1DB"
      }
    ]
  },
  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "차가운 회백지·진한 남색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-009",
    "name": "인디고 영수증",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#1D416C"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#C9D0C8"
      }
    ]
  },
  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "흑연 잉크·겨자색 포장재",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-010",
    "name": "머스터드 패키지",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#3A3730"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#D8AE38"
      }
    ]
  },
  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "벽돌색 글자·연베이지",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-011",
    "name": "벽돌색 공연표",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#9C3B30"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#F1D9C3"
      }
    ]
  },
  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "청록 활자·약병 라벨",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-012",
    "name": "박하색 의약 라벨",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#256F64"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#EAF0D9"
      }
    ]
  },
  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "황토 종이·브라운 활자",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-013",
    "name": "오커 철도 전단",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#6A3A23"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#F5CC65"
      }
    ]
  },
  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "짙은 플럼·연라벤더",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-014",
    "name": "라벤더 향수 라벨",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#50385A"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#E4D1E7"
      }
    ]
  },
  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "회청 잉크·옅은 회민트",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-015",
    "name": "청회색 고지서",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#344F59"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#D9E3DF"
      }
    ]
  },
  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "검정 활자·석류색 면",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-016",
    "name": "잉크와 석류 표찰",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#251C20"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#CC5165"
      }
    ]
  },
  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "검정 인쇄·주황색 판",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-017",
    "name": "오렌지 서커스 전단",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#242528"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#EC793C"
      }
    ]
  },
  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "선명한 청색·황마색 종이",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-018",
    "name": "코발트와 황마",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#2949A4"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#E6C991"
      }
    ]
  },
  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "코랄 판면·바랜 종이",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-019",
    "name": "산호색 도서관 카드",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#D36254"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#FAEEE2"
      }
    ]
  },
  {
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "2도 인쇄·레터프레스",
      "1900~60년대 2도 인쇄·레터프레스",
      "실크스크린·레터프레스",
      "2색 대비/듀오톤",
      "리소그래프·인쇄"
    ],
    "note": "와인 잉크·담황 종이",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-020",
    "name": "와인색 박람회 입장권",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#5C2037"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#F6E5C5"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "붉은 면·깨끗한 백지",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-021",
    "name": "빨간 대각선 구조",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#D52929"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#F2F0E7"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "파란 모듈·백색 그리드",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-022",
    "name": "블루 모듈 그리드",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#1458AD"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#F9F9F6"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "암홍 색면·검정 활자",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-023",
    "name": "기하학적 암홍",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#BA2449"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#201B1C"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "채도 높은 노랑·먹색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-024",
    "name": "옐로 신호표",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#E6CD2E"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#16191C"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "오렌지 띠·백색 여백",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-025",
    "name": "비대칭 오렌지 그리드",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#EB612C"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#F2EDE0"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "라임 사각형·딥블루",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-026",
    "name": "스위스 라임 모듈",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#A5DB37"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#18313D"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "청록 정보 면·짙은 회녹",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-027",
    "name": "시안 정보 블록",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#00A9B5"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#20393A"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "원색 빨강·코발트 대비",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-028",
    "name": "분할 레드블루",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#D7372E"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#234AA1"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "정제된 검정과 연회색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-029",
    "name": "미니멀 블랙 베이지",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#1F2124"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#F0EBE2"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "숫자 포인트·청회색 지면",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-030",
    "name": "레드 인덱스 번호",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#B61927"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#DCE2E4"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "제비꽃색 그리드·밝은 회색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-031",
    "name": "그리드 퍼플",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#5448A1"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#E6E6E2"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "진청록 활자·밝은 민트",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-032",
    "name": "포스터 다크그린",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#163D3C"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#D5EDE6"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "노랑 도형·남색 배경",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-033",
    "name": "정사각 옐로블루",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#F2BE2E"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#203E7B"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "핑크 헤드라인·화이트",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-034",
    "name": "라디칼 핑크 화이트",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#E04884"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#F9F5F0"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "녹색 장축·연베이지 여백",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-035",
    "name": "초록 수직기둥",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#15594B"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#EFE9D9"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "주황 강조·검정 바탕",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-036",
    "name": "오렌지 블랙 매니페스트",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#F16A2F"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#111111"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "파란 포인트·어둠",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-037",
    "name": "코발트와 차콜",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#2765C4"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#242830"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "적색 가로선·웜그레이",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-038",
    "name": "레드 수평선",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#CB4035"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#E9E8E1"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "은회색 면·짙은 남색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-039",
    "name": "모노 실버 네이비",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#C8CED0"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#172F46"
      }
    ]
  },
  {
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "구성주의·스위스 모더니즘",
      "구성주의·스위스 2색",
      "색면·격자·타이포그래피",
      "2색 대비/듀오톤",
      "스위스·모더니즘"
    ],
    "note": "보라 인쇄·가까운 블랙",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-040",
    "name": "전시표의 퍼플 블랙",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#6D52B2"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#19161E"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "검은 복사 텍스트·형광핑크",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-041",
    "name": "복사기 블랙 네온핑크",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#191819"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#F0469E"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "선명한 투쟁 레드·먹색",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-042",
    "name": "스트라이크 레드",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#D11E1E"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#151515"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "산성 옐로 잉크·검정",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-043",
    "name": "안전핀 옐로",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#E8E038"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#202023"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "선명한 그린·전단 핑크",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-044",
    "name": "펑크 그린 핑크",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#2FA36E"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#ED56A9"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "분홍기 주황·푸른 흑색",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-045",
    "name": "포토카피 오렌지",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#EF752D"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#151D20"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "군청 스텐실·바랜 종이",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-046",
    "name": "광장 스텐실 블루",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#2C5E9B"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#E7E9DF"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "형광 라임·먹색",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-047",
    "name": "한밤의 반핵 스티커",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#C5E544"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#26262B"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "주황기 보라·전단 노랑",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-048",
    "name": "팝 진 보라",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#8F42B8"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#F4E66A"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "카민 제목·회색 뉴스지",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-049",
    "name": "뉴스 레드 웜그레이",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#CA2D40"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#CEC8BD"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "흰 타이포·검정 복사면",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-050",
    "name": "흑백 반전 전단",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#F7F7F2"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#202020"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "낡은 회녹·형광 오렌지",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-051",
    "name": "그런지 그레이 오렌지",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#555D58"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#F68C3B"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "초록 오려붙임·먹색",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-052",
    "name": "컷아웃 초록 블랙",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#4DAB71"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#16191A"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "거친 와인 브러시·크림",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-053",
    "name": "브러시 레드 아이보리",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#9A132C"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#F6E7D0"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "강한 푸른 면·노랑 글자",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-054",
    "name": "콜라주 블루 옐로",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#2F66D1"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#FFD849"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "먹자주·라임 스티커",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-055",
    "name": "포스터 와인 라임",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#652340"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#CFDE3D"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "황갈색 구겨진 종이·진한 잉크",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-056",
    "name": "미색 흑잉크 복사",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#BFB7A5"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#272525"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "보라 표지·붉은 인쇄",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-057",
    "name": "저항의 퍼플 레드",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#7C388F"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#DA3034"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "시멘트 회색·검정",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-058",
    "name": "스텐실 시멘트 블랙",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#AEB0A8"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#1E1F21"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "형광 오렌지·미색",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-059",
    "name": "형광 오렌지 지면",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#F07723"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#F1ECD8"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "펑크·진·시위 그래픽",
      "1970~90년대 진·펑크·시위",
      "복사기·스텐실·콜라주",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "복사 청색·버건디",
    "researchUrl": "https://peoplesgdarchive.org/",
    "id": "graphic-gd2-060",
    "name": "진 블루 보르도",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#35588D"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#8E253C"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "해피페이스 노랑·검정",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-061",
    "name": "아시드 하우스 스마일",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#F7E529"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#1C1B1E"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "전자적 시안·딥블랙",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-062",
    "name": "사이버 시안 블랙",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#00DFF2"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#090F1F"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "바이올렛 발광·밤색 네이비",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-063",
    "name": "버추얼 바이올렛",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#8A38F6"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#171B36"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "브라우저 링크블루·화이트",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-064",
    "name": "초기 웹 링크블루",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#0000EE"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#F3F3EF"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "신호 오렌지·금속 회색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-065",
    "name": "플로피 오렌지 실버",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#F36B2D"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#C7CCCF"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "인광 초록·CRT 블랙",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-066",
    "name": "그린 터미널",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#68F257"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#101A13"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "네온핑크·디지털 네이비",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-067",
    "name": "일렉트로 핑크 네이비",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#F12BA5"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#1E2B55"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "스캐너 블루·회백",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-068",
    "name": "스캐너 로열블루",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#3158F5"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#EEF0E9"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "네온 오렌지·진청",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-069",
    "name": "레이브 산성 오렌지",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#FE7930"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#18213B"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "네온 레몬·강한 퍼플",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-070",
    "name": "글리치 레몬 퍼플",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#F9E32D"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#7435BC"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "픽셀형 핑크·블랙",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-071",
    "name": "픽셀 핑크 블랙",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#FF6BB1"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#141114"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "형광 민트·우주 보라",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-072",
    "name": "신스웨이브 민트",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#6FF3DC"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#1A133D"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "중성 회색·푸른 픽셀",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-073",
    "name": "유니코드 회색 파랑",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#A0A8BB"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#254EB4"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "디지털 배너 레드·밝은 크림",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-074",
    "name": "인터넷 배너 레드",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#F24333"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#FFF2D6"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "로열 블루·형광 옐로",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-075",
    "name": "형광 블루 옐로",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#2459FE"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#FAE522"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "네온 그린·깊은 보라",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-076",
    "name": "스페이스 그린 퍼플",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#5CF489"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#5421AA"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "흑백 스캔·청록 토너",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-077",
    "name": "팩스 잉크 시안",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#1E1F21"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#6FDADD"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "디지털 코랄·차콜",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-078",
    "name": "디지털 코랄 차콜",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#FB5F78"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#222833"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "산성 라임·마젠타",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-079",
    "name": "사이버 라임 마젠타",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#BCFE28"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#E1259A"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "레이브·초기 디지털",
      "1980~2000년대 레이브·초기 디지털",
      "네온 플라이어·픽셀 인터페이스",
      "2색 대비/듀오톤",
      "음악·문화"
    ],
    "note": "진한 우주색·전자 블루",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd2-080",
    "name": "드럼앤베이스 블루블랙",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#0F162C"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#38B2FF"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "밝은 세리프·검은 제목",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-081",
    "name": "오프화이트 세리프 블랙",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#F6F3EB"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#222322"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "카페 브랜드 블루·크림",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-082",
    "name": "카페 코발트 크림",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#2659A7"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#FAE7C7"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "파스텔 핑크·진한 제목",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-083",
    "name": "편집 핑크 차콜",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#F5ABCA"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#2D2D30"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "세이지 패키지·미색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-084",
    "name": "스킨케어 세이지",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#A4B59C"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#FCF8F0"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "식품 라벨 빨강·크림",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-085",
    "name": "푸드 스칼렛 크림",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#DB4E3E"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#F8E6C8"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "블랙 아이덴티티·라임 포인트",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-086",
    "name": "미니멀 블랙 라임",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#191B18"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#BEEA57"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "라벤더 지면·짙은 자주",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-087",
    "name": "패션 라이트라벤더",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#D8C6ED"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#4A3552"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "짙은 적갈색·크림 편집지",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-088",
    "name": "에디토리얼 버건디",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#632B39"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#F6F0E7"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "테라코타·부드러운 베이지",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-089",
    "name": "웰니스 테라코타",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#B9664E"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#E8DDC8"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "짙은 청색·머스터드",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-090",
    "name": "아트북 네이비 옐로",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#142C5B"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#EACE58"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "청록과 청남색 듀오톤",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-091",
    "name": "듀오톤 오션 블루",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#2CA8C9"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#1F355C"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "미색 코랄지·암홍",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-092",
    "name": "단색 라이트 핑크",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#FEDED7"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#A8474A"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "포레스트와 샌드",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-093",
    "name": "친환경 숲과 모래",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#305B44"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#E9D6A6"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "연한 하늘색·주황",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-094",
    "name": "모던 스카이 오렌지",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#ADDFF2"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#F17B34"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "진홍 인덱스·뉴트럴 그레이",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-095",
    "name": "아카이브 레드 그레이",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#C63E42"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#DBDAD5"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "종이질 샌드·깊은 플럼",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-096",
    "name": "공예 샌드 플럼",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#E7D1A3"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#613C62"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "레몬색 로고·밤색 네이비",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-097",
    "name": "크리에이터 옐로 네이비",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#FCE246"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#233054"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "민트 파스텔·로열 퍼플",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-098",
    "name": "브랜드 민트 퍼플",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#B8E5CF"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#5A3CB0"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "위트 있는 오렌지·블랙",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-099",
    "name": "세리프 오렌지 블랙",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#FE9552"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#1E1D22"
      }
    ]
  },
  {
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드·듀오톤·에디토리얼",
      "2010~24년 미니멀 브랜딩·듀오톤",
      "반응형 로고·사진 듀오톤",
      "2색 대비/듀오톤",
      "에디토리얼"
    ],
    "note": "코코아 브라운·부드러운 크림",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd2-100",
    "name": "와인 라벨 밀크초코",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#5A372D"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#F3E5CB"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "찍힘이 있는 오렌지 리소·종이",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-101",
    "name": "로파이 오렌지 리소",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#F0763D"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#E7D8C0"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "지저분한 마젠타·블랙 레터링",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-102",
    "name": "타이포 콜라주 마젠타",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#DA33A3"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#252122"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "시안 하이라이트·노트 종이",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-103",
    "name": "노트앱 시안",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#44C8D1"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#FCFAF4"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "검정 잉크·크래프트",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-104",
    "name": "크래프트 블랙 라벨",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#242524"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#C8A77B"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "3D 청색·메탈 그레이",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-105",
    "name": "감각적인 메탈 블루",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#668DF3"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#D9DDE1"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "애시드 라임·짙은 차콜",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-106",
    "name": "반투명 라임 차콜",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#B8F64D"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#252B2D"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "복고 피치·초코 브라운",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-107",
    "name": "레트로 피치 브라운",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#FFB199"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#553D38"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "진청 리소·거친 백지",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-108",
    "name": "양면 리소 코발트",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#355AD4"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#EAE2CC"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "굵은 그린 헤드라인·블랙",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-109",
    "name": "맥시멀 타입 그린",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#40BB87"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#182121"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "옐로 메모 테이프·플럼",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-110",
    "name": "포토 몽타주 옐로",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#F7DD54"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#4D3B58"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "스크랩 레드·그레이시 민트",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-111",
    "name": "아날로그 스티커 레드",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#DC3D44"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#D8E3DD"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "어두운 텍스트·시머 실버",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-112",
    "name": "블랙 잉크 실버펄",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#0B1017"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#D1D4DA"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "지면 베이지·네온 핑크",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-113",
    "name": "크림 지면 레이저 핑크",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#F7F0D9"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#FF46A9"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "러프 그린·연보라",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-114",
    "name": "그린 그레인 퍼플",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#506A57"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#D6C8EE"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "초대형 블랙타입·골드 옐로",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-115",
    "name": "에디토리얼 빅레터",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#161717"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#FFCD3C"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "초기 컴퓨터 퍼플·미색",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-116",
    "name": "바이브 코딩 레트로",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#6D50E8"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#EFE2BF"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "글로시 로즈·소프트핑크",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-117",
    "name": "소프트 3D 석류",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#A9375D"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#F4CADC"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "페이퍼컷 블루·민트",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-118",
    "name": "페이퍼컷 블루 틸",
    "colors": [
      {
        "ratio": 70,
        "role": "base",
        "hex": "#396B9A"
      },
      {
        "ratio": 30,
        "role": "point",
        "hex": "#A6D8CF"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "손그림 갈색·노랑",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-119",
    "name": "불완전한 브랜딩",
    "colors": [
      {
        "ratio": 60,
        "role": "base",
        "hex": "#7B5C46"
      },
      {
        "ratio": 40,
        "role": "point",
        "hex": "#F2C65B"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "실험 타이포·촉각·로파이",
      "2025~26년 실험 타이포·촉각·로파이",
      "DIY 콜라주·불완전한 디지털",
      "2색 대비/듀오톤",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "레드 글리치·딥네이비",
    "researchUrl": "https://www.canva.com/newsroom/news/design-trends-2026/",
    "id": "graphic-gd2-120",
    "name": "압축파일 포스터",
    "colors": [
      {
        "ratio": 80,
        "role": "base",
        "hex": "#E65C6C"
      },
      {
        "ratio": 20,
        "role": "point",
        "hex": "#212838"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-001",
    "name": "유리 온실의 아이리스",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#264D42"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#D3B4A0"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#91A9B1"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#8D5B82"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#E5C86D"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-002",
    "name": "진주빛 극장 아치",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#191F2B"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#E9D9BB"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#B89264"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#8A5765"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#CEB9C8"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-003",
    "name": "파리 밤의 동백",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#6A2232"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#F2D0BB"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#203D48"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#C59B54"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#ECE7D9"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-004",
    "name": "자포니즘 부채",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#203A4D"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#DD7757"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#B5BC9D"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#D8B25E"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F5E8D8"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-005",
    "name": "청동의 포도덩굴",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#30463D"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#D0B06B"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#8A4C43"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#C7D7BC"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#201F22"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-006",
    "name": "석류꽃 세공",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#6F2E39"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#C26855"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#9A9A68"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#C9B36C"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F4E6D4"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-007",
    "name": "수선화 대리석",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#F0D76A"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#5E775C"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#3F5870"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#DCCDB5"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#B48B75"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-008",
    "name": "밤색 장식 테두리",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#2B2D36"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#8F705C"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#D7B78B"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#B3B6AC"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#E9E3C9"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-009",
    "name": "에메랄드 브로치",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#114E4B"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#E5CF9C"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#7A8D89"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#6D3E56"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#E9E6DA"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-010",
    "name": "산호와 앤티크 골드",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#D47563"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#A78449"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#3B4C54"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#EEDCC9"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#755A63"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-011",
    "name": "벨에포크 장미 아치",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#9C4151"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#DDA6A4"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#E8D6B7"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#48685B"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#9284A2"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-012",
    "name": "샴페인 연회지",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#E5D6AE"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#785E58"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#9E8B65"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#D5B8AB"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#25323A"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-013",
    "name": "무도회 청록 깃털",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#195B65"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#A4BBC3"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#D7C29C"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#A8616D"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#EAE4D1"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-014",
    "name": "아라베스크 달빛",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#30485A"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#BDA96D"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#D7D9D2"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#8D777D"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#5A6A55"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-015",
    "name": "앰버 스테인드글라스",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#C78443"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#263E55"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#7B9F90"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#D6B26C"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#E6DCD0"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-016",
    "name": "유성 문양과 은박",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#3C3A58"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#B7B6C9"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#F0DFBA"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#917A63"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#A3AE89"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-017",
    "name": "연못의 수련 모자이크",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#51766A"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#9FA8B5"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#D9C789"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#6C4765"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F2E7D1"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-018",
    "name": "고딕 향수 상자",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#342B39"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#6C4A63"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#C89E7C"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#C7BCA8"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#E7D6CB"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-019",
    "name": "해바라기 장식띠",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#C1A14A"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#395343"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#B96548"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#E8C98E"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#2F3944"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-020",
    "name": "세피아 나비 날개",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#89735D"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#D9BA8E"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#546873"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#A27A7A"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F1E5CD"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-021",
    "name": "백합 무늬 표지",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#E1D0B9"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#A7B69D"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#6D5A65"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#DAA76D"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#314A4A"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-022",
    "name": "아르데코 재즈클럽",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#131B30"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#E6BB64"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#9C3845"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#48658B"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#EEE1CF"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-023",
    "name": "기하학적 일출",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#E0B452"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#9C7055"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#254653"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#D6D7B7"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#6A4E61"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-024",
    "name": "검은 대리석 황금띠",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#1D2428"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#C5A160"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#B7B2A3"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#7C4A4B"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#E3D6BC"
      }
    ]
  },
  {
    "graphicStyles": [
      "아르누보·아르데코"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "아르누보·아르데코",
      "아르누보·아르데코·장식 인쇄",
      "석판화·장식 패키지",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-025",
    "name": "극장 로비의 청금",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#203C57"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#D6B461"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#A9C4BA"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#D88570"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#EEE0C7"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-026",
    "name": "태평양 해안 여행지",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#147DA3"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#E4B94B"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#E17E4D"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#ECE6CB"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#22465A"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-027",
    "name": "피크닉 체크무늬",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#D65D43"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#E9D18C"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#5F846E"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#438DA2"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F6EBD8"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-028",
    "name": "스페이스에이지 홈",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#3D7287"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#D89E5C"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#E5D5B8"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#A23F43"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#313B4A"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-029",
    "name": "열대 공항 안내",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#2E738A"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#D2C66A"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#4B936C"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#EBE8CC"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#E67752"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-030",
    "name": "브런치 매거진 표지",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#E0AA6B"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#D26E62"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#658E8C"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#3D4F62"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#EBE4C9"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-031",
    "name": "낙엽색 교통 지도",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#BE5B45"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#E2C662"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#577760"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#53789A"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F4E9CB"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-032",
    "name": "원자 시대 키친",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#D88477"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#90B1AB"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#D9CE86"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#404B5D"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F7EFE1"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-033",
    "name": "호텔 수영장 광고",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#238BA2"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#F4D197"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#F28F74"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#2F566F"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#E8E2CF"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-034",
    "name": "이탈리아 레몬 관광",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#F4CF39"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#3B8B82"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#DF6E52"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#F2E4C5"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#354A66"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-035",
    "name": "서점의 여행 브로슈어",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#C0654F"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#D2A35C"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#66816A"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#7D98A3"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F4E8DA"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-036",
    "name": "우주박람회 포스터",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#1D4B74"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#F2C856"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#D56F4F"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#7FA4A0"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F7ECDD"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-037",
    "name": "모던 가구 카탈로그",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#54798B"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#D98F61"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#E8D0A5"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#737D5A"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#2A3B50"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-038",
    "name": "선인장 자동차 여행",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#6E9976"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#E0AF6B"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#D26D53"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#75AFB8"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F6ECD4"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-039",
    "name": "스노우 리조트 전단",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#82B3C8"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#F5EBDD"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#D9B66F"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#B97165"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#334E69"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-040",
    "name": "태양과 수상택시",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#E6B743"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#217C97"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#E8DBAF"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#CD785A"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#235A66"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-041",
    "name": "1950s 모던 패턴",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#3B7180"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#D5B869"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#B65B55"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#90A27A"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#EEE0CB"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-042",
    "name": "조개 수집 잡지",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#8BB5B4"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#EDD6AE"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#C6725C"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#516C84"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F3EDDC"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-043",
    "name": "파스텔 쇼윈도",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#F2B7AE"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#A5C3B8"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#E5CF83"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#6B83A5"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#52586F"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-044",
    "name": "서커스 주말 안내",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#D54E43"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#30678F"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#E8C957"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#5B8B68"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F5EBD7"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-045",
    "name": "우편엽서의 선셋",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#E88852"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#D7B96C"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#5C9A9C"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#346A7B"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F2E3C3"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-046",
    "name": "바다유리 광고판",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#3C8F9F"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#A1D6C5"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#DCC777"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#D66B5C"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#264B63"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-047",
    "name": "초록 언덕 철도표",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#668D69"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#D9C579"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#B35D47"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#7EADBD"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F7E6CB"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-048",
    "name": "잡지의 점무늬",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#B54F51"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#4F7293"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#C8AD61"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#B0B7A5"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F0E5D7"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-049",
    "name": "구름 위 항공광고",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#70A8C4"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#E5C183"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#DE8A6D"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#466B79"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#ECE5D8"
      }
    ]
  },
  {
    "graphicStyles": [
      "레트로·빈티지"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "미드센추리·여행포스터",
      "미드센추리 여행·에디토리얼",
      "스크린 인쇄·잡지 표지",
      "5색 다층 배색",
      "레트로·빈티지"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.cooperhewitt.org/exhibitions/how-posters-work/",
    "id": "graphic-gd5-050",
    "name": "밤기차 다이닝카",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#1D465A"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#A86D5D"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#D5B16F"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#698D83"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#E8DDD0"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-051",
    "name": "애시드 꽃무늬 소용돌이",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#E9449C"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#F8DD28"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#2AA3A0"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#6745BE"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#1E2345"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-052",
    "name": "멤피스 지그재그",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#F1B831"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#E15B76"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#33B4A5"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#5063AB"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F4E9D6"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-053",
    "name": "사이키델릭 귤껍질",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#F0752E"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#A7349C"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#D3D53B"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#27788B"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#241D32"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-054",
    "name": "뉴웨이브 스프링",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#EB5A99"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#43D3B7"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#FBE64E"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#6158B7"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#2E2B37"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-055",
    "name": "디스코 레이저 광선",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#F54375"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#2A68CE"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#F6D93C"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#2DDDC4"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#1E1331"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-056",
    "name": "폴카도트 스튜디오",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#F6C944"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#3D99B8"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#E87091"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#2C2D3F"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F0EBDC"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-057",
    "name": "핑크 번개 클럽",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#EF4094"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#3F3FBE"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#F9D229"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#19BA8F"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#18182D"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-058",
    "name": "만화 스티커 벽",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#EF6048"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#5DB9E9"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#FCE25D"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#8B62C0"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F8E9E0"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-059",
    "name": "웨이브 공연 전단",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#AB35B4"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#EC7E2E"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#D9F53E"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#35A6B7"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#2B1D35"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-060",
    "name": "트로피컬 형광 나선",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#6ED345"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#EE4D97"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#F3BD35"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#5853BB"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#162B31"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-061",
    "name": "1980s 지오메트리",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#E95688"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#F4C733"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#4776BE"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#41B79B"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#252842"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-062",
    "name": "민트와 플라밍고",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#54C7B4"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#FB70A8"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#F2D054"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#515B8C"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F9ECE0"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-063",
    "name": "팝아트 쇼핑백",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#F4CB3F"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#E3494E"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#3B70D9"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#37BA89"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F6F0E7"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-064",
    "name": "반원과 색테이프",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#EA8060"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#62BEBE"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#6856AF"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#F8DB58"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#33334F"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-065",
    "name": "클럽 신스 그라데이션",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#FF4EA3"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#596AFF"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#44EBD3"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#F2D54B"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#1E1B35"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-066",
    "name": "사이키델릭 표적지",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#DA257C"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#F9E65B"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#4FC3A0"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#3E6DDE"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#28213D"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-067",
    "name": "멤피스 레터컷",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#E55D8F"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#99D753"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#55B4D4"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#F3BC46"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#332D43"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-068",
    "name": "비디오 스티커팩",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#F35B48"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#6B4DEE"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#65E1B7"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#E6D54D"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#27233C"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-069",
    "name": "롤러디스코 간판",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#EC65A7"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#32B9C3"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#F8E94E"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#544BD1"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#1C1D2A"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-070",
    "name": "서브컬처 픽셀파티",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#EB3D79"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#60D347"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#39A1D5"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#FADE57"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#322648"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-071",
    "name": "레트로 리듬그래프",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#D45477"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#36AEB3"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#E6B63D"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#8262C2"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F2E8CE"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-072",
    "name": "만화책 폭발효과",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#FA5741"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#F5D534"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#2777CF"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#41BA84"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#21252D"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-073",
    "name": "캔디 러닝타입",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#FD7BA3"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#47C4E1"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#FBEA61"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#9B67C9"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#33333B"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-074",
    "name": "레이브 스마일 모듈",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#F3D935"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#F96B80"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#33C1AF"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#475DD1"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#181C2E"
      }
    ]
  },
  {
    "graphicStyles": [
      "팝·키치"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "사이키델릭·멤피스·팝",
      "파동글자·기하학 패턴",
      "5색 다층 배색",
      "팝·키치"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-075",
    "name": "초현실 체커타일",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#EF7261"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#B5DE48"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#49A6C2"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#9561AF"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#25233A"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-076",
    "name": "재즈 인쇄소의 밤",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#172E43"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#C75E50"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#D7AA5F"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#7A9797"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#EBE6D8"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-077",
    "name": "펑크 클럽 사전",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#E7C32C"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#292A2E"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#C8494D"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#7B6F9B"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#EDE8D9"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-078",
    "name": "베이스 뮤직 포스터",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#30214A"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#EC5B87"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#4899C3"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#E4C54E"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#C7D0B8"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-079",
    "name": "모던 클래식 시즌권",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#304A5A"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#D0B76F"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#D8DAD4"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#A35F58"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#687D71"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-080",
    "name": "인디 레코드 상자",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#A95B4C"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#D3C39E"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#6C8785"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#4B5460"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#ECE1D0"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-081",
    "name": "리듬앤블루스 사인",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#294B78"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#D1AF62"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#C76163"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#6D8D86"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F2E5CE"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-082",
    "name": "전위무용 페스티벌",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#D4535F"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#F5D45A"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#498DA1"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#3A4B60"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#ECE7DD"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-083",
    "name": "서점 낭독회 포스터",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#86506B"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#E7C98E"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#7B9C7A"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#4F6D87"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F4ECE0"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-084",
    "name": "시네마 테크 브로슈어",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#242E45"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#9B4B68"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#E2B369"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#86A3A0"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#D6D9D0"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-085",
    "name": "로컬 라디오 기획물",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#E66F54"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#42A4A5"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#614EB5"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#E5CE74"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#23253A"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-086",
    "name": "비주얼뮤직 페스티벌",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#D94DAD"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#287CCE"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#30D2B1"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#F6D454"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#22203E"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-087",
    "name": "서브컬처 공연티켓",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#C5394F"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#8F58C2"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#3C98B4"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#D9BF68"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#272533"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-088",
    "name": "턴테이블 실루엣",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#1C2230"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#8098A7"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#D3B16D"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#B85E59"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F5EEDD"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-089",
    "name": "현대 타악제 그래픽",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#B2D942"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#202636"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#4A80C9"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#F27E62"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F2EBCD"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-090",
    "name": "인디팝 스테이지",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#FF7592"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#F5C35E"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#64C6A8"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#727FBC"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F5ECE3"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-091",
    "name": "레코드 점의 여름",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#C0D354"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#E8A153"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#527FBD"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#2E4A60"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F4E6C6"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-092",
    "name": "실험 오페라 안내",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#4A2D57"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#B96567"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#D7B973"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#89A3A6"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#EEE3D6"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-093",
    "name": "시민예술축제 인쇄물",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#EC614B"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#3B739B"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#E3C04F"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#4D9572"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F2E8DB"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-094",
    "name": "낮 공연회 코랄",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#DC6D72"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#87B3B7"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#F0C95D"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#8A6C9A"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F5EADC"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-095",
    "name": "앰비언트 커버 스터디",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#335C6A"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#A0BCC0"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#B59D73"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#4C5368"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#E9E5D5"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-096",
    "name": "밤샘 라이브 플라이어",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#2F2351"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#F04D7A"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#3D9ECC"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#D8D647"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F1EEDB"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-097",
    "name": "포스터월 콜라주",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#EA754E"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#4E7CAF"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#B75E8D"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#D2C26A"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F6EADC"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-098",
    "name": "음악도서관 컬렉션",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#234653"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#A7B7AA"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#E6C45C"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#B8796A"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F1E7D7"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-099",
    "name": "장르혼합 뮤직마켓",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#7255A4"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#E76B73"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#39B4AB"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#D6C155"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#262338"
      }
    ]
  },
  {
    "graphicStyles": [
      "음악·문화"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "음반·문화·문화행사",
      "음반·문화·페스티벌",
      "음반 커버·페스티벌 시스템",
      "5색 다층 배색",
      "음악·문화"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-100",
    "name": "독립영화제 야간상영",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#263D5B"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#A85F72"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#59A2B5"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#E1BC71"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#EDE7D9"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-101",
    "name": "그린테크 모듈러",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#194A42"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#66BC9B"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#F2DE9C"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#D9815F"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#2D3443"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-102",
    "name": "아트북 퍼블리셔",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#293448"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#D6C6B2"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#E3A27E"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#798FA8"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#A1A76E"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-103",
    "name": "푸드랩 컬러코딩",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#E85B4E"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#F3C85B"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#54B59B"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#5D75B1"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#ECE9DF"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-104",
    "name": "베이커리 스티커",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#D88075"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#F5DAB5"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#8BAE86"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#506B66"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#C0A0BE"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-105",
    "name": "디지털은행 하모니",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#164DA1"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#3CAAD7"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#DFE6EE"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#84C7B0"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#DDAF54"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-106",
    "name": "커뮤니티 네트워크",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#5B4CD1"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#EF7390"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#F3D56C"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#7ECFBA"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F4EAE0"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-107",
    "name": "웰니스 향기 시스템",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#8EAE9A"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#EDD0BA"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#C98B7A"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#716F8C"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F6F0E3"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-108",
    "name": "지속가능 포장 라벨",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#3F7557"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#CEDCA6"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#E3B96D"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#8AA9A5"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#2E4857"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-109",
    "name": "호텔 리조트 에디션",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#2D6972"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#D7A76A"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#C5BEC7"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#EDE5CF"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#8C6659"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-110",
    "name": "컬처 허브 아이덴티티",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#35498D"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#EC6B6E"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#F4C95E"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#7BBD9B"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#ECE6DA"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-111",
    "name": "저널리즘 데이터 컬러",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#142E48"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#4D82C3"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#65B5B1"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#F0C76D"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#C35B65"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-112",
    "name": "패션 스튜디오 시그널",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#20232A"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#DC6373"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#B3A4C7"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#D8C8A3"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#639A9F"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-113",
    "name": "뷰티 컬러 스토리",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#A84D6F"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#E4A7AE"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#EED7C0"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#7D8F9B"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#5F666E"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-114",
    "name": "시민행정 안내 체계",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#255771"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#55B1C0"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#F2D486"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#E87C64"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#E9E9E2"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-115",
    "name": "서점의 시즌 마크",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#8B5963"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#E6BF8D"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#769F8F"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#4C6F85"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#EFE5D7"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-116",
    "name": "페어 트레이드 카페",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#47765C"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#E9C47C"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#DA8165"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#6F7F8B"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F4E9D5"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-117",
    "name": "스포츠 이벤트 패키지",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#1F4191"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#ED724C"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#D9D744"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#44C5BE"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F0F0E9"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-118",
    "name": "클린 테크 서비스",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#0C5D65"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#7BA8BC"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#E1D69E"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#A77F6D"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#273D4A"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-119",
    "name": "디자인 스쿨 시각언어",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#3F48A7"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#FF796A"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#EFC953"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#68B8A6"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F7F1E7"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-120",
    "name": "실험형 비영리 캠페인",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#7946B9"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#ED7A83"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#BDDC79"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#5A8C9E"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#282D37"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-121",
    "name": "플랫폼 지도의 체계",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#2F5D8D"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#56B9B1"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#E9BE67"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#C87372"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#EBE8E0"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-122",
    "name": "로컬 식물 편집숍",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#3B6C51"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#A4BDA3"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#E5C588"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#D8846A"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F6EFE2"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-123",
    "name": "공예브랜드 촉감",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#765E50"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#C8A487"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#E9D6BB"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#81967C"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#395869"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-124",
    "name": "교육 플랫폼 키비주얼",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#244C92"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#8AC4D6"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#EEC96F"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#DA796F"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F5EEDD"
      }
    ]
  },
  {
    "graphicStyles": [],
    "graphicOrigin": "original",
    "graphicCategories": [],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "브랜드 시스템·패키징",
      "현대 브랜드 가변형 시스템",
      "반응형 브랜딩·모듈 시스템",
      "5색 다층 배색"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://aigadesignarchives.com/",
    "id": "graphic-gd5-125",
    "name": "새로운 박물관 시즌",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#30344B"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#B4A8D5"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#F1C96A"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#6BA6AA"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#EEE5D5"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-126",
    "name": "플로팅 젤리 활자",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#6555D8"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#F6A8C8"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#92D9E9"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#DDCB9B"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#1E1C33"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-127",
    "name": "로파이 노트북 그래픽",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#D6E0BC"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#EBAF8E"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#485A7B"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#D6B8D0"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F9F2E2"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-128",
    "name": "촉각 클레이 인쇄",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#B9655C"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#E0C39D"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#9AAB97"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#648B8D"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F1E4D7"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-129",
    "name": "이상한 종이 피부",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#EAC6B5"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#9C84B6"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#66B4C1"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#D3D991"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#322B49"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-130",
    "name": "홀로그램 편집 레이아웃",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#69CDE4"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#BCA6EF"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#F8B6CF"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#D9E68D"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#2C2C4C"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-131",
    "name": "시네마틱 타입 글로우",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#232343"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#7B66C9"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#F0A5B4"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#E8D682"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#58C6CA"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-132",
    "name": "오브젝트 스캔 콜라주",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#3D3E4C"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#A5B1C3"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#E78F75"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#F6D66A"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#78B69F"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-133",
    "name": "손그림 다이어리 커버",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#E6BA74"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#C8D0A8"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#B36B82"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#718FAD"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F6E9D9"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-134",
    "name": "초현실 풍선 메탈",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#485F9F"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#BCD7E7"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#EAB2CD"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#F5DA8B"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#544665"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-135",
    "name": "리퀴드 그라스 UI",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#B2DCE9"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#D1E8DD"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#A3A5E4"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#EFC0A5"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#27455A"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-136",
    "name": "엉킨 리소 레터링",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#D95871"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#78A7A3"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#D3C56C"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#695B8F"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F0E7D4"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-137",
    "name": "커스텀 서체 실험실",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#5C42D1"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#D8688B"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#DDD772"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#3FC8BE"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#262438"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-138",
    "name": "레트로 OS 스티커",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#BCE3A5"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#D28FC8"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#6598D6"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#F5C767"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#222E4C"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-139",
    "name": "리얼리티 워프 포스터",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#ED5B79"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#7A63D8"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#3BD2C1"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#F0D44F"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#15172C"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-140",
    "name": "미니멀 역행 도형",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#E9E2D6"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#202226"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#8FA5A2"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#EBAE8B"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#6F5C86"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-141",
    "name": "아날로그 섬유 타이포",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#C99987"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#8278A0"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#B4C8A5"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#DFB16E"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F5EDDF"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-142",
    "name": "액체 크롬 표지",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#3B56AF"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#9DDCDE"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#B3A5E0"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#F8CD95"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#242944"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-143",
    "name": "팝업 페이퍼컷 캠페인",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#F1BB71"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#E98C91"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#84C7B0"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#6799CB"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F8E8DE"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-144",
    "name": "프롬프트 콜라주 창",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#DF92BB"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#72C0B3"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#CED765"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#5E75AD"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F3E8D0"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-145",
    "name": "텍스처 체크 어패럴",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#6C547B"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#B8A5A1"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#DABEA3"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#8EADA5"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F1E9D9"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-146",
    "name": "로컬 에피메라 표본",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#A6AD82"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#D47461"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#829AB2"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#E9CA8F"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#554B50"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-147",
    "name": "비선형 매거진 헤드라인",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#FC8367"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#84D4B9"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#B6A2E4"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#DAD461"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#252C43"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-148",
    "name": "인조 광택 타이포",
    "colors": [
      {
        "ratio": 38,
        "role": "base",
        "hex": "#D69ADA"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#A3DFF0"
      },
      {
        "ratio": 18,
        "role": "sub",
        "hex": "#F2C3AA"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#6BBE8F"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#4C3F6B"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-149",
    "name": "아티스트 북의 균열",
    "colors": [
      {
        "ratio": 40,
        "role": "base",
        "hex": "#3E495E"
      },
      {
        "ratio": 24,
        "role": "sub",
        "hex": "#EB8674"
      },
      {
        "ratio": 16,
        "role": "sub",
        "hex": "#C5D1A0"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#A5A0C5"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#F1E6D9"
      }
    ]
  },
  {
    "graphicStyles": [
      "실험·추상",
      "타이포그래피"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "experimental"
    ],
    "scheme": "free",
    "collection": "graphic",
    "tags": [
      "촉각·3D·실험 타이포",
      "2025~26 실험 3D·아날로그·AI",
      "그레인·신비현실·형태 실험",
      "5색 다층 배색",
      "실험·추상",
      "타이포그래피"
    ],
    "note": "5색 레이어: 주색·보조색·대비색·포인트·중성/균형색",
    "researchUrl": "https://www.adobe.com/uk/express/learn/blog/design-trends-2026",
    "id": "graphic-gd5-150",
    "name": "도시 잔상 포스터",
    "colors": [
      {
        "ratio": 35,
        "role": "base",
        "hex": "#DB596D"
      },
      {
        "ratio": 25,
        "role": "sub",
        "hex": "#416CAD"
      },
      {
        "ratio": 20,
        "role": "sub",
        "hex": "#8ED4C7"
      },
      {
        "ratio": 12,
        "role": "point",
        "hex": "#F0D06D"
      },
      {
        "ratio": 8,
        "role": "sub",
        "hex": "#2F253A"
      }
    ]
  },
  {
    "id": "graphic-b1-01",
    "name": "라일락 블랙 사인",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#B89AC4",
        "ratio": 78,
        "role": "base"
      },
      {
        "hex": "#17141B",
        "ratio": 22,
        "role": "point"
      }
    ],
    "tags": [
      "포스터",
      "그래픽",
      "퍼플",
      "무채색"
    ],
    "graphicOrigin": "inspired",
    "graphicStyles": [
      "타이포그래피",
      "미니멀"
    ],
    "graphicCategories": [
      "color-block"
    ],
    "reference": {
      "title": "Branch Museum",
      "url": "https://branchmuseum.org/",
      "method": "visual-inspired",
      "description": "참고 이미지를 시각적으로 검토한 뒤 새로 구성한 디자인 배색이며 실제 픽셀 측정값은 아님."
    }
  },
  {
    "id": "graphic-b1-02",
    "name": "바이올렛 아이보리",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#6238B6",
        "ratio": 68,
        "role": "base"
      },
      {
        "hex": "#F4F0E8",
        "ratio": 32,
        "role": "point"
      }
    ],
    "tags": [
      "포스터",
      "그래픽",
      "퍼플",
      "무채색"
    ],
    "graphicOrigin": "original",
    "graphicStyles": [
      "타이포그래피",
      "미니멀"
    ],
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-b1-03",
    "name": "모브 석판",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#C8A8BD",
        "ratio": 52,
        "role": "base"
      },
      {
        "hex": "#77717A",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#EAE6DF",
        "ratio": 18,
        "role": "point"
      }
    ],
    "tags": [
      "포스터",
      "그래픽",
      "핑크",
      "퍼플",
      "무채색",
      "차분한"
    ],
    "graphicOrigin": "original",
    "graphicStyles": [
      "에디토리얼",
      "리소그래프·인쇄"
    ],
    "graphicCategories": [
      "vintage-muted",
      "soft-graphic"
    ]
  },
  {
    "id": "graphic-b1-04",
    "name": "켈리 그린 옵티컬",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#12D924",
        "ratio": 58,
        "role": "base"
      },
      {
        "hex": "#ECF2E3",
        "ratio": 24,
        "role": "sub"
      },
      {
        "hex": "#F6B53F",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#C3E9C2",
        "ratio": 6,
        "role": "point"
      }
    ],
    "tags": [
      "포스터",
      "그래픽",
      "그린",
      "옐로우",
      "고채도"
    ],
    "graphicOrigin": "inspired",
    "graphicStyles": [
      "실험·추상",
      "팝·키치"
    ],
    "graphicCategories": [
      "color-block"
    ],
    "reference": {
      "title": "Kazumasa Nagai Exhibition Poster",
      "url": "https://www.moma.org/collection/works/8814",
      "method": "visual-inspired",
      "description": "참고 이미지를 시각적으로 검토한 뒤 새로 구성한 디자인 배색이며 실제 픽셀 측정값은 아님."
    }
  },
  {
    "id": "graphic-b1-05",
    "name": "유리병 인쇄",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#176E3D",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F2F3DC",
        "ratio": 28,
        "role": "sub"
      },
      {
        "hex": "#C76A9A",
        "ratio": 14,
        "role": "sub"
      },
      {
        "hex": "#2E3B31",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "포스터",
      "그래픽",
      "그린",
      "핑크",
      "차분한"
    ],
    "graphicOrigin": "original",
    "graphicStyles": [
      "에디토리얼",
      "리소그래프·인쇄"
    ],
    "graphicCategories": [
      "vintage-muted",
      "accent-color"
    ]
  },
  {
    "id": "graphic-b1-06",
    "name": "시그널 마젠타",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#C81E7C",
        "ratio": 54,
        "role": "base"
      },
      {
        "hex": "#1E1528",
        "ratio": 26,
        "role": "sub"
      },
      {
        "hex": "#E7B8D7",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CBE8BD",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "포스터",
      "그래픽",
      "핑크",
      "퍼플",
      "고채도"
    ],
    "graphicOrigin": "original",
    "graphicStyles": [
      "타이포그래피",
      "팝·키치"
    ],
    "graphicCategories": [
      "deep-color",
      "accent-color"
    ]
  },
  {
    "id": "graphic-supplement-p01",
    "name": "P01 안개 라일락",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#E8E2F4",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#5B4B7A",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플",
      "무채색"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p02",
    "name": "P02 서리 보라 잉크",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#F2EFF8",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#2E2A36",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#7B6AA6",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p03",
    "name": "P03 세이지 라벤더",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#DCCEF2",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#5A4378",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#B7C6A1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p04",
    "name": "P04 골드 더스트 바이올렛",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#C6B2E8",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#493060",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E8D7A7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p05",
    "name": "P05 딥 퍼플 포그",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#9D84C7",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#241E2E",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D9D4E8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p06",
    "name": "P06 모브 앤 블러쉬",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#B69AD8",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#343046",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E8B7C8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p07",
    "name": "P07 플럼 크림",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#8660B7",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F0EBDC",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#3E364D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p08",
    "name": "P08 라일락 피치",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#D8CCF0",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#7D6E97",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F2BE9A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p09",
    "name": "P09 애쉬 바이올렛",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#BCAED4",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#2A2430",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#CED5D8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p10",
    "name": "P10 바이올렛 민트 에어",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#6E4EA1",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EAE5F3",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#A7D0B0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p11",
    "name": "P11 골든 북커버",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#C9B8E4",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#3C3154",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#C9A26A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F3E7D6",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p12",
    "name": "P12 포레스트 플럼",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#A68ACF",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#2F2742",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#7FAE93",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E3D28C",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p13",
    "name": "P13 로즈 소르베",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#F5DCE8",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#A83B79",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F3A255",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "핑크"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p14",
    "name": "P14 페일 로즈 북잉크",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#FBE6EE",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#6A214D",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D8CFC7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "핑크"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p15",
    "name": "P15 빈티지 베리",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#E7B1C9",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#8F2F63",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F4E9D8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#4B5966",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "핑크"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p16",
    "name": "P16 핑크 바이올렛 샐러드",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#F3C4D8",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#4B4472",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#B5CC7A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "핑크"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p17",
    "name": "P17 드라이 피치 로즈",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#F7D8D6",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#B83E56",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#C78A4A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#4D4A58",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "핑크"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p18",
    "name": "P18 마젠타 소다",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#F1A0C5",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#63255A",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F3E7A6",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#81C7C2",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "핑크"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p19",
    "name": "P19 라즈베리 섀도우",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#D97BA7",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#2A1E36",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E5DCCB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "핑크"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p20",
    "name": "P20 로즈 세이지 파우더",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#EAC0D0",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#6A3E63",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#A0B68D",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F0D98A",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "핑크"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p21",
    "name": "P21 캔디 로즈 포스터",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#F5B6CF",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#28355D",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E9E1D2",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D95B52",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "핑크"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p22",
    "name": "P22 베리 크림 그린",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#CC6C96",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#F4EEE8",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#556B58",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "핑크"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p23",
    "name": "P23 더스티 핑크 룸",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#D88BB8",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#795A72",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D7DFC8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F7E8D7",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "핑크"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p24",
    "name": "P24 샴페인 로즈",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#F2D5E3",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#A2416B",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#546A78",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E3C05C",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "핑크"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p25",
    "name": "P25 라임 바이올렛 필드",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#D5E8B7",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#234130",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#6A54B3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "그린"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p26",
    "name": "P26 네온 라임 포스터",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#C7EE4F",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#253125",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#EEE6D8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#6654C7",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "그린"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p27",
    "name": "P27 스프링 그린 릴랙스",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#9ED66B",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#283E2E",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#DCC7F1",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "그린"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p28",
    "name": "P28 에메랄드 스튜디오",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#4FAF62",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F5F0E2",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#6B58A8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D39A54",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "그린"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p29",
    "name": "P29 글래스 그린",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#78C976",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#274A3D",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#EBD6B8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "그린"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p30",
    "name": "P30 라임 다크웨어",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#B9E44E",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#2B2638",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F4EAD7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#7AA6A1",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "그린"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p31",
    "name": "P31 민트 모스 블루",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#A7D88E",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#4B5978",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F3E0D2",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "그린"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p32",
    "name": "P32 시그널 그린 라일락",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#61BF5C",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E7DDF2",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#3B3242",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "그린"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p33",
    "name": "P33 애시드 라임 핑크",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#D9F26C",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#3A4350",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D38EB2",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "그린"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p34",
    "name": "P34 가든 나이트",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#7CCF8A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#22252D",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E9E3DA",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#8D5E43",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "그린"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p35",
    "name": "P35 올리브 퍼플 카드",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#91C85D",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#2D3B2A",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#B38ED8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F2E5CE",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "그린"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p36",
    "name": "P36 모스 모브 골드",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#4F8E5D",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#DCE6D8",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#AA84CF",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DCC06E",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "그린"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p37",
    "name": "P37 밀크 퍼플 블랙",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#E9E5F2",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#302C35",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플",
      "무채색"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p38",
    "name": "P38 딤 릴락 잉크",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#D8D1E8",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#1F1B24",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플",
      "무채색"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p39",
    "name": "P39 쿨 모브 차콜",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#CBBFE2",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#3E3945",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플",
      "무채색"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p40",
    "name": "P40 페일 바이올렛 슬레이트",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#F3EEF8",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#5D5570",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플",
      "무채색"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p41",
    "name": "P41 라일락 그레이 룸",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#E4DAF0",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#242028",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#A7A0B6",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플",
      "무채색"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p42",
    "name": "P42 라벤더 오프화이트",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#D2C5E5",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#474150",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F6F2EA",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플",
      "무채색"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p43",
    "name": "P43 나이트 퍼플 미스트",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#2C2438",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#8B73B8",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D5CEDD",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플",
      "무채색"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p44",
    "name": "P44 소프트 바이올렛 스톤",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#F0ECF7",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#514867",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#7C748E",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플",
      "무채색"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p45",
    "name": "P45 모브 콘크리트",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#EFE4F2",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#91889E",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#2A2530",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "퍼플",
      "무채색"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p46",
    "name": "P46 골드 포레스트 라벤더",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#BFA4D9",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#F8F5EE",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#395B4A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E0BF69",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "혼합"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p47",
    "name": "P47 블러쉬 가든 퍼플",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#DDA9C8",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#4A3A67",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D9E6A3",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F6E6C9",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "혼합"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p48",
    "name": "P48 민트 퍼플 피치",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#A7CFC7",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#6D4EA2",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F0C7A8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#28333E",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "혼합"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p49",
    "name": "P49 머스터드 플럼 포레스트",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#B8A1D9",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#E8C95E",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#304C44",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F3E6D8",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "혼합"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p50",
    "name": "P50 파우더 핑크 세이지 퍼플",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#E4BFD2",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#7FAF8F",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#5A4A78",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F5E9D7",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "혼합"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p51",
    "name": "P51 애시드 라임 플럼",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#D5F06F",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#5C3B8B",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#2C313A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F4E7D2",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "혼합"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p52",
    "name": "P52 오키드 티룸",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#F2E3F3",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#4E9D7A",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#6E4A95",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E3C06B",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "혼합"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p53",
    "name": "P53 로즈 파인 바이올렛",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#E6B5D6",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#203A34",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#8E72B6",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D8E5CF",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "혼합"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p54",
    "name": "P54 피스타치오 퍼플 샌드",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#BCD9A6",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#5E437F",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F3D6D1",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#35343D",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "혼합"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p55",
    "name": "P55 핫핑크 라임 다크",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#F5C7DD",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#6A224C",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#B7E268",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#24302A",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "혼합"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p56",
    "name": "P56 라벤더 모스 크림",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#D8C6E8",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#425E53",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E9DFAF",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#2E2637",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "혼합"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p57",
    "name": "P57 파우더 스카이 로열",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#EED3E1",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#5B4AA2",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#8AC8D1",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F1DA87",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "혼합"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p58",
    "name": "P58 허브 퍼플 코튼",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#B2DAB4",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#2D5B46",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#8B6AB0",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E7E0D5",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "혼합"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p59",
    "name": "P59 애시드 세이지 플럼",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#C3B2E6",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#A7C86B",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#2A2433",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F0E7D8",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "혼합"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-supplement-p60",
    "name": "P60 캔디 퍼플 민트 나이트",
    "scheme": "free",
    "collection": "graphic",
    "colors": [
      {
        "hex": "#F0B8C8",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#6D58A6",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D7EB97",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#334A52",
        "ratio": 5,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "혼합"
    ],
    "graphicOrigin": "original",
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-extra-041",
    "name": "라벤더 여백",
    "scheme": "free",
    "colors": [
      {
        "hex": "#F2F0EF",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#DAD4DF",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#ADA5BC",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#797484",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#5B6470",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "미니멀",
      "무채색",
      "퍼플"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "미니멀"
    ],
    "graphicCategories": [
      "soft-graphic"
    ],
    "note": "아이보리와 잿빛 라벤더의 단계적 명도차."
  },
  {
    "id": "graphic-extra-042",
    "name": "코튼 핑크 스탬프",
    "scheme": "free",
    "colors": [
      {
        "hex": "#F5F1EC",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E8D5D9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C7ADB6",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#8A8790",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#4D4A52",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "미니멀",
      "무채색",
      "레드",
      "핑크"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "미니멀"
    ],
    "graphicCategories": [
      "soft-graphic"
    ],
    "note": "웜화이트, 파우더핑크, 차콜 포인트."
  },
  {
    "id": "graphic-extra-043",
    "name": "올리브 모서리",
    "scheme": "free",
    "colors": [
      {
        "hex": "#EEEDE5",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#D5D8C9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A8B19B",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#6F7868",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#766077",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "미니멀",
      "옐로우",
      "그린",
      "무채색"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "미니멀"
    ],
    "graphicCategories": [
      "vintage-muted"
    ],
    "note": "석회색 바탕, 차분한 올리브, 플럼 선."
  },
  {
    "id": "graphic-extra-044",
    "name": "아이스블루 절제",
    "scheme": "free",
    "colors": [
      {
        "hex": "#EBF3F5",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#C9DDE5",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A3C1D1",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#819BA9",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#566B7A",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "미니멀",
      "무채색",
      "시안",
      "블루"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "미니멀"
    ],
    "graphicCategories": [
      "soft-graphic"
    ],
    "note": "아이스블루와 슬레이트 색상 계층."
  },
  {
    "id": "graphic-extra-045",
    "name": "라임 여백 규칙",
    "scheme": "free",
    "colors": [
      {
        "hex": "#F3F2E9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#D8E8B2",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#AABB77",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#7C816F",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#605474",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "미니멀",
      "옐로우",
      "그린",
      "무채색",
      "퍼플"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "미니멀"
    ],
    "graphicCategories": [
      "accent-color"
    ],
    "note": "종이색과 저채도 라임, 진한 퍼플."
  },
  {
    "id": "graphic-extra-046",
    "name": "로즈그레이 주석",
    "scheme": "free",
    "colors": [
      {
        "hex": "#F0ECEA",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#D4C7C8",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#B3A2AC",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#858B95",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#464F60",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "미니멀",
      "오렌지",
      "레드",
      "무채색",
      "블루"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "미니멀"
    ],
    "graphicCategories": [
      "vintage-muted"
    ],
    "note": "회백색과 로즈그레이, 블루 제본선."
  },
  {
    "id": "graphic-extra-047",
    "name": "라일락 정원 지도",
    "scheme": "free",
    "colors": [
      {
        "hex": "#F4EBD9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#CDB8DE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A4C4AE",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DDB0C6",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#7A8B78",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "일러스트레이션",
      "오렌지",
      "퍼플",
      "그린",
      "핑크",
      "무채색"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "일러스트레이션"
    ],
    "graphicCategories": [
      "soft-graphic"
    ]
  },
  {
    "id": "graphic-extra-048",
    "name": "바다 유리물고기",
    "scheme": "free",
    "colors": [
      {
        "hex": "#C3E5E5",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#78C2C4",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#7B88BB",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#C6ACD6",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#E9D874",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "일러스트레이션",
      "시안",
      "블루",
      "퍼플",
      "옐로우"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "일러스트레이션"
    ],
    "graphicCategories": [
      "accent-color"
    ]
  },
  {
    "id": "graphic-extra-049",
    "name": "라임 버섯 숲",
    "scheme": "free",
    "colors": [
      {
        "hex": "#D9F1B2",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#9BCB77",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#7861A0",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E1A9C8",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#F1DCC1",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "일러스트레이션",
      "그린",
      "퍼플",
      "핑크",
      "오렌지"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "일러스트레이션"
    ],
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-extra-050",
    "name": "복숭아 달개비",
    "scheme": "free",
    "colors": [
      {
        "hex": "#F4D6C6",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EBA8B1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#8CBFC5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A5A0CE",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#567F8B",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "일러스트레이션",
      "오렌지",
      "레드",
      "시안",
      "블루"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "일러스트레이션"
    ],
    "graphicCategories": [
      "soft-graphic"
    ]
  },
  {
    "id": "graphic-extra-051",
    "name": "우유빛 구름 열차",
    "scheme": "free",
    "colors": [
      {
        "hex": "#F3F1D7",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EACF84",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#CAB8E2",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A6D9C7",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#89B6C6",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "일러스트레이션",
      "옐로우",
      "오렌지",
      "퍼플",
      "그린",
      "시안"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "일러스트레이션"
    ],
    "graphicCategories": [
      "soft-graphic"
    ]
  },
  {
    "id": "graphic-extra-052",
    "name": "핑크 폴딩 북",
    "scheme": "free",
    "colors": [
      {
        "hex": "#F4DFE6",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#DFA0B8",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A973A4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#7B6898",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#B8C3B5",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "일러스트레이션",
      "핑크",
      "퍼플",
      "무채색"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "일러스트레이션"
    ],
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-extra-053",
    "name": "퍼플 기준선 시스템",
    "scheme": "free",
    "colors": [
      {
        "hex": "#F2F0E9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#2D275D",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#6DB4CA",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CAE65E",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#9C8DAE",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "스위스·모더니즘",
      "옐로우",
      "블루",
      "시안",
      "그린",
      "퍼플"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-extra-054",
    "name": "민트 정보 계층",
    "scheme": "free",
    "colors": [
      {
        "hex": "#D0F0DF",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#163E58",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#93D3C8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D761A6",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#E6DFCD",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "스위스·모더니즘",
      "그린",
      "블루",
      "시안",
      "핑크",
      "오렌지"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicCategories": [
      "accent-color"
    ]
  },
  {
    "id": "graphic-extra-055",
    "name": "시안 라임 아카이브",
    "scheme": "free",
    "colors": [
      {
        "hex": "#EAF0EC",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#2E4D61",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#59B8CC",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#C7DE60",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#789B95",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "스위스·모더니즘",
      "그린",
      "블루",
      "시안"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-extra-056",
    "name": "그레이 퍼플 지표",
    "scheme": "free",
    "colors": [
      {
        "hex": "#F1F0ED",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#BDC1C7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#6F678A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DCCB73",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#596878",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "스위스·모더니즘",
      "옐로우",
      "무채색",
      "블루"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicCategories": [
      "accent-color"
    ]
  },
  {
    "id": "graphic-extra-057",
    "name": "살구 대각선 도표",
    "scheme": "free",
    "colors": [
      {
        "hex": "#F4E6D6",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EDA88F",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#3A7B88",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#6C5C94",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#A5B7AD",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "스위스·모더니즘",
      "오렌지",
      "시안",
      "블루",
      "무채색"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-extra-058",
    "name": "쿨 레드 간격",
    "scheme": "free",
    "colors": [
      {
        "hex": "#EDF2F0",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#B7D5D1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#546E78",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#C85262",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#2E3E50",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "스위스·모더니즘",
      "그린",
      "시안",
      "레드",
      "블루"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicCategories": [
      "accent-color"
    ]
  },
  {
    "id": "graphic-extra-059",
    "name": "라벤더 차분한 표지",
    "scheme": "free",
    "colors": [
      {
        "hex": "#E9DFE8",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#B9B1C9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#929682",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#705874",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#D6C6B2",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "에디토리얼",
      "핑크",
      "퍼플",
      "무채색",
      "오렌지"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicCategories": [
      "vintage-muted"
    ]
  },
  {
    "id": "graphic-extra-060",
    "name": "말린 꽃과 도자기",
    "scheme": "free",
    "colors": [
      {
        "hex": "#EDE7DC",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#B1BCA9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C79EA5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#687C89",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#8F7E72",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "에디토리얼",
      "오렌지",
      "그린",
      "레드",
      "블루",
      "무채색"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicCategories": [
      "vintage-muted"
    ]
  },
  {
    "id": "graphic-extra-061",
    "name": "퍼플 레시피 북",
    "scheme": "free",
    "colors": [
      {
        "hex": "#F0E7D6",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#A8C8A6",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#8B77A5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D6AB91",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#5C5265",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "에디토리얼",
      "오렌지",
      "그린",
      "퍼플",
      "무채색"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-extra-062",
    "name": "아이스 실버 패션",
    "scheme": "free",
    "colors": [
      {
        "hex": "#F0F1F1",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#C9D7DC",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#9EA8C4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A7A0B5",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#626E7A",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "에디토리얼",
      "무채색",
      "시안",
      "블루",
      "퍼플"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicCategories": [
      "soft-graphic"
    ]
  },
  {
    "id": "graphic-extra-063",
    "name": "카키 블러셔 저널",
    "scheme": "free",
    "colors": [
      {
        "hex": "#E9E0D5",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#BDB8A3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#909883",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#C197A1",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#695C65",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "에디토리얼",
      "오렌지",
      "옐로우",
      "무채색",
      "레드"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicCategories": [
      "vintage-muted"
    ]
  },
  {
    "id": "graphic-extra-064",
    "name": "크림 라임 모던 북",
    "scheme": "free",
    "colors": [
      {
        "hex": "#EFF1DC",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#DAE7A6",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A4B378",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#79728D",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#BCA48D",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "에디토리얼",
      "옐로우",
      "그린",
      "무채색",
      "오렌지"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicCategories": [
      "soft-graphic"
    ]
  },
  {
    "id": "graphic-extra-065",
    "name": "라일락 2도 인쇄",
    "scheme": "free",
    "colors": [
      {
        "hex": "#F1E8D9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#9D82BE",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#5C886F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#77748F",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#D4B5C5",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "리소그래프·인쇄",
      "오렌지",
      "퍼플",
      "그린",
      "무채색",
      "핑크"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicCategories": [
      "vintage-muted"
    ]
  },
  {
    "id": "graphic-extra-066",
    "name": "형광라임 오버프린트",
    "scheme": "free",
    "colors": [
      {
        "hex": "#F4EACC",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#C6E64A",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C65B9E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#8D6D65",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#6E5B93",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "리소그래프·인쇄",
      "오렌지",
      "그린",
      "핑크",
      "레드",
      "퍼플"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicCategories": [
      "experimental"
    ]
  },
  {
    "id": "graphic-extra-067",
    "name": "세이지 잉크 결",
    "scheme": "free",
    "colors": [
      {
        "hex": "#EEE9E4",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#A5BD9D",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#718B69",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#B7A4C5",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#626973",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "리소그래프·인쇄",
      "오렌지",
      "그린",
      "퍼플",
      "무채색"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicCategories": [
      "vintage-muted"
    ]
  },
  {
    "id": "graphic-extra-068",
    "name": "인디고 인쇄 겹침",
    "scheme": "free",
    "colors": [
      {
        "hex": "#F2E9DE",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#3B5F9E",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#BD5C78",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#8C6C9E",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#DCA8A4",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "리소그래프·인쇄",
      "오렌지",
      "블루",
      "핑크",
      "퍼플",
      "레드"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-extra-069",
    "name": "오렌지 민트 잔상",
    "scheme": "free",
    "colors": [
      {
        "hex": "#F2E6D2",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#D98C57",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#73B6A6",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#B0A0AD",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#6B7182",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "리소그래프·인쇄",
      "오렌지",
      "시안",
      "무채색"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicCategories": [
      "color-block"
    ]
  },
  {
    "id": "graphic-extra-070",
    "name": "먹색 옐로 번짐",
    "scheme": "free",
    "colors": [
      {
        "hex": "#EDE6D6",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#525B66",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#CCB550",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A6BBC8",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#8A8475",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": [
      "그래픽",
      "리소그래프·인쇄",
      "오렌지",
      "무채색",
      "옐로우",
      "블루"
    ],
    "collection": "graphic",
    "graphicOrigin": "original",
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicCategories": [
      "accent-color"
    ]
  },
  {
    "colors": [
      {
        "hex": "#7A4331",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#284A33",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#3C2E54",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#6D3C1F",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#393532",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "미니멀"
    ],
    "graphicCategories": [
      "vintage-muted"
    ],
    "name": "빛의 간격",
    "id": "graphic-extra-071",
    "tags": [
      "그래픽",
      "미니멀",
      "삼각 배색",
      "레드",
      "그린",
      "퍼플",
      "오렌지",
      "무채색"
    ]
  },
  {
    "colors": [
      {
        "hex": "#6A4F6F",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#8A7B4E",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#63BCA4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#734D72",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#373437",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "미니멀"
    ],
    "graphicCategories": [
      "vintage-muted"
    ],
    "name": "공백의 곡선",
    "id": "graphic-extra-072",
    "tags": [
      "그래픽",
      "미니멀",
      "삼각 배색",
      "퍼플",
      "옐로우",
      "시안",
      "핑크",
      "무채색"
    ]
  },
  {
    "colors": [
      {
        "hex": "#5FB3CF",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E175CC",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#AED92C",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#8AB9DA",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#515962",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "미니멀"
    ],
    "graphicCategories": [
      "soft-graphic"
    ],
    "name": "한 점과 다섯 면",
    "id": "graphic-extra-073",
    "tags": [
      "그래픽",
      "미니멀",
      "삼각 배색",
      "시안",
      "핑크",
      "그린",
      "블루",
      "무채색"
    ]
  },
  {
    "colors": [
      {
        "hex": "#725938",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#6B6343",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#315667",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#435E88",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#34302B",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "미니멀"
    ],
    "graphicCategories": [
      "vintage-muted"
    ],
    "name": "종이의 경계",
    "id": "graphic-extra-074",
    "tags": [
      "그래픽",
      "미니멀",
      "보색 배색",
      "오렌지",
      "옐로우",
      "시안",
      "블루",
      "무채색"
    ]
  },
  {
    "colors": [
      {
        "hex": "#979C9E",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#B3B7C0",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F6806D",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E9904D",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#DDEDFB",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "미니멀"
    ],
    "graphicCategories": [
      "accent-color"
    ],
    "name": "조용한 좌표",
    "id": "graphic-extra-075",
    "tags": [
      "그래픽",
      "미니멀",
      "단색 조화",
      "무채색",
      "레드",
      "오렌지",
      "블루"
    ]
  },
  {
    "colors": [
      {
        "hex": "#6A6561",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#403C37",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#836F36",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#4D4C20",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#A8B575",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "미니멀"
    ],
    "graphicCategories": [
      "accent-color"
    ],
    "name": "비어 있는 선반",
    "id": "graphic-extra-076",
    "tags": [
      "그래픽",
      "미니멀",
      "유사색 배색",
      "무채색",
      "오렌지",
      "옐로우",
      "그린"
    ]
  },
  {
    "colors": [
      {
        "hex": "#453469",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#7A3B94",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#97A032",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#6C884B",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#80748B",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "미니멀"
    ],
    "graphicCategories": [
      "vintage-muted"
    ],
    "name": "가벼운 모서리",
    "id": "graphic-extra-077",
    "tags": [
      "그래픽",
      "미니멀",
      "사각 배색",
      "블루",
      "퍼플",
      "옐로우",
      "그린",
      "무채색"
    ]
  },
  {
    "colors": [
      {
        "hex": "#107A46",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#1F08B3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#C50E59",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#787E13",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#1D2120",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "일러스트레이션"
    ],
    "graphicCategories": [
      "color-block"
    ],
    "name": "밤의 온실 탐험",
    "id": "graphic-extra-078",
    "tags": [
      "그래픽",
      "일러스트레이션",
      "정사각 배색",
      "그린",
      "블루",
      "핑크",
      "옐로우",
      "무채색"
    ]
  },
  {
    "colors": [
      {
        "hex": "#9703B4",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#431A09",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#163F0D",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#09374A",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#8D828E",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "일러스트레이션"
    ],
    "graphicCategories": [
      "deep-color"
    ],
    "name": "언덕의 우체국",
    "id": "graphic-extra-079",
    "tags": [
      "그래픽",
      "일러스트레이션",
      "정사각 배색",
      "퍼플",
      "오렌지",
      "그린",
      "시안",
      "무채색"
    ]
  },
  {
    "colors": [
      {
        "hex": "#C45767",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#91A26C",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#368976",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#5D547A",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#333031",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "일러스트레이션"
    ],
    "graphicCategories": [
      "vintage-muted"
    ],
    "name": "별빛을 담는 병",
    "id": "graphic-extra-080",
    "tags": [
      "그래픽",
      "일러스트레이션",
      "정사각 배색",
      "레드",
      "그린",
      "시안",
      "블루",
      "무채색"
    ]
  },
  {
    "colors": [
      {
        "hex": "#AF1D0D",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#62B91A",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#076F7E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#4D017A",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#C83706",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "일러스트레이션"
    ],
    "graphicCategories": [
      "color-block"
    ],
    "name": "우산을 든 새",
    "id": "graphic-extra-081",
    "tags": [
      "그래픽",
      "일러스트레이션",
      "정사각 배색",
      "레드",
      "그린",
      "시안",
      "퍼플",
      "오렌지"
    ]
  },
  {
    "colors": [
      {
        "hex": "#59591F",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#3F6652",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#131434",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#572B47",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#0A0905",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "일러스트레이션"
    ],
    "graphicCategories": [
      "deep-color"
    ],
    "name": "구름 아래 찻집",
    "id": "graphic-extra-082",
    "tags": [
      "그래픽",
      "일러스트레이션",
      "정사각 배색",
      "옐로우",
      "그린",
      "블루",
      "핑크",
      "무채색"
    ]
  },
  {
    "colors": [
      {
        "hex": "#AFD339",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#60DCC8",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#A485DF",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CF6679",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#7E8673",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "일러스트레이션"
    ],
    "graphicCategories": [
      "soft-graphic"
    ],
    "name": "해안가의 종이배",
    "id": "graphic-extra-083",
    "tags": [
      "그래픽",
      "일러스트레이션",
      "정사각 배색",
      "그린",
      "시안",
      "퍼플",
      "레드",
      "무채색"
    ]
  },
  {
    "colors": [
      {
        "hex": "#E39BC4",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#D1CCA8",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#B1D4BC",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#8E9AD9",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#E5E0E2",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "일러스트레이션"
    ],
    "graphicCategories": [
      "vintage-muted"
    ],
    "name": "목련 도감",
    "id": "graphic-extra-084",
    "tags": [
      "그래픽",
      "일러스트레이션",
      "정사각 배색",
      "핑크",
      "옐로우",
      "그린",
      "블루",
      "무채색"
    ]
  },
  {
    "colors": [
      {
        "hex": "#3A6614",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#126F7D",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#701CB1",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A63525",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#282B27",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicCategories": [
      "color-block"
    ],
    "name": "신호와 기준선",
    "id": "graphic-extra-085",
    "tags": [
      "그래픽",
      "스위스·모더니즘",
      "정사각 배색",
      "그린",
      "시안",
      "퍼플",
      "레드",
      "무채색"
    ]
  },
  {
    "colors": [
      {
        "hex": "#A58299",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#A7A683",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#5DC48A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#B4BAE0",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#D9D7D8",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicCategories": [
      "color-block"
    ],
    "name": "야간 버스 시간표",
    "id": "graphic-extra-086",
    "tags": [
      "그래픽",
      "스위스·모더니즘",
      "정사각 배색",
      "핑크",
      "옐로우",
      "그린",
      "블루",
      "무채색"
    ]
  },
  {
    "colors": [
      {
        "hex": "#62316F",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#7C4F2E",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#449036",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#385972",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#100611",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicCategories": [
      "vintage-muted"
    ],
    "name": "세 가지 활자 크기",
    "id": "graphic-extra-087",
    "tags": [
      "그래픽",
      "스위스·모더니즘",
      "정사각 배색",
      "퍼플",
      "오렌지",
      "그린",
      "블루",
      "무채색"
    ]
  },
  {
    "colors": [
      {
        "hex": "#B07BF3",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F494A1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D4EEA5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#6FE5D4",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#D4D2D6",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicCategories": [
      "color-block"
    ],
    "name": "평면도의 여백",
    "id": "graphic-extra-088",
    "tags": [
      "그래픽",
      "스위스·모더니즘",
      "정사각 배색",
      "퍼플",
      "레드",
      "그린",
      "시안",
      "무채색"
    ]
  },
  {
    "colors": [
      {
        "hex": "#CFCDEA",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E9BFD1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D7D78C",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#C2E5D7",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#83828D",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "스위스·모더니즘"
    ],
    "graphicCategories": [
      "vintage-muted"
    ],
    "name": "방향 표지판",
    "id": "graphic-extra-089",
    "tags": [
      "그래픽",
      "스위스·모더니즘",
      "정사각 배색",
      "블루",
      "핑크",
      "옐로우",
      "그린",
      "무채색"
    ]
  },
  {
    "colors": [
      {
        "hex": "#775E04",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#0A9023",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#0A163B",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#B4057F",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#141413",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicCategories": [
      "deep-color"
    ],
    "name": "손으로 접은 표지",
    "id": "graphic-extra-090",
    "tags": [
      "그래픽",
      "에디토리얼",
      "정사각 배색",
      "옐로우",
      "그린",
      "블루",
      "핑크",
      "무채색"
    ]
  },
  {
    "colors": [
      {
        "hex": "#C25475",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#B0B66C",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#75B29D",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#7769B7",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#7A545D",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicCategories": [
      "soft-graphic"
    ],
    "name": "정원 채집 노트",
    "id": "graphic-extra-091",
    "tags": [
      "그래픽",
      "에디토리얼",
      "정사각 배색",
      "핑크",
      "옐로우",
      "그린",
      "블루",
      "레드"
    ]
  },
  {
    "colors": [
      {
        "hex": "#362D52",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#72242F",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#617032",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#284944",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#341F52",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicCategories": [
      "vintage-muted"
    ],
    "name": "기후와 도시 특집",
    "id": "graphic-extra-092",
    "tags": [
      "그래픽",
      "에디토리얼",
      "정사각 배색",
      "블루",
      "레드",
      "그린",
      "시안",
      "퍼플"
    ]
  },
  {
    "colors": [
      {
        "hex": "#3C852C",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#335C6A",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#793488",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#3E2214",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#5A6559",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "에디토리얼"
    ],
    "graphicCategories": [
      "deep-color"
    ],
    "name": "공방의 도구 사전",
    "id": "graphic-extra-093",
    "tags": [
      "그래픽",
      "에디토리얼",
      "정사각 배색",
      "그린",
      "시안",
      "퍼플",
      "오렌지",
      "무채색"
    ]
  },
  {
    "colors": [
      {
        "hex": "#881489",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#904212",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#249A17",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#0E3F66",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#B422B3",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicCategories": [
      "experimental"
    ],
    "name": "잉크가 겹친 모퉁이",
    "id": "graphic-extra-094",
    "tags": [
      "그래픽",
      "리소그래프·인쇄",
      "정사각 배색",
      "퍼플",
      "오렌지",
      "그린",
      "블루",
      "핑크"
    ]
  },
  {
    "colors": [
      {
        "hex": "#F6F6B0",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#6AF1B7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#9D9BF9",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E973B2",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#FFFFFF",
        "ratio": 8,
        "role": "point"
      }
    ],
    "collection": "graphic",
    "scheme": "free",
    "graphicOrigin": "original",
    "graphicStyles": [
      "리소그래프·인쇄"
    ],
    "graphicCategories": [
      "color-block"
    ],
    "name": "두 판 사이의 틈",
    "id": "graphic-extra-095",
    "tags": [
      "그래픽",
      "리소그래프·인쇄",
      "정사각 배색",
      "옐로우",
      "그린",
      "블루",
      "핑크",
      "무채색"
    ]
  }
 ];
