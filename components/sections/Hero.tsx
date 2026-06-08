"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { ParticleField } from "@/components/ParticleField";
import { PlanMock } from "@/components/PlanMock";
import { site } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="top" className="relative overflow-hidden hero-glow">
      <div className="absolute inset-0 grid-texture opacity-60" aria-hidden />
      <ParticleField className="pointer-events-none absolute inset-0 h-full w-full" />

      <div className="container-page relative grid gap-12 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10 lg:pb-24">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Built for Canvas students
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Know exactly what to do <span className="text-gradient">today.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            StudyPlan connects to Canvas and turns scattered assignments into a deadline-safe daily plan.
            Stop scrolling through course pages — open one screen and start working.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={site.signupUrl} variant="primary" size="lg" className="group">
              {site.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary" size="lg">See how it works</ButtonLink>
          </motion.div>

          <motion.p variants={item} className="mt-4 flex items-center gap-2 text-sm text-muted">
            <ShieldCheck className="h-4 w-4 text-success" /> Free to start · Connect Canvas in ~60 seconds · No card required
          </motion.p>

          {/* Social proof */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3">
            <div className="flex -space-x-2" aria-hidden>
              {["#7c5cf0", "#0ea5e9", "#2f9e6b", "#d99423", "#ec4899"].map((c, i) => (
                <span key={i} className="h-8 w-8 rounded-full border-2 border-canvas" style={{ background: c }} />
              ))}
            </div>
            <p className="text-sm text-muted">
              <span className="font-semibold text-ink">2,000+ students</span> plan their week with StudyPlan
              <span className="ml-1 text-faint">(sample)</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Product visualization */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className={reduce ? "" : "animate-float"}>
            <PlanMock />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-line-subtle bg-surface px-3.5 py-2.5 shadow-md sm:block">
            <p className="flex items-center gap-2 text-sm font-medium text-ink">
              <ShieldCheck className="h-4 w-4 text-success" /> Never miss a deadline
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
