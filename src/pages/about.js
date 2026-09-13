import { escapeHTML } from '../lib/dom.js';
import { catalog } from '../state.js';
import { publishedFamilies, publishedProducts } from '../data/queries.js';
import { SECTORS, COMPANY } from '../data/company.js';
import { eyebrow } from '../ui/eyebrow.js';
import { textButton } from '../ui/button.js';

/* Page « Maturat Mesure » : métier, approche et secteurs desservis.
 * Aucun nom de client n'est cité — cela demanderait leur autorisation. */

function sectorRow(sector) {
  return `<li class="sector-row">
    <span class="mono sector-code">${escapeHTML(sector.code)}</span>
    <div class="sector-body">
      <h3 class="sector-name">${escapeHTML(sector.name)}</h3>
      <p class="sector-text">${escapeHTML(sector.text)}</p>
    </div>
  </li>`;
}

function approachCard(item, index) {
  return `<li class="approach-card">
    <span class="mono approach-number">${String(index + 1).padStart(2, '0')}</span>
    <h3 class="approach-title">${escapeHTML(item.title)}</h3>
    <p class="approach-text">${escapeHTML(item.text)}</p>
  </li>`;
}

export function about() {
  const familyCount = publishedFamilies(catalog).length;
  const productCount = publishedProducts(catalog).length;

  return `<div class="editorial-page">
    <section class="editorial-intro" aria-labelledby="about-title">
      <a class="editorial-back mono" href="#/home">← ACCUEIL</a>
      <div class="editorial-intro-grid">
        <div>${eyebrow('MATURAT MESURE')}<h1 id="about-title">La mesure juste,<br><em>au bon endroit.</em></h1></div>
        <div class="editorial-intro-copy">
          <p>${escapeHTML(COMPANY.intro)}</p>
          <ul class="editorial-figures">
            <li><span class="mono editorial-figure-value">${familyCount}</span><span class="editorial-figure-label">familles couvertes</span></li>
            <li><span class="mono editorial-figure-value">${productCount}</span><span class="editorial-figure-label">références au catalogue</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="editorial-section" aria-labelledby="approach-title">
      <div class="editorial-section-heading">
        <div>${eyebrow('NOTRE APPROCHE')}<h2 id="approach-title">Un choix technique,<br><em>pas une transaction.</em></h2></div>
        <p>Trois principes qui guident chaque dossier, de la première question à la mise en service.</p>
      </div>
      <ul class="approach-grid">${COMPANY.approach.map(approachCard).join('')}</ul>
    </section>

    <section class="editorial-section" aria-labelledby="sectors-title">
      <div class="editorial-section-heading">
        <div>${eyebrow('SECTEURS DESSERVIS')}<h2 id="sectors-title">Des exigences<br><em>très différentes.</em></h2></div>
        <p>Chaque industrie impose ses propres contraintes : matériaux, documentation, disponibilité, environnement.</p>
      </div>
      <ul class="sector-list">${SECTORS.map(sectorRow).join('')}</ul>
      <p class="editorial-note">Les références clients ne sont pas publiées : leur mention demande l’accord écrit de chaque entreprise concernée.</p>
    </section>

    <div class="editorial-cta">
      ${textButton('Définir mon besoin', 'data-page="quote"')}
      <a class="text-button" href="#/products">Voir le catalogue <span aria-hidden="true">↗</span></a>
    </div>
  </div>`;
}
