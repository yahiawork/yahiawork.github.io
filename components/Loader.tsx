"use client";

import { useEffect, useState } from "react";

type LoaderProps = {
  active: boolean;
};

export default function Loader({ active }: LoaderProps) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (active) {
        setVisible(true);
      }
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [active]);

  useEffect(() => {
    if (!active) {
      const complete = window.setTimeout(() => setProgress(100), 0);
      const hide = window.setTimeout(() => setVisible(false), 720);

      return () => {
        window.clearTimeout(complete);
        window.clearTimeout(hide);
      };
    }

    const interval = window.setInterval(() => {
      setProgress((value) => Math.min(96, value + Math.max(1, (96 - value) * 0.08)));
    }, 80);

    return () => window.clearInterval(interval);
  }, [active]);

  if (!visible) {
    return null;
  }

  return (
    <div
      aria-live="polite"
      className={[
        "fixed inset-0 z-50 flex items-center justify-center bg-[#05070A] transition-opacity duration-700",
        active ? "opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
      role="status"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(0,217,255,0.16),transparent_34rem)]" />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative w-full max-w-sm px-6 text-center">
        <p className="technical-label mb-5">initializing yahiawork interface</p>
        <h1 className="font-display text-3xl font-semibold tracking-[0.16em] text-white sm:text-4xl">
          YAHIA SAAD
        </h1>
        <div className="mt-8 h-px overflow-hidden bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_22px_rgba(0,217,255,0.8)] transition-[width] duration-150"
            style={{ width: `${Math.round(progress)}%` }}
          />
        </div>
        <p className="mt-4 font-mono text-sm text-cyan-100/80">
          {Math.round(progress).toString().padStart(3, "0")}%
        </p>
      </div>
    </div>
  );
}
