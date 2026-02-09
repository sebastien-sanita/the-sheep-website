"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const platforms = [
  { name: "Meta Ads", color: "bg-blue-500" },
  { name: "Google Ads", color: "bg-yellow-500" },
  { name: "Instagram", color: "bg-pink-500" },
  { name: "LinkedIn Ads", color: "bg-sky-600" },
  { name: "TikTok Ads", color: "bg-gray-900" },
];

export default function LogoCloudSection() {
  return (
    <section className="border-y border-gray-100 bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-sm font-medium uppercase tracking-wider text-gray-500">
            Connectez vos plateformes pr&eacute;f&eacute;r&eacute;es
          </p>
        </AnimatedSection>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
          {platforms.map((platform, index) => (
            <AnimatedSection key={platform.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group flex cursor-default items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-3 transition-all duration-300 hover:border-primary-300 hover:shadow-md"
              >
                <div
                  className={`h-3 w-3 rounded-full ${platform.color} opacity-50 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <span className="text-sm font-semibold text-gray-400 transition-colors duration-300 group-hover:text-gray-900">
                  {platform.name}
                </span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
