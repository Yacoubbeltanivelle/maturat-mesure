import { state } from '../state.js';
import { eyebrow } from '../ui/eyebrow.js';
import { summary, fields } from '../components/quote-form.js';

/* Page « Définir mon besoin » — assistant de cadrage technique en 4 étapes. */
export function quote() {
  const step = state.step;
  const STEPS = ['Besoin', 'Application', 'Contact', 'Résumé'];
  const progressItems = STEPS.map((s, i) => {
    const isCurrent = step === i;
    const isDone = step > i;
    const cls = [isCurrent ? '' : '', isDone ? 'done' : ''].filter(Boolean).join(' ');
    return `<li ${isCurrent ? 'aria-current="step"' : ''} class="${cls}"><span>0${i + 1}</span>${s}${isDone ? '<b aria-hidden="true">✓</b>' : ''}</li>`;
  }).join('');

  return `<section class="quote-page"><div class="quote-heading"><button class="back" data-page="home">← Nos solutions</button>${eyebrow('DÉFINIR VOTRE BESOIN')}<h1>Une solution juste.<br><em>Commençons par vous.</em></h1><p>Votre application est le point de départ.<br>Préparons un échange avec Maturat Mesure.</p></div><div class="quote-layout"><aside class="quote-aside"><ol class="form-progress">${progressItems}</ol><div class="side-summary"><span class="mono">VOTRE APPLICATION</span><div id="live-summary">${summary(true)}</div></div><p class="privacy-note">Mode démonstration. Vos saisies restent dans cette page jusqu'à son rechargement. Aucun envoi réel.</p></aside><form class="form-card">${fields()}</form></div></section>`;
}
