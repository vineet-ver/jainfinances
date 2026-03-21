"use client";

import { CinematicReveal, ParallaxLayer } from "@/components/ui/cinematic";
import { SectionStickyLabel } from "@/components/ui/section-sticky-label";
import { shimmerBlurDataUrl } from "@/lib/blur";
import Image from "next/image";

const lenderSteps = [
  "Registration",
  "Lender profile approval",
  "View loan listings",
  "Fund selected loans",
  "Sign agreement with borrower",
  "Disbursement",
  "EMI profit realization",
  "Further re-lending",
];

const highlights = [
  {
    title: "Lend For Better Returns",
    description:
      "Private funding structures inspired by P2P lending models, where lenders can target stronger yield potential than traditional savings avenues.",
  },
  {
    title: "Transparent Digital Journey",
    description:
      "A clear lifecycle from onboarding to disbursement and repayment tracking, with each stage visible before commitment.",
  },
  {
    title: "Risk-Aware Participation",
    description:
      "Lender decisions are made case-by-case with informed review, agreement signing, and ongoing repayment monitoring.",
  },
];

const snapshots = [
  { amount: "70,000", rate: "17.00%", duration: "18 months" },
  { amount: "50,000", rate: "13.00%", duration: "12 months" },
  { amount: "125,000", rate: "18.00%", duration: "18 months" },
];

export function PrivateFundingSection() {
  return (
    <section id="private-funding" className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-10">
      <ParallaxLayer depth={40} className="pointer-events-none absolute -right-16 top-8 h-60 w-60 rounded-full bg-[--brand-solid]/12 blur-3xl" />
      <SectionStickyLabel label="Private Funding" />
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <CinematicReveal>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[--text-secondary]">Private Funding</p>
          <h2 className="font-display text-4xl text-[--text-primary] md:text-5xl">P2P-Inspired Lending Framework</h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[--text-secondary] md:text-base">
            Structured around Faircent-style private lending principles: lenders review opportunities, fund selectively,
            execute agreements, and track repayment realization through a disciplined process.
          </p>

          <div className="mt-8 grid gap-4">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[--brand-border] bg-[--surface-1] p-5">
                <h3 className="font-display text-2xl text-[--text-primary]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[--text-secondary]">{item.description}</p>
              </article>
            ))}
          </div>
        </CinematicReveal>

        <CinematicReveal delay={0.1} className="rounded-3xl border border-[--brand-border] bg-[--surface-1] p-6 md:p-7">
          <p className="text-xs uppercase tracking-[0.18em] text-[--text-secondary]">How It Works For Lenders</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="image-sheen premium-card relative h-28 overflow-hidden rounded-2xl border border-[--brand-border]">
              <Image
                src="/private-fund1.jfif"
                alt="Private funding insights"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
                placeholder="blur"
                blurDataURL={shimmerBlurDataUrl(300, 160)}
              />
            </div>
            <div className="image-sheen premium-card relative h-28 overflow-hidden rounded-2xl border border-[--brand-border]">
              <Image
                src="/loan1.jfif"
                alt="Loan structuring support"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
                placeholder="blur"
                blurDataURL={shimmerBlurDataUrl(300, 160)}
              />
            </div>
          </div>
          <ol className="mt-5 grid gap-3">
            {lenderSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-3 rounded-xl border border-[--brand-border] bg-[--surface-2] p-3">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[--brand-border] text-xs font-semibold text-[--brand-solid]">
                  {index + 1}
                </span>
                <span className="text-sm text-[--text-primary]">{step}</span>
              </li>
            ))}
          </ol>
        </CinematicReveal>
      </div>

      <CinematicReveal delay={0.15} className="mt-10 rounded-3xl border border-[--brand-border] bg-[--surface-1] p-6 md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="font-display text-3xl text-[--text-primary] md:text-4xl">Funding Snapshot Patterns</h3>
          <p className="text-xs uppercase tracking-[0.14em] text-[--text-secondary]">Amount | Rate | Duration</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {snapshots.map((item, index) => (
            <article key={`${item.amount}-${index}`} className="rounded-2xl border border-[--brand-border] bg-[--surface-2] p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-[--text-secondary]">Borrowed</p>
              <p className="mt-1 font-display text-3xl text-[--text-primary]">₹{item.amount}</p>
              <p className="mt-4 text-sm text-[--text-secondary]">Interest Rate: {item.rate}</p>
              <p className="mt-1 text-sm text-[--text-secondary]">Duration: {item.duration}</p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-[--text-secondary]">
          Important: As with platform-based private lending models, repayment outcomes are typically best-effort and
          lender decisions remain discretionary. This section is for process transparency and informed decision support.
        </p>
      </CinematicReveal>
    </section>
  );
}