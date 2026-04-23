# Spec verrouillée

## Objectif

Construire un site vitrine premium et conversion-first pour Maturat Mesure dans le dépôt existant, en conservant le déploiement GitHub Pages.

## Stack retenue

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion pour les apparitions et transitions utiles
- Pas de dépendance additionnelle lourde

## Structure du site

- `/`
  - hero clair
  - bande de preuves
  - grille des 8 familles
  - focus EXPEL
  - repères produits
  - pourquoi Maturat Mesure
  - contextes d'application
  - bloc contact
- `/solutions`
  - panorama des familles
  - pont entre usages et catégories
  - CTA EXPEL
- `/solutions/[slug]`
  - pattern dynamique réutilisable pour chaque famille
  - positionnement
  - capacités
  - repères produits
  - applications / secteurs
  - CTA contact
- `/expel`
  - page dédiée produit
  - caractéristiques
  - bénéfices
  - usages
  - secteurs
  - CTA
- `/about`
  - positionnement entreprise
  - faits publics
  - ancrage
  - rappel des familles
- `/contact`
  - coordonnées directes
  - formulaire de pré-remplissage email
- `/mentions-legales`

## Principes de contenu

- Français partout.
- Titres courts, sûrs, concrets.
- Aucune promesse non sourcée.
- Donner un cadre de lecture avant de donner du détail.
- Utiliser EXPEL comme preuve de différenciation, pas comme gadget marketing.

## Principes UI

- Minimalisme industriel premium.
- Fond clair, bleu technique, orange signal.
- Typographie display + texte + mono.
- Panels, grilles, lignes de mesure, légères textures de champ.
- Motion discrète et utile.
- Mobile-first.

## Règles de conversion

- Toujours proposer un CTA visible.
- Toujours afficher les coordonnées importantes.
- Réduire les frictions vers le contact.
- Faire ressortir la famille de solutions concernée rapidement.

## SEO / structure technique

- Metadata par page
- `robots.ts`
- `sitemap.ts`
- JSON-LD organization sur la home
- JSON-LD product sur EXPEL
- URLs statiques compatibles GitHub Pages

## Hors périmètre

- Backend de formulaire
- CMS
- Espace client
- Catalogue e-commerce
- Génération d'études de cas fictives
