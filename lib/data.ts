export const COMPANY = {
  name: "Maturat Mesure",
  tagline: "Instrumentation Industrielle",
  address: "ZI Colline Sud, 1 rue Barthélémy Thimonnier",
  city: "13500 Martigues, France",
  phone: "04 88 40 68 22",
  phoneHref: "tel:+33488406822",
  email: "administratif@maturat.fr",
  linkedin: "https://fr.linkedin.com/company/maturat-mesure",
  siret: "812 197 598",
  ape: "46.69B",
} as const;

export const EXPEL = {
  name: "EXPEL",
  tagline: "Filtre à air comprimé industriel",
  description:
    "Solution unique et brevetée de séchage et filtration de l'air comprimé. Élimine 99,9999 % des liquides et particules solides jusqu'à 1 µm. Sans alimentation électrique, sans consommable.",
  specs: [
    { value: "99,9999%", label: "Élimination liquides & particules ≤ 1 µm" },
    { value: "850 l/min", label: "Débit nominal maximum" },
    { value: "15 bar", label: "Pression maximale de service" },
    { value: "Inox 304", label: "Corps & tête — résistance corrosion" },
    { value: "0–80°C", label: "Plage de température" },
    { value: "2 ans", label: "Garantie constructeur" },
  ],
  benefits: [
    {
      title: "Zéro consommable",
      desc: "Pas de cartouche à remplacer. Coût de possession minimal sur la durée.",
    },
    {
      title: "Sans alimentation électrique",
      desc: "Fonctionnement 100 % pneumatique. Fiable même en coupure secteur.",
    },
    {
      title: "Construction inox 304",
      desc: "Résistance maximale à la corrosion et aux environnements agressifs.",
    },
    {
      title: "Entièrement démontable",
      desc: "Inspection et nettoyage sur site. Indicateur de pression intégré.",
    },
  ],
} as const;

export interface SolutionFamily {
  id: string;
  name: string;
  description: string;
  icon: string;
  products: { name: string; desc: string }[];
  tags: string[];
}

export const SOLUTIONS: SolutionFamily[] = [
  {
    id: "air-comprime",
    name: "Traitement d'air comprimé",
    description:
      "Séchage, filtration et purge. Solution brevetée EXPEL — 99,9999 % d'élimination liquides.",
    icon: "wind",
    products: [
      {
        name: "Filtre EXPEL",
        desc: "Filtration 99,9999% — 850 l/min — Inox 304 — sans consommable",
      },
      {
        name: "Purgeur magnétique automatique",
        desc: "Purge condensats automatique sans réglage",
      },
      {
        name: "Purgeur flotteur transparent",
        desc: "Contrôle visuel du niveau de condensats",
      },
    ],
    tags: ["Filtration", "850 l/min", "15 bar", "Inox 304"],
  },
  {
    id: "instrumentation",
    name: "Instrumentation",
    description:
      "Mesure de pression, niveau, température et débit. Manomètres anti-vibration, alarmes haute précision.",
    icon: "gauge",
    products: [
      {
        name: "Manomètre industriel T5500",
        desc: "Système anti-vibration breveté",
      },
      { name: "Manomètre haute pression T6500", desc: "Hautes pressions industrielles" },
      { name: "Manomètre numérique DG25-C4", desc: "Affichage digital haute résolution" },
      { name: "Alarme de niveau ANV", desc: "Détection haute précision" },
      { name: "Capteur pression différentielle CXLdp", desc: "Contrôle filtres et pertes de charge" },
      { name: "Indicateur magnétique Typ 810", desc: "Entraxe 650 mm — cuves opaques" },
    ],
    tags: ["Pression", "Niveau", "Température", "Anti-vibration"],
  },
  {
    id: "controle",
    name: "Contrôle",
    description:
      "Indicateurs numériques, régulateurs, convertisseurs, modules ATEX et transmission sans fil.",
    icon: "sliders",
    products: [
      { name: "Régulateur de niveau Aqua XL", desc: "Régulation automatique" },
      { name: "Convertisseur TPIv10-AR", desc: "Universel programmable" },
      { name: "Indicateur DIP 50", desc: "Outil industriel polyvalent" },
      { name: "Pressostat miniature", desc: "Détection seuil de pression" },
    ],
    tags: ["ATEX", "Sans fil", "4-20 mA", "RS485"],
  },
  {
    id: "energie",
    name: "Énergie électrique",
    description:
      "Analyseurs de réseau, contrôleurs de puissance, galvanomètres et transformateurs de courant.",
    icon: "zap",
    products: [
      { name: "Analyseur de réseau", desc: "Puissance, harmoniques, cos φ" },
      { name: "Contrôleur de puissance", desc: "Fours et résistances industrielles" },
      { name: "Transformateur de courant", desc: "Pose sans coupure circuit" },
    ],
    tags: ["Réseau BT/MT", "Harmoniques", "Cos φ", "Puissance"],
  },
  {
    id: "multimetres",
    name: "Multimètres & Calibrateurs",
    description:
      "Analyseurs de puissance portables, testeurs d'isolement et calibrateurs de précision.",
    icon: "monitor-dot",
    products: [
      { name: "Analyseur de puissance portable", desc: "Triphasé, enregistrement données" },
      { name: "Testeur d'isolement", desc: "Jusqu'à 5 kV — maintenance préventive" },
      { name: "Pince ampèremétrique TRMS", desc: "AC/DC sans coupure — haute précision" },
    ],
    tags: ["CAT III/IV", "TRMS", "Métrologie", "Portable"],
  },
  {
    id: "analyse-liquide",
    name: "Analyse liquide",
    description:
      "Mesure pH, Redox, chlore, conductivité. Sondes de process pour analyse en ligne continue.",
    icon: "droplets",
    products: [
      { name: "Sonde pH Zircon® Process Standard", desc: "Compensation auto de température" },
      { name: "Transmetteur pH/Redox", desc: "Sortie 4-20 mA, afficheur local" },
      { name: "Mesureur de conductivité", desc: "Pureté eau et concentration solutions" },
    ],
    tags: ["pH / Redox", "Conductivité", "Chlore", "Inline"],
  },
  {
    id: "echantillonnage",
    name: "Échantillonnage",
    description:
      "Pompes, groupes de refroidissement gaz, sécheurs et filtres pour préparation d'échantillons.",
    icon: "pipette",
    products: [
      { name: "Pompe de prélèvement", desc: "Débit ajustable, matériaux résistants" },
      { name: "Groupe de refroidissement gaz", desc: "Séchage gaz avant analyse" },
      { name: "Filtre d'analyse", desc: "Protection analyseurs — filtration fine" },
    ],
    tags: ["Gaz process", "Prélèvement", "Refroidissement"],
  },
  {
    id: "environnement",
    name: "Environnement",
    description:
      "Détection hydrocarbures, turbidimétrie, stations météo et surveillance environnementale.",
    icon: "activity",
    products: [
      { name: "Détecteur hydrocarbures de surface", desc: "Alerte pollution — surfaces eau et sol" },
      { name: "Turbidimètre / mesureur MES", desc: "Eaux usées et effluents industriels" },
      { name: "Station météo industrielle", desc: "T°, humidité, vent — temps réel" },
    ],
    tags: ["Hydrocarbures", "Turbidité", "MES", "Météo"],
  },
];

export const STATS = [
  { value: "10+", label: "Ans d'expertise" },
  { value: "8", label: "Familles de solutions" },
  { value: "99,9999%", label: "Filtration EXPEL" },
  { value: "48h", label: "Délai de réponse" },
] as const;

export const SECTORS = [
  { emoji: "🏭", name: "Industrie manufacturière", desc: "Automobile, aéronautique, électronique" },
  { emoji: "⚗️", name: "Chimie & pétrochimie", desc: "Raffinage, traitement eau, process" },
  { emoji: "🌱", name: "Agroalimentaire", desc: "Contrôle qualité, hygiène, traçabilité" },
  { emoji: "💊", name: "Pharmaceutique", desc: "Clean rooms, air médical, validation" },
] as const;
