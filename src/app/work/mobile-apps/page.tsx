import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import VisualWorkCard, { type VisualWorkItem } from "@/components/VisualWorkCard";

export const metadata: Metadata = {
  title: "Mobile App Case Studies",
  description:
    "Mobile product design case studies by Adi Hodzic, covering compliance workflows and field-operations monitoring.",
  robots: {
    index: false,
    follow: false,
  },
};

const projects: VisualWorkItem[] = [
  {
    title: "ComplySci Mobile App",
    description:
      "Submitting, tracking, and reviewing compliance requests on mobile, designed with a colleague at ROKOLabs.",
    tags: ["FinTech / RegTech", "UX/UI Design"],
    gradient: ["#061e2c", "#5fa8c9"],
    image: "/images/case-studies/complysci/screens/11-admin-trade-review.png",
    href: "/work/complysci",
    size: "large",
  },
  {
    title: "FracStream Mobile",
    description:
      "A mobile redesign of Tally Energy's monitoring platform, covering pad status, live charts, and operational statistics.",
    tags: ["Energy Operations", "UX/UI Design"],
    gradient: ["#0a1a12", "#4fa87a"],
    image: "/images/case-studies/fracstream-mobile/screens/03-stats-overview.png",
    href: "/work/fracstream-mobile",
    size: "large",
  },
];

export default function MobileAppsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <Link
          href="/#work"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground"
        >
          ← All work
        </Link>
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Mobile App Case Studies
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Product design work for mobile apps, from compliance workflows to
          field-operations monitoring.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {projects.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <VisualWorkCard item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
