// Keep deployment routing in one place and follow Astro's configured base path.
const rawBase = import.meta.env.BASE_URL;
export const basePath = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

export const homePath = basePath;
export const privacyPolicyPath = `${basePath}privacy-policy/`;

export const assetPath = (asset: string) => `${basePath}${asset.replace(/^\/+/, "")}`;
export const sectionPath = (sectionId: string) => `${homePath}#${sectionId}`;
export const pagePath = (slug: string) => `${basePath}${slug}/`;

/** 特化LPの定義 */
export interface SpecializedPage {
  slug: string;
  title: string;
  shortTitle: string;
}

export const specializedPages: SpecializedPage[] = [
  { slug: "appliance", title: "冷蔵庫・洗濯機の出張買取", shortTitle: "冷蔵庫・洗濯機" },
  { slug: "moving", title: "引越し不用品の回収・買取", shortTitle: "引越し不用品" },
  { slug: "brand", title: "ブランド品・貴金属の買取", shortTitle: "ブランド品・貴金属" },
  { slug: "aircon", title: "エアコンの取外し・買取", shortTitle: "エアコン" },
  { slug: "estate", title: "遺品整理・生前整理", shortTitle: "遺品整理" },
];
