"use client";

import testimonials from "@/data/home/testimonials";
import Image from "next/image";
import { Facebook, Twitter, Send, Linkedin } from "lucide-react";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Send, href: "#", label: "Telegram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-pretty">
            Verified Customer Testimonials
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.id}
              image={t.image}
              title={t.product}
              rating={t.rating}
              content={t.text}
              name={t.name}
            />
          ))}
        </div>

        {/* Health Desk Logo & Social */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/testimonial/test-logo.png"
            alt="Health Desk"
            width={238}
            height={113}
            className="h-auto"
            priority
          />

          <button className="px-8 py-2 border cursor-pointer border-blue-600 text-blue-600  font-semibold hover:bg-blue-50 transition-colors">
            Follow Us
          </button>

          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
