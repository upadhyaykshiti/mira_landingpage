
"use client";

import AnimSection from "./AnimSection";

const PLANS = [
  {
    name: "Free",
    price: 0,
    desc: "For curious beginners",
    features: [
      "30 entries/month",
      "Basic emotion tags",
      "7-day streak tracker",
      "Export to PDF",
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Reflect",
    price: 9,
    desc: "For serious self-explorers",
    features: [
      "Unlimited entries",
      "Full emotion mapping",
      "Pattern & theme analysis",
      "Reflective AI prompts",
      "Monthly insight reports",
      "Priority support",
    ],
    cta: "Start 14-day Trial",
    highlight: true,
  },
  {
    name: "Deep",
    price: 19,
    desc: "For therapists & coaches",
    features: [
      "Everything in Reflect",
      "Client workspace (up to 10)",
      "Session prep summaries",
      "Longitudinal trend exports",
      "API access",
      "Dedicated onboarding",
    ],
    cta: "Talk to Us",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="px-6 md:px-20 py-[100px] bg-white/[0.015]"
    >
      {/* Header */}
      <AnimSection>
        <p className="text-xs uppercase tracking-widest text-primary border border-primary/30 px-4 py-1 rounded-full font-sans inline-flex mb-6">
          ⬡ Pricing
        </p>

        <h2 className="text-[32px] md:text-[48px] tracking-[-0.03em] max-w-md leading-[1.1] mb-4">
          Simple, honest pricing
        </h2>

        <p className="text-white/60 font-sans max-w-md mb-16">
          No dark patterns. Cancel anytime. Free forever if you just want the basics.
        </p>
      </AnimSection>

      {/* Plans */}
      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {PLANS.map((p, i) => (
          <AnimSection key={p.name} delay={i * 0.1}>
            <div
              className={`h-full rounded-2xl p-8 border transition hover:-translate-y-1 ${
                p.highlight
                  ? "bg-primary/10 border-primary/40"
                  : "bg-white/[0.03] border-white/10"
              }`}
            >
              {/* Badge */}
              {p.highlight && (
                <div className="bg-primary text-black text-[11px] font-bold px-3 py-1 rounded-full inline-block mb-5 uppercase tracking-wide">
                  Most popular
                </div>
              )}

              {/* Name */}
              <p className="text-sm text-white/40 mb-2 font-sans">
                {p.name}
              </p>

              {/* Price */}
              <div className="text-[40px] tracking-tight mb-1">
                {p.price === 0 ? (
                  "Free"
                ) : (
                  <>
                    ${p.price}
                    <span className="text-sm text-white/40 font-sans">
                      /mo
                    </span>
                  </>
                )}
              </div>

              {/* Desc */}
              <p className="text-sm text-white/40 mb-8 font-sans">
                {p.desc}
              </p>

              {/* CTA */}
              <button
                className={`w-full mb-8 py-3 rounded-full text-sm font-semibold transition ${
                  p.highlight
                    ? "bg-primary text-black hover:opacity-90"
                    : "border border-white/20 hover:bg-white/10"
                }`}
              >
                {p.cta}
              </button>

              {/* Features */}
              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-2 text-sm text-white/60 font-sans"
                  >
                    <span className="text-primary">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </AnimSection>
        ))}
      </div>
    </section>
  );
}