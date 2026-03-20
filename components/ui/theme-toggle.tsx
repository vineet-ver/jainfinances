"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme !== "light";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-[74px] items-center rounded-full border border-[--brand-border] bg-black/20 px-1"
      data-cursor="active"
    >
      <motion.div
        layout
        layoutId="theme-pill"
        className="absolute h-7 w-7 rounded-full bg-[var(--brand-gradient)] shadow-[0_0_24px_rgba(212,175,55,0.35)]"
        animate={{ x: isDark ? 2 : 34 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-1.5 text-xs text-[--text-primary]">
        <Moon className="h-3.5 w-3.5" />
        <Sun className="h-3.5 w-3.5" />
      </span>
    </button>
  );
}
