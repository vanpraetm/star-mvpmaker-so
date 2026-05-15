import { Resend } from "resend";
import { NextResponse } from "next/server";

const getResend = () => new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, source } = await request.json();

  if (!email) {
    return NextResponse.json(
      { error: "Vul een e-mailadres in." },
      { status: 400 }
    );
  }

  try {
    await getResend().emails.send({
      from: "Aidy <noreply@mvpmaker.so>",
      to: "vanpraetmichiel@gmail.com",
      subject: `Aidy signup [${source}]: ${email}`,
      html: `
        <h2>Nieuwe Aidy signup</h2>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Beroep:</strong> ${source}</p>
        <p><strong>Pagina:</strong> star.mvpmaker.so</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Er ging iets mis. Probeer het later opnieuw." },
      { status: 500 }
    );
  }
}
