"use client";

import { CinematicReveal, ParallaxLayer } from "@/components/ui/cinematic";
import { SectionStickyLabel } from "@/components/ui/section-sticky-label";
import { Skeleton } from "@/components/ui/skeleton";
import { shimmerBlurDataUrl } from "@/lib/blur";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const properties = [
  { title: "Lutyens Signature Villa", type: "Sale", image: "/building1.png" },
  { title: "Skyline Corporate Tower", type: "Investment", image: "/building3.png" },
  { title: "Riverfront Penthouse", type: "Sale", image: "/building5.png" },
  { title: "Global Tech Park", type: "Investment", image: "/investment3.png" },
  { title: "Capital Growth District", type: "Funding", image: "/private-fund1.png" },
  { title: "Smart Loan Portfolio", type: "Loan", image: "/loan1.png" },
];

export function ShowcaseSection() {
  const [loading, setLoading] = useState(true);
  const cards = [...properties, ...properties];

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 420);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section id="showcase" className="relative overflow-hidden py-24">
      <ParallaxLayer depth={36} useVelocity className="pointer-events-none absolute left-10 top-20 h-52 w-52 rounded-full bg-[--gold]/8 blur-3xl" />

      <CinematicReveal className="mx-auto mb-10 max-w-7xl px-6 md:px-10">
        <SectionStickyLabel label="Showcase" />
        <span className="gold-badge inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] mb-4">
          Our Work
        </span>
        <h2 className="font-display text-4xl font-bold text-[--text-primary] md:text-5xl">
          See What We Have Done
        </h2>
      </CinematicReveal>

      <div className="marquee-track flex gap-6 px-6 md:px-10">
        {(loading ? Array.from({ length: 4 }) : cards).map((property, index) => (
          <motion.article
            key={loading ? `skel-${index}` : `${(property as (typeof properties)[number]).title}-${index}`}
            className="group relative w-85 shrink-0"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {loading ? (
              <div className="glass relative h-[22rem] rounded-[--radius-lg] p-3">
                <Skeleton className="h-60 w-full rounded-[--radius-md]" />
                <Skeleton className="mt-4 h-8 w-4/5" />
              </div>
            ) : (
              <div className="premium-card glass relative h-[22rem] overflow-hidden rounded-[--radius-lg] p-3">
                <div className="image-sheen relative h-60 overflow-hidden rounded-[--radius-md]">
                  <Image
                    src={(property as (typeof properties)[number]).image}
                    alt={(property as (typeof properties)[number]).title}
                    fill
                    sizes="340px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    placeholder="blur"
                    blurDataURL={shimmerBlurDataUrl(340, 250)}
                  />
                  <span className="gold-badge absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    {(property as (typeof properties)[number]).type}
                  </span>
                </div>
                <p className="px-2 pb-2 pt-4 font-display text-xl font-bold text-[--text-primary]">
                  {(property as (typeof properties)[number]).title}
                </p>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
