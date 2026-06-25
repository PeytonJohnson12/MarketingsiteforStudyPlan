"use client";

import { motion, useReducedMotion } from "framer-motion";

// Mirrors the app's current Dashboard ("command screen"): greeting + a daily
// progress ring, a solid-violet "Focus now" card, a status-disc Today list
// (active / study / done), and a This-week strip. Keep in sync with the app's
// DashboardView when its layout changes.
const TODAY = [
  { name: "Problem Set 4", meta: "Assignment · CS 350", due: "5:00 PM", state: "lead" as const },
  { name: "Quiz 3 review", meta: "Quiz · CS 350", state: "study" as const },
  { name: "Reading response", meta: "Assignment · WRIT 220", state: "done" as const },
];

export function PlanMock() {
  const reduce = useReducedMotion();
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } };
  const row = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="w-full rounded-2xl border border-line-subtle bg-surface shadow-lg">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-line-subtle px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        <span className="ml-3 text-xs text-faint">app.navolearning.com · Dashboard</span>
      </div>

      <motion.div className="p-5" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
        {/* header: greeting + daily progress ring */}
        <motion.div variants={row} className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-ink">Good morning, Maya</p>
            <p className="text-xs text-muted">Wednesday, March 14</p>
          </div>
          <div className="relative h-12 w-12 shrink-0" aria-hidden>
            <div className="h-full w-full rounded-full" style={{ background: "conic-gradient(rgb(var(--accent)) 0% 40%, rgb(var(--accent) / 0.15) 40% 100%)" }} />
            <div className="absolute inset-[3px] flex items-center justify-center rounded-full bg-surface">
              <span className="text-[11px] font-bold text-ink">40%</span>
            </div>
          </div>
        </motion.div>

        {/* focus-now module (solid violet) */}
        <motion.div variants={row} className="mt-4 rounded-xl bg-accent p-4 text-white shadow-card">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80">Focus now</p>
          <p className="mt-1 text-lg font-bold leading-tight">Problem Set 4</p>
          <div className="mt-2 flex gap-1.5">
            <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-medium ring-1 ring-inset ring-white/25">Due 5:00 PM</span>
            <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-medium ring-1 ring-inset ring-white/25">40 pts</span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-white/90">Worth 40 pts and due today — knock it out today.</p>
        </motion.div>

        {/* today list */}
        <motion.div variants={row} className="mt-3 rounded-xl border border-line-subtle bg-surface p-3">
          <p className="mb-1.5 px-1 text-xs font-semibold text-ink">Today</p>
          <div className="space-y-0.5">
            {TODAY.map((t) => (
              <motion.div
                key={t.name}
                variants={row}
                className={`flex items-center gap-2.5 rounded-lg px-2 py-2 ${t.state === "lead" ? "border-l-2 border-accent bg-accent-soft/50" : ""}`}
              >
                {t.state === "done" ? (
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-success text-[9px] font-bold text-white">✓</span>
                ) : (
                  <span className={`h-4 w-4 shrink-0 rounded-full border-2 ${t.state === "study" ? "border-success/70" : "border-line"}`} />
                )}
                <span className="min-w-0 flex-1">
                  <span className={`block truncate text-[13px] ${t.state === "done" ? "text-muted line-through" : "font-medium text-ink"}`}>{t.name}</span>
                  <span className="block truncate text-[11px] text-muted">{t.meta}</span>
                </span>
                {t.state === "lead" && <span className="shrink-0 text-[11px] font-medium text-accent">{t.due}</span>}
                {t.state === "study" && <span className="shrink-0 text-[11px] font-semibold text-accent">Study</span>}
                {t.state === "done" && <span className="shrink-0 text-[11px] font-medium text-success">Done</span>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* this-week strip (echoes the dashboard rail) */}
        <motion.div variants={row} className="mt-3 flex items-center justify-between rounded-xl border border-line-subtle bg-surface-soft/60 px-4 py-2.5">
          <span className="text-xs text-muted">This week</span>
          <span className="text-sm font-bold text-accent">
            12h <span className="text-[11px] font-normal text-muted">of work · 3h free</span>
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
