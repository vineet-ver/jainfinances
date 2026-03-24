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

  const getSeededRandom = (seed: number): number => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  const elements = useMemo(() => {
    const colors = [
      "rgba(255, 170, 0, 0.12)",
      "rgba(19, 78, 142, 0.08)",
      "rgba(174, 183, 132, 0.1)",
      "rgba(53, 88, 114, 0.06)",
      "rgba(255, 209, 102, 0.08)",
    ];

    return Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: getSeededRandom(i * 2.71) * 100,
      y: getSeededRandom(i * 3.14) * 100,
      size: 24 + getSeededRandom(i * 1.41) * 60,
      duration: 22 + getSeededRandom(i * 2.23) * 18,
      color: colors[Math.floor(getSeededRandom(i * 1.73) * colors.length)],
      opacity: 0.04 + getSeededRandom(i * 4.44) * 0.08,
    }));
  }, []);

  // Completely disable on mobile or reduced motion
  if (isMobile || prefersReducedMotion) {
    return null;
  }

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
            y: [0, -28, 0],
            x: [0, 18, 0],
            scale: [1, 1.08, 1],
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
