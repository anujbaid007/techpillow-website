import Link from "next/link";
import Image from "next/image";
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
  Cpu,
  Database,
  RefreshCcw,
  Shield,
  BarChart3,
  MessageCircle,
  Eye,
  Bot,
  Sparkles,
  Zap,
  Search,
  PenTool,
  Layout,
  MonitorSmartphone,
  PaintbrushVertical,
  MousePointer,
  GitBranch,
  Container,
  Server,
  Lock,
  CloudUpload,
  Activity,
  UserPlus,
  Briefcase,
  UsersRound,
  HeadphonesIcon,
  Award,
  ChevronRight,
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

/* Map service slugs to their stock hero images */
const heroImageMap: Record<string, string> = {
  "software-development": "/images/stock/service-software.jpg",
  "mobile-app-development": "/images/stock/service-mobile.jpg",
  "web-development": "/images/stock/service-web.jpg",
  "ai-ml": "/images/stock/service-ai.jpg",
  "ui-ux": "/images/stock/service-design.jpg",
  "cloud-devops": "/images/stock/service-cloud.jpg",
  "it-resources": "/images/stock/service-staff.jpg",
};

/* Per-capability icons keyed by capability title for richer visual cards */
const capabilityIconMap: Record<string, React.ElementType> = {
  // Software Development
  "Enterprise Software": Layers,
  "SaaS Platforms": Cloud,
  "API Development": Code,
  "Legacy Modernization": RefreshCcw,
  "ERP / CRM Systems": Database,
  "Database Architecture": Database,
  // Mobile
  "iOS Native": Smartphone,
  "Android Native": MonitorSmartphone,
  "Flutter Cross-Platform": Smartphone,
  "React Native": Smartphone,
  "App Store Optimization": BarChart3,
  "Maintenance & Upgrades": RefreshCcw,
  // Web
  "Single Page Applications": Globe,
  "Progressive Web Apps": Zap,
  "E-commerce Platforms": Layers,
  "Marketing Websites": BarChart3,
  "CMS Development": Layout,
  "Performance Optimization": Activity,
  // AI/ML
  "Predictive Analytics": BarChart3,
  "Natural Language Processing": MessageCircle,
  "Computer Vision": Eye,
  "AI Chatbots & Agents": Bot,
  "Recommendation Engines": Sparkles,
  "Process Automation": Cpu,
  // UI/UX
  "User Research": Search,
  "Wireframing & Prototyping": PenTool,
  "Visual Design": PaintbrushVertical,
  "Design Systems": Layout,
  "Usability Testing": MousePointer,
  "Interaction Design": Sparkles,
  // Cloud & DevOps
  "CI/CD Pipelines": GitBranch,
  "Container Orchestration": Container,
  "Infrastructure as Code": Server,
  "Monitoring & Observability": Activity,
  "Cloud Migration": CloudUpload,
  "Security & Compliance": Lock,
  // IT Resources
  "Dedicated Developers": UserPlus,
  "Team Augmentation": UsersRound,
  "Project-Based Hiring": Briefcase,
  "Managed Teams": Shield,
  "Technical Consulting": HeadphonesIcon,
  "CTO-as-a-Service": Award,
};

/* Accent colors for process step numbers */
const stepAccents = [
  "from-[#FF3E00] to-[#e63600]",
  "from-[#FF6B35] to-[#FF3E00]",
  "from-[#FF8C42] to-[#FF6B35]",
  "from-[#FFB347] to-[#FF8C42]",
  "from-[#FF3E00] to-[#c43000]",
];

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
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

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon];
  const heroImage = heroImageMap[service.slug] || "/images/stock/services-hero.jpg";

  // Find related case studies
  const relatedIndustries = serviceIndustryMap[service.slug] || [];
  const relatedCaseStudies = caseStudies
    .filter((cs) => relatedIndustries.includes(cs.industry))
    .slice(0, 3);

  return (
    <>
      {/* Hero with Background Image */}
      <section className="relative min-h-[480px] lg:min-h-[560px] flex items-center overflow-hidden">
        <Image
          src={heroImage}
          alt={service.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-24 lg:py-32 w-full">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FF3E00] flex items-center justify-center shadow-lg shadow-orange-500/30">
                  {Icon && <Icon className="w-6 h-6 text-white" />}
                </div>
                <Link
                  href="/services"
                  className="text-sm text-white/60 hover:text-white/90 transition-colors flex items-center gap-1"
                >
                  All Services
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
                {service.name}
              </h1>
              <p className="mt-5 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">
                {service.tagline}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center mt-8 px-8 py-3.5 rounded-full font-semibold text-sm bg-[#FF3E00] text-white hover:bg-[#e63600] transition-colors shadow-lg shadow-orange-500/25"
              >
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <span className="inline-block border rounded-lg px-4 py-1 text-sm text-muted-foreground mb-4">
                Overview
              </span>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg lg:text-xl">
                {service.description}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities - Visual Cards */}
      <section className="py-20 lg:py-24 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="What We Offer"
            title="Capabilities"
            description={`Everything you need for ${service.name.toLowerCase()}, under one roof.`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-14">
            {service.capabilities.map((cap, index) => {
              const CapIcon = capabilityIconMap[cap.title] || Layers;
              return (
                <ScrollReveal key={cap.title} delay={index * 0.08}>
                  <div className="group relative border rounded-2xl p-6 lg:p-8 h-full bg-background hover:border-[#FF3E00]/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                    {/* Subtle gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF3E00]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-[#FF3E00]/10 flex items-center justify-center mb-5 group-hover:bg-[#FF3E00]/15 transition-colors duration-300">
                        <CapIcon className="w-6 h-6 text-[#FF3E00]" />
                      </div>
                      <h3 className="font-heading font-semibold text-base lg:text-lg mb-2">
                        {cap.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps - Numbered with accent colors */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="Our Process"
            title={`How We Deliver ${service.name}`}
          />

          {/* Desktop: alternating layout */}
          <div className="hidden md:block mt-16 relative max-w-4xl mx-auto">
            {/* Vertical connecting line */}
            <div className="absolute top-8 bottom-8 left-8 w-[2px] bg-gradient-to-b from-[#FF3E00] via-[#FF3E00]/40 to-[#FF3E00]/10 rounded-full" />

            {service.process.map((step, index) => {
              const gradient = stepAccents[index % stepAccents.length];
              return (
                <ScrollReveal
                  key={step.step}
                  delay={index * 0.12}
                  className="relative mb-12 last:mb-0 pl-20"
                >
                  {/* Number circle */}
                  <div
                    className={`absolute left-[5px] w-[42px] h-[42px] rounded-full bg-gradient-to-br ${gradient} text-white flex items-center justify-center font-heading font-bold text-lg z-10 shadow-md shadow-orange-500/20`}
                  >
                    {index + 1}
                  </div>
                  {/* Content card */}
                  <div className="border rounded-2xl p-6 lg:p-8 bg-background hover:border-[#FF3E00]/20 hover:shadow-md transition-all duration-300">
                    <h3 className="font-heading font-semibold text-lg lg:text-xl mb-2">
                      {step.step}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden mt-12 relative pl-12">
            <div className="absolute top-3 bottom-3 left-[18px] w-[2px] bg-gradient-to-b from-[#FF3E00] via-[#FF3E00]/40 to-[#FF3E00]/10 rounded-full" />

            {service.process.map((step, index) => {
              const gradient = stepAccents[index % stepAccents.length];
              return (
                <ScrollReveal
                  key={step.step}
                  delay={index * 0.1}
                  className="relative mb-10 last:mb-0"
                >
                  <div
                    className={`absolute -left-12 w-10 h-10 rounded-full bg-gradient-to-br ${gradient} text-white flex items-center justify-center font-heading font-bold text-sm z-10 shadow-md shadow-orange-500/20`}
                  >
                    {index + 1}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    {step.step}
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

      {/* Tech Stack - Pills with brand styling */}
      <section className="py-20 lg:py-24 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeading
            subtitle="Technology"
            title="Tech Stack"
            description="The tools and technologies we use to deliver results."
            align="left"
          />

          <div className="mt-10">
            <ScrollReveal>
              <div className="flex flex-wrap gap-3">
                {service.techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex items-center gap-2.5 border rounded-full px-5 py-2.5 bg-background hover:border-[#FF3E00]/30 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#FF3E00]/60 group-hover:bg-[#FF3E00] transition-colors" />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-20 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6">
            <SectionHeading
              subtitle="Our Work"
              title="Related Case Studies"
              description="See how we've delivered results for businesses like yours."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-14">
              {relatedCaseStudies.map((cs, index) => (
                <ScrollReveal key={cs.slug} delay={index * 0.1}>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="group flex flex-col h-full border rounded-2xl overflow-hidden hover:border-[#FF3E00]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-background"
                  >
                    <div className="h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                      <span className="text-3xl font-heading font-bold text-muted-foreground/15">
                        {cs.name}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs font-semibold text-[#FF3E00] uppercase tracking-wider mb-2">
                        {cs.industryTag}
                      </span>
                      <h3 className="font-heading font-semibold text-lg mb-2">
                        {cs.name}
                      </h3>
                      <p className="text-sm text-muted-foreground flex-1 leading-relaxed">
                        {cs.description}
                      </p>
                      <div className="flex gap-5 mt-4 pt-4 border-t">
                        {cs.metrics.map((metric) => (
                          <div key={metric.label}>
                            <span className="block font-heading font-bold text-[#FF3E00] text-lg">
                              {metric.value}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center text-sm font-semibold text-[#FF3E00] gap-1.5 group-hover:gap-3 transition-all duration-300">
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
