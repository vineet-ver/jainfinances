"use client";

import { CinematicReveal } from "@/components/ui/cinematic";
import { MANAGEMENT } from "@/lib/constants";
import { PhoneCall, UserCheck } from "lucide-react";

export function ManagementContactSection() {
  return (
    <section className="relative mx-auto max-w-4xl px-6 pb-24 md:px-10">
      <CinematicReveal>
        <div className="gradient-border">
          <div className="relative overflow-hidden rounded-[--radius-lg] bg-[--surface-glass-heavy] p-6 backdrop-blur-xl md:p-10">
            {/* Background decoration */}
            <div className="absolute -right-4 -top-4 opacity-5">
              <UserCheck size={140} />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="space-y-3 text-center md:text-left">
                <span className="gold-badge inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]">
                  Management
                </span>
                <h3 className="font-display text-2xl font-bold text-[--text-primary] md:text-3xl">
                  Expert Management Assured
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-[--text-secondary]">
                  Our day-to-day operations are managed by {MANAGEMENT.name}. Every client gets dedicated and clear support.
                </p>
              </div>

              <div className="shrink-0">
                <div className="glass-gold flex flex-col items-center justify-center rounded-[--radius-lg] p-6 text-center">
                  <span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[--gold]">
                    <UserCheck size={14} /> Managed By
                  </span>
                  <span className="font-display text-2xl font-bold text-[--text-primary]">{MANAGEMENT.name}</span>
                  <p className="mt-1 text-xs text-[--text-secondary]">{MANAGEMENT.role}</p>
                  <a
                    href={`tel:${MANAGEMENT.phone}`}
                    className="gold-badge gold-glow mt-4 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-transform hover:scale-105 active:scale-95"
                  >
                    <PhoneCall size={16} />
                    {MANAGEMENT.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CinematicReveal>
    </section>
  );
}
