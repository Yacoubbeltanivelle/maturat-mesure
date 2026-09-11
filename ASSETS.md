# Asset provenance — Atmospheric Precision

## Maturat identity

The original Maturat Mesure logo is rendered from the vector logo in the user-supplied MATURAT plaquette 2026 PDF. The selected palette is taken from its vector fills: blue #4395D1, orange #F7941D and graphite #231F20, with white and lighter/darker derivatives for surfaces and readable text.

## Illustrative photographs

The selected originals are copied without pixel edits or cropping. CSS uses proportional sizing, contain fitting and, on light surfaces, multiply blending. These photographs illustrate the layout and categories; they do not assert Maturat stock or manufacturer endorsement. The Reading Technologies filter was an earlier placeholder; it is no longer displayed after the supplied Dropout product replacement. Each image remains under its source CC BY-SA license. Attribution and license links are visible in the site's Direction & crédits dialog. The manometer has a nearby credit as requested by the photographer.

### Manomètre haute pression MAXIMATOR

- File: `dist/assets/photos/pressure-maximator.jpg` (3685 × 3685)
- Credit: Photo by CEphoto, Uwe Aranas — CC BY-SA 3.0
- Source: https://commons.wikimedia.org/wiki/File:MAXIMATOR-High-Pressure-Manometer-01a.jpg
- License: https://creativecommons.org/licenses/by-sa/3.0/
- Original: https://upload.wikimedia.org/wikipedia/commons/7/74/MAXIMATOR-High-Pressure-Manometer-01a.jpg
- Provenance: Studio photograph on white. Author requests credit in close relation to the image. Illustrative category imagery.

### Sondes de température à résistance de platine

- File: `dist/assets/photos/temperature-probes.jpg` (3867 × 3746)
- Credit: Marián Hubinský — CC BY-SA 4.0
- Source: https://commons.wikimedia.org/wiki/File:PRT_Probes.jpg
- License: https://creativecommons.org/licenses/by-sa/4.0/
- Original: https://upload.wikimedia.org/wikipedia/commons/8/82/PRT_Probes.jpg
- Provenance: Own-work photograph on white; metadata also declares CC-BY-SA. Illustrative category imagery.

### Débitmètre Coriolis OPTIMASS 7000

- File: `dist/assets/photos/flow-meter.jpg` (1561 × 1181)
- Credit: KROHNE — CC BY-SA 4.0
- Source: https://commons.wikimedia.org/wiki/File:OPTIMASS_7000.jpg
- License: https://creativecommons.org/licenses/by-sa/4.0/
- Original: https://upload.wikimedia.org/wikipedia/commons/6/63/OPTIMASS_7000.jpg
- Provenance: Source page declares own work by KROHNE and explicit CC BY-SA 4.0. Illustrative category imagery.

### Instrument de niveau à plongeur

- File: `dist/assets/photos/level-meter.jpg` (1905 × 4796)
- Credit: Alenka989 — CC BY-SA 4.0
- Source: https://commons.wikimedia.org/wiki/File:%D0%91%D1%83%D0%B9%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9_%D1%83%D1%80%D0%BE%D0%B2%D0%BD%D0%B5%D0%BC%D0%B5%D1%80.jpg
- License: https://creativecommons.org/licenses/by-sa/4.0/
- Original: https://upload.wikimedia.org/wikipedia/commons/8/81/%D0%91%D1%83%D0%B9%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9_%D1%83%D1%80%D0%BE%D0%B2%D0%BD%D0%B5%D0%BC%D0%B5%D1%80.jpg
- Provenance: Commons page explicitly declares own work and CC BY-SA 4.0. Image appears to be a KROHNE product render; upstream manufacturer authorization beyond the uploader's Commons declaration was not independently established. Illustrative category imagery.

### Filtre à air comprimé Reading Technologies

- File: `dist/assets/photos/air-filter.jpg` (1000 × 845)
- Credit: Jpgflynn — CC BY-SA 4.0
- Source: https://commons.wikimedia.org/wiki/File:Reading_Technologies_Compressed_air_filter.jpg
- License: https://creativecommons.org/licenses/by-sa/4.0/
- Original: https://upload.wikimedia.org/wikipedia/commons/c/ce/Reading_Technologies_Compressed_air_filter.jpg
- Provenance: Own-work photograph. Actual downloaded dimensions are 1000×845. RTI two-stage filter, not Dropout; label as illustrative generic compressed-air filtration imagery.

## Diagram and historical assets

The low-resolution PDF cutaway has been replaced by an original interactive SVG flow diagram. It represents a simplified process, not the construction of Dropout. Historical product PNGs from the supplied brochure remain in the repository but are not referenced by the current page templates.

## Fonts and references

Fonts were downloaded from Google Fonts. Copyright and licensing metadata are retained in the font files and in dist/assets/fonts/NOTICES.txt and OFL.txt. Reference websites and design intentions are recorded in dist/data.js. No reference-site imagery is republished.

## Hero background — sketch-led revision

`dist/assets/hero-blue-grain.png` (1774 × 887) is an original imagegen-generated abstract background: defocused Maturat blue, graphite, fine grain and restrained orange light. No identifiable products, text or reference screenshot are reproduced. The attached Orchid inspiration and the user's wireframe guided the composition. The hero background is retained when replacing the previous Reading Technologies placeholder with the supplied Dropout product. The new cutout is displayed with normal blending and proportional sizing, preserving its silver and blue colors.

## Supplied Dropout cutout

The replacement `dist/assets/dropout-cutout.png` is derived from the user-supplied `398bb6de-8c37-4678-b54f-215a8d2b860b.png`, an excerpt from the Maturat brochure. The requested edit isolates only the product and improves its clarity with imagegen. The hero, Dropout feature and product view share this asset. Adjacent brochure copy is excluded. This is an enhanced preview asset, not a newly photographed product or an engineering drawing. The site credits disclose the assisted enhancement. The technical flow diagram remains a separate, simplified explanation.

The user explicitly authorized conventional background removal after the imagegen outputs contained an opaque checkerboard. `scripts/prepare-dropout.py` traces an antialiased silhouette, removes a narrow contaminated edge fringe, crops only transparent margins, and preserves the enhanced product's interior pixels. The input is retained outside the public directory at `design-source/dropout-enhanced-opaque.png`. Final PNG: 455 × 1738, RGBA, verified transparent and opaque alpha values. The cutout was inspected against pale blue and graphite backgrounds.

## Hero motion

The existing generated blue-grain bitmap is preserved. A soft-light mesh layer uses the four exact centers, color stops and static-seed phases supplied by the user from 21st.dev Favorites / Bloom Field. Motion is continuous requestAnimationFrame time, without per-frame hashing or coordinate rounding. Bitmap translation and zoom modulation start at zero. The clock pauses outside the viewport or in hidden tabs; reduced-motion preferences and the site's movement control stop the loop. No reference-site images or code were fetched or copied beyond the snippet supplied by the user.

## Shared grain on colored surfaces

`dist/assets/surface-grain.svg` is a deterministic, seamless SVG noise texture (fixed seed, no animation). It is applied as a separate layer between colored surfaces and their content, including measurement cards, Dropout scenes, forms, navigation, controls and footer. It neither modifies product image pixels nor covers text; overlays ignore pointer events. The hero retains its original bitmap grain and Bloom Field motion.
