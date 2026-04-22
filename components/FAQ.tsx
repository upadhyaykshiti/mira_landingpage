
"use client";

import { useState } from "react";
import AnimSection from "./AnimSection";

const FAQS = [
  {
    q: "Is my data private?",
    a: "Yes — everything you write is end-to-end encrypted. Your entries are never used to train AI models, and only you can access your data.",
  },
  {
    q: "Can I export my journal?",
    a: "Absolutely. You can export your entries anytime in multiple formats.",
  },
  {
    q: "Does Mira replace therapy?",
    a: "No — Mira is a reflective tool, not a substitute for professional care.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes — you can use Mira for free with core journaling features.",
  },
];

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 md:px-20 py-[100px]">
      
      {/* Heading */}
      <AnimSection>
        <span className="inline-flex text-xs uppercase tracking-wider text-primary border border-primary/30 px-4 py-1 rounded-full font-sans mb-6">
          ? FAQ
        </span>

        <h2 className="text-[32px] md:text-[56px] tracking-[-0.03em] max-w-xl leading-tight mb-16">
          Good questions
        </h2>
      </AnimSection>

      {/* FAQ List */}
      <div className="max-w-[780px] mx-auto" >
        {FAQS.map((f, i) => {
          const isOpen = activeIdx === i;

          return (
            <AnimSection key={f.q} delay={i * 0.05}>
              <div
                onClick={() => setActiveIdx(isOpen ? null : i)}
                className="border-b border-white/10 py-6 cursor-pointer"
              >
                {/* Question */}
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-[16px] md:text-[20px] tracking-[-0.01em]">
                    {f.q}
                  </h3>

                  {/* Plus Icon */}
                  <div
                    className={`text-primary text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </div>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    isOpen ? "max-h-[200px] mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-white/60 text-[15px] leading-relaxed font-sans">
                    {f.a}
                  </p>
                </div>
              </div>
            </AnimSection>
          );
        })}
      </div>
    </section>
  );
}