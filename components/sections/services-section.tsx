"use client";

import { Building2, Landmark, LineChart, Vault } from "lucide-react";

function SpotlightCard({
  title,
  description,
  icon: Icon,
  className,
  children,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
  children?: React.ReactNode;
}) {
  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
  };

  return (
    <article
      onMouseMove={onMove}
      className={`spotlight-card group relative overflow-hidden rounded-3xl border border-[--brand-border] bg-[--surface-1] p-6 ${className}`}
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[--brand-border] bg-[--surface-2] text-[--brand-solid]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-3 font-display text-2xl text-[--text-primary]">{title}</h3>
      <p className="text-sm leading-relaxed text-[--text-secondary]">{description}</p>
      {children}
    </article>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[--text-secondary]">Services</p>
          <h2 className="font-display text-4xl text-[--text-primary] md:text-5xl">Our Signature Solutions</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-2">
        <SpotlightCard
          title="Loans"
          description="Structured lending support with fast approvals and discreet handling for HNWI profiles."
          icon={Vault}
          className="md:col-span-2"
        >
          <div className="pointer-events-none mt-4 flex gap-3 text-sm text-[--brand-solid] opacity-70">
            <span className="animate-float">₹</span>
            <span className="animate-float [animation-delay:220ms]">$</span>
            <span className="animate-float [animation-delay:420ms]">€</span>
          </div>
        </SpotlightCard>

        <SpotlightCard
          title="Real Estate"
          description="Prime property structuring and strategic acquisitions across metro and growth markets."
          icon={Building2}
          className="md:col-span-1 md:row-span-2"
        >
          <div className="mt-6 rounded-2xl border border-[--brand-border] bg-[--surface-2] p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-[--text-secondary]">Parallax Insight</p>
            <Landmark className="mt-3 h-10 w-10 text-[--brand-solid] transition-transform duration-700 group-hover:-translate-y-1" />
          </div>
        </SpotlightCard>

        <SpotlightCard
          title="Investment"
          description="Private funding routes and sophisticated instruments tailored to growth outcomes."
          icon={LineChart}
          className="md:col-span-1"
        >
          <div className="mt-6 space-y-2">
            <div className="h-1.5 w-3/4 rounded-full bg-[--brand-solid]" />
            <div className="h-1.5 w-4/5 rounded-full bg-[--brand-solid]/80" />
            <div className="h-1.5 w-[92%] rounded-full bg-[--brand-solid]/60" />
          </div>
        </SpotlightCard>

        <SpotlightCard
          title="Advisory"
          description="End-to-end concierge for risk, valuation, and transaction diligence with full transparency."
          icon={Landmark}
          className="md:col-span-2"
        />
      </div>
    </section>
  );
}
