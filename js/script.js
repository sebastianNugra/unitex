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


// Abrir Card
const viewButtons = document.querySelectorAll(".view-btn");
const modal = document.querySelector(".image-modal");
const modalImg = document.querySelector(".modal-img");
const closeModal = document.querySelector(".close-modal");

viewButtons.forEach(button => {

    button.addEventListener("click", () => {

        const img =
            button.closest(".product-card")
                .querySelector("img");

        modalImg.src = img.src;

        modal.classList.add("active");

    });

});

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {
        modal.classList.remove("active");
    }

});

// ZOOM IMAGE 

let zoomed = false;

modalImg.addEventListener("click", () => {

    if (!zoomed) {

        modalImg.style.transform = "scale(1.8)";
        modalImg.style.cursor = "zoom-out";

        zoomed = true;

    } else {

        modalImg.style.transform = "scale(1)";
        modalImg.style.cursor = "zoom-in";

        zoomed = false;

    }

});