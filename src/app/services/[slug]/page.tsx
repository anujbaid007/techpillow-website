import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Code,
  Smartphone,
  Globe,
  Brain,
  Palette,
  Cloud,
  Users,
  ArrowRight,
  Layers,
} from "lucide-react";
import { services } from "@/data/services";
import { caseStudies } from "@/data/case-studies";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { TechStackLogos } from "@/components/shared/tech-stack-logos";
import CTABanner from "@/components/layout/cta-banner";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Smartphone,
  Globe,
  Brain,
  Palette,
  Cloud,
  Users,
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
  };
}

// Map service slugs to related industries in case studies
const serviceIndustryMap: Record<string, string[]> = {
  "software-development": [
    "ecommerce",
    "agritech",
    "blockchain-web3",
    "entertainment-media",
  ],
  "mobile-app-development": ["education", "agritech", "ecommerce"],
  "web-development": [
    "ecommerce",
    "entertainment-media",
    "agritech",
    "blockchain-web3",
  ],
  "ai-ml": ["agritech", "ecommerce", "education"],
  "ui-ux": [
    "ecommerce",
    "entertainment-media",
    "education",
    "agritech",
    "blockchain-web3",
  ],
  "cloud-devops": ["entertainment-media", "ecommerce", "agritech"],
  "it-resources": [
    "ecommerce",
    "entertainment-media",
    "agritech",
    "education",
    "blockchain-web3",
  ],
};

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon];

  // Find related case studies
  const relatedIndustries = serviceIndustryMap[service.slug] || [];
  const relatedCaseStudies = caseStudies
    .filter((cs) => relatedIndustries.includes(cs.industry))
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="w-14 h-14 rounded-xl bg-[#FF3E00]/10 flex items-center justify-center mb-6">
                {Icon && <Icon className="w-7 h-7 text-[#FF3E00]" />}
              </div>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                {service.name}
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-muted-foreground">
                {service.tagline}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center mt-8 px-8 py-3.5 rounded-full font-semibold text-sm bg-[#FF3E00] text-white hover:bg-[#e63600] transition-colors shadow-lg shadow-orange-500/25"
              >
                Book a Free Strategy Call
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-6">
                Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                {service.description}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="What We Offer"
            title="Capabilities"
            description={`Everything you need for ${service.name.toLowerCase()}, under one roof.`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {service.capabilities.map((cap, index) => (
              <ScrollReveal key={cap.title} delay={index * 0.08}>
                <div className="border rounded-2xl p-6 h-full bg-white">
                  <div className="w-10 h-10 rounded-lg bg-[#FF3E00]/10 flex items-center justify-center mb-4">
                    <Layers className="w-5 h-5 text-[#FF3E00]" />
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cap.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="Our Process"
            title={`How We Deliver ${service.name}`}
          />

          {/* Desktop: horizontal */}
          <div className="hidden md:flex items-start justify-between mt-16 relative">
            <div className="absolute top-6 left-[calc(10%+12px)] right-[calc(10%+12px)] h-0.5 bg-border" />

            {service.process.map((step, index) => (
              <ScrollReveal
                key={step.step}
                delay={index * 0.12}
                className="flex-1 flex flex-col items-center text-center relative px-3"
              >
                <div className="w-12 h-12 rounded-full bg-[#FF3E00] text-white flex items-center justify-center font-heading font-bold text-lg relative z-10">
                  {index + 1}
                </div>
                <h3 className="font-heading font-semibold text-base mt-4 mb-2">
                  {step.step}
                </h3>
                <p className="text-sm text-muted-foreground max-w-[200px]">
                  {step.description}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="md:hidden mt-12 relative pl-8">
            <div className="absolute top-3 bottom-3 left-[18px] w-0.5 bg-border" />

            {service.process.map((step, index) => (
              <ScrollReveal
                key={step.step}
                delay={index * 0.1}
                className="relative mb-10 last:mb-0"
              >
                <div className="absolute -left-8 w-9 h-9 rounded-full bg-[#FF3E00] text-white flex items-center justify-center font-heading font-bold text-sm z-10">
                  {index + 1}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-1">
                  {step.step}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="Technology"
            title="Tech Stack"
            description="The tools and technologies we use to deliver results."
            align="left"
          />
          <div className="mt-8">
            <TechStackLogos technologies={service.techStack} />
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <SectionHeading
              subtitle="Our Work"
              title="Related Case Studies"
              description="See how we've delivered results for businesses like yours."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {relatedCaseStudies.map((cs, index) => (
                <ScrollReveal key={cs.slug} delay={index * 0.1}>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="group flex flex-col h-full border rounded-2xl overflow-hidden hover:border-[#FF3E00]/40 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="h-48 bg-muted flex items-center justify-center">
                      <span className="text-4xl font-heading font-bold text-muted-foreground/20">
                        {cs.name}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs font-medium text-[#FF3E00] uppercase tracking-wider mb-2">
                        {cs.industryTag}
                      </span>
                      <h3 className="font-heading font-semibold text-lg mb-2">
                        {cs.name}
                      </h3>
                      <p className="text-sm text-muted-foreground flex-1">
                        {cs.description}
                      </p>
                      <div className="flex gap-4 mt-4">
                        {cs.metrics.map((metric) => (
                          <div key={metric.label}>
                            <span className="block font-heading font-bold text-[#FF3E00]">
                              {metric.value}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center text-sm font-medium text-[#FF3E00] gap-1 group-hover:gap-2 transition-all">
                        Read case study
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <CTABanner
        headline={`Ready to Get Started with ${service.name}?`}
        subtext="Let's discuss how we can help you achieve your goals."
        ctaText="Book a Free Strategy Call"
        ctaHref="/contact"
        variant="orange"
      />
    </>
  );
}
