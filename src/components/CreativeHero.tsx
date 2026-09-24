"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState, type MouseEvent } from "react";
import Magnetic from "@/components/Magnetic";

const words = ["Graphic", "design", "for", "brands", "where", "identity", "is", "the", "whole", "job."];
const ACCENT_WORD = "identity";

const TICKER_ITEMS = [
  "BRAND IDENTITY",
  "PRINT",
  "PACKAGING",
  "ILLUSTRATION",
  "DIGITAL",
  "MARKETING",
];
const TICKER_COLORS = ["#ff4fa3", "#8b5cf6", "#22d3ee", "#fbbf24", "#34d399", "#ff4611"];

type Confetto = {
  id: number;
  x: number;
  y: number;
  size: number;
  rotate: number;
  color: string;
  shape: "circle" | "square" | "triangle";
};

let confettoCounter = 0;
const CONFETTI_COLORS = ["#ff4fa3", "#8b5cf6", "#22d3ee", "#fbbf24", "#34d399"];
const SHAPES: Confetto["shape"][] = ["circle", "square", "triangle"];

const GRAIN_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function CreativeHero() {
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const springX = useSpring(glowX, { stiffness: 60, damping: 20, mass: 0.4 });
  const springY = useSpring(glowY, { stiffness: 60, damping: 20, mass: 0.4 });

  const [confetti, setConfetti] = useState<Confetto[]>([]);
  const lastSpawn = useRef(0);

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    glowX.set(relX * 100);
    glowY.set(relY * 100);

    const now = Date.now();
    if (now - lastSpawn.current > 45) {
      lastSpawn.current = now;
      setConfetti((prev) => [
        ...prev.slice(-26),
        {
          id: confettoCounter++,
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          size: 7 + Math.random() * 11,
          rotate: Math.random() * 360,
          color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
          shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
        },
      ]);
    }
  }

  function handleMouseLeave() {
    glowX.set(0);
    glowY.set(0);
  }

  function removeConfetto(id: number) {
    setConfetti((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-[#0b0a08]"
    >
      {/* maximalist gradient mesh */}
      <motion.div
        aria-hidden
        style={{ x: springX, y: springY, background: "radial-gradient(circle, #ff4fa3, transparent 70%)" }}
        className="pointer-events-none absolute -top-24 right-[-5%] h-[460px] w-[460px] rounded-full opacity-70 blur-[120px]"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, -15, 0], y: [0, -25, 10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
        className="pointer-events-none absolute -bottom-32 left-[-8%] h-[420px] w-[420px] rounded-full opacity-55 blur-[120px]"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -25, 20, 0], y: [0, 20, -15, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        style={{ background: "radial-gradient(circle, #22d3ee, transparent 70%)" }}
        className="pointer-events-none absolute top-1/4 left-1/3 h-[280px] w-[280px] rounded-full opacity-45 blur-[100px]"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, 20, -20, 0], y: [0, -15, 15, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{ background: "radial-gradient(circle, #fbbf24, transparent 70%)" }}
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-[240px] w-[240px] rounded-full opacity-40 blur-[100px]"
      />

      {/* grain texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{ backgroundImage: GRAIN_BG }}
      />

      {/* cursor confetti trail */}
      <AnimatePresence>
        {confetti.map((c) => (
          <motion.span
            key={c.id}
            initial={{ opacity: 1, scale: 0, x: c.x, y: c.y, rotate: c.rotate }}
            animate={{ opacity: 0, scale: 1.2, y: c.y - 40, rotate: c.rotate + 40 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            onAnimationComplete={() => removeConfetto(c.id)}
            className="pointer-events-none absolute left-0 top-0 z-20"
            style={{
              width: c.size,
              height: c.size,
              background: c.shape === "triangle" ? "transparent" : c.color,
              borderRadius: c.shape === "circle" ? "9999px" : c.shape === "square" ? "3px" : 0,
              borderLeft: c.shape === "triangle" ? `${c.size / 2}px solid transparent` : undefined,
              borderRight: c.shape === "triangle" ? `${c.size / 2}px solid transparent` : undefined,
              borderBottom: c.shape === "triangle" ? `${c.size}px solid ${c.color}` : undefined,
              filter: `drop-shadow(0 0 6px ${c.color})`,
            }}
          />
        ))}
      </AnimatePresence>

      {/* marquee ticker */}
      <div className="relative overflow-hidden border-b border-white/10 bg-black/40 py-3">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex w-max items-center gap-8 whitespace-nowrap"
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="text-sm font-semibold tracking-[0.15em] uppercase"
              style={{ color: TICKER_COLORS[i % TICKER_COLORS.length] }}
            >
              {item} <span className="text-white/30">&bull;</span>
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-24 sm:px-8 sm:pt-20 sm:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-white/70"
        >
          <span className="h-2 w-2 rounded-full bg-[#ff4fa3]" />
          Brand &amp; Visual Designer · Identity, Print, and Digital Design Work
        </motion.p>

        <h1 className="max-w-[960px] font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          {words.map((word, i) => {
            const isAccent = word.toLowerCase() === ACCENT_WORD;
            return (
              <span key={`${word}-${i}`}>
                <motion.span
                  initial={{ opacity: 0, y: 24, rotate: isAccent ? -4 : 0 }}
                  animate={{ opacity: 1, y: 0, rotate: isAccent ? -3 : 0 }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="relative inline-block"
                >
                  {isAccent && (
                    <span
                      aria-hidden
                      className="absolute -inset-x-2 top-[0.35em] bottom-[0.1em] -z-10 -rotate-2 rounded-sm"
                      style={{ background: "#ff4fa3" }}
                    />
                  )}
                  <span className={isAccent ? "text-[#0b0a08]" : ""}>{word}</span>
                </motion.span>
                {i < words.length - 1 ? " " : ""}
              </span>
            );
          })}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 max-w-[960px] text-xl text-white/70"
        >
          I design brand identities and the visual systems that carry them -
          logos, print, packaging, and marketing work that has to hold up
          wherever it shows up. It&rsquo;s the same instinct behind AB1GK&rsquo;s
          identity, built from a blank page, and years of client-facing
          brand and digital design before it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Magnetic>
            <a
              href="#work"
              className="inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0b0a08] transition-transform hover:-translate-y-0.5"
            >
              See visual work
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="/"
              className="inline-block rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[#ff4fa3] hover:text-[#ff4fa3]"
            >
              Back to product work
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
