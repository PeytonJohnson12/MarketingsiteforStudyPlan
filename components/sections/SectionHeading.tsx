import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
  /** "h1" on pages where this heading is the page title (SEO heading hierarchy). */
  as?: "h1" | "h2";
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <Heading className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</Heading>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
