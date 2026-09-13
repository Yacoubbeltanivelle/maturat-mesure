/* Effets locaux, démontés à chaque rendu du routeur. */
export function mountFooterMotion(root, reduced) {
  const scene = root.querySelector('.footer-scene');
  if (!scene) return () => {};
  const controller = new AbortController();
  const { signal } = controller;
  const curtain = scene.querySelector('.footer-landscape');
  const word = scene.querySelector('.footer-wordmark');
  const systemReduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  let frame = 0;
  const disabled = () => reduced || systemReduced.matches;
  const update = () => {
    frame = 0;
    const rect = scene.getBoundingClientRect();
    scene.classList.toggle('footer-waves-active', !disabled() && rect.top < innerHeight && rect.bottom > 0);
    const safeCurtain = !disabled() && innerWidth > 650;
    curtain.style.transform = safeCurtain ? `translateY(${Math.max(-45, Math.min(0, innerHeight - rect.bottom))}px)` : '';
    const progress = Math.max(0, Math.min(1, (innerHeight - rect.top) / Math.min(rect.height, innerHeight)));
    word.style.translate = disabled() ? '' : `0 ${(1 - progress) * 35}px`;
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
  for (const name of ['scroll', 'resize']) window.addEventListener(name, schedule, { passive: true, signal });
  root.addEventListener('focusin', update, { signal });
  root.addEventListener('focusout', schedule, { signal });
  systemReduced.addEventListener('change', update, { signal });
  root.querySelector('[data-footer-top]').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: disabled() ? 'instant' : 'smooth' });
    document.querySelector('.site-header .brand')?.focus({ preventScroll: true });
  }, { signal });
  for (const el of root.querySelectorAll('.footer-settings button, .footer-heading .text-button')) {
    el.classList.add('footer-magnetic');
    el.addEventListener('pointermove', e => {
      if (disabled() || !fine.matches || e.pointerType !== 'mouse') return;
      const r = el.getBoundingClientRect();
      const x = Math.max(-6, Math.min(6, (e.clientX - r.left - r.width / 2) * .15));
      const y = Math.max(-4, Math.min(4, (e.clientY - r.top - r.height / 2) * .15));
      el.style.translate = `${x}px ${y}px`;
    }, { signal });
    for (const name of ['pointerleave', 'blur', 'focus']) el.addEventListener(name, () => { el.style.translate = ''; }, { signal });
  }
  update();
  return () => { controller.abort(); cancelAnimationFrame(frame); };
}
