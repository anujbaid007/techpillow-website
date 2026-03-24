"use client";

import Link from "next/link";
import { Code, Smartphone, Globe, Brain, Palette, Cloud, Users, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Smartphone,
  Globe,
  Brain,
  Palette,
  Cloud,
  Users,
};

// Grid column spans for bento layout
const colSpans = [
  "md:col-span-6", // 1st: 50%
  "md:col-span-6", // 2nd: 50%
  "md:col-span-4", // 3rd: 33%
  "md:col-span-4", // 4th: 33%
  "md:col-span-4", // 5th: 33%
  "md:col-span-7", // 6th: ~58%
  "md:col-span-5", // 7th: ~42%
];

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          subtitle="Our Services"
          title="Full-Spectrum Tech Solutions Engineered for Growth"
          description="We create new solutions and transform existing ones to make your business future-proof."
          align="center"
        />

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Code;
            return (
              <li
                key={service.slug}
                className={cn("col-span-1", colSpans[i] ?? "md:col-span-6")}
              >
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="relative h-full rounded-2xl border border-border bg-white p-6 flex flex-col gap-4 hover:shadow-md transition-shadow min-h-[220px]">
                    <GlowingEffect
                      spread={40}
                      glow
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={3}
                    />

                    {/* Icon */}
                    <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#FF3E00]" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-2 flex-1">
                      <h3 className="font-semibold text-foreground text-base leading-tight">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* Arrow link */}
                    <div className="flex items-center gap-1 text-[#FF3E00] text-sm font-medium mt-auto">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
