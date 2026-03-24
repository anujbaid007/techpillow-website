"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { industries } from "@/data/industries";
import { cn } from "@/lib/utils";

export default function IndustriesTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industries[activeIndex];

  return (
    <section className="py-20 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeading
          subtitle="Industries"
          title="Engineering Industry-Specific Solutions With Innovation"
          description="Deep domain expertise across sectors that matter most to India's digital economy."
          align="center"
        />

        {/* Tab bar */}
        <div className="mt-12 overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-2 min-w-max">
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
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            {/* Left: text content */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-4">
                {active.name}
              </h3>
              <p className="text-muted-foreground mb-6">
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
                className="inline-flex items-center gap-1.5 text-[#FF3E00] font-semibold text-sm hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: placeholder illustration */}
            <div className="flex items-center justify-center">
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-100 flex items-center justify-center">
                <span className="text-6xl opacity-40">
                  {active.icon === "HeartPulse" && "🏥"}
                  {active.icon === "Landmark" && "🏦"}
                  {active.icon === "ShoppingCart" && "🛒"}
                  {active.icon === "GraduationCap" && "🎓"}
                  {active.icon === "Truck" && "🚛"}
                  {active.icon === "Building2" && "🏢"}
                  {active.icon === "UtensilsCrossed" && "🍽️"}
                  {active.icon === "Plane" && "✈️"}
                  {active.icon === "Tv" && "📺"}
                  {active.icon === "Zap" && "⚡"}
                  {active.icon === "Sprout" && "🌱"}
                  {active.icon === "Link" && "🔗"}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
