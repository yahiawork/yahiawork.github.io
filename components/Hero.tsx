"use client";

import { ArrowDownRight, ExternalLink, PanelsTopLeft } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center justify-center px-5 pb-16 pt-28 sm:px-8"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <div className="technical-label mb-6 rounded-full border border-cyan-200/12 bg-white/[0.035] px-4 py-2 backdrop-blur-xl">
          yahiawork / morocco / erire creator / 31 public repos
        </div>

        <h1
          className="font-display max-w-5xl text-balance text-5xl font-semibold leading-[0.96] text-white sm:text-7xl lg:text-8xl"
          id="hero-title"
        >
          Yahia Saad Builds Beyond The{" "}
          <span className="text-gradient">Interface</span>
        </h1>

        <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-[#B8C3D4] sm:text-lg">
          A 14-year-old self-directed developer from Morocco building Erire,
          AI tools, web platforms, games, systems, and interactive digital
          worlds with honesty and technical control.
        </p>

        <div className="mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row">
          <MagneticButton
            ariaLabel="Explore Yahia Saad portfolio"
            href="#core"
            icon={<ArrowDownRight aria-hidden className="size-4" />}
          >
            Explore Portfolio
          </MagneticButton>
          <MagneticButton
            ariaLabel="View Yahia Saad projects"
            href="#projects"
            icon={<PanelsTopLeft aria-hidden className="size-4" />}
            variant="secondary"
          >
            View Projects
          </MagneticButton>
          <MagneticButton
            ariaLabel="Open Yahia Saad GitHub profile"
            href="https://github.com/yahiawork"
            icon={<ExternalLink aria-hidden className="size-4" />}
            variant="ghost"
          >
            GitHub
          </MagneticButton>
        </div>

        <div className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-3 text-left sm:grid-cols-3">
          {[
            ["STACK", "14 LANGUAGES / 4 FRAMEWORKS"],
            ["ENGINES", "UNITY / GODOT / UNREAL / ROBLOX"],
            ["MODE", "HONEST / SELF-DIRECTED / TECHNICAL"],
          ].map(([label, value]) => (
            <div
              className="glass-panel rounded-2xl px-4 py-3"
              key={label}
            >
              <p className="font-mono text-[0.64rem] uppercase text-cyan-100/55">
                {label}
              </p>
              <p className="mt-1 text-sm font-medium text-white/86">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
