import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "À propos - The Sheep | Notre mission",
  description:
    "Découvrez l'histoire de The Sheep, notre mission et nos valeurs. Une équipe française passionnée par le marketing digital.",
};

export default function AProposPage() {
  return (
    <>
      <Header />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
