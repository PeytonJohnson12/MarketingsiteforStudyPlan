import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

// Server-side email capture. On submit we:
//   1. add the contact to the Resend Audience,
//   2. send the welcome email with the free study-guide PDF attached,
//   3. fire `study_guide.requested` (optional Automation for follow-up emails).
//
// The PDF is served from /public, so Resend attaches it by URL. Secrets stay
// server-side — never NEXT_PUBLIC_*. See .env.example.
const apiKey = process.env.RESEND_API_KEY;
const audienceId = process.env.RESEND_AUDIENCE_ID;
const from = process.env.RESEND_FROM; // "Navo <hello@navolearning.com>" — a Resend-verified domain

// Resend fetches this URL to attach the file, so it must be publicly reachable
// (i.e. the deployed site). Local dev can't attach it because Resend can't reach localhost.
const GUIDE_PDF_URL = `${site.url}/study-guide.pdf`;
const GUIDE_FILENAME = "The-Deadline-Proof-Week.pdf";

// Automations can't attach files, so the guide goes out via emails.send above.
// Any Automation on this event should therefore be FOLLOW-UP emails only — don't
// re-send the guide, or subscribers get it twice.
const FOLLOWUP_EVENT = "study_guide.requested";

// Best-effort per-IP throttle (in-memory → per serverless instance, not a shared
// limiter; a speed-bump against scripted abuse, generous so a real user never
// hits it). For production-grade limiting, back this with a shared store (Upstash).
const RL_WINDOW_MS = 10 * 60_000;
const RL_MAX = 8;
const hits = new Map<string, { count: number; resetAt: number }>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  if (hits.size > 5000) for (const [k, v] of hits) if (now > v.resetAt) hits.delete(k);
  const e = hits.get(ip);
  if (!e || now > e.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RL_WINDOW_MS });
    return false;
  }
  e.count += 1;
  return e.count > RL_MAX;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function welcomeHtml(): string {
  return `
  <div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;max-width:520px;margin:0 auto;padding:8px 4px;color:#18181B;">
    <p style="font-size:18px;font-weight:700;margin:0 0 18px;">Navo</p>
    <p style="font-size:16px;line-height:1.6;margin:0 0 14px;">Thanks for signing up. Your free study plan &mdash; <strong>The Deadline-Proof Week</strong> &mdash; is attached to this email.</p>
    <p style="font-size:16px;line-height:1.6;margin:0 0 14px;">It&rsquo;s 7 quick moves to a calmer week. Set it up once, then keep it going in about 10 minutes a week.</p>
    <p style="margin:24px 0;">
      <a href="${site.signupUrl}" style="background:#7C5CF0;color:#ffffff;text-decoration:none;font-weight:600;font-size:15px;padding:12px 22px;border-radius:9px;display:inline-block;">Start my free trial</a>
    </p>
    <p style="font-size:14px;line-height:1.6;color:#52525B;margin:0;">Navo connects to Canvas and shows you what&rsquo;s due, so nothing slips.<br/>&mdash; The Navo team</p>
  </div>`;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, reason: "rate_limited" }, { status: 429 });
  }

  let email = "";
  let hp = "";
  try {
    const body = (await req.json()) as { email?: unknown; hp?: unknown };
    if (typeof body.email === "string") email = body.email.trim();
    if (typeof body.hp === "string") hp = body.hp;
  } catch {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }
  // Honeypot: a hidden field real users leave empty. Filled = bot — pretend
  // success (so it can't tell it was caught) and do nothing.
  if (hp.trim() !== "") {
    return NextResponse.json({ ok: true });
  }
  if (!apiKey || !audienceId || !from) {
    return NextResponse.json({ ok: false, reason: "not_configured" }, { status: 503 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  try {
    const resend = new Resend(apiKey);

    // 1) Add to the Audience (launch broadcasts + unsubscribe handling). A duplicate
    //    email returns an error we can safely ignore — the email below still sends.
    const contact = await resend.contacts.create({ audienceId, email, unsubscribed: false });
    if (contact.error) console.warn("[subscribe] contacts.create:", contact.error);

    // 2) Send the welcome email with the study-guide PDF attached. Gating action.
    const sent = await resend.emails.send({
      from,
      to: email,
      subject: "Your free study plan is attached",
      html: welcomeHtml(),
      attachments: [{ filename: GUIDE_FILENAME, path: GUIDE_PDF_URL }],
    });
    if (sent.error) {
      console.error("[subscribe] emails.send:", sent.error);
      return NextResponse.json({ ok: false, reason: "network" }, { status: 502 });
    }

    // 3) Fire the follow-up event (optional). Best-effort — the guide already sent.
    const evt = await resend.events.send({
      event: FOLLOWUP_EVENT,
      email,
      payload: { source: "early-access" },
    });
    if (evt.error) console.warn("[subscribe] events.send:", evt.error);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[subscribe] unexpected:", err);
    return NextResponse.json({ ok: false, reason: "network" }, { status: 502 });
  }
}
