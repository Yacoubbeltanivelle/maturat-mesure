# Maturat Mesure — règles communes

Dossier local : F:\PojetDev\Maturat-Resources\maturat-maquette
Dépôt : https://github.com/Yacoubbeltanivelle/maturat-mesure

Yacoub décide du design et des priorités. Claude Code écrit et corrige le code.
Codex vérifie un périmètre précis et sauvegarde les changements vérifiés.

## Direction artistique

Atmospheric Precision est validée. Conserver le fond bleu grainé animé de la Hero.
Suite au retour client, l'ouverture présente les quatre familles de mesure à parts
égales ; Dropout conserve sa section dédiée plus bas, sans produit géant dans la Hero.
Utiliser Houdec pour le visuel niveau et Fuji Electric pour le débit, aucun visuel Krohne.
Pas de vert ajouté. Titres secondaires plus petits
que le H1. L'attribut `data-pack="E"` du `<body>` porte toute la direction dans la
feuille de style : ne pas le retirer.

## Technique

Base Vite en modules ES. `npm run dev` pour travailler, `npm run build` pour compiler.
Base GitHub Pages `/maturat-mesure/`. Les chemins de ressources passent par `asset()`
ou par une URL absolue `/assets/...` afin de suivre cette base.

Simulation uniquement en mémoire, commune au site et à l'administration dans le même
onglet. Aucun localStorage, sessionStorage ni IndexedDB. Reset au rechargement, bouton
de reset et retour bfcache ; jamais au simple changement d'onglet. Fichiers locaux via
object URLs à libérer. Aucun email ni téléversement réel.

Un composant reçoit ses données par paramètre ou les lit dans `src/state.js` ;
il ne contient ni catalogue ni coordonnées en dur.

## Publication

Aucune coordonnée réelle dans le dépôt ni dans la démonstration : téléphone, email et
adresse sont fictifs et centralisés dans `src/data/site.js`. Les photographies sont
sous licence Creative Commons : l'attribution doit rester visible dans la maquette.

Lire README.md et ASSETS.md. Ne pas publier les échanges privés, audits originaux,
factures, secrets ou documents clients non destinés au site. Les ressources privées
restent dans le dossier parent.
