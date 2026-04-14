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

    const verifyBtn = document.getElementById('verifyAge');
    if (verifyBtn) {
        verifyBtn.addEventListener('click', () => {
            localStorage.setItem('ageVerified', 'true');
            const gate = document.getElementById('ageGate');
            if (gate) {
                gate.classList.add('hidden');
                document.body.style.overflow = '';
                setTimeout(() => gate.remove(), 600);
            }
        });
    }

    const rejectBtn = document.getElementById('rejectAge');
    if (rejectBtn) {
        rejectBtn.addEventListener('click', () => {
            window.location.href = 'https://www.google.com';
        });
    }
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
        description: "Johnnie Walker is a brand of Scotch whisky produced by Diageo in Scotland. It was established in the Scottish burgh of Kilmarnock in 1820, and continued to ...",
        image: "assets/images/real/johnnie_walker_black_label.png",
        country: "Scotland"
    },
    {
        name: "4Th Roset",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,640",
        description: "The company was founded by Antoine Roset in 1860 in Montagnieu, France as a small business manufacturing bentwood walking sticks. In 1936, the company started ...",
        image: "assets/images/real/4th_roset.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "4Th Street Red Swtt",
        category: "wine",
        size: "5L",
        price: "Ksh 6,600",
        description: "Our wines are made from high quality grapes sourced from selected premium vineyards throughout the lush Western Cape. Our grapes are harvested in the warm ...",
        image: "assets/images/real/4th_street_red_swtt.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "4Th Street Rosetr",
        category: "wine",
        size: "5L",
        price: "Ksh 5,370",
        description: "Gain valuable skills and advance your career at Gulf Coast State College with flexible programs and personalized support tailored for your success.",
        image: "assets/images/real/4th_street_rosetr.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "4Th Street White",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,425",
        description: "4th Street Natural Sweet White NV ; variety : Blend - White ; winemaker : Distell Wines ; wine of origin : Western Cape ; analysis : alc : 7.47 % vol rs : 65.5 g/l ...",
        image: "assets/images/real/4th_street_white.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "4Th Strt Redt",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,640",
        description: "Country of origin (visible) Click to download COO; Nutrition (visible) Click to download N; Product specification (visible) Click to download PS; Suitability ...",
        image: "assets/images/real/4th_strt_redt.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "4Th Strt Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,342",
        description: "The South African lightly sparkled, naturally sweet, palate-pleasing rosé, 4th Street Sweet Red, is inspired by a passion for friendship and sharing.",
        image: "assets/images/real/4th_strt_red.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "4Th Strt White Sweett",
        category: "other",
        size: "5L",
        price: "Ksh 6,600",
        description: "Our wines are made from high quality grapes sourced from selected premium vineyards throughout the lush Western Cape. Our grapes are harvested in the warm ...",
        image: "assets/images/real/4th_strt_white_sweett.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Assic Gin",
        category: "gin",
        size: "58 CL",
        price: "Ksh 2,055",
        description: "Gin originated as a medicinal liquor made by monks and alchemists across Europe. The modern gin was modified in Flanders and the Netherlands to provide aqua ...",
        image: "assets/images/real/assic_gin.jpg",
        isKenyan: false,
        country: "Netherlands"
    },
    {
        name: "Assic G&T Can",
        category: "other",
        size: "58 CL",
        price: "Ksh 315",
        description: "The origins of gin can be traced back to the Middle Ages, with records describing a drink called 'Jenever', a Dutch spirit made with juniper.",
        image: "assets/images/real/assic_g_t_can.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "58 Spiced Orange",
        category: "other",
        size: "350ML",
        price: "Ksh 1,050",
        description: "KO 58 gin Spiced Orange is a light refreshing citrus-forward gin. It is made with ingredients grown in Kenya including; Orange, Dried Mango, Chilli and Turmeric ...",
        image: "assets/images/real/58_spiced_orange.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "58 Spiced Orange",
        category: "other",
        size: "750ML",
        price: "Ksh 2,055",
        description: "KO 58 gin Spiced Orange is a light refreshing citrus-forward gin. It is made with ingredients grown in Kenya including; Orange, Dried Mango, Chilli and Turmeric ...",
        image: "assets/images/real/58_spiced_orange.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "58 Spiced Orange G&T Can",
        category: "other",
        size: "750ML",
        price: "Ksh 315",
        description: "The 58 Spiced Orange G&T is a ready-to-drink cocktail from a distillery located in a country in East Africa. The gin is infused with local oranges and a ...",
        image: "assets/images/real/58_spiced_orange_g_t_can.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "58 Very Berry G&T Can",
        category: "other",
        size: "750ML",
        price: "Ksh 315",
        description: "5.8 Gin & Tonic Very Berry 330ml ; Country of Origin. Kenya ; Alcohol Content. 5% ; Flavours & Spices. Berries ; Size. 330ml ; EAN, 5065010192713 ...",
        image: "assets/images/real/58_very_berry_g_t_can.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "5Th Generationtr Red",
        category: "other",
        size: "5L",
        price: "Ksh 4,500",
        description: "Product Red is a licensed brand by the company Red that seeks to engage the private sector in raising awareness and funds to help eliminate HIV/AIDS in ...",
        image: "assets/images/real/5th_generationtr_red.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "5Th Generation Whitetr",
        category: "other",
        size: "5L",
        price: "Ksh 4,500",
        description: "The iPad is a brand of tablet computers developed and marketed by Apple that run the company's mobile operating systems iOS (older models) and iPadOS.",
        image: "assets/images/real/5th_generation_whitetr.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "#7Gin Blueberry",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "The blueberry, a member of the genus Vaccinium, is one of the few fruits native to North America. Long before it became a staple in grocery ...",
        image: "assets/images/real/7gin_blueberry.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "#7Gin Lime And Lemon",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "It originated in Persia (modern day Iran) and was introduced to the Mediterranean region at an unknown time. The lime was introduced to Europe ...",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=%237GIN%20LIME%20AND%20LEMON",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "#7Gin Mixed Berry",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "#7 Mixed Berry Flavoured Gin ; Country of Origin. South Africa ; Size. 750ml ; Flavours & Spices. Mixed Berry ; SKU: #74537 ; Brand · #7 ...",
        image: "assets/images/real/7gin_mixed_berry.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "#7Gin Orange",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "This gin, hailing from Italy, is certainly worth drinking and it also comes in a uniquely attractive bottle that invites tasters to enjoy “La ...",
        image: "assets/images/real/7gin_orange.jpg",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "#7Gin Original",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "Colombo No.7 - based on a 70-year-old recipe, tells a most intriguing tale of war, resourcefulness and regulation in Sri Lanka.",
        image: "assets/images/real/7gin_original.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "#7Gin Passion",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "#7 Gin Passion Fruit 750ml + 2 Free Brothers Indian Tonic 330ml ; Country of Origin. South Africa ; Flavours & Spices. Passion ; Weight, N/A ; Dimensions, N/A ; Size.",
        image: "assets/images/real/7gin_passion.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "#7Gin Pineapple",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "The pineapple (Ananas comosus) is a tropical plant with an edible fruit; it is the most economically significant plant in the family Bromeliaceae.",
        image: "assets/images/real/7gin_pineapple.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "7 Hills  Sweetred",
        category: "other",
        size: "750ML",
        price: "Ksh 1,328",
        description: "7 Hills Sweet Red 750ml is a South African Wine mostly taken during special occasions. It contains 8.4% alcohol. 7 Hills wine pairs well with red meat and ...",
        image: "assets/images/real/7_hills__sweetred.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "7 Hills Sweet White",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,328",
        description: "7 Hills Sweet White 750ml is a South African Wine mostly taken during special occasions. 7 Hills Sweet White 750ml contains 12% alcohol.",
        image: "assets/images/real/7_hills_sweet_white.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "8Pmt",
        category: "other",
        size: "1L",
        price: "Ksh 1,950",
        description: "60876526 Entry Summary (ES) Query Updates Deployed to Production on June 4, 2024 ... Goods with Country of Origin of Cuba can be Manually Filed in ...",
        image: "assets/images/real/8pmt.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "8Pm Fire",
        category: "other",
        size: "750ML",
        price: "Ksh 1,680",
        description: "8 PM Fire Liqueur is a premium spiced liqueur that ignites your senses with its rich, fiery character and smooth sweetness. Distilled in India, this liqueur ...",
        image: "assets/images/real/8pm_fire.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "8Pm Honey",
        category: "other",
        size: "750ML",
        price: "Ksh 1,680",
        description: "Now in stock in Zimbabwe, 8pm Honey Liqueur. A beautiful harmony of flavour and character. Made with the finest quality grain and infused ...",
        image: "assets/images/real/8pm_honey.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "8Pm Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,500",
        description: "8 PM is produced in India by Radico Khaitan Ltd, a major Indian spirits company founded in 1943. The grain blended expression is specifically formulated for ...",
        image: "assets/images/real/8pm_whisky.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "99 Rosas Chardonnay Viog",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,920",
        description: "The 99 Rosas Chardonnay Viognier 75cl offers a delightful fusion of two of Spain's most cherished grape varieties. Produced in the sunlit ...",
        image: "assets/images/real/99_rosas_chardonnay_viog.jpg",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "99 Rosas Temp Cab Sauv",
        category: "other",
        size: "750ML",
        price: "Ksh 1,920",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/99_rosas_temp_cab_sauv.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Absolute (Pernod)",
        category: "vodka",
        size: "750ML",
        price: "Ksh 3,825",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/absolute__pernod.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Absolute Vodkat",
        category: "vodka",
        size: "1L",
        price: "Ksh 3,075",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/absolute_vodkat.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Absolute Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 2,925",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/absolute_vodka.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Ac Blackitre",
        category: "other",
        size: "1L",
        price: "Ksh 2,100",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ac_blackitre.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Ac Black",
        category: "other",
        size: "750ML",
        price: "Ksh 1,620",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ac_black.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Afia Energy",
        category: "other",
        size: "330ML",
        price: "Ksh 75",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/afia_energy.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Afribullcafe",
        category: "other",
        size: "750ML",
        price: "Ksh 2,070",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/afribullcafe.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Air Vodka",
        category: "vodka",
        size: "700ML",
        price: "Ksh 825",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/air_vodka.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Alandra Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,800",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/alandra_red.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Alandra White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,800",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/alandra_white.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "All Seasons Whisky",
        category: "whisky",
        size: "250ML",
        price: "Ksh 570",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/all_seasons_whisky.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "All Seasons Whisky",
        category: "whisky",
        size: "500ML",
        price: "Ksh 1,178",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/all_seasons_whisky.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "All Seasons Whsky",
        category: "other",
        size: "375ML",
        price: "Ksh 878",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/all_seasons_whsky.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "All Seasons Whsky",
        category: "other",
        size: "750ML",
        price: "Ksh 1,763",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/all_seasons_whsky.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Allsops Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 203",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/allsops_beer.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Alta Wine",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,740",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/alta_wine.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Amani Sweet Red",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,065",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/amani_sweet_red.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Amani Sweet White",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,065",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/amani_sweet_white.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Amarula",
        category: "liqueur",
        size: "1 L",
        price: "Ksh 3,375",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/amarula.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Amarula",
        category: "liqueur",
        size: "350ML",
        price: "Ksh 1,500",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/amarula.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Amarula",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 2,850",
        description: "We encourage our employees to be ambassadors for responsible alcohol consumption and taking ownership and responsibility for their personal …",
        image: "assets/images/real/amarula.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Analivia Sav",
        category: "other",
        size: "750ML",
        price: "Ksh 2,550",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/analivia_sav.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Angostura Bitters",
        category: "other",
        size: "200ML",
        price: "Ksh 3,900",
        description: "Gmail is email that’s intuitive, efficient, and useful. 15 GB of storage, less spam, and mobile access.",
        image: "assets/images/real/angostura_bitters.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Annabelle Cuvee Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 2,093",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/annabelle_cuvee_rose.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Appleton",
        category: "other",
        size: "700ML",
        price: "Ksh 5,700",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/appleton.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Aqula",
        category: "other",
        size: "500ML",
        price: "Ksh 750",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/aqula.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Arcadia Rum",
        category: "rum",
        size: "750ML",
        price: "Ksh 1,020",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/arcadia_rum.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Arcadia Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,335",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/arcadia_whisky.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Arcadia White Swt",
        category: "other",
        size: "750ML",
        price: "Ksh 1,170",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/arcadia_white_swt.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Asconi Agorlux",
        category: "other",
        size: "750ML",
        price: "Ksh 2,187",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/asconi_agorlux.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Asconi Kiss Me Now",
        category: "other",
        size: "750ML",
        price: "Ksh 2,268",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/asconi_kiss_me_now.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Asconi Moscato Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 2,268",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/asconi_moscato_rose.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Asconi Moscato Swt Wht",
        category: "other",
        size: "750ML",
        price: "Ksh 2,187",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/asconi_moscato_swt_wht.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Asconi Pastoral",
        category: "other",
        size: "750ML",
        price: "Ksh 2,349",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/asconi_pastoral.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Asconi Semi Dry",
        category: "other",
        size: "750ML",
        price: "Ksh 2,106",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/asconi_semi_dry.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Asconi Sol Negru",
        category: "other",
        size: "750ML",
        price: "Ksh 2,187",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/asconi_sol_negru.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Aspera Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 277",
        description: "Jídelníček - Aspera Pro ukončení objednávání nezapomeňte ZNOVU PŘILOŽIT KARTU ke snímači!!",
        image: "assets/images/real/aspera_gin.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Aspera Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 802",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/aspera_gin.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Atlas 12 %",
        category: "other",
        size: "750ML",
        price: "Ksh 330",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/atlas_12.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Atlas 14%",
        category: "other",
        size: "750ML",
        price: "Ksh 420",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/atlas_14.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Avalon Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 285",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/avalon_gin.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Avalon Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 825",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/avalon_gin.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Avalon Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 285",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/avalon_vodka.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Avalon Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 825",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/avalon_vodka.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bacardi Blance",
        category: "rum",
        size: "1L",
        price: "Ksh 3,420",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/bacardi_blance.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bacardi Blance 3/4",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,700",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/bacardi_blance_3_4.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bacardi Carta Orot",
        category: "rum",
        size: "1L",
        price: "Ksh 3,420",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/bacardi_carta_orot.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bacardi Carte Oro 3/4",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,550",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/bacardi_carte_oro_3_4.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bacardi Negra 3/4",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,550",
        description: "Do what moves you with BACARDÍ Rum, a true taste of the Caribbean. Learn about rum cocktails, our events, festivals and fascinating …",
        image: "assets/images/real/bacardi_negra_3_4.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bacardi Oak Heart",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,550",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/bacardi_oak_heart.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bacardi Spcd",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,550",
        description: "Do what moves you with BACARDÍ Rum, a true taste of the Caribbean. Learn about rum cocktails, our events, festivals and fascinating history.",
        image: "assets/images/real/bacardi_spcd.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Back Bencher Wsky",
        category: "other",
        size: "750ML",
        price: "Ksh 1,575",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/back_bencher_wsky.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Baileys",
        category: "liqueur",
        size: "1L",
        price: "Ksh 4,125",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/baileys.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Baileys",
        category: "liqueur",
        size: "375ML",
        price: "Ksh 1,830",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/baileys.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Baileys",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 3,750",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/baileys.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Baileys Delight",
        category: "liqueur",
        size: "350ML",
        price: "Ksh 682",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/baileys_delight.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Baileys Delight",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 1,230",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/baileys_delight.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Baileys Strawberry",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/baileys_strawberry.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Ballantinest",
        category: "other",
        size: "1L",
        price: "Ksh 3,450",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ballantinest.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Ballantines",
        category: "other",
        size: "350ML",
        price: "Ksh 1,680",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ballantines.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Ballantines",
        category: "other",
        size: "750 ML",
        price: "Ksh 3,000",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ballantines.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Ballantines(Pernod)",
        category: "other",
        size: "750ML",
        price: "Ksh 3,870",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/ballantines_pernod.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Balozi Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 254",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/balozi_beer.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Balozi Can",
        category: "beer",
        size: "750ML",
        price: "Ksh 305",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/balozi_can.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Balvenie 14",
        category: "other",
        size: "700ML",
        price: "Ksh 30,000",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/balvenie_14.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Banana Beer",
        category: "beer",
        size: "500ML",
        price: "Ksh 108",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/banana_beer.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Base Qube Energy",
        category: "other",
        size: "750ML",
        price: "Ksh 165",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/base_qube_energy.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bavaria(8.6)",
        category: "other",
        size: "750ML",
        price: "Ksh 413",
        description: "于是， 在英语里，Bayern 就产生了不同于 Bavaria 的义项分工。 Bayern Munich 默认指的就是「拜仁慕尼黑」俱乐部。 Bavaria Munich 特指15世纪的「巴 …",
        image: "assets/images/real/bavaria_8_6.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bavaria Apple",
        category: "other",
        size: "750ML",
        price: "Ksh 203",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/bavaria_apple.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bavaria Orange",
        category: "other",
        size: "750ML",
        price: "Ksh 203",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/bavaria_orange.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bavaria Original 0.0",
        category: "gin",
        size: "750ML",
        price: "Ksh 203",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/bavaria_original_0_0.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Beefeater Cleart",
        category: "gin",
        size: "1L",
        price: "Ksh 5,077",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/beefeater_cleart.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Beefeater Clear",
        category: "gin",
        size: "750ML",
        price: "Ksh 3,870",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/beefeater_clear.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Beefeater Orange",
        category: "gin",
        size: "750ML",
        price: "Ksh 3,600",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/beefeater_orange.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Beefeater Pinkt",
        category: "gin",
        size: "1L",
        price: "Ksh 3,975",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/beefeater_pinkt.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Beefeater Pink",
        category: "gin",
        size: "750ML",
        price: "Ksh 4,125",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/beefeater_pink.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Belaire Bleu",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,300",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/belaire_bleu.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Belaire Brut",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,300",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/belaire_brut.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Belaire Fantome Gold",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,600",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/belaire_fantome_gold.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Belaire Gold",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,600",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/belaire_gold.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Belaire Gold(Pernod)",
        category: "wine",
        size: "750ML",
        price: "Ksh 8,340",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/belaire_gold_pernod.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Belaire Luxe",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,600",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/belaire_luxe.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Belaire Luxe (Pernod)",
        category: "wine",
        size: "750ML",
        price: "Ksh 7,485",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/belaire_luxe__pernod.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Belaire Rose Black",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,600",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/belaire_rose_black.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Belaire Rose Black(Fantome)",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,750",
        description: "Bel-Air: Created by Andy Borowitz, Susan Borowitz, T.J. Brady, Morgan Stevenson Cooper, Rasheed Newson, Malcolm Spellman. With …",
        image: "assets/images/real/belaire_rose_black_fantome.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Belaire Rose Black(Pernod)",
        category: "wine",
        size: "750ML",
        price: "Ksh 7,485",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/belaire_rose_black_pernod.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Belaire Rose Pink",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,600",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/belaire_rose_pink.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bertrams Vo Brdy",
        category: "other",
        size: "750ML",
        price: "Ksh 1,275",
        description: "Firma Bertrams Pečky, spol. s r.o. vyrábí nerezové komínové systémy od roku 1997. Nejprve se specializovala pouze na nerezové …",
        image: "assets/images/real/bertrams_vo_brdy.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Best Cream",
        category: "liqueur",
        size: "250ML",
        price: "Ksh 525",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/best_cream.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Best Cream",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 1,463",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/best_cream.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Best Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 390",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BEST%20GIN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Best Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,103",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BEST%20GIN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Best Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 368",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/best_vodka.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Best Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,043",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/best_vodka.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Best Whisky",
        category: "whisky",
        size: "250ML",
        price: "Ksh 465",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/best_whisky.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Best Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,365",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/best_whisky.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bittolla Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,800",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/bittolla_red.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bl",
        category: "other",
        size: "750ML",
        price: "Ksh 3,225",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/bl.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Black Bird Swt Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,425",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/black_bird_swt_red.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Black Bird Swt  White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,425",
        description: "Crimson Desert Pre-Order BonusBlack Desert Limited Items Steps to claim the Crimson Desert Pre-Order Exclusive rewards will be notified separately on Mar 20, 2026 (Fri).Learn MoreThis is your one-time",
        image: "assets/images/real/black_bird_swt__white.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Black Ice Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 242",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/black_ice_beer.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Black Ice Can",
        category: "other",
        size: "330ML",
        price: "Ksh 267",
        description: "Crimson Desert Pre-Order BonusBlack Desert Limited Items Steps to claim the Crimson Desert Pre-Order Exclusive rewards will be notified …",
        image: "assets/images/real/black_ice_can.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Black Ram Honey",
        category: "other",
        size: "750ML",
        price: "Ksh 1,200",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/black_ram_honey.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Black Ram Whskyt",
        category: "other",
        size: "1L",
        price: "Ksh 1,560",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/black_ram_whskyt.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Black Ram Whsky",
        category: "other",
        size: "750ML",
        price: "Ksh 1,178",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/black_ram_whsky.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Black & Whitet",
        category: "whisky",
        size: "1L",
        price: "Ksh 2,250",
        description: "Crimson Desert Pre-Order BonusBlack Desert Limited Items Steps to claim the Crimson Desert Pre-Order Exclusive rewards will be notified separately on Mar 20, 2026 (Fri).Learn MoreThis is your one-time",
        image: "assets/images/real/black___whitet.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Black & White",
        category: "whisky",
        size: "250ML",
        price: "Ksh 593",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/black___white.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Black & White",
        category: "whisky",
        size: "375ML",
        price: "Ksh 863",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/black___white.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Black & White",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,695",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/black___white.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Blue Curacao Liqueur",
        category: "liqueur",
        size: "700ML",
        price: "Ksh 3,225",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/blue_curacao_liqueur.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Blue Curacao Syrup",
        category: "other",
        size: "700ML",
        price: "Ksh 2,145",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/blue_curacao_syrup.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Blue Ice Coco 1/4",
        category: "other",
        size: "750ML",
        price: "Ksh 630",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/blue_ice_coco_1_4.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Blue Ice Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 225",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/blue_ice_vodka.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Blue Ice Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 630",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/blue_ice_vodka.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Blue Moon",
        category: "other",
        size: "250ML",
        price: "Ksh 270",
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/blue_moon.jpg",
        isKenyan: false,
        country: "Unknown"
    }
];
/* CATALOGUE_END */

// Initialize Shop Catalogue (for shop.html)
function initShop() {
    const productGrid = document.getElementById('shop-product-grid');
    if (!productGrid) return;

    productGrid.innerHTML = ''; // Clear existing
    
    catalogueProducts.forEach(product => {
        const countryTag = product.country && product.country !== 'Unknown' 
            ? `<div class="country-tag"><i class="fas fa-globe-africa"></i> ${product.country}</div>` 
            : '';

        const itemHtml = `
            <div class="product-card product-item reveal" data-category="${product.category}" data-kenyan="${product.isKenyan || false}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" style="border-radius: 10px; max-height: 200px; object-fit: contain;" loading="lazy">
                </div>
                <div class="product-info">
                    ${countryTag}
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
