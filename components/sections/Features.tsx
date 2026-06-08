import { ShieldCheck, ListChecks, Clock, AlertTriangle, CheckCircle2, Zap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { Blobs, Constellation } from "@/components/Decor";

const FEATURES = [
  { icon: ShieldCheck, title: "Never miss what's due", body: "Every in-window assignment is guaranteed a place in your plan — nothing quietly slips through. That's the whole promise." },
  { icon: ListChecks, title: "Today, already decided", body: "Open the app and the most urgent work is at the top. No staring at a list wondering where to begin." },
  { icon: Clock, title: "Fits your real life", body: "Tell StudyPlan how many hours you have. It packs your work to fit — busy days and light days included." },
  { icon: AlertTriangle, title: "See what's slipping", body: "Anything that won't fit before its deadline gets flagged early, while you still have time to act." },
  { icon: CheckCircle2, title: "Watch progress add up", body: "Submitted work moves to Completed automatically from Canvas — momentum you can actually see." },
  { icon: Zap, title: "Zero upkeep", body: "It syncs from Canvas for you. No manual to-do lists, no re-entering deadlines, no maintenance." },
];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-surface/60 py-20 sm:py-28">
      <Blobs tone="cool" />
      <Constellation className="-top-8 left-2 h-72 w-72 text-accent opacity-[0.22] lg:left-16" />
      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="Features"
          title="Built around one job: your next right move"
          subtitle="Every feature exists to answer a single question faster — what should I work on right now?"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-xl border border-line-subtle bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
