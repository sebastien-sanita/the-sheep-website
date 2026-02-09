"use client";

import React from "react";
import {
  LayoutDashboard,
  Megaphone,
  FileText,
  BarChart3,
  Users,
  Sparkles,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/ui/FeatureCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

const features = [
  {
    icon: <LayoutDashboard size={24} />,
    title: "Dashboard unifi\u00e9",
    description:
      "Visualisez toutes vos m\u00e9triques (d\u00e9penses, ROAS, conversions) dans un seul tableau de bord avec health score.",
  },
  {
    icon: <Megaphone size={24} />,
    title: "Gestion de campagnes",
    description:
      "Cr\u00e9ez, \u00e9ditez et publiez vos campagnes sur toutes les plateformes sans changer d\u2019outil.",
  },
  {
    icon: <FileText size={24} />,
    title: "Templates pr\u00eats \u00e0 l\u2019emploi",
    description:
      "12+ mod\u00e8les de campagnes par cat\u00e9gorie : e-commerce, leads, local, \u00e9v\u00e9nements.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Analytics avanc\u00e9s",
    description:
      "Tableaux de m\u00e9triques filtrables, graphiques comparatifs par plateforme et par p\u00e9riode.",
  },
  {
    icon: <Users size={24} />,
    title: "CRM & Leads",
    description:
      "Vue kanban de vos leads, scoring automatique et suivi des conversations.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Insights IA",
    description:
      "Recommandations automatiques : optimisation budget, alertes CPC, opportunit\u00e9s d\u00e9tect\u00e9es.",
  },
];

export default function FeaturesOverviewSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            title="Tout ce dont vous avez besoin"
            subtitle="pour piloter vos campagnes publicitaires"
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
