import type { Metadata } from "next";
import CreativeHero from "@/components/CreativeHero";
import Reveal from "@/components/Reveal";
import VisualWorkCard, { type VisualWorkItem } from "@/components/VisualWorkCard";

export const metadata: Metadata = {
  title: "Graphic & Brand Design",
  description:
    "Brand identity, print, packaging, and visual design work by Adi Hodzic.",
  robots: {
    index: false,
    follow: false,
  },
};

const visualWork: VisualWorkItem[] = [
  {
    title: "AB1GK - a logo that's also a number",
    description:
      "The identity for a professional goalkeeper's own gear brand: two letters, one shared stroke, and the number every goalkeeper wears.",
    tags: ["Logo Design", "Brand Identity"],
    gradient: ["#12060d", "#7a1d4a"],
    image: "/images/graphic-design/ab1gk/clean/step-7.png",
    href: "/graphic-design/ab1gk",
  },
  {
    title: "AB1GK - launch banners",
    description:
      "Website and mobile banners for a goalkeeper glove brand's product launches, each built around the glove's own colorway.",
    tags: ["Marketing", "Banners"],
    gradient: ["#1b1030", "#ff4fa3"],
    image: "/images/graphic-design/ab1gk-banners/opt/uno-vii-fortis-web.jpg",
    imageFit: "cover",
    imagePosition: "35% center",
    href: "/graphic-design/ab1gk-banners",
  },
  {
    title: "Logo collection",
    description:
      "A selection of logos and marks, from sports brands and events to independent ventures.",
    tags: ["Logo Design", "Identity"],
    gradient: ["#000000", "#3b0764"],
    image: "/images/graphic-design/logos/tiles/mosaic.jpg",
    imageFit: "cover",
    href: "/graphic-design/logos",
  },
  {
    title: "Print & Editorial Design",
    description:
      "Layout and typography for print and editorial pieces, where a grid has to hold up on paper as well as it does on screen.",
    tags: ["Print", "Editorial"],
    gradient: ["#172554", "#93c5fd"],
  },
  {
    title: "Packaging Design",
    description:
      "Structural and visual design for physical packaging - where a brand has to survive being held, not just viewed.",
    tags: ["Packaging", "Structural"],
    gradient: ["#052e16", "#86efac"],
  },
  {
    title: "Illustration & Iconography",
    description:
      "Custom illustration and icon work built to carry a brand's voice into the small, detailed moments.",
    tags: ["Illustration", "Iconography"],
    gradient: ["#451a03", "#fdba74"],
  },
];

export default function GraphicDesignPage() {
  return (
    <>
      <CreativeHero />

      <section id="work" className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Selected visual work
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              A running index of brand, print, packaging, and digital design
              work - updated as pieces get added.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visualWork.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <VisualWorkCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
