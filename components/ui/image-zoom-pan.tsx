"use client";

import React, { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ImageZoomPanProps {
  children: React.ReactNode;
  depth?: number;
  className?: string;
}

export function ImageZoomPan({
  children,
  depth = 1.5,
  className = "",
}: ImageZoomPanProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  // Calculate offset based on mouse position
  const offsetX = (mousePosition.x - 0.5) * 20 * depth;
  const offsetY = (mousePosition.y - 0.5) * 20 * depth;

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={{
          scale: prefersReducedMotion ? 1 : isHovering ? 1.1 : 1,
          x: prefersReducedMotion ? 0 : isHovering ? offsetX : 0,
          y: prefersReducedMotion ? 0 : isHovering ? offsetY : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 1,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
