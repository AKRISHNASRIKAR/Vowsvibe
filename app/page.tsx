import HeroSection from "@/components/home/Hero";
import ProductSection from "@/components/home/product-section";
import Testimonials from "@/components/home/testimonials";
import BestSellersSection from "@/components/home/best-sellers";
import TrustSection from "@/components/home/trust";
import FeaturesSection from "@/components/home/features";
import CharitableInitiativesSection from "@/components/home/charitables";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProductSection />
      <BestSellersSection />
      <TrustSection />
      <FeaturesSection />
      <CharitableInitiativesSection />
      <Testimonials />
    </div>
  );
}
