import type { Metadata } from "next";
import CreativeHero from "@/components/CreativeHero";
import Reveal from "@/components/Reveal";
import VisualWorkCard, { type VisualWorkItem } from "@/components/VisualWorkCard";

export const metadata: Metadata = {
  title: "Web & Visual Design",
  description:
    "Brand identity, print, packaging, and visual design work by Adi Hodzic.",
  robots: {
    index: false,
    follow: false,
  },
};

const websites: VisualWorkItem[] = [
  {
    title: "AB1GK e-commerce",
    description:
      "The storefront for a goalkeeper gear brand, with product pages, pricing, checkout and payment flows designed and built from the ground up, and still running today.",
    tags: ["E-commerce", "WooCommerce"],
    gradient: ["#450a0a", "#f87171"],
    image: "/images/graphic-design/ab1gk-ecommerce-storefront.jpg",
    imageFit: "cover",
    imagePosition: "top",
    href: "/work/ab1gk-brand-ecommerce",
    size: "large",
  },
];

const brandAndCampaigns: VisualWorkItem[] = [
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
];

export default function GraphicDesignPage() {
  return (
    <>
      <CreativeHero />

      <section id="work" className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Websites &amp; E-commerce
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {websites.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <VisualWorkCard item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Brand &amp; Campaign Design
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {brandAndCampaigns.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <VisualWorkCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
