import { SectionStickyLabel } from "@/components/ui/section-sticky-label";

const faqs = [
  {
    question: "How is private funding different from traditional fixed deposits?",
    answer:
      "Private funding generally involves borrower-linked exposure instead of fixed institutional deposit products. Return potential can be higher, but repayment risk and variability are also higher.",
  },
  {
    question: "Can I choose where my funds are deployed?",
    answer:
      "Yes. A lender-first process allows review of opportunities before participation, rather than blind allocation.",
  },
  {
    question: "Is agreement signing mandatory before disbursement?",
    answer:
      "In disciplined lending workflows, agreement and term visibility are completed before disbursement so responsibilities remain explicit.",
  },
  {
    question: "When do lenders start seeing repayment realization?",
    answer:
      "Repayment realization begins as per the EMI schedule after disbursement and may vary with borrower behavior and collection outcomes.",
  },
  {
    question: "Can this model be used for repeat deployment?",
    answer:
      "Yes. Re-lending cycles are common for lenders who prefer staged compounding through multiple opportunities over time.",
  },
  {
    question: "Is repayment guaranteed in this model?",
    answer:
      "No. As with P2P-style private lending frameworks, repayment support can be structured, but guaranteed repayment should not be assumed.",
  },
];

export function FundingFaqSection() {
  return (
    <section id="funding-faq" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <SectionStickyLabel label="FAQ" />
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[--text-secondary]">Funding FAQ</p>
      <h2 className="font-display text-4xl text-[--text-primary] md:text-5xl">Common Questions Before You Start</h2>

      <div className="mt-10 grid gap-4">
        {faqs.map((item) => (
          <article key={item.question} className="rounded-2xl border border-[--brand-border] bg-[--surface-1] p-5 md:p-6">
            <h3 className="font-display text-2xl text-[--text-primary]">{item.question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[--text-secondary] md:text-base">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
