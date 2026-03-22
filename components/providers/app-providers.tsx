"use client";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollVelocityProvider } from "@/components/ui/scroll-velocity";
import { ScrollVelocityIndicator } from "@/components/ui/scroll-velocity-indicator";
import { ToastProvider } from "@/components/ui/toast";
import { ToastContainer } from "@/components/ui/toast-container";
import { AmbientElements } from "@/components/ui/ambient-elements";
import { useEffect, useState } from "react";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [isMobileOrLowEnd, setIsMobileOrLowEnd] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1024px)");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      const nav = navigator as Navigator & {
        connection?: { saveData?: boolean };
        deviceMemory?: number;
      };
      const saveData = nav.connection?.saveData ?? false;
      const lowThreads = (navigator.hardwareConcurrency ?? 8) <= 4;
      const lowMemory = (nav.deviceMemory ?? 8) <= 4;
      setIsMobileOrLowEnd(media.matches || prefersReduced.matches || saveData || lowThreads || lowMemory);
    };

    update();
    media.addEventListener("change", update);
    prefersReduced.addEventListener("change", update);
    return () => {
      media.removeEventListener("change", update);
      prefersReduced.removeEventListener("change", update);
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <ScrollVelocityProvider>
        <ToastProvider>
          {!isMobileOrLowEnd && <LenisProvider />}
          {!isMobileOrLowEnd && <CustomCursor />}
          {!isMobileOrLowEnd && <AmbientElements />}
          {!isMobileOrLowEnd && <ScrollVelocityIndicator />}
          {children}
          <ToastContainer position="bottom-right" />
        </ToastProvider>
      </ScrollVelocityProvider>
    </ThemeProvider>
  );
}
