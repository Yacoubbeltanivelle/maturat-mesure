export interface ProductEntry {
  slug: string;
  name: string;
  summary: string;
  familyLabel: string;
  familyHref: string;
  imageSrc: string;
  sourceUrl: string;
}

export interface ProductGroup {
  slug: string;
  title: string;
  familyHref: string;
  products: ProductEntry[];
}

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    slug: "manometres",
    title: "Manomètres",
    familyHref: "/solutions/instrumentation",
    products: [
      {
        slug: "t5500",
        name: "Manomètre industriel avec système antivibratoire mécanique breveté T5500",
        summary:
          "Manomètre industriel dédié aux environnements exigeants de mesure de pression.",
        familyLabel: "Instrumentation",
        familyHref: "/solutions/instrumentation",
        imageSrc: "/products/t5500.jpg",
        sourceUrl:
          "https://www.usinenouvelle.com/expo/manometre-industriel-avec-systeme-anti-p360069670.html",
      },
      {
        slug: "t6500-haute-surpression",
        name: "Manomètre industriel spécial haute surpression T6500",
        summary:
          "Référence dédiée aux environnements de haute surpression.",
        familyLabel: "Instrumentation",
        familyHref: "/solutions/instrumentation",
        imageSrc: "/products/t6500-haute-surpression.jpg",
        sourceUrl:
          "https://www.usinenouvelle.com/expo/manometre-industriel-special-haute-sur-p360069675.html",
      },
      {
        slug: "dg25-c4",
        name: "Manomètre numérique - Série DG25 - C4",
        summary:
          "Manomètre numérique pour lecture directe et contrôle de pression.",
        familyLabel: "Instrumentation",
        familyHref: "/solutions/instrumentation",
        imageSrc: "/products/dg25-c4.jpg",
        sourceUrl:
          "https://www.usinenouvelle.com/expo/manometre-numerique-serie-dg25-c-p374341635.html",
      },
      {
        slug: "t6500-serie",
        name: "Manomètre Série T6500",
        summary:
          "Référence de la série T6500 pour les usages industriels de mesure de pression.",
        familyLabel: "Instrumentation",
        familyHref: "/solutions/instrumentation",
        imageSrc: "/products/t6500-serie.jpg",
        sourceUrl:
          "https://www.usinenouvelle.com/expo/manometre-serie-t6500-p375763615.html",
      },
    ],
  },
  {
    slug: "purgeurs-air-comprime",
    title: "Purgeurs d’air comprimé",
    familyHref: "/solutions/traitement-air-comprime",
    products: [
      {
        slug: "purgeur-magnetique",
        name: "Purgeur automatique magnétique",
        summary:
          "Équipement de gestion des condensats pour réseau d’air comprimé.",
        familyLabel: "Traitement d’air comprimé",
        familyHref: "/solutions/traitement-air-comprime",
        imageSrc: "/products/purgeur-magnetique.jpg",
        sourceUrl:
          "https://www.usinenouvelle.com/expo/purgeur-automatique-magnetique-p375905900.html",
      },
      {
        slug: "purgeur-flotteur",
        name: "Purgeur automatique à flotteur et cuve transparente",
        summary:
          "Purgeur avec contrôle visuel des condensats sur réseau d’air comprimé.",
        familyLabel: "Traitement d’air comprimé",
        familyHref: "/solutions/traitement-air-comprime",
        imageSrc: "/products/purgeur-flotteur.jpg",
        sourceUrl:
          "https://www.usinenouvelle.com/expo/purgeur-automatique-a-flotteur-et-cuve-p374315105.html",
      },
    ],
  },
  {
    slug: "alarmes-techniques",
    title: "Alarmes techniques",
    familyHref: "/solutions/instrumentation",
    products: [
      {
        slug: "anv",
        name: "Alarme de niveau Type ANV",
        summary:
          "Dispositif de détection de niveau pour application industrielle.",
        familyLabel: "Instrumentation",
        familyHref: "/solutions/instrumentation",
        imageSrc: "/products/anv.jpg",
        sourceUrl:
          "https://www.usinenouvelle.com/expo/alarme-de-niveau-type-anv-p374706130.html",
      },
    ],
  },
  {
    slug: "capteurs-pression-differentielle",
    title: "Capteurs de pression différentielle",
    familyHref: "/solutions/instrumentation",
    products: [
      {
        slug: "cxldp",
        name: "Capteur de pression différentielle - Model CXLdp",
        summary:
          "Capteur de pression différentielle pour suivi et contrôle de lignes ou de filtres.",
        familyLabel: "Instrumentation",
        familyHref: "/solutions/instrumentation",
        imageSrc: "/products/cxldp.jpg",
        sourceUrl:
          "https://www.usinenouvelle.com/expo/capteur-de-pression-differentielle-mo-p375905880.html",
      },
    ],
  },
  {
    slug: "capteurs-de-niveau",
    title: "Capteurs de niveau",
    familyHref: "/solutions/controle-signal",
    products: [
      {
        slug: "aqua-xl",
        name: "Régulateur de niveau - Aqua XL",
        summary:
          "Régulateur de niveau pour application industrielle.",
        familyLabel: "Contrôle & traitement du signal",
        familyHref: "/solutions/controle-signal",
        imageSrc: "/products/aqua-xl.jpg",
        sourceUrl:
          "https://www.usinenouvelle.com/expo/regulateur-de-niveau-aqua-xl-p375763515.html",
      },
    ],
  },
  {
    slug: "convertisseurs",
    title: "Convertisseurs",
    familyHref: "/solutions/controle-signal",
    products: [
      {
        slug: "tpiv10-ar",
        name: "Convertisseur programmable universel TPIv10-AR",
        summary:
          "Convertisseur programmable universel pour adapter et exploiter le signal terrain.",
        familyLabel: "Contrôle & traitement du signal",
        familyHref: "/solutions/controle-signal",
        imageSrc: "/products/tpiv10-ar.jpg",
        sourceUrl:
          "https://www.usinenouvelle.com/expo/convertisseur-programmable-universel-tpi-p374315070.html",
      },
    ],
  },
  {
    slug: "filtration-haute-pression",
    title: "Filtration haute pression pour air comprimé",
    familyHref: "/expel",
    products: [
      {
        slug: "expel",
        name: "Filtre à air comprimé EXPEL",
        summary:
          "Filtre à air comprimé hautes performances, sans consommable et sans alimentation électrique.",
        familyLabel: "Traitement d’air comprimé",
        familyHref: "/expel",
        imageSrc: "/products/expel.jpg",
        sourceUrl:
          "https://www.usinenouvelle.com/expo/filtre-a-air-comprime-expel-p360069660.html",
      },
    ],
  },
  {
    slug: "mesures-de-niveaux",
    title: "Mesures de niveaux",
    familyHref: "/solutions/instrumentation",
    products: [
      {
        slug: "niveau-magnetique-810",
        name: "Indicateur de niveau magnétique type 810 - Entraxe 650 mm",
        summary:
          "Indicateur de niveau magnétique pour le suivi précis des niveaux.",
        familyLabel: "Instrumentation",
        familyHref: "/solutions/instrumentation",
        imageSrc: "/products/niveau-magnetique-810.jpg",
        sourceUrl:
          "https://www.usinenouvelle.com/expo/indicateur-de-niveau-magnetique-type-81-p374501470.html",
      },
    ],
  },
  {
    slug: "pressostats",
    title: "Pressostats",
    familyHref: "/solutions/controle-signal",
    products: [
      {
        slug: "pressostat-miniature",
        name: "Pressostat miniature",
        summary:
          "Pressostat compact pour détection de seuil sur circuit de pression.",
        familyLabel: "Contrôle & traitement du signal",
        familyHref: "/solutions/controle-signal",
        imageSrc: "/products/pressostat-miniature.jpg",
        sourceUrl:
          "https://www.usinenouvelle.com/expo/pressostat-miniature-p375763575.html",
      },
    ],
  },
  {
    slug: "analyse-liquide",
    title: "Analyse liquide",
    familyHref: "/solutions/analyse-liquide",
    products: [
      {
        slug: "zircon-ph-process",
        name: "Sonde de pH standard série Zircon pH process",
        summary:
          "Sonde pH de process pour les besoins d’analyse liquide et de contrôle qualité.",
        familyLabel: "Analyse liquide",
        familyHref: "/solutions/analyse-liquide",
        imageSrc: "/products/zircon-ph-process.jpg",
        sourceUrl:
          "https://www.usinenouvelle.com/expo/sonde-de-ph-standard-serie-zircon-ph-p-p374315315.html",
      },
    ],
  },
  {
    slug: "acquisition-donnees",
    title: "Systèmes d’acquisition de données",
    familyHref: "/solutions/controle-signal",
    products: [
      {
        slug: "dip-50",
        name: "Indicateur programmable : affichage, contrôle et transmission des données DIP 50",
        summary:
          "Indicateur programmable pour l’affichage, le contrôle et la transmission des données de mesure.",
        familyLabel: "Contrôle & traitement du signal",
        familyHref: "/solutions/controle-signal",
        imageSrc: "/products/dip-50.jpg",
        sourceUrl:
          "https://www.usinenouvelle.com/expo/indicateur-programmable-affichage-con-p376161780.html",
      },
    ],
  },
] as const;

export const PRODUCT_CATALOG = PRODUCT_GROUPS.flatMap((group) =>
  group.products.map((product) => ({
    ...product,
    groupSlug: group.slug,
    groupTitle: group.title,
  })),
);

export function getProductBySlug(slug: string) {
  return PRODUCT_CATALOG.find((product) => product.slug === slug);
}

export function getProductGroupBySlug(slug: string) {
  return PRODUCT_GROUPS.find((group) => group.slug === slug);
}
