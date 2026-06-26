import { Lock, ShieldCheck, RefreshCw, EyeOff } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { Constellation } from "@/components/Decor";

const POINTS = [
  { icon: ShieldCheck, title: "Nothing due can be left out", body: "If it's due in Canvas, it's in your plan — every assignment, every time." },
  { icon: Lock, title: "Your data stays yours", body: "We read only your coursework to build your plan. We never sell it. We never post to Canvas." },
  { icon: EyeOff, title: "Read-only access", body: "Navo reads your work and due dates. It can't turn in, delete, or change anything." },
  { icon: RefreshCw, title: "Fresh when you refresh", body: "Hit refresh and your plan catches up. New work and date changes come in from Canvas." },
];

export function Security() {
  return (
    <section className="relative overflow-hidden bg-surface/60 py-20 sm:py-28">
      <Constellation className="-top-6 -left-4 h-72 w-72 text-accent opacity-[0.2] lg:left-10" />
      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="Trust & safety"
          title="Built to be trusted"
          subtitle="The whole point is peace of mind. Here's how we earn it."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <div className="flex h-full gap-4 rounded-xl border border-line-subtle bg-surface p-6 shadow-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
