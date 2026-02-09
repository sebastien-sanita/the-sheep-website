"use client";

import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import TestimonialCard from "@/components/ui/TestimonialCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    quote:
      "The Sheep a r\u00e9volutionn\u00e9 notre gestion de campagnes. On gagne 10h par semaine sur le reporting.",
    author: "Marie Dubois",
    role: "Directrice",
    company: "Agence Digitale Nantes",
  },
  {
    quote:
      "Enfin un outil qui connecte vraiment toutes nos plateformes. Le dashboard est un game-changer.",
    author: "Thomas Martin",
    role: "CEO",
    company: "GrowthLab Paris",
  },
  {
    quote:
      "Le CRM int\u00e9gr\u00e9 nous permet de suivre nos leads du clic \u00e0 la conversion. Indispensable.",
    author: "Sophie Laurent",
    role: "Media Buyer",
    company: "AdFactory Lyon",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            title="Ils nous font confiance"
            subtitle="200+ agences utilisent The Sheep au quotidien"
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.author} delay={index * 0.1}>
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
