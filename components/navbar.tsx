"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { navItems } from "@/lib/data";
import { Magnetic } from "@/components/react-bits/magnetic";

export function Navbar() {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 140],
    ["rgba(5, 6, 7, 0)", "rgba(5, 6, 7, 0.72)"],
  );
  const borderColor = useTransform(
    scrollY,
    [0, 140],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.12)"],
  );

  return (
    <motion.header
      className="fixed left-0 top-0 z-40 w-full border-b px-4 py-4 backdrop-blur-xl md:px-8"
      style={{ background, borderColor }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Magnetic>
          <a href="#hero" className="font-display text-sm uppercase tracking-[0.28em] text-white">
            YM
          </a>
        </Magnetic>
        <div className="hidden items-center gap-7 text-xs uppercase tracking-[0.18em] text-white/58 md:flex">
          {navItems.map((item) => (
            <a key={item.href} className="transition-colors hover:text-white" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="inline-flex gap-4">
          <Magnetic>
            <a
              href="https://github.com/yusuf140298" target="_blank" rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 text-xs uppercase tracking-[0.16em] text-white/82 transition-colors hover:border-acid/70 hover:text-acid"
            >
              <AiFillGithub size={18} />
              Github
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://linkedin.com/in/yusuf-maulana1402" target="_blank" rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 text-xs tracking-[0.16em] text-white/82 transition-colors hover:border-acid/70 hover:text-acid"
            >
              <AiFillLinkedin size={18} />
              Linked In
            </a>
          </Magnetic>
        </div>
      </nav>
    </motion.header>
  );
}
