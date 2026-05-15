"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/motion";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ kicker, title, copy }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-12 grid gap-5 md:grid-cols-[0.42fr_1fr] md:items-end"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12%" }}
    >
      <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.32em] text-acid/80">
        {kicker}
      </motion.p>
      <motion.div variants={fadeUp}>
        <h2 className="max-w-3xl font-display text-4xl leading-[0.95] text-white md:text-6xl">
          {title}
        </h2>
        {copy ? (
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/58 md:text-lg">{copy}</p>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
