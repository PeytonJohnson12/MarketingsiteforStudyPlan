export const site = {
  name: "StudyPlan",
  tagline: "All your deadlines, one calm plan.",
  description:
    "StudyPlan reads your assignments from Canvas and builds one daily plan. See what to do today. Nothing due ever gets left out. Free to start.",
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
