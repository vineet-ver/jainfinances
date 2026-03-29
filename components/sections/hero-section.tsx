"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { SectionStickyLabel } from "@/components/ui/section-sticky-label";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "1000 Cr+", label: "Loans Given" },
  { value: "2000+", label: "Happy Clients" },
  { value: "12+", label: "Years Experience" },
];

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 pb-20 pt-36 md:px-10">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src="/hero-section.jpg" alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[--bg]/60 via-[--bg]/40 to-[--bg]" />
      </div>

      {/* Animated mesh overlay */}
      <div className="hero-mesh pointer-events-none absolute inset-0" aria-hidden />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8">
        <SectionStickyLabel label="Home" />

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[--text-secondary]">
            <span className="h-2 w-2 rounded-full bg-[--gold]" />
            Jain Financial Consultancy Service
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="max-w-5xl font-display text-5xl font-bold leading-[1.08] text-[--text-primary] md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
        >
          Fast Loans &{" "}
          <span className="gold-text">Private Funding</span>{" "}
          Made Simple for You.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="max-w-2xl text-lg leading-relaxed text-[--text-secondary] md:text-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
        >
          We help you get business loans, personal loans, and private funding quickly. No complex process, no long waiting. Just simple, trusted financial help.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <MagneticButton href="#inquiry" label="Apply for Loan" />
          <MagneticButton href="#private-funding" label="Learn About Funding" className="glass" />
        </motion.div>

        {/* Stat counters */}
        <motion.div
          className="mt-6 grid w-full max-w-2xl grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-[--radius-md] p-4 text-center md:p-5">
              <p className="font-display text-2xl font-bold text-[--gold] md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[--text-secondary]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[--text-muted]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.22em]">Scroll Down</span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-[--glass-border] p-1.5">
          <span className="h-2 w-2 rounded-full bg-[--gold]" />
        </span>
      </motion.div>
    </section>
  );
}
