import { state, catalog } from '../state.js';
import { FAMILIES } from '../data/families.js';
import { familyByCode, productsOfFamily } from '../data/queries.js';
import { hashForFamily } from '../lib/route.js';
import { escapeHTML } from '../lib/dom.js';
import { img, imageCredit } from '../ui/media.js';
import { textButton } from '../ui/button.js';

/* Les quatre familles de mesure : onglets, specimen, grille de cartes et inspecteur. */
export function familyTabs(){
  const family = state.family;
  return `<div class="family-tabs" role="group" aria-label="Grandeur physique">${FAMILIES.map((f,i)=>`<button data-family="${i}" aria-pressed="${i===family}"><span class="mono">${f.code}</span>${f.name}<span class="tab-marker" aria-hidden="true">↗</span></button>`).join('')}</div>`}

export function specimen(){
  const family = state.family;
  const f=FAMILIES[family];return `<div class="specimen-meta"><span class="mono">${f.code} / ${f.name.toUpperCase()}</span><span class="mono">UNITÉ / ${f.unit}</span></div>${img(f.img,'Exemple d’instrument de '+f.name.toLowerCase(),'hero-key-image')}<div class="specimen-caption"><span>${f.use}</span><span class="mono">MATURAT / MESURE</span></div>`}

export function principles(){
  const family = state.family;
  return `<span class="mono">PRINCIPES DE MESURE</span><p>${FAMILIES[family].principles.join(' · ')}</p>`}

/* L'inspecteur porte l'acces a la page de famille : les cartes restent des boutons,
 * on n'imbrique donc aucun lien a l'interieur. */
function familyPageLink(code){
  const entry=familyByCode(catalog,code);
  if(!entry)return '';
  const n=productsOfFamily(catalog,entry.id).length;
  return `<a class="text-button" href="${hashForFamily(entry.slug)}">Voir la famille<span class="inspector-count"> · ${n===1?'1 fiche':`${n} fiches`}</span> <span aria-hidden="true">↗</span></a>`}

export function inspector(){
  const family = state.family;
  const f=FAMILIES[family];return `<div><span class="mono">${f.code} / ${f.name.toUpperCase()}</span><h3>${f.title}</h3></div><div><p>${f.text}</p><div class="principles">${f.principles.map(x=>`<span>${x}</span>`).join('')}</div></div><div class="inspector-actions">${familyPageLink(f.code)}${textButton('Définir mon besoin',`data-need="${escapeHTML(f.name)}"`)}</div>`}

export function solutions(){
  const family = state.family;
  return `<section class="solutions solutions-catalog section" id="solutions"><div class="section-heading"><div><h2>Tout commence<br><em>par la bonne mesure.</em></h2><p>Quatre grandeurs fondamentales.<br>Une sélection guidée par vos contraintes.</p><a class="text-button solutions-catalog-link" href="#/products">Voir tout le catalogue <span aria-hidden="true">↗</span></a></div></div><div class="family-grid">${FAMILIES.map((f,i)=>`<button class="family-card measure-card measure-${f.code}" data-family="${i}" aria-pressed="${family===i}" style="--family-halo:${f.color}"><div class="measure-copy"><span class="mono">${f.code}</span><h3>${f.name}</h3><p>${f.text}</p></div>${img(f.img,'Exemple d’instrument de '+f.name.toLowerCase(),'measure-image',true)}<span class="measure-arrow" aria-hidden="true">↗</span>${imageCredit(f.img)?`<span class="measure-credit">${imageCredit(f.img)}</span>`:''}</button>`).join('')}</div><div class="family-inspector" id="family-inspector" aria-live="polite">${inspector()}</div></section>`}
