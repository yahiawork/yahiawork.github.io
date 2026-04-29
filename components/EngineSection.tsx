"use client";

import { CircuitBoard } from "lucide-react";
import { engineLayers } from "@/lib/constants";
import { useGsapReveal } from "@/lib/animation";

export default function EngineSection() {
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section
      aria-labelledby="engine-title"
      className="section-pad relative flex items-center"
      ref={ref}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="technical-label" data-reveal>
              03 / yahia build engine
            </p>
            <h2
              className="font-display mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl"
              data-reveal
              id="engine-title"
            >
              The technical map behind the work.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-[#8A96A8]" data-reveal>
              A portfolio is more than screenshots. This one maps languages,
              frameworks, engines, cybersecurity curiosity, and the hardware
              constraints that shape the way Yahia builds.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-4 sm:p-6" data-reveal>
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-2xl border border-purple-200/20 bg-purple-300/10 text-purple-100">
                  <CircuitBoard aria-hidden className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">YAHIAWORK SYSTEM MAP</p>
                  <p className="font-mono text-xs text-cyan-100/55">skills / repos / deployed products</p>
                </div>
              </div>
              <span className="hidden rounded-full border border-cyan-200/15 px-3 py-1 font-mono text-xs text-cyan-100/70 sm:block">
                profile: public
              </span>
            </div>

            <div className="relative">
              <div className="absolute bottom-6 left-[1.3rem] top-6 hidden w-px bg-gradient-to-b from-cyan-200/0 via-cyan-200/45 to-purple-300/0 sm:block" />
              <div className="grid gap-3">
                {engineLayers.map((layer) => (
                  <article
                    className="group grid gap-4 rounded-2xl border border-white/8 bg-black/18 p-4 transition hover:border-cyan-200/28 hover:bg-white/[0.055] sm:grid-cols-[auto_1fr]"
                    key={layer.code}
                  >
                    <div className="relative flex size-11 items-center justify-center rounded-2xl border border-cyan-200/18 bg-cyan-200/10 font-mono text-xs text-cyan-100 shadow-[0_0_24px_rgba(0,217,255,0.14)]">
                      {layer.code}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {layer.label}
                      </h3>
                      <p className="mt-2 leading-7 text-[#8A96A8]">
                        {layer.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
