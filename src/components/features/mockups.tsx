"use client";

import React from "react";
import {
  TrendingUp,
  Euro,
  ShoppingCart,
  BarChart3,
  GripVertical,
  Star,
  Brain,
  Bell,
  Users,
  Shield,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Dashboard Mockup: 3 KPI cards                                     */
/* ------------------------------------------------------------------ */

export function DashboardMockup() {
  const kpis = [
    {
      label: "Dépenses",
      value: "12 450€",
      change: "+8.2%",
      positive: true,
      icon: Euro,
      color: "bg-primary-100 text-primary-600",
    },
    {
      label: "ROAS",
      value: "3.2x",
      change: "+12.5%",
      positive: true,
      icon: TrendingUp,
      color: "bg-success-50 text-success-600",
    },
    {
      label: "Conversions",
      value: "1 847",
      change: "+5.1%",
      positive: true,
      icon: ShoppingCart,
      color: "bg-warning-50 text-warning-500",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            Vue d&apos;ensemble
          </p>
          <p className="text-sm font-semibold text-gray-900">Dashboard</p>
        </div>
        <span className="inline-flex items-center rounded-full bg-success-50 px-2.5 py-0.5 text-xs font-semibold text-success-600">
          Health: 87%
        </span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div
              key={kpi.label}
              className="rounded-xl border border-gray-100 bg-gray-50/50 p-4"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${kpi.color}`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs text-gray-500">{kpi.label}</span>
              </div>
              <p className="mt-2 text-xl font-bold text-gray-900">
                {kpi.value}
              </p>
              <p className="mt-0.5 text-xs font-medium text-success-600">
                {kpi.change}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Analytics Mockup: Simple bar chart                                 */
/* ------------------------------------------------------------------ */

export function AnalyticsMockup() {
  const bars = [
    { label: "Lun", height: 45, value: "2.1k" },
    { label: "Mar", height: 62, value: "3.4k" },
    { label: "Mer", height: 78, value: "4.2k" },
    { label: "Jeu", height: 55, value: "2.8k" },
    { label: "Ven", height: 90, value: "5.1k" },
    { label: "Sam", height: 40, value: "1.9k" },
    { label: "Dim", height: 35, value: "1.6k" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-primary-600" />
          <p className="text-sm font-semibold text-gray-900">
            Conversions par jour
          </p>
        </div>
        <span className="text-xs text-gray-400">Cette semaine</span>
      </div>

      {/* Bar chart */}
      <div className="flex items-end justify-between gap-2 pt-4" style={{ height: 140 }}>
        {bars.map((bar) => (
          <div
            key={bar.label}
            className="flex flex-1 flex-col items-center gap-1"
          >
            <span className="text-[10px] font-medium text-gray-500">
              {bar.value}
            </span>
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-primary-600 to-primary-400 transition-all"
              style={{ height: `${bar.height}%` }}
            />
            <span className="text-[10px] text-gray-400">{bar.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Campaigns Mockup: Campaign list                                    */
/* ------------------------------------------------------------------ */

export function CampaignsMockup() {
  const campaigns = [
    {
      name: "Soldes Été 2025",
      platform: "Meta Ads",
      status: "Active",
      statusColor: "bg-success-50 text-success-600",
    },
    {
      name: "Lead Gen B2B",
      platform: "Google Ads",
      status: "Active",
      statusColor: "bg-success-50 text-success-600",
    },
    {
      name: "Retargeting Q4",
      platform: "Meta Ads",
      status: "Brouillon",
      statusColor: "bg-warning-50 text-warning-500",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-900">Campagnes</p>
        <button className="rounded-lg bg-primary-600 px-3 py-1.5 text-xs font-semibold text-white">
          + Nouvelle
        </button>
      </div>

      <div className="space-y-2">
        {campaigns.map((c) => (
          <div
            key={c.name}
            className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium text-gray-900">{c.name}</p>
              <p className="text-xs text-gray-400">{c.platform}</p>
            </div>
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${c.statusColor}`}
            >
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CRM Mockup: Kanban board                                           */
/* ------------------------------------------------------------------ */

export function CRMMockup() {
  const columns = [
    {
      title: "Nouveau",
      color: "bg-primary-500",
      count: 12,
      leads: ["Marie D.", "Jean P."],
    },
    {
      title: "Contacté",
      color: "bg-warning-500",
      count: 8,
      leads: ["Luc M."],
    },
    {
      title: "Converti",
      color: "bg-success-500",
      count: 24,
      leads: ["Sophie R."],
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <GripVertical className="h-4 w-4 text-gray-400" />
        <p className="text-sm font-semibold text-gray-900">Pipeline Leads</p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {columns.map((col) => (
          <div key={col.title} className="space-y-2">
            {/* Column header */}
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${col.color}`} />
              <span className="text-xs font-semibold text-gray-700">
                {col.title}
              </span>
              <span className="rounded-full bg-gray-100 px-1.5 text-[10px] font-medium text-gray-500">
                {col.count}
              </span>
            </div>
            {/* Lead cards */}
            {col.leads.map((lead) => (
              <div
                key={lead}
                className="rounded-lg border border-gray-100 bg-white px-3 py-2 shadow-sm"
              >
                <p className="text-xs font-medium text-gray-800">{lead}</p>
                <div className="mt-1 flex items-center gap-1">
                  <Star className="h-3 w-3 text-warning-500" />
                  <span className="text-[10px] text-gray-400">Score: 72</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  AI Insights Mockup: Recommendations                                */
/* ------------------------------------------------------------------ */

export function InsightsMockup() {
  const insights = [
    {
      type: "Optimisation",
      message: "Réduisez le CPC de 18% en ajustant l'audience lookalike",
      icon: Brain,
      color: "bg-primary-100 text-primary-600",
    },
    {
      type: "Alerte",
      message: "Le CPC de « Lead Gen B2B » a augmenté de 25%",
      icon: Bell,
      color: "bg-danger-50 text-danger-500",
    },
    {
      type: "Opportunité",
      message: "Budget non dépensé détecté : +340€ disponibles",
      icon: TrendingUp,
      color: "bg-success-50 text-success-600",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Brain className="h-4 w-4 text-primary-600" />
        <p className="text-sm font-semibold text-gray-900">Insights IA</p>
      </div>

      <div className="space-y-3">
        {insights.map((insight) => {
          const Icon = insight.icon;
          return (
            <div
              key={insight.message}
              className="flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50/50 p-3"
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${insight.color}`}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  {insight.type}
                </p>
                <p className="text-xs leading-relaxed text-gray-700">
                  {insight.message}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Multi-workspace Mockup: Workspace list + roles                     */
/* ------------------------------------------------------------------ */

export function WorkspaceMockup() {
  const workspaces = [
    { name: "Agence Digitale Pro", members: 5, role: "Admin" },
    { name: "Client - BoutiqueMode", members: 2, role: "Manager" },
    { name: "Client - TechStartup", members: 3, role: "Manager" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-primary-600" />
          <p className="text-sm font-semibold text-gray-900">Workspaces</p>
        </div>
        <Shield className="h-4 w-4 text-gray-400" />
      </div>

      <div className="space-y-2">
        {workspaces.map((ws) => (
          <div
            key={ws.name}
            className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-100 text-xs font-bold text-primary-600">
                {ws.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{ws.name}</p>
                <p className="text-[10px] text-gray-400">
                  {ws.members} membres
                </p>
              </div>
            </div>
            <span className="rounded-full bg-primary-50 px-2 py-0.5 text-[10px] font-semibold text-primary-700">
              {ws.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
