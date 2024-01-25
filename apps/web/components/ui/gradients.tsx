"use client";

import { cn } from "@/lib/utils";

interface TextGradientProps {
  small?: boolean;
  conic?: boolean;
  className?: string;
}

export function TextGradient({ conic, className, small }: TextGradientProps) {
  return (
    <span
      className={cn(
        "absolute mix-blend-normal will-change-[filter] pointer-events-none",
        conic ? "bg-[var(--glow-conic)]" : undefined,
        small ? "blur-[32px]" : "blur-[75px]",
        className
      )}
    />
  );
}

interface GradientProps {
  className?: string;
}

export function Gradient({ className }: GradientProps) {
  return (
    <div
      className={cn("fixed bg-blend-normal pointer-events-none", className)}
    />
  );
}
