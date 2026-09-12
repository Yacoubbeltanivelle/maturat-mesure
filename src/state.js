/* Etat de la demonstration, entierement en memoire.
 * Aucun localStorage, sessionStorage ni IndexedDB : tout repart a zero au rechargement. */

export const DRAFT_DEFAULTS = Object.freeze({
  family: 'Dropout \u2014 air comprim\u00e9',
  application: '', pressure: '', flow: '', unknown: false,
  name: '', company: '', email: '',
});

export const draft = { ...DRAFT_DEFAULTS };

const initialState = () => ({
  page: 'home',
  family: 2,
  step: 0,
  done: false,
  dropStep: 0,
  cut: false,
  scrollSync: true,
  reduced: matchMedia('(prefers-reduced-motion: reduce)').matches,
});

export const state = initialState();

export function resetDraft() {
  Object.assign(draft, DRAFT_DEFAULTS);
}

export function resetSimulation() {
  resetDraft();
  Object.assign(state, initialState());
}
