"use client";

import { useEffect, useState } from "react";

type ComparisonPanel = {
  label: string;
  src: string;
  alt: string;
  caption: string;
};

export default function BeforeAfter({ panels }: { panels: ComparisonPanel[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const open = openIndex !== null ? panels[openIndex] : null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="my-6 grid gap-6 md:grid-cols-2">
        {panels.map((p, i) => (
          <figure key={p.label}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Open ${p.label.toLowerCase()} screenshot full size`}
              className="block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-border bg-surface transition-opacity hover:opacity-90"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt} className="block h-auto w-full" />
            </button>
            <figcaption className="mt-3">
              <span className="block text-xs font-medium uppercase tracking-wide text-muted">
                {p.label}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-muted">
                {p.caption}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${open.label} screenshot`}
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/85 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white hover:bg-white/20 sm:right-6 sm:top-6"
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={open.src}
            alt={open.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full rounded-xl object-contain"
          />
        </div>
      )}
    </>
  );
}
