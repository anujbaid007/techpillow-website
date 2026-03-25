"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, MoveRight } from "lucide-react";
import { industries } from "@/data/industries";
import { cn } from "@/lib/utils";

/* Map each industry slug to an Unsplash image */
const industryImages: Record<string, string> = {
  healthcare:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format",
  fintech:
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&auto=format",
  ecommerce:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format",
  education:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80&auto=format",
  logistics:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format",
  "real-estate":
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format",
  "food-beverage":
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format",
  "travel-hospitality":
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80&auto=format",
  "entertainment-media":
    "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80&auto=format",
  "on-demand":
    "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80&auto=format",
  agritech:
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80&auto=format",
  "blockchain-web3":
    "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80&auto=format",
};

const AUTO_SLIDE_INTERVAL = 4000;
const total = industries.length;

/** Calculate the shortest signed distance between two indices on a circular track */
function circularOffset(from: number, to: number, size: number): number {
  const raw = ((to - from) % size + size) % size;
  return raw > size / 2 ? raw - size : raw;
}

export default function IndustriesTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % total) + total) % total);
  }, []);

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // Auto-slide
  useEffect(() => {
    if (isPaused) {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
      return;
    }
    autoSlideRef.current = setInterval(next, AUTO_SLIDE_INTERVAL);
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [isPaused, next]);

  const manualNav = (dir: "prev" | "next") => {
    dir === "prev" ? prev() : next();
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
  };

  return (
    <section className="py-20 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-orange-50 text-[#FF3E00] border border-orange-100 mb-4">
            Industries
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            Engineering Industry-Specific Excellence With Innovation
          </h2>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="mt-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Cards container */}
        <div className="relative h-[520px] sm:h-[540px] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {industries.map((industry, index) => {
              const offset = circularOffset(activeIndex, index, total);
              const absOffset = Math.abs(offset);
              const isCenter = offset === 0;
              const isVisible = absOffset <= 3;

              // Position calculations — tighter gaps so 5+ cards fit on screen
              const spacing = [0, 280, 500, 680]; // px from center per offset level
              const xOffset = offset === 0 ? 0 : (offset > 0 ? 1 : -1) * spacing[Math.min(absOffset, 3)];

              const width = isCenter
                ? "min(400px, 75vw)"
                : absOffset === 1
                  ? "min(300px, 55vw)"
                  : absOffset === 2
                    ? "min(240px, 45vw)"
                    : "min(200px, 38vw)";

              const height = isCenter
                ? 490
                : absOffset === 1
                  ? 410
                  : absOffset === 2
                    ? 350
                    : 300;

              return (
                <div
                  key={industry.slug}
                  className="absolute"
                  style={{
                    width,
                    height,
                    transform: `translateX(${xOffset}px) scale(${isVisible ? 1 : 0.8})`,
                    zIndex: isVisible ? 10 - absOffset : 0,
                    opacity: isVisible ? 1 : 0,
                    filter: isCenter ? "none" : `brightness(${absOffset === 1 ? 0.75 : absOffset === 2 ? 0.6 : 0.5})`,
                    transition: "all 600ms cubic-bezier(0.4, 0, 0.2, 1)",
                    willChange: "transform, opacity, width, height, filter",
                    pointerEvents: isVisible ? "auto" : "none",
                  }}
                >
                  <Link
                    href={`/industries/${industry.slug}`}
                    className={cn(
                      "group block relative w-full h-full rounded-2xl overflow-hidden",
                      isCenter ? "shadow-2xl shadow-black/20" : "shadow-lg"
                    )}
                    onClick={(e) => {
                      if (!isCenter) {
                        e.preventDefault();
                        goTo(index);
                      }
                    }}
                  >
                    {/* Background image */}
                    <Image
                      src={industryImages[industry.slug] ?? ""}
                      alt={industry.name}
                      fill
                      className={cn(
                        "object-cover transition-transform duration-700",
                        isCenter && "group-hover:scale-105"
                      )}
                      sizes="420px"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

                    {/* Content */}
                    <div className="absolute inset-0 p-5 sm:p-6 flex flex-col">
                      {/* Top row */}
                      <div className="flex items-start justify-between">
                        <h3
                          className={cn(
                            "font-heading font-bold text-white leading-tight drop-shadow-md",
                            isCenter
                              ? "text-2xl sm:text-3xl max-w-[260px]"
                              : "text-lg sm:text-xl max-w-[200px]"
                          )}
                          style={{
                            transition: "font-size 600ms cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                        >
                          {industry.name}
                        </h3>
                        <div
                          className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0C0C0D] transition-colors flex-shrink-0"
                          style={{
                            opacity: isCenter ? 1 : 0,
                            transition: "opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Capability pills */}
                      <div
                        className="mt-auto flex flex-col gap-2.5"
                        style={{
                          opacity: isCenter ? 1 : 0,
                          transform: isCenter ? "translateY(0)" : "translateY(16px)",
                          transition:
                            "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 100ms, transform 500ms cubic-bezier(0.4, 0, 0.2, 1) 100ms",
                        }}
                      >
                        {industry.capabilities.slice(0, 4).map((cap) => (
                          <span
                            key={cap}
                            className="inline-block w-fit px-4 py-2 text-sm font-medium text-white rounded-full border border-white/25 backdrop-blur-md bg-white/15"
                          >
                            {cap}
                          </span>
                        ))}
                        <div className="overflow-hidden h-0 group-hover:h-11 transition-all duration-300 ease-out">
                          <span className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-[#FF3E00] text-white shadow-lg">
                            Explore
                            <MoveRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation controls */}
        <div className="max-w-[1280px] mx-auto px-6 mt-6 flex flex-col items-center gap-5">
          {/* Dots */}
          <div className="flex gap-2">
            {industries.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  goTo(i);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 6000);
                }}
                className={cn(
                  "rounded-full transition-all duration-300",
                  i === activeIndex
                    ? "w-8 h-3 bg-[#0C0C0D]"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                )}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => manualNav("prev")}
              className="w-11 h-11 rounded-full border-2 border-[#0C0C0D] text-[#0C0C0D] hover:bg-[#0C0C0D] hover:text-white flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => manualNav("next")}
              className="w-11 h-11 rounded-full border-2 border-[#0C0C0D] text-[#0C0C0D] hover:bg-[#0C0C0D] hover:text-white flex items-center justify-center transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
