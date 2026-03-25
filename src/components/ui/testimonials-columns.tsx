"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

type Testimonial = {
  text: string;
  name: string;
  role: string;
  company?: string;
  image?: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role, company }, i) => {
                const initials = name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2);

                return (
                  <div
                    className="relative p-8 rounded-3xl border border-border/60 bg-white shadow-sm max-w-xs w-full"
                    key={i}
                  >
                    {/* Quote icon */}
                    <Quote className="w-8 h-8 text-[#FF3E00]/15 mb-3" strokeWidth={1.5} />

                    <p className="text-[15px] leading-relaxed text-gray-700">
                      {text}
                    </p>

                    <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border/40">
                      {image ? (
                        <Image
                          src={image}
                          alt={name}
                          width={44}
                          height={44}
                          className="w-11 h-11 rounded-full object-cover ring-2 ring-[#FF3E00]/10"
                        />
                      ) : (
                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#FF3E00]/15 to-[#FF3E00]/5 flex items-center justify-center text-sm font-bold text-[#FF3E00] flex-shrink-0 ring-2 ring-[#FF3E00]/10">
                          {initials}
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="font-semibold text-sm text-gray-900 leading-tight">
                          {name}
                        </span>
                        <span className="text-xs text-gray-500 leading-tight mt-0.5">
                          {role}{company ? `, ${company}` : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
