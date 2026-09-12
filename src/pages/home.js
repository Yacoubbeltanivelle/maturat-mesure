import { SITE } from '../data/site.js';
import { asset } from '../lib/dom.js';
import { textButton } from '../ui/button.js';
import { dropoutImage } from '../ui/media.js';
import { solutions } from '../components/families.js';
import { feature } from '../components/dropout-feature.js';

/* Accueil : hero Atmospheric Precision, familles de mesure, section Dropout. */
export function home() {
  const intro = `<p class="hero-intro">Instrumentation et solutions de contrôle pour vos procédés industriels. Définissons ensemble la solution adaptée à votre application.</p>`;
  const hero = `<section class="hero hero-focus" aria-labelledby="hero-title"><div class="hero-focus-atmosphere" aria-hidden="true"><img class="hero-focus-texture" src="assets/hero-blue-grain.png" width="1774" height="887" alt="" fetchpriority="high" decoding="async"><div class="hero-bloom-mesh"></div></div><div class="hero-focus-stage" data-art><figure class="hero-focus-product">${dropoutImage('hero-focus-equipment').replace('<img ', '<img fetchpriority="high" ')}<figcaption>Dropout <span>Traitement de l’air comprimé</span></figcaption></figure></div><div class="hero-focus-bottom"><h1 id="hero-title">${SITE.heading}</h1><div class="hero-focus-intro">${intro}${textButton('Explorer les solutions','data-scroll="solutions"')}</div></div></section>`;
  return hero + solutions() + feature();
}
