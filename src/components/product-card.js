import { escapeHTML } from '../lib/dom.js';
import { familyById, supplierById } from '../data/queries.js';
import { hashForProduct } from '../lib/route.js';
import { familyMark } from '../ui/family-mark.js';
import { HOME_FAMILIES } from '../data/families.js';
import { img, imageCredit } from '../ui/media.js';

/* Carte d'une fiche. La carte entière est un lien : rien d'interactif n'est imbriqué. */
export function productCard(catalog, product, editorial = false) {
  const family = familyById(catalog, product.familyId);
  const supplier = supplierById(catalog, product.supplierId);
  if (editorial) {
    const visual = HOME_FAMILIES.find((f) => f.code === family?.code)?.img;
    return `<li><a class="product-card product-card-editorial" href="${hashForProduct(product.slug)}">
      <span class="mono product-card-meta">${escapeHTML(family?.code ?? '')} / ${escapeHTML(family?.name ?? '')}</span>
      <figure class="product-card-visual">${visual ? img(visual, family.name, '', true) : familyMark(family?.code)}
      <figcaption>${visual ? `${imageCredit(visual)}<br>` : ''}Illustration de famille · Fiche fictive</figcaption></figure>
      <div class="product-card-body"><h3>${escapeHTML(product.name)}</h3>
      <span class="product-card-supplier">${escapeHTML(supplier?.name ?? '')}</span>
      <p>${escapeHTML(product.summary)}</p>
      <span class="product-card-foot">Voir la fiche<span class="product-card-arrow" aria-hidden="true">↗</span></span></div>
    </a></li>`;
  }
  return `<li><a class="product-card" href="${hashForProduct(product.slug)}">
    <span class="product-card-mark" aria-hidden="true">${familyMark(family?.code)}</span>
    <div class="product-card-body">
      <span class="mono product-card-meta">${escapeHTML(family?.code ?? '')} / ${escapeHTML(family?.name ?? '')}</span>
      <h3>${escapeHTML(product.name)}</h3>
      <p>${escapeHTML(product.summary)}</p>
      <span class="product-card-foot"><span class="mono">${escapeHTML(supplier?.name ?? '')}</span><span class="product-card-arrow" aria-hidden="true">↗</span></span>
    </div>
  </a></li>`;
}

/* Grille de fiches. */
export const productGrid = (catalog, products, editorial = false) =>
  `<ul class="product-grid">${products.map((p) => productCard(catalog, p, editorial)).join('')}</ul>`;
