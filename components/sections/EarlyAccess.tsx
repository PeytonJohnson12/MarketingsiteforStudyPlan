"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Constellation } from "@/components/Decor";
import { subscribeEarlyAccess, trackEarlyAccessSignup } from "@/lib/earlyAccess";

type Status = "idle" | "submitting" | "success" | "error";

export function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setMessage("");

    const result = await subscribeEarlyAccess(email);
    if (result.ok) {
      trackEarlyAccessSignup();
      setStatus("success");
      return;
    }
    setStatus("error");
    setMessage(
      result.reason === "invalid"
        ? "That doesn't look like a valid email."
        : result.reason === "not_configured"
          ? "Sign-ups aren't switched on yet — check back soon."
          : "Something went wrong. Please try again."
    );
  }

  return (
    <section id="early-access" className="relative overflow-hidden py-20 sm:py-28">
      <Constellation className="-top-8 right-0 h-72 w-72 text-accent opacity-[0.18] lg:right-12" />
      <div className="container-page relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Free study plan
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Get a free study plan.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">
            Drop your email and we&rsquo;ll send you a ready-to-use weekly study plan — free.
          </p>

          {status === "success" ? (
            <Reveal className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2.5 rounded-xl border border-success/30 bg-success-soft/50 px-5 py-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
              <p className="text-sm font-medium text-ink">You&rsquo;re in! Your free study plan is on the way — check your inbox.</p>
            </Reveal>
          ) : (
            <form onSubmit={onSubmit} className="mx-auto mt-8 max-w-md" noValidate>
              <div className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="early-access-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="early-access-email"
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="you@school.edu"
                  aria-invalid={status === "error"}
                  aria-describedby={status === "error" ? "early-access-error" : undefined}
                  className="h-12 flex-1 rounded-lg border border-line bg-surface px-4 text-base text-ink placeholder:text-faint focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent-ring/30"
                />
                <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"} className="group shrink-0">
                  {status === "submitting" ? "Sending…" : "Send my free study plan"}
                  {status !== "submitting" && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
                </Button>
              </div>
              {status === "error" && (
                <p id="early-access-error" className="mt-2 text-sm text-danger">
                  {message}
                </p>
              )}
              <p className="mt-3 text-xs text-muted">
                We&rsquo;ll send your study plan and the occasional update. No spam — unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
