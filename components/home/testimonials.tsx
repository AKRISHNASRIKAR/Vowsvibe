"use client";

import testimonials from "@/data/home/testimonials";
import Image from "next/image";
import { Facebook, Twitter, Send, Linkedin } from "lucide-react";

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
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Product Image */}
              <div className="mb-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.product}
                    className="w-full h-full object-cover"
                    width={64}
                    height={64}
                  />
                </div>
              </div>

              {/* Product Name */}
              <h4 className="text-lg font-bold text-foreground mb-2">
                {testimonial.product}
              </h4>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 grow">
                {testimonial.text}
              </p>

              {/* Customer Name */}
              <p className="font-semibold text-foreground text-sm">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        {/* Health Desk Logo & Social */}
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/testimonial/test-logo.png"
              alt="Health Desk"
              width={238}
              height={113}
              className="h-auto"
              priority
            />
          </div>

          {/* Follow Us Button */}
          <button className="px-8 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Follow Us
          </button>

          {/* Social Media Icons */}
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
