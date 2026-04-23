export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://yacoubbeltanivelle.github.io/maturat-mesure";

export type IconKey =
  | "air"
  | "instrumentation"
  | "control"
  | "energy"
  | "calibration"
  | "liquid"
  | "sampling"
  | "environment";

export interface SolutionFamily {
  slug: string;
  icon: IconKey;
  name: string;
  shortName: string;
  summary: string;
  lead: string;
  capabilities: string[];
  sampleProducts: { name: string; description: string }[];
  applications: string[];
  sectors: string[];
  notes: string[];
  flagship?: {
    title: string;
    href: string;
    description: string;
  };
}

export interface ProductEntry {
  name: string;
  summary: string;
  familyLabel: string;
  familyHref: string;
}

export interface ProductGroup {
  title: string;
  familyHref: string;
  products: ProductEntry[];
}

export const COMPANY = {
  name: "Maturat Mesure",
  legalName: "MATURAT MESURE (MM)",
  tagline: "Mesure industrielle, traitement d'air comprimé et signal",
  description:
    "Distribution et développement de solutions de mesure industrielle, de traitement d'air comprimé et de traitement du signal pour les professionnels de l'industrie.",
  city: "Martigues",
  region: "Provence-Alpes-Côte d'Azur",
  addressLine1: "1 rue Barthélémy Thimonnier",
  addressLine2: "ZI Colline Sud",
  postalCode: "13500",
  country: "France",
  phoneDisplay: "04 88 40 68 22",
  phoneHref: "tel:+33488406822",
  primaryEmail: "contact@maturat.fr",
  secondaryEmail: "administratif@maturat.fr",
  linkedin: "https://www.linkedin.com/company/maturat-mesure/",
  facebook: "https://www.facebook.com/people/Maturat-mesure/100057091944126/",
  siren: "812 197 598",
  siret: "812 197 598 00020",
  ape: "46.69B",
  founded: "2015-06-15",
  martiguesSiteSince: "2020-06-05",
  manager: "Jean-Marc Frédéric Claude Lagu",
} as const;

export const TRUST_MARKERS = [
  {
    title: "Société créée en 2015",
    detail: "Données publiques API Entreprises",
  },
  {
    title: "Siège à Martigues",
    detail: "ZI Colline Sud, 13500 Martigues",
  },
  {
    title: "Adhérent Réseau Mesure",
    detail: "Annuaire professionnel de la mesure",
  },
  {
    title: "Mesures Solutions Expo 2026",
    detail: "Exposant référencé dans le domaine qualité de l'air",
  },
  {
    title: "SEPEM Martigues 2025",
    detail: "Présence salon industriel confirmée",
  },
] as const;

export const HOME_METRICS = [
  { value: "8", label: "familles de solutions" },
  { value: "2015", label: "année de création" },
  { value: "Martigues", label: "ancrage du siège" },
  { value: "EXPEL", label: "offre air comprimé mise en avant" },
] as const;

export const EXPEL = {
  name: "EXPEL",
  title: "Traitement d'air comprimé sans consommable",
  summary:
    "Solution de filtration haute pression conçue pour traiter l'air comprimé sans alimentation électrique et sans consommable, avec une construction inox 304 et une maintenance simplifiée.",
  strapline:
    "Conçu pour protéger les outils et organes pneumatiques ou optiques tout en réduisant les opérations de maintenance.",
  specs: [
    {
      value: "99,9999 %",
      label: "élimination des liquides",
      detail: "eau, huile et solides jusqu'à 1 µm",
    },
    {
      value: "850 l/min",
      label: "débit nominal maximum",
      detail: "30 cfm annoncés sur la fiche produit",
    },
    {
      value: "15 bar(g)",
      label: "pression maximale",
      detail: "217 psi(g)",
    },
    {
      value: "Inox 304",
      label: "corps et tête",
      detail: "résistance à la corrosion",
    },
    {
      value: "0 à 80 °C",
      label: "plage de fonctionnement",
      detail: "usage industriel courant",
    },
    {
      value: "2 ans",
      label: "garantie",
      detail: "indiquée sur la fiche produit",
    },
  ],
  benefits: [
    {
      title: "Sans consommable",
      description:
        "Le positionnement produit met en avant un traitement d'air sans cartouche à remplacer.",
    },
    {
      title: "Sans alimentation électrique",
      description:
        "Le fonctionnement ne dépend pas d'une alimentation auxiliaire, ce qui simplifie l'intégration.",
    },
    {
      title: "Entièrement démontable",
      description:
        "La fiche produit insiste sur une maintenance facilitée et un coût d'usage réduit.",
    },
    {
      title: "Pensé pour durer",
      description:
        "La construction en acier inoxydable vise la robustesse en environnement industriel.",
    },
  ],
  useCases: [
    "Protection des outils pneumatiques",
    "Protection des organes optiques",
    "Traitement d'air sur postes sensibles",
    "Réduction des interventions de maintenance",
  ],
  industries: [
    "Automobile",
    "Aérospatiale",
    "Électronique",
    "Pharmaceutique",
    "Agroalimentaire",
    "Chimie",
  ],
} as const;

export const SOLUTION_FAMILIES: SolutionFamily[] = [
  {
    slug: "traitement-air-comprime",
    icon: "air",
    name: "Traitement d’air comprimé",
    shortName: "Air comprimé",
    summary:
      "Filtration, séchage et purge pour protéger les organes pneumatiques et stabiliser la qualité d'air.",
    lead:
      "Filtration, séchage, purge et protection des postes sensibles pour fiabiliser les réseaux d’air comprimé, avec EXPEL comme point fort de la gamme.",
    capabilities: [
      "Filtration haute pression",
      "Séchage et séparation des condensats",
      "Protection des organes pneumatiques ou optiques",
      "Purge automatique sur réseau d'air comprimé",
    ],
    sampleProducts: [
      {
        name: "Filtre à air comprimé EXPEL",
        description:
          "Offre phare de filtration sans consommable, sans alimentation électrique.",
      },
      {
        name: "Purgeur automatique magnétique",
        description:
          "Équipement de gestion des condensats pour réseau d'air comprimé.",
      },
      {
        name: "Purgeur automatique à flotteur",
        description:
          "Version à cuve transparente avec contrôle visuel des condensats.",
      },
    ],
    applications: [
      "Utilités pneumatiques",
      "Protection d'outillage",
      "Protection d'organes optiques",
      "Points d'air critiques",
    ],
    sectors: [
      "Automobile",
      "Aérospatiale",
      "Électronique",
      "Pharmaceutique",
      "Agroalimentaire",
      "Chimie",
    ],
    notes: [
      "Réseau Mesure parle d'une solution unique et brevetée de séchage et filtration.",
      "L'Usine Nouvelle positionne EXPEL comme un filtre haute pression pour air comprimé.",
    ],
    flagship: {
      title: "EXPEL, page dédiée",
      href: "/expel",
      description:
        "Une page produit complète pour détailler les bénéfices, les caractéristiques et les secteurs d'application.",
    },
  },
  {
    slug: "instrumentation",
    icon: "instrumentation",
    name: "Instrumentation",
    shortName: "Instrumentation",
    summary:
      "Niveau, température, pression et débit pour les besoins de mesure du terrain.",
    lead:
      "Mesurer pression, niveau, température et débit avec des repères produit visibles et une approche tournée vers les besoins du terrain.",
    capabilities: [
      "Mesure de pression",
      "Mesure de niveau",
      "Mesure de température",
      "Mesure de débit",
    ],
    sampleProducts: [
      {
        name: "Manomètre industriel T5500",
        description: "Manomètre avec système antivibratoire mécanique breveté.",
      },
      {
        name: "Manomètre spécial haute surpression T6500",
        description: "Référence dédiée aux environnements haute pression.",
      },
      {
        name: "Manomètre numérique DG25-C4",
        description: "Affichage digital pour lecture directe de la pression.",
      },
      {
        name: "Capteur de pression différentielle CXLdp",
        description: "Suivi des pertes de charge et contrôle de filtres.",
      },
      {
        name: "Alarme de niveau ANV",
        description: "Détection de niveau à vocation industrielle.",
      },
    ],
    applications: [
      "Surveillance de process",
      "Mesure sur utilités",
      "Contrôle de lignes",
      "Instrumentation atelier",
    ],
    sectors: [
      "Industrie manufacturière",
      "Chimie",
      "Traitement de l'eau",
      "Énergie",
    ],
    notes: [
      "La famille instrumentation est explicitement listée comme niveau, température, pression, débit.",
      "Plusieurs références manomètres et capteurs sont déjà visibles dans la vitrine L'Usine Nouvelle.",
    ],
  },
  {
    slug: "controle-signal",
    icon: "control",
    name: "Contrôle & traitement du signal",
    shortName: "Contrôle & signal",
    summary:
      "Indicateurs, régulateurs, convertisseurs, isolateurs et communication pour fiabiliser le signal terrain.",
    lead:
      "Conditionner, convertir, isoler et transmettre le signal pour fiabiliser l’exploitation des mesures industrielles.",
    capabilities: [
      "Indicateurs numériques",
      "Régulateurs",
      "Convertisseurs et isolateurs",
      "Transmission radio",
      "Modules de communication",
      "Barrières ATEX",
    ],
    sampleProducts: [
      {
        name: "Convertisseur programmable universel TPIv10-AR",
        description: "Référence de conversion et d'adaptation de signal.",
      },
      {
        name: "Indicateur programmable DIP 50",
        description:
          "Affichage, contrôle et transmission des données de mesure.",
      },
      {
        name: "Régulateur de niveau Aqua XL",
        description: "Régulation de niveau pour application industrielle.",
      },
      {
        name: "Pressostat miniature",
        description: "Détection de seuil sur circuit de pression.",
      },
    ],
    applications: [
      "Mise en forme du signal",
      "Pilotage local d'équipement",
      "Transmission de mesures",
      "Chaînes de sécurité ou zones ATEX",
    ],
    sectors: [
      "Procédés industriels",
      "Maintenance",
      "Automatismes",
      "Utilités techniques",
    ],
    notes: [
      "La source Réseau Mesure mentionne explicitement convertisseurs, isolateurs, systèmes sans fils et barrières ATEX.",
      "La vitrine produit met déjà en visibilité des références convertisseurs, indicateurs et régulateurs liées à cette famille.",
    ],
  },
  {
    slug: "energie-electrique",
    icon: "energy",
    name: "Énergie électrique",
    shortName: "Énergie électrique",
    summary:
      "Analyseurs de réseau, contrôleurs de puissance et accessoires de mesure électrique.",
    lead:
      "Une famille dédiée à la lecture, au contrôle et à la vérification des grandeurs électriques en environnement industriel.",
    capabilities: [
      "Analyse de paramètres réseau",
      "Contrôle de puissance",
      "Galvanomètres",
      "Transformateurs de courant",
      "Shunts",
    ],
    sampleProducts: [
      {
        name: "Analyseurs de paramètres réseau",
        description: "Lecture et suivi des grandeurs électriques du réseau.",
      },
      {
        name: "Contrôleurs de puissance",
        description: "Commande de charges électriques sur procédés industriels.",
      },
      {
        name: "Transformateurs de courant et shunts",
        description: "Adaptation et mesure sur circuits de puissance.",
      },
    ],
    applications: [
      "Tableaux électriques",
      "Suivi énergétique",
      "Contrôle de puissance process",
      "Instrumentation d'armoires",
    ],
    sectors: [
      "Industrie",
      "Énergie",
      "Bâtiment technique",
      "Utilités",
    ],
    notes: [
      "La source métier liste analyseurs de paramètres réseau, contrôleurs de puissance, galvanomètres, transformateurs de courant et shunts.",
    ],
  },
  {
    slug: "multimetres-calibrateurs",
    icon: "calibration",
    name: "Multimètres & calibrateurs",
    shortName: "Multimètres & calibrateurs",
    summary:
      "Mesure portable, analyse de puissance et calibration pour maintenance et vérification.",
    lead:
      "Des outils de mesure portable et de calibration pour les équipes maintenance, vérification et diagnostic.",
    capabilities: [
      "Analyseurs de puissance",
      "Multimètres",
      "Testeurs d'isolement",
      "Pinces ampèremétriques",
      "Calibrateurs",
    ],
    sampleProducts: [
      {
        name: "Analyseurs de puissance",
        description: "Mesure portable et contrôle d'installations électriques.",
      },
      {
        name: "Multimètres et testeurs d'isolement",
        description: "Contrôle terrain pour maintenance et vérification.",
      },
      {
        name: "Calibrateurs",
        description: "Réglage et contrôle de chaînes de mesure.",
      },
    ],
    applications: [
      "Maintenance électrique",
      "Vérification terrain",
      "Diagnostic d'installation",
      "Métrologie opérationnelle",
    ],
    sectors: [
      "Maintenance industrielle",
      "Services techniques",
      "Énergie",
      "Bâtiment industriel",
    ],
    notes: [
      "La famille est décrite par Réseau Mesure comme analyseurs de puissance, multimètres, testeurs d'isolation, pinces ampèremétriques et calibrateurs.",
    ],
  },
  {
    slug: "analyse-liquide",
    icon: "liquid",
    name: "Analyse liquide",
    shortName: "Analyse liquide",
    summary:
      "pH, Redox, chlore et conductivité pour les besoins d'analyse en liquide.",
    lead:
      "pH, Redox, chlore et conductivité pour les applications d’analyse liquide et de contrôle qualité process.",
    capabilities: [
      "Mesure pH",
      "Mesure Redox",
      "Mesure du chlore libre ou total",
      "Mesure de conductivité",
    ],
    sampleProducts: [
      {
        name: "Sonde pH standard série Zircon pH process",
        description: "Référence process visible sur la vitrine produit.",
      },
      {
        name: "Mesureurs de conductivité",
        description: "Contrôle de qualité et de concentration en ligne.",
      },
    ],
    applications: [
      "Traitement d'eau",
      "Boucles qualité process",
      "Suivi de concentration",
      "Instrumentation de ligne",
    ],
    sectors: [
      "Traitement de l'eau",
      "Agroalimentaire",
      "Chimie",
      "Procédés industriels",
    ],
    notes: [
      "Réseau Mesure cite pH, Redox, chlore libre ou total et conductivité.",
    ],
  },
  {
    slug: "echantillonnage",
    icon: "sampling",
    name: "Échantillonnage",
    shortName: "Échantillonnage",
    summary:
      "Prélèvement, pompes, groupes froids-sécheurs et filtres pour préparer un échantillon exploitable.",
    lead:
      "Prélever, refroidir, sécher et filtrer correctement avant analyse pour sécuriser la qualité de l’échantillon.",
    capabilities: [
      "Prélèvement",
      "Pompes",
      "Groupes froids-sécheurs",
      "Filtres",
    ],
    sampleProducts: [
      {
        name: "Pompes de prélèvement",
        description: "Préparation d'échantillons et circuits d'analyse.",
      },
      {
        name: "Groupes froids-sécheurs",
        description: "Conditionnement avant étape de mesure ou d'analyse.",
      },
      {
        name: "Filtres de préparation",
        description: "Protection des analyseurs et qualité de l'échantillon.",
      },
    ],
    applications: [
      "Chaînes d'analyse",
      "Préparation d'échantillons",
      "Conditionnement gaz process",
      "Protection d'instruments d'analyse",
    ],
    sectors: [
      "Analyse industrielle",
      "Process",
      "Environnement",
      "Traitement d'eau",
    ],
    notes: [
      "La source métier cite prélèvement, pompes, groupes froids-sécheurs et filtres.",
    ],
  },
  {
    slug: "environnement",
    icon: "environment",
    name: "Environnement",
    shortName: "Environnement",
    summary:
      "Détection d'hydrocarbures, turbidité, stations météo et surveillance environnementale.",
    lead:
      "Surveiller l’eau, l’air et les conditions de site avec des repères adaptés aux enjeux environnementaux et industriels.",
    capabilities: [
      "Détection d'hydrocarbures de surface",
      "MES et turbidité",
      "Stations météo",
      "Appareils portatifs",
    ],
    sampleProducts: [
      {
        name: "Détection d'hydrocarbures de surface",
        description: "Surveillance de pollution sur plans d'eau ou réseaux.",
      },
      {
        name: "MES / turbidité",
        description: "Suivi de qualité d'eau et d'effluents.",
      },
      {
        name: "Stations météo industrielles",
        description: "Suivi d'environnement et de conditions de site.",
      },
    ],
    applications: [
      "Surveillance de site",
      "Contrôle qualité de l'eau",
      "Mesure environnementale",
      "Suivi météo local",
    ],
    sectors: [
      "Environnement",
      "Industrie",
      "Collectivités",
      "Eau et effluents",
    ],
    notes: [
      "Réseau Mesure positionne aussi Maturat Mesure sur la qualité de l'air dans le cadre salon.",
    ],
  },
] as const;

export const FEATURED_PRODUCTS = [
  {
    family: "Traitement d’air comprimé",
    name: "EXPEL",
    description:
      "Filtre à air comprimé hautes performances, sans consommable et sans alimentation électrique.",
    href: "/produits/expel",
  },
  {
    family: "Instrumentation",
    name: "T5500",
    description:
      "Manomètre industriel avec système antivibratoire mécanique breveté.",
    href: "/produits/t5500",
  },
  {
    family: "Contrôle & signal",
    name: "TPIv10-AR",
    description:
      "Convertisseur programmable universel pour adapter et exploiter le signal terrain.",
    href: "/produits/tpiv10-ar",
  },
  {
    family: "Analyse liquide",
    name: "Zircon pH process",
    description:
      "Sonde pH de process pour les besoins d'analyse liquide et de contrôle qualité.",
    href: "/produits/zircon-ph-process",
  },
] as const;

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    title: "Manomètres",
    familyHref: "/solutions/instrumentation",
    products: [
      {
        name: "Manomètre industriel avec système antivibratoire mécanique breveté T5500",
        summary:
          "Manomètre industriel avec système antivibratoire mécanique breveté.",
        familyLabel: "Instrumentation",
        familyHref: "/solutions/instrumentation",
      },
      {
        name: "Manomètre industriel spécial haute surpression T6500",
        summary:
          "Référence dédiée aux environnements de haute surpression.",
        familyLabel: "Instrumentation",
        familyHref: "/solutions/instrumentation",
      },
      {
        name: "Manomètre numérique - Série DG25 - C4",
        summary:
          "Manomètre numérique robuste pour une lecture directe de la pression.",
        familyLabel: "Instrumentation",
        familyHref: "/solutions/instrumentation",
      },
      {
        name: "Manomètre Série T6500",
        summary:
          "Référence de la série T6500 pour les usages industriels de mesure de pression.",
        familyLabel: "Instrumentation",
        familyHref: "/solutions/instrumentation",
      },
    ],
  },
  {
    title: "Purgeurs d’air comprimé",
    familyHref: "/solutions/traitement-air-comprime",
    products: [
      {
        name: "Purgeur automatique magnétique",
        summary:
          "Équipement de gestion des condensats pour réseau d’air comprimé.",
        familyLabel: "Traitement d’air comprimé",
        familyHref: "/solutions/traitement-air-comprime",
      },
      {
        name: "Purgeur automatique à flotteur et cuve transparente",
        summary:
          "Purgeur avec contrôle visuel des condensats sur réseau d’air comprimé.",
        familyLabel: "Traitement d’air comprimé",
        familyHref: "/solutions/traitement-air-comprime",
      },
    ],
  },
  {
    title: "Alarmes techniques",
    familyHref: "/solutions/instrumentation",
    products: [
      {
        name: "Alarme de niveau Type ANV",
        summary:
          "Dispositif de détection de niveau pour application industrielle.",
        familyLabel: "Instrumentation",
        familyHref: "/solutions/instrumentation",
      },
    ],
  },
  {
    title: "Capteurs de pression différentielle",
    familyHref: "/solutions/instrumentation",
    products: [
      {
        name: "Capteur de pression différentielle - Model CXLdp",
        summary:
          "Capteur de pression différentielle pour suivi et contrôle de lignes ou de filtres.",
        familyLabel: "Instrumentation",
        familyHref: "/solutions/instrumentation",
      },
    ],
  },
  {
    title: "Capteurs de niveau",
    familyHref: "/solutions/controle-signal",
    products: [
      {
        name: "Régulateur de niveau - Aqua XL",
        summary:
          "Régulateur de niveau pour application industrielle.",
        familyLabel: "Contrôle & traitement du signal",
        familyHref: "/solutions/controle-signal",
      },
    ],
  },
  {
    title: "Convertisseurs",
    familyHref: "/solutions/controle-signal",
    products: [
      {
        name: "Convertisseur programmable universel TPIv10-AR",
        summary:
          "Convertisseur programmable universel pour adapter et exploiter le signal terrain.",
        familyLabel: "Contrôle & traitement du signal",
        familyHref: "/solutions/controle-signal",
      },
    ],
  },
  {
    title: "Filtration haute pression pour air comprimé",
    familyHref: "/expel",
    products: [
      {
        name: "Filtre à air comprimé EXPEL",
        summary:
          "Filtre à air comprimé hautes performances, sans consommable et sans alimentation électrique.",
        familyLabel: "Traitement d’air comprimé",
        familyHref: "/expel",
      },
    ],
  },
  {
    title: "Mesures de niveaux",
    familyHref: "/solutions/instrumentation",
    products: [
      {
        name: "Indicateur de niveau magnétique type 810 - Entraxe 650 mm",
        summary:
          "Indicateur de niveau magnétique pour le suivi précis des niveaux.",
        familyLabel: "Instrumentation",
        familyHref: "/solutions/instrumentation",
      },
    ],
  },
  {
    title: "Pressostats",
    familyHref: "/solutions/controle-signal",
    products: [
      {
        name: "Pressostat miniature",
        summary:
          "Pressostat compact pour détection de seuil sur circuit de pression.",
        familyLabel: "Contrôle & traitement du signal",
        familyHref: "/solutions/controle-signal",
      },
    ],
  },
  {
    title: "Analyse liquide",
    familyHref: "/solutions/analyse-liquide",
    products: [
      {
        name: "Sonde de pH standard série Zircon pH process",
        summary:
          "Sonde pH de process pour les besoins d’analyse liquide et de contrôle qualité.",
        familyLabel: "Analyse liquide",
        familyHref: "/solutions/analyse-liquide",
      },
    ],
  },
  {
    title: "Systèmes d’acquisition de données",
    familyHref: "/solutions/controle-signal",
    products: [
      {
        name: "Indicateur programmable : affichage, contrôle et transmission des données DIP 50",
        summary:
          "Indicateur programmable pour l’affichage, le contrôle et la transmission des données de mesure.",
        familyLabel: "Contrôle & traitement du signal",
        familyHref: "/solutions/controle-signal",
      },
    ],
  },
] as const;

export const PRODUCT_CATALOG = PRODUCT_GROUPS.flatMap((group) =>
  group.products.map((product) => ({
    ...product,
    groupTitle: group.title,
  })),
);

export const WHY_MATURAT = [
  {
    title: "Une offre organisée par usages",
    description:
      "Les familles de solutions permettent d’identifier vite le bon sujet et d’orienter la demande.",
  },
  {
    title: "Un angle technique crédible",
    description:
      "Mesure industrielle, air comprimé, contrôle et signal sont présentés avec des repères utiles au terrain.",
  },
  {
    title: "EXPEL mis en avant clairement",
    description:
      "Le traitement d’air comprimé bénéficie d’un focus dédié autour de la solution EXPEL.",
  },
  {
    title: "Un contact direct et local",
    description:
      "Téléphone, e-mails et adresse à Martigues restent visibles pour faciliter la prise de contact.",
  },
] as const;

export const APPLICATION_CLUSTERS = [
  {
    title: "Air comprimé et utilités",
    description:
      "Fiabiliser les postes sensibles, limiter les condensats et protéger les organes pneumatiques.",
  },
  {
    title: "Mesure process",
    description:
      "Pression, niveau, température et débit pour suivre les grandeurs critiques du terrain.",
  },
  {
    title: "Signal et régulation",
    description:
      "Conditionner, convertir, transmettre et sécuriser les signaux de mesure.",
  },
  {
    title: "Mesure électrique",
    description:
      "Analyser, vérifier et calibrer les installations et équipements électriques.",
  },
  {
    title: "Analyse liquide et environnement",
    description:
      "Contrôler la qualité d'eau, la turbidité, le pH et des paramètres de surveillance environnementale.",
  },
] as const;

export const COMPANY_FACTS = [
  {
    label: "Raison sociale",
    value: COMPANY.legalName,
  },
  {
    label: "SIRET siège",
    value: COMPANY.siret,
  },
  {
    label: "Code APE",
    value: COMPANY.ape,
  },
  {
    label: "Création société",
    value: "15 juin 2015",
  },
  {
    label: "Établissement actuel",
    value: "Depuis le 5 juin 2020 à Martigues",
  },
  {
    label: "Gérant",
    value: COMPANY.manager,
  },
] as const;

export const CONTACT_REASONS = [
  "Qualifier un besoin sur une famille de solutions",
  "Préparer une demande de devis ou de documentation",
  "Échanger sur EXPEL et le traitement d'air comprimé",
] as const;

export function getSolutionBySlug(slug: string) {
  return SOLUTION_FAMILIES.find((family) => family.slug === slug);
}

export function getAbsoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`.replace(/\/+$/, "").replace(
    /([^:]\/)\/+/g,
    "$1",
  );
}

export const STATIC_ROUTES = [
  "/",
  "/produits",
  "/solutions",
  "/expel",
  "/about",
  "/contact",
  "/mentions-legales",
  ...SOLUTION_FAMILIES.map((family) => `/solutions/${family.slug}`),
] as const;
