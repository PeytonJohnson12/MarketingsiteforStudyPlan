export function Logo({ className }: { className?: string }) {
  return (
    <span className={className ?? "inline-flex items-center gap-2.5"}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-on shadow-card">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M5 4h9l5 5v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M9 12.5l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight text-ink">StudyPlan</span>
    </span>
  );
}
