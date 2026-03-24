import { SectionStickyLabel } from "@/components/ui/section-sticky-label";
import { CinematicReveal } from "@/components/ui/cinematic";

const safetySteps = [
  { title: "✅ Checking the Borrower", desc: "We verify income, background, and past loan history before approving anyone." },
  { title: "📝 Clear Agreements", desc: "All terms and conditions are written down and understood by both parties." },
  { title: "📊 Tracking Monthly EMIs", desc: "We monitor every EMI payment to ensure your money is returned on time." },
  { title: "🔁 Recovery Support", desc: "If any payment is late, our team follows up to help recover your money." },
];

const reminders = [
  "You choose who gets your money — we never force anything.",
  "We manage the process, but we cannot guarantee returns.",
  "Different borrowers have different risk levels.",
  "Lending small amounts to many people is safer than one big loan.",
  "Please read all documents carefully before lending.",
];

export function FundingRiskSection() {
  return (
    <section id="funding-risk" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <SectionStickyLabel label="Safety" />

      <CinematicReveal className="mb-10">
        <span className="gold-badge inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] mb-4">
          Your Safety Matters
        </span>
        <h2 className="font-display text-4xl font-bold text-[--text-primary] md:text-5xl">
          How We Keep Your Money Safe
        </h2>
      </CinematicReveal>

      <div className="grid gap-5 lg:grid-cols-2">
        <CinematicReveal>
          <article className="glass rounded-[--radius-lg] p-6 md:p-7 h-full">
            <h3 className="font-display text-2xl font-bold text-[--text-primary]">🛡️ Our Safety Process</h3>
            <div className="mt-5 grid gap-4">
              {safetySteps.map((item) => (
                <div key={item.title} className="rounded-[--radius-md] bg-[--surface-card] p-4">
                  <p className="font-bold text-[--text-primary]">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[--text-secondary]">{item.desc}</p>
                </div>
              ))}
            </div>
          </article>
        </CinematicReveal>

        <CinematicReveal delay={0.1}>
          <article className="glass rounded-[--radius-lg] p-6 md:p-7 h-full">
            <h3 className="font-display text-2xl font-bold text-[--text-primary]">💡 Things to Remember</h3>
            <p className="mt-2 text-sm text-[--text-secondary]">
              Private lending is a great way to earn money, but keep these things in mind.
            </p>
            <ul className="mt-5 grid gap-3">
              {reminders.map((item) => (
                <li key={item} className="rounded-xl bg-[--surface-card] px-4 py-3 text-sm font-medium text-[--text-primary]">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-[--radius-md] border border-[--glass-border-gold] bg-[--gold]/5 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[--gold]">⚠️ Important Notice</p>
              <p className="mt-2 text-sm leading-relaxed text-[--text-secondary]">
                We do not guarantee fixed returns. Every lender should check the borrower&apos;s details carefully before giving money.
              </p>
            </div>
          </article>
        </CinematicReveal>
      </div>
    </section>
  );
}
