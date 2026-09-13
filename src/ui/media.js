import { escapeHTML, asset } from '../lib/dom.js';
import { IMAGE_ASSETS } from '../data/images.js';

/* Images : le chemin passe par asset() pour suivre la base du site. */
export const img=(id,alt,cls='',lazy=false)=>{const a=IMAGE_ASSETS[id];return `<img class="${cls} asset-${id}" src="${asset(a.src)}" alt="${escapeHTML(a.title)} — visuel d’illustration" width="${a.width}" height="${a.height}" ${lazy?'loading="lazy"':''} decoding="async">`};
export const imageCredit = (id) => [202, 270, 306, 402, 406, 501, 502, 503, 504].includes(Number(id)) ? escapeHTML(IMAGE_ASSETS[id].credit) : '';
export const dropoutImage=(cls='',lazy=false)=>`<img class="${cls}" src="${asset('assets/dropout-cutout.png')}" width="455" height="1738" alt="Séparateur Dropout, corps en aluminium et raccords bleus — visuel fourni amélioré" ${lazy?'loading="lazy"':''} decoding="async">`;
