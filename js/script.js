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

    if (themeIcon) {
        themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }

    const logo = document.querySelector(".logo img");
    if (logo) {
        const dir = logo.src.substring(0, logo.src.lastIndexOf("/") + 1);
        logo.src = dir + (theme === "dark" ? "CZW.png" : "logoCZ.png");
    }
}

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") || "light";
        const next = current === "dark" ? "light" : "dark";
        localStorage.setItem("theme", next);
        applyTheme(next);
    });
}


// MOBILE MENU (toggles the header-actions dropdown on mobile)

const menuBtn = document.getElementById("menu-btn");
const headerActions = document.getElementById("header-actions");

if (menuBtn && headerActions) {
    menuBtn.addEventListener("click", () => {
        headerActions.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!menuBtn.contains(e.target) && !headerActions.contains(e.target)) {
            headerActions.classList.remove("active");
        }
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

// TOUR — first-time scroll-triggered tips (index.html only)

const TOUR_KEY = "tour-visto";

function initTour() {

    const productsSection = document.getElementById("products");
    if (!productsSection) return;

    if (localStorage.getItem(TOUR_KEY)) return;

    const callouts = [
        {
            target: ".product-card .view-btn",
            title: i18n.t("tour-eye-title"),
            desc: i18n.t("tour-eye-desc"),
        },
        {
            target: ".product-card .product-buttons",
            title: i18n.t("tour-catalog-title"),
            desc: i18n.t("tour-catalog-desc"),
        },
        {
            target: ".location-buttons .btn",
            title: i18n.t("tour-location-title"),
            desc: i18n.t("tour-location-desc"),
        },
    ];

    let current = 0;
    let showing = false;

    const bubble = document.createElement("div");
    bubble.className = "tour-bubble";
    bubble.innerHTML = `
        <button class="tour-bubble-close" aria-label="Cerrar">&times;</button>
        <h4 class="tour-title"></h4>
        <p class="tour-desc"></p>
    `;
    document.body.appendChild(bubble);

    const titleEl = bubble.querySelector(".tour-title");
    const descEl = bubble.querySelector(".tour-desc");
    const closeBtn = bubble.querySelector(".tour-bubble-close");

    let hideTimer = null;
    let currentEl = null;
    let dismissed = false;

    function position() {
        if (!showing || !currentEl) return;
        const r = currentEl.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) return;

        bubble.style.display = "block";
        bubble.classList.add("visible");

        const bw = bubble.offsetWidth;
        const bh = bubble.offsetHeight;

        let top = r.bottom + 12;
        let left = r.left + r.width / 2 - bw / 2;

        if (top + bh > window.innerHeight) {
            top = r.top - bh - 12;
        }
        if (left < 10) left = 10;
        if (left + bw > window.innerWidth - 10) left = window.innerWidth - bw - 10;

        bubble.style.top = top + "px";
        bubble.style.left = left + "px";
    }

    function showCallout() {
        if (current >= callouts.length) { finish(); return; }
        if (showing) return;

        const callout = callouts[current];
        currentEl = document.querySelector(callout.target);
        if (!currentEl) { current++; showCallout(); return; }

        const r = currentEl.getBoundingClientRect();
        const inView = r.top < window.innerHeight * 0.75 && r.bottom > 0;
        if (!inView) return;

        showing = true;
        titleEl.textContent = callout.title;
        descEl.textContent = callout.desc;
        position();

        window.clearTimeout(hideTimer);
        hideTimer = window.setTimeout(() => {
            showing = false;
            bubble.classList.remove("visible");
            window.setTimeout(() => { bubble.style.display = "none"; }, 300);
            current++;
            window.setTimeout(showCallout, 400);
        }, 6000);
    }

    closeBtn.addEventListener("click", () => {
        showing = false;
        bubble.classList.remove("visible");
        window.setTimeout(() => { bubble.style.display = "none"; }, 300);
        current++;
        showCallout();
    });

    function onScroll() {
        position();
        showCallout();
    }

    function finish() {
        localStorage.setItem(TOUR_KEY, "1");
        bubble.remove();
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    showCallout();

}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTour);
} else {
    initTour();
}
