import { familyBySlug, productBySlug } from '../data/queries.js';

/* Analyse d'ancre, sans état ni DOM : testable tel quel.
 *
 * Adresses : #/home, #/dropout, #/quote, #/products,
 *            #/families/<slug>, #/products/<slug>.
 * Les anciennes adresses du laboratoire de design (#E/home et ses voisines A à D)
 * restent valides et pointent vers les mêmes pages. */

export const ROUTES = ['home', 'dropout', 'quote', 'products'];

const decode = (value) => {
  try { return decodeURIComponent(value); } catch { return value; }
};

export function parseRoute(hash, catalog) {
  const raw = String(hash ?? '').replace(/^#/, '').replace(/^[A-E]\//i, '').replace(/^\//, '');
  const [head = '', param = ''] = raw.split('/');
  const slug = decode(param);

  if (!head) return { page: 'home', slug: '' };

  if (head === 'families') {
    if (slug && familyBySlug(catalog, slug)) return { page: 'family', slug };
    return { page: 'notfound', slug };
  }

  if (head === 'products' && slug) {
    if (productBySlug(catalog, slug)) return { page: 'product', slug };
    return { page: 'notfound', slug };
  }

  if (ROUTES.includes(head)) return { page: head, slug: '' };

  return { page: 'notfound', slug: decode(raw) };
}

export const hashFor = (page) => `#/${page}`;
export const hashForFamily = (slug) => `#/families/${encodeURIComponent(slug)}`;
export const hashForProduct = (slug) => `#/products/${encodeURIComponent(slug)}`;
