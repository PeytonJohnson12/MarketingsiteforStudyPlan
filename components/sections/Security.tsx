import { Lock, ShieldCheck, RefreshCw, EyeOff } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { Constellation } from "@/components/Decor";

const POINTS = [
  { icon: ShieldCheck, title: "Deadline-safe by design", body: "Our scheduler is built so a due assignment can never be left out of your plan — guaranteed, not best-effort." },
  { icon: Lock, title: "Your data stays yours", body: "We pull only your coursework to build your plan. We never sell your data or post anything to Canvas." },
  { icon: EyeOff, title: "Read-only access", body: "StudyPlan reads your assignments and due dates. It can't submit, delete, or change anything in Canvas." },
  { icon: RefreshCw, title: "Always in sync", body: "A quick refresh keeps your plan current with Canvas — new assignments show up the moment you sync." },
];

export function Security() {
  return (
    <section className="relative overflow-hidden bg-surface/60 py-20 sm:py-28">
      <Constellation className="-top-6 -left-4 h-72 w-72 text-accent opacity-[0.2] lg:left-10" />
      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="Trust & safety"
          title="Built to be dependable"
          subtitle="The whole point is peace of mind. Here's how StudyPlan earns it."
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
