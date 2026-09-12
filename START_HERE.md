# Reprise

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

## Ensuite, par lots validés

1. Catalogue complet : pages par famille et fiches produits.
2. Bloc « produit du moment » sur l'accueil, modifiable depuis l'administration.
3. Administration simulée.

## Points encore ouverts

- Le titre de page et la description sont désormais ceux du client
  (« Maturat Mesure — Instrumentation industrielle ») et non plus ceux du laboratoire.
- Les coordonnées restent fictives, centralisées dans `src/data/site.js` :
  contact@example.com, 00 00 00 00 00, 1 rue de la Démonstration / Ville exemple.
  Le téléphone n'est pas cliquable.
