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

// animation - micro

gsap.registerPlugin(ScrollTrigger);

let timeout;
let body = document.body;

gsap.to(".animation-mic", {
  scrollTrigger: {
    pin: true,
    pinSpacing: false,
    scrub: true,
    start: "50% 50%",
    end: "100% 0%",
    trigger: ".animation-mic",
    onUpdate: (e) => {
      body.classList.add("is-scrolling");
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        body.classList.remove("is-scrolling");
      }, 250);

      if (e.direction == 1) {
        body.classList.add("scroll-down");
        body.classList.remove("scroll-up");
      }
      if (e.direction == -1) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }
    },
  },
});

let sectionAnimations = document.querySelectorAll(".album");

sectionAnimations.forEach((sectionAnimation) => {
  const titre = sectionAnimation.querySelector(".titre");
  const image = sectionAnimation.querySelector(".image");

  gsap
    .timeline({
      scrollTrigger: {
        markers: false,
        start: "top 70%",
        trigger: sectionAnimation,
        toggleActions: "play none none reverse",
      },
    })
    .from(titre, { x: -25, opacity: 0 })
    .from(image, { y: 25, opacity: 0 }, "-=0.2");
});
s;
