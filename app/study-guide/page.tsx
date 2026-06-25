import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

// Hidden page: reachable only via the direct link (e.g. an email button). Not in the
// nav, not in the sitemap, and no-indexed so search engines won't surface it.
export const metadata: Metadata = {
  title: "The Deadline-Proof Week — a free study guide",
  description: "Stop the scramble. 7 quick moves to a calmer college week — a free guide from Navo.",
  robots: { index: false, follow: false },
};

const MOVES = [
  { n: 1, title: "One list", body: "Every assignment, quiz, and exam in one place. Navo pulls it from Canvas." },
  { n: 2, title: "Size it", body: "Guess the hours for each — a “quick” reading rarely is." },
  { n: 3, title: "Work backward", body: "Start the big stuff days early, not the night before." },
  { n: 4, title: "Block time", body: "Reserve study time like a class you can’t skip." },
  { n: 5, title: "Weekly reset", body: "Ten minutes on Sunday to catch anything new. Navo updates itself." },
  { n: 6, title: "Space it out", body: "A little each day beats one all-nighter." },
  { n: 7, title: "Triage when slammed", body: "Graded and due soon → first. Optional reading → last." },
];

export default function StudyGuidePage() {
  return (
    <main id="main">
      {/* Cover */}
      <section className="relative overflow-hidden hero-glow">
        <div className="absolute inset-0 grid-texture opacity-60" aria-hidden />
        <div className="container-page relative py-20 text-center sm:py-28">
          <span className="eyebrow">A free guide from Navo</span>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            The <span className="text-gradient">Deadline-Proof</span> Week
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            Stop the scramble. Seven quick moves to a calmer college week — set it up once (about an hour), keep it going in 10 minutes a week.
          </p>
          <p className="mt-4 text-sm text-faint">Free guide · 2-min read</p>
        </div>
      </section>

      {/* The 7 moves */}
      <section className="bg-surface/60 py-16 sm:py-24">
        <div className="container-page">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            7 moves to a calmer week
          </h2>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {MOVES.map((m) => (
              <div key={m.n} className="flex gap-4 rounded-2xl border border-line-subtle bg-surface p-5 shadow-card">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-on">
                  {m.n}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{m.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">{m.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-accent-ring/40 bg-surface p-6 text-center shadow-card">
            <p className="text-base font-semibold text-ink">Navo does moves 1, 3 &amp; 5 for you.</p>
            <p className="mt-1.5 text-sm text-muted">Connect Canvas once and just open it to see today&rsquo;s plan.</p>
            <ButtonLink href={site.signupUrl} variant="primary" size="lg" className="mt-4">
              Start my free trial
            </ButtonLink>
          </div>

          <p className="mt-10 text-center text-xs text-faint">Navo · {site.catchphrase} · navolearning.com</p>
        </div>
      </section>
    </main>
  );
}
