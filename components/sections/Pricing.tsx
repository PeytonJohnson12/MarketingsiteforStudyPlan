import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Constellation } from "@/components/Decor";
import { site } from "@/lib/site";

/*
 * ⚠️ PLACEHOLDER PRICE — set PAID_PRICE to your real monthly price before
 * publishing (it drives the card display + the trial line). Keep
 * app/layout.tsx JSON-LD `offers.price` in sync. The card is collected at
 * signup; the student is charged after the 7-day free trial.
 */
const PAID_PRICE = "$4"; // [SET PRICE] placeholder

const FEATURES = [
  "One calm daily plan from Canvas",
  "Nothing due ever left out",
  "Refresh anytime to stay current",
  "Change your hours or dates whenever",
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-20 sm:py-28">
      <Constellation className="-top-8 left-0 h-72 w-72 text-accent opacity-[0.18] lg:left-10" />
      <div className="container-page relative z-10">
        <SectionHeading
          as="h1"
          eyebrow="Pricing"
          title="Simple pricing"
          subtitle="Try it free for 7 days. Keep it for less than a coffee a month."
        />

        <div className="mx-auto mt-12 max-w-md">
          <Reveal>
            <div className="relative flex flex-col rounded-2xl border border-accent-ring bg-surface p-6 shadow-md ring-1 ring-accent-ring/40 sm:p-8">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-on shadow-card">
                7-day free trial
              </span>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">Navo</h3>
              <p className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-semibold tracking-tight text-ink">{PAID_PRICE}</span>
                <span className="pb-1 text-sm text-muted">/mo</span>
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                Free for 7 days, then {PAID_PRICE}/mo. Cancel anytime.
              </p>
              <ul className="mt-5 space-y-2.5">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-7">
                <ButtonLink href={site.signupUrl} variant="primary" size="lg" className="w-full">
                  {site.primaryCta}
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-6 text-center text-sm text-muted">
          Your card is charged after 7 days. Cancel anytime before then and you won&rsquo;t be billed.
        </p>
      </div>
    </section>
  );
}
