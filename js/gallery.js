var swiper = new Swiper('.nominee-slider', {
 slidesPerView: 'auto',
 spaceBetween: 30,
 centeredSlides: false,
 speed: 1000,
 freeMode: false,
 autoWidth: true, 
 autoHeight: true,
 navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev"
 },
 breakpoints: {
  1200: {
   slidesPerGroup: 1, 
   spaceBetween: 10,
  },
  900: {
   slidesPerGroup: 1,
   spaceBetween: 10,
   centeredSlides: true,
  }
 }
});