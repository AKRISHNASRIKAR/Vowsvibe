import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="  overflow-hidden bg-[#f5f5f7] ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center p-6 sm:p-10 lg:p-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Health Desk Clinic:
              <br />
              All Natural Supplements
            </h1>

            <p className="text-gray-700 text-xs sm:text-base leading-relaxed mb-8 text-balance">
              Health Care Desk is the premier choice for those seeking wellness
              through wholesome, superfood-enriched formulas that actually work.
              Our all-natural, organic health supplements are designed to give
              your body what it needs to thrive and optimize your health each
              day!
            </p>

            <div className="w-fit">
              <Button
                size="lg"
                className="bg-[#1a69be] hover:bg-[#1a69be]/90 cursor-pointer text-white rounded-full px-8 font-semibold"
              >
                Shop Now
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <Image
              src="/hero.png"
              alt="Healthcare Professional"
              width={500}
              height={600}
              priority
              sizes="(max-width: 1024px) 0px, 500px"
              className="w-full max-w-md xl:max-w-lg h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
