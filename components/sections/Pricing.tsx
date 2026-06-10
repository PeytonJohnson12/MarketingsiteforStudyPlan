import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Constellation } from "@/components/Decor";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/*
 * ⚠️ PLACEHOLDER PRICING — replace the paid tier's name, price, and features
 * with your real plan before publishing. Both CTAs point to signup.
 */
const PAID_NAME = "Pro";
const PAID_PRICE = "$X"; // e.g. "$4"
const PAID_FEATURES = [
  "Everything in Free",
  "More features — coming soon",
];

const TIERS = [
  {
    name: "Free",
    price: "$0",
    blurb: "Everything you need to plan your week.",
    features: ["One daily plan from Canvas", "Nothing due ever left out", "Refresh to stay current", "No card needed"],
    cta: "Start free",
    recommended: false,
  },
  {
    name: PAID_NAME,
    price: PAID_PRICE,
    blurb: "For students who want more.",
    features: PAID_FEATURES,
    cta: site.primaryCta,
    recommended: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-20 sm:py-28">
      <Constellation className="-top-8 left-0 h-72 w-72 text-accent opacity-[0.18] lg:left-10" />
      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing"
          subtitle="Start free. Upgrade when you want more."
        />

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl border bg-surface p-6 sm:p-8",
                  tier.recommended
                    ? "relative border-accent-ring shadow-md ring-1 ring-accent-ring/40"
                    : "border-line-subtle shadow-card"
                )}
              >
                {tier.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-on shadow-card">
                    Recommended
                  </span>
                )}
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">{tier.name}</h3>
                <p className="mt-3 flex items-end gap-1">
                  <span className="text-4xl font-semibold tracking-tight text-ink">{tier.price}</span>
                  <span className="pb-1 text-sm text-muted">/mo</span>
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{tier.blurb}</p>
                <ul className="mt-5 space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  <ButtonLink
                    href={site.signupUrl}
                    variant={tier.recommended ? "primary" : "secondary"}
                    size="lg"
                    className="w-full"
                  >
                    {tier.cta}
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted">No card needed to start.</p>
      </div>
    </section>
  );
}
