import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "white" | "surface" | "dark" | "blue";
}

export function Section({ children, className, id, variant = "white" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 lg:py-28",
        variant === "white" && "bg-white",
        variant === "surface" && "bg-surface",
        variant === "dark" && "bg-ink",
        variant === "blue" && "bg-blue",
        className
      )}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-14 lg:mb-20",
        align === "center" && "text-center max-w-2xl mx-auto",
        align === "left" && "max-w-xl",
        className
      )}
    >
      {eyebrow && (
        <p className="eyebrow mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-orange inline-block" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-heading text-ink mb-5">{title}</h2>
      {description && (
        <p className="text-base text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
