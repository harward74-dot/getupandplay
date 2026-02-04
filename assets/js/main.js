// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const isOpen = !mobileNav.hasAttribute('hidden');
    if (isOpen) {
      mobileNav.setAttribute('hidden', '');
      toggle.setAttribute('aria-expanded', 'false');
    } else {
      mobileNav.removeAttribute('hidden');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Simple slideshow
const slidesWrap = document.querySelector('[data-slideshow]');
if (slidesWrap) {
  const slides = Array.from(slidesWrap.querySelectorAll('.slide'));
  let idx = 0;

  setInterval(() => {
    if (slides.length < 2) return;
    slides[idx].classList.remove('is-active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('is-active');
  }, 4500);
}
