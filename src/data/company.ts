export const company = {
  name: "徳丸商会",
  phone: "052-990-3968",
  hours: "9:00〜21:00（年中無休）",
  hoursOpenTime: "09:00",
  hoursCloseTime: "21:00",
  permitNumber: "第541042309800号",
  permitAuthority: "名古屋市公安委員会",
  lineUrl: "https://lin.ee/j4wK9IM",
  sourceUrl: "https://www.zehitomo.com/profile/%E5%BE%B3%E4%B8%B8%E5%95%86%E4%BC%9A-Md4lLXjk6/pro",
  // 構造化された住所（JSON-LD PostalAddress 用）
  address: {
    postalCode: "453-0863",
    region: "愛知県",
    locality: "名古屋市中村区",
    streetAddress: "横井2丁目71番地",
    country: "JP",
  },
  // 表示用の旧プロパティ（既存テンプレ互換のため残す）
  locality: "愛知県名古屋市中村区",
  fullAddress: "〒453-0863 愛知県名古屋市中村区横井2丁目71番地",
  areaLabel: "名古屋市全域・愛知県近郊・一部三重県",
  serviceSummary: "出張買取・不用品回収・遺品整理・残置物撤去",
  // 簡易地理情報（中村区中心部の概算）
  geo: { latitude: 35.1716, longitude: 136.8636 },
  // キャンペーン（拡張構造：discount数値・CTA・説明文・カラーを管理）
  campaigns: [
    {
      slug: "line",
      title: "LINE見積もりキャンペーン",
      catch: "写真を送るだけで",
      discount: "5",
      unit: "%",
      suffix: "OFF",
      description: "電話が苦手な方も気軽に。写真送信から平均3分で概算回答。",
      actionLabel: "LINEで写真を送る",
      actionHref: "https://lin.ee/j4wK9IM",
      actionExternal: true,
      colorClass: "line", // 緑系
      note: "他キャンペーンとの併用不可",
    },
    {
      slug: "senior",
      title: "ご高齢者割引（65歳以上）",
      catch: "ご年齢をお伝えいただくだけで",
      discount: "5",
      unit: "%",
      suffix: "OFF",
      description: "65歳以上の方が対象。同居ご家族からのご依頼でも適用可能。",
      actionLabel: "電話で相談する",
      actionHref: "tel:052-990-3968",
      actionExternal: false,
      colorClass: "terra", // テラコッタ系
      note: "他キャンペーンとの併用不可",
    },
  ],
  quickFacts: [
    { label: "対応内容", value: "出張買取・不用品回収・遺品整理・残置物撤去" },
    { label: "費用", value: "出張費・見積もり・査定費無料" },
    { label: "スピード", value: "最短30分、当日〜翌日対応のご相談可" },
    { label: "相談方法", value: "電話・LINEで受付" },
    { label: "対応エリア", value: "名古屋市全域と近郊エリア" },
    { label: "古物商許可", value: "第541042309800号（名古屋市公安委員会）" },
  ],
} as const;
