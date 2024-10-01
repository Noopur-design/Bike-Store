



let bar = document.querySelector('.bar');
let closeicon = document.querySelector('.close-icon');
let navlinks = document.querySelector('.navlinks');

function toggleNav() {
    navlinks.classList.toggle('active');

    if (bar.style.display === 'none') {
        bar.style.display = 'block';
        closeicon.style.display = 'none';
    } else {
        bar.style.display = 'none';
        closeicon.style.display = 'block';
    }
}


let cursor = document.querySelector('.cursor')
window.addEventListener("mousemove", function (dets) {
    gsap.to(cursor ,{
        x:dets.x,
        y:dets.y,
        duration:0.6
    })
})


function Breaktext() {
    let h1 = document.querySelector('h1')
let h1text = h1.textContent
var splittext = h1text.split("")
var clutter = " "
splittext.forEach(function (elem) {
    clutter += `<span>${elem}</span>`
})

h1.innerHTML = clutter
}
Breaktext()

gsap.from("h1 span" , {
    y:50,
    duration:0.4,
    delay:0.1,
    opacity:0,
    stagger:0.1,
})















// Ensure the DOM is fully loaded before executing
document.addEventListener('DOMContentLoaded', () => {
    const sections = gsap.utils.toArray('.scrollpage1');

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1), // Move sections horizontally
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-scroll-container",
            pin: true, // Pin the container during scroll
            scrub: 2, // Smooth scroll
            snap: 1 / (sections.length - 1), // Snap to each section
            end: () => "+=" + document.querySelector('.horizontal-scroll-container').offsetWidth // End based on the width of the container
        }
    });
});

