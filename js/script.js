// SWIPER — only on pages that have the slider
const homeSlider = document.querySelector(".home-slider");

if (homeSlider) {

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

}

// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");

const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

    document.querySelectorAll(".navbar a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

        });

    });

}

// AOS

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 1000,

        once: true,

    });

}

// THEME TOGGLE (light / dark)

const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    if (themeIcon) {
        themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }
}

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") || "light";
        applyTheme(current === "dark" ? "light" : "dark");
    });
}


// MODAL — image preview / zoom

const viewButtons = document.querySelectorAll(".view-btn");
const modal = document.querySelector(".image-modal");
const modalImg = document.querySelector(".modal-img");
const closeModal = document.querySelector(".close-modal");

if (modal && modalImg && closeModal) {

    viewButtons.forEach(button => {

        button.addEventListener("click", () => {

            const card = button.closest(".product-card");

            if (!card) return;

            const img = card.querySelector("img");

            if (!img) return;

            modalImg.src = img.src;

            modal.classList.add("active");

        });

    });

    closeModal.addEventListener("click", () => {
        modal.classList.remove("active");
        resetZoom();
    });

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {
            modal.classList.remove("active");
            resetZoom();
        }

    });

    let zoomed = false;

    modalImg.addEventListener("click", () => {

        if (!zoomed) {

            modalImg.style.transform = "scale(1.8)";
            modalImg.style.cursor = "zoom-out";

            zoomed = true;

        } else {

            resetZoom();

        }

    });

    function resetZoom() {
        modalImg.style.transform = "scale(1)";
        modalImg.style.cursor = "zoom-in";
        zoomed = false;
    }

}
