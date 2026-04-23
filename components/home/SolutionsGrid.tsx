"use client";

import { SOLUTIONS } from "@/lib/data";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { ArrowRight, Wind, Gauge, Sliders, Zap, MonitorDot, Droplets, Pipette, Activity } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ICONS: Record<string, React.ReactNode> = {
  wind: <Wind size={26} />,
  gauge: <Gauge size={26} />,
  sliders: <Sliders size={26} />,
  zap: <Zap size={26} />,
  "monitor-dot": <MonitorDot size={26} />,
  droplets: <Droplets size={26} />,
  pipette: <Pipette size={26} />,
  activity: <Activity size={26} />,
};

export function SolutionsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section variant="surface" id="solutions">
      <div className="container-site">
        <SectionHeader
          eyebrow="Nos domaines"
          title="8 familles de solutions industrielles"
          description="De la mesure de pression à l'analyse environnementale — Maturat Mesure couvre l'ensemble de la chaîne d'instrumentation industrielle."
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SOLUTIONS.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <Link
                href={`/solutions#${s.id}`}
                className="group flex flex-col h-full bg-white rounded-2xl border border-border p-6 transition-all duration-300 hover:border-orange/40 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-pale flex items-center justify-center text-blue mb-5 group-hover:bg-orange/10 group-hover:text-orange transition-all duration-300">
                  {ICONS[s.icon]}
                </div>

                <h3 className="font-bold text-sm text-ink mb-2 leading-snug">{s.name}</h3>
                <p className="text-xs text-muted leading-relaxed flex-1 mb-4">{s.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {s.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="blue" className="text-[0.6rem]">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-orange mt-auto">
                  Voir les produits
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
