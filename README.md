# Maturat Mesure

Refonte complète d'un site Next.js statique pour **MATURAT MESURE**, entreprise française orientée mesure industrielle, traitement d'air comprimé et traitement du signal.

## Stack

- Next.js 16.2.4 App Router
- React 19.2.4
- TypeScript
- Tailwind CSS v4
- Framer Motion
- GitHub Pages via `next build` + `output: "export"`

## Lancer le projet

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:3000`.

## Build

```bash
npm run build
```

Le build statique est généré dans `out/`.

## Structure utile

```text
app/
  page.tsx                    Home
  solutions/page.tsx          Panorama des familles
  solutions/[slug]/page.tsx   Pattern dynamique pour les familles
  expel/page.tsx              Page produit dédiée
  about/page.tsx              Expertise / entreprise
  contact/page.tsx            Contact / devis
  mentions-legales/page.tsx   Mentions légales

components/site/              Composants de site réutilisables
components/ui/                Boutons et primitives UI
lib/data.ts                   Contenu, routes, configuration SEO
docs/                         Recherche, spec, design system, QA
```

## Contenu et cadrage

Les livrables de cadrage sont dans `docs/` :

- `docs/research-brief.md`
- `docs/spec-site.md`
- `docs/design-system.md`
- `docs/qa-release.md`

## Déploiement GitHub Pages

Le dépôt conserve le workflow GitHub Pages existant.

- `next.config.ts` garde `output: "export"`
- la base de prod reste `/maturat-mesure`
- le workflow `.github/workflows/deploy.yml` publie le dossier `out`

## Notes

- La page contact utilise un e-mail pré-rempli côté client pour rester compatible avec un site statique.
- Les contenus ont été réécrits en français avec priorité aux faits vérifiés et aux familles visibles dans les sources publiques.
