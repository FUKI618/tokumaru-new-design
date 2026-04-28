// Keep deployment routing in one place and follow Astro's configured base path.
const rawBase = import.meta.env.BASE_URL;
export const basePath = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

export const homePath = basePath;
export const privacyPolicyPath = `${basePath}privacy-policy/`;

export const assetPath = (asset: string) => `${basePath}${asset.replace(/^\/+/, "")}`;
export const sectionPath = (sectionId: string) => `${homePath}#${sectionId}`;
export const areaPath = (slug: string) => `${basePath}area/${slug}/`;
export const areaIndexPath = `${basePath}area/`;

/** 完全URL生成（canonical / og:url 等で使用） */
export const canonicalUrl = (path: string, siteUrl: URL) => new URL(path, siteUrl).toString();
