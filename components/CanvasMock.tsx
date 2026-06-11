// A deliberately busy mock of a Canvas LMS dashboard — the "before" state.
// Evokes Canvas's familiar layout (dark global nav + a colorful course-card grid +
// a long to-do list) WITHOUT copying Instructure's logo or exact branding.

const COURSES = [
  { code: "CS 350", name: "Algorithms", color: "#7c5cf0", unread: 3 },
  { code: "WRIT 220", name: "Composition", color: "#0ea5e9", unread: 1 },
  { code: "MATH 210", name: "Calculus II", color: "#d99423", unread: 7 },
  { code: "BIO 101", name: "Intro Biology", color: "#2f9e6b", unread: 2 },
  { code: "HIST 105", name: "World History", color: "#ec4899", unread: 0 },
  { code: "CHEM 140", name: "Gen Chem", color: "#ef4444", unread: 4 },
];

const TODO = [
  { task: "PSet 4", course: "CS 350", due: "Due today", urgent: true },
  { task: "Quiz 3", course: "MATH 210", due: "Missing", urgent: true },
  { task: "Essay draft", course: "WRIT 220", due: "Tomorrow", urgent: false },
  { task: "Lab report", course: "BIO 101", due: "Fri 11:59pm", urgent: false },
];

export function CanvasMock() {
  return (
    <div className="overflow-hidden rounded-lg border border-line-subtle bg-canvas">
      {/* app top bar */}
      <div className="flex items-center gap-2 border-b border-line-subtle bg-surface px-3 py-2">
        <span className="h-3.5 w-3.5 rounded bg-danger/80" aria-hidden />
        <span className="text-[11px] font-semibold text-ink">Dashboard</span>
        <span className="ml-auto text-[9px] text-faint">6 courses · 14 to do</span>
      </div>

      <div className="flex">
        {/* dark global nav rail */}
        <div className="flex w-8 shrink-0 flex-col items-center gap-2.5 bg-sidebar py-3" aria-hidden>
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="h-3 w-3 rounded bg-white/20" />
          ))}
        </div>

        {/* colorful course-card grid */}
        <div className="min-w-0 flex-1 p-2.5">
          <div className="grid grid-cols-2 gap-2">
            {COURSES.map((c) => (
              <div key={c.code} className="overflow-hidden rounded-md border border-line-subtle bg-surface">
                <div className="relative h-5" style={{ background: c.color }}>
                  {c.unread > 0 && (
                    <span className="absolute right-1 top-1 flex h-3 min-w-[0.75rem] items-center justify-center rounded-full bg-danger px-1 text-[8px] font-bold leading-none text-white">
                      {c.unread}
                    </span>
                  )}
                </div>
                <div className="px-1.5 py-1">
                  <p className="truncate text-[10px] font-semibold text-ink">{c.code}</p>
                  <p className="truncate text-[9px] text-muted">{c.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* busy to-do list */}
      <div className="border-t border-line-subtle bg-surface px-3 py-2">
        <p className="mb-1 text-[9px] font-semibold uppercase tracking-wide text-faint">To Do</p>
        <ul className="space-y-1">
          {TODO.map((t, i) => (
            <li key={i} className="flex items-center justify-between gap-2 text-[10px]">
              <span className="min-w-0 truncate text-muted">
                <span className="font-medium text-ink">{t.task}</span> · {t.course}
              </span>
              <span className={"shrink-0 " + (t.urgent ? "font-semibold text-danger" : "text-faint")}>{t.due}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
