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
      text: 'Plutôt qu’un référencement large, nous privilégions un fournisseur par famille de mesure. Cela garantit une vraie maîtrise technique de ce que nous vendons.',
    },
    {
      title: 'Un interlocuteur unique',
      text: 'Du premier échange à la mise en service, la même personne suit votre dossier. Pas de transfert de service, pas de reprise de contexte.',
    },
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
