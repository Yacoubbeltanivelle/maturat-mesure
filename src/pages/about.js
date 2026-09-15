import { escapeHTML } from '../lib/dom.js';
import { catalog } from '../state.js';
import { publishedFamilies, publishedProducts } from '../data/queries.js';
import { SECTORS, COMPANY } from '../data/company.js';
import { eyebrow } from '../ui/eyebrow.js';
import '../styles/about.css';

/* Contenus de maquette issus de company.js ; aucune référence client publiée. */
export function about() {
  const familyCount = publishedFamilies(catalog).length;
  const productCount = publishedProducts(catalog).length;
  return `<div class="about-page">
    <section class="about-hero" aria-labelledby="about-title">
      <a class="about-back" href="#/home">← Accueil</a>
      <div class="about-hero-grid">
        <div>${eyebrow('MATURAT MESURE')}<h1 id="about-title">La mesure juste,<br><em>au bon endroit.</em></h1></div>
        <div class="about-intro"><p>${escapeHTML(COMPANY.intro)}</p><p class="about-signature">Comprendre. Sélectionner. Accompagner.</p></div>
      </div>
      <div class="about-demo"><span>CATALOGUE DE DÉMONSTRATION</span><span>${familyCount} familles · ${productCount} références</span><a href="#/products">Voir le catalogue <span aria-hidden="true">↗</span></a></div>
    </section>
    <section class="about-role about-section" aria-labelledby="about-role-title">
      <div>${eyebrow('01 / NOTRE MÉTIER')}<h2 id="about-role-title">Avant l’instrument,<br>il y a l’application.</h2><p>Le fluide, la plage utile, le raccordement et l’environnement conditionnent le choix. Nous partons de votre installation.</p><span class="about-role-note">Une démarche d’échange et de sélection.</span></div>
      <ol class="about-process"><li><span>01</span>Votre installation</li><li><span>02</span>Contraintes du procédé</li><li><span>03</span>Principe de mesure</li><li><span>04</span>Solution à chiffrer</li></ol>
    </section>
    <section class="about-approach about-section" aria-labelledby="about-approach-title">
      <div class="about-section-heading">${eyebrow('02 / NOTRE MANIÈRE DE TRAVAILLER')}<h2 id="about-approach-title">Le procédé comme point de départ.</h2></div>
      <ol class="about-principles">${COMPANY.approach.map((item,i)=>`<li><span class="about-principle-number">0${i+1}</span><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.text)}</p></li>`).join('')}</ol>
    </section>
    <section class="about-sectors about-section" aria-labelledby="about-sectors-title">
      <div class="about-sector-heading">${eyebrow('03 / SECTEURS INDUSTRIELS')}<h2 id="about-sectors-title">Des environnements différents.<br>Une même attention au contexte.</h2><p>Chaque industrie impose ses propres contraintes : matériaux, documentation, disponibilité, environnement.</p></div>
      <ul class="about-sector-list">${SECTORS.map(sector=>`<li><span class="about-sector-code">${escapeHTML(sector.code)}</span><div><h3>${escapeHTML(sector.name)}</h3><p>${escapeHTML(sector.text)}</p></div></li>`).join('')}</ul>
      <p class="about-client-note">Les références clients ne sont pas publiées : leur mention demande l’accord écrit de chaque entreprise concernée.</p>
    </section>
    <section class="about-relation about-section" aria-labelledby="about-relation-title">
      <div>${eyebrow('04 / UN INTERLOCUTEUR UNIQUE')}<h2 id="about-relation-title">Votre application.<br>Votre contexte.<br><span>Un même fil de discussion.</span></h2></div>
      <div class="about-relation-copy"><p>Du premier échange au chiffrage et aux échanges techniques, vous gardez un même fil de discussion, sans avoir à reprendre votre contexte à chaque étape.</p><a class="text-button" href="#/quote">Définir mon besoin <span aria-hidden="true">↗</span></a></div>
    </section>
  </div>`;
}
