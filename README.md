# Navo — Marketing Site

The conversion-focused marketing/landing site for **Navo** (the Canvas-connected
daily study planner). Its single goal is account signups; CTAs point to the app at
[app.navolearning.com](https://app.navolearning.com). Built as a standalone project, separate from the app.

## Stack
- **Next.js 15** (App Router, static export) · **TypeScript**
- **Tailwind CSS** (the product's "Flowboard" design tokens, reused verbatim for brand parity)
- **Framer Motion** (scroll reveals, counters, micro-interactions)
- **shadcn-style UI** (Button, Card, Radix Accordion) + **lucide-react** icons

## Quick start
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static)
npm start        # serve the build
```

## Highlights
- Single landing page: nav → hero → trust strip → before/after demo → features →
  how-it-works → security → pricing → FAQ → final CTA → footer.
- Every section ends in a CTA toward signup.
- Brand extracted from the app's Flowboard tokens (violet `#7c5cf0`, warm canvas, Inter,
  airy shadows) so it feels like a natural extension of the product.
- Abstract motion graphics (drifting gradient orbs, a connection constellation, orbit
  rings, an aurora CTA) — all GPU-cheap and disabled under `prefers-reduced-motion`.
- SEO: metadata, Open Graph, JSON-LD (SoftwareApplication + FAQPage); statically
  prerendered; semantic landmarks + skip link.

## SEO launch checklist (site is not live yet)
All technical SEO is wired and ships with the build — these are the steps to do **when the site goes live**:
1. Set the real public domain in `lib/site.ts` (`url`) — it drives canonicals, the sitemap, robots.txt, and all structured data.
2. Deploy, then confirm `/<domain>/robots.txt` and `/sitemap.xml` resolve.
3. Create a [Google Search Console](https://search.google.com/search-console) property for the domain and submit the sitemap.
4. Run pages through Google's [Rich Results Test](https://search.google.com/test/rich-results) (home, a blog post, FAQ) to confirm the structured data is read.
5. Run Lighthouse (Chrome DevTools) and fix any Core Web Vitals flags — animations are the likeliest LCP/CLS suspects.
6. Set `NEXT_PUBLIC_EARLY_ACCESS_ENDPOINT` so the founding-circle form collects emails.

What's already in place: per-page titles/descriptions/canonicals, Organization + WebSite + SoftwareApplication schema (site-wide), FAQPage schema, BlogPosting + breadcrumb schema on posts, a full sitemap, robots.txt, semantic heading hierarchy (one h1 per page), and a static prerender of every route. No hidden text or other spam-policy tricks — Google penalizes those.

## Notes
- Copy is written at a ~grade 5–6 reading level: short sentences, plain words, no jargon.
- **Pricing is placeholder.** Set the paid tier's name, price, and features at the top of
  `components/sections/Pricing.tsx` (`PAID_NAME`, `PAID_PRICE`, `PAID_FEATURES`) before publishing.
- The hero's canvas particle field and the rest of the motion respect reduced-motion.
