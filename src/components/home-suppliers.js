import { HOME_SUPPLIERS } from '../data/company.js';
import { escapeHTML } from '../lib/dom.js';
import { eyebrow } from '../ui/eyebrow.js';
import { img } from '../ui/media.js';
import { IMAGE_ASSETS } from '../data/images.js';
const photos = [601, 603, 604];

export function homeSuppliers() {
  const content = HOME_SUPPLIERS;
  return `<section class="home-suppliers section" aria-labelledby="suppliers-home-title">
    <header class="suppliers-intro">
      <div>${eyebrow('FOURNISSEURS')}<h2 id="suppliers-home-title">${escapeHTML(content.title)}<br><em>${escapeHTML(content.emphasis)}</em></h2></div>
      <div class="suppliers-intro-copy"><p>${escapeHTML(content.intro)}</p><a class="text-button" href="#/suppliers">Découvrir les fournisseurs <span aria-hidden="true">↗</span></a></div>
    </header>
    <div class="suppliers-selection">
      <ol class="suppliers-principles">${content.steps.map((step, index) => `<li><span class="suppliers-number" aria-hidden="true">0${index + 1}</span><figure class="supplier-photo supplier-photo-${index}">${img(photos[index], step.title, "", true)}<figcaption>${escapeHTML(IMAGE_ASSETS[photos[index]].credit)}</figcaption></figure><h3>${escapeHTML(step.title)}</h3><p>${escapeHTML(step.text)}</p></li>`).join('')}</ol>
    </div>
  </section>`;
}
