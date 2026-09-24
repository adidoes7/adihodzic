import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.oneLiner,
    openGraph: {
      title: study.title,
      description: study.oneLiner,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.oneLiner,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((s) => s.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article>
      <ScrollProgress />
      <header className="relative overflow-hidden">
        <div
          className="relative flex min-h-[60vh] flex-col justify-end px-6 pb-16 pt-32 sm:px-8 sm:pb-20"
          style={{
            background: `linear-gradient(135deg, ${study.gradient[0]}, ${study.gradient[1]})`,
          }}
        >
          <div className="mx-auto w-full max-w-4xl text-white">
            <Link
              href="/#work"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
            >
              ← All work
            </Link>
            <p className="mb-4 text-sm font-medium text-white/80">
              {study.company} · {study.timeline}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
              {study.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90">{study.oneLiner}</p>
            {study.confidentialityNote && (
              <p className="mt-4 max-w-2xl text-sm italic text-white/60">
                {study.confidentialityNote}
              </p>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 pt-16 pb-16 sm:px-8 sm:pb-24">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-y border-border py-8">
            {study.context.slice(0, 4).map((item, i) => (
              <div key={`${item.label}-${i}`}>
                <p className="text-xs font-medium uppercase tracking-wide text-muted">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            The problem
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/90">{study.problem}</p>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Process
          </h2>
          <div className="mt-6 space-y-10">
            {study.process.map((step, i) => (
              <div key={step.title} className="flex gap-5">
                <span
                  className="font-display text-2xl font-semibold"
                  style={{ color: study.accent }}
                >
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <div className="mt-2 space-y-3 leading-relaxed text-muted">
                    {(Array.isArray(step.body) ? step.body : [step.body]).map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {study.screenshots && study.screenshots.length > 0 && (
          <Reveal className="mt-16">
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Selected screens
            </h2>
            <div className="mt-6 space-y-10">
              {study.screenshots.map((shot) => (
                <figure key={shot.src}>
                  <div
                    className={`overflow-hidden rounded-2xl border border-border ${
                      shot.mobile ? "mx-auto max-w-[300px]" : ""
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={shot.src} alt={shot.alt} className="w-full" />
                  </div>
                  {shot.caption && (
                    <figcaption
                      className={`mt-3 text-sm text-muted ${
                        shot.mobile ? "mx-auto max-w-[300px] text-center" : ""
                      }`}
                    >
                      {shot.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </Reveal>
        )}

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Key decisions
          </h2>
          <div className="mt-6 space-y-6">
            {study.decisions.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="text-lg font-semibold">{d.title}</h3>
                <div className="mt-2 space-y-3 leading-relaxed text-muted">
                  {(Array.isArray(d.body) ? d.body : [d.body]).map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Outcome
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {study.outcome.map((o) => (
              <div key={o.label} className="rounded-2xl border border-border p-6">
                <p
                  className={`font-display font-semibold break-words ${
                    o.metric.length > 30 ? "text-2xl leading-snug" : "text-4xl"
                  }`}
                  style={{ color: study.accent }}
                >
                  {o.metric}
                </p>
                <p className="mt-2 text-sm text-muted">{o.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">{study.outcomeNote}</p>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            What I&rsquo;d do differently
          </h2>
          {Array.isArray(study.reflection) ? (
            <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/90">
              {study.reflection.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          ) : (
            <p className="mt-4 font-serif text-2xl italic leading-relaxed text-foreground/90 sm:text-3xl">
              &ldquo;{study.reflection}&rdquo;
            </p>
          )}
        </Reveal>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8">
          <Link href={`/work/${next.slug}`} className="group flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted">Next case study</p>
              <p className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                {next.title}
              </p>
            </div>
            <span
              aria-hidden
              className="text-2xl transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
