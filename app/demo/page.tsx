import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Demo",
  description:
    "Watch a 20-second silent demo of the Canvas study planner that turns scattered deadlines into one calm daily plan.",
  alternates: { canonical: "/demo" },
};

export default function DemoPage() {
  return (
    <main id="main" className="container-page py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">See it in action</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">Watch StudyPlan work</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          Scattered Canvas deadlines become one calm daily plan — in about 20 seconds. No sign-up needed to watch.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-line-subtle bg-surface shadow-card">
          <div className="aspect-video w-full">
            <iframe
              src="/demo.html"
              title="StudyPlan product demo"
              className="h-full w-full border-0"
              loading="eager"
            />
          </div>
        </div>
        <p className="mt-3 text-center text-sm text-faint">A short, looping product tour — no sound needed.</p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <div className="flex flex-col items-center gap-5 rounded-2xl border border-line-subtle bg-accent-soft/60 px-6 py-7 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-xl font-bold tracking-tight text-ink">Ready to try it yourself?</p>
            <p className="mt-1 text-sm text-muted">Connect Canvas and get your first daily plan in minutes — free to start.</p>
          </div>
          <ButtonLink href={site.signupUrl} variant="primary" size="lg" className="shrink-0">
            {site.primaryCta}
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
