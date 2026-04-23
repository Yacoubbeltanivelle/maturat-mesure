import Image from "next/image";
import Link from "next/link";
import { HeroGraphic } from "@/components/site/HeroGraphic";
import { IconMark } from "@/components/site/IconMap";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { StructuredData } from "@/components/site/StructuredData";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  APPLICATION_CLUSTERS,
  COMPANY,
  EXPEL,
  HOME_METRICS,
  SITE_URL,
  TRUST_MARKERS,
  WHY_MATURAT,
  getSolutionBySlug,
} from "@/lib/data";
import { getProductBySlug } from "@/lib/products";
import {
  ArrowRight,
  BadgeCheck,
  CalendarRange,
  Layers3,
  MapPin,
  PhoneCall,
  ScanSearch,
} from "lucide-react";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  address: {
    "@type": "PostalAddress",
    addressCountry: COMPANY.country,
    addressLocality: COMPANY.city,
    postalCode: COMPANY.postalCode,
    streetAddress: `${COMPANY.addressLine2}, ${COMPANY.addressLine1}`,
  },
  alternateName: COMPANY.legalName,
  description: COMPANY.description,
  email: COMPANY.primaryEmail,
  foundingDate: COMPANY.founded,
  name: COMPANY.name,
  sameAs: [COMPANY.linkedin, COMPANY.facebook],
  telephone: COMPANY.phoneDisplay,
  url: SITE_URL,
};

const homeQuickLinks = [
  {
    href: "/solutions/traitement-air-comprime",
    label: "Traitement d'air comprimé",
  },
  { href: "/solutions/instrumentation", label: "Instrumentation" },
  { href: "/solutions/controle-signal", label: "Contrôle & signal" },
  { href: "/solutions/analyse-liquide", label: "Analyse liquide" },
  { href: "/produits", label: "Catalogue produits" },
] as const;

const homeFeaturedProductSlugs = [
  "expel",
  "t5500",
  "tpiv10-ar",
  "zircon-ph-process",
] as const;

const homeSolutionOrder = [
  "traitement-air-comprime",
  "instrumentation",
  "controle-signal",
  "analyse-liquide",
  "energie-electrique",
  "multimetres-calibrateurs",
  "environnement",
  "echantillonnage",
] as const;

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

const homeFeaturedProducts = homeFeaturedProductSlugs
  .map((slug) => getProductBySlug(slug))
  .filter(isDefined);

const homeSolutions = homeSolutionOrder
  .map((slug) => getSolutionBySlug(slug))
  .filter(isDefined);

const expelProduct = getProductBySlug("expel");

function getSolutionSpan(slug: string) {
  switch (slug) {
    case "traitement-air-comprime":
      return "xl:col-span-6";
    case "instrumentation":
      return "xl:col-span-3";
    case "controle-signal":
      return "xl:col-span-3";
    case "echantillonnage":
      return "xl:col-span-4";
    default:
      return "xl:col-span-3";
  }
}

export default function HomePage() {
  return (
    <>
      <StructuredData data={organizationSchema} />

      <section className="section-space overflow-hidden pb-14 pt-8 sm:pt-12">
        <div className="container-site relative">
          <div className="pointer-events-none absolute -left-12 top-8 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(11,74,141,0.14),transparent_70%)] blur-3xl" />
          <div className="pointer-events-none absolute -right-8 top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(236,107,44,0.14),transparent_70%)] blur-3xl" />

          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="relative" delay={0.05}>
              <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-line)] bg-white/74 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--color-blue)] backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[var(--color-signal)]" />
                Partenaire technique industriel à Martigues
              </div>

              <p className="eyebrow mt-8">Maturat Mesure</p>
              <h1 className="mt-4 max-w-3xl font-[var(--font-display)] text-[clamp(3.25rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-[var(--color-ink)]">
                Une lecture plus forte de la mesure industrielle.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[var(--color-muted)]">
                {COMPANY.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/solutions" size="lg">
                  Voir les solutions
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/contact" size="lg" variant="secondary">
                  Demander un devis
                </Button>
              </div>

              <div className="mt-8 rounded-[1.9rem] border border-[var(--color-line)] bg-white/76 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-blue)]">
                      Accès rapide
                    </p>
                    <h2 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                      Que cherchez-vous en premier ?
                    </h2>
                  </div>
                  <div className="icon-chip hidden shrink-0 sm:flex">
                    <ScanSearch className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {homeQuickLinks.map((item) => (
                    <Link
                      className="inline-flex items-center rounded-full border border-[var(--color-line)] bg-white px-4 py-2.5 text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:border-[var(--color-blue)] hover:text-[var(--color-ink)]"
                      href={item.href}
                      key={item.href}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {HOME_METRICS.map((metric) => (
                  <div className="metric-card" key={metric.label}>
                    <p className="text-[1.6rem] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <HeroGraphic />
            </Reveal>
          </div>
        </div>
      </section>

      <Section className="pt-0">
        <Reveal>
          <div className="panel overflow-hidden rounded-[2.1rem]">
            <div className="grid gap-px bg-[var(--color-line)] md:grid-cols-2 xl:grid-cols-5">
              {TRUST_MARKERS.map((marker, index) => (
                <div className="bg-white/82 p-5" key={marker.title}>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-subtle)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-base font-medium tracking-[-0.03em] text-[var(--color-ink)]">
                    {marker.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                    {marker.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <Section id="solutions" tone="soft">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
          <SectionHeading
            description="Une hiérarchie plus lisible pour identifier vite la bonne famille, avec un accent assumé sur l'air comprimé, l'instrumentation et le traitement du signal."
            eyebrow="Panorama"
            title="Huit familles de solutions, organisées avec plus de relief."
          />

          <div className="panel-soft max-w-md rounded-[1.8rem] p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-blue)]">
              Repérage
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              Chaque famille mène vers une page dédiée et les produits clés sont
              accessibles depuis le catalogue.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button href="/solutions" variant="secondary">
                Voir toutes les familles
              </Button>
              <Button href="/produits">Voir les produits</Button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-12">
          {homeSolutions.map((family, index) => {
            const primary = family.slug === "traitement-air-comprime";
            const secondary =
              family.slug === "instrumentation" ||
              family.slug === "controle-signal";

            return (
              <Reveal
                className={getSolutionSpan(family.slug)}
                delay={index * 0.04}
                key={family.slug}
              >
                <Link
                  className={cn(
                    "group relative flex h-full overflow-hidden rounded-[2rem] border p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(15,23,42,0.08)]",
                    primary
                      ? "border-[rgba(236,107,44,0.22)] bg-[linear-gradient(145deg,#0f172a,#12233d)] text-white"
                      : secondary
                        ? "border-[var(--color-line-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(235,243,250,0.92))]"
                        : "border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.82))]",
                  )}
                  href={`/solutions/${family.slug}`}
                >
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0",
                      primary
                        ? "bg-[radial-gradient(circle_at_top_right,rgba(236,107,44,0.22),transparent_26%),radial-gradient(circle_at_left,rgba(11,74,141,0.34),transparent_38%)]"
                        : secondary
                          ? "bg-[radial-gradient(circle_at_top_right,rgba(11,74,141,0.11),transparent_24%),linear-gradient(rgba(11,74,141,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(11,74,141,0.05)_1px,transparent_1px)] [background-size:100%_100%,24px_24px,24px_24px]"
                          : "bg-[radial-gradient(circle_at_top_right,rgba(11,74,141,0.08),transparent_24%)]",
                    )}
                  />

                  <div className="relative flex h-full flex-1 flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={cn(
                          "inline-flex h-12 w-12 items-center justify-center rounded-[1.1rem] border",
                          primary
                            ? "border-white/14 bg-white/8 text-white"
                            : "border-[var(--color-line)] bg-white/82 text-[var(--color-blue)]",
                        )}
                      >
                        <IconMark className="h-5 w-5" icon={family.icon} />
                      </div>
                      <span
                        className={cn(
                          "text-xs uppercase tracking-[0.22em]",
                          primary
                            ? "text-white/58"
                            : "text-[var(--color-subtle)]",
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-8">
                      {primary ? (
                        <span className="inline-flex rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/72">
                          Famille mise en avant
                        </span>
                      ) : null}
                      <h3
                        className={cn(
                          "mt-4 max-w-lg text-[1.65rem] font-semibold tracking-[-0.05em]",
                          primary ? "text-white" : "text-[var(--color-ink)]",
                        )}
                      >
                        {family.name}
                      </h3>
                      <p
                        className={cn(
                          "mt-3 max-w-2xl text-sm leading-7",
                          primary
                            ? "text-white/72"
                            : "text-[var(--color-muted)]",
                        )}
                      >
                        {family.summary}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {family.capabilities
                        .slice(0, primary ? 3 : 2)
                        .map((capability) => (
                          <span
                            className={cn(
                              "rounded-full border px-3 py-1.5 text-[11px] uppercase tracking-[0.18em]",
                              primary
                                ? "border-white/12 bg-white/8 text-white/74"
                                : "border-[var(--color-line)] bg-white/86 text-[var(--color-ink-soft)]",
                            )}
                            key={capability}
                          >
                            {capability}
                          </span>
                        ))}
                    </div>

                    <div className="mt-auto pt-8">
                      <span
                        className={cn(
                          "inline-flex items-center gap-2 text-sm font-medium",
                          primary
                            ? "text-white"
                            : "text-[var(--color-ink)]",
                        )}
                      >
                        Voir la famille
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}

          <Reveal className="xl:col-span-8" delay={0.36}>
            <div className="panel relative overflow-hidden rounded-[2rem] p-6 xl:col-span-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(11,74,141,0.08),transparent_34%),radial-gradient(circle_at_86%_20%,rgba(236,107,44,0.1),transparent_20%)]" />
              <div className="relative grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-blue)]">
                    Lecture catalogue
                  </p>
                  <h3 className="mt-4 text-[clamp(1.9rem,3vw,3rem)] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                    La navigation solution et produit doit fonctionner ensemble.
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                    Les familles servent à cadrer le besoin. Le catalogue permet
                    ensuite d&apos;ouvrir une fiche produit, de vérifier une
                    référence ou de demander un devis sans détour.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white/82 p-5">
                    <Layers3 className="h-5 w-5 text-[var(--color-signal)]" />
                    <p className="mt-4 text-sm font-medium tracking-[-0.03em] text-[var(--color-ink)]">
                      Voir les familles
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                      Pour partir d&apos;un besoin fonctionnel ou d&apos;une application.
                    </p>
                    <div className="mt-5">
                      <Button href="/solutions" variant="secondary">
                        Ouvrir les solutions
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white/82 p-5">
                    <ScanSearch className="h-5 w-5 text-[var(--color-signal)]" />
                    <p className="mt-4 text-sm font-medium tracking-[-0.03em] text-[var(--color-ink)]">
                      Voir les produits
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                      Pour aller directement vers une référence visible.
                    </p>
                    <div className="mt-5">
                      <Button href="/produits">Ouvrir le catalogue</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <p className="eyebrow text-white/55">Offre phare</p>
            <h2 className="mt-4 max-w-xl text-balance text-[clamp(2.3rem,4vw,4.4rem)] font-semibold tracking-[-0.06em] text-white">
              EXPEL devient un vrai marqueur visuel et commercial.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              {EXPEL.summary}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/62">
              {EXPEL.strapline}
            </p>

            <ul className="mt-8 space-y-3">
              {EXPEL.benefits.map((benefit) => (
                <li className="flex items-start gap-3" key={benefit.title}>
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />
                  <div>
                    <p className="font-medium text-white">{benefit.title}</p>
                    <p className="mt-1 text-sm leading-6 text-white/62">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/expel" size="lg">
                Voir la page EXPEL
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" size="lg" variant="dark">
                Échanger sur votre besoin
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2.2rem] border border-white/10 bg-white/6 p-4 sm:p-5">
              <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
                <div className="relative min-h-[360px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(224,232,242,0.84))]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,74,141,0.14),transparent_36%),linear-gradient(rgba(11,74,141,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(11,74,141,0.05)_1px,transparent_1px)] [background-size:100%_100%,26px_26px,26px_26px]" />
                  {expelProduct ? (
                    <Image
                      alt={expelProduct.name}
                      className="object-contain p-8"
                      fill
                      sizes="(min-width: 1024px) 22rem, 72vw"
                      src={expelProduct.imageSrc}
                    />
                  ) : null}
                  <div className="absolute left-4 top-4 rounded-full border border-[var(--color-line)] bg-white/88 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[var(--color-blue)]">
                    99,9999 % liquides
                  </div>
                  <div className="absolute bottom-4 right-4 rounded-full border border-[var(--color-line)] bg-white/88 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[var(--color-blue)]">
                    15 bar(g)
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {EXPEL.specs.map((spec) => (
                    <div
                      className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5"
                      key={spec.label}
                    >
                      <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                        {spec.label}
                      </p>
                      <p className="mt-3 text-[1.9rem] font-semibold tracking-[-0.05em] text-white">
                        {spec.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/60">
                        {spec.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          description="Des références visibles, illustrées et reliées à de vraies fiches produit pour rendre l'offre immédiatement tangible."
          eyebrow="Repères produit"
          title="Des produits qui parlent tout de suite plus clairement."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {homeFeaturedProducts.map((product, index) => (
            <Reveal delay={index * 0.04} key={product.slug}>
              <ProductCard compactImage product={product} showContactCta={false} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/produits" variant="secondary">
              Voir tous les produits
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact">Demander une documentation</Button>
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <SectionHeading
          description="Des repères utiles pour des acheteurs techniques, responsables maintenance, équipes process et décideurs industriels."
          eyebrow="Pourquoi Maturat Mesure"
          title="Une approche conçue pour décider plus vite et avec plus de confiance."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {WHY_MATURAT.map((item, index) => (
            <Reveal delay={index * 0.05} key={item.title}>
              <div className="panel grid h-full gap-5 rounded-[1.85rem] p-6 sm:grid-cols-[auto_1fr] sm:items-start">
                <div className="flex items-center gap-4 sm:block">
                  <div className="icon-chip">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <span className="font-[var(--font-mono)] text-sm uppercase tracking-[0.22em] text-[var(--color-subtle)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-[1.45rem] font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          description="Des contextes d'usage lisibles pour aider à formuler rapidement le bon besoin."
          eyebrow="Applications"
          title="Des contextes d'usage qui parlent à l'ingénierie comme à l'achat."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {APPLICATION_CLUSTERS.map((cluster, index) => (
            <Reveal delay={index * 0.04} key={cluster.title}>
              <div className="panel h-full rounded-[1.75rem] p-5">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-blue)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                  {cluster.title}
                </h3>
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
          <div className="panel grid gap-8 rounded-[2rem] p-6 sm:p-8 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-4 max-w-2xl text-balance text-[clamp(2rem,3.4vw,3.6rem)] font-semibold tracking-[-0.06em] text-[var(--color-ink)]">
                Une demande de devis ou de documentation doit rester simple.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
                Téléphone, e-mails directs et page contact permettent de lancer
                rapidement une demande de devis, de documentation ou d&apos;échange
                technique.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg">
                  Ouvrir la page contact
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href={COMPANY.phoneHref} size="lg" variant="secondary">
                  Appeler maintenant
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white p-5">
                <PhoneCall className="h-5 w-5 text-[var(--color-signal)]" />
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                  Téléphone
                </p>
                <a
                  className="mt-2 block text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]"
                  href={COMPANY.phoneHref}
                >
                  {COMPANY.phoneDisplay}
                </a>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white p-5">
                <MapPin className="h-5 w-5 text-[var(--color-signal)]" />
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                  Adresse
                </p>
                <p className="mt-2 text-base font-medium text-[var(--color-ink)]">
                  {COMPANY.addressLine1}
                </p>
                <p className="text-sm leading-6 text-[var(--color-muted)]">
                  {COMPANY.addressLine2}, {COMPANY.postalCode} {COMPANY.city}
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white p-5 sm:col-span-2">
                <CalendarRange className="h-5 w-5 text-[var(--color-signal)]" />
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                  E-mails directs
                </p>
                <div className="mt-2 flex flex-col gap-1 text-base font-medium text-[var(--color-ink)]">
                  <a href={`mailto:${COMPANY.primaryEmail}`}>{COMPANY.primaryEmail}</a>
                  <a href={`mailto:${COMPANY.secondaryEmail}`}>
                    {COMPANY.secondaryEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
