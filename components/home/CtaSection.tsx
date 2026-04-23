"use client";

import { Button } from "@/components/ui/Button";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface CtaSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function CtaSection({
  eyebrow = "Prêt à démarrer ?",
  title = "Un projet de mesure ?",
  description = "Nos techniciens étudient votre cahier des charges et vous proposent la solution adaptée sous 48h.",
}: CtaSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-gradient-to-br from-blue to-ink py-24 lg:py-32 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-blue-mid/20 to-transparent pointer-events-none" />

      <div className="container-site relative z-10 max-w-2xl mx-auto" ref={ref}>
        <motion.p
          className="eyebrow text-white/40 mb-5 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange inline-block" />
          {eyebrow}
        </motion.p>
        <motion.h2
          className="text-display text-white mb-5"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-white/55 text-base mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <Button href="/contact" size="lg">
            Demander un devis
            <ArrowRight size={18} />
          </Button>
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-semibold rounded-lg border border-white/20 text-white hover:bg-white/8 hover:border-white/40 transition-all duration-200"
          >
            <Phone size={17} />
            {COMPANY.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
