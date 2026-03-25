"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border border-t border-b">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left group"
            >
              <span className="font-heading font-semibold text-base sm:text-lg group-hover:text-[#FF3E00] transition-colors">
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-out",
                isOpen ? "max-h-96 pb-5" : "max-h-0"
              )}
            >
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
