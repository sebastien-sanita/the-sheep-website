"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 py-20 sm:py-28">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Pr&ecirc;t &agrave; simplifier votre gestion publicitaire ?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-100">
            Rejoignez 200+ agences qui utilisent The Sheep pour piloter leurs
            campagnes.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="secondary"
              size="lg"
              href="/inscription"
              className="border-white bg-white text-primary-700 hover:bg-primary-50"
            >
              Commencer gratuitement
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/demo"
              className="border-white/30 text-white hover:border-white hover:text-white"
            >
              Demander une d&eacute;mo
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="mt-6 text-sm text-primary-200">
            Essai gratuit 14 jours &middot; Sans carte bancaire
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
