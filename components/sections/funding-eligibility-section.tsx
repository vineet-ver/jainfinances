import { SectionStickyLabel } from "@/components/ui/section-sticky-label";
import { CinematicReveal } from "@/components/ui/cinematic";

const lenderEligibility = [
  "Anyone looking to earn better returns on their savings",
  "Business owners wanting to invest extra money",
  "Investors who can wait for monthly EMI payouts",
  "People who prefer a safe and transparent process",
];

const borrowerEligibility = [
  "Salaried or business people with income proof",
  "People who need a loan for a genuine reason",
  "Borrowers comfortable sharing documents online",
  "Those who need money faster than a bank can give",
];

const documents = [
  "Aadhar Card / Voter ID / Passport",
  "PAN Card & Bank Statement",
  "Salary Slip or Business ITR",
  "Proof of Business or Job",
  "Reason for Loan & Repayment Plan",
];

export function FundingEligibilitySection() {
  return (
    <section id="funding-eligibility" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <SectionStickyLabel label="Eligibility" />

      <CinematicReveal className="mb-10">
        <span className="gold-badge inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] mb-4">
          Who Can Apply
        </span>
        <h2 className="font-display text-4xl font-bold text-[--text-primary] md:text-5xl">
          Who Can Use Our Services?
        </h2>
      </CinematicReveal>

      <div className="grid gap-5 lg:grid-cols-2">
        <CinematicReveal>
          <article className="glass rounded-[--radius-lg] p-6 md:p-7 h-full">
            <h3 className="font-display text-2xl font-bold text-[--gold]">💰 Who Can Lend Money?</h3>
            <p className="mt-2 text-sm text-[--text-secondary]">
              Perfect for people who want to earn better returns than savings accounts.
            </p>
            <ul className="mt-5 grid gap-3">
              {lenderEligibility.map((item) => (
                <li key={item} className="rounded-xl bg-[--surface-card] px-4 py-3 text-sm font-medium text-[--text-primary]">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </CinematicReveal>

        <CinematicReveal delay={0.1}>
          <article className="glass rounded-[--radius-lg] p-6 md:p-7 h-full">
            <h3 className="font-display text-2xl font-bold text-[--blue]">🏦 Who Can Get A Loan?</h3>
            <p className="mt-2 text-sm text-[--text-secondary]">
              For people who need money fast and have a clear way to pay it back.
            </p>
            <ul className="mt-5 grid gap-3">
              {borrowerEligibility.map((item) => (
                <li key={item} className="rounded-xl bg-[--surface-card] px-4 py-3 text-sm font-medium text-[--text-primary]">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </CinematicReveal>
      </div>

      <CinematicReveal delay={0.15}>
        <article className="mt-5 glass rounded-[--radius-lg] p-6 md:p-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="font-display text-2xl font-bold text-[--text-primary]">📄 Documents You Will Need</h3>
            <span className="gold-badge rounded-full px-3 py-1 text-xs font-bold">Basic Checklist</span>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {documents.map((item) => (
              <p key={item} className="flex items-center gap-2 rounded-xl bg-[--surface-card] px-4 py-3 text-sm font-medium text-[--text-primary]">
                <span className="text-[--gold]">✓</span> {item}
              </p>
            ))}
          </div>
        </article>
      </CinematicReveal>
    </section>
  );
}
