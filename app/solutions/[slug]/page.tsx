import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { StructuredData } from "@/components/site/StructuredData";
import { IconMark } from "@/components/site/IconMap";
import { Button } from "@/components/ui/Button";
import {
  COMPANY,
  SOLUTION_FAMILIES,
  getAbsoluteUrl,
  getSolutionBySlug,
} from "@/lib/data";
import { ArrowRight } from "lucide-react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SOLUTION_FAMILIES.map((family) => ({
    slug: family.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const family = getSolutionBySlug(slug);

  if (!family) {
    return {};
  }

  return {
    title: family.name,
    description: family.summary,
    alternates: {
      canonical: getAbsoluteUrl(`/solutions/${family.slug}`),
    },
  };
}

export default async function SolutionCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const family = getSolutionBySlug(slug);

  if (!family) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    about: family.name,
    description: family.summary,
    isPartOf: getAbsoluteUrl("/solutions"),
    name: family.name,
    provider: {
      "@type": "Organization",
      name: COMPANY.name,
    },
    url: getAbsoluteUrl(`/solutions/${family.slug}`),
  };

  return (
    <>
      <StructuredData data={schema} />

      <Section>
        <Reveal>
          <div className="icon-chip">
            <IconMark className="h-5 w-5" icon={family.icon} />
          </div>
          <p className="mt-6 text-sm uppercase tracking-[0.24em] text-[var(--color-blue)]">
            Famille de solutions
          </p>
          <h1 className="mt-4 max-w-4xl text-balance font-[var(--font-display)] text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-[var(--color-ink)]">
            {family.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
            {family.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Demander un échange
              <ArrowRight className="h-4 w-4" />
            </Button>
            {family.flagship ? (
              <Button href={family.flagship.href} size="lg" variant="secondary">
                Voir la page dédiée
              </Button>
            ) : null}
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="panel rounded-[2rem] p-6 sm:p-8">
              <p className="eyebrow">Positionnement</p>
              <p className="mt-5 text-lg leading-8 text-[var(--color-ink-soft)]">
                {family.lead}
              </p>
              <ul className="mt-8 grid gap-4 md:grid-cols-2">
                {family.capabilities.map((capability) => (
                  <li
                    className="rounded-[1.4rem] border border-[var(--color-line)] bg-white px-4 py-4 text-sm leading-7 text-[var(--color-muted)]"
                    key={capability}
                  >
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="panel rounded-[2rem] p-6 sm:p-8">
              <p className="eyebrow">Repères source</p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-[var(--color-muted)]">
                {family.notes.map((note) => (
                  <li className="flex items-start gap-3" key={note}>
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
              {family.flagship ? (
                <div className="mt-8 rounded-[1.5rem] border border-[var(--color-line)] bg-white p-5">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-blue)]">
                    Focus associé
                  </p>
                  <h2 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                    {family.flagship.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {family.flagship.description}
                  </p>
                  <div className="mt-5">
                    <Button href={family.flagship.href} variant="secondary">
                      Voir la page
                    </Button>
                  </div>
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <h2 className="max-w-2xl text-balance text-[clamp(2rem,3vw,3.2rem)] font-semibold tracking-[-0.06em] text-[var(--color-ink)]">
            Références et repères visibles pour cette famille.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {family.sampleProducts.map((product, index) => (
            <Reveal delay={index * 0.05} key={product.name}>
              <article className="panel h-full rounded-[1.75rem] p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-blue)]">
                  Référence
                </p>
                <h3 className="mt-5 text-[1.45rem] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {product.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="panel rounded-[2rem] p-6 sm:p-8">
              <p className="eyebrow">Applications</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {family.applications.map((application) => (
                  <span className="tag-pill" key={application}>
                    {application}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="panel rounded-[2rem] p-6 sm:p-8">
              <p className="eyebrow">Secteurs</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {family.sectors.map((sector) => (
                  <span className="tag-pill" key={sector}>
                    {sector}
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
              <p className="eyebrow">Prise de contact</p>
              <h2 className="mt-4 text-balance text-[clamp(2rem,3vw,3.1rem)] font-semibold tracking-[-0.06em] text-[var(--color-ink)]">
                Besoin d’aller plus loin sur {family.shortName.toLowerCase()} ?
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
