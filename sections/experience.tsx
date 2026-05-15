"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/motion";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="content-grid">
        <SectionHeading
          kicker="04 / Experience"
          title="From expressive prototypes to production systems that keep their polish."
        />

        <motion.div
          className="divide-y divide-white/10 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] backdrop-blur-xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
        >
          {experience.map((item) => (
            <motion.article
              variants={fadeUp}
              key={`${item.role}-${item.company}`}
              className="grid gap-4 p-6 md:grid-cols-[0.7fr_1fr_1.4fr] md:p-8"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-acid/70">{item.date}</p>
              <div>
                <h3 className="font-display text-2xl text-white">{item.role}</h3>
                <p className="mt-1 text-white/42">{item.company}</p>
              </div>
              <p className="text-base leading-7 text-white/62">{item.summary}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
