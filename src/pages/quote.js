import { state } from '../state.js';
import { eyebrow } from '../ui/eyebrow.js';
import { summary, fields } from '../components/quote-form.js';

/* Page « definir mon besoin ». */
export function quote(){
  const step = state.step;
  return `<section class="quote-page"><div class="quote-heading"><button class="back" data-page="home">← Nos solutions</button>${eyebrow('DÉFINIR VOTRE BESOIN')}<h1>Une solution juste.<br><em>Commençons par vous.</em></h1><p>Votre application est le point de départ.<br>Préparons un échange avec Maturat Mesure.</p></div><div class="quote-layout"><aside class="quote-aside"><ol class="form-progress">${['Besoin','Contact','Résumé'].map((s,i)=>`<li ${step===i?'aria-current="step"':''} class="${step>=i?'visited':''}"><span>0${i+1}</span>${s}${step>i?'<b aria-hidden="true">✓</b>':''}</li>`).join('')}</ol><div class="side-summary"><span class="mono">VOTRE APPLICATION</span><div id="live-summary">${summary(true)}</div></div><p class="privacy-note">Mode démonstration. Vos saisies restent dans cette page jusqu’à son rechargement. Aucun envoi réel.</p></aside><form class="form-card">${fields()}</form></div></section>`}
