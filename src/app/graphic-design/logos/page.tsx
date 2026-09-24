import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Logo Collection",
  description: "A selection of logos and marks designed by Adi Hodzic.",
  robots: {
    index: false,
    follow: false,
  },
};

const IMG = "/images/graphic-design/logos/tiles";

type Logo = { slug: string; name: string };

const asmirLogos: Logo[] = [
  { slug: "goalkeeper-academy", name: "Asmir Begovic Goalkeeper Academy" },
  { slug: "leisurewear", name: "Asmir Begovic Leisurewear" },
  { slug: "sportswear", name: "Asmir Begovic Sportswear" },
  { slug: "goalkeeper-conference", name: "Goalkeeper Conference Sarajevo" },
  { slug: "season-of-sports", name: "Season of Sports with Asmir Begovic" },
  { slug: "glove-bank", name: "The Glove Bank" },
];

const otherLogos: Logo[] = [
  { slug: "intermezzo", name: "Intermezzo" },
  { slug: "mt-media", name: "MT Media" },
  { slug: "mayers-global", name: "Mayers Global LLC" },
  { slug: "mostar-live", name: "Mostar Live" },
  { slug: "stylo", name: "Stylo" },
  { slug: "travellearn", name: "TravelLearn" },
  { slug: "artheon", name: "Artheon" },
  { slug: "ekako", name: "Ekako" },
  { slug: "pmg", name: "PMG" },
];

const heroMosaic = ["intermezzo", "glove-bank", "leisurewear", "artheon"];

function LogoGrid({ logos }: { logos: Logo[] }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
      {logos.map((l, i) => (
        <Reveal key={l.slug} delay={(i % 3) * 0.06}>
          <figure className="group">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/${l.slug}.jpg`}
                alt={`${l.name} logo`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="mt-3 text-sm font-medium">{l.name}</figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

export default function LogoCollectionPage() {
  return (
    <article>
      <header className="relative overflow-hidden bg-[#0b0a08] px-6 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-[-5%] h-[460px] w-[460px] rounded-full opacity-60 blur-[120px]"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-[-8%] h-[380px] w-[380px] rounded-full opacity-45 blur-[120px]"
          style={{ background: "radial-gradient(circle, #ff4fa3, transparent 70%)" }}
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
              Logo Design
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
              Logo collection
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              A selection of logos and marks I&rsquo;ve designed.
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-[380px] grid-cols-2 gap-3">
            {heroMosaic.map((slug) => (
              <div
                key={slug}
                className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-black"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/${slug}.jpg`}
                  alt=""
                  aria-hidden
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <Link
            href="/graphic-design/ab1gk"
            className="group grid items-center gap-6 overflow-hidden rounded-3xl bg-black p-6 text-white sm:grid-cols-[220px_1fr] sm:gap-10 sm:p-8"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/ab1gk.jpg`}
                alt="The AB1GK logo in a metallic finish"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-[#ff4fa3]">
                Full project
              </p>
              <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight">
                AB1GK
              </h2>
              <p className="mt-2 max-w-xl leading-relaxed text-white/70">
                The construction sketches, the final mark, and the logo on real
                gloves.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                See the project
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </div>
          </Link>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Asmir Begovic
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Marks for the brands, projects, and events around AB1GK.
          </p>
        </Reveal>
        <LogoGrid logos={asmirLogos} />

        <Reveal className="mt-20">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Other brands
          </h2>
        </Reveal>
        <LogoGrid logos={otherLogos} />
      </div>
    </article>
  );
}
