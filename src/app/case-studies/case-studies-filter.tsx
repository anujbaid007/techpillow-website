"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
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

export default function CaseStudiesFilter() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? caseStudies
      : caseStudies.filter((cs) => cs.industry === activeTab);

  return (
    <>
      {/* Tab bar */}
      <div className="overflow-x-auto scrollbar-hide -mx-6 px-6 mb-10">
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
                  layoutId="cs-page-tab-indicator"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group flex flex-col h-full border rounded-2xl overflow-hidden hover:border-[#FF3E00]/40 hover:shadow-lg transition-all duration-300"
            >
              {/* Placeholder image */}
              <div className="aspect-[16/10] bg-gradient-to-br from-orange-50 to-gray-100 flex items-center justify-center">
                <span className="text-2xl font-heading font-bold text-muted-foreground/20">
                  {cs.name}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block w-fit px-3 py-1 text-xs font-medium rounded-full bg-orange-50 text-[#FF3E00] border border-orange-100 mb-3">
                  {cs.industryTag}
                </span>

                <h3 className="text-lg font-bold font-heading mb-2">
                  {cs.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
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

                <div className="flex items-center text-sm font-medium text-[#FF3E00] gap-1 group-hover:gap-2 transition-all">
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
