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
    price: "49\€",
    description: "Pour les freelances et solo",
    features: [
      "1 workspace",
      "3 plateformes connect\ées",
      "Dashboard unifi\é",
      "500 leads/mois",
      "Support email",
    ],
    cta: "Commencer",
    href: "/tarifs",
    popular: false,
  },
  {
    name: "Pro",
    price: "99\€",
    description: "Pour les PME et e-commerces",
    features: [
      "3 workspaces",
      "Plateformes illimit\ées",
      "Analytics avanc\és",
      "Leads illimit\és",
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
    price: "249\€",
    description: "Pour les agences multi-clients",
    features: [
      "Workspaces illimit\és",
      "Plateformes illimit\ées",
      "Analytics avanc\és",
      "Leads illimit\és",
      "Templates campagnes",
      "Insights IA",
      "Gestion d\'\équipe",
      "API access",
      "Support d\édi\é",
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
            subtitle="Choisissez le plan adapt\é \à votre activit\é"
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
              Voir tous les d\étails
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
