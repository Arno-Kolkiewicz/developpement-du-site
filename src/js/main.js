import { gsap } from "gsap/dist/gsap";
    
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)


/* header parallax */

const headerParallax = gsap.timeline({
  scrollTrigger: {
    trigger: '.parallax-element-container',
    start: "top top", 
    end: "bottom top",
    scrub: true,
  }
});

headerParallax.to('#foliage-bottom-left', {
    bottom: "10%",
    duration: 1,
}, 0)
  .to('#butterfly', {
    top: "-10%",
    duration: 1,
  }, 0)
  .to('#foliage-top-right', {
    top: "10%",
    duration: 1,
}, 0);

/* main - train seat bckg */

gsap.to('#bckg-train-seat', {
    scrollTrigger: {
        trigger: '.section-train-seat',
        pin: true,
        start: "top-=10% top",
        end: "bottom top",
        scrub: true,
    },
    right: "85%"
});

/* main - hiroshi scale */

gsap.to('#hiroshi-scale',{
    scrollTrigger: {
        trigger: '.section-cimtiere',
        pin: true,
        start: "top-=10% top",
        end: "bottom top",
        scrub: true,
    },
    scale: 0.5,
});

/* main - motion path papillon */

gsap.to('#butterfly-motion-path', {
    motionPath: {
        path: '#path',
        align: '#path',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
    },
    scrollTrigger: {
        trigger: '.motion-path',
        start: "top center",
        end: "bottom+=1000px bottom",
        scrub: 2,
    },
    ease: "easeInOut"
});

/* main - memories wrapper */

const memoriesWrapper = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-memories',
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    }
});

 memoriesWrapper.to ('#hiroshi-miroir', { translateX: "100%", }, )
    .to('#hiroshi-moto', { translateX: "-100%", }, "-=0.4")
    .to('#nuage', { translateX: "100%", }, "-=0.4")
    .to('#hiroshi-baffe', { translateX: "-100%", }, "-=0.4")
    .to('#plonge-1', { translateY: "-30%", }, "-=0.4")
    .to('#plonge-2', { translateY: "-40%", }, "-=0.4")
    .to('#plonge-3', { translateY: "-120%", }, "-=0.4")
    .to('#hiroshi-with-girl', { translateX: "100%", }, "-=0.4")
    .to('#hiroshi-walk-in-city', { translateX: "-100%", }, "-=0.4");


// const bubbleParallax = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.section-reflexion',
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true,
//         markers: true,
//     }
// });

// bubbleParallax.to ('.bubble-element...')


const bubbles = document.querySelectorAll('.bubble-element');

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-reflexion',
    start: "top top",
    end: "bottom top",
    scrub: 2,
    pin: true,
    markers: true,
  },
});

bubbles.forEach((bubble, index) => {
  tl.to(bubble, {
    y: `-${20 + index * 50}%`, // Décalage progressif
    opacity: 1,
    duration: 1,
  });
});
