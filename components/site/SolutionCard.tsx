import { Button } from "@/components/ui/Button";
import { IconMark } from "@/components/site/IconMap";
import type { SolutionFamily } from "@/lib/data";
import { ArrowRight } from "lucide-react";

interface SolutionCardProps {
  family: SolutionFamily;
}

export function SolutionCard({ family }: SolutionCardProps) {
  return (
    <article className="panel group flex h-full flex-col rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(15,23,42,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div className="icon-chip">
          <IconMark className="h-5 w-5" icon={family.icon} />
        </div>
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-subtle)]">
          {family.shortName}
        </span>
      </div>
      <h3 className="mt-6 text-[1.45rem] font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
        {family.name}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
        {family.summary}
      </p>
      <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
        {family.capabilities.slice(0, 3).map((item) => (
          <li className="flex items-start gap-3" key={item}>
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button
          className="group-hover:border-[var(--color-blue)]"
          href={`/solutions/${family.slug}`}
          variant="secondary"
        >
          Voir la famille
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </article>
  );
}
