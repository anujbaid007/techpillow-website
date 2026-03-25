"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Truck,
  Building2,
  UtensilsCrossed,
  Plane,
  Tv,
  Zap,
  Sprout,
  Link as LinkIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { industries } from "@/data/industries";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Truck,
  Building2,
  UtensilsCrossed,
  Plane,
  Tv,
  Zap,
  Sprout,
  Link: LinkIcon,
};

export default function IndustriesTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industries[activeIndex];
  const ActiveIcon = iconMap[active.icon];

  return (
    <section className="py-20 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeading
          subtitle="Industries"
          title="Engineering Industry-Specific Solutions"
          description="Deep domain expertise across sectors that matter most to India's digital economy."
          align="center"
        />

        {/* Tab bar */}
        <div className="mt-12 overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-2 min-w-max justify-center">
            {industries.map((industry, i) => (
              <button
                key={industry.slug}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                  activeIndex === i
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeIndex === i && (
                  <motion.span
                    layoutId="industry-tab-indicator"
                    className="absolute inset-0 bg-[#0C0C0D] rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{industry.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
          >
            {/* Left: text content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                {ActiveIcon && (
                  <div className="w-12 h-12 rounded-xl bg-[#FF3E00]/10 flex items-center justify-center">
                    <ActiveIcon className="w-6 h-6 text-[#FF3E00]" />
                  </div>
                )}
                <h3 className="text-2xl sm:text-3xl font-bold font-heading">
                  {active.name}
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {active.shortDescription}
              </p>

              {/* Capability pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {active.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-orange-50 text-[#FF3E00] border border-orange-100"
                  >
                    {cap}
                  </span>
                ))}
              </div>

              <Link
                href={`/industries/${active.slug}`}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#0C0C0D] text-white text-sm font-semibold hover:bg-[#FF3E00] transition-colors"
              >
                Explore {active.name}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: challenge cards */}
            <div className="space-y-3">
              {active.challenges.slice(0, 3).map((challenge, i) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="border border-border rounded-xl p-5 bg-white hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#FF3E00]/10 flex items-center justify-center text-xs font-bold text-[#FF3E00]">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-heading font-semibold text-sm mb-1">
                        {challenge.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
