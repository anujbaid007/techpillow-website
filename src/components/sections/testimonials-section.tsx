"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { testimonials } from "@/data/testimonials";

const col1 = testimonials.slice(0, 2);
const col2 = testimonials.slice(2, 4);
const col3 = testimonials.slice(4, 5);

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeading
          subtitle="Testimonials"
          title="Trusted by Founders and CTOs Across India"
          description="Hear from the people who've built with us."
          align="center"
        />

        <div className="mt-12 relative">
          {/* Fade masks */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none" />

          <div className="flex justify-center gap-6 max-h-[600px] overflow-hidden">
            <TestimonialsColumn
              testimonials={col1}
              duration={15}
              className="hidden md:block"
            />
            <TestimonialsColumn
              testimonials={col2}
              duration={19}
            />
            <TestimonialsColumn
              testimonials={col3}
              duration={17}
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
