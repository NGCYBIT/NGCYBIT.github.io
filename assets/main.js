(() => {
  document.documentElement.classList.replace('no-js', 'js');
  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('#primary-nav');
  if (button && nav) {
    function closeMenu() {
      nav.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
      button.textContent = 'Menu';
    }
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      nav.classList.toggle('open', open);
      button.setAttribute('aria-expanded', String(open));
      button.textContent = open ? 'Close' : 'Menu';
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        button.focus();
      }
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
  }
  document.querySelectorAll('img[data-optional-image]').forEach(img => {
    const show = () => { if (img.naturalWidth > 0) img.classList.add('loaded'); };
    img.addEventListener('load', show);
    img.addEventListener('error', () => img.classList.remove('loaded'));
    if (img.complete) show();
  });
})();
