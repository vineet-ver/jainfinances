"use client";

import { CONTACT } from "@/lib/constants";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export function ServicesCtaRibbon() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const services = document.getElementById("services");
      if (!services) {
        return;
      }

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

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-58 hidden px-4 md:block md:px-8">
      <div className="mx-auto max-w-6xl rounded-2xl border border-[--brand-border] bg-[--surface-1]/95 p-4 shadow-[0_16px_42px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-5">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[--text-secondary]">Ready To Start</p>
            <p className="mt-1 font-display text-2xl text-[--text-primary] md:text-3xl">Book A Priority Financial Strategy Call</p>
            <p className="mt-2 text-sm text-[--text-secondary]">Talk to an advisor for investments, insurance, real estate, and loan planning.</p>
          </div>

          <div className="flex w-full flex-col gap-2 sm:flex-row md:w-auto">
            <a
              href="#inquiry"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[--brand-border] bg-(--brand-gradient) px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110"
            >
              Submit Inquiry
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[--brand-border] bg-[--surface-2] px-5 py-3 text-sm font-semibold text-[--text-primary] transition hover:border-[--brand-solid]"
            >
              <Phone className="h-4 w-4" />
              WhatsApp Concierge
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
