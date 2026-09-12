# Reprise

## Retour client — dernière correction

L'accueil commence par les quatre familles de mesure à parts égales sur le fond bleu
animé. Dropout reste accessible dans la navigation et dans sa section dédiée après
l'instrumentation. Les visuels niveau et débit sont remplacés partout par Houdec
Innovation type 810 et Fuji Electric S-Flow, avec attribution fabricant (voir ASSETS.md).
Les coordonnées de la signature client ne sont pas reprises.

Le catalogue local enrichi a été conservé : sept familles et quinze fiches fictives,
recherche, filtres et contexte produit dans la demande. Build et 12 tests automatisés
réussis ; les 22 pages famille/fiche, le chargement des images, la recherche et son état
vide, le formulaire jusqu'à confirmation et le reset bfcache simulé ont été vérifiés
dans Chromium. Aucun débordement horizontal sur ces pages à 390 px.

## Ce qui vient d'être fait — lot « migration Vite »

La maquette statique est devenue un projet Vite en modules, sans changement de design.

- `dist/` n'est plus une source : c'est la sortie de `npm run build`, et il est
  désormais dans `.gitignore`.
- L'ancien `app.js` de 29 Ko est découpé en composants sous `src/`.
- Le bandeau du laboratoire de design a été retiré : barre sombre du haut, sélecteur
  de directions A à E, carnet « Direction & crédits », mention « Exploration de design ».
  Seule Atmospheric Precision est accessible ; des styles historiques restent présents.
- Les crédits photo restent obligatoires (licences Creative Commons) : ils sont
  désormais dans la fiche « Crédits visuels », ouverte depuis le pied de page.
- Le réglage « Mouvement » a suivi, du bandeau vers le pied de page.
- Les anciennes adresses `#E/home` fonctionnent toujours, comme `#/home`.
- Correction au passage : chaque changement d'ancre ajoutait un écouteur
  `prefers-reduced-motion` qui n'était jamais retiré. Il n'y en a plus qu'un.

## Finalisation de la migration

- Le workflow GitHub Pages prépare Node 22, exécute `npm ci` puis `npm run build`
  avant de publier `dist/`.
- `dist/` est retiré du suivi Git ; les ressources sources sont dans `public/`
  et `package-lock.json` accompagne les sources Vite.
- Au retour bfcache (`pageshow` avec `persisted`), le brouillon, les sélections et
  les étapes sont réinitialisés. La route courante est conservée, les crédits
  sont fermés et l'affichage est reconstruit. Aucun reset au changement d'onglet.
- Le fichier `.claude/launch.json`, propre au PC, reste hors du dépôt.

Avant une publication : vérifier `npm ci`, `npm run build`, les parcours et le reset,
puis contrôler le déploiement GitHub Actions après le push.

Vérifications locales du 12 septembre 2026 : installation et build réussis ; reset
complet de l'état testé ; parcours du formulaire jusqu'à la confirmation et bouton
« Recommencer » vérifiés dans Chromium. L'événement `pageshow` avec `persisted: true`
a été simulé dans le navigateur : brouillon effacé, première étape restaurée,
route conservée, crédits fermés et halo nettoyé. La navigation entre pages et les
événements de visibilité/focus conservent les saisies ; le rechargement les efface.
Une restauration réelle du cache navigateur n'a pas été testée. Le déploiement
GitHub Actions reste à vérifier après publication.

## Lot « catalogue public » — pages par famille et fiches produits

La page Produits est devenue un vrai catalogue.

- `#/products` liste les sept familles, puis une zone « toutes les fiches » avec
  recherche textuelle, filtre par famille, filtre par fournisseur, compteur, état
  sans résultat et effacement des filtres. Tout se met à jour dans la page : pas de
  rechargement, pas d'appel réseau, aucune dépendance ajoutée.
- `#/families/<slug>` : nom, introduction, usages principaux, fiches rattachées,
  retour au catalogue et accès à la demande préremplie.
- `#/products/<slug>` : fil d'Ariane, nom, famille, fournisseur, visuel, description,
  usages, caractéristiques, bouton de demande et retour vers la famille.
- Une famille, une fiche ou une adresse inconnue affiche un état introuvable propre.
  `#E/home`, `#E/dropout` et `#E/quote` fonctionnent toujours ; les préfixes `#A/` à
  `#D/` du laboratoire sont acceptés de la même façon.
- Depuis l'accueil, les pages de famille sont accessibles par l'inspecteur des quatre
  cartes et par le lien « Voir tout le catalogue ». Les cartes restent des boutons :
  aucun lien n'est imbriqué à l'intérieur, et l'inspecteur fonctionne comme avant.
- Depuis une fiche, la demande conserve le produit et sa famille. Le texte libre du
  visiteur n'est jamais écrasé. Changer de fiche remplace le contexte ; changer de
  famille dans le formulaire retire une association devenue incohérente.
- Dropout garde sa place à part : page dédiée, section propre sur le catalogue,
  et aucune caractéristique inventée.

### Données

`src/data/catalog.js` décrit sept familles, cinq fournisseurs et quinze fiches, avec
identifiants stables, slugs et relations. `createCatalog()` en renvoie une copie profonde ;
`src/state.js` en garde la copie vivante que l'administration simulée modifiera plus tard
dans le même onglet, et `resetSimulation()` la remplace par une copie propre.

Les familles et Dropout sont réels. Les quinze fiches, leurs références, leurs
fournisseurs et leurs caractéristiques sont **inventés**, et chaque page le dit. Aucune
certification, performance garantie, disponibilité, tarif ni document téléchargeable.
Les fiches n'affichent pas de photographie : un repère au trait, propre à chaque famille,
évite d'attribuer un visuel réel à une référence fictive.

### Vérifications du 12 septembre 2026

`npm run build` réussi. `npm test` : 12 tests Node sur le routage, les relations entre
données, la recherche et la remise à zéro — tous au vert.

Dans Chromium piloté, sur le résultat compilé : 118 contrôles au vert, aucune erreur
JavaScript, aucune requête en échec, aucune image cassée. Couvrent notamment l'accueil et
Dropout, l'accès au catalogue depuis la navigation, la recherche et les filtres seuls puis
combinés, l'effacement et l'état sans résultat, l'ouverture des sept familles et des quinze
fiches, les liens directs, le rechargement, l'historique, les routes inconnues, la demande
préremplie depuis une fiche et sa présence dans le récapitulatif, la demande générale sans
produit, le changement de produit, la conservation des saisies pendant la navigation, la
remise à zéro par « Recommencer » et par rechargement, la navigation au clavier, le focus
visible, et l'absence de débordement horizontal à 390 et 320 px.

Limites de ces vérifications :

- `pageshow` avec `persisted: true` a été **simulé** : brouillon, contexte produit et
  étapes remis à zéro, route conservée. Une **restauration réelle du bfcache n'a pas pu
  être reproduite** : le navigateur piloté recharge le document au lieu de le restaurer,
  même avec le bfcache forcé. Ce point reste à vérifier à la main.
- Lors d'un retour arrière qui recharge le document, Chromium réinjecte lui-même le texte
  précédemment saisi dans le champ « application ». L'état en mémoire est bien remis à
  zéro — le contexte produit disparaît — mais le texte reste affiché. Comportement propre
  au navigateur, antérieur à ce lot ; à trancher si la remise à zéro doit aussi être
  visible dans ce cas.
- Le déploiement GitHub Actions reste à vérifier après publication.

## Ensuite, par lots validés

1. Bloc « produit du moment » sur l'accueil, modifiable depuis l'administration.
2. Administration simulée, qui écrira dans le catalogue de `src/state.js`.

## Points encore ouverts

- Le titre de page et la description sont désormais ceux du client
  (« Maturat Mesure — Instrumentation industrielle ») et non plus ceux du laboratoire.
- Les coordonnées restent fictives, centralisées dans `src/data/site.js` :
  contact@example.com, 00 00 00 00 00, 1 rue de la Démonstration / Ville exemple.
  Le téléphone n'est pas cliquable.
