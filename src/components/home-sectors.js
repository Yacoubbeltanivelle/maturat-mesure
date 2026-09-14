import { SECTORS } from '../data/company.js';
import { IMAGE_ASSETS } from '../data/images.js';
import { escapeHTML } from '../lib/dom.js';
import { img } from '../ui/media.js';
import { sectionLabel } from '../ui/section-label.js';

function sectorPhoto(id, sector, className) {
  return `<figure class="sector-photo ${className}">
    <div class="sector-photo-frame">${img(id, sector.name, '', true)}<span class="sector-photo-label"><strong>${escapeHTML(sector.name)}</strong></span></div>
    <figcaption>Illustration / ${escapeHTML(IMAGE_ASSETS[id].credit)}</figcaption>
  </figure>`;
}

export function homeSectors() {
  return `<section class="home-sectors section sectors-tableau" aria-labelledby="sectors-title">
    <header class="sectors-header"><div>${sectionLabel("Secteurs industriels", "sectors")}<h2 id="sectors-title">Là où la mesure<br><em>ne peut pas être approximative.</em></h2></div><p>Des procédés différents.<br>Une même attention aux conditions de mesure.</p></header>
    <div class="sectors-composition">
      ${sectorPhoto(602, SECTORS[0], 'sector-photo-major')}
      <div class="sectors-index"><ul>${SECTORS.map(s => `<li>${escapeHTML(s.name)}</li>`).join('')}</ul><p>Photographies d’illustration.</p></div>
      ${sectorPhoto(604, SECTORS[6], 'sector-photo-marine')}
      ${sectorPhoto(603, SECTORS[2], 'sector-photo-lab')}
      <div class="sectors-note"><span class="mono">DU PROCÉDÉ À LA MESURE</span><p>Chaque environnement <br>a ses contraintes.</p><a class="text-button" href="#/quote">Parlons de votre application <span aria-hidden="true">↗</span></a></div>
    </div>
  </section>`;
}
