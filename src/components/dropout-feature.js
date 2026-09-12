import { primary } from '../ui/button.js';
import { dropoutImage } from '../ui/media.js';

/* Section Dropout de la page d'accueil. */
export function feature(){return `<section class="drop-feature" data-feature><div class="feature-wash" aria-hidden="true"></div><div class="feature-copy"><h2>Moins de condensats.<br><em>Plus de maîtrise.</em></h2><p>Découvrez Dropout, une technologie de séparation pour préserver vos équipements alimentés en air comprimé.</p>${primary('Découvrir Dropout','data-page="dropout"')}<div class="feature-benefits"><span>Sans alimentation électrique</span><span>Sans consommable</span></div></div><div class="feature-object" data-art>${dropoutImage('feature-dropout',true)}<span class="mono">DROP’OUT / TECHNOLOGIE DE SÉPARATION</span></div></section>`}
