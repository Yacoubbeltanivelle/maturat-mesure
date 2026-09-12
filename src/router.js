import { state } from './state.js';

/* Routage par ancre. Les anciennes adresses du laboratoire de design (#E/home)
 * restent valides et pointent vers les memes pages. */
export const ROUTES = ['home', 'dropout', 'quote'];

export function readRoute() {
  const raw = location.hash.slice(1).replace(/^E\//, '').replace(/^\//, '');
  const page = raw.split('/')[0];
  state.page = ROUTES.includes(page) ? page : 'home';
}

export function hashFor(page) {
  return `#/${page}`;
}
