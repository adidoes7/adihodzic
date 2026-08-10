"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

const LINKEDIN_URL = "https://www.linkedin.com/in/adidoes/";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-2xl font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          Adi Hodzic
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Magnetic strength={0.4}>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-foreground/15 px-4 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
          </Magnetic>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center sm:hidden"
        >
          <span className="relative block h-4 w-5">
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-0 h-px w-5 bg-foreground"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 bg-foreground"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-0 left-0 h-px w-5 bg-foreground"
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border/70 sm:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-full border border-foreground/15 px-4 py-2 text-center text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
