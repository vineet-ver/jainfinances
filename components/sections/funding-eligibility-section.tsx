import { SectionStickyLabel } from "@/components/ui/section-sticky-label";

const lenderEligibility = [
  "Resident Indian individuals seeking portfolio diversification",
  "Professionals and business owners with moderate-to-high risk appetite",
  "Investors comfortable with tenure-based cashflow planning",
  "Clients preferring transparent digital tracking over informal private lending",
];

const borrowerEligibility = [
  "Salaried and self-employed applicants with verifiable income",
  "Borrowers with defined purpose and repayment capacity",
  "Applicants open to digital profile checks and agreement execution",
  "Profiles requiring faster alternatives to traditional bank cycles",
];

const documentationChecklist = [
  "Identity and address proof",
  "PAN and bank details",
  "Income proof and financial statements",
  "Employment or business continuity evidence",
  "Purpose note and expected repayment plan",
];

export function FundingEligibilitySection() {
  return (
    <section id="funding-eligibility" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <SectionStickyLabel label="Eligibility" />
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[--text-secondary]">Funding Eligibility</p>
      <h2 className="font-display text-4xl text-[--text-primary] md:text-5xl">Who This Model Is Built For</h2>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="rounded-3xl border border-[--brand-border] bg-[--surface-1] p-6 md:p-7">
          <h3 className="font-display text-3xl text-[--text-primary]">Lender Side</h3>
          <p className="mt-2 text-sm text-[--text-secondary]">
            Suitable for investors exploring private credit exposure with structured monitoring and stage-wise decision control.
          </p>
          <ul className="mt-5 grid gap-3">
            {lenderEligibility.map((item) => (
              <li key={item} className="rounded-xl border border-[--brand-border] bg-[--surface-2] px-4 py-3 text-sm text-[--text-primary]">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-[--brand-border] bg-[--surface-1] p-6 md:p-7">
          <h3 className="font-display text-3xl text-[--text-primary]">Borrower Side</h3>
          <p className="mt-2 text-sm text-[--text-secondary]">
            Designed for quality profiles seeking timely capital access and transparent repayment terms.
          </p>
          <ul className="mt-5 grid gap-3">
            {borrowerEligibility.map((item) => (
              <li key={item} className="rounded-xl border border-[--brand-border] bg-[--surface-2] px-4 py-3 text-sm text-[--text-primary]">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <article className="mt-5 rounded-3xl border border-[--brand-border] bg-[--surface-1] p-6 md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="font-display text-3xl text-[--text-primary]">Documentation Readiness</h3>
          <p className="text-xs uppercase tracking-[0.16em] text-[--text-secondary]">Pre-Onboarding Checklist</p>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {documentationChecklist.map((item) => (
            <p key={item} className="rounded-xl border border-[--brand-border] bg-[--surface-2] px-4 py-3 text-sm text-[--text-primary]">
              {item}
            </p>
          ))}
        </div>
      </article>
    </section>
  );
}
