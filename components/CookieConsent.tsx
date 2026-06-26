"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const KEY = "navo-cookie-consent";

function updateConsent(granted: boolean) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("consent", "update", { analytics_storage: granted ? "granted" : "denied" });
}

// Cookie-consent banner + Google Consent Mode v2. Analytics storage starts
// "denied" (set in GoogleAnalytics); this lets the visitor grant it, and the
// choice is remembered in localStorage so the banner only shows once.
export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!site.gaId) return;
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(KEY);
    } catch {
      /* storage blocked — treat as no prior choice */
    }
    if (stored === "granted") updateConsent(true);
    else if (!stored) setShow(true);
  }, []);

  function choose(granted: boolean) {
    try {
      localStorage.setItem(KEY, granted ? "granted" : "denied");
    } catch {
      /* ignore */
    }
    updateConsent(granted);
    setShow(false);
  }

  if (!show) return null;

  return (
    <div role="dialog" aria-label="Cookie consent" className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-line bg-surface p-4 shadow-lg sm:flex-row sm:items-center sm:gap-5 sm:p-5">
        <p className="flex-1 text-sm leading-relaxed text-muted">
          We use cookies to see how the site is used (via Google Analytics) and make Navo better. You choose.{" "}
          <a href="/privacy" className="font-medium text-accent hover:underline">
            Privacy Policy
          </a>
        </p>
        <div className="flex shrink-0 gap-2.5">
          <button
            onClick={() => choose(false)}
            className="rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface-soft"
          >
            Decline
          </button>
          <button
            onClick={() => choose(true)}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-on transition-colors hover:bg-accent-hover"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
