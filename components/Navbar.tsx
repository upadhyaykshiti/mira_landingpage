

"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = ["Features", "How it Works", "Testimonials", "Pricing", "FAQ"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-[clamp(24px,5vw,64px)] transition-all duration-300
      ${
        scrolled
          ? "bg-[#0D0D0F]/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center">
          <span className="text-black text-xs font-bold font-sans">M</span>
        </div>
        <span className="text-[18px] tracking-[-0.02em]">Mira</span>
      </div>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex gap-8">
        {NAV_LINKS.map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l.toLowerCase().replace(/ /g, "-"))}
            className="text-sm text-white/60 hover:text-white transition font-sans"
          >
            {l}
          </button>
        ))}
      </div>

      {/* DESKTOP CTA */}
      <div className="hidden md:flex items-center gap-3">
        <button className="text-sm text-white/60 hover:text-white transition font-sans">
          Sign in
        </button>

        <a
          href="#"
          className="bg-primary text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(200,240,154,0.25)] transition"
        >
          Get Started Free
        </a>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0D0D0F] border-t border-white/10 flex flex-col items-start px-6 py-6 gap-4 md:hidden">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase().replace(/ /g, "-"))}
              className="text-white/70 text-sm font-sans"
            >
              {l}
            </button>
          ))}

          <button className="text-white/70 text-sm font-sans mt-2">
            Sign in
          </button>

          <a
            href="#"
            className="bg-primary text-black px-5 py-2 rounded-full text-sm font-semibold mt-2"
          >
            Get Started Free
          </a>
        </div>
      )}
    </nav>
  );
}