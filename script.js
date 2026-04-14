// Base WhatsApp Number (Format: 254XXXXXXXXX)
const WA_PHONE = '254700000000'; // Replace with actual number

// Age Verification Logic
function initAgeGate() {
    if (localStorage.getItem('ageVerified') === 'true') return;

    const ageGateHtml = `
        <div id="ageGate" class="age-gate">
            <div class="age-gate-modal">
                <div class="age-gate-logo">LIQUIFY</div>
                <h2>Age Verification</h2>
                <p>You must be 18 years or older to enter this site. Please confirm your age to proceed.</p>
                <div class="age-gate-btns">
                    <button id="verifyAge" class="btn btn-gold">Yes, I am 18+</button>
                    <button id="rejectAge" class="btn btn-outline">No, I am under 18</button>
                </div>
                <p style="font-size: 0.75rem; margin-top: 2rem; opacity: 0.5;">By entering, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', ageGateHtml);
    document.body.style.overflow = 'hidden';

    document.getElementById('verifyAge').addEventListener('click', () => {
        localStorage.setItem('ageVerified', 'true');
        const gate = document.getElementById('ageGate');
        gate.classList.add('hidden');
        document.body.style.overflow = '';
        setTimeout(() => gate.remove(), 600);
    });

    document.getElementById('rejectAge').addEventListener('click', () => {
        window.location.href = 'https://www.google.com';
    });
}

// Sticky Navigation
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
});

// Run Age Gate check immediately
document.addEventListener('DOMContentLoaded', initAgeGate);

// Scroll Reveal Animations
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
window.addEventListener('scroll', reveal);

// Dynamic WhatsApp Link Generation
function buildWhatsAppLink(text) {
    const encodedText = encodeURIComponent(text);
    return `https://wa.me/${WA_PHONE}?text=${encodedText}`;
}

// Attach listeners
document.addEventListener('DOMContentLoaded', () => {
    reveal();

    // Product Order Buttons
    const orderBtns = document.querySelectorAll('button[data-product]');
    orderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const productInfo = btn.getAttribute('data-product');
            window.location.href = buildWhatsAppLink(`Hi Liquify, I want to order ${productInfo}. Please confirm availability and delivery to Embakasi.`);
        });
    });

    // General Order Buttons (Hero, CTA)
    const generalBtns = document.querySelectorAll('.btn-general-order');
    generalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = buildWhatsAppLink('Hi Liquify, I would like to make an order for delivery in Embakasi.');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// --- CATALOGUE DATA ---
/* CATALOGUE_START */
const catalogueProducts = [
    {
        name: "Johnnie Walker Black Label",
        category: "whisky",
        size: "750ml",
        price: "Ksh 4,500",
        description: "A benchmark premium blended Scotch whisky with a smooth, deep, and complex character.",
        image: "assets/images/real/johnnie_walker_black_label.png"
    },
    {
        name: "4Th Roset",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,640",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/4th_roset.jpg",
        isKenyan: false
    },
    {
        name: "4Th Street Red Swtt",
        category: "wine",
        size: "5L",
        price: "Ksh 6,600",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/4th_street_red_swtt.jpg",
        isKenyan: false
    },
    {
        name: "4Th Street Rosetr",
        category: "wine",
        size: "5L",
        price: "Ksh 5,370",
        description: "IberLibro se enorgullece en promover ferias del libro antiguo, de ocasión y moderno alrededor del mundo. Explore este calendario de ferias y …",
        image: "assets/images/real/4th_street_rosetr.jpg",
        isKenyan: false
    },
    {
        name: "4Th Street White",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,425",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/4th_street_white.jpg",
        isKenyan: false
    },
    {
        name: "4Th Strt Redt",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,640",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/4th_strt_redt.jpg",
        isKenyan: false
    },
    {
        name: "4Th Strt Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,342",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/4th_strt_red.jpg",
        isKenyan: false
    },
    {
        name: "4Th Strt White Sweett",
        category: "other",
        size: "5L",
        price: "Ksh 6,600",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/4th_strt_white_sweett.jpg",
        isKenyan: false
    },
    {
        name: "Assic Gin",
        category: "gin",
        size: "58 CL",
        price: "Ksh 2,055",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/assic_gin.jpg",
        isKenyan: false
    },
    {
        name: "Assic G&T Can",
        category: "other",
        size: "58 CL",
        price: "Ksh 315",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/assic_g_t_can.jpg",
        isKenyan: false
    },
    {
        name: "58 Spiced Orange",
        category: "other",
        size: "350ML",
        price: "Ksh 1,050",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/58_spiced_orange.jpg",
        isKenyan: false
    },
    {
        name: "58 Spiced Orange",
        category: "other",
        size: "750ML",
        price: "Ksh 2,055",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/58_spiced_orange.jpg",
        isKenyan: false
    },
    {
        name: "58 Spiced Orange G&T Can",
        category: "other",
        size: "750ML",
        price: "Ksh 315",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/58_spiced_orange_g_t_can.jpg",
        isKenyan: false
    },
    {
        name: "58 Very Berry G&T Can",
        category: "other",
        size: "750ML",
        price: "Ksh 315",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/58_very_berry_g_t_can.jpg",
        isKenyan: false
    },
    {
        name: "5Th Generationtr Red",
        category: "other",
        size: "5L",
        price: "Ksh 4,500",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/5th_generationtr_red.jpg",
        isKenyan: false
    },
    {
        name: "5Th Generation Whitetr",
        category: "other",
        size: "5L",
        price: "Ksh 4,500",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/5th_generation_whitetr.jpg",
        isKenyan: false
    },
    {
        name: "#7Gin Blueberry",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/7gin_blueberry.jpg",
        isKenyan: false
    },
    {
        name: "#7Gin Lime And Lemon",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=%237GIN%20LIME%20AND%20LEMON",
        isKenyan: false
    },
    {
        name: "#7Gin Mixed Berry",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/7gin_mixed_berry.jpg",
        isKenyan: false
    },
    {
        name: "#7Gin Orange",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/7gin_orange.jpg",
        isKenyan: false
    },
    {
        name: "#7Gin Original",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/7gin_original.jpg",
        isKenyan: false
    },
    {
        name: "#7Gin Passion",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/7gin_passion.jpg",
        isKenyan: false
    },
    {
        name: "#7Gin Pineapple",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/7gin_pineapple.jpg",
        isKenyan: false
    },
    {
        name: "7 Hills  Sweetred",
        category: "other",
        size: "750ML",
        price: "Ksh 1,328",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/7_hills__sweetred.jpg",
        isKenyan: false
    },
    {
        name: "7 Hills Sweet White",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,328",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/7_hills_sweet_white.jpg",
        isKenyan: false
    },
    {
        name: "8Pmt",
        category: "other",
        size: "1L",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/8pmt.jpg",
        isKenyan: false
    },
    {
        name: "8Pm Fire",
        category: "other",
        size: "750ML",
        price: "Ksh 1,680",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/8pm_fire.jpg",
        isKenyan: false
    },
    {
        name: "8Pm Honey",
        category: "other",
        size: "750ML",
        price: "Ksh 1,680",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/8pm_honey.jpg",
        isKenyan: false
    },
    {
        name: "8Pm Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/8pm_whisky.jpg",
        isKenyan: false
    },
    {
        name: "99 Rosas Chardonnay Viog",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,920",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/99_rosas_chardonnay_viog.jpg",
        isKenyan: false
    },
    {
        name: "99 Rosas Temp Cab Sauv",
        category: "other",
        size: "750ML",
        price: "Ksh 1,920",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/99_rosas_temp_cab_sauv.jpg",
        isKenyan: false
    },
    {
        name: "Absolute (Pernod)",
        category: "vodka",
        size: "750ML",
        price: "Ksh 3,825",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/absolute__pernod.jpg",
        isKenyan: false
    },
    {
        name: "Absolute Vodkat",
        category: "vodka",
        size: "1L",
        price: "Ksh 3,075",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/absolute_vodkat.jpg",
        isKenyan: false
    },
    {
        name: "Absolute Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 2,925",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/absolute_vodka.jpg",
        isKenyan: false
    },
    {
        name: "Ac Blackitre",
        category: "other",
        size: "1L",
        price: "Ksh 2,100",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ac_blackitre.jpg",
        isKenyan: false
    },
    {
        name: "Ac Black",
        category: "other",
        size: "750ML",
        price: "Ksh 1,620",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ac_black.jpg",
        isKenyan: false
    },
    {
        name: "Afia Energy",
        category: "other",
        size: "330ML",
        price: "Ksh 75",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/afia_energy.jpg",
        isKenyan: false
    },
    {
        name: "Afribullcafe",
        category: "other",
        size: "750ML",
        price: "Ksh 2,070",
        description: "Log in to iCloud to access your photos, mail, notes, documents and more. Sign in with your Apple Account or create a new account to start …",
        image: "assets/images/real/afribullcafe.jpg",
        isKenyan: false
    },
    {
        name: "Air Vodka",
        category: "vodka",
        size: "700ML",
        price: "Ksh 825",
        description: "Jul 28, 2025 · 2025年 MacBook Air M1/M2/M3选购指南，超详细分析。 iPhone 16和iPhone 16 Pro硬核对比！ 看看哪一个才更值得买！ 有哪些关于iPad …",
        image: "assets/images/real/air_vodka.jpg",
        isKenyan: false
    },
    {
        name: "Alandra Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,800",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/alandra_red.jpg",
        isKenyan: false
    },
    {
        name: "Alandra White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,800",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/alandra_white.jpg",
        isKenyan: false
    },
    {
        name: "All Seasons Whisky",
        category: "whisky",
        size: "250ML",
        price: "Ksh 570",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/all_seasons_whisky.jpg",
        isKenyan: false
    },
    {
        name: "All Seasons Whisky",
        category: "whisky",
        size: "500ML",
        price: "Ksh 1,178",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/all_seasons_whisky.jpg",
        isKenyan: false
    },
    {
        name: "All Seasons Whsky",
        category: "other",
        size: "375ML",
        price: "Ksh 878",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/all_seasons_whsky.jpg",
        isKenyan: false
    },
    {
        name: "All Seasons Whsky",
        category: "other",
        size: "750ML",
        price: "Ksh 1,763",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/all_seasons_whsky.jpg",
        isKenyan: false
    },
    {
        name: "Allsops Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 203",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/allsops_beer.jpg",
        isKenyan: false
    },
    {
        name: "Alta Wine",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,740",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/alta_wine.jpg",
        isKenyan: false
    },
    {
        name: "Amani Sweet Red",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,065",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/amani_sweet_red.jpg",
        isKenyan: false
    },
    {
        name: "Amani Sweet White",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,065",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/amani_sweet_white.jpg",
        isKenyan: false
    },
    {
        name: "Amarula",
        category: "liqueur",
        size: "1 L",
        price: "Ksh 3,375",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/amarula.jpg",
        isKenyan: false
    },
    {
        name: "Amarula",
        category: "liqueur",
        size: "350ML",
        price: "Ksh 1,500",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/amarula.jpg",
        isKenyan: false
    },
    {
        name: "Amarula",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 2,850",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/amarula.jpg",
        isKenyan: false
    },
    {
        name: "Analivia Sav",
        category: "other",
        size: "750ML",
        price: "Ksh 2,550",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/analivia_sav.jpg",
        isKenyan: false
    },
    {
        name: "Angostura Bitters",
        category: "other",
        size: "200ML",
        price: "Ksh 3,900",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/angostura_bitters.jpg",
        isKenyan: false
    },
    {
        name: "Annabelle Cuvee Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 2,093",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/annabelle_cuvee_rose.jpg",
        isKenyan: false
    },
    {
        name: "Appleton",
        category: "other",
        size: "700ML",
        price: "Ksh 5,700",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/appleton.jpg",
        isKenyan: false
    },
    {
        name: "Aqula",
        category: "other",
        size: "500ML",
        price: "Ksh 750",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/aqula.jpg",
        isKenyan: false
    },
    {
        name: "Arcadia Rum",
        category: "rum",
        size: "750ML",
        price: "Ksh 1,020",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/arcadia_rum.jpg",
        isKenyan: false
    },
    {
        name: "Arcadia Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,335",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/arcadia_whisky.jpg",
        isKenyan: false
    },
    {
        name: "Arcadia White Swt",
        category: "other",
        size: "750ML",
        price: "Ksh 1,170",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/arcadia_white_swt.jpg",
        isKenyan: false
    },
    {
        name: "Asconi Agorlux",
        category: "other",
        size: "750ML",
        price: "Ksh 2,187",
        description: "Asconi Winery is a family business founded in 1994, which aims at producing the best possible wine, using the latest technology, whilst …",
        image: "assets/images/real/asconi_agorlux.jpg",
        isKenyan: false
    },
    {
        name: "Asconi Kiss Me Now",
        category: "other",
        size: "750ML",
        price: "Ksh 2,268",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/asconi_kiss_me_now.jpg",
        isKenyan: false
    },
    {
        name: "Asconi Moscato Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 2,268",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/asconi_moscato_rose.jpg",
        isKenyan: false
    },
    {
        name: "Asconi Moscato Swt Wht",
        category: "other",
        size: "750ML",
        price: "Ksh 2,187",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/asconi_moscato_swt_wht.jpg",
        isKenyan: false
    },
    {
        name: "Asconi Pastoral",
        category: "other",
        size: "750ML",
        price: "Ksh 2,349",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/asconi_pastoral.jpg",
        isKenyan: false
    },
    {
        name: "Asconi Semi Dry",
        category: "other",
        size: "750ML",
        price: "Ksh 2,106",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/asconi_semi_dry.jpg",
        isKenyan: false
    },
    {
        name: "Asconi Sol Negru",
        category: "other",
        size: "750ML",
        price: "Ksh 2,187",
        description: "Asconi Winery is a family business founded in 1994, which aims at producing the best possible wine, using the latest technology, whilst …",
        image: "assets/images/real/asconi_sol_negru.jpg",
        isKenyan: false
    },
    {
        name: "Aspera Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 277",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/aspera_gin.jpg",
        isKenyan: false
    },
    {
        name: "Aspera Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 802",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/aspera_gin.jpg",
        isKenyan: false
    },
    {
        name: "Atlas 12 %",
        category: "other",
        size: "750ML",
        price: "Ksh 330",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/atlas_12.jpg",
        isKenyan: false
    },
    {
        name: "Atlas 14%",
        category: "other",
        size: "750ML",
        price: "Ksh 420",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/atlas_14.jpg",
        isKenyan: false
    },
    {
        name: "Avalon Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 285",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=AVALON%20GIN",
        isKenyan: false
    },
    {
        name: "Avalon Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 825",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/avalon_gin.jpg",
        isKenyan: false
    },
    {
        name: "Avalon Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 285",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/avalon_vodka.jpg",
        isKenyan: false
    }
];
/* CATALOGUE_END */

// Initialize Shop Catalogue (for shop.html)
function initShop() {
    const productGrid = document.getElementById('shop-product-grid');
    if (!productGrid) return;

    productGrid.innerHTML = ''; // Clear existing
    
    catalogueProducts.forEach(product => {
        const itemHtml = `
            <div class="product-card product-item reveal" data-category="${product.category}" data-kenyan="${product.isKenyan || false}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" style="border-radius: 10px; max-height: 200px; object-fit: contain;" loading="lazy">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-size">${product.size} - <span style="color: var(--accent-gold); font-weight: bold;">${product.price}</span></div>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.4;">${product.description}</p>
                    <button class="btn btn-primary shop-order-btn" data-product="${product.name} ${product.size}">Order on WA</button>
                </div>
            </div>
        `;
        productGrid.innerHTML += itemHtml;
    });

    // Attach dynamic order buttons
    document.querySelectorAll('.shop-order-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const productInfo = btn.getAttribute('data-product');
            window.location.href = buildWhatsAppLink(`Hi Liquify, I want to order ${productInfo}. Please confirm availability and delivery to Embakasi.`);
        });
    });

    // Filtering logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('shop-search');
    const noProductsMsg = document.getElementById('no-products-message');

    function performFiltering() {
        const activeBtn = document.querySelector('.filter-btn.active');
        const filterValue = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
        const searchQuery = (searchInput ? searchInput.value : "").toLowerCase().trim();
        let visibleCount = 0;

        document.querySelectorAll('.product-item').forEach(item => {
            const name = item.querySelector('h3').textContent.toLowerCase();
            const desc = item.querySelector('p').textContent.toLowerCase();
            const itemCategory = item.getAttribute('data-category');
            const isKenyan = item.getAttribute('data-kenyan') === 'true';

            let categoryMatch = (filterValue === 'all') || 
                              (filterValue === 'kenyan' && isKenyan) || 
                              (filterValue === itemCategory);

            const searchMatch = !searchQuery || name.includes(searchQuery) || desc.includes(searchQuery);

            if (categoryMatch && searchMatch) {
                item.style.display = 'block';
                item.classList.add('active');
                visibleCount++;
            } else {
                item.style.display = 'none';
                item.classList.remove('active');
            }
        });

        if (noProductsMsg) {
            noProductsMsg.style.display = (visibleCount === 0) ? 'block' : 'none';
        }
    }

    if (searchInput) searchInput.addEventListener('input', performFiltering);
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            performFiltering();
        });
    });

    // Initial reveal
    setTimeout(reveal, 100);
}

document.addEventListener('DOMContentLoaded', initShop);

            performFiltering();
        });
    });

    // Initial reveal
    setTimeout(reveal, 100);
}

document.addEventListener('DOMContentLoaded', initShop);
