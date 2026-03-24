"use client";

import { SectionStickyLabel } from "@/components/ui/section-sticky-label";
import { CinematicReveal } from "@/components/ui/cinematic";
import { HandCoins, Landmark, PieChart, ShieldCheck, Building2 } from "lucide-react";

const services = [
  {
    title: "Business & Personal Loans",
    icon: HandCoins,
    focus: "35%",
    desc: "Get personal, business, or home loans with quick paperwork and easy EMI plans.",
    color: "text-[--gold]",
  },
  {
    title: "Investment Planning",
    icon: PieChart,
    focus: "30%",
    desc: "Mutual funds, SIPs, and long-term wealth planning explained in simple words.",
    color: "text-[--blue]",
  },
  {
    title: "Private Funding",
    icon: Landmark,
    focus: "25%",
    desc: "Quick private funding for urgent needs. Clear terms, fast disbursal, safe process.",
    color: "text-[--gold]",
  },
  {
    title: "Insurance Help",
    icon: ShieldCheck,
    focus: "10%",
    desc: "Health and term insurance planning to protect your family at the right cost.",
    color: "text-[--sage]",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
      <SectionStickyLabel label="Services" />

      <CinematicReveal className="mb-12 space-y-4">
        <span className="gold-badge inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]">
          Our Main Services
        </span>
        <h2 className="font-display text-4xl font-bold text-[--text-primary] md:text-5xl lg:text-6xl">
          Easy Financial Help for You
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-[--text-secondary]">
          We focus 90% on finance and loans. Real estate is only a small part of our work.
        </p>
      </CinematicReveal>

      {/* Bento grid */}
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <CinematicReveal key={service.title}>
              <article className="premium-card spotlight-card glass group relative overflow-hidden rounded-[--radius-lg] p-6 md:p-7">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[--surface-card] ${service.color}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-xl font-bold text-[--text-primary] md:text-2xl">{service.title}</h3>
                  </div>
                  <span className="gold-badge rounded-full px-3 py-1 text-xs font-bold">{service.focus}</span>
                </div>
                <p className="text-sm leading-relaxed text-[--text-secondary]">{service.desc}</p>
              </article>
            </CinematicReveal>
          );
        })}
      </div>

      {/* Real Estate - Minor */}
      <CinematicReveal delay={0.1}>
        <article className="mt-5 glass rounded-[--radius-lg] p-6 md:p-7">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[--surface-card] text-[--text-muted]">
              <Building2 className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold text-[--text-primary]">Real Estate</h3>
              <p className="text-sm text-[--text-secondary]">
                We help with property buy/sell only in selected cases. Our main work is giving you the best financial solutions.
              </p>
            </div>
          </div>
        </article>
      </CinematicReveal>
    </section>
  );
}
