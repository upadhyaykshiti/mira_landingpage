
"use client";

import AnimSection from "./AnimSection";

const STATS = [
  { value: "2.1M", label: "entries written" },
  { value: "94%", label: "feel more self-aware" },
  { value: "4.9★", label: "App Store rating" },
  { value: "180+", label: "countries" },
];

export default function Stats() {
  return (
    <section className="px-[clamp(24px,8vw,120px)] pb-20">
      <AnimSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] bg-white/10 rounded-[20px] overflow-hidden">
          
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="bg-[#0D0D0F] text-center px-[28px] py-[36px]"
            >
              <div className="text-[clamp(28px,3.5vw,44px)] tracking-[-0.02em] text-primary mb-1">
                {value}
              </div>

              <p className="text-[13px] text-white/45 font-sans">
                {label}
              </p>
            </div>
          ))}

        </div>
      </AnimSection>
    </section>
  );
}