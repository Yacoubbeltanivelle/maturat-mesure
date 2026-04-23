"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { Shield, Package, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FEATURES = [
  {
    icon: Shield,
    title: "Solutions durables & fiables",
    desc: "Des produits sélectionnés pour leur robustesse. L'EXPEL fonctionne sans consommable ni alimentation électrique — conçu pour durer.",
  },
  {
    icon: Package,
    title: "Gamme complète",
    desc: "8 familles de produits couvrant la mesure, le contrôle, l'énergie et l'analyse. Un interlocuteur unique pour tous vos besoins d'instrumentation.",
  },
  {
    icon: Users,
    title: "Proximité & réactivité",
    desc: "Basé à Martigues, au cœur du tissu industriel de Provence. Réponse technique sous 48h et accompagnement de la sélection à la mise en service.",
  },
];

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section variant="white" id="pourquoi">
      <div className="container-site">
        <SectionHeader
          eyebrow="Pourquoi nous choisir"
          title="L'expertise industrielle à votre service"
        />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              className="group p-8 rounded-2xl border border-border bg-white hover:border-orange/30 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.55 }}
            >
              <div className="w-11 h-11 rounded-xl bg-surface flex items-center justify-center mb-6 group-hover:bg-orange/10 transition-colors shadow-sm">
                <f.icon size={20} className="text-orange" />
              </div>
              <h3 className="font-bold text-ink mb-3">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
