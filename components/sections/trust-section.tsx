"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const duration = 1450;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, inView]);

  return (
    <article className="rounded-3xl border border-[--brand-border] bg-[--surface-1] p-6">
      <p ref={ref} className="font-display text-4xl text-[--text-primary] md:text-5xl">
        {value}
        {suffix}
      </p>
      <p className="mt-2 text-sm uppercase tracking-[0.12em] text-[--text-secondary]">{label}</p>
    </article>
  );
}

const partners = ["HDFC", "ICICI", "AXIS", "KOTAK", "IDFC", "SBI"];

export function TrustSection() {
  return (
    <section id="trust" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[--text-secondary]">Why Choose Us</p>
      <h2 className="font-display text-4xl text-[--text-primary] md:text-5xl">Proven Outcomes. Trusted Partnerships.</h2>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <Counter end={20} suffix="+" label="Years Experience" />
        <Counter end={500} suffix="Cr+" label="Disbursed" />
        <Counter end={1000} suffix="+" label="Happy Clients" />
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl border border-[--brand-border] bg-[--surface-1] py-5">
        <motion.div
          className="flex w-max gap-4 px-4"
          animate={{ x: [0, -540] }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity }}
        >
          {[...partners, ...partners].map((partner, idx) => (
            <span
              key={`${partner}-${idx}`}
              className="rounded-full border border-[--brand-border] bg-[--surface-2] px-6 py-3 text-sm font-medium tracking-wider text-[--text-secondary] grayscale transition hover:text-[--text-primary] hover:grayscale-0"
            >
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
