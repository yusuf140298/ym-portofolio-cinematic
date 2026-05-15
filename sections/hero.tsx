"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { Magnetic } from "@/components/react-bits/magnetic";
import { SplitText } from "@/components/react-bits/split-text";

export function Hero() {
  return (
    <section id="hero" className="section-shell grid min-h-screen items-end overflow-hidden pb-10 pt-28">
      <div className="content-grid">
        <motion.div
          className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.045] px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/70 backdrop-blur-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-acid shadow-glow" />
          Available for selected launches
        </motion.div>

        <h1 className="max-w-6xl font-display text-[clamp(4.2rem,14vw,12.4rem)] font-medium leading-[0.78] tracking-[-0.02em] text-white">
          <SplitText text="Cinematic" delay={0.3} />
          <br />
          <SplitText text="Interfaces" delay={0.56} className="text-white/72" />
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_0.72fr] md:items-end">
          <motion.p
            className="max-w-2xl text-balance text-lg leading-8 text-white/64 md:text-2xl md:leading-9"
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.95, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          >
            I build immersive digital stages for products, studios, and founders who want the web
            to feel physical, precise, and alive.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 md:justify-end"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 1.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <Magnetic>
              <a
                href="#projects"
                className="inline-flex h-14 items-center gap-3 rounded-full bg-white px-6 text-sm font-semibold uppercase tracking-[0.16em] text-ink"
              >
                <Play size={16} fill="currentColor" />
                View work
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#about"
                className="inline-flex h-14 items-center gap-3 rounded-full border border-white/16 bg-white/[0.055] px-6 text-sm uppercase tracking-[0.16em] text-white/82 backdrop-blur-xl"
              >
                Scroll
                <ArrowDown size={16} />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-4"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {["12 launches", "8 awards", "48% faster", "3D native"].map((stat) => (
            <div key={stat} className="bg-ink/58 px-5 py-4 backdrop-blur-xl">
              <p className="font-display text-2xl text-white md:text-3xl">{stat}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
