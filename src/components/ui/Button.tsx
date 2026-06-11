import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  className?: string;
  as?: "button" | "a";
}

export default function Button({
  children,
  variant = "primary",
  href,
  className,
  as = "a",
  ...props
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
    variant === "primary" && "bg-primary text-white hover:opacity-90 active:scale-[0.98]",
    variant === "secondary" && "border border-border bg-surface text-text-secondary hover:bg-surface-elevated hover:text-text",
    variant === "ghost" && "text-text-secondary hover:text-text",
    className
  );

  if (as === "a" && href) {
    return (
      <a href={href} className={base} {...(props as ButtonHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={base} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
