import { Resend } from "resend";
import { NextResponse } from "next/server";

const getResend = () => new Resend(process.env.RESEND_API_KEY);

const VALID_CODES = ["STAR2026", "EARLYBIRD"];

export async function POST(request: Request) {
  const { email, code } = await request.json();

  // Flow 1: Email-only (early access aanvraag)
  if (email && !code) {
    try {
      await getResend().emails.send({
        from: "STAR <noreply@mvpmaker.so>",
        to: "vanpraetmichiel@gmail.com",
        subject: `[STAR] Nieuwe early access aanvraag: ${email}`,
        html: `
          <h2>Nieuwe early access aanvraag</h2>
          <p><strong>E-mail:</strong> ${email}</p>
        `,
      });

      return NextResponse.json({ success: true, type: "request" });
    } catch {
      return NextResponse.json(
        { error: "Er ging iets mis. Probeer het later opnieuw." },
        { status: 500 }
      );
    }
  }

  // Flow 2: Code-only (unlock)
  if (code && !email) {
    if (!VALID_CODES.includes(code.toUpperCase())) {
      return NextResponse.json(
        { error: "Ongeldige toegangscode." },
        { status: 403 }
      );
    }

    return NextResponse.json({ success: true, type: "unlock" });
  }

  return NextResponse.json(
    { error: "Vul een e-mailadres of toegangscode in." },
    { status: 400 }
  );
}
