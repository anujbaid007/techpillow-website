"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: ScrollRevealProps) {
  const initial = {
    opacity: 0,
    ...(direction === "up" && { y: 30 }),
    ...(direction === "left" && { x: -30 }),
    ...(direction === "right" && { x: 30 }),
  };

  const animate = {
    opacity: 1,
    ...(direction === "up" && { y: 0 }),
    ...(direction === "left" && { x: 0 }),
    ...(direction === "right" && { x: 0 }),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
