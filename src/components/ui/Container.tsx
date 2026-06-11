import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  id?: string;
}

export default function Container({ children, className, as: Tag = "section", id }: ContainerProps) {
  return (
    <Tag id={id} className={cn("mx-auto max-w-6xl px-4 py-24", className)}>
      {children}
    </Tag>
  );
}
