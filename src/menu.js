const menuOpenBtn = document.querySelector('.js-menu-open');
const menuOverlay = document.querySelector('.menu-overlay');
const menuCloseBtn = document.querySelector('.js-menu-close');
const menuLinks = document.querySelectorAll('.mob-nav-item a');
const shopBtn = document.querySelector('.shop-btn');

function openMenu() {
  menuOverlay.classList.add('is-open');
}

function closeMenu() {
  menuOverlay.classList.remove('is-open');
}

menuOpenBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    if (link.getAttribute('href').startsWith('#')) {
      closeMenu();
    }
  });
});

shopBtn.addEventListener('click', closeMenu);