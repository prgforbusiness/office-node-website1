"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cog,
  Clock,
  CircleDollarSign,
  ArrowRight,
  CheckCircle2,
  FileText,
  Shield,
  Package,
} from "lucide-react";

const services = [
  {
    id: "c1",
    name: "DX導入支援（DX導入・改善パック）",
    description:
      "現状分析→設計→設定→教育→定着を一気通貫で支援。業務の一連化・標準化に最適です。",
    price: "1,650,000円〜",
    duration: "約2〜3か月",
    target: "業務の一連化・標準化をしたい企業",
    flow: [
      "現状分析",
      "設計",
      "設定・構築",
      "教育・研修",
      "定着支援",
    ],
    deliverables: [
      "業務アプリ",
      "自動化フロー設定",
      "データ連携設定",
      "運用マニュアル",
      "研修資料",
    ],
  },
  {
    id: "c2",
    name: "月次DX伴走サポート（DXライト顧問・PJ枠）",
    description:
      "導入後の改善・定着を月次で実行支援。導入後の現場定着をサポートします。",
    price: "165,000円〜/月",
    duration: "月1回（3〜4h）",
    target: "導入後の現場定着をしたい企業",
    flow: [
      "月次ミーティング",
      "課題・改善点の確認",
      "設定変更・調整",
      "運用ルール更新",
    ],
    deliverables: [
      "月次改善レポート",
      "設定変更履歴",
      "運用ルール更新",
      "ダッシュボード更新",
    ],
  },
];

export default function DXSupportPage() {
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
                <Cog className="w-6 h-6 text-white" />
              </div>
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                Cカテゴリー
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              DX導入支援
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              実体成果物を伴う導入（本格導入フェーズ）
              <br />
              業務アプリや自動化フローなど、実体成果物を伴う導入支援
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Feature */}
      <section className="py-8 bg-primary-600 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center gap-4 text-center">
            <Package className="w-6 h-6" />
            <p className="font-medium">
              Cカテゴリーは<strong>実体成果物</strong>が含まれるサービスです
            </p>
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="py-8 bg-green-50 border-y border-green-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-green-800 mb-1">
                成果物契約の安心設計
              </p>
              <p className="text-green-700 text-sm">
                初期ヒアリングや現状分析の結果、
                <strong>成果物の実現が難しい</strong>
                と判断される場合は、契約を
                <strong>顧問（B-1〜B-3）へ切替</strong>し、
                <strong>料金も顧問範囲に調整</strong>します。
                無理に進めて成果が出ないリスクを避ける安心設計です。
              </p>
            </div>
          </div>
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
                        C-{index + 1}
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
                    </div>

                    {/* Flow */}
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-3">
                        実施の流れ
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        {service.flow.map((step, i) => (
                          <div key={i} className="flex items-center">
                            <span className="bg-primary-100 text-primary-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                              {step}
                            </span>
                            {i < service.flow.length - 1 && (
                              <ArrowRight className="w-4 h-4 text-gray-300 mx-1" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-3">
                        実体成果物
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((item, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 bg-primary-100 px-3 py-1.5 rounded-lg text-sm text-primary-700 font-medium"
                          >
                            <FileText className="w-3 h-3" />
                            {item}
                          </span>
                        ))}
                      </div>
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
              まずはヒアリングから
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              貴社の業務課題をお聞かせください。
              <br />
              最適なDX導入プランをご提案いたします。
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

