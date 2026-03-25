"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ShaderBackground } from "@/components/ui/shader-background";

const trustBadges = [
  "Top Rated Agency",
  "Trusted Partner",
  "Certified Team",
  "Award Winning",
  "Top Rated Agency",
  "Trusted Partner",
  "Certified Team",
  "Award Winning",
];

const techIcons = [
  {
    label: "React",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <circle cx="20" cy="20" r="3.5" fill="#61DAFB" />
        <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
        <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 20 20)" />
      </svg>
    ),
  },
  {
    label: "Node.js",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <path d="M20 4L34 12V28L20 36L6 28V12L20 4Z" fill="#339933" opacity="0.15" />
        <path d="M20 4L34 12V28L20 36L6 28V12L20 4Z" stroke="#339933" strokeWidth="1.5" />
        <text x="20" y="24" textAnchor="middle" fill="#339933" fontSize="10" fontWeight="bold">N</text>
      </svg>
    ),
  },
  {
    label: "Python",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <path d="M20 6C14 6 12 9 12 12V16H20V17H9C7 17 5 19 5 22C5 25 7 27 9 27H12V23C12 21 14 19 16 19H24C26 19 28 17 28 15V12C28 9 26 6 20 6Z" fill="#3776AB" opacity="0.8" />
        <path d="M20 34C26 34 28 31 28 28V24H20V23H31C33 23 35 21 35 18C35 15 33 13 31 13H28V17C28 19 26 21 24 21H16C14 21 12 23 12 25V28C12 31 14 34 20 34Z" fill="#FFD43B" opacity="0.8" />
        <circle cx="17" cy="11" r="1.5" fill="white" />
        <circle cx="23" cy="29" r="1.5" fill="white" />
      </svg>
    ),
  },
  {
    label: "Flutter",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <path d="M8 20L20 8H33L21 20L33 32H20L8 20Z" fill="#02569B" opacity="0.2" stroke="#02569B" strokeWidth="1.5" />
        <path d="M14 26L20 20L26 26H14Z" fill="#02569B" opacity="0.6" />
      </svg>
    ),
  },
  {
    label: "AWS",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <path d="M7 22C7 19 9 17 11 17.5C11.5 14 14 12 17 12.5C18 10 20 9 22 9.5C24.5 8 28 10 28 14C30 14 33 16 33 19C33 22 30 24 28 24H12C9.5 24 7 23 7 22Z" fill="#FF9900" opacity="0.2" stroke="#FF9900" strokeWidth="1.5" />
        <path d="M12 28C15 30 19 31 23 30C27 29 30 27 30 27" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Docker",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <rect x="5" y="18" width="30" height="10" rx="2" fill="#2496ED" opacity="0.15" stroke="#2496ED" strokeWidth="1.5" />
        <rect x="8" y="13" width="5" height="5" rx="1" fill="#2496ED" opacity="0.5" />
        <rect x="14" y="13" width="5" height="5" rx="1" fill="#2496ED" opacity="0.5" />
        <rect x="20" y="13" width="5" height="5" rx="1" fill="#2496ED" opacity="0.5" />
        <rect x="14" y="8" width="5" height="5" rx="1" fill="#2496ED" opacity="0.3" />
      </svg>
    ),
  },
  {
    label: "Figma",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <rect x="10" y="6" width="10" height="10" rx="5" fill="#F24E1E" opacity="0.8" />
        <rect x="20" y="6" width="10" height="10" rx="5" fill="#FF7262" opacity="0.8" />
        <rect x="10" y="16" width="10" height="10" rx="2" fill="#A259FF" opacity="0.8" />
        <rect x="10" y="26" width="10" height="10" rx="5" fill="#0ACF83" opacity="0.8" />
        <circle cx="25" cy="21" r="5" fill="#1ABCFE" opacity="0.8" />
      </svg>
    ),
  },
  {
    label: "Kubernetes",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <circle cx="20" cy="20" r="12" fill="#326CE5" opacity="0.15" stroke="#326CE5" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="4" fill="#326CE5" opacity="0.6" />
        <line x1="20" y1="8" x2="20" y2="16" stroke="#326CE5" strokeWidth="1.5" />
        <line x1="20" y1="24" x2="20" y2="32" stroke="#326CE5" strokeWidth="1.5" />
        <line x1="11" y1="11" x2="17" y2="17" stroke="#326CE5" strokeWidth="1.2" />
        <line x1="23" y1="23" x2="29" y2="29" stroke="#326CE5" strokeWidth="1.2" />
      </svg>
    ),
  },
];

const heroWords = ["We", "Build", "Digital", "Products", "That", "Drive", "Real", "Growth"];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden flex flex-col">
      {/* WebGL shader background */}
      <ShaderBackground />

      {/* Main hero content */}
      <div className="relative z-10 flex-1 max-w-[1280px] mx-auto w-full px-6 py-16 lg:py-24 flex items-center">
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

          {/* Right column — tech icon grid (structured layout) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block lg:w-[45%]"
          >
            <div className="relative">
              {/* Structured 3x3 grid with center stat */}
              <div className="grid grid-cols-3 gap-5 max-w-[360px] ml-auto">
                {/* Row 1 */}
                <IconCard icon={techIcons[0]} delay={0} />
                <IconCard icon={techIcons[2]} delay={0.15} />
                <IconCard icon={techIcons[1]} delay={0.3} />

                {/* Row 2 */}
                <IconCard icon={techIcons[3]} delay={0.1} />
                {/* Center: stat card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white/90 backdrop-blur-sm border border-border rounded-2xl shadow-xl p-4 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="font-heading font-bold text-2xl text-[#FF3E00]">120+</div>
                    <div className="text-[10px] text-muted-foreground font-medium leading-tight mt-0.5">Projects<br />Delivered</div>
                  </div>
                </motion.div>
                <IconCard icon={techIcons[5]} delay={0.25} />

                {/* Row 3 */}
                <IconCard icon={techIcons[6]} delay={0.2} />
                <IconCard icon={techIcons[4]} delay={0.35} />
                <IconCard icon={techIcons[7]} delay={0.15} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust badges marquee strip */}
      <div className="relative z-10 border-t border-border/50 py-3 overflow-hidden bg-white/40 backdrop-blur-sm">
        <div
          className="flex gap-4 w-max"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          {trustBadges.map((badge, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-xs text-muted-foreground bg-white/60 whitespace-nowrap"
            >
              <span className="w-1 h-1 rounded-full bg-[#FF3E00]/60" />
              {badge}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

function IconCard({ icon, delay }: { icon: { label: string; svg: React.ReactNode }; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 + delay, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white/80 backdrop-blur-sm border border-border/60 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 aspect-square"
    >
      {icon.svg}
      <span className="text-[11px] font-medium text-muted-foreground">{icon.label}</span>
    </motion.div>
  );
}
