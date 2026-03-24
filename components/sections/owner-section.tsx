"use client";

import { CinematicReveal, ParallaxLayer } from "@/components/ui/cinematic";
import { SectionStickyLabel } from "@/components/ui/section-sticky-label";
import { motion } from "framer-motion";
import Image from "next/image";
import { shimmerBlurDataUrl } from "@/lib/blur";

export function OwnerSection() {
  return (
    <section id="owner" className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-10">
      <ParallaxLayer depth={20} className="pointer-events-none absolute right-6 top-6 h-44 w-44 rounded-full bg-[--gold]/8 blur-3xl" />
      <SectionStickyLabel label="About Us" />

      <CinematicReveal className="mb-10">
        <span className="gold-badge inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] mb-4">
          Our Team
        </span>
        <h2 className="font-display text-4xl font-bold text-[--text-primary] md:text-5xl">
          Meet the People Behind JFC
        </h2>
      </CinematicReveal>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Founder */}
        <CinematicReveal>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-[--radius-xl] p-6 text-center"
          >
            <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-2xl border-2 border-[--gold]/30 mb-5">
              <Image
                src="/founded.jpeg"
                alt="Surendra Jain"
                fill
                sizes="144px"
                className="object-cover"
                placeholder="blur"
                blurDataURL={shimmerBlurDataUrl(144, 144)}
                priority
              />
            </div>
            <span className="gold-badge inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.12em]">
              Founder & Owner
            </span>
            <p className="mt-3 font-display text-2xl font-bold text-[--text-primary]">Surendra Jain</p>
            <p className="mt-3 text-sm leading-relaxed text-[--text-secondary]">
              12+ years helping people get loans and safe private funding. He works fast, speaks clearly, and builds real trust with every client.
            </p>
            <div className="mt-4 inline-flex rounded-full border border-[--glass-border] bg-[--surface-card] px-4 py-2 text-xs font-bold text-[--gold]">
              12+ Years Experience
            </div>
          </motion.div>
        </CinematicReveal>

        {/* CEO */}
        <CinematicReveal delay={0.1}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-[--radius-xl] p-6 text-center"
          >
            <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-2xl border-2 border-[--blue]/30 mb-5">
              <Image
                src="/co.jpeg"
                alt="Payal Gupta"
                fill
                sizes="144px"
                className="object-cover"
                placeholder="blur"
                blurDataURL={shimmerBlurDataUrl(144, 144)}
                priority
              />
            </div>
            <span className="inline-block rounded-full bg-[--blue] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
              CEO
            </span>
            <p className="mt-3 font-display text-2xl font-bold text-[--text-primary]">Payal Gupta</p>
            <p className="mt-3 text-sm leading-relaxed text-[--text-secondary]">
              She manages the team and makes sure every client gets the best financial help without any hassle or delay.
            </p>
            <div className="mt-4 inline-flex rounded-full border border-[--glass-border] bg-[--surface-card] px-4 py-2 text-xs font-bold text-[--blue]">
              Leadership & Operations
            </div>
          </motion.div>
        </CinematicReveal>
      </div>
    </section>
  );
}
