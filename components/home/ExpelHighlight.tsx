"use client";

import { EXPEL } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function ExpelSVG() {
  return (
    <svg viewBox="0 0 280 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[220px]">
      {/* Top port */}
      <rect x="110" y="0" width="60" height="18" rx="5" fill="#374151" />
      <rect x="115" y="8" width="50" height="12" rx="3" fill="#1F2937" />
      <text x="140" y="34" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="system-ui" fontWeight="600" letterSpacing="0.1em">ENTRÉE</text>

      {/* Top cap */}
      <rect x="60" y="22" width="160" height="36" rx="10" fill="#1B3A6B" />

      {/* Main body */}
      <rect x="70" y="58" width="140" height="270" rx="14" fill="#1A2236" stroke="rgba(74,127,193,0.3)" strokeWidth="1.5" />

      {/* Inox shine lines */}
      <rect x="70" y="58" width="140" height="5" rx="2" fill="rgba(255,255,255,0.05)" />
      <rect x="70" y="110" width="140" height="1.5" fill="rgba(255,255,255,0.03)" />
      <rect x="70" y="180" width="140" height="1.5" fill="rgba(255,255,255,0.03)" />
      <rect x="70" y="270" width="140" height="1.5" fill="rgba(255,255,255,0.03)" />

      {/* Pressure gauge */}
      <circle cx="140" cy="155" r="44" fill="#0D1321" stroke="rgba(74,127,193,0.4)" strokeWidth="1.5" />
      <circle cx="140" cy="155" r="34" fill="#111827" stroke="rgba(74,127,193,0.2)" strokeWidth="1" />
      {/* Gauge arc background */}
      <path d="M114 172 A32 32 0 0 1 166 172" stroke="rgba(74,127,193,0.25)" strokeWidth="5" strokeLinecap="round" />
      {/* Gauge arc fill */}
      <path d="M114 172 A32 32 0 0 1 158 127" stroke="#F55D00" strokeWidth="5" strokeLinecap="round" style={{ filter: "drop-shadow(0 0 5px rgba(245,93,0,0.5))" }} />
      {/* Tick marks */}
      {[[-30, -28], [0, -34], [30, -28], [-21, -33], [21, -33]].map(([dx, dy], idx) => (
        <line key={idx} x1={140 + dx * 0.9} y1={155 + dy * 0.9} x2={140 + dx} y2={155 + dy} stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
      ))}
      {/* Needle */}
      <line x1="140" y1="155" x2="158" y2="127" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
      <circle cx="140" cy="155" r="4" fill="#1B3A6B" stroke="white" strokeWidth="1.5" />
      <circle cx="140" cy="155" r="2" fill="#F55D00" />
      {/* BAR label */}
      <text x="140" y="180" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7" fontFamily="system-ui" fontWeight="700" letterSpacing="0.12em">15 BAR MAX</text>

      {/* Filter window */}
      <rect x="90" y="225" width="100" height="80" rx="8" fill="rgba(74,127,193,0.06)" stroke="rgba(74,127,193,0.25)" strokeWidth="1" />
      <text x="140" y="244" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="7" fontFamily="system-ui" fontWeight="700" letterSpacing="0.1em">FILTRE 1 µm</text>
      {[250, 260, 270, 280, 290].map((y) => (
        <line key={y} x1="100" y1={y} x2="180" y2={y} stroke="rgba(74,127,193,0.28)" strokeWidth="1" />
      ))}
      {/* Caught particles */}
      {[[118, 255], [145, 263], [165, 272], [130, 282], [155, 291], [112, 293]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.2" fill={`rgba(245,93,0,${0.35 + i * 0.02})`} />
      ))}

      {/* Bottom cap */}
      <rect x="60" y="328" width="160" height="36" rx="10" fill="#1B3A6B" />
      <rect x="115" y="356" width="50" height="12" rx="3" fill="#1F2937" />
      <rect x="110" y="364" width="60" height="16" rx="5" fill="#374151" />
      <text x="140" y="392" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="system-ui" fontWeight="600" letterSpacing="0.1em">SORTIE PROPRE</text>

      {/* EXPEL watermark */}
      <text x="140" y="125" textAnchor="middle" fill="rgba(255,255,255,0.04)" fontSize="32" fontFamily="system-ui" fontWeight="900" letterSpacing="0.06em">EXPEL</text>

      {/* Animated particles in */}
      <circle cx="133" cy="14" r="2" fill="rgba(245,93,0,0.7)">
        <animate attributeName="cy" values="0;18" dur="1.1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0" dur="1.1s" repeatCount="indefinite" />
      </circle>
      <circle cx="148" cy="8" r="1.5" fill="rgba(245,93,0,0.55)">
        <animate attributeName="cy" values="-6;14" dur="1.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.55;0" dur="1.4s" repeatCount="indefinite" />
      </circle>

      {/* Animated particles out (clean, blue) */}
      <circle cx="136" cy="375" r="1.8" fill="rgba(74,127,193,0.85)">
        <animate attributeName="cy" values="375;400" dur="1.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.85;0" dur="1.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="148" cy="382" r="1.4" fill="rgba(74,127,193,0.7)">
        <animate attributeName="cy" values="382;407" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export function ExpelHighlight() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-ink relative overflow-hidden py-24 lg:py-32" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-blue/12 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-60 pointer-events-none" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange" />
              <span className="eyebrow text-orange/80">Produit phare</span>
            </motion.div>

            <motion.h2
              className="text-display text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              EXPEL<br />
              <span className="gradient-orange">Sans compromis.</span>
            </motion.h2>

            <motion.p
              className="text-white/55 text-base leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {EXPEL.description}
            </motion.p>

            {/* Specs grid */}
            <motion.div
              className="grid grid-cols-2 gap-3 mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {EXPEL.specs.map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/8 rounded-xl p-4">
                  <div className="text-xl font-extrabold text-orange tracking-tight mb-0.5">
                    {s.value}
                  </div>
                  <div className="text-xs text-white/40 leading-snug">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Benefits */}
            <motion.ul
              className="flex flex-col gap-3 mb-10"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {EXPEL.benefits.map((b) => (
                <li key={b.title} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-orange mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-white">{b.title} — </span>
                    <span className="text-sm text-white/50">{b.desc}</span>
                  </div>
                </li>
              ))}
            </motion.ul>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <Button href="/expel" size="lg">
                Voir le produit complet
                <ArrowRight size={18} />
              </Button>
              <Button
                href="/contact"
                size="lg"
                variant="secondary"
                className="border-white/20 text-white hover:bg-white/8 hover:border-white/40"
              >
                Demander un devis
              </Button>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <ExpelSVG />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
