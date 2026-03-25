"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { caseStudies } from "@/data/case-studies";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "All", industry: "all" },
  { label: "eCommerce", industry: "ecommerce" },
  { label: "Education", industry: "education" },
  { label: "Media", industry: "entertainment-media" },
  { label: "AgriTech", industry: "agritech" },
  { label: "Blockchain", industry: "blockchain-web3" },
];

export default function CaseStudiesTabs() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? caseStudies
      : caseStudies.filter((cs) => cs.industry === activeTab);

  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeading
          subtitle="Case Studies"
          title="Innovation in Action — Our Recent Work"
          description="Real results from real projects. See how we've helped businesses across industries."
          align="center"
        />

        {/* Tab bar */}
        <div className="mt-12 overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-2 min-w-max justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.industry}
                onClick={() => setActiveTab(tab.industry)}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                  activeTab === tab.industry
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeTab === tab.industry && (
                  <motion.span
                    layoutId="case-study-tab-indicator"
                    className="absolute inset-0 bg-[#FF3E00] rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((cs, i) => (
              <ScrollReveal key={cs.slug} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  {/* Project image */}
                  <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={cs.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    {/* Industry pill */}
                    <span className="inline-block w-fit px-3 py-1 text-xs font-medium rounded-full bg-orange-50 text-[#FF3E00] border border-orange-100 mb-3">
                      {cs.industryTag}
                    </span>

                    <h3 className="text-lg font-bold font-heading mb-2">
                      {cs.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {cs.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex gap-6 mb-4">
                      {cs.metrics.slice(0, 2).map((metric) => (
                        <div key={metric.label}>
                          <div className="text-xl font-bold font-heading text-[#FF3E00]">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="mt-auto inline-flex items-center gap-1.5 text-[#FF3E00] font-semibold text-sm hover:gap-3 transition-all"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
