import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

const COLUMNS = [
  { title: "Product", links: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
  ]},
  { title: "Get started", links: [
    { label: "Sign up", href: site.signupUrl },
    { label: "Log in", href: site.loginUrl },
  ]},
];

export function Footer() {
  return (
    <footer className="border-t border-line-subtle bg-surface/60">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{site.tagline}</p>
            <ButtonLink href={site.signupUrl} variant="primary" size="sm" className="mt-5">{site.primaryCta}</ButtonLink>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-ink">{col.title}</p>
              <ul className="mt-3 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-muted transition-colors hover:text-ink">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line-subtle pt-6 sm:flex-row">
          <p className="text-sm text-faint">© {new Date().getFullYear()} StudyPlan. All rights reserved.</p>
          <p className="text-sm text-faint">Made for students juggling deadlines.</p>
        </div>
      </div>
    </footer>
  );
}
