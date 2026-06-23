"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Are products handmade?",
    answer:
      "Yes. Every Little Lanterns friend is crocheted by hand in small ready-made batches.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders are packed in 1-2 business days and usually delivered across India within 3-7 days.",
  },
  {
    question: "Do you accept returns?",
    answer:
      "We accept returns only for damaged items within 48 hours of delivery with unboxing proof.",
  },
  {
    question: "How do I care for my plushie?",
    answer:
      "Gentle hand wash with mild soap, press out extra water, and air dry flat in shade.",
  },
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqItems.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <article key={item.question} className="rounded-2xl border border-[var(--brown)]/10 bg-white/60 p-4">
            <button
              type="button"
              onClick={() => setActiveIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="font-semibold text-[var(--brown)]">{item.question}</span>
              <span className="text-[var(--brown)]">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen ? <p className="mt-3 text-sm text-[var(--brown)]/80">{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
