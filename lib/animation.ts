"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerScrollTrigger() {
  if (typeof window === "undefined" || registered) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function useGsapReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    registerScrollTrigger();

    const element = ref.current;
    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(element.querySelectorAll("[data-reveal]"), {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
      });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        element.querySelectorAll("[data-reveal]"),
        {
          autoAlpha: 0,
          y: 34,
          filter: "blur(10px)",
        },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.05,
          ease: "power3.out",
          stagger: 0.09,
          scrollTrigger: {
            trigger: element,
            start: "top 72%",
            once: true,
          },
        },
      );
    }, element);

    return () => context.revert();
  }, []);

  return ref;
}
