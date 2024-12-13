const swiper = new Swiper('.swiper', {
    direction: 'horizontal',

  breakpoints: {
    1280:{
      slidesPerView: 3,
      spaceBetween: 24,
      loop: false,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
      loop: true,

    },

    320: {
      slidesPerView: 1,
      spaceBetween: 24
    },
  } 
  });