"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Clock,
  CircleDollarSign,
  Users,
  ArrowRight,
  CheckCircle2,
  FileText,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const services = [
  {
    id: "a1",
    name: "生成AI入門セミナー（60分）",
    description: "最新動向・事例・安全の要点を60分で解説。社内の共通理解づくりに最適です。",
    price: "55,000円〜",
    duration: "60分×1回",
    target: "社内の共通理解を作りたい企業",
    contents: [
      "生成AIの最新動向",
      "活用事例の紹介",
      "安全・留意点の解説",
      "デモンストレーション",
      "Q&A",
    ],
    deliverables: ["スライドPDF", "指示文テンプレート"],
    notIncluded: "設定・開発・個別実装（必要時はB/Cへ）",
  },
  {
    id: "a2",
    name: "生成AIスタートアップ研修（全3回・徹底サポート）",
    description: "実務演習＋期間中の随時Q&A対応。現場定着の起点づくりに。",
    price: "550,000円〜/社",
    duration: "3回（各90–120分）＋期間中Q&A",
    target: "現場定着の起点を作りたい企業",
    contents: [
      "①検索・要約・指示出し",
      "②社内文書で作成（議事録・メール等）",
      "③品質評価・安全ルール",
      "期間中の随時Q&A対応（当日〜24h内返信）",
    ],
    deliverables: ["演習資料", "評価シート", "指示文雛形", "ルール案（学習成果物）"],
    notIncluded: "設定・連携・開発（必要時はB/Cへ）",
  },
  {
    id: "a3",
    name: "生成AI個別支援・伴走サポート（部門向けハンズオン）",
    description: "部門課題ヒアリング→活用設計→操作定着。部門別の実務適用に。",
    price: "440,000円〜",
    duration: "120分×1回",
    target: "部門別の実務適用をしたい企業",
    contents: [
      "部門課題のヒアリング",
      "活用設計・実演",
      "活用ガイド・操作マニュアル整備",
    ],
    deliverables: [
      "活用ガイド",
      "操作マニュアル（1–2p）",
      "活用シナリオ",
      "改善リスト",
    ],
    notIncluded:
      "専用アプリや連携開発に発展する場合は開発費用が別途（要お見積り）",
  },
];

export default function TrainingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                Aカテゴリー
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              研修・セミナー
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              まず知る・体験する（入り口）
              <br />
              生成AIの基礎から実践まで、段階的に学べる研修プログラム
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-gray-50 rounded-3xl p-8 lg:p-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-primary-600 text-white px-2 py-0.5 rounded text-sm font-medium">
                        A-{index + 1}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                      {service.name}
                    </h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-700">
                        <CircleDollarSign className="w-4 h-4 text-gray-400" />
                        <span className="font-medium">{service.price}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span>{service.target}</span>
                      </div>
                    </div>

                    {/* Contents */}
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-3">
                        内容
                      </h3>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {service.contents.map((content, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {content}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-3">
                        成果物
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((item, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg text-sm text-gray-700 border border-gray-200"
                          >
                            <FileText className="w-3 h-3 text-gray-400" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Not Included */}
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                      <strong>含まない範囲：</strong>
                      {service.notIncluded}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              まずはご相談ください
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              貴社の状況に合わせて、最適なプログラムをご提案いたします。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg transition-all"
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

