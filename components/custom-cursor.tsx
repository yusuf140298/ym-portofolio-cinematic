"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const x = useSpring(cursorX, { damping: 28, stiffness: 420, mass: 0.45 });
  const y = useSpring(cursorY, { damping: 28, stiffness: 420, mass: 0.45 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      cursorX.set(event.clientX - 18);
      cursorY.set(event.clientY - 18);
    };
    const enter = (event: Event) => {
      const target = event.target as HTMLElement;
      setActive(Boolean(target.closest("a,button,[data-cursor='magnetic']")));
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-9 w-9 rounded-full border border-white/55 mix-blend-difference md:block"
      animate={{ scale: active ? 1.9 : 1, opacity: active ? 0.72 : 1 }}
      style={{ x, y }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
