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

const heroHoney = [
  { name: 'Rapshonig', meta: 'Cremig · 500 g', price: '6,50 €', image: 'assets/products/Raps.png' },
  { name: 'Frühtrachthonig', meta: 'Cremig · 500 g', price: '6,50 €', image: 'assets/products/Fruhtracht_honig_freigestellt.png' },
  { name: 'Blütenhonig', meta: 'Cremig · 500 g', price: '6,50 €', image: 'assets/products/blutenhonig-500.png' },
  { name: 'Heidehonig', meta: 'Cremig · 500 g', price: '10,00 €', image: 'assets/products/Heidehonig_transparent.png' },
  { name: 'Lindenhonig', meta: 'Flüssig · 500 g', price: '6,50 €', image: 'assets/products/Linden.png' },
  { name: 'Akazienhonig', meta: 'Flüssig · 500 g', price: '8,00 €', image: 'assets/products/akazienhonig-500.png' },
  { name: 'Waldhonig', meta: 'Flüssig · 500 g', price: '10,00 €', image: 'assets/products/waldhonig-500.png' },
  { name: 'Edelkastanienhonig', meta: 'Flüssig · 500 g', price: '10,00 €', image: 'assets/products/edelkastanien_honig_freigestellt.png' },
];
const heroCarousel = document.querySelector('.hero-carousel');

if (heroCarousel) {
  const heroImage = heroCarousel.querySelector('[data-hero-honey-image]');
  const heroCount = heroCarousel.querySelector('[data-hero-honey-count]');
  const heroName = heroCarousel.querySelector('[data-hero-honey-name]');
  const heroMeta = heroCarousel.querySelector('[data-hero-honey-meta]');
  const heroPrice = heroCarousel.querySelector('[data-hero-honey-price]');
  let activeHeroHoney = 0;

  const showHeroHoney = (index) => {
    activeHeroHoney = (index + heroHoney.length) % heroHoney.length;
    const honey = heroHoney[activeHeroHoney];
    heroImage.src = honey.image;
    heroImage.alt = `${honey.name} im Glas`;
    heroCount.textContent = `${String(activeHeroHoney + 1).padStart(2, '0')} / 08`;
    heroName.textContent = honey.name;
    heroMeta.textContent = honey.meta;
    heroPrice.textContent = honey.price;
  };

  heroCarousel.querySelector('[data-hero-prev]').addEventListener('click', () => showHeroHoney(activeHeroHoney - 1));
  heroCarousel.querySelector('[data-hero-next]').addEventListener('click', () => showHeroHoney(activeHeroHoney + 1));

  let swipeStart = null;
  heroCarousel.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse') swipeStart = event.clientX;
  });
  heroCarousel.addEventListener('pointerup', (event) => {
    if (swipeStart === null) return;
    const distance = event.clientX - swipeStart;
    swipeStart = null;
    if (Math.abs(distance) > 55) showHeroHoney(activeHeroHoney + (distance < 0 ? 1 : -1));
  });
  heroCarousel.addEventListener('pointercancel', () => { swipeStart = null; });
}
