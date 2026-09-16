import { state, draft, catalog } from '../state.js';
import { escapeHTML } from '../lib/dom.js';
import { productContext } from '../data/queries.js';
import { productFacets } from '../data/catalog-facets.js';
import { hashForProduct } from '../lib/route.js';
import { primary } from '../ui/button.js';
import { getQuestionsForFamily, DEFAULT_QUESTIONS } from '../data/quote-questions.js';

/* Parcours « Définir mon besoin » — quatre étapes, aucune donnée transmise. */

/* ── Familles disponibles ─────────────────────────────────────────── */

function familyChoices() {
  const families = [...catalog.families.map((f) => f.name), 'Dropout — air comprimé', 'Autre / à préciser'];
  return families.map((v) => {
    const checked = draft.family === v ? 'checked' : '';
    return `<label class="family-radio"><input type="radio" name="family" value="${escapeHTML(v)}" ${checked} required><span>${escapeHTML(v)}</span></label>`;
  }).join('');
}

/* ── Fiche retenue ────────────────────────────────────────────────── */

export const selectedProduct = () => draft.product ? productContext(catalog, draft.product) : null;

export function productContextBlock() {
  const picked = selectedProduct();
  if (!picked) {
    return `<p class="quote-product-empty small-note">Aucune fiche sélectionnée — cette demande reste générale. Vous pouvez aussi partir d'une <a href="#/products">fiche du catalogue</a>.</p>`;
  }
  const { product, family } = picked;
  const { technology: principle } = productFacets(product);
  return `<div class="quote-product"><span class="mono">VOUS PARTEZ DE CETTE FICHE</span><p class="quote-product-name">${escapeHTML(product.name)}</p><dl class="product-mini"><div><dt>Famille</dt><dd>${escapeHTML(family?.name ?? '—')}</dd></div>${principle ? `<div><dt>Principe</dt><dd>${escapeHTML(principle)}</dd></div>` : ''}<div><dt>Référence</dt><dd class="mono-val">${escapeHTML(product.reference)}</dd></div></dl><div class="quote-product-actions">${product.published !== false ? `<a href="${hashForProduct(product.slug)}" class="text-button">Revoir la fiche <span aria-hidden="true">↗</span></a>` : ''}<button type="button" class="quote-product-clear" data-clear-product>Retirer cette fiche</button></div></div>`;
}

/* ── Rendu d'une question adaptative ─────────────────────────────── */

/* Une case « je ne sais pas » peut couvrir plusieurs champs (ex. Dropout :
 * pression + débit partagent la même case) : `skipKey` permet de les lier. */
const skipKeyFor = (q) => q.skipKey || `${q.name}_skip`;

function renderQuestion(q) {
  const answers = draft.answers;
  const val = String(answers[q.name] ?? '');
  const skipKey = skipKeyFor(q);
  const isSkipped = Boolean(answers[skipKey]);
  const optLabel = q.optional ? ` <span>(facultatif)</span>` : '';

  if (q.type === 'radio') {
    const opts = q.options.map((opt) => {
      const checked = val === opt ? 'checked' : '';
      const safeId = `qr_${q.name}_${opt.replace(/\W+/g, '_')}`;
      return `<label class="radio-choice"><input data-answer type="radio" name="${q.name}" id="${safeId}" value="${escapeHTML(opt)}" ${checked}><span>${escapeHTML(opt)}</span></label>`;
    }).join('');
    return `<fieldset class="question-group"><legend class="q-label">${escapeHTML(q.label)}</legend><div class="radio-options">${opts}</div></fieldset>`;
  }

  if (q.type === 'number') {
    const disAttr = isSkipped ? 'disabled' : '';
    const skipAttr = isSkipped ? 'checked' : '';
    const unknownHtml = q.unknown
      ? `<label class="q-skip"><input data-answer type="checkbox" name="${skipKey}" ${skipAttr}>${escapeHTML(q.unknown)}</label>`
      : '';
    return `<div class="question-group"><label class="q-label" for="q_${q.name}">${escapeHTML(q.label)}${optLabel}</label><div class="unit-input"><input data-answer data-skip-key="${skipKey}" type="number" id="q_${q.name}" name="${q.name}" value="${escapeHTML(String(answers[q.name] ?? ''))}" min="0" step="any" inputmode="decimal" placeholder="—" ${disAttr}><span>${escapeHTML(q.unit)}</span></div>${unknownHtml}</div>`;
  }

  if (q.type === 'text') {
    return `<div class="question-group"><label class="q-label" for="q_${q.name}">${escapeHTML(q.label)}${optLabel}</label><input data-answer type="text" id="q_${q.name}" name="${q.name}" value="${escapeHTML(val)}" maxlength="200" placeholder=""></div>`;
  }

  if (q.type === 'textarea') {
    return `<div class="question-group"><label class="q-label" for="q_${q.name}">${escapeHTML(q.label)}${optLabel}</label><textarea data-answer id="q_${q.name}" name="${q.name}" maxlength="1000">${escapeHTML(val)}</textarea></div>`;
  }

  return '';
}

function applicationQuestions() {
  const questions = getQuestionsForFamily(draft.family);
  const isOther = questions === DEFAULT_QUESTIONS;
  const otherNote = isOther
    ? `<p class="questions-other-note">Les caractéristiques de votre besoin peuvent être définies avec Maturat lors de l'échange.</p>`
    : '';
  return otherNote + questions.map(renderQuestion).join('');
}

/* ── Résumé ──────────────────────────────────────────────────────── */

export function summary(compact = false) {
  const picked = selectedProduct();
  const questions = getQuestionsForFamily(draft.family);
  const answers = draft.answers;

  const rows = [];

  rows.push(['Besoin', draft.family]);
  if (picked) rows.push(['Fiche', `${picked.product.name} (${picked.product.reference})`]);
  if (draft.application) rows.push(['Application', draft.application]);

  if (!compact) {
    questions.forEach((q) => {
      if (q.type === 'radio') {
        const v = answers[q.name];
        if (v) rows.push([q.label, v]);
      } else if (q.type === 'number') {
        if (answers[skipKeyFor(q)]) {
          rows.push([q.label, q.skipKey === 'values_skip' ? 'À définir avec Maturat' : q.unknown || 'À définir avec Maturat']);
        } else if (answers[q.name] !== undefined && answers[q.name] !== '') {
          rows.push([q.label, `${answers[q.name]} ${q.unit}`]);
        }
      } else if ((q.type === 'text' || q.type === 'textarea') && answers[q.name]) {
        rows.push([q.label, answers[q.name]]);
      }
    });
    rows.push(['Contact', draft.name]);
    if (draft.company) rows.push(['Entreprise', draft.company]);
    if (draft.email) rows.push(['E-mail', draft.email]);
  } else {
    // Résumé compact sidebar : une réponse clé si disponible, avec son vrai label.
    const goalQuestion = questions.find((q) => q.name === 'goal');
    if (goalQuestion && answers.goal) rows.push([goalQuestion.label, answers.goal]);
  }

  return `<dl class="summary">${rows.filter(([, v]) => v).map(([k, v]) => `<div><dt>${escapeHTML(k)}</dt><dd>${escapeHTML(v)}</dd></div>`).join('')}</dl>`;
}

/* ── Champs par étape ─────────────────────────────────────────────── */

export function fields() {
  const done = state.done;
  const step = state.step;
  const progress = Math.round(((step + 1) / 4) * 100);

  if (done) {
    return `<div class="form-success" role="status"><span class="success-mark" aria-hidden="true">✓</span><span class="mono">DÉMONSTRATION TERMINÉE</span><h2>Le premier pas<br>est fait.</h2><p>Votre fiche de cadrage est prête. Aucune demande n'a été réellement envoyée à Maturat.</p><p class="small-note">Recommencez pour explorer un autre besoin ou une autre famille.</p>${primary('Recommencer', 'type="button" data-reset')}</div>`;
  }

  const bar = `<div class="form-progress-bar" aria-hidden="true"><span style="width:${progress}%"></span></div>`;

  if (step === 0) {
    return `${bar}<span class="mono form-kicker">01 / 04 — BESOIN</span><h2 tabindex="-1">Que souhaitez-vous<br>mesurer, contrôler<br>ou protéger ?</h2><div id="quote-product-slot">${productContextBlock()}</div><p class="family-field-label">Famille de mesure <span>*</span></p><fieldset class="family-radio-group" aria-label="Famille de mesure">${familyChoices()}</fieldset><label for="application" style="margin-top:24px">Décrivez votre besoin en quelques mots <span>*</span></label><textarea id="application" name="application" required maxlength="1800" placeholder="Ex. : je souhaite mesurer le niveau d'une cuve de stockage…">${escapeHTML(draft.application)}</textarea><div class="form-actions"><span class="small-note">* Champ requis</span>${primary('Continuer', 'type="submit"')}</div>`;
  }

  if (step === 1) {
    return `${bar}<span class="mono form-kicker">02 / 04 — APPLICATION</span><h2 tabindex="-1">Décrivez votre<br>application.</h2><p class="form-intro">Quelques données de cadrage — répondez uniquement à ce que vous connaissez.</p>${applicationQuestions()}<div class="form-actions"><button type="button" data-prev>← Retour</button>${primary('Continuer', 'type="submit"')}</div>`;
  }

  if (step === 2) {
    return `${bar}<span class="mono form-kicker">03 / 04 — CONTACT</span><h2 tabindex="-1">Faisons connaissance.</h2><p class="form-intro">Utilisez des coordonnées fictives pour tester ce parcours.</p><label for="name">Prénom et nom <span>*</span></label><input id="name" name="name" required maxlength="120" autocomplete="name" value="${escapeHTML(draft.name)}" placeholder="Camille Martin"><label for="company">Entreprise <span>(facultatif)</span></label><input id="company" name="company" maxlength="150" autocomplete="organization" value="${escapeHTML(draft.company)}" placeholder="Votre entreprise"><label for="email">Adresse e-mail professionnelle <span>*</span></label><input id="email" name="email" type="email" required maxlength="200" autocomplete="email" value="${escapeHTML(draft.email)}" placeholder="camille@example.com"><div class="form-actions"><button type="button" data-prev>← Retour</button>${primary('Vérifier la demande', 'type="submit"')}</div>`;
  }

  /* step === 3 : résumé */
  const picked = selectedProduct();
  const questions = getQuestionsForFamily(draft.family);
  const answers = draft.answers;

  const answerRows = questions.flatMap((q) => {
    if (q.type === 'radio') {
      const v = answers[q.name];
      return v ? [[q.label, v]] : [];
    }
    if (q.type === 'number') {
      if (answers[skipKeyFor(q)]) return [[q.label, q.skipKey === 'values_skip' ? 'À définir avec Maturat' : q.unknown || 'À définir avec Maturat']];
      if (answers[q.name] !== undefined && answers[q.name] !== '') return [[q.label, `${answers[q.name]} ${q.unit}`]];
      return [];
    }
    if ((q.type === 'text' || q.type === 'textarea') && answers[q.name]) {
      return [[q.label, answers[q.name]]];
    }
    return [];
  });

  const renderRows = (rows) => rows.map(([k, v]) => `<div><dt>${escapeHTML(k)}</dt><dd>${escapeHTML(v)}</dd></div>`).join('');

  const ficheBlock = picked
    ? `<div class="summary-block"><span class="mono summary-block-title">FICHE SÉLECTIONNÉE</span><dl class="summary">${renderRows([[picked.product.name, picked.product.reference]])}</dl></div>`
    : '';

  const appBlock = draft.application
    ? `<div class="summary-block"><span class="mono summary-block-title">APPLICATION</span><dl class="summary"><div><dt>Besoin</dt><dd>${escapeHTML(draft.application)}</dd></div></dl></div>`
    : '';

  const infosBlock = answerRows.length
    ? `<div class="summary-block"><span class="mono summary-block-title">INFORMATIONS D'APPLICATION</span><dl class="summary">${renderRows(answerRows)}</dl></div>`
    : '';

  const contactDl = `<div class="summary-block"><span class="mono summary-block-title">CONTACT</span><dl class="summary"><div><dt>Nom</dt><dd>${escapeHTML(draft.name)}</dd></div>${draft.company ? `<div><dt>Entreprise</dt><dd>${escapeHTML(draft.company)}</dd></div>` : ''}<div><dt>E-mail</dt><dd>${escapeHTML(draft.email)}</dd></div></dl></div>`;

  return `${bar}<span class="mono form-kicker">04 / 04 — RÉSUMÉ</span><h2 tabindex="-1">Votre fiche de<br>demande technique.</h2><div class="summary-block"><span class="mono summary-block-title">BESOIN</span><dl class="summary"><div><dt>Famille</dt><dd>${escapeHTML(draft.family)}</dd></div></dl></div>${ficheBlock}${appBlock}${infosBlock}${contactDl}<p class="small-note" style="margin-top:16px">Cette démonstration ne transmet aucune information à Maturat.</p><div class="form-actions"><button type="button" data-prev>← Modifier</button>${primary('Simuler la demande', 'type="submit"')}</div>`;
}
