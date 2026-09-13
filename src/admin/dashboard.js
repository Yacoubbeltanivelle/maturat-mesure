import { catalog } from '../state.js';
import { catalogCounts } from '../simulation/catalog-actions.js';
import { adminShell } from './admin-shell.js';

/* Tableau de bord : uniquement des repères calculés sur le catalogue vivant.
 * Aucune statistique de trafic, de chiffre d'affaires ni de demande n'est
 * inventée ici — ce qui n'est pas mesuré n'est pas affiché. */

const CARDS = [
  { key: 'total', label: 'fiches au catalogue' },
  { key: 'published', label: 'fiches publiées' },
  { key: 'hidden', label: 'fiches masquées' },
  { key: 'families', label: 'familles' },
  { key: 'suppliers', label: 'fournisseurs' },
];

export function adminDashboard() {
  const counts = catalogCounts(catalog);

  const cards = CARDS.map(({ key, label }) => `<li class="adm-metric">
    <span class="adm-metric-value">${counts[key]}</span>
    <span class="adm-metric-label">${label}</span>
  </li>`).join('');

  return adminShell({
    page: 'admin',
    title: 'Tableau de bord',
    intro: 'L’état du catalogue tel qu’il est servi au site public en ce moment.',
    body: `<section class="adm-card" aria-labelledby="adm-metrics-title">
        <h2 id="adm-metrics-title" class="adm-card-title">Catalogue</h2>
        <ul class="adm-metrics">${cards}</ul>
        <p class="adm-card-note">Ces nombres sont recalculés à chaque affichage à partir du
          catalogue en mémoire. Une fiche masquée reste comptée ici, mais n’apparaît plus
          sur le site.</p>
      </section>

      <section class="adm-card" aria-labelledby="adm-next-title">
        <h2 id="adm-next-title" class="adm-card-title">Gérer le catalogue</h2>
        <p class="adm-card-text">Modifier le nom, la référence, le résumé, la famille, le
          fournisseur ou la visibilité d’une fiche existante.</p>
        <a class="adm-button adm-button--primary" href="#/admin/catalog">Gérer le catalogue
          <span aria-hidden="true">↗</span></a>
      </section>`,
  });
}
