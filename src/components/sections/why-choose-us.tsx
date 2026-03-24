"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { EvervaultCard } from "@/components/ui/evervault-card";

const reasons = [
  {
    title: "Product-First Mindset",
    description:
      "We don't just write code — we think like product owners. Every feature is built with user impact and business ROI in mind, not just technical specifications.",
  },
  {
    title: "Speed Without Shortcuts",
    description:
      "Agile sprints, CI/CD pipelines, and a bias for shipping mean you see working software fast. But speed never comes at the cost of clean architecture or test coverage.",
  },
  {
    title: "India-Deep, Global-Ready",
    description:
      "We understand Indian market nuances — UPI, Aadhaar, regional languages, Tier 2 users — while engineering systems that scale globally from day one.",
  },
  {
    title: "Transparent Partnerships",
    description:
      "Weekly demos, shared project boards, and honest timelines. No black-box development — you see exactly what's being built and why, every step of the way.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeading
          subtitle="Why TechPillow"
          title="How We Drive Successful Digital Transformation"
          description="Four principles that make us a trusted technology partner for ambitious businesses."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 0.15}>
              <div className="relative rounded-2xl border border-border bg-white overflow-hidden h-full">
                {/* Evervault card hover background */}
                <div className="absolute inset-0 opacity-60">
                  <EvervaultCard text="" />
                </div>

                {/* Content overlay */}
                <div className="relative z-10 p-8 sm:p-10">
                  <h3 className="text-xl font-bold font-heading mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
