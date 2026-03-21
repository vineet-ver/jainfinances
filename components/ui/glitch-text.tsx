"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  variant?: "glitch" | "morph" | "shimmer";
  className?: string;
  delay?: number;
}

export function GlitchText({
  text,
  variant = "glitch",
  className = "",
  delay = 0,
}: GlitchTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const glitchChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const [glitchText, setGlitchText] = React.useState<string>("");

  React.useEffect(() => {
    if (variant !== "morph") return;

    const pickRandomChar = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      const idx = Math.floor((x - Math.floor(x)) * glitchChars.length);
      return glitchChars[idx] ?? "A";
    };

    let frame = 0;
    const morphInterval = window.setInterval(() => {
      setGlitchText(
        text
          .split("")
          .map((ch, i) => (ch === " " ? " " : pickRandomChar(frame + i * 1.73)))
          .join("")
      );
      frame += 1;
    }, 80);

    const morphTimeout = window.setTimeout(() => {
      window.clearInterval(morphInterval);
      setGlitchText(text);
    }, 1400 + delay * 1000);

    return () => {
      window.clearInterval(morphInterval);
      window.clearTimeout(morphTimeout);
    };
  }, [text, delay, variant, glitchChars]);

  if (variant === "shimmer") {
    return (
      <motion.div
        className={`relative inline-block ${className}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            className="relative inline-block"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: delay + i * 0.02, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {char === " " ? "\u00A0" : char}
            <motion.span
              className="absolute inset-0 text-transparent opacity-0"
              animate={{
                opacity: [0, 1, 0],
                x: ["-100%", "100%"],
              }}
              transition={{
                delay: delay + i * 0.02 + 0.5,
                duration: 1.5,
                repeat: prefersReducedMotion ? 0 : Infinity,
                repeatDelay: 2,
              }}
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </motion.span>
        ))}
      </motion.div>
    );
  }

  if (variant === "morph") {
    return (
      <motion.span
        className={className}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {prefersReducedMotion ? text : glitchText || text}
      </motion.span>
    );
  }

  // Default glitch variant
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="relative inline-block"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: delay + i * 0.018, duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          whileHover={{
            textShadow: prefersReducedMotion ? "none" : `-2px 0 #ff006e, 2px 2px #00d4ff, -2px -2px #ffbe0b`,
            x: prefersReducedMotion ? 0 : [-2, 2, 0],
            y: prefersReducedMotion ? 0 : [-2, 2, 0],
            transition: { duration: prefersReducedMotion ? 0 : 0.2 },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
