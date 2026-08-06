const i18n = {
    currentLang: localStorage.getItem("lang") || "es",

    translations: {
        es: {
            /* Navbar */
            "nav-home": "Inicio",
            "nav-products": "Productos",
            "nav-location": "Ubicación",
            "nav-location-contact": "Ubicación / Contacto",

            /* Hero */
            "hero-span": "COLECCIÓN ESCOLAR",
            "hero-title-1": "Prendas Escolares",
            "hero-desc-1": "Uniformes y accesorios de uso académico.",
            "hero-btn": "Ver Colección",
            "hero-title-2": "Uniformes y Accesorios",
            "hero-desc-2": "Prendas para uso académico y diario.",

            /* Products section */
            "section-products-span": "COLECCIÓN ESCOLAR",
            "section-products-title": "Uniformes por Colegio",

            /* Product cards - index */
            "rep-chile-desc": "Chompa institucional color rojo con cuello en V, aplicado el nuevo escudo institucional.",
            "mary-corile-desc": "Chompa de color azul marino con cuello en V, destinada para uso académico e institucional.",
            "manuel-calle-desc": "Diseño institucional en color lacre y negro, elaborado para actividades académicas y actos oficiales.",
            "zoila-desc": "Uniformes institucionales completos. Diseño en azul y blanco, para actividades académicas y deportivas.",
            "herlinda-desc": "Uniformes institucionales completos. Diseño en morado y blanco, para actividades académicas y deportivas.",

            /* Product type buttons */
            "product-casual": "Casual",
            "product-deportivo": "Deportivo",
            "product-new": "Nuevo",

            /* Location */
            "location-span": "UBICACIÓN",
            "location-title": "Encuéntranos",
            "location-desc": "Contáctanos directamente para conocer los uniformes escolares que disponemos.",
            "location-address-label": "Dirección",
            "location-address": "Cuenca, Ecuador",
            "location-phone-label": "Teléfonos",
            "location-email-label": "Email",
            "location-hours-label": "Horario",
            "location-hours": "Lun – Vie: 8:00 – 19:00 | Sáb: 9:00 – 18:00",
            "location-directions": "Cómo llegar",

            /* Footer */
            "footer-brand-desc": "Confección y venta de uniformes escolares institucionales.",
            "footer-brand-desc-extra": "Realizamos prendas aparte por pedido.",
            "footer-links-title": "Enlaces",
            "footer-schools-title": "Colegios",
            "footer-contact": "Contacto",
            "footer-copyright": "© 2026 Costuritas Zoe | Todos los Derechos Reservados.",

            /* Product pages */
            "breadcrumb-home": "Inicio",
            "breadcrumb-products": "Productos",
            "section-complete": "COLECCIÓN COMPLETA",
            "section-casual": "Uniforme Casual",
            "section-deportivo": "Uniforme Deportivo",
            "back-catalog": "Volver al catálogo",

            /* School hero subtitles */
            "hero-casual-rep": "Uniforme casual para actos oficiales y académicos. Diseño en color rojo institucional.",
            "hero-casual-mary": "Uniforme casual para actos oficiales y académicos. Diseño en azul marino.",
            "hero-casual-manuel": "Uniforme casual para actos oficiales y académicos. Diseño en color lacre y negro.",
            "hero-casual-zoila": "Uniforme casual para actos oficiales y académicos. Diseño en azul y blanco.",
            "hero-casual-herlinda": "Uniforme casual para actos oficiales y académicos. Diseño en morado y blanco.",
            "hero-deportivo": "Uniforme deportivo para educación física y actividades al aire libre.",

            /* Footer on product pages */
            "footer-product-desc": "Confección y venta de uniformes escolares institucionales. Calidad y compromiso con la educación.",
            "footer-product-copyright": "© 2026 Costuritas Zoe | Todos los Derechos Reservados.",

            /* Price note */
            "price-note": "Precio según talla",
            "theme-toggle": "Cambiar tema",
        },

        en: {
            /* Navbar */
            "nav-home": "Home",
            "nav-products": "Products",
            "nav-location": "Location",
            "nav-location-contact": "Location / Contact",

            /* Hero */
            "hero-span": "SCHOOL COLLECTION",
            "hero-title-1": "School Uniforms",
            "hero-desc-1": "Uniforms and accessories for academic use.",
            "hero-btn": "View Collection",
            "hero-title-2": "Uniforms and Accessories",
            "hero-desc-2": "Garments for academic and daily use.",

            /* Products section */
            "section-products-span": "SCHOOL COLLECTION",
            "section-products-title": "Uniforms by School",

            /* Product cards - index */
            "rep-chile-desc": "Institutional red V-neck jumper, featuring the new school emblem.",
            "mary-corile-desc": "Navy blue V-neck jumper, intended for academic and institutional use.",
            "manuel-calle-desc": "Institutional design in seal and black, made for academic activities and official events.",
            "zoila-desc": "Complete institutional uniforms. Blue and white design, for academic and sports activities.",
            "herlinda-desc": "Complete institutional uniforms. Purple and white design, for academic and sports activities.",

            /* Product type buttons */
            "product-casual": "Casual",
            "product-deportivo": "Sports",
            "product-new": "New",

            /* Location */
            "location-span": "LOCATION",
            "location-title": "Find Us",
            "location-desc": "Contact us directly to learn about the school uniforms we have available.",
            "location-address-label": "Address",
            "location-address": "Cuenca, Ecuador",
            "location-phone-label": "Phone",
            "location-email-label": "Email",
            "location-hours-label": "Hours",
            "location-hours": "Mon – Fri: 8:00 – 19:00 | Sat: 9:00 – 18:00",
            "location-directions": "Get Directions",

            /* Footer */
            "footer-brand-desc": "Manufacturing and sale of institutional school uniforms.",
            "footer-brand-desc-extra": "We also make custom garments on order.",
            "footer-links-title": "Links",
            "footer-schools-title": "Schools",
            "footer-contact": "Contact",
            "footer-copyright": "© 2026 Costuritas Zoe | All Rights Reserved.",

            /* Product pages */
            "breadcrumb-home": "Home",
            "breadcrumb-products": "Products",
            "section-complete": "COMPLETE COLLECTION",
            "section-casual": "Casual Uniform",
            "section-deportivo": "Sports Uniform",
            "back-catalog": "Back to catalog",

            /* School hero subtitles */
            "hero-casual-rep": "Casual uniform for official and academic events. Institutional red design.",
            "hero-casual-mary": "Casual uniform for official and academic events. Navy blue design.",
            "hero-casual-manuel": "Casual uniform for official and academic events. Seal and black design.",
            "hero-casual-zoila": "Casual uniform for official and academic events. Blue and white design.",
            "hero-casual-herlinda": "Casual uniform for official and academic events. Purple and white design.",
            "hero-deportivo": "Sports uniform for physical education and outdoor activities.",

            /* Footer on product pages */
            "footer-product-desc": "Manufacturing and sale of institutional school uniforms. Quality and commitment to education.",
            "footer-product-copyright": "© 2026 Costuritas Zoe | All Rights Reserved.",

            /* Price note */
            "price-note": "Price by size",
            "theme-toggle": "Toggle theme",
        },
    },

    t(key) {
        return this.translations[this.currentLang][key] || key;
    },

    translatePage() {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.dataset.i18n;
            const translated = this.t(key);
            const children = el.querySelectorAll("*");
            if (children.length > 0) {
                for (const node of el.childNodes) {
                    if (node.nodeType === 3 && node.textContent.trim()) {
                        node.textContent = translated;
                        break;
                    }
                }
            } else {
                el.textContent = translated;
            }
        });
        document.documentElement.lang = this.currentLang;

        const btn = document.getElementById("lang-btn");
        if (btn) {
            btn.textContent = this.currentLang === "es" ? "EN" : "ES";
            btn.setAttribute("aria-label", this.currentLang === "es" ? "Switch to English" : "Cambiar a español");
        }
    },

    switchLang(lang) {
        if (lang === this.currentLang) return;
        this.currentLang = lang;
        localStorage.setItem("lang", lang);
        this.translatePage();
    },

    init() {
        const saved = localStorage.getItem("lang");
        if (saved && this.translations[saved]) {
            this.currentLang = saved;
        }
        this.translatePage();

        const btn = document.getElementById("lang-btn");
        if (btn) {
            btn.addEventListener("click", () => {
                const next = this.currentLang === "es" ? "en" : "es";
                this.switchLang(next);
            });
        }
    },
};

i18n.init();
