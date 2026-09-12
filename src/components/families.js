import { state } from '../state.js';
import { FAMILIES } from '../data/families.js';
import { img } from '../ui/media.js';
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

export function inspector(){
  const family = state.family;
  const f=FAMILIES[family];return `<div><span class="mono">${f.code} / ${f.name.toUpperCase()}</span><h3>${f.title}</h3></div><div><p>${f.text}</p><div class="principles">${f.principles.map(x=>`<span>${x}</span>`).join('')}</div></div>${textButton('Définir mon besoin',`data-need="${f.name}"`)}`}

export function solutions(){
  const family = state.family;
  return `<section class="solutions solutions-catalog section" id="solutions"><div class="section-heading"><div><h2>Tout commence<br><em>par la bonne mesure.</em></h2><p>Quatre grandeurs fondamentales.<br>Une sélection guidée par vos contraintes.</p></div></div><div class="family-grid">${FAMILIES.map((f,i)=>`<button class="family-card measure-card measure-${f.code}" data-family="${i}" aria-pressed="${family===i}" style="--family-halo:${f.color}"><div class="measure-copy"><span class="mono">${f.code}</span><h3>${f.name}</h3><p>${f.text}</p></div>${img(f.img,'Exemple d’instrument de '+f.name.toLowerCase(),'measure-image',true)}<span class="measure-arrow" aria-hidden="true">↗</span>${f.img===270?'<span class="measure-credit">Photo by CEphoto, Uwe Aranas · CC BY-SA 3.0</span>':''}</button>`).join('')}</div><div class="family-inspector" id="family-inspector" aria-live="polite">${inspector()}</div></section>`}
