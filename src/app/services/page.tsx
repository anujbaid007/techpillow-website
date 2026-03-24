import Link from "next/link";
import type { Metadata } from "next";
import {
  Code,
  Smartphone,
  Globe,
  Brain,
  Palette,
  Cloud,
  Users,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import CTABanner from "@/components/layout/cta-banner";

export const metadata: Metadata = {
  title: "Our Services | TechPillow",
};

const iconMap: Record<string, React.ElementType> = {
  Code,
  Smartphone,
  Globe,
  Brain,
  Palette,
  Cloud,
  Users,
};

const processSteps = [
  {
    number: 1,
    title: "Discovery",
    description:
      "We dive deep into your business, users, and goals to define the right problem before building the wrong solution.",
  },
  {
    number: 2,
    title: "Design",
    description:
      "Research-driven wireframes and prototypes validated with real users before a single line of code is written.",
  },
  {
    number: 3,
    title: "Develop",
    description:
      "Agile sprints with weekly demos. You see working software early and often, not just at the end of a long contract.",
  },
  {
    number: 4,
    title: "Deploy",
    description:
      "Production-ready delivery with monitoring, documentation, and ongoing support so your team is never stranded.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Full-Spectrum Tech Solutions
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                From custom software and mobile apps to AI-powered automation
                and cloud infrastructure — we cover the full stack so you can
                focus on growth.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <ScrollReveal key={service.slug} delay={index * 0.08}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex flex-col h-full border rounded-2xl p-6 hover:border-[#FF3E00]/40 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#FF3E00]/10 flex items-center justify-center mb-4">
                      {Icon && (
                        <Icon className="w-6 h-6 text-[#FF3E00]" />
                      )}
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground flex-1">
                      {service.tagline}
                    </p>
                    <div className="mt-4 flex items-center text-sm font-medium text-[#FF3E00] gap-1 group-hover:gap-2 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="Our Process"
            title="How We Work"
            description="A proven four-step process that turns ideas into production-ready products."
          />

          {/* Desktop: horizontal */}
          <div className="hidden md:flex items-start justify-between mt-16 relative">
            {/* Connecting line */}
            <div className="absolute top-6 left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-0.5 bg-border" />

            {processSteps.map((step) => (
              <ScrollReveal
                key={step.number}
                delay={step.number * 0.12}
                className="flex-1 flex flex-col items-center text-center relative px-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#FF3E00] text-white flex items-center justify-center font-heading font-bold text-lg relative z-10">
                  {step.number}
                </div>
                <h3 className="font-heading font-semibold text-lg mt-4 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground max-w-[220px]">
                  {step.description}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="md:hidden mt-12 relative pl-8">
            {/* Connecting line */}
            <div className="absolute top-3 bottom-3 left-[18px] w-0.5 bg-border" />

            {processSteps.map((step) => (
              <ScrollReveal
                key={step.number}
                delay={step.number * 0.1}
                className="relative mb-10 last:mb-0"
              >
                <div className="absolute -left-8 w-9 h-9 rounded-full bg-[#FF3E00] text-white flex items-center justify-center font-heading font-bold text-sm z-10">
                  {step.number}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Ready to Build Something Extraordinary?"
        subtext="From ideation to launch, we're your end-to-end technology partner."
        ctaText="Book a Free Strategy Call"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}
