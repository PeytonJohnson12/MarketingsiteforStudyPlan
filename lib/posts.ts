export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  readMins: number;
  content: string[]; // paragraphs
};

// Starter posts (seeded by the Content Lead). Edit or replace freely — each is a plain,
// honest, on-brand piece targeting a high-intent "Canvas + problem" search.
export const posts: Post[] = [
  {
    slug: "never-miss-a-canvas-deadline",
    title: "How to never miss a Canvas deadline",
    excerpt: "Five simple habits to stop deadlines from sneaking up on you.",
    date: "2026-06-09",
    readMins: 2,
    content: [
      "Canvas is great at holding your assignments. It's not great at telling you what to do today. Here's how to stay ahead without living in your notifications.",
      "1. Check one place, once a day. Pick a single spot you trust and make it the only one. Bouncing between six Canvas tabs is how things slip.",
      "2. Look at the whole week, not just today. Big projects hide. Each Sunday, glance at the next seven days so nothing surprises you on Thursday night.",
      "3. Do the most urgent thing first. When everything feels due, sort by deadline and start at the top. One clear next step beats a long, scary list.",
      "4. Turn 'someday' into a time. 'Study for the quiz' never happens. 'Study for the quiz, Tuesday 6pm' does.",
      "5. Let something do the boring part. Re-typing every due date is a waste. Navo reads your Canvas and builds one calm daily plan for you — so you always know what's actually due. Free for 7 days.",
    ],
  },
  {
    slug: "whats-actually-due-on-canvas",
    title: "What's actually due on Canvas — without the noise",
    excerpt: "Canvas shows you everything at once. Here's how to find what matters now.",
    date: "2026-06-07",
    readMins: 2,
    content: [
      "Open Canvas and you get six course pages, a wall of announcements, and a to-do list that only thinks about today. Finding what's actually due — and what to do first — takes more clicks than it should.",
      "The fix is to pull everything into one view, sorted by deadline. When every assignment from every class sits in a single list, the panic drops fast.",
      "Then cut it down to today. You don't need all twenty things at once. You need the two or three that matter right now.",
      "That's the whole idea behind Navo: it reads your Canvas and turns it into one calm daily plan, most urgent first. Everything that's due is always in it. Free for 7 days.",
    ],
  },
  {
    slug: "plan-your-week-in-5-minutes",
    title: "Plan your whole week in 5 minutes",
    excerpt: "A quick Sunday routine that makes the week feel lighter.",
    date: "2026-06-05",
    readMins: 2,
    content: [
      "You don't need a fancy system. You need five quiet minutes and a clear list. Here's a Sunday routine that works.",
      "Minutes 1–2 — Gather. Put every assignment due this week in one place. Don't sort yet; just get it out of your head and out of Canvas.",
      "Minute 3 — Order it. Put the closest deadline at the top. The most urgent thing should be the first thing you see.",
      "Minute 4 — Pick your hours. Be honest about how much you can study each day. A plan you can't keep isn't a plan.",
      "Minute 5 — Trust it. Close the tabs. Each day, just do the top thing. If something changes, re-plan.",
      "If five minutes still feels like too much, Navo does this part for you — connect Canvas once and it builds your week automatically. Free for 7 days.",
    ],
  },
  {
    slug: "keep-up-with-college-assignments",
    title: "How to keep up with college assignments",
    excerpt: "Behind in four classes at once? A simple system to catch up — and stay there.",
    date: "2026-06-11",
    readMins: 2,
    content: [
      "Most students don't fall behind because they're lazy. They fall behind because the work lives in too many places — six Canvas tabs, a group chat, a synced calendar, a sticky note. Nobody can hold all that in their head at once.",
      "The fix is one list. Pull every assignment from every class into a single view, sorted by what's due first. When it's all in one place, the panic drops and the next step gets obvious.",
      "Then shrink it to today. You don't need to stare at all twenty things — just the two or three that matter right now. Tomorrow you'll do the next two or three.",
      "Be honest about your hours, too. A plan that needs eight study hours on a day you have two isn't a plan. Pick what fits, do that, and move the rest.",
      "Navo does the gathering and the sorting for you — it reads your Canvas and builds one calm daily plan, most urgent first, so keeping up stops being a memory game. Free for 7 days.",
    ],
  },
  {
    slug: "study-for-multiple-exams",
    title: "How to study for several exams at once",
    excerpt: "Three exams in one week doesn't have to mean three all-nighters. Here's the plan.",
    date: "2026-06-13",
    readMins: 2,
    content: [
      "Exam weeks feel impossible because everything lands at once. But you rarely have to study for it all on the same day — you have to start early enough that you never have to cram it all on the same night.",
      "Work backward from each exam. Count the days you have, split the material across them, and put the first study block several days out. A little each day beats one long, panicked session — and you actually remember it.",
      "Protect the study time like a class. 'Study for chem, Tuesday 6pm' happens. 'Study for chem sometime' does not. Give it a real slot and treat it as non-negotiable.",
      "When two exams collide, triage: the one that's sooner and worth more points goes first. Optional reading goes last, or not at all.",
      "Navo spreads exam study across the days before each test automatically, so you're never choosing between three subjects the night before. Free for 7 days.",
    ],
  },
  {
    slug: "why-you-forget-assignments",
    title: "Why you keep forgetting assignments (and how to fix it)",
    excerpt: "It's not your memory. Canvas was never built to tell you what to do today.",
    date: "2026-06-15",
    readMins: 2,
    content: [
      "If you keep forgetting assignments, the problem usually isn't you. Canvas is great at storing your coursework, but it was never designed to answer the one question that matters: what should I do today?",
      "Its to-do list only thinks about right now, announcements bury due dates, and big projects hide until they're suddenly due. You're left stitching it together in your head — and heads forget.",
      "The reliable fix is to get everything out of your head and into one place that updates itself. When every due assignment is always in your plan, forgetting stops being possible.",
      "Pair that with a quick weekly check — ten minutes on Sunday to catch anything new — and the surprises disappear.",
      "Navo connects to Canvas and keeps that one trustworthy list for you, so nothing due ever slips. Free for 7 days.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
