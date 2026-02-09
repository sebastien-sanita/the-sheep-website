import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SchemaOrg } from "@/components/SchemaOrg";
import {
  HeroSection,
  LogoCloudSection,
  FeaturesOverviewSection,
  HowItWorksSection,
  TestimonialsSection,
  PricingPreviewSection,
  FAQSection,
  CTASection,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <SchemaOrg />
      <Header />
      <main>
        <HeroSection />
        <LogoCloudSection />
        <FeaturesOverviewSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingPreviewSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
