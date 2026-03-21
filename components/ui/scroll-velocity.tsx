import React, { createContext, useContext, useEffect, useRef, useState } from "react";

interface ScrollVelocityContextType {
  velocity: number;
  isScrolling: boolean;
}

const ScrollVelocityContext = createContext<ScrollVelocityContextType | undefined>(undefined);

export function ScrollVelocityProvider({ children }: { children: React.ReactNode }) {
  const [velocity, setVelocity] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollYRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!lastTimeRef.current) {
      lastTimeRef.current = Date.now();
    }
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const deltaY = Math.abs(currentScrollY - lastScrollYRef.current);
      const deltaTime = currentTime - (lastTimeRef.current || Date.now());

      if (deltaTime > 0) {
        const currentVelocity = deltaY / deltaTime; // px/ms
        setVelocity(Math.min(currentVelocity, 10)); // Cap at 10 px/ms for stability
      }

      setIsScrolling(true);
      lastScrollYRef.current = currentScrollY;

      lastTimeRef.current = currentTime;

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        setVelocity(0);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <ScrollVelocityContext.Provider value={{ velocity, isScrolling }}>
      {children}
    </ScrollVelocityContext.Provider>
  );
}

export function useScrollVelocity() {
  const context = useContext(ScrollVelocityContext);
  if (!context) {
    throw new Error("useScrollVelocity must be used within ScrollVelocityProvider");
  }
  return context;
}
