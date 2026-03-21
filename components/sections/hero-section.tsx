"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { CinematicReveal, ParallaxLayer } from "@/components/ui/cinematic";
import { GlitchText } from "@/components/ui/glitch-text";
import { MeshGradientBackground } from "@/components/ui/mesh-gradient-background";
import { SectionStickyLabel } from "@/components/ui/section-sticky-label";
import { shimmerBlurDataUrl } from "@/lib/blur";
import { motion } from "framer-motion";
import Image from "next/image";

const headline = "Pioneering Financial Excellence for the Discerning Client.";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 pb-20 pt-36 md:px-10">
      <div className="hero-bg absolute inset-0" aria-hidden />
      <MeshGradientBackground className="pointer-events-none absolute inset-0 opacity-35 mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <ParallaxLayer depth={120} useVelocity className="absolute inset-0 opacity-35">
          <Image
            src="/building4.jfif"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL={shimmerBlurDataUrl(1600, 900)}
            priority
          />
        </ParallaxLayer>
        <ParallaxLayer depth={70} useVelocity className="absolute -left-10 top-24 h-56 w-56 rounded-full bg-[--brand-solid]/15 blur-3xl md:h-72 md:w-72" />
        <ParallaxLayer depth={45} className="absolute -right-12 bottom-10 h-60 w-60 rounded-full bg-amber-300/15 blur-3xl md:h-80 md:w-80" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8">
        <SectionStickyLabel label="Home" />
        <p className="rounded-full border border-[--brand-border] bg-[--surface-2] px-4 py-1 text-xs uppercase tracking-[0.22em] text-[--text-secondary]">
          Jain Financial Consultancy Service
        </p>

        <h1 className="max-w-4xl font-display text-5xl leading-[1.06] text-[--text-primary] md:text-7xl">
          <GlitchText text={headline} variant="glitch" delay={0.08} />
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

        <div className="grid w-full max-w-4xl gap-4 sm:grid-cols-2">
          <CinematicReveal delay={0.2} amount={0.6} className="premium-card relative overflow-hidden rounded-2xl border border-[--brand-border] bg-[--surface-1] p-3">
            <div className="image-sheen relative h-36 overflow-hidden rounded-xl md:h-44">
              <Image
                src="/investment2.jfif"
                alt="Premium wealth strategy"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
                placeholder="blur"
                blurDataURL={shimmerBlurDataUrl(420, 240)}
              />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[--text-secondary]">Investment Intelligence</p>
            <p className="mt-1 font-display text-2xl text-[--text-primary]">Global Allocation & Tax-Efficient Growth</p>
          </CinematicReveal>

          <CinematicReveal delay={0.32} amount={0.6} className="premium-card relative overflow-hidden rounded-2xl border border-[--brand-border] bg-[--surface-1] p-3">
            <div className="image-sheen relative h-36 overflow-hidden rounded-xl md:h-44">
              <Image
                src="/building2.jfif"
                alt="Prime property advisory"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
                placeholder="blur"
                blurDataURL={shimmerBlurDataUrl(420, 240)}
              />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[--text-secondary]">Property & Credit Structuring</p>
            <p className="mt-1 font-display text-2xl text-[--text-primary]">Luxury Assets. Faster Capital Access.</p>
          </CinematicReveal>
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
