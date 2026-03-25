import Link from "next/link";
import Image from "next/image";
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
  Search,
  PenTool,
  Rocket,
  Settings,
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

const gradientMap: Record<string, string> = {
  Code: "from-orange-500/20 to-red-500/20",
  Smartphone: "from-blue-500/20 to-cyan-500/20",
  Globe: "from-emerald-500/20 to-teal-500/20",
  Brain: "from-purple-500/20 to-violet-500/20",
  Palette: "from-pink-500/20 to-rose-500/20",
  Cloud: "from-sky-500/20 to-indigo-500/20",
  Users: "from-amber-500/20 to-yellow-500/20",
};

const accentMap: Record<string, string> = {
  Code: "bg-orange-500",
  Smartphone: "bg-blue-500",
  Globe: "bg-emerald-500",
  Brain: "bg-purple-500",
  Palette: "bg-pink-500",
  Cloud: "bg-sky-500",
  Users: "bg-amber-500",
};

const processSteps = [
  {
    number: 1,
    title: "Discovery",
    icon: Search,
    description:
      "We dive deep into your business, users, and goals to define the right problem before building the wrong solution.",
  },
  {
    number: 2,
    title: "Design",
    icon: PenTool,
    description:
      "Research-driven wireframes and prototypes validated with real users before a single line of code is written.",
  },
  {
    number: 3,
    title: "Develop",
    icon: Settings,
    description:
      "Agile sprints with weekly demos. You see working software early and often, not just at the end of a long contract.",
  },
  {
    number: 4,
    title: "Deploy",
    icon: Rocket,
    description:
      "Production-ready delivery with monitoring, documentation, and ongoing support so your team is never stranded.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero with Background Image */}
      <section className="relative min-h-[520px] lg:min-h-[600px] flex items-center overflow-hidden">
        <Image
          src="/images/stock/services-hero.jpg"
          alt="TechPillow services overview"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-28 lg:py-36 w-full">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-block border border-white/20 rounded-lg px-4 py-1 text-sm text-white/70 mb-6 backdrop-blur-sm">
                What We Do
              </span>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-white leading-[1.1]">
                Full-Spectrum{" "}
                <span className="text-[#FF3E00]">Tech Solutions</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-white/75 max-w-2xl leading-relaxed">
                From custom software and mobile apps to AI-powered automation
                and cloud infrastructure — we cover the full stack so you can
                focus on growth.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center mt-8 px-8 py-3.5 rounded-full font-semibold text-sm bg-[#FF3E00] text-white hover:bg-[#e63600] transition-colors shadow-lg shadow-orange-500/25"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="Our Expertise"
            title="Services We Offer"
            description="Every service is backed by proven processes, senior engineers, and a relentless focus on business outcomes."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-14">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const gradient = gradientMap[service.icon] || "from-orange-500/20 to-red-500/20";
              const accent = accentMap[service.icon] || "bg-orange-500";
              return (
                <ScrollReveal key={service.slug} delay={index * 0.08}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative flex flex-col h-full border rounded-2xl p-6 lg:p-8 overflow-hidden hover:border-[#FF3E00]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-background"
                  >
                    {/* Gradient accent at top */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} group-hover:h-1.5 transition-all duration-300`}
                    />
                    <div className={`absolute top-0 left-0 right-0 h-1 ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {Icon && (
                        <Icon className="w-7 h-7 text-[#FF3E00]" />
                      )}
                    </div>
                    <h3 className="font-heading font-semibold text-lg lg:text-xl mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground flex-1 leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <div className="mt-5 flex items-center text-sm font-semibold text-[#FF3E00] gap-1.5 group-hover:gap-3 transition-all duration-300">
                      Explore service
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work - Process */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="Our Process"
            title="How We Work"
            description="A proven four-step process that turns ideas into production-ready products."
          />

          {/* Desktop: horizontal with connecting line */}
          <div className="hidden md:grid grid-cols-4 gap-0 mt-16 relative">
            {/* Connecting line behind circles */}
            <div className="absolute top-10 left-[calc(12.5%)] right-[calc(12.5%)] h-[2px]">
              <div className="w-full h-full bg-gradient-to-r from-[#FF3E00]/20 via-[#FF3E00]/50 to-[#FF3E00]/20 rounded-full" />
            </div>

            {processSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <ScrollReveal
                  key={step.number}
                  delay={step.number * 0.15}
                  className="flex flex-col items-center text-center relative px-4"
                >
                  {/* Outer ring */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF3E00] to-[#e63600] flex items-center justify-center relative z-10 shadow-lg shadow-orange-500/20">
                    <StepIcon className="w-8 h-8 text-white" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute top-0 right-[calc(50%-40px)] w-6 h-6 rounded-full bg-white border-2 border-[#FF3E00] flex items-center justify-center z-20 shadow-sm">
                    <span className="text-xs font-bold text-[#FF3E00]">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mt-5 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-[240px] leading-relaxed">
                    {step.description}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden mt-12 relative pl-12">
            {/* Connecting line */}
            <div className="absolute top-4 bottom-4 left-[22px] w-[2px] bg-gradient-to-b from-[#FF3E00] via-[#FF3E00]/50 to-[#FF3E00]/20 rounded-full" />

            {processSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <ScrollReveal
                  key={step.number}
                  delay={step.number * 0.1}
                  className="relative mb-12 last:mb-0"
                >
                  <div className="absolute -left-12 w-11 h-11 rounded-full bg-gradient-to-br from-[#FF3E00] to-[#e63600] text-white flex items-center justify-center z-10 shadow-md shadow-orange-500/20">
                    <StepIcon className="w-5 h-5" />
                  </div>
                  <div className="absolute -left-[52px] -top-1 w-5 h-5 rounded-full bg-white border-2 border-[#FF3E00] flex items-center justify-center z-20">
                    <span className="text-[10px] font-bold text-[#FF3E00]">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </ScrollReveal>
              );
            })}
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
