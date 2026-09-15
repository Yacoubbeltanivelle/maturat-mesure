/* Contenu éditorial : entreprise, secteurs desservis et questions fréquentes.
 *
 * Ces textes sont PROVISOIRES et écrits pour la maquette. Ils devront être
 * relus et validés par Maturat avant toute publication.
 *
 * Les secteurs sont réels : ce sont les domaines cités par le client. En
 * revanche aucun nom de client n'est mentionné : citer une entreprise comme
 * référence demande son autorisation écrite. */

export const SECTORS = [
  { code: '01', name: 'Pétrochimie', text: 'Raffinage, stockage et transfert de produits pétroliers.' },
  { code: '02', name: 'Chimie', text: 'Procédés de synthèse, dosage et fluides agressifs.' },
  { code: '03', name: 'Pharmacie', text: 'Production sous contrainte de traçabilité et de propreté.' },
  { code: '04', name: 'Agroalimentaire', text: 'Lignes de production, utilités et nettoyage en place.' },
  { code: '05', name: 'Nucléaire', text: 'Environnements exigeants, documentation et suivi renforcés.' },
  { code: '06', name: 'Sidérurgie', text: 'Hautes températures, poussières et fonctionnement continu.' },
  { code: '07', name: 'Marine', text: 'Équipements embarqués et contraintes de corrosion.' },
  { code: '08', name: 'Aéronautique', text: 'Bancs d’essai, air comprimé et fluides de test.' },
];

export const COMPANY = {
  intro:
    'Maturat Mesure accompagne les industriels dans le choix, la fourniture et la mise en œuvre de leurs instruments de mesure et de contrôle. Notre métier : traduire une contrainte de procédé en une solution qui tient dans la durée.',
  approach: [
    {
      title: 'Comprendre l’application avant le produit',
      text: 'Le fluide, la plage utile, le raccordement et l’environnement conditionnent le choix. Nous partons de votre installation, pas d’un catalogue.',
    },
    {
      title: 'Une sélection resserrée de fournisseurs',
      text: 'Plutôt qu’un référencement généraliste, nous privilégions des fabricants ciblés selon les familles et les technologies. L’objectif : mieux connaître les solutions proposées et les confronter aux contraintes de votre application.',
    },
    {
      title: 'Un interlocuteur unique',
      text: 'Du premier échange au chiffrage et aux échanges techniques, vous gardez un même fil de discussion, sans avoir à reprendre votre contexte à chaque étape.',
    },
  ],
};

/* Méthode de sélection présentée sur l'accueil.
 *
 * Description d'une démarche de travail, rien de plus : aucun délai, aucun
 * engagement commercial, aucune certification ni expertise non démontrée.
 * Les principes de mesure cités en étape 02 sont ceux du catalogue.
 *
 * `title` contient du balisage, comme SITE.heading : il est injecté tel quel. */
export const METHOD = {
  eyebrow: 'EXPERTISE / MÉTHODE',
  title: 'De votre besoin<br><em>à la bonne mesure.</em>',
  steps: [
    {
      index: '01',
      kicker: 'APPLICATION',
      title: 'Comprendre l’application',
      text: 'Les paramètres du point de mesure, relevés avec vous avant toute recommandation.',
      criteria: ['Fluide', 'Température', 'Pression', 'Plage de mesure', 'Environnement', 'Raccordement'],
    },
    {
      index: '02',
      kicker: 'PRINCIPE',
      title: 'Sélectionner le principe adapté',
      text: 'Radar ou hydrostatique, électromagnétique ou ultrasons : chaque principe a ses conditions d’emploi. Nous les comparons au regard de votre installation.',
    },
    {
      index: '03',
      kicker: 'SOLUTION',
      title: 'Définir la solution',
      text: 'Une gamme et sa configuration, la documentation associée, puis une demande de chiffrage prête à être transmise.',
    },
  ],
  cta: { label: 'Définir mon besoin', href: '#/quote' },
};

export const HOME_SUPPLIERS = {
  title: 'Des fabricants,',
  emphasis: 'des solutions à explorer.',
  intro: 'Retrouvez les fournisseurs du catalogue et les produits associés à chacun. Maturat vous accompagne ensuite pour choisir la technologie adaptée à votre installation.',
  steps: [
    { title: 'Une technologie adaptée', text: 'Le fluide, la plage de mesure et les conditions du procédé orientent le choix du principe de mesure.' },
    { title: 'Une gamme ciblée', text: 'Les solutions des fabricants sont comparées selon les caractéristiques utiles à votre application.' },
    { title: 'Une configuration précise', text: 'Raccordement, matériaux et signal de sortie sont précisés pour préparer le chiffrage.' },
  ],
};

export const FAQ = [
  {
    q: 'Comment choisir le bon instrument pour mon application ?',
    a: 'Le choix dépend de quatre éléments : la nature du fluide, la plage de mesure utile, le mode de raccordement disponible et les contraintes de l’environnement. Décrivez-nous votre application dans le formulaire de demande et nous vous orientons vers les solutions adaptées.',
  },
  {
    q: 'Proposez-vous un accompagnement technique ?',
    a: 'Oui. L’analyse du besoin, le choix de la technologie et la vérification de la compatibilité avec votre installation font partie de notre travail, avant même la commande.',
  },
  {
    q: 'Puis-je obtenir une documentation technique ?',
    a: 'Les notices, fiches techniques et déclarations sont fournies avec chaque équipement. Pour une consultation préalable, précisez la référence concernée dans votre demande.',
  },
  {
    q: 'Intervenez-vous sur site ?',
    a: 'Selon la nature de l’équipement et de l’installation, un accompagnement à la mise en service peut être organisé. Ce point se discute au moment du chiffrage.',
  },
  {
    q: 'Comment obtenir un chiffrage ?',
    a: 'Le formulaire « Votre besoin » permet de décrire votre application en quelques étapes. Vous pouvez aussi partir directement d’une fiche du catalogue : le produit et sa famille sont alors repris automatiquement.',
  },
  {
    q: 'Quels sont les délais ?',
    a: 'Ils dépendent de la disponibilité chez le fabricant et de la configuration retenue. Le délai applicable est indiqué dans la réponse à votre demande.',
  },
];
