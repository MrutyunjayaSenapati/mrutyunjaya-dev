import { cn } from "../../lib/utils";

interface TechPillProps {
  label: string;
  variant?: "default" | "small";
  className?: string;
}

export default function TechPill({ label, variant = "default", className }: TechPillProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-border bg-surface text-text-secondary",
        variant === "default" ? "px-3 py-1 text-xs" : "px-2 py-0.5 text-[11px]",
        className
      )}
    >
      {label}
    </span>
  );
}
