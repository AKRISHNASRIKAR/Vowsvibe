import HeroSection from "@/components/home/Hero";
import ProductSection from "@/components/home/product-section";
import Testimonials from "@/components/home/testemonials";
import BestSellersSection from "@/components/home/best-sellers-section";
import TrustSection from "@/components/home/trust-section";
import CompanyMessageSection from "@/components/home/company-message-section";
import FeaturesSection from "@/components/home/features-section";
import CharitableInitiativesSection from "@/components/home/charitables";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProductSection />
      <BestSellersSection />
      <TrustSection />
      <CompanyMessageSection />
      <FeaturesSection />
      <CharitableInitiativesSection />
      <Testimonials />
    </div>
  );
}
