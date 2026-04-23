import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="bg-surface border-b border-border pt-28 pb-12">
        <div className="container-site">
          <nav className="flex items-center gap-2 text-xs text-muted mb-6">
            <Link href="/" className="hover:text-orange transition-colors">Accueil</Link>
            <span>/</span>
            <span>Mentions légales</span>
          </nav>
          <h1 className="text-display text-ink">Mentions légales</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container-site max-w-3xl">
          <div className="prose prose-slate max-w-none space-y-10">

            <div>
              <h2 className="text-xl font-bold text-ink mb-4">Éditeur du site</h2>
              <div className="text-muted leading-relaxed space-y-1">
                <p><strong className="text-ink">Maturat Mesure</strong></p>
                <p>SARL — SIRET : {COMPANY.siret}</p>
                <p>Code APE : {COMPANY.ape}</p>
                <p>{COMPANY.address}</p>
                <p>{COMPANY.city}</p>
                <p>Téléphone : <a href={COMPANY.phoneHref} className="text-orange hover:underline">{COMPANY.phone}</a></p>
                <p>Email : <a href={`mailto:${COMPANY.email}`} className="text-orange hover:underline">{COMPANY.email}</a></p>
              </div>
            </div>

            <div id="confidentialite">
              <h2 className="text-xl font-bold text-ink mb-4">Politique de confidentialité</h2>
              <p className="text-muted leading-relaxed">
                Les données collectées via le formulaire de contact (nom, prénom, email, téléphone, message) sont utilisées exclusivement pour traiter votre demande et vous répondre. Elles ne sont ni vendues, ni transmises à des tiers.
              </p>
              <p className="text-muted leading-relaxed mt-3">
                Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679), vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-orange hover:underline">{COMPANY.email}</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink mb-4">Hébergement</h2>
              <p className="text-muted leading-relaxed">
                Ce site est hébergé par GitHub Pages (GitHub, Inc. — 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink mb-4">Propriété intellectuelle</h2>
              <p className="text-muted leading-relaxed">
                L&apos;ensemble du contenu de ce site (textes, illustrations, design) est la propriété de Maturat Mesure SARL. Toute reproduction sans autorisation préalable est interdite.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
