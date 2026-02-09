"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import PricingCard from "@/components/ui/PricingCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

const plans = [
  {
    name: "Starter",
    price: "49\u20ac",
    description: "Pour les freelances et solo",
    features: [
      "1 workspace",
      "3 plateformes connect\u00e9es",
      "Dashboard unifi\u00e9",
      "500 leads/mois",
      "Support email",
    ],
    cta: "Commencer",
    href: "/tarifs",
    popular: false,
  },
  {
    name: "Pro",
    price: "99\u20ac",
    description: "Pour les PME et e-commerces",
    features: [
      "3 workspaces",
      "Plateformes illimit\u00e9es",
      "Analytics avanc\u00e9s",
      "Leads illimit\u00e9s",
      "Templates campagnes",
      "Insights IA",
      "Support prioritaire",
    ],
    cta: "Commencer",
    href: "/tarifs",
    popular: true,
  },
  {
    name: "Agence",
    price: "249\u20ac",
    description: "Pour les agences multi-clients",
    features: [
      "Workspaces illimit\u00e9s",
      "Plateformes illimit\u00e9es",
      "Analytics avanc\u00e9s",
      "Leads illimit\u00e9s",
      "Templates campagnes",
      "Insights IA",
      "Gestion d\u2019\u00e9quipe",
      "API access",
      "Support d\u00e9di\u00e9",
    ],
    cta: "Commencer",
    href: "/tarifs",
    popular: false,
  },
];

export default function PricingPreviewSection() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            title="Des tarifs simples et transparents"
            subtitle="Choisissez le plan adapt\u00e9 \u00e0 votre activit\u00e9"
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={index * 0.1}>
              <PricingCard
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                cta={plan.cta}
                href={plan.href}
                popular={plan.popular}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              href="/tarifs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
            >
              Voir tous les d\u00e9tails
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
