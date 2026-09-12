import { SITE } from '../data/site.js';
import { asset, escapeHTML } from '../lib/dom.js';
import { FAMILIES } from '../data/families.js';
import { catalog } from '../state.js';
import { familyByCode } from '../data/queries.js';
import { hashForFamily } from '../lib/route.js';
import { familyMark } from '../ui/family-mark.js';
import { eyebrow } from '../ui/eyebrow.js';
import { solutions } from '../components/families.js';
import { feature } from '../components/dropout-feature.js';

/* L'instrumentation ouvre l'accueil ; Dropout conserve sa section dédiée plus bas. */
export function home() {
  const hero = `<section class="hero hero-focus hero-balanced" aria-labelledby="hero-title">
    <div class="hero-focus-atmosphere" aria-hidden="true"><img class="hero-focus-texture" src="${asset('assets/hero-blue-grain.png')}" width="1774" height="887" alt="" fetchpriority="high" decoding="async"><div class="hero-bloom-mesh"></div></div>
    <div class="hero-balanced-copy">${eyebrow('INSTRUMENTATION INDUSTRIELLE')}<h1 id="hero-title">${SITE.heading}</h1>
      <p class="hero-intro">Niveau, température, pression, débit : des instruments pour mesurer et détecter, des solutions pour maîtriser vos procédés.</p>
      <a class="button primary" href="#/products">Explorer nos produits <span aria-hidden="true">↗</span></a>
      <p class="hero-balanced-note">De la mesure au contrôle des fluides,<br>partons de votre application.</p>
    </div>
    <nav class="hero-domains" aria-label="Nos quatre familles de mesure"><span class="mono hero-domains-label">QUATRE GRANDEURS / UN MÊME SAVOIR-FAIRE</span>
      <div class="hero-domain-grid">${FAMILIES.map(f => {
        const entry = familyByCode(catalog, f.code);
        return `<a class="hero-domain" href="${entry ? hashForFamily(entry.slug) : '#/products'}"><span class="mono">${f.code} / ${escapeHTML(f.unit)}</span>${familyMark(f.code)}<span class="hero-domain-name">${escapeHTML(f.name)} <span aria-hidden="true">↗</span></span></a>`;
      }).join('')}</div>
    </nav>
  </section>`;
  return hero + solutions() + feature();
}
