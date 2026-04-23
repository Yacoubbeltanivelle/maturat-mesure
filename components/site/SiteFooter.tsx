import {
  COMPANY,
  SOLUTION_FAMILIES,
  TRUST_MARKERS,
} from "@/lib/data";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-panel-soft)]">
      <div className="container-site py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-subtle)]">
              Maturat Mesure
            </p>
            <h2 className="mt-4 max-w-sm text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
              Un partenaire technique pour la mesure, l’air comprimé et le signal.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--color-muted)]">
              {COMPANY.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {TRUST_MARKERS.slice(0, 3).map((item) => (
                <span className="tag-pill" key={item.title}>
                  {item.title}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-[var(--color-ink)]">Solutions</p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
              {SOLUTION_FAMILIES.map((family) => (
                <li key={family.slug}>
                  <Link href={`/solutions/${family.slug}`}>{family.name}</Link>
                </li>
              ))}
              <li>
                <Link className="text-[var(--color-blue)]" href="/expel">
                  Page dédiée EXPEL
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-[var(--color-ink)]">Navigation</p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href="/produits">Produits</Link>
              </li>
              <li>
                <Link href="/solutions">Solutions</Link>
              </li>
              <li>
                <Link href="/about">Expertise</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/mentions-legales">Mentions légales</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-[var(--color-ink)]">Contact</p>
            <ul className="mt-4 space-y-4 text-sm text-[var(--color-muted)]">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--color-signal)]" />
                <span>
                  {COMPANY.addressLine2}
                  <br />
                  {COMPANY.addressLine1}
                  <br />
                  {COMPANY.postalCode} {COMPANY.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[var(--color-signal)]" />
                <a href={COMPANY.phoneHref}>{COMPANY.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[var(--color-signal)]" />
                <a href={`mailto:${COMPANY.primaryEmail}`}>{COMPANY.primaryEmail}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-subtle)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Maturat Mesure. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href={COMPANY.linkedin} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
            <a href={COMPANY.facebook} rel="noreferrer" target="_blank">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
