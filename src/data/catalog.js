import { FAMILIES } from './families.js';

/* Catalogue de démonstration.
 *
 * Les quatre familles de mesure reprennent families.js : un seul endroit décrit
 * leur code, leur photo et leur halo. Les trois autres familles sont décrites ici.
 *
 * Les fournisseurs et les références de ce fichier sont INVENTÉS pour la maquette.
 * Ce n'est pas le catalogue réel de Maturat : aucune certification, performance
 * garantie, disponibilité ni tarif n'y est affirmé. Dropout garde sa page dédiée
 * et n'est pas décrit comme une fiche de démonstration.
 */

/* Fournisseurs fictifs. Aucun fabricant réel n'est cité. */
const SUPPLIERS = [
  { id: 'sup-nordvex', slug: 'nordvex-instruments', name: 'Nordvex Instruments', note: 'Fournisseur fictif de démonstration' },
  { id: 'sup-calyra', slug: 'calyra-process', name: 'Calyra Process', note: 'Fournisseur fictif de démonstration' },
  { id: 'sup-ombrelin', slug: 'ombrelin-sensors', name: 'Ombrelin Sensors', note: 'Fournisseur fictif de démonstration' },
  { id: 'sup-vantek', slug: 'vantek-metrology', name: 'Vantek Metrology', note: 'Fournisseur fictif de démonstration' },
  { id: 'sup-ferralis', slug: 'ferralis-fluid', name: 'Ferralis Fluid', note: 'Fournisseur fictif de démonstration' },
];

/* Complément éditorial des quatre familles de mesure. */
const MEASUREMENT_DETAILS = {
  '01': {
    slug: 'niveau',
    longName: 'Mesure et détection de niveau',
    intro: 'Savoir ce qu’il reste dans une cuve, un silo ou un bac. Selon le produit stocké et les contraintes d’accès, la mesure peut être continue ou limitée à la détection d’un seuil.',
    uses: [
      'Suivre en continu le contenu d’une cuve de stockage',
      'Détecter un seuil haut ou bas pour protéger une pompe',
      'Surveiller un bac de rétention ou un puisard',
    ],
  },
  '02': {
    slug: 'temperature',
    longName: 'Mesure et détection de température',
    intro: 'La température conditionne la plupart des procédés. Le choix se fait sur la plage attendue, le temps de réponse et la manière dont la sonde est installée dans la tuyauterie.',
    uses: [
      'Suivre la température d’un fluide en ligne',
      'Contrôler une étuve, un échangeur ou une cuve chauffée',
      'Disposer d’une lecture locale sans alimentation électrique',
    ],
  },
  '03': {
    slug: 'pression',
    longName: 'Mesure et détection de pression',
    intro: 'De la lecture locale au signal transmis à l’automate, la pression se mesure au plus près de l’application : nature du fluide, plage utile et raccordement guident le choix.',
    uses: [
      'Surveiller la pression d’un réseau de fluides',
      'Transmettre une mesure vers un automate ou un enregistreur',
      'Lire une pression sur place, au pied de l’équipement',
    ],
  },
  '04': {
    slug: 'debit',
    longName: 'Mesure et détection de débit',
    intro: 'Compter ce qui circule. La technologie retenue dépend du fluide, de la conductivité, de la présence de particules et de la possibilité — ou non — d’intervenir sur la tuyauterie.',
    uses: [
      'Compter un volume consommé sur une utilité',
      'Mesurer un débit sans couper la tuyauterie',
      'Suivre un dosage ou une alimentation de procédé',
    ],
  },
};

/* Les trois familles qui entourent la mesure. */
const EXTRA_FAMILIES = [
  {
    code: '05',
    slug: 'controle-fluides',
    name: 'Contrôle mécanique des fluides',
    longName: 'Contrôle mécanique des fluides : raccords et vannes',
    text: 'Raccorder, isoler et réguler les fluides de votre installation.',
    intro: 'Entre l’instrument et le procédé, il y a la tuyauterie. Raccords, vannes et accessoires permettent d’isoler un appareil, de le déposer sans vidanger la ligne et de garder une installation démontable.',
    uses: [
      'Isoler un instrument pour le contrôler ou le remplacer',
      'Raccorder un capteur sur une ligne existante',
      'Prévoir une prise de pression ou un point de purge',
    ],
    principles: ['Raccords', 'Vannes', 'Accessoires de tuyauterie'],
    use: 'Assemblage et distribution des fluides',
  },
  {
    code: '06',
    slug: 'produits-complementaires',
    name: 'Produits complémentaires',
    longName: 'Produits complémentaires : signal, énergie et appareils portables',
    text: 'Compléter la chaîne de mesure, du traitement du signal au contrôle sur le terrain.',
    intro: 'Une mesure ne s’arrête pas au capteur. Le signal doit être isolé, converti ou affiché, et la chaîne doit pouvoir être vérifiée sur le terrain avec un appareil portable.',
    uses: [
      'Isoler ou convertir un signal entre capteur et automate',
      'Suivre une consommation électrique ou une énergie',
      'Vérifier une boucle de mesure pendant une intervention',
    ],
    principles: ['Contrôle du signal', 'Mesure électrique / énergie', 'Multimètres et calibrateurs'],
    use: 'Acquisition, contrôle et maintenance',
  },
  {
    code: '07',
    slug: 'analyse-environnement',
    name: 'Analyse et environnement',
    longName: 'Analyse et environnement',
    text: 'Préparer une mesure adaptée à la composition et aux conditions de votre procédé.',
    intro: 'Au-delà des grandeurs physiques, la composition du fluide et les conditions ambiantes comptent : humidité, gaz présents, qualité de l’air utilisé dans l’installation.',
    uses: [
      'Surveiller l’humidité résiduelle d’un réseau d’air',
      'Suivre la composition d’un gaz de procédé',
      'Documenter les conditions d’un atelier ou d’un local technique',
    ],
    principles: ['Analyse de gaz', 'Prélèvement', 'Conditionnement'],
    use: 'Suivi des procédés et de leur environnement',
  },
];

/* Familles : identifiant stable `fam-<code>`, slug d'adresse, et rattachement
 * aux photos existantes pour les quatre grandeurs de mesure. */
const FAMILY_LIST = [
  ...FAMILIES.map((f) => ({
    id: `fam-${f.code}`,
    code: f.code,
    slug: MEASUREMENT_DETAILS[f.code].slug,
    name: f.name,
    longName: MEASUREMENT_DETAILS[f.code].longName,
    text: f.text,
    intro: MEASUREMENT_DETAILS[f.code].intro,
    uses: [...MEASUREMENT_DETAILS[f.code].uses],
    principles: [...f.principles],
    use: f.use,
    unit: f.unit,
    img: f.img,
    color: f.color,
    published: true,
  })),
  ...EXTRA_FAMILIES.map((f) => ({
    id: `fam-${f.code}`,
    code: f.code,
    slug: f.slug,
    name: f.name,
    longName: f.longName,
    text: f.text,
    intro: f.intro,
    uses: [...f.uses],
    principles: [...f.principles],
    use: f.use,
    unit: '',
    img: null,
    color: '#dde6ee',
    published: true,
  })),
];

/* Fiches de démonstration. Références, valeurs et fournisseurs sont inventés :
 * ils servent uniquement à éprouver la recherche, les filtres et les parcours. */
const PRODUCT_LIST = [
  {
    id: 'prd-001', slug: 'sonde-radar-nvx-r40', name: 'Sonde radar NVX-R40',
    reference: 'NVX-R40', familyId: 'fam-01', supplierId: 'sup-nordvex',
    summary: 'Mesure continue du niveau sans contact avec le produit, pour cuves fermées et silos.',
    uses: ['Cuves de stockage fermées', 'Silos de matières sèches', 'Produits agressifs ou collants'],
    specs: [
      ['Principe', 'Radar sans contact'],
      ['Étendue de mesure', '0 à 20 m'],
      ['Sortie', '4–20 mA, 2 fils'],
      ['Raccord process', 'Filetage G 1½'],
      ['Température de service', '−20 à 80 °C'],
    ],
    published: true,
  },
  {
    id: 'prd-002', slug: 'transmetteur-hydrostatique-cly-h12', name: 'Transmetteur hydrostatique CLY-H12',
    reference: 'CLY-H12', familyId: 'fam-01', supplierId: 'sup-calyra',
    summary: 'Niveau déduit de la pression de la colonne de liquide, en sonde immergée ou en piquage.',
    uses: ['Cuves ouvertes et bassins', 'Puisards et postes de relevage', 'Eaux et liquides peu chargés'],
    specs: [
      ['Principe', 'Pression hydrostatique'],
      ['Étendue de mesure', '0 à 10 mCE'],
      ['Sortie', '4–20 mA, 2 fils'],
      ['Corps', 'Acier inoxydable'],
      ['Câble', 'Longueur à préciser à la commande'],
    ],
    published: true,
  },
  {
    id: 'prd-003', slug: 'detecteur-lame-vibrante-omb-vf2', name: 'Détecteur à lame vibrante OMB-VF2',
    reference: 'OMB-VF2', familyId: 'fam-01', supplierId: 'sup-ombrelin',
    summary: 'Détection d’un seuil haut ou bas, peu sensible à la densité et au dépôt.',
    uses: ['Protection de pompe contre la marche à sec', 'Sécurité de remplissage', 'Alarme de niveau haut'],
    specs: [
      ['Principe', 'Lame vibrante'],
      ['Fonction', 'Détection de seuil, tout ou rien'],
      ['Sortie', 'Contact relais'],
      ['Raccord process', 'Filetage G 1'],
      ['Température de service', '−20 à 100 °C'],
    ],
    published: true,
  },
  {
    id: 'prd-004', slug: 'sonde-pt100-cly-t100', name: 'Sonde PT100 CLY-T100',
    reference: 'CLY-T100', familyId: 'fam-02', supplierId: 'sup-calyra',
    summary: 'Sonde à résistance de platine avec doigt de gant, pour une mesure stable en ligne.',
    uses: ['Températures de procédé en tuyauterie', 'Cuves et échangeurs', 'Mesure raccordée à un automate'],
    specs: [
      ['Principe', 'Résistance de platine PT100'],
      ['Plage', '−50 à 400 °C'],
      ['Montage', 'Doigt de gant, raccord fileté'],
      ['Raccordement', '3 fils'],
      ['Longueur d’immersion', 'À définir selon la tuyauterie'],
    ],
    published: true,
  },
  {
    id: 'prd-005', slug: 'thermocouple-nvx-tc8', name: 'Thermocouple NVX-TC8',
    reference: 'NVX-TC8', familyId: 'fam-02', supplierId: 'sup-nordvex',
    summary: 'Mesure de température haute avec un temps de réponse court.',
    uses: ['Fours et traitements thermiques', 'Points chauds de procédé', 'Mesures à réponse rapide'],
    specs: [
      ['Principe', 'Thermocouple type K'],
      ['Plage', '0 à 900 °C'],
      ['Gaine', 'Acier inoxydable, ⌀ 6 mm'],
      ['Raccordement', 'Tête de raccordement'],
      ['Montage', 'Avec ou sans doigt de gant'],
    ],
    published: true,
  },
  {
    id: 'prd-006', slug: 'thermometre-bimetallique-vtk-bm60', name: 'Thermomètre bimétallique VTK-BM60',
    reference: 'VTK-BM60', familyId: 'fam-02', supplierId: 'sup-vantek',
    summary: 'Lecture locale de la température, sans alimentation ni câblage.',
    uses: ['Lecture directe au pied de l’équipement', 'Contrôle visuel pendant une ronde', 'Installations sans alimentation disponible'],
    specs: [
      ['Principe', 'Bilame'],
      ['Plage', '0 à 120 °C'],
      ['Diamètre du cadran', '100 mm'],
      ['Raccord process', 'Filetage G ½, orientation à préciser'],
      ['Boîtier', 'Acier inoxydable'],
    ],
    published: true,
  },
  {
    id: 'prd-007', slug: 'transmetteur-pression-nvx-p22', name: 'Transmetteur de pression NVX-P22',
    reference: 'NVX-P22', familyId: 'fam-03', supplierId: 'sup-nordvex',
    summary: 'Transmission d’une pression relative vers l’automate, cellule piézorésistive.',
    uses: ['Réseaux d’air et d’eau', 'Refoulement de pompe', 'Signal transmis à un automate'],
    specs: [
      ['Principe', 'Cellule piézorésistive'],
      ['Étendue de mesure', '0 à 16 bar relatifs'],
      ['Sortie', '4–20 mA, 2 fils'],
      ['Raccord process', 'Filetage G ¼'],
      ['Température de service', '−20 à 85 °C'],
    ],
    published: true,
  },
  {
    id: 'prd-008', slug: 'manometre-membrane-vtk-mp4', name: 'Manomètre à membrane VTK-MP4',
    reference: 'VTK-MP4', familyId: 'fam-03', supplierId: 'sup-vantek',
    summary: 'Lecture locale de pression sur fluides chargés ou visqueux, membrane affleurante.',
    uses: ['Fluides chargés ou visqueux', 'Lecture sur place', 'Contrôle avant intervention'],
    specs: [
      ['Principe', 'Membrane affleurante'],
      ['Étendue de mesure', '0 à 10 bar relatifs'],
      ['Diamètre du cadran', '100 mm'],
      ['Remplissage', 'Glycérine, en option'],
      ['Raccord process', 'Bride ou filetage, à préciser'],
    ],
    published: true,
  },
  {
    id: 'prd-009', slug: 'debitmetre-electromagnetique-cly-em30', name: 'Débitmètre électromagnétique CLY-EM30',
    reference: 'CLY-EM30', familyId: 'fam-04', supplierId: 'sup-calyra',
    summary: 'Mesure de débit sur liquides conducteurs, sans pièce mobile dans la veine.',
    uses: ['Eau et effluents', 'Liquides conducteurs chargés', 'Comptage d’utilités'],
    specs: [
      ['Principe', 'Électromagnétique'],
      ['Diamètres', 'DN 25 à DN 150'],
      ['Sortie', '4–20 mA et impulsions'],
      ['Raccordement', 'Brides'],
      ['Condition', 'Liquide conducteur, conduite pleine'],
    ],
    published: true,
  },
  {
    id: 'prd-010', slug: 'debitmetre-ultrasons-omb-us7', name: 'Débitmètre à ultrasons OMB-US7',
    reference: 'OMB-US7', familyId: 'fam-04', supplierId: 'sup-ombrelin',
    summary: 'Mesure par capteurs serrés sur la tuyauterie, sans coupure de la ligne.',
    uses: ['Contrôle ponctuel sur ligne existante', 'Installations sans arrêt possible', 'Diagnostic de réseau'],
    specs: [
      ['Principe', 'Ultrasons, capteurs serrés à l’extérieur'],
      ['Diamètres', 'DN 25 à DN 300'],
      ['Sortie', '4–20 mA'],
      ['Montage', 'Sans découpe de tuyauterie'],
      ['Condition', 'Tuyauterie et fluide à caractériser'],
    ],
    published: true,
  },
  {
    id: 'prd-011', slug: 'vanne-boisseau-frl-bv2', name: 'Vanne à boisseau sphérique FRL-BV2',
    reference: 'FRL-BV2', familyId: 'fam-05', supplierId: 'sup-ferralis',
    summary: 'Isolement quart de tour d’un instrument ou d’une antenne de tuyauterie.',
    uses: ['Isoler un instrument avant dépose', 'Couper une antenne de distribution', 'Préparer une intervention de maintenance'],
    specs: [
      ['Type', 'Boisseau sphérique, deux voies'],
      ['Manœuvre', 'Quart de tour, poignée'],
      ['Diamètres', 'DN 15 à DN 50'],
      ['Corps', 'Laiton ou acier inoxydable'],
      ['Raccordement', 'Filetage femelle'],
    ],
    published: true,
  },
  {
    id: 'prd-012', slug: 'raccord-instrumentation-frl-rc1', name: 'Raccord d’instrumentation FRL-RC1',
    reference: 'FRL-RC1', familyId: 'fam-05', supplierId: 'sup-ferralis',
    summary: 'Raccord démontable pour piquer un capteur sur une ligne existante.',
    uses: ['Piquage d’une prise de pression', 'Raccordement d’un capteur sur tube', 'Point de purge ou de prélèvement'],
    specs: [
      ['Type', 'Raccord à bague, démontable'],
      ['Tubes', '⌀ 6 à 12 mm'],
      ['Matière', 'Acier inoxydable'],
      ['Filetages', 'G ¼ et G ½'],
      ['Assemblage', 'Sans soudure'],
    ],
    published: true,
  },
  {
    id: 'prd-013', slug: 'isolateur-signal-vtk-si2', name: 'Isolateur-convertisseur de signal VTK-SI2',
    reference: 'VTK-SI2', familyId: 'fam-06', supplierId: 'sup-vantek',
    summary: 'Sépare électriquement capteur et automate, et convertit le signal si besoin.',
    uses: ['Supprimer une boucle de masse', 'Dupliquer un signal vers deux destinations', 'Adapter un signal à une entrée automate'],
    specs: [
      ['Fonction', 'Isolation galvanique et conversion'],
      ['Entrée', '4–20 mA'],
      ['Sortie', '4–20 mA ou 0–10 V'],
      ['Montage', 'Rail DIN'],
      ['Alimentation', '24 V continu'],
    ],
    published: true,
  },
  {
    id: 'prd-014', slug: 'calibrateur-boucle-vtk-cal9', name: 'Calibrateur portable de boucle VTK-CAL9',
    reference: 'VTK-CAL9', familyId: 'fam-06', supplierId: 'sup-vantek',
    summary: 'Appareil de terrain pour générer et lire un signal pendant une intervention.',
    uses: ['Vérifier une boucle 4–20 mA', 'Simuler un capteur pendant un essai', 'Contrôler une entrée automate'],
    specs: [
      ['Fonctions', 'Génération et lecture 4–20 mA'],
      ['Tension', 'Lecture 0–30 V continu'],
      ['Alimentation', 'Batterie rechargeable'],
      ['Format', 'Portable, avec sacoche'],
      ['Raccordement', 'Cordons et pinces fournis'],
    ],
    published: true,
  },
  {
    id: 'prd-015', slug: 'sonde-point-de-rosee-nvx-dp3', name: 'Sonde de point de rosée NVX-DP3',
    reference: 'NVX-DP3', familyId: 'fam-07', supplierId: 'sup-nordvex',
    summary: 'Suivi de l’humidité résiduelle d’un réseau d’air ou de gaz.',
    uses: ['Réseaux d’air comprimé', 'Contrôle après sécheur', 'Surveillance de gaz secs'],
    specs: [
      ['Mesure', 'Point de rosée sous pression'],
      ['Plage', '−60 à 20 °C de point de rosée'],
      ['Sortie', '4–20 mA'],
      ['Raccord process', 'Filetage G ½'],
      ['Installation', 'Chambre de mesure recommandée'],
    ],
    published: true,
  },
];

/* Structure source. Personne ne la modifie : elle sert de gabarit aux copies. */
const INITIAL_CATALOG = {
  families: FAMILY_LIST,
  suppliers: SUPPLIERS,
  products: PRODUCT_LIST.map((p) => ({ ...p, specs: p.specs.map(([label, value]) => ({ label, value })) })),
};

/** Copie indépendante du catalogue, tableaux et objets imbriqués compris.
 *  L'administration simulée pourra modifier la copie sans toucher à la source. */
export function createCatalog() {
  return structuredClone(INITIAL_CATALOG);
}
