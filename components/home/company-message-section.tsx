import { companyMessage } from "@/data/home/company-info";

export default function CompanyMessageSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {companyMessage.title}
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          {companyMessage.subtitle}
        </h3>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          {companyMessage.description}
        </p>
      </div>
    </section>
  );
}
