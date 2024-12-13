const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
  slidesPerView: 1,
  spaceBetween: 24,
  height: 344,


  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24
    },

    1280: {
      slidesPerView: 3,
      spaceBetween: 24,
      loop: false
    },
  } 
  });