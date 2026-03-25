import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Truck,
  Building2,
  UtensilsCrossed,
  Plane,
  Tv,
  Zap,
  Sprout,
  Link as LinkIcon,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/case-studies";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { TechStackLogos } from "@/components/shared/tech-stack-logos";
import CTABanner from "@/components/layout/cta-banner";

const iconMap: Record<string, React.ElementType> = {
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Truck,
  Building2,
  UtensilsCrossed,
  Plane,
  Tv,
  Zap,
  Sprout,
  Link: LinkIcon,
};

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};

  return {
    title: industry.seo.title,
    description: industry.seo.description,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const Icon = iconMap[industry.icon];

  // Find related case studies
  const relatedCaseStudies = caseStudies
    .filter((cs) => cs.industry === industry.slug || cs.industry.includes(industry.slug))
    .slice(0, 3);

  // Map techStack strings to the format TechStackLogos expects
  const techStackItems = industry.techStack.map((t) => ({
    name: t,
    icon: t.toLowerCase().replace(/\s+/g, "-"),
  }));

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
                {industry.name}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                {industry.shortDescription}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center mt-8 px-8 py-3.5 rounded-full font-semibold text-sm bg-[#FF3E00] text-white hover:bg-[#e63600] transition-colors shadow-lg shadow-orange-500/25"
              >
                Discuss Your {industry.name} Project
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="What We Deliver"
            title={`${industry.name} Capabilities`}
            description={`Specialized solutions designed for the ${industry.name.toLowerCase()} sector.`}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {industry.capabilities.map((cap, index) => (
              <ScrollReveal key={cap} delay={index * 0.06}>
                <div className="border rounded-2xl p-4 bg-white text-center">
                  <span className="text-sm font-medium">{cap}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="Pain Points"
            title={`Challenges in ${industry.name}`}
            description="We understand the real obstacles your industry faces."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {industry.challenges.map((challenge, index) => (
              <ScrollReveal key={challenge.title} delay={index * 0.1}>
                <div className="border rounded-2xl p-6 h-full bg-red-50/50 border-red-100">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="Our Approach"
            title="How TechPillow Helps"
            description={`Purpose-built solutions that address ${industry.name.toLowerCase()}'s toughest challenges.`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {industry.solutions.map((solution, index) => (
              <ScrollReveal key={solution.title} delay={index * 0.1}>
                <div className="border rounded-2xl p-6 h-full bg-white">
                  <div className="w-10 h-10 rounded-lg bg-[#FF3E00]/10 flex items-center justify-center mb-4">
                    <Lightbulb className="w-5 h-5 text-[#FF3E00]" />
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="Technology"
            title="Tech Stack"
            description={`The tools and technologies we use for ${industry.name.toLowerCase()} projects.`}
            align="left"
          />
          <div className="mt-8">
            <TechStackLogos technologies={techStackItems} />
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="max-w-[1280px] mx-auto px-6">
            <SectionHeading
              subtitle="Our Work"
              title="Related Case Studies"
              description={`See how we've delivered results in the ${industry.name.toLowerCase()} space.`}
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
                        {cs.metrics.slice(0, 2).map((metric) => (
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
        headline={`Ready to Transform Your ${industry.name} Business?`}
        subtext="Let's discuss how technology can solve your industry's biggest challenges."
        ctaText="Book a Free Strategy Call"
        ctaHref="/contact"
        variant="orange"
      />
    </>
  );
}
