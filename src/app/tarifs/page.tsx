import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui";
import {
  PricingSection,
  ComparisonTable,
  PricingFAQ,
} from "@/components/pricing";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Tarifs - The Sheep | Plans et prix",
  description:
    "D\écouvrez nos tarifs simples et transparents. Plan Starter \à 49\€/mois, Pro \à 99\€/mois et Agence \à 249\€/mois. Essai gratuit 14 jours.",
};

export default function TarifsPage() {
  return (
    <>
      <Header />

      <main>
        {/* ──────────────────────────────────────────────
            1. Hero Section
        ────────────────────────────────────────────── */}
        <section className="gradient-bg grid-pattern relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
          {/* Decorative blurred circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-400/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary-300/15 blur-3xl"
          />

          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/60 px-4 py-1.5 text-sm font-medium text-primary-700 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Essai gratuit 14 jours &mdash; Sans carte bancaire
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Tarifs{" "}
              <span className="gradient-text">
                simples et transparents
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
              Choisissez le plan adapt&eacute; &agrave; votre activit&eacute;. Changez
              de plan &agrave; tout moment.
            </p>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            2 & 3. Toggle + Pricing Cards
        ────────────────────────────────────────────── */}
        <section className="relative -mt-4 pb-8">
          <PricingSection />
        </section>

        {/* ──────────────────────────────────────────────
            4. Feature Comparison Table
        ────────────────────────────────────────────── */}
        <div className="bg-gray-50">
          <ComparisonTable />
        </div>

        {/* ──────────────────────────────────────────────
            5. FAQ
        ────────────────────────────────────────────── */}
        <PricingFAQ />

        {/* ──────────────────────────────────────────────
            6. Bottom CTA
        ────────────────────────────────────────────── */}
        <section className="gradient-bg grid-pattern py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pas encore convaincu&nbsp;?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Demandez une <span className="font-semibold">d&eacute;mo personnalis&eacute;e</span> et
              d&eacute;couvrez comment The Sheep peut transformer votre gestion
              publicitaire.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg">
                Demander une d&eacute;mo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="#" variant="outline" size="lg">
                Voir une d&eacute;mo en vid&eacute;o
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
