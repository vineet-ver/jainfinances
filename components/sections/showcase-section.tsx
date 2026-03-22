"use client";

import { CinematicReveal, ParallaxLayer } from "@/components/ui/cinematic";
import { ImageZoomPan } from "@/components/ui/image-zoom-pan";
import { SectionStickyLabel } from "@/components/ui/section-sticky-label";
import { Skeleton } from "@/components/ui/skeleton";
import { shimmerBlurDataUrl } from "@/lib/blur";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const properties = [
  {
    title: "Lutyens Signature Villa",
    type: "Sale",
    image: "/building1.png",
  },
  {
    title: "Skyline Corporate Tower",
    type: "Investment",
    image: "/building3.png",
  },
  {
    title: "Riverfront Penthouse",
    type: "Sale",
    image: "/building5.png",
  },
  {
    title: "Global Tech Park",
    type: "Investment",
    image: "/investment3.png",
  },
  {
    title: "Capital Growth District",
    type: "Funding",
    image: "/private-fund1.png",
  },
  {
    title: "High-Yield Mobility Portfolio",
    type: "Loan",
    image: "/loan1.png",
  },
];

export function ShowcaseSection() {
  const [isLoadingCards, setIsLoadingCards] = useState(true);
  const cards = [...properties, ...properties];

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoadingCards(false), 420);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section id="showcase" className="relative overflow-hidden py-24">
      <ParallaxLayer depth={36} useVelocity className="pointer-events-none absolute left-10 top-20 h-52 w-52 rounded-full bg-[--brand-solid]/10 blur-3xl" />
      <ParallaxLayer depth={24} className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-amber-200/10 blur-3xl" />

      <CinematicReveal className="mx-auto mb-10 flex max-w-7xl items-end justify-between gap-5 px-6 md:px-10">
        <div>
          <SectionStickyLabel label="Showcase" />
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[--text-secondary]">Real Estate Showcase</p>
          <h2 className="font-display text-4xl text-[--text-primary] md:text-5xl">Curated Premium Inventory</h2>
        </div>
      </CinematicReveal>

      <div className="marquee-track flex gap-6 px-6 md:px-10">
        {(isLoadingCards ? Array.from({ length: 4 }) : cards).map((property, index) => (
          <motion.article
            key={isLoadingCards ? `showcase-skeleton-${index}` : `${(property as (typeof properties)[number]).title}-${index}`}
            className="group relative w-85 shrink-0 perspective-[1400px]"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {isLoadingCards ? (
              <div className="relative h-[22.8rem] rounded-3xl border border-[--brand-border] bg-[--surface-1] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <Skeleton className="h-62.5 w-full rounded-2xl" />
                <Skeleton className="mt-4 h-8 w-4/5" />
              </div>
            ) : (
            <div className="relative h-[22.8rem] rounded-3xl border border-[--brand-border] bg-[--surface-1] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">
              <div className="absolute inset-0 backface-hidden p-3">
                <ImageZoomPan depth={1.3} className="image-sheen h-62.5 rounded-2xl">
                  <div className="relative h-62.5 overflow-hidden rounded-2xl">
                    <Image
                      src={(property as (typeof properties)[number]).image}
                      alt={(property as (typeof properties)[number]).title}
                      fill
                      sizes="340px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      placeholder="blur"
                      blurDataURL={shimmerBlurDataUrl(340, 250)}
                    />
                    <span className="absolute left-3 top-3 rounded-full border border-[--brand-border] bg-(--brand-gradient) px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black">
                      {(property as (typeof properties)[number]).type}
                    </span>
                  </div>
                </ImageZoomPan>
                <p className="px-2 pb-2 pt-4 font-display text-2xl text-[--text-primary]">{(property as (typeof properties)[number]).title}</p>
              </div>

              <div className="absolute inset-0 flex transform-[rotateY(180deg)] flex-col justify-between rounded-3xl border border-[--brand-border] bg-[--surface-2] p-6 backface-hidden">
                <p className="text-xs uppercase tracking-[0.18em] text-[--text-secondary]">Opportunity Profile</p>
                <h3 className="font-display text-3xl text-[--text-primary]">{(property as (typeof properties)[number]).title}</h3>
                <div className="space-y-2 text-sm text-[--text-secondary]">
                  <p>Type: {(property as (typeof properties)[number]).type}</p>
                  <p>Structure: Bespoke Advisory Fit</p>
                  <p>Focus: Yield, Liquidity, Legacy Value</p>
                </div>
              </div>
            </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
