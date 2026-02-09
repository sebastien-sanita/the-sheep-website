import { Header, Footer } from "@/components/layout";
import { FeaturesHero, FeaturesContent, FeaturesCTA } from "@/components/features";

export const metadata = {
  title: "Fonctionnalités - The Sheep | Gestion de campagnes publicitaires",
  description:
    "Découvrez toutes les fonctionnalités de The Sheep : dashboard unifié, analytics, gestion de campagnes, CRM, insights IA et plus encore.",
};

export default function FonctionnalitesPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <FeaturesHero />

        {/* Feature detail sections (alternating left/right) */}
        <FeaturesContent />

        {/* CTA */}
        <FeaturesCTA />
      </main>

      <Footer />
    </>
  );
}
