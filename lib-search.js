// Offline palette lookup. The index belongs to the enriched object, never to a saved record.
const PaletteSearch = (() => {
  const normalize = value => String(value ?? "").normalize("NFKC").toLowerCase().trim().replace(/\s+/gu," ");
  const dictionary = new Map();
  const parents = new Map();
  function register(kind, rows) {
    for (const [key,parent,spellings] of rows) {
      const term={kind,key};
      if (parent) parents.set(key,parent);
      for (const spelling of [key,...spellings.split("|")]) dictionary.set(normalize(spelling),term);
    }
  }
  register("color", [
    ["red","","빨강|빨강색|빨간색|빨간|붉은색|붉은|붉은빛|레드"],["blue","","파랑|파란색|파란|푸른색|푸른|푸른빛|블루"],
    ["green","","초록|초록색|녹색|그린"],["yellow","","노랑|노란색|노란|황색|옐로|옐로우"],
    ["orange","","주황|주황색|오렌지"],["pink","","분홍|분홍색|핑크"],["purple","","보라|보라색|퍼플"],
    ["brown","","갈색|브라운"],["gray","","회색|그레이|그레이색|grey"],["black","","검정|검정색|검은색|검은|블랙"],
    ["white","","흰색|흰|하양|하얀색|하얀|화이트"],["cyan","","시안|사이언"],
    ["navy","blue","남색|네이비"],["sky-blue","blue","하늘색|스카이블루|스카이 블루|sky blue"],
    ["powder-blue","blue","파우더블루|파우더 블루|powder blue"],["aqua","cyan","물색|아쿠아"],
    ["mint","green","민트색|민트"],["teal","cyan","청록색|청록|틸"],["light-green","green","연두색|연두"],
    ["ivory","","상아색|아이보리"],["cream","","크림색|크림"],["beige","","베이지색|베이지"],
    ["apricot","orange","살구색|살구|애프리콧"],["coral","orange","산호색|산호|코랄"],
    ["magenta","pink","자홍색|자홍|마젠타"],["wine-red","red","포도주색|와인색|와인|wine red"],
    ["burgundy","red","버건디색|버건디"],["olive","green","올리브색|올리브"],["khaki","","카키색|카키"],
    ["blue-gray","gray","청회색|회청색|블루그레이|블루 그레이|blue gray|blue grey"],["charcoal","gray","숯색|차콜"],
    ["lavender","purple","라벤더색|라벤더"],["lilac","purple","라일락색|라일락"],["violet","purple","바이올렛|제비꽃색"],
    ["cobalt","blue","코발트색|코발트"],["gold","yellow","금색|골드"],["silver","gray","은색|실버"],
    ["taupe","","토프"],["warm-gray","gray","웜그레이|웜 그레이|warm gray|warm grey"],
    ["cool-gray","gray","쿨그레이|쿨 그레이|cool gray|cool grey"],["oatmeal","","오트밀"],
    ["sage","green","세이지색|세이지"],["emerald","green","에메랄드색|에메랄드"],["lime","green","라임색|라임"],
    ["crimson","red","진홍|진홍색"],["brick-red","red","벽돌색|brick red"]
  ]);
  register("tone", [
    ["dark","","어두운|어둡다|다크"],["light","","밝은|밝다|라이트"],
    ["deep","","딥|깊은|짙은"],["pale","","연한|페일"],["muted","","채도 낮은|저채도|뮤트|차분한|탁한"],
    ["vivid","","채도 높은|고채도|비비드|선명한|쨍한"],["pastel","","파스텔"],["soft","","부드러운|소프트"],
    ["warm","","따뜻한|웜|웜톤"],["cool","","차가운|쿨|쿨톤"]
  ]);
  function toneKeys(l,s,chroma) {
    const keys=new Set();
    if (l<35) keys.add("dark");
    if (l>=70) keys.add("light");
    if (l<38 && chroma>=0.065) keys.add("deep");
    if (l>=76 && chroma<0.10) keys.add("pale");
    if (s<25 || chroma<0.045) keys.add("muted");
    if (s>=60 && chroma>=0.11) keys.add("vivid");
    if (l>=67 && l<=94 && chroma>=0.028 && chroma<=0.12) keys.add("pastel");
    if (l>=48 && l<=94 && chroma>=0.018 && chroma<=0.09) keys.add("soft");
    return keys;
  }
  const suffix = /(?:으로부터|에서|으로|처럼|까지|빛의|빛|색의|색|보다|와|과|의|에|은|는|이|가|을|를|로)$/u;
  register("harmony", [
    ["monochromatic","","단색 배색|단색 조화|단색"],["analogous","","유사색 배색|유사색"],
    ["complementary","","보색 배색|보색"],["split-complementary","","분할 보색|분할보색|split complementary"],
    ["triadic","","삼각 배색|삼각 조화|삼각"],["tetradic","","사각 배색|사각 조화|사각"],
    ["square","","정사각 배색|정사각"],["mixed","","혼합·기타|혼합 기타|복합 배색"]
  ]);
  function lookup(word) {
    const exact=dictionary.get(word);
    if (exact) return exact;
    if (!/[가-힣]/u.test(word)) return null;
    const stem=word.replace(suffix,"");
    return dictionary.get(stem) || (stem!==word && stem.endsWith("빛") ? dictionary.get(stem.slice(0,-1)) : null);
  }
  const modifiers=[...dictionary].filter(([,t])=>t.kind==="tone" && !["warm","cool"].includes(t.key));
  function attached(word) {
    // Short Korean prefixes are meaningful only before a complete colour word.
    if(/^[연진][가-힣]+$/u.test(word)) {
      const color=lookup(word.slice(1));
      if(color?.kind==="color") return [dictionary.get(word[0]==="연"?"pale":"deep"),color];
    }
    for(const [prefix,tone] of modifiers) {
      if(!word.startsWith(prefix) || word.length===prefix.length) continue;
      const color=lookup(word.slice(prefix.length));
      if(color?.kind==="color") return [tone,color];
    }
    return null;
  }
  function parseWords(text) {
    const words=normalize(text).match(/#[a-f0-9]+|[\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)*/gu) || [];
    const terms=[];
    for (let i=0;i<words.length;) {
      let term, size=Math.min(3,words.length-i);
      for (;size>0;size--) {
        term=lookup(words.slice(i,i+size).join(" "));
        if (term) break;
      }
      if (term) {
        terms.push(term);
        i+=size;
        if(term.kind==="color" && words[i]==="색") i++;
      }
      else {
        const word=words[i++];
        terms.push(...(attached(word)||[{kind:"text",key:word}]));
      }
    }
    return terms;
  }
  function addKey(keys,key) {
    keys.add(key);
    if (parents.has(key)) keys.add(parents.get(key));
  }
  const indexes=new WeakMap();
  // Each swatch gets at most one specific colour. Distances use unscaled OKLab.
  // Multiple exemplars describe a range; the radius is a rejection threshold.
  const exemplars=[
    ["navy",.080,"18243C 283A55 15255B 223E70 000080"],
    ["cobalt",.087,"2454B1 1958C9 254AA2"],["sky-blue",.067,"7FC6EB 94CFFA 73B5DF"],
    ["powder-blue",.055,"B2CEDF BCD8E9"],["blue-gray",.052,"8296A8 647A8B 9DADBB"],
    ["mint",.069,"A3E2C8 BBEED8 80DBB5"],["teal",.080,"177D79 225958 008282 276566"],
    ["aqua",.073,"7AE2E2 58DAD7 A9E9E8"],["light-green",.072,"A4C979 C0DE99"],
    ["sage",.055,"98AC91 ACB79E 81977C"],["emerald",.070,"259866 40AA78"],
    ["lime",.082,"B6DB45 A3CE30"],["olive",.067,"7F803E 606534 808000"],
    ["olive",.021,"3B3B1A 73865B"],
    ["khaki",.060,"A39969 B6A578 94885E"],
    ["beige",.050,"D8C2A6 D9C9B5 E7D9C8 CCBBA4"],["cream",.043,"F5E4BC F7E9C8"],
    ["ivory",.031,"F6F0DB F9F5E5 FFFFF0"],["oatmeal",.037,"D3CABB C7BCAB"],
    ["taupe",.055,"938177 A29288"],["warm-gray",.033,"A19A93 817974"],
    ["cool-gray",.035,"A2A9B1 818992"],["silver",.039,"BFC2C5 CACCCE"],
    ["charcoal",.056,"303237 393B3F 414346"],
    ["coral",.065,"F07C70 EF8D7B FF7F50"],["apricot",.064,"F5BE96 F4CBAB"],
    ["magenta",.090,"CF279F E527B8 FF00FF"],["wine-red",.068,"762C4D 8B3458"],
    ["burgundy",.075,"661F32 802D3D 8C2432 561F2B"],["crimson",.075,"BA243D D32546"],
    ["brick-red",.060,"A84936 AC5140"],["lavender",.057,"BEAFD8 AD9ACB D1C6EB"],
    ["lilac",.055,"CFB0D1 DFC5DD C69EC8"],["violet",.075,"7348B2 854DC1"],
    ["gold",.068,"D4AC48 E6BA4D C29B47"]
  ].flatMap(([key,radius,hexes])=>hexes.split(" ").map(h=>{
    const lab=paletteLab("#"+h);
    const chromatic=parents.has(key) && parents.get(key)!=="gray";
    return {key,radius,lab,chromatic,chroma:Math.hypot(lab[1],lab[2])};
  }));
  function basicColor({h,l},[L,a,b],c) {
    if(c<.026) return L<.23?"black":L>.94?"white":"gray";
    if(h<16 || h>=345) return l>=63?"pink":"red";
    if(h<48) return l<53 && c<.17?"brown":"orange";
    if(h<70) return "yellow";
    if(h<164) return "green";
    if(h<198) return "cyan";
    if(h<257) return "blue";
    if(h<307) return "purple";
    return "pink";
  }
  function specificColor(lab,chroma,hue) {
    let best=null,min=Infinity;
    for(const ref of exemplars) {
      const [L,a,b]=lab;
      // Close lightness alone cannot turn gray into powder blue or moss into teal.
      // Reject chromatic exemplars more than 32 degrees away in OKLCH hue.
      if(ref.chromatic && (chroma<.024 || a*ref.lab[1]+b*ref.lab[2]<.848*chroma*ref.chroma)) continue;
      if(["beige","cream","ivory","oatmeal"].includes(ref.key) && (b<.014 || L>.982)) continue;
      if(["sage","navy","burgundy"].includes(ref.key) && chroma<.030) continue;
      if(ref.key==="charcoal" && chroma>.021) continue;
      if(ref.key==="sage" && (hue<72 || hue>155 || L<.58 || L>.81 || chroma>.088)) continue;
      if(ref.key==="navy" && (hue<(L<=.35?202:208) || hue>251 || L>.43)) continue;
      if(ref.key==="burgundy" && ((hue>9 && hue<330) || L>.51)) continue;
      if(ref.key==="olive" && (hue<52 || hue>94)) continue;
      if(ref.key==="coral" && (hue>20 && hue<350 || L<.65 || (hue>14 && hue<350 && chroma>.18))) continue;
      if(ref.key==="silver" && chroma>.020) continue;
      if((ref.key==="cool-gray" && b>=-.003) || (ref.key==="warm-gray" && b<=.004)) continue;
      const d=(L-ref.lab[0])**2+(a-ref.lab[1])**2+(b-ref.lab[2])**2;
      const radius=ref.key==="olive" && hue>85 ? Math.min(ref.radius,.025) : ref.radius;
      if(d<=radius**2 && d<min) {min=d;best=ref.key;}
    }
    return best;
  }
  const swatchCache=new Map();
  function swatch(hex) {
    hex=hex.toUpperCase();
    if(swatchCache.has(hex)) return swatchCache.get(hex);
    const hsl=hexToHsl(hex),lab=paletteLab(hex);
    const chroma=Math.hypot(lab[1],lab[2]);
    const colors=new Set(),specific=specificColor(lab,chroma,hsl.h);
    // A warm neutral doesn't become orange merely because its hue points there.
    if(specific) addKey(colors,specific);
    if(!specific)
      colors.add(basicColor(hsl,lab,chroma));
    if(specific==="blue-gray" && chroma>=.043 && hsl.h>=200 && hsl.h<=235) colors.add("blue");
    const yellowOlive=specific==="olive" && hsl.h<70;
    const value={colors,tones:toneKeys(hsl.l,hsl.s,chroma),chroma,yellowOlive};
    swatchCache.set(hex,value);
    return value;
  }
  function index(p) {
    const fields=[p.name,...(p.searchAliases||[]),...p.tags,p.reference?.title,p.reference?.localizedTitle,
      p.reference?.creator,p.reference?.year,p.reference?.usTheatricalReleaseYear,...(p.graphicStyles||[]),
      ...(p.collection==="graphic"?["포스터","그래픽","poster","graphic"]:p.collection==="cinema"?["영화","cinema","film"]:[])].filter(x=>x!=null).map(normalize);
    const keys=new Set();
    for (const text of fields) for (const term of parseWords(text)) {
      if (term.kind!=="text") addKey(keys,term.key);
    }
    fields.push(...p.colors.map(c=>normalize(c.hex)));
    const swatches=p.colors.map(c=>swatch(c.hex));
    const meanChroma=p.colors.reduce((n,c,i)=>n+swatches[i].chroma*c.ratio/100,0);
    for(const sample of swatches) for(const color of sample.colors) keys.add(color);
    for(const tone of toneKeys(p.sig.l,p.sig.s,meanChroma)) keys.add(tone);
    keys.add(p.temp);
    const nameKeys=new Set();
    for(const term of parseWords(p.name)) if(term.kind!=="text") addKey(nameKeys,term.key);
    const record={fields,keys,swatches,nameKeys};
    indexes.set(p,record);
    return record;
  }
  const queries=new Map();
  function query(input) {
    const text=normalize(input);
    if(queries.has(text)) return queries.get(text);
    const words=parseWords(text), terms=[];
    for(let i=0;i<words.length;i++) {
      const t=words[i],next=words[i+1];
      if(t.kind==="tone" && !["warm","cool"].includes(t.key) && next?.kind==="color") {
        terms.push({kind:"swatch",tone:t.key,key:next.key});i++;
      } else terms.push(t);
    }
    const compiled={text,terms,scores:new WeakMap(),literal:/^"(.+)"$/u.exec(text)?.[1]};
    if(queries.size>=16) queries.delete(queries.keys().next().value);
    queries.set(text,compiled);
    return compiled;
  }
  function evaluate(p,q) {
    if (!q.text) return 1;
    const idx=indexes.get(p)||index(p);
    if(q.literal) return idx.fields.some(f=>f.includes(q.literal))?100:0;
    const titleQuery=q.terms.some(t=>t.kind==="text") || /[×·&]|(?:과|와|에서) /u.test(q.text)
      || (q.text.startsWith("소프트 ") && p.graphicCategories?.includes("soft-graphic"));
    if(titleQuery && idx.fields.includes(q.text)) return 120;
    if(!q.terms.length) return idx.fields.some(f=>f.includes(q.text))?1:0;
    let score=0;
    for(const t of q.terms) {
      if(t.kind==="harmony") {
        if(!p.harmony.matches.includes(t.key)) return 0;
        score+=5;
      } else if(t.kind==="text") {
        if(!idx.fields.some(f=>f.includes(t.key))) return 0;
        score+=idx.fields[0].includes(t.key)?10:2;
      } else if(t.kind==="color" || t.kind==="swatch") {
        let weight=0;
        idx.swatches.forEach((s,i)=>{
          if(s.colors.has(t.key) && (t.kind==="color" || s.tones.has(t.tone)) &&
             !(t.key==="green" && t.tone==="dark" && s.yellowOlive))
            weight=Math.max(weight,5+p.colors[i].ratio/10);
        });
        if(!weight && (t.kind==="swatch" || !idx.keys.has(t.key))) return 0;
        score+=weight+(idx.nameKeys.has(t.key)?12:1);
      } else {
        if(t.key==="warm" || t.key==="cool") {if(p.temp!==t.key)return 0;}
        else if(!idx.keys.has(t.key)) return 0;
        score+=3;
      }
    }
    return score;
  }
  function score(p,input) {
    const q=typeof input==="string"?query(input):input;
    const idx=indexes.get(p)||index(p);
    if(!q.scores.has(idx)) q.scores.set(idx,evaluate(p,q));
    return q.scores.get(idx);
  }
  function ranked(pool,input) {
    const q=query(input);
    const hits=Array.from(pool).filter(p=>score(p,q)>0);
    return q.text ? hits.sort((a,b)=>score(b,q)-score(a,q)) : hits;
  }
  return {index,query,score,ranked,matches:(p,q)=>score(p,q)>0};
})();

