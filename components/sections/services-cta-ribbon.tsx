"use client";

import { CONTACT } from "@/lib/constants";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export function ServicesCtaRibbon() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const services = document.getElementById("services");
      if (!services) return;
      const servicesBottom = services.offsetTop + services.offsetHeight;
      const threshold = servicesBottom - window.innerHeight * 0.35;
      setVisible(window.scrollY >= threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-58 hidden px-4 md:block md:px-8">
      <div className="glass-heavy mx-auto max-w-5xl rounded-[--radius-lg] p-4 shadow-xl md:p-5">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[--gold]">Ready to Start?</p>
            <p className="mt-1 font-display text-xl font-bold text-[--text-primary] md:text-2xl">
              Get Free Financial Consultation Today
            </p>
          </div>

          <div className="flex w-full flex-col gap-2 sm:flex-row md:w-auto">
            <a
              href="#inquiry"
              className="gold-badge inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition hover:brightness-110"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-[--text-primary] transition hover:border-[--gold]"
            >
              <Phone className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
