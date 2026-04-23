import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { StructuredData } from "@/components/site/StructuredData";
import { ProductCard } from "@/components/site/ProductCard";
import { Button } from "@/components/ui/Button";
import {
  COMPANY,
  SOLUTION_FAMILIES,
  getAbsoluteUrl,
} from "@/lib/data";
import { PRODUCT_CATALOG, getProductBySlug } from "@/lib/products";
import { ArrowRight, ExternalLink, Package2 } from "lucide-react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCT_CATALOG.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.summary,
    alternates: {
      canonical: getAbsoluteUrl(`/produits/${product.slug}`),
    },
  };
}

function getAssociatedFamily(productHref: string) {
  if (productHref === "/expel") {
    return SOLUTION_FAMILIES.find(
      (family) => family.slug === "traitement-air-comprime",
    );
  }

  return SOLUTION_FAMILIES.find(
    (family) => `/solutions/${family.slug}` === productHref,
  );
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const family = getAssociatedFamily(product.familyHref);
  const relatedProducts = PRODUCT_CATALOG.filter(
    (item) => item.groupSlug === product.groupSlug && item.slug !== product.slug,
  ).slice(0, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    brand: {
      "@type": "Brand",
      name: COMPANY.name,
    },
    category: product.groupTitle,
    description: product.summary,
    image: getAbsoluteUrl(product.imageSrc),
    name: product.name,
    url: getAbsoluteUrl(`/produits/${product.slug}`),
  };

  return (
    <>
      <StructuredData data={productSchema} />

      <Section>
        <Reveal>
          <p className="eyebrow">Produit</p>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[var(--color-subtle)]">
            Produits / {product.groupTitle} / {product.familyLabel}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="panel relative overflow-hidden rounded-[2rem] border border-[var(--color-line-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,246,251,0.94))] p-6">
              <div className="pointer-events-none absolute inset-6 rounded-[1.7rem] border border-[var(--color-line)] bg-white/84" />
              <div className="relative aspect-[4/3]">
                <Image
                  alt={product.name}
                  className="object-contain p-10"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  src={product.imageSrc}
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-blue)]">
                {product.groupTitle}
              </p>
              <h1 className="mt-4 text-balance font-[var(--font-display)] text-[clamp(2.4rem,4vw,4.3rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-[var(--color-ink)]">
                {product.name}
              </h1>
              <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
                {product.summary}
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                Référence visible sur la vitrine publique L&apos;Usine Nouvelle de
                Maturat Mesure, intégrée ici dans une lecture plus claire par
                produit et par famille.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <Button href="/contact" size="lg">
                  Demander un devis
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href={product.familyHref} size="lg" variant="secondary">
                  Voir la famille associée
                </Button>
                <a
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-6 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-blue)] hover:bg-[var(--color-panel-soft)]"
                  href={product.sourceUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Voir la source publique
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-[var(--color-line)] bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-subtle)]">
                    Catégorie
                  </p>
                  <p className="mt-3 text-base font-medium text-[var(--color-ink)]">
                    {product.groupTitle}
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-[var(--color-line)] bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-subtle)]">
                    Famille
                  </p>
                  <p className="mt-3 text-base font-medium text-[var(--color-ink)]">
                    {product.familyLabel}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="panel rounded-[2rem] p-6 sm:p-8">
              <p className="eyebrow">Présentation</p>
              <h2 className="mt-4 text-[clamp(1.8rem,3vw,3rem)] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                Un produit replacé dans son contexte industriel.
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
                {product.summary}
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                Cette fiche sert à rendre la référence plus exploitable dans le
                parcours du site, sans inventer de caractéristiques non visibles
                dans les sources publiques.
              </p>
              {product.slug === "expel" ? (
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                  EXPEL bénéficie en plus d&apos;une page dédiée avec ses repères
                  techniques vérifiés, dont 99,9999 % d&apos;élimination des
                  liquides, un débit maximum de 850 l/min et une pression
                  maximale de 15 bar(g).
                </p>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="panel rounded-[2rem] p-6 sm:p-8">
              <div className="icon-chip">
                <Package2 className="h-5 w-5" />
              </div>
              <h2 className="mt-6 text-[clamp(1.8rem,3vw,3rem)] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                Repères utiles avant contact.
              </h2>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-muted)]">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />
                  <span>
                    Référence classée dans <strong>{product.groupTitle}</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />
                  <span>
                    Rattachée à la famille <strong>{product.familyLabel}</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />
                  <span>Source publique: vitrine L&apos;Usine Nouvelle.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />
                  <span>Contact direct: {COMPANY.phoneDisplay}</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {family ? (
        <Section>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="panel rounded-[2rem] p-6 sm:p-8">
                <p className="eyebrow">Applications liées</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {family.applications.map((application) => (
                    <span className="tag-pill" key={application}>
                      {application}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="panel rounded-[2rem] p-6 sm:p-8">
                <p className="eyebrow">Capacités associées</p>
                <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-muted)]">
                  {family.capabilities.slice(0, 4).map((capability) => (
                    <li className="flex items-start gap-3" key={capability}>
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>
      ) : null}

      {relatedProducts.length > 0 ? (
        <Section>
          <Reveal>
            <p className="eyebrow">Produits liés</p>
            <h2 className="mt-4 max-w-3xl text-balance text-[clamp(2rem,3vw,3.2rem)] font-semibold tracking-[-0.06em] text-[var(--color-ink)]">
              Autres produits de la même catégorie.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
            {relatedProducts.map((related, index) => (
              <Reveal delay={index * 0.05} key={related.slug}>
                <ProductCard product={related} showContactCta={false} />
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      {product.slug === "expel" ? (
        <Section>
          <Reveal>
            <div className="panel flex flex-col items-start justify-between gap-5 rounded-[2rem] p-8 lg:flex-row lg:items-center">
              <div>
                <p className="eyebrow">EXPEL</p>
                <h2 className="mt-4 max-w-2xl text-balance text-[clamp(2rem,3vw,3.2rem)] font-semibold tracking-[-0.06em] text-[var(--color-ink)]">
                  Aller à la page technique complète d’EXPEL.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
                  La page dédiée reprend les repères spécifiques vérifiés pour le
                  traitement d’air comprimé EXPEL.
                </p>
              </div>
              <Button href="/expel" size="lg">
                Voir la page EXPEL
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </Section>
      ) : null}
    </>
  );
}
