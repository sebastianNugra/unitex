// SWIPER

new Swiper(".home-slider", {

    loop: true,

    speed: 1200,

    autoplay: {

        delay: 5000,

        disableOnInteraction: false,
    },

    effect: "fade",

    fadeEffect: {
        crossFade: true,
    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,
    },

});

// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");

const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});

// CLOSE MENU

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});

// AOS

AOS.init({

    duration: 1000,

    once: true,

});