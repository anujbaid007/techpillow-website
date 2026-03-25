"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ShaderBackground } from "@/components/ui/shader-background";
import { TechGlobe } from "@/components/ui/tech-globe";

const trustBadges = [
  { text: "Top Rated Agency", icon: "star" },
  { text: "Trusted Partner", icon: "handshake" },
  { text: "Certified Team", icon: "badge" },
  { text: "Award Winning", icon: "trophy" },
  { text: "On-Time Delivery", icon: "clock" },
  { text: "24/7 Support", icon: "headset" },
  { text: "Agile Process", icon: "bolt" },
  { text: "NDA Protected", icon: "shield" },
  { text: "Scalable Solutions", icon: "rocket" },
  { text: "Transparent Pricing", icon: "check" },
];

const badgeIcons: Record<string, React.ReactNode> = {
  star: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0 fill-[#FF3E00]">
      <path d="M8 0l2.35 4.76L16 5.53l-4 3.9 .94 5.5L8 12.1l-5 2.83.95-5.5-4-3.9 5.65-.77z" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0 fill-[#FF3E00]">
      <path d="M8.5 2.5L5.8 5.2c-.3.3-.3.7 0 1l.5.5c.3.3.7.3 1 0l2-2L12 7.4l-3.2 3.2c-.3.3-.3.7 0 1l.5.5c.3.3.7.3 1 0L14 8.4V12h2V6l-3-3.5H8.5zM7.5 13.5L10.2 10.8c.3-.3.3-.7 0-1l-.5-.5c-.3-.3-.7-.3-1 0l-2 2L4 8.6l3.2-3.2c.3-.3.3-.7 0-1l-.5-.5c-.3-.3-.7-.3-1 0L2 7.6V4H0v6l3 3.5h4.5z" />
    </svg>
  ),
  badge: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0 fill-[#FF3E00]">
      <path d="M8 0a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5V16l2-1.5L10 16V7.5c1.2-.7 2-2 2-3.5a4 4 0 0 0-4-4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0 fill-[#FF3E00]">
      <path d="M4 1v1H1v3c0 1.7 1.3 3 3 3h.2C5 9.2 6.4 10 8 10s3-.8 3.8-2H12c1.7 0 3-1.3 3-3V2h-3V1H4zM2 3h1v2.3C2.4 5 2 4.6 2 4V3zm12 0v1c0 .6-.4 1-1 1h0V3h1zM5 12v1h6v-1l1 0v2H4v-2l1 0z" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0 fill-[#FF3E00]">
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm.5-9H7v5l4.3 2.5.7-1.2-3.5-2V5z" />
    </svg>
  ),
  headset: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0 fill-[#FF3E00]">
      <path d="M8 1a7 7 0 0 0-7 7v3a2 2 0 0 0 2 2h1V8H3c0-2.8 2.2-5 5-5s5 2.2 5 5h-1v5h1c.4 0 .8-.1 1.1-.4C14 13.4 13 14 12 14h-2v1h2a3 3 0 0 0 3-3V8a7 7 0 0 0-7-7z" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0 fill-[#FF3E00]">
      <path d="M9 0L3 9h4v7l6-9H9V0z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0 fill-[#FF3E00]">
      <path d="M8 0L1 3v4c0 4.4 3 8.5 7 10 4-1.5 7-5.6 7-10V3L8 0zm0 2l5 2.2V7c0 3.5-2.3 6.7-5 8-2.7-1.3-5-4.5-5-8V4.2L8 2z" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0 fill-[#FF3E00]">
      <path d="M14.5 1.5c-1.8 0-4.3.8-6.2 2.7L7 5.5 4.5 5l-2 2 3 1-1.5 1.5L2 9l-1 1 3 3 1-1-.5-2 1.5-1.5 1 3 2-2-.5-2.5 1.3-1.3c1.9-1.9 2.7-4.4 2.7-6.2l1-1.5-1.5 1z" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0 fill-[#FF3E00]">
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm3.3-8.7l-4 4-1.6-1.6-1.4 1.4 3 3 5.4-5.4-1.4-1.4z" />
    </svg>
  ),
};


const heroWords = ["We", "Build", "Digital", "Products", "That", "Drive", "Real", "Growth"];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden flex flex-col -mt-20">
      {/* WebGL shader background */}
      <ShaderBackground />

      {/* Main hero content */}
      <div className="relative z-10 flex-1 max-w-[1280px] mx-auto w-full px-6 pt-32 pb-16 lg:pt-36 lg:pb-24 flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left column — text */}
          <div className="lg:w-[55%] flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 text-sm text-muted-foreground bg-white/80 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3E00] inline-block animate-pulse" />
                India&apos;s Trusted Tech Partner
              </span>
            </motion.div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-foreground leading-[1.08]">
              {heroWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block mr-[0.22em]"
                >
                  {word === "Real" ? (
                    <span className="text-[#FF3E00]">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Custom software, AI solutions, and mobile apps — engineered to scale.
              Trusted by 120+ businesses across India and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#FF3E00] text-white font-semibold text-sm hover:bg-[#e63600] transition-colors shadow-lg shadow-orange-500/25"
              >
                Book a Free Strategy Call
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-white/80 backdrop-blur-sm transition-colors"
              >
                Explore Our Work
              </Link>
            </motion.div>
          </div>

          {/* Right column — interactive globe */}
          <div className="hidden lg:block lg:w-[45%]">
            <TechGlobe />
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="relative z-10">
        {/* Glass bar */}
        <div className="relative overflow-hidden bg-[#0C0C0D]/[0.04] backdrop-blur-md border-t border-b border-black/[0.06]">
          <div className="overflow-hidden mask-marquee py-3">
            <div
              className="flex gap-3 w-max"
              style={{ animation: "marquee 18s linear infinite" }}
            >
              {[...trustBadges, ...trustBadges].map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap bg-[#FF3E00]/[0.07] text-[#FF3E00] border border-[#FF3E00]/10"
                >
                  {badgeIcons[badge.icon]}
                  {badge.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .mask-marquee {
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
      `}</style>
    </section>
  );
}

