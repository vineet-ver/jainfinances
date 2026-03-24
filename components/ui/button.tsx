"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-full text-sm font-semibold tracking-wide transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 w-full md:w-auto",
  {
    variants: {
      variant: {
        primary:
          "gold-badge px-7 py-3 text-[--olive] shadow-[0_6px_24px_rgba(255,170,0,0.3)] hover:shadow-[0_8px_32px_rgba(255,170,0,0.4)] hover:brightness-110 active:scale-95",
        glass:
          "glass px-7 py-3 text-[--text-primary] hover:border-[--gold] active:scale-95",
        ghost:
          "border border-[--glass-border] px-7 py-3 text-[--text-primary] hover:bg-[--surface-glass] active:scale-95",
        blue:
          "bg-[--blue] px-7 py-3 text-white shadow-[0_6px_24px_rgba(19,78,142,0.3)] hover:shadow-[0_8px_32px_rgba(19,78,142,0.4)] hover:brightness-110 active:scale-95",
      },
      size: {
        default: "h-11",
        lg: "h-13 px-8 text-base",
        sm: "h-9 px-5 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  onClick,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? ("span" as const) : "button";
  const [ripples, setRipples] = React.useState<Array<{ x: number; y: number; id: number }>>([]);

  const onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 520);
  };

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      onMouseDown={onMouseDown}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 animate-[ripple_520ms_ease-out_forwards]"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </Comp>
  );
}

export { Button, buttonVariants };
