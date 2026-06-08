"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Constellation } from "@/components/Decor";

const QUOTES = [
  { quote: "I used to spend Sunday nights piecing together what was due. Now I open StudyPlan and it's just… there. I start in seconds.", name: "Maya R.", role: "Junior · Computer Science", color: "#7c5cf0" },
  { quote: "The 'at risk' flags saved me twice this semester. I caught two assignments before they snuck up on me.", name: "Devon K.", role: "Sophomore · Biology", color: "#0ea5e9" },
  { quote: "Six Canvas tabs became one clear list. My stress about deadlines basically disappeared.", name: "Priya S.", role: "Senior · Rhetoric", color: "#2f9e6b" },
  { quote: "Setting one number — my hours — and getting a full day back is genuinely the least-effort productivity tool I've used.", name: "Marcus T.", role: "Freshman · Economics", color: "#d99423" },
];

export function Testimonials() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % QUOTES.length), 5500);
    return () => clearInterval(t);
  }, [paused, reduce]);

  const q = QUOTES[i];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Constellation className="-top-6 right-0 h-72 w-72 text-accent opacity-[0.28] sm:right-10" />
      <Constellation className="-bottom-10 -left-6 h-72 w-72 text-accent opacity-[0.22] sm:left-2" />
      <div className="container-page relative z-10">
      <SectionHeading eyebrow="Loved by students" title="Less scrambling, more studying" />

      <div
        className="mx-auto mt-12 max-w-3xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative min-h-[220px] rounded-2xl border border-line-subtle bg-surface p-8 shadow-card sm:p-10">
          <div className="mb-4 flex gap-1 text-warning" aria-hidden>
            {Array.from({ length: 5 }).map((_, s) => <Star key={s} className="h-4 w-4 fill-current" />)}
          </div>
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              aria-live="polite"
            >
              <blockquote className="text-balance text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="h-10 w-10 rounded-full" style={{ background: q.color }} aria-hidden />
                <span>
                  <span className="block text-sm font-semibold text-ink">{q.name}</span>
                  <span className="block text-sm text-muted">{q.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {QUOTES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              aria-current={idx === i}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-accent" : "w-2 bg-line hover:bg-faint"}`}
            />
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-faint">Sample testimonials for demonstration</p>
      </div>
      </div>
    </section>
  );
}
