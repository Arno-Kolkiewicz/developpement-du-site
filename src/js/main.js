import { gsap } from "gsap/dist/gsap";
    
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)

// window.onload = () => {  };

/* header parallax */

const headerParallax = gsap.timeline({
  scrollTrigger: {
    trigger: '.parallax-element-container',
    start: "top top", 
    end: "bottom top",
    scrub: 2,
  }
});

headerParallax.to('#foliage-bottom-left', {
    bottom: "0%",
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

/*
gsap.to('#butterfly-motion-path', {
    motionPath: {
        path: '#path',
        align: '#path',
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
    },
    scrollTrigger: {
        trigger: '.motion-path',
        start: "top+=1000px center",
        end: "bottom+=1000px bottom",
        scrub: true,
    },
    ease: ""
});
*/


const svgContainer = document.querySelector(".section-papillon");
  const svgContent = `
    <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1130.06 6412.39">
      <g>
        <path id="path" d="M141.97.04c16.49,409.16,88.48,387.72,200.42,414.48,160.53,38.37,621.19,237.97,507.28,357.42-84.98,89.12-477.86,14.97-458.67-106.67,24.22-153.48,572.24-163.43,621.33-16,69.31,208.15-657.18,324.52-690.67,541.33-21.61,139.91,661.33,352,241.89,512-254.99,97.27-579.27-443.67-425-612.44,130.11-142.34,723.63,229.92,817.78,398.22,67.77,121.14-765.22,342.94-803.55,515.55-44.68,201.17,548.29,503.65,696.89,373.33,109.29-95.84-51.5-528.14-195.56-547.55C313.85,1783.85-24.56,2889.85,2.52,3038.65c29.35,161.23,489.24,73.47,641.81,133.28,212.71,83.39,640.11,717.87,426.53,799.02-301.55,114.58-437.6-1125.73-740.31-1042.58-267.82,73.57-60.28,1055.06-64,1155.55-5.61,151.45,571.54,26.44,579.55,177.78,9.08,171.49-589.45,135.97-615.11,305.78-22.32,147.69,365.22,259.66,485.33,348.44,113.98,84.26,308.53,386.03,243.56,512-80.19,155.46-497.19,129.86-689.78-117.33-184.98-237.43-265.98-807.99-56.89-864,366.8-98.26,862.07,972.83,817.78,1280-38.99,270.4-828.15,533.49-772.08,685.45"/>
      </g>
    </svg>
  `;
  svgContainer.insertAdjacentHTML("afterbegin", svgContent);

  // Initialisez l'animation avec GSAP et ScrollTrigger.
  gsap.to("#butterfly-motion-path", {
    motionPath: {
      path: "#path",
      align: "#path",
      autoRotate: false,
      alignOrigin: [0.5, 0.5],
    },
    scrollTrigger: {
      trigger: ".motion-path",
      start: "top+=1000px center",
      end: "bottom+=1000px bottom",
      scrub: 2,
    },
  });



/* main - memories wrapper */

const memoriesWrapper = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-memories',
        start: "top bottom",
        end: "bottom top",
        scrub: 4,
    }
});

 memoriesWrapper.to ('#hiroshi-miroir', { translateX: "100%", }, )
    .to('#hiroshi-moto', { translateX: "-100%", }, "-=0.4")
    .to('#nuage', { translateX: "100%", }, "-=0.4")
    .to('#hiroshi-baffe', { translateX: "-50%", }, "-=0.3")
    .to('#plonge-1', { translateY: "-30%", }, "-=0.4")
    .to('#plonge-2', { translateY: "-40%", }, "-=0.4")
    .to('#plonge-3', { translateY: "-120%", }, "-=0.4")
    .to('#hiroshi-with-girl', { translateX: "100%", }, "-=0.4")
    .to('#hiroshi-walk-in-city', { translateX: "-60%", }, "-=0.4");


const bubbles = document.querySelectorAll('.bubble-element');

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-reflexion',
    start: "top top",
    end: "bottom top",
    scrub: 2,
    pin: true,
   // markers: true,
  },
});

bubbles.forEach((bubble, index) => {
  tl.to(bubble, {
    y: `-${20 + index * 50}%`, // Décalage progressif
    opacity: 1,
    duration: 1,
  });
});
