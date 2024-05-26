var swiper = new Swiper(".vertical-slide-carousel", {
  loop: true,
  direction: 'vertical',
  mousewheelControl: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".vertical-slide-carousel .swiper-pagination",
    clickable: true,
  },
});