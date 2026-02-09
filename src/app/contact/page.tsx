import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact - The Sheep | Contactez notre équipe",
  description:
    "Contactez l'équipe The Sheep. Demandez une démo, posez vos questions ou découvrez comment nous pouvons vous aider.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
