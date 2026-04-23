import type { Metadata } from "next";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { StructuredData } from "@/components/site/StructuredData";
import { Button } from "@/components/ui/Button";
import { COMPANY, EXPEL, getAbsoluteUrl } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "EXPEL",
  description:
    "Page dédiée au filtre à air comprimé EXPEL: bénéfices, caractéristiques, secteurs d'application et prise de contact rapide.",
  alternates: {
    canonical: getAbsoluteUrl("/expel"),
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  brand: {
    "@type": "Brand",
    name: COMPANY.name,
  },
  category: "Filtre à air comprimé",
  description: EXPEL.summary,
  name: EXPEL.name,
  url: getAbsoluteUrl("/expel"),
};

export default function ExpelPage() {
  return (
    <>
      <StructuredData data={productSchema} />

      <Section>
        <Reveal>
          <p className="eyebrow">EXPEL</p>
          <h1 className="mt-4 max-w-4xl text-balance font-[var(--font-display)] text-[clamp(3rem,6vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-[var(--color-ink)]">
            EXPEL, la solution phare pour le traitement d’air comprimé.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
            {EXPEL.summary}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-muted)]">
            {EXPEL.strapline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Demander une étude
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={COMPANY.phoneHref} size="lg" variant="secondary">
              Appeler Maturat Mesure
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {EXPEL.specs.map((spec, index) => (
            <Reveal delay={index * 0.04} key={spec.label}>
              <div className="panel h-full rounded-[1.75rem] p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-subtle)]">
                  {spec.label}
                </p>
                <p className="mt-4 text-[2rem] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                  {spec.value}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {spec.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <h2 className="max-w-3xl text-balance text-[clamp(2rem,3vw,3.2rem)] font-semibold tracking-[-0.06em] text-[var(--color-ink)]">
            Les points forts qui rendent EXPEL distinctif.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {EXPEL.benefits.map((benefit, index) => (
            <Reveal delay={index * 0.05} key={benefit.title}>
              <div className="panel h-full rounded-[1.75rem] p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-blue)]">
                  Bénéfice
                </p>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="panel rounded-[2rem] p-6 sm:p-8">
              <p className="eyebrow">Usages</p>
              <h2 className="mt-4 text-balance text-[clamp(2rem,3vw,3rem)] font-semibold tracking-[-0.06em] text-[var(--color-ink)]">
                Là où EXPEL apporte une réponse claire.
              </h2>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-muted)]">
                {EXPEL.useCases.map((useCase) => (
                  <li className="flex items-start gap-3" key={useCase}>
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="panel rounded-[2rem] p-6 sm:p-8">
              <p className="eyebrow">Secteurs annoncés</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {EXPEL.industries.map((industry) => (
                  <span className="tag-pill" key={industry}>
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="panel flex flex-col items-start justify-between gap-5 rounded-[2rem] p-8 lg:flex-row lg:items-center">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-4 text-balance text-[clamp(2rem,3vw,3.1rem)] font-semibold tracking-[-0.06em] text-[var(--color-ink)]">
                Besoin de valider l’adéquation d’EXPEL à votre application ?
              </h2>
            </div>
            <Button href="/contact" size="lg">
              Ouvrir la page contact
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
