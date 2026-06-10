import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { Constellation } from "@/components/Decor";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Constellation className="-top-6 right-0 h-72 w-72 text-accent opacity-[0.28] sm:right-10" />
      <Constellation className="-bottom-10 -left-6 h-72 w-72 text-accent opacity-[0.22] sm:left-2" />
      <div className="container-page relative z-10">
        <SectionHeading eyebrow="The promise" title="We're new — here's our guarantee." />

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-pretty text-xl font-medium leading-relaxed text-ink sm:text-2xl">
            We can&rsquo;t show you testimonials yet — we just launched. So here&rsquo;s what we can promise instead:
            every assignment that&rsquo;s due in your window is in your plan.
          </p>
          <p className="mt-6 text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Not usually. Always.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-2xl">
          <figure className="rounded-2xl border border-line-subtle bg-surface p-6 shadow-card sm:p-8">
            <blockquote className="text-pretty text-[15px] leading-relaxed text-muted">
              We built StudyPlan because we kept missing deadlines buried across our Canvas courses. We&rsquo;re a small
              team, we&rsquo;re just getting started, and we&rsquo;d rather earn your trust than borrow it with quotes we
              made up. Give it a week — let the plan prove itself.
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-ink">— The StudyPlan team</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
