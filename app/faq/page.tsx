"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    category: "サービス全般",
    items: [
      {
        question: "ITに詳しくない社員でも大丈夫ですか？",
        answer:
          "はい、大丈夫です。一人ひとりのレベルに合わせた支援を行います。PCの基本操作ができれば、生成AIの活用は十分に可能です。初心者の方には丁寧な説明と成功体験を重視した支援を行います。",
      },
      {
        question: "研修だけで使えるようになりますか？",
        answer:
          "研修だけでは定着しにくいケースが多いです。そのため、私たちは「伴走型」の支援を重視しています。研修後も継続的なフォローアップやQ&A対応で、実際に業務で使えるようになるまでサポートします。",
      },
      {
        question: "オンラインでの対応は可能ですか？",
        answer:
          "はい、可能です。研修・セミナー、顧問契約のミーティングなど、すべてのサービスでオンライン対応が可能です。Zoom、Google Meet、Microsoft Teamsなど、ご希望のツールで対応いたします。",
      },
      {
        question: "対応エリアはどこですか？",
        answer:
          "オンラインでの対応により、全国どこからでもご利用いただけます。対面での研修をご希望の場合は、交通費・宿泊費（実費）が別途かかります。",
      },
    ],
  },
  {
    category: "料金・契約について",
    items: [
      {
        question: "顧問契約とDX導入支援の違いは何ですか？",
        answer:
          "顧問契約（Bカテゴリー）は、アドバイザーとしての支援が中心で、業務アプリや自動化フローなどの実体成果物は含みません。DX導入支援（Cカテゴリー）は、業務アプリの構築や自動化フローの設定など、実体成果物を伴う導入支援です。",
      },
      {
        question: "成果物が含まれるのはどのサービスですか？",
        answer:
          "DX導入支援（Cカテゴリー）が実体成果物を含むサービスです。業務アプリ、自動化フロー設定、データ連携設定、運用マニュアル、研修資料などが成果物として納品されます。",
      },
      {
        question: "途中でサービスを変更できますか？",
        answer:
          "はい、可能です。私たちは「段階連動型」の契約を採用しています。例えば、DX導入支援を開始した後、ヒアリングの結果、成果物の実現が難しいと判断された場合は、顧問契約への切替と料金調整を行います。",
      },
      {
        question: "料金の支払い方法は？",
        answer:
          "銀行振込でのお支払いをお願いしております。研修・セミナーは実施前に、顧問契約は月初に、DX導入支援は着手時と完了時の分割払いなど、サービスに応じた支払いサイクルをご案内いたします。",
      },
    ],
  },
  {
    category: "セキュリティ・機密性",
    items: [
      {
        question: "セキュリティは大丈夫ですか？",
        answer:
          "セキュリティを重視した支援を行っています。生成AIの利用にあたっての注意点やルール整備もサポートします。また、NDA（秘密保持契約）の締結にも対応しております。",
      },
      {
        question: "社内の機密情報を扱っても問題ないですか？",
        answer:
          "NDA（秘密保持契約）の締結により、機密情報を安全に取り扱います。また、生成AIに機密情報を入力する際の注意点や、社内ルールの整備についてもアドバイスいたします。",
      },
    ],
  },
  {
    category: "導入・準備について",
    items: [
      {
        question: "どのくらいの準備期間が必要ですか？",
        answer:
          "サービスによって異なります。入門セミナーは1〜2週間前のご依頼で対応可能です。スタートアップ研修やDX導入支援は、ヒアリングや設計の期間を含め、1〜2ヶ月程度の準備期間をいただいています。",
      },
      {
        question: "事前に用意するものはありますか？",
        answer:
          "基本的に特別な準備は不要です。ヒアリングの際に、現在の業務フローや課題について教えていただければ、こちらで最適なプランを設計いたします。研修時には、参加者のPC環境をご確認いただく場合があります。",
      },
      {
        question: "何人から研修を受けられますか？",
        answer:
          "1名様からでも対応可能です。ただし、5名以上での研修の方が、参加者同士の学び合いも生まれ、効果的な場合が多いです。人数に応じた最適な進め方をご提案いたします。",
      },
    ],
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-start justify-between gap-4 text-left"
      >
        <span className="text-lg font-medium text-gray-900 flex items-start gap-3">
          <span className="text-primary-600 flex-shrink-0">Q.</span>
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 pl-8 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              よくある質問
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              お客様からよくいただくご質問にお答えします
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqs.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary-600 rounded-full" />
                  {category.category}
                </h2>
                <div className="bg-gray-50 rounded-2xl px-6">
                  {category.items.map((faq, faqIndex) => (
                    <FAQItem
                      key={faqIndex}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              その他のご質問はお気軽にどうぞ
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              ご不明な点がございましたら、お問い合わせフォームよりお気軽にご連絡ください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all hover:shadow-lg"
            >
              お問い合わせはこちら
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

