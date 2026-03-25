import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import CTABanner from "@/components/layout/cta-banner";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.seo.title,
    description: post.seo.description,
  };
}

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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const readingTime = getReadingTime(post.content);
  const blocks = post.content.split("\n\n");

  return (
    <>
      {/* Hero with gradient background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF3E00]/[0.06] via-orange-50/50 to-amber-50/30 dark:from-[#FF3E00]/[0.04] dark:via-gray-950 dark:to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FF3E00]/[0.08] via-transparent to-transparent" />

        <div className="relative max-w-[860px] mx-auto px-6 pt-12 pb-16 lg:pt-16 lg:pb-20">
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-[#FF3E00] transition-colors mb-10 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back to Blog
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </span>
              <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground/40" />
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {readingTime} min read
              </span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] tracking-tight leading-[1.15]">
              {post.title}
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <article className="pb-16 lg:pb-24">
        <div className="max-w-[860px] mx-auto px-6">
          {/* Featured image area */}
          <ScrollReveal delay={0.1}>
            <div className="relative aspect-[2/1] rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-[#FF3E00]/[0.06] via-orange-50 to-amber-50/50 dark:from-[#FF3E00]/[0.04] dark:via-gray-900 dark:to-gray-800 border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-[#FF3E00]/10 flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-[#FF3E00]/30">TP</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Article body */}
          <ScrollReveal delay={0.2}>
            <div className="prose-area">
              {blocks.map((block, i) => {
                const trimmed = block.trim();
                if (trimmed.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="font-heading font-bold text-2xl sm:text-[1.7rem] mt-12 mb-5 tracking-tight text-foreground"
                    >
                      {trimmed.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-muted-foreground leading-[1.85] text-base sm:text-[1.075rem] mb-5"
                  >
                    {trimmed}
                  </p>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Divider */}
          <div className="my-14 border-t border-border" />

          {/* Author Card */}
          <ScrollReveal delay={0.1}>
            <div className="flex items-start gap-5 p-6 sm:p-8 rounded-2xl bg-muted/40 border border-border">
              <div className="shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#FF3E00] to-[#FF6B3D] flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-[#FF3E00]/20">
                {getInitials(post.author)}
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Written by
                </p>
                <p className="font-heading font-bold text-lg">
                  {post.author}
                </p>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  Sharing insights on technology, product development, and the
                  Indian tech ecosystem.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Back to blog link */}
          <ScrollReveal delay={0.15}>
            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full border border-border hover:border-[#FF3E00]/40 hover:text-[#FF3E00] transition-all duration-300 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                All Articles
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </article>

      {/* CTA Banner */}
      <CTABanner
        headline="Ready to Build Something Extraordinary?"
        subtext="From ideation to launch, we're your end-to-end technology partner."
        ctaText="Book a Free Strategy Call"
        ctaHref="/contact"
        variant="orange"
      />
    </>
  );
}
