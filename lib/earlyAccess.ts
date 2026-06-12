// Early-access ("founding circle") email capture.
//
// The marketing site is a STATIC export (no server), so the form submits straight
// from the browser to your email tool's PUBLIC form endpoint — set it via env below.
//
// ⚠️ Use a PUBLIC form endpoint only (a form ID/URL, NOT a secret API key): a secret
// key placed in client-side code is visible to everyone. Email tools with a safe
// public form POST include Kit (ConvertKit), MailerLite, and Loops. If the tool you
// pick requires a secret key, we'll add a tiny serverless function instead — tell me
// which tool and I'll finish the wiring.
//
// Set NEXT_PUBLIC_EARLY_ACCESS_ENDPOINT to that endpoint. The exact request body can
// differ per tool; if so, it's a one-line change in `subscribeEarlyAccess` below.

const ENDPOINT = process.env.NEXT_PUBLIC_EARLY_ACCESS_ENDPOINT;

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export type SubscribeResult =
  | { ok: true }
  | { ok: false; reason: "invalid" | "not_configured" | "network" };

/** Subscribe an email to the founding-circle list. Pure of UI; returns a typed result. */
export async function subscribeEarlyAccess(email: string): Promise<SubscribeResult> {
  const trimmed = email.trim();
  if (!isValidEmail(trimmed)) return { ok: false, reason: "invalid" };
  if (!ENDPOINT) return { ok: false, reason: "not_configured" };
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: trimmed, source: "early-access" }),
    });
    if (!res.ok) return { ok: false, reason: "network" };
    return { ok: true };
  } catch {
    return { ok: false, reason: "network" };
  }
}

/**
 * Fire an analytics event on a successful signup. No-ops until Google Analytics is
 * installed (see the GA4 plan), so it's safe to call now and "just works" later.
 */
export function trackEarlyAccessSignup(): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", "early_access_signup", { method: "founding_circle" });
}
