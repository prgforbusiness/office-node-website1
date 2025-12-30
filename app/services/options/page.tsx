"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Settings,
  Clock,
  ArrowRight,
  FileText,
  MessageSquare,
  TestTube,
  Wrench,
  BookOpen,
  Shield,
} from "lucide-react";

const options = [
  {
    id: "op1",
    name: "追加コンサル（2h）",
    description: "契約範囲外のスポット相談。急ぎの確認や微修正に対応します。",
    price: "応相談",
    duration: "2時間〜",
    icon: MessageSquare,
    deliverables: ["相談メモ", "作業ログ"],
  },
  {
    id: "op2",
    name: "評価・テストセット",
    description:
      "出力品質の評価体制づくり。品質の再現性担保をサポートします。",
    price: "応相談",
    duration: "1〜2週",
    icon: TestTube,
    deliverables: ["評価観点表", "テストケース", "結果サマリ"],
  },
  {
    id: "op3",
    name: "運用保守（月次）",
    description: "軽微改修・点検・改善提案。崩れない運用維持をサポートします。",
    price: "応相談",
    duration: "月次",
    icon: Wrench,
    deliverables: ["月次レポ", "改善提案", "軽微修正"],
  },
  {
    id: "op4",
    name: "教育ドキュメント＋動画",
    description:
      "マニュアル＋短尺動画で定着支援。内製の引継ぎをサポートします。",
    price: "応相談",
    duration: "2〜3週",
    icon: BookOpen,
    deliverables: ["PDFマニュアル", "操作動画", "チェックリスト"],
  },
  {
    id: "op5",
    name: "セキュリティ評価（簡易）",
    description:
      "取扱い・権限・連携の簡易診断。安全最低限の型整備をサポートします。",
    price: "応相談",
    duration: "2〜3週",
    icon: Shield,
    deliverables: ["チェックリスト", "改善提案"],
  },
];

export default function OptionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-accent-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
                OPカテゴリー
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              オプションサービス
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              追加でご利用いただけるサービス
              <br />
              必要に応じてメインサービスと組み合わせてご利用ください
            </p>
          </motion.div>
        </div>
      </section>

      {/* Options Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {options.map((option, index) => (
              <motion.div
                key={option.id}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-all border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
                    <option.icon className="w-5 h-5 text-accent-600" />
                  </div>
                  <span className="bg-accent-500 text-white px-2 py-0.5 rounded text-xs font-medium">
                    {option.id.toUpperCase()}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {option.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{option.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="font-medium text-gray-900">{option.price}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {option.duration}
                  </span>
                </div>

                <div>
                  <h3 className="text-xs font-medium text-gray-500 mb-2">
                    成果物
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {option.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 bg-white px-2 py-1 rounded text-xs text-gray-600 border border-gray-200"
                      >
                        <FileText className="w-3 h-3 text-gray-400" />
                        {item}
                      </span>
                    ))}
                  </div>
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
              料金・詳細はお問い合わせください
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              ご要望に応じてお見積りいたします。
              <br />
              お気軽にご相談ください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all"
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

