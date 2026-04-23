"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/produits", label: "Produits" },
  { href: "/solutions", label: "Solutions" },
  { href: "/expel", label: "EXPEL" },
  { href: "/about", label: "Expertise" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function Brand() {
  return (
    <Link className="flex items-center gap-3" href="/">
      <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-ink)] text-white shadow-[0_16px_34px_rgba(15,23,42,0.16)]">
        <span className="text-sm font-semibold tracking-[0.24em]">MM</span>
        <span className="absolute inset-x-2 bottom-2 h-px bg-[linear-gradient(90deg,transparent,var(--color-signal),transparent)]" />
      </div>
      <div>
        <p className="text-sm font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
          Maturat Mesure
        </p>
        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-subtle)]">
          Mesure industrielle
        </p>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-200",
          scrolled
            ? "border-[var(--color-line)] bg-white/88 backdrop-blur-xl"
            : "border-transparent bg-white/72 backdrop-blur-md",
        )}
      >
        <div className="container-site flex min-h-20 items-center justify-between gap-8">
          <Brand />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  className={cn(
                    "rounded-full px-1 py-2 text-sm transition-colors",
                    active
                      ? "text-[var(--color-ink)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-ink)]",
                  )}
                  href={item.href}
                  key={item.href}
                >
                  <span className="relative">
                    {item.label}
                    {active ? (
                      <span className="absolute inset-x-0 -bottom-2 h-px bg-[var(--color-signal)]" />
                    ) : null}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact">Demander un devis</Button>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-ink)] lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-40 bg-[rgba(6,11,20,0.45)] backdrop-blur-sm lg:hidden">
          <div className="absolute inset-x-4 top-24 rounded-[2rem] border border-[var(--color-line-strong)] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.16)]">
            <nav className="space-y-2" id="mobile-navigation">
              {navigation.map((item, index) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    className={cn(
                      "flex items-center justify-between rounded-[1.25rem] px-4 py-4 text-base transition-colors",
                      active
                        ? "bg-[var(--color-panel-soft)] text-[var(--color-ink)]"
                        : "text-[var(--color-muted)] hover:bg-[var(--color-panel-soft)] hover:text-[var(--color-ink)]",
                    )}
                    href={item.href}
                    key={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                    <span className="text-[var(--color-subtle)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 border-t border-[var(--color-line)] pt-6">
              <Button className="w-full" href="/contact" size="lg">
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
