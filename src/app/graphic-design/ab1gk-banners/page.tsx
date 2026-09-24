import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AB1GK Launch Banners",
  description:
    "Website and mobile launch banners for a goalkeeper glove brand.",
  robots: {
    index: false,
    follow: false,
  },
};

const IMG = "/images/graphic-design/ab1gk-banners/opt";

const campaigns = [
  {
    name: "UNO VII Fortis",
    web: `${IMG}/uno-vii-fortis-web.jpg`,
    mobile: `${IMG}/uno-vii-fortis-mobile.jpg`,
    note: "The pink and blue of the glove runs through the background shards and into the name itself.",
  },
  {
    name: "Undici Nero Gold",
    web: `${IMG}/nero-gold-web.jpg`,
    mobile: `${IMG}/nero-gold-mobile.jpg`,
    note: "Black and gold throughout, with the product name repeated as a quiet texture behind the glove.",
  },
];

const PLACEHOLDER_CAMPAIGNS = 4;

const facts = [
  { label: "Brand", value: "AB1GK" },
  { label: "Scope", value: "Launch and product banners" },
  { label: "Formats", value: "Website hero and mobile" },
];

const PAIR_GRID = "grid gap-4 md:grid-cols-[2.233fr_1fr] md:gap-6";

export default function AB1GKBannersPage() {
  return (
    <article>
      <header className="relative overflow-hidden bg-[#0b0a08] px-6 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-[-5%] h-[460px] w-[460px] rounded-full opacity-60 blur-[120px]"
          style={{ background: "radial-gradient(circle, #ff4fa3, transparent 70%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-[-8%] h-[380px] w-[380px] rounded-full opacity-45 blur-[120px]"
          style={{ background: "radial-gradient(circle, #22d3ee, transparent 70%)" }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.3fr_1fr]">
          <div className="text-white">
            <Link
              href="/graphic-design#work"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white"
            >
              ← All visual work
            </Link>
            <p className="mb-4 flex items-center gap-2 text-sm font-medium text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#ff4fa3]" />
              Marketing · Banners
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
              AB1GK launch banners
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Website and mobile banners for a goalkeeper glove brand&rsquo;s
              product launches.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[380px] overflow-hidden rounded-3xl border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={campaigns[0].mobile}
              alt="UNO VII Fortis launch banner, mobile version"
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-y border-border py-8 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label}>
                <p className="text-xs font-medium uppercase tracking-wide text-muted">
                  {f.label}
                </p>
                <p className="mt-1 text-sm font-medium">{f.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            The approach
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/90">
            Every launch gets its own visual world, built from the product it
            is selling. Each one is designed as a wide website banner and a
            square mobile version, so the same campaign holds up on a desktop
            hero and on a phone.
          </p>
        </Reveal>

        <div className="mt-16 space-y-16">
          {campaigns.map((c) => (
            <Reveal key={c.name}>
              <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                {c.name}
              </h3>
              <p className="mt-2 max-w-2xl text-muted">{c.note}</p>
              <div className={`mt-6 ${PAIR_GRID}`}>
                <figure>
                  <div className="aspect-[1920/860] overflow-hidden rounded-3xl bg-[#0b0a08]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.web}
                      alt={`${c.name} launch banner, website version`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs font-medium uppercase tracking-wide text-muted">
                    Website
                  </figcaption>
                </figure>
                <figure>
                  <div className="aspect-square overflow-hidden rounded-3xl bg-[#0b0a08]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.mobile}
                      alt={`${c.name} launch banner, mobile version`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs font-medium uppercase tracking-wide text-muted">
                    Mobile
                  </figcaption>
                </figure>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            More campaigns
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            More launch banners will be added here.
          </p>
          <div className="mt-8 space-y-6">
            {Array.from({ length: PLACEHOLDER_CAMPAIGNS }).map((_, i) => (
              <div key={i} aria-hidden className={PAIR_GRID}>
                <div className="flex aspect-[1920/860] items-center justify-center rounded-3xl border-2 border-dashed border-border text-sm font-medium text-muted">
                  Website banner
                </div>
                <div className="flex aspect-square items-center justify-center rounded-3xl border-2 border-dashed border-border text-sm font-medium text-muted">
                  Mobile banner
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16 flex flex-col gap-4 border-t border-border pt-10">
          <Link
            href="/graphic-design/ab1gk"
            className="group inline-flex items-center gap-2 text-lg font-medium"
          >
            See the AB1GK logo and identity
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
          <Link
            href="/work/ab1gk-brand-ecommerce"
            className="group inline-flex items-center gap-2 text-lg font-medium"
          >
            See the ecommerce and product side of AB1GK
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
