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
          title="A fullstack engineer working at the intersection of scalable systems, modern interfaces, and immersive digital experiences."
          copy="The work blends scalable backend systems with immersive frontend experiences — creating fast, accessible applications with a refined sense of motion and interaction."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
        >
          <motion.div variants={fadeUp} className="glass rounded-lg p-6 md:p-8">
            <p className="font-display text-4xl leading-none text-white md:text-6xl">02+</p>
            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-white/45">Years building modern web experiences</p>
          </motion.div>
          <motion.div variants={fadeUp} className="glass rounded-lg p-6 md:p-8">
            <p className="text-lg leading-8 text-white/70 md:text-xl md:leading-9">
              I build fullstack applications from concept to deployment, transforming ideas into scalable systems through modern architectures, reusable components, API design, and immersive user experiences.
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
