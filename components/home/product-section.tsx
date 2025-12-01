"use client";

import { ProductCard } from "@/components/ui/ProductCard";
import { productCategories } from "@/data/home/products";

export default function ProductSection() {
  const handleBuyNow = (productTitle: string) => {
    console.log(`Buy now clicked for: ${productTitle}`);
    // Add your navigation logic here
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
            Nutrition Solutions
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            for Your Complete Well-Being
          </h3>
        </div>
      </div>

      {/* Horizontal Scrollable Container */}
      <div className="w-full overflow-x-auto scrollbar-hide flex justify-center">
        <div className="px-4 sm:px-6 lg:px-8 pb-4 ">
          <div className="inline-flex gap-8 sm:gap-5 md:gap-6 lg:gap-7 min-w-max ">
            {productCategories.map((product, index) => (
              <div key={product.id} className="shrink-0">
                <ProductCard
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                  buttonText="Buy Now"
                  onButtonClick={() => handleBuyNow(product.title)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
