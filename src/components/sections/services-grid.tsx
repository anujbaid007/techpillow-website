"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
  Code,
  Smartphone,
  Globe,
  Brain,
  Palette,
  Cloud,
  Users,
  ArrowUpRight,
  // Capability icons
  Building2,
  Layers,
  Plug,
  RefreshCw,
  Database,
  HardDrive,
  Fingerprint,
  Bot,
  Repeat,
  Atom,
  TrendingUp,
  Wrench,
  Monitor,
  Wifi,
  ShoppingCart,
  Megaphone,
  FileText,
  Zap,
  LineChart,
  MessageSquare,
  Eye,
  MessageCircle,
  Sparkles,
  Workflow,
  Search,
  PenTool,
  Paintbrush,
  LayoutGrid,
  MousePointerClick,
  Sparkle,
  GitBranch,
  Box,
  FileCode,
  Activity,
  Upload,
  Shield,
  UserCheck,
  UserPlus,
  Briefcase,
  UserCog,
  Lightbulb,
  Crown,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
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

/* Unique icon per capability title */
const capabilityIconMap: Record<string, React.ElementType> = {
  // Custom Software Development
  "Enterprise Software": Building2,
  "SaaS Platforms": Layers,
  "API Development": Plug,
  "Legacy Modernization": RefreshCw,
  "ERP / CRM Systems": Database,
  "Database Architecture": HardDrive,
  // Mobile App Development
  "iOS Native": Fingerprint,
  "Android Native": Bot,
  "Flutter Cross-Platform": Repeat,
  "React Native": Atom,
  "App Store Optimization": TrendingUp,
  "Maintenance & Upgrades": Wrench,
  // Web Development
  "Single Page Applications": Monitor,
  "Progressive Web Apps": Wifi,
  "E-commerce Platforms": ShoppingCart,
  "Marketing Websites": Megaphone,
  "CMS Development": FileText,
  "Performance Optimization": Zap,
  // AI & Machine Learning
  "Predictive Analytics": LineChart,
  "Natural Language Processing": MessageSquare,
  "Computer Vision": Eye,
  "AI Chatbots": MessageCircle,
  "Recommendation Engines": Sparkles,
  "Process Automation": Workflow,
  // UI/UX Design
  "User Research": Search,
  "Wireframing & Prototyping": PenTool,
  "Visual Design": Paintbrush,
  "Design Systems": LayoutGrid,
  "Usability Testing": MousePointerClick,
  "Interaction Design": Sparkle,
  // Cloud & DevOps
  "CI/CD Pipelines": GitBranch,
  "Container Orchestration": Box,
  "Infrastructure as Code": FileCode,
  "Monitoring & Observability": Activity,
  "Cloud Migration": Upload,
  "Security & Compliance": Shield,
  // IT Resources
  "Dedicated Developers": UserCheck,
  "Team Augmentation": UserPlus,
  "Project-Based Hiring": Briefcase,
  "Managed Teams": UserCog,
  "Technical Consulting": Lightbulb,
  "CTO-as-a-Service": Crown,
};

const sidebarLabels: Record<string, { brand: string; sub: string }> = {
  "software-development": {
    brand: "Custom Software",
    sub: "Enterprise-Grade Engineering",
  },
  "mobile-app-development": {
    brand: "Mobile Apps",
    sub: "iOS · Android · Flutter",
  },
  "web-development": {
    brand: "Web Development",
    sub: "SPAs · E-commerce · PWAs",
  },
  "ai-ml": {
    brand: "AI & ML",
    sub: "Intelligent Automation",
  },
  "ui-ux": {
    brand: "UI/UX Design",
    sub: "Research-Driven Interfaces",
  },
  "cloud-devops": {
    brand: "Cloud & DevOps",
    sub: "Ship Fast, Scale Smart",
  },
  "it-resources": {
    brand: "IT Resources",
    sub: "Your Extended Tech Team",
  },
};

export default function ServicesGrid() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardStyles, setCardStyles] = useState<
    { opacity: number; scale: number; blur: number }[]
  >(services.map(() => ({ opacity: 1, scale: 1, blur: 0 })));

  const updateCards = useCallback(() => {
    const viewportCenter = window.innerHeight / 2;
    let closestIdx = 0;
    let closestDist = Infinity;

    const newStyles = cardRefs.current.map((el, i) => {
      if (!el) return { opacity: 0.25, scale: 0.96, blur: 3 };

      const rect = el.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const distance = Math.abs(cardCenter - viewportCenter);
      const maxDistance = window.innerHeight * 0.8;

      // Normalise: 0 = centered, 1 = far away
      const t = Math.min(distance / maxDistance, 1);

      if (distance < closestDist) {
        closestDist = distance;
        closestIdx = i;
      }

      // Apple-wheel curves: fast fade, subtle scale, light blur
      const opacity = 1 - t * 0.75; // 1 → 0.25
      const scale = 1 - t * 0.04; // 1 → 0.96

      return { opacity, scale, blur: 0 };
    });

    setActiveIndex(closestIdx);
    setCardStyles(newStyles);
  }, []);

  useEffect(() => {
    updateCards();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          updateCards();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateCards);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateCards);
    };
  }, [updateCards]);

  const scrollToCard = (i: number) => {
    cardRefs.current[i]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeading
          subtitle="Our Services"
          title="Full-Spectrum Tech Solutions Engineered for Growth"
          description="We create new solutions and transform existing ones to make your business future-proof."
          align="center"
        />

        {/* Desktop: sticky sidebar + scrolling cards */}
        <div className="mt-14 hidden lg:grid grid-cols-[280px_1fr] gap-10">
          {/* Sticky left sidebar */}
          <div className="relative">
            <div className="sticky top-32 space-y-1">
              {services.map((service, i) => {
                const label = sidebarLabels[service.slug];
                return (
                  <button
                    key={service.slug}
                    onClick={() => scrollToCard(i)}
                    className={cn(
                      "w-full text-left px-4 py-3.5 rounded-xl transition-all duration-300",
                      activeIndex === i
                        ? "bg-[#0C0C0D] text-white shadow-lg"
                        : "hover:bg-gray-100 text-muted-foreground"
                    )}
                  >
                    <span
                      className={cn(
                        "block text-base font-bold font-heading tracking-tight",
                        activeIndex === i ? "text-white" : "text-foreground"
                      )}
                    >
                      {label?.brand ?? service.name}
                    </span>
                    <span
                      className={cn(
                        "block text-sm mt-0.5",
                        activeIndex === i
                          ? "text-white/60"
                          : "text-muted-foreground"
                      )}
                    >
                      {label?.sub ?? service.tagline}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: service cards with scroll-wheel effect */}
          <div className="space-y-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Code;
              const { opacity, scale, blur } = cardStyles[i] ?? {
                opacity: 1,
                scale: 1,
                blur: 0,
              };

              return (
                <div
                  key={service.slug}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  className={cn(
                    "rounded-2xl border bg-gray-50 p-8 transition-[border-color,box-shadow] duration-300 will-change-transform",
                    activeIndex === i
                      ? "border-[#FF3E00]/20 shadow-lg shadow-[#FF3E00]/5"
                      : "border-border"
                  )}
                  style={{
                    opacity,
                    transform: `scale(${scale})`,
                    filter: "none",
                    transformOrigin: "center center",
                  }}
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold font-heading">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground text-base mt-1">
                        {service.tagline}
                      </p>
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#FF3E00] flex items-center justify-center text-[#FF3E00] hover:bg-[#FF3E00] hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    {service.shortDescription}
                  </p>

                  {/* 3 highlight features */}
                  <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6">
                    {service.capabilities.slice(0, 3).map((cap) => {
                      const CapIcon = capabilityIconMap[cap.title] ?? Icon;
                      return (
                        <div
                          key={cap.title}
                          className="flex items-center gap-2.5"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#FF3E00]/10 flex items-center justify-center flex-shrink-0">
                            <CapIcon className="w-4 h-4 text-[#FF3E00]" />
                          </div>
                          <span className="text-base font-semibold">
                            {cap.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Capability grid */}
                  <div className="grid grid-cols-3 xl:grid-cols-5 gap-3">
                    {service.capabilities.map((cap) => {
                      const CapIcon = capabilityIconMap[cap.title] ?? Icon;
                      return (
                        <div
                          key={cap.title}
                          className="border border-border rounded-xl p-4 bg-white text-center hover:shadow-sm transition-shadow"
                        >
                          <div className="w-9 h-9 rounded-lg bg-[#FF3E00]/10 flex items-center justify-center mx-auto mb-2">
                            <CapIcon className="w-4 h-4 text-[#FF3E00]" />
                          </div>
                          <span className="text-sm font-medium leading-tight block">
                            {cap.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="mt-10 lg:hidden space-y-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Code;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block"
              >
                <div className="rounded-2xl border border-border bg-gray-50 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FF3E00]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#FF3E00]" />
                      </div>
                      <h3 className="font-bold font-heading text-lg">
                        {service.name}
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-[#FF3E00] flex items-center justify-center text-[#FF3E00] flex-shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
