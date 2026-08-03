import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
}

export default function GradientText({ children, className, as: Tag = "span" }: GradientTextProps) {
  return (
    <Tag className={cn("text-primary", className)}>
      {children}
    </Tag>
  );
}
