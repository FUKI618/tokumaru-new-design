export interface FaqItem {
  question: string;
  answer: string;
}

/** FAQ データ（Single Source of Truth）
 *  FAQ.astro の表示と Layout.astro の JSON-LD 構造化データの両方で使用される。
 *  ここを更新すれば両方に反映される。
 */
export const faqs: FaqItem[] = [
  {
    question: "出張費や見積もり費用はかかりますか？",
    answer:
      "いいえ、出張費・見積もり・査定費は完全無料です。買取が成立しなかった場合も費用は一切かかりません。お気軽にご依頼ください。",
  },
  {
    question: "名古屋でどんな出張買取・不用品回収を相談できますか？",
    answer:
      "冷蔵庫・洗濯機・エアコン・テレビなどの中古家電、家具、ブランド品、貴金属の出張買取に加えて、不用品回収、引越し前の片付け、遺品整理、残置物撤去のご相談にも対応しています。",
  },
  {
    question: "名古屋なら最短どのくらいで来てもらえますか？",
    answer:
      "最短30分で即日お伺いいたします。お急ぎの場合もお電話一本で迅速に対応いたします。",
  },
  {
    question: "LINEで写真を送って出張買取の相談はできますか？",
    answer:
      "はい、LINEでお品物の写真を送っていただければ概算のご案内が可能です。まずは大まかな内容を知りたい場合にも便利です。",
  },
  {
    question: "支払い方法はどうなりますか？",
    answer:
      "その場で現金にてお支払いいたします。査定後すぐにお渡しできますので、お待ちいただく必要はありません。",
  },
  {
    question: "1点だけでも来てもらえますか？",
    answer:
      "はい、冷蔵庫1台からでも喜んでお伺いいたします。もちろん複数点まとめてのご依頼も歓迎です。",
  },
  {
    question: "法人や管理会社の不用品回収・残置物撤去にも対応できますか？",
    answer:
      "はい、事務所や賃貸物件の残置物撤去、退去前の片付けなど、法人様や管理会社様からのご相談にも対応しています。",
  },
  {
    question: "当日の出張買取や不用品回収の相談でも対応できますか？",
    answer:
      "当日のご連絡でも対応可能です。ただし、事前にお電話またはLINEでご連絡いただけるとスムーズにお伺いできます。",
  },
  {
    question: "名古屋市外でも出張買取を相談できますか？",
    answer:
      "愛知県内であればエリア外でも対応可能な場合があります。まずはお気軽にお電話またはLINEでご相談ください。",
  },
  {
    question: "追加料金が発生することはありますか？",
    answer:
      "事前に内容を確認したうえでご案内しますので、まずはご相談内容をお知らせください。出張費・見積もり・査定費は無料です。",
  },
];

/** JSON-LD FAQPage 構造化データ用に変換 */
export function faqsToJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
