"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import type { CaseStudy } from "@/data/caseStudies";

export default function CaseStudyCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  return (
    <Link href={`/work/${study.slug}`} className="group block">
      <Magnetic strength={0.06} className="block">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden rounded-3xl border border-border bg-surface"
      >
        <div className="relative flex h-64 items-end overflow-hidden p-6 sm:h-72">
          {study.image ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={study.image}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  background: `linear-gradient(135deg, ${study.gradient[0]}, ${study.gradient[1]})`,
                }}
              />
            </>
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${study.gradient[0]}, ${study.gradient[1]})`,
              }}
            />
          )}
          <span className="relative rounded-full bg-black/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {study.company}
          </span>
          <span className="absolute right-6 top-6 font-display text-xs font-semibold tracking-wide text-white/70">
            0{index + 1}
          </span>
        </div>
        <div className="p-6 sm:p-8">
          <div className="mb-3 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-balance sm:text-[1.75rem]">
            {study.title}
          </h3>
          <p className="mt-3 text-muted">{study.oneLiner}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
            Read the case study
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </motion.div>
      </Magnetic>
    </Link>
  );
}
