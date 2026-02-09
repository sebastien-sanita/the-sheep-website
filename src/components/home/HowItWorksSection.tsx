"use client";

import React from "react";
import { Link2, BarChart3, Rocket } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: 1,
    icon: Link2,
    title: "Connectez vos comptes",
    description:
      "Liez vos comptes Meta Ads, Google Ads et Instagram en un clic gr\u00e2ce \u00e0 OAuth. Aucune configuration technique requise.",
  },
  {
    number: 2,
    icon: BarChart3,
    title: "Centralisez vos donn\u00e9es",
    description:
      "Toutes vos campagnes, m\u00e9triques et leads remontent automatiquement dans votre dashboard unifi\u00e9.",
  },
  {
    number: 3,
    icon: Rocket,
    title: "Optimisez et scalez",
    description:
      "Utilisez nos insights IA et templates pour cr\u00e9er de meilleures campagnes et augmenter votre ROAS.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            title="Comment \u00e7a marche"
            subtitle="Op\u00e9rationnel en 3 minutes"
          />
        </AnimatedSection>

        <div className="relative mt-16">
          {/* Dashed connector line - hidden on mobile */}
          <div className="absolute top-16 left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] hidden border-t-2 border-dashed border-primary-200 lg:block" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.number} delay={index * 0.15}>
                  <div className="relative flex flex-col items-center text-center">
                    {/* Step number circle */}
                    <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-2xl font-bold text-white shadow-lg shadow-primary-600/25">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                      <Icon size={24} />
                    </div>

                    {/* Content */}
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="max-w-sm leading-relaxed text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
