"use client";

import { ScanLine } from "lucide-react";
import { useGsapReveal } from "@/lib/animation";

export default function CoreSection() {
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section
      aria-labelledby="core-title"
      className="section-pad relative flex items-center"
      id="core"
      ref={ref}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="technical-label" data-reveal>
            01 / about yahia
          </p>
          <h2
            className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl"
            data-reveal
            id="core-title"
          >
            A young builder with range, discipline, and no interest in pretending.
          </h2>
        </div>

        <div className="glass-panel rounded-2xl p-6 sm:p-8" data-reveal>
          <div className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl border border-cyan-200/18 bg-cyan-200/10 text-cyan-100">
            <ScanLine aria-hidden className="size-5" />
          </div>
          <p className="text-xl leading-9 text-[#DDE8F5]">
            Yahia Saad is a Sunni Muslim and self-directed programmer from
            Morocco, born in Saudi Arabia, focused on programming, ethical
            hacking, AI, game development, software systems, launchers, and web
            platforms.
          </p>
          <p className="mt-6 leading-8 text-[#8A96A8]">
            He has studied C, Python, Java, C++, C#, Kotlin, HTML/CSS,
            JavaScript, Rust, GDScript, Lua, TSX, Dart, and Pascal, while
            building projects such as Erire, EduPlatform, WaterIt, First Stand
            Studio, and GitHub experiments under `yahiawork`.
          </p>
        </div>
      </div>
    </section>
  );
}
