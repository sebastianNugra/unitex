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

            /* Product type buttons */
            "product-casual": "Casual",
            "product-deportivo": "Deportivo",

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
            "hero-deportivo": "Uniforme deportivo para educación física y actividades al aire libre.",

            /* Footer on product pages */
            "footer-product-desc": "Confección y venta de uniformes escolares institucionales. Calidad y compromiso con la educación.",
            "footer-product-copyright": "© 2026 Costuritas Zoe | Todos los Derechos Reservados.",

            /* Price note */
            "price-note": "Precio según talla",
            "theme-toggle": "Cambiar tema",

/* Product descriptions - manuel */
            "desc-man-casaca": "Casaca institucional en color lacre y negro, con el escudo bordado de la institución. Ideal para actos oficiales y académicos.",
            "desc-man-polo": "Camisa polo en color lacre con cuello y ribetes negros. Confeccionada en algodón piqué de alta durabilidad.",
            "desc-man-camisa-hombre": "Camisa blanca formal de manga larga para hombre, cuello ejecutivo. Confeccionada en algodón y poliéster.",
            "desc-man-blusa-mujer": "Blusa blanca formal de manga larga y corta para mujer, cuello ejecutivo. Confeccionada en algodón y poliéster.",
            "desc-man-pantalon": "Pantalón de tela color negro, gabardina de alta durabilidad. Corte clásico recto, cómodo para uso diario.",
            "desc-man-falda": "Falda de tela institucional color negro, corte tableado. Confeccionada en gabardina de alta durabilidad.",

            /* Product descriptions - mary */
            "desc-mary-chompa": "Chompa tejida de color azul marino con cuello en V y el escudo bordado de la institución. Destinada para uso académico e institucional.",
            "desc-mary-polo": "Camisa polo azul marino con cuello y ribetes blancos. Confeccionada en algodón piqué de alta durabilidad.",
            "desc-mary-camisa-hombre": "Camisa blanca formal de manga larga para hombre, cuello ejecutivo. Confeccionada en algodón y poliéster.",
            "desc-mary-blusa-mujer": "Blusa blanca formal para mujer, cuello ejecutivo. Confeccionada en algodón y poliéster.",
            "desc-mary-pantalon": "Pantalón de tela color azul marino, en gabardina. Corte clásico recto, cómodo y resistente.",
            "desc-mary-falda": "Falda de tela institucional tableada color azul marino, con cintura ajustable y pliegues.",

            /* Product descriptions - republica de chile */
            "desc-rep-chompa": "Chompa tejida institucional color rojo con cuello en V, aplicado el escudo institucional. Ideal para actos oficiales y académicos.",
            "desc-rep-camisa-hombre": "Camisa blanca formal de manga larga para hombre, cuello ejecutivo. Confeccionada en algodón y poliéster.",
            "desc-rep-blusa-mujer": "Blusa blanca formal para mujer, cuello ejecutivo. Confeccionada en algodón y poliéster.",
            "desc-rep-pantalon": "Pantalón de tela color gris plomo, en gabardina. Corte clásico recto, cómodo y resistente.",
            "desc-rep-falda": "Falda de tela tableada institucional color gris plomo, con cintura ajustable.",

            /* Product descriptions - zoila */
            "desc-zo-chompa": "Chompa tejida institucional color azul marino con cuello en V, ribetes blancos y escudo bordado de la institución.",
            "desc-zo-falda": "Falda de tela tableada color azul marino, con cintura ajustable y tela de gabardina.",
            "desc-zo-camisa-hombre": "Camisa blanca formal de manga larga para hombre, cuello ejecutivo. Confeccionada en algodón y poliéster.",
            "desc-zo-blusa-mujer": "Blusa blanca formal para mujer, cuello ejecutivo. Confeccionada en algodón y poliéster.",
            "desc-zo-pantalon": "Pantalón de tela color azul marino, en gabardina. Corte clásico recto, cómodo y resistente.",

            /* Product descriptions - deporte manuel */
            "desc-dman-camiseta": "Camiseta deportiva color lacre con cuello y ribetes negros. Ideal para educación física y actividades deportivas.",
            "desc-dman-pantaloneta": "Pantaloneta deportiva color negro con detalles en lacre. Ideal para educación física.",
            "desc-dman-short": "Short deportivo color negro con detalles en lacre. Cómodo y ligero para actividades deportivas.",
            "desc-dman-pantalon": "Pantalón deportivo color gris oscuro con detalles en lacre. Forro interior suave, ideal para días fríos.",
            "desc-dman-chompa": "Chompa deportiva color gris oscuro con detalles en lacre. Cómoda para el abrigo en actividades deportivas.",

            /* Product descriptions - deporte mary */
            "desc-dmary-pantaloneta": "Pantaloneta deportiva color azul marino con detalles en blanco. Ideal para educación física.",
            "desc-dmary-short": "Short deportivo azul marino con detalles en blanco. Cómodo y ligero para actividades deportivas.",
            "desc-dmary-pantalon": "Pantalón deportivo color gris con detalles en azul marino. Ideal para actividades al aire libre.",
            "desc-dmary-chompa": "Chompa deportiva color gris con detalles en azul marino. Ideal para el abrigo en actividades deportivas.",

            /* Product descriptions - deporte republica */
            "desc-drep-camiseta": "Camiseta deportiva color rojo institucional con detalles en blanco. Ideal para educación física y actividades deportivas.",
            "desc-drep-pantaloneta": "Pantaloneta deportiva color rojo con detalles en blanco. Ideala para educación física.",
            "desc-drep-short": "Short deportivo rojo con detalles en blanco. Cómodo y ligero para actividades deportivas.",
            "desc-drep-pantalon": "Pantalón deportivo color gris con detalles en rojo. Ideal para actividades al aire libre.",
            "desc-drep-chompa": "Chompa deportiva color gris con detalles en rojo. Ideal para el abrigo en actividades deportivas.",

            /* Product descriptions - deporte zoila */
            "desc-dzo-camiseta": "Camiseta deportiva color azul marino con detalles en blanco. Ideal para educación física.",
            "desc-dzo-pantaloneta": "Pantaloneta deportiva color azul marino con detalles en blanco. Ideal para educación física.",
            "desc-dzo-short": "Short deportivo azul marino con detalles en blanco. Cómodo y ligero para actividades deportivas.",
            "desc-dzo-pantalon": "Pantalón deportivo color gris con detalles en azul marino. Ideal para actividades al aire libre.",
            "desc-dzo-chompa": "Chompa deportiva color gris con detalles en azul marino. Ideal para disfrutar de las actividades deportivas.",

            /* Tour */
            "tour-eye-desc": "Vista previa del uniforme.",
            "tour-catalog-desc": "Pulsa el botón para desplegar catálogo completo.",
            "tour-location-title": "Cómo llegar",
            "tour-location-desc": "Pulsa este botón para ir directo a la ubicación del local.",
            "tour-next": "Siguiente",
            "tour-skip": "Saltar",
            "tour-finish": "Listo",
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

            /* Product type buttons */
            "product-casual": "Casual",
            "product-deportivo": "Sports",

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
            "hero-deportivo": "Sports uniform for physical education and outdoor activities.",

            /* Footer on product pages */
            "footer-product-desc": "Manufacturing and sale of institutional school uniforms. Quality and commitment to education.",
            "footer-product-copyright": "© 2026 Costuritas Zoe | All Rights Reserved.",

            /* Price note */
            "price-note": "Price by size",
            "theme-toggle": "Toggle theme",

/* Product descriptions - manuel */
            "desc-man-casaca": "Institutional jacket in seal and black with the embroidered school emblem. Ideal for official and academic events.",
            "desc-man-polo": "Seal polo shirt with black collar and trim. Made of high-durability piqué cotton.",
            "desc-man-camisa-hombre": "White formal long-sleeve shirt for men, executive collar. Made of cotton and polyester.",
            "desc-man-blusa-mujer": "White formal blouse for women, long and short sleeve, executive collar. Made of cotton and polyester.",
            "desc-man-pantalon": "Black fabric trousers, high-durability gabardine. Classic straight cut, comfortable for daily wear.",
            "desc-man-falda": "Institutional black fabric pleated skirt. Made of high-durability gabardine.",

            /* Product descriptions - mary */
            "desc-mary-chompa": "Navy blue knitted jumper with V-neck and the embroidered school emblem. Made for academic and institutional use.",
            "desc-mary-polo": "Navy blue polo shirt with white collar and trim. Made of high-durability piqué cotton.",
            "desc-mary-camisa-hombre": "White formal long-sleeve shirt for men, executive collar. Made of cotton and polyester.",
            "desc-mary-blusa-mujer": "White formal blouse for women, executive collar. Made of cotton and polyester.",
            "desc-mary-pantalon": "Navy blue fabric trousers, in gabardine. Classic straight cut, comfortable and durable.",
            "desc-mary-falda": "Institutional pleated navy blue fabric skirt, with adjustable waist and pleats.",

            /* Product descriptions - republica de chile */
            "desc-rep-chompa": "Institutional red knitted jumper with V-neck and the institutional emblem. Ideal for official and academic events.",
            "desc-rep-camisa-hombre": "White formal long-sleeve shirt for men, executive collar. Made of cotton and polyester.",
            "desc-rep-blusa-mujer": "White formal blouse for women, executive collar. Made of cotton and polyester.",
            "desc-rep-pantalon": "Slate gray fabric trousers, in gabardine. Classic straight cut, comfortable and durable.",
            "desc-rep-falda": "Institutional pleated slate gray fabric skirt, with adjustable waist.",

            /* Product descriptions - zoila */
            "desc-zo-chompa": "Institutional navy blue knitted jumper with V-neck, white trim and the embroidered school emblem.",
            "desc-zo-falda": "Pleated navy blue fabric skirt, with adjustable waist and gabardine fabric.",
            "desc-zo-camisa-hombre": "White formal long-sleeve shirt for men, executive collar. Made of cotton and polyester.",
            "desc-zo-blusa-mujer": "White formal blouse for women, executive collar. Made of cotton and polyester.",
            "desc-zo-pantalon": "Navy blue fabric trousers, in gabardine. Classic straight cut, comfortable and durable.",

            /* Product descriptions - sport manuel */
            "desc-dman-camiseta": "Seal sports t-shirt with black collar and trim. Ideal for physical education and sports activities.",
            "desc-dman-pantaloneta": "Black sports shorts with seal details. Ideal for physical education.",
            "desc-dman-short": "Black sports short with seal details. Comfortable and light for sports activities.",
            "desc-dman-pantalon": "Dark gray sports trousers with seal details. Soft inner lining, ideal for cold days.",
            "desc-dman-chompa": "Dark gray sports jacket with seal details. Great for keeping warm during sports activities.",

            /* Product descriptions - sport mary */
            "desc-dmary-pantaloneta": "Navy blue sports shorts with white details. Ideal for physical education.",
            "desc-dmary-short": "Navy blue sports short with white details. Comfortable and light for sports activities.",
            "desc-dmary-pantalon": "Gray sports trousers with navy blue details. Ideal for outdoor activities.",
            "desc-dmary-chompa": "Gray sports jacket with navy blue details. Ideal for keeping warm during sports activities.",

            /* Product descriptions - sport republica */
            "desc-drep-camiseta": "Institutional red sports t-shirt with white details. Ideal for physical education and sports activities.",
            "desc-drep-pantaloneta": "Red sports shorts with white details. Ideal for physical education.",
            "desc-drep-short": "Red sports short with white details. Comfortable and light for sports activities.",
            "desc-drep-pantalon": "Gray sports trousers with red details. Ideal for outdoor activities.",
            "desc-drep-chompa": "Gray sports jacket with red details. Ideal for keeping warm during sports activities.",

            /* Product descriptions - sport zoila */
            "desc-dzo-camiseta": "Navy blue sports t-shirt with white details. Ideal for physical education.",
            "desc-dzo-pantaloneta": "Navy blue sports shorts with white details. Ideal for physical education.",
            "desc-dzo-short": "Navy blue sports short with white details. Comfortable and light for sports activities.",
            "desc-dzo-pantalon": "Gray sports trousers with navy blue details. Ideal for outdoor activities.",
            "desc-dzo-chompa": "Gray sports jacket with navy blue details. Perfect for enjoying sports activities.",

            /* Tour */
            "tour-eye-desc": "Uniform preview.",
            "tour-catalog-desc": "Click the button to open the full catalog.",
            "tour-location-title": "Directions",
            "tour-location-desc": "Click this button to go straight to the store location.",
            "tour-next": "Next",
            "tour-skip": "Skip",
            "tour-finish": "Done",
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
