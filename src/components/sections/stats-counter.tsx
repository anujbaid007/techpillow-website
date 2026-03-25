"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "motion/react";
import { company } from "@/data/company";
import { Rocket, Clock, Users } from "lucide-react";

const statIcons = [Rocket, Clock, Users];

interface WhiteCounterProps {
  value: number;
  suffix?: string;
  label: string;
  index: number;
}

function WhiteCounter({ value, suffix = "", label, index }: WhiteCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);
  const [displayValue, setDisplayValue] = useState(0);
  const Icon = statIcons[index] || Rocket;

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const durationMs = 2000;

    function easeOutCubic(t: number): number {
      return 1 - Math.pow(1 - t, 3);
    }

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const current = Math.round(easeOutCubic(progress) * value);
      setDisplayValue(current);
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative group"
    >
      <div className="relative flex flex-col items-center gap-4 py-10 px-6">
        {/* Icon circle */}
        <div className="w-14 h-14 rounded-2xl bg-white/[0.12] backdrop-blur-sm border border-white/[0.15] flex items-center justify-center mb-1 group-hover:bg-white/[0.18] transition-colors duration-300">
          <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
        </div>

        {/* Counter */}
        <div className="text-6xl md:text-7xl font-bold font-heading text-white tracking-tight">
          <span>{displayValue}</span>
          <span className="text-white/70">{suffix}</span>
        </div>

        {/* Label */}
        <p className="text-sm text-white/60 font-medium tracking-wide uppercase">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF3E00] via-[#E63600] to-[#CC2D00]" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-300/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
          {company.stats.map((stat, i) => (
            <div key={stat.label} className="relative">
              {/* Vertical divider */}
              {i > 0 && (
                <div className="hidden sm:block absolute left-0 top-[15%] bottom-[15%] w-px bg-white/[0.12]" />
              )}
              <WhiteCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={i}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
