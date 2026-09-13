import { state } from '../state.js';
import { asset } from '../lib/dom.js';
import { SITE } from '../data/site.js';
import { textButton } from '../ui/button.js';

export function siteFooter(){return `
<div class="footer-heading"><h2>La précision commence<br><em>par un échange.</em></h2>${textButton('Parlons de votre application','data-page="quote"')}</div>
<div class="footer-scene"><div class="footer-curtain"><div class="footer-panel">
  <div class="footer-directory">
    <div class="footer-identity"><a class="brand" href="#/home"><img src="${asset('assets/maturat-logo.png')}" alt="${SITE.name}"></a><p>${SITE.tagline}.<br>Niveau, température, pression, débit.</p><span class="mono">LA JUSTESSE, À CHAQUE MESURE.</span></div>
    <nav class="footer-column" aria-label="Solutions"><h3>Solutions</h3><a href="#/products">Catalogue</a><a href="#/dropout">Dropout</a><a href="#/suppliers">Fournisseurs</a></nav>
    <nav class="footer-column" aria-label="Maturat"><h3>Maturat</h3><a href="#/about">Notre expertise</a><a href="#/faq">Questions fréquentes</a><a href="#/quote">Définir mon besoin ↗</a></nav>
    <div class="footer-column footer-contact"><h3>Échangeons</h3><span>${SITE.contact.phone}</span><a href="mailto:${SITE.contact.email}">${SITE.contact.email}</a><p>${SITE.contact.street}<br>${SITE.contact.city}</p></div>
  </div>
  <div class="footer-meta"><span>Maquette de démonstration · données fictives</span><div class="footer-settings"><button id="motion" aria-pressed="${state.reduced}">Mouvement <span>${state.reduced ? 'réduit' : 'activé'}</span></button><button data-open-credits>Crédits visuels ↗</button><a class="footer-admin-link" href="#/admin">Admin ↗</a><button data-footer-top aria-label="Retour en haut de la page">↑</button></div></div>
</div>
<div class="footer-landscape" aria-hidden="true"><span class="footer-wordmark">MATURAT</span>
<svg class="footer-relief" viewBox="0 0 1440 340" preserveAspectRatio="none" focusable="false"><defs><linearGradient id="footer-ridge" x2="0.2" y2="1"><stop stop-color="#bfd7e7"/><stop offset="1" stop-color="#739cb9"/></linearGradient><linearGradient id="footer-front" x2="0.7" y2="1"><stop stop-color="#99bed6"/><stop offset="1" stop-color="#426f91"/></linearGradient></defs><path d="M0 180C240 40 370 230 680 162S1110 90 1440 178V340H0Z" fill="url(#footer-ridge)"/><path d="M0 255C265 320 430 136 780 212S1160 295 1440 195V340H0Z" fill="url(#footer-front)"/><g fill="none" stroke="#e8f4fc" stroke-opacity=".24"><path d="M0 269C265 334 430 150 780 226S1160 309 1440 209"/><path d="M0 289C265 354 430 170 780 246S1160 329 1440 229"/><path d="M0 309C265 374 430 190 780 266S1160 349 1440 249"/></g></svg><span class="footer-landscape-caption mono">MESURER. CONTRÔLER. MAÎTRISER.</span></div></div></div>`}
