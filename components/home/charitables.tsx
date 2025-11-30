"use client";

import Image from "next/image";

export default function CharitableInitiativesSection() {
  const charities = [
    { name: "Prostate Cancer Foundation", logo: "/charity/ch1.png" },
    { name: "American Tinnitus Association", logo: "/charity/ch2.png" },
    { name: "U.S. Pain Foundation", logo: "/charity/ch3.png" },
    { name: "American Diabetes Association", logo: "/charity/ch4.png" },
    { name: "American Heart Association", logo: "/charity/ch5.png" },
  ];

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-16 md:py-24"
      style={{ backgroundImage: "url('/charity/bg-char.jpg')" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-pretty">
            Our Charitable Initiatives
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-50 mb-6">
            Health Care Desk Gives Back
          </h3>
          <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto">
            At Health Care Desk, a portion of our profits are committed to
            supporting charities and global health research initiatives.
          </p>
        </div>

        {/* Charity Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {charities.map((charity, index) => (
            <div
              key={index}
              className="relative w-32 h-20 md:w-40 md:h-24 hover:opacity-80 transition-opacity"
            >
              <Image
                src={charity.logo}
                alt={charity.name}
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
