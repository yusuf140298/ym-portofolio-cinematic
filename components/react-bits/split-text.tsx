"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function SplitText({ text, className, delay = 0 }: SplitTextProps) {
  const words = text.split(" ");

  return (
    <span className={cn("inline-flex flex-wrap overflow-hidden", className)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="mr-[0.24em] inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", rotate: 3 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{
              duration: 0.86,
              delay: delay + index * 0.055,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
