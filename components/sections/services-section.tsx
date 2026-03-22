"use client";

import { CinematicReveal, ParallaxLayer } from "@/components/ui/cinematic";
import { SectionStickyLabel } from "@/components/ui/section-sticky-label";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { shimmerBlurDataUrl } from "@/lib/blur";
import { Building2, CheckCircle2, HandCoins, PieChart, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const serviceTabs = [
  { key: "investment", label: "Investment" },
  { key: "real-estate", label: "Real Estate" },
  { key: "insurance", label: "Insurance" },
  { key: "loans", label: "Loans" },
] as const;

type ServiceTabKey = (typeof serviceTabs)[number]["key"];

const serviceVerticals = [
  {
    key: "investment",
    title: "Mutual Funds & Investment Services",
    eyebrow: "Wealth Planning",
    description:
      "Research-backed investment structuring across mutual funds, equities, fixed income, retirement products, and global exposure.",
    icon: PieChart,
    heroImage: "/investment1.png",
    supportingImages: ["/investment2.png", "/investment3.png"],
    offerings: [
      "Mutual Funds: equity, debt, hybrid, ELSS, SIP and lumpsum planning.",
      "Equity and stock advisory with portfolio guidance and trading support.",
      "PMS and AIF access for HNI clients seeking active strategies.",
      "Fixed income and bonds: corporate, government, tax-free and fixed deposits.",
      "Retirement and pension planning with NPS, PPF and annuity strategies.",
      "Tax-efficient investing through ELSS, capital-gains planning and tax-loss harvesting.",
      "Goal-based investing for education, marriage, home purchase and wealth creation.",
      "Need-based insurance-linked investments including ULIPs and guaranteed plans.",
      "International investing via global ETFs and feeder funds where suitable.",
      "Quarterly advisory and review with risk profiling, allocation and rebalancing.",
    ],
  },
  {
    key: "real-estate",
    title: "Real Estate Services",
    eyebrow: "Property Desk",
    description:
      "Transaction-to-tenancy support for residential, commercial, industrial, luxury, and NRI-led real estate requirements.",
    icon: Building2,
    heroImage: "/building3.png",
    supportingImages: ["/building1.png", "/building5.png"],
    offerings: [
      "Buying and selling support for residential, commercial, plots and luxury properties.",
      "Rental and leasing with tenant-landlord matchmaking, agreements and renewals.",
      "Property management including maintenance, screening, rent collection and upkeep.",
      "Investment advisory with ROI analysis, location selection and exit planning.",
      "Legal and documentation support with title checks, due diligence and RERA compliance.",
      "Home loan and funding facilitation via bank and NBFC partner networks.",
      "Interior and fit-out partner coordination with budgeting and execution tracking.",
      "NRI services including remote transactions, PoA support and virtual tours.",
      "Commercial and industrial solutions for offices, warehouses, retail and land deals.",
      "Valuation and market research with trend data and comparative market analysis.",
    ],
  },
  {
    key: "insurance",
    title: "Insurance Services",
    eyebrow: "Risk Protection",
    description:
      "Personal and business risk-cover architecture with claim support, renewals, portability, and ongoing advisory.",
    icon: ShieldCheck,
    heroImage: "/building2.png",
    supportingImages: ["/private-fund1.png", "/investment1.png"],
    offerings: [
      "Life insurance: term, whole life, endowment and ULIP plans.",
      "Health insurance across individual, family floater, senior citizen and critical illness covers.",
      "Motor insurance for private, two-wheeler and commercial vehicles.",
      "Home and property cover for structure, contents, fire, burglary and natural events.",
      "Travel insurance for domestic, international, student and business travel.",
      "Personal accident and disability benefits for accidental death and disability scenarios.",
      "Business and liability insurance including D&O, indemnity, cyber and product/public liability.",
      "Group and employee benefits: group health, group term life, gratuity and superannuation.",
      "Rural and specialty products including crop, livestock and micro-insurance.",
      "End-to-end support with policy comparison, claim assistance and renewal management.",
    ],
  },
  {
    key: "loans",
    title: "Loan & Finance Services",
    eyebrow: "Credit Structuring",
    description:
      "End-to-end financing assistance from eligibility checks to disbursal tracking, restructuring, and protection overlays.",
    icon: HandCoins,
    heroImage: "/loan1.png",
    supportingImages: ["/building4.png", "/private-fund1.png"],
    offerings: [
      "Personal loans with quick approvals, minimal paperwork and flexible tenures.",
      "Home loans and loan against property with balance transfer and top-up options.",
      "Business and MSME funding for working capital, term loans and machinery finance.",
      "Auto finance for new and used vehicles with fast processing.",
      "Education loans for domestic and international studies.",
      "Credit cards and overdraft facilities with tailored limits and reward structures.",
      "Credit score improvement with CIBIL review, correction and score-building support.",
      "Loan restructuring and balance transfer for lower EMI and better terms.",
      "Insurance and protection add-ons including loan cover and general risk products.",
      "End-to-end assistance: documentation, eligibility, tracking and post-disbursal support.",
    ],
  },
] as const;

const deliverySteps = [
  "Discovery call and objective mapping",
  "Risk profile and eligibility assessment",
  "Product shortlisting with cost-benefit comparison",
  "Execution, documentation and periodic review",
] as const;

function ServiceCardSkeleton() {
  return (
    <article className="rounded-3xl border border-[--brand-border] bg-[--surface-1] p-6">
      <Skeleton className="mb-4 h-6 w-40 rounded-full" />
      <Skeleton className="mb-4 h-12 w-12 rounded-2xl" />
      <Skeleton className="mb-3 h-8 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-5/6" />
      <div className="mt-5 grid gap-3 md:grid-cols-[1.35fr_0.65fr]">
        <Skeleton className="h-52 w-full rounded-2xl" />
        <div className="grid gap-3">
          <Skeleton className="h-24.5 w-full rounded-2xl" />
          <Skeleton className="h-24.5 w-full rounded-2xl" />
        </div>
      </div>
      <div className="mt-6 grid gap-2.5">
        <Skeleton className="h-10 w-full rounded-xl" />
        <Skeleton className="h-10 w-full rounded-xl" />
        <Skeleton className="h-10 w-full rounded-xl" />
      </div>
    </article>
  );
}

function ServiceCard({
  title,
  eyebrow,
  description,
  icon: Icon,
  offerings,
  heroImage,
  supportingImages,
}: {
  title: string;
  eyebrow: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  offerings: readonly string[];
  heroImage: string;
  supportingImages: readonly string[];
}) {
  const [sortableOfferings, setSortableOfferings] = useState<string[]>([...offerings]);

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateX = ((midY - y) / midY) * 5.5;
    const rotateY = ((x - midX) / midX) * 5.5;

    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
    event.currentTarget.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
  };

  const onLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--rx", "0deg");
    event.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <motion.article
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{ transform: "perspective(1300px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))" }}
      className="spotlight-card group relative overflow-hidden rounded-3xl border border-[--brand-border] bg-[--surface-1] p-6 transition-transform duration-200"
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[--brand-border] bg-[--surface-2] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[--text-secondary]">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[--brand-solid]" />
        {eyebrow}
      </div>
      <motion.div
        whileHover={{ rotate: 8, scale: 1.07 }}
        transition={{ type: "spring", stiffness: 260, damping: 16 }}
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[--brand-border] bg-[--surface-2] text-[--brand-solid]"
      >
        <Icon className="h-5 w-5" />
      </motion.div>
      <h3 className="mb-3 font-display text-2xl text-[--text-primary]">{title}</h3>
      <p className="text-sm leading-relaxed text-[--text-secondary]">{description}</p>

      <div className="mt-5 grid gap-3 md:grid-cols-[1.35fr_0.65fr]">
        <div className="image-sheen premium-card relative h-52 overflow-hidden rounded-2xl border border-[--brand-border]">
          <Image
            src={heroImage}
            alt={`${title} visual`}
            fill
            sizes="(max-width: 768px) 100vw, 620px"
            className="object-cover"
            placeholder="blur"
            blurDataURL={shimmerBlurDataUrl(620, 340)}
          />
        </div>
        <div className="grid gap-3">
          {supportingImages.map((image) => (
            <div key={image} className="image-sheen premium-card relative h-24.5 overflow-hidden rounded-2xl border border-[--brand-border]">
              <Image
                src={image}
                alt={`${title} supporting visual`}
                fill
                sizes="220px"
                className="object-cover"
                placeholder="blur"
                blurDataURL={shimmerBlurDataUrl(220, 120)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-3 text-[10px] uppercase tracking-[0.14em] text-[--text-secondary]">Drag To Reorder Priorities</p>
        <Reorder.Group axis="y" values={sortableOfferings} onReorder={setSortableOfferings} className="grid gap-2.5">
          {sortableOfferings.map((item, idx) => (
            <Reorder.Item
              key={item}
              value={item}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03, duration: 0.28, ease: "easeOut" }}
              className="flex cursor-grab items-start gap-2.5 rounded-xl border border-[--brand-border]/45 bg-[--surface-2]/65 px-3 py-2.5 text-sm leading-relaxed text-[--text-primary] active:cursor-grabbing"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[--brand-solid]" />
              <span className="text-[--text-secondary]">{item}</span>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </motion.article>
  );
}

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<ServiceTabKey>("investment");
  const [isTabLoading, setIsTabLoading] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const switchTimerRef = useRef<number | null>(null);
  const activeService = useMemo(
    () => serviceVerticals.find((service) => service.key === activeTab) ?? serviceVerticals[0],
    [activeTab],
  );

  useEffect(() => {
    return () => {
      if (switchTimerRef.current) {
        window.clearTimeout(switchTimerRef.current);
      }
    };
  }, []);

  const switchToTab = (nextTab: ServiceTabKey) => {
    if (nextTab === activeTab || isTabLoading) return;
    setIsTabLoading(true);

    if (switchTimerRef.current) {
      window.clearTimeout(switchTimerRef.current);
    }

    switchTimerRef.current = window.setTimeout(() => {
      setActiveTab(nextTab);
      setIsTabLoading(false);
      switchTimerRef.current = null;
    }, 260);
  };

  const moveTab = (direction: 1 | -1) => {
    const index = serviceTabs.findIndex((tab) => tab.key === activeTab);
    const next = (index + direction + serviceTabs.length) % serviceTabs.length;
    switchToTab(serviceTabs[next].key);
  };

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    if (Math.abs(delta) < 52) return;

    if (delta < 0) moveTab(1);
    if (delta > 0) moveTab(-1);
    touchStartX.current = null;
  };

  return (
    <section id="services" className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-10">
      <ParallaxLayer depth={50} useVelocity className="pointer-events-none absolute -left-16 top-28 h-48 w-48 rounded-full bg-[--brand-solid]/10 blur-3xl" />
      <ParallaxLayer depth={34} className="pointer-events-none absolute -right-24 bottom-24 h-64 w-64 rounded-full bg-amber-300/12 blur-3xl" />
      <SectionStickyLabel label="Services" />
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[--text-secondary]">Services</p>
          <h2 className="font-display text-4xl text-[--text-primary] md:text-5xl">Comprehensive Financial Ecosystem</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[--text-secondary] md:text-base">
            A single advisory desk for investments, property, insurance, and structured finance. Every solution is
            aligned to risk appetite, timeline, documentation readiness, and long-term wealth outcomes.
          </p>
        </div>
      </div>

      <CinematicReveal className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-[--brand-border] bg-[--surface-2] px-4 py-5">
          <p className="text-xs uppercase tracking-[0.14em] text-[--text-secondary]">Service Verticals</p>
          <p className="mt-2 font-display text-3xl text-[--text-primary]">4</p>
        </div>
        <div className="rounded-2xl border border-[--brand-border] bg-[--surface-2] px-4 py-5">
          <p className="text-xs uppercase tracking-[0.14em] text-[--text-secondary]">Curated Offerings</p>
          <p className="mt-2 font-display text-3xl text-[--text-primary]">40+</p>
        </div>
        <div className="rounded-2xl border border-[--brand-border] bg-[--surface-2] px-4 py-5">
          <p className="text-xs uppercase tracking-[0.14em] text-[--text-secondary]">Execution Support</p>
          <p className="mt-2 font-display text-3xl text-[--text-primary]">E2E</p>
        </div>
        <div className="rounded-2xl border border-[--brand-border] bg-[--surface-2] px-4 py-5">
          <p className="text-xs uppercase tracking-[0.14em] text-[--text-secondary]">Review Rhythm</p>
          <p className="mt-2 font-display text-3xl text-[--text-primary]">Quarterly</p>
        </div>
      </CinematicReveal>

      <div className="mb-5 rounded-2xl border border-[--brand-border] bg-[--surface-1] p-3">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {serviceTabs.map((tab) => (
            <motion.button
              key={tab.key}
              type="button"
              onClick={() => switchToTab(tab.key)}
              whileTap={{ scale: 0.97 }}
              className={cn(
                "rounded-xl border px-4 py-3 text-sm font-medium transition",
                activeTab === tab.key
                  ? "border-[--brand-solid] bg-[--surface-2] text-[--text-primary]"
                  : "border-[--brand-border] text-[--text-secondary] hover:border-[--brand-solid] hover:text-[--text-primary]",
              )}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <AnimatePresence mode="wait">
          {isTabLoading ? (
            <motion.div
              key="services-skeleton"
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ServiceCardSkeleton />
            </motion.div>
          ) : (
            <motion.div
              key={activeService.key}
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.99 }}
              transition={{ duration: 0.46, ease: [0.22, 0.8, 0.2, 1] }}
            >
              <ServiceCard
                title={activeService.title}
                eyebrow={activeService.eyebrow}
                description={activeService.description}
                icon={activeService.icon}
                offerings={activeService.offerings}
                heroImage={activeService.heroImage}
                supportingImages={activeService.supportingImages}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <CinematicReveal delay={0.12} className="mt-8 rounded-3xl border border-[--brand-border] bg-[--surface-1] p-6 md:p-7">
        <p className="text-xs uppercase tracking-[0.16em] text-[--text-secondary]">How We Execute</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {deliverySteps.map((step, index) => (
            <div key={step} className="rounded-2xl border border-[--brand-border] bg-[--surface-2] p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[--text-secondary]">Step {index + 1}</p>
              <p className="mt-2 text-sm text-[--text-primary]">{step}</p>
            </div>
          ))}
        </div>
      </CinematicReveal>
    </section>
  );
}
