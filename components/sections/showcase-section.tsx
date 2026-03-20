"use client";

import { shimmerBlurDataUrl } from "@/lib/blur";
import { motion } from "framer-motion";
import Image from "next/image";

const properties = [
  {
    title: "Lutyens Signature Villa",
    type: "Sale",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Skyline Corporate Tower",
    type: "Investment",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Riverfront Penthouse",
    type: "Sale",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Global Tech Park",
    type: "Investment",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
  },
];

export function ShowcaseSection() {
  const cards = [...properties, ...properties];

  return (
    <section id="showcase" className="overflow-hidden py-24">
      <div className="mx-auto mb-10 flex max-w-7xl items-end justify-between gap-5 px-6 md:px-10">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[--text-secondary]">Real Estate Showcase</p>
          <h2 className="font-display text-4xl text-[--text-primary] md:text-5xl">Curated Premium Inventory</h2>
        </div>
      </div>

      <div className="marquee-track flex gap-6 px-6 md:px-10">
        {cards.map((property, index) => (
          <motion.article
            key={`${property.title}-${index}`}
            className="group relative w-[340px] shrink-0 overflow-hidden rounded-3xl border border-[--brand-border] bg-[--surface-1] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="relative h-[250px] overflow-hidden rounded-2xl">
              <Image
                src={property.image}
                alt={property.title}
                fill
                sizes="340px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                placeholder="blur"
                blurDataURL={shimmerBlurDataUrl(340, 250)}
              />
              <span className="absolute left-3 top-3 rounded-full border border-[--brand-border] bg-[var(--brand-gradient)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black">
                {property.type}
              </span>
            </div>
            <p className="px-2 pb-2 pt-4 font-display text-2xl text-[--text-primary]">{property.title}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
