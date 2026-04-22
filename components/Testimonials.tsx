
"use client";

import AnimSection from "./AnimSection";

function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="#F5C842">
      <path d="M7 1l1.5 4H13l-3.5 2.5 1.3 4L7 9 3.2 11.5l1.3-4L1 5h4.5z" />
    </svg>
  );
}

const TESTIMONIALS = [
  {
    name: "Anika R.",
    role: "Product Designer, Berlin",
    text: "I've tried every journaling app. Mira is the first one that made me feel genuinely understood. It spotted that I write about 'control' every time I'm anxious. I had no idea.",
    avatar: "AR",
    stars: 5,
  },
  {
    name: "James T.",
    role: "Therapist & Writer, NYC",
    text: "I recommend Mira to clients between sessions. The reflection prompts are remarkably thoughtful — not generic affirmations but real, probing questions.",
    avatar: "JT",
    stars: 5,
  },
  {
    name: "Priya M.",
    role: "Founder, Mumbai",
    text: "My morning journal used to take 40 minutes. With Mira I'm more focused, go deeper in 15 minutes, and actually remember what I wrote two months ago.",
    avatar: "PM",
    stars: 5,
  },
  {
    name: "Luca B.",
    role: "Grad student, Toronto",
    text: "The pattern timeline feature is wild. Seeing 'perfectionism' spike every exam season was the wake-up call I needed to actually talk to someone.",
    avatar: "LB",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 md:px-20 py-[100px]">
      
      {/* Header */}
      <AnimSection>
        <p className="text-xs uppercase tracking-widest text-primary border border-primary/30 px-4 py-1 rounded-full font-sans inline-flex mb-6">
          ★ Testimonials
        </p>

        <h2 className="text-[32px] md:text-[56px] tracking-[-0.03em] max-w-md leading-[1.1] mb-16">
          What our writers <em className="text-orange-300">say</em>
        </h2>
      </AnimSection>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {TESTIMONIALS.map((t, i) => (
          <AnimSection key={t.name} delay={i * 0.1}>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(t.stars)
                  .fill(0)
                  .map((_, j) => (
                    <Star key={j} />
                  ))}
              </div>

              {/* Text */}
              <p className="text-[16px] leading-relaxed text-white/80 italic mb-6">
                "{t.text}"
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-semibold text-primary font-sans">
                    {t.avatar}
                  </span>
                </div>

                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-white/40 font-sans">
                    {t.role}
                  </p>
                </div>

              </div>
            </div>
          </AnimSection>
        ))}
      </div>
    </section>
  );
}