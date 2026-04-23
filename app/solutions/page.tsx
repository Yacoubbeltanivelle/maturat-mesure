import type { Metadata } from "next";
import { SOLUTIONS } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { CtaSection } from "@/components/home/CtaSection";
import { Wind, Gauge, Sliders, Zap, MonitorDot, Droplets, Pipette, Activity, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions",
  description: "8 familles de solutions d'instrumentation industrielle — traitement d'air comprimé, instrumentation, contrôle, énergie, analyse et environnement.",
};

const ICONS: Record<string, React.ReactNode> = {
  wind: <Wind size={28} />, gauge: <Gauge size={28} />, sliders: <Sliders size={28} />,
  zap: <Zap size={28} />, "monitor-dot": <MonitorDot size={28} />, droplets: <Droplets size={28} />,
  pipette: <Pipette size={28} />, activity: <Activity size={28} />,
};

export default function SolutionsPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-surface border-b border-border pt-28 pb-16">
        <div className="container-site">
          <nav className="flex items-center gap-2 text-xs text-muted mb-6" aria-label="Fil d'ariane">
            <Link href="/" className="hover:text-orange transition-colors">Accueil</Link>
            <span>/</span>
            <span>Solutions</span>
          </nav>
          <p className="eyebrow mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange inline-block" />
            Catalogue complet
          </p>
          <h1 className="text-display text-ink max-w-2xl mb-5">
            8 familles de solutions<br />pour l&apos;industrie
          </h1>
          <p className="text-base text-muted max-w-xl leading-relaxed">
            De la mesure de pression à la surveillance environnementale, une gamme complète d&apos;équipements d&apos;instrumentation industrielle.
          </p>
        </div>
      </div>

      {/* Solution families */}
      <div>
        {SOLUTIONS.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`py-16 lg:py-20 border-b border-border ${i % 2 === 1 ? "bg-surface" : "bg-white"}`}
          >
            <div className="container-site">
              {/* Header */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-pale flex items-center justify-center text-blue">
                      {ICONS[s.icon]}
                    </div>
                    <div className="text-xs font-bold tracking-widest uppercase text-muted">
                      Famille {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <h2 className="text-heading text-ink mb-4">{s.name}</h2>
                  <p className="text-muted leading-relaxed">{s.description}</p>
                  {s.id === "air-comprime" && (
                    <Link
                      href="/expel"
                      className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-orange hover:text-orange-dark transition-colors"
                    >
                      Voir EXPEL — Produit phare <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 content-start pt-2">
                  {s.tags.map((tag) => (
                    <Badge key={tag} variant="blue">{tag}</Badge>
                  ))}
                </div>
              </div>

              {/* Products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {s.products.map((p) => (
                  <div
                    key={p.name}
                    className="bg-white rounded-xl border border-border p-5 hover:border-orange/30 hover:shadow-md transition-all duration-200"
                  >
                    <h3 className="font-bold text-sm text-ink mb-1.5">
                      {p.name}
                      {p.name === "Filtre EXPEL" && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-[0.6rem] font-bold bg-orange text-white">Phare</span>
                      )}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <CtaSection
        eyebrow="Un besoin spécifique ?"
        title="Nous trouverons la solution adaptée."
        description="Notre équipe technique analyse votre cahier des charges et vous propose le produit le mieux adapté."
      />
    </>
  );
}
