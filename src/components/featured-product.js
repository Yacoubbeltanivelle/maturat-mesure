import { escapeHTML } from '../lib/dom.js';
import { catalog, state } from '../state.js';
import { productContext } from '../data/queries.js';
import { hashForProduct } from '../lib/route.js';
import { familyMark } from '../ui/family-mark.js';
import { sectionLabel } from '../ui/section-label.js';
import { HOME_FAMILIES } from '../data/families.js';
import { IMAGE_ASSETS } from '../data/images.js';
import { img } from '../ui/media.js';

/* Bloc « Produit du moment » de l'accueil.
 * Toutes les données viennent de l'état et du catalogue partagé : rien en dur ici. */
export function featuredProduct() {
  const ctx = productContext(catalog, state.featuredProductId);
  if (!ctx || ctx.product.published === false) return '';
  const { product, family, supplier } = ctx;
  const visual = HOME_FAMILIES.find(f => f.code === family?.code)?.img ?? family?.img;
  return `<section class="featured-section section featured-tableau" aria-labelledby="featured-title">
    ${sectionLabel('Produit du moment', 'product')}
    <div class="featured-wrap">
      <figure class="featured-stage featured-stage-${escapeHTML(family?.code ?? '')}">
        <span class="mono featured-reference">${escapeHTML(product.reference)}</span>
        <div class="featured-instrument">${visual ? img(visual, family.name, '', true) : `<span aria-hidden="true">${familyMark(family?.code, 'featured-mark')}</span>`}</div>
        <figcaption>${visual ? `Visuel de famille, distinct de la fiche fictive.<br>${escapeHTML(IMAGE_ASSETS[visual].credit)}` : 'Repère de famille — illustration'}</figcaption>
      </figure>
      <div class="featured-content">
        <h2 id="featured-title" class="featured-name">${escapeHTML(product.name)}</h2>
        <p class="featured-summary">${escapeHTML(product.summary)}</p>
        <dl class="featured-specs">${product.specs.slice(0, 2).map(({label, value}) => `<div><dt>${escapeHTML(label)}</dt><dd>${escapeHTML(value)}</dd></div>`).join('')}</dl>
        <p class="featured-demo">Fiche, fournisseur et caractéristiques fictifs pour la démonstration.</p>
        <div class="featured-footer">
          <span class="featured-supplier mono">${escapeHTML(supplier?.name ?? '')}</span>
          <a class="text-button featured-link" href="${hashForProduct(product.slug)}">Voir la fiche <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </div>
  </section>`;
}
