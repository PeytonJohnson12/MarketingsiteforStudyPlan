export const site = {
  name: "StudyPlan",
  // The company catchphrase — repeated in a few natural spots site-wide (footer,
  // final CTA, meta description, blog card). Carries the target search phrase
  // "Canvas study planner"; keep placements natural, never stuffed.
  catchphrase: "The Canvas study planner that never misses what's due.",
  description:
    "StudyPlan is the Canvas study planner that never misses what's due. It reads your assignments and builds one calm daily plan. Free to start.",
  // ⚠️ LAUNCH: set this to the marketing site's real public domain before deploying.
  // It drives every canonical URL, the sitemap, robots.txt, and all structured data.
  url: "https://pinnavel.com",
  signupUrl: "https://pinnavel.com/signup",
  loginUrl: "https://pinnavel.com/login",
  nav: [
    { label: "How it works", href: "/#how-it-works" },
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],
  primaryCta: "Start my free plan",
} as const;
