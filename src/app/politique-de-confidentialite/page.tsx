import { Header, Footer } from "@/components/layout";

export const metadata = {
  title: "Politique de confidentialité - The Sheep",
  description:
    "Politique de confidentialité et protection des données personnelles de The Sheep, conforme RGPD.",
};

export default function PolitiqueDeConfidentialite() {
  return (
    <>
      <Header />
      <main className="pb-20 pt-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Page title */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Politique de confidentialité
          </h1>
          <p className="mb-12 text-sm text-gray-400">
            Dernière mise à jour : janvier 2025
          </p>

          {/* 1. Introduction */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              1. Introduction
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                La société Meta-Advertising, en tant que responsable de
                traitement, accorde une grande importance à la protection de
                la vie privée et des données personnelles de ses utilisateurs.
              </p>
              <p>
                La présente politique de confidentialité décrit la manière
                dont nous collectons, utilisons, stockons et protégeons vos
                données personnelles dans le cadre de l&apos;utilisation de
                la plateforme The Sheep, accessible à l&apos;adresse
                the-sheep.fr.
              </p>
              <p>
                Nous nous engageons à respecter le Règlement Général sur la
                Protection des Données (RGPD - Règlement UE 2016/679) ainsi
                que la loi Informatique et Libertés du 6 janvier 1978
                modifiée.
              </p>
            </div>
          </section>

          {/* 2. Données collectées */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              2. Données collectées
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Dans le cadre de l&apos;utilisation de la plateforme The
                Sheep, nous sommes susceptibles de collecter les catégories
                de données suivantes :
              </p>

              <h3 className="mt-6 text-lg font-medium text-gray-800">
                Données d&apos;identification
              </h3>
              <p>
                Nom, prénom, adresse e-mail, nom de l&apos;entreprise,
                numéro de téléphone, informations de facturation.
              </p>

              <h3 className="mt-6 text-lg font-medium text-gray-800">
                Données de connexion
              </h3>
              <p>
                Adresse IP, type de navigateur, système d&apos;exploitation,
                date et heure de connexion, pages consultées, durée de
                session.
              </p>

              <h3 className="mt-6 text-lg font-medium text-gray-800">
                Données d&apos;utilisation
              </h3>
              <p>
                Actions effectuées sur la plateforme, préférences de
                configuration, fonctionnalités utilisées, rapports générés.
              </p>

              <h3 className="mt-6 text-lg font-medium text-gray-800">
                Données publicitaires
              </h3>
              <p>
                Données récupérées via les API Meta (Facebook/Instagram) et
                Google Ads : métriques de campagnes (impressions, clics,
                conversions, dépenses), informations sur les audiences,
                données de leads et formulaires.
              </p>
            </div>
          </section>

          {/* 3. Finalités du traitement */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              3. Finalités du traitement
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Vos données personnelles sont traitées pour les finalités
                suivantes :
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <span className="font-medium text-gray-800">
                    Fourniture du service :
                  </span>{" "}
                  création et gestion de votre compte, accès aux
                  fonctionnalités de la plateforme, synchronisation avec vos
                  comptes publicitaires Meta et Google.
                </li>
                <li>
                  <span className="font-medium text-gray-800">
                    Amélioration du service :
                  </span>{" "}
                  analyse de l&apos;utilisation de la plateforme pour
                  améliorer les fonctionnalités, corriger les erreurs et
                  optimiser l&apos;expérience utilisateur.
                </li>
                <li>
                  <span className="font-medium text-gray-800">
                    Communication :
                  </span>{" "}
                  envoi de notifications liées au service, mises à jour,
                  newsletters (avec votre consentement), informations
                  relatives à votre abonnement.
                </li>
                <li>
                  <span className="font-medium text-gray-800">
                    Support client :
                  </span>{" "}
                  traitement de vos demandes d&apos;assistance, résolution
                  des problèmes techniques.
                </li>
              </ul>
            </div>
          </section>

          {/* 4. Base légale */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              4. Base légale des traitements
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Les traitements de données personnelles mis en oeuvre par
                Meta-Advertising reposent sur les bases légales suivantes :
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <span className="font-medium text-gray-800">
                    Exécution du contrat :
                  </span>{" "}
                  les traitements nécessaires à la fourniture du service The
                  Sheep et à la gestion de votre abonnement.
                </li>
                <li>
                  <span className="font-medium text-gray-800">
                    Consentement :
                  </span>{" "}
                  l&apos;envoi de communications commerciales, le dépôt de
                  cookies non essentiels, la connexion à vos comptes
                  publicitaires via OAuth.
                </li>
                <li>
                  <span className="font-medium text-gray-800">
                    Intérêt légitime :
                  </span>{" "}
                  l&apos;amélioration de nos services, la prévention de la
                  fraude, la sécurité de la plateforme.
                </li>
              </ul>
            </div>
          </section>

          {/* 5. Utilisation des API Meta et Google */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              5. Utilisation des API Meta et Google
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The Sheep se connecte aux API de Meta (Facebook, Instagram)
                et de Google (Google Ads) pour vous permettre de gérer et
                d&apos;analyser vos campagnes publicitaires depuis une
                interface unifiée.
              </p>

              <h3 className="mt-6 text-lg font-medium text-gray-800">
                Authentification OAuth
              </h3>
              <p>
                La connexion à vos comptes publicitaires s&apos;effectue
                exclusivement via le protocole OAuth 2.0. Nous ne stockons
                jamais vos identifiants (nom d&apos;utilisateur et mot de
                passe) Meta ou Google. Seuls les jetons d&apos;accès
                (tokens) sont conservés de manière sécurisée et chiffrée
                pour permettre la synchronisation des données.
              </p>

              <h3 className="mt-6 text-lg font-medium text-gray-800">
                Données récupérées
              </h3>
              <p>
                Les données récupérées via ces API comprennent : les
                métriques de performance des campagnes (impressions, clics,
                taux de conversion, coûts), les informations sur les
                audiences ciblées, les données de leads issues des
                formulaires publicitaires, et les créatifs publicitaires
                associés.
              </p>

              <h3 className="mt-6 text-lg font-medium text-gray-800">
                Conformité aux politiques des plateformes
              </h3>
              <p>
                L&apos;utilisation des données issues des API Meta et Google
                est strictement conforme aux politiques de développeurs de
                chaque plateforme, notamment les{" "}
                <em>Meta Platform Terms</em> et les{" "}
                <em>Google API Services User Data Policy</em>. Nous ne
                revendons pas les données récupérées et ne les utilisons
                qu&apos;aux fins de la fourniture du service The Sheep.
              </p>
            </div>
          </section>

          {/* 6. Durée de conservation */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              6. Durée de conservation
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Vos données personnelles sont conservées pendant les durées
                suivantes :
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <span className="font-medium text-gray-800">
                    Données de compte :
                  </span>{" "}
                  pendant toute la durée du contrat, puis 3 ans après la fin
                  de la relation contractuelle à des fins de prospection
                  commerciale et conformément aux obligations légales.
                </li>
                <li>
                  <span className="font-medium text-gray-800">
                    Données publicitaires :
                  </span>{" "}
                  24 mois à compter de leur collecte. Au-delà, les données
                  sont anonymisées ou supprimées.
                </li>
                <li>
                  <span className="font-medium text-gray-800">
                    Logs de connexion :
                  </span>{" "}
                  12 mois conformément aux obligations légales en matière de
                  conservation des données de connexion.
                </li>
              </ul>
            </div>
          </section>

          {/* 7. Partage des données */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              7. Partage des données
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Vos données personnelles ne sont jamais vendues à des tiers.
                Elles peuvent être partagées dans les cas suivants :
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <span className="font-medium text-gray-800">
                    Sous-traitants techniques :
                  </span>{" "}
                  hébergement (Vercel), outils d&apos;analyse (dans le
                  respect du RGPD), prestataires de paiement. Ces
                  sous-traitants sont contractuellement tenus de protéger vos
                  données et de ne les utiliser que conformément à nos
                  instructions.
                </li>
                <li>
                  <span className="font-medium text-gray-800">
                    Obligations légales :
                  </span>{" "}
                  en cas de demande émanant d&apos;une autorité judiciaire ou
                  administrative compétente.
                </li>
              </ul>
              <p>
                Meta-Advertising ne vend, ne loue et ne transmet en aucun cas
                vos données personnelles à des fins commerciales à des tiers.
              </p>
            </div>
          </section>

          {/* 8. Cookies et trackers */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              8. Cookies et trackers
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Le site the-sheep.fr utilise des cookies pour assurer son bon
                fonctionnement et améliorer votre expérience :
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <span className="font-medium text-gray-800">
                    Cookies essentiels :
                  </span>{" "}
                  nécessaires au fonctionnement du site (authentification,
                  session, sécurité). Ces cookies ne nécessitent pas votre
                  consentement.
                </li>
                <li>
                  <span className="font-medium text-gray-800">
                    Cookies analytiques :
                  </span>{" "}
                  utilisés pour mesurer l&apos;audience et analyser la
                  fréquentation du site. Ces cookies sont soumis à votre
                  consentement préalable (opt-in).
                </li>
              </ul>
              <p>
                Nous n&apos;utilisons pas de cookies publicitaires ni de
                trackers de ciblage. Vous pouvez à tout moment modifier vos
                préférences en matière de cookies via le bandeau de
                consentement ou les paramètres de votre navigateur.
              </p>
            </div>
          </section>

          {/* 9. Droits des utilisateurs */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              9. Droits des utilisateurs
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Conformément au RGPD, vous disposez des droits suivants
                concernant vos données personnelles :
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <span className="font-medium text-gray-800">
                    Droit d&apos;accès :
                  </span>{" "}
                  obtenir la confirmation que des données vous concernant
                  sont traitées et en obtenir une copie.
                </li>
                <li>
                  <span className="font-medium text-gray-800">
                    Droit de rectification :
                  </span>{" "}
                  demander la correction de données inexactes ou incomplètes.
                </li>
                <li>
                  <span className="font-medium text-gray-800">
                    Droit de suppression :
                  </span>{" "}
                  demander l&apos;effacement de vos données dans les
                  conditions prévues par le RGPD.
                </li>
                <li>
                  <span className="font-medium text-gray-800">
                    Droit à la portabilité :
                  </span>{" "}
                  recevoir vos données dans un format structuré et
                  couramment utilisé.
                </li>
                <li>
                  <span className="font-medium text-gray-800">
                    Droit d&apos;opposition :
                  </span>{" "}
                  vous opposer au traitement de vos données pour des motifs
                  légitimes.
                </li>
                <li>
                  <span className="font-medium text-gray-800">
                    Droit à la limitation :
                  </span>{" "}
                  demander la limitation du traitement dans certains cas
                  prévus par le RGPD.
                </li>
              </ul>
              <p>
                Pour exercer vos droits, vous pouvez nous contacter par
                e-mail à l&apos;adresse :{" "}
                <a
                  href="mailto:sebastien@meta-advertising.io"
                  className="text-primary-600 hover:underline"
                >
                  sebastien@meta-advertising.io
                </a>
                . Nous nous engageons à répondre à votre demande dans un
                délai maximum de 30 jours.
              </p>
              <p>
                Vous disposez également du droit d&apos;introduire une
                réclamation auprès de la CNIL (Commission Nationale de
                l&apos;Informatique et des Libertés) :{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  www.cnil.fr
                </a>
                .
              </p>
            </div>
          </section>

          {/* 10. Sécurité */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              10. Sécurité
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Meta-Advertising met en oeuvre des mesures techniques et
                organisationnelles appropriées pour garantir la sécurité et
                la confidentialité de vos données personnelles :
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  Chiffrement des données sensibles au repos et en transit.
                </li>
                <li>
                  Communication sécurisée via le protocole HTTPS sur
                  l&apos;ensemble de la plateforme.
                </li>
                <li>
                  Accès restreint aux données personnelles, limité aux seuls
                  collaborateurs habilités.
                </li>
                <li>
                  Authentification renforcée et gestion des droits
                  d&apos;accès.
                </li>
                <li>
                  Sauvegardes régulières et procédures de récupération en cas
                  d&apos;incident.
                </li>
              </ul>
            </div>
          </section>

          {/* 11. Transferts internationaux */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              11. Transferts internationaux
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Dans le cadre de l&apos;hébergement de la plateforme The
                Sheep, certaines données peuvent être transférées vers des
                serveurs situés aux États-Unis (Vercel Inc.).
              </p>
              <p>
                Ces transferts sont encadrés par des clauses contractuelles
                types (CCT) adoptées par la Commission européenne,
                garantissant un niveau de protection adéquat de vos données
                personnelles conformément au RGPD.
              </p>
            </div>
          </section>

          {/* 12. Contact DPO */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              12. Contact du délégué à la protection des données
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Pour toute question relative à la protection de vos données
                personnelles ou pour exercer vos droits, vous pouvez
                contacter notre référent données personnelles :
              </p>
              <p>
                <span className="font-medium text-gray-800">E-mail :</span>{" "}
                <a
                  href="mailto:sebastien@meta-advertising.io"
                  className="text-primary-600 hover:underline"
                >
                  sebastien@meta-advertising.io
                </a>
              </p>
            </div>
          </section>

          {/* 13. Modification de la politique */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              13. Modification de la politique
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Meta-Advertising se réserve le droit de modifier la présente
                politique de confidentialité à tout moment afin de
                l&apos;adapter aux évolutions légales, réglementaires ou
                techniques.
              </p>
              <p>
                En cas de modification substantielle, nous vous en
                informerons par e-mail ou via une notification sur la
                plateforme. La date de dernière mise à jour est indiquée en
                haut de cette page.
              </p>
              <p>
                Nous vous invitons à consulter régulièrement cette page pour
                prendre connaissance des éventuelles modifications.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
