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
    <header className={cn("fixed inset-x-0 top-0 z-50 px-4 py-4 transition-transform duration-500 md:px-8", hidden ? "-translate-y-24" : "translate-y-0")}>
      <nav
        style={{ backgroundColor: scrolled ? "var(--surface-1)" : undefined }}
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[--brand-border] px-4 py-3 transition-all md:px-6",
          scrolled
            ? "py-2 shadow-[0_14px_38px_rgba(0,0,0,0.16)] backdrop-blur-xl"
            : "bg-[var(--surface-2)] shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-2xl backdrop-saturate-150 md:bg-transparent md:shadow-none md:backdrop-blur-0 md:backdrop-saturate-100",
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
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          data-cursor="active"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/45 backdrop-blur-md transition-opacity md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
      />

      <aside
        style={{ backgroundColor: "var(--mobile-menu-bg)" }}
        className={cn(
          "fixed inset-0 z-[60] h-dvh w-full overflow-y-auto p-6 backdrop-blur-2xl backdrop-saturate-150 transition-transform duration-500 md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="mb-8 flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.2em] text-[--text-secondary]">Menu</p>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[--brand-border] text-[--text-primary]"
              aria-label="Close menu"
              data-cursor="active"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
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
