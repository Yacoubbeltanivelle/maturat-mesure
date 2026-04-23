import type { Metadata } from "next";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { ProductCard } from "@/components/site/ProductCard";
import { Button } from "@/components/ui/Button";
import { COMPANY, getAbsoluteUrl } from "@/lib/data";
import { PRODUCT_CATALOG, PRODUCT_GROUPS } from "@/lib/products";
import { cn } from "@/lib/utils";
import { ArrowRight, Package2 } from "lucide-react";

const familyCount = new Set(PRODUCT_CATALOG.map((product) => product.familyHref))
  .size;

export const metadata: Metadata = {
  title: "Produits",
  description:
    "Catalogue visuel des produits Maturat Mesure visibles sur la vitrine L’Usine Nouvelle, organisé par catégories pour une lecture plus directe.",
  alternates: {
    canonical: getAbsoluteUrl("/produits"),
  },
};

export default function ProductsPage() {
  return (
    <>
      <Section>
        <Reveal>
          <p className="eyebrow">Produits</p>
          <h1 className="mt-4 max-w-4xl text-balance font-[var(--font-display)] text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-[var(--color-ink)]">
            Un vrai catalogue produit, plus visuel et plus lisible.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
            Les offres visibles sur la vitrine publique de Maturat Mesure sont
            regroupées ici en sections claires, avec une fiche dédiée par
            produit, pour faciliter le repérage et le contact.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="metric-card">
              <p className="text-[1.55rem] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                {PRODUCT_CATALOG.length}
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                produits visibles sur la source
              </p>
            </div>
            <div className="metric-card">
              <p className="text-[1.55rem] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                {PRODUCT_GROUPS.length}
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                catégories produits
              </p>
            </div>
            <div className="metric-card">
              <p className="text-[1.55rem] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                {familyCount}
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                familles de solutions associées
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <div className="panel rounded-[2rem] p-6 sm:p-7">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-blue)]">
                  Navigation catalogue
                </p>
                <h2 className="mt-4 text-[1.9rem] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                  Accéder directement à une catégorie.
                </h2>
              </div>
              <div className="icon-chip hidden shrink-0 sm:flex">
                <Package2 className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {PRODUCT_GROUPS.map((group) => (
                <a className="tag-pill" href={`#${group.slug}`} key={group.slug}>
                  {group.title}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="sticky top-[5.25rem] z-30 mb-10">
          <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white/84 p-3 shadow-[0_18px_38px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <nav
              aria-label="Filtrer les catégories produits"
              className="scrollbar-none flex items-center gap-2 overflow-x-auto"
            >
              <span className="shrink-0 px-2 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--color-blue)]">
                Filtrer
              </span>
              {PRODUCT_GROUPS.map((group) => (
                <a
                  className="shrink-0 rounded-full border border-[var(--color-line)] bg-white px-4 py-2.5 text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:border-[var(--color-blue)] hover:text-[var(--color-ink)]"
                  href={`#${group.slug}`}
                  key={group.slug}
                >
                  {group.title}
                  <span className="ml-2 text-[11px] uppercase tracking-[0.16em] text-[var(--color-subtle)]">
                    {group.products.length.toString().padStart(2, "0")}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="space-y-14">
          {PRODUCT_GROUPS.map((group, index) => (
            <Reveal delay={index * 0.03} key={group.slug}>
              <section
                className="scroll-mt-44 border-t border-[var(--color-line)] pt-10"
                id={group.slug}
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-blue)]">
                      {group.products.length.toString().padStart(2, "0")} produit
                      {group.products.length > 1 ? "s" : ""}
                    </p>
                    <h2 className="mt-3 text-[clamp(1.8rem,3vw,3rem)] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                      {group.title}
                    </h2>
                  </div>

                  <Button href={group.familyHref} variant="secondary">
                    Voir la famille associée
                  </Button>
                </div>

                <div
                  className={cn(
                    "mt-8 grid gap-5",
                    group.products.length === 1
                      ? "grid-cols-1 justify-items-center"
                      : "[grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]",
                  )}
                >
                  {group.products.map((product) => (
                    <div
                      className={cn(
                        "w-full",
                        group.products.length === 1 && "max-w-[21rem] sm:max-w-[23rem]",
                      )}
                      key={product.slug}
                    >
                      <ProductCard
                        compactImage={group.products.length === 1}
                        product={{
                          ...product,
                          groupSlug: group.slug,
                          groupTitle: group.title,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="panel flex flex-col items-start justify-between gap-5 rounded-[2rem] p-8 lg:flex-row lg:items-center">
            <div>
              <p className="eyebrow">Passer à l’action</p>
              <h2 className="mt-4 max-w-2xl text-balance text-[clamp(2rem,3vw,3.2rem)] font-semibold tracking-[-0.06em] text-[var(--color-ink)]">
                Une référence repérée doit mener rapidement au bon contact.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
                Téléphone, e-mails directs et demande de devis restent
                accessibles depuis les pages produit comme depuis le catalogue.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={COMPANY.phoneHref} size="lg" variant="secondary">
                Appeler Maturat Mesure
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
