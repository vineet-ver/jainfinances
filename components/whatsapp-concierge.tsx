"use client";

import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function WhatsAppConcierge() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      <div
        className={cn(
          "mb-3 w-[300px] origin-bottom-right rounded-2xl border border-[--brand-border] bg-[--surface-1] p-4 shadow-2xl transition-all duration-300",
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-[--text-primary]">Concierge Online</p>
          <button onClick={() => setOpen(false)} className="text-[--text-secondary]" aria-label="Close concierge">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mb-3 flex items-center gap-2 text-xs text-[--text-secondary]">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
          Agent is available now
        </div>
        <p className="mb-4 text-sm leading-relaxed text-[--text-secondary]">
          Hello! I am your personal financial assistant. How can we help you today?
        </p>
        <Link
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--brand-gradient)] px-4 py-2.5 text-sm font-semibold text-black"
          data-cursor="active"
        >
          Start WhatsApp Chat
        </Link>
      </div>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="concierge-breathe inline-flex h-14 w-14 items-center justify-center rounded-full border border-[--brand-border] bg-[var(--brand-gradient)] text-black shadow-[0_12px_35px_rgba(212,175,55,0.4)]"
        aria-label="Open WhatsApp concierge"
        data-cursor="active"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
