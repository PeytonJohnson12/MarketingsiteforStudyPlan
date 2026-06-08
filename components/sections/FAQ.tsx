import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Constellation } from "@/components/Decor";
import { site } from "@/lib/site";

const FAQS = [
  { q: "Is StudyPlan free?", a: "You can get started for free — connect Canvas and build your first plan without a credit card." },
  { q: "Do I have to share my Canvas password?", a: "No. You paste a read-only Canvas access token you generate yourself. StudyPlan can read your assignments and due dates but can never submit, edit, or delete anything." },
  { q: "Which schools does it work with?", a: "Any school that uses Canvas. You just enter your school's Canvas web address and your access token." },
  { q: "How long does setup take?", a: "About a minute. Connect Canvas, set how many hours you can study per day, and your plan is ready." },
  { q: "Could it ever miss an assignment that's due?", a: "No — that's the core promise. The scheduler is built so every assignment due in your window is always represented in the plan. It's a guarantee, not a best effort." },
  { q: "Is my data safe?", a: "We only pull the coursework needed to build your plan, we never post to Canvas, and we don't sell your data. Access is read-only." },
  { q: "Can I change my study hours or planning window?", a: "Anytime. Adjust your hours for a single day or change your defaults in settings — the plan re-balances instantly." },
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
      <SectionHeading eyebrow="FAQ" title="Questions, answered" />

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
