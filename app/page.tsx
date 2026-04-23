import { HeroGraphic } from "@/components/site/HeroGraphic";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { SolutionCard } from "@/components/site/SolutionCard";
import { StructuredData } from "@/components/site/StructuredData";
import { Button } from "@/components/ui/Button";
import {
  APPLICATION_CLUSTERS,
  COMPANY,
  EXPEL,
  FEATURED_PRODUCTS,
  HOME_METRICS,
  SITE_URL,
  SOLUTION_FAMILIES,
  TRUST_MARKERS,
  WHY_MATURAT,
} from "@/lib/data";
import {
  ArrowRight,
  BadgeCheck,
  CalendarRange,
  MapPin,
  PhoneCall,
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

export default function HomePage() {
  return (
    <>
      <StructuredData data={organizationSchema} />

      <section className="section-space overflow-hidden">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="relative" delay={0.05}>
            <p className="eyebrow">Maturat Mesure</p>
            <h1 className="mt-4 max-w-3xl font-[var(--font-display)] text-[clamp(3.2rem,7vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-[var(--color-ink)]">
              Mesure industrielle, traitement d’air comprimé et signal.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[var(--color-muted)]">
              {COMPANY.description} Une lecture claire des familles de solutions,
              un focus sur EXPEL et un accès direct au bon interlocuteur pour
              accélérer les échanges techniques.
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

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {HOME_METRICS.map((metric) => (
                <div className="metric-card" key={metric.label}>
                  <p className="text-[1.55rem] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
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
      </section>

      <Section>
        <Reveal>
          <div className="panel grid gap-4 rounded-[2rem] p-5 md:grid-cols-2 xl:grid-cols-5">
            {TRUST_MARKERS.map((marker, index) => (
              <div
                className="rounded-[1.4rem] border border-[var(--color-line)] bg-white/70 p-4"
                key={marker.title}
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-subtle)]">
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
        </Reveal>
      </Section>

      <Section id="solutions" tone="soft">
        <SectionHeading
          description="Une vue d’ensemble claire pour identifier rapidement la bonne famille, du traitement d’air comprimé à l’analyse liquide et à l’environnement."
          eyebrow="Panorama"
          title="Huit familles de solutions pour aller droit au sujet."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {SOLUTION_FAMILIES.map((family, index) => (
            <Reveal delay={index * 0.04} key={family.slug}>
              <SolutionCard family={family} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <p className="eyebrow text-white/55">Offre phare</p>
            <h2 className="mt-4 max-w-xl text-balance text-[clamp(2.3rem,4vw,4.4rem)] font-semibold tracking-[-0.06em] text-white">
              EXPEL prend la place qu’un produit différenciant mérite.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              {EXPEL.summary}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/62">
              {EXPEL.strapline}
            </p>

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
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          description="Des repères concrets issus de la vitrine produit L'Usine Nouvelle, pour donner de la matière sans transformer la page d'accueil en catalogue."
          eyebrow="Repères produit"
          title="Des exemples de références qui rendent l'offre tangible."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {FEATURED_PRODUCTS.map((product, index) => (
            <Reveal delay={index * 0.04} key={product.name}>
              <article className="panel flex h-full flex-col rounded-[1.75rem] p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-blue)]">
                  {product.family}
                </p>
                <h3 className="mt-5 text-[1.5rem] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {product.description}
                </p>
                <div className="mt-6">
                  <Button href={product.href} variant="secondary">
                    Ouvrir la page
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-8 flex justify-start">
            <Button href="/produits" variant="secondary">
              Voir tous les produits
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <SectionHeading
          description="Des repères utiles pour des acheteurs techniques, responsables maintenance, équipes process et décideurs industriels."
          eyebrow="Pourquoi Maturat Mesure"
          title="Une approche conçue pour décider plus vite et mieux."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {WHY_MATURAT.map((item, index) => (
            <Reveal delay={index * 0.05} key={item.title}>
              <div className="panel h-full rounded-[1.75rem] p-6">
                <div className="icon-chip">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          description="Des contextes d’application lisibles pour aider à formuler rapidement le bon besoin."
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
                rapidement une demande de devis, de documentation ou d’échange
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
