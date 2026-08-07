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

            /* Product descriptions - herlinda */
            "desc-her-chompa": "Chompa institucional color morado con cuello en V, ribetes blancos y escudo bordado de la institución. Ideal para actos oficiales y académicos.",
            "desc-her-pantalon": "Pantalón de vestir color gris oscuro, tela de gabardina. Corte clásico recto, cómodo y resistente para uso diario.",
            "desc-her-camisa": "Camisa blanca formal de manga larga, cuello ejecutivo. Confeccionada en algodón y poliéster para máxima comodidad.",
            "desc-her-zapatos": "Zapatos negros de vestir, estilo colegial. Suela antideslizante y material de cuero sintético de alta resistencia.",
            "desc-her-corbata": "Corbata institucional color morado con detalles blancos. Confeccionada en poliéster de alto brillo y durabilidad.",
            "desc-her-medias": "Medias institucionales color morado con detalles blancos. Tejido suave y resistente para uso diario.",

            /* Product descriptions - manuel */
            "desc-man-chompa": "Diseño institucional en color lacre y negro, cuello en V, con el escudo bordado de la institución. Ideal para actividades académicas y actos oficiales.",
            "desc-man-pantalon": "Pantalón de vestir color negro, tela de gabardina de alta durabilidad. Corte clásico recto, cómodo para uso diario.",
            "desc-man-camisa": "Camisa blanca formal de manga larga, cuello semi ejecutivo. Confeccionada en algodón y poliéster para mayor confort.",
            "desc-man-zapatos": "Zapatos negros de vestir, estilo colegial. Suela antideslizante y material de cuero sintético de alta resistencia.",
            "desc-man-corbata": "Corbata institucional color lacre con detalles en negro. Confeccionada en poliéster de alto brillo y durabilidad.",
            "desc-man-medias": "Medias institucionales color lacre y negro. Tejido suave y resistente para uso diario.",

            /* Product descriptions - mary */
            "desc-mary-chompa": "Chompa de color azul marino con cuello en V, con el escudo bordado de la institución. Destinada para uso académico e institucional.",
            "desc-mary-pantalon": "Pantalón de vestir color azul marino, tela de gabardina. Corte clásico recto, cómodo y resistente para el uso diario.",
            "desc-mary-camisa": "Camisa blanca formal de manga larga, cuello ejecutivo. Confeccionada en algodón y poliéster para máxima comodidad.",
            "desc-mary-falda": "Falda institucional tableada color azul marino. Confeccionada en tela de gabardina, con pliegues y cintura ajustable.",
            "desc-mary-zapatos": "Zapatos negros de vestir, estilo colegial. Suela antideslizante y material de cuero sintético.",
            "desc-mary-corbata": "Corbata institucional color azul marino con detalles. Confeccionada en poliéster de alto brillo y durabilidad.",
            "desc-mary-medias": "Medias institucionales color azul marino. Tejido suave y resistente para uso diario.",

            /* Product descriptions - republica de chile */
            "desc-rep-chompa": "Chompa institucional color rojo con cuello en V, aplicado el nuevo escudo institucional. Ideal para actividades académicas y actos oficiales.",
            "desc-rep-pantalon": "Pantalón de vestir color gris plomo, tela de gabardina. Corte clásico recto, cómodo y resistente para uso diario.",
            "desc-rep-camisa": "Camisa blanca formal de manga larga, cuello ejecutivo. Confeccionada en algodón y poliéster para máxima comodidad.",
            "desc-rep-chaleco": "Chaleco institucional color rojo con bordes blancos. Confeccionado en tela de alta durabilidad y confort.",
            "desc-rep-zapatos": "Zapatos negros de vestir, estilo colegial. Suela antideslizante y material de cuero sintético de alta resistencia.",
            "desc-rep-corbata": "Corbata institucional color rojo con detalles. Confeccionada en poliéster de alto brillo y durabilidad.",
            "desc-rep-medias": "Medias institucionales color rojo con detalles blancos. Tejido suave y resistente para uso diario.",

            /* Product descriptions - zoila */
            "desc-zo-chompa": "Chompa institucional color azul marino con cuello en V, ribetes blancos y escudo bordado de la institución. Ideal para actos oficiales y académicos.",
            "desc-zo-pantalon": "Pantalón de vestir color azul marino, tela de gabardina. Corte clásico recto, cómodo y resistente para uso diario.",
            "desc-zo-camisa": "Camisa blanca formal de manga larga, cuello ejecutivo. Confeccionada en algodón y poliéster para máxima comodidad.",
            "desc-zo-zapatos": "Zapatos negros de vestir, estilo colegial. Suela antideslizante y material de cuero sintético de alta resistencia.",
            "desc-zo-corbata": "Corbata institucional color azul marino con detalles blancos. Confeccionada en poliéster de alto brillo y durabilidad.",
            "desc-zo-medias": "Medias institucionales color azul marino con detalles blancos. Tejido suave y resistente para uso diario.",

            /* Product descriptions - deportivo herlinda */
            "desc-dher-polo": "Polo color morado con cuello y ribetes blancos. Ideal para educación física y actividades deportivas.",
            "desc-dher-buso": "Buso deportivo color gris con detalles en morado. Forro interior suave, ideal para días fríos y actividades al aire libre.",

            /* Product descriptions - deporte manuel */
            "desc-dman-polo": "Polo color lacre con cuello y ribetes negros. Ideal para educación física y actividades deportivas.",
            "desc-dman-buso": "Buso deportivo color gris oscuro con detalles en lacre. Forro interior suave, ideal para días fríos y actividades al aire libre.",

            /* Product descriptions - deporte mary */
            "desc-dmary-polo": "Polo color azul marino con cuello y ribetes blancos. Ideal para educación física y actividades deportivas.",
            "desc-dmary-buso": "Buso deportivo color gris con detalles en azul marino. Forro interior suave, ideal para días fríos.",

            /* Product descriptions - deporte republica */
            "desc-drep-polo": "Polo color rojo institucional con cuello blanco. Ideal para educación física y actividades deportivas.",
            "desc-drep-buso": "Buso deportivo color gris con detalles en rojo. Forro interior suave, ideal para días fríos y actividades al aire libre.",

            /* Product descriptions - deporte zoila */
            "desc-dzo-polo": "Polo color azul marino con cuello y ribetes blancos. Ideal para educación física y actividades deportivas.",
            "desc-dzo-buso": "Buso deportivo color gris con detalles en azul marino. Forro interior suave, ideal para días fríos y actividades al aire libre.",

            /* Tour */
            "tour-eye-title": "Vista previa del uniforme",
            "tour-eye-desc": "Pulsa el ojito para ver el uniforme en grande.",
            "tour-catalog-title": "Catálogo completo",
            "tour-catalog-desc": "Pulsa el botón para abrir todo el catálogo de esta institución.",
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
            "herlinda-desc": "Complete institutional uniforms. Purple and white design, for academic and sports activities.",

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
            "hero-casual-herlinda": "Casual uniform for official and academic events. Purple and white design.",
            "hero-deportivo": "Sports uniform for physical education and outdoor activities.",

            /* Footer on product pages */
            "footer-product-desc": "Manufacturing and sale of institutional school uniforms. Quality and commitment to education.",
            "footer-product-copyright": "© 2026 Costuritas Zoe | All Rights Reserved.",

            /* Price note */
            "price-note": "Price by size",
            "theme-toggle": "Toggle theme",

            /* Product descriptions - herlinda */
            "desc-her-chompa": "Institutional purple V-neck jumper with white trim and the embroidered school emblem. Ideal for official and academic events.",
            "desc-her-pantalon": "Dark gray gabardine dress trousers. Classic straight cut, comfortable and durable for daily wear.",
            "desc-her-camisa": "White formal long-sleeve shirt with executive collar. Made of cotton and polyester for maximum comfort.",
            "desc-her-zapatos": "Black formal school shoes with non-slip sole and high-resistance synthetic leather.",
            "desc-her-corbata": "Institutional purple tie with white details. Made of high-gloss, durable polyester.",
            "desc-her-medias": "Institutional purple socks with white details. Soft, durable knit for everyday use.",

            /* Product descriptions - manuel */
            "desc-man-chompa": "Institutional design in seal and black with V-neck and the embroidered school emblem. Ideal for academic activities and official events.",
            "desc-man-pantalon": "Black gabardine trousers, high-durability fabric. Formal straight cut, comfortable for daily wear.",
            "desc-man-camisa": "White formal long-sleeve shirt with semi-executive collar. Made of cotton and polyester for greater comfort.",
            "desc-man-zapatos": "Black formal school shoes with anti-slip sole and high-resistance synthetic leather.",
            "desc-man-corbata": "Institutional seal-colored tie with black details. Made of high-gloss, durable polyester.",
            "desc-man-medias": "Institutional socks in seal and black. Soft, durable knit for daily use.",

            /* Product descriptions - mary */
            "desc-mary-chompa": "Navy blue jumper with V-neck and the embroidered school emblem. Made for academic and institutional use.",
            "desc-mary-pantalon": "Navy blue gabardine trousers. Classic straight cut, comfortable and durable for daily use.",
            "desc-mary-camisa": "White formal long-sleeve shirt with executive collar. Made of cotton and polyester for maximum comfort.",
            "desc-mary-falda": "Institutional pleated navy blue skirt made of gabardine fabric, with pleats and adjustable waist.",
            "desc-mary-zapatos": "Black formal school shoes with anti-slip sole and synthetic leather material.",
            "desc-mary-corbata": "Institutional navy blue tie with details. Made of high-gloss, durable polyester.",
            "desc-mary-medias": "Institutional navy blue socks. Soft, durable knit for daily use.",

            /* Product descriptions - republica de chile */
            "desc-rep-chompa": "Institutional red jumper with V-neck and the new institutional emblem. Ideal for academic activities and official events.",
            "desc-rep-pantalon": "Slate gray gabardine trousers. Classic straight cut, comfortable and durable for daily wear.",
            "desc-rep-camisa": "White formal long-sleeve shirt with executive collar. Made of cotton and polyester for maximum comfort.",
            "desc-rep-chaleco": "Institutional red vest with white borders, made of highly durable and comfortable fabric.",
            "desc-rep-zapatos": "Black formal school shoes with anti-slip sole and high-resistance synthetic leather.",
            "desc-rep-corbata": "Institutional red tie with details. Made of high-gloss, durable polyester.",
            "desc-rep-medias": "Institutional red socks with white details. Soft, durable knit for daily use.",

            /* Product descriptions - zoila */
            "desc-zo-chompa": "Institutional navy blue jumper with V-neck, white trim and the embroidered school emblem. Ideal for official and academic events.",
            "desc-zo-pantalon": "Navy blue gabardine trousers. Classic straight cut, comfortable and durable for daily wear.",
            "desc-zo-camisa": "White formal long-sleeve shirt with executive collar. Made of cotton and polyester for maximum comfort.",
            "desc-zo-zapatos": "Black formal school shoes with anti-slip sole and high-resistance synthetic leather.",
            "desc-zo-corbata": "Institutional navy blue tie with white details. Made of high-gloss, durable polyester.",
            "desc-zo-medias": "Institutional navy blue socks with white details. Soft, durable knit for daily use.",

            /* Product descriptions - sport herlinda */
            "desc-dher-polo": "Purple polo shirt with white collar and trim. Ideal for physical education and sports activities.",
            "desc-dher-buso": "Gray sports hoodie with purple details. Soft inner lining, ideal for cold days and outdoor activities.",

            /* Product descriptions - sport manuel */
            "desc-dman-polo": "Seal polo shirt with black collar and trim. Ideal for physical education and sports activities.",
            "desc-dman-buso": "Dark gray sports hoodie with seal details. Soft inner lining, ideal for cold days and outdoor activities.",

            /* Product descriptions - sport mary */
            "desc-dmary-polo": "Navy blue polo shirt with white collar and trim. Ideal for physical education and sports activities.",
            "desc-dmary-buso": "Gray sports hoodie with navy blue details. Soft inner lining, ideal for cold days.",

            /* Product descriptions - sport republica */
            "desc-drep-polo": "Institutional red polo shirt with white collar. Ideal for physical education and sports activities.",
            "desc-drep-buso": "Gray sports hoodie with red details. Soft inner lining, ideal for cold days and outdoor activities.",

            /* Product descriptions - sport zoila */
"desc-dzo-polo": "Navy blue polo shirt with white collar and trim. Ideal for physical education and sports activities.",
            "desc-dzo-buso": "Navy blue sports hoodie with white trim. Soft inner lining, ideal for cold days and outdoor activities.",

/* Tour */
            "tour-eye-title": "Uniform preview",
            "tour-eye-desc": "Click the eye to see the uniform in full size.",
            "tour-catalog-title": "Full catalog",
            "tour-catalog-desc": "Click the button to open the whole catalog for this school.",
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
