import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import CTABanner from "@/components/layout/cta-banner";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.seo.title,
    description: post.seo.description,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  // Simple markdown-like rendering: split by \n\n for paragraphs, handle ## headings
  const blocks = post.content.split("\n\n");

  return (
    <>
      <article className="py-20 lg:py-28">
        <div className="max-w-[720px] mx-auto px-6">
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Placeholder featured image */}
            <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-orange-50 to-gray-100 border border-border flex items-center justify-center mb-8">
              <span className="text-2xl font-heading font-bold text-muted-foreground/15">
                Featured Image
              </span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.2}>
            <div className="mt-12 space-y-6">
              {blocks.map((block, i) => {
                const trimmed = block.trim();
                if (trimmed.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="font-heading font-bold text-xl sm:text-2xl mt-10 mb-4"
                    >
                      {trimmed.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed text-base sm:text-lg"
                  >
                    {trimmed}
                  </p>
                );
              })}
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
