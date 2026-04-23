"use client";

import { STATS } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="bg-blue" ref={ref}>
      <div className="container-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="py-10 px-6 text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-1.5">
                {stat.value}
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase text-white/45">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
