/**
 * 用 swiper 插件实现图个轮播
 */ 
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  // spaceBetween: 30,
  loop: true,
  speed:1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    transitionDuration: 4000
  },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});