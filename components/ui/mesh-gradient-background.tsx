"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function MeshGradientBackground({
  className = "",
}: {
  className?: string;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  // Disable on mobile or reduced motion
  if (isMobile || prefersReducedMotion) {
    return (
      <div className={className} aria-hidden>
        <div
          className="absolute -left-24 top-10 h-136 w-136 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle at center, rgba(212,175,55,0.26), transparent 68%)" }}
        />
      </div>
    );
  }

  return (
    <div className={className} aria-hidden>
      <motion.div
        className="absolute -left-24 top-10 h-136 w-136 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle at center, rgba(212,175,55,0.26), transparent 68%)" }}
        animate={{ x: [0, 70, -30, 0], y: [0, -30, 45, 0], scale: [1, 1.08, 0.95, 1] }}
        transition={{ duration: 24, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute right-0 top-1/3 h-120 w-120 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle at center, rgba(0,31,63,0.25), transparent 70%)" }}
        animate={{ x: [0, -60, 25, 0], y: [0, 50, -25, 0], scale: [1, 0.96, 1.06, 1] }}
        transition={{ duration: 28, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute left-1/3 bottom-0 h-88 w-88 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle at center, rgba(36,80,122,0.28), transparent 70%)" }}
        animate={{ x: [0, 30, -22, 0], y: [0, -35, 15, 0], opacity: [0.35, 0.55, 0.4, 0.35] }}
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}
