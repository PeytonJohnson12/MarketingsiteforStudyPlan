import type { Metadata } from "next";
import Link from "next/link";
import { posts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Canvas tips & study planning",
  description:
    "Simple tips for staying on top of Canvas assignments — what's due, study plans, and a calmer week.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main id="main" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            Blog
          </span>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Stay on top of Canvas
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">
            Short, simple tips for fewer missed deadlines and a calmer week.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-line-subtle bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xs font-medium text-faint">
                {formatDate(post.date)} · {post.readMins} min read
              </p>
              <h2 className="mt-2 text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{post.excerpt}</p>
              <span className="mt-4 text-sm font-medium text-accent">Read →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
