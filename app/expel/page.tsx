import type { Metadata } from "next";
import { EXPEL, COMPANY } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EXPEL — Filtre Air Comprimé",
  description: "EXPEL : filtre à air comprimé industriel. Élimination 99,9999% liquides et particules ≤ 1 µm. 850 l/min, inox 304, sans alimentation, sans consommable. Maturat Mesure.",
};

const SECTORS_EXPEL = [
  { emoji: "🚗", name: "Automobile", desc: "Peinture, soudage, assemblage pneumatique" },
  { emoji: "✈️", name: "Aéronautique", desc: "Outillage pneumatique, maintenance" },
  { emoji: "💊", name: "Pharmaceutique", desc: "Air comprimé médical, clean rooms" },
  { emoji: "🌱", name: "Agroalimentaire", desc: "Normes hygiène, contact alimentaire" },
  { emoji: "⚗️", name: "Chimie", desc: "Environnements corrosifs, process continu" },
];

const FULL_SPECS = [
  { label: "Débit nominal maximum", value: "850 l/min (30 cfm)" },
  { label: "Pression maximale", value: "15 bar(g) / 217 psi(g)" },
  { label: "Température de fonctionnement", value: "0 à +80°C" },
  { label: "Matériau corps & tête", value: "Acier inoxydable 304" },
  { label: "Dimensions", value: "293 mm × 80 mm" },
  { label: "Filtration particules", value: "≤ 1 micron (µm)" },
  { label: "Élimination liquides", value: "99,9999 % (eau + huile)" },
  { label: "Alimentation électrique", value: "Aucune requise" },
  { label: "Consommables", value: "Aucun" },
  { label: "Indicateur de pression", value: "Intégré de série" },
  { label: "Démontabilité", value: "Entièrement démontable" },
  { label: "Garantie", value: "2 ans" },
];

export default function ExpelPage() {
  return (
    <>
      {/* Dark hero */}
      <div className="bg-ink text-white pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-blue/15 to-transparent pointer-events-none" />

        <div className="container-site relative z-10">
          <nav className="flex items-center gap-2 text-xs text-white/30 mb-8">
            <Link href="/" className="hover:text-white/60 transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/solutions" className="hover:text-white/60 transition-colors">Solutions</Link>
            <span>/</span>
            <span className="text-white/60">EXPEL</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange/30 bg-orange/8 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                <span className="text-xs font-bold tracking-widest uppercase text-orange">Produit phare — Air comprimé</span>
              </div>

              <h1 className="text-display text-white mb-6">
                EXPEL<br />
                <span className="text-orange">Le filtre industriel<br />sans compromis</span>
              </h1>

              <p className="text-white/55 text-base leading-relaxed mb-10 max-w-lg">
                {EXPEL.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button href="/contact" size="lg">
                  Demander un devis EXPEL
                  <ArrowRight size={18} />
                </Button>
                <a
                  href="#specifications"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg border border-white/20 text-white hover:bg-white/8 transition-all"
                >
                  Voir les specs
                </a>
              </div>
            </div>

            {/* Key numbers */}
            <div className="grid grid-cols-2 gap-4">
              {EXPEL.specs.map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/8 rounded-2xl p-5">
                  <div className="text-2xl font-extrabold text-orange tracking-tight mb-1">{s.value}</div>
                  <div className="text-xs text-white/40 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <section id="specifications" className="py-20 bg-surface">
        <div className="container-site">
          <p className="eyebrow mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange inline-block" />
            Spécifications techniques
          </p>
          <h2 className="text-heading text-ink mb-12">Caractéristiques complètes</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Specs summary cards */}
            <div className="grid grid-cols-2 gap-4">
              {EXPEL.specs.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl border border-border p-5">
                  <div className="text-xl font-extrabold text-orange tracking-tight mb-1">{s.value}</div>
                  <div className="text-xs text-muted leading-snug">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Full spec table */}
            <div className="bg-white rounded-2xl border border-border p-6">
              <h3 className="font-bold text-ink mb-4">Tableau des caractéristiques</h3>
              <table className="w-full">
                <tbody>
                  {FULL_SPECS.map((s) => (
                    <tr key={s.label} className="border-b border-border last:border-0">
                      <td className="py-3 pr-4 text-sm font-semibold text-ink/70 w-1/2">{s.label}</td>
                      <td className="py-3 text-sm text-ink font-medium">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange inline-block" />
                Avantages clés
              </p>
              <h2 className="text-heading text-ink mb-8">Pourquoi choisir l&apos;EXPEL ?</h2>
              <ul className="flex flex-col gap-6">
                {EXPEL.benefits.map((b) => (
                  <li key={b.title} className="flex items-start gap-4">
                    <CheckCircle2 size={18} className="text-orange mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-ink mb-1">{b.title}</div>
                      <div className="text-sm text-muted leading-relaxed">{b.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange inline-block" />
                Secteurs d&apos;application
              </p>
              <h2 className="text-heading text-ink mb-8">Adapté à votre industrie</h2>
              <div className="flex flex-col gap-3">
                {SECTORS_EXPEL.map((s) => (
                  <div key={s.name} className="flex items-center gap-4 bg-surface rounded-xl border border-border p-4">
                    <span className="text-2xl">{s.emoji}</span>
                    <div>
                      <div className="font-bold text-sm text-ink">{s.name}</div>
                      <div className="text-xs text-muted">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue to-ink py-20 text-white text-center">
        <div className="container-site max-w-xl mx-auto">
          <p className="eyebrow text-white/40 mb-4 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange inline-block" />
            EXPEL — Disponible maintenant
          </p>
          <h2 className="text-display text-white mb-4">Intéressé par l&apos;EXPEL ?</h2>
          <p className="text-white/55 mb-10">
            Nos techniciens vous conseillent sur le dimensionnement adapté à votre installation et vous remettent un devis sous 48h.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" size="lg">
              Demander un devis EXPEL <ArrowRight size={18} />
            </Button>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg border border-white/20 text-white hover:bg-white/8 transition-all"
            >
              <Phone size={16} /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
