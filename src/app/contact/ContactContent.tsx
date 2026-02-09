"use client";

import { Mail, MapPin, Clock, Calendar } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg grid-pattern relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              <span className="gradient-text">Contactez-nous</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
              Une question ? Un projet ? Notre équipe est là pour vous aider.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Two-column Layout */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Contact Form */}
            <AnimatedSection direction="left">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Envoyez-nous un message
                </h2>
                <ContactForm />
              </div>
            </AnimatedSection>

            {/* Right Column - Contact Info */}
            <AnimatedSection direction="right">
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:sebastien@meta-advertising.io"
                      className="mt-1 text-primary-600 transition-colors hover:text-primary-700"
                    >
                      sebastien@meta-advertising.io
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Siège</h3>
                    <p className="mt-1 text-gray-500">France</p>
                  </div>
                </div>

                {/* Demo Card */}
                <div className="rounded-2xl border-2 border-primary-600 bg-primary-50 p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Demander une démo
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Découvrez The Sheep en 30 minutes avec un expert.
                  </p>
                  <div className="mt-4">
                    <Button href="/contact" size="md">
                      Réserver un créneau
                    </Button>
                  </div>
                </div>

                {/* Response time badge */}
                <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-success-50 text-success-500">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Réponse sous 24h
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Notre équipe s&apos;engage à vous répondre rapidement.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 sm:h-80">
              {/* Subtle grid pattern overlay */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(79, 70, 229, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 70, 229, 0.04) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative flex flex-col items-center gap-3 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <MapPin className="h-7 w-7" />
                </div>
                <p className="text-xl font-semibold text-gray-700">France</p>
                <p className="text-sm text-gray-400">
                  Basée en France, au service des entreprises partout dans le
                  pays.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
