"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { fadeUp, staggerContainer } from "@/animations/motion";
import { Magnetic } from "@/components/react-bits/magnetic";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section id="projects" className="section-shell">
      <div className="content-grid">
        <SectionHeading
          kicker="03 / Projects"
          title="Selected work with spatial depth, speed, and strong product intent."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="space-y-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15%" }}
          >
            {projects.map((item, index) => (
              <motion.button
                variants={fadeUp}
                key={item.title}
                onClick={() => setActive(index)}
                className="group flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/[0.045] p-5 text-left backdrop-blur-xl transition-colors hover:border-white/25"
              >
                <span>
                  <span className="block font-display text-2xl text-white">{item.title}</span>
                  <span className="mt-1 block text-sm uppercase tracking-[0.18em] text-white/42">
                    {item.type} / {item.year}
                  </span>
                </span>
                <span className={index === active ? "text-acid" : "text-white/35"}>
                  <ArrowUpRight />
                </span>
              </motion.button>
            ))}
          </motion.div>

          <div className="glass relative min-h-[30rem] overflow-hidden rounded-lg p-6 md:p-8">
            <div className="absolute inset-0 opacity-80">
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/15 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-ember/12 blur-3xl" />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={project.title}
                className="relative flex min-h-[26rem] flex-col justify-between"
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-acid/75">{project.type}</p>
                  <h3 className="mt-5 max-w-xl font-display text-5xl leading-none text-white md:text-7xl">
                    {project.title}
                  </h3>
                </div>
                <div>
                  <p className="max-w-xl text-lg leading-8 text-white/66">{project.impact}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/12 bg-black/18 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/58"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8">
          <Magnetic>
            <a
              href="mailto:hello@arivale.studio?subject=Project%20Inquiry"
              className="inline-flex h-13 items-center gap-2 rounded-full border border-white/15 bg-white/[0.055] px-5 text-sm uppercase tracking-[0.16em] text-white/82 backdrop-blur-xl hover:text-acid"
            >
              Request case study
              <ArrowUpRight size={16} />
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
