/* =============================================================
   MATURAT MESURE — main.js
   Navigation | Hero Canvas | Scroll Reveal | Counters | Toast
   ============================================================= */
'use strict';

/* ─── SHARED NAV ──────────────────────────────────────────── */
const NAV_HTML = `
<header class="site-header" id="site-header">
  <div class="container">
    <nav class="nav">
      <a href="index.html" class="nav-logo" aria-label="Maturat Mesure — Accueil">
        <svg class="nav-logo-svg" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="8" fill="#1B3A6B"/>
          <!-- M initial + gauge arc -->
          <text x="18" y="23" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="800" fill="white">M</text>
          <path d="M6 28 A16 16 0 0 1 30 28" stroke="#F55D00" stroke-width="2.2" fill="none" stroke-linecap="round"/>
        </svg>
        <span class="nav-logo-text">Maturat Mesure</span>
      </a>

      <div class="nav-links">
        <a href="solutions.html" class="nav-link" data-page="solutions">Solutions</a>
        <a href="expel.html" class="nav-link" data-page="expel">EXPEL</a>
        <a href="about.html" class="nav-link" data-page="about">À propos</a>
        <a href="contact.html" class="nav-link" data-page="contact">Contact</a>
      </div>

      <div class="nav-actions">
        <a href="contact.html" class="btn btn-primary btn-sm">Demande de devis</a>
        <button class="hamburger" id="hamburger" aria-label="Ouvrir le menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  </div>
</header>

<nav class="mobile-nav" id="mobile-nav" aria-hidden="true">
  <div class="mobile-nav-links">
    <a href="solutions.html" class="mobile-nav-link">Solutions <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
    <a href="expel.html" class="mobile-nav-link">EXPEL — Filtre air comprimé <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
    <a href="about.html" class="mobile-nav-link">À propos <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
    <a href="contact.html" class="mobile-nav-link">Contact <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
  </div>
  <div class="mobile-nav-actions">
    <a href="contact.html" class="btn btn-primary btn-lg">Demande de devis</a>
    <a href="solutions.html" class="btn btn-secondary btn-lg">Voir les solutions</a>
  </div>
</nav>
`;

/* ─── SHARED FOOTER ───────────────────────────────────────── */
const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">

      <div class="footer-brand">
        <a href="index.html" class="footer-logo">
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="8" fill="#1B3A6B"/>
            <text x="18" y="23" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="800" fill="white">M</text>
            <path d="M6 28 A16 16 0 0 1 30 28" stroke="#F55D00" stroke-width="2.2" fill="none" stroke-linecap="round"/>
          </svg>
          <span class="footer-logo-text">Maturat Mesure</span>
        </a>
        <p class="footer-tagline">Spécialiste en mesure industrielle, traitement du signal et solutions de traitement d'air comprimé. Martigues, France.</p>
        <div class="footer-social">
          <a href="https://fr.linkedin.com/company/maturat-mesure" class="footer-social-link" aria-label="LinkedIn" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>

      <div>
        <p class="footer-col-title">Solutions</p>
        <ul class="footer-nav-list">
          <li><a href="solutions.html#air-comprime" class="footer-nav-link">Traitement d'air comprimé</a></li>
          <li><a href="solutions.html#instrumentation" class="footer-nav-link">Instrumentation</a></li>
          <li><a href="solutions.html#controle" class="footer-nav-link">Contrôle</a></li>
          <li><a href="solutions.html#energie" class="footer-nav-link">Énergie électrique</a></li>
          <li><a href="expel.html" class="footer-nav-link">EXPEL <span class="badge badge-flagship" style="font-size:0.55rem;margin-left:4px">Phare</span></a></li>
        </ul>
      </div>

      <div>
        <p class="footer-col-title">Entreprise</p>
        <ul class="footer-nav-list">
          <li><a href="about.html" class="footer-nav-link">À propos</a></li>
          <li><a href="about.html#valeurs" class="footer-nav-link">Nos valeurs</a></li>
          <li><a href="contact.html" class="footer-nav-link">Contact</a></li>
        </ul>
      </div>

      <div>
        <p class="footer-col-title">Contact</p>
        <div class="footer-contact-item">ZI Colline Sud<br>1 rue Barthélémy Thimonnier<br>13500 Martigues, France</div>
        <div class="footer-contact-item"><a href="tel:+33488406822">04 88 40 68 22</a></div>
        <div class="footer-contact-item"><a href="mailto:administratif@maturat.fr">administratif@maturat.fr</a></div>
      </div>

    </div>

    <div class="footer-bottom">
      <p class="footer-copyright">&copy; 2026 Maturat Mesure SARL. Tous droits réservés.</p>
      <div class="footer-legal">
        <a href="mentions-legales.html">Mentions légales</a>
        <a href="mentions-legales.html#confidentialite">Confidentialité</a>
      </div>
    </div>
  </div>
</footer>
`;

const LOADER_KEY = 'mm-loader-seen';

/* ─── ENTRY LOADER ────────────────────────────────────────── */
function createEntryLoader() {
  if (!document.body) return;
  try { if (window.sessionStorage.getItem(LOADER_KEY) === '1') return; } catch(e) {}

  const loader = document.createElement('div');
  loader.className = 'entry-loader';
  loader.setAttribute('data-entry-loader', '');
  loader.setAttribute('aria-hidden', 'true');
  loader.innerHTML = `
    <div class="entry-loader__inner">
      <div class="el-wordmark">
        <div class="el-wordmark__name">Maturat <span>Mesure</span></div>
        <div class="el-wordmark__sub">Instrumentation Industrielle</div>
      </div>
      <svg class="el-gauge" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Gauge background arc -->
        <path d="M20 100 A 60 60 0 0 1 140 100" class="el-gauge-track" stroke-width="6" stroke-linecap="round"/>
        <!-- Gauge fill arc -->
        <path d="M20 100 A 60 60 0 0 1 140 100" class="el-gauge-fill" stroke-width="6" stroke-linecap="round"/>
        <!-- Tick marks -->
        <line x1="20" y1="100" x2="26" y2="100" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
        <line x1="30.9" y1="68.6" x2="35.8" y2="72.1" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
        <line x1="56.3" y1="46.2" x2="58.8" y2="51.5" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
        <line x1="80" y1="40" x2="80" y2="46" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
        <line x1="103.7" y1="46.2" x2="101.2" y2="51.5" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
        <line x1="129.1" y1="68.6" x2="124.2" y2="72.1" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
        <line x1="140" y1="100" x2="134" y2="100" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
        <!-- Needle -->
        <g class="el-gauge-needle">
          <line x1="80" y1="100" x2="80" y2="50" stroke="white" stroke-width="2" stroke-linecap="round" opacity="0.9"/>
          <circle cx="80" cy="100" r="5" fill="#1B3A6B" stroke="white" stroke-width="1.5"/>
          <circle cx="80" cy="100" r="2" fill="#F55D00"/>
        </g>
        <!-- Labels -->
        <text x="16" y="116" fill="rgba(255,255,255,0.3)" font-size="8" font-family="system-ui" font-weight="600">0</text>
        <text x="76" y="36" fill="rgba(255,255,255,0.3)" font-size="8" font-family="system-ui" font-weight="600" text-anchor="middle">50</text>
        <text x="138" y="116" fill="rgba(255,255,255,0.3)" font-size="8" font-family="system-ui" font-weight="600" text-anchor="end">100</text>
      </svg>
    </div>
  `;

  document.body.classList.add('site-loading');
  try { window.sessionStorage.setItem(LOADER_KEY, '1'); } catch(e) {}
  document.body.prepend(loader);
}

async function initEntryLoader() {
  const loader = document.querySelector('[data-entry-loader]');
  if (!loader) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const minDuration = reduceMotion ? 200 : 2000;

  await new Promise(resolve => {
    if (document.readyState === 'complete') return resolve();
    window.addEventListener('load', resolve, { once: true });
  });
  await new Promise(resolve => setTimeout(resolve, minDuration));

  loader.classList.add('is-complete');
  setTimeout(() => {
    loader.remove();
    document.body.classList.remove('site-loading');
  }, 700);
}

/* ─── INJECT SHARED COMPONENTS ───────────────────────────── */
function injectComponents() {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  const path = window.location.pathname.split('/').pop() || 'index.html';
  const page = path.replace('.html', '');
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.dataset.page === page) link.classList.add('active');
  });
}

/* ─── NAVIGATION ──────────────────────────────────────────── */
function initNav() {
  const header = document.getElementById('site-header');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 60);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  if (hamburger && mobileNav) {
    const toggle = (forceClose = false) => {
      const open = forceClose ? false : mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
      mobileNav.setAttribute('aria-hidden', !open);
      document.body.style.overflow = open ? 'hidden' : '';
    };

    hamburger.addEventListener('click', () => toggle());
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggle(true)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') toggle(true); });
  }
}

/* ─── HERO CANVAS ─────────────────────────────────────────── */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, animId;
  let t = 0;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Grid lines — measurement paper
    ctx.strokeStyle = 'rgba(74,127,193,0.12)';
    ctx.lineWidth = 1;

    const cols = 24, rows = 14;
    for (let i = 0; i <= cols; i++) {
      const x = (i / cols) * W;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    for (let i = 0; i <= rows; i++) {
      const y = (i / rows) * H;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }

    // Major grid (every 4)
    ctx.strokeStyle = 'rgba(74,127,193,0.22)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= cols; i += 4) {
      const x = (i / cols) * W;
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let i = 0; i <= rows; i += 4) {
      const y = (i / rows) * H;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // Signal trace — main measurement waveform
    ctx.save();
    ctx.strokeStyle = 'rgba(245,93,0,0.7)';
    ctx.lineWidth = 2;
    ctx.shadowColor = 'rgba(245,93,0,0.4)';
    ctx.shadowBlur = 8;
    ctx.beginPath();

    const amplitude = H * 0.12;
    const yBase = H * 0.55;
    const segW = W / 280;

    for (let x = 0; x <= W; x += segW) {
      const progress = x / W;
      const phase = progress * Math.PI * 6 - t * 0.8;
      const envelope = Math.sin(progress * Math.PI);
      const y = yBase + amplitude * Math.sin(phase) * envelope
                      + amplitude * 0.3 * Math.sin(phase * 2.5 + 1) * envelope;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.restore();

    // Second trace — slower, quieter
    ctx.save();
    ctx.strokeStyle = 'rgba(74,127,193,0.35)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();

    const amp2 = H * 0.07;
    const yBase2 = H * 0.38;

    for (let x = 0; x <= W; x += segW) {
      const progress = x / W;
      const phase = progress * Math.PI * 4 - t * 0.5;
      const envelope = Math.sin(progress * Math.PI * 0.9 + 0.2);
      const y = yBase2 + amp2 * Math.sin(phase) * envelope;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.restore();

    // Measurement dots at grid intersections
    ctx.fillStyle = 'rgba(74,127,193,0.25)';
    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        const x = (i / cols) * W;
        const y = (j / rows) * H;
        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Moving cursor on the waveform
    const cursorProgress = ((t * 0.3) % (Math.PI * 2)) / (Math.PI * 2);
    const cx = cursorProgress * W;
    const phase = cursorProgress * Math.PI * 6 - t * 0.8;
    const envelope = Math.sin(cursorProgress * Math.PI);
    const cy = H * 0.55 + H * 0.12 * Math.sin(phase) * envelope;

    ctx.save();
    ctx.fillStyle = 'rgba(245,93,0,0.9)';
    ctx.shadowColor = 'rgba(245,93,0,0.6)';
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(cx, cy, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Vertical cursor line
    ctx.save();
    ctx.strokeStyle = 'rgba(245,93,0,0.25)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, H); ctx.stroke();
    ctx.restore();

    t += 0.018;
    animId = requestAnimationFrame(draw);
  }

  const ro = new ResizeObserver(() => { resize(); });
  ro.observe(canvas);
  resize();
  draw();
}

/* ─── SCROLL REVEAL ───────────────────────────────────────── */
function initReveal() {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || 0);
        setTimeout(() => entry.target.classList.add('revealed'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ─── COUNTER ANIMATION ───────────────────────────────────── */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.counter);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 1600;
      const start = performance.now();
      const isDecimal = String(target).includes('.');

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const val = target * ease;
        el.textContent = prefix + (isDecimal ? val.toFixed(1) : Math.round(val)) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ─── CONTACT FORM ────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Envoi en cours…';
    btn.disabled = true;

    await new Promise(resolve => setTimeout(resolve, 1200));

    btn.textContent = '✓ Message envoyé';
    btn.style.background = '#22c55e';
    showToast('Message envoyé. Nous reviendrons vers vous sous 24h.');

    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 4000);
  });
}

/* ─── TOAST ───────────────────────────────────────────────── */
function showToast(message, duration = 3500) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  requestAnimationFrame(() => {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
  });
}

/* ─── MAGNETIC BUTTONS ────────────────────────────────────── */
function initMagnetic() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

/* ─── INIT ────────────────────────────────────────────────── */
createEntryLoader();
injectComponents();

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initCounters();
  initContactForm();
  initMagnetic();
  initHeroCanvas();
  initEntryLoader();
});
