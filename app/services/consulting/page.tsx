"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Handshake,
  Clock,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  FileText,
  AlertTriangle,
} from "lucide-react";

const services = [
  {
    id: "b1",
    name: "顧問契約LITE",
    subtitle: "月1回",
    description: "月1回の定例相談で方針整理。まず方向性を整理したい企業向け。",
    price: "77,000円〜/月",
    frequency: "月1回",
    responseTime: "48時間以内",
    contents: [
      "月1回の定例ミーティング",
      "課題整理・方針決定・助言",
      "チャット相談可（48h以内）",
    ],
    deliverables: ["議事メモ", "方針メモ", "3か月ロードマップ"],
  },
  {
    id: "b2",
    name: "顧問契約STANDARD",
    subtitle: "月2回",
    description: "月2回の伴走で小改善を加速。小さく早く回したい企業向け。",
    price: "132,000円〜/月",
    frequency: "月2回",
    responseTime: "24時間以内",
    contents: [
      "月2回のレビューミーティング",
      "課題整理・方針決定・助言",
      "チャット相談可（24h以内）",
    ],
    deliverables: ["議事録", "改善提案メモ", "実行計画"],
    recommended: true,
  },
  {
    id: "b3",
    name: "顧問契約ADVANCE",
    subtitle: "月4回",
    description: "週1回の密着伴走。継続的な経営・DX相談をしたい企業向け。",
    price: "220,000円〜/月",
    frequency: "週1回",
    responseTime: "当日対応",
    contents: [
      "週1回の密着ミーティング",
      "課題整理・方針決定・助言",
      "チャット相談可（当日対応）",
    ],
    deliverables: ["方針整理資料", "次の一手リスト", "月次レビュー"],
  },
];

export default function ConsultingPage() {
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
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
                Bカテゴリー
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              顧問契約・伴走支援
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              継続的に伴走する（定着フェーズ）
              <br />
              月次の定期的なサポートで、着実にAI活用を定着させます
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-amber-800 mb-1">重要なお知らせ</p>
              <p className="text-amber-700 text-sm">
                顧問契約はアドバイザー型のサービスです。
                <strong>
                  アプリ・自動化などの実体プロダクトは成果物に含みません。
                </strong>
                実体成果物が必要な場合は、
                <Link href="/services/dx-support" className="underline">
                  DX導入支援（Cカテゴリー）
                </Link>
                をご検討ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`relative rounded-3xl p-8 ${
                  service.recommended
                    ? "bg-accent-50 border-2 border-accent-300"
                    : "bg-gray-50 border border-gray-100"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {service.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      おすすめ
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <span className="bg-accent-500 text-white px-2 py-0.5 rounded text-sm font-medium">
                    B-{index + 1}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mt-3">
                    {service.name}
                  </h2>
                  <p className="text-accent-600 font-medium">{service.subtitle}</p>
                </div>

                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-gray-900">
                    {service.price}
                  </p>
                </div>

                <p className="text-gray-600 text-sm text-center mb-6">
                  {service.description}
                </p>

                {/* Meta Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      頻度
                    </span>
                    <span className="text-gray-900 font-medium">
                      {service.frequency}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      チャット応答
                    </span>
                    <span className="text-gray-900 font-medium">
                      {service.responseTime}
                    </span>
                  </div>
                </div>

                {/* Contents */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">内容</h3>
                  <ul className="space-y-2">
                    {service.contents.map((content, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
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
                        className="inline-flex items-center gap-1 bg-white px-2 py-1 rounded text-xs text-gray-700 border border-gray-200"
                      >
                        <FileText className="w-3 h-3 text-gray-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-medium transition-colors ${
                    service.recommended
                      ? "bg-accent-500 hover:bg-accent-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                  }`}
                >
                  お問い合わせ
                </Link>
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
              どのプランが最適かわからない方へ
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              貴社の状況をお聞かせいただければ、最適なプランをご提案いたします。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all"
            >
              まずはご相談ください
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

