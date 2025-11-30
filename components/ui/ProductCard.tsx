import type React from "react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  icon: React.ReactNode | string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

export function ProductCard({
  icon,
  title,
  description,
  buttonText = "Buy now",
  onButtonClick,
  className,
}: ProductCardProps) {
  return (
    <div
      className={cn(
        "w-full h-full flex flex-col text-left",
        "bg-[#eaf7f5] rounded-3xl",
        "px-4 sm:px-5 md:px-6 py-5 sm:py-6 md:py-7",
        "hover:shadow-md transition duration-200",
        "max-w-[260px] sm:max-w-[280px] md:max-w-[300px]",
        "min-h-[260px]",
        className
      )}
    >
      {/* Icon moved to LEFT & smaller */}
      <div
        className={cn(
          "flex items-center justify-center mb-4",
          "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14",
          "bg-[#d4e3f7] rounded-full"
        )}
      >
        {typeof icon === "string" ? <span>{icon}</span> : icon}
      </div>

      {/* Title - smaller */}
      <h3
        className={cn(
          "font-semibold text-gray-900 mb-2",
          "text-base sm:text-lg md:text-xl",
          "leading-snug"
        )}
      >
        {title}
      </h3>

      {/* Description - smaller + left aligned */}
      <p
        className={cn(
          "text-gray-500 mb-5 flex-1",
          "text-xs sm:text-sm md:text-sm",
          "leading-normal"
        )}
      >
        {description}
      </p>

      {/* Button - same style but reduced size */}
      <button
        onClick={onButtonClick}
        className={cn(
          "w-full bg-linear-to-r from-[#2f80ed] to-[#1c5fd4] cursor-pointer",
          "text-white font-semibold",
          "py-2 rounded-full",
          "text-xs sm:text-sm",
          "shadow-sm hover:shadow-md",
          "transition-all duration-200 active:scale-95"
        )}
      >
        {buttonText}
      </button>
    </div>
  );
}
