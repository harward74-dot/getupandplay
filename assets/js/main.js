// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Simple slideshow
const slidesWrap = document.querySelector('[data-slideshow]');
if (slidesWrap) {
  const slides = slidesWrap.querySelectorAll('.slide');
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove('is-active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('is-active');
  }, 4500);
}
