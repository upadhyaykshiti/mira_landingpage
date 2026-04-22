

"use client";

import { useEffect, useState } from "react";
import AnimSection from "./AnimSection";

export default function Hero() {
  const [typedText, setTypedText] = useState("");

  const fullText = "Understand yourself,\none entry at a time.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 38);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-[clamp(24px,8vw,120px)] pt-[120px] pb-[80px] overflow-hidden">
      
      {/* ORBS */}
      <div className="absolute w-[600px] h-[600px] top-[-100px] right-[-100px] rounded-full blur-[80px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,240,154,0.12) 0%, transparent 70%)" }}
      />
      <div className="absolute w-[400px] h-[400px] bottom-0 left-[5%] rounded-full blur-[80px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,216,255,0.08) 0%, transparent 70%)" }}
      />

      {/* BADGE */}
      <AnimSection delay={0}>
        <div className="mb-6">
          <span className="bg-primary/10 border border-primary/30 text-primary text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider font-sans">
            ✦ Now in Open Beta
          </span>
        </div>
      </AnimSection>

      {/* HEADING */}
      <AnimSection delay={0.1}>
        <h1 className="text-[clamp(44px,6.5vw,88px)] leading-[1.05] tracking-[-0.03em] max-w-[820px] mb-6 font-normal">
          {typedText.split("\n").map((line, i) => (
            <span key={i}>
              {i === 0 ? (
                line
              ) : (
                <>
                  <br />
                  <em className="text-primary">{line}</em>
                </>
              )}
            </span>
          ))}
          <span className="text-primary animate-pulse">|</span>
        </h1>
      </AnimSection>

      {/* SUBTEXT */}
      <AnimSection delay={0.2}>
        <p className="font-sans text-[clamp(16px,1.8vw,20px)] text-white/60 max-w-[520px] leading-[1.65] mb-10 font-light">
          Mira reads between the lines of your journal — surfacing patterns, emotions,
          and blind spots you never noticed — so writing finally leads somewhere.
        </p>
      </AnimSection>

      {/* CTA */}
      <AnimSection delay={0.3}>
        <div className="flex gap-[14px] flex-wrap items-center">
          <a
            href="#"
            className="bg-primary text-black font-semibold text-[16px] px-9 py-4 rounded-full hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(200,240,154,0.25)] transition"
          >
            Start journaling free →
          </a>

          <a
            href="#"
            className="border border-white/30 px-7 py-3 rounded-full text-[15px] font-sans hover:bg-white/10 transition"
          >
            See how it works
          </a>
        </div>

        <p className="font-sans mt-4 text-[13px] text-white/40">
          No credit card. 14-day trial on paid plans.
        </p>
      </AnimSection>

      {/* MOCK UI */}
      <AnimSection delay={0.4}>
        <div className="mt-20 max-w-[700px] bg-white/5 border border-white/10 rounded-[24px] p-7 relative">
          
          {/* window dots */}
          <div className="flex gap-2 mb-5">
            {["#ff6b6b", "#ffd93d", "#6bcb77"].map((c) => (
              <div key={c} className="w-[10px] h-[10px] rounded-full" style={{ background: c }} />
            ))}
          </div>

          <p className="font-sans text-[12px] text-white/50 uppercase tracking-wider mb-2">
            April 14 · Monday · 7:23 AM
          </p>

          <p className="text-[16px] leading-[1.75] text-white/80 italic mb-6">
            "Another meeting cancelled. I keep saying it's fine but honestly I notice how much I tense up every time someone reschedules..."
          </p>

          <div className="bg-primary/10 border border-primary/30 rounded-[14px] p-4">
            <p className="font-sans text-primary text-[12px] font-semibold uppercase tracking-wider mb-1">
              ✦ Mira noticed
            </p>
            <p className="font-sans text-[14px] text-white/75 leading-[1.6]">
              This is the 4th entry this month where you frame frustration as "fine."
              The word <strong className="text-white">"control"</strong> appeared 11 times.
              <em> What would it mean to let one thing be imperfect this week?</em>
            </p>
          </div>
        </div>
      </AnimSection>
    </section>
  );
}