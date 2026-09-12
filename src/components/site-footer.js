import { state } from '../state.js';
import { asset } from '../lib/dom.js';
import { SITE } from '../data/site.js';
import { textButton } from '../ui/button.js';

/* Pied de page : appel a l'action, coordonnees fictives, reglages. */
export function siteFooter(){return `<div class="footer-heading"><h2>La précision commence<br><em>par un échange.</em></h2>${textButton('Parlons de votre application','data-page="quote"')}</div><div class="footer-bottom"><a class="brand" href="#/home"><img src="${asset('assets/maturat-logo.png')}" alt="Maturat Mesure"></a><div><span>${SITE.contact.phone}</span><a href="mailto:${SITE.contact.email}">${SITE.contact.email}</a></div><div class="footer-address"><span class="mono footer-location">${SITE.contact.location}</span>${SITE.contact.street}<br>${SITE.contact.city}</div></div><div class="footer-meta"><span>Maquette de demonstration &middot; donnees fictives</span><button id="motion" aria-pressed="${state.reduced}">Mouvement <span>${state.reduced ? 'reduit' : 'active'}</span></button><button data-open-credits>Credits visuels &#8599;</button></div>`}
