"use client";

import { CinematicReveal, ParallaxLayer } from "@/components/ui/cinematic";
import { SectionStickyLabel } from "@/components/ui/section-sticky-label";
import { motion } from "framer-motion";
import Image from "next/image";

import { shimmerBlurDataUrl } from "@/lib/blur";

export function OwnerSection() {
  return (
    <section id="owner" className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-10">
      <ParallaxLayer depth={20} className="pointer-events-none absolute right-6 top-6 h-44 w-44 rounded-full bg-[--brand-solid]/10 blur-3xl" />
      <SectionStickyLabel label="Leadership" />
      <CinematicReveal className="space-y-6 rounded-3xl border border-[--brand-border] bg-[--surface-1] p-6 md:space-y-8 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-3"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[--text-secondary]">Leadership</p>
          <h2 className="font-display text-4xl leading-tight text-[--text-primary] md:text-5xl">
            Expert Financial Leadership
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Owner - Surendra Jain */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="rounded-2xl border border-[--brand-border] bg-[--surface-2] p-6"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-2xl border border-[--brand-border] mb-5">
                <Image
                  src="/jain.png"
                  alt="Surendra Jain"
                  fill
                  sizes="128px"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={shimmerBlurDataUrl(128, 128)}
                  priority
                />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-[--text-secondary]">Founder & Owner</p>
              <p className="mt-2 font-display text-2xl text-[--text-primary]">Surendra Jain</p>
              <p className="mt-3 text-sm leading-relaxed text-[--text-secondary]">
                12+ years of hands-on expertise across loans, real estate, and private funding. Relationship-driven approach focused on speed, clarity, and trust.
              </p>
              <div className="mt-4 inline-flex rounded-full border border-[--brand-border] bg-[--surface-1] px-3 py-1.5 text-xs text-[--text-primary]">
                12+ Years Experience
              </div>
            </div>
          </motion.div>

          {/* CEO - Payal Gupta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="rounded-2xl border border-[--brand-border] bg-[--surface-2] p-6"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-2xl border border-[--brand-border] mb-5">
                <Image
                  src="/co-founder.jpeg"
                  alt="Payal Gupta"
                  fill
                  sizes="128px"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={shimmerBlurDataUrl(128, 128)}
                  priority
                />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-[--text-secondary]">CEO</p>
              <p className="mt-2 font-display text-2xl text-[--text-primary]">Payal Gupta</p>
              <p className="mt-3 text-sm leading-relaxed text-[--text-secondary]">
                Strategic vision and operational excellence driving growth. Expert in financial planning and client success initiatives across all service verticals.
              </p>
              <div className="mt-4 inline-flex rounded-full border border-[--brand-border] bg-[--surface-1] px-3 py-1.5 text-xs text-[--text-primary]">
                Leadership & Growth
              </div>
            </div>
          </motion.div>
        </div>
      </CinematicReveal>
    </section>
  );
}
