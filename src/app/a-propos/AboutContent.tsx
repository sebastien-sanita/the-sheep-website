"use client";

import { Target, Lightbulb, Eye, Zap } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FeatureCard from "@/components/ui/FeatureCard";
import Button from "@/components/ui/Button";

const values = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Performance",
    description:
      "Chaque fonctionnalité est conçue pour améliorer vos résultats. Nous mesurons notre succès au ROAS de nos clients.",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovation",
    description:
      "Nous intégrons l'IA et les dernières technologies pour vous donner un avantage compétitif.",
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Transparence",
    description:
      "Pas de frais cachés, pas de boîte noire. Vous savez exactement ce que vous payez et comment vos données sont utilisées.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Simplicité",
    description:
      "La puissance n'a pas besoin d'être complexe. Notre interface est intuitive, même pour les débutants.",
  },
];

const stats = [
  { value: "200+", label: "agences clientes" },
  { value: "50M€+", label: "de budget publicitaire géré" },
  { value: "3", label: "plateformes connectées" },
  { value: "99.9%", label: "de disponibilité" },
];

const team = [
  {
    initials: "S.S.",
    name: "Sébastien",
    role: "CEO & Fondateur",
    color: "bg-primary-600",
  },
  {
    initials: "A.M.",
    name: "Alexandre",
    role: "CTO",
    color: "bg-primary-500",
  },
  {
    initials: "L.B.",
    name: "Laura",
    role: "Head of Product",
    color: "bg-primary-700",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg grid-pattern relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              <span className="gradient-text">Notre mission</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
              Simplifier la gestion publicitaire pour chaque entreprise en
              France.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                L&apos;histoire de <span className="gradient-text">The Sheep</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Nés de la frustration de jongler entre 5 plateformes
                publicitaires différentes, nous avons créé The Sheep pour
                centraliser tout au même endroit. Fondée en 2024 par des experts
                en marketing digital et en technologie, notre mission est
                simple : donner aux agences et aux entreprises les outils pour
                piloter leurs campagnes efficacement, sans complexité inutile.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Basée en France, The Sheep est développée par Meta-Advertising,
                une société spécialisée dans les technologies publicitaires.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nos <span className="gradient-text">valeurs</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Les principes qui guident chacune de nos décisions.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <FeatureCard
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Sheep en <span className="gradient-text">chiffres</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                delay={index * 0.1}
                className="text-center"
              >
                <p className="text-4xl font-bold tracking-tight text-primary-600 sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-500 sm:text-base">
                  {stat.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              L&apos;équipe derrière{" "}
              <span className="gradient-text">The Sheep</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Une équipe passionnée de marketing digital, de data et de
              technologie, basée en France.
            </p>
          </AnimatedSection>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
            {team.map((member, index) => (
              <AnimatedSection
                key={member.name}
                delay={index * 0.1}
                className="text-center"
              >
                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-xl font-bold text-white ${member.color}`}
                >
                  {member.initials}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{member.role}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg grid-pattern py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Envie de rejoindre l&apos;aventure ?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Découvrez comment The Sheep peut transformer votre gestion
              publicitaire.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Nous contacter
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
