"use client";

import React, { useMemo, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useScrollVelocity } from "./scroll-velocity";

export function AmbientElements() {
  const { velocity } = useScrollVelocity();
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  // Completely disable on mobile or reduced motion
  if (isMobile || prefersReducedMotion) {
    return null;
  }

  // Initialize random seed based on component creation time
  const getSeededRandom = (seed: number): number => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  const elements = useMemo(() => {
    const colors = [
      "rgba(212, 175, 55, 0.15)",
      "rgba(0, 31, 63, 0.1)",
      "rgba(255, 182, 193, 0.08)",
      "rgba(100, 200, 255, 0.1)",
      "rgba(255, 215, 0, 0.07)",
    ];

    // Reduce from 12 to 6 elements even on desktop
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: getSeededRandom(i * 2.71) * 100,
      y: getSeededRandom(i * 3.14) * 100,
      size: 20 + getSeededRandom(i * 1.41) * 60,
      duration: 20 + getSeededRandom(i * 2.23) * 20,
      color: colors[Math.floor(getSeededRandom(i * 1.73) * colors.length)],
      opacity: 0.05 + getSeededRandom(i * 4.44) * 0.1,
    }));
  }, []);

  return (
    <>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="fixed rounded-full pointer-events-none -z-10 blur-3xl will-change-transform"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.size,
            height: element.size,
            backgroundColor: element.color,
            contain: "layout style paint",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: element.duration * (0.5 + velocity * 2),
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
}
