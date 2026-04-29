"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Primary navigation"
        className={[
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 backdrop-blur-2xl transition-all duration-500 sm:px-5",
          scrolled
            ? "border-white/12 bg-[#05070A]/72 shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
            : "border-white/8 bg-white/[0.035]",
        ].join(" ")}
      >
        <a
          className="font-display text-sm font-semibold tracking-[0.2em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          href="#top"
        >
          YAHIA SAAD
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              className="rounded-full px-4 py-2 text-sm text-white/66 transition hover:bg-white/8 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-2 text-xs font-semibold text-cyan-100 transition hover:border-cyan-200/45 hover:bg-cyan-200/16 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:px-4"
          href="#contact"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
