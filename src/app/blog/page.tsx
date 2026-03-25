import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import CTABanner from "@/components/layout/cta-banner";

export const metadata: Metadata = {
  title: "Blog | TechPillow",
};

function getReadingTime(content: string) {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  Startups: { bg: "bg-blue-50 dark:bg-blue-950/40", text: "text-blue-600 dark:text-blue-400" },
  Mobile: { bg: "bg-purple-50 dark:bg-purple-950/40", text: "text-purple-600 dark:text-purple-400" },
  "AI & ML": { bg: "bg-emerald-50 dark:bg-emerald-950/40", text: "text-emerald-600 dark:text-emerald-400" },
  Fintech: { bg: "bg-amber-50 dark:bg-amber-950/40", text: "text-amber-600 dark:text-amber-400" },
  Cloud: { bg: "bg-cyan-50 dark:bg-cyan-950/40", text: "text-cyan-600 dark:text-cyan-400" },
  "E-Commerce": { bg: "bg-rose-50 dark:bg-rose-950/40", text: "text-rose-600 dark:text-rose-400" },
};

function getCategory(slug: string): string {
  if (slug.includes("startup") || slug.includes("custom-software")) return "Startups";
  if (slug.includes("flutter") || slug.includes("react-native")) return "Mobile";
  if (slug.includes("ai") || slug.includes("ml")) return "AI & ML";
  if (slug.includes("upi") || slug.includes("fintech") || slug.includes("payment")) return "Fintech";
  if (slug.includes("cloud") || slug.includes("aws")) return "Cloud";
  if (slug.includes("commerce") || slug.includes("delivery")) return "E-Commerce";
  return "Startups";
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;
  const featuredCategory = getCategory(featured.slug);
  const featuredColors = categoryColors[featuredCategory] || categoryColors["Startups"];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[420px] lg:h-[480px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/stock/blog-hero.jpg"
          alt="Insights and resources"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-white/80 border border-white/20 rounded-full mb-6">
              Blog
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
              Insights &amp; Resources
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
              Practical perspectives on technology, product development, and
              the Indian tech ecosystem — from the team that builds it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border hover:border-[#FF3E00]/30 hover:shadow-xl transition-all duration-500"
            >
              {/* Featured image */}
              <div className="relative aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-[#FF3E00]/10 to-orange-50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF3E00]/5 via-orange-50 to-amber-50 flex items-center justify-center">
                  <span className="text-6xl font-heading font-bold text-[#FF3E00]/[0.07]">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${featuredColors.bg} ${featuredColors.text}`}>
                    {featuredCategory}
                  </span>
                  <span className="text-xs text-muted-foreground">Featured</span>
                </div>

                <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight group-hover:text-[#FF3E00] transition-colors duration-300">
                  {featured.title}
                </h2>

                <p className="mt-4 text-muted-foreground leading-relaxed line-clamp-3">
                  {featured.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#FF3E00]/10 text-[#FF3E00] flex items-center justify-center text-xs font-bold">
                      {getInitials(featured.author)}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{featured.author}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <time dateTime={featured.date}>
                          {new Date(featured.date).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                        <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground/40" />
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {getReadingTime(featured.content)} min read
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#FF3E00] group-hover:gap-2.5 transition-all duration-300">
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {rest.map((post, index) => {
              const category = getCategory(post.slug);
              const colors = categoryColors[category] || categoryColors["Startups"];

              return (
                <ScrollReveal key={post.slug} delay={index * 0.08}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col h-full rounded-2xl overflow-hidden border border-border bg-card hover:border-[#FF3E00]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-400"
                  >
                    {/* Card image */}
                    <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-heading font-bold text-muted-foreground/[0.06]">
                          Blog
                        </span>
                      </div>
                      {/* Category badge on image */}
                      <div className="absolute top-4 left-4">
                        <span className={`inline-block px-2.5 py-1 text-[11px] font-semibold rounded-full backdrop-blur-sm ${colors.bg} ${colors.text}`}>
                          {category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                        <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground/40" />
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {getReadingTime(post.content)} min
                        </span>
                      </div>

                      <h3 className="font-heading font-semibold text-lg leading-snug mb-2 group-hover:text-[#FF3E00] transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground flex-1 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-[#FF3E00]/10 text-[#FF3E00] flex items-center justify-center text-[10px] font-bold">
                            {getInitials(post.author)}
                          </div>
                          <span className="text-xs font-medium text-muted-foreground">
                            {post.author}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-xs font-semibold text-[#FF3E00] group-hover:gap-1.5 transition-all duration-300">
                          Read
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Have a Project in Mind?"
        subtext="Let's discuss how we can bring your vision to life."
        ctaText="Book a Free Strategy Call"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}
