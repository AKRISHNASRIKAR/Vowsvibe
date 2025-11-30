"use client";

import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  image: string;
  title: string;
  rating: number;
  content: string;
  name: string;
  className?: string;
}

export function TestimonialCard({
  image,
  title,
  rating,
  content,
  name,
  className = "",
}: TestimonialCardProps) {
  return (
    <div
      className={`relative bg-[#eaf5ff] rounded-xl p-6 flex flex-col justify-between h-70 w-full shadow-sm ${className}`}
    >
      {/* Product Image */}
      <div className="absolute -top-10 left-4">
        <Image
          src={image}
          alt={title}
          width={90}
          height={90}
          className="object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="pl-28">
        <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>

        {/* Rating */}
        <div className="flex gap-1 mb-3">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={18} className="fill-[#facc15] text-[#facc15]" />
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed mb-3">{content}</p>

        {/* Name */}
        <p className="font-semibold text-foreground text-sm absolute bottom-4 left-28">
          - {name}
        </p>
      </div>
    </div>
  );
}
