import { ArrowRight, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Constellation } from "@/components/Decor";
import { site } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="container-page py-16 sm:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl bg-sidebar px-6 py-16 text-center shadow-lg sm:px-12">
          {/* living aurora glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <span
              className="absolute left-1/2 top-[-32%] h-[28rem] w-[44rem] -translate-x-1/2 rounded-full animate-glow-pulse"
              style={{ background: "radial-gradient(closest-side, rgb(124 92 240 / 0.45), transparent)" }}
            />
            <span
              className="absolute bottom-[-30%] right-[-8%] h-[24rem] w-[24rem] rounded-full animate-glow-pulse"
              style={{ background: "radial-gradient(closest-side, rgb(14 165 233 / 0.30), transparent)", animationDelay: "-4s" }}
            />
            <span
              className="absolute bottom-[-22%] left-[-6%] h-[20rem] w-[20rem] rounded-full animate-glow-pulse"
              style={{ background: "radial-gradient(closest-side, rgb(236 72 153 / 0.22), transparent)", animationDelay: "-2s" }}
            /></div>
          <Constellation className="-top-8 right-0 h-72 w-72 text-accent-ring opacity-30" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Your clearest week starts in about a minute.
            </h2>
            <p className="mt-4 text-pretty text-lg text-white/70">
              Connect Canvas, set your hours, and let StudyPlan handle the rest. Free to start.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={site.signupUrl} variant="primary" size="lg" className="group">
                {site.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
              <ButtonLink
                href="#how-it-works"
                size="lg"
                className="border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                See how it works
              </ButtonLink>
            </div>
            <p className="mt-5 flex items-center justify-center gap-2 text-sm text-white/60">
              <ShieldCheck className="h-4 w-4" /> Free to start · No credit card · Read-only Canvas access
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
