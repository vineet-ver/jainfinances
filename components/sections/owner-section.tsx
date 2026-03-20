"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { shimmerBlurDataUrl } from "@/lib/blur";

export function OwnerSection() {
  return (
    <section id="owner" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <div className="grid gap-6 rounded-3xl border border-[--brand-border] bg-[--surface-1] p-6 md:grid-cols-[220px_1fr] md:gap-10 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-5 md:block"
        >
          <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-[--brand-border] md:h-36 md:w-36">
            <Image
              src="/jain.png"
              alt="Surendra Jain"
              fill
              sizes="(max-width: 768px) 96px, 144px"
              className="object-cover"
              placeholder="blur"
              blurDataURL={shimmerBlurDataUrl(144, 144)}
              priority
            />
          </div>
          <div className="md:mt-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[--text-secondary]">Owner</p>
            <p className="font-display text-2xl text-[--text-primary]">Surendra Jain</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[--text-secondary]">Leadership</p>
          <h2 className="mt-2 font-display text-4xl leading-tight text-[--text-primary] md:text-5xl">
            12+ Years of Client-First Financial Advisory
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[--text-secondary] md:text-lg">
            Surendra Jain leads Jain Financial Consultancy Service with a relationship-driven approach focused on
            speed, clarity, and trust. With over 12 years of hands-on experience across loans, real estate, and private
            funding, he has advised clients through high-value decisions while maintaining complete discretion.
          </p>
          <div className="mt-6 inline-flex rounded-full border border-[--brand-border] bg-[--surface-2] px-4 py-2 text-sm text-[--text-primary]">
            Experience: 12+ Years
          </div>
        </motion.div>
      </div>
    </section>
  );
}
