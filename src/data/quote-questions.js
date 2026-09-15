/* Questions adaptatives par famille — parcours « Définir mon besoin ».
 * Types : radio, text, number, textarea.
 * Les réponses servent au cadrage uniquement : aucune recommandation automatique,
 * aucun diagnostic, aucune sélection produit. */

export const QUOTE_QUESTIONS = {
  'Niveau': [
    {
      type: 'radio', name: 'goal', label: 'Objectif',
      options: ['Mesure continue', 'Détection de seuil', 'Je ne sais pas encore'],
    },
    {
      type: 'radio', name: 'environment', label: 'Environnement',
      options: ['Cuve / réservoir', 'Silo', 'Bac / puisard', 'Autre / à préciser'],
    },
    {
      type: 'number', name: 'value1', label: 'Plage approximative', unit: 'm',
      unknown: 'Je ne connais pas cette valeur',
    },
  ],
  'Température': [
    {
      type: 'radio', name: 'goal', label: 'Type de mesure',
      options: ['En ligne / procédé', 'Lecture locale', 'Autre / à définir'],
    },
    {
      type: 'number', name: 'value1', label: 'Température minimale', unit: '°C',
      unknown: 'À définir avec Maturat',
    },
    {
      type: 'number', name: 'value2', label: 'Température maximale', unit: '°C',
    },
  ],
  'Pression': [
    {
      type: 'radio', name: 'goal', label: 'Type de besoin',
      options: ['Mesure transmise', 'Lecture locale', 'Pression différentielle', 'À définir'],
    },
    {
      type: 'number', name: 'value1', label: 'Pression approximative', unit: 'bar',
      unknown: 'Je ne connais pas cette valeur',
    },
  ],
  'Débit': [
    {
      type: 'text', name: 'environment', label: 'Fluide',
    },
    {
      type: 'number', name: 'value1', label: 'Débit approximatif', unit: 'm³/h',
    },
    {
      type: 'radio', name: 'option', label: 'Intervention sur la tuyauterie',
      options: ['Possible', 'À éviter', 'À définir'],
    },
  ],
  'Contrôle mécanique des fluides': [
    {
      type: 'radio', name: 'goal', label: 'Type de besoin',
      options: ['Isoler un instrument', 'Raccorder un instrument', 'Préparer une intervention', 'Autre / à définir'],
    },
    {
      type: 'text', name: 'environment', label: 'Installation', optional: true,
    },
  ],
  'Produits complémentaires': [
    {
      type: 'radio', name: 'goal', label: 'Besoin',
      options: ['Traitement / isolation du signal', 'Mesure électrique / énergie', 'Contrôle ou calibration terrain', 'Autre / à définir'],
    },
    {
      type: 'text', name: 'environment', label: 'Signal ou grandeur concernée', optional: true,
    },
  ],
  'Analyse et environnement': [
    {
      type: 'radio', name: 'goal', label: 'Besoin',
      options: ['Analyse de gaz', 'Humidité', 'Conditionnement / prélèvement', 'Autre / à définir'],
    },
    {
      type: 'text', name: 'environment', label: 'Milieu / environnement', optional: true,
    },
  ],
  'Dropout — air comprimé': [
    {
      type: 'radio', name: 'goal', label: 'Besoin',
      options: [
        "Protection du réseau d'air comprimé",
        'Réduction des condensats',
        "Point d'installation à définir",
        'Autre / à préciser',
      ],
    },
    {
      type: 'number', name: 'value1', label: 'Pression', unit: 'bar', optional: true,
      skipKey: 'values_skip', unknown: 'Je ne connais pas encore ces valeurs',
    },
    {
      type: 'number', name: 'value2', label: 'Débit', unit: 'm³/h', optional: true,
      skipKey: 'values_skip',
    },
  ],
};

export const DEFAULT_QUESTIONS = [
  { type: 'textarea', name: 'environment', label: 'Contexte / application' },
];

export function getQuestionsForFamily(family) {
  return QUOTE_QUESTIONS[family] ?? DEFAULT_QUESTIONS;
}
