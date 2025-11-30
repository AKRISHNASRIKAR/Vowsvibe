import type React from "react";
import { cn } from "@/lib/utils";

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "elevated" | "outlined";
}

export function Card({
  children,
  className,
  onClick,
  variant = "default",
}: BaseCardProps) {
  const variantStyles = {
    default: "bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow",
    elevated: "bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow",
    outlined: "bg-white rounded-lg border border-gray-200",
  };

  return (
    <div
      className={cn(variantStyles[variant], className)}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}
