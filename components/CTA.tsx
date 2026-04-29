"use client";

import { Send } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { useGsapReveal } from "@/lib/animation";

export default function CTA() {
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section
      aria-labelledby="cta-title"
      className="relative flex min-h-[86svh] items-center px-5 py-28 sm:px-8"
      id="contact"
      ref={ref}
    >
      <div className="mx-auto w-full max-w-5xl text-center">
        <p className="technical-label" data-reveal>
          05 / contact
        </p>
        <h2
          className="font-display mt-6 text-balance text-5xl font-semibold leading-tight text-white sm:text-7xl"
          data-reveal
          id="cta-title"
        >
          Ready to explore the work?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#9CA8BA]" data-reveal>
          View the public repositories, deployed projects, and the current
          direction behind Erire, First Stand Studio, EduPlatform, WaterIt, game
          systems, AI experiments, and security research.
        </p>
        <div className="mt-9" data-reveal>
          <MagneticButton
            ariaLabel="Open Yahia Saad GitHub profile"
            href="https://github.com/yahiawork"
            icon={<Send aria-hidden className="size-4" />}
          >
            Open GitHub
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
