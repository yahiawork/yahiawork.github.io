"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import Capabilities from "@/components/Capabilities";
import CoreSection from "@/components/CoreSection";
import CTA from "@/components/CTA";
import EngineSection from "@/components/EngineSection";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import SmoothScroll from "@/components/SmoothScroll";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
  loading: () => null,
});

export default function LandingPage() {
  const [sceneReady, setSceneReady] = useState(false);
  const [minimumElapsed, setMinimumElapsed] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setMinimumElapsed(true), 1700);
    return () => window.clearTimeout(timeout);
  }, []);

  const loaderActive = useMemo(
    () => !(sceneReady && minimumElapsed),
    [minimumElapsed, sceneReady],
  );

  return (
    <div id="top" className="relative min-h-screen overflow-x-clip bg-[#05070A]">
      <SmoothScroll />
      <Scene onReady={() => setSceneReady(true)} />
      <Loader active={loaderActive} />
      <Navbar />

      <div className="grid-overlay pointer-events-none fixed inset-0 z-[1] opacity-35" />
      <div className="radial-vignette pointer-events-none fixed inset-0 z-[2]" />
      <div className="noise-overlay pointer-events-none fixed inset-0 z-[3] opacity-[0.075]" />

      <main className="relative z-10" id="story">
        <Hero />
        <CoreSection />
        <Capabilities />
        <EngineSection />
        <Projects />
        <CTA />
      </main>
    </div>
  );
}
