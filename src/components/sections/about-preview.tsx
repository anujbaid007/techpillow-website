"use client";

import Link from "next/link";
import { Lightbulb, Globe, TrendingUp, MessageSquare, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
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
    <ScrollReveal>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left column */}
            <div className="lg:w-1/2 flex flex-col gap-6">
              <SectionHeading
                subtitle="About Our Company"
                title="Architecting Digital Excellence for Industry Leaders"
                align="left"
              />

              <p className="text-muted-foreground leading-relaxed">
                We combine cutting-edge technology with deep industry expertise to help businesses
                innovate, optimize, and scale. From startups building their first MVP to enterprises
                modernizing legacy systems — we&apos;re the tech team that delivers.
              </p>

              {/* Feature points */}
              <div className="flex flex-col gap-4 mt-2">
                {features.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#FF3E00]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{title}</p>
                      <p className="text-muted-foreground text-sm mt-0.5">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#FF3E00] font-semibold text-sm mt-2 hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right column — image placeholder */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-muted rounded-2xl h-[400px] flex items-center justify-center border border-border">
                <span className="text-muted-foreground text-sm font-medium">Team Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
