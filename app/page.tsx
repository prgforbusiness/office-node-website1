"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  BarChart3,
  Target,
  Briefcase,
  ArrowRight,
  MessageCircle,
  ClipboardList,
  Lightbulb,
  CheckCircle2,
  TrendingUp,
  BookOpen,
  Handshake,
  Cog,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-primary-50/30 to-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-primary-600 font-medium mb-4 text-sm lg:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              生成AI × 中小企業診断士
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              社員が
              <span className="text-primary-600">&ldquo;使える&rdquo;</span>
              まで、
              <br />
              <span className="text-primary-600">伴走</span>します
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              中小企業診断士が、一人ひとりのレベルに合わせた支援で、
              <br className="hidden lg:block" />
              生成AI活用を定着させます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all hover:shadow-lg hover:shadow-primary-600/20"
              >
                まずはご相談ください
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-medium text-lg border border-gray-200 transition-all"
              >
                サービスを見る
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              こんなお悩みありませんか？
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              "生成AIを導入したけど、社員が使いこなせていない",
              "研修をしたけど、結局使われていない",
              "ITに詳しくない社員もいて、レベル差がある",
              "忙しくて、自分たちだけでは進められない",
            ].map((problem, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                variants={fadeInUp}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-accent-600" />
                </div>
                <p className="text-gray-700 text-lg">{problem}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-600">
              そのお悩み、<span className="text-primary-600 font-bold">オフィス・ノード</span>が解決します
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              選ばれる4つの理由
            </h2>
            <p className="text-lg text-gray-600">
              私たちが選ばれる理由をご紹介します
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Users,
                title: "伴走型支援",
                description: "研修で終わらない、定着するまでサポート",
                color: "primary",
              },
              {
                icon: BarChart3,
                title: "レベル対応",
                description: "初心者〜上級者、一人ひとりに合わせて",
                color: "accent",
              },
              {
                icon: Target,
                title: "実効性重視",
                description: "理論より「使える」を優先",
                color: "primary",
              },
              {
                icon: Briefcase,
                title: "経営視点",
                description: "中小企業診断士だから、経営と現場をつなぐ",
                color: "accent",
              },
            ].map((reason, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100"
                variants={fadeInUp}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    reason.color === "primary"
                      ? "bg-primary-100 text-primary-600"
                      : "bg-accent-100 text-accent-600"
                  }`}
                >
                  <reason.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/why-us"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              詳しく見る
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              サービスカテゴリー
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              お客様の状況に合わせて、最適なサービスをお選びいただけます
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                category: "A",
                title: "研修・セミナー",
                subtitle: "まず知る・体験する",
                description:
                  "生成AIの基礎から実践まで、段階的に学べる研修プログラム",
                icon: BookOpen,
                items: [
                  "生成AI入門セミナー（60分）",
                  "スタートアップ研修（全3回）",
                  "個別支援・伴走サポート",
                ],
                price: "55,000円〜",
                href: "/services/training",
                color: "primary",
              },
              {
                category: "B",
                title: "顧問契約・伴走支援",
                subtitle: "継続的に伴走する",
                description:
                  "月次の定期的なサポートで、着実にAI活用を定着させます",
                icon: Handshake,
                items: [
                  "顧問契約LITE（月1回）",
                  "顧問契約STANDARD（月2回）",
                  "顧問契約ADVANCE（月4回）",
                ],
                price: "77,000円〜/月",
                href: "/services/consulting",
                color: "accent",
              },
              {
                category: "C",
                title: "DX導入支援",
                subtitle: "本格導入する",
                description:
                  "業務アプリや自動化フローなど、実体成果物を伴う導入支援",
                icon: Cog,
                items: [
                  "DX導入・改善パック",
                  "月次DX伴走サポート",
                ],
                price: "165,000円〜",
                href: "/services/dx-support",
                color: "primary",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all border border-gray-100 flex flex-col"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      service.color === "primary"
                        ? "bg-primary-600 text-white"
                        : "bg-accent-500 text-white"
                    }`}
                  >
                    <span className="font-bold">{service.category}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-3">
                    料金: <span className="text-lg font-bold text-gray-900">{service.price}</span>
                  </p>
                  <Link
                    href={service.href}
                    className={`inline-flex items-center gap-2 font-medium ${
                      service.color === "primary"
                        ? "text-primary-600 hover:text-primary-700"
                        : "text-accent-600 hover:text-accent-700"
                    }`}
                  >
                    詳しく見る
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 mb-4">
              どれを選べばいいかわからない方も、お気軽にご相談ください
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              サービス一覧を見る
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Flow Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              支援の流れ
            </h2>
            <p className="text-lg text-primary-100">
              まずはお話を聞かせてください
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                icon: ClipboardList,
                title: "ヒアリング",
                description: "現状の課題・レベル・目標を把握",
              },
              {
                step: "02",
                icon: Lightbulb,
                title: "設計",
                description: "お客様に合わせた支援プランを作成",
              },
              {
                step: "03",
                icon: Users,
                title: "実施",
                description: "研修・ハンズオン・伴走支援",
              },
              {
                step: "04",
                icon: TrendingUp,
                title: "定着",
                description: "フォローアップ、Q&A対応、改善提案",
              },
            ].map((flow, index) => (
              <motion.div
                key={index}
                className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                variants={fadeInUp}
              >
                <div className="text-4xl font-bold text-white/30 mb-4">
                  {flow.step}
                </div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                  <flow.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{flow.title}</h3>
                <p className="text-primary-100 text-sm">{flow.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/flow"
              className="inline-flex items-center gap-2 bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              詳しく見る
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              よくある質問
            </h2>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto space-y-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                q: "ITに詳しくない社員でも大丈夫ですか？",
                a: "はい、大丈夫です。一人ひとりのレベルに合わせた支援を行います。PCの基本操作ができれば、生成AIの活用は十分に可能です。",
              },
              {
                q: "研修だけで使えるようになりますか？",
                a: "研修だけでは定着しにくいケースが多いです。そのため、私たちは「伴走型」の支援を重視しています。研修後も継続的なサポートで定着をお手伝いします。",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-6"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-primary-600">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 pl-7">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              すべてのFAQを見る
              <ArrowRight size={16} />
            </Link>
          </motion.div>
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
              まずはお気軽にご相談ください
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              貴社の課題やご状況をお聞かせください。<br />
              最適なサービスプランをご提案いたします。
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
