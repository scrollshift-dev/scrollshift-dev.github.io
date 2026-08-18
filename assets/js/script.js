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
