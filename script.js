// MOBILE MENU TOGGLE
const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// HERO SLIDER
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;
const totalSlides = slides.length;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

// NEXT BUTTON
next.addEventListener("click", () => {
    index++;
    if (index >= totalSlides) index = 0;
    showSlide(index);
});

// PREV BUTTON
prev.addEventListener("click", () => {
    index--;
    if (index < 0) index = totalSlides - 1;
    showSlide(index);
});

// AUTO SLIDE
setInterval(() => {
    index++;
    if (index >= totalSlides) index = 0;
    showSlide(index);
}, 4000);

// SMOOTH SCROLL AND ACTIVE NAV
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        navLinks.forEach(a => a.classList.remove("active"));
        this.classList.add("active");

        const target = document.querySelector(this.getAttribute("href"));
        if(target){
            target.scrollIntoView({ behavior: 'smooth' });
        }

        // close mobile menu
        if(navbar.classList.contains("active")){
            navbar.classList.remove("active");
        }
    });
});
