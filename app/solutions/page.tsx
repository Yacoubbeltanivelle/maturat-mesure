import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SolutionCard } from "@/components/site/SolutionCard";
import { Button } from "@/components/ui/Button";
import {
  APPLICATION_CLUSTERS,
  SOLUTION_FAMILIES,
  getAbsoluteUrl,
} from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions industrielles",
  description:
    "Panorama des familles de solutions: traitement d'air comprimé, instrumentation, contrôle, énergie électrique, multimètres, analyse liquide, échantillonnage et environnement.",
  alternates: {
    canonical: getAbsoluteUrl("/solutions"),
  },
};

export default function SolutionsPage() {
  return (
    <>
      <Section>
        <Reveal>
          <p className="eyebrow">Solutions</p>
          <h1 className="mt-4 max-w-4xl text-balance font-[var(--font-display)] text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-[var(--color-ink)]">
            Huit familles pour orienter rapidement le bon besoin industriel.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
            Cette vue d’ensemble présente chaque famille de solutions, facilite
            le repérage par usage et met en avant EXPEL comme offre phare du
            traitement d’air comprimé.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          {SOLUTION_FAMILIES.map((family) => (
            <a className="tag-pill" href={`#${family.slug}`} key={family.slug}>
              {family.shortName}
            </a>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {SOLUTION_FAMILIES.map((family, index) => (
            <Reveal delay={index * 0.04} key={family.slug}>
              <div id={family.slug}>
                <SolutionCard family={family} />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Orienter le besoin"
          title="Des usages concrets pour aider un visiteur à se situer."
          description="Ces contextes d’application servent de passerelle entre besoin opérationnel, environnement industriel et famille de solutions."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {APPLICATION_CLUSTERS.map((cluster, index) => (
            <Reveal delay={index * 0.05} key={cluster.title}>
              <div className="panel h-full rounded-[1.75rem] p-5">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-blue)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-5 text-lg font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                  {cluster.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {cluster.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="panel flex flex-col items-start justify-between gap-5 rounded-[2rem] p-8 lg:flex-row lg:items-center">
            <div>
              <p className="eyebrow">Offre phare</p>
              <h2 className="mt-4 text-balance text-[clamp(2rem,3vw,3.3rem)] font-semibold tracking-[-0.06em] text-[var(--color-ink)]">
                EXPEL bénéficie d’une page dédiée pour aller plus loin.
              </h2>
            </div>
            <Button href="/expel" size="lg">
              Ouvrir EXPEL
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
