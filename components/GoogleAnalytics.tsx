import Script from "next/script";
import { site } from "@/lib/site";

// Google Analytics 4 (gtag.js), loaded via next/script so Next controls injection
// and it isn't stripped. Production-only: local dev stays out of your analytics.
// GA4 enhanced measurement (on by default) tracks client-side route changes, so
// navigations between pages are counted without extra wiring.
export function GoogleAnalytics() {
  if (process.env.NODE_ENV !== "production" || !site.gaId) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.gaId}');`}
      </Script>
    </>
  );
}
