"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      {subtitle && (
        <span className="inline-block border rounded-lg px-4 py-1 text-sm text-muted-foreground mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-heading">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-muted-foreground mt-4 max-w-2xl text-base sm:text-lg",
            align === "center" && "text-center"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
