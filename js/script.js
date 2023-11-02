// script
const swiper = new Swiper(".event-slider", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 0,
  // centeredSlides: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
