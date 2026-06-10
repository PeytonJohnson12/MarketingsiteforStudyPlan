import { GraduationCap, Eye, CreditCard } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const PILLARS = [
  { icon: GraduationCap, label: "Works with any school on Canvas" },
  { icon: Eye, label: "Read-only — we never change anything in Canvas" },
  { icon: CreditCard, label: "Free to start, no credit card" },
];

export function TrustBar() {
  return (
    <section aria-label="Why you can trust StudyPlan" className="border-y border-line-subtle bg-surface/60">
      <div className="container-page grid grid-cols-1 gap-6 py-8 sm:grid-cols-3">
        {PILLARS.map((p, i) => (
          <Reveal key={p.label} delay={i * 0.08}>
            <div className="flex items-center justify-center gap-3 text-center sm:justify-start sm:text-left">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <p.icon className="h-5 w-5" />
              </span>
              <p className="text-sm font-medium text-ink">{p.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
