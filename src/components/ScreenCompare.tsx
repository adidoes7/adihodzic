"use client";

import { useEffect, useState } from "react";

type Screen = {
  src: string;
  alt: string;
  caption?: string;
  label?: string;
  width: number;
  height: number;
};

export default function ScreenCompare({
  screens,
  cols,
}: {
  screens: Screen[];
  cols: 2 | 3;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const open = openIndex !== null ? screens[openIndex] : null;

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
      <div
        className={`grid grid-cols-1 items-start gap-6 ${
          cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
        }`}
      >
        {screens.map((s, i) => (
          <figure key={s.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Open ${s.label ?? "screen"} full size`}
              className="block cursor-zoom-in overflow-hidden rounded-2xl border border-border bg-surface transition-opacity hover:opacity-90"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                className="mx-auto block h-auto w-full"
                style={{ maxWidth: s.width }}
              />
            </button>
            {(s.label || s.caption) && (
              <figcaption className="mt-3">
                {s.label && (
                  <span className="block text-xs font-medium uppercase tracking-wide text-muted">
                    {s.label}
                  </span>
                )}
                {s.caption && (
                  <span className="mt-1 block text-sm leading-relaxed text-muted">
                    {s.caption}
                  </span>
                )}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.label ? `${open.label} screen` : "Screen detail"}
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
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[min(90vw,480px)] cursor-auto overflow-y-auto rounded-xl bg-white"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={open.src}
              alt={open.alt}
              width={open.width}
              height={open.height}
              className="block w-full h-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}
