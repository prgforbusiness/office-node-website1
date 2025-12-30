"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle, Info } from "lucide-react";

export default function PolicyPage() {
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
              契約ポリシー・注意事項
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              安心してサービスをご利用いただくために
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* 段階連動型契約 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  段階連動型契約（安心設計）
                </h2>
              </div>
              <div className="bg-primary-50 rounded-2xl p-6 lg:p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  DX導入支援（Cカテゴリー）など、成果物を伴う契約では「段階連動型」を採用しています。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  ヒアリング・現状分析の結果、<strong>成果物の実現が難しい</strong>と判断される場合は、
                  <strong>顧問契約（B-1〜B-3）へ切替</strong>し、<strong>料金も顧問範囲に調整</strong>いたします。
                </p>
                <p className="text-gray-600 text-sm">
                  ※ 無理に進めて成果が出ないリスクを避け、お客様にとって最適な形での支援を提供するための仕組みです。
                </p>
              </div>
            </motion.div>

            {/* 料金について */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
                  <Info className="w-5 h-5 text-accent-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">料金について</h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">税込表示</p>
                    <p className="text-gray-600 text-sm">
                      すべての料金は税込価格で表示しています
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">交通費・宿泊費</p>
                    <p className="text-gray-600 text-sm">
                      対面での研修・ミーティングの場合、交通費・宿泊費は実費をご負担いただきます
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">範囲外対応</p>
                    <p className="text-gray-600 text-sm">
                      契約範囲外の対応は、追加見積または時間課金（目安 11,000〜16,500円/時）となります
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* チャット応答目安 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Info className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  チャット応答目安（顧問契約）
                </h2>
              </div>
              <div className="bg-gray-50 rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                        プラン
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                        応答目安
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-6 py-4 text-gray-900">B-1（LITE）</td>
                      <td className="px-6 py-4 text-gray-600">48時間以内</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-900">B-2（STANDARD）</td>
                      <td className="px-6 py-4 text-gray-600">24時間以内</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-900">B-3（ADVANCE）</td>
                      <td className="px-6 py-4 text-gray-600">当日対応</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                ※ 営業時間内（平日9:00〜18:00）の目安です
              </p>
            </motion.div>

            {/* 守秘義務・NDA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-accent-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">守秘義務・NDA対応</h2>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                <p className="text-gray-700 leading-relaxed">
                  NDA（秘密保持契約）の締結に対応しております。
                  閉じた環境を前提とした運用設計もサポートいたします。
                  お客様の機密情報を安全に取り扱います。
                </p>
              </div>
            </motion.div>

            {/* 成果物について */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  成果物について（重要）
                </h2>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 lg:p-8 space-y-4">
                <div>
                  <p className="font-medium text-gray-900 mb-2">
                    顧問契約（Bカテゴリー）の成果物
                  </p>
                  <p className="text-gray-700">
                    議事メモ、方針メモ、改善提案メモなど、<strong>アドバイス・ドキュメント類</strong>が成果物です。
                    <br />
                    <strong className="text-amber-700">
                      業務アプリや自動化フローなどの実体プロダクトは含みません。
                    </strong>
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-2">
                    DX導入支援（Cカテゴリー）の成果物
                  </p>
                  <p className="text-gray-700">
                    業務アプリ、自動化フロー設定、データ連携設定、運用マニュアル、研修資料など、
                    <strong>実体成果物</strong>が含まれます。
                  </p>
                </div>
              </div>
            </motion.div>
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
              ご不明な点はお気軽にお問い合わせください
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              契約内容や料金について、詳しくご説明いたします。
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

