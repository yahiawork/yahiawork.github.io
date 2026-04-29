"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/constants";
import { useGsapReveal } from "@/lib/animation";

export default function Projects() {
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section
      aria-labelledby="projects-title"
      className="section-pad relative"
      id="projects"
      ref={ref}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="technical-label" data-reveal>
              04 / selected work
            </p>
            <h2
              className="font-display mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl"
              data-reveal
              id="projects-title"
            >
              Real projects from the YahiaWork ecosystem.
            </h2>
          </div>
          <p className="max-w-sm leading-7 text-[#8A96A8]" data-reveal>
            Pulled from YahiaWork, deployed sites, and GitHub
            repositories: Erire, First Stand Studio, EduPlatform, WaterIt, and
            more.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <motion.a
              className="glass-panel group overflow-hidden rounded-2xl"
              data-reveal
              href={project.href}
              key={project.title}
              rel="noreferrer"
              target="_blank"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className={`relative min-h-52 bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_38%),radial-gradient(circle_at_72%_28%,rgba(255,255,255,0.35),transparent_10rem)]" />
                <div className="grid-overlay absolute inset-0 opacity-35" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase text-white/62">
                      preview / holographic build
                    </p>
                    <div className="mt-3 h-1 w-28 rounded-full bg-white/70 shadow-[0_0_24px_rgba(255,255,255,0.42)]" />
                  </div>
                  <span className="flex size-11 items-center justify-center rounded-full border border-white/18 bg-black/24 text-white backdrop-blur-xl transition group-hover:border-cyan-200/50 group-hover:text-cyan-100">
                    <ArrowUpRight aria-hidden className="size-5" />
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="font-mono text-xs uppercase text-cyan-100/58">
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-[#9CA8BA]">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
