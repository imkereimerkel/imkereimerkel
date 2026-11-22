const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

if (!menuButton || !navigation) {
  // Legal pages do not include the mobile navigation.
} else {

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
  menuButton.textContent = isOpen ? '×' : '☰';
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Menü öffnen');
    menuButton.textContent = '☰';
  });
});
}

const honeySlides = [...document.querySelectorAll('[data-honey-slide]')];
const honeyChoices = [...document.querySelectorAll('[data-honey-choice]')];
const honeyCount = document.querySelector('[data-honey-count]');
const honeyPrevious = document.querySelector('[data-honey-prev]');
const honeyNext = document.querySelector('[data-honey-next]');

if (honeySlides.length && honeyChoices.length) {
  let activeHoney = 0;

  const showHoney = (index) => {
    activeHoney = (index + honeySlides.length) % honeySlides.length;
    const activeId = honeySlides[activeHoney].dataset.honeySlide;

    honeySlides.forEach((slide, slideIndex) => {
      slide.hidden = slideIndex !== activeHoney;
    });
    honeyChoices.forEach((choice) => {
      choice.setAttribute('aria-pressed', String(choice.dataset.honeyChoice === activeId));
    });
    if (honeyCount) honeyCount.textContent = `${activeHoney + 1} / ${honeySlides.length}`;
  };

  honeyChoices.forEach((choice) => {
    choice.addEventListener('click', () => {
      const index = honeySlides.findIndex((slide) => slide.dataset.honeySlide === choice.dataset.honeyChoice);
      if (index >= 0) showHoney(index);
    });
  });
  honeyPrevious?.addEventListener('click', () => showHoney(activeHoney - 1));
  honeyNext?.addEventListener('click', () => showHoney(activeHoney + 1));

  const carousel = document.querySelector('.honey-carousel');
  let touchStart = null;
  carousel?.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse') touchStart = event.clientX;
  });
  carousel?.addEventListener('pointerup', (event) => {
    if (touchStart === null) return;
    const distance = event.clientX - touchStart;
    touchStart = null;
    if (Math.abs(distance) > 55) showHoney(activeHoney + (distance < 0 ? 1 : -1));
  });
  carousel?.addEventListener('pointercancel', () => { touchStart = null; });
}
