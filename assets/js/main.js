document.documentElement.classList.add('js');

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#navegacion');

if (navToggle && nav) {
  const navToggleText = navToggle.querySelector('.sr-only');

  const setNavState = (isOpen) => {
    navToggle.setAttribute('aria-expanded', String(isOpen));

    if (navToggleText) {
      navToggleText.textContent = isOpen ? 'Cerrar navegación' : 'Abrir navegación';
    }
  };

  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    setNavState(isOpen);
  });

  nav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove('is-open');
      setNavState(false);
    }
  });
}

const navLinks = Array.from(document.querySelectorAll('.site-nav a'));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const activeLink = document.querySelector(`.site-nav a[href="#${entry.target.id}"]`);
        if (entry.isIntersecting && activeLink) {
          navLinks.forEach((link) => link.classList.remove('is-active'));
          activeLink.classList.add('is-active');
        }
      });
    },
    { rootMargin: '-45% 0px -45% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}
