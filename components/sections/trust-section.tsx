"use client";

import { CinematicReveal, ParallaxLayer } from "@/components/ui/cinematic";
import { ScrollCounter } from "@/components/ui/scroll-counter";
import { SectionStickyLabel } from "@/components/ui/section-sticky-label";
import { motion } from "framer-motion";

const partners = ["HDFC", "ICICI", "AXIS", "KOTAK", "IDFC", "SBI"];

export function TrustSection() {
  return (
    <section id="trust" className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-10">
      <ParallaxLayer depth={28} useVelocity className="pointer-events-none absolute -left-20 top-14 h-56 w-56 rounded-full bg-[--gold]/8 blur-3xl" />
      <SectionStickyLabel label="Trust" />

      <CinematicReveal className="mb-10">
        <span className="gold-badge inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] mb-4">
          Why People Trust Us
        </span>
        <h2 className="font-display text-4xl font-bold text-[--text-primary] md:text-5xl lg:text-6xl">
          Numbers That Speak for Us
        </h2>
      </CinematicReveal>

      {/* Counter cards */}
      <CinematicReveal className="grid gap-5 md:grid-cols-3">
        <article className="glass rounded-[--radius-lg] p-6 text-center">
          <ScrollCounter value={12} suffix="+" className="font-display text-5xl font-bold text-[--gold] md:text-6xl" />
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-[--text-secondary]">Years Experience</p>
        </article>
        <article className="glass rounded-[--radius-lg] p-6 text-center">
          <ScrollCounter value={1000} suffix=" Cr+" className="font-display text-5xl font-bold text-[--gold] md:text-6xl" />
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-[--text-secondary]">Loans Given</p>
        </article>
        <article className="glass rounded-[--radius-lg] p-6 text-center">
          <ScrollCounter value={2000} suffix="+" className="font-display text-5xl font-bold text-[--gold] md:text-6xl" />
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-[--text-secondary]">Happy Clients</p>
        </article>
      </CinematicReveal>

      {/* Partner marquee */}
      <CinematicReveal delay={0.08} className="mt-10 glass overflow-hidden rounded-[--radius-lg] py-5">
        <motion.div
          className="flex w-max gap-4 px-4"
          animate={{ x: [0, -540] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {[...partners, ...partners].map((partner, idx) => (
            <span
              key={`${partner}-${idx}`}
              className="rounded-full border border-[--glass-border] bg-[--surface-card] px-7 py-3 text-sm font-bold tracking-wider text-[--text-secondary] transition-colors hover:border-[--gold] hover:text-[--gold]"
            >
              {partner}
            </span>
          ))}
        </motion.div>
      </CinematicReveal>
    </section>
  );
}
