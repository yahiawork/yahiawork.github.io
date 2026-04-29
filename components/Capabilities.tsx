"use client";

import { Blocks, BrainCircuit, Cpu, Gamepad2, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { capabilities, type CapabilityIcon } from "@/lib/constants";
import { useGsapReveal } from "@/lib/animation";

const iconMap: Record<CapabilityIcon, LucideIcon> = {
  brain: BrainCircuit,
  platform: Blocks,
  game: Gamepad2,
  cpu: Cpu,
};

export default function Capabilities() {
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section
      aria-labelledby="capabilities-title"
      className="section-pad relative"
      id="capabilities"
      ref={ref}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <p className="technical-label" data-reveal>
            02 / stack and capabilities
          </p>
          <h2
            className="font-display mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl"
            data-reveal
            id="capabilities-title"
          >
            From low-level logic to cinematic user experiences.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability) => {
            const Icon = iconMap[capability.icon];

            return (
              <motion.article
                className="animated-border group rounded-2xl p-px"
                data-reveal
                key={capability.title}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div className="glass-panel relative z-10 h-full rounded-2xl p-6">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-cyan-200/14 bg-cyan-200/10 text-cyan-100 transition group-hover:border-cyan-200/36 group-hover:bg-cyan-200/16">
                    <Icon aria-hidden className="size-5" />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold text-white">
                    {capability.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#9CA8BA]">
                    {capability.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
