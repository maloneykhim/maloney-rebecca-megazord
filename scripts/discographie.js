const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  effect: "flip",

  flipEffect: {
    slideShadows: false,
  },
});
