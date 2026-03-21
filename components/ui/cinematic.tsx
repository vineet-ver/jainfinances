"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

type StaggerContainerProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: "horizontal" | "vertical";
};

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.05,
  direction = "vertical",
}: StaggerContainerProps) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <div className={className}>
      {items.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, [direction === "horizontal" ? "x" : "y"]: 20 }}
          whileInView={{ opacity: 1, [direction === "horizontal" ? "x" : "y"]: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: index * staggerDelay,
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

export function useScrollProgress(target?: React.RefObject<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const resolvedRef = target || ref;
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: resolvedRef,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setProgress(Math.min(Math.max(latest, 0), 1));
    });
  }, [scrollYProgress]);

  return { scrollProgress: progress, ref: resolvedRef };
}

type CinematicRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
};

export function CinematicReveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.7,
  once = true,
  amount = 0.35,
}: CinematicRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

type ParallexLayerProps = {
  children?: React.ReactNode;
  className?: string;
  depth?: number;
  useVelocity?: boolean;
};

export function ParallaxLayer({
  children,
  className,
  depth = 80,
  useVelocity: enableVelocity = false,
}: ParallexLayerProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [velocity, setVelocity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enableVelocity || prefersReducedMotion) return;

    let lastScrollY = 0;
    let lastTime = Date.now();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const deltaY = Math.abs(currentScrollY - lastScrollY);
      const deltaTime = currentTime - lastTime;

      if (deltaTime > 0) {
        const currentVelocity = deltaY / deltaTime;
        setVelocity(Math.min(currentVelocity, 10)); // Cap at 10 px/ms
      }

      lastScrollY = currentScrollY;
      lastTime = currentTime;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableVelocity, prefersReducedMotion]);

  const baseDepth = prefersReducedMotion ? 0 : isMobile ? depth * 0.42 : depth;
  const velocityBoost = enableVelocity ? 0.65 + velocity * 1.75 : 1;
  const effectiveDepth = Math.min(baseDepth * velocityBoost, baseDepth * 2.15);
  const y = useTransform(scrollYProgress, [0, 1], [effectiveDepth, -effectiveDepth]);

  return (
    <motion.div ref={ref} className={cn(className)} style={{ y }}>
      {children}
    </motion.div>
  );
}
