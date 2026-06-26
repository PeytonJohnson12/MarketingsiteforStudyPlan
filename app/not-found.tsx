import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main" className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">This page wandered off.</h1>
      <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted">
        The page you&rsquo;re looking for isn&rsquo;t here. Let&rsquo;s get you back to what&rsquo;s due.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/" variant="primary" size="lg">
          Back to home
        </ButtonLink>
        <ButtonLink href="/pricing" variant="secondary" size="lg">
          See pricing
        </ButtonLink>
      </div>
    </main>
  );
}
