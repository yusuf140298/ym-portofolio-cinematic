"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { fadeUp, staggerContainer } from "@/animations/motion";
import { Magnetic } from "@/components/react-bits/magnetic";

export function Contact() {
  return (
    <section id="contact" className="section-shell min-h-[88vh]">
      <motion.div
        className="content-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
      >
        <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.32em] text-acid/80">
          05 / Contact
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mt-6 max-w-5xl font-display text-[clamp(3.5rem,11vw,10rem)] leading-[0.86] text-white"
        >
          Let&apos;s make the launch feel inevitable.
        </motion.h2>
        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
          <Magnetic>
            <a
              href="mailto:yusuf.tamsis62@gmail.com"
              className="inline-flex h-16 items-center gap-3 rounded-full bg-acid px-7 text-sm font-semibold uppercase tracking-[0.16em] text-ink"
            >
              <Mail size={18} />
              yusuf.tamsis62@gmail.com
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#hero"
              className="inline-flex h-16 items-center gap-3 rounded-full border border-white/16 bg-white/[0.055] px-7 text-sm uppercase tracking-[0.16em] text-white/82 backdrop-blur-xl"
            >
              Back to top
              <ArrowUpRight size={18} />
            </a>
          </Magnetic>
        </motion.div>
        <motion.footer
          variants={fadeUp}
          className="mt-24 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm uppercase tracking-[0.18em] text-white/38 md:flex-row md:items-center md:justify-between"
        >
          <span>Creative engineering / Motion / Fullstack</span>
          <span>2024</span>
        </motion.footer>
      </motion.div>
    </section>
  );
}
