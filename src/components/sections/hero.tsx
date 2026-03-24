"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

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
    color: "#61DAFB",
    bg: "#E8F9FD",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="20" cy="20" r="3.5" fill="#61DAFB" />
        <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.8" fill="none" />
        <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(120 20 20)" />
      </svg>
    ),
    style: { top: "8%", left: "5%", animationDuration: "4s", animationDelay: "0s" },
  },
  {
    label: "Node.js",
    color: "#339933",
    bg: "#E6F4E6",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M20 4L34 12V28L20 36L6 28V12L20 4Z" fill="#339933" opacity="0.15" />
        <path d="M20 4L34 12V28L20 36L6 28V12L20 4Z" stroke="#339933" strokeWidth="1.8" />
        <text x="20" y="24" textAnchor="middle" fill="#339933" fontSize="10" fontWeight="bold">N</text>
      </svg>
    ),
    style: { top: "22%", right: "8%", animationDuration: "3.5s", animationDelay: "0.5s" },
  },
  {
    label: "Flutter",
    color: "#02569B",
    bg: "#E0EAF5",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M8 20L20 8H33L21 20L33 32H20L8 20Z" fill="#02569B" opacity="0.2" stroke="#02569B" strokeWidth="1.5" />
        <path d="M14 26L20 20L26 26H14Z" fill="#02569B" opacity="0.6" />
      </svg>
    ),
    style: { top: "50%", left: "2%", animationDuration: "5s", animationDelay: "1s" },
  },
  {
    label: "AWS",
    color: "#FF9900",
    bg: "#FFF4E0",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M7 22C7 19 9 17 11 17.5C11.5 14 14 12 17 12.5C18 10 20 9 22 9.5C24.5 8 28 10 28 14C30 14 33 16 33 19C33 22 30 24 28 24H12C9.5 24 7 23 7 22Z" fill="#FF9900" opacity="0.2" stroke="#FF9900" strokeWidth="1.5" />
        <path d="M12 28C15 30 19 31 23 30C27 29 30 27 30 27" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M28 25L30 27L28 29" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    style: { top: "65%", right: "5%", animationDuration: "4.5s", animationDelay: "1.5s" },
  },
  {
    label: "Python",
    color: "#3776AB",
    bg: "#E6EEF5",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M20 6C14 6 12 9 12 12V16H20V17H9C7 17 5 19 5 22C5 25 7 27 9 27H12V23C12 21 14 19 16 19H24C26 19 28 17 28 15V12C28 9 26 6 20 6Z" fill="#3776AB" opacity="0.8" />
        <path d="M20 34C26 34 28 31 28 28V24H20V23H31C33 23 35 21 35 18C35 15 33 13 31 13H28V17C28 19 26 21 24 21H16C14 21 12 23 12 25V28C12 31 14 34 20 34Z" fill="#FFD43B" opacity="0.8" />
        <circle cx="17" cy="11" r="1.5" fill="white" />
        <circle cx="23" cy="29" r="1.5" fill="white" />
      </svg>
    ),
    style: { top: "15%", left: "35%", animationDuration: "3.8s", animationDelay: "0.8s" },
  },
  {
    label: "Docker",
    color: "#2496ED",
    bg: "#E3F2FD",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect x="5" y="18" width="30" height="10" rx="2" fill="#2496ED" opacity="0.15" stroke="#2496ED" strokeWidth="1.5" />
        <rect x="8" y="13" width="5" height="5" rx="1" fill="#2496ED" opacity="0.5" />
        <rect x="14" y="13" width="5" height="5" rx="1" fill="#2496ED" opacity="0.5" />
        <rect x="20" y="13" width="5" height="5" rx="1" fill="#2496ED" opacity="0.5" />
        <rect x="14" y="8" width="5" height="5" rx="1" fill="#2496ED" opacity="0.3" />
        <path d="M32 22C34 20 37 20 37 22C37 24 35 25 32 25" stroke="#2496ED" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    style: { top: "40%", right: "15%", animationDuration: "4.2s", animationDelay: "0.3s" },
  },
  {
    label: "Figma",
    color: "#F24E1E",
    bg: "#FDE8E4",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect x="10" y="6" width="10" height="10" rx="5" fill="#F24E1E" opacity="0.8" />
        <rect x="20" y="6" width="10" height="10" rx="5" fill="#FF7262" opacity="0.8" />
        <rect x="10" y="16" width="10" height="10" rx="2" fill="#A259FF" opacity="0.8" />
        <rect x="10" y="26" width="10" height="10" rx="5" fill="#0ACF83" opacity="0.8" />
        <circle cx="25" cy="21" r="5" fill="#1ABCFE" opacity="0.8" />
      </svg>
    ),
    style: { top: "75%", left: "20%", animationDuration: "5.5s", animationDelay: "2s" },
  },
  {
    label: "Kubernetes",
    color: "#326CE5",
    bg: "#E8EEFB",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="20" cy="20" r="12" fill="#326CE5" opacity="0.15" stroke="#326CE5" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="4" fill="#326CE5" opacity="0.6" />
        <line x1="20" y1="8" x2="20" y2="16" stroke="#326CE5" strokeWidth="1.5" />
        <line x1="20" y1="24" x2="20" y2="32" stroke="#326CE5" strokeWidth="1.5" />
        <line x1="8" y1="20" x2="16" y2="20" stroke="#326CE5" strokeWidth="1.5" />
        <line x1="24" y1="20" x2="32" y2="20" stroke="#326CE5" strokeWidth="1.5" />
        <line x1="11" y1="11" x2="17" y2="17" stroke="#326CE5" strokeWidth="1.5" />
        <line x1="23" y1="23" x2="29" y2="29" stroke="#326CE5" strokeWidth="1.5" />
      </svg>
    ),
    style: { top: "82%", right: "25%", animationDuration: "4.8s", animationDelay: "1.2s" },
  },
];

const heroWords = ["We", "Build", "Digital", "Products", "That", "Drive", "Real", "Growth"];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden flex flex-col">
      {/* Animated gradient mesh background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 30%, rgba(255,62,0,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 70%, rgba(255,150,50,0.05) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 60% 10%, rgba(255,200,100,0.04) 0%, transparent 50%),
            radial-gradient(ellipse 70% 60% at 10% 80%, rgba(255,100,0,0.04) 0%, transparent 55%),
            #FFFFFF
          `,
          animation: "gradientShift 12s ease-in-out infinite alternate",
        }}
      />

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background:
              radial-gradient(ellipse 80% 60% at 20% 30%, rgba(255,62,0,0.06) 0%, transparent 60%),
              radial-gradient(ellipse 60% 50% at 80% 70%, rgba(255,150,50,0.05) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 60% 10%, rgba(255,200,100,0.04) 0%, transparent 50%),
              radial-gradient(ellipse 70% 60% at 10% 80%, rgba(255,100,0,0.04) 0%, transparent 55%),
              #FFFFFF;
          }
          50% {
            background:
              radial-gradient(ellipse 70% 70% at 30% 50%, rgba(255,62,0,0.07) 0%, transparent 60%),
              radial-gradient(ellipse 80% 40% at 70% 20%, rgba(255,150,50,0.05) 0%, transparent 55%),
              radial-gradient(ellipse 60% 50% at 40% 80%, rgba(255,200,100,0.05) 0%, transparent 50%),
              radial-gradient(ellipse 50% 70% at 90% 50%, rgba(255,100,0,0.04) 0%, transparent 55%),
              #FFFFFF;
          }
          100% {
            background:
              radial-gradient(ellipse 90% 50% at 10% 60%, rgba(255,62,0,0.05) 0%, transparent 60%),
              radial-gradient(ellipse 50% 60% at 85% 40%, rgba(255,150,50,0.06) 0%, transparent 55%),
              radial-gradient(ellipse 70% 40% at 50% 20%, rgba(255,200,100,0.04) 0%, transparent 50%),
              radial-gradient(ellipse 80% 50% at 20% 90%, rgba(255,100,0,0.05) 0%, transparent 55%),
              #FFFFFF;
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Main hero content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Left column */}
          <div className="lg:w-3/5 flex flex-col gap-6">
            {/* Subtitle pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 text-sm text-muted-foreground bg-white/80 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block" />
                India&apos;s Trusted Tech Partner
              </span>
            </motion.div>

            {/* H1 with word stagger */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]">
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

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Custom software, AI solutions, and mobile apps — engineered to scale.
              Trusted by 120+ businesses across India and beyond.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#FF3E00] text-white font-semibold text-sm hover:bg-[#e63600] transition-colors shadow-lg shadow-orange-500/25"
              >
                Book a Free Strategy Call
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-muted transition-colors"
              >
                Explore Our Work
              </Link>
            </motion.div>
          </div>

          {/* Right column — floating tech icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex lg:w-2/5 relative h-[480px]"
          >
            {techIcons.map((icon) => (
              <div
                key={icon.label}
                className="absolute bg-white shadow-lg border border-border rounded-xl p-3 flex flex-col items-center gap-1.5"
                style={{
                  ...icon.style,
                  animation: `float ${icon.style.animationDuration} ease-in-out infinite`,
                  animationDelay: icon.style.animationDelay,
                }}
              >
                {icon.svg}
                <span className="text-[10px] font-medium text-muted-foreground">{icon.label}</span>
              </div>
            ))}

            {/* Decorative center element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-2xl bg-white border border-border shadow-xl flex items-center justify-center">
              <div className="text-center">
                <div className="font-heading font-bold text-xl text-[#FF3E00]">120+</div>
                <div className="text-[10px] text-muted-foreground font-medium mt-0.5">Projects</div>
                <div className="text-[10px] text-muted-foreground">Delivered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust badges marquee strip */}
      <div className="border-t border-border py-3 overflow-hidden bg-white/60 backdrop-blur-sm">
        <div
          className="flex gap-4 w-max"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          {trustBadges.map((badge, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-xs text-muted-foreground bg-muted/50 whitespace-nowrap"
            >
              <span className="w-1 h-1 rounded-full bg-[#FF3E00]/60" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
