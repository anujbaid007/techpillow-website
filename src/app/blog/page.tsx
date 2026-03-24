import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import CTABanner from "@/components/layout/cta-banner";

export const metadata: Metadata = {
  title: "Blog | TechPillow",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Insights &amp; Ideas
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Practical perspectives on technology, product development, and
                the Indian tech ecosystem — from the team that builds it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full border rounded-2xl overflow-hidden hover:border-[#FF3E00]/40 hover:shadow-lg transition-all duration-300"
                >
                  {/* Placeholder image */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-orange-50 to-gray-100 flex items-center justify-center">
                    <span className="text-sm text-muted-foreground/40 font-heading font-bold">
                      Blog
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span className="mx-1">·</span>
                      <span>{post.author}</span>
                    </div>

                    <h2 className="font-heading font-semibold text-lg mb-2 group-hover:text-[#FF3E00] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 flex items-center text-sm font-medium text-[#FF3E00] gap-1 group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
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
