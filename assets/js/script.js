(() => {
  const root = document.documentElement;
  const buttons = [...document.querySelectorAll('[data-theme-choice]')];
  const apply = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem('scrollshift-theme', theme);
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.themeChoice === theme)));
  };
  buttons.forEach((button) => button.addEventListener('click', () => apply(button.dataset.themeChoice)));
  apply(localStorage.getItem('scrollshift-theme') || 'system');
})();
(() => {
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.getElementById('mobile-menu');
  const docsToggle = document.querySelector('[data-docs-menu-toggle]');
  const docsMenu = document.getElementById('docs-mobile-nav');
  const setMenu = (panel, btn, open) => {
    panel.classList.toggle('open', open);
    panel.toggleAttribute('hidden', !open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  };
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const open = !mobileMenu.classList.contains('open');
      if (open && docsMenu && docsMenu.classList.contains('open')) setMenu(docsMenu, docsToggle, false);
      setMenu(mobileMenu, menuToggle, open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { setMenu(mobileMenu, menuToggle, false); document.body.style.overflow = ''; }));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && mobileMenu.classList.contains('open')) { setMenu(mobileMenu, menuToggle, false); document.body.style.overflow = ''; menuToggle.focus(); } });
  }
  if (docsToggle && docsMenu) {
    const source = document.querySelector('.docs-nav');
    if (source) docsMenu.innerHTML = source.innerHTML;
    docsToggle.addEventListener('click', () => {
      const open = !docsMenu.classList.contains('open');
      if (open && mobileMenu && mobileMenu.classList.contains('open')) { setMenu(mobileMenu, menuToggle, false); document.body.style.overflow = ''; }
      setMenu(docsMenu, docsToggle, open);
    });
    docsMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(docsMenu, docsToggle, false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && docsMenu.classList.contains('open')) { setMenu(docsMenu, docsToggle, false); docsToggle.focus(); } });
  }
})();
