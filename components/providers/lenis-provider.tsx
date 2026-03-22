"use client";

import Lenis from "lenis";
import { useEffect, useState } from "react";

export function LenisProvider() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: isMobile ? 0.6 : 1.15, // Much shorter duration on mobile
      wheelMultiplier: isMobile ? 0.6 : 0.95, // Smaller multiplier on mobile
      smoothWheel: !isMobile, // Disable smooth wheel on mobile for better performance
      touchMultiplier: isMobile ? 0.8 : 1.2, // Reduce touch sensitivity on mobile
    });

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [isMobile]);

  return null;
}
