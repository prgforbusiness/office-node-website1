import type { Metadata } from "next";
import { Noto_Sans_JP, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mplus-rounded",
});

export const metadata: Metadata = {
  title: "オフィス・ノード | 生成AI × 中小企業診断士",
  description: "中小企業の社員向け生成AI活用支援・伴走型DX支援。社員が「使える」まで、伴走します。",
  keywords: ["生成AI", "中小企業", "DX支援", "ChatGPT", "社員研修", "伴走支援"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${mPlusRounded.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
