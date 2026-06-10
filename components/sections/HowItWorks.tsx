import { Link2, SlidersHorizontal, CalendarCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal, GrowLine } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Constellation, OrbitRings } from "@/components/Decor";
import { site } from "@/lib/site";

const STEPS = [
  { icon: Link2, color: "124 92 240", title: "Connect Canvas", body: "Paste one Canvas code. StudyPlan pulls in every class, assignment, and due date.", time: "~60 seconds" },
  { icon: SlidersHorizontal, color: "14 165 233", title: "Set your hours", body: "Tell us how many hours you can study each day. That's the only thing we need.", time: "1 tap" },
  { icon: CalendarCheck, color: "47 158 107", title: "Get your day", body: "See a plan that puts everything due in order. The most urgent work shows up first.", time: "Instant" },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-20 sm:py-28">
      <Constellation className="-top-8 right-0 h-72 w-72 text-accent opacity-[0.22] lg:right-10" />
      <OrbitRings className="-bottom-16 -left-16 h-72 w-72 text-accent opacity-[0.12]" />
      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="How it works"
          title="From a mess to a clear day in 3 steps"
          subtitle="No long setup. Connect once. StudyPlan plans the rest for you."
        />

      <div className="relative mt-14 grid gap-6 md:grid-cols-3">
        {/* animated gradient timeline (desktop) */}
        <GrowLine className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-accent via-[#0ea5e9] to-[#2f9e6b] md:block" />
        {STEPS.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.1} className="relative">
            <div className="flex h-full flex-col rounded-xl border border-line-subtle bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl animate-float"
                  style={{ background: `rgb(${step.color} / 0.12)`, color: `rgb(${step.color})`, animationDelay: `${i * 0.8}s` }}
                >
                  <step.icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-faint">Step {i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{step.body}</p>
              <p className="mt-4 inline-flex w-fit rounded-full bg-surface-soft px-2.5 py-1 text-xs font-medium text-muted">
                {step.time}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <ButtonLink href={site.signupUrl} variant="primary" size="lg">{site.primaryCta}</ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
