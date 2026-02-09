"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const subjectOptions = [
  { value: "", label: "Sélectionnez un sujet" },
  { value: "general", label: "Question générale" },
  { value: "demo", label: "Demande de démo" },
  { value: "support", label: "Support technique" },
  { value: "partnership", label: "Partenariat" },
  { value: "other", label: "Autre" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    entreprise: "",
    sujet: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom est requis.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Veuillez entrer un email valide.";
    }

    if (!formData.sujet) {
      newErrors.sujet = "Veuillez sélectionner un sujet.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20";

  const errorClasses = "mt-1 text-sm text-danger-500";

  return (
    <AnimatePresence mode="wait">
      {isSubmitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center rounded-2xl border border-success-500/20 bg-success-50 p-8 text-center sm:p-12"
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success-500/10">
            <CheckCircle className="h-8 w-8 text-success-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Message envoyé avec succès !
          </h3>
          <p className="mt-2 text-gray-600">
            Nous vous répondrons sous 24h.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-5"
          noValidate
        >
          {/* Nom */}
          <div>
            <label
              htmlFor="nom"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Nom <span className="text-danger-500">*</span>
            </label>
            <input
              type="text"
              id="nom"
              value={formData.nom}
              onChange={(e) => handleChange("nom", e.target.value)}
              placeholder="Votre nom"
              className={`${inputClasses} ${errors.nom ? "border-danger-500 focus:border-danger-500 focus:ring-danger-500/20" : ""}`}
            />
            {errors.nom && <p className={errorClasses}>{errors.nom}</p>}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Email <span className="text-danger-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="votre@email.com"
              className={`${inputClasses} ${errors.email ? "border-danger-500 focus:border-danger-500 focus:ring-danger-500/20" : ""}`}
            />
            {errors.email && <p className={errorClasses}>{errors.email}</p>}
          </div>

          {/* Entreprise */}
          <div>
            <label
              htmlFor="entreprise"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Entreprise
            </label>
            <input
              type="text"
              id="entreprise"
              value={formData.entreprise}
              onChange={(e) => handleChange("entreprise", e.target.value)}
              placeholder="Nom de votre entreprise"
              className={inputClasses}
            />
          </div>

          {/* Sujet */}
          <div>
            <label
              htmlFor="sujet"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Sujet <span className="text-danger-500">*</span>
            </label>
            <select
              id="sujet"
              value={formData.sujet}
              onChange={(e) => handleChange("sujet", e.target.value)}
              className={`${inputClasses} ${errors.sujet ? "border-danger-500 focus:border-danger-500 focus:ring-danger-500/20" : ""} ${!formData.sujet ? "text-gray-400" : ""}`}
            >
              {subjectOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.sujet && <p className={errorClasses}>{errors.sujet}</p>}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Message <span className="text-danger-500">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Comment pouvons-nous vous aider ?"
              className={`${inputClasses} resize-none ${errors.message ? "border-danger-500 focus:border-danger-500 focus:ring-danger-500/20" : ""}`}
            />
            {errors.message && (
              <p className={errorClasses}>{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-700"
          >
            <Send className="h-4 w-4" />
            Envoyer le message
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
