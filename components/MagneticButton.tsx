"use client";

import type { ReactNode } from "react";
import type { MouseEvent } from "react";
import { motion } from "framer-motion";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  ariaLabel?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: ReactNode;
};

const variantClasses = {
  primary:
    "border-cyan-200/30 bg-cyan-200 text-black shadow-[0_0_34px_rgba(0,217,255,0.28)] hover:bg-white",
  secondary:
    "border-white/12 bg-white/5 text-white hover:border-cyan-200/50 hover:bg-white/10",
  ghost:
    "border-white/10 bg-transparent text-white hover:border-purple-300/50 hover:bg-white/5",
};

export default function MagneticButton({
  children,
  href,
  ariaLabel,
  variant = "primary",
  className = "",
  icon,
}: MagneticButtonProps) {
  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.18;

    target.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const handleMouseLeave = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.style.transform = "translate3d(0, 0, 0)";
  };

  const classes = [
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-[transform,background,border-color,box-shadow] duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:px-6",
    variantClasses[variant],
    className,
  ].join(" ");

  if (href) {
    return (
      <motion.a
        aria-label={ariaLabel}
        className={classes}
        href={href}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        whileTap={{ scale: 0.98 }}
      >
        <span>{children}</span>
        {icon}
      </motion.a>
    );
  }

  return (
    <motion.button
      aria-label={ariaLabel}
      className={classes}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      type="button"
      whileTap={{ scale: 0.98 }}
    >
      <span>{children}</span>
      {icon}
    </motion.button>
  );
}
