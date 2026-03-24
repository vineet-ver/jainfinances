"use client";

import { SectionStickyLabel } from "@/components/ui/section-sticky-label";
import { CinematicReveal } from "@/components/ui/cinematic";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "How is private funding different from bank FDs?", a: "In private funding, you lend directly to borrowers and earn more profit. Bank FDs are safer but give lower returns." },
  { q: "Can I choose who gets my money?", a: "Yes! You can check the borrower's details and decide before giving any money." },
  { q: "Do we sign a legal agreement?", a: "Absolutely. We always sign a proper legal agreement before any money is sent." },
  { q: "When will I start getting my money back?", a: "You will start receiving monthly EMIs after the loan is given to the borrower." },
  { q: "Can I invest again after getting my money back?", a: "Yes! Many of our clients re-invest their profits to earn even more over time." },
  { q: "Is my money 100% guaranteed?", a: "No investment is 100% safe. We do our best to check borrowers, but there is always some risk in private lending." },
];

export function FundingFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="funding-faq" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <SectionStickyLabel label="FAQ" />

      <CinematicReveal className="mb-10">
        <span className="gold-badge inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] mb-4">
          Common Questions
        </span>
        <h2 className="font-display text-4xl font-bold text-[--text-primary] md:text-5xl">
          Questions People Ask Us
        </h2>
      </CinematicReveal>

      <div className="grid gap-3">
        {faqs.map((faq, i) => (
          <CinematicReveal key={faq.q} delay={i * 0.05}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="glass w-full rounded-[--radius-md] p-5 text-left transition-all hover:border-[--gold] md:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-lg font-bold text-[--text-primary] md:text-xl">{faq.q}</h3>
                <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${openIndex === i ? "bg-[--gold] text-[--olive] rotate-45" : "bg-[--surface-card] text-[--text-secondary]"}`}>
                  +
                </span>
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-sm leading-relaxed text-[--text-secondary]">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </CinematicReveal>
        ))}
      </div>
    </section>
  );
}
