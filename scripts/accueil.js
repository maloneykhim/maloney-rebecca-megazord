
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

gsap.registerPlugin(ScrollTrigger);

let banners = document.querySelectorAll('.banner');

banners.forEach(banner => {
  const image = banner.querySelector('.image');
  const title = banner.querySelector('.title');
  const contenu = banner.querySelector('.contenu');
  
  gsap.timeline({
    scrollTrigger: {
      markers: true,
      start: 'bottom bottom',
      trigger: banner,
      toggleActions: 'play none none none',
    }
  })
  .from(image, {scale: 2})
  .from(title, {y: 100, opacity: 0})
  .from(contenu, {opacity: 0})
});