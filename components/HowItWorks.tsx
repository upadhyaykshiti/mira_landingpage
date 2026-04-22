
"use client";

import AnimSection from "./AnimSection";

const STEPS = [
  {
    n: "01",
    t: "Write freely",
    d: "Open Mira and write whatever's on your mind. No prompts required. No formatting. Just you and the page.",
  },
  {
    n: "02",
    t: "Mira reads between the lines",
    d: "Our AI identifies emotional signatures, recurring themes, and linguistic patterns — completely privately on your encrypted data.",
  },
  {
    n: "03",
    t: "Surface what matters",
    d: "After each entry, Mira highlights one observation: a pattern, a shift, a question worth sitting with.",
  },
  {
    n: "04",
    t: "Watch yourself grow",
    d: "Your Emotion Map and Theme Timeline build over weeks. Real self-knowledge, not productivity metrics.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-6 md:px-20 py-[100px] bg-white/[0.015]"
    >
      {/* Header */}
      <AnimSection>
        <p className="text-xs uppercase tracking-widest text-primary border border-primary/30 px-4 py-1 rounded-full font-sans inline-flex mb-6">
          ❋ Process
        </p>

        <h2 className="text-[32px] md:text-[56px] tracking-[-0.03em] max-w-md leading-[1.1] mb-16">
          How Mira works
        </h2>
      </AnimSection>

      {/* Steps */}
      <div className="flex flex-col max-w-2xl">
        {STEPS.map((step, i) => (
          <AnimSection key={step.n} delay={i * 0.1}>
            <div className="flex gap-8 py-10 border-b border-white/10">
              
              {/* Number */}
              <div className="text-xs font-semibold tracking-widest text-white/30 font-sans min-w-[28px] pt-1">
                {step.n}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[22px] tracking-tight mb-2">
                  {step.t}
                </h3>

                <p className="text-white/60 text-sm font-sans leading-relaxed">
                  {step.d}
                </p>
              </div>
            </div>
          </AnimSection>
        ))}
      </div>
    </section>
  );
}