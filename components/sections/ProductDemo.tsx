import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { OrbitRings } from "@/components/Decor";
import { PlanMock } from "@/components/PlanMock";
import { CanvasMock } from "@/components/CanvasMock";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

const CLEAN = [
  { name: "Problem Set 4", hours: "2h", course: "CS 350", color: "#7c5cf0" },
  { name: "Essay draft", hours: "1h", course: "WRIT 220", color: "#0ea5e9" },
  { name: "Quiz 3 review", hours: "1h", course: "CS 350", color: "#7c5cf0" },
];

export function ProductDemo() {
  return (
    <section className="relative overflow-hidden bg-surface/60 py-20 sm:py-28">
      <OrbitRings className="-left-20 top-10 h-80 w-80 text-accent opacity-[0.14]" />
      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="The difference"
          title="Six class pages, or one clear plan"
          subtitle="Canvas dumps it all on you at once. Navo shows what to do now."
        />

        {/* The real thing */}
        <Reveal className="mx-auto mt-14 max-w-2xl">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wide text-faint">The real thing</p>
          <PlanMock />
        </Reveal>

        <div className="mt-12 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          {/* BEFORE */}
          <Reveal>
            <div className="rounded-2xl border border-line-subtle bg-surface p-5 shadow-card">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-faint">Before · spread across Canvas</p>
              <CanvasMock />
              <p className="mt-3 text-center text-xs italic text-faint">&ldquo;…where do I even start?&rdquo;</p>
            </div>
          </Reveal>

          {/* arrow */}
          <Reveal delay={0.1} className="mx-auto hidden lg:block">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-on shadow-md">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Reveal>

          {/* AFTER */}
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-accent-ring/50 bg-surface p-5 shadow-md ring-1 ring-accent-ring/30">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-accent">After · your Navo</p>
              <div className="rounded-xl bg-accent px-4 py-3 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80">Focus now</p>
                <p className="mt-0.5 text-lg font-bold leading-tight">Problem Set 4</p>
                <p className="mt-0.5 text-xs text-white/90">2h · due today · CS 350</p>
              </div>
              <div className="mt-2 space-y-2">
                {CLEAN.map((c) => (
                  <div key={c.name} className="flex items-center gap-2.5 rounded-lg border border-line-subtle bg-canvas px-3 py-2.5">
                    <span className="rounded-md bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent">{c.hours}</span>
                    <span className="text-sm text-ink">{c.name}</span>
                    <span className="ml-auto flex items-center gap-1.5 text-[11px] text-muted">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.color }} />
                      {c.course}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-center text-xs text-muted">Clear. In order. Nothing left out.</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <ButtonLink href={site.signupUrl} variant="primary" size="lg" className="group">
            {site.primaryCta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
