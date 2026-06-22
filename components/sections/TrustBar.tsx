import { GraduationCap, CreditCard } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const PILLARS = [
  { icon: GraduationCap, label: "Works with any Canvas school" },
  { icon: CreditCard, label: "Free to start · No card needed" },
];

export function TrustBar() {
  return (
    <section aria-label="Why you can trust Navo" className="border-y border-line-subtle bg-surface/60">
      <div className="container-page flex flex-col items-center justify-center gap-5 py-8 sm:flex-row sm:gap-x-16">
        {PILLARS.map((p, i) => (
          <Reveal key={p.label} delay={i * 0.08}>
            <div className="flex items-center gap-3">
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
