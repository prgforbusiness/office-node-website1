"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, CheckCircle2, Send } from "lucide-react";

const contactSchema = z.object({
  companyName: z.string().min(1, "会社名を入力してください"),
  name: z.string().min(1, "お名前を入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  phone: z.string().optional(),
  currentStatus: z.string().min(1, "現在の状況を選択してください"),
  challenge: z.string().min(1, "お悩み・ご相談内容を入力してください"),
  preferredService: z.string().optional(),
  preferredContact: z.string().min(1, "ご希望の連絡方法を選択してください"),
  privacyAgreed: z.boolean().refine((val) => val === true, {
    message: "プライバシーポリシーに同意してください",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              お問い合わせありがとうございます
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              内容を確認の上、2営業日以内にご連絡いたします。
              <br />
              しばらくお待ちください。
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              トップページに戻る
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

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
              お問い合わせ
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              まずはお気軽にご相談ください。
              <br />
              貴社の課題やご状況をお聞かせいただければ、最適なプランをご提案いたします。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.form
              className="space-y-8"
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Company & Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    会社名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("companyName")}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.companyName ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`}
                    placeholder="株式会社〇〇"
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`}
                    placeholder="山田 太郎"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`}
                    placeholder="info@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="03-1234-5678"
                  />
                </div>
              </div>

              {/* Current Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  現在の生成AI活用状況 <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("currentStatus")}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.currentStatus ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`}
                >
                  <option value="">選択してください</option>
                  <option value="not-started">まだ導入していない</option>
                  <option value="considering">導入を検討中</option>
                  <option value="started">導入したが活用できていない</option>
                  <option value="using">ある程度活用している</option>
                  <option value="advanced">かなり活用している</option>
                </select>
                {errors.currentStatus && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.currentStatus.message}
                  </p>
                )}
              </div>

              {/* Challenge */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  お悩み・ご相談内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register("challenge")}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.challenge ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`}
                  placeholder="現在お困りのことや、ご相談内容をご記入ください"
                />
                {errors.challenge && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.challenge.message}
                  </p>
                )}
              </div>

              {/* Preferred Service */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ご検討中のサービス
                </label>
                <select
                  {...register("preferredService")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="">わからない・相談したい</option>
                  <option value="training">研修・セミナー（Aカテゴリー）</option>
                  <option value="consulting">
                    顧問契約・伴走支援（Bカテゴリー）
                  </option>
                  <option value="dx-support">DX導入支援（Cカテゴリー）</option>
                </select>
              </div>

              {/* Preferred Contact */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ご希望の連絡方法 <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  {[
                    { value: "email", label: "メール" },
                    { value: "phone", label: "電話" },
                    { value: "online", label: "オンライン面談" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        {...register("preferredContact")}
                        value={option.value}
                        className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
                {errors.preferredContact && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.preferredContact.message}
                  </p>
                )}
              </div>

              {/* Privacy Policy */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("privacyAgreed")}
                    className="w-5 h-5 mt-0.5 text-primary-600 focus:ring-primary-500 rounded"
                  />
                  <span className="text-gray-700">
                    <Link
                      href="/privacy"
                      className="text-primary-600 hover:underline"
                    >
                      プライバシーポリシー
                    </Link>
                    に同意する <span className="text-red-500">*</span>
                  </span>
                </label>
                {errors.privacyAgreed && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.privacyAgreed.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all w-full md:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      送信中...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      送信する
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}

