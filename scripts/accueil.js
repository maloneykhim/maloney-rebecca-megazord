
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

let sectionAnimations1 = document.querySelectorAll('.sectionAnimation1');

sectionAnimations1.forEach(sectionAnimation1 => {
  const titre = sectionAnimation1.querySelector('.titre');
  const diaporama = sectionAnimation1.querySelector('.diaporama');
  
  gsap.timeline({
    scrollTrigger: {
      markers: false,
      start: 'top 70%',
      trigger: sectionAnimation1,
      toggleActions: 'play none none reverse',
    }
  })
  .from(titre, {x: -25, opacity: 0})
  .from(diaporama, {y: 25, opacity: 0}, '-=0.2')
});

let sectionAnimations2 = document.querySelectorAll('.sectionAnimation2');

sectionAnimations2.forEach(sectionAnimation2 => {
  const titre = sectionAnimation2.querySelector('.titre');
  const cartes = sectionAnimation2.querySelector('.cartes');
  
  gsap.timeline({
    scrollTrigger: {
      markers: false,
      start: 'top 70%',
      trigger: sectionAnimation2,
      toggleActions: 'play none none reverse',
    }
  })
  .from(titre, {x: -25, opacity: 0})
  .from(cartes, {y: 25, opacity: 0}, '-=0.2')
});

let sectionAnimations3 = document.querySelectorAll('.sectionAnimation3');

sectionAnimations3.forEach(sectionAnimation3 => {
  const titre = sectionAnimation3.querySelector('.titre');
  const video = sectionAnimation3.querySelector('.video');
  
  gsap.timeline({
    scrollTrigger: {
      markers: false,
      start: 'top 70%',
      trigger: sectionAnimation3,
      toggleActions: 'play none none reverse',
    }
  })
  .from(titre, {x: -25, opacity: 0})
  .from(video, {y: 25, opacity: 0}, '-=0.2')
});
