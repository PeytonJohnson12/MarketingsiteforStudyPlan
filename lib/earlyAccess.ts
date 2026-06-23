// Early-access ("founding circle") email capture.
//
// Submits to our own /api/subscribe route, which talks to Resend server-side so
// the secret API key is never exposed to the browser. Configure the keys there
// (RESEND_API_KEY, RESEND_AUDIENCE_ID — see .env.example). Until they're set, the
// route returns `not_configured` and the form shows a "check back soon" message.

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
  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: trimmed }),
    });
    if (res.ok) return { ok: true };
    // Surface the server's reason (e.g. not_configured) when it sends one.
    const data = (await res.json().catch(() => null)) as { reason?: string } | null;
    if (data?.reason === "not_configured") return { ok: false, reason: "not_configured" };
    if (data?.reason === "invalid") return { ok: false, reason: "invalid" };
    return { ok: false, reason: "network" };
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
