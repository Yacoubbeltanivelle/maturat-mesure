import { escapeHTML } from '../lib/dom.js';
import { familyById, supplierById } from '../data/queries.js';
import { hashForProduct } from '../lib/route.js';
import { familyMark } from '../ui/family-mark.js';

/* Carte d'une fiche. La carte entière est un lien : rien d'interactif n'est imbriqué. */
export function productCard(catalog, product) {
  const family = familyById(catalog, product.familyId);
  const supplier = supplierById(catalog, product.supplierId);
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
export const productGrid = (catalog, products) =>
  `<ul class="product-grid">${products.map((p) => productCard(catalog, p)).join('')}</ul>`;
