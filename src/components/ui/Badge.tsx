import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border",
        variant === "default" && "border-border bg-surface text-text-secondary",
        variant === "success" && "border-success/20 bg-success/10 text-success",
        variant === "warning" && "border-warning/20 bg-warning/10 text-warning",
        className
      )}
    >
      {variant === "success" && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}
