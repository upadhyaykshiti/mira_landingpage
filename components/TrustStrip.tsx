"use client";

import AnimSection from "./AnimSection";

const TRUST_ITEMS = [
  { icon: "🔒", label: "End-to-end encrypted" },
  { icon: "🚫", label: "Never trains AI models" },
  { icon: "🇪🇺", label: "GDPR compliant" },
  { icon: "📤", label: "Export anytime" },
  { icon: "🌱", label: "Carbon-neutral hosting" },
];

export default function TrustStrip() {
  return (
    <section className="px-6 md:px-20 pb-20">
      <AnimSection>
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl px-8 py-8 md:px-10 md:py-8 flex flex-wrap items-center justify-center gap-8 md:gap-10">
          
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-sm text-white/60 font-sans"
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}

        </div>
      </AnimSection>
    </section>
  );
}