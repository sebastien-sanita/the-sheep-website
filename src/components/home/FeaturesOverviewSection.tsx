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
    title: "Dashboard unifi\é",
    description:
      "Visualisez toutes vos m\étriques (d\épenses, ROAS, conversions) dans un seul tableau de bord avec health score.",
  },
  {
    icon: <Megaphone size={24} />,
    title: "Gestion de campagnes",
    description:
      "Cr\éez, \éditez et publiez vos campagnes sur toutes les plateformes sans changer d\'outil.",
  },
  {
    icon: <FileText size={24} />,
    title: "Templates pr\êts \à l\'emploi",
    description:
      "12+ mod\èles de campagnes par cat\égorie : e-commerce, leads, local, \év\énements.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Analytics avanc\és",
    description:
      "Tableaux de m\étriques filtrables, graphiques comparatifs par plateforme et par p\ériode.",
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
      "Recommandations automatiques : optimisation budget, alertes CPC, opportunit\és d\étect\ées.",
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
