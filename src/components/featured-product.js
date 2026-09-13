import { escapeHTML } from '../lib/dom.js';
import { catalog, state } from '../state.js';
import { productContext } from '../data/queries.js';
import { hashForProduct } from '../lib/route.js';
import { familyMark } from '../ui/family-mark.js';
import { eyebrow } from '../ui/eyebrow.js';

/* Bloc « Produit du moment » de l'accueil.
 * Toutes les données viennent de l'état et du catalogue partagé : rien en dur ici. */
export function featuredProduct() {
  const ctx = productContext(catalog, state.featuredProductId);
  if (!ctx || ctx.product.published === false) return '';
  const { product, family, supplier } = ctx;
  return `<section class="featured-section section" aria-labelledby="featured-title">
    <div class="featured-wrap">
      <div class="featured-aside">
        ${eyebrow('PRODUIT DU MOMENT')}
        <span aria-hidden="true">${familyMark(family?.code, 'featured-mark')}</span>
      </div>
      <div class="featured-content">
        <p class="mono featured-family-meta">${escapeHTML(family?.code ?? '')} · ${escapeHTML(family?.name ?? '')}</p>
        <h2 id="featured-title" class="featured-name">${escapeHTML(product.name)}</h2>
        <p class="featured-summary">${escapeHTML(product.summary)}</p>
        <div class="featured-footer">
          <span class="featured-supplier mono">${escapeHTML(supplier?.name ?? '')}</span>
          <a class="text-button featured-link" href="${hashForProduct(product.slug)}">Voir la fiche <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </div>
  </section>`;
}
