
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

const sectionVideo = document.querySelector('.sectionVideo');
const sectionTitreVideo = sectionVideo.querySelector('.sectionTitre');
const sectionMembres = document.querySelector('.sectionMembres');
const sectionTitreMembres = sectionMembres.querySelector('.sectionTitre');
const sectionDiapo = document.querySelector('.sectionDiapo');
const sectionTitreDiapo = sectionDiapo.querySelector('.sectionTitre');

gsap.from(".sectionVideo", {
  scrollTrigger: ".sectionVideo",
  scrub: 1,
  start: '5% bottom', 
  y: -100,
  ease:'expo', 
  opacity: 0,
  duration: 2,
  toggleActions: 'restart complete reverse reset',
});

gsap.from(".sectionMembres", {
  scrollTrigger: ".sectionMembres",
  scrub: 1,
  start: '5% bottom', 
  y: -100,
  ease:'expo', 
  opacity: 0,
  duration: 2,
  toggleActions: 'restart complete reverse reset',
});

gsap.from(".sectionDiapo", {
  scrollTrigger: ".sectionDiapo",
  scrub: 1,
  start: '5% bottom', 
  y: -100,
  ease:'expo', 
  opacity: 0,
  duration: 2,
  delay: 1.5,
  toggleActions: 'restart complete reverse reset',
});

gsap.from(".sectionTitreVideo", {
  scrollTrigger: ".sectionVideo",
  scrub: 1,
  start: '5% bottom',
  scale:1.2,
  ease:'expo', 
  opacity: 0,
  duration: 2,
});

  gsap.from(".sectionTitreMembres", {
  scrollTrigger: ".sectionMembres",
  scrub: 1,
  start: '5% bottom', 
  scale:1.2,
  ease:'expo', 
  opacity: 0,
  duration: 2,
});

gsap.from(".sectionTitreDiapo", {
  scrollTrigger: ".sectionDiapo",
  scrub: 1,
  start: '5% bottom', 
  scale:1.2,
  ease:'expo', 
  opacity: 0,
  duration: 2,
});