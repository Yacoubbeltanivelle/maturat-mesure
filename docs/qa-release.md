# QA Release

## Checklist

- Navigation desktop et mobile cohérente
- Toutes les pages clés présentes
- Pattern dynamique des familles opérationnel
- Page EXPEL dédiée visible depuis home et solutions
- Coordonnées visibles sur home, contact et footer
- Metadata par page
- Robots et sitemap présents
- Build statique compatible GitHub Pages
- Responsive à vérifier sur desktop/tablette/mobile
- Contraste et focus visible à vérifier

## Vérifications prévues

- `npm run lint`
- `npm run build`
- Contrôle navigateur réel avec Playwright
- Vérification des routes :
  - `/`
  - `/solutions`
  - `/solutions/traitement-air-comprime`
  - `/solutions/instrumentation`
  - `/expel`
  - `/about`
  - `/contact`

## Gaps assumés

- Pas d'envoi serveur de formulaire
- Pas de tracking analytics configuré
- Pas de CMS
