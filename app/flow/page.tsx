"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Lightbulb,
  Users,
  TrendingUp,
  Rocket,
  ArrowRight,
  ArrowDown,
  ImageIcon,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "ヒアリング",
    subtitle: "現状の課題・レベル・目標を把握",
    image: "/images/flow/step-01-hearing.jpg",
    description:
      "まずはお話をお聞かせください。現在の業務フロー、社員のスキルレベル、導入の目的やゴールを丁寧にヒアリングし、貴社の状況を正確に把握します。",
    details: [
      "経営課題・業務課題の確認",
      "社員のITリテラシー・AI習熟度の把握",
      "導入の目的・期待する成果の明確化",
      "スケジュール・予算の確認",
    ],
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "設計",
    subtitle: "お客様に合わせた支援プランを作成",
    image: "/images/flow/step-02-design.jpg",
    description:
      "ヒアリング内容をもとに、貴社に最適な支援プランを設計します。一律のパッケージではなく、課題とゴールに合わせたオーダーメイドのプランです。",
    details: [
      "最適なサービスメニューの選定",
      "研修内容・カリキュラムの設計",
      "スケジュール・実施体制の調整",
      "お見積りのご提示",
    ],
  },
  {
    step: "03",
    icon: Users,
    title: "実施",
    subtitle: "研修・ハンズオン・伴走支援",
    image: "/images/flow/step-03-implementation.jpg",
    description:
      "設計したプランに基づいて、研修やハンズオン、伴走支援を実施します。理論だけでなく、実際に手を動かして「使える」体験を重視します。",
    details: [
      "対面/オンラインでの研修実施",
      "実務に即したハンズオン演習",
      "随時のQ&A対応",
      "進捗確認と軌道修正",
    ],
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "定着",
    subtitle: "フォローアップ、Q&A対応、改善提案",
    image: "/images/flow/step-04-retention.jpg",
    description:
      "研修で終わりではありません。社員の皆さまが実際に業務で使えるようになるまで、継続的にフォローアップを行います。",
    details: [
      "研修後のフォローアップセッション",
      "チャットでの継続的なQ&A対応",
      "活用状況の確認と改善提案",
      "追加研修の実施（必要に応じて）",
    ],
  },
  {
    step: "05",
    icon: Rocket,
    title: "発展",
    subtitle: "さらなる活用拡大へ",
    image: "/images/flow/step-05-growth.jpg",
    description:
      "定着した後は、さらなる活用拡大をサポート。他部門への展開や、より高度な活用方法の習得など、次のステップへ進むお手伝いをします。",
    details: [
      "他部門・他業務への展開支援",
      "高度な活用方法のレクチャー",
      "自動化・業務改善の提案",
      "社内AI推進体制の構築支援",
    ],
  },
];

export default function FlowPage() {
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
              支援の流れ
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              まずはお話を聞かせてください。
              <br />
              貴社の状況に合わせた最適な支援をご提供します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flow Steps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0 flex lg:flex-col items-center lg:items-start gap-4">
                      <div className="text-5xl lg:text-6xl font-bold text-primary-200">
                        {step.step}
                      </div>
                      <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Image Placeholder */}
                      <div className="hidden lg:block w-40 h-28 rounded-xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 mt-2">
                        {/* 画像がある場合：
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={160}
                          height={112}
                          className="object-cover w-full h-full"
                        />
                        */}
                        <div className="w-full h-full flex flex-col items-center justify-center text-primary-400">
                          <ImageIcon className="w-8 h-8 opacity-50" />
                          <span className="text-xs mt-1 opacity-75">STEP {step.step}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h2>
                      <p className="text-primary-600 font-medium mb-4">
                        {step.subtitle}
                      </p>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {step.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowDown className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
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
              貴社の課題やご状況をお聞かせください。
              <br />
              最適な支援プランをご提案いたします。
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

