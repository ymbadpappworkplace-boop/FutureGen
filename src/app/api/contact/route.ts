import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  type?: "contact" | "membership";
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  website?: string; // honeypot: real people never fill this in
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Bots get a silent success so they don't retry.
  if (body.website) return NextResponse.json({ ok: true });

  const data = {
    type: body.type === "membership" ? "membership" : "contact",
    name: clean(body.name, 120),
    email: clean(body.email, 160),
    phone: clean(body.phone, 40),
    interest: clean(body.interest, 40),
    message: clean(body.message, 4000),
  };

  if (data.name.length < 2 || !emailRe.test(data.email) || (data.type === "contact" && data.message.length < 5)) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
  }

  /*
    TODO: deliver the message. Pick one:
      - Resend / Postmark / SendGrid: send an email to your inbox here
      - Google Sheets / Airtable / Supabase: store the row
      - Slack or WhatsApp webhook: notify the team
    Until then, submissions are only written to the server log.
  */
  console.log("[YMBA FutureGen] new submission", data);

  return NextResponse.json({ ok: true });
}
