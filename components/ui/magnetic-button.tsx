"use client";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type MagneticButtonProps = {
  href: string;
  label: string;
  className?: string;
};

export function MagneticButton({ href, label, className }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1024px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const reset = () => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.45,
      ease: "elastic.out(1,0.4)",
    });
  };

  const onMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile) return;
    if (!ref.current) return;

    const bounds = ref.current.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    const distanceX = x - bounds.width / 2;
    const distanceY = y - bounds.height / 2;

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    if (distance > Math.max(bounds.width, bounds.height) * 0.6 + 30) {
      reset();
      return;
    }

    gsap.to(ref.current, {
      x: distanceX * 0.2,
      y: distanceY * 0.2,
      duration: 0.25,
      ease: "power3.out",
    });
  };

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={isMobile ? undefined : onMove}
      onMouseLeave={isMobile ? undefined : reset}
      data-cursor="active"
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[--brand-border] px-7 py-3 text-sm font-semibold tracking-[0.14em] text-[--text-primary] transition-all duration-300 hover:border-[--brand-solid]",
        className,
      )}
    >
      <span className="absolute inset-0 bg-[var(--brand-gradient)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10">{label}</span>
    </Link>
  );
}
