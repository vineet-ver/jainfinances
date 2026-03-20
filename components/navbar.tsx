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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[--brand-border] px-4 py-3 transition-all md:px-6",
          scrolled ? "bg-[--surface-1]/70 backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <Link href="#home" className="logo-shimmer relative text-sm font-semibold tracking-[0.18em] text-[--text-primary]">
          JAIN FINANCIAL
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-xs uppercase tracking-[0.15em] text-[--text-secondary]">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[--brand-border] text-[--text-primary] md:hidden"
          aria-label="Open menu"
          data-cursor="active"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "pointer-events-none fixed inset-0 z-40 bg-black/20 backdrop-blur-xl transition-opacity md:hidden",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={() => setOpen(false)}
      />

      <aside
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-[82%] border-l border-[--brand-border] bg-[--surface-1]/95 p-6 backdrop-blur-2xl transition-transform duration-500 md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="mb-8 flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.2em] text-[--text-secondary]">Menu</p>
          <ThemeToggle />
        </div>
        <div className="space-y-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-[--text-primary]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </aside>
    </header>
  );
}
