"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all",
        scrolled ? "border-b border-line-subtle bg-canvas/80 backdrop-blur-md" : "border-b border-transparent"
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#top" className="rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-ring/40">
          <Logo />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-soft hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ButtonLink href={site.loginUrl} variant="ghost" size="sm">Log in</ButtonLink>
          <ButtonLink href={site.signupUrl} variant="primary" size="sm">{site.primaryCta}</ButtonLink>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line-subtle bg-canvas md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted hover:bg-surface-soft hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <ButtonLink href={site.loginUrl} variant="secondary" size="md">Log in</ButtonLink>
              <ButtonLink href={site.signupUrl} variant="primary" size="md">{site.primaryCta}</ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
