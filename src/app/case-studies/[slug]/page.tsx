import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Quote } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { TechStackLogos } from "@/components/shared/tech-stack-logos";
import CTABanner from "@/components/layout/cta-banner";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};

  return {
    title: cs.seo.title,
    description: cs.seo.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const techStackItems = cs.techStack.map((t) => ({
    name: t,
    icon: t.toLowerCase().replace(/\s+/g, "-"),
  }));

  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>

            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-orange-50 text-[#FF3E00] border border-orange-100 mb-4">
              {cs.industryTag}
            </span>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              {cs.name}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
              {cs.description}
            </p>
          </ScrollReveal>

          {/* Project image */}
          <ScrollReveal delay={0.2}>
            <div className="mt-12 aspect-[16/9] rounded-2xl overflow-hidden border border-border relative">
              <Image
                src={cs.image}
                alt={cs.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <SectionHeading
                subtitle="Background"
                title="The Challenge"
                align="left"
              />
              <p className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
                {cs.challenge}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <SectionHeading
                subtitle="What We Built"
                title="Our Solution"
                align="left"
              />
              <p className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
                {cs.solution}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="Technology"
            title="Tech Stack Used"
            align="left"
          />
          <div className="mt-8">
            <TechStackLogos technologies={techStackItems} />
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-[#FF3E00]">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white text-center mb-12">
              Key Results
            </h2>
            <div className="flex flex-wrap justify-center gap-12 sm:gap-20">
              {cs.metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white">
                    {metric.value}
                  </div>
                  <div className="text-sm sm:text-base text-white/80 mt-2">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial */}
      {cs.testimonial && (
        <section className="py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <Quote className="w-10 h-10 text-[#FF3E00]/20 mx-auto mb-6" />
                <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed italic">
                  &ldquo;{cs.testimonial.text}&rdquo;
                </blockquote>
                <div className="mt-6">
                  <p className="font-heading font-semibold">
                    {cs.testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {cs.testimonial.role}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <CTABanner
        headline="Want Similar Results? Let's Talk."
        subtext="Tell us about your project and we'll show you what's possible."
        ctaText="Get a Free Consultation"
        ctaHref="/contact"
        variant="orange"
      />
    </>
  );
}
