import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden rounded-md bg-[--surface-2]/85",
        "before:absolute before:inset-0 before:-translate-x-full before:bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.2),transparent)]",
        "before:animate-[skeletonShimmer_1.3s_ease-in-out_infinite]",
        className,
      )}
    />
  );
}
