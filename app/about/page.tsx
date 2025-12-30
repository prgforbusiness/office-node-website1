"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Briefcase, Heart, Users } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function AboutPage() {
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
              事業者情報
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              オフィス・ノードについてご紹介します
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Info Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-gray-50 rounded-3xl p-8 lg:p-12 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">O</span>
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    オフィス・ノード
                  </h2>
                  <p className="text-gray-600">Office Node</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    事業コンセプト
                  </h3>
                  <p className="text-lg text-gray-900 font-medium">
                    生成AI × 中小企業診断士
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    事業領域
                  </h3>
                  <p className="text-lg text-gray-900">
                    中小企業の社員向け生成AI活用支援・伴走型DX支援
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
                事業理念
              </h2>
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 text-white text-center">
                <p className="text-xl lg:text-2xl font-medium leading-relaxed">
                  社員一人ひとりが生成AIを
                  <br className="hidden lg:block" />
                  使いこなせる世界へ
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
                大切にしていること
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Heart,
                    title: "伴走する姿勢",
                    description:
                      "一回きりの研修で終わらせず、定着するまで寄り添います",
                  },
                  {
                    icon: Users,
                    title: "一人ひとりへの対応",
                    description:
                      "レベルや課題は人それぞれ。個別の状況に合わせた支援を行います",
                  },
                  {
                    icon: Briefcase,
                    title: "経営視点",
                    description:
                      "単なるツール導入ではなく、経営課題の解決につなげます",
                  },
                  {
                    icon: Award,
                    title: "実効性の追求",
                    description:
                      "理論より実践。「使えるようになる」ことを最優先します",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl p-6 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why Bansou */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                なぜ「伴走型」にこだわるのか
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  生成AIは、正しく活用すれば中小企業の生産性を大きく向上させる可能性を持っています。
                  しかし、多くの企業で「導入したけど使われていない」「研修をしたけど定着しない」という課題が生じています。
                </p>
                <p>
                  その原因の多くは、「一回きりの研修」や「ツールの導入だけ」で終わってしまうこと。
                  社員一人ひとりのレベルや業務内容が異なる中、画一的なアプローチでは効果が出にくいのです。
                </p>
                <p>
                  だからこそ、私たちは「伴走型」の支援にこだわります。
                  社員の皆さまが実際に業務で使えるようになるまで、継続的にサポートする。
                  それが、本当の意味での生成AI活用の定着につながると信じています。
                </p>
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
              お気軽にご相談ください
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              貴社の課題やご状況をお聞かせください。
              <br />
              最適な支援プランをご提案いたします。
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

