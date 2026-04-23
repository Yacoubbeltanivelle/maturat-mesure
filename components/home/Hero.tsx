"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

function MeasurementCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;
    let W = 0, H = 0;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Grid
      ctx.strokeStyle = "rgba(74,127,193,0.10)";
      ctx.lineWidth = 1;
      const step = 48;
      for (let x = 0; x <= W; x += step) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y <= H; y += step) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Major grid
      ctx.strokeStyle = "rgba(74,127,193,0.18)";
      for (let x = 0; x <= W; x += step * 4) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y <= H; y += step * 4) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Signal trace 1 (orange)
      const yBase1 = H * 0.52;
      const amp1 = H * 0.10;
      ctx.save();
      ctx.strokeStyle = "rgba(245,93,0,0.65)";
      ctx.lineWidth = 2;
      ctx.shadowColor = "rgba(245,93,0,0.4)";
      ctx.shadowBlur = 10;
      ctx.beginPath();
      for (let x = 0; x <= W; x += 2) {
        const p = x / W;
        const env = Math.sin(p * Math.PI);
        const y = yBase1 + amp1 * Math.sin(p * Math.PI * 7 - t * 0.8) * env
                         + amp1 * 0.3 * Math.sin(p * Math.PI * 14 + 1) * env;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      // Signal trace 2 (blue, slower)
      const yBase2 = H * 0.38;
      const amp2 = H * 0.06;
      ctx.save();
      ctx.strokeStyle = "rgba(74,127,193,0.35)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let x = 0; x <= W; x += 2) {
        const p = x / W;
        const env = Math.sin(p * Math.PI * 0.8 + 0.3);
        const y = yBase2 + amp2 * Math.sin(p * Math.PI * 5 - t * 0.5) * env;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      // Cursor dot on orange trace
      const cp = ((t * 0.25) % (Math.PI * 2)) / (Math.PI * 2);
      const cx = cp * W;
      const pEn = Math.sin(cp * Math.PI);
      const cy = yBase1 + amp1 * Math.sin(cp * Math.PI * 7 - t * 0.8) * pEn;
      ctx.save();
      ctx.fillStyle = "rgba(245,93,0,0.9)";
      ctx.shadowColor = "rgba(245,93,0,0.6)";
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fill();
      // Vertical cursor line
      ctx.strokeStyle = "rgba(245,93,0,0.18)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 5]);
      ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, H); ctx.stroke();
      ctx.restore();

      t += 0.016;
      animId = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    draw();

    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-50"
      aria-hidden="true"
    />
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ink" aria-labelledby="hero-title">
      <MeasurementCanvas />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/10 to-ink/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-blue/15 to-transparent pointer-events-none" />

      <div className="container-site relative z-10 pt-24 pb-24">
        <motion.p
          className="eyebrow text-white/50 mb-8 flex items-center gap-2"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <motion.span
            className="inline-block w-1.5 h-1.5 rounded-full bg-orange"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          Instrumentation Industrielle — Martigues, France
        </motion.p>

        <motion.h1
          id="hero-title"
          className="text-hero text-white max-w-4xl mb-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          La mesure,{" "}
          <span className="gradient-orange italic">précise.</span>
          <br />
          Partout.
        </motion.h1>

        <motion.p
          className="text-base lg:text-lg text-white/60 max-w-xl leading-relaxed mb-12"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Maturat Mesure distribue des solutions d'instrumentation, de contrôle
          et de traitement d'air comprimé pour l'industrie exigeante.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <Button href="/solutions" size="lg">
            Découvrir nos solutions
            <ArrowRight size={18} />
          </Button>
          <Button
            href="/contact"
            size="lg"
            variant="secondary"
            className="border-white/20 text-white hover:bg-white/10 hover:border-white/40"
          >
            Demande de devis
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-white/30">
            Défiler
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={18} className="text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
