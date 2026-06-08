import { Clock, CheckCircle2, Brain, Smile } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal, Counter } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Blobs } from "@/components/Decor";
import { site } from "@/lib/site";

const METRICS = [
  { icon: Clock, to: 5, suffix: " hrs", label: "saved every week", sub: "Less time deciding, more time doing." },
  { icon: CheckCircle2, to: 0, suffix: "", label: "missed deadlines", sub: "The plan never omits what's due." },
  { icon: Brain, to: 3, suffix: "×", label: "faster to start", sub: "One screen instead of six course pages." },
  { icon: Smile, to: 92, suffix: "%", label: "feel less stressed", sub: "Always know the next right thing." },
];

export function Metrics() {
  return (
    <section id="results" className="relative overflow-hidden py-20 sm:py-28">
      <Blobs tone="cool" />
      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="The results"
          title="Less busywork. More done."
          subtitle="StudyPlan removes the planning tax on every study session, so your time goes to the work that counts."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-xl border border-line-subtle bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <m.icon className="h-5 w-5" />
                </span>
                <p className="mt-5 text-4xl font-semibold tracking-tight text-accent">
                  <Counter to={m.to} suffix={m.suffix} />
                </p>
                <p className="mt-1 text-sm font-medium text-accent">{m.label}</p>
                <p className="mt-1 text-sm text-muted">{m.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-faint">Illustrative outcomes (sample data)</p>

        <Reveal delay={0.2} className="mt-8 flex justify-center">
          <ButtonLink href={site.signupUrl} variant="primary" size="lg">Get your time back</ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
