import type { Metadata } from "next";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY, SITE_URL, getAbsoluteUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Informations légales et pratiques relatives au site vitrine Maturat Mesure.",
  alternates: {
    canonical: getAbsoluteUrl("/mentions-legales"),
  },
};

export default function LegalPage() {
  return (
    <Section>
      <Reveal>
        <p className="eyebrow">Mentions légales</p>
        <h1 className="mt-4 max-w-3xl text-balance font-[var(--font-display)] text-[clamp(3rem,6vw,5rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-[var(--color-ink)]">
          Informations légales du site.
        </h1>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <article className="panel rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
              Éditeur
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              {COMPANY.legalName}
              <br />
              SIREN {COMPANY.siren}
              <br />
              SIRET {COMPANY.siret}
              <br />
              Code APE {COMPANY.ape}
              <br />
              Gérant: {COMPANY.manager}
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              {COMPANY.addressLine2}
              <br />
              {COMPANY.addressLine1}
              <br />
              {COMPANY.postalCode} {COMPANY.city}, {COMPANY.country}
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              Téléphone: <a href={COMPANY.phoneHref}>{COMPANY.phoneDisplay}</a>
              <br />
              E-mail:{" "}
              <a href={`mailto:${COMPANY.primaryEmail}`}>{COMPANY.primaryEmail}</a>
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="panel rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
              Hébergement
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              Site statique déployé via GitHub Pages.
              <br />
              GitHub, Inc.
              <br />
              88 Colin P Kelly Jr St
              <br />
              San Francisco, CA 94107, USA
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              URL du site: <a href={SITE_URL}>{SITE_URL}</a>
            </p>
          </article>
        </Reveal>

        <Reveal>
          <article className="panel rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
              Propriété intellectuelle
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              Les textes, éléments graphiques et composants du site sont
              destinés à la présentation de l’activité de Maturat Mesure. Toute
              reproduction ou réutilisation sans autorisation préalable doit
              être validée par l’éditeur du site.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="panel rounded-[1.75rem] p-6">
            <h2 className="text-2xl font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
              Données personnelles
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              Le site ne comporte pas de collecte serveur native. La page contact
              prépare un e-mail via le client de messagerie de l’utilisateur,
              sans stockage côté site.
            </p>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
