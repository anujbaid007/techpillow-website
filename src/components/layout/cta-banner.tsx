"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  headline: string;
  subtext: string;
  ctaText: string;
  ctaHref: string;
  variant?: "dark" | "orange";
}

export default function CTABanner({
  headline,
  subtext,
  ctaText,
  ctaHref,
  variant = "dark",
}: CTABannerProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "w-full py-20",
        isDark ? "bg-[#0C0C0D]" : "bg-[#FF3E00]"
      )}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2
            className={cn(
              "font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4",
              "text-white"
            )}
          >
            {headline}
          </h2>
          <p
            className={cn(
              "text-base sm:text-lg max-w-2xl mx-auto mb-8",
              isDark ? "text-gray-400" : "text-white/85"
            )}
          >
            {subtext}
          </p>
          <Link
            href={ctaHref}
            className={cn(
              "inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-base transition-all",
              isDark
                ? "bg-[#FF3E00] text-white hover:bg-[#e63600] shadow-lg shadow-orange-500/25"
                : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#FF3E00]"
            )}
          >
            {ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
