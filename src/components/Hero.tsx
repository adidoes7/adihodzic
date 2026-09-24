"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState, type MouseEvent } from "react";
import Magnetic from "@/components/Magnetic";

const DEFAULT_WORDS = [
  "Product",
  "design",
  "for",
  "the",
  "industries",
  "where",
  "complexity",
  "is",
  "the",
  "whole",
  "job.",
];

const DEFAULT_PARAGRAPH =
  "I partner with founders and product teams to turn ideas into " +
  "functional interfaces that ship - handling research, " +
  "strategy, and hands-on craft in one person, with an AI-native " +
  "process built for speed, without losing the craft. Most " +
  "recently at Rokolabs LLC.";

type CTA = { label: string; href: string };

type Sparkle = {
  id: number;
  x: number;
  y: number;
  size: number;
  rotate: number;
  color: string;
};

let sparkleCounter = 0;
const SPARKLE_COLORS = ["var(--accent)", "#ffd27a", "#ffffff"];

export default function Hero({
  badge = "Senior Product Designer · 10+ years · Fintech, GovTech, AI/ML, Regulated Industries",
  words = DEFAULT_WORDS,
  accentWord = "complexity",
  paragraph = DEFAULT_PARAGRAPH,
  primaryCta = { label: "See selected work", href: "#work" },
  secondaryCta = { label: "About my process", href: "/about" },
}: {
  badge?: string;
  words?: string[];
  accentWord?: string;
  paragraph?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
}) {
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const springX = useSpring(glowX, { stiffness: 60, damping: 20, mass: 0.4 });
  const springY = useSpring(glowY, { stiffness: 60, damping: 20, mass: 0.4 });

  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const lastSpawn = useRef(0);

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    glowX.set(relX * 100);
    glowY.set(relY * 100);

    const now = Date.now();
    if (now - lastSpawn.current > 49) {
      lastSpawn.current = now;
      setSparkles((prev) => [
        ...prev.slice(-22),
        {
          id: sparkleCounter++,
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          size: 8 + Math.random() * 12,
          rotate: Math.random() * 70 - 35,
          color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
        },
      ]);
    }
  }

  function handleMouseLeave() {
    glowX.set(0);
    glowY.set(0);
  }

  function removeSparkle(id: number) {
    setSparkles((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-[#0b0a08] px-6 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32"
    >
      {/* cursor-tracking glow */}
      <motion.div
        aria-hidden
        style={{
          x: springX,
          y: springY,
          background: "radial-gradient(circle, var(--accent), transparent 70%)",
        }}
        className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full opacity-60 blur-[110px]"
      />
      {/* ambient drifting glows */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, #5b6bff, transparent 70%)" }}
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[380px] w-[380px] rounded-full opacity-45 blur-[110px]"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -20, 15, 0], y: [0, 15, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ background: "radial-gradient(circle, #ffb27a, transparent 70%)" }}
        className="pointer-events-none absolute top-1/3 left-1/4 h-[260px] w-[260px] rounded-full opacity-40 blur-[100px]"
      />

      {/* cursor sparkle trail */}
      <AnimatePresence>
        {sparkles.map((s) => (
          <motion.span
            key={s.id}
            initial={{ opacity: 1, scale: 0, x: s.x, y: s.y, rotate: s.rotate }}
            animate={{ opacity: 0, scale: 1.1, y: s.y - 36, rotate: s.rotate + 25 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            onAnimationComplete={() => removeSparkle(s.id)}
            className="pointer-events-none absolute left-0 top-0 z-20"
            style={{
              fontSize: s.size,
              color: s.color,
              filter: `drop-shadow(0 0 10px ${s.color})`,
            }}
          >
            ✦
          </motion.span>
        ))}
      </AnimatePresence>

      <div className="relative mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-white/70"
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          {badge}
        </motion.p>

        <h1 className="max-w-[960px] font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          {words.map((word, i) => (
            <span key={`${word}-${i}`}>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`inline-block ${
                  word.toLowerCase() === accentWord.toLowerCase()
                    ? "font-serif italic font-normal text-accent"
                    : ""
                }`}
              >
                {word}
              </motion.span>
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 max-w-[960px] text-xl text-white/70"
        >
          {paragraph}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Magnetic>
            <a
              href={primaryCta.href}
              className="inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0b0a08] transition-transform hover:-translate-y-0.5"
            >
              {primaryCta.label}
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={secondaryCta.href}
              className="inline-block rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent"
            >
              {secondaryCta.label}
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
