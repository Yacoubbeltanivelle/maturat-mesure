import { escapeHTML } from '../lib/dom.js';
import { FAQ } from '../data/company.js';
import { eyebrow } from '../ui/eyebrow.js';
import { textButton } from '../ui/button.js';

/* Questions fréquentes. Le détail natif gère l'ouverture : pas de JavaScript,
 * et le clavier fonctionne sans code supplémentaire. */

function faqItem(entry, index) {
  return `<li class="faq-item">
    <details class="faq-details">
      <summary class="faq-summary">
        <span class="mono faq-number">${String(index + 1).padStart(2, '0')}</span>
        <span class="faq-question">${escapeHTML(entry.q)}</span>
        <span class="faq-marker" aria-hidden="true"></span>
      </summary>
      <p class="faq-answer">${escapeHTML(entry.a)}</p>
    </details>
  </li>`;
}

export function faq() {
  return `<div class="editorial-page">
    <section class="editorial-intro" aria-labelledby="faq-title">
      <a class="editorial-back mono" href="#/home">← ACCUEIL</a>
      <div class="editorial-intro-grid">
        <div>${eyebrow('QUESTIONS FRÉQUENTES')}<h1 id="faq-title">Avant de nous écrire,<br><em>peut-être ici.</em></h1></div>
        <div class="editorial-intro-copy">
          <p>Les questions que l’on nous pose le plus souvent, du choix d’un instrument au déroulement d’une demande de chiffrage.</p>
          <span class="editorial-note-inline">Réponses de démonstration, à valider avant publication</span>
        </div>
      </div>
    </section>

    <section class="editorial-section" aria-labelledby="faq-list-title">
      <h2 id="faq-list-title" class="visually-hidden">Liste des questions</h2>
      <ul class="faq-list">${FAQ.map(faqItem).join('')}</ul>
    </section>

    <div class="editorial-cta">
      <p class="editorial-cta-text">Votre question n’y figure pas ?</p>
      ${textButton('Nous décrire votre besoin', 'data-page="quote"')}
    </div>
  </div>`;
}
