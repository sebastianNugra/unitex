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

// TOUR — first-time guided tour (index.html only)

const TOUR_KEY = "tour-visto";

function initTour() {

    const productsSection = document.getElementById("products");
    if (!productsSection) return;

    if (localStorage.getItem(TOUR_KEY)) return;

    const steps = [
        {
            target: ".logo",
            title: i18n.t("tour-welcome-title"),
            desc: i18n.t("tour-welcome-desc"),
        },
        {
            target: "#products",
            title: i18n.t("tour-products-title"),
            desc: i18n.t("tour-products-desc"),
        },
        {
            target: "#location",
            title: i18n.t("tour-location-title"),
            desc: i18n.t("tour-location-desc"),
        },
    ];

    const overlay = document.createElement("div");
    overlay.className = "tour-overlay";

    const tooltip = document.createElement("div");
    tooltip.className = "tour-tooltip";
    tooltip.innerHTML = `
        <h4 class="tour-title"></h4>
        <p class="tour-desc"></p>
        <div class="tour-nav">
            <button class="tour-btn tour-skip"></button>
            <button class="tour-btn tour-ok"></button>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(tooltip);

    const titleEl = tooltip.querySelector(".tour-title");
    const descEl = tooltip.querySelector(".tour-desc");
    const btnSkip = tooltip.querySelector(".tour-skip");
    const btnOk = tooltip.querySelector(".tour-ok");

    let current = 0;

    function positionOn(target) {
        const el = typeof target === "string" ? document.querySelector(target) : target;
        if (!el) return;

        el.scrollIntoView({ behavior: "smooth", block: "center" });

        const rect = el.getBoundingClientRect();
        const pad = 8;

        overlay.style.boxShadow = `
            0 0 0 9999px rgba(0, 0, 0, .55),
            0 0 0 ${pad}px rgba(255, 255, 255, .18)
        `;

        window.clearTimeout(positionOn._t);
        positionOn._t = window.setTimeout(() => {

            const r = el.getBoundingClientRect();

            tooltip.style.top = (r.bottom + 14) + "px";

            let left = r.left + r.width / 2 - 150;
            const vw = window.innerWidth;
            if (left < 12) left = 12;
            if (left + 300 > vw - 12) left = vw - 312;

            tooltip.style.left = left + "px";
            tooltip.classList.add("visible");
        }, 350);
    }

    function render() {
        const step = steps[current];
        titleEl.textContent = step.title;
        descEl.textContent = step.desc;
        btnOk.textContent = current === steps.length - 1 ? i18n.t("tour-finish") : i18n.t("tour-next");
        btnSkip.textContent = i18n.t("tour-skip");
        positionOn(step.target);
    }

    function finish() {
        localStorage.setItem(TOUR_KEY, "1");
        overlay.remove();
        tooltip.remove();
        document.removeEventListener("keydown", onKey);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
    }

    function onKey(e) {
        if (e.key === "Escape") finish();
    }

    function onScroll() {
        const step = steps[current];
        const el = document.querySelector(step.target);
        if (el) positionOn(el);
    }

    btnSkip.addEventListener("click", finish);
    btnOk.addEventListener("click", () => {
        if (current < steps.length - 1) {
            current++;
            render();
        } else {
            finish();
        }
    });

    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);

    render();

}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTour);
} else {
    initTour();
}
