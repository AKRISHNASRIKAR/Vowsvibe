"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Shop", href: "#" },
    { label: "About Us", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="relative w-32 h-10 sm:w-40 sm:h-12 md:w-48 md:h-14 cursor-pointer">
              <Image
                src="/logo.png"
                alt="Health Desk Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Cart Icon */}
          {/* <div className="flex items-center gap-4"> */}
          <button className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
            <ShoppingBag size={20} />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* </div> */}
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
