const PACKS = {
 A:{name:'Precision Signal',short:'Precision Signal',mood:'Clarté · précision · confiance',tag:'L’instrumentation, avec justesse.',heading:'Mesurer.<br>Contrôler.<br><em>Maîtriser.</em>',desc:'Une identité industrielle contemporaine : grille nette, objets annotés et signal bleu, avec un accent orange ponctuel.',fonts:['Sora','Inter','IBM Plex Mono'],palette:[['Blanc','#FFFFFF'],['Encre','#0B1F2A'],['Bleu Maturat','#4295D0'],['Signal','#F28C28']],radius:'4–12 px',motion:'Lignes de signal, annotations progressives, déplacement léger des instruments.',composition:'Titre sur cinq colonnes, instruments sur six. Quatre familles alignées. Présentation Dropout sombre et formulaire avec résumé latéral.',cursor:'Réticule discret dans les scènes produit.',refs:['seasats','united'],steps:['Choisir une grandeur','Découvrir une technologie','Préciser une application']},
 B:{name:'Industrial Noir / Flow Lab',short:'Industrial Noir',mood:'Matière · profondeur · fluide',tag:'L’ingénierie se révèle.',heading:'La précision.<br><em>Dans chaque flux.</em>',desc:'Une direction cinématique autour de la matière : produit éclairé, scène carbone et lumière froide. Les zones de lecture reviennent au blanc.',fonts:['Space Grotesk','Source Sans 3','IBM Plex Mono'],palette:[['Carbone','#071116'],['Acier','#19313B'],['Blanc froid','#F2F7F8'],['Lumière','#A9E7FF']],radius:'2–6 px',motion:'Éclairage diffus, révélation de la coupe et récit Dropout synchronisé au scroll, également pilotable par boutons.',composition:'Ouverture sombre avec instruments métalliques, quatre familles sur fond clair, grande scène Dropout, retour lumineux pour le formulaire.',cursor:'Quatre angles autour du point d’exploration.',refs:['alphane','alphane-live','shaders'],steps:['Découvrir la matière','Suivre le flux','Définir une solution']},
 C:{name:'Technical Editorial',short:'Technical Editorial',mood:'Espace · caractère · expertise',tag:'Une autre lecture de la mesure.',heading:'La précision,<br><em>par nature.</em>',desc:'Une composition éditoriale et asymétrique : titres amples, grands numéros, instruments qui traversent la grille et accent serif.',fonts:['Instrument Sans + Newsreader','Source Sans 3','IBM Plex Mono'],palette:[['Papier','#FAFAF7'],['Encre','#15191C'],['Bleu','#286A97'],['Cuivre','#C86524']],radius:'0–8 px',motion:'Révélation des lignes de titre, légendes et images, parallaxe de faible amplitude.',composition:'Titre sur neuf colonnes, instrument décalé et paragraphe bas. Deux compositions doubles pour les familles. Dropout présenté comme un dossier illustré.',cursor:'Point avec libellé contextuel.',refs:['gionatan','erica','united'],steps:['Lire une intention','Explorer le dossier','Écrire son besoin']},
 D:{name:'Control Room',short:'Control Room',mood:'Grandeurs · repères · choix',tag:'Chaque mesure. Sous contrôle.',heading:'Des signaux.<br>Des fluides.<br><em>Des décisions.</em>',desc:'Une interface inspirée des instruments : choix des grandeurs, graduations, principes de mesure et annotations utiles.',fonts:['Manrope','Inter','IBM Plex Mono'],palette:[['Blanc froid','#F7FAFB'],['Graphite','#102029'],['Grille','#D8E3E7'],['Bleu','#36A8E0']],radius:'4–8 px',motion:'Marqueur de sélection, mise en évidence des zones et progression de la définition du besoin.',composition:'Sélecteur visible dès l’ouverture, présentation de l’instrument en face. Fiche dynamique, exploration de Dropout par zones et champs avec unités séparées.',cursor:'Sonde avec petit trait de mesure.',refs:['endress','alphane'],steps:['Sélectionner une grandeur','Inspecter le fonctionnement','Renseigner les paramètres']},
 E:{name:'Atmospheric Precision',short:'Atmospheric',mood:'Lumière · respiration · maîtrise',tag:'La technologie, en toute clarté.',heading:'Mesurer. Contrôler.<br><em>Maîtriser vos procédés.</em>',desc:'La synthèse lumineuse : blanc dominant, fonds colorés finement grainés, halos bleus et touches de lumière orange issus du logo, produits dans l’espace et une séquence Dropout immersive.',fonts:['Instrument Sans + Instrument Serif','Inter','IBM Plex Mono'],palette:[['Blanc','#FFFFFF'],['Graphite du logo','#231F20'],['Bleu du logo','#4395D1'],['Orange du logo','#F7941D']],radius:'12–20 px',motion:'Léger déplacement de l’équipement au pointeur, fond optique grainé animé par un maillage Bloom Field fluide et passage progressif vers une scène graphite et bleu. Les animations peuvent être réduites.',composition:'Navigation intégrée à la hero, un seul équipement central et net devant un fond bleu flou et grainé. En bas, titre à gauche et texte avec action à droite, selon votre croquis. Les quatre familles sont présentées dans une grille régulière de cartes : texte à gauche, instrument à droite, flèche ronde et fonds bleus ou orangés.',cursor:'Cercle fin et indication d’exploration au survol.',refs:['seasats','gionatan','gradients'],steps:['Explorer les possibles','Comprendre Dropout','Parler de son application']}
};
const REFS = {
 seasats:{name:'Seasats',url:'https://www.seasats.com/',use:'Espace, objets isolés, progression entre découverte et informations techniques.'},
 united:{name:'United Carriers',url:'https://unitedcarriers.com/',use:'Présence des objets industriels et hiérarchie d’une communication B2B.'},
 gionatan:{name:'Gionatan Nese',url:'https://www.gionatannese.com/',use:'Cohérence entre identité, typographie et interactions.'},
 erica:{name:'Erica Basile — Gionatan Nese',url:'https://www.gionatannese.com/projects/erica-basile',use:'Motif visuel qui accompagne la progression du récit.'},
 alphane:{name:'Alphane Labs — étude de cas Tubik',url:'https://tubikstudio.com/works/alphane-labs',use:'Capteur industriel, vues techniques et révélation des couches au scroll.'},
 'alphane-live':{name:'Alphane Labs — expérience',url:'https://solutions.alphanelabs.com/',use:'Référence interactive pour la narration d’un objet technique.'},
 endress:{name:'Endress+Hauser — instrumentation',url:'https://www.endress.com/en/field-instruments-overview',use:'Organisation des solutions par grandeurs physiques.'},
 gradients:{name:'21st.dev — gradients',url:'https://21st.dev/community/components/s/gradient',use:'Bibliothèque de pistes pour les halos ; aucun composant choisi automatiquement.'},
 shaders:{name:'21st.dev — shaders',url:'https://21st.dev/community/components/s/shader',use:'Pistes d’effets pour la lumière et la matière.'}
};
const FAMILIES = [
 {name:'Niveau',code:'01',img:202,unit:'m',color:'#d5e8f7',title:'Savoir où vous en êtes.',text:'Mesurer et détecter le niveau de vos liquides ou solides, selon les contraintes du procédé.',principles:['Radar','Hydrostatique','Flotteur'],use:'Cuves, réservoirs et stockage'},
 {name:'Température',code:'02',img:238,unit:'°C',color:'#fbe3c3',title:'Garder la bonne température.',text:'Suivre la température de votre installation et choisir le principe de mesure adapté.',principles:['PT100','Thermocouple','Bimétallique'],use:'Procédés, tuyauteries et équipements'},
 {name:'Pression',code:'03',img:270,unit:'bar',color:'#c6def1',title:'Connaître chaque pression.',text:'Mesurer et détecter la pression de vos fluides, au plus près de votre application.',principles:['Piézorésistif','Capacitif','Mécanique'],use:'Réseaux de fluides et installations'},
 {name:'Débit',code:'04',img:306,unit:'m³/h',color:'#dde6ee',title:'Donner du sens au flux.',text:'Mesurer le débit de votre fluide avec une technologie cohérente avec le procédé.',principles:['Ultrasons','Électromagnétique','Coriolis'],use:'Circuits de fluides et utilités'}
];
const DROP_STEPS = [
 {name:'Entrée',title:'Tout commence avec le flux.',text:'L’air comprimé pénètre dans le séparateur. Il peut transporter des liquides et des particules qui affectent les équipements en aval.',label:'Entrée du flux'},
 {name:'Séparation',title:'Séparer pour protéger.',text:'Le principe décrit dans la plaquette associe une technologie cyclonique et des chambres de détente pour séparer les liquides du flux.',label:'Zone de séparation'},
 {name:'Récupération',title:'Recueillir les condensats.',text:'Les liquides séparés sont récupérés en partie basse. La purge s’adapte à la configuration de votre installation.',label:'Collecte et purge'},
 {name:'Sortie',title:'Poursuivre le procédé.',text:'Le flux poursuit son chemin vers vos équipements. Le choix du modèle dépend notamment du fluide, de la pression et du débit.',label:'Vers les équipements'}
];

// Original reusable photographs; attribution is exposed in Direction & crédits.
const IMAGE_ASSETS = {
  "270": {
    "src": "assets/photos/pressure-maximator.jpg",
    "title": "Manomètre haute pression MAXIMATOR",
    "author": "CEphoto, Uwe Aranas",
    "credit": "Photo by CEphoto, Uwe Aranas — CC BY-SA 3.0",
    "source": "https://commons.wikimedia.org/wiki/File:MAXIMATOR-High-Pressure-Manometer-01a.jpg",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "width": 3685,
    "height": 3685
  },
  "238": {
    "src": "assets/photos/temperature-probes.jpg",
    "title": "Sondes de température à résistance de platine",
    "author": "Marián Hubinský",
    "credit": "Marián Hubinský — CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:PRT_Probes.jpg",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "width": 3867,
    "height": 3746
  },
  "306": {
    "src": "assets/photos/flow-meter.jpg",
    "title": "Débitmètre Coriolis OPTIMASS 7000",
    "author": "KROHNE",
    "credit": "KROHNE — CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:OPTIMASS_7000.jpg",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "width": 1561,
    "height": 1181
  },
  "202": {
    "src": "assets/photos/level-meter.jpg",
    "title": "Instrument de niveau à plongeur",
    "author": "Alenka989",
    "credit": "Alenka989 — CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:%D0%91%D1%83%D0%B9%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9_%D1%83%D1%80%D0%BE%D0%B2%D0%BD%D0%B5%D0%BC%D0%B5%D1%80.jpg",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "width": 1905,
    "height": 4796
  },
  "132": {
    "src": "assets/photos/air-filter.jpg",
    "title": "Filtre à air comprimé Reading Technologies",
    "author": "Jpgflynn",
    "credit": "Jpgflynn — CC BY-SA 4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Reading_Technologies_Compressed_air_filter.jpg",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "width": 1000,
    "height": 845
  }
};
