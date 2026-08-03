import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
}

export default function GradientText({ children, className, as: Tag = "span" }: GradientTextProps) {
  return (
    <Tag className={cn("text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400", className)}>
      {children}
    </Tag>
  );
}
