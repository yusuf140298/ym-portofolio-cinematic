"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/motion";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="content-grid">
        <SectionHeading
          kicker="01 / About"
          title="A studio-minded engineer working at the edge of interface, motion, and atmosphere."
          copy="The work blends product clarity with cinematic pacing: fast, accessible interfaces that still carry a sense of wonder."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
        >
          <motion.div variants={fadeUp} className="glass rounded-lg p-6 md:p-8">
            <p className="font-display text-4xl leading-none text-white md:text-6xl">09+</p>
            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-white/45">Years shaping digital products</p>
          </motion.div>
          <motion.div variants={fadeUp} className="glass rounded-lg p-6 md:p-8">
            <p className="text-lg leading-8 text-white/70 md:text-xl md:leading-9">
              I partner from concept through production, translating ambiguous ideas into durable
              systems: interaction models, reusable components, design tokens, motion languages,
              and high-performance WebGL scenes.
            </p>
            <div className="mt-8 grid gap-3 text-sm uppercase tracking-[0.18em] text-white/48 md:grid-cols-3">
              <span>Strategy</span>
              <span>Frontend</span>
              <span>Motion</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
