# StudyPlan — Marketing Site

The conversion-focused marketing/landing site for **StudyPlan** (the Canvas-connected
daily study planner). Its single goal is account signups; CTAs point to the app at
[pinnavel.com](https://pinnavel.com). Built as a standalone project, separate from the app.

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
- Single landing page: nav → hero → trust strip → how-it-works → before/after demo →
  outcome metrics → features → testimonials → security → FAQ → final CTA → footer.
- Every section ends in a CTA toward signup.
- Brand extracted from the app's Flowboard tokens (violet `#7c5cf0`, warm canvas, Inter,
  airy shadows) so it feels like a natural extension of the product.
- Abstract motion graphics (drifting gradient orbs, a connection constellation, orbit
  rings, an aurora CTA) — all GPU-cheap and disabled under `prefers-reduced-motion`.
- SEO: metadata, Open Graph, JSON-LD (SoftwareApplication + FAQPage); statically
  prerendered; semantic landmarks + skip link.

## Notes
- Placeholder testimonials and stats are clearly labeled as sample data.
- The hero's canvas particle field and the rest of the motion respect reduced-motion.
