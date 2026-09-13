import { asset } from '../lib/dom.js';

/* En-tete du site : marque et parcours principal. */
export function siteHeader() {
  return `<a class="brand" href="#/home" aria-label="Maturat Mesure, accueil"><img src="${asset('assets/maturat-logo.png')}" alt="Maturat Mesure"></a><nav aria-label="Parcours"><a class="catalog-nav-link" href="#/products" data-route="products">Produits</a><button data-page="dropout">Dropout</button><a class="catalog-nav-link" href="#/about" data-route="about">À propos</a><button class="nav-action" data-page="quote"><span class="full-label">Définir mon besoin</span><span class="short-label">Mon besoin</span> <span>↗</span></button></nav>`;
}
