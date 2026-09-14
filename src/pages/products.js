import { state, catalog } from '../state.js';
import { escapeHTML } from '../lib/dom.js';
import { publishedFamilies, productsOfFamily, filterProducts } from '../data/queries.js';
import { hashForFamily } from '../lib/route.js';
import { img, imageCredit, dropoutImage } from '../ui/media.js';
import { eyebrow } from '../ui/eyebrow.js';
import { familyMark } from '../ui/family-mark.js';
import { textButton } from '../ui/button.js';
import { catalogFilters, catalogResults } from '../components/catalog-filters.js';
import { HOME_FAMILIES } from '../data/families.js';

/* Page Produits : familles, recherche et fiches de démonstration.
 * Dropout garde sa place propre, en dehors des filtres et de son compteur. */

function familyCount(family) {
  const n = productsOfFamily(catalog, family.id).length;
  return n === 1 ? '1 fiche' : `${n} fiches`;
}

function measurementCard(family) {
  const visual = HOME_FAMILIES.find((f) => f.code === family.code)?.img || family.img;
  return `<li><a class="catalog-card catalog-card-${escapeHTML(family.code)}" href="${hashForFamily(family.slug)}">
    <div class="catalog-card-heading"><span class="mono">${escapeHTML(family.code)} / ${escapeHTML(family.name.toUpperCase())}</span><h3>${escapeHTML(family.longName)}</h3></div>
    <figure class="catalog-image"><span class="catalog-unit mono" aria-hidden="true">${escapeHTML(family.unit)}</span>${img(visual, family.name, '', true)}
      <figcaption>${imageCredit(visual)} · Illustration de la famille</figcaption>
    </figure>
    <div class="catalog-card-copy"><p>${escapeHTML(family.text)}</p><ul class="catalog-tags">${family.principles.map((p) => `<li>${escapeHTML(p)}</li>`).join('')}</ul>
    <p class="catalog-use">${escapeHTML(family.use)}</p>
    <span class="catalog-card-link">Voir la famille · ${familyCount(family)} <span aria-hidden="true">↗</span></span></div>
  </a></li>`;
}

function complementaryRow(family) {
  return `<li><a class="catalog-row catalog-row-${escapeHTML(family.code)}" href="${hashForFamily(family.slug)}">
    <span class="mono catalog-row-number">${escapeHTML(family.code)}</span>
    <div><h3>${escapeHTML(family.name)}</h3><p>${escapeHTML(family.text)}</p></div>
    <div><ul class="catalog-list">${family.principles.map((p) => `<li>${escapeHTML(p)}</li>`).join('')}</ul>
    <span class="catalog-card-link">Voir la famille · ${familyCount(family)} <span aria-hidden="true">↗</span></span></div>
    <span class="catalog-row-mark" aria-hidden="true">${familyMark(family.code)}</span>
  </a></li>`;
}

export function catalogResultsHTML() {
  const filters = state.catalogFilters;
  return catalogResults(catalog, filters, filterProducts(catalog, filters), true);
}

export function products() {
  const families = publishedFamilies(catalog);
  const measured = families.filter((f) => f.img);
  const others = families.filter((f) => !f.img);

  return `<div class="catalog-page catalog-editorial">
    <section class="catalog-intro" aria-labelledby="catalog-title">
      <a class="catalog-back mono" href="#/home">← ACCUEIL</a>
      <div class="catalog-intro-grid"><div>${eyebrow('PRODUITS & SOLUTIONS')}<h1 id="catalog-title">À chaque procédé,<br><em>sa juste mesure.</em></h1></div>
      <div class="catalog-intro-copy"><p>Du capteur au contrôle des fluides, explorez nos domaines d’intervention. Votre application guide le choix de la solution.</p><span class="catalog-note">Familles réelles · Fiches, références et fournisseurs fictifs, pour la démonstration</span></div></div>
      <div class="catalog-index-label mono">QUE SOUHAITEZ-VOUS MESURER ?</div>
      <nav class="catalog-index" aria-label="Choisir une famille de mesure">
        ${families.map((f) => `<a href="${hashForFamily(f.slug)}"><span class="mono">${escapeHTML(f.code)}</span><span>${escapeHTML(f.name)}</span><span aria-hidden="true">↗</span></a>`).join('')}
        <button type="button" data-scroll="catalog-search-section"><span class="mono">INDEX</span><span>Toutes les fiches</span><span aria-hidden="true">↓</span></button>
      </nav>
    </section>

    <section id="catalog-measurements" class="catalog-measurements" aria-labelledby="measurements-title">
      <div class="catalog-section-heading"><div>${eyebrow('LE CŒUR DE VOTRE INSTALLATION')}<h2 id="measurements-title">Quatre grandeurs.<br><em>Un point de départ.</em></h2></div><p>Mesurer, détecter, surveiller.<br>Ouvrez la famille qui vous concerne.</p></div>
      <ul class="catalog-grid">${measured.map(measurementCard).join('')}</ul>
    </section>

    <section id="catalog-complements" class="catalog-complements" aria-labelledby="complements-title">
      <div class="catalog-section-heading"><div>${eyebrow('UNE VISION D’ENSEMBLE')}<h2 id="complements-title">Tout ce qui accompagne<br><em>la mesure.</em></h2></div><p>Connecter les équipements, exploiter le signal et comprendre votre environnement.</p></div>
      <ul class="catalog-rows">${others.map(complementaryRow).join('')}</ul>
    </section>

    <section id="catalog-search-section" class="catalog-search-section" aria-labelledby="catalog-search-title">
      <div class="catalog-section-heading"><div>${eyebrow('TOUTES LES FICHES')}<h2 id="catalog-search-title">Trouvez rapidement<br><em>votre point de départ.</em></h2></div><p>Par nom, référence ou usage. Affinez ensuite par famille ou par fournisseur.</p></div>
      <div class="catalog-finder">${catalogFilters(catalog, state.catalogFilters)}
      <div id="catalog-results">${catalogResultsHTML()}</div></div>
      <p class="catalog-disclaimer">Ces fiches sont des exemples créés pour la maquette. Les références, les fournisseurs et les caractéristiques sont fictifs et ne décrivent aucun produit commercialisé.</p>
    </section>

    <section id="catalog-dropout" class="catalog-dropout" aria-labelledby="catalog-dropout-title">
      <div class="catalog-dropout-copy">${eyebrow('TRAITEMENT DE L’AIR COMPRIMÉ')}<h2 id="catalog-dropout-title">En amont de la mesure,<br><em>protéger vos équipements.</em></h2><p>Dropout garde sa page dédiée : son principe de séparation des liquides et particules y est expliqué en détail, sans donnée inventée.</p><a class="text-button" href="#/dropout">Découvrir Dropout <span aria-hidden="true">↗</span></a></div>
      <div class="catalog-dropout-visual">${dropoutImage('', true)}<span class="mono">DROP’OUT / SÉPARATION</span></div>
    </section>
    <div class="catalog-page-cta"><h2>Vous ne savez pas<br><em>quelle technologie choisir ?</em></h2>${textButton('Définir mon besoin', 'data-page="quote"')}</div>
  </div>`;
}
