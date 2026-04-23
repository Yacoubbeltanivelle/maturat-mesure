import type { Metadata } from "next";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { COMPANY, getAbsoluteUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact et demande de devis",
  description:
    "Coordonnées, e-mails directs et formulaire de pré-remplissage pour lancer une demande de devis ou de documentation.",
  alternates: {
    canonical: getAbsoluteUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <>
      <Section>
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-4xl text-balance font-[var(--font-display)] text-[clamp(3rem,6vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-[var(--color-ink)]">
            Un devis, une documentation, un besoin technique: on raccourcit le
            chemin.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
            Téléphone, e-mails directs et message préparé pour formuler
            rapidement une demande de devis, de documentation ou d’échange
            technique.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="tag-pill" href={COMPANY.phoneHref}>
              {COMPANY.phoneDisplay}
            </a>
            <a className="tag-pill" href={`mailto:${COMPANY.primaryEmail}`}>
              {COMPANY.primaryEmail}
            </a>
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <ContactForm />
      </Section>
    </>
  );
}
