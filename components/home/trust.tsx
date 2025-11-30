import Image from "next/image";
import { trustFeatures } from "@/data/home/trust-section";

export default function TrustSection() {
  return (
    <div className="max-w-7xl mx-auto">
      <section
        className="py-16 px-4 md:px-8 lg:px-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/trust/trust-bg.jpg')" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              A Brand That You Can Trust
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Our results-driven supplements are made with premium & safe
              ingredients
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {trustFeatures.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center gap-4"
              >
                {/* Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 relative">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title */}
                <p className="font-semibold text-sm md:text-base text-[#1A69BE]">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
