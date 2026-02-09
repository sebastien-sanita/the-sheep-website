"use client";

import React from "react";
import FeatureDetailSection from "./FeatureDetailSection";
import type { FeatureDetail } from "./FeatureDetailSection";
import {
  DashboardMockup,
  AnalyticsMockup,
  CampaignsMockup,
  CRMMockup,
  InsightsMockup,
  WorkspaceMockup,
} from "./mockups";

const features: FeatureDetail[] = [
  {
    tag: "Dashboard",
    title: "Visualisez toutes vos performances en un coup d\u2019\u0153il",
    description:
      "Agrégez les données de Meta Ads, Google Ads et Instagram dans un tableau de bord unique. Le health score vous indique instantanément la santé de vos campagnes.",
    subFeatures: [
      "KPIs agrégés en temps réel",
      "Health score global",
      "Widgets personnalisables",
      "Vue multi-comptes",
    ],
    mockup: <DashboardMockup />,
  },
  {
    tag: "Analytics",
    title: "Analysez vos campagnes en profondeur",
    description:
      "Filtrez vos métriques par plateforme, période et objectif. Comparez les performances entre campagnes et identifiez ce qui fonctionne.",
    subFeatures: [
      "Filtres avancés par plateforme",
      "Graphiques comparatifs",
      "Export CSV et PDF",
      "Rapports automatisés",
    ],
    mockup: <AnalyticsMockup />,
  },
  {
    tag: "Campagnes",
    title: "Créez et gérez vos campagnes cross-plateforme",
    description:
      "Lancez des campagnes sur Meta et Google depuis une seule interface. Utilisez nos templates pour gagner du temps.",
    subFeatures: [
      "Création cross-plateforme",
      "12+ templates par catégorie",
      "Duplication en un clic",
      "Planification automatique",
    ],
    mockup: <CampaignsMockup />,
  },
  {
    tag: "CRM",
    title: "Suivez vos leads du clic à la conversion",
    description:
      "Vue kanban intuitive pour gérer vos leads capturés. Scoring automatique et historique des conversations.",
    subFeatures: [
      "Vue kanban drag & drop",
      "Scoring automatique",
      "Historique des interactions",
      "Export et intégrations",
    ],
    mockup: <CRMMockup />,
  },
  {
    tag: "Intelligence Artificielle",
    title: "Laissez l\u2019IA optimiser vos campagnes",
    description:
      "Recevez des recommandations automatiques pour améliorer vos performances. Alertes CPC, optimisation budget, opportunités détectées.",
    subFeatures: [
      "Recommandations automatiques",
      "Alertes intelligentes",
      "Optimisation budget",
      "Détection d\u2019opportunités",
    ],
    mockup: <InsightsMockup />,
  },
  {
    tag: "Collaboration",
    title: "Gérez plusieurs clients et équipes",
    description:
      "Un compte agence pour tous vos clients. Attribuez des rôles (Admin, Manager, Client Viewer, Collaborateur) et gardez le contrôle.",
    subFeatures: [
      "Workspaces dédiés par client",
      "4 niveaux de rôles",
      "Permissions granulaires",
      "Tableau de bord agence",
    ],
    mockup: <WorkspaceMockup />,
  },
];

export default function FeaturesContent() {
  return (
    <>
      {features.map((feature, index) => (
        <FeatureDetailSection
          key={feature.tag}
          feature={feature}
          index={index}
        />
      ))}
    </>
  );
}
