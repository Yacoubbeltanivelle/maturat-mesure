# Design System

## Direction

Un design system court mais réel, pensé pour un site industriel moderne:

- sérieux d'abord
- impact visuel ensuite
- clarté toujours

## Couleurs

- `--color-ink`
  - texte principal, titres, sections sombres
- `--color-blue`
  - repères techniques, libellés, accents de structure
- `--color-signal`
  - CTA, points focaux, indicateurs
- `--color-panel`
  - surfaces principales
- `--color-panel-soft`
  - fonds de sections alternées
- `--color-line`
  - bordures et séparations

## Typographies

- Display : `Space Grotesk`
  - titres forts, hero, sections majeures
- Texte : `IBM Plex Sans`
  - lecture éditoriale et interface
- Mono : `IBM Plex Mono`
  - repères techniques, labels courts, microdonnées

## Espacements

- Section verticales : `clamp(4.5rem, 6vw, 7.5rem)`
- Cards : `1.25rem` à `2rem`
- Gaps grille : `1rem` à `1.5rem`

## Rayons

- Grands panels : `2rem`
- Cards : `1.75rem`
- Chips : `999px`

## Ombres

- Très douces
- orientées profondeur d'interface
- jamais décoratives ou glossy

## Composants

### Boutons

- `primary`
  - orange signal
- `secondary`
  - blanc avec bordure technique
- `dark`
  - pour sections sombres

### Cards

- `panel`
  - surface principale, bord, ombre légère
- `panel-soft`
  - variante claire et technique
- `glass-card`
  - réservé au hero et aux couches de visualisation

### Tags

- usage navigation contextuelle, secteurs, applications
- uppercase léger
- jamais utilisés comme badges décoratifs gratuits

## Motion

- reveal au scroll
- menu mobile animé
- aucun effet long ou ostentatoire
- `prefers-reduced-motion` respecté globalement

## Iconographie

- Lucide, trait simple
- taille compacte
- placée dans une puce technique ou un panel
- pas d'illustrations iconographiques trop ludiques

## Fond et textures

- trame discrète
- gradients radiaux très légers
- lignes de champ et d'onde
- aucune photo stock dominante
