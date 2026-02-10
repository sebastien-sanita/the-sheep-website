"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, Button } from "@/components/ui";

export default function FeaturesCTA() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-20 sm:py-28">
      {/* Decorative blurred circles */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Prêt à découvrir{" "}
            <span className="bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
              The Sheep
            </span>{" "}
            ?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-gray-300">
            Testez gratuitement pendant 14 jours, sans carte bancaire.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg" href="https://app.the-sheep.fr/dashboard">
              Commencer gratuitement
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/contact"
              className="border-gray-600 text-gray-200 hover:border-primary-400 hover:text-white"
            >
              Demander une démo
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
