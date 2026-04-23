import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { ProductEntry } from "@/lib/products";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: ProductEntry & { groupSlug?: string; groupTitle?: string };
  showContactCta?: boolean;
  compactImage?: boolean;
};

export function ProductCard({
  product,
  showContactCta = true,
  compactImage = false,
}: ProductCardProps) {
  return (
    <article className="group panel flex h-full flex-col overflow-hidden rounded-[1.7rem] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(15,23,42,0.08)]">
      <Link
        aria-label={`Voir la fiche produit ${product.name}`}
        className="relative block border-b border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,246,251,0.95))]"
        href={`/produits/${product.slug}`}
      >
        <div
          className={cn(
            "relative p-5 sm:p-6",
            compactImage ? "aspect-[5/4] sm:aspect-[4/3]" : "aspect-[4/3]",
          )}
        >
          <div
            className={cn(
              "pointer-events-none absolute border border-[var(--color-line)] bg-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-colors duration-300 group-hover:border-[var(--color-line-strong)]",
              compactImage
                ? "inset-3 rounded-[1.15rem] sm:inset-4 sm:rounded-[1.35rem]"
                : "inset-4 rounded-[1.35rem]",
            )}
          />
          <Image
            alt={product.name}
            className={cn(
              "object-contain transition-transform duration-300 group-hover:scale-[1.04]",
              compactImage ? "p-4 sm:p-6" : "p-6 sm:p-7",
            )}
            fill
            sizes={
              compactImage
                ? "(min-width: 1024px) 24rem, (min-width: 640px) 21rem, 84vw"
                : "(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 100vw"
            }
            src={product.imageSrc}
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-subtle)]">
          {product.familyLabel}
        </p>
        <h3 className="mt-3 text-[1.18rem] font-semibold leading-6 tracking-[-0.04em] text-[var(--color-ink)]">
          <Link href={`/produits/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
          {product.summary}
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button href={`/produits/${product.slug}`}>
            Voir la fiche
            <ArrowRight className="h-4 w-4" />
          </Button>
          {showContactCta ? (
            <Button href="/contact" variant="secondary">
              Demander un devis
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
