import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";
import { CtaSection } from "@/components/home/CtaSection";
import { Shield, Zap, Users, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos",
  description: "Maturat Mesure SARL — Spécialiste en mesure industrielle et traitement du signal, basé à Martigues. Depuis 2015, au service de l'industrie provençale.",
};

const VALUES = [
  { icon: Shield, title: "Fiabilité", desc: "Des produits sélectionnés pour leur robustesse et leur longévité. Chaque référence est choisie pour performer durablement en environnement industriel." },
  { icon: Zap, title: "Innovation", desc: "Développement de solutions à forte valeur ajoutée, comme l'EXPEL, notre filtre d'air comprimé breveté qui redéfinit les standards de filtration industrielle." },
  { icon: Users, title: "Proximité", desc: "Un interlocuteur technique disponible et réactif. Nous accompagnons nos clients de la sélection produit à la mise en service." },
];

const EVENTS = [
  { name: "Mesures Solutions Expo 2026", desc: "Salon international de la mesure et de l'instrumentation" },
  { name: "SEPEM Martigues", desc: "Salon des équipements, process et maintenance" },
  { name: "Réseau Mesure", desc: "Adhérent actif du réseau professionnel de la mesure" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-surface border-b border-border pt-28 pb-16">
        <div className="container-site">
          <nav className="flex items-center gap-2 text-xs text-muted mb-6">
            <Link href="/" className="hover:text-orange transition-colors">Accueil</Link>
            <span>/</span>
            <span>À propos</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange inline-block" />
                Maturat Mesure SARL — Martigues
              </p>
              <h1 className="text-display text-ink mb-5">
                L&apos;instrumentation industrielle au cœur de l&apos;industrie
              </h1>
              <p className="text-base text-muted leading-relaxed max-w-lg">
                Maturat Mesure est une SARL spécialisée dans la mesure industrielle et le traitement du signal, basée à Martigues, au cœur de l&apos;industrie provençale.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2015", label: "Fondée" },
                { value: "8", label: "Familles produit" },
                { value: "APE 46.69B", label: "Code activité" },
                { value: "PACA", label: "Région" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-2xl border border-border p-5 text-center">
                  <div className="text-xl font-extrabold text-orange tracking-tight mb-1">{s.value}</div>
                  <div className="text-xs text-muted font-semibold tracking-widest uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission + Values */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange inline-block" />
                Notre mission
              </p>
              <h2 className="text-heading text-ink mb-6">Des solutions fiables pour chaque défi de mesure</h2>
              <div className="space-y-5 text-muted leading-relaxed">
                <p>Maturat Mesure accompagne les professionnels de l&apos;industrie dans la sélection, l&apos;intégration et le déploiement de solutions de mesure adaptées à leurs contraintes spécifiques.</p>
                <p>Notre expertise couvre l&apos;ensemble de la chaîne de mesure industrielle : de la pression au pH, du contrôle électrique à l&apos;analyse environnementale, en passant par notre solution brevetée de traitement d&apos;air comprimé EXPEL.</p>
                <p>Nous privilégions des alliances solides avec des partenaires combinant fiabilité et innovation, pour vous proposer des produits durables qui répondent aux exigences professionnelles les plus élevées.</p>
              </div>
            </div>

            <div id="valeurs">
              <p className="eyebrow mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange inline-block" />
                Nos valeurs
              </p>
              <div className="flex flex-col gap-4">
                {VALUES.map((v) => (
                  <div key={v.title} className="flex gap-4 p-5 bg-surface rounded-xl border border-border">
                    <div className="w-9 h-9 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
                      <v.icon size={16} className="text-orange" />
                    </div>
                    <div>
                      <div className="font-bold text-ink mb-1">{v.title}</div>
                      <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network presence */}
      <section className="py-20 bg-blue text-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow text-white/40 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange inline-block" />
                Présence professionnelle
              </p>
              <h2 className="text-heading text-white mb-5">Un acteur reconnu du réseau industriel</h2>
              <p className="text-white/60 leading-relaxed">
                Maturat Mesure est membre actif du <strong className="text-white">Réseau Mesure</strong> et participe régulièrement aux grands rendez-vous de l&apos;instrumentation industrielle en France.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {EVENTS.map((e) => (
                <div key={e.name} className="bg-white/6 border border-white/10 rounded-xl p-5">
                  <div className="font-bold text-white mb-1">{e.name}</div>
                  <div className="text-sm text-white/50">{e.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-surface">
        <div className="container-site">
          <p className="eyebrow text-center mb-4 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange inline-block" />
            Où nous trouver
          </p>
          <h2 className="text-heading text-ink text-center mb-12">Martigues, Bouches-du-Rhône</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-border p-8">
              <h3 className="font-bold text-ink text-lg mb-6">Coordonnées</h3>
              <div className="flex flex-col gap-5">
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 bg-orange/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-ink mb-0.5">Adresse</div>
                    <div className="text-sm text-muted leading-relaxed">{COMPANY.address}<br />{COMPANY.city}</div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-9 h-9 bg-orange/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-ink mb-0.5">Téléphone</div>
                    <a href={COMPANY.phoneHref} className="text-sm text-muted hover:text-orange transition-colors">{COMPANY.phone}</a>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-9 h-9 bg-orange/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-ink mb-0.5">Email</div>
                    <a href={`mailto:${COMPANY.email}`} className="text-sm text-muted hover:text-orange transition-colors">{COMPANY.email}</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-border/30 rounded-2xl flex flex-col items-center justify-center gap-4 p-10 min-h-[240px]">
              <MapPin size={36} className="text-border" />
              <p className="text-sm text-muted text-center">ZI Colline Sud, 13500 Martigues</p>
              <a
                href="https://maps.google.com/?q=1+rue+Barthelemy+Thimonnier+13500+Martigues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange text-white text-sm font-semibold rounded-lg hover:bg-orange-dark transition-colors"
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Travaillons ensemble"
        title="Un projet d'instrumentation ?"
        description="Contactez notre équipe technique pour étudier vos besoins et trouver la solution adaptée à votre application."
      />
    </>
  );
}
