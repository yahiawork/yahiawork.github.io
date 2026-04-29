export const navLinks = [
  { label: "About", href: "#core" },
  { label: "Stack", href: "#capabilities" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export type CapabilityIcon = "brain" | "platform" | "game" | "cpu";

export type Capability = {
  icon: CapabilityIcon;
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    icon: "brain",
    title: "AI & ML Systems",
    description:
      "Experiments with intelligent tools, model logic, automation, and practical problem solving.",
  },
  {
    icon: "platform",
    title: "Full-Stack Platforms",
    description:
      "Flask, React, Node.js, Flutter, dashboards, APIs, websites, and deployed web products.",
  },
  {
    icon: "game",
    title: "Game Technology",
    description:
      "Unity, Godot, Unreal, Roblox Studio, Cocos2D, and gameplay systems across engines.",
  },
  {
    icon: "cpu",
    title: "Systems & Security",
    description:
      "C, C++, C#, Rust, C/Assembly interests, launchers, low-level logic, and ethical hacking.",
  },
];

export const engineLayers = [
  {
    label: "Language Layer",
    code: "01",
    description:
      "C, Python, Java, C++, C#, Kotlin, JavaScript, Rust, GDScript, Lua, TSX, Dart, and Pascal.",
  },
  {
    label: "Framework Layer",
    code: "02",
    description:
      "Flask, React, Node.js, and Flutter used to move ideas from prototype to deployed systems.",
  },
  {
    label: "Game Layer",
    code: "03",
    description:
      "Unity 6, Godot 4.3, Unreal Engine 4.25, Roblox Studio, Cocos2D, Frostbite 3, and RAGE research.",
  },
  {
    label: "Security Layer",
    code: "04",
    description:
      "Ethical hacking mindset, privacy awareness, systems thinking, and defensive technical curiosity.",
  },
  {
    label: "Hardware Layer",
    code: "05",
    description:
      "Built on an Intel i7-7700, 8GB RAM, and Intel HD 630, so performance discipline matters.",
  },
] as const;

export const projects = [
  {
    title: "Erire",
    category: "Language / IDE",
    description:
      "A personal programming language and IDE project shaped around direct control and creator tooling.",
    gradient: "from-[#8FD8FF]/70 via-[#00D9FF]/30 to-[#08111F]",
    href: "https://erire.pythonanywhere.com",
  },
  {
    title: "First Stand Studio",
    category: "Creative Studio",
    description:
      "A public-facing studio identity for experiments, games, web systems, and technical projects.",
    gradient: "from-[#7C5CFF]/70 via-[#00D9FF]/20 to-[#03040A]",
    href: "https://firststandstudio.github.io",
  },
  {
    title: "WaterIt",
    category: "Flask Utility",
    description:
      "A deployed web utility project exploring practical automation and clean product surfaces.",
    gradient: "from-[#00D9FF]/60 via-[#8FD8FF]/30 to-[#05070A]",
    href: "https://water252it.pythonanywhere.com",
  },
  {
    title: "EduPlatform",
    category: "Learning Platform",
    description:
      "A self-directed education platform built around structure, progress, and accessible learning.",
    gradient: "from-[#F5F7FA]/70 via-[#8FD8FF]/20 to-[#7C5CFF]/40",
    href: "https://yahiadev.pythonanywhere.com",
  },
  {
    title: "RocketStudio",
    category: "C++ / Python",
    description:
      "A desktop/software experiment from GitHub, combining low-level curiosity with builder energy.",
    gradient: "from-[#8FD8FF]/60 via-[#7C5CFF]/30 to-[#05070A]",
    href: "https://github.com/yahiawork/RocketStudio---Yahia-Saad",
  },
  {
    title: "Live Portfolio",
    category: "Web Portfolio",
    description:
      "The public YahiaWork portfolio and GitHub presence, rebuilt here as a cinematic 3D interface.",
    gradient: "from-[#00D9FF]/45 via-[#F5F7FA]/20 to-[#08111F]",
    href: "https://github.com/yahiawork/yahiawork.github.io",
  },
] as const;
