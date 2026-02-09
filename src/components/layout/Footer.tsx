import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import Logo from "@/components/ui/Logo";

const footerSections = [
  {
    title: "Produit",
    links: [
      { label: "Fonctionnalit\u00e9s", href: "/fonctionnalites" },
      { label: "Tarifs", href: "/tarifs" },
      { label: "Blog", href: "/blog" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "\u00c0 propos", href: "/a-propos" },
      { label: "Contact", href: "/contact" },
      { label: "Carri\u00e8res", href: "/carrieres" },
      { label: "Partenaires", href: "/partenaires" },
    ],
  },
  {
    title: "L\u00e9gal",
    links: [
      { label: "Mentions l\u00e9gales", href: "/mentions-legales" },
      { label: "Politique de confidentialit\u00e9", href: "/politique-de-confidentialite" },
      { label: "CGU/CGV", href: "/conditions-generales" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com",
    icon: Twitter,
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo, tagline, socials */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Pilotez toutes vos pubs depuis un seul endroit.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Columns 2-4: Link sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-400">
              &copy; 2025 Meta-Advertising. Tous droits r&eacute;serv&eacute;s.
            </p>
            <p className="text-sm text-gray-400">
              Fait avec <span className="text-red-500">&hearts;</span> en France
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
