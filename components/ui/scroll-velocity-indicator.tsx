"use client";

import { useScrollVelocity } from "@/components/ui/scroll-velocity";
import { motion } from "framer-motion";

export function ScrollVelocityIndicator() {
  const { velocity, isScrolling } = useScrollVelocity();
  const width = Math.min(velocity * 22, 100);

  return (
    <div className="pointer-events-none fixed bottom-4 left-4 z-40 hidden w-32 rounded-full border border-[--brand-border] bg-[--surface-1]/70 p-1 backdrop-blur-md md:block">
      <div className="h-1.5 w-full rounded-full bg-[--surface-2]">
        <motion.div
          className="h-full rounded-full bg-(--brand-gradient)"
          animate={{ width: `${isScrolling ? width : 0}%`, opacity: isScrolling ? 1 : 0.45 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        />
      </div>
      <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-[--text-secondary]">Scroll Energy</p>
    </div>
  );
}
