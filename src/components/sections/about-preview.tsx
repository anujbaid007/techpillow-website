"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Lightbulb,
  Globe,
  TrendingUp,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const features = [
  {
    icon: Lightbulb,
    title: "Product-First Thinking",
    description: "We build for your users, not just your spec",
  },
  {
    icon: Globe,
    title: "India-Based, Globally Delivered",
    description: "Local expertise, international standards",
  },
  {
    icon: TrendingUp,
    title: "Startup to Enterprise Scale",
    description: "MVPs to million-user platforms",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Weekly updates, real timelines, zero surprises",
  },
];

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-center">
            {/* Left column */}
            <div className="lg:w-[52%] flex flex-col gap-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FF3E00]">
                <span className="w-8 h-px bg-[#FF3E00]" />
                About Our Company
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-foreground leading-[1.12]">
                Architecting Digital Excellence for Industry Leaders
              </h2>

              <p className="text-muted-foreground leading-relaxed text-base max-w-lg">
                We combine cutting-edge technology with deep industry expertise
                to help businesses innovate, optimize, and scale. From startups
                building their first MVP to enterprises modernizing legacy
                systems — we&apos;re the tech team that delivers.
              </p>

              {/* Feature grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                {features.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="group flex items-start gap-3.5 p-4 rounded-xl hover:bg-orange-50/50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF3E00]/10 to-[#FF3E00]/5 flex items-center justify-center group-hover:from-[#FF3E00]/20 group-hover:to-[#FF3E00]/10 transition-colors">
                      <Icon className="w-5 h-5 text-[#FF3E00]" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-base leading-tight">
                        {title}
                      </p>
                      <p className="text-muted-foreground text-sm mt-1 leading-snug">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#FF3E00] font-semibold text-base mt-2 group"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right column — image */}
            <div className="lg:w-[48%] w-full">
              <div className="relative">
                {/* Decorative accent */}
                <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-2 border-[#FF3E00]/10 pointer-events-none" />

                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                  <Image
                    src="/images/team-working.jpg"
                    alt="TechPillow team collaborating on a project"
                    width={800}
                    height={600}
                    className="w-full h-[460px] object-cover"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  {/* Floating stat card */}
                  <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3.5 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="font-heading font-bold text-2xl text-[#FF3E00]">
                          10+
                        </div>
                        <div className="text-[11px] text-muted-foreground font-medium">
                          Years Building
                        </div>
                      </div>
                      <div className="w-px h-10 bg-border" />
                      <div>
                        <div className="font-heading font-bold text-2xl text-[#FF3E00]">
                          25+
                        </div>
                        <div className="text-[11px] text-muted-foreground font-medium">
                          Team Members
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dot pattern accent */}
                <div
                  className="absolute -bottom-6 -left-6 w-24 h-24 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #FF3E00 1.5px, transparent 1.5px)",
                    backgroundSize: "10px 10px",
                  }}
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
