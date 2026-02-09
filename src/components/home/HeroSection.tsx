"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Users } from "lucide-react";
import Button from "@/components/ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const kpiData = [
  { label: "ROAS", value: "4.2x", change: "+18%", positive: true },
  { label: "Conversions", value: "1,284", change: "+24%", positive: true },
  { label: "CPC moyen", value: "0.42€", change: "-12%", positive: true },
  { label: "Dépenses", value: "8,450€", change: "Ce mois", positive: true },
];

export default function HeroSection() {
  return (
    <section className="gradient-bg relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36">
      {/* Grid pattern overlay */}
      <div className="grid-pattern absolute inset-0" />

      {/* Decorative blurred circles */}
      <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-primary-400/10 blur-3xl" />
      <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-primary-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Social proof badge */}
          <motion.div variants={itemVariants}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/80 px-4 py-2 text-sm font-medium text-primary-700 shadow-sm backdrop-blur-sm">
              <Users size={16} className="text-primary-600" />
              <span>Utilisé par 200+ agences en France</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Pilotez toutes vos pubs
            <br />
            <span className="gradient-text">depuis un seul endroit</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl"
          >
            The Sheep connecte Meta Ads, Google Ads et Instagram en un clic.
            Gérez vos campagnes, analysez vos performances et boostez votre
            ROAS — depuis un dashboard unique.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button variant="primary" size="lg" href="/inscription">
              Commencer gratuitement
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" href="/demo">
              <Play size={18} className="mr-2" />
              Voir la démo
            </Button>
          </motion.div>

          {/* Trust text */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-sm text-gray-500"
          >
            Essai gratuit 14 jours · Sans carte bancaire
          </motion.p>

          {/* Dashboard Mockup */}
          <motion.div
            variants={itemVariants}
            className="mt-16 w-full max-w-5xl"
          >
            <div className="rounded-2xl bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 p-[2px] shadow-2xl shadow-primary-600/20">
              <div className="rounded-[14px] bg-white p-4 sm:p-6">
                {/* Mockup top bar */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-danger-500" />
                    <div className="h-3 w-3 rounded-full bg-warning-500" />
                    <div className="h-3 w-3 rounded-full bg-success-500" />
                  </div>
                  <div className="rounded-lg bg-gray-100 px-4 py-1.5 text-xs text-gray-400">
                    app.thesheep.io/dashboard
                  </div>
                  <div className="w-16" />
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                  {kpiData.map((kpi) => (
                    <div
                      key={kpi.label}
                      className="rounded-xl border border-gray-100 bg-gray-50 p-3 sm:p-4"
                    >
                      <p className="text-xs font-medium text-gray-500 sm:text-sm">
                        {kpi.label}
                      </p>
                      <p className="mt-1 text-lg font-bold text-gray-900 sm:text-2xl">
                        {kpi.value}
                      </p>
                      <p
                        className={`mt-1 text-xs font-medium ${
                          kpi.positive
                            ? "text-success-500"
                            : "text-danger-500"
                        }`}
                      >
                        {kpi.change}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Fake chart area */}
                <div className="mt-4 flex items-end gap-1 rounded-xl border border-gray-100 bg-gray-50 p-4 sm:p-6">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-primary-600 to-primary-400"
                        style={{ height: `${h}px`, opacity: 0.6 + i * 0.03 }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
