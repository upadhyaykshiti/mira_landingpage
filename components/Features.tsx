// "use client";

// const FEATURES = [
//   {
//     icon: "✦",
//     title: "Emotion Mapping",
//     desc: "Mira detects emotional undercurrents in your entries and builds a living map over time.",
//     accent: "text-primary",
//   },
//   {
//     icon: "◈",
//     title: "Pattern Recognition",
//     desc: "Surface recurring themes, triggers, and growth arcs you'd never notice.",
//     accent: "text-blue-300",
//   },
//   {
//     icon: "❋",
//     title: "Reflective Prompts",
//     desc: "Mira asks the right questions at the right time.",
//     accent: "text-orange-300",
//   },
//   {
//     icon: "⬡",
//     title: "Private by Design",
//     desc: "End-to-end encrypted. Your thoughts belong to you.",
//     accent: "text-purple-300",
//   },
// ];

// export default function Features() {
//   return (
//     <section id="features" className="px-6 md:px-20 py-24 bg-bg text-text">
      
//       {/* Heading */}
//       <div className="mb-16">
//         <span className="text-xs uppercase tracking-widest text-primary border border-primary/30 px-4 py-1 rounded-full font-sans">
//           ◈ Features
//         </span>

//         <h2 className="text-[32px] md:text-[56px] mt-6 max-w-xl leading-tight tracking-tight">
//           A journal that <em className="text-blue-300">thinks</em> alongside you
//         </h2>

//         <p className="text-white/60 mt-4 max-w-md font-sans">
//           Most apps store your writing. Mira reads it — and reflects what you can't see yourself.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="grid md:grid-cols-2 gap-6">
//         {FEATURES.map((f) => (
//           <div
//             key={f.title}
//             className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-1 hover:bg-white/10 transition"
//           >
//             <div className={`text-2xl mb-4 ${f.accent}`}>{f.icon}</div>
//             <h3 className="text-xl mb-2 tracking-tight">{f.title}</h3>
//             <p className="text-white/60 text-sm font-sans leading-relaxed">
//               {f.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }





"use client";

import AnimSection from "./AnimSection";

const FEATURES = [
  {
    icon: "✦",
    title: "Emotion Mapping",
    desc: "Mira detects emotional undercurrents in your entries and builds a living map over time.",
    accent: "#C8F09A",
  },
  {
    icon: "◈",
    title: "Pattern Recognition",
    desc: "Surface recurring themes, triggers, and growth arcs you'd never notice.",
    accent: "#A8D8FF",
  },
  {
    icon: "❋",
    title: "Reflective Prompts",
    desc: "Mira asks the right questions at the right time.",
    accent: "#FFD6A5",
  },
  {
    icon: "⬡",
    title: "Private by Design",
    desc: "End-to-end encrypted. Your thoughts belong to you.",
    accent: "#D4B8FF",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="px-[clamp(24px,8vw,120px)] py-[100px]"
    >
      {/* HEADER */}
      <AnimSection>
        <p className="inline-flex text-xs font-semibold tracking-widest uppercase border border-primary/30 bg-primary/10 text-primary px-4 py-1 rounded-full font-sans mb-6">
          ◈ Features
        </p>

        <h2 className="text-[clamp(32px,4vw,56px)] tracking-[-0.03em] max-w-[560px] leading-[1.1] mb-4 font-normal">
          A journal that{" "}
          <em className="text-[#A8D8FF]">thinks</em> alongside you
        </h2>

        <p className="text-[16px] text-white/50 max-w-[480px] leading-[1.7] mb-16 font-light font-sans">
          Most apps store your writing. Mira reads it — and gently reflects back what you can't see yourself.
        </p>
      </AnimSection>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-4">
        {FEATURES.map((f, i) => (
          <AnimSection key={f.title} delay={i * 0.08}>
            <div className="bg-white/5 border border-white/10 rounded-[20px] p-[36px_32px] hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 transition">
              
              <div
                className="text-[28px] mb-[18px]"
                style={{ color: f.accent }}
              >
                {f.icon}
              </div>

              <h3 className="text-[22px] tracking-[-0.02em] mb-[10px] font-normal">
                {f.title}
              </h3>

              <p className="text-[14px] text-white/55 leading-[1.7] font-light font-sans">
                {f.desc}
              </p>

            </div>
          </AnimSection>
        ))}
      </div>
    </section>
  );
}