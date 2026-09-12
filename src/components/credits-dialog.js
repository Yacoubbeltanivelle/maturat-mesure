import { asset } from '../lib/dom.js';
import { IMAGE_ASSETS } from '../data/images.js';

/* Les photographies sont sous licence Creative Commons : l'attribution doit rester
 * visible dans la maquette. Cette fiche remplace l'ancien carnet de direction artistique. */
export function photoCredits(){return `<section class="photo-credits"><span class="mono">PHOTOGRAPHIES / SOURCES & LICENCES</span><h2>Des visuels pour se projeter.</h2><p>Le visuel Dropout provient de l’extrait de plaquette fourni. Sa netteté a été améliorée avec l’IA, puis le fond a été retiré par détourage classique pour cette maquette. Les quatre photographies de catégories ci-dessous sont des illustrations sous licence Creative Commons, conservées sans retouche.</p><div class="credit-list">${Object.entries(IMAGE_ASSETS).filter(([id])=>id!=='132').map(([,a])=>`<article><img src="${asset(a.src)}" width="80" height="76" alt="" loading="lazy"><div><h3>${a.title}</h3><p>${a.author} · ${a.width.toLocaleString('fr-FR')} × ${a.height.toLocaleString('fr-FR')} px</p><div class="credit-links"><a href="${a.source}" target="_blank" rel="noopener noreferrer">Voir la source ↗</a><a href="${a.licenseUrl}" target="_blank" rel="noopener noreferrer">${a.license} ↗</a></div></div></article>`).join('')}</div></section>`}

export function creditsContent() {
  return photoCredits();
}
