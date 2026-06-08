import { Counter } from "@/components/ui/reveal";

const STATS = [
  { to: 2000, suffix: "+", label: "students planning their week" },
  { to: 50, suffix: "+", label: "campuses represented" },
  { to: 12000, suffix: "+", label: "deadlines kept on track" },
];

export function TrustBar() {
  return (
    <section aria-label="Usage at a glance" className="border-y border-line-subtle bg-surface/60">
      <div className="container-page grid grid-cols-1 gap-6 py-8 sm:grid-cols-3">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-semibold tracking-tight text-ink">
              <Counter to={s.to} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="pb-6 text-center text-xs text-faint">Illustrative figures (sample data)</p>
    </section>
  );
}
