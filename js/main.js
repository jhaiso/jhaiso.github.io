const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

rotateDegree = 0;

function update(cursorPosition) {
    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx, speedy = el.dataset.speedy, speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;
        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1: -1;
        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1; 

        el.style.transform=`translateX(calc(-50% + ${-xValue * speedx}px)) 
                            translateY(calc(-50% + ${yValue * speedy}px))
                            perspective(2300px)
                            translateZ(${zValue * speedz}px)
                            rotateY(${rotateDegree * rotateSpeed}deg)
                            `
    });
}

update(0);

window.addEventListener("mousemove", (e) => {

    if(timeline.isActive()) return;

    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

    update(e.clientX);
});

/* ================ INTRO GSAP ANIMATION ====================== */
let timeline = gsap.timeline();

Array.from(parallax_el)
    .filter(el => !el.classList.contains("text"))
    .forEach(el => {
        timeline.from(
            el,
            {
                top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
                duration: 3,
                ease: "power3.out",
            },
            "1"
        );
})

timeline.from(
    ".text h1", {
        y: window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top + 200,
        duration: 2,
    },
    "2.5"
)
.from(
    ".text h2", {
        y: -150,
        opacity: 0,
        duration: 1.5,
    },
    "3"
)
.from(
    ".hide",{
        opacity: 0,
        duration: 1.5,
    },
    "3"
);

gsap.registerPlugin(ScrollTrigger);
/* ================ ABOUT GSAP ANIMATION ====================== */
gsap.from("#profile-body", {
    opacity: 0,
    ease: "power3.inOut",
    duration: 5,
    scrollTrigger: {
        trigger: "#profile-body",
        start: () => `top ${0.75 * window.innerHeight}px`, // 70vh
        end: () => `top ${0.35 * window.innerHeight}px`,   // 30vh
        scrub: 3,
    }
});

gsap.from("#about-subhead", {
    opacity: 0,
    x: 200,
    ease: "power3.inOut",
    duration: 5,
    scrollTrigger: {
        trigger: "#profile-body",
        start: () => `top ${0.75 * window.innerHeight}px`, // 70vh
        end: () => `top ${0.35 * window.innerHeight}px`,   // 30vh
        scrub: 3,
    }
});

gsap.from("#about-title", {
    opacity: 0,
    x: 300,
    ease: "power3.inOut",
    duration: 5,
    scrollTrigger: {
        trigger: "#profile-body",
        start: () => `top ${0.75 * window.innerHeight}px`, // 70vh
        end: () => `top ${0.35 * window.innerHeight}px`,   // 30vh
        scrub: 3,
    }
});

gsap.from("#tower", {
    opacity: 0,
    y: -200,
    ease: "power3.inOut",
    duration: 5,
    scrollTrigger: {
        trigger: "#profile-body",
        start: () => `top ${0.75 * window.innerHeight}px`, // 70vh
        end: () => `top ${0.35 * window.innerHeight}px`,   // 30vh
        scrub: 3,
    }
});


gsap.from("#about-description", {
    opacity: 0,
    ease: "power3.inOut",
    duration: 5,
    scrollTrigger: {
        trigger: "#profile-body",
        start: () => `top ${0.75 * window.innerHeight}px`, // 70vh
        end: () => `top ${0.35 * window.innerHeight}px`,   // 30vh
        scrub: 3,
    }
});


/* ================ WORK GSAP ANIMATION ====================== */

gsap.from("#work-experience-title", {
    opacity: 0,
    ease: "power3.inOut",
    duration: 5,
    scrollTrigger: {
        trigger: "#musc",
        start: () => `top ${0.95 * window.innerHeight}px`, // 70vh
        end: () => `top ${0.75 * window.innerHeight}px`,   // 30vh
        scrub: 3,
    }
});

gsap.from("#boeing", {
    x: -300,
    opacity: 0,
    ease: "power3.inOut",
    duration: 5,
    scrollTrigger: {
        trigger: "#boeing",
        start: () => `top ${0.95 * window.innerHeight}px`, // 70vh
        end: () => `top ${0.75 * window.innerHeight}px`,   // 30vh
        scrub: 3,
    }
});

gsap.from(".plane", {
    x: 300,
    y: 200,
    opacity: 0,
    ease: "power3.inOut",
    duration: 5,
    scrollTrigger: {
        trigger: "#boeing",
        start: () => `top ${0.95 * window.innerHeight}px`, // 70vh
        end: () => `top ${0.75 * window.innerHeight}px`,   // 30vh
        scrub: 3,
    }
});

gsap.from(".boeing", {
    opacity: 0,
    ease: "power3.inOut",
    duration: 5,
    scrollTrigger: {
        trigger: "#boeing",
        start: () => `top ${0.95 * window.innerHeight}px`, // 70vh
        end: () => `top ${0.75 * window.innerHeight}px`,   // 30vh
        scrub: 3,
    }
});

gsap.from("#aristocrat", {
    x: 300,
    opacity: 0,
    ease: "power3.inOut",
    duration: 5,
    scrollTrigger: {
        trigger: "#aristocrat",
        start: () => `top ${0.95 * window.innerHeight}px`, // 70vh
        end: () => `top ${0.75 * window.innerHeight}px`,   // 30vh
        scrub: 3,
    }
});

gsap.from(".bull-back", {
    y: 300,
    opacity: 0,
    ease: "power3.inOut",
    duration: 5,
    scrollTrigger: {
        trigger: "#aristocrat",
        start: () => `top ${0.95 * window.innerHeight}px`, // 70vh
        end: () => `top ${0.75 * window.innerHeight}px`,   // 30vh
        scrub: 3,
    }
});

gsap.from(".bull-head", {
    x: -300,
    opacity: 0,
    ease: "power3.inOut",
    duration: 5,
    scrollTrigger: {
        trigger: "#aristocrat",
        start: () => `top ${0.95 * window.innerHeight}px`, // 70vh
        end: () => `top ${0.75 * window.innerHeight}px`,   // 30vh
        scrub: 3,
    }
});

gsap.from("#musc", {
    x: 300,
    opacity: 0,
    ease: "power3.inOut",
    duration: 5,
    scrollTrigger: {
        trigger: "#musc",
        start: () => `top ${0.95 * window.innerHeight}px`, // 70vh
        end: () => `top ${0.75 * window.innerHeight}px`,   // 30vh
        scrub: 3,
    }
});

gsap.from(".musc", {
    y: 300,
    opacity: 0,
    ease: "power3.inOut",
    duration: 5,
    scrollTrigger: {
        trigger: "#musc",
        start: () => `top ${0.95 * window.innerHeight}px`, // 70vh
        end: () => `top ${0.75 * window.innerHeight}px`,   // 30vh
        scrub: 3,
    }
});

gsap.from(".shapes", {
    opacity: 0,
    ease: "power3.inOut",
    duration: 5,
    scrollTrigger: {
        trigger: "#musc",
        start: () => `top ${0.95 * window.innerHeight}px`, // 70vh
        end: () => `top ${0.75 * window.innerHeight}px`,   // 30vh
        scrub: 3,
    }
});