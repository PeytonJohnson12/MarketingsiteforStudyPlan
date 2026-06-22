"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, CheckCircle2, Clock } from "lucide-react";

const TODAY = [
  { course: "CS 350", color: "#7c5cf0", name: "Problem Set 4", hours: "2h" },
  { course: "WRIT 220", color: "#0ea5e9", name: "Essay draft", hours: "1h" },
  { course: "CS 350", color: "#7c5cf0", name: "Quiz 3 review", hours: "1h" },
];
const UPCOMING = [
  { day: "Thu", pct: 100 },
  { day: "Fri", pct: 70 },
  { day: "Sat", pct: 40 },
];

export function PlanMock() {
  const reduce = useReducedMotion();
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  };
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
        <span className="ml-3 text-xs text-faint">app.navolearning.com · Your plan</span>
      </div>

      <motion.div
        className="p-5"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* header */}
        <motion.div variants={row} className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-ink">Good morning, Maya</p>
            <p className="text-xs text-muted">Wednesday · 7-day plan</p>
          </div>
          <span className="rounded-full bg-success-soft px-2.5 py-0.5 text-xs font-medium text-success">Up to date</span>
        </motion.div>

        {/* stat strip */}
        <motion.div variants={row} className="mt-4 grid grid-cols-3 divide-x divide-line-subtle rounded-xl border border-line-subtle bg-surface-soft/60 py-3 text-center">
          {[
            { label: "Due", value: "8", icon: Calendar },
            { label: "At risk", value: "1", icon: Clock, danger: true },
            { label: "Done", value: "5", icon: CheckCircle2, ok: true },
          ].map((s) => (
            <div key={s.label} className="px-2">
              <p className={`text-lg font-semibold ${s.danger ? "text-danger" : s.ok ? "text-success" : "text-ink"}`}>{s.value}</p>
              <p className="flex items-center justify-center gap-1 text-[11px] text-muted"><s.icon className="h-3 w-3" />{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* today card */}
        <motion.div variants={row} className="mt-4 rounded-xl border border-accent-ring/60 bg-accent-soft/40 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-ink">Today · <span className="text-accent">4h planned</span></p>
            <span className="text-xs text-muted">4/4h</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface">
            <motion.div
              className="h-full rounded-full bg-accent"
              initial={{ width: reduce ? "100%" : 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            />
          </div>
          <div className="mt-3 space-y-2">
            {TODAY.map((t) => (
              <motion.div key={t.name} variants={row} className="flex items-center gap-2.5">
                <span className="rounded-md bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent">{t.hours}</span>
                <span className="truncate text-sm text-ink">{t.name}</span>
                <span className="ml-auto flex items-center gap-1.5 text-[11px] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: t.color }} />
                  {t.course}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* upcoming mini bars */}
        <motion.div variants={row} className="mt-3 grid grid-cols-3 gap-2">
          {UPCOMING.map((u) => (
            <div key={u.day} className="rounded-lg border border-line-subtle bg-surface p-2.5">
              <p className="text-[11px] font-medium text-muted">{u.day}</p>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface-soft">
                <motion.div
                  className="h-full rounded-full bg-accent/70"
                  initial={{ width: reduce ? `${u.pct}%` : 0 }}
                  whileInView={{ width: `${u.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
