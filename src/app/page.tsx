import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="work" className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Selected work
            </h2>
            <span className="hidden text-sm text-muted sm:block">
              {caseStudies.length} case studies
            </span>
          </div>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 0.08}>
              <CaseStudyCard study={study} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="max-w-2xl font-display text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl">
              I care less about pixel-perfect for its own sake and more about
              whether it&rsquo;s actually functional and usable.{" "}
              <span className="text-muted">Beautiful doesn&rsquo;t mean useful.</span>
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent"
            >
              More about how I work
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
