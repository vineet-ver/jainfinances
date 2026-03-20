"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { motion } from "framer-motion";

const headline = "Pioneering Financial Excellence for the Discerning Client.";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 pb-20 pt-36 md:px-10">
      <div className="hero-bg absolute inset-0" aria-hidden />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8">
        <p className="rounded-full border border-[--brand-border] bg-[--surface-2] px-4 py-1 text-xs uppercase tracking-[0.22em] text-[--text-secondary]">
          Jain Financial Consultancy Service
        </p>

        <h1 className="max-w-4xl font-display text-5xl leading-[1.06] text-[--text-primary] md:text-7xl">
          {headline.split("").map((char, idx) => (
            <motion.span
              key={`${char}-${idx}`}
              initial={{ y: 26, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.02, duration: 0.65, ease: [0.2, 0.65, 0.2, 1] }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="max-w-xl text-lg text-[--text-secondary] md:text-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          Loan Services | Real Estate | Private Funding.
        </motion.p>

        <div className="flex flex-wrap items-center gap-4">
          <MagneticButton href="#inquiry" label="Start Application" />
          <MagneticButton href="#showcase" label="Explore Showcase" className="bg-[--surface-2]" />
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[--text-secondary]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[11px] uppercase tracking-[0.22em]">Scroll to Explore</span>
        <span className="flex h-11 w-7 items-start justify-center rounded-full border border-[--brand-border] p-1.5">
          <span className="h-2 w-2 rounded-full bg-[--brand-solid]" />
        </span>
      </motion.div>
    </section>
  );
}
