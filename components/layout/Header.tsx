"use client";

import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { label: "Solutions", href: "/solutions" },
  { label: "EXPEL", href: "/expel" },
  { label: "À propos", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="Maturat Mesure — Accueil">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect width="36" height="36" rx="8" fill="#1B3A6B" />
        <text x="18" y="23" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="800" fill="white">M</text>
        <path d="M5 28 A15 15 0 0 1 31 28" stroke="#F55D00" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
      <span className="font-bold text-base tracking-tight text-ink leading-tight">
        Maturat<br /><span className="text-xs font-semibold text-muted tracking-widest uppercase">Mesure</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container-site">
          <nav className="flex items-center justify-between h-16 lg:h-18" aria-label="Navigation principale">
            <Logo />

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-orange"
                      : scrolled
                      ? "text-ink hover:text-orange"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-orange rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Button href="/contact" size="sm" className="hidden lg:inline-flex">
                Demande de devis
              </Button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-ink"
                aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-1 flex-1">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between py-4 text-xl font-semibold border-b border-border",
                      pathname === item.href ? "text-orange" : "text-ink"
                    )}
                  >
                    {item.label}
                    <span className="text-muted">→</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="pb-8 pt-6 flex flex-col gap-3">
              <Button href="/contact" size="lg" className="w-full">Demande de devis</Button>
              <a href={`tel:${COMPANY.phoneHref.replace("tel:", "")}`} className="text-center text-sm text-muted font-medium py-2">
                {COMPANY.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
