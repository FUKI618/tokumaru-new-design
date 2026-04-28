/**
 * 対応エリアデータ（Single Source of Truth）
 * - pages/area/[slug].astro の動的ルーティングと内部リンク生成、JSON-LD areaServed の生成に使用
 * - 名古屋市16区 + 近郊主要11市 = 27エリア
 */

export type AreaRegion = "nagoya" | "owari" | "chita" | "mikawa" | "mie";

export interface Area {
  slug: string;
  name: string;
  region: AreaRegion;
  regionName: string;
  /** SEO用：80–120文字のエリア紹介。 */
  description: string;
  /** カード表示用：30文字以内 */
  shortDescription: string;
  /** ヒーロー直下の3つの訴求点 */
  features: string[];
  /** 地理情報（LocalBusiness JSON-LD で使用） */
  geo?: { latitude: number; longitude: number };
  /** 隣接または同区分の周辺エリア slug（内部リンク用） */
  nearby: string[];
}

export const regionLabels: Record<AreaRegion, string> = {
  nagoya: "名古屋市",
  owari: "尾張地区",
  chita: "知多地区",
  mikawa: "三河地区",
  mie: "三重北部",
};

export const areas: Area[] = [
  // ─────────── 名古屋市16区 ───────────
  {
    slug: "chikusa", name: "千種区", region: "nagoya", regionName: "名古屋市",
    description: "千種区での出張買取・不用品回収を最短30分で対応。覚王山・本山・池下のマンションから一戸建てまで、家電・家具・ブランド品の買取と不用品の同時回収にワンストップ対応します。",
    shortDescription: "覚王山・本山・池下エリア対応",
    features: ["最短30分で訪問可能","マンション搬出も対応","学生の引越し片付けOK"],
    geo: { latitude: 35.1700, longitude: 136.9622 },
    nearby: ["showa","higashi","meito","moriyama"],
  },
  {
    slug: "higashi", name: "東区", region: "nagoya", regionName: "名古屋市",
    description: "東区の出張買取・不用品回収。大曽根・東桜・葵エリアのオフィスビルから一戸建てまで対応。法人の事務所撤去や引越しに伴う家電・家具の買取にも強みがあります。",
    shortDescription: "大曽根・東桜・葵エリア対応",
    features: ["法人・事務所撤去OK","大曽根駅周辺即日訪問","ブランド家具高額査定"],
    geo: { latitude: 35.1872, longitude: 136.9276 },
    nearby: ["kita","naka","chikusa","moriyama"],
  },
  {
    slug: "kita", name: "北区", region: "nagoya", regionName: "名古屋市",
    description: "北区での出張買取・不用品回収。黒川・志賀本通・大曽根周辺の戸建てから集合住宅まで、生活家電・家具の買取と引越し時の一括処分を承ります。",
    shortDescription: "黒川・志賀本通エリア対応",
    features: ["戸建て階段搬出OK","古い家電もまずは査定","駐車スペースなしでもOK"],
    geo: { latitude: 35.2017, longitude: 136.9094 },
    nearby: ["nishi","higashi","moriyama","kitanagoya"],
  },
  {
    slug: "nishi", name: "西区", region: "nagoya", regionName: "名古屋市",
    description: "西区の出張買取・不用品回収。浄心・上小田井・庄内通エリアでの家電・家具の即日対応。マンション搬出も慣れたスタッフが養生から行います。",
    shortDescription: "浄心・上小田井エリア対応",
    features: ["マンション養生対応","上小田井駅近く即日OK","大型家電も搬出可"],
    geo: { latitude: 35.1996, longitude: 136.8730 },
    nearby: ["nakamura","kita","kiyosu","kitanagoya"],
  },
  {
    slug: "nakamura", name: "中村区", region: "nagoya", regionName: "名古屋市",
    description: "中村区は徳丸商会の本拠地（〒453-0863 横井2丁目71番地）。名古屋駅周辺・太閤通・本陣エリアの出張買取・不用品回収を最短30分で訪問対応します。",
    shortDescription: "本拠地・名古屋駅周辺即対応",
    features: ["徳丸商会の本拠地","名古屋駅周辺最速訪問","駅近マンション対応"],
    geo: { latitude: 35.1716, longitude: 136.8636 },
    nearby: ["nishi","naka","nakagawa","atsuta"],
  },
  {
    slug: "naka", name: "中区", region: "nagoya", regionName: "名古屋市",
    description: "中区での出張買取・不用品回収。栄・伏見・大須・新栄のマンションから飲食店まで対応。ブランド品・貴金属の高額査定と、店舗の不用品撤去にも実績があります。",
    shortDescription: "栄・伏見・大須エリア対応",
    features: ["ブランド品・貴金属高額査定","飲食店撤去対応","駐車場確保のご相談OK"],
    geo: { latitude: 35.1664, longitude: 136.9080 },
    nearby: ["nakamura","higashi","showa","atsuta"],
  },
  {
    slug: "showa", name: "昭和区", region: "nagoya", regionName: "名古屋市",
    description: "昭和区の出張買取・不用品回収。御器所・川名・八事エリアの戸建て・マンションでの家電買取と片付けに対応。学生の引越し時の一括処分にも便利です。",
    shortDescription: "御器所・川名・八事エリア対応",
    features: ["大学生の引越し対応","八事エリア即日OK","階段搬出も追加料金なし"],
    geo: { latitude: 35.1393, longitude: 136.9462 },
    nearby: ["chikusa","mizuho","tempaku","naka"],
  },
  {
    slug: "mizuho", name: "瑞穂区", region: "nagoya", regionName: "名古屋市",
    description: "瑞穂区での出張買取・不用品回収。新瑞橋・瑞穂運動場・堀田エリアの家電・家具の買取と、戸建て解体前の遺品整理にも対応します。",
    shortDescription: "新瑞橋・瑞穂運動場エリア対応",
    features: ["解体前の整理対応","新瑞橋駅近く即訪問","古道具も査定OK"],
    geo: { latitude: 35.1226, longitude: 136.9388 },
    nearby: ["showa","atsuta","minami","tempaku"],
  },
  {
    slug: "atsuta", name: "熱田区", region: "nagoya", regionName: "名古屋市",
    description: "熱田区の出張買取・不用品回収。神宮前・金山・伝馬町エリアでの家電・家具の即日対応。金山総合駅徒歩圏のマンション搬出にも強みがあります。",
    shortDescription: "神宮前・金山エリア対応",
    features: ["金山駅徒歩圏即日OK","マンション搬出対応","古物商許可で安心"],
    geo: { latitude: 35.1268, longitude: 136.9018 },
    nearby: ["naka","mizuho","nakagawa","minami"],
  },
  {
    slug: "nakagawa", name: "中川区", region: "nagoya", regionName: "名古屋市",
    description: "中川区での出張買取・不用品回収。八田・尾頭橋・荒子エリアの戸建て・集合住宅で家電・家具を即日買取。大量の不用品もトラック1台で対応します。",
    shortDescription: "八田・尾頭橋・荒子エリア対応",
    features: ["大量回収もトラック1台で","古い家電もまず査定","当日駆け込みOK"],
    geo: { latitude: 35.1473, longitude: 136.8536 },
    nearby: ["nakamura","atsuta","minato","ama"],
  },
  {
    slug: "minato", name: "港区", region: "nagoya", regionName: "名古屋市",
    description: "港区の出張買取・不用品回収。築地口・東海通・名港エリアでの家電・家具の買取と、倉庫・事業所の残置物撤去にも対応します。",
    shortDescription: "築地口・東海通エリア対応",
    features: ["倉庫・事業所撤去","大型家電・業務用OK","複数台車両のご相談可"],
    geo: { latitude: 35.1041, longitude: 136.8649 },
    nearby: ["nakagawa","minami","atsuta","tokai"],
  },
  {
    slug: "minami", name: "南区", region: "nagoya", regionName: "名古屋市",
    description: "南区での出張買取・不用品回収。星崎・笠寺・道徳エリアの戸建て・マンションで家電・家具の即日対応。引越し前の駆け込み片付けに強いです。",
    shortDescription: "星崎・笠寺・道徳エリア対応",
    features: ["引越し前の駆け込み対応","笠寺駅近く即訪問","賃貸退去前OK"],
    geo: { latitude: 35.0998, longitude: 136.9331 },
    nearby: ["mizuho","atsuta","midori","minato"],
  },
  {
    slug: "moriyama", name: "守山区", region: "nagoya", regionName: "名古屋市",
    description: "守山区の出張買取・不用品回収。小幡・大森・印場エリアでの家電・家具の買取と、戸建ての一括片付けに対応します。庭木・倉庫品もご相談ください。",
    shortDescription: "小幡・大森・印場エリア対応",
    features: ["戸建て一括片付け","倉庫品もまずは相談","庭木・物置撤去OK"],
    geo: { latitude: 35.2154, longitude: 136.9772 },
    nearby: ["chikusa","kita","higashi","meito"],
  },
  {
    slug: "midori", name: "緑区", region: "nagoya", regionName: "名古屋市",
    description: "緑区での出張買取・不用品回収。鳴海・徳重・有松エリアの戸建てから新興住宅地まで、家電・家具の買取と引越し時の一括処分にワンストップ対応します。",
    shortDescription: "鳴海・徳重・有松エリア対応",
    features: ["新興住宅地対応","徳重駅近く即訪問","大型家具搬出OK"],
    geo: { latitude: 35.0788, longitude: 136.9555 },
    nearby: ["minami","tempaku","toyoake","obu"],
  },
  {
    slug: "meito", name: "名東区", region: "nagoya", regionName: "名古屋市",
    description: "名東区の出張買取・不用品回収。一社・上社・藤が丘エリアの集合住宅・戸建てで家電・家具の即日対応。マンション高層階の搬出も対応します。",
    shortDescription: "一社・上社・藤が丘エリア対応",
    features: ["マンション高層階OK","藤が丘駅近く即日訪問","学生の引越し対応"],
    geo: { latitude: 35.1730, longitude: 137.0151 },
    nearby: ["chikusa","tempaku","moriyama","showa"],
  },
  {
    slug: "tempaku", name: "天白区", region: "nagoya", regionName: "名古屋市",
    description: "天白区での出張買取・不用品回収。植田・原・八事エリアの戸建て・マンションで家電・家具の即日対応。坂道や搬出経路もご相談いただけます。",
    shortDescription: "植田・原・八事エリア対応",
    features: ["坂道搬出ご相談OK","植田駅近く即日訪問","学生・単身引越し対応"],
    geo: { latitude: 35.1219, longitude: 136.9743 },
    nearby: ["showa","midori","meito","mizuho"],
  },
  // ─────────── 尾張地区 ───────────
  {
    slug: "ama", name: "あま市", region: "owari", regionName: "尾張地区",
    description: "あま市での出張買取・不用品回収。七宝・甚目寺・美和エリアの戸建てで家電・家具の買取と一括処分に対応。名古屋市西側からの最短訪問が可能です。",
    shortDescription: "七宝・甚目寺・美和エリア対応",
    features: ["名古屋から最短30分","大量回収トラック対応","古物商許可で安心"],
    geo: { latitude: 35.1971, longitude: 136.7999 },
    nearby: ["kiyosu","tsushima","aisai","nakagawa"],
  },
  {
    slug: "kiyosu", name: "清須市", region: "owari", regionName: "尾張地区",
    description: "清須市の出張買取・不用品回収。清須駅・新川橋・須ヶ口エリアの戸建てで家電・家具の即日対応。引越し前の駆け込み片付けにも対応します。",
    shortDescription: "清須駅・新川橋エリア対応",
    features: ["引越し駆け込み対応","清須駅近く即日OK","戸建て一括片付け"],
    geo: { latitude: 35.2008, longitude: 136.8421 },
    nearby: ["ama","kitanagoya","nishi","tsushima"],
  },
  {
    slug: "kitanagoya", name: "北名古屋市", region: "owari", regionName: "尾張地区",
    description: "北名古屋市での出張買取・不用品回収。徳重・名古屋芸大・西春エリアの戸建て・マンションで家電・家具の買取と一括処分にワンストップ対応します。",
    shortDescription: "徳重・名古屋芸大・西春エリア対応",
    features: ["西春駅近く即日訪問","戸建ての家じまい対応","古道具・骨董品査定"],
    geo: { latitude: 35.2466, longitude: 136.8733 },
    nearby: ["kiyosu","kita","nishi","ama"],
  },
  {
    slug: "tsushima", name: "津島市", region: "owari", regionName: "尾張地区",
    description: "津島市の出張買取・不用品回収。津島駅・神守・佐屋川エリアでの戸建ての家電・家具の買取に対応。広い戸建ての一括片付けにも実績があります。",
    shortDescription: "津島駅・神守エリア対応",
    features: ["広い戸建て対応","津島駅近く即日OK","大量品もトラック対応"],
    geo: { latitude: 35.1764, longitude: 136.7396 },
    nearby: ["aisai","yatomi","ama","kiyosu"],
  },
  {
    slug: "aisai", name: "愛西市", region: "owari", regionName: "尾張地区",
    description: "愛西市での出張買取・不用品回収。佐屋・立田・八開エリアの戸建てで家電・家具の買取と一括片付けに対応。広いお住まいの整理にも強みがあります。",
    shortDescription: "佐屋・立田・八開エリア対応",
    features: ["広い戸建て一括対応","農機具・倉庫品も相談","古物商許可で安心"],
    geo: { latitude: 35.1611, longitude: 136.7158 },
    nearby: ["tsushima","yatomi","ama"],
  },
  {
    slug: "yatomi", name: "弥富市", region: "owari", regionName: "尾張地区",
    description: "弥富市の出張買取・不用品回収。弥富駅・近鉄弥富・佐古木エリアの戸建てで家電・家具の即日対応。名古屋方面・三重方面どちらも訪問しやすいエリアです。",
    shortDescription: "弥富駅・佐古木エリア対応",
    features: ["三重方面も対応","弥富駅近く即日訪問","大量品もトラック対応"],
    geo: { latitude: 35.0962, longitude: 136.7233 },
    nearby: ["tsushima","aisai","yokkaichi","ama"],
  },
  // ─────────── 知多地区 ───────────
  {
    slug: "tokai", name: "東海市", region: "chita", regionName: "知多地区",
    description: "東海市での出張買取・不用品回収。太田川・大田町・名和エリアでの家電・家具の即日対応。鉄工所近くの戸建てや工場併設住宅にも対応します。",
    shortDescription: "太田川・大田町エリア対応",
    features: ["太田川駅近く即日訪問","工場併設住宅もOK","大型家電搬出対応"],
    geo: { latitude: 35.0314, longitude: 136.9028 },
    nearby: ["obu","minato","kariya"],
  },
  {
    slug: "obu", name: "大府市", region: "chita", regionName: "知多地区",
    description: "大府市の出張買取・不用品回収。共和・大府駅・北崎エリアでの戸建ての家電・家具の買取に対応。引越し前の一括処分にも実績があります。",
    shortDescription: "共和・大府駅エリア対応",
    features: ["引越し時の一括処分","大府駅近く即日訪問","戸建ての家じまい対応"],
    geo: { latitude: 35.0145, longitude: 136.9622 },
    nearby: ["tokai","midori","kariya","toyoake"],
  },
  // ─────────── 三河地区 ───────────
  {
    slug: "kariya", name: "刈谷市", region: "mikawa", regionName: "三河地区",
    description: "刈谷市での出張買取・不用品回収。刈谷駅・一ツ木・小垣江エリアでの家電・家具の買取と引越し時の一括処分にワンストップ対応します。",
    shortDescription: "刈谷駅・一ツ木エリア対応",
    features: ["刈谷駅近く即日訪問","引越し時の一括処分","古道具も査定OK"],
    geo: { latitude: 34.9892, longitude: 136.9994 },
    nearby: ["obu","toyoake","tokai"],
  },
  {
    slug: "toyoake", name: "豊明市", region: "mikawa", regionName: "三河地区",
    description: "豊明市の出張買取・不用品回収。前後・中京競馬場前・栄エリアでの戸建ての家電・家具の即日対応。広い戸建ての家じまいにも実績があります。",
    shortDescription: "前後・中京競馬場前エリア対応",
    features: ["広い戸建て対応","前後駅近く即日OK","家じまい一括対応"],
    geo: { latitude: 35.0530, longitude: 136.9846 },
    nearby: ["midori","obu","kariya"],
  },
  // ─────────── 三重北部 ───────────
  {
    slug: "yokkaichi", name: "四日市市", region: "mie", regionName: "三重北部",
    description: "四日市市での出張買取・不用品回収。近鉄四日市・南松本・富田エリアの戸建て・マンションで家電・家具の買取に対応。名古屋方面からの即日訪問が可能です。",
    shortDescription: "近鉄四日市・南松本エリア対応",
    features: ["名古屋から即日訪問","マンション搬出OK","大型家電・大量回収対応"],
    geo: { latitude: 34.9651, longitude: 136.6243 },
    nearby: ["yatomi","aisai"],
  },
];

/** slug から Area を取得 */
export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

/** 地域別にグループ化 */
export function groupAreasByRegion(): Record<AreaRegion, Area[]> {
  const grouped: Record<AreaRegion, Area[]> = {
    nagoya: [], owari: [], chita: [], mikawa: [], mie: [],
  };
  for (const a of areas) grouped[a.region].push(a);
  return grouped;
}

/** ItemList JSON-LD（エリア一覧ページ用） */
export function areasToItemListJsonLd(siteUrl: URL, basePath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "徳丸商会の出張買取・不用品回収 対応エリア一覧",
    "numberOfItems": areas.length,
    "itemListElement": areas.map((a, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": `${a.name}の出張買取・不用品回収`,
      "url": new URL(`${basePath}area/${a.slug}/`, siteUrl).toString(),
    })),
  };
}
