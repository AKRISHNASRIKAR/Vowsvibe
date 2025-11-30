"use client";

import Image from "next/image";
import { featuresData } from "@/data/home/features";
import { cn } from "@/lib/utils";
import CompanyMessageSection from "./company-message-section";

export default function FeaturesSection() {
  return (
    <>
      <CompanyMessageSection />
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-20">
          {featuresData.map((feature) => (
            <div key={feature.id} className="@container">
              <div
                className={cn(
                  "flex flex-col @lg:flex-row gap-8 @lg:gap-12 items-center",
                  feature.imagePosition === "right" && "@lg:flex-row-reverse"
                )}
              >
                {/* Image Section */}
                <div className="w-full @lg:w-1/2">
                  <div className="relative aspect-465/414 rounded-lg overflow-hidden">
                    <Image
                      src={feature.image.src}
                      alt={feature.image.alt}
                      width={feature.image.width}
                      height={feature.image.height}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full @lg:w-1/2 flex flex-col justify-center space-y-4">
                  <p className="text-sm text-muted-foreground font-medium">
                    {feature.subtitle}
                  </p>

                  <h3 className="text-2xl @lg:text-3xl @xl:text-4xl font-bold text-foreground">
                    {feature.title}
                  </h3>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="pt-2">
                    <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                      {feature.button.text}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
