"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useBestSellers } from "@/hooks";

export default function BestSellersSection() {
  const { products, filters, loading, error } = useBestSellers();

  if (loading) {
    return (
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-gray-500">Loading best sellers...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-red-500">
              Error loading best sellers: {error.message}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Best Sellers
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mb-8">
          Formulated with science-backed all-natural ingredients, our unique
          supplements support holistic health, healing & wellness.
        </p>

        {/* Filters as Text with Dividers */}
        <div className="flex divide-x-2 divide-black w-max rounded-md px-2">
          {filters.map((filter, index) => (
            <span
              key={filter}
              className={`text-black font-medium cursor-pointer hover:text-gray-700 transition-colors ${
                index === 0
                  ? "pr-4"
                  : index === filters.length - 1
                  ? "pl-4"
                  : "px-4"
              }`}
            >
              {filter}
            </span>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col">
              {/* Product Image Container */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 h-56 sm:h-48 flex items-center justify-center overflow-hidden hover:bg-gray-100 transition-colors">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={200}
                  className="object-contain"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {product.name}
              </h3>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: product.rating }).map((_, i) => (
                  <span key={i} className="text-[#F8A401] text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Button */}
              <Button
                onClick={() => {
                  window.location.href = product.link || "#";
                }}
                className="bg-transparent text-[#1A69BE] border-2 border-[#1A69BE] hover:bg-[#1A69BE]/90 cursor-pointer hover:text-white font-semibold py-2 w-full transition-colors"
              >
                Shop Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
