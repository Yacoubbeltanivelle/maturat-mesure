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
    a: 'Le choix dépend notamment du fluide, de la plage de mesure utile, du raccordement et de l’environnement. Pour commencer votre demande, décrivez simplement votre application et les contraintes que vous connaissez.',
    links: [{ label: 'Parcourir le catalogue', href: '#/products' }],
  },
  {
    q: 'Dois-je connaître la référence exacte avant de demander un chiffrage ?',
    a: 'Non. Vous pouvez partir de votre besoin, d’une famille de mesure ou d’une fiche produit déjà repérée. Une référence exacte n’est pas nécessaire pour commencer à définir votre besoin.',
  },
  {
    q: 'Comment préparer une demande de chiffrage ?',
    a: 'Décrivez votre application, la famille de mesure si vous la connaissez et vos principales contraintes. Ajoutez les informations techniques dont vous disposez : les caractéristiques encore inconnues peuvent rester à définir.',
    links: [{ label: 'Définir mon besoin', href: '#/quote' }],
  },
  {
    q: 'Quelles informations préparer pour une application Dropout ?',
    a: 'Indiquez, si vous les connaissez, le fluide, la pression, le débit et les contraintes d’installation. Ces informations aident à préciser votre besoin ; les valeurs inconnues peuvent rester à définir.',
    links: [{ label: 'Découvrir Dropout', href: '#/dropout' }],
  },
  {
    q: 'Puis-je partir directement d’une fiche du catalogue ?',
    a: 'Oui. Depuis une fiche du catalogue, vous pouvez rejoindre le parcours « Définir mon besoin ». Le produit et sa famille y sont repris pour vous permettre de poursuivre votre demande avec ce premier repère.',
    links: [{ label: 'Parcourir le catalogue', href: '#/products' }],
  },
  {
    q: 'Que faire si je ne connais pas encore toutes les caractéristiques ?',
    a: 'Commencez avec les informations disponibles. Le parcours permet de laisser certaines valeurs « À définir avec Maturat » : vous pouvez préparer votre demande sans connaître toutes les caractéristiques techniques.',
    links: [{ label: 'Définir mon besoin', href: '#/quote' }],
  },
];
