export const site = {
  name: "Navo",
  // The company catchphrase — repeated in a few natural spots site-wide (footer,
  // final CTA, meta description, blog card). Carries the target search phrase
  // "Canvas study planner"; keep placements natural, never stuffed.
  catchphrase: "The Canvas study planner that never misses what's due.",
  description:
    "Navo is the Canvas study planner that never misses what's due. It reads your assignments and builds one calm daily plan. Free to start.",
  // ⚠️ LAUNCH: set this to the marketing site's real public domain before deploying.
  // It drives every canonical URL, the sitemap, robots.txt, and all structured data.
  url: "https://navolearning.com",
  signupUrl: "https://app.navolearning.com/signup",
  loginUrl: "https://app.navolearning.com/login",
  nav: [
    { label: "How it works", href: "/#how-it-works" },
    { label: "Features", href: "/#features" },
    { label: "Demo", href: "/demo" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],
  primaryCta: "Start my free plan",
} as const;
