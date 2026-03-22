"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { damping: 28, stiffness: 420, mass: 0.25 });
  const springY = useSpring(y, { damping: 28, stiffness: 420, mass: 0.25 });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    // Don't attach event listeners on mobile
    if (isMobile) return;

    const move = (event: MouseEvent) => {
      x.set(event.clientX - 10);
      y.set(event.clientY - 10);
      setVisible(true);
    };

    const hide = () => setVisible(false);

    const setHover = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const isInteractive = Boolean(target?.closest("a, button, input, textarea, [data-cursor='active']"));
      setActive(isInteractive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", hide);
    window.addEventListener("mouseover", setHover);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", hide);
      window.removeEventListener("mouseover", setHover);
    };
  }, [x, y, isMobile]);

  // Don't render on mobile
  if (isMobile) {
    return null;
  }

  return (
    <motion.div
      aria-hidden
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-100 hidden rounded-full border md:block",
        active
          ? "h-14 w-14 border-[--brand-solid]/55 bg-[--brand-solid]/16 shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_0_28px_rgba(0,31,63,0.3)]"
          : "h-5 w-5 border-[--brand-solid]/75 bg-[--brand-solid] shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_0_16px_rgba(0,31,63,0.25)]",
      )}
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", damping: 24, stiffness: 380 }}
    />
  );
}
