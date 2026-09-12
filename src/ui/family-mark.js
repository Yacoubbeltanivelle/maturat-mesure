/* Repères graphiques des familles.
 *
 * Les fiches de démonstration sont fictives : leur associer une photographie
 * d'un produit réel serait trompeur. Chaque famille reçoit donc un dessin
 * abstrait au trait, original, qui évoque le principe sans figurer un appareil.
 * L'accent orange reprend la couleur de la marque. */

const MARKS = {
  '01': '<path d="M14 12h36v40H14z"/><path d="M14 34c6-4 12-4 18 0s12 4 18 0v18H14z" class="mark-accent"/>',
  '02': '<rect x="26" y="8" width="12" height="34" rx="6"/><circle cx="32" cy="48" r="8" class="mark-accent"/><path d="M42 16h8M42 24h8M42 32h8"/>',
  '03': '<circle cx="32" cy="32" r="22"/><path d="M32 32 45 20" class="mark-accent"/><path d="M32 10v5M54 32h-5M32 54v-5M10 32h5"/>',
  '04': '<path d="M8 20h48M8 44h48"/><path d="m24 26 8 6-8 6M38 26l8 6-8 6" class="mark-accent"/>',
  '05': '<path d="M32 32 14 20v24zM32 32l18-12v24z"/><path d="M32 32V14M24 14h16" class="mark-accent"/>',
  '06': '<path d="M6 32h10M48 32h10"/><path d="M16 32c4-16 8-16 12 0s8 16 12 0 8-16 8 0" class="mark-accent"/>',
  '07': '<path d="M32 8 52 20v24L32 56 12 44V20z"/><circle cx="32" cy="28" r="4" class="mark-accent"/><circle cx="24" cy="40" r="3"/><circle cx="40" cy="40" r="3"/>',
};

/** Dessin décoratif d'une famille : purement illustratif, donc masqué aux lecteurs d'écran. */
export const familyMark = (code, cls = '') =>
  `<svg class="family-mark ${cls}" viewBox="0 0 64 64" aria-hidden="true" focusable="false">${MARKS[code] || MARKS['06']}</svg>`;
