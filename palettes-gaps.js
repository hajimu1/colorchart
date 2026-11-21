// 검색 결과가 적은 색 계열·배색·색 개수 및 밝기·채도 구간 보충.
const GAP_PALETTES = [
  {
    "id": "gap-001",
    "name": "벚꽃색 바탕의 더스티로즈",
    "searchAliases": ["레드 밝은 중간 톤온톤 2색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E4BFBE",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CC8785",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-002",
    "name": "석회색 바탕의 모래색",
    "searchAliases": ["오렌지 밝은 중간 톤온톤 2색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E5D1BD",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CEA983",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-003",
    "name": "상아색 바탕의 밀짚색",
    "searchAliases": ["옐로우 밝은 중간 톤온톤 2색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E6E3BC",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CFCB81",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-004",
    "name": "연녹색 바탕의 연두",
    "searchAliases": ["그린 밝은 중간 톤온톤 2색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#C2E5C5",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#88CD8E",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-005",
    "name": "물빛 바탕의 하늘색",
    "searchAliases": ["시안 밝은 중간 톤온톤 2색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#C1E4E6",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#87CBCF",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-006",
    "name": "라일락 바탕의 수레국화색",
    "searchAliases": ["블루 밝은 중간 톤온톤 2색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#C0C6E7",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#8590D1",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-007",
    "name": "라일락 바탕의 등꽃색",
    "searchAliases": ["퍼플 밝은 중간 톤온톤 2색 07"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#DCC5E7",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#B98CCF",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["퍼플","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-008",
    "name": "벚꽃색의 더스티로즈 테두리",
    "searchAliases": ["핑크 밝은 중간 톤온톤 2색 08"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E8C5DC",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#D08AB9",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["핑크","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-009",
    "name": "딸기우유 바탕의 산호색",
    "searchAliases": ["레드 밝은 선명한 톤온톤 2색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#F2B2B0",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#E76E6A",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-010",
    "name": "복숭아색 바탕의 꿀빛",
    "searchAliases": ["오렌지 밝은 선명한 톤온톤 2색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#F3D2AF",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#E8AA68",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-011",
    "name": "연노랑 바탕의 레몬",
    "searchAliases": ["옐로우 밝은 선명한 톤온톤 2색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#F4F0AE",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#EAE266",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-012",
    "name": "연옥색 바탕의 형광 연두",
    "searchAliases": ["그린 밝은 선명한 톤온톤 2색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#B4F3BA",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#6EE778",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-013",
    "name": "연민트 바탕의 민트",
    "searchAliases": ["시안 밝은 선명한 톤온톤 2색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#B4F0F4",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#6DE1E9",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-014",
    "name": "라벤더 바탕의 아이리스",
    "searchAliases": ["블루 밝은 선명한 톤온톤 2색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#B3BCF5",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#6B7DEB",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-015",
    "name": "라벤더 바탕의 난초색",
    "searchAliases": ["퍼플 밝은 선명한 톤온톤 2색 07"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E0B9F4",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#C173E8",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["퍼플","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-016",
    "name": "벚꽃색 바탕의 난초색",
    "searchAliases": ["핑크 밝은 선명한 톤온톤 2색 08"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#F4B8E0",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#EA71C2",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["핑크","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-017",
    "name": "석회색 바탕의 머시룸",
    "searchAliases": ["레드 밝은 차분한 톤온톤 3색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#D9CAC9",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#B79A9A",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#ECE4E4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-018",
    "name": "석회색과 머시룸",
    "searchAliases": ["오렌지 밝은 차분한 톤온톤 3색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#DAD1C8",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#B9A998",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#ECE8E4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-019",
    "name": "상아색 바탕의 모래색",
    "searchAliases": ["옐로우 밝은 차분한 톤온톤 3색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#DBDAC7",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#BBB896",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#EDECE3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-020",
    "name": "석회색 바탕의 옥색",
    "searchAliases": ["그린 밝은 차분한 톤온톤 3색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#CCDBCE",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#9DB99F",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E7EEE8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-021",
    "name": "물빛 바탕의 은회색",
    "searchAliases": ["시안 밝은 차분한 톤온톤 3색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#CBDBDC",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#9BB9BB",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E7EEEE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-022",
    "name": "라일락 바탕의 회청색",
    "searchAliases": ["블루 밝은 차분한 톤온톤 3색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#CBCDDD",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#999EBD",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E6E8EF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-023",
    "name": "라일락 바탕의 회보라",
    "searchAliases": ["퍼플 밝은 차분한 톤온톤 3색 07"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#D9CFDD",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#B2A0BB",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#EEEAF0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-024",
    "name": "라일락에서 회보라까지",
    "searchAliases": ["핑크 밝은 차분한 톤온톤 3색 08"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#DECED9",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#BD9EB3",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F1EAEE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["핑크","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-025",
    "name": "딸기우유에서 산호색까지",
    "searchAliases": ["레드 밝은 선명한 톤온톤 3색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#F2B2B0",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E76E6A",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F9D9D8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-026",
    "name": "복숭아색에서 꿀빛까지",
    "searchAliases": ["오렌지 밝은 선명한 톤온톤 3색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#F3D2AF",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E8AA68",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F9E8D7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-027",
    "name": "연노랑에서 레몬까지",
    "searchAliases": ["옐로우 밝은 선명한 톤온톤 3색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#F4F0AE",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EAE266",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F9F7D7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-028",
    "name": "연옥색 위에 겹친 형광 연두",
    "searchAliases": ["그린 밝은 선명한 톤온톤 3색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#B4F3BA",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#6EE778",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#DCF9DE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-029",
    "name": "연민트와 민트 사이",
    "searchAliases": ["시안 밝은 선명한 톤온톤 3색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#B4F0F4",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#6DE1E9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#DCF8FA",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-030",
    "name": "라벤더 곁의 아이리스",
    "searchAliases": ["블루 밝은 선명한 톤온톤 3색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#B3BCF5",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#6B7DEB",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#DBE0FA",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-031",
    "name": "라벤더에서 난초색까지",
    "searchAliases": ["퍼플 밝은 선명한 톤온톤 3색 07"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E0B9F4",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#C173E8",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F1E0FA",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-032",
    "name": "벚꽃색과 난초색",
    "searchAliases": ["핑크 밝은 선명한 톤온톤 3색 08"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#F4B8E0",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EA71C2",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#FAE0F2",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["핑크","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-033",
    "name": "석회색의 코코아 테두리",
    "searchAliases": ["레드 밝은 차분한 톤온톤 5색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#D9CAC9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#B79A9A",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#ECE4E4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9C7473",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#775655",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-034",
    "name": "석회색 위에 코코아 한 점",
    "searchAliases": ["오렌지 밝은 차분한 톤온톤 5색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#DAD1C8",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#B9A998",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#ECE8E4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9E8870",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#796653",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-035",
    "name": "상아색의 카키브라운 테두리",
    "searchAliases": ["옐로우 밝은 차분한 톤온톤 5색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#DBDAC7",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#BBB896",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#EDECE3",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A09D6E",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#7B7951",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-036",
    "name": "석회색의 녹청색 테두리",
    "searchAliases": ["그린 밝은 차분한 톤온톤 5색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#CCDBCE",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#9DB99F",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E7EEE8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#769E79",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#577A5A",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-037",
    "name": "물빛의 슬레이트 테두리",
    "searchAliases": ["시안 밝은 차분한 톤온톤 5색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#CBDBDC",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#9BB9BB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E7EEEE",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#739DA0",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#557A7C",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-038",
    "name": "라일락의 연필심 테두리",
    "searchAliases": ["블루 밝은 차분한 톤온톤 5색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#CBCDDD",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#999EBD",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E6E8EF",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#7178A2",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#53597F",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-039",
    "name": "라일락 위에 제비꽃 한 점",
    "searchAliases": ["퍼플 밝은 차분한 톤온톤 5색 07"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#D9CFDD",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#B2A0BB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#EEEAF0",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9379A0",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#71597D",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["퍼플","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-040",
    "name": "라일락과 회보라, 팥색",
    "searchAliases": ["핑크 밝은 차분한 톤온톤 5색 08"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#DECED9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#BD9EB3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F1EAEE",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A27694",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#7F5772",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["핑크","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-041",
    "name": "벚꽃색 위에 겹친 적갈색",
    "searchAliases": ["레드 밝은 중간 톤온톤 5색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E4BFBE",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#CC8785",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F1DFDF",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#B85956",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#903F3C",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-042",
    "name": "석회색과 카키브라운 사이",
    "searchAliases": ["오렌지 밝은 중간 톤온톤 5색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E5D1BD",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#CEA983",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F2E8DE",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#BB8854",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#92673A",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-043",
    "name": "상아색 곁의 짙은 라임",
    "searchAliases": ["옐로우 밝은 중간 톤온톤 5색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E6E3BC",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#CFCB81",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F2F1DE",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#BDB651",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#948E38",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-044",
    "name": "연녹색의 에메랄드 테두리",
    "searchAliases": ["그린 밝은 중간 톤온톤 5색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#C2E5C5",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#88CD8E",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E2F3E4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#5ABA62",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#3E9345",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-045",
    "name": "물빛 위에 녹청색 한 점",
    "searchAliases": ["시안 밝은 중간 톤온톤 5색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#C1E4E6",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#87CBCF",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E2F2F3",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#57B6BC",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#3C9096",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-046",
    "name": "라일락 아래 짙은 군청",
    "searchAliases": ["블루 밝은 중간 톤온톤 5색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#C0C6E7",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#8590D1",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E1E4F4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#5564BE",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#3A4798",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-047",
    "name": "라일락에서 제비꽃까지",
    "searchAliases": ["퍼플 밝은 중간 톤온톤 5색 07"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#DCC5E7",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#B98CCF",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F0E6F4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9C5DBB",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#7A3F97",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["퍼플","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-048",
    "name": "벚꽃색과 더스티로즈, 홍매색",
    "searchAliases": ["핑크 밝은 중간 톤온톤 5색 08"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E8C5DC",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#D08AB9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F5E5F0",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#BE5B9D",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#993D7B",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["핑크","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-049",
    "name": "딸기우유와 석류",
    "searchAliases": ["레드 밝은 선명한 톤온톤 5색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#F2B2B0",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E76E6A",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F9D9D8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DD3631",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#AF211D",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-050",
    "name": "복숭아색 위에 겹친 캐러멜",
    "searchAliases": ["오렌지 밝은 선명한 톤온톤 5색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#F3D2AF",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E8AA68",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F9E8D7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E0892E",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#B1681B",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-051",
    "name": "연노랑과 겨자 사이",
    "searchAliases": ["옐로우 밝은 선명한 톤온톤 5색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#F4F0AE",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EAE266",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F9F7D7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E2D72C",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#B4AA18",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-052",
    "name": "연옥색 곁의 초록",
    "searchAliases": ["그린 밝은 선명한 톤온톤 5색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#B4F3BA",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#6EE778",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#DCF9DE",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#35DE43",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#1DB42A",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-053",
    "name": "연민트의 터쿼이즈 테두리",
    "searchAliases": ["시안 밝은 선명한 톤온톤 5색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#B4F0F4",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#6DE1E9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#DCF8FA",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#33D6E1",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#1BACB6",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-054",
    "name": "라벤더 아래 짙은 울트라마린",
    "searchAliases": ["블루 밝은 선명한 톤온톤 5색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#B3BCF5",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#6B7DEB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#DBE0FA",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#314AE3",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#1930B8",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-055",
    "name": "라벤더 위에 보라 한 점",
    "searchAliases": ["퍼플 밝은 선명한 톤온톤 5색 07"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E0B9F4",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#C173E8",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F1E0FA",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A83ADF",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#851EB8",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["퍼플","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-056",
    "name": "벚꽃색에서 홍매색까지",
    "searchAliases": ["핑크 밝은 선명한 톤온톤 5색 08"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#F4B8E0",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EA71C2",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#FAE0F2",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E137A9",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#BA1C86",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["핑크","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-057",
    "name": "석회색 바탕의 은회색",
    "searchAliases": ["레드 밝은 차분한 보색 2색 01"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#D9CAC9",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#9AB6B7",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","차분한","보색","시안"]
  },
  {
    "id": "gap-058",
    "name": "석회색 바탕의 회청색",
    "searchAliases": ["오렌지 밝은 차분한 보색 2색 02"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DAD1C8",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#98A8B9",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","차분한","보색","블루"]
  },
  {
    "id": "gap-059",
    "name": "상아색 바탕의 회청색",
    "searchAliases": ["옐로우 밝은 차분한 보색 2색 03"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DBDAC7",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#9698BB",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","차분한","보색","블루"]
  },
  {
    "id": "gap-060",
    "name": "석회색 바탕의 회보라",
    "searchAliases": ["그린 밝은 차분한 보색 2색 04"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#CCDBCE",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#B99DB7",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","차분한","보색","핑크"]
  },
  {
    "id": "gap-061",
    "name": "물빛 바탕의 머시룸",
    "searchAliases": ["시안 밝은 차분한 보색 2색 05"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#CBDBDC",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#BB9D9B",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","차분한","보색","레드"]
  },
  {
    "id": "gap-062",
    "name": "라일락 바탕의 모래색",
    "searchAliases": ["블루 밝은 차분한 보색 2색 06"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#CBCDDD",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#BDB799",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","차분한","보색","옐로우"]
  },
  {
    "id": "gap-063",
    "name": "라일락 바탕의 세이지",
    "searchAliases": ["퍼플 밝은 차분한 보색 2색 07"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#D9CFDD",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#A9BBA0",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["퍼플","밝은","차분한","보색","그린"]
  },
  {
    "id": "gap-064",
    "name": "라일락 바탕의 옥색",
    "searchAliases": ["핑크 밝은 차분한 보색 2색 08"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DECED9",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#9EBDA8",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["핑크","밝은","차분한","보색","그린"]
  },
  {
    "id": "gap-065",
    "name": "딸기우유 바탕의 민트",
    "searchAliases": ["레드 밝은 선명한 보색 2색 01"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#F2B2B0",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#6AE3E7",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","선명한","보색","시안"]
  },
  {
    "id": "gap-066",
    "name": "복숭아색 바탕의 수레국화색",
    "searchAliases": ["오렌지 밝은 선명한 보색 2색 02"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#F3D2AF",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#68A7E8",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","선명한","보색","블루"]
  },
  {
    "id": "gap-067",
    "name": "연노랑 바탕의 청보라",
    "searchAliases": ["옐로우 밝은 선명한 보색 2색 03"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#F4F0AE",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#666FEA",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","선명한","보색","블루"]
  },
  {
    "id": "gap-068",
    "name": "연옥색 바탕의 난초색",
    "searchAliases": ["그린 밝은 선명한 보색 2색 04"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#B4F3BA",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#E76EDD",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","선명한","보색","핑크"]
  },
  {
    "id": "gap-069",
    "name": "연민트 바탕의 산호색",
    "searchAliases": ["시안 밝은 선명한 보색 2색 05"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#B4F0F4",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#E9746D",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","선명한","보색","레드"]
  },
  {
    "id": "gap-070",
    "name": "라벤더 바탕의 버터",
    "searchAliases": ["블루 밝은 선명한 보색 2색 06"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#B3BCF5",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#EBD86B",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","선명한","보색","옐로우"]
  },
  {
    "id": "gap-071",
    "name": "라벤더 바탕의 라임",
    "searchAliases": ["퍼플 밝은 선명한 보색 2색 07"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E0B9F4",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#9AE873",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["퍼플","밝은","선명한","보색","그린"]
  },
  {
    "id": "gap-072",
    "name": "벚꽃색 바탕의 연두",
    "searchAliases": ["핑크 밝은 선명한 보색 2색 08"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#F4B8E0",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#71EA99",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["핑크","밝은","선명한","보색","그린"]
  },
  {
    "id": "gap-073",
    "name": "석회색과 은회색",
    "searchAliases": ["레드 밝은 차분한 보색 3색 01"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#D9CAC9",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#9AB6B7",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#ECE4E4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","차분한","보색","시안"]
  },
  {
    "id": "gap-074",
    "name": "석회색 위에 겹친 회청색",
    "searchAliases": ["오렌지 밝은 차분한 보색 3색 02"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DAD1C8",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#98A8B9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#ECE8E4",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","차분한","보색","블루"]
  },
  {
    "id": "gap-075",
    "name": "상아색과 회청색 사이",
    "searchAliases": ["옐로우 밝은 차분한 보색 3색 03"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DBDAC7",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#9698BB",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#EDECE3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","차분한","보색","블루"]
  },
  {
    "id": "gap-076",
    "name": "석회색 곁의 회보라",
    "searchAliases": ["그린 밝은 차분한 보색 3색 04"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#CCDBCE",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#B99DB7",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E7EEE8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","차분한","보색","핑크"]
  },
  {
    "id": "gap-077",
    "name": "물빛과 머시룸",
    "searchAliases": ["시안 밝은 차분한 보색 3색 05"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#CBDBDC",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#BB9D9B",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E7EEEE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","차분한","보색","레드"]
  },
  {
    "id": "gap-078",
    "name": "라일락에서 모래색까지",
    "searchAliases": ["블루 밝은 차분한 보색 3색 06"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#CBCDDD",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#BDB799",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#E6E8EF",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","차분한","보색","옐로우"]
  },
  {
    "id": "gap-079",
    "name": "라일락 위에 겹친 세이지",
    "searchAliases": ["퍼플 밝은 차분한 보색 3색 07"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#D9CFDD",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#A9BBA0",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#EEEAF0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","밝은","차분한","보색","그린"]
  },
  {
    "id": "gap-080",
    "name": "라일락과 옥색 사이",
    "searchAliases": ["핑크 밝은 차분한 보색 3색 08"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DECED9",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#9EBDA8",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F1EAEE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["핑크","밝은","차분한","보색","그린"]
  },
  {
    "id": "gap-081",
    "name": "딸기우유와 민트",
    "searchAliases": ["레드 밝은 선명한 보색 3색 01"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#F2B2B0",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#6AE3E7",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F9D9D8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","선명한","보색","시안"]
  },
  {
    "id": "gap-082",
    "name": "복숭아색 곁의 수레국화색",
    "searchAliases": ["오렌지 밝은 선명한 보색 3색 02"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#F3D2AF",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#68A7E8",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F9E8D7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","선명한","보색","블루"]
  },
  {
    "id": "gap-083",
    "name": "연노랑 위에 겹친 청보라",
    "searchAliases": ["옐로우 밝은 선명한 보색 3색 03"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#F4F0AE",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#666FEA",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F9F7D7",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","선명한","보색","블루"]
  },
  {
    "id": "gap-084",
    "name": "연옥색과 난초색 사이",
    "searchAliases": ["그린 밝은 선명한 보색 3색 04"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#B4F3BA",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E76EDD",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#DCF9DE",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","선명한","보색","핑크"]
  },
  {
    "id": "gap-085",
    "name": "연민트 곁의 산호색",
    "searchAliases": ["시안 밝은 선명한 보색 3색 05"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#B4F0F4",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#E9746D",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#DCF8FA",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","선명한","보색","레드"]
  },
  {
    "id": "gap-086",
    "name": "라벤더와 버터",
    "searchAliases": ["블루 밝은 선명한 보색 3색 06"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#B3BCF5",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#EBD86B",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#DBE0FA",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","선명한","보색","옐로우"]
  },
  {
    "id": "gap-087",
    "name": "라벤더 위에 겹친 라임",
    "searchAliases": ["퍼플 밝은 선명한 보색 3색 07"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E0B9F4",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#9AE873",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#F1E0FA",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","밝은","선명한","보색","그린"]
  },
  {
    "id": "gap-088",
    "name": "벚꽃색과 연두 사이",
    "searchAliases": ["핑크 밝은 선명한 보색 3색 08"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#F4B8E0",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#71EA99",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#FAE0F2",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["핑크","밝은","선명한","보색","그린"]
  },
  {
    "id": "gap-089",
    "name": "석회색과 은회색, 코코아",
    "searchAliases": ["레드 밝은 차분한 보색 5색 01"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#D9CAC9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#9AB6B7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#ECE4E4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#739A9C",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#775655",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","차분한","보색","시안"]
  },
  {
    "id": "gap-090",
    "name": "석회색과 회청색, 코코아",
    "searchAliases": ["오렌지 밝은 차분한 보색 5색 02"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DAD1C8",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#98A8B9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#ECE8E4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#70879E",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#796653",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","차분한","보색","블루"]
  },
  {
    "id": "gap-091",
    "name": "상아색 위에 데님 한 점",
    "searchAliases": ["옐로우 밝은 차분한 보색 5색 03"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DBDAC7",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#9698BB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#EDECE3",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#6E71A0",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#7B7951",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","차분한","보색","블루"]
  },
  {
    "id": "gap-092",
    "name": "석회색 위에 모브 한 점",
    "searchAliases": ["그린 밝은 차분한 보색 5색 04"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#CCDBCE",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#B99DB7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E7EEE8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9E769A",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#577A5A",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","차분한","보색","핑크"]
  },
  {
    "id": "gap-093",
    "name": "물빛과 머시룸, 토프",
    "searchAliases": ["시안 밝은 차분한 보색 5색 05"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#CBDBDC",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#BB9D9B",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E7EEEE",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A07673",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#557A7C",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","차분한","보색","레드"]
  },
  {
    "id": "gap-094",
    "name": "라일락 위에 연필심 한 점",
    "searchAliases": ["블루 밝은 차분한 보색 5색 06"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#CBCDDD",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#BDB799",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E6E8EF",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A29B71",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#53597F",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","차분한","보색","옐로우"]
  },
  {
    "id": "gap-095",
    "name": "라일락의 제비꽃 테두리",
    "searchAliases": ["퍼플 밝은 차분한 보색 5색 07"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#D9CFDD",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#A9BBA0",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#EEEAF0",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#86A079",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#71597D",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["퍼플","밝은","차분한","보색","그린"]
  },
  {
    "id": "gap-096",
    "name": "라일락의 팥색 테두리",
    "searchAliases": ["핑크 밝은 차분한 보색 5색 08"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DECED9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#9EBDA8",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F1EAEE",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#76A285",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#7F5772",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["핑크","밝은","차분한","보색","그린"]
  },
  {
    "id": "gap-097",
    "name": "딸기우유의 석류 테두리",
    "searchAliases": ["레드 밝은 선명한 보색 5색 01"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#F2B2B0",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#6AE3E7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F9D9D8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#31D8DD",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#AF211D",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","선명한","보색","시안"]
  },
  {
    "id": "gap-098",
    "name": "복숭아색과 아이보리, 수레국화색",
    "searchAliases": ["오렌지 밝은 선명한 보색 5색 02"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#F3D2AF",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#68A7E8",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F9E8D7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#2E85E0",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#B1681B",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","선명한","보색","블루"]
  },
  {
    "id": "gap-099",
    "name": "연노랑 곁의 청보라",
    "searchAliases": ["옐로우 밝은 선명한 보색 5색 03"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#F4F0AE",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#666FEA",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F9F7D7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#2C37E2",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#B4AA18",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","선명한","보색","블루"]
  },
  {
    "id": "gap-100",
    "name": "연옥색과 연민트, 난초색",
    "searchAliases": ["그린 밝은 선명한 보색 5색 04"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#B4F3BA",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E76EDD",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#DCF9DE",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DE35D0",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#1DB42A",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","선명한","보색","핑크"]
  },
  {
    "id": "gap-101",
    "name": "연민트와 산호색",
    "searchAliases": ["시안 밝은 선명한 보색 5색 05"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#B4F0F4",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E9746D",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#DCF8FA",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E13E33",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#1BACB6",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","선명한","보색","레드"]
  },
  {
    "id": "gap-102",
    "name": "라벤더의 울트라마린 테두리",
    "searchAliases": ["블루 밝은 선명한 보색 5색 06"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#B3BCF5",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#EBD86B",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#DBE0FA",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E3C931",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#1930B8",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","선명한","보색","옐로우"]
  },
  {
    "id": "gap-103",
    "name": "라벤더와 라임 사이",
    "searchAliases": ["퍼플 밝은 선명한 보색 5색 07"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#E0B9F4",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#9AE873",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F1E0FA",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#70DF3A",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#851EB8",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["퍼플","밝은","선명한","보색","그린"]
  },
  {
    "id": "gap-104",
    "name": "벚꽃색 위에 겹친 연두",
    "searchAliases": ["핑크 밝은 선명한 보색 5색 08"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#F4B8E0",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#71EA99",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#FAE0F2",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#37E170",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#BA1C86",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["핑크","밝은","선명한","보색","그린"]
  },
  {
    "id": "gap-105",
    "name": "에스프레소 위에 유칼립투스 한 점",
    "searchAliases": ["레드 어두운 차분한 보색 5색 01"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#3F2D2C",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#4E6D6E",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#211817",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#6D9697",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#B59897",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","차분한","보색","시안"]
  },
  {
    "id": "gap-106",
    "name": "에스프레소 바탕의 밝은 머시룸",
    "searchAliases": ["오렌지 어두운 차분한 보색 5색 02"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#40362B",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#4C5E70",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#211C17",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#6A829A",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#B7A695",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","차분한","보색","블루"]
  },
  {
    "id": "gap-107",
    "name": "차콜 바탕의 밝은 모래색",
    "searchAliases": ["옐로우 어두운 차분한 보색 5색 03"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#413F2A",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#4B4D72",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#222116",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#686B9C",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#B8B693",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","차분한","보색","블루"]
  },
  {
    "id": "gap-108",
    "name": "짙은 솔잎색 바탕의 밝은 세이지",
    "searchAliases": ["그린 어두운 차분한 보색 5색 04"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#2F4230",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#71506F",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#19241A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#997096",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#9AB79C",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","차분한","보색","핑크"]
  },
  {
    "id": "gap-109",
    "name": "차콜 바탕의 밝은 은회색",
    "searchAliases": ["시안 어두운 차분한 보색 5색 05"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#2D4143",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#73514E",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#192424",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9C706D",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#98B7B9",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["시안","어두운","차분한","보색","레드"]
  },
  {
    "id": "gap-110",
    "name": "잉크 네이비 곁의 카키",
    "searchAliases": ["블루 어두운 차분한 보색 5색 06"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#2C3044",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#756F4D",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#181A25",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9E976B",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#969BBB",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","어두운","차분한","보색","옐로우"]
  },
  {
    "id": "gap-111",
    "name": "차콜 위에 카키 한 점",
    "searchAliases": ["퍼플 어두운 차분한 보색 5색 07"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#3E3145",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#5E7453",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#231C27",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#809C73",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#B09DB9",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["퍼플","어두운","차분한","보색","그린"]
  },
  {
    "id": "gap-112",
    "name": "에스프레소와 솔잎색, 유칼립투스",
    "searchAliases": ["핑크 어두운 차분한 보색 5색 08"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#46303E",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#51765D",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#271B23",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#709E7F",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#BB9BB0",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["핑크","어두운","차분한","보색","그린"]
  },
  {
    "id": "gap-113",
    "name": "검붉은색과 터쿼이즈",
    "searchAliases": ["레드 어두운 중간 보색 5색 01"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#4C2120",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#388385",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#281111",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#4FB2B5",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CA8381",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","중간","보색","시안"]
  },
  {
    "id": "gap-114",
    "name": "에스프레소 바탕의 밝은 모래색",
    "searchAliases": ["오렌지 어두운 중간 보색 5색 02"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#4D361F",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#365E87",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#281C10",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#4C81B8",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CCA77F",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","중간","보색","블루"]
  },
  {
    "id": "gap-115",
    "name": "다크 올리브 바탕의 밝은 피스타치오",
    "searchAliases": ["옐로우 어두운 중간 보색 5색 03"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#4E4B1D",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#343989",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#29270F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#4A51BA",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CEC97E",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","중간","보색","블루"]
  },
  {
    "id": "gap-116",
    "name": "숲색 위에 겹친 홍매색",
    "searchAliases": ["그린 어두운 중간 보색 5색 04"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#214F25",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#893982",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#122B14",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#B752AE",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#85CC8B",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","중간","보색","핑크"]
  },
  {
    "id": "gap-117",
    "name": "딥 틸 바탕의 밝은 하늘색",
    "searchAliases": ["시안 어두운 중간 보색 5색 05"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#204D50",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#8B3C37",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#112A2C",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#B95650",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#83C9CE",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["시안","어두운","중간","보색","레드"]
  },
  {
    "id": "gap-118",
    "name": "잉크 네이비와 올리브 사이",
    "searchAliases": ["블루 어두운 중간 보색 5색 06"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#1F2651",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#8D8035",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#11152C",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#BCAC4E",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#818CCF",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","어두운","중간","보색","옐로우"]
  },
  {
    "id": "gap-119",
    "name": "짙은 자주 곁의 에메랄드",
    "searchAliases": ["퍼플 어두운 중간 보색 5색 07"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#432353",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#568C3B",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#26142F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#77B856",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#B688CD",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["퍼플","어두운","중간","보색","그린"]
  },
  {
    "id": "gap-120",
    "name": "짙은 자주와 흑단, 에메랄드",
    "searchAliases": ["핑크 어두운 중간 보색 5색 08"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#542143",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#398E55",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#2F1326",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#54BB76",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CF87B7",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["핑크","어두운","중간","보색","그린"]
  },
  {
    "id": "gap-121",
    "name": "검붉은색과 유칼립투스",
    "searchAliases": ["레드 어두운 선명한 보색 5색 01"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#5C110F",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#1A9EA2",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#300908",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#28D6DC",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#E66A65",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","선명한","보색","시안"]
  },
  {
    "id": "gap-122",
    "name": "고동색 위에 겹친 코발트",
    "searchAliases": ["오렌지 어두운 선명한 보색 5색 02"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#5D360E",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#195DA4",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#311C07",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#2680DF",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#E8A764",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","선명한","보색","블루"]
  },
  {
    "id": "gap-123",
    "name": "다크 올리브와 울트라마린 사이",
    "searchAliases": ["옐로우 어두운 선명한 보색 5색 03"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#5E590D",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#171FA6",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#312F07",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#232FE1",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#EAE162",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","선명한","보색","블루"]
  },
  {
    "id": "gap-124",
    "name": "숲색 곁의 홍매색",
    "searchAliases": ["그린 어두운 선명한 보색 5색 04"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#106016",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#A71B9B",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#09350C",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DD2CCE",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#6AE774",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","선명한","보색","핑크"]
  },
  {
    "id": "gap-125",
    "name": "딥 틸과 짙은 청록, 석류",
    "searchAliases": ["시안 어두운 선명한 보색 5색 05"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#0F5C62",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#A92219",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#083235",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DF352A",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#68E1E8",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["시안","어두운","선명한","보색","레드"]
  },
  {
    "id": "gap-126",
    "name": "잉크 네이비와 겨자",
    "searchAliases": ["블루 어두운 선명한 보색 5색 06"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#0D1A63",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#AB9517",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#070E36",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E2C728",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#6679EA",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","어두운","선명한","보색","옐로우"]
  },
  {
    "id": "gap-127",
    "name": "짙은 보라 위에 겹친 초록",
    "searchAliases": ["퍼플 어두운 선명한 보색 5색 07"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#491065",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#4BAB1C",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#290939",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#6ADD31",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#BF6EE7",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["퍼플","어두운","선명한","보색","그린"]
  },
  {
    "id": "gap-128",
    "name": "버건디와 초록 사이",
    "searchAliases": ["핑크 어두운 선명한 보색 5색 08"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#660F49",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#1AAD4B",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#3A0929",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#2EE069",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#E96DC0",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["핑크","어두운","선명한","보색","그린"]
  },
  {
    "id": "gap-129",
    "name": "석회색의 머시룸 테두리",
    "searchAliases": ["레드 밝은 차분한 톤온톤 2색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#D9CAC9",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#B79A9A",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-130",
    "name": "석회색 곁의 머시룸",
    "searchAliases": ["오렌지 밝은 차분한 톤온톤 2색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#DAD1C8",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#B9A998",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-131",
    "name": "상아색에서 모래색까지",
    "searchAliases": ["옐로우 밝은 차분한 톤온톤 2색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#DBDAC7",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#BBB896",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-132",
    "name": "석회색에서 옥색까지",
    "searchAliases": ["그린 밝은 차분한 톤온톤 2색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#CCDBCE",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#9DB99F",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-133",
    "name": "물빛의 은회색 테두리",
    "searchAliases": ["시안 밝은 차분한 톤온톤 2색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#CBDBDC",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#9BB9BB",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-134",
    "name": "라일락에서 회청색까지",
    "searchAliases": ["블루 밝은 차분한 톤온톤 2색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#CBCDDD",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#999EBD",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-135",
    "name": "라일락의 회보라 테두리",
    "searchAliases": ["퍼플 밝은 차분한 톤온톤 2색 07"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#D9CFDD",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#B2A0BB",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["퍼플","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-136",
    "name": "검붉은색 바탕의 고동색",
    "searchAliases": ["레드 어두운 선명한 톤인톤 2색 01"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#5C110F",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#5C420F",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","선명한","톤인톤","오렌지"]
  },
  {
    "id": "gap-137",
    "name": "고동색에서 다크 올리브까지",
    "searchAliases": ["오렌지 어두운 선명한 톤인톤 2색 02"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#5D360E",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#525D0E",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","선명한","톤인톤","옐로우"]
  },
  {
    "id": "gap-138",
    "name": "다크 올리브 바탕의 숲색",
    "searchAliases": ["옐로우 어두운 선명한 톤인톤 2색 03"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#5E590D",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#305E0D",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","선명한","톤인톤","그린"]
  },
  {
    "id": "gap-139",
    "name": "숲색의 옅고 짙은 결",
    "searchAliases": ["그린 어두운 선명한 톤인톤 2색 04"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#106016",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#10604A",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","선명한","톤인톤","시안"]
  },
  {
    "id": "gap-140",
    "name": "딥 틸 바탕의 잉크 네이비",
    "searchAliases": ["시안 어두운 선명한 톤인톤 2색 05"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#0F5C62",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#0F2862",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["시안","어두운","선명한","톤인톤","블루"]
  },
  {
    "id": "gap-141",
    "name": "잉크 네이비 바탕의 짙은 보라",
    "searchAliases": ["블루 어두운 선명한 톤인톤 2색 06"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#0D1A63",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#370D63",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","어두운","선명한","톤인톤","퍼플"]
  },
  {
    "id": "gap-142",
    "name": "짙은 보라 바탕의 짙은 자주",
    "searchAliases": ["퍼플 어두운 선명한 톤인톤 2색 07"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#491065",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#65104B",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["퍼플","어두운","선명한","톤인톤","핑크"]
  },
  {
    "id": "gap-143",
    "name": "검붉은색 위에 숲색 한 점",
    "searchAliases": ["레드 어두운 선명한 톤인톤 5색 01"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#5C110F",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#5C420F",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#5C0F3D",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#455C0F",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#4A0F5C",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","선명한","톤인톤","오렌지"]
  },
  {
    "id": "gap-144",
    "name": "고동색과 검붉은색, 다크 올리브",
    "searchAliases": ["오렌지 어두운 선명한 톤인톤 5색 02"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#5D360E",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#525D0E",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#5D0E18",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#205D0E",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#5D0E4A",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","선명한","톤인톤","옐로우"]
  },
  {
    "id": "gap-145",
    "name": "다크 올리브 위에 버건디 한 점",
    "searchAliases": ["옐로우 어두운 선명한 톤인톤 5색 03"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#5E590D",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#305E0D",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#5E260D",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#0D5E1E",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#5E0D28",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","선명한","톤인톤","그린"]
  },
  {
    "id": "gap-146",
    "name": "숲색 위에 남색 한 점",
    "searchAliases": ["그린 어두운 선명한 톤인톤 5색 04"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#106016",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#10604A",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#3C6010",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#104460",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#605210",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","선명한","톤인톤","시안"]
  },
  {
    "id": "gap-147",
    "name": "딥 틸과 잉크 네이비",
    "searchAliases": ["시안 어두운 선명한 톤인톤 5색 05"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#0F5C62",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#0F2862",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#0F6232",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#2A0F62",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#20620F",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["시안","어두운","선명한","톤인톤","블루"]
  },
  {
    "id": "gap-148",
    "name": "잉크 네이비의 숲색 테두리",
    "searchAliases": ["블루 어두운 선명한 톤인톤 5색 06"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#0D1A63",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#370D63",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#0D5063",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#630D58",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#0D6340",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","어두운","선명한","톤인톤","퍼플"]
  },
  {
    "id": "gap-149",
    "name": "짙은 보라 위에 겹친 버건디",
    "searchAliases": ["퍼플 어두운 선명한 톤인톤 5색 07"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#491065",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#65104B",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#131065",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#651016",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#104365",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["퍼플","어두운","선명한","톤인톤","핑크"]
  },
  {
    "id": "gap-150",
    "name": "에스프레소 바탕의 솔잎색",
    "searchAliases": ["레드 어두운 차분한 보색 2색 01"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#3F2D2C",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#4E6D6E",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","차분한","보색","시안"]
  },
  {
    "id": "gap-151",
    "name": "에스프레소 바탕의 연필심",
    "searchAliases": ["오렌지 어두운 차분한 보색 2색 02"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#40362B",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#4C5E70",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","차분한","보색","블루"]
  },
  {
    "id": "gap-152",
    "name": "차콜 바탕의 연필심",
    "searchAliases": ["옐로우 어두운 차분한 보색 2색 03"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#413F2A",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#4B4D72",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","차분한","보색","블루"]
  },
  {
    "id": "gap-153",
    "name": "짙은 솔잎색 바탕의 연필심",
    "searchAliases": ["그린 어두운 차분한 보색 2색 04"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#2F4230",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#71506F",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","차분한","보색","핑크"]
  },
  {
    "id": "gap-154",
    "name": "차콜 바탕의 코코아",
    "searchAliases": ["시안 어두운 차분한 보색 2색 05"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#2D4143",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#73514E",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["시안","어두운","차분한","보색","레드"]
  },
  {
    "id": "gap-155",
    "name": "잉크 네이비 바탕의 카키브라운",
    "searchAliases": ["블루 어두운 차분한 보색 2색 06"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#2C3044",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#756F4D",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","어두운","차분한","보색","옐로우"]
  },
  {
    "id": "gap-156",
    "name": "차콜 바탕의 솔잎색",
    "searchAliases": ["퍼플 어두운 차분한 보색 2색 07"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#3E3145",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#5E7453",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["퍼플","어두운","차분한","보색","그린"]
  },
  {
    "id": "gap-157",
    "name": "에스프레소와 솔잎색 사이",
    "searchAliases": ["레드 어두운 차분한 보색 3색 01"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#3F2D2C",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#4E6D6E",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#211817",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","차분한","보색","시안"]
  },
  {
    "id": "gap-158",
    "name": "에스프레소 곁의 연필심",
    "searchAliases": ["오렌지 어두운 차분한 보색 3색 02"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#40362B",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#4C5E70",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#211C17",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","차분한","보색","블루"]
  },
  {
    "id": "gap-159",
    "name": "차콜에서 연필심까지",
    "searchAliases": ["옐로우 어두운 차분한 보색 3색 03"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#413F2A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#4B4D72",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#222116",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","차분한","보색","블루"]
  },
  {
    "id": "gap-160",
    "name": "짙은 솔잎색과 연필심",
    "searchAliases": ["그린 어두운 차분한 보색 3색 04"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#2F4230",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#71506F",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#19241A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","차분한","보색","핑크"]
  },
  {
    "id": "gap-161",
    "name": "차콜에서 코코아까지",
    "searchAliases": ["시안 어두운 차분한 보색 3색 05"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#2D4143",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#73514E",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#192424",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","어두운","차분한","보색","레드"]
  },
  {
    "id": "gap-162",
    "name": "잉크 네이비에서 카키브라운까지",
    "searchAliases": ["블루 어두운 차분한 보색 3색 06"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#2C3044",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#756F4D",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#181A25",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","어두운","차분한","보색","옐로우"]
  },
  {
    "id": "gap-163",
    "name": "차콜 위에 겹친 솔잎색",
    "searchAliases": ["퍼플 어두운 차분한 보색 3색 07"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#3E3145",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#5E7453",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#231C27",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["퍼플","어두운","차분한","보색","그린"]
  },
  {
    "id": "gap-164",
    "name": "에스프레소의 웜그레이 테두리",
    "searchAliases": ["레드 어두운 차분한 톤온톤 5색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#3F2D2C",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#6E4F4E",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#211817",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#976E6D",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#B59897",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-165",
    "name": "에스프레소 위에 머시룸 한 점",
    "searchAliases": ["오렌지 어두운 차분한 톤온톤 5색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#40362B",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#705F4C",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#211C17",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9A836A",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#B7A695",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-166",
    "name": "차콜에서 모래색까지",
    "searchAliases": ["옐로우 어두운 차분한 톤온톤 5색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#413F2A",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#72704B",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#222116",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9C9968",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#B8B693",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-167",
    "name": "짙은 솔잎색과 솔잎색, 세이지",
    "searchAliases": ["그린 어두운 차분한 톤온톤 5색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#2F4230",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#507153",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#19241A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#709973",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#9AB79C",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-168",
    "name": "차콜과 은회색 사이",
    "searchAliases": ["시안 어두운 차분한 톤온톤 5색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#2D4143",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#4E7173",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#192424",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#6D999C",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#98B7B9",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["시안","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-169",
    "name": "잉크 네이비 곁의 회청색",
    "searchAliases": ["블루 어두운 차분한 톤온톤 5색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#2C3044",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#4D5275",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#181A25",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#6B729E",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#969BBB",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-170",
    "name": "검붉은색의 다홍 테두리",
    "searchAliases": ["레드 어두운 선명한 톤온톤 5색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#5C110F",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#A21F1A",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#300908",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DC2E28",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#E66A65",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","선명한","톤온톤"]
  },
  {
    "id": "gap-171",
    "name": "고동색 위에 귤색 한 점",
    "searchAliases": ["오렌지 어두운 선명한 톤온톤 5색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#5D360E",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#A46019",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#311C07",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DF8426",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#E8A764",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","선명한","톤온톤"]
  },
  {
    "id": "gap-172",
    "name": "다크 올리브 바탕의 밝은 노랑",
    "searchAliases": ["옐로우 어두운 선명한 톤온톤 5색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#5E590D",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#A69D17",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#312F07",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E1D523",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#EAE162",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","선명한","톤온톤"]
  },
  {
    "id": "gap-173",
    "name": "숲색 바탕의 밝은 연두",
    "searchAliases": ["그린 어두운 선명한 톤온톤 5색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#106016",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#1BA727",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#09350C",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#2CDD3B",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#6AE774",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","선명한","톤온톤"]
  },
  {
    "id": "gap-174",
    "name": "딥 틸 바탕의 밝은 시안",
    "searchAliases": ["시안 어두운 선명한 톤온톤 5색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#0F5C62",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#19A0A9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#083235",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#2AD4DF",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#68E1E8",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["시안","어두운","선명한","톤온톤"]
  },
  {
    "id": "gap-175",
    "name": "잉크 네이비에서 아이리스까지",
    "searchAliases": ["블루 어두운 선명한 톤온톤 5색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#0D1A63",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#172CAB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#070E36",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#2842E2",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#6679EA",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","어두운","선명한","톤온톤"]
  },
  {
    "id": "gap-176",
    "name": "석회색의 겹빛",
    "searchAliases": ["레드 밝은 차분한 톤인톤 2색 01"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#D9CAC9",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#D9D4C9",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","차분한","톤인톤","오렌지"]
  },
  {
    "id": "gap-177",
    "name": "석회색의 옅고 짙은 결",
    "searchAliases": ["오렌지 밝은 차분한 톤인톤 2색 02"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#DAD1C8",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#D7DAC8",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","차분한","톤인톤","옐로우"]
  },
  {
    "id": "gap-178",
    "name": "상아색 바탕의 석회색",
    "searchAliases": ["옐로우 밝은 차분한 톤인톤 2색 03"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#DBDAC7",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#D0DBC7",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","차분한","톤인톤","그린"]
  },
  {
    "id": "gap-179",
    "name": "석회색 바탕의 물빛",
    "searchAliases": ["그린 밝은 차분한 톤인톤 2색 04"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#CCDBCE",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CCDBD7",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","차분한","톤인톤","시안"]
  },
  {
    "id": "gap-180",
    "name": "물빛의 겹빛",
    "searchAliases": ["시안 밝은 차분한 톤인톤 2색 05"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#CBDBDC",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CBD0DC",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","차분한","톤인톤","블루"]
  },
  {
    "id": "gap-181",
    "name": "라일락의 옅고 짙은 결",
    "searchAliases": ["블루 밝은 차분한 톤인톤 2색 06"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#CBCDDD",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#D3CBDD",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","차분한","톤인톤","퍼플"]
  },
  {
    "id": "gap-182",
    "name": "검붉은색과 고동색",
    "searchAliases": ["레드 어두운 선명한 톤인톤 3색 01"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#5C110F",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#5C420F",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#5C0F3D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","선명한","톤인톤","오렌지"]
  },
  {
    "id": "gap-183",
    "name": "고동색 위에 겹친 다크 올리브",
    "searchAliases": ["오렌지 어두운 선명한 톤인톤 3색 02"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#5D360E",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#525D0E",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#5D0E18",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","선명한","톤인톤","옐로우"]
  },
  {
    "id": "gap-184",
    "name": "다크 올리브 바탕의 에스프레소",
    "searchAliases": ["옐로우 어두운 선명한 톤인톤 3색 03"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#5E590D",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#305E0D",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#5E260D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","선명한","톤인톤","그린"]
  },
  {
    "id": "gap-185",
    "name": "숲색의 겹빛",
    "searchAliases": ["그린 어두운 선명한 톤인톤 3색 04"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#106016",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#10604A",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#3C6010",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","선명한","톤인톤","시안"]
  },
  {
    "id": "gap-186",
    "name": "딥 틸과 잉크 네이비 사이",
    "searchAliases": ["시안 어두운 선명한 톤인톤 3색 05"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#0F5C62",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#0F2862",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#0F6232",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","어두운","선명한","톤인톤","블루"]
  },
  {
    "id": "gap-187",
    "name": "잉크 네이비 바탕의 딥 틸",
    "searchAliases": ["블루 어두운 선명한 톤인톤 3색 06"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#0D1A63",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#370D63",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#0D5063",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","어두운","선명한","톤인톤","퍼플"]
  },
  {
    "id": "gap-188",
    "name": "석회색 바탕의 라일락",
    "searchAliases": ["레드 밝은 차분한 톤인톤 4색 01"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#D9CAC9",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#D9D4C9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D9C9D3",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D4D9C9",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","차분한","톤인톤","오렌지"]
  },
  {
    "id": "gap-189",
    "name": "자갈밭의 연녹색과 연분홍",
    "searchAliases": ["오렌지 밝은 차분한 톤인톤 4색 02"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#DAD1C8",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#D7DAC8",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#DAC8CB",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CCDAC8",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","차분한","톤인톤","옐로우"]
  },
  {
    "id": "gap-190",
    "name": "상아색 곁의 석회색",
    "searchAliases": ["옐로우 밝은 차분한 톤인톤 4색 03"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#DBDAC7",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#D0DBC7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#DBCDC7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#C7DBCB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","차분한","톤인톤","그린"]
  },
  {
    "id": "gap-191",
    "name": "석회색의 물빛 테두리",
    "searchAliases": ["그린 밝은 차분한 톤인톤 4색 04"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#CCDBCE",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#CCDBD7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D4DBCC",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CCD6DB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","차분한","톤인톤","시안"]
  },
  {
    "id": "gap-192",
    "name": "물빛 바탕의 라일락",
    "searchAliases": ["시안 밝은 차분한 톤인톤 4색 05"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#CBDBDC",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#CBD0DC",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#CBDCD2",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D1CBDC",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","차분한","톤인톤","블루"]
  },
  {
    "id": "gap-193",
    "name": "라일락 바탕의 물빛",
    "searchAliases": ["블루 밝은 차분한 톤인톤 4색 06"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#CBCDDD",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#D3CBDD",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#CBD9DD",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DDCBDB",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","차분한","톤인톤","퍼플"]
  },
  {
    "id": "gap-194",
    "name": "검붉은색과 고동색, 다크 올리브",
    "searchAliases": ["레드 어두운 중간 톤인톤 5색 01"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#4C2120",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#4C3D20",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#4C203A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#3E4C20",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#41204C",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","중간","톤인톤","오렌지"]
  },
  {
    "id": "gap-195",
    "name": "에스프레소와 검붉은색, 다크 올리브",
    "searchAliases": ["오렌지 어두운 중간 톤인톤 5색 02"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#4D361F",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#464D1F",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#4D1F24",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#294D1F",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#4D1F41",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","중간","톤인톤","옐로우"]
  },
  {
    "id": "gap-196",
    "name": "다크 올리브 위에 검붉은색 한 점",
    "searchAliases": ["옐로우 어두운 중간 톤인톤 5색 03"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#4E4B1D",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#324E1D",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#4E2C1D",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#1D4E27",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#4E1D2D",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","중간","톤인톤","그린"]
  },
  {
    "id": "gap-197",
    "name": "숲색과 짙은 청록",
    "searchAliases": ["그린 어두운 중간 톤인톤 5색 04"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#214F25",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#214F42",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#3A4F21",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#213F4F",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#4F4721",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","중간","톤인톤","시안"]
  },
  {
    "id": "gap-198",
    "name": "딥 틸 위에 겹친 잉크 네이비",
    "searchAliases": ["시안 어두운 중간 톤인톤 5색 05"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#204D50",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#202F50",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#205035",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#302050",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#2A5020",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["시안","어두운","중간","톤인톤","블루"]
  },
  {
    "id": "gap-199",
    "name": "잉크 네이비와 딥 틸 사이",
    "searchAliases": ["블루 어두운 중간 톤인톤 5색 06"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#1F2651",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#381F51",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#1F4651",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#511F4B",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#1F513D",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","어두운","중간","톤인톤","퍼플"]
  },
  {
    "id": "gap-200",
    "name": "검붉은색 바탕의 유칼립투스",
    "searchAliases": ["레드 어두운 선명한 보색 2색 01"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#5C110F",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#1A9EA2",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","선명한","보색","시안"]
  },
  {
    "id": "gap-201",
    "name": "고동색 바탕의 코발트",
    "searchAliases": ["오렌지 어두운 선명한 보색 2색 02"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#5D360E",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#195DA4",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","선명한","보색","블루"]
  },
  {
    "id": "gap-202",
    "name": "다크 올리브 바탕의 울트라마린",
    "searchAliases": ["옐로우 어두운 선명한 보색 2색 03"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#5E590D",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#171FA6",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","선명한","보색","블루"]
  },
  {
    "id": "gap-203",
    "name": "숲색 바탕의 홍매색",
    "searchAliases": ["그린 어두운 선명한 보색 2색 04"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#106016",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#A71B9B",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","선명한","보색","핑크"]
  },
  {
    "id": "gap-204",
    "name": "딥 틸 바탕의 석류",
    "searchAliases": ["시안 어두운 선명한 보색 2색 05"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#0F5C62",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#A92219",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["시안","어두운","선명한","보색","레드"]
  },
  {
    "id": "gap-205",
    "name": "잉크 네이비 바탕의 겨자",
    "searchAliases": ["블루 어두운 선명한 보색 2색 06"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#0D1A63",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#AB9517",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","어두운","선명한","보색","옐로우"]
  },
  {
    "id": "gap-206",
    "name": "에스프레소의 옅고 짙은 결",
    "searchAliases": ["레드 어두운 차분한 톤인톤 3색 01"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#3F2D2C",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#3F392C",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#3F2C37",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","차분한","톤인톤","오렌지"]
  },
  {
    "id": "gap-207",
    "name": "에스프레소 바탕의 차콜",
    "searchAliases": ["오렌지 어두운 차분한 톤인톤 3색 02"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#40362B",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#3D402B",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#402B2E",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","차분한","톤인톤","옐로우"]
  },
  {
    "id": "gap-208",
    "name": "차콜 바탕의 에스프레소",
    "searchAliases": ["옐로우 어두운 차분한 톤인톤 3색 03"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#413F2A",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#34412A",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#41312A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","차분한","톤인톤","그린"]
  },
  {
    "id": "gap-209",
    "name": "짙은 솔잎색 바탕의 차콜",
    "searchAliases": ["그린 어두운 차분한 톤인톤 3색 04"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#2F4230",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#2F423C",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#39422F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","차분한","톤인톤","시안"]
  },
  {
    "id": "gap-210",
    "name": "차콜의 겹빛",
    "searchAliases": ["시안 어두운 차분한 톤인톤 3색 05"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#2D4143",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#2D3443",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#2D4337",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","어두운","차분한","톤인톤","블루"]
  },
  {
    "id": "gap-211",
    "name": "석회색 곁의 라일락",
    "searchAliases": ["레드 밝은 차분한 톤인톤 5색 01"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#D9CAC9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#D9D4C9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D9C9D3",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D4D9C9",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#D5C9D9",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","차분한","톤인톤","오렌지"]
  },
  {
    "id": "gap-212",
    "name": "석회색의 라일락 테두리",
    "searchAliases": ["오렌지 밝은 차분한 톤인톤 5색 02"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#DAD1C8",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#D7DAC8",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#DAC8CB",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CCDAC8",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#DAC8D6",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","차분한","톤인톤","옐로우"]
  },
  {
    "id": "gap-213",
    "name": "상아색 위에 석회색 한 점",
    "searchAliases": ["옐로우 밝은 차분한 톤인톤 5색 03"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#DBDAC7",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#D0DBC7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#DBCDC7",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#C7DBCB",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#DBC7CE",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","차분한","톤인톤","그린"]
  },
  {
    "id": "gap-214",
    "name": "석회색과 물빛",
    "searchAliases": ["그린 밝은 차분한 톤인톤 5색 04"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#CCDBCE",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#CCDBD7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#D4DBCC",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#CCD6DB",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#DBD8CC",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","차분한","톤인톤","시안"]
  },
  {
    "id": "gap-215",
    "name": "물빛과 석회색, 라일락",
    "searchAliases": ["시안 밝은 차분한 톤인톤 5색 05"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#CBDBDC",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#CBD0DC",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#CBDCD2",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D1CBDC",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CFDCCB",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","차분한","톤인톤","블루"]
  },
  {
    "id": "gap-216",
    "name": "에스프레소 위에 겹친 차콜",
    "searchAliases": ["레드 어두운 차분한 톤인톤 5색 01"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#3F2D2C",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#3F392C",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#3F2C37",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#393F2C",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#3A2C3F",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","차분한","톤인톤","오렌지"]
  },
  {
    "id": "gap-217",
    "name": "에스프레소와 차콜 사이",
    "searchAliases": ["오렌지 어두운 차분한 톤인톤 5색 02"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#40362B",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#3D402B",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#402B2E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#30402B",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#402B3B",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","차분한","톤인톤","옐로우"]
  },
  {
    "id": "gap-218",
    "name": "차콜에서 에스프레소까지",
    "searchAliases": ["옐로우 어두운 차분한 톤인톤 5색 03"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#413F2A",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#34412A",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#41312A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#2A412F",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#412A32",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","차분한","톤인톤","그린"]
  },
  {
    "id": "gap-219",
    "name": "짙은 솔잎색에서 차콜까지",
    "searchAliases": ["그린 어두운 차분한 톤인톤 5색 04"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#2F4230",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#2F423C",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#39422F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#2F3B42",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#423E2F",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","차분한","톤인톤","시안"]
  },
  {
    "id": "gap-220",
    "name": "차콜 곁의 잉크 네이비",
    "searchAliases": ["시안 어두운 차분한 톤인톤 5색 05"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#2D4143",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#2D3443",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#2D4337",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#342D43",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#32432D",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["시안","어두운","차분한","톤인톤","블루"]
  },
  {
    "id": "gap-221",
    "name": "석회색 바탕의 유칼립투스",
    "searchAliases": ["레드 밝은 차분한 보색 4색 01"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#D9CAC9",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#9AB6B7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#ECE4E4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#739A9C",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","차분한","보색","시안"]
  },
  {
    "id": "gap-222",
    "name": "석회색 바탕의 더스티블루",
    "searchAliases": ["오렌지 밝은 차분한 보색 4색 02"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DAD1C8",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#98A8B9",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#ECE8E4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#70879E",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","차분한","보색","블루"]
  },
  {
    "id": "gap-223",
    "name": "상아색 바탕의 데님",
    "searchAliases": ["옐로우 밝은 차분한 보색 4색 03"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#DBDAC7",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#9698BB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#EDECE3",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#6E71A0",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","차분한","보색","블루"]
  },
  {
    "id": "gap-224",
    "name": "석회색 바탕의 모브",
    "searchAliases": ["그린 밝은 차분한 보색 4색 04"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#CCDBCE",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#B99DB7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E7EEE8",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9E769A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","차분한","보색","핑크"]
  },
  {
    "id": "gap-225",
    "name": "물빛 바탕의 토프",
    "searchAliases": ["시안 밝은 차분한 보색 4색 05"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#CBDBDC",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#BB9D9B",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E7EEEE",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#A07673",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","차분한","보색","레드"]
  },
  {
    "id": "gap-226",
    "name": "검붉은색의 더스티로즈 테두리",
    "searchAliases": ["레드 어두운 중간 톤온톤 5색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#4C2120",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#853A38",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#281111",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#B5524F",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CA8381",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","중간","톤온톤"]
  },
  {
    "id": "gap-227",
    "name": "에스프레소 위에 모래색 한 점",
    "searchAliases": ["오렌지 어두운 중간 톤온톤 5색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#4D361F",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#875F36",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#281C10",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#B8834C",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CCA77F",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","중간","톤온톤"]
  },
  {
    "id": "gap-228",
    "name": "다크 올리브 바탕의 밝은 겨자",
    "searchAliases": ["옐로우 어두운 중간 톤온톤 5색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#4E4B1D",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#898434",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#29270F",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#BAB34A",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CEC97E",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","중간","톤온톤"]
  },
  {
    "id": "gap-229",
    "name": "숲색에서 연두까지",
    "searchAliases": ["그린 어두운 중간 톤온톤 5색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#214F25",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#398940",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#122B14",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#52B75B",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#85CC8B",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","중간","톤온톤"]
  },
  {
    "id": "gap-230",
    "name": "에스프레소의 겹빛",
    "searchAliases": ["레드 어두운 차분한 톤인톤 2색 01"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#3F2D2C",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#3F392C",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","차분한","톤인톤","오렌지"]
  },
  {
    "id": "gap-231",
    "name": "에스프레소와 차콜",
    "searchAliases": ["오렌지 어두운 차분한 톤인톤 2색 02"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#40362B",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#3D402B",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","차분한","톤인톤","옐로우"]
  },
  {
    "id": "gap-232",
    "name": "차콜 바탕의 짙은 솔잎색",
    "searchAliases": ["옐로우 어두운 차분한 톤인톤 2색 03"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#413F2A",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#34412A",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","차분한","톤인톤","그린"]
  },
  {
    "id": "gap-233",
    "name": "짙은 솔잎색 위에 겹친 차콜",
    "searchAliases": ["그린 어두운 차분한 톤인톤 2색 04"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#2F4230",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#2F423C",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","차분한","톤인톤","시안"]
  },
  {
    "id": "gap-234",
    "name": "검붉은색과 유칼립투스 사이",
    "searchAliases": ["레드 어두운 선명한 보색 3색 01"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#5C110F",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#1A9EA2",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#300908",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","선명한","보색","시안"]
  },
  {
    "id": "gap-235",
    "name": "고동색 곁의 코발트",
    "searchAliases": ["오렌지 어두운 선명한 보색 3색 02"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#5D360E",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#195DA4",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#311C07",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","선명한","보색","블루"]
  },
  {
    "id": "gap-236",
    "name": "다크 올리브와 울트라마린",
    "searchAliases": ["옐로우 어두운 선명한 보색 3색 03"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#5E590D",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#171FA6",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#312F07",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","선명한","보색","블루"]
  },
  {
    "id": "gap-237",
    "name": "숲색과 홍매색 사이",
    "searchAliases": ["그린 어두운 선명한 보색 3색 04"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#106016",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#A71B9B",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#09350C",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","선명한","보색","핑크"]
  },
  {
    "id": "gap-238",
    "name": "검붉은색 바탕의 석류",
    "searchAliases": ["레드 어두운 선명한 톤온톤 2색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#5C110F",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#A21F1A",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","선명한","톤온톤"]
  },
  {
    "id": "gap-239",
    "name": "고동색 바탕의 벽돌색",
    "searchAliases": ["오렌지 어두운 선명한 톤온톤 2색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#5D360E",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#A46019",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","선명한","톤온톤"]
  },
  {
    "id": "gap-240",
    "name": "다크 올리브 바탕의 겨자",
    "searchAliases": ["옐로우 어두운 선명한 톤온톤 2색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#5E590D",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#A69D17",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","선명한","톤온톤"]
  },
  {
    "id": "gap-241",
    "name": "에스프레소 바탕의 팥색",
    "searchAliases": ["레드 어두운 차분한 톤온톤 4색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#3F2D2C",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#6E4F4E",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#211817",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#976E6D",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-242",
    "name": "에스프레소 바탕의 토프",
    "searchAliases": ["오렌지 어두운 차분한 톤온톤 4색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#40362B",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#705F4C",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#211C17",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9A836A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-243",
    "name": "차콜 바탕의 카키",
    "searchAliases": ["옐로우 어두운 차분한 톤온톤 4색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#413F2A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#72704B",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#222116",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9C9968",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-244",
    "name": "딸기우유 바탕의 상아색",
    "searchAliases": ["레드 밝은 선명한 톤인톤 2색 01"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#F2B2B0",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#F2DCB0",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","선명한","톤인톤","오렌지"]
  },
  {
    "id": "gap-245",
    "name": "복숭아색의 연노랑 테두리",
    "searchAliases": ["오렌지 밝은 선명한 톤인톤 2색 02"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#F3D2AF",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#E9F3AF",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","선명한","톤인톤","옐로우"]
  },
  {
    "id": "gap-246",
    "name": "연노랑에서 연녹색까지",
    "searchAliases": ["옐로우 밝은 선명한 톤인톤 2색 03"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#F4F0AE",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CCF4AE",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","선명한","톤인톤","그린"]
  },
  {
    "id": "gap-247",
    "name": "에스프레소 위에 차콜 한 점",
    "searchAliases": ["레드 어두운 차분한 톤인톤 4색 01"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#3F2D2C",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#3F392C",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#3F2C37",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#393F2C",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","차분한","톤인톤","오렌지"]
  },
  {
    "id": "gap-248",
    "name": "에스프레소와 짙은 솔잎색, 차콜",
    "searchAliases": ["오렌지 어두운 차분한 톤인톤 4색 02"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#40362B",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#3D402B",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#402B2E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#30402B",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","차분한","톤인톤","옐로우"]
  },
  {
    "id": "gap-249",
    "name": "차콜과 짙은 솔잎색, 에스프레소",
    "searchAliases": ["옐로우 어두운 차분한 톤인톤 4색 03"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#413F2A",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#34412A",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#41312A",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#2A412F",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","차분한","톤인톤","그린"]
  },
  {
    "id": "gap-250",
    "name": "에스프레소 바탕의 코코아",
    "searchAliases": ["레드 어두운 차분한 톤온톤 2색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#3F2D2C",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#6E4F4E",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-251",
    "name": "에스프레소 위에 겹친 코코아",
    "searchAliases": ["오렌지 어두운 차분한 톤온톤 2색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#40362B",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#705F4C",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-252",
    "name": "에스프레소 곁의 유칼립투스",
    "searchAliases": ["레드 어두운 차분한 보색 4색 01"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#3F2D2C",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#4E6D6E",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#211817",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#6D9697",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","차분한","보색","시안"]
  },
  {
    "id": "gap-253",
    "name": "에스프레소의 슬레이트 테두리",
    "searchAliases": ["오렌지 어두운 차분한 보색 4색 02"],
    "scheme": "complementary",
    "colors": [
      {
        "hex": "#40362B",
        "ratio": 50,
        "role": "base"
      },
      {
        "hex": "#4C5E70",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#211C17",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#6A829A",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","차분한","보색","블루"]
  },
  {
    "id": "gap-254",
    "name": "석회색 위에 라일락 한 점",
    "searchAliases": ["레드 밝은 차분한 톤인톤 3색 01"],
    "scheme": "tone-in-tone",
    "colors": [
      {
        "hex": "#D9CAC9",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#D9D4C9",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#D9C9D3",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","차분한","톤인톤","오렌지"]
  },
  {
    "id": "gap-255",
    "name": "석회색과 머시룸, 코코아",
    "searchAliases": ["오렌지 밝은 차분한 톤온톤 5색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#D9D1C9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#B7A89A",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#ECE8E4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9C8773",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#776655",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-256",
    "name": "토프 바탕의 밝은 상아색",
    "searchAliases": ["오렌지 중간 차분한 톤온톤 5색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#9C856D",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#CBBFB3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#584A3C",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E6E1DB",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#312921",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","중간","차분한","톤온톤"]
  },
  {
    "id": "gap-257",
    "name": "에스프레소에서 머시룸까지",
    "searchAliases": ["오렌지 어두운 차분한 톤온톤 5색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#41362A",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#725F4B",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#221C16",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9C8368",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#B8A793",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-258",
    "name": "상아색과 카키브라운",
    "searchAliases": ["오렌지 밝은 중간 톤온톤 5색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E5D5C2",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#CDAD88",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F3EBE2",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#BA8D5A",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#936B3E",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-259",
    "name": "황토 아래 짙은 에스프레소",
    "searchAliases": ["오렌지 중간 중간 톤온톤 5색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#BB8C54",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#DCC4A7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#6D4F2C",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EFE4D7",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#3E2D19",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","중간","톤온톤"]
  },
  {
    "id": "gap-260",
    "name": "고동색 바탕의 밝은 모래색",
    "searchAliases": ["오렌지 어두운 중간 톤온톤 5색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#513B1F",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#8D6635",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#2C2011",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#BC8B4E",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CFAD81",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","중간","톤온톤"]
  },
  {
    "id": "gap-261",
    "name": "상아색 위에 겹친 캐러멜",
    "searchAliases": ["오렌지 밝은 선명한 톤온톤 5색 07"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#F4DAB9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#E8B573",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#FAEFE0",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DF983A",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#B8761E",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-262",
    "name": "귤색 아래 짙은 에스프레소",
    "searchAliases": ["오렌지 중간 선명한 톤온톤 5색 08"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E18933",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#F0C499",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#8A4F15",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#F8E5D3",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#502E0C",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","중간","선명한","톤온톤"]
  },
  {
    "id": "gap-263",
    "name": "고동색 바탕의 밝은 꿀빛",
    "searchAliases": ["오렌지 어두운 선명한 톤온톤 5색 09"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#673C0E",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#AF6518",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#3A2208",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E2892C",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#EBAC6B",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","선명한","톤온톤"]
  },
  {
    "id": "gap-264",
    "name": "석회색과 코코아 사이",
    "searchAliases": ["오렌지 밝은 차분한 톤온톤 5색 10"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#D9D1C9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#B7A99A",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#ECE8E4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9C8873",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#776755",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-265",
    "name": "팥색 바탕의 밝은 안개색",
    "searchAliases": ["레드 중간 차분한 톤온톤 2색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#9C6F6D",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CBB4B3",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","중간","차분한","톤온톤"]
  },
  {
    "id": "gap-266",
    "name": "에스프레소 곁의 코코아",
    "searchAliases": ["레드 어두운 차분한 톤온톤 2색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#412C2A",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#724D4B",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-267",
    "name": "벚꽃색에서 더스티로즈까지",
    "searchAliases": ["레드 밝은 중간 톤온톤 2색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E5C4C2",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CD8D88",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-268",
    "name": "벽돌색 바탕의 밝은 딸기우유",
    "searchAliases": ["레드 중간 중간 톤온톤 2색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#BB5C54",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#DCACA7",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","중간","톤온톤"]
  },
  {
    "id": "gap-269",
    "name": "검붉은색 바탕의 적갈색",
    "searchAliases": ["레드 어두운 중간 톤온톤 2색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#51231F",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#8D3D35",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","중간","톤온톤"]
  },
  {
    "id": "gap-270",
    "name": "벚꽃색의 산호색 테두리",
    "searchAliases": ["레드 밝은 선명한 톤온톤 2색 07"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#F4BFB9",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#E87F73",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-271",
    "name": "빨강 바탕의 연어색",
    "searchAliases": ["레드 중간 선명한 톤온톤 2색 08"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E13833",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#F09C99",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","중간","선명한","톤온톤"]
  },
  {
    "id": "gap-272",
    "name": "버건디와 석류",
    "searchAliases": ["레드 어두운 선명한 톤온톤 2색 09"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#67120E",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#AF1E18",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","선명한","톤온톤"]
  },
  {
    "id": "gap-273",
    "name": "석회색 위에 겹친 머시룸",
    "searchAliases": ["오렌지 밝은 차분한 톤온톤 2색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#D9D1C9",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#B7A89A",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-274",
    "name": "토프와 오트밀 사이",
    "searchAliases": ["오렌지 중간 차분한 톤온톤 2색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#9C856D",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CBBFB3",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","중간","차분한","톤온톤"]
  },
  {
    "id": "gap-275",
    "name": "에스프레소의 코코아 테두리",
    "searchAliases": ["오렌지 어두운 차분한 톤온톤 2색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#41362A",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#725F4B",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-276",
    "name": "상아색 곁의 모래색",
    "searchAliases": ["오렌지 밝은 중간 톤온톤 2색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E5D5C2",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CDAD88",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-277",
    "name": "황토에서 오트밀까지",
    "searchAliases": ["오렌지 중간 중간 톤온톤 2색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#BB8C54",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#DCC4A7",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","중간","톤온톤"]
  },
  {
    "id": "gap-278",
    "name": "고동색 바탕의 카키브라운",
    "searchAliases": ["오렌지 어두운 중간 톤온톤 2색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#513B1F",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#8D6635",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","어두운","중간","톤온톤"]
  },
  {
    "id": "gap-279",
    "name": "상아색과 꿀빛",
    "searchAliases": ["오렌지 밝은 선명한 톤온톤 2색 07"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#F4DAB9",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#E8B573",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["오렌지","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-280",
    "name": "안개색 위에 겹친 회청색",
    "searchAliases": ["블루 밝은 차분한 톤온톤 2색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#C9CCD9",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#9AA0B7",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-281",
    "name": "데님 바탕의 밝은 안개색",
    "searchAliases": ["블루 중간 차분한 톤온톤 2색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#6D769C",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#B3B8CB",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","중간","차분한","톤온톤"]
  },
  {
    "id": "gap-282",
    "name": "잉크 네이비와 연필심 사이",
    "searchAliases": ["블루 어두운 차분한 톤온톤 2색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#2A2E41",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#4B5272",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-283",
    "name": "라일락 곁의 수레국화색",
    "searchAliases": ["블루 밝은 중간 톤온톤 2색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#C2C8E5",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#8894CD",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-284",
    "name": "코발트 바탕의 밝은 연청보라",
    "searchAliases": ["블루 중간 중간 톤온톤 2색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#5464BB",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#A7B0DC",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","중간","톤온톤"]
  },
  {
    "id": "gap-285",
    "name": "잉크 네이비의 군청 테두리",
    "searchAliases": ["블루 어두운 중간 톤온톤 2색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#1F2651",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#35428D",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","어두운","중간","톤온톤"]
  },
  {
    "id": "gap-286",
    "name": "라벤더에서 수레국화색까지",
    "searchAliases": ["블루 밝은 선명한 톤온톤 2색 07"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#B9C1F4",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#7382E8",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-287",
    "name": "안개색 위에 연필심 한 점",
    "searchAliases": ["블루 밝은 차분한 톤온톤 5색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#C9CCD9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#9AA0B7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E4E6EC",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#737B9C",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#555C77",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-288",
    "name": "데님과 안개색, 연보라",
    "searchAliases": ["블루 중간 차분한 톤온톤 5색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#6D769C",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#B3B8CB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#3C4158",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DBDDE6",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#212431",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","중간","차분한","톤온톤"]
  },
  {
    "id": "gap-289",
    "name": "잉크 네이비 위에 회청색 한 점",
    "searchAliases": ["블루 어두운 차분한 톤온톤 5색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#2A2E41",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#4B5272",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#161822",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#68719C",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#939AB8",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-290",
    "name": "라일락과 수레국화색, 군청",
    "searchAliases": ["블루 밝은 중간 톤온톤 5색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#C2C8E5",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#8894CD",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E2E5F3",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#5A6ABA",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#3E4C93",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-291",
    "name": "코발트 바탕의 밝은 연보라",
    "searchAliases": ["블루 중간 중간 톤온톤 5색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#5464BB",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#A7B0DC",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#2C366D",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D7DBEF",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#191E3E",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","중간","톤온톤"]
  },
  {
    "id": "gap-292",
    "name": "잉크 네이비 위에 수레국화색 한 점",
    "searchAliases": ["블루 어두운 중간 톤온톤 5색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#1F2651",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#35428D",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#11152C",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#4E5DBC",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#818CCF",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","어두운","중간","톤온톤"]
  },
  {
    "id": "gap-293",
    "name": "라벤더와 수레국화색, 울트라마린",
    "searchAliases": ["블루 밝은 선명한 톤온톤 5색 07"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#B9C1F4",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#7382E8",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E0E4FA",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#3A4FDF",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#1E32B8",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["블루","밝은","선명한","톤온톤"]
  },
  {
    "id": "gap-294",
    "name": "물빛과 은회색",
    "searchAliases": ["시안 밝은 차분한 톤온톤 2색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#C9D9D9",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#9AB7B7",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-295",
    "name": "유칼립투스 바탕의 안개색",
    "searchAliases": ["시안 중간 차분한 톤온톤 2색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#6D9B9C",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#B3CBCB",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["시안","중간","차분한","톤온톤"]
  },
  {
    "id": "gap-296",
    "name": "차콜 위에 겹친 청록",
    "searchAliases": ["시안 어두운 차분한 톤온톤 2색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#2A4041",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#4B7172",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["시안","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-297",
    "name": "물빛과 하늘색 사이",
    "searchAliases": ["시안 밝은 중간 톤온톤 2색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#C2E4E5",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#88CACD",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-298",
    "name": "터쿼이즈 곁의 민트",
    "searchAliases": ["시안 중간 중간 톤온톤 2색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#54B4BB",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#A7D9DC",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["시안","중간","톤온톤"]
  },
  {
    "id": "gap-299",
    "name": "딥 틸의 바다색 테두리",
    "searchAliases": ["시안 어두운 중간 톤온톤 2색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#1F4E51",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#35868D",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["시안","어두운","중간","톤온톤"]
  },
  {
    "id": "gap-300",
    "name": "팥색 바탕의 밝은 연분홍",
    "searchAliases": ["레드 중간 차분한 톤온톤 5색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#9C6F6D",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#CBB4B3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#583D3C",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E6DBDB",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#312221",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","중간","차분한","톤온톤"]
  },
  {
    "id": "gap-301",
    "name": "에스프레소 위에 더스티로즈 한 점",
    "searchAliases": ["레드 어두운 차분한 톤온톤 5색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#412C2A",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#724D4B",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#221716",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9C6B68",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#B89593",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-302",
    "name": "벚꽃색에서 적갈색까지",
    "searchAliases": ["레드 밝은 중간 톤온톤 5색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E5C4C2",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#CD8D88",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F3E3E2",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#BA605A",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#93433E",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-303",
    "name": "벽돌색 바탕의 밝은 연분홍",
    "searchAliases": ["레드 중간 중간 톤온톤 5색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#BB5C54",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#DCACA7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#6D312C",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EFD9D7",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#3E1C19",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","중간","톤온톤"]
  },
  {
    "id": "gap-304",
    "name": "검붉은색과 적갈색, 더스티로즈",
    "searchAliases": ["레드 어두운 중간 톤온톤 5색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#51231F",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#8D3D35",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#2C1311",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#BC574E",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CF8881",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["레드","어두운","중간","톤온톤"]
  },
  {
    "id": "gap-305",
    "name": "석회색과 카키브라운",
    "searchAliases": ["옐로우 밝은 차분한 톤온톤 5색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#D9D8C9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#B7B59A",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#ECEBE4",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9C9873",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#777455",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-306",
    "name": "카키 위에 겹친 에스프레소",
    "searchAliases": ["옐로우 중간 차분한 톤온톤 5색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#9C986D",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#CBCAB3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#58563C",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E6E5DB",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#312F21",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","중간","차분한","톤온톤"]
  },
  {
    "id": "gap-307",
    "name": "상아색과 짙은 라임 사이",
    "searchAliases": ["옐로우 밝은 중간 톤온톤 5색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E5E4C2",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#CDCA88",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F3F2E2",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#BAB55A",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#938F3E",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-308",
    "name": "겨자 곁의 짙은 솔잎색",
    "searchAliases": ["옐로우 중간 중간 톤온톤 5색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#BBB754",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#DCDAA7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#6D6B2C",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EFEED7",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#3E3D19",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","중간","톤온톤"]
  },
  {
    "id": "gap-309",
    "name": "다크 올리브 바탕의 밝은 연두",
    "searchAliases": ["옐로우 어두운 중간 톤온톤 5색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#51501F",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#8D8A35",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#2C2C11",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#BCB94E",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#CFCD81",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["옐로우","어두운","중간","톤온톤"]
  },
  {
    "id": "gap-310",
    "name": "석회색 바탕의 세이지",
    "searchAliases": ["그린 밝은 차분한 톤온톤 2색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#C9D9CA",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#9AB79B",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-311",
    "name": "유칼립투스의 청자색 테두리",
    "searchAliases": ["그린 중간 차분한 톤온톤 2색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#6D9C70",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#B3CBB5",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","중간","차분한","톤온톤"]
  },
  {
    "id": "gap-312",
    "name": "짙은 솔잎색에서 솔잎색까지",
    "searchAliases": ["그린 어두운 차분한 톤온톤 2색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#2A412C",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#4B724D",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-313",
    "name": "초록 바탕의 민트",
    "searchAliases": ["그린 중간 중간 톤온톤 2색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#54BB5D",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#A7DCAC",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","중간","톤온톤"]
  },
  {
    "id": "gap-314",
    "name": "숲색과 에메랄드",
    "searchAliases": ["그린 어두운 중간 톤온톤 2색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#1F5124",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#358D3F",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","중간","톤온톤"]
  },
  {
    "id": "gap-315",
    "name": "석회색 위에 녹청색 한 점",
    "searchAliases": ["그린 밝은 차분한 톤온톤 5색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#C9D9CA",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#9AB79B",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E4ECE5",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#739C75",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#557756",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-316",
    "name": "유칼립투스와 청자색, 짙은 솔잎색",
    "searchAliases": ["그린 중간 차분한 톤온톤 5색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#6D9C70",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#B3CBB5",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#3C583E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DBE6DB",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#213122",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","중간","차분한","톤온톤"]
  },
  {
    "id": "gap-317",
    "name": "짙은 솔잎색 위에 겹친 옥색",
    "searchAliases": ["그린 어두운 차분한 톤온톤 5색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#2A412C",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#4B724D",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#162217",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#689C6C",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#93B896",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-318",
    "name": "초록과 짙은 솔잎색 사이",
    "searchAliases": ["그린 중간 중간 톤온톤 5색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#54BB5D",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#A7DCAC",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#2C6D32",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#D7EFD9",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#193E1C",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","중간","톤온톤"]
  },
  {
    "id": "gap-319",
    "name": "숲색 곁의 초록",
    "searchAliases": ["그린 어두운 중간 톤온톤 5색 06"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#1F5124",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#358D3F",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#112C14",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#4EBC59",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#81CF8A",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["그린","어두운","중간","톤온톤"]
  },
  {
    "id": "gap-320",
    "name": "라일락의 코코아 테두리",
    "searchAliases": ["핑크 밝은 차분한 톤온톤 5색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#D9C9D4",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#B79AAD",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#ECE4E9",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9C738E",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#77556C",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["핑크","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-321",
    "name": "모브 바탕의 밝은 연분홍",
    "searchAliases": ["핑크 중간 차분한 톤온톤 5색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#9C6D8C",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#CBB3C3",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#583C4E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E6DBE2",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#31212B",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["핑크","중간","차분한","톤온톤"]
  },
  {
    "id": "gap-322",
    "name": "에스프레소에서 더스티로즈까지",
    "searchAliases": ["핑크 어두운 차분한 톤온톤 5색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#412A39",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#724B64",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#22161E",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#9C688A",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#B893AB",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["핑크","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-323",
    "name": "벚꽃색 위에 홍매색 한 점",
    "searchAliases": ["핑크 밝은 중간 톤온톤 5색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#E5C2D8",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#CD88B4",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#F3E2ED",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#BA5A97",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#933E74",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["핑크","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-324",
    "name": "산딸기색과 딸기우유, 연분홍",
    "searchAliases": ["핑크 중간 중간 톤온톤 5색 05"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#BB5494",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#DCA7C8",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#6D2C55",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#EFD7E6",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#3E1930",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["핑크","중간","톤온톤"]
  },
  {
    "id": "gap-325",
    "name": "물빛과 슬레이트",
    "searchAliases": ["시안 밝은 차분한 톤온톤 5색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#C9D9D9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#9AB7B7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E4ECEC",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#739B9C",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#557777",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-326",
    "name": "유칼립투스 위에 겹친 짙은 청록",
    "searchAliases": ["시안 중간 차분한 톤온톤 5색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#6D9B9C",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#B3CBCB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#3C5758",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#DBE6E6",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#213031",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["시안","중간","차분한","톤온톤"]
  },
  {
    "id": "gap-327",
    "name": "차콜과 옥색 사이",
    "searchAliases": ["시안 어두운 차분한 톤온톤 5색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#2A4041",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#4B7172",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#162122",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#689A9C",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#93B7B8",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["시안","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-328",
    "name": "물빛 곁의 녹청색",
    "searchAliases": ["시안 밝은 중간 톤온톤 5색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#C2E4E5",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#88CACD",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E2F2F3",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#5AB5BA",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#3E8F93",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["시안","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-329",
    "name": "라일락과 회보라",
    "searchAliases": ["퍼플 밝은 차분한 톤온톤 2색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#D3C9D9",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#AB9AB7",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["퍼플","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-330",
    "name": "자수정 바탕의 라벤더",
    "searchAliases": ["퍼플 중간 차분한 톤온톤 2색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#8A6D9C",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#C2B3CB",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["퍼플","중간","차분한","톤온톤"]
  },
  {
    "id": "gap-331",
    "name": "짙은 자주의 자두 테두리",
    "searchAliases": ["퍼플 어두운 차분한 톤온톤 2색 03"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#382A41",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#634B72",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["퍼플","어두운","차분한","톤온톤"]
  },
  {
    "id": "gap-332",
    "name": "라일락에서 등꽃색까지",
    "searchAliases": ["퍼플 밝은 중간 톤온톤 2색 04"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#D8C2E5",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#B488CD",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["퍼플","밝은","중간","톤온톤"]
  },
  {
    "id": "gap-333",
    "name": "라일락과 회보라, 연필심",
    "searchAliases": ["퍼플 밝은 차분한 톤온톤 5색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#D3C9D9",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#AB9AB7",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#E9E4EC",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#8B739C",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#695577",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["퍼플","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-334",
    "name": "자수정 바탕의 밝은 연보라",
    "searchAliases": ["퍼플 중간 차분한 톤온톤 5색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#8A6D9C",
        "ratio": 40,
        "role": "base"
      },
      {
        "hex": "#C2B3CB",
        "ratio": 25,
        "role": "sub"
      },
      {
        "hex": "#4D3C58",
        "ratio": 15,
        "role": "sub"
      },
      {
        "hex": "#E2DBE6",
        "ratio": 12,
        "role": "sub"
      },
      {
        "hex": "#2B2131",
        "ratio": 8,
        "role": "point"
      }
    ],
    "tags": ["퍼플","중간","차분한","톤온톤"]
  },
  {
    "id": "gap-335",
    "name": "라일락 위에 겹친 회보라",
    "searchAliases": ["핑크 밝은 차분한 톤온톤 2색 01"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#D9C9D4",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#B79AAD",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["핑크","밝은","차분한","톤온톤"]
  },
  {
    "id": "gap-336",
    "name": "모브 바탕의 라벤더",
    "searchAliases": ["핑크 중간 차분한 톤온톤 2색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#9C6D8C",
        "ratio": 70,
        "role": "base"
      },
      {
        "hex": "#CBB3C3",
        "ratio": 30,
        "role": "point"
      }
    ],
    "tags": ["핑크","중간","차분한","톤온톤"]
  },
  {
    "id": "gap-337",
    "name": "팥색과 안개색 사이",
    "searchAliases": ["레드 중간 차분한 톤온톤 3색 02"],
    "scheme": "tone-on-tone",
    "colors": [
      {
        "hex": "#9C6F6D",
        "ratio": 60,
        "role": "base"
      },
      {
        "hex": "#CBB4B3",
        "ratio": 30,
        "role": "sub"
      },
      {
        "hex": "#583D3C",
        "ratio": 10,
        "role": "point"
      }
    ],
    "tags": ["레드","중간","차분한","톤온톤"]
  }
];
