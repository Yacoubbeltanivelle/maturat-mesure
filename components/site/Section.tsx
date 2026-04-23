import { cn } from "@/lib/utils";

type SectionTone = "default" | "soft" | "dark";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: SectionTone;
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

const toneClasses: Record<SectionTone, string> = {
  default: "",
  soft: "bg-[var(--color-panel-soft)]",
  dark: "bg-[var(--color-ink)] text-white",
};

export function Section({
  children,
  className,
  id,
  tone = "default",
}: SectionProps) {
  return (
    <section className={cn("section-space", toneClasses[tone], className)} id={id}>
      <div className="container-site">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-balance text-[clamp(2rem,3vw,3.5rem)] font-semibold tracking-[-0.05em] text-current">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-[var(--color-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
