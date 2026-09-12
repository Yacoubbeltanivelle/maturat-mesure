import { state, catalog } from '../state.js';
import { escapeHTML } from '../lib/dom.js';
import { productBySlug, familyById, supplierById } from '../data/queries.js';
import { hashForFamily } from '../lib/route.js';
import { eyebrow } from '../ui/eyebrow.js';
import { familyMark } from '../ui/family-mark.js';
import { primary } from '../ui/button.js';
import { breadcrumb } from '../components/breadcrumb.js';
import { notFound } from './not-found.js';

/** Nom de la fiche courante, pour le titre du document. */
export function productTitle() {
  return productBySlug(catalog, state.slug)?.name || 'Fiche introuvable';
}

export function product() {
  const entry = productBySlug(catalog, state.slug);
  if (!entry) return notFound();

  const family = familyById(catalog, entry.familyId);
  const supplier = supplierById(catalog, entry.supplierId);

  return `<div class="product-page">
    ${breadcrumb([
      { label: 'Accueil', href: '#/home' },
      { label: 'Produits', href: '#/products' },
      ...(family ? [{ label: family.name, href: hashForFamily(family.slug) }] : []),
      { label: entry.name },
    ])}

    <section class="product-hero" aria-labelledby="product-title">
      <div class="product-hero-copy">
        ${eyebrow(`RÉFÉRENCE ${escapeHTML(entry.reference)}`)}
        <h1 id="product-title">${escapeHTML(entry.name)}</h1>
        <p class="product-summary">${escapeHTML(entry.summary)}</p>
        <dl class="product-identity">
          <div><dt>Famille</dt><dd>${family ? `<a href="${hashForFamily(family.slug)}">${escapeHTML(family.name)}</a>` : 'Non rattachée'}</dd></div>
          <div><dt>Fournisseur</dt><dd>${escapeHTML(supplier?.name ?? 'Non renseigné')} <span class="product-fiction">fictif</span></dd></div>
          <div><dt>Référence</dt><dd class="mono">${escapeHTML(entry.reference)}</dd></div>
        </dl>
      </div>
      <div class="product-visual">
        ${familyMark(family?.code, 'family-mark-large')}
        <span class="mono">${escapeHTML(family?.code ?? '')} / ${escapeHTML(entry.reference)}</span>
        <span class="product-visual-note">Repère graphique de famille.<br>Aucune photographie : cette fiche est fictive.</span>
      </div>
    </section>

    <p class="product-notice" role="note">Fiche de démonstration. Le nom, la référence, le fournisseur et les caractéristiques ci-dessous sont inventés pour la maquette. Ils ne décrivent aucun produit commercialisé et n’engagent aucun fabricant.</p>

    <section class="product-body">
      <section class="product-uses" aria-labelledby="product-uses-title">
        <h2 id="product-uses-title">Usages possibles</h2>
        <ul class="family-uses-list">${entry.uses.map((u) => `<li><span class="mono" aria-hidden="true">—</span>${escapeHTML(u)}</li>`).join('')}</ul>
      </section>

      <section class="product-specs" aria-labelledby="product-specs-title">
        <h2 id="product-specs-title">Caractéristiques de démonstration</h2>
        <dl class="spec-list">${entry.specs.map((s) => `<div><dt>${escapeHTML(s.label)}</dt><dd>${escapeHTML(s.value)}</dd></div>`).join('')}</dl>
        <p class="small-note">Valeurs fictives, fournies à titre d’exemple. Aucune performance n’est garantie et aucun document technique n’accompagne cette fiche.</p>
      </section>
    </section>

    <section class="product-actions" aria-label="Poursuivre">
      ${primary('Préparer une demande sur cette fiche', `data-need-product="${escapeHTML(entry.id)}"`)}
      <div class="product-actions-links">
        ${family ? `<a class="text-button" href="${hashForFamily(family.slug)}">Retour à ${escapeHTML(family.name)} <span aria-hidden="true">↗</span></a>` : ''}
        <a class="text-button" href="#/products">Revenir au catalogue <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  </div>`;
}
