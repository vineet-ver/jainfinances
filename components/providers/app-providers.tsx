"use client";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollVelocityProvider } from "@/components/ui/scroll-velocity";
import { ScrollVelocityIndicator } from "@/components/ui/scroll-velocity-indicator";
import { ToastProvider } from "@/components/ui/toast";
import { ToastContainer } from "@/components/ui/toast-container";
import { AmbientElements } from "@/components/ui/ambient-elements";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <ScrollVelocityProvider>
        <ToastProvider>
          <LenisProvider />
          <CustomCursor />
          <AmbientElements />
          <ScrollVelocityIndicator />
          {children}
          <ToastContainer position="bottom-right" />
        </ToastProvider>
      </ScrollVelocityProvider>
    </ThemeProvider>
  );
}
