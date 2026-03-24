"use client";

import { CinematicReveal, ParallaxLayer } from "@/components/ui/cinematic";
import { SectionStickyLabel } from "@/components/ui/section-sticky-label";
import { shimmerBlurDataUrl } from "@/lib/blur";
import Image from "next/image";
import { useEffect, useState } from "react";

const steps = [
  "Register with us",
  "We verify your profile",
  "Browse loan options",
  "Choose and fund a loan",
  "Sign legal agreement",
  "Money gets disbursed",
  "Receive monthly EMI",
  "Re-invest for more profit",
];

const benefits = [
  {
    title: "💰 Earn Good Returns",
    desc: "Lend your money to verified borrowers and earn much better interest than bank FDs.",
  },
  {
    title: "📋 100% Transparent",
    desc: "See every step clearly — from loan approval to getting your monthly EMI back.",
  },
  {
    title: "🔒 Safe & Legal",
    desc: "We check every borrower carefully and sign proper legal agreements to protect you.",
  },
];


export function PrivateFundingSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <section id="private-funding" className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-10">
      {!isMobile && <ParallaxLayer depth={40} className="pointer-events-none absolute -right-16 top-8 h-60 w-60 rounded-full bg-[--gold]/8 blur-3xl" />}
      <SectionStickyLabel label="Private Funding" />

      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        {/* Left: Benefits */}
        <CinematicReveal>
          <span className="gold-badge inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] mb-4">
            Private Funding
          </span>
          <h2 className="font-display text-4xl font-bold text-[--text-primary] md:text-5xl">
            Simple Private Funding Process
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[--text-secondary]">
            We connect borrowers with private lenders for fast funding. Easy process, safe agreements, good returns.
          </p>

          <div className="mt-8 grid gap-4">
            {benefits.map((item) => (
              <article key={item.title} className="premium-card glass rounded-[--radius-md] p-5">
                <h3 className="font-display text-lg font-bold text-[--text-primary]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[--text-secondary]">{item.desc}</p>
              </article>
            ))}
          </div>
        </CinematicReveal>

        {/* Right: Steps + Images */}
        <CinematicReveal delay={0.1} className="glass rounded-[--radius-xl] p-6 md:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[--gold]">How It Works</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="image-sheen premium-card relative h-28 overflow-hidden rounded-[--radius-md] border border-[--glass-border]">
              <Image src="/private-fund1.jpg" alt="Private funding" fill sizes="(max-width: 768px) 100vw, 300px" className="object-cover" placeholder="blur" blurDataURL={shimmerBlurDataUrl(300, 160)} loading="lazy" />
            </div>
            <div className="image-sheen premium-card relative h-28 overflow-hidden rounded-[--radius-md] border border-[--glass-border]">
              <Image src="/loan1.jpg" alt="Loan process" fill sizes="(max-width: 768px) 100vw, 300px" className="object-cover" placeholder="blur" blurDataURL={shimmerBlurDataUrl(300, 160)} loading="lazy" />
            </div>
          </div>

          <ol className="mt-5 grid gap-2.5">
            {steps.map((step, i) => (
              <li key={step} className="flex items-center gap-3 rounded-xl bg-[--surface-card] p-3 transition-colors hover:bg-[--gold]/5">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[--gold]/15 text-xs font-bold text-[--gold]">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-[--text-primary]">{step}</span>
              </li>
            ))}
          </ol>
        </CinematicReveal>
      </div>


    </section>
  );
}
