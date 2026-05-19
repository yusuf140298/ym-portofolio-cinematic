"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/motion";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="content-grid">
        <SectionHeading
          kicker="02 / Skills"
          title="Fullstack systems shaped with precision, performance, and a strong sense of identity."
          copy="Every layer is designed to move with intention: typography, responsive layout, scroll state, hover physics, and render performance."
        />

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div variants={fadeUp} key={skill.label}>
                <SpotlightCard className="min-h-48">
                  <Icon className="text-acid" size={28} />
                  <h3 className="mt-8 font-display text-2xl text-white">{skill.label}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/52">
                    {skill.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
