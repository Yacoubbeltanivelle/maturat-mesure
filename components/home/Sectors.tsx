"use client";

import { SECTORS } from "@/lib/data";
import { Section, SectionHeader } from "@/components/ui/Section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Sectors() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section variant="surface" id="secteurs">
      <div className="container-site">
        <SectionHeader
          eyebrow="Secteurs d'activité"
          title="Nos solutions s'adaptent à votre industrie"
        />
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {SECTORS.map((s, i) => (
            <motion.div
              key={s.name}
              className="bg-white rounded-2xl border border-border p-6 text-center hover:border-orange/30 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <div className="text-3xl mb-4">{s.emoji}</div>
              <div className="font-bold text-sm text-ink mb-1.5 leading-snug">{s.name}</div>
              <div className="text-xs text-muted leading-relaxed">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
