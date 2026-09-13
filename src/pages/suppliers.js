import { escapeHTML } from '../lib/dom.js';
import { catalog } from '../state.js';
import { publishedProducts, familyById } from '../data/queries.js';
import { hashForProduct } from '../lib/route.js';
import { eyebrow } from '../ui/eyebrow.js';
import { textButton } from '../ui/button.js';

/* Page Fournisseurs : les marques du catalogue et les familles qu'elles couvrent.
 * Tous les fournisseurs de cette maquette sont fictifs. */

function supplierCard(supplier) {
  const products = publishedProducts(catalog).filter((p) => p.supplierId === supplier.id);
  const families = [...new Set(products.map((p) => familyById(catalog, p.familyId)?.name).filter(Boolean))];
  const count = products.length === 1 ? '1 fiche' : `${products.length} fiches`;

  return `<li class="supplier-card">
    <div class="supplier-head">
      <h3 class="supplier-name">${escapeHTML(supplier.name)}</h3>
      <span class="mono supplier-count">${escapeHTML(count)}</span>
    </div>
    ${families.length ? `<ul class="supplier-families">${families.map((f) => `<li>${escapeHTML(f)}</li>`).join('')}</ul>` : ''}
    ${products.length ? `<ul class="supplier-products">${products.slice(0, 4).map((p) =>
      `<li><a href="${hashForProduct(p.slug)}">${escapeHTML(p.name)} <span aria-hidden="true">↗</span></a></li>`
    ).join('')}</ul>` : '<p class="supplier-empty">Aucune fiche publiée pour ce fournisseur.</p>'}
  </li>`;
}

export function suppliers() {
  const used = new Set(publishedProducts(catalog).map((p) => p.supplierId));
  const list = catalog.suppliers.filter((s) => used.has(s.id));

  return `<div class="editorial-page">
    <section class="editorial-intro" aria-labelledby="suppliers-title">
      <a class="editorial-back mono" href="#/products">← CATALOGUE</a>
      <div class="editorial-intro-grid">
        <div>${eyebrow('NOS FOURNISSEURS')}<h1 id="suppliers-title">Peu de marques,<br><em>bien maîtrisées.</em></h1></div>
        <div class="editorial-intro-copy">
          <p>Nous privilégions un fournisseur par famille de mesure. Ce choix nous permet de connaître réellement ce que nous vendons, plutôt que de référencer largement.</p>
          <span class="editorial-note-inline">Fournisseurs fictifs, créés pour la démonstration</span>
        </div>
      </div>
    </section>

    <section class="editorial-section" aria-labelledby="suppliers-list-title">
      <h2 id="suppliers-list-title" class="visually-hidden">Liste des fournisseurs</h2>
      <ul class="supplier-grid">${list.map(supplierCard).join('')}</ul>
    </section>

    <div class="editorial-cta">
      ${textButton('Définir mon besoin', 'data-page="quote"')}
      <a class="text-button" href="#/products">Voir toutes les fiches <span aria-hidden="true">↗</span></a>
    </div>
  </div>`;
}
