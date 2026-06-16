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
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Too much due? We&rsquo;ve got you.
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Know what&rsquo;s due. Ace what&rsquo;s <span className="text-gradient">next.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            StudyPlan reads your Canvas and turns it into one calm daily plan — so you always know what&rsquo;s actually due.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={site.signupUrl} variant="primary" size="lg" className="group">
              {site.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary" size="lg">See how it works</ButtonLink>
          </motion.div>

          <motion.p variants={item} className="mt-4 flex items-center gap-2 text-sm text-muted">
            <ShieldCheck className="h-4 w-4 text-success" /> Free to start · Set up in about a minute · No card needed.
          </motion.p>

          <motion.p variants={item} className="mt-9 text-sm text-muted">
            Works with any school that uses Canvas.
          </motion.p>
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
        </motion.div>
      </div>
    </section>
  );
}
