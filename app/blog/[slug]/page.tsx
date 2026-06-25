import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { posts, getPost, formatDate } from "@/lib/posts";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  // BlogPosting + breadcrumb structured data for rich results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        url: `${site.url}/blog/${post.slug}`,
        author: { "@type": "Organization", name: "Navo" },
        publisher: { "@id": `${site.url}/#org` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
          { "@type": "ListItem", position: 3, name: post.title },
        ],
      },
    ],
  };

  return (
    <main id="main" className="py-20 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container-page mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" /> All posts
        </Link>

        <p className="mt-6 text-sm text-faint">
          {formatDate(post.date)} · {post.readMins} min read
        </p>
        <h1 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{post.title}</h1>

        <div className="mt-8 space-y-5">
          {post.content.map((para, i) => (
            <p key={i} className="text-pretty text-[17px] leading-relaxed text-muted">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-accent-ring/40 bg-surface p-6 text-center shadow-card">
          <p className="text-base font-semibold text-ink">Let Navo build your week for you.</p>
          <p className="mt-1.5 text-sm text-muted">{site.catchphrase} Free for 7 days.</p>
          <ButtonLink href={site.signupUrl} variant="primary" size="md" className="mt-4">
            {site.primaryCta}
          </ButtonLink>
        </div>
      </article>
    </main>
  );
}
