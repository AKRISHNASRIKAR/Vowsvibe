"use client";

import ReusableCard from "@/components/reusable-card";
import { productCategories } from "@/data/home/products";

export default function ProductSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-18">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Nutrition Solutions
          <br />
          for Your Complete Well-Being
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center">
        {productCategories.map((product) => (
          <ReusableCard
            key={product.id}
            variant="product"
            icon={product.icon}
            title={product.title}
            description={product.description}
            button={{
              text: "Buy now",
              onClick: () => {
                window.location.href = product.link || "#";
              },
            }}
          />
        ))}
      </div>
    </section>
  );
}
