"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FeaturesHero() {
  return (
    <section className="relative overflow-hidden gradient-bg">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Decorative blurred circles */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            <span className="gradient-text">Fonctionnalités</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: "easeOut" as const,
            }}
            className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl"
          >
            Tous les outils dont vous avez besoin pour piloter vos campagnes
            publicitaires depuis un seul endroit.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
