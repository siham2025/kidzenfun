// assets/js/header.js
(() => {
  function initHeader() {
    const header = document.querySelector('.site-header');
    if (!header || header.dataset.jsInit === '1') return; // évite double bind (hot reload / Turbo)
    header.dataset.jsInit = '1';

    const burger = header.querySelector('.burger');
    const nav    = header.querySelector('.main-nav');

    if (!burger || !nav) return;

    const OPEN_CLASS = 'is-open';
    const MQ_MOBILE  = 768; // doit correspondre à ton CSS

    // Toggle menu
    function toggle(open) {
      const willOpen = typeof open === 'boolean' ? open : !header.classList.contains(OPEN_CLASS);
      header.classList.toggle(OPEN_CLASS, willOpen);
      burger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    }

    burger.addEventListener('click', () => toggle());

    // Fermer si on clique un lien du menu
    nav.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (a) toggle(false);
    });

    // Fermer sur Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') toggle(false);
    });

    // Quand on repasse en desktop, on nettoie l'état
    window.addEventListener('resize', () => {
      if (window.innerWidth > MQ_MOBILE) toggle(false);
    });
  }

  // DOM ready + compat Symfony UX Turbo (si utilisé)
  if (document.readyState !== 'loading') initHeader();
  document.addEventListener('DOMContentLoaded', initHeader, { once: true });
  document.addEventListener('turbo:load', initHeader); // sans effet si Turbo non présent
})();
