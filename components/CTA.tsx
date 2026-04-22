
"use client";

import AnimSection from "./AnimSection";

export default function CTA() {
  return (
    <section className="relative text-center px-6 md:px-20 pt-20 pb-28 overflow-hidden">
      
      {/* Glow orb */}
      <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <AnimSection>
        {/* Label */}
        <p className="text-xs uppercase tracking-[0.1em] text-white/40 mb-5 font-sans">
          Start now
        </p>

        {/* Heading */}
        <h2 className="text-[36px] md:text-[72px] tracking-[-0.03em] leading-[1.05] max-w-3xl mx-auto mb-6">
          Your future self is <br />
          <em className="text-primary">already writing to you.</em>
        </h2>

        {/* Subtext */}
        <p className="text-white/60 font-sans max-w-md mx-auto mb-10 leading-relaxed">
          Join 42,000+ writers who turned daily journaling into genuine self-knowledge.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <button className="bg-primary text-black px-10 py-4 rounded-full text-base font-semibold hover:-translate-y-1 hover:shadow-lg transition">
            Start free today →
          </button>
        </div>

        {/* Trust line */}
        <p className="text-xs text-white/40 mt-4 font-sans">
          No credit card · Cancel anytime · Your data is always yours
        </p>
      </AnimSection>
    </section>
  );
}