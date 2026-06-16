import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Constellation } from "@/components/Decor";
import { site } from "@/lib/site";

const FAQS = [
  { q: "Is StudyPlan free?", a: "Yes. The free plan covers what most students need. A paid plan adds more (coming soon)." },
  { q: "Do I have to give you my Canvas password?", a: "No. You paste a read-only Canvas code. We never see or ask for your password." },
  { q: "Which schools work?", a: "Any school that uses Canvas. If your classes are in Canvas, you're good." },
  { q: "How long does setup take?", a: "About a minute. Paste your code, set your hours, and your plan is ready." },
  { q: "Could it ever miss something that's due?", a: "No. Every assignment due in your dates is always in your plan. That's the promise." },
  { q: "Is my data safe?", a: "Yes. We read only your coursework to build your plan. We never sell it or post to Canvas." },
  { q: "Can I change my study hours or dates?", a: "Yes. Change your hours or your dates anytime. Your plan updates right away." },
];

export function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="relative overflow-hidden py-20 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Constellation className="-top-8 right-0 h-72 w-72 text-accent opacity-[0.2] lg:right-12" />
      <div className="container-page relative z-10">
      <SectionHeading as="h1" eyebrow="FAQ" title="Questions, answered" />

      <Reveal className="mx-auto mt-10 max-w-2xl">
        <Accordion type="single" collapsible className="rounded-xl border border-line-subtle bg-surface px-6 shadow-card">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 text-center">
        <p className="text-muted">Still curious? The fastest answer is to try it.</p>
        <ButtonLink href={site.signupUrl} variant="primary" size="lg" className="mt-4">{site.primaryCta}</ButtonLink>
      </Reveal>
      </div>
    </section>
  );
}
