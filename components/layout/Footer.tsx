import Link from "next/link";
import { COMPANY, SOLUTIONS } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="8" fill="#1B3A6B" />
                <text x="18" y="23" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="800" fill="white">M</text>
                <path d="M5 28 A15 15 0 0 1 31 28" stroke="#F55D00" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
              <span className="font-bold text-base tracking-tight leading-tight">
                Maturat<br /><span className="text-xs font-semibold text-white/40 tracking-widest uppercase">Mesure</span>
              </span>
            </Link>
            <p className="text-sm text-white/45 leading-relaxed max-w-xs mb-6">
              Spécialiste en mesure industrielle et traitement du signal. Solutions de contrôle et traitement d'air comprimé.
            </p>
            <a
              href={COMPANY.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/8 hover:bg-orange transition-colors"
              aria-label="LinkedIn Maturat Mesure"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-white/30 mb-5">Solutions</p>
            <ul className="flex flex-col gap-3">
              {SOLUTIONS.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link href={`/solutions#${s.id}`} className="text-sm text-white/50 hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/expel" className="text-sm text-orange hover:text-orange-light transition-colors font-medium">
                  EXPEL — Produit phare →
                </Link>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-white/30 mb-5">Entreprise</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "À propos", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Mentions légales", href: "/mentions-legales" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-white/30 mb-5">Contact</p>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <MapPin size={14} className="text-orange mt-0.5 shrink-0" />
                <span className="text-sm text-white/50 leading-relaxed">
                  ZI Colline Sud<br />1 rue Barthélémy Thimonnier<br />13500 Martigues
                </span>
              </li>
              <li>
                <a href={COMPANY.phoneHref} className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors">
                  <Phone size={14} className="text-orange shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors">
                  <Mail size={14} className="text-orange shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8">
          <p className="text-xs text-white/25">
            © {year} Maturat Mesure SARL. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-xs text-white/25 hover:text-white/60 transition-colors">
              Mentions légales
            </Link>
            <Link href="/mentions-legales#confidentialite" className="text-xs text-white/25 hover:text-white/60 transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
