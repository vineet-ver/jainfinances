const riskLayers = [
  {
    title: "Profile Assessment",
    detail: "Applicant background, repayment behavior, and affordability indicators are reviewed before listing and participation.",
  },
  {
    title: "Agreement Discipline",
    detail: "Funding is aligned to documented terms so all parties are clear on tenure, obligations, and payment structure.",
  },
  {
    title: "Repayment Monitoring",
    detail: "Post-disbursement tracking focuses on EMI flow consistency and early intervention signals where required.",
  },
  {
    title: "Best-Effort Recovery Framework",
    detail: "Collection and follow-up support can improve outcomes, while preserving the reality that repayment is not guaranteed.",
  },
];

const transparencyPoints = [
  "Decision to lend remains with the lender",
  "Platform-style process supports, but does not assure returns",
  "Borrower opportunities can vary by credit profile and market cycle",
  "Diversification across multiple opportunities helps concentration control",
  "Policy and legal disclosures should be reviewed before commitment",
];

export function FundingRiskSection() {
  return (
    <section id="funding-risk" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[--text-secondary]">Risk Framework</p>
      <h2 className="font-display text-4xl text-[--text-primary] md:text-5xl">Governance, Controls, And Clarity</h2>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="rounded-3xl border border-[--brand-border] bg-[--surface-1] p-6 md:p-7">
          <h3 className="font-display text-3xl text-[--text-primary]">Operational Risk Layers</h3>
          <div className="mt-5 grid gap-4">
            {riskLayers.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[--brand-border] bg-[--surface-2] p-4">
                <p className="font-semibold text-[--text-primary]">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[--text-secondary]">{item.detail}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-[--brand-border] bg-[--surface-1] p-6 md:p-7">
          <h3 className="font-display text-3xl text-[--text-primary]">Transparency Notes</h3>
          <p className="mt-2 text-sm text-[--text-secondary]">
            Inspired by NBFC-P2P disclosure language patterns: informed participation is critical in private lending.
          </p>
          <ul className="mt-5 grid gap-3">
            {transparencyPoints.map((item) => (
              <li key={item} className="rounded-xl border border-[--brand-border] bg-[--surface-2] px-4 py-3 text-sm text-[--text-primary]">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border border-[--brand-border] bg-[--surface-2] p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-[--text-secondary]">Important Context</p>
            <p className="mt-2 text-sm leading-relaxed text-[--text-secondary]">
              This website section explains process and decision structure. It is not an assurance of repayment or a promise
              of fixed returns, and every lender should evaluate each opportunity independently.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
