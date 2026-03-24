"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { company } from "@/data/company";

interface WhiteCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

function WhiteCounter({ value, suffix = "", label }: WhiteCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);
  const [displayValue, setDisplayValue] = useState(0);

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
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="text-5xl md:text-6xl font-bold font-heading text-white">
        <span>{displayValue}</span>
        <span>{suffix}</span>
      </div>
      <p className="text-sm md:text-base text-white/80 font-medium">{label}</p>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="w-full bg-[#FF3E00] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-4 text-center">
          {company.stats.map((stat) => (
            <WhiteCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
