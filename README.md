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
| `src/data/` | Contenu éditorial : familles de mesure, étapes Dropout, photos, coordonnées. |
| `src/ui/` | Éléments de base réutilisables : boutons, surtitre, images. |
| `src/components/` | Sections : en-tête, familles, Dropout, formulaire, pied de page, crédits. |
| `src/pages/` | Assemblage des trois pages : accueil, Dropout, votre besoin. |
| `src/effects/` | Mouvement du fond, apparition au scroll, curseur, progression Dropout. |
| `src/state.js` | État de la démonstration, uniquement en mémoire. |
| `src/router.js` | Routage par ancre, y compris les anciennes adresses `#E/...`. |
| `public/assets/` | Images, photographies et polices, copiées telles quelles. |

## Base à conserver

Hero avec Dropout détouré et fond bleu grainé animé ; section Dropout sur l'accueil ;
couleurs du logo ; titres H2 harmonisés ; pied de page complet.
Ne pas remplacer la direction artistique.

## État

Accueil, page Dropout et parcours « définir mon besoin » simulé. Aucun envoi de mail
réel, aucun back-office. Le catalogue complet, l'administration simulée et le bloc
« produit du moment » restent à produire. Les coordonnées affichées sont fictives.
Visuels provisoires, crédits dans `ASSETS.md` et dans la fiche « Crédits visuels »
du pied de page. `noindex` est une consigne d'indexation, pas une protection d'accès.

Le domaine maturat.fr et les emails Gandi ne sont pas modifiés par cette démonstration.
