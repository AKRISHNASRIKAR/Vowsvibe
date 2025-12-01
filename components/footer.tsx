"use client";

import type React from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import {
  infoSections,
  productColumns,
  contactInfo,
  paymentMethods,
  footerLinks,
  disclaimer,
} from "@/data/footer";
import ButtonWhite from "./ui/button-white";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="w-full">
      {/* Info Section - Have a Question, Connect With Us, We're Social */}
      <div className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infoSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {section.description}
                </p>
                {section.buttonText && section.buttonLink && (
                  <ButtonWhite href={section.buttonLink}>
                    {section.buttonText}
                  </ButtonWhite>
                )}
                {section.phone && (
                  <p className="text-xl font-bold text-gray-900">
                    {section.phone}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#1a69be] px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Left side - Text content */}
            <div className="lg:max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-balance">
                Let&apos;s Grow Together
              </h2>
              <p className="text-blue-100 text-sm sm:text-base">
                We&apos;ll keep it simple. Only the news and updates you need.
              </p>
            </div>

            {/* Email form on right*/}
            <form
              onSubmit={handleSubscribe}
              className="flex gap-0 lg:max-w-xl w-full lg:w-auto shrink-0 cursor-pointer"
            >
              <input
                type="email"
                placeholder="Please Enter Your Email"
                className="flex-1 px-10 py-3 text-base border-2 border-white/30 bg-blue-600/50 text-white placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                required
              />
              <button
                type="submit"
                className="px-10 py-3 text-base bg-white text-black font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-white px-4 py-12 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:divide-x-2 divide-black gap-8 lg:gap-0">
            {/* Left Section - Contact Info */}
            <div className="lg:pr-8 lg:w-1/3">
              <Image
                src="/logo.png"
                alt="Health Desk"
                className="h-12 mb-4"
                width={150}
                height={75}
                style={{ width: "auto", height: "48px" }}
              />
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                  <p>Address: {contactInfo.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 shrink-0" />
                  <p>Phone: {contactInfo.phone}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 shrink-0" />
                  <Link
                    href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${contactInfo.email}`}
                  >
                    <p>
                      Email:
                      <span className="hover:text-[#1A69BE] px-2">
                        {contactInfo.email}{" "}
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Section - Products */}
            <div className="lg:pl-8 lg:w-2/3">
              <h3 className="font-semibold text-[#1D9BF0] mb-6 text-base">
                Our Products
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {productColumns.map((products, columnIndex) => (
                  <div key={columnIndex}>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {products.map((product, productIndex) => (
                        <li key={productIndex}>
                          <Link
                            href={`/products/${product
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="hover:text-blue-600 transition-colors"
                          >
                            {product}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer and Payment Methods */}
      <div className="bg-[#E7E6E6] text-gray-600 px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-gray-600 mb-4 text-center">
            {disclaimer.line1}
            <br />
            {disclaimer.line2}
          </p>

          <div className="flex justify-center items-center gap-3">
            <div className="flex gap-2">
              {paymentMethods.map((method) => (
                <Image
                  key={method.name}
                  src={method.logo}
                  alt={method.name}
                  className="h-6 w-auto"
                  width={40}
                  height={24}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#E7E6E6] text-gray-600 px-4 py-6 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm">
            © {currentYear}, Health Desk Clinic. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs sm:text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
