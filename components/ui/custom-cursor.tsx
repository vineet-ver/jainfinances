"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { damping: 28, stiffness: 420, mass: 0.25 });
  const springY = useSpring(y, { damping: 28, stiffness: 420, mass: 0.25 });

  useEffect(() => {
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
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-[100] hidden rounded-full border border-[--brand-border] mix-blend-difference md:block",
        active ? "h-14 w-14 bg-white/15" : "h-5 w-5 bg-transparent",
      )}
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", damping: 24, stiffness: 380 }}
    />
  );
}
