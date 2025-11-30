"use client";

import type React from "react";
import { cn } from "@/lib/utils";

interface ReusableCardProps {
  variant?: "product" | "testimonial" | "blog";

  icon?: React.ReactNode | string;
  avatar?: string;
  name?: string;
  role?: string;
  rating?: number;
  image?: string;
  date?: string;
  category?: string;

  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  button?: {
    text: string;
    onClick?: () => void;
  };
}

export default function ReusableCard({
  variant = "product",
  icon,
  avatar,
  name,
  role,
  rating,
  image,
  date,
  category,
  title,
  description,
  children,
  className,
  button,
}: ReusableCardProps) {
  // Product Card
  if (variant === "product") {
    return (
      <div className={cn("w-full max-w-[270px]", className)}>
        <div className="bg-[#edf9f6] rounded-[19px] p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow min-h-[266px]">
          {/* Icon */}
          {icon && (
            <div className="text-5xl mb-5 w-16 h-16 flex items-center justify-center shrink-0">
              {typeof icon === "string" ? icon : icon}
            </div>
          )}

          {/* Title */}
          {title && (
            <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
              {title}
            </h3>
          )}

          {/* Description */}
          {description && (
            <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
              {description}
            </p>
          )}

          {/* Button */}
          {button && (
            <button
              onClick={button.onClick}
              className="bg-[#1a69be] hover:bg-[#1a69be]/90 text-white rounded-full w-full font-semibold py-2.5 px-4 transition-colors text-sm"
            >
              {button.text}
            </button>
          )}
        </div>
      </div>
    );
  }

  // Testimonial Card
  if (variant === "testimonial") {
    return (
      <div className={cn("w-full", className)}>
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow h-full">
          {avatar && (
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 mb-4 shrink-0">
              <img
                src={avatar}
                alt={name || "User"}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {title && (
            <h4 className="text-lg font-bold text-foreground mb-2">{title}</h4>
          )}

          {rating && (
            <div className="flex gap-1 mb-4">
              {Array.from({ length: Math.floor(rating) }).map((_, i) => (
                <span key={i} className="text-amber-400 text-lg">
                  ★
                </span>
              ))}
            </div>
          )}

          {description && (
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
              {description}
            </p>
          )}

          {name && (
            <p className="font-semibold text-foreground text-sm mt-auto">
              - {name}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Blog Card
  if (variant === "blog") {
    return (
      <div className={cn("w-full", className)}>
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
          {image && (
            <div className="aspect-video relative overflow-hidden shrink-0">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
              {category && (
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {category}
                </span>
              )}
            </div>
          )}

          <div className="p-6 flex flex-col flex-1">
            {date && (
              <p className="text-xs text-muted-foreground mb-2">{date}</p>
            )}

            {title && (
              <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                {title}
              </h3>
            )}

            {description && (
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                {description}
              </p>
            )}

            {button && (
              <button
                onClick={button.onClick}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm self-start mt-auto"
              >
                {button.text} →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
