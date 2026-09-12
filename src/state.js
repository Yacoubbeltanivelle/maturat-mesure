/* Etat de la demonstration, entierement en memoire.
 * Aucun localStorage, sessionStorage ni IndexedDB : tout repart a zero au rechargement. */

import { createCatalog } from './data/catalog.js';

export const DRAFT_DEFAULTS = Object.freeze({
  family: 'Dropout — air comprimé',
  product: '',
  application: '', pressure: '', flow: '', unknown: false,
  name: '', company: '', email: '',
});

export const draft = { ...DRAFT_DEFAULTS };

const initialState = () => ({
  page: 'home',
  slug: '',
  family: 2,
  step: 0,
  done: false,
  dropStep: 0,
  cut: false,
  scrollSync: true,
  catalogFilters: { q: '', family: '', supplier: '' },
  reduced: matchMedia('(prefers-reduced-motion: reduce)').matches,
});

export const state = initialState();

/* Catalogue partage par le site et, plus tard, par l'administration simulee :
 * une copie independante des donnees sources, modifiable dans cet onglet. */
export const catalog = createCatalog();

export function resetCatalog() {
  Object.assign(catalog, createCatalog());
}

export function resetDraft() {
  Object.assign(draft, DRAFT_DEFAULTS);
}

export function resetSimulation() {
  resetDraft();
  resetCatalog();
  Object.assign(state, initialState());
}
