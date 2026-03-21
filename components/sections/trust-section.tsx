"use client";

import { CinematicReveal, ParallaxLayer } from "@/components/ui/cinematic";
import { ScrollCounter } from "@/components/ui/scroll-counter";
import { SectionStickyLabel } from "@/components/ui/section-sticky-label";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = ["HDFC", "ICICI", "AXIS", "KOTAK", "IDFC", "SBI"];

const digitalAssets = [
  { icon: "/globe.svg", label: "Global Research" },
  { icon: "/window.svg", label: "Unified Dashboard" },
  { icon: "/file.svg", label: "Secure Documentation" },
  { icon: "/next.svg", label: "Fast Web Layer" },
  { icon: "/vercel.svg", label: "Enterprise Hosting" },
];

export function TrustSection() {
  return (
    <section id="trust" className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-10">
      <ParallaxLayer depth={28} useVelocity className="pointer-events-none absolute -left-20 top-14 h-56 w-56 rounded-full bg-[--brand-solid]/10 blur-3xl" />
      <ParallaxLayer depth={16} className="pointer-events-none absolute -right-8 bottom-6 h-64 w-64 rounded-full bg-amber-200/12 blur-3xl" />
      <SectionStickyLabel label="Trust" />
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[--text-secondary]">Why Choose Us</p>
      <h2 className="font-display text-4xl text-[--text-primary] md:text-5xl">Proven Outcomes. Trusted Partnerships.</h2>

      <CinematicReveal className="mt-10 grid gap-5 md:grid-cols-3">
        <article className="rounded-3xl border border-[--brand-border] bg-[--surface-1] p-6">
          <ScrollCounter value={20} suffix="+" className="font-display text-4xl text-[--text-primary] md:text-5xl" />
          <p className="mt-2 text-sm uppercase tracking-[0.12em] text-[--text-secondary]">Years Experience</p>
        </article>
        <article className="rounded-3xl border border-[--brand-border] bg-[--surface-1] p-6">
          <ScrollCounter value={500} suffix="Cr+" className="font-display text-4xl text-[--text-primary] md:text-5xl" />
          <p className="mt-2 text-sm uppercase tracking-[0.12em] text-[--text-secondary]">Disbursed</p>
        </article>
        <article className="rounded-3xl border border-[--brand-border] bg-[--surface-1] p-6">
          <ScrollCounter value={1000} suffix="+" className="font-display text-4xl text-[--text-primary] md:text-5xl" />
          <p className="mt-2 text-sm uppercase tracking-[0.12em] text-[--text-secondary]">Happy Clients</p>
        </article>
      </CinematicReveal>

      <CinematicReveal delay={0.08} className="mt-12 overflow-hidden rounded-3xl border border-[--brand-border] bg-[--surface-1] py-5">
        <motion.div
          className="flex w-max gap-4 px-4"
          animate={{ x: [0, -540] }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity }}
        >
          {[...partners, ...partners].map((partner, idx) => (
            <span
              key={`${partner}-${idx}`}
              className="rounded-full border border-[--brand-border] bg-[--surface-2] px-6 py-3 text-sm font-medium tracking-wider text-[--text-secondary] grayscale transition hover:text-[--text-primary] hover:grayscale-0"
            >
              {partner}
            </span>
          ))}
        </motion.div>
      </CinematicReveal>

      <CinematicReveal delay={0.15} className="mt-8 rounded-3xl border border-[--brand-border] bg-[--surface-1] p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[--text-secondary]">Digital Backbone</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {digitalAssets.map((item) => (
            <article key={item.label} className="premium-card flex items-center gap-3 rounded-2xl border border-[--brand-border] bg-[--surface-2] p-4">
              <div className="relative h-8 w-8 overflow-hidden rounded-md">
                <Image src={item.icon} alt={item.label} fill sizes="32px" className="object-contain" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[--text-secondary]">{item.label}</p>
            </article>
          ))}
        </div>
      </CinematicReveal>
    </section>
  );
}
