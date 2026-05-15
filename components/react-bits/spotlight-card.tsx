"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  useMousePosition();

  return (
    <motion.div
      className={cn(
        "glass group relative overflow-hidden rounded-lg p-6",
        "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        className,
      )}
      style={{
        background:
          "radial-gradient(420px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(205,252,82,.12), transparent 38%), linear-gradient(135deg, rgba(255,255,255,.09), rgba(255,255,255,.035))",
      }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
