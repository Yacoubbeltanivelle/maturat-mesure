import { state, catalog } from '../state.js';
import { escapeHTML } from '../lib/dom.js';
import { familyBySlug, productsOfFamily } from '../data/queries.js';
import { img, imageCredit } from '../ui/media.js';
import { eyebrow } from '../ui/eyebrow.js';
import { familyMark } from '../ui/family-mark.js';
import { textButton } from '../ui/button.js';
import { breadcrumb } from '../components/breadcrumb.js';
import { productGrid } from '../components/product-card.js';
import { notFound } from './not-found.js';

/** Nom de la famille courante, pour le titre du document. */
export function familyTitle() {
  return familyBySlug(catalog, state.slug)?.name || 'Famille introuvable';
}

/* Visuel d'en-tête : photographie créditée pour les quatre grandeurs de mesure,
 * repère au trait pour les familles qui n'ont pas de photographie pertinente. */
function familyVisual(family) {
  if (family.img) {
    return `<figure class="family-hero-photo">${img(family.img, family.name)}
      ${imageCredit(family.img) ? `<figcaption>${imageCredit(family.img)}</figcaption>` : ''}
    </figure>`;
  }
  return `<div class="family-hero-mark">${familyMark(family.code, 'family-mark-large')}<span class="mono">${escapeHTML(family.code)} / ${escapeHTML(family.name.toUpperCase())}</span></div>`;
}

export function family() {
  const entry = familyBySlug(catalog, state.slug);
  if (!entry) return notFound();

  const list = productsOfFamily(catalog, entry.id);
  const count = list.length === 1 ? '1 fiche de démonstration' : `${list.length} fiches de démonstration`;

  return `<div class="family-page">
    ${breadcrumb([
      { label: 'Accueil', href: '#/home' },
      { label: 'Produits', href: '#/products' },
      { label: entry.name },
    ])}

    <section class="family-hero" aria-labelledby="family-title">
      <div class="family-hero-copy">
        ${eyebrow(`${escapeHTML(entry.code)} — FAMILLE`)}
        <h1 id="family-title">${escapeHTML(entry.longName)}</h1>
        <p class="family-intro">${escapeHTML(entry.intro)}</p>
        <ul class="catalog-tags family-principles">${entry.principles.map((p) => `<li>${escapeHTML(p)}</li>`).join('')}</ul>
      </div>
      ${familyVisual(entry)}
    </section>

    <section class="family-uses" aria-labelledby="family-uses-title">
      <h2 id="family-uses-title">Usages principaux</h2>
      <ul class="family-uses-list">${entry.uses.map((u) => `<li><span class="mono" aria-hidden="true">—</span>${escapeHTML(u)}</li>`).join('')}</ul>
    </section>

    <section class="family-products" aria-labelledby="family-products-title">
      <div class="catalog-section-heading"><div><h2 id="family-products-title">Fiches rattachées</h2></div><p class="mono family-products-count">${count}</p></div>
      ${list.length
        ? productGrid(catalog, list)
        : '<p class="catalog-empty-title">Aucune fiche de démonstration n’est rattachée à cette famille pour le moment.</p>'}
      <p class="catalog-disclaimer">Références, fournisseurs et caractéristiques sont fictifs : ils servent à éprouver le parcours de la maquette.</p>
    </section>

    <section class="family-actions" aria-label="Poursuivre">
      <a class="text-button" href="#/products">Revenir au catalogue <span aria-hidden="true">↗</span></a>
      ${textButton('Définir mon besoin', `data-need="${escapeHTML(entry.name)}" aria-label="Définir un besoin : ${escapeHTML(entry.name)}"`)}
    </section>
  </div>`;
}
