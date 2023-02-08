'use strict';

// Processing for horizontal scroll //

const wrapper = document.querySelector('#js-wrapper');
const item = document.querySelectorAll('#js-item');
const wrapperLeft = wrapper.offsetLeft;
const scrubValue = 2;

gsap.to( item, {
    xPercent: -100,
    smooth: 6,
    ease: "none",
    scrollTrigger: {
        trigger: wrapper,
        scrub: scrubValue,
        pin: true,
        ease: true,
    },
    end: () => "+=" + wrapperLeft,
});


// Fade out and in the scroll //
// herovideo 
const heroVideo = document.querySelector(".top_video");

gsap.to( heroVideo,{
    scrollTrigger: {
        trigger: "#horizontal-area",
        start: 'top top',
        end: '4% top',
        scrub: scrubValue,
    },
    autoAlpha: 0,
    x: 180,
    scale: 0.8,
    ease: true,
});

// About title
const aboutTitle = document.querySelector("#about-link h1");

if (window.matchMedia('(max-width: 428px)').matches) { //Mobile
    gsap.set( aboutTitle, {
        opacity: 0,
        y: 300,
        x: -150,
    });
    gsap.to( aboutTitle, .5, {
        scrollTrigger: {
            trigger: ".parallax_about",
            start: '5% top',
            end: '10% top',
            scrub: scrubValue,
        },
        opacity: 1,
        ease: 'power3.inOut',
        y: 250,
    });
    gsap.to( aboutTitle, {
        scrollTrigger: {
            trigger: ".parallax_about",
            start: '5% top',
            end: '50% top',
            scrub: scrubValue,
        },
        x: 1000,
    });
} else if (window.matchMedia('(min-width:429px)').matches && window.matchMedia('(max-width: 1024px)').matches) { //Tablet
    gsap.set( aboutTitle, {
        opacity: 0,
        y: 50,
    });
    gsap.to( aboutTitle, .5, {
        scrollTrigger: {
            trigger: ".parallax_about",
            start: '-10% top',
            end: 'top top',
            scrub: scrubValue,
        },
        opacity: 1,
        ease: 'power3.inOut',
        y: -50,
    });
    gsap.to( aboutTitle, {
        scrollTrigger: {
            trigger: ".parallax_about",
            start: 'top top',
            end: '40% top',
            scrub: scrubValue,
        },
        x: 1000,
    });
} else { //PC
    gsap.set( aboutTitle, {
        opacity: 0,
        y: 100,
        x: 0,
    });
    gsap.to( aboutTitle, .5, {
        scrollTrigger: {
            trigger: ".parallax_about",
            start: '5% top',
            end: '15% top',
            scrub: 2,
        },
        opacity: 1,
        ease: 'power3.inOut',
        y: 0,
    });
    gsap.to( aboutTitle, {
        scrollTrigger: {
            trigger: ".parallax_about",
            start: '15% top',
            end: '120% top',
            scrub: 2,
        },
        x: 1000,
    });
};

// About text
const aboutText = document.querySelector("#about-link div");

if (window.matchMedia('(max-width: 428px)').matches) { //Mobile
    gsap.set( aboutText, {
        opacity: 0,
        y: 50,
        x: 600,
    });
    gsap.to( aboutText, {
        scrollTrigger: {
            trigger: ".parallax_about",
            start: '10% top',
            end: '15% top',
            scrub: scrubValue,
        },
        opacity: 1,
        ease: 'power3.inOut',
        y: 0,
    });
    gsap.to( aboutText, {
        scrollTrigger: {
            trigger: ".parallax_about",
            start: '5% top',
            end: '50% top',
            scrub: scrubValue,
        },
        x: -100,
    });
} else if (window.matchMedia('(min-width:429px)').matches && window.matchMedia('(max-width: 1024px)').matches) { //Tablet
    gsap.set( aboutText, {
        opacity: 0,
        y: 50,
        x: 500,
    });
    gsap.to( aboutText, {
        opacity: 1,
        ease: 'power3.inOut',
        y: -250,
        scrollTrigger: {
            trigger: ".parallax_about",
            start: '-5% top',
            end: '5% top',
            scrub: scrubValue,
        }
    });
    gsap.to( aboutText, {
        scrollTrigger: {
            trigger: ".parallax_about",
            start: '5% top',
            end: '50% top',
            scrub: scrubValue,
        },
        x: -100,
    });
} else { //PC
    gsap.set( aboutText, {
        opacity: 0,
        y: 50,
        x: 50,
    });
    gsap.to( aboutText, {
        scrollTrigger: {
            trigger: ".parallax_about",
            start: '15% top',
            end: '25% top',
            scrub: 2,
        },
        opacity: 1,
        ease: 'power3.inOut',
        y: 0,
    });
    gsap.to( aboutText, {
        scrollTrigger: {
            trigger: ".parallax_about",
            start: '25% top',
            end: '65% top',
            scrub: 2.5,
        },
        x: -100,
    });
};

// Interest title
const interestTitle = document.querySelector("#interest-link h1");

if (window.matchMedia('(max-width: 428px)').matches) { //Mobile
    gsap.set( interestTitle, {
        opacity: 0,
        y: 200,
        x: -500,
    });
    gsap.to( interestTitle, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: '30% top',
            end: '35% top',
            scrub: scrubValue,
        },
        opacity: 1,
        ease: 'power3.inOut',
        y: 150,
    });
    gsap.to( interestTitle, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: '35%  top',
            end: '140% top',
            scrub: scrubValue,
        },
        x: 1000,
    });
} else if (window.matchMedia('(min-width:429px)').matches && window.matchMedia('(max-width: 1024px)').matches) { //Tablet
    gsap.set( interestTitle, {
        opacity: 0,
        y: 50,
        x: -500,
    });
    gsap.to( interestTitle, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: '30% top',
            end: '40% top',
            scrub: scrubValue,
        },
        opacity: 1,
        ease: 'power3.inOut',
        y: -50,
    });
    gsap.to( interestTitle, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: '40%  top',
            end: '140% top',
            scrub: scrubValue,
        },
        x: 1000,
    });
} else { //PC
    gsap.set( interestTitle, {
        opacity: 0,
        y: 50,
        x: -200,
    });
    gsap.to( interestTitle, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: '40% top',
            end: '50% top',
            scrub: 2,
        },
        opacity: 1,
        ease: 'power3.inOut',
        y: 0,
    });
    gsap.to( interestTitle, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: '40%  top',
            end: '150% top',
            scrub: 2.5,
        },
        x: 1000,
    });   
};


// Interest text
const interestText = document.querySelector("#interest-link div");
if (window.matchMedia('(max-width: 428px)').matches) { //Mobile
    gsap.set( interestText, {
        opacity: 0,
        y: 50,
        x: 100,
    });
    gsap.to( interestText, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: '40% top',
            end: '45% top',
            scrub: scrubValue,
        },
        opacity: 1,
        ease: 'power3.inOut',
        y: 0,
    });
    gsap.to( interestText, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: '45% top',
            end: '95% top',
            scrub: scrubValue,
        },
        x: -100,
    });
} else if (window.matchMedia('(min-width:429px)').matches && window.matchMedia('(max-width: 1024px)').matches) { //Tablet
    gsap.set( interestText, {
        opacity: 0,
        y: 200,
        x: -300,
    });
    gsap.to( interestText, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: '40% top',
            end: '50% top',
            scrub: scrubValue,
        },
        opacity: 1,
        ease: 'power3.inOut',
        y: 0,
    });
    gsap.to( interestText, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: '50% top',
            end: '90% top',
            scrub: scrubValue,
        },
        x: -200,
    });
} else { //PC
    gsap.set( interestText, {
        opacity: 0,
        y: 50,
        x: 100,
    });
    gsap.to( interestText, {
        opacity: 1,
        ease: 'power3.inOut',
        y: 0,
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: '45% top',
            end: '55% top',
            scrub: 2,
        }
    });
    gsap.to( interestText, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: '50% top',
            end: '90% top',
            scrub: 2.5,
        },
        x: -100,
    });
};

// Portfolios title
const portfoliosTitle = document.querySelector(".title_wraper h1");
if (window.matchMedia('(max-width: 428px)').matches) { //Mobile
    gsap.set( portfoliosTitle, {
        opacity: 0,
        x: -200,
        y: 0,
        rotate: 90,
    });
    gsap.to( portfoliosTitle, .5, {
        scrollTrigger: {
            trigger: "#portfolio-link",
            start: '70% top',
            end: '85% top',
            scrub: scrubValue,
        },
        opacity: 1,
        ease: 'power3.inOut',
        y: -80,
    });
} else if (window.matchMedia('(min-width:429px)').matches && window.matchMedia('(max-width: 1024px)').matches) { //Tablet
    gsap.set( portfoliosTitle, {
        opacity: 0,
        x: -500,
        y: 500,
        rotate: 90,
    });
    gsap.to( portfoliosTitle, .5, {
        scrollTrigger: {
            trigger: "#portfolio-link",
            start: '75% top',
            end: '95% top',
            scrub: scrubValue,
        },
        opacity: 1,
        ease: 'power3.inOut',
        y: -700,
    });
} else { //PC
    gsap.set( portfoliosTitle, {
        opacity: 0,
        y: -400,
        x: -250,
    });
    gsap.to( portfoliosTitle, .5, {
        scrollTrigger: {
            trigger: "#portfolio-link",
            start: '60% top',
            end: '80% top',
            scrub: 2,
        },
        opacity: 1,
        ease: 'power3.inOut',
        y: 100,
    });
    gsap.to( portfoliosTitle, .5, {
        scrollTrigger: {
            trigger: "#portfolio-link",
            start: '70% top',
            end: '160% top',
            scrub: 2.5,
        },
        x: 1000,
    });
};


// Parallax photo //
// Lemon
const lemonPhoto = document.querySelector(".para_photo_lemon");
if (window.matchMedia('(max-width: 428px)').matches) { //Mobile
    gsap.set( lemonPhoto, {
        y: 0,
        x: -100,
    });
    gsap.to( lemonPhoto, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: 'top top',
            end: '50% top',
            scrub: scrubValue,
        },
        ease: 'power3.inOut',
        scale: 1.6,
        x: -300,
    });
} else if (window.matchMedia('(min-width:429px)').matches && window.matchMedia('(max-width: 1024px)').matches) { //Tablet
    gsap.set( lemonPhoto, {
        y: 0,
        x: 100,
    });
    gsap.to( lemonPhoto, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: 'top top',
            end: '50% top',
            scrub: scrubValue,
        },
        ease: 'power3.inOut',
        scale: 1.4,
        x: -300,
    });
} else { //PC
    gsap.set( lemonPhoto, {
        y: 0,
        x: 100,
    });
    gsap.to( lemonPhoto, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: 'top top',
            end: '50% top',
            scrub: scrubValue,
        },
        ease: 'power3.inOut',
        scale: 1.4,
        x: -300,
        y: -50,
    });
};

// Sapporo
const sapporoPhoto = document.querySelector(".para_photo_sapporo");

if (window.matchMedia('(max-width: 428px)').matches) { //Mobile
    gsap.set( sapporoPhoto, {
        y: 0,
        x: -200,
    });
    gsap.to( sapporoPhoto, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: 'top top',
            end: '70% top',
            scrub: scrubValue,
        },
        ease: 'power3.inOut',
        scale: 0.8,
        x: 100,
    });
} else if (window.matchMedia('(min-width:429px)').matches && window.matchMedia('(max-width: 1024px)').matches) { //Tablet
    gsap.set( sapporoPhoto, {
        y: 0,
        x: -300,
    });
    gsap.to( sapporoPhoto, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: 'top top',
            end: '70% top',
            scrub: scrubValue,
        },
        ease: 'power3.inOut',
        scale: 0.8,
        x: 200,
    });
} else { //PC
    gsap.set( sapporoPhoto, {
        y: 0,
        x: -200,
    });
    gsap.to( sapporoPhoto, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: 'top top',
            end: '70% top',
            scrub: scrubValue,
        },
        ease: 'power3.inOut',
        scale: 0.7,
        x: 50,
        y: 10,
    });   
};

// Autumn
const autumnPhoto = document.querySelector(".para_photo_autumn");
if (window.matchMedia('(max-width: 428px)').matches) { //Mobile
        gsap.set( autumnPhoto, {
        y: 0,
        x: -600,
    });
    gsap.to( autumnPhoto, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: '40% top',
            end: 'bottom top',
            scrub: scrubValue,
        },
        ease: 'power3.inOut',
        scale: 0.7,
        x: 100,
    });
} else if (window.matchMedia('(min-width:429px)').matches && window.matchMedia('(max-width: 1024px)').matches) { //Tablet
    gsap.set( autumnPhoto, {
        y: 0,
        x: -400,
    });
    gsap.to( autumnPhoto, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: '40% top',
            end: 'bottom top',
            scrub: scrubValue,
        },
        ease: 'power3.inOut',
        scale: 0.8,
        x: 100,
    });
} else { //PC
    gsap.set( autumnPhoto, {
        y: 0,
        x: -200,
    });
    gsap.to( autumnPhoto, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: '20% top',
            end: '80% top',
            scrub: scrubValue,
        },
        ease: 'power3.inOut',
        scale: 0.7,
        x: 50,
        y: 100,
    });
};

// Starry
const starryPhoto = document.querySelector(".para_photo_starry");
if (window.matchMedia('(max-width: 428px)').matches) { //Mobile
    gsap.set( starryPhoto, {
        x: -400,
    });
    gsap.to( starryPhoto, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: '30% top',
            end: 'bottom top',
            scrub: scrubValue,
        },
        ease: 'power3.inOut',
        scale: 2,
        x: -800,
    });
} else if (window.matchMedia('(min-width:429px)').matches && window.matchMedia('(max-width: 1024px)').matches) { //Tablet
    gsap.set( starryPhoto, {
        x: 400,
    });
    gsap.to( starryPhoto, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: '50% top',
            end: '120% top',
            scrub: scrubValue,
        },
        ease: 'power3.inOut',
        scale: 1.8,
        x: -800,
    });
} else { //PC
    gsap.set( starryPhoto, {
        x: 200,
        y: 100,
    });
    gsap.to( starryPhoto, {
        scrollTrigger: {
            trigger: ".parallax_interest",
            start: '20% top',
            end: '80% top',
            scrub: scrubValue,
        },
        ease: 'power3.inOut',
        scale: 1.7,
        x: -900,
        y: -150,
    });
};


///////////////////////////////////////////////////////////////////////////////////////
    

// Navigation //
// Navigation clickAction 
// Processing on toggle button click
const navBtn = document.querySelector(".nav-btn");
const navWraper = document.querySelector(".nav-wraper");

// Menu button click
navBtn.addEventListener('click', () => {
    // Menu display
    navBtn.classList.toggle("active");
    navWraper.classList.toggle("open");
});
// Processing on link click
const navLists = document.querySelectorAll(".nav-list a");
navLists.forEach((navList) => {
  navList.addEventListener("click", () => {
    navBtn.classList.remove("active");
    navWraper.classList.remove("open");
  });
});




// Loading screen movement //
// Viewing history  
if(!sessionStorage.getItem('visited')) {
    sessionStorage.set
};
    
// Loading countup
window.onload = () => {
    const value = document.getElementById('value');
    const loading = document.querySelector(".loading");
    const body = document.querySelector("body");

    let i = 0;
    let maximumNumber = 100;
    let speed = 50;
  
    let timerId = setInterval(() => {
        value.innerHTML = `${i}`;
        i ++;
        if(i > maximumNumber) {
            clearInterval(timerId);
        };
    }, speed);
    
    setTimeout(() => {
        loading.classList.add("loading_finish");
    }, 5000);
    setTimeout(() => {
        loading.classList.add("loading_finish_a");
        body.classList.remove("display_fixde");
    }, 7200);
};
