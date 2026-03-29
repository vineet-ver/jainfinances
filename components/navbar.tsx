"use client";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);
      setHidden(currentY > lastY && currentY > 120 && !open);
      lastY = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-4 py-4 transition-transform duration-500 md:px-8",
        hidden ? "-translate-y-24" : "translate-y-0",
      )}
    >
      <nav
        className={cn(
          "glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3  transition-all duration-500 md:px-7",
          scrolled
            ? "py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
            : "shadow-[0_8px_30px_rgba(0,0,0,0.08)]",
        )}
      >
        {/* Logo */}
        <Link
          href="#home"
          className="logo-shimmer relative flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-[--text-primary]"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[--gold] text-xs font-black text-[--olive]">
            JF
          </span>
          <span className="hidden sm:inline">JAIN FINANCIAL</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-xs font-medium uppercase tracking-[0.14em] text-[--text-secondary] transition-colors hover:text-[--text-primary]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href="#inquiry"
            className="gold-badge inline-flex items-center rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-transform hover:scale-105 active:scale-95"
          >
            Get Help Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[--glass-border] text-[--text-primary] transition hover:border-[--gold] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
      />

      {/* Mobile drawer */}
      <aside
        className={cn(
          "fixed inset-0 z-[60] flex h-dvh w-full flex-col overflow-y-auto bg-[var(--bg)]/95 backdrop-blur-xl p-6 transition-transform duration-500 lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="mb-10 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[--gold]">Menu</span>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[--glass-border] text-[--text-primary]"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-display font-semibold text-[--text-primary] transition-colors hover:text-[--gold]"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#inquiry"
          onClick={() => setOpen(false)}
          className="gold-badge mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.12em]"
        >
          Get Help Now
        </a>
      </aside>
    </header>
  );
}
