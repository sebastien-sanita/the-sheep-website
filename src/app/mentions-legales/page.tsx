import { Header, Footer } from "@/components/layout";

export const metadata = {
  title: "Mentions légales - The Sheep",
  description:
    "Mentions légales du site the-sheep.fr, édité par Meta-Advertising.",
};

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="pb-20 pt-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Page title */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Mentions légales
          </h1>
          <p className="mb-12 text-sm text-gray-400">
            Dernière mise à jour : janvier 2025
          </p>

          {/* Éditeur du site */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Éditeur du site
            </h2>
            <div className="space-y-2 text-gray-600 leading-relaxed">
              <p>
                <span className="font-medium text-gray-800">Site :</span>{" "}
                <a
                  href="https://the-sheep.fr"
                  className="text-primary-600 hover:underline"
                >
                  the-sheep.fr
                </a>
              </p>
              <p>
                <span className="font-medium text-gray-800">Éditeur :</span>{" "}
                Meta-Advertising
              </p>
              <p>
                <span className="font-medium text-gray-800">
                  Adresse e-mail :
                </span>{" "}
                <a
                  href="mailto:sebastien@meta-advertising.io"
                  className="text-primary-600 hover:underline"
                >
                  sebastien@meta-advertising.io
                </a>
              </p>
              <p>
                <span className="font-medium text-gray-800">
                  Directeur de la publication :
                </span>{" "}
                Sébastien Sanita
              </p>
            </div>
          </section>

          {/* Hébergement */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Hébergement
            </h2>
            <div className="space-y-2 text-gray-600 leading-relaxed">
              <p>
                <span className="font-medium text-gray-800">
                  Hébergeur :
                </span>{" "}
                Vercel Inc.
              </p>
              <p>
                <span className="font-medium text-gray-800">Adresse :</span>{" "}
                440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
              </p>
              <p>
                <span className="font-medium text-gray-800">Site :</span>{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  vercel.com
                </a>
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Propriété intellectuelle
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                L&apos;ensemble du contenu du site the-sheep.fr (textes,
                images, graphismes, logo, icônes, sons, logiciels, etc.) est
                la propriété exclusive de Meta-Advertising ou de ses
                partenaires et est protégé par les lois françaises et
                internationales relatives à la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication,
                adaptation de tout ou partie des éléments du site, quel que
                soit le moyen ou le procédé utilisé, est interdite sans
                l&apos;autorisation écrite préalable de Meta-Advertising.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l&apos;un
                quelconque des éléments qu&apos;il contient sera considérée
                comme constitutive d&apos;une contrefaçon et poursuivie
                conformément aux dispositions des articles L.335-2 et suivants
                du Code de la Propriété Intellectuelle.
              </p>
            </div>
          </section>

          {/* Limitation de responsabilité */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Limitation de responsabilité
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Meta-Advertising s&apos;efforce de fournir sur le site
                the-sheep.fr des informations aussi précises que possible.
                Toutefois, Meta-Advertising ne pourra être tenue responsable
                des omissions, des inexactitudes et des carences dans la mise
                à jour, qu&apos;elles soient de son fait ou du fait des tiers
                partenaires qui lui fournissent ces informations.
              </p>
              <p>
                Toutes les informations indiquées sur le site the-sheep.fr
                sont données à titre indicatif et sont susceptibles
                d&apos;évoluer. Par ailleurs, les renseignements figurant sur
                le site ne sont pas exhaustifs. Ils sont donnés sous réserve
                de modifications ayant été apportées depuis leur mise en
                ligne.
              </p>
              <p>
                Meta-Advertising ne saurait être tenue pour responsable de
                tout dommage, direct ou indirect, résultant de l&apos;accès
                au site ou de l&apos;utilisation des informations qui y sont
                fournies, y compris l&apos;inaccessibilité, les pertes de
                données, les détériorations, les destructions ou les virus
                qui pourraient affecter l&apos;équipement informatique de
                l&apos;utilisateur.
              </p>
            </div>
          </section>

          {/* Liens hypertextes */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Liens hypertextes
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Le site the-sheep.fr peut contenir des liens hypertextes vers
                d&apos;autres sites internet. Meta-Advertising n&apos;exerce
                aucun contrôle sur ces sites et décline toute responsabilité
                quant à leur contenu et aux éventuels traitements de données
                personnelles qu&apos;ils opèrent.
              </p>
              <p>
                La mise en place de liens hypertextes vers le site
                the-sheep.fr nécessite une autorisation préalable et écrite
                de Meta-Advertising. Pour toute demande, veuillez nous
                contacter à l&apos;adresse{" "}
                <a
                  href="mailto:sebastien@meta-advertising.io"
                  className="text-primary-600 hover:underline"
                >
                  sebastien@meta-advertising.io
                </a>
                .
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Droit applicable
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Les présentes mentions légales sont régies par le droit
                français. En cas de litige, et à défaut de résolution
                amiable, les tribunaux français seront seuls compétents pour
                en connaître.
              </p>
              <p>
                L&apos;utilisateur est informé qu&apos;il peut en tout état
                de cause recourir à une médiation conventionnelle ou à tout
                autre mode alternatif de règlement des différends, en cas de
                contestation.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
