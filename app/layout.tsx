import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yahia Saad — Build Beyond The Interface",
  description:
    "Cinematic portfolio for Yahia Saad, a self-directed developer building AI tools, web platforms, game technology, systems, and Erire.",
  applicationName: "Yahia Saad Portfolio",
  keywords: [
    "Yahia Saad",
    "YahiaWork",
    "Erire",
    "First Stand Studio",
    "WebGL",
    "React Three Fiber",
    "portfolio",
    "AI systems",
    "game development",
    "cybersecurity",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#05070A] text-[#F5F7FA] selection:bg-cyan-300 selection:text-black">
        {children}
      </body>
    </html>
  );
}
