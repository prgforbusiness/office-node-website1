"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
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
              プライバシーポリシー
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              個人情報の取り扱いについて
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto prose prose-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p>
              オフィス・ノード（以下「当事業者」）は、お客様の個人情報の保護を重要な責務と考え、
              以下のとおりプライバシーポリシーを定めます。
            </p>

            <h2>1. 個人情報の収集</h2>
            <p>
              当事業者は、サービスの提供にあたり、お客様の個人情報を適法かつ公正な手段により収集します。
              収集する個人情報には、以下のものが含まれます。
            </p>
            <ul>
              <li>氏名</li>
              <li>会社名・部署名・役職</li>
              <li>メールアドレス</li>
              <li>電話番号</li>
              <li>その他、サービス提供に必要な情報</li>
            </ul>

            <h2>2. 個人情報の利用目的</h2>
            <p>収集した個人情報は、以下の目的で利用します。</p>
            <ul>
              <li>サービスの提供・運営</li>
              <li>お問い合わせへの対応</li>
              <li>サービスに関するご案内・情報提供</li>
              <li>契約・請求に関する事務処理</li>
              <li>サービスの改善・新サービスの開発</li>
            </ul>

            <h2>3. 個人情報の第三者提供</h2>
            <p>
              当事業者は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。
            </p>
            <ul>
              <li>お客様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命・身体・財産の保護のため必要な場合</li>
              <li>
                サービスの提供に必要な範囲で業務委託先に提供する場合
                （この場合、適切な監督を行います）
              </li>
            </ul>

            <h2>4. 個人情報の安全管理</h2>
            <p>
              当事業者は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。
            </p>

            <h2>5. 個人情報の開示・訂正・削除</h2>
            <p>
              お客様は、当事業者が保有するご自身の個人情報について、開示・訂正・削除を求めることができます。
              ご希望の場合は、お問い合わせフォームよりご連絡ください。
            </p>

            <h2>6. Cookieの使用</h2>
            <p>
              当ウェブサイトでは、サービスの向上・アクセス解析のためにCookieを使用する場合があります。
              Cookieの使用を希望されない場合は、ブラウザの設定により無効化することができます。
            </p>

            <h2>7. プライバシーポリシーの変更</h2>
            <p>
              当事業者は、必要に応じて本ポリシーを変更することがあります。
              変更後のポリシーは、本ページに掲載した時点で効力を生じます。
            </p>

            <h2>8. お問い合わせ</h2>
            <p>
              本ポリシーに関するお問い合わせは、お問い合わせフォームよりご連絡ください。
            </p>

            <p className="text-sm text-gray-500 mt-12">
              制定日：2024年12月
              <br />
              最終更新日：2024年12月
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

