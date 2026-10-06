document.documentElement.classList.add('js');

// Mobiel menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('is-open', open);
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
  });
}

// Lijn onder de header na scrollen
const header = document.querySelector('.site-header');
const onScroll = () => header && header.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Elementen zacht laten verschijnen
const items = document.querySelectorAll('.reveal');
if (!reduced && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-in'); io.unobserve(entry.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('is-in'));
}

// De draad in "Aanpak" weeft zich mee met het scrollen
const thread = document.querySelector('.thread');
const line = document.querySelector('.thread-line');
if (thread && line && !reduced) {
  const draw = () => {
    const r = thread.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = Math.min(1, Math.max(0, (vh * 0.9 - r.top) / (vh * 0.55)));
    line.style.setProperty('--draw', String(1 - p));
  };
  draw();
  window.addEventListener('scroll', draw, { passive: true });
  window.addEventListener('resize', draw);
}
