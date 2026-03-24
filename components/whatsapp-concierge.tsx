"use client";

import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function WhatsAppConcierge() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat popup */}
      <div
        className={cn(
          "mb-3 w-[300px] origin-bottom-right overflow-hidden rounded-[--radius-lg] border border-[--glass-border-gold] shadow-xl transition-all duration-400",
          open ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-4 scale-95 opacity-0",
        )}
      >
        {/* Gold header */}
        <div className="flex items-center justify-between bg-[--gold] px-4 py-3">
          <p className="text-sm font-bold text-[--olive]">💬 Chat With Us</p>
          <button onClick={() => setOpen(false)} className="text-[--olive] transition hover:opacity-70" aria-label="Close chat">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="glass-heavy p-4">
          <div className="mb-3 flex items-center gap-2 text-xs text-[--text-secondary]">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
            We are online right now
          </div>
          <p className="mb-4 text-sm leading-relaxed text-[--text-secondary]">
            Hello! 👋 Need help with a loan or funding? Chat with us on WhatsApp for instant help.
          </p>
          <Link
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="gold-badge inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            Start WhatsApp Chat
          </Link>
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="concierge-breathe gold-badge gold-glow inline-flex h-14 w-14 items-center justify-center rounded-full text-[--olive] shadow-xl transition active:scale-95"
        aria-label="Open WhatsApp chat"
        style={{ animation: "goldPulse 2.5s ease-in-out infinite, conciergePulse 2.4s ease-in-out infinite" }}
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
