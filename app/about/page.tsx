import type { Metadata } from "next";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/Button";
import {
  COMPANY,
  COMPANY_FACTS,
  SOLUTION_FAMILIES,
  TRUST_MARKERS,
  getAbsoluteUrl,
} from "@/lib/data";
import { ArrowRight, Building2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Expertise et entreprise",
  description:
    "Repères sur Maturat Mesure: positionnement, présence à Martigues, familles de solutions et ancrage dans l'écosystème mesure industriel.",
  alternates: {
    canonical: getAbsoluteUrl("/about"),
  },
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <Reveal>
          <p className="eyebrow">Expertise</p>
          <h1 className="mt-4 max-w-4xl text-balance font-[var(--font-display)] text-[clamp(3rem,6vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-[var(--color-ink)]">
            Une entreprise industrielle présente à Martigues, tournée vers la
            mesure, l’air comprimé et le signal.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
            Cette page réunit les faits vérifiés utiles à la décision:
            création de la société, implantation à Martigues, adhésion au
            Réseau Mesure, présence sur salons professionnels et couverture de
            familles de solutions clairement identifiées.
          </p>
        </Reveal>
      </Section>

      <Section tone="soft">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="panel rounded-[2rem] p-6 sm:p-8">
              <div className="icon-chip">
                <Building2 className="h-5 w-5" />
              </div>
              <h2 className="mt-6 text-[2rem] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                Positionnement
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                {COMPANY.description}
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                Les sources professionnelles décrivent également une activité de
                développement de solutions de mesures et une volonté de travailler
                avec des partenaires orientés innovation et pérennité produit.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="panel rounded-[2rem] p-6 sm:p-8">
              <div className="icon-chip">
                <MapPin className="h-5 w-5" />
              </div>
              <h2 className="mt-6 text-[2rem] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                Ancrage
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                Siège actuel à {COMPANY.city}, dans la zone industrielle Colline
                Sud. Cet ancrage local facilite une relation directe, concrète
                et rassurante pour des acheteurs et équipes techniques.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {TRUST_MARKERS.map((item) => (
                  <span className="tag-pill" key={item.title}>
                    {item.title}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <h2 className="max-w-3xl text-balance text-[clamp(2rem,3vw,3.2rem)] font-semibold tracking-[-0.06em] text-[var(--color-ink)]">
            Des faits utiles pour rassurer avant la prise de contact.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {COMPANY_FACTS.map((fact, index) => (
            <Reveal delay={index * 0.04} key={fact.label}>
              <div className="panel rounded-[1.75rem] p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-subtle)]">
                  {fact.label}
                </p>
                <p className="mt-4 text-[1.45rem] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
                  {fact.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <Reveal>
          <h2 className="max-w-3xl text-balance text-[clamp(2rem,3vw,3.2rem)] font-semibold tracking-[-0.06em] text-[var(--color-ink)]">
            Huit familles qui structurent l’expertise sans diluer le message.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {SOLUTION_FAMILIES.map((family, index) => (
            <Reveal delay={index * 0.04} key={family.slug}>
              <div className="panel h-full rounded-[1.75rem] p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-blue)]">
                  {family.shortName}
                </p>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                  {family.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {family.summary}
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
              <p className="eyebrow">Passer à l’action</p>
              <h2 className="mt-4 text-balance text-[clamp(2rem,3vw,3.1rem)] font-semibold tracking-[-0.06em] text-[var(--color-ink)]">
                Un besoin qualifié mérite un échange rapide.
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
