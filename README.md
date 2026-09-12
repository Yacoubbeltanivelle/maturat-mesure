# Maturat Mesure — Atmospheric Precision V0.2

Maquette de démonstration du site Maturat Mesure. La direction artistique
« Atmospheric Precision » est validée ; cette version la porte sur une base Vite
en modules, sans rien changer au rendu.

## Lancer en local

```
npm install
npm run dev
```

Vite ouvre la maquette sur `http://localhost:5173/maturat-mesure/`.
Pour vérifier le résultat compilé : `npm run build` puis `npm run preview`.

## Publication

GitHub Actions installe les dépendances, lance `npm run build` et publie `dist`
sur GitHub Pages à chaque mise à jour de `main`.
URL : https://yacoubbeltanivelle.github.io/maturat-mesure/

`dist/` n'est plus versionné : c'est désormais une sortie de compilation.

## Organisation des fichiers

| Dossier | Contenu |
| --- | --- |
| `index.html` | Coque de la page : en-tête, contenu, pied de page, fiche crédits. |
| `src/data/` | Contenu éditorial : familles de mesure, catalogue, étapes Dropout, photos, coordonnées. |
| `src/data/catalog.js` | Source du catalogue : familles, fournisseurs et fiches, et `createCatalog()`. |
| `src/data/queries.js` | Lectures du catalogue : recherche, filtres, relations. Fonctions pures. |
| `src/lib/route.js` | Analyse des adresses, sans état ni DOM : la partie testable du routage. |
| `src/ui/` | Éléments de base réutilisables : boutons, surtitre, images, repères de famille. |
| `src/components/` | Sections : en-tête, familles, Dropout, formulaire, filtres, fiches, fil d'Ariane. |
| `src/pages/` | Assemblage des pages : accueil, Dropout, votre besoin, catalogue, famille, fiche, introuvable. |
| `src/effects/` | Mouvement du fond, apparition au scroll, curseur, progression Dropout. |
| `src/state.js` | État de la démonstration et catalogue vivant, uniquement en mémoire. |
| `src/router.js` | Application de l'adresse à l'état, anciennes adresses `#E/...` comprises. |
| `tests/` | Tests Node sur le routage, les relations entre données et la remise à zéro. |
| `public/assets/` | Images, photographies et polices, copiées telles quelles. |

## Base à conserver

Hero centrée sur niveau, température, pression et débit, avec fond bleu grainé animé ;
section Dropout conservée plus bas sur l'accueil ;
couleurs du logo ; titres H2 harmonisés ; pied de page complet.
Ne pas remplacer la direction artistique.

## Adresses

| Adresse | Page |
| --- | --- |
| `#/home` | Accueil |
| `#/dropout` | Dropout |
| `#/quote` | Définir mon besoin |
| `#/products` | Catalogue : sept familles, recherche et fiches |
| `#/families/<slug>` | Une famille : introduction, usages, fiches rattachées |
| `#/products/<slug>` | Une fiche : identité, usages, caractéristiques de démonstration |

Les anciennes adresses `#E/home`, `#E/dropout` et `#E/quote` restent valides.
Une famille, une fiche ou une adresse inconnue affiche un état introuvable
avec un retour vers le catalogue et l'accueil.

## Données du catalogue

Tout est décrit dans `src/data/catalog.js` : sept familles (identifiant `fam-<code>`,
slug, nom court et nom long, introduction, usages), cinq fournisseurs et quinze fiches
(identifiant `prd-NNN`, slug, référence, `familyId`, `supplierId`, résumé, usages,
caractéristiques, `published`).

`createCatalog()` en renvoie une copie profonde et indépendante. `src/state.js` en tient
une copie vivante, partagée par le site et, plus tard, par l'administration simulée dans
le même onglet ; `resetSimulation()` la remplace par une copie propre. Les composants
lisent ce catalogue, ils n'en gardent pas de version en dur.

Les sept familles et Dropout sont réels. En revanche **les quinze fiches, leurs références,
leurs fournisseurs et leurs caractéristiques sont inventés** pour la démonstration : chaque
page le dit. Aucune certification, performance garantie, disponibilité, tarif ni document
téléchargeable n'est affirmé. Dropout n'est pas décrit comme une fiche fictive : il garde
sa page dédiée, accessible depuis le catalogue.

## État

Accueil, catalogue (`#/products`), pages par famille, fiches produits, page Dropout et
parcours « définir mon besoin » simulé. Le catalogue offre une recherche textuelle, un
filtre par famille, un filtre par fournisseur, un compteur, un état sans résultat et un
effacement des filtres — sans rechargement, sans appel réseau et sans dépendance ajoutée.
Depuis une fiche, la demande s'ouvre en conservant le produit et sa famille ; le produit
apparaît dans le contexte et dans le récapitulatif final. Une demande générale sans produit
reste possible. Aucun envoi de mail réel, aucun back-office. L'administration simulée et le
bloc « produit du moment » restent à produire. Les coordonnées affichées sont fictives.
Visuels provisoires, crédits dans `ASSETS.md` et dans la fiche « Crédits visuels »
du pied de page. `noindex` est une consigne d'indexation, pas une protection d'accès.

Le domaine maturat.fr et les emails Gandi ne sont pas modifiés par cette démonstration.

## Retour client — équilibre de l'accueil

L'ouverture présente les quatre familles de mesure, sans visuel Dropout dans la Hero.
Le fond bleu animé est conservé, ainsi que la section Dropout après l'instrumentation.
Les familles niveau et débit utilisent désormais les visuels fabricant Houdec type 810
et Fuji Electric S-Flow ; les anciens visuels concurrents ont été retirés de `public/`.
Les sources et attributions sont documentées dans `ASSETS.md` et dans les crédits visuels.
