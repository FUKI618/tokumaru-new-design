/**
 * 客観事実ベースの数値（虚偽数値・自社調べ系を排除した値のみ）
 * - 累計件数・満足度などの未検証数値は載せない
 * - 数値追加時は必ず検証可能なソースを併記
 */
export const metrics = {
  // 受付時間（分単位での表記用）
  receptionStart: "9:00",
  receptionEnd: "21:00",
  receptionMinutesPerDay: 12 * 60, // 12時間 = 720分
  receptionDaysPerYear: 365, // 年中無休
  // 訪問スピード
  shortestVisitMinutes: 30, // 最短30分（条件次第）
  // 料金
  estimateFee: 0, // 査定費
  visitFee: 0, // 出張費
  cancellationFee: 0, // キャンセル料
  // 対応エリア
  nagoyaWardCount: 16, // 名古屋市16区
  totalAreaCount: 27, // 名古屋16区＋近郊11市
  // キャンペーン割引率
  seniorDiscount: 0.05, // ご高齢者(65歳以上)5%OFF
  lineEstimateDiscount: 0.05, // LINE見積5%OFF
  // 法的根拠
  permitNumber: "第541052601400号",
  permitAuthority: "名古屋市公安委員会",
} as const;

/** 表示用の整形ヘルパー */
export const metricsView = {
  reception: `${metrics.receptionStart}〜${metrics.receptionEnd}（年中無休）`,
  shortestVisit: `最短${metrics.shortestVisitMinutes}分`,
  fees: "出張費・査定費・キャンセル料0円",
  permitFull: `古物商許可 ${metrics.permitNumber}（${metrics.permitAuthority}届出）`,
} as const;
