import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Maturat Mesure — demande de devis, renseignements techniques. 04 88 40 68 22 — administratif@maturat.fr — Martigues.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-surface border-b border-border pt-28 pb-16">
        <div className="container-site">
          <nav className="flex items-center gap-2 text-xs text-muted mb-6">
            <Link href="/" className="hover:text-orange transition-colors">Accueil</Link>
            <span>/</span>
            <span>Contact</span>
          </nav>
          <p className="eyebrow mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange inline-block" />
            Parlons de votre projet
          </p>
          <h1 className="text-display text-ink max-w-xl mb-4">
            Un besoin de mesure ?<br />
            <span className="text-orange">Nous sommes là.</span>
          </h1>
          <p className="text-muted text-base max-w-md leading-relaxed">
            Notre équipe technique étudie votre cahier des charges et vous répond sous 48h ouvrées.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Form — takes 3 cols */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-border rounded-2xl p-8">
                <h2 className="font-bold text-xl text-ink mb-2">Envoyer un message</h2>
                <p className="text-sm text-muted mb-8">Réponse garantie sous 48h ouvrées.</p>
                <ContactForm />
              </div>
            </div>

            {/* Info — takes 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h3 className="font-bold text-lg text-ink">Nos coordonnées</h3>

              {[
                { icon: MapPin, title: "Adresse", content: `${COMPANY.address}\n${COMPANY.city}`, href: undefined },
                { icon: Phone, title: "Téléphone", content: COMPANY.phone, href: COMPANY.phoneHref },
                { icon: Mail, title: "Email", content: COMPANY.email, href: `mailto:${COMPANY.email}` },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 items-start p-5 bg-surface rounded-xl border border-border hover:border-orange/30 transition-colors"
                >
                  <div className="w-9 h-9 bg-orange/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-ink mb-0.5">{item.title}</div>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-muted hover:text-orange transition-colors whitespace-pre-line">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-sm text-muted whitespace-pre-line">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Hours */}
              <div className="p-5 bg-blue-pale rounded-xl border border-blue/10">
                <div className="flex items-center gap-2 font-bold text-blue mb-3">
                  <Clock size={15} />
                  Horaires d&apos;ouverture
                </div>
                <p className="text-sm text-ink/70 leading-relaxed">
                  Lundi — Vendredi<br />
                  <strong className="text-ink">8h30 – 12h00 · 13h30 – 17h30</strong>
                </p>
                <p className="text-xs text-muted mt-2">Réponse email sous 48h ouvrées.</p>
              </div>

              {/* LinkedIn */}
              <a
                href={COMPANY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-blue-mid border border-blue/20 rounded-xl hover:bg-blue-pale transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                Maturat Mesure sur LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
