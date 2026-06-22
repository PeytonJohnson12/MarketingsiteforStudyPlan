import { ShieldCheck, ListChecks, RefreshCw, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { Blobs, Constellation } from "@/components/Decor";

/* ---------- small token-styled product snippets ---------- */

// Row 1 — every assignment due gets a place in the plan
function CompletenessVisual() {
  const items = [
    { name: "Problem Set 4", course: "CS 350", color: "#7c5cf0" },
    { name: "Essay draft", course: "WRIT 220", color: "#0ea5e9" },
    { name: "Quiz 3 review", course: "CS 350", color: "#7c5cf0" },
    { name: "Lab report", course: "BIO 101", color: "#2f9e6b" },
  ];
  return (
    <div className="rounded-2xl border border-line-subtle bg-surface p-5 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-faint">This week</p>
        <span className="flex items-center gap-1.5 rounded-full bg-success-soft px-2.5 py-0.5 text-xs font-medium text-success">
          <CheckCircle2 className="h-3.5 w-3.5" /> All placed
        </span>
      </div>
      <div className="space-y-2">
        {items.map((it) => (
          <div key={it.name} className="flex items-center gap-2.5 rounded-lg border border-line-subtle bg-canvas px-3 py-2.5">
            <ShieldCheck className="h-4 w-4 text-success" />
            <span className="text-sm text-ink">{it.name}</span>
            <span className="ml-auto flex items-center gap-1.5 text-[11px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: it.color }} />
              {it.course}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Row 2 — an ordered plan for today
function TodayVisual() {
  const today = [
    { name: "Problem Set 4", hours: "2h", course: "CS 350", color: "#7c5cf0" },
    { name: "Essay draft", hours: "1h", course: "WRIT 220", color: "#0ea5e9" },
    { name: "Quiz 3 review", hours: "1h", course: "CS 350", color: "#7c5cf0" },
  ];
  return (
    <div className="rounded-2xl border border-accent-ring/50 bg-surface p-5 shadow-md ring-1 ring-accent-ring/30">
      <div className="flex items-center justify-between rounded-lg bg-accent-soft/50 px-3 py-2.5">
        <span className="text-sm font-semibold text-ink">Today · 4h planned</span>
        <span className="rounded-full bg-success-soft px-2 py-0.5 text-xs font-medium text-success">On track</span>
      </div>
      <ol className="mt-3 space-y-2">
        {today.map((t, i) => (
          <li key={t.name} className="flex items-center gap-2.5 rounded-lg border border-line-subtle bg-canvas px-3 py-2.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-accent-on">{i + 1}</span>
            <span className="rounded-md bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent">{t.hours}</span>
            <span className="text-sm text-ink">{t.name}</span>
            <span className="ml-auto flex items-center gap-1.5 text-[11px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: t.color }} />
              {t.course}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

// Row 3 — auto-sync from Canvas
function SyncVisual() {
  return (
    <div className="rounded-2xl border border-line-subtle bg-surface p-5 shadow-card">
      <div className="flex items-center justify-between rounded-lg border border-line-subtle bg-canvas px-3 py-3">
        <span className="flex items-center gap-2 text-sm font-medium text-ink">
          <RefreshCw className="h-4 w-4 text-accent" /> Synced from Canvas
        </span>
        <span className="rounded-full bg-success-soft px-2.5 py-0.5 text-xs font-medium text-success">Up to date</span>
      </div>
      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-between rounded-lg border border-line-subtle bg-canvas px-3 py-2.5 text-sm">
          <span className="text-muted">New assignment added</span>
          <span className="text-[11px] text-faint">just now</span>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-line-subtle bg-canvas px-3 py-2.5 text-sm">
          <span className="flex items-center gap-2 text-muted"><CheckCircle2 className="h-4 w-4 text-success" /> Submitted work → Completed</span>
          <span className="text-[11px] text-faint">auto</span>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-muted">No lists to keep up. No retyping dates.</p>
    </div>
  );
}

/* ---------- rows ---------- */

const ROWS = [
  {
    icon: ShieldCheck,
    title: "Nothing due gets missed",
    body: "Every assignment due in your dates is always in your plan. That's our whole promise.",
    Visual: CompletenessVisual,
  },
  {
    icon: ListChecks,
    title: "Today is already sorted",
    body: "Open the app and your work is in order. The most urgent thing is first.",
    Visual: TodayVisual,
  },
  {
    icon: RefreshCw,
    title: "It updates itself",
    body: "Navo pulls your work from Canvas. Turn something in, and it moves to Done.",
    Visual: SyncVisual,
  },
];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-surface/60 py-20 sm:py-28">
      <Blobs tone="cool" />
      <Constellation className="-top-8 left-2 h-72 w-72 text-accent opacity-[0.22] lg:left-16" />
      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="Features"
          title="Always know your next move"
          subtitle="Everything here answers one question — what do I do now?"
        />

        <div className="mt-16 space-y-16 sm:space-y-24">
          {ROWS.map(({ icon: Icon, title, body, Visual }, i) => {
            const reversed = i % 2 === 1;
            return (
              <div key={title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                {/* text */}
                <Reveal className={reversed ? "lg:order-2" : ""}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">{body}</p>
                </Reveal>

                {/* visual */}
                <Reveal delay={0.1} className={reversed ? "lg:order-1" : ""}>
                  <Visual />
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
