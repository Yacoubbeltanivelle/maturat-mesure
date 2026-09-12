import './styles/fonts.css';
import './styles/style.css';

import { $, $$ } from './lib/dom.js';
import { state, draft, resetDraft, resetSimulation } from './state.js';
import { SITE } from './data/site.js';
import { readRoute, hashFor } from './router.js';

import { siteHeader } from './components/site-header.js';
import { siteFooter } from './components/site-footer.js';
import { creditsContent } from './components/credits-dialog.js';
import { updateFamily } from './components/family-controls.js';
import { updateDrop } from './components/dropout-controls.js';
import { summary } from './components/quote-form.js';

import { home } from './pages/home.js';
import { dropout } from './pages/dropout.js';
import { quote } from './pages/quote.js';

import { mount as mountHeroBloom } from './effects/hero-bloom.js';
import { setupReveal } from './effects/reveal.js';
import { mountCursor } from './effects/cursor.js';
import { onScroll } from './effects/scroll.js';

const main = $('#main');
const headerEl = $('.site-header');
const footerEl = $('#footer');
const dialog = $('#credits-dialog');

const PAGES = { home, dropout, quote };
const TITLES = { home: 'Accueil', dropout: 'Dropout', quote: 'Votre besoin' };

let stopHeroBloom = () => {};

function saveDraft() {
  if (state.page !== 'quote') return;
  $$('form [name]').forEach((el) => {
    draft[el.name] = el.type === 'checkbox' ? el.checked : el.value;
  });
}

function refreshSummary() {
  const live = $('#live-summary');
  if (live) live.innerHTML = summary(true);
}

function focusForm() {
  const h = $('form h2');
  if (!h) return;
  h.tabIndex = -1;
  h.focus({ preventScroll: true });
  h.scrollIntoView({ block: 'nearest', behavior: 'instant' });
}

function render() {
  stopHeroBloom();
  // La direction artistique « Atmospheric Precision » pilote toute la feuille de style.
  document.body.dataset.pack = 'E';
  document.body.dataset.page = state.page;
  document.body.classList.toggle('reduced', state.reduced);

  headerEl.innerHTML = siteHeader();
  $$('.site-header [data-page]').forEach((b) =>
    b.setAttribute('aria-current', b.dataset.page === state.page ? 'page' : 'false'));

  main.innerHTML = PAGES[state.page]();
  footerEl.innerHTML = siteFooter();
  document.title = `${SITE.name} — ${TITLES[state.page]}`;

  if (dialog.open) $('#credits-content').innerHTML = creditsContent();
  setupReveal();
  stopHeroBloom = mountHeroBloom($('.hero-focus-atmosphere'), state.reduced);
}

function navigate(page) {
  saveDraft();
  if (state.page === page) {
    render();
    window.scrollTo({ top: 0, behavior: 'instant' });
    return;
  }
  location.hash = hashFor(page);
}

function openCredits() {
  saveDraft();
  $('#credits-content').innerHTML = creditsContent();
  dialog.showModal();
}

document.addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  if (b.dataset.page) navigate(b.dataset.page);
  if (b.dataset.scroll) {
    $('#' + b.dataset.scroll)?.scrollIntoView({
      behavior: state.reduced ? 'instant' : 'smooth', block: 'start',
    });
  }
  if (b.dataset.family !== undefined) updateFamily(Number(b.dataset.family));
  if (b.dataset.need) {
    draft.family = b.dataset.need;
    state.step = 0;
    state.done = false;
    navigate('quote');
  }
  if (b.dataset.stage !== undefined) updateDrop(Number(b.dataset.stage));
  if (b.dataset.cut !== undefined) {
    state.cut = b.dataset.cut === 'true';
    updateDrop(state.dropStep, true);
  }
  if (b.hasAttribute('data-sync')) {
    state.scrollSync = !state.scrollSync;
    b.setAttribute('aria-pressed', state.scrollSync);
    b.textContent = `Progression au scroll : ${state.scrollSync ? 'activée' : 'en pause'}`;
    onScroll();
  }
  if (b.id === 'motion') { saveDraft(); state.reduced = !state.reduced; render(); }
  if (b.hasAttribute('data-open-credits')) openCredits();
  if (b.id === 'close-credits') dialog.close();
  if (b.hasAttribute('data-prev')) {
    saveDraft();
    state.step = Math.max(0, state.step - 1);
    render();
    focusForm();
  }
  if (b.hasAttribute('data-reset')) {
    resetDraft();
    state.step = 0;
    state.done = false;
    render();
    focusForm();
  }
});

document.addEventListener('input', (e) => {
  if (!e.target.closest('form') || !e.target.name) return;
  saveDraft();
  refreshSummary();
});

document.addEventListener('change', (e) => {
  if (e.target.name !== 'unknown') return;
  $('#pressure').disabled = e.target.checked;
  $('#flow').disabled = e.target.checked;
  saveDraft();
  refreshSummary();
});

document.addEventListener('submit', (e) => {
  if (!e.target.matches('.form-card')) return;
  e.preventDefault();
  saveDraft();
  if (state.step < 2) state.step += 1;
  else state.done = true;
  render();
  focusForm();
});

dialog.addEventListener('click', (e) => {
  if (e.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  const outside = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  if (outside) dialog.close();
});

window.addEventListener('hashchange', () => {
  saveDraft();
  readRoute();
  render();
  window.scrollTo({ top: 0, behavior: 'instant' });
  main.focus({ preventScroll: true });
});

window.addEventListener('scroll', onScroll, { passive: true });

// Une restauration bfcache reprend aussi le brouillon en mémoire : repartir à zéro.
// Un simple changement d'onglet ne déclenche pas cette remise à zéro.
window.addEventListener('pageshow', (event) => {
  if (!event.persisted) return;
  resetSimulation();
  document.body.style.removeProperty('--selected-halo');
  if (dialog.open) dialog.close();
  readRoute();
  render();
});

// Un seul abonnement : l'ancienne version en rajoutait un a chaque changement d'ancre.
matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
  saveDraft();
  state.reduced = e.matches;
  render();
});

mountCursor(dialog);
readRoute();
render();
