import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AB1GK Logo & Brand Identity",
  description:
    "How the AB1GK mark was built: two letters, one shared stroke, and the number every goalkeeper wears.",
  robots: {
    index: false,
    follow: false,
  },
};

const IMG = "/images/graphic-design/ab1gk/clean";

const steps = [
  {
    src: `${IMG}/step-1.png`,
    title: "Start with the 1",
    body: "The number every goalkeeper wears, and the one Asmir wore through his own career.",
  },
  {
    src: `${IMG}/step-2.png`,
    title: "The same stroke becomes an A",
    body: "A single crossbar turns the 1 into the first initial without adding a new shape.",
  },
  {
    src: `${IMG}/step-3.png`,
    title: "The B wraps around it",
    body: "The second initial curves around the shared stroke, so all three forms overlap.",
  },
  {
    src: `${IMG}/step-5.png`,
    title: "The A, on its own",
    body: "The first initial has to read clearly without the B behind it.",
  },
  {
    src: `${IMG}/step-4.png`,
    title: "The B, on its own",
    body: "And the second one has to hold up without the A behind it.",
  },
  {
    src: `${IMG}/step-6.png`,
    title: "The 1 is the spine",
    body: "Isolate the number and it turns out to be the stroke both letters are built on.",
  },
];

const PLAYERS_IMG = "/images/graphic-design/ab1gk/players";

const players = [
  { src: `${PLAYERS_IMG}/tom-heaton.jpg`, name: "Tom Heaton", team: "Manchester United" },
  { src: `${PLAYERS_IMG}/alexander-meyer.jpg`, name: "Alexander Meyer", team: "Borussia Dortmund" },
  { src: `${PLAYERS_IMG}/sabrina-dangelo.jpg`, name: "Sabrina D'Angelo", team: "Arsenal" },
  { src: `${PLAYERS_IMG}/melina-loeck.jpg`, name: "Melina Loeck", team: "Brighton" },
  { src: `${PLAYERS_IMG}/vanja-milinkovic-savic.jpg`, name: "Vanja Milinković-Savić", team: "Serbia" },
  { src: `${PLAYERS_IMG}/anthony-nunez.jpg`, name: "Anthony Nunez", team: "Dominican Republic" },
];

const facts = [
  { label: "Brand", value: "AB1GK" },
  { label: "Scope", value: "Logo mark and brand identity" },
  { label: "Year", value: "2019" },
  { label: "Worked with", value: "Founder Asmir Begovic" },
];

export default function AB1GKIdentityPage() {
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
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
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
              Logo Design · Brand Identity
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
              A logo that&rsquo;s also a number
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              The mark for a professional goalkeeper&rsquo;s own gear brand: two
              letters, one shared stroke, and the number every goalkeeper wears.
            </p>
          </div>
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMG}/step-7.png`}
              alt="The AB1GK logo: the letters A and B overlapping so that their shared stroke reads as the number 1"
              className="h-[320px] w-auto md:h-[400px]"
            />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-y border-border py-8 sm:grid-cols-4">
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
            The idea
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/90">
            <p>
              AB1GK is the goalkeeper gear brand of Asmir Begovic, a Premier
              League champion with Chelsea. The brief was
              a mark that belonged to him rather than to the category, so
              instead of borrowing the look of established goalkeeper brands, I
              built the logo out of things that already meant something: his
              initials, and the number he wore.
            </p>
            <p>
              We worked through moodboards and sketches together, almost daily,
              until one idea held: overlap the A and the B so that the stroke
              they share reads as a 1. It&rsquo;s the goalkeeper&rsquo;s number,
              and it&rsquo;s his own.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            How the mark was built
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            The construction sketches, in order. Pink is the outline still to
            come; white is what&rsquo;s been committed.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="overflow-hidden rounded-3xl bg-[#0b0a08] p-6"
              >
                <div className="flex h-64 items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.src}
                    alt={s.title}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <p className="mt-4 font-display text-sm font-semibold text-[#ff4fa3]">
                  0{i + 1}
                </p>
                <h3 className="mt-1 text-base font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/60">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col justify-between gap-8 overflow-hidden rounded-3xl bg-[#0b0a08] p-8 text-white md:p-10">
              <div className="flex flex-1 items-center justify-center py-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/step-7.png`}
                  alt="The final AB1GK mark"
                  className="h-64 w-auto"
                />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-[#ff4fa3]">
                  07
                </p>
                <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">
                  The final mark
                </h3>
                <p className="mt-3 leading-relaxed text-white/70">
                  A hand-drawn stroke that reads as AB at a glance, and as a 1
                  once you know to look for it.
                </p>
              </div>
            </div>
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/logo-chrome.jpg`}
                alt="The AB1GK mark in a stylized metallic finish"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-10">
                <p className="font-display text-sm font-semibold text-[#ff4fa3]">
                  Stylized version
                </p>
                <p className="mt-1 leading-relaxed text-white/70">
                  The same mark with a metallic finish.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            The mark in play
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            The logo on real gloves, worn by goalkeepers at clubs and national
            teams.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {players.map((p) => (
              <figure
                key={p.name}
                className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-[#0b0a08]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={`${p.name} (${p.team}) wearing gloves with the AB logo`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/75 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                  <p className="font-display text-base font-semibold leading-tight sm:text-lg">
                    {p.name}
                  </p>
                  <p className="mt-0.5 text-xs text-white/70 sm:text-sm">
                    {p.team}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16 border-t border-border pt-10">
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
