"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  BarChart3,
  Target,
  Briefcase,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const reasons = [
  {
    icon: Users,
    title: "伴走型支援",
    subtitle: "研修で終わらない、使えるようになるまで",
    description:
      "一回きりの研修では、なかなか定着しません。私たちは、社員の皆さまが実際に業務で使えるようになるまで、継続的にサポートします。",
    points: [
      "研修後のフォローアップ対応",
      "チャットでの随時Q&A",
      "定期的な進捗確認と改善提案",
    ],
  },
  {
    icon: BarChart3,
    title: "レベル対応",
    subtitle: "初心者〜上級者、一人ひとりに合わせた支援",
    description:
      "社員のITリテラシーや生成AI習熟度は人それぞれ。一律の研修では効果が出にくいため、個人のレベルに合わせた支援を行います。",
    points: [
      "事前ヒアリングでレベルを把握",
      "初心者にも分かりやすい説明",
      "上級者向けの高度な活用法も対応",
    ],
  },
  {
    icon: MessageSquare,
    title: "事前ヒアリング",
    subtitle: "現状を正確に把握してから設計",
    description:
      "いきなり研修を始めるのではなく、まずは貴社の現状・課題・目標を丁寧にヒアリング。その上で最適な支援プランを設計します。",
    points: [
      "現在の業務フローの把握",
      "社員のスキルレベルの確認",
      "導入の目的・ゴールの明確化",
    ],
  },
  {
    icon: Target,
    title: "実効性重視",
    subtitle: "理論より「実際の業務で使える」",
    description:
      "理論や概念の説明だけでなく、実際の業務でどう使うかを重視。ハンズオン形式で「やってみる」体験を大切にしています。",
    points: [
      "実務に即した演習課題",
      "自社の業務で使う想定での練習",
      "すぐに使える指示文テンプレート",
    ],
  },
  {
    icon: Briefcase,
    title: "中小企業診断士の視点",
    subtitle: "経営と現場をつなぐ",
    description:
      "中小企業診断士として経営の視点を持っているからこそ、単なるツール導入ではなく、経営課題の解決につなげる支援ができます。",
    points: [
      "経営戦略との整合性を考慮",
      "ROI・生産性向上の視点",
      "現場と経営層の橋渡し",
    ],
  },
];

export default function WhyUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        {/* 背景画像（必須）＋動画（任意） */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/why-us/hero.jpg')",
            backgroundColor: "#f3f4ff",
          }}
        >
          {/* 動画を置く場合は /public/videos/hero/why-us.mp4 に配置 */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/why-us/hero.jpg"
            src="/videos/hero/why-us.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white" />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 drop-shadow-sm">
              選ばれる理由
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed drop-shadow-sm">
              なぜオフィス・ノードが選ばれるのか。
              <br />
              私たちの支援の特徴をご紹介します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="space-y-20"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                variants={fadeInUp}
              >
                {/* Icon & Number */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl flex items-center justify-center">
                      <reason.icon className="w-16 h-16 text-primary-600" />
                    </div>
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h2>
                  <p className="text-primary-600 font-medium mb-4">
                    {reason.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {reason.description}
                  </p>
                  <ul className="space-y-2">
                    {reason.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-center gap-2 text-gray-700 justify-center lg:justify-start"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
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

