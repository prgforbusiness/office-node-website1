import { NextRequest, NextResponse } from "next/server";

// メール送信先アドレス（環境変数から取得）
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";

interface ContactFormData {
  companyName: string;
  name: string;
  email: string;
  phone?: string;
  currentStatus: string;
  challenge: string;
  preferredService?: string;
  preferredContact: string;
}

// 現在の状況のラベル変換
const statusLabels: Record<string, string> = {
  "not-started": "まだ導入していない",
  "considering": "導入を検討中",
  "started": "導入したが活用できていない",
  "using": "ある程度活用している",
  "advanced": "かなり活用している",
};

// サービスのラベル変換
const serviceLabels: Record<string, string> = {
  "training": "研修・セミナー（Aカテゴリー）",
  "consulting": "顧問契約・伴走支援（Bカテゴリー）",
  "dx-support": "DX導入支援（Cカテゴリー）",
};

// 連絡方法のラベル変換
const contactLabels: Record<string, string> = {
  "email": "メール",
  "phone": "電話",
  "online": "オンライン面談",
};

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // バリデーション
    if (!data.companyName || !data.name || !data.email || !data.challenge) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    // メール送信先が設定されていない場合
    if (!CONTACT_EMAIL) {
      console.log("Contact form submission (email not configured):", data);
      return NextResponse.json(
        { 
          success: true, 
          message: "お問い合わせを受け付けました（メール設定が必要です）",
          note: "CONTACT_EMAIL環境変数を設定してください"
        },
        { status: 200 }
      );
    }

    // Resend APIキーが設定されていない場合
    if (!RESEND_API_KEY) {
      console.log("Contact form submission (Resend not configured):", data);
      return NextResponse.json(
        { 
          success: true, 
          message: "お問い合わせを受け付けました（メール設定が必要です）",
          note: "RESEND_API_KEY環境変数を設定してください"
        },
        { status: 200 }
      );
    }

    // メール本文を作成
    const emailBody = `
オフィス・ノード ウェブサイトからお問い合わせがありました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ内容
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【会社名】
${data.companyName}

【お名前】
${data.name}

【メールアドレス】
${data.email}

【電話番号】
${data.phone || "未入力"}

【現在の生成AI活用状況】
${statusLabels[data.currentStatus] || data.currentStatus}

【ご検討中のサービス】
${data.preferredService ? (serviceLabels[data.preferredService] || data.preferredService) : "わからない・相談したい"}

【ご希望の連絡方法】
${contactLabels[data.preferredContact] || data.preferredContact}

【お悩み・ご相談内容】
${data.challenge}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();

    // Resend APIでメール送信
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "オフィス・ノード <onboarding@resend.dev>",
        to: [CONTACT_EMAIL],
        subject: `【お問い合わせ】${data.companyName} ${data.name}様`,
        text: emailBody,
        reply_to: data.email,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend API error:", errorData);
      throw new Error("メール送信に失敗しました");
    }

    return NextResponse.json(
      { success: true, message: "お問い合わせを受け付けました" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "送信に失敗しました。しばらくしてからお試しください。" },
      { status: 500 }
    );
  }
}

