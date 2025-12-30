"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Handshake,
  Cog,
  Settings,
  ArrowRight,
  CheckCircle2,
  Clock,
  CircleDollarSign,
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

const services = [
  {
    category: "A",
    title: "研修・セミナー",
    subtitle: "まず知る・体験する（入り口）",
    icon: BookOpen,
    color: "primary",
    href: "/services/training",
    items: [
      {
        id: "a1",
        name: "生成AI入門セミナー（60分）",
        description: "最新動向・事例・安全の要点",
        price: "55,000円〜",
        duration: "60分×1回",
      },
      {
        id: "a2",
        name: "生成AIスタートアップ研修（全3回・徹底サポート）",
        description: "実務演習＋期間中の随時Q&A対応",
        price: "550,000円〜/社",
        duration: "3回（各90–120分）＋期間中Q&A",
      },
      {
        id: "a3",
        name: "生成AI個別支援・伴走サポート（部門向けハンズオン）",
        description: "部門課題ヒア→活用設計→操作定着",
        price: "440,000円〜",
        duration: "120分×1回",
      },
    ],
  },
  {
    category: "B",
    title: "顧問契約・伴走支援",
    subtitle: "継続的に伴走する（定着フェーズ）",
    icon: Handshake,
    color: "accent",
    href: "/services/consulting",
    items: [
      {
        id: "b1",
        name: "顧問契約LITE（月1回）",
        description: "月1回の定例相談で方針整理",
        price: "77,000円〜/月",
        duration: "月1回",
      },
      {
        id: "b2",
        name: "顧問契約STANDARD（月2回）",
        description: "月2回の伴走で小改善を加速",
        price: "132,000円〜/月",
        duration: "月2回",
      },
      {
        id: "b3",
        name: "顧問契約ADVANCE（月4回）",
        description: "週1回の密着伴走",
        price: "220,000円〜/月",
        duration: "週1回",
      },
    ],
  },
  {
    category: "C",
    title: "DX導入支援",
    subtitle: "実体成果物を伴う導入（本格導入フェーズ）",
    icon: Cog,
    color: "primary",
    href: "/services/dx-support",
    items: [
      {
        id: "c1",
        name: "DX導入支援（DX導入・改善パック）",
        description: "分析→設計→導入→教育を一気通貫",
        price: "1,650,000円〜",
        duration: "約2〜3か月",
      },
      {
        id: "c2",
        name: "月次DX伴走サポート",
        description: "導入後の改善・定着を月次で実行支援",
        price: "165,000円〜/月",
        duration: "月1回（3〜4h）",
      },
    ],
  },
  {
    category: "OP",
    title: "オプションサービス",
    subtitle: "追加でご利用いただけるサービス",
    icon: Settings,
    color: "accent",
    href: "/services/options",
    items: [
      {
        id: "op1",
        name: "追加コンサル（2h）",
        description: "範囲外のスポット相談",
        price: "応相談",
        duration: "2時間〜",
      },
      {
        id: "op2",
        name: "評価・テストセット",
        description: "出力品質の評価体制づくり",
        price: "応相談",
        duration: "1〜2週",
      },
      {
        id: "op3",
        name: "運用保守（月次）",
        description: "軽微改修・点検・改善提案",
        price: "応相談",
        duration: "月次",
      },
      {
        id: "op4",
        name: "教育ドキュメント＋動画",
        description: "マニュアル＋短尺動画で定着支援",
        price: "応相談",
        duration: "2〜3週",
      },
      {
        id: "op5",
        name: "セキュリティ評価（簡易）",
        description: "取扱い・権限・連携の簡易診断",
        price: "応相談",
        duration: "2〜3週",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/services/hero.jpg')",
            backgroundColor: "#f3f4ff",
          }}
        >
          {/* 動画を置く場合は /public/videos/hero/services.mp4 に配置 */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/services/hero.jpg"
            src="/videos/hero/services.mp4"
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
              サービス一覧
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed drop-shadow-sm">
              お客様の課題やフェーズに合わせて、最適なサービスをお選びいただけます。
              <br />
              どれを選べばいいかわからない場合も、お気軽にご相談ください。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="space-y-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-100 pb-16 last:border-0"
                variants={fadeInUp}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      service.color === "primary"
                        ? "bg-primary-600 text-white"
                        : "bg-accent-500 text-white"
                    }`}
                  >
                    <service.icon size={28} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-bold px-2 py-0.5 rounded ${
                          service.color === "primary"
                            ? "bg-primary-100 text-primary-700"
                            : "bg-accent-100 text-accent-700"
                        }`}
                      >
                        {service.category}
                      </span>
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 mt-1">{service.subtitle}</p>
                  </div>
                </div>

                {/* Service Items */}
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {service.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-all border border-gray-100"
                    >
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <CircleDollarSign size={14} />
                          {item.price}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {item.duration}
                        </span>
                      </div>
                      <Link
                        href={`${service.href}/${item.id}`}
                        className={`inline-flex items-center gap-1 text-sm font-medium ${
                          service.color === "primary"
                            ? "text-primary-600 hover:text-primary-700"
                            : "text-accent-600 hover:text-accent-700"
                        }`}
                      >
                        詳細を見る
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  ))}
                </div>
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
              どれを選べばいいかわからない方へ
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              貴社の課題やご状況をお聞かせいただければ、
              <br />
              最適なサービスプランをご提案いたします。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg transition-all"
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

