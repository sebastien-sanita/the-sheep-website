"use client";

import React from "react";
import { Check } from "lucide-react";
import { AnimatedSection } from "@/components/ui";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface FeatureDetail {
  tag: string;
  title: string;
  description: string;
  subFeatures: string[];
  mockup: React.ReactNode;
}

interface FeatureDetailSectionProps {
  feature: FeatureDetail;
  index: number;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FeatureDetailSection({
  feature,
  index,
}: FeatureDetailSectionProps) {
  const isReversed = index % 2 !== 0;

  return (
    <section
      className={`py-16 sm:py-24 ${index % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col items-center gap-12 lg:gap-16 ${
            isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Text content */}
          <AnimatedSection
            direction={isReversed ? "right" : "left"}
            delay={0.1}
            className="flex-1"
          >
            <div className="max-w-lg">
              {/* Badge / Tag */}
              <span className="inline-flex items-center rounded-full bg-primary-100 px-3.5 py-1 text-sm font-semibold text-primary-700">
                {feature.tag}
              </span>

              {/* Title */}
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                {feature.title}
              </h2>

              {/* Description */}
              <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">
                {feature.description}
              </p>

              {/* Sub-features list */}
              <ul className="mt-6 space-y-3">
                {feature.subFeatures.map((sub) => (
                  <li key={sub} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100">
                      <Check className="h-3.5 w-3.5 text-primary-600" />
                    </span>
                    <span className="text-sm text-gray-600 sm:text-base">
                      {sub}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Mockup placeholder */}
          <AnimatedSection
            direction={isReversed ? "left" : "right"}
            delay={0.25}
            className="flex-1 w-full"
          >
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Gradient border wrapper */}
              <div className="rounded-2xl bg-gradient-to-br from-primary-400 via-primary-600 to-primary-800 p-[2px] shadow-xl shadow-primary-600/10">
                <div className="rounded-[14px] bg-white p-6 sm:p-8">
                  {feature.mockup}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
