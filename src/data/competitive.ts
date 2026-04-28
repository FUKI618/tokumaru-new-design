/**
 * 他社比較データ（Single Source of Truth）
 * - TOPページ・エリアページ両方で使用
 * - 競合5社（プログレス・クオーレ・メイドマン・グッドサービス・出張回収センター）の
 *   公開情報を踏まえ、徳丸商会の優位ポイントを抽出
 */

import { company } from "./company";

export interface CompetitiveEdge {
  label: string;
  us: string;
  them: string;
  advantage: string;
}

export const competitiveEdges: CompetitiveEdge[] = [
  {
    label: "受付時間",
    us: "電話 9:00–21:00 ＋ LINE 24時間",
    them: "9:00–20:00 が多数（一部24/365）",
    advantage: "夜間・お仕事帰りOK",
  },
  {
    label: "出張費・査定費",
    us: "0円（キャンセル料も0円）",
    them: "業者により有料の場合あり",
    advantage: "完全無料を明記",
  },
  {
    label: "買取×回収のハイブリッド",
    us: "同時査定で買取分を回収費から相殺",
    them: "回収専門業者は買取機能なし",
    advantage: "実質負担を下げられる",
  },
  {
    label: "古物商許可",
    us: `${company.permitNumber}（公開）`,
    them: "番号非公開の業者あり",
    advantage: "盗品流通リスクを回避",
  },
  {
    label: "追加料金",
    us: "見積もり後の追加なし",
    them: "階段料金・運搬料を後出しの業者あり",
    advantage: "明朗会計で安心",
  },
];
