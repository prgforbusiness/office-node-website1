import Link from "next/link";

const footerNavigation = {
  services: [
    { name: "研修・セミナー", href: "/services/training" },
    { name: "顧問契約・伴走支援", href: "/services/consulting" },
    { name: "DX導入支援", href: "/services/dx-support" },
    { name: "オプション", href: "/services/options" },
  ],
  company: [
    { name: "選ばれる理由", href: "/why-us" },
    { name: "支援の流れ", href: "/flow" },
    { name: "事業者情報", href: "/about" },
    { name: "契約ポリシー", href: "/policy" },
  ],
  support: [
    { name: "お問い合わせ", href: "/contact" },
    { name: "よくある質問", href: "/faq" },
    { name: "プライバシーポリシー", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-lg font-bold text-white">オフィス・ノード</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              生成AI × 中小企業診断士<br />
              社員が&ldquo;使える&rdquo;まで、伴走します。
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">サービス</h3>
            <ul className="space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">会社情報</h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">サポート</h3>
            <ul className="space-y-2">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} オフィス・ノード All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-300">
              プライバシーポリシー
            </Link>
            <Link href="/policy" className="text-sm text-gray-500 hover:text-gray-300">
              契約ポリシー
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

