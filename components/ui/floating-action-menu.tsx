"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export interface FloatingActionItem {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  color?: string;
}

interface FloatingActionMenuProps {
  items: FloatingActionItem[];
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  mainIcon?: React.ReactNode;
  mainLabel?: string;
}

export function FloatingActionMenu({
  items,
  position = "bottom-right",
  mainIcon = "+",
  mainLabel = "Menu",
}: FloatingActionMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
    }
  }, [isOpen]);

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
  };

  const itemPositions = items.map((_, idx) => {
    const angle = (idx / items.length) * 360 - 45;
    const radius = 100;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y };
  });

  return (
    <motion.div
      ref={containerRef}
      className={`fixed ${positionClasses[position]} z-50 pointer-events-auto`}
    >
      {/* Main Button */}
      <motion.button
        className="relative h-14 w-14 rounded-full bg-[--brand-solid] shadow-lg flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform"
        whileHover={prefersReducedMotion ? undefined : { scale: 1.1 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={mainLabel}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {typeof mainIcon === "string" ? mainIcon : mainIcon}
        </motion.div>
      </motion.button>

      {/* Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Items */}
            <div className="absolute inset-0 z-50">
              {items.map((item, idx) => (
                <motion.div
                  key={item.label}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: prefersReducedMotion ? 0 : itemPositions[idx].x,
                    y: prefersReducedMotion ? 0 : itemPositions[idx].y,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                    x: 0,
                    y: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: prefersReducedMotion ? 0 : idx * 0.08,
                  }}
                >
                  <button
                    className={`flex items-center justify-center h-12 w-12 rounded-full shadow-md hover:scale-110 active:scale-95 transition-transform ${
                      item.color || "bg-emerald-500"
                    } text-white text-xs`}
                    onClick={() => {
                      item.onClick();
                      setIsOpen(false);
                    }}
                    title={item.label}
                  >
                    {item.icon}
                  </button>

                  {/* Label on hover */}
                  <motion.div
                    className="absolute bottom-full mb-2 whitespace-nowrap text-xs font-medium text-[--text-primary] px-2 py-1 rounded-md bg-[--surface-1] border border-[--brand-border] pointer-events-none opacity-0 hover:opacity-100"
                    initial={{ opacity: 0, y: 5 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    {item.label}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
