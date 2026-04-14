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
        description: "The South African lightly sparkled, naturally sweet, palate-pleasing rosé, 4th Street Sweet Red, is inspired by a passion for friendship and sharing.",
        image: "assets/images/real/4th_street_red_swtt.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "4Th Street Rosetr",
        category: "wine",
        size: "5L",
        price: "Ksh 5,370",
        description: "Our wines are made from high quality grapes sourced from selected premium vineyards throughout the lush Western Cape. Our grapes are harvested in the warm ...",
        image: "assets/images/real/4th_street_rosetr.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "4Th Street White",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,425",
        description: "Our wines are made from high quality grapes sourced from selected premium vineyards throughout the lush Western Cape. Our grapes are harvested in the warm ...",
        image: "assets/images/real/4th_street_white.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "4Th Strt Redt",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,640",
        description: "Our wines are made from high quality grapes sourced from selected premium vineyards throughout the lush Western Cape. Our grapes are harvested in the warm ...",
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
        description: "This delightfully refreshing wine displays loads of tropical fruit notes on the nose and a burst of sweet fruity flavours on the palate.",
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
        description: "The first carbonated quinine drink was launched by Schweppes in 1870. Due to its popularity in India, it was branded Indian Tonic Water. The amount of quinine ...",
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
        description: "58 Gin Spiced Orange 750ml is a popular Kenyan Gin mostly taken during special occasions. It contains 40% alcohol. Best enjoyed with grilled chicken, ...",
        image: "assets/images/real/58_spiced_orange_g_t_can.jpg",
        isKenyan: false,
        country: "Kenya"
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
        description: "5th Generation Red is a South African boxed wine that comes in a 5-liter format. It is a blend of Shiraz, Pinotage, and Cabernet Sauvignon grapes, and is ...",
        image: "assets/images/real/5th_generationtr_red.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "5Th Generation Whitetr",
        category: "other",
        size: "5L",
        price: "Ksh 4,500",
        description: "Tasting Note. LIGHT STRAW COLOR. FRESH AROMA OF WHITE PEACH AND TROPICAL FRUITS. BOLD FRUIT FLAVORS REMINISCENT OF PEAR AND MELON. RICH AND LONG FINISH.",
        image: "assets/images/real/5th_generation_whitetr.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "#7Gin Blueberry",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "#7 Blueberry Flavoured Gin 750ml ; Alcohol Content. 35% ; Country of Origin. South Africa ; Size. 750ml ; Flavours & Spices. Blueberry ; SKU: #74536 ...",
        image: "assets/images/real/7gin_blueberry.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "#7Gin Lime And Lemon",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "#7 Lemon & Lime Flavoured Gin 750ml ; Alcohol Content. 35% ; Flavours & Spices. Lemon ; Country of Origin. South Africa ; Size. 750ml ; SKU: GI#74540 ...",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=%237GIN%20LIME%20AND%20LEMON",
        isKenyan: false,
        country: "South Africa"
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
        description: "South Africa's #7 Gin is a blended gin enhanced with flavor from seven botanicals for an exceptionally smooth finish. Product Details: Product Name: #7 Original ...",
        image: "assets/images/real/7gin_original.jpg",
        isKenyan: false,
        country: "South Africa"
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
        description: "Blend of Plantation Original Dark Rum macerated with Queen Victoria pineapple flesh and a portion of white rum distilled with the rinds, finished as a ...",
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
        description: "Most wine names tie to the region where they're crafted or the grapes used during their production. While there are exceptions to the rule, most wineries stick ...",
        image: "assets/images/real/8pmt.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "8Pm Fire",
        category: "other",
        size: "750ML",
        price: "Ksh 1,680",
        description: "8PM Fire 750ml is a popular Indian Liqueur mostly taken during special occasions. This whisky delivers a rich, smoky flavour with a tantalizing hint of fiery ...",
        image: "assets/images/real/8pm_fire.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "8Pm Honey",
        category: "other",
        size: "750ML",
        price: "Ksh 1,680",
        description: "Product Name: 8PM Honey; Price: Ksh. 1200; Country of Origin: India; Type: Liqueur; Availability: In Stock. Discover an extensive range of drinks, including ...",
        image: "assets/images/real/8pm_honey.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "8Pm Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,500",
        description: "It is a Radico Khaitan brand, one of india's largest liquor manufacturers, which founded the company in 1999. The name “8pm” refers to the hour ...",
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
        description: "99 Rosas Tempranillo - Cabernet Sauvignon is produced on our Estate from organically grown grapes. Night harvested and cold macerated before fermenting. TASTING ...",
        image: "assets/images/real/99_rosas_temp_cab_sauv.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Absolute (Pernod)",
        category: "vodka",
        size: "750ML",
        price: "Ksh 3,825",
        description: "Pernod Ricard is a French company best known for its anise-flavoured pastis apéritifs Pernod Anise and Ricard Pastis The world's second-largest wine and ...",
        image: "assets/images/real/absolute__pernod.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Absolute Vodkat",
        category: "vodka",
        size: "1L",
        price: "Ksh 3,075",
        description: "Absolut Vodka is a brand of vodka, produced near Åhus, in southern Sweden. Absolut is a part of the French group Pernod Ricard. Pernod Ricard bought Absolut ...",
        image: "assets/images/real/absolute_vodkat.jpg",
        isKenyan: false,
        country: "Sweden"
    },
    {
        name: "Absolute Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 2,925",
        description: "Absolut Vodka is a brand of vodka, produced near Åhus, in southern Sweden. Absolut is a part of the French group Pernod Ricard.",
        image: "assets/images/real/absolute_vodka.jpg",
        isKenyan: false,
        country: "Sweden"
    },
    {
        name: "Ac Blackitre",
        category: "other",
        size: "1L",
        price: "Ksh 2,100",
        description: "AC Black Whisky pays homage to a man's penchant for enjoying the pleasurable things in life. With its superior's blend of fine malt whisky from Scotland.",
        image: "assets/images/real/ac_blackitre.jpg",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Ac Black",
        category: "other",
        size: "750ML",
        price: "Ksh 1,620",
        description: "AC Black Whisky is produced from a blend of imported scotch malts and selected Indian spirits. That same website tells me this is a semi-premium IMFL spirit.",
        image: "assets/images/real/ac_black.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Afia Energy",
        category: "other",
        size: "330ML",
        price: "Ksh 75",
        description: "afia Energy drink is a product of Kevian Kenya Ltd, your trusted home of pure African delights . For more info; www.afiaea.co.ke ...",
        image: "assets/images/real/afia_energy.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "Afribullcafe",
        category: "other",
        size: "750ML",
        price: "Ksh 2,070",
        description: "Afri Bull Cafe Rum is a premium dark rum under the Afri Bull brand, expertly crafted in India. This rum has an Alcohol by Volume (ABV) of 45.0. Ideal for ...",
        image: "assets/images/real/afribullcafe.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Air Vodka",
        category: "vodka",
        size: "700ML",
        price: "Ksh 825",
        description: "Historians are not clear on the exact origin of vodka since different sources link its beginning to both Russia and Poland. But one thing is clear: this ...",
        image: "assets/images/real/air_vodka.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Alandra Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,800",
        description: "The Alandra Alandra Red is a captivating red blend from Portugal, showcasing the region's rich winegrowing heritage. This 2018 vintage offers a delightful ...",
        image: "assets/images/real/alandra_red.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Alandra White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,800",
        description: "Created from the Douro Superior traditional grapes, this vinegar matured in oak barrels, providing a rounded and fresh taste. Ingredients: Wine vinegar, water,.",
        image: "assets/images/real/alandra_white.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "All Seasons Whisky",
        category: "whisky",
        size: "250ML",
        price: "Ksh 570",
        description: "Description : All Seasons is an Indian whiskey brand launched by Oasis Group India. All-Season is India's fastest-growing brand of whiskey, ...",
        image: "assets/images/real/all_seasons_whisky.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "All Seasons Whisky",
        category: "whisky",
        size: "500ML",
        price: "Ksh 1,178",
        description: "Description : All Seasons is an Indian whiskey brand launched by Oasis Group India. All-Season is India's fastest-growing brand of whiskey, ...",
        image: "assets/images/real/all_seasons_whisky.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "All Seasons Whsky",
        category: "other",
        size: "375ML",
        price: "Ksh 878",
        description: "All Seasons is an Indian whiskey brand launched by Oasis Group India. Oasis Group is one of the top player amongst the emerging Indian spirits market with their ...",
        image: "assets/images/real/all_seasons_whsky.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "All Seasons Whsky",
        category: "other",
        size: "750ML",
        price: "Ksh 1,763",
        description: "All Seasons is an Indian whiskey brand launched by Oasis Group India. Oasis Group is one of the top player amongst the emerging Indian spirits market with their ...",
        image: "assets/images/real/all_seasons_whsky.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Allsops Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 203",
        description: "The first drop of bona fide Allsopp family beeris brewed in Burton-on-Trent – the beer capital of Britain – by Benjamin Wilson Sr. ... To expand operations, ...",
        image: "assets/images/real/allsops_beer.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Alta Wine",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,740",
        description: "Through meticulous attention to detail in the vineyard, our wines are able to express the unique and diverse character of Napa Valley's soils and climate. Our ...",
        image: "assets/images/real/alta_wine.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Amani Sweet Red",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,065",
        description: "The Amani Bay Sweet Red is an easy drinking blend with plenty of berry fruit flavors. The palate entrance is soft and smooth with ripe tannins that balance ...",
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
        description: "A quality drink offering exceptional taste.",
        image: "assets/images/real/amarula.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Analivia Sav",
        category: "other",
        size: "750ML",
        price: "Ksh 2,550",
        description: "Analivia Sauvignon Blanc is made in our Pagos del Rey winery in Rueda, in the province of Valladolid. Sauvignon Blanc is an international variety originally ...",
        image: "assets/images/real/analivia_sav.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Angostura Bitters",
        category: "other",
        size: "200ML",
        price: "Ksh 3,900",
        description: "The bitters were first produced in the namesake town of Angostura (now Ciudad Bolívar, Venezuela) but do not contain angostura bark. The bottle is recognisable ...",
        image: "assets/images/real/angostura_bitters.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Annabelle Cuvee Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 2,093",
        description: "WINE OF ORIGIN: Western Cape. ABOUT THE AREA: South Africa's vineyards ... WINE DESCRIPTION: This easy drinking sweet rosé has upfront tropical fruit ...",
        image: "assets/images/real/annabelle_cuvee_rose.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Appleton",
        category: "other",
        size: "700ML",
        price: "Ksh 5,700",
        description: "Rooted in Jamaica's Nassau Valley, Appleton Estate leverages unique terroir, limestone water and tropical climate to craft our aged rums. With naturally derived ...",
        image: "assets/images/real/appleton.jpg",
        isKenyan: false,
        country: "Jamaica"
    },
    {
        name: "Aqula",
        category: "other",
        size: "500ML",
        price: "Ksh 750",
        description: "The Aquila Liqueurs distillery, founded in 1992, reached a remarkable development in a short time in the Albanian market. In its beginnings, a new modern plant ...",
        image: "assets/images/real/aqula.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Arcadia Rum",
        category: "rum",
        size: "750ML",
        price: "Ksh 1,020",
        description: "Acadian is a grassy and vegetal spirit with a citrus spark and notes of warm hay and green pears. It is plays well in cocktails designed for agricole and cacha ...",
        image: "assets/images/real/arcadia_rum.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Arcadia Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,335",
        description: "Browse our handpicked collections of premium whiskey, wine, and spirits. Shop exclusive liquor selections, curated for your taste from ARCADIA WINE ...",
        image: "assets/images/real/arcadia_whisky.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Arcadia White Swt",
        category: "other",
        size: "750ML",
        price: "Ksh 1,170",
        description: "This drink is prepared from the finest vineyards of France to give you absolute perfection. It is brewed by experienced artists of the winery industry-Arcadia ...",
        image: "assets/images/real/arcadia_white_swt.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Asconi Agorlux",
        category: "other",
        size: "750ML",
        price: "Ksh 2,187",
        description: "Varietal 75.03% Merlot, 11.24% Petite Sirah; 13.73% Cabernet Sauvignon Alcohol: 13.4% Region: California Taste: Taste Dominated by earth ...",
        image: "assets/images/real/asconi_agorlux.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Asconi Kiss Me Now",
        category: "other",
        size: "750ML",
        price: "Ksh 2,268",
        description: "If you want a red wine that feels lush, friendly and uncomplicated, Kiss Me Now Cabernet Sauvignon 75cl is a strong pick. Its Moldovan origin, semi-sweet style ...",
        image: "assets/images/real/asconi_kiss_me_now.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Asconi Moscato Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 2,268",
        description: "Asconi Moscato Rose is a premium rose wine under the Asconi Wines brand, expertly crafted in Moldova. This wine has an Alcohol by Volume (ABV) of 7.0. Ideal for ...",
        image: "assets/images/real/asconi_moscato_rose.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Asconi Moscato Swt Wht",
        category: "other",
        size: "750ML",
        price: "Ksh 2,187",
        description: "Asconi Moscato is a charming and aromatic sweet wine from Moldova, known for its light and fruity character. This Moscato offers a refreshing taste, making it a ...",
        image: "assets/images/real/asconi_moscato_swt_wht.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Asconi Pastoral",
        category: "other",
        size: "750ML",
        price: "Ksh 2,349",
        description: "This red wine from Moldova is uniquely curated from Cabernet Sauvignon grapes. Nose: Expressive notes of plum and cherry merging with vanilla and hints of spice ...",
        image: "assets/images/real/asconi_pastoral.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Asconi Semi Dry",
        category: "other",
        size: "750ML",
        price: "Ksh 2,106",
        description: "Asconi Red Semidry 75cl ; Size. 750ml ; Country of Origin. Moldova ; Packaging. Bottle ; Sweetness. Semi-Dry ; Flavours & Spices. Blackberry, Plum, Vanilla.",
        image: "assets/images/real/asconi_semi_dry.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Asconi Sol Negru",
        category: "other",
        size: "750ML",
        price: "Ksh 2,187",
        description: "Tonight we are going to review a single varietal feteasca neagra wine, which is an indigenous romanian grape variety with moldovan origins – Sol ...",
        image: "assets/images/real/asconi_sol_negru.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Aspera Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 277",
        description: "Alcohol Content: 40% ; Type: Dry Gin ; Origin: Kenya ; Colour: Clear ; Perfect For: Mixing in cocktails, sipping, or pairing with tonic and garnishes for a ...",
        image: "assets/images/real/aspera_gin.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "Aspera Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 802",
        description: "Alcohol Content: 40% ; Type: Dry Gin ; Origin: Kenya ; Colour: Clear ; Perfect For: Mixing in cocktails, sipping, or pairing with tonic and garnishes for a ...",
        image: "assets/images/real/aspera_gin.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "Atlas 12 %",
        category: "other",
        size: "750ML",
        price: "Ksh 330",
        description: "Atlas 12 is a European Strong Lager style beer brewed by Union Export Brewery in Breda, Netherlands. Score: - with 7 ratings and reviews.",
        image: "assets/images/real/atlas_12.jpg",
        isKenyan: false,
        country: "Netherlands"
    },
    {
        name: "Atlas 14%",
        category: "other",
        size: "750ML",
        price: "Ksh 420",
        description: "Wine consumption in Japan has experienced significant growth since the 1960s, but wine as a share of total alcoholic beverage consumption is low ...",
        image: "assets/images/real/atlas_14.jpg",
        isKenyan: false,
        country: "Japan"
    },
    {
        name: "Avalon Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 285",
        description: "Alcohol Content: 40% ; Country of Origin: Ireland ; Colour: Clear ; Type: Dry Gin ; Perfect For: Neat sipping, on the rocks, or in classic gin cocktails. Great for ...",
        image: "assets/images/real/avalon_gin.jpg",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Avalon Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 825",
        description: "Alcohol Content: 40% ; Country of Origin: Ireland ; Colour: Clear ; Type: Dry Gin ; Perfect For: Neat sipping, on the rocks, or in classic gin cocktails. Great for ...",
        image: "assets/images/real/avalon_gin.jpg",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Avalon Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 285",
        description: "Alcohol Content: 40% ; Country of Origin: Ireland ; Colour: Clear ; Type: Grain Vodka ; Perfect For: Mixing into cocktails, sipping neat, or enjoying on the rocks.",
        image: "assets/images/real/avalon_vodka.jpg",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Avalon Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 825",
        description: "Alcohol Content: 40% ; Country of Origin: Ireland ; Colour: Clear ; Type: Grain Vodka ; Perfect For: Mixing into cocktails, sipping neat, or enjoying on the rocks.",
        image: "assets/images/real/avalon_vodka.jpg",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Bacardi Blance",
        category: "rum",
        size: "1L",
        price: "Ksh 3,420",
        description: "Founded in Cuba in 1862 by Facundo Bacardí i Massó, a Spanish businessman born in Sitges, Bacardi Limited has been family-owned for seven generations, and ...",
        image: "assets/images/real/bacardi_blance.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bacardi Blance 3/4",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,700",
        description: "Floral and fruity, BACARDÍ Carta Blanca rum serves up orange blossom, lavender and rose, teamed with apricot, lime, light coconut and ripe banana.",
        image: "assets/images/real/bacardi_blance_3_4.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bacardi Carta Orot",
        category: "rum",
        size: "1L",
        price: "Ksh 3,420",
        description: "BACARDÍ Carta Oro rum brings together rich, soothing flavours like vanilla, buttery caramel, toasted almond and sweet banana notes.",
        image: "assets/images/real/bacardi_carta_orot.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bacardi Carte Oro 3/4",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,550",
        description: "BACARDÍ Carta Oro rum brings together rich, soothing flavours like vanilla, buttery caramel, toasted almond and sweet banana notes.",
        image: "assets/images/real/bacardi_carte_oro_3_4.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bacardi Negra 3/4",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,550",
        description: "Dark in color, light-medium in body, rich and robust in taste, BACARDÍ Black Rum imparts impressions of tropical fruit and molasses, with a smoky finish. Nose.",
        image: "assets/images/real/bacardi_negra_3_4.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bacardi Oak Heart",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,550",
        description: ": Bacardi Alcohol by volume: 35% Alcohol proof: Age: Spices: Produced since: Country of Origin: Cuba / Puerto Rico. (0 votes). Info: Bacardi – originating in ...",
        image: "assets/images/real/bacardi_oak_heart.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bacardi Spcd",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,550",
        description: "Made with aged rum and with a hint of smokiness from charred American oak barrels, BACARDÍ Spiced is a Gluten free rum blended with natural flavors and spices.",
        image: "assets/images/real/bacardi_spcd.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Back Bencher Wsky",
        category: "other",
        size: "750ML",
        price: "Ksh 1,575",
        description: "Tonight's Cocktail uses El Tesoro de Don Felipe Blanco, with flavors of Agave, Black Pepper, Citrus, Earthy, Vegetal, Minerally and Grass notes ...",
        image: "assets/images/real/back_bencher_wsky.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Baileys",
        category: "liqueur",
        size: "1L",
        price: "Ksh 4,125",
        description: "Baileys Irish Cream is a liqueur made of cream, cocoa and Irish whiskey emulsified together with vegetable oil. Baileys is made by Diageo at Nangor Road, ...",
        image: "assets/images/real/baileys.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Baileys",
        category: "liqueur",
        size: "375ML",
        price: "Ksh 1,830",
        description: "Baileys Irish Cream is a liqueur made of cream, cocoa and Irish whiskey emulsified together with vegetable oil. Baileys is made by Diageo at Nangor Road, ...",
        image: "assets/images/real/baileys.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Baileys",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 3,750",
        description: "Baileys Irish Cream is a liqueur made of cream, cocoa and Irish whiskey emulsified together with vegetable oil. Baileys is made by Diageo at Nangor Road, ...",
        image: "assets/images/real/baileys.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Baileys Delight",
        category: "liqueur",
        size: "350ML",
        price: "Ksh 682",
        description: "Baileys Delight Cream Liqueur combines the finest Irish dairy cream with sweet African honey, creating a unique and indulgent drinking experience. Its smooth, ...",
        image: "assets/images/real/baileys_delight.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Baileys Delight",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 1,230",
        description: "Baileys Delight Cream Liqueur combines the finest Irish dairy cream with sweet African honey, creating a unique and indulgent drinking experience. Its smooth, ...",
        image: "assets/images/real/baileys_delight.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Baileys Strawberry",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 2,250",
        description: "ABV / Proof, 17% ABV (~34 Proof) ; Origin / Region, Ireland ; Production / Base, Irish cream liqueur (cream + Irish whiskey) ; Aging or Maturation, Ready-to-drink; ...",
        image: "assets/images/real/baileys_strawberry.jpg",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Ballantinest",
        category: "other",
        size: "1L",
        price: "Ksh 3,450",
        description: "Ballantine's is a brand of blended Scotch whisky produced by the Chivas Brothers subsidiary of Pernod Ricard in Dumbarton, Scotland.",
        image: "assets/images/real/ballantinest.jpg",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Ballantines",
        category: "other",
        size: "350ML",
        price: "Ksh 1,680",
        description: "Ballantine's is a brand of blended Scotch whisky produced by the Chivas Brothers subsidiary of Pernod Ricard in Dumbarton, Scotland.",
        image: "assets/images/real/ballantines.jpg",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Ballantines",
        category: "other",
        size: "750 ML",
        price: "Ksh 3,000",
        description: "Ballantine's is a brand of blended Scotch whisky produced by the Chivas Brothers subsidiary of Pernod Ricard in Dumbarton, Scotland.",
        image: "assets/images/real/ballantines.jpg",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Ballantines(Pernod)",
        category: "other",
        size: "750ML",
        price: "Ksh 3,870",
        description: "Ballantine's is a brand of blended Scotch whisky produced by the Chivas Brothers subsidiary of Pernod Ricard in Dumbarton, Scotland.",
        image: "assets/images/real/ballantines_pernod.jpg",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Balozi Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 254",
        description: "Balozi is a European Pale Lager style beer brewed by East African Breweries Ltd (Kenya Breweries) in Nairobi, Kenya. Score: - with 5 ratings and reviews.",
        image: "assets/images/real/balozi_beer.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "Balozi Can",
        category: "beer",
        size: "750ML",
        price: "Ksh 305",
        description: "A rich, natural tasting beer made from pure water originating from the heart of the Aberdares and the finest malted barley with no added sugar.",
        image: "assets/images/real/balozi_can.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Balvenie 14",
        category: "other",
        size: "700ML",
        price: "Ksh 30,000",
        description: "An exceptional single malt whisky with the traditional smooth, honeyed character of The Balvenie married with notes of toffee and a hint of fruit.",
        image: "assets/images/real/balvenie_14.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Banana Beer",
        category: "beer",
        size: "500ML",
        price: "Ksh 108",
        description: "Banana beer is an alcoholic beverage made from fermentation of mashed bananas. Sorghum, millet or maize flour are added as a source of wild yeast.",
        image: "assets/images/real/banana_beer.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Base Qube Energy",
        category: "other",
        size: "750ML",
        price: "Ksh 165",
        description: "With its origins in the UK, Qube brings a unique blend of excellence and refreshment to the Kenyan market. Join the Qube Movement: A Stellar Addition to Kenya's ...",
        image: "assets/images/real/base_qube_energy.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "Bavaria(8.6)",
        category: "other",
        size: "750ML",
        price: "Ksh 413",
        description: "ABV is 7.9%. Golden colour, large lasting head, decent lacing. Malty and fruity aroma with some alcoholic notes, but not unpleasant. Hints of oak and leather.",
        image: "assets/images/real/bavaria_8_6.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bavaria Apple",
        category: "other",
        size: "750ML",
        price: "Ksh 203",
        description: "German ciders are made from various kinds of sour tasting apples (such as 'Bohnapfel') and are distinguished by an alcohol content of 4.8–7.0% alongside a tart, ...",
        image: "assets/images/real/bavaria_apple.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bavaria Orange",
        category: "other",
        size: "750ML",
        price: "Ksh 203",
        description: "Bavaria 0.0% Orange Malt Drink is a non-alcoholic beverage crafted with ... Country of Origin. Netherland. Flavours & Spices. Orange. GTIN-8, 8714800050494 ...",
        image: "assets/images/real/bavaria_orange.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bavaria Original 0.0",
        category: "gin",
        size: "750ML",
        price: "Ksh 203",
        description: "Bavaria 0.0% has a strong bite in its aftertaste, without alcohol. Brewed with the best natural ingredients and natural mineral water from Bavaria's own spring.",
        image: "assets/images/real/bavaria_original_0_0.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Beefeater Cleart",
        category: "gin",
        size: "1L",
        price: "Ksh 5,077",
        description: "Beefeater Gin is a brand of gin owned by Pernod Ricard and bottled and distributed in the United Kingdom. Beefeater remained in the control of its founding ...",
        image: "assets/images/real/beefeater_cleart.jpg",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Beefeater Clear",
        category: "gin",
        size: "750ML",
        price: "Ksh 3,870",
        description: "Beefeater Gin is a brand of gin owned by Pernod Ricard and bottled and distributed in the United Kingdom. Beefeater remained in the control of its founding ...",
        image: "assets/images/real/beefeater_clear.jpg",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Beefeater Orange",
        category: "gin",
        size: "750ML",
        price: "Ksh 3,600",
        description: "Beefeater Gin founder James Burrough hand selected oranges from London's Covent Garden Market in 1876 to create an Orange Gin. This recipe inspired their new ...",
        image: "assets/images/real/beefeater_orange.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Beefeater Pinkt",
        category: "gin",
        size: "1L",
        price: "Ksh 3,975",
        description: "The 'pink' element of the Beefeater Pink Strawberry gin is a beautiful, natural strawberry flavour. We use the original recipe of the Beefeater London Dry and ...",
        image: "assets/images/real/beefeater_pinkt.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Beefeater Pink",
        category: "gin",
        size: "750ML",
        price: "Ksh 4,125",
        description: "The 'pink' element of the Beefeater Pink Strawberry gin is a beautiful, natural strawberry flavour. We use the original recipe of the Beefeater London Dry and ...",
        image: "assets/images/real/beefeater_pink.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Belaire Bleu",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,300",
        description: "Its spectacular sapphire color, inspired by the beautiful blue waters of the Côte d'Azur, is ideal for dramatic cocktails as well! Our wines are crafted by 5th ...",
        image: "assets/images/real/belaire_bleu.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Belaire Brut",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,300",
        description: "The Belaire range is made in Burgundy, one of France's most historically significant winemaking regions. We began with our iconic Rare Rosé, instantly ...",
        image: "assets/images/real/belaire_brut.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Belaire Fantome Gold",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,600",
        description: "Produced in Burgundy, France from fine Chardonnay and Pinot Noir grapes, Belaire Gold is stunning inside and out. Balanced and elegant, this classic cuvée is ...",
        image: "assets/images/real/belaire_fantome_gold.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Belaire Gold",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,600",
        description: "Originating from the renowned wine-producing regions in France, primarily Provence-Alpes-Côte d'Azur and Burgundy, Belaire Champagne stands as a ...",
        image: "assets/images/real/belaire_gold.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Belaire Gold(Pernod)",
        category: "wine",
        size: "750ML",
        price: "Ksh 8,340",
        description: "Created in the heart of Burgundy from a blend of handpicked Chardonnay and Pinot Noir grapes, Belaire Brut Gold is stunning inside and out, adding a touch of ...",
        image: "assets/images/real/belaire_gold_pernod.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Belaire Luxe",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,600",
        description: "America's #1 sparkling wine or Champagne brand – Luc Belaire exemplifies quality, heritage and style. An unforgettable experience in every bottle.",
        image: "assets/images/real/belaire_luxe.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Belaire Luxe (Pernod)",
        category: "wine",
        size: "750ML",
        price: "Ksh 7,485",
        description: "Its Luxe and Gold cuvées are crafted in Burgundy, while Rare Rosé and Luxe Rosé originate from the Provence-Alpes-Côte d'Azur region, renowned for its ...",
        image: "assets/images/real/belaire_luxe__pernod.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Belaire Rose Black",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,600",
        description: "Belaire Rosé is a French sparkling wine produced in the Provence-Alpes-Côte d'Azur region of the South of France. Officially labelled 'Luc Belaire Rare Rosé ...",
        image: "assets/images/real/belaire_rose_black.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Belaire Rose Black(Fantome)",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,750",
        description: "Each bottle of Belaire Rose is born in southeastern France's Provence-Alpes-Cote d'Azur region, stretching 150 miles from the French Riviera, Monaco, and the ...",
        image: "assets/images/real/belaire_rose_black_fantome.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Belaire Rose Black(Pernod)",
        category: "wine",
        size: "750ML",
        price: "Ksh 7,485",
        description: "Belaire Rosé is a French sparkling wine produced in the Provence-Alpes-Côte d'Azur region of the South of France. Officially labelled 'Luc Belaire Rare Rosé ...",
        image: "assets/images/real/belaire_rose_black_pernod.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Belaire Rose Pink",
        category: "wine",
        size: "750ML",
        price: "Ksh 6,600",
        description: "Belaire Rosé is a French sparkling wine produced in the Provence-Alpes-Côte d'Azur region of the South of France. Officially labelled 'Luc Belaire Rare Rosé ...",
        image: "assets/images/real/belaire_rose_pink.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Bertrams Vo Brdy",
        category: "other",
        size: "750ML",
        price: "Ksh 1,275",
        description: "Introduced in 1950, Bertrams VO™ can trace its roots back to the early pioneering days of brandy distilling in South Africa, and relies on the best, traditional ...",
        image: "assets/images/real/bertrams_vo_brdy.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Best Cream",
        category: "liqueur",
        size: "250ML",
        price: "Ksh 525",
        description: "The combination of Austrian origin, clearly defined branding, and consistent product ... Hailing from South Africa, this cream liqueur is produced ...",
        image: "assets/images/real/best_cream.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Best Cream",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 1,463",
        description: "The combination of Austrian origin, clearly defined branding, and consistent product ... Hailing from South Africa, this cream liqueur is produced ...",
        image: "assets/images/real/best_cream.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Best Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 390",
        description: "The Botanist is a Scottish gin made on Islay, the region best known for its smoky, peated scotch. “The Botanist incorporates a whole lot of local flavors by ...",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BEST%20GIN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Best Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,103",
        description: "The Botanist is a Scottish gin made on Islay, the region best known for its smoky, peated scotch. “The Botanist incorporates a whole lot of local flavors by ...",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BEST%20GIN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Best Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 368",
        description: "17 Best Vodkas for Every Home Bar · Broken Shed Premium Vodka · Carbonadi Vodka · Chopin Family Reserve Extra Rare Young Potato Vodka · FAIR Quinoa ...",
        image: "assets/images/real/best_vodka.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Best Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,043",
        description: "17 Best Vodkas for Every Home Bar · Broken Shed Premium Vodka · Carbonadi Vodka · Chopin Family Reserve Extra Rare Young Potato Vodka · FAIR Quinoa ...",
        image: "assets/images/real/best_vodka.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Best Whisky",
        category: "whisky",
        size: "250ML",
        price: "Ksh 465",
        description: "Every year at VinePair HQ, we taste through thousands of spirits to choose the cream of the crop. Here are the 50 best spirits for 2025.",
        image: "assets/images/real/best_whisky.jpg",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Best Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,365",
        description: "Every year at VinePair HQ, we taste through thousands of spirits to choose the cream of the crop. Here are the 50 best spirits for 2025.",
        image: "assets/images/real/best_whisky.jpg",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Bittolla Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,800",
        description: "Bitola red is a popular Portugal wine mostly taken during special occasions. Bitola Red contain 14% alcohol. This Wine pairs well with grilled meats, roasted ...",
        image: "assets/images/real/bittolla_red.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bl",
        category: "other",
        size: "750ML",
        price: "Ksh 3,225",
        description: "The TTB.gov Wine Appellations of Origin homepage serves as a virtual warehouse of all US and foreign appellations of origin.",
        image: "assets/images/real/bl.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Black Bird Swt Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,425",
        description: "Crafted from grapes grown in the heart of the Western Cape, our wine reflects the unique terroir, delivering a flavor profile that is distinctly coastal and ...",
        image: "assets/images/real/black_bird_swt_red.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Black Bird Swt  White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,425",
        description: "Crafted from grapes grown in the heart of the Western Cape, our wine reflects the unique terroir, delivering a flavor profile that is distinctly coastal and ...",
        image: "assets/images/real/black_bird_swt__white.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Black Ice Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 242",
        description: "An 'ice-brewed' beer with a clean, fresh, snappy taste and a mellow aftertaste from its unique ice-filtering process. 6.1% alcohol by volume.",
        image: "assets/images/real/black_ice_beer.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Black Ice Can",
        category: "other",
        size: "330ML",
        price: "Ksh 267",
        description: "Black Ice. An 'ice-brewed' beer with a clean, fresh, snappy taste and a mellow aftertaste from its unique ice-filtering process. 6.1% alcohol by volume.",
        image: "assets/images/real/black_ice_can.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Black Ram Honey",
        category: "other",
        size: "750ML",
        price: "Ksh 1,200",
        description: "Black Ram Honey spirit drink is made with Black Ram blended whisky and infused with rich honey Flavourings. The delicate sweetness of honey and ...",
        image: "assets/images/real/black_ram_honey.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Black Ram Whskyt",
        category: "other",
        size: "1L",
        price: "Ksh 1,560",
        description: "Black Ram is pleasant to drink, has a smooth finish and little residual smoke which envelopes its legendary character – aged to perfection, made for everyday ...",
        image: "assets/images/real/black_ram_whskyt.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Black Ram Whsky",
        category: "other",
        size: "750ML",
        price: "Ksh 1,178",
        description: "Black Ram is pleasant to drink, has a smooth finish and little residual smoke which envelopes its legendary character – aged to perfection, made for everyday ...",
        image: "assets/images/real/black_ram_whsky.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Black & Whitet",
        category: "whisky",
        size: "1L",
        price: "Ksh 2,250",
        description: "Black & White is a blended Scotch whisky produced by Diageo in Scotland. It was originally produced by the London-based James Buchanan & Co Ltd.",
        image: "assets/images/real/black___whitet.jpg",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Black & White",
        category: "whisky",
        size: "250ML",
        price: "Ksh 593",
        description: "Black & White is a blended Scotch whisky produced by Diageo in Scotland. It was originally produced by the London-based James Buchanan & Co Ltd.",
        image: "assets/images/real/black___white.jpg",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Black & White",
        category: "whisky",
        size: "375ML",
        price: "Ksh 863",
        description: "Black & White is a blended Scotch whisky produced by Diageo in Scotland. It was originally produced by the London-based James Buchanan & Co Ltd.",
        image: "assets/images/real/black___white.jpg",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Black & White",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,695",
        description: "Black & White is a blended Scotch whisky produced by Diageo in Scotland. It was originally produced by the London-based James Buchanan & Co Ltd.",
        image: "assets/images/real/black___white.jpg",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Blue Curacao Liqueur",
        category: "liqueur",
        size: "700ML",
        price: "Ksh 3,225",
        description: "Curaçao is a liqueur flavored with the dried peel of the bitter orange variety laraha, a citrus fruit grown on the Caribbean island of Curaçao. Curaçao ...",
        image: "assets/images/real/blue_curacao_liqueur.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Blue Curacao Syrup",
        category: "other",
        size: "700ML",
        price: "Ksh 2,145",
        description: "Curaçao is a liqueur flavored with the dried peel of the bitter orange variety laraha, a citrus fruit grown on the Caribbean island of Curaçao. Curaçao ...",
        image: "assets/images/real/blue_curacao_syrup.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Blue Ice Coco 1/4",
        category: "other",
        size: "750ML",
        price: "Ksh 630",
        description: "We are handcrafted and American made with a singular goal – to create the best tasting vodka ...",
        image: "assets/images/real/blue_ice_coco_1_4.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Blue Ice Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 225",
        description: "We are handcrafted and American made with a singular goal – to create the best tasting vodka ...",
        image: "assets/images/real/blue_ice_vodka.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Blue Ice Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 630",
        description: "We are handcrafted and American made with a singular goal – to create the best tasting vodka ...",
        image: "assets/images/real/blue_ice_vodka.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Blue Moon",
        category: "other",
        size: "250ML",
        price: "Ksh 270",
        description: "Blue Moon Belgian White is a Belgian-style witbier brewed by Molson Coors under the name the Blue Moon Brewing Co. It was launched in 1995.",
        image: "assets/images/real/blue_moon.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Blue Moon 750M",
        category: "other",
        size: "750ML",
        price: "Ksh 705",
        description: "A medium bodied pure blueberry wine with intense blueberry character and a wonderful blueberry finish. Extremely tasty with cheesecake.",
        image: "assets/images/real/blue_moon_750m.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bols Blue Curacao",
        category: "other",
        size: "750ML",
        price: "Ksh 2,775",
        description: "The Curaçao liqueur was first made by the Dutch settlers who colonized the island in the 17th century, and it quickly became popular in Europe.",
        image: "assets/images/real/bols_blue_curacao.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bols Elderflower",
        category: "other",
        size: "750ML",
        price: "Ksh 2,775",
        description: "Bols Elderflower Liqueur from Netherlands - Bols Elderflower is a clear liqueur made from honey scented blossoms of the elder tree, also called the sambucus ...",
        image: "assets/images/real/bols_elderflower.jpg",
        isKenyan: false,
        country: "Netherlands"
    },
    {
        name: "Bols Triple Sec",
        category: "other",
        size: "700ML",
        price: "Ksh 2,775",
        description: "Triple Sec is a type of orange-flavored liqueur that originated in France in the mid-19th century. The term 'Triple Sec' refers to the triple ...",
        image: "assets/images/real/bols_triple_sec.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Bols Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,425",
        description: "Bols is a brand name used by Lucas Bols, a Dutch distiller of alcoholic beverages. The brand line consists of vodkas, gins, genevers, advocaats and liqueurs.",
        image: "assets/images/real/bols_vodka.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bombay Dry Gint",
        category: "gin",
        size: "1L",
        price: "Ksh 2,400",
        description: "Bombay Sapphire is a brand of infused gin distilled by the Bombay Spirits Company, a subsidiary company of Bacardi, at Laverstoke Mill in the village of ...",
        image: "assets/images/real/bombay_dry_gint.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bombay Dry Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 2,400",
        description: "Bombay Dry Gin, similar to its more famous sister Bombay Sapphire, is distilled from a base of grain and imparts the botanicals through vapor infusion.",
        image: "assets/images/real/bombay_dry_gin.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bombay Sapphireitre",
        category: "gin",
        size: "1L",
        price: "Ksh 4,050",
        description: "Bombay Sapphire is a brand of infused gin distilled by the Bombay Spirits Company, a subsidiary company of Bacardi, at Laverstoke Mill in the village of ...",
        image: "assets/images/real/bombay_sapphireitre.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bombay Sapphire",
        category: "gin",
        size: "750ML",
        price: "Ksh 3,600",
        description: "Bombay Sapphire is a brand of infused gin distilled by the Bombay Spirits Company, a subsidiary company of Bacardi, at Laverstoke Mill in the village of ...",
        image: "assets/images/real/bombay_sapphire.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bond7",
        category: "other",
        size: "250ML",
        price: "Ksh 623",
        description: "The original Bond Seven Whisky was distilled & bottled in warehouse No. 7 of Milne & Co, wine merchants in South Australia during the 1950s.",
        image: "assets/images/real/bond7.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bond7",
        category: "other",
        size: "350ML",
        price: "Ksh 864",
        description: "The original Bond Seven Whisky was distilled & bottled in warehouse No. 7 of Milne & Co, wine merchants in South Australia during the 1950s.",
        image: "assets/images/real/bond7.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bond7",
        category: "other",
        size: "750ML",
        price: "Ksh 1,905",
        description: "The original Bond Seven Whisky was distilled & bottled in warehouse No. 7 of Milne & Co, wine merchants in South Australia during the 1950s.",
        image: "assets/images/real/bond7.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bonne Esperance Dry Reditre",
        category: "other",
        size: "5L",
        price: "Ksh 6,075",
        description: "The Cape of Good Hope or Bonne Esperance, is a magical place where sunshine and rich soil combine to create the ideal conditions for the perfect wine.",
        image: "assets/images/real/bonne_esperance_dry_reditre.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bonne Esperance Dry Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A Red wine from Paarl, Coastal Region, Western Cape, South Africa. Made from Shiraz/Syrah, Cabernet Sauvignon, Merlot, Pinotage.",
        image: "assets/images/real/bonne_esperance_dry_red.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Bonne Esperance Red Sweet",
        category: "other",
        size: "750ML",
        price: "Ksh 1,500",
        description: "The Cape of Good Hope or Bonne Esperance, is a magical place where sunshine and rich soil combine to create the ideal conditions for the perfect wine.",
        image: "assets/images/real/bonne_esperance_red_sweet.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bravado",
        category: "other",
        size: "330ML",
        price: "Ksh 51",
        description: "The first premium vodka made in Puerto Rico, crafted with the skill, knowledge and passion of Puerto Rican craftsmen.",
        image: "assets/images/real/bravado.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Breezer Lime",
        category: "other",
        size: "750ML",
        price: "Ksh 323",
        description: "Bacardi Breezer is an alcoholic fruit-flavoured drink made by Bacardi that comes in a variety of fruit flavours: lemon, peach, lychee, pineapple, apple, ruby ...",
        image: "assets/images/real/breezer_lime.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Breezer Peach",
        category: "other",
        size: "750ML",
        price: "Ksh 323",
        description: "BACARDI Breezer Peach is a tasty and refreshing alcohol drink containing genuine imported BACARDI Rum, fruit flavours and sparkling water.",
        image: "assets/images/real/breezer_peach.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Breezer Pineapple",
        category: "other",
        size: "750ML",
        price: "Ksh 323",
        description: "Bacardi Breezer is an alcoholic fruit-flavoured drink made by Bacardi that comes in a variety of fruit flavours: lemon, peach, lychee, pineapple, apple, ruby ...",
        image: "assets/images/real/breezer_pineapple.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Breezer W.Lemon",
        category: "other",
        size: "750ML",
        price: "Ksh 323",
        description: "Bacardi Breezer is an alcoholic fruit-flavoured drink made by Bacardi that comes in a variety of fruit flavours: lemon, peach, lychee, pineapple, apple, ruby ...",
        image: "assets/images/real/breezer_w_lemon.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Brokers",
        category: "other",
        size: "750ML",
        price: "Ksh 1,350",
        description: "Our mission is to educate the consumer by offering knowledge and tasting of your product. We are based in Houston, Texas with our services extending ...",
        image: "assets/images/real/brokers.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bull Dog",
        category: "other",
        size: "750ML",
        price: "Ksh 2,955",
        description: "Bulldog London Dry Gin was developed by a globe-trotting American and is distilled in the United Kingdom. While tagged as a London dry, ...",
        image: "assets/images/real/bull_dog.jpg",
        isKenyan: false,
        country: "United Kingdom"
    },
    {
        name: "Bulleit Bourbont",
        category: "other",
        size: "1L",
        price: "Ksh 5,700",
        description: "Bulleit Bourbon is a brand of Kentucky straight bourbon whiskey produced at the Bulleit Distillery in Shelbyville, Kentucky and the Bulleit Distillery in ...",
        image: "assets/images/real/bulleit_bourbont.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bulleit Bourbon",
        category: "other",
        size: "750ML",
        price: "Ksh 4,800",
        description: "Bulleit Bourbon is a brand of Kentucky straight bourbon whiskey produced at the Bulleit Distillery in Shelbyville, Kentucky and the Bulleit Distillery in ...",
        image: "assets/images/real/bulleit_bourbon.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bullet Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 315",
        description: "Alcohol Content. 18%. Country of Origin. Belgium. Size. 250ml. Packaging. Can. Reviews. There are no reviews yet. Add a review. You must be logged in to post a ...",
        image: "assets/images/real/bullet_vodka.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bumbu",
        category: "other",
        size: "750ML",
        price: "Ksh 6,300",
        description: "At Bumbu Rum Company, our flagship product is distilled and blended in Barbados, the birthplace of rum, where the spirit was first created some 400 years ago.",
        image: "assets/images/real/bumbu.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Buono  Amici   Brut",
        category: "other",
        size: "750ML",
        price: "Ksh 3,975",
        description: "Crafted in the prestigious Veneto region of Italy, Buono Amici Prosecco Brut is made from the finest Glera grapes, handpicked and carefully vinified to achieve ...",
        image: "assets/images/real/buono__amici___brut.jpg",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Buono Amici Cuvee",
        category: "other",
        size: "750ML",
        price: "Ksh 3,525",
        description: "Experience the refined sparkle of Buono Amici Cuvee 750ML, a premium Italian sparkling wine known for its crisp, fruity profile and elegant effervescence.",
        image: "assets/images/real/buono_amici_cuvee.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Buono Amici  Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 4,425",
        description: "Brand: Bon Ami. Country: France. Region: Vin de France. Grapes Varietal: Grenache. Type: Still Sparkling Wine. Wine Type: Sparkling Wine. Wine Style: Rose ...",
        image: "assets/images/real/buono_amici__rose.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Bushmill 10Yrs",
        category: "other",
        size: "750ML",
        price: "Ksh 7,275",
        description: "10 year old is triple distilled from 100% malted barley and matured for a minimum of 10 years in former Sherry casks and bourbon-seasoned casks.",
        image: "assets/images/real/bushmill_10yrs.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bushmill Black Bush",
        category: "other",
        size: "750ML",
        price: "Ksh 5,100",
        description: "Black Bush is triple distilled from unpeated and malted barley, then blended with a single grain Irish whiskey. The blend contains 80% Bushmills malt whiskey, ...",
        image: "assets/images/real/bushmill_black_bush.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Bushmills Original",
        category: "gin",
        size: "750ML",
        price: "Ksh 3,750",
        description: "The Old Bushmills Distillery is an Irish whiskey distillery in Bushmills, County Antrim, Northern Ireland, established in 1784 and owned by Proximo Spirits.",
        image: "assets/images/real/bushmills_original.jpg",
        isKenyan: false,
        country: "Ireland"
    },
    {
        name: "Cabernet Sauv Merlot Red Sweet",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,605",
        description: "Cabernet Sauvignon Description – How Cabernet Differs from Merlot. Cabernet sauvignon hails from the legendary wine region of Bordeaux, France.",
        image: "assets/images/real/cabernet_sauv_merlot_red_sweet.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Cabernet Sav Rose  Sweet",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,605",
        description: "Cabernet Sauvignon's story begins in the 18th century in France's Bordeaux region. This remarkable grape arose through a serendipitous crossing ...",
        image: "assets/images/real/cabernet_sav_rose__sweet.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Calvet Chardonny",
        category: "other",
        size: "750ML",
        price: "Ksh 2,625",
        description: "Very expressive nose that reveals floral, creamy and exotic aromas. A fleshy, full and lively wine, with a perfect balance.",
        image: "assets/images/real/calvet_chardonny.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Campari 3/4",
        category: "other",
        size: "750ML",
        price: "Ksh 2,925",
        description: "It is a type of bitters, characterised by its dark red colour. It is produced by the Davide Campari Group, a multinational company based in Italy. Campari. Logo.",
        image: "assets/images/real/campari_3_4.jpg",
        isKenyan: false,
        country: "Italy"
    },
    {
        name: "Camus Vs",
        category: "other",
        size: "700ML",
        price: "Ksh 6,300",
        description: "Camus Cognac is a brand of cognac that has been produced by five generations of the Camus family, since 1863",
        image: "assets/images/real/camus_vs.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Candy Floss",
        category: "other",
        size: "750ML",
        price: "Ksh 1,395",
        description: "Candyfloss Natural Sweet Wines are a jubilant symphony of juicy fruits and delicate florals, spun with a weave of sweet nostalgia. Picture yourself biting into ...",
        image: "assets/images/real/candy_floss.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Candy Floss Sweet Red",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,395",
        description: "... drinking experience. Origin: South Africa; Alcohol Percentage: 13% ABV; Food Pairings: Best enjoyed with grilled meats, spicy dishes, creamy desserts, or a ...",
        image: "assets/images/real/candy_floss_sweet_red.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Candy Sweet White",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,395",
        description: "White wine is a wine that is fermented without undergoing the process of maceration, which involves prolonged contact between the juice and the grape skins, ...",
        image: "assets/images/real/candy_sweet_white.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Caprice Dry Red(Tetra) -",
        category: "other",
        size: "1L",
        price: "Ksh 1,343",
        description: "Caprice Dry Red Tetra is a popular South African Red dry wine mostly taken during special occasions. The wine gets its dark colour from the long fermentation ...",
        image: "assets/images/real/caprice_dry_red_tetra.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Caprice Red Sweet(Tetra)T",
        category: "other",
        size: "1L",
        price: "Ksh 1,343",
        description: "Caprice Sweet Red is a popular South African Sweet Red wine mostly taken during special occasions. It is a charming wine that offers a perfect balance of ...",
        image: "assets/images/real/caprice_red_sweet_tetra_t.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Captain Cola Bottle",
        category: "other",
        size: "750ML",
        price: "Ksh 210",
        description: "Things I overlooked. captmorgan label Lots of different labels over the years. Note the prominence of Puerto Rico as the origin of the rum.",
        image: "assets/images/real/captain_cola_bottle.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Captain Cola Can",
        category: "other",
        size: "750ML",
        price: "Ksh 240",
        description: "With the Captain Morgan Original Spiced Gold and Cola premixed drink the Captain's tastiest combination is always at hand and always ready to drink.",
        image: "assets/images/real/captain_cola_can.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Captain Dark Rumitre",
        category: "rum",
        size: "1L",
        price: "Ksh 3,075",
        description: "Captain Morgan Dark Rum is made with a secret blend of fine Caribbean rums and exotic spices to make our darkest flavour rum. Captain Morgan Dark Rum bursts ...",
        image: "assets/images/real/captain_dark_rumitre.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Captain Darkrum",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,850",
        description: "Captain Morgan is a brand of flavoured rums produced by British alcohol conglomerate Diageo. It is named after the 17th-century Welsh privateer of the ...",
        image: "assets/images/real/captain_darkrum.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Captain Morgan",
        category: "rum",
        size: "250ML",
        price: "Ksh 498",
        description: "Captain Morgan is a brand of flavoured rums produced by British alcohol conglomerate Diageo. It is named after the 17th-century Welsh privateer of the ...",
        image: "assets/images/real/captain_morgan.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Captain Morgan Gold",
        category: "rum",
        size: "750ML",
        price: "Ksh 1,373",
        description: "Captain Morgan is a brand of flavoured rums produced by British alcohol conglomerate Diageo. It is named after the 17th-century Welsh privateer of the ...",
        image: "assets/images/real/captain_morgan_gold.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Captain Morgan Spcd",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,775",
        description: "Captain Morgan is a brand of flavoured rums produced by British alcohol conglomerate Diageo. It is named after the 17th-century Welsh privateer of the ...",
        image: "assets/images/real/captain_morgan_spcd.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Captain Morgan Spiced",
        category: "rum",
        size: "1L",
        price: "Ksh 3,225",
        description: "Captain Morgan is a brand of flavoured rums produced by British alcohol conglomerate Diageo. It is named after the 17th-century Welsh privateer of the ...",
        image: "assets/images/real/captain_morgan_spiced.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Cardhu",
        category: "other",
        size: "700ML",
        price: "Ksh 7,650",
        description: "Cardhu distillery is a Speyside single malt Scotch whisky distillery near Archiestown, Moray, Scotland. It was founded in 1824 by whisky smuggler John Cumming ...",
        image: "assets/images/real/cardhu.jpg",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Caribia Cane",
        category: "rum",
        size: "250ML",
        price: "Ksh 278",
        description: "Caribia is a finely crafted smooth cane spirit that is designed to mirror the progressive attitudes and behaviours of the Kenyan Millennial.",
        image: "assets/images/real/caribia_cane.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "Caribia Cane",
        category: "rum",
        size: "750ML",
        price: "Ksh 750",
        description: "Caribia is a finely crafted smooth cane spirit that is designed to mirror the progressive attitudes and behaviours of the Kenyan Millennial.",
        image: "assets/images/real/caribia_cane.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "Caribia Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 368",
        description: "Caribia Gin 750ml is a popular gin from Kenya mostly taken during special occasions. It is a well-balanced gin with an incredibly smooth palate.",
        image: "assets/images/real/caribia_gin.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "Caribia Gin",
        category: "gin",
        size: "350ML",
        price: "Ksh 537",
        description: "Caribia Gin 750ml is a popular gin from Kenya mostly taken during special occasions. It is a well-balanced gin with an incredibly smooth palate.",
        image: "assets/images/real/caribia_gin.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "Caribia Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,080",
        description: "Caribia Gin 750ml is a popular gin from Kenya mostly taken during special occasions. It is a well-balanced gin with an incredibly smooth palate.",
        image: "assets/images/real/caribia_gin.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "Carlo Rossit",
        category: "other",
        size: "4L",
        price: "Ksh 4,500",
        description: "Our Wines. From Red & White to Pink & Sangria. Carlo Rossi wines always start with the most delicious grapes from California's Central Valley.",
        image: "assets/images/real/carlo_rossit.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Carlo Rossi Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,500",
        description: "This sweet red wine is well balanced, light to medium-bodied red wine that has flavors of bright red fruits and fresh floral notes with a nice crisp finish.",
        image: "assets/images/real/carlo_rossi_red.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Carmela",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "Rooted in tradition, yet embracing innovation, Carmela embodies the spirit of Spain's sun-soaked vineyards and the extensive heritage of Bodegas Fernando Castro ...",
        image: "assets/images/real/carmela.jpg",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Casa Buena Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,103",
        description: "We offer free delivery within and around Nairobi CBD. Alcohol by Volume: 8% ABV. Country of Origin: Spain. Size/Volume: 1 Litre. Status: In stock.",
        image: "assets/images/real/casa_buena_red.jpg",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Casa Buena White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,103",
        description: "Casa Buena Sweet white is a popular Spanish sweet white Wine mostly taken during special occasions. Casa Buena Sweet white contains 8% alcohol.",
        image: "assets/images/real/casa_buena_white.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Casamigos Anejo",
        category: "other",
        size: "750ML",
        price: "Ksh 10,575",
        description: "Casamigos Añejo Tequila, crafted from 100% Blue Weber agaves, offers a perfect balance of natural sweetness, subtle spice, and oak-aged complexity, ...",
        image: "assets/images/real/casamigos_anejo.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Casamigos Blanco",
        category: "other",
        size: "750ML",
        price: "Ksh 10,050",
        description: "Our Bottled Tequilas are made from 100% Blue Weber agave from the rich clay soil of Jalisco, Mexico, and then hand-selected to ensure highest quality. Our agave ...",
        image: "assets/images/real/casamigos_blanco.jpg",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Casamigos Reposado",
        category: "other",
        size: "750ML",
        price: "Ksh 9,525",
        description: "Casamigos Reposado Tequila is made from 100% Blue Weber agaves. It is soft, slightly oaky with hints of caramel and cocoa, it has a medium to long smooth ...",
        image: "assets/images/real/casamigos_reposado.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Castle Bottle",
        category: "other",
        size: "750ML",
        price: "Ksh 24",
        description: "Its core spirits include rum, whiskey/bourbon and liqueurs, which are marketed and sold in the United States, Canada, Europe, Latin America and Asia. Castle ...",
        image: "assets/images/real/castle_bottle.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Castle Lite Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 180",
        description: "What Does It Taste Like? ... smoother, crisper and even more refreshing. ... Not For Sale To Persons Under The Age Of 18. Don't Drink And Drive. Enjoy Responsibly.",
        image: "assets/images/real/castle_lite_beer.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Castle Lite Can",
        category: "other",
        size: "750ML",
        price: "Ksh 225",
        description: "Castle Lite is SA's Favourite Draught. But that crisp, refreshing taste isn't always within reach. Until now. With Castle Lite Draught in a Can, Your favourite ...",
        image: "assets/images/real/castle_lite_can.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Cellar Cask Redtrs",
        category: "wine",
        size: "5L",
        price: "Ksh 6,600",
        description: "Cellar Cask Sweet Red is a popular South African Sweet Red Wine mostly taken during special occasions. It is a clean, bright, ruby young wine.",
        image: "assets/images/real/cellar_cask_redtrs.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Cellar Cask Red",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,530",
        description: "Cellar Cask is renowned for its commitment to quality and tradition. Originating from the fertile vineyards of South Africa, this wine reflects ...",
        image: "assets/images/real/cellar_cask_red.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Cellar Cask White",
        category: "wine",
        size: "5L",
        price: "Ksh 6,600",
        description: "Cellar Cask Natural Lively White Wine 5L ; Alcohol Content. 11% ; Packaging. Boxed ; Flavour Profile. Light & fruity ; Country of Origin. South Africa ; SKU: ...",
        image: "assets/images/real/cellar_cask_white.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Cellar Cask White",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,530",
        description: "Cellar Cask Natural Lively White Wine 5L ; Alcohol Content. 11% ; Packaging. Boxed ; Flavour Profile. Light & fruity ; Country of Origin. South Africa ; SKU: ...",
        image: "assets/images/real/cellar_cask_white.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Cellar Redt",
        category: "other",
        size: "1L",
        price: "Ksh 1,140",
        description: "Appellations Cellar was founded by Ivonne Zhu in 2016. She was born in Guangdong Province (formerly Canton) in China and immigrated to the U.S. in 2002 by ...",
        image: "assets/images/real/cellar_redt.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Cellar Whitet",
        category: "other",
        size: "1L",
        price: "Ksh 1,140",
        description: "Cellar Cask Natural Lively White Wine 5L ; Alcohol Content. 11% ; Packaging. Boxed ; Flavour Profile. Light & fruity ; Country of Origin. South Africa ; SKU: ...",
        image: "assets/images/real/cellar_whitet.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Chamdor Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,110",
        description: "It has a rich and refreshing taste that makes it a good choice for celebrations. Chamdor Sparkling Red Grape is an alcohol ... Country of origin: South Africa.",
        image: "assets/images/real/chamdor_red.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Chamdor 750 White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,110",
        description: "Alcohol Content. 0.0%. Size. 750ml. Country of Origin. South Africa. 1 review for Chamdor Sparkling White Grape 75cl. 4.0. Based on 1 review.",
        image: "assets/images/real/chamdor_750_white.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Chivas 12Yrs",
        category: "whisky",
        size: "750ML",
        price: "Ksh 6,000",
        description: "Discover Chivas Regal 12, a 12-year-old blended Scotch whisky renowned for its signature blend of the finest malt and grain whiskies.",
        image: "assets/images/real/chivas_12yrs.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Chivas",
        category: "whisky",
        size: "375ML",
        price: "Ksh 3,195",
        description: "Chivas Regal is a blended Scotch whisky produced by the Chivas Brothers subsidiary of Pernod Ricard in Scotland. Chivas Regal. Type, Scotch whiskey.",
        image: "assets/images/real/chivas.jpg",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Chivas Regalt",
        category: "whisky",
        size: "1L",
        price: "Ksh 6,900",
        description: "Chivas Regal is a blended Scotch whisky produced by the Chivas Brothers subsidiary of Pernod Ricard in Scotland. Chivas Regal. Type, Scotch whiskey.",
        image: "assets/images/real/chivas_regalt.jpg",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Choco Toffee Red Wine",
        category: "wine",
        size: "750ML",
        price: "Ksh 2,040",
        description: "Deep dark red wine, with delicate nuances of toffee and a light breath of a noble chocolate taste. An enjoyment, that lets you melt away on every occassion.",
        image: "assets/images/real/choco_toffee_red_wine.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Chrome Gin",
        category: "vodka",
        size: "250ML",
        price: "Ksh 315",
        description: "Chrome Gin 250ml is a Kenyan gin ,Launched by Kenya Breweries Limited, it is packaged in a 250ml bottle and made in a smooth, crisp style for ...",
        image: "assets/images/real/chrome_gin.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "Chrome Gin",
        category: "vodka",
        size: "750ML",
        price: "Ksh 863",
        description: "Chrome Gin 250ml is a Kenyan gin ,Launched by Kenya Breweries Limited, it is packaged in a 250ml bottle and made in a smooth, crisp style for ...",
        image: "assets/images/real/chrome_gin.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "Chrome Lemon",
        category: "vodka",
        size: "250ML",
        price: "Ksh 315",
        description: "Chrome Lemon 250ml ; Alcohol Content. 40% ; Country of Origin. Kenya ; Flavours & Spices. Lemon ; SKU: VOCH1582 ; Brand · Chrome ...",
        image: "assets/images/real/chrome_lemon.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "Chrome Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 315",
        description: "Launched in 2014, Chrome Vodka is produced by Kenya Breweriesfor young, modern Kenyans looking for a great value brand that they can identify with. Chrome Gin ...",
        image: "assets/images/real/chrome_vodka.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "Chrome Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 863",
        description: "Launched in 2014, Chrome Vodka is produced by Kenya Breweriesfor young, modern Kenyans looking for a great value brand that they can identify with. Chrome Gin ...",
        image: "assets/images/real/chrome_vodka.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "Ch.Valac Dry Wine",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,598",
        description: "This CH Valac is a rich dry red blend from the highlands of Spain. On the nose are the powerful and complex aromas of blackcurrant.",
        image: "assets/images/real/ch_valac_dry_wine.jpg",
        isKenyan: false,
        country: "Spain"
    },
    {
        name: "Ciroct",
        category: "vodka",
        size: "1.75L",
        price: "Ksh 6,000",
        description: "Cîroc is a brand of alcoholic beverages produced in France since 2003 and owned by the British multinational alcoholic beverage company Diageo.",
        image: "assets/images/real/ciroct.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Ciroc Vodkat",
        category: "vodka",
        size: "1L",
        price: "Ksh 7,350",
        description: "Cîroc is a brand of alcoholic beverages produced in France since 2003 and owned by the British multinational alcoholic beverage company Diageo.",
        image: "assets/images/real/ciroc_vodkat.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Ciroc Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 6,900",
        description: "Unlike most vodkas, which are made from grain, CÎROC Vodka is distilled from fine French grapes; a process inspired by over a century of wine-making expertise ...",
        image: "assets/images/real/ciroc_vodka.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Clan Macgregor",
        category: "other",
        size: "750ML",
        price: "Ksh 1,290",
        description: "Brand: Clan MacGregor Type drink: Blended Scotch Whisky Origin: Scotland Special Feature: Blend of Scottish malt and grain whiskies, resulting in a smooth ...",
        image: "assets/images/real/clan_macgregor.jpg",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Clase Azul",
        category: "other",
        size: "750ML",
        price: "Ksh 67,500",
        description: "Today, our brand proudly reveals Mexico's rich legacy through exquisite creations, amazing experiences, unique destinations, and more. SEE MORE.",
        image: "assets/images/real/clase_azul.jpg",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Class 21",
        category: "other",
        size: "750ML",
        price: "Ksh 1,050",
        description: "•Wines that do not meet the definition of any of the standards of identity are considered wine specialty products, and are subject to different class/type.",
        image: "assets/images/real/class_21.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Claymore",
        category: "other",
        size: "750ML",
        price: "Ksh 1,050",
        description: "The Claymore Blended Scotch Whisky is a renowned blended whisky produced by Whyte & Mackay Ltd, a Scottish whisky producer with a rich history. The ---",
        image: "assets/images/real/claymore.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Club Class Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 870",
        description: "An American classic, this whiskey has been masterfully blended to produce a smooth and flavorful spirit. Perfect for many different cocktails.",
        image: "assets/images/real/club_class_whisky.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Clubman",
        category: "other",
        size: "250ML",
        price: "Ksh 405",
        description: "Using cereal grains, Haig Club Clubman is distilled in one distillery – Cameronbridge. It is then matured exclusively in American ex-bourbon casks, ...",
        image: "assets/images/real/clubman.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Clubman  350",
        category: "other",
        size: "750ML",
        price: "Ksh 375",
        description: "Using cereal grains, Haig Club Clubman is distilled in one distillery – Cameronbridge. It is then matured exclusively in American ex-bourbon casks, ...",
        image: "assets/images/real/clubman__350.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Clubman -",
        category: "other",
        size: "750ML",
        price: "Ksh 1,095",
        description: "Using cereal grains, Haig Club Clubman is distilled in one distillery – Cameronbridge. It is then matured exclusively in American ex-bourbon casks, ...",
        image: "assets/images/real/clubman.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Cointreaut",
        category: "other",
        size: "1L",
        price: "Ksh 4,425",
        description: "Cointreau is a brand of orange-flavoured triple sec liqueur produced in Saint-Barthélemy-d'Anjou, France. It is consumed as an apéritif and digestif, ...",
        image: "assets/images/real/cointreaut.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Cointreau",
        category: "other",
        size: "750ML",
        price: "Ksh 4,050",
        description: "Cointreau is a brand of orange-flavoured triple sec liqueur produced in Saint-Barthélemy-d'Anjou, France. It is consumed as an apéritif and digestif, ...",
        image: "assets/images/real/cointreau.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Corona Extra",
        category: "other",
        size: "330ML",
        price: "Ksh 375",
        description: "Corona is a Mexican brand of beer produced by Grupo Modelo in Mexico and exported to markets around the world. Constellation Brands is the exclusive ...",
        image: "assets/images/real/corona_extra.jpg",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "County",
        category: "other",
        size: "250ML",
        price: "Ksh 353",
        description: "100% of the wine is derived from grapes (or other agricultural commodity) grown in the labeled counties; The percentage of wine derived from ...",
        image: "assets/images/real/county.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "County",
        category: "other",
        size: "750ML",
        price: "Ksh 990",
        description: "100% of the wine is derived from grapes (or other agricultural commodity) grown in the labeled counties; The percentage of wine derived from ...",
        image: "assets/images/real/county.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Courvoisier Vs 3/4",
        category: "other",
        size: "750ML",
        price: "Ksh 6,375",
        description: "Courvoisier VS cognac is a blend of several crus aged between three and seven years, composed principally of Fins Bois with a balancing hand of Petite ...",
        image: "assets/images/real/courvoisier_vs_3_4.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Courvosier Vsop",
        category: "other",
        size: "700ML",
        price: "Ksh 9,900",
        description: "Courvoisier V.S.O.P. Cognac 750ml offers a refined, smooth, and well-balanced cognac crafted from a selection of carefully aged eaux-de-vie.",
        image: "assets/images/real/courvosier_vsop.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Courvosier Vsop Litre",
        category: "other",
        size: "750ML",
        price: "Ksh 10,650",
        description: "Courvoisier is a rich and full-flavored cognac that won't break the bank. Flavors of stone fruit, almonds, raisins, and sweet spice lead to a dry, woody finish.",
        image: "assets/images/real/courvosier_vsop_litre.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Crazy Cock",
        category: "other",
        size: "250ML",
        price: "Ksh 548",
        description: "Crazy Cock 'RARE' is a exquisite single malt whisky from India, rare and exquisite, full-bodied single malt whisky from India matured to perfection in two kinds ...",
        image: "assets/images/real/crazy_cock.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Crazy Cock",
        category: "other",
        size: "350ML",
        price: "Ksh 758",
        description: "Crazy Cock 'RARE' is a exquisite single malt whisky from India, rare and exquisite, full-bodied single malt whisky from India matured to perfection in two kinds ...",
        image: "assets/images/real/crazy_cock.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Crazy Cock",
        category: "other",
        size: "750ML",
        price: "Ksh 1,605",
        description: "Crazy Cock 'RARE' is a exquisite single malt whisky from India, rare and exquisite, full-bodied single malt whisky from India matured to perfection in two kinds ...",
        image: "assets/images/real/crazy_cock.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Cruxland Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 3,975",
        description: "Cruxland Gin infused with Kalahari Truffles brings together the rare Kalahari truffle and nine Southern African botanicals.",
        image: "assets/images/real/cruxland_gin.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Cruz Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,950",
        description: "Cruz Chamber gives you access to limited-edition capsule collections by the hottest designers, the latest Cruz news and highly-curated Cruz content. SIGN UP.",
        image: "assets/images/real/cruz_vodka.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Curonia  Beer 10%",
        category: "beer",
        size: "750ML",
        price: "Ksh 338",
        description: "Curonia 10% Strong Beer 500ml. KShs 260. Size: 500ml; Alcohol Content: 16%; Country of Origin: Latvia.",
        image: "assets/images/real/curonia__beer_10.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Cutty Sark Whiskyt",
        category: "whisky",
        size: "1L",
        price: "Ksh 2,730",
        description: "Cutty Sark is a brand of blended Scotch whisky produced by La Martiniquaise in Scotland. Cutty Sark. A bottle of Cutty Sark. Type, Scotch whisky.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=CUTTY%20SARK%20WHISKYT",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Cutty Sark Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 2,130",
        description: "Cutty Sark is a brand of blended Scotch whisky produced by La Martiniquaise in Scotland. Cutty Sark. A bottle of Cutty Sark. Type, Scotch whisky.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=CUTTY%20SARK%20WHISKY",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Dallas Brandy",
        category: "brandy",
        size: "250ML",
        price: "Ksh 188",
        description: "Cognac traces its origins to the 17th century, when wines of the Charente region were distilled to withstand shipment to distant European ports.",
        image: "assets/images/real/dallas_brandy.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Dallas Brandy",
        category: "brandy",
        size: "750ML",
        price: "Ksh 780",
        description: "Cognac traces its origins to the 17th century, when wines of the Charente region were distilled to withstand shipment to distant European ports.",
        image: "assets/images/real/dallas_brandy.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Dargent Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,800",
        description: "Award-winning internationally, the Blue d'Argent gin has a distinctive London style but is made in France's north. Les Grands Chais de France (GCF) is a group ...",
        image: "assets/images/real/dargent_gin.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Dargent Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 1,575",
        description: "Created wine from the best grapes of Pinot Noir grown in the Jura region, which is the smallest wine region in France. ... production and aging of wine before ...",
        image: "assets/images/real/dargent_rose.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Darling Ice",
        category: "other",
        size: "250ML",
        price: "Ksh 195",
        description: "Darling Cellars De-Alcoholised is a product range of varietals where the focus is on fruit driven, varietal true, value for money products.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=DARLING%20ICE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Delmonte Applet",
        category: "other",
        size: "1L",
        price: "Ksh 372",
        description: "Del Monte Apple Juice ; Palate: Crisp, lightly sweet apple flavour with balanced acidity ; Finish: Clean, refreshing, and smooth ; Country of Origin. Kenya ; Size.",
        image: "assets/images/real/delmonte_applet.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "Delmonte Mango-",
        category: "other",
        size: "1L",
        price: "Ksh 372",
        description: "Del Monte's MANGO juice is made with real fruits. Get information about the ingredients and nutritional values right here!",
        image: "assets/images/real/delmonte_mango.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Delmonte Mixd Berry",
        category: "other",
        size: "750ML",
        price: "Ksh 372",
        description: "Del Monte Juice Blend Mixed Berry 1L ; Size. 1L ; Country of Origin. Kenya ; Flavours & Spices. Mixed Berry ; EAN, 024000150138 ...",
        image: "assets/images/real/delmonte_mixd_berry.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "Delmonte Oranget",
        category: "other",
        size: "1L",
        price: "Ksh 372",
        description: "Del Monte offers a variety of juice products, ranging from 100% pure juices such as Farmer's Juice Bar premium extract juice;",
        image: "assets/images/real/delmonte_oranget.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Delmonte Passiont",
        category: "other",
        size: "1L",
        price: "Ksh 372",
        description: "Excellent source of Vitamin C Water, Sugars (sugar/glucose-fructose, concentrated passion fruit juice), Guar gum, Citric acid, Vitamin C, Natural flavour, Beta ...",
        image: "assets/images/real/delmonte_passiont.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Delmonte Pineaple Goldt",
        category: "other",
        size: "1L",
        price: "Ksh 372",
        description: "These are carefully quality selected and handpicked at Del Monte plantations in Costa Rica at optimal ripeness to guarantee the best tasting experience. They ...",
        image: "assets/images/real/delmonte_pineaple_goldt.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Delmonte Pineapple",
        category: "other",
        size: "750ML",
        price: "Ksh 372",
        description: "Delmonte pineapple is a premium under the Delmonte-Juice brand, expertly crafted in kenya. This has an Alcohol by Volume (ABV) of 0.0. Ideal for sipping neat, ...",
        image: "assets/images/real/delmonte_pineapple.jpg",
        isKenyan: false,
        country: "Kenya"
    },
    {
        name: "Delmonte Pnapple/Mangot",
        category: "other",
        size: "1L",
        price: "Ksh 372",
        description: "Del Monte® mango and pineapple in extra light syrup delivers the sweet tropical taste you crave. Enjoy the convenience of sweet mango in a jar!",
        image: "assets/images/real/delmonte_pnapple_mangot.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Delmonte Tropicalt",
        category: "other",
        size: "1L",
        price: "Ksh 372",
        description: "Water, Cane sugar, Citric acid, Natural flavour, Natural colour (concentrated apple and lemon juices, safflower, paprika extract). Serve on ice, enjoy!",
        image: "assets/images/real/delmonte_tropicalt.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Delush Redt",
        category: "other",
        size: "5L",
        price: "Ksh 4,200",
        description: "Delush Natural Sweet Red Wine has a creamy butterscotch and caramel flavour. Delush Sweet Red 750ml quantity. Add to cart.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=DELUSH%20REDT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Delush Sweet Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 1,500",
        description: "Delush Sweet Rose 750ml is a popular South African sweet rose Wine mostly taken during special occasions. It is known for its sweet and fruity taste with ...",
        image: "assets/images/real/delush_sweet_rose.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Delush Whitet",
        category: "other",
        size: "5L",
        price: "Ksh 4,200",
        description: "Delush Natural Sweet White 75cl ; Alcohol Content. 8.5% ; Size. 750ml ; Sweetness. Sweet ; Country of Origin. South Africa ; Packaging. Bottle.",
        image: "assets/images/real/delush_whitet.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Delush Wine Red",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,320",
        description: "Delush Sweet Red 750ml is a popular South African Red sweet Wine mostly taken during special occasions. It contains 9% alcohol. Delush Sweet Red can Best be ...",
        image: "assets/images/real/delush_wine_red.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Delush Wine White",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,500",
        description: "Facts about the wine. Winery. Delush. Region. South Africa / Northern Cape. Wine style. South African Dessert. Alcohol content. 8.5%. Allergens. Contains ...",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=DELUSH%20WINE%20WHITE",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Desperados",
        category: "other",
        size: "750ML",
        price: "Ksh 428",
        description: "Desperados is an agave spirit flavoured pale lager beer with 5.9% alcohol by volume (ABV) originally created and produced by the French brewing company Fischer ...",
        image: "assets/images/real/desperados.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Dimple 15Yrs",
        category: "other",
        size: "750ML",
        price: "Ksh 6,000",
        description: "Details about this bottle, Edit. Whisky-ID: 4586. Distillery: Blend-Scotch. Country, Region: Scotland. Type: Blended Whisky. Age: 15 Years. ABV: 40%. Bottle ...",
        image: "assets/images/real/dimple_15yrs.jpg",
        isKenyan: false,
        country: "Scotland"
    },
    {
        name: "Dompo Sweetred",
        category: "other",
        size: "750ML",
        price: "Ksh 1,350",
        description: "Dompo is a full-bodied, deep garnet red wine, made using distinctive overripe red grapes, sourced from a range of first-class vineyards.",
        image: "assets/images/real/dompo_sweetred.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Don Julio 1942",
        category: "other",
        size: "750ML",
        price: "Ksh 38,940",
        description: "The iconic Don Julio 1942® Tequila is the choice of connoisseurs around the globe. Produced in small batches and aged for a minimum of two and a half years.",
        image: "assets/images/real/don_julio_1942.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Don Julio Anejo",
        category: "other",
        size: "750ML",
        price: "Ksh 15,750",
        description: "Don Julio Añejo Tequila is a testament to the craft of making a superior tasting, aged tequila. Rich, distinctive and wonderfully complex.",
        image: "assets/images/real/don_julio_anejo.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Don Julio Blanco",
        category: "other",
        size: "750ML",
        price: "Ksh 10,500",
        description: "Don Julio is a brand of tequila produced in Mexico. It is owned by the British-based multinational alcoholic beverage company Diageo.",
        image: "assets/images/real/don_julio_blanco.jpg",
        isKenyan: false,
        country: "Mexico"
    },
    {
        name: "Don Julio Reposado",
        category: "other",
        size: "75CL",
        price: "Ksh 11,400",
        description: "Aged for eight months in American white-oak barrels, Don Julio® Reposado Tequila is golden amber in color, and offers a rich, smooth finish.",
        image: "assets/images/real/don_julio_reposado.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Don Montego",
        category: "other",
        size: "250ML",
        price: "Ksh 930",
        description: "Don Montego 750ml is an exquisite French brandy produced by the KVINT distillery, since the year 1897. It is produced by a classical process of ageing the ...",
        image: "assets/images/real/don_montego.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Don Montego",
        category: "other",
        size: "500ML",
        price: "Ksh 1,770",
        description: "Don Montego 750ml is an exquisite French brandy produced by the KVINT distillery, since the year 1897. It is produced by a classical process of ageing the ...",
        image: "assets/images/real/don_montego.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Don Montego",
        category: "other",
        size: "750ML",
        price: "Ksh 2,520",
        description: "Don Montego 750ml is an exquisite French brandy produced by the KVINT distillery, since the year 1897. It is produced by a classical process of ageing the ...",
        image: "assets/images/real/don_montego.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Drambuie",
        category: "other",
        size: "700ML",
        price: "Ksh 3,975",
        description: "Drambuie /dræmˈbuːi/ is a golden-coloured, 40% ABV liqueur made from Scotch whisky, heather honey, herbs and spices. The brand was owned by the MacKinnon ...",
        image: "assets/images/real/drambuie.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Drostdy -Hof Red",
        category: "other",
        size: "5L",
        price: "Ksh 6,600",
        description: "As we have seen in the Introduction, this company had pioneered the export of Australian wines to Britain in the later nineteenth century. Despite earlier ...",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=DROSTDY%20-HOF%20RED",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Drostdy Hof Red.",
        category: "other",
        size: "750ML",
        price: "Ksh 1,380",
        description: "Drostdy-Hof was launched in South Africa in 1973 and has extended its reach into African and key international markets. The team of skilled winemakers uses ...",
        image: "assets/images/real/drostdy_hof_red.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Drostdy Hof Wh.",
        category: "other",
        size: "5L",
        price: "Ksh 6,675",
        description: "Drostdy Hof is South Africa's most trusted and accessible wine brand, producing quality wines that have been the backbone of SA wine culture.",
        image: "assets/images/real/drostdy_hof_wh.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Drostdy Wht",
        category: "other",
        size: "750ML",
        price: "Ksh 1,500",
        description: "Enjoy the refreshing Drostdy Hof Sweet White 5L from South Africa: crisp, fruity, lightly sweet perfect for casual sipping or chilled gatherings in Nairobi.",
        image: "assets/images/real/drostdy_wht.jpg",
        isKenyan: false,
        country: "South Africa"
    },
    {
        name: "Drostyt",
        category: "other",
        size: "3L",
        price: "Ksh 2,850",
        description: "Icewine (or ice wine; German: Eiswein) is a type of dessert wine produced from grapes that have been frozen while still on the vine.",
        image: "assets/images/real/drostyt.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Dunhill Dbl Capsule",
        category: "other",
        size: "750ML",
        price: "Ksh 668",
        description: "Vail Fine Wines. Inventory Summary. Department. Item Description. Regular Price. Avail Qty. Accessories. True Bear Keychain Bottle Opener. $0.93.",
        image: "assets/images/real/dunhill_dbl_capsule.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Dunhill Switch",
        category: "other",
        size: "750ML",
        price: "Ksh 668",
        description: "The quality of a Dunhill cigarette is undeniable with its firm filter and slow burn which enables you to enjoy a smooth taste. It's a pity they ...",
        image: "assets/images/real/dunhill_switch.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Dusse Vsop",
        category: "other",
        size: "750ML",
        price: "Ksh 18,000",
        description: "Cognac is a wine-based spirit solely produced in the Cognac area of France. To be considered Cognac, it must be made from white grapes from one or more of 6 ...",
        image: "assets/images/real/dusse_vsop.jpg",
        isKenyan: false,
        country: "France"
    },
    {
        name: "Elderflower Liqueur",
        category: "liqueur",
        size: "700ML",
        price: "Ksh 3,225",
        description: "St‑Germain is a French liqueur made with fresh elderflowers, handpicked in full bloom every spring. Up to one thousand carefully selected flowers to fill every ...",
        image: "assets/images/real/elderflower_liqueur.jpg",
        isKenyan: false,
        country: "USA"
    },
    {
        name: "Electio  Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,650",
        description: "Electio Cabernet Sauvignon is a dry red wine, distinguished by its elegant ruby colour and fresh fruity aroma, featuring hints of Moroccan leather and violets.",
        image: "assets/images/real/electio__red.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Electio White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,650",
        description: "Electio Sauvignon Blanc 750ml ; Producer: Five ; Origin: Republic of Moldova ; Variety: Sauvignon Blanc ; Color: Red ; Type: Dry.",
        image: "assets/images/real/electio_white.jpg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Embassy",
        category: "other",
        size: "750ML",
        price: "Ksh 653",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=EMBASSY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Embassy King",
        category: "other",
        size: "750ML",
        price: "Ksh 653",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=EMBASSY%20KING",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Eristoff Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,380",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ERISTOFF%20VODKA",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Espanature Cab Sauv",
        category: "other",
        size: "750ML",
        price: "Ksh 1,545",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ESPANATURE%20CAB%20SAUV",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Espanature Viura Ver",
        category: "other",
        size: "750ML",
        price: "Ksh 1,545",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ESPANATURE%20VIURA%20VER",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Expresion Sweet Red",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,800",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=EXPRESION%20SWEET%20RED",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Famouse 1/2",
        category: "other",
        size: "750ML",
        price: "Ksh 1,470",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FAMOUSE%201/2",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Famouse G Smky Blkt",
        category: "other",
        size: "1L",
        price: "Ksh 3,750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FAMOUSE%20G%20SMKY%20BLKT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Famous Grouse 3/4",
        category: "whisky",
        size: "750ML",
        price: "Ksh 2,925",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FAMOUS%20GROUSE%203/4",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Famous Grouse Il",
        category: "whisky",
        size: "750ML",
        price: "Ksh 3,270",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FAMOUS%20GROUSE%20IL",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Famous Smoky Black",
        category: "other",
        size: "750ML",
        price: "Ksh 3,495",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FAMOUS%20SMOKY%20BLACK",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Famous Toasted Casklitre",
        category: "other",
        size: "750ML",
        price: "Ksh 3,225",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FAMOUS%20TOASTED%20CASKLITRE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Faxe 10%Itre",
        category: "other",
        size: "1L",
        price: "Ksh 0",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FAXE%2010%25ITRE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Faxe",
        category: "other",
        size: "500ML",
        price: "Ksh 420",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FAXE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Ferari Ice Can",
        category: "other",
        size: "750ML",
        price: "Ksh 120",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FERARI%20ICE%20CAN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Fernet Branca",
        category: "other",
        size: "750ML",
        price: "Ksh 3,375",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FERNET%20BRANCA",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "First Choice",
        category: "other",
        size: "250ML",
        price: "Ksh 795",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FIRST%20CHOICE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "First Choice",
        category: "other",
        size: "750ML",
        price: "Ksh 1,125",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FIRST%20CHOICE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Blackt",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20BLACKT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Caramelt",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20CARAMELT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Chocoitre",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20CHOCOITRE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Choco",
        category: "vodka",
        size: "250ML",
        price: "Ksh 375",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20CHOCO",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Choco",
        category: "vodka",
        size: "350ML",
        price: "Ksh 525",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20CHOCO",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Choco",
        category: "vodka",
        size: "700ML",
        price: "Ksh 1,650",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20CHOCO",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Green Applet",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20GREEN%20APPLET",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Green Apple",
        category: "vodka",
        size: "250ML",
        price: "Ksh 375",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20GREEN%20APPLE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Green Apple",
        category: "vodka",
        size: "700ML",
        price: "Ksh 1,650",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20GREEN%20APPLE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Lemont",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20LEMONT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Lemon",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,650",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20LEMON",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Oranget",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20ORANGET",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Orange",
        category: "vodka",
        size: "250ML",
        price: "Ksh 375",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20ORANGE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Orange",
        category: "vodka",
        size: "350ML",
        price: "Ksh 525",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20ORANGE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Orange",
        category: "vodka",
        size: "700ML",
        price: "Ksh 1,650",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20ORANGE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Originalt",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20ORIGINALT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Original",
        category: "vodka",
        size: "350ML",
        price: "Ksh 525",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20ORIGINAL",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Raspberryt",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20RASPBERRYT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Strawberryt",
        category: "vodka",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20STRAWBERRYT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Strawberry",
        category: "vodka",
        size: "250ML",
        price: "Ksh 375",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20strawberry",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Strawberry",
        category: "vodka",
        size: "350ML",
        price: "Ksh 525",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20STRAWBERRY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Strawberry",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,650",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20STRAWBERRY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 375",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=Flirt%20vodka",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Flirt Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,650",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FLIRT%20VODKA",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Footprint Cab Sauv",
        category: "other",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FOOTPRINT%20CAB%20SAUV",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Footprint Chenin Blanc",
        category: "other",
        size: "750ML",
        price: "Ksh 1,800",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FOOTPRINT%20CHENIN%20BLANC",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Footprint Merlot",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,800",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FOOTPRINT%20MERLOT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Footprint Sauv Blanc",
        category: "other",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FOOTPRINT%20SAUV%20BLANC",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Four Cousin Redt",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FOUR%20COUSIN%20REDT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Four Cousin Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,335",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FOUR%20COUSIN%20RED",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Four Cousinst",
        category: "other",
        size: "3L",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FOUR%20COUSINST",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Four Cousins  Marula",
        category: "other",
        size: "750ML",
        price: "Ksh 2,730",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FOUR%20COUSINS%20%20MARULA",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Four Cousins Redt",
        category: "other",
        size: "5L",
        price: "Ksh 5,475",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FOUR%20COUSINS%20REDT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Four Cousins Red Sparkling",
        category: "other",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FOUR%20COUSINS%20RED%20SPARKLING",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Four Cousins  Strawberry",
        category: "other",
        size: "750ML",
        price: "Ksh 2,730",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FOUR%20COUSINS%20%20STRAWBERRY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Four Cousins  Sweetrose Can",
        category: "other",
        size: "750ML",
        price: "Ksh 540",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FOUR%20COUSINS%20%20SWEETROSE%20CAN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Four Cousins Whitet",
        category: "other",
        size: "5L",
        price: "Ksh 5,475",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FOUR%20COUSINS%20WHITET",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Four Cousins White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,335",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FOUR%20COUSINS%20WHITE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Four Cousin Whitet",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FOUR%20COUSIN%20WHITET",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Fragolino Red",
        category: "other",
        size: "750ML",
        price: "Ksh 2,153",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FRAGOLINO%20RED",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Fragolino White",
        category: "other",
        size: "750ML",
        price: "Ksh 2,153",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FRAGOLINO%20WHITE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Freedom",
        category: "other",
        size: "750ML",
        price: "Ksh 765",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FREEDOM",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Frontera After Mid9T",
        category: "other",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FRONTERA%20AFTER%20MID9T",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Frontera Cab Sauvt",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FRONTERA%20CAB%20sauvT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Frontera Cab Sauv",
        category: "other",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FRONTERA%20CAB%20SAUV",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Fronteracabsav Blush 750",
        category: "other",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FRONTERACABSAV%20BLUSH%20750",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Frontera Chardonaytr",
        category: "other",
        size: "1.5 L",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FRONTERA%20CHARDONAYTR",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Frontera Chardonnay",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FRONTERA%20CHARDONNAY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Frontera Lt Harvest",
        category: "other",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FRONTERA%20LT%20HARVEST",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Frontera Merlottrs",
        category: "wine",
        size: "1.5L",
        price: "Ksh 2,355",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FRONTERA%20MERLOTTRS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Frontera Merlot 750",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FRONTERA%20MERLOT%20750",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Frontera Sauv Blanct",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FRONTERA%20SAUV%20BLANCT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Frontera Sav Blanc 750",
        category: "other",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FRONTERA%20SAV%20BLANC%20750",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Frontera Shiraz",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FRONTERA%20SHIRAZ",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Frontera Sweet Red",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FRONTERA%20SWEET%20RED",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Frosti Berries",
        category: "other",
        size: "750ML",
        price: "Ksh 150",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FROSTI%20BERRIES",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Frosti Tropical",
        category: "other",
        size: "750ML",
        price: "Ksh 150",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FROSTI%20TROPICAL",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Fruitville Apple",
        category: "other",
        size: "750ML",
        price: "Ksh 282",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FRUITVILLE%20APPLE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Fruitville Berry",
        category: "other",
        size: "750ML",
        price: "Ksh 282",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FRUITVILLE%20BERRY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Fruitville Mango",
        category: "other",
        size: "750ML",
        price: "Ksh 282",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FRUITVILLE%20MANGO",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Fruitville Tropical",
        category: "other",
        size: "750ML",
        price: "Ksh 282",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FRUITVILLE%20TROPICAL",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Furaha",
        category: "other",
        size: "250ML",
        price: "Ksh 233",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=FURAHA",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "G1",
        category: "other",
        size: "750ML",
        price: "Ksh 855",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=G1",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gatonegro Cab Sauvt",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GATONEGRO%20CAB%20SAUVT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gatonegro Cab Sauv",
        category: "other",
        size: "750ML",
        price: "Ksh 1,620",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GATONEGRO%20CAB%20SAUV",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gatonegro Cabsav Mrlt",
        category: "other",
        size: "750ML",
        price: "Ksh 1,320",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GATONEGRO%20CABSAV%20MRLT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gatonegro Chardonnay",
        category: "wine",
        size: "1.5ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GATONEGRO%20CHARDONNAY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gatonegro Chardony",
        category: "other",
        size: "750ML",
        price: "Ksh 1,320",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GATONEGRO%20CHARDONY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gatonegro Merlot",
        category: "wine",
        size: "1.5ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GATONEGRO%20MERLOT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gatonegro Merlot",
        category: "wine",
        size: "750ML",
        price: "Ksh 2,835",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GATONEGRO%20MERLOT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gatonegro Mix",
        category: "other",
        size: "750ML",
        price: "Ksh 1,320",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GATONEGRO%20MIX",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gatonegro Sauv Blanc",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GATONEGRO%20SAUV%20BLANC",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gatonegro Sauv Blnc",
        category: "other",
        size: "750ML",
        price: "Ksh 1,320",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GATONEGRO%20SAUV%20BLNC",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gatonegro Semiswt Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,320",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GATONEGRO%20SEMISWT%20RED",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "General Meakins",
        category: "other",
        size: "250ML",
        price: "Ksh 327",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GENERAL%20MEAKINS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "General Meakins",
        category: "other",
        size: "750ML",
        price: "Ksh 983",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GENERAL%20MEAKINS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Genius Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 173",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GENIUS%20GIN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gentleman Jackitre",
        category: "other",
        size: "1L",
        price: "Ksh 7,500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GENTLEMAN%20JACKITRE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gentleman Jack",
        category: "other",
        size: "750ML",
        price: "Ksh 7,200",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GENTLEMAN%20JACK",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gibson Orange",
        category: "other",
        size: "750ML",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GIBSON%20ORANGE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gibson Pink",
        category: "other",
        size: "750ML",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GIBSON%20PINK",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gibsons Gint",
        category: "gin",
        size: "1L",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GIBSONS%20GINT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gibsons Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 2,070",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GIBSONS%20GIN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gilbeyst",
        category: "gin",
        size: "1L",
        price: "Ksh 2,775",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GILBEYST",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gilbeys",
        category: "gin",
        size: "250ML",
        price: "Ksh 624",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GILBEYS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gilbeys",
        category: "gin",
        size: "350ML",
        price: "Ksh 864",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GILBEYS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gilbeys",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,860",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GILBEYS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gilbeys Mxd B",
        category: "gin",
        size: "250ML",
        price: "Ksh 624",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GILBEYS%20MXD%20B",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gilbeys Pink",
        category: "gin",
        size: "250ML",
        price: "Ksh 630",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GILBEYS%20PINK",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gilbeys Pink",
        category: "gin",
        size: "350ML",
        price: "Ksh 864",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GILBEYS%20PINK",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gilbeys Pink 750M",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,875",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GILBEYS%20PINK%20750M",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Glendale Whskyt",
        category: "other",
        size: "1L",
        price: "Ksh 4,500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GLENDALE%20WHSKYT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Glendale Whsky 750M",
        category: "other",
        size: "750ML",
        price: "Ksh 3,975",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GLENDALE%20WHSKY%20750M",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Glenfiddich 12Yrstr",
        category: "whisky",
        size: "1L",
        price: "Ksh 12,000",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GLENFIDDICH%2012YRSTR",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Glenfiddich 21Yrs",
        category: "whisky",
        size: "750ML",
        price: "Ksh 37,500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GLENFIDDICH%2021YRS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Glenfiddich Ipa",
        category: "whisky",
        size: "750ML",
        price: "Ksh 9,000",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GLENFIDDICH%20IPA",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Glenfiddich Project Xx",
        category: "whisky",
        size: "750ML",
        price: "Ksh 9,750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GLENFIDDICH%20PROJECT%20XX",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Glengrant",
        category: "other",
        size: "750ML",
        price: "Ksh 3,150",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GLENGRANT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Glenlivet 12Yrst",
        category: "other",
        size: "1L",
        price: "Ksh 8,700",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GLENLIVET%2012YRST",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Glenlivet 12Yrs",
        category: "other",
        size: "700ML",
        price: "Ksh 8,550",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GLENLIVET%2012YRS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Glenlivet Founder",
        category: "other",
        size: "700ML",
        price: "Ksh 8,100",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GLENLIVET%20FOUNDER",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Glenmorangie 10Yrsitre",
        category: "whisky",
        size: "1L",
        price: "Ksh 15,000",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GLENMORANGIE%2010YRSITRE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Glenmorangie 18Yrs",
        category: "whisky",
        size: "750ML",
        price: "Ksh 16,500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GLENMORANGIE%2018YRS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Glenmorangie",
        category: "whisky",
        size: "75CL",
        price: "Ksh 7,200",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GLENMORANGIE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Glen Scanlan W",
        category: "other",
        size: "350ML",
        price: "Ksh 1,170",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GLEN%20SCANLAN%20W",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Glen Silverst",
        category: "other",
        size: "1L",
        price: "Ksh 2,175",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GLEN%20SILVERST",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Glen Silvers",
        category: "other",
        size: "750ML",
        price: "Ksh 1,755",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GLEN%20SILVERS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gold Seal 16%",
        category: "other",
        size: "750ML",
        price: "Ksh 285",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GOLD%20SEAL%2016%25",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gold Supreme",
        category: "other",
        size: "750ML",
        price: "Ksh 795",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GOLD%20SUPREME",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gordon Gin",
        category: "gin",
        size: "350ML",
        price: "Ksh 1,275",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GORDON%20GIN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gordon Greent",
        category: "gin",
        size: "1L",
        price: "Ksh 2,775",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GORDON%20GREENT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gordon Green",
        category: "gin",
        size: "750ML",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GORDON%20GREEN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gordon Lemont",
        category: "gin",
        size: "1L",
        price: "Ksh 3,225",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GORDON%20LEMONT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gordon Lemon",
        category: "gin",
        size: "70CL",
        price: "Ksh 2,850",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GORDON%20LEMON",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gordon Orange",
        category: "gin",
        size: "700ML",
        price: "Ksh 2,805",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GORDON%20ORANGE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gordon Pinkt",
        category: "gin",
        size: "1L",
        price: "Ksh 3,075",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GORDON%20PINKT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gordon Pink",
        category: "gin",
        size: "700ML",
        price: "Ksh 2,775",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GORDON%20PINK",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gordons Dry & Tonic Can",
        category: "gin",
        size: "750ML",
        price: "Ksh 293",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GORDONS%20DRY%20%26%20TONIC%20CAN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gordons Gintr",
        category: "gin",
        size: "1L",
        price: "Ksh 3,480",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GORDONS%20GINTR",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gordons Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 375",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GORDONS%20GIN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gordons Gin 3/4",
        category: "gin",
        size: "750ML",
        price: "Ksh 3,000",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GORDONS%20GIN%203/4",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gordons Pink &Tonic Can",
        category: "gin",
        size: "750ML",
        price: "Ksh 293",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GORDONS%20PINK%20%26TONIC%20CAN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Grace O Malley Whiskey",
        category: "whisky",
        size: "750ML",
        price: "Ksh 6,195",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GRACE%20O%20MALLEY%20WHISKEY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Grand Master Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,035",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GRAND%20MASTER%20WHISKY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gran Mirador Dark",
        category: "other",
        size: "750ML",
        price: "Ksh 2,970",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GRAN%20MIRADOR%20DARK",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Gran Mirador Red",
        category: "other",
        size: "750ML",
        price: "Ksh 2,970",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GRAN%20MIRADOR%20RED",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Grants 1/2",
        category: "other",
        size: "750ML",
        price: "Ksh 1,155",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GRANTS%201/2",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Grantst With Glass",
        category: "other",
        size: "1L",
        price: "Ksh 3,150",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GRANTST%20WITH%20GLASS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Grants With Glass",
        category: "other",
        size: "750ML",
        price: "Ksh 2,550",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GRANTS%20WITH%20GLASS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Grants Smoky",
        category: "other",
        size: "750ML",
        price: "Ksh 2,100",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GRANTS%20SMOKY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Grants Triple W 12Yrs",
        category: "other",
        size: "750ML",
        price: "Ksh 5,625",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GRANTS%20TRIPLE%20W%2012YRS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Grayson Gold",
        category: "other",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=grayson%20gold",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Grayson Whiskey",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,170",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GRAYSON%20WHISKEY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Grayson Whisky",
        category: "whisky",
        size: "250ML",
        price: "Ksh 390",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GRAYSON%20WHISKY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Grenadine Syrup",
        category: "other",
        size: "750ML",
        price: "Ksh 570",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GRENADINE%20SYRUP",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Grey Goose Vodkat",
        category: "vodka",
        size: "1L",
        price: "Ksh 5,325",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GREY%20GOOSE%20VODKAT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Grouse Sherry Whsky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 4,125",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GROUSE%20SHERRY%20WHSKY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Guarana",
        category: "other",
        size: "440ML",
        price: "Ksh 240",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GUARANA",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Guarana Can",
        category: "other",
        size: "750ML",
        price: "Ksh 267",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GUARANA%20CAN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Guarana Iceberg",
        category: "other",
        size: "750ML",
        price: "Ksh 255",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GUARANA%20ICEBERG",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Guiness Smooth Beer",
        category: "beer",
        size: "330ML",
        price: "Ksh 240",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GUINESS%20SMOOTH%20BEER",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Guinness Beer",
        category: "beer",
        size: "750ML",
        price: "Ksh 308",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GUINNESS%20BEER",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Guinness Can",
        category: "beer",
        size: "500ML",
        price: "Ksh 329",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GUINNESS%20CAN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Guinness Smooth Beer",
        category: "beer",
        size: "500ML",
        price: "Ksh 254",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GUINNESS%20SMOOTH%20BEER",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Guinness Smooth Can",
        category: "beer",
        size: "750ML",
        price: "Ksh 303",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GUINNESS%20SMOOTH%20CAN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Guinness Smooth  Can",
        category: "beer",
        size: "330ML",
        price: "Ksh 263",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=GUINNESS%20SMOOTH%20%20CAN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hampton Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HAMPTON%20WHISKY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hart Blueberry",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HART%20BLUEBERRY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hart Grape Ice",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HART%20GRAPE%20ICE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hart Manhattan Mint",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HART%20MANHATTAN%20MINT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hart Pineappleice",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HART%20PINEAPPLEICE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hart Strawberry Cosmo",
        category: "other",
        size: "750ML",
        price: "Ksh 2,250",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HART%20STRAWBERRY%20COSMO",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Harveys",
        category: "other",
        size: "750ML",
        price: "Ksh 2,775",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HARVEYS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Havana Anejo Especial Plus",
        category: "other",
        size: "750ML",
        price: "Ksh 3,720",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HAVANA%20ANEJO%20ESPECIAL%20PLUS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Havana Club 3Yrs",
        category: "other",
        size: "750 ML",
        price: "Ksh 2,880",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HAVANA%20CLUB%203YRS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "H B",
        category: "other",
        size: "750ML",
        price: "Ksh 270",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=H%20B",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "H C",
        category: "other",
        size: "750ML",
        price: "Ksh 240",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=H%20C",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Heineken Bottle",
        category: "beer",
        size: "330ML",
        price: "Ksh 398",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HEINEKEN%20BOTTLE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Heineken Can",
        category: "beer",
        size: "500ML",
        price: "Ksh 420",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HEINEKEN%20CAN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Heineken Zero%",
        category: "beer",
        size: "750ML",
        price: "Ksh 315",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HEINEKEN%20ZERO%25",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hendricks Dry Gint",
        category: "gin",
        size: "1L",
        price: "Ksh 9,750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HENDRICKS%20DRY%20GINT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hendricks Dry Gin",
        category: "gin",
        size: "70CL",
        price: "Ksh 7,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HENDRICKS%20DRY%20GIN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hennessy Vst",
        category: "brandy",
        size: "1L",
        price: "Ksh 11,325",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HENNESSY%20vsT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hennessy Vs 3/4",
        category: "brandy",
        size: "750ML",
        price: "Ksh 6,975",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HENNESSY%20vs%203/4",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hennessy Vs",
        category: "brandy",
        size: "350ML",
        price: "Ksh 3,600",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HENNESSY%20VS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hennessy Vsop",
        category: "brandy",
        size: "700ML",
        price: "Ksh 13,500",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HENNESSY%20VSOP",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hennessy  Xo",
        category: "brandy",
        size: "700ML",
        price: "Ksh 54,750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HENNESSY%20%20XO",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Herdsman",
        category: "other",
        size: "250ML",
        price: "Ksh 420",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HERDSMAN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Herdsman",
        category: "other",
        size: "500ML",
        price: "Ksh 855",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HERDSMAN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Highland Queent",
        category: "other",
        size: "1L",
        price: "Ksh 1,560",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HIGHLAND%20QUEENT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Highland Queen",
        category: "other",
        size: "350ML",
        price: "Ksh 600",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HIGHLAND%20QUEEN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Highland Queen",
        category: "other",
        size: "750ML",
        price: "Ksh 1,170",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HIGHLAND%20QUEEN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hlibny Dar Crafted Cornitre",
        category: "other",
        size: "1L",
        price: "Ksh 2,700",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HLIBNY%20DAR%20CRAFTED%20CORNITRE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hlibny Dar Crafted  Ginger &Honey Litre",
        category: "gin",
        size: "750ML",
        price: "Ksh 2,700",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HLIBNY%20DAR%20CRAFTED%20%20GINGER%20%26HONEY%20LITRE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hunter Cider Dry",
        category: "whisky",
        size: "330ML",
        price: "Ksh 296",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HUNTER%20CIDER%20DRY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hunter Cider Gold",
        category: "whisky",
        size: "330ML",
        price: "Ksh 296",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HUNTER%20CIDER%20GOLD",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hunters",
        category: "whisky",
        size: "250ML",
        price: "Ksh 447",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HUNTERS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hunters",
        category: "whisky",
        size: "350ML",
        price: "Ksh 653",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HUNTERS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hunters",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,380",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HUNTERS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hunting Apple",
        category: "other",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HUNTING%20APPLE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hunting Choco",
        category: "other",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HUNTING%20CHOCO",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hunting Ldg Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HUNTING%20LDG%20VODKA",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hunting  Lg Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,440",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HUNTING%20%20LG%20GIN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Hunting Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,620",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=HUNTING%20WHISKY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Ice Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 825",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ICE%20VODKA",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Icon Golden Brandy",
        category: "brandy",
        size: "250ML",
        price: "Ksh 203",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ICON%20GOLDEN%20BRANDY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Icon Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 203",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ICON%20VODKA",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Identity Brandy",
        category: "brandy",
        size: "250ML",
        price: "Ksh 255",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=IDENTITY%20BRANDY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Identity Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 255",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=IDENTITY%20GIN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Identity Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 255",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=IDENTITY%20VODKA",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Imperial Blue",
        category: "other",
        size: "250ML",
        price: "Ksh 548",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=IMPERIAL%20BLUE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Imperial Blue",
        category: "other",
        size: "375ML",
        price: "Ksh 825",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=IMPERIAL%20BLUE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Imperial Blue",
        category: "other",
        size: "750ML",
        price: "Ksh 1,605",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=IMPERIAL%20BLUE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Imperial Blue Giftpack",
        category: "other",
        size: "750ML",
        price: "Ksh 1,380",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=IMPERIAL%20BLUE%20GIFTPACK",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Inverroche Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 7,350",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=INVERROCHE%20GIN",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Iris Whisky",
        category: "whisky",
        size: "375ML",
        price: "Ksh 548",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=IRIS%20WHISKY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Iris Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,035",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=IRIS%20WHISKY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jack Danieltr",
        category: "whisky",
        size: "1 L",
        price: "Ksh 4,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JACK%20DANIELTR",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jack Daniel Applet",
        category: "whisky",
        size: "1L",
        price: "Ksh 5,175",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JACK%20DANIEL%20APPLET",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jack Daniel Apple",
        category: "whisky",
        size: "700ML",
        price: "Ksh 5,550",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JACK%20DANIEL%20APPLE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jack Daniel Can Cola",
        category: "whisky",
        size: "750ML",
        price: "Ksh 375",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JACK%20DANIEL%20CAN%20COLA",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jack Daniel Can Lynchburg",
        category: "whisky",
        size: "750ML",
        price: "Ksh 420",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JACK%20DANIEL%20CAN%20lynchburg",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jack Daniel Firet",
        category: "whisky",
        size: "1L",
        price: "Ksh 5,475",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JACK%20DANIEL%20FIRET",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jack Daniel Fire",
        category: "whisky",
        size: "700ML",
        price: "Ksh 4,350",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JACK%20DANIEL%20FIRE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jack Daniel Honey",
        category: "whisky",
        size: "750ML",
        price: "Ksh 5,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JACK%20DANIEL%20HONEY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jack Daniels 3/4",
        category: "whisky",
        size: "750ML",
        price: "Ksh 4,163",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JACK%20DANIELS%203/4",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jack Daniels",
        category: "whisky",
        size: "350ML",
        price: "Ksh 2,925",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JACK%20DANIELS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jack Daniels Honeyt",
        category: "whisky",
        size: "1L",
        price: "Ksh 5,850",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JACK%20DANIELS%20HONEYT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jack Daniels Honey",
        category: "whisky",
        size: "350ML",
        price: "Ksh 2,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JACK%20DANIELS%20HONEY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jack D Single Barrel",
        category: "other",
        size: "700ML",
        price: "Ksh 8,400",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JACK%20D%20SINGLE%20BARREL",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jacob Creek Chardonnay",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JACOB%20CREEK%20CHARDONNAY",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jacob Creek Merlot",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JACOB%20CREEK%20MERLOT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jacob Creek Rose",
        category: "other",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JACOB%20CREEK%20ROSE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jacob Creek Shiraz",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JACOB%20CREEK%20SHIRAZ",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jagermeister Giftpack",
        category: "other",
        size: "1L",
        price: "Ksh 4,800",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JAGERMEISTER%20GIFTPACK",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jagermeister 700 With Cork",
        category: "other",
        size: "750ML",
        price: "Ksh 3,525",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JAGERMEISTER%20700%20WITH%20CORK",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jagermestert",
        category: "other",
        size: "1L",
        price: "Ksh 4,425",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JAGERMESTERT",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jagermester",
        category: "other",
        size: "350ML",
        price: "Ksh 2,025",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JAGERMESTER",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jagermester",
        category: "other",
        size: "750ML",
        price: "Ksh 3,525",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JAGERMESTER",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jamaican Rum",
        category: "rum",
        size: "750ML",
        price: "Ksh 1,050",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JAMAICAN%20RUM",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jambo Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 150",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JAMBO%20VODKA",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jameson Cask Mate",
        category: "whisky",
        size: "750ML",
        price: "Ksh 4,575",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JAMESON%20CASK%20MATE",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jameson Crested",
        category: "whisky",
        size: "750ML",
        price: "Ksh 4,875",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JAMESON%20CRESTED",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jamesonst",
        category: "whisky",
        size: "1L",
        price: "Ksh 4,950",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JAMESONST",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jamesons",
        category: "whisky",
        size: "350ML",
        price: "Ksh 1,935",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JAMESONS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jamesons",
        category: "whisky",
        size: "750ML",
        price: "Ksh 3,750",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JAMESONS",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "Jamesons Black Barrel",
        category: "whisky",
        size: "750ML",
        price: "Ksh 6,075",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=JAMESONS%20BLACK%20BARREL",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "J & Btr",
        category: "other",
        size: "1L",
        price: "Ksh 3,135",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=J%20%26%20BTR",
        isKenyan: false,
        country: "Unknown"
    },
    {
        name: "J & B 3/4",
        category: "other",
        size: "750ML",
        price: "Ksh 2,370",
        description: "A quality drink offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=J%20%26%20B%203/4",
        isKenyan: false,
        country: "Unknown"
    }
];
/* CATALOGUE_END */

// Initialize Global Collections for Home Page
function initGlobalCollections() {
    const tabsContainer = document.getElementById('country-tabs');
    const gridContainer = document.getElementById('collection-grid-container');
    const mapImage = document.getElementById('country-map');

    if (!tabsContainer || !gridContainer) return;

    const featuredCountries = [
        { name: 'Kenya', id: 'kenya', icon: '🇰🇪' },
        { name: 'Scotland', id: 'scotland', icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
        { name: 'France', id: 'france', icon: '🇫🇷' },
        { name: 'South Africa', id: 'south-africa', icon: '🇿🇦' },
        { name: 'Ireland', id: 'ireland', icon: '🇮🇪' }
    ];

    tabsContainer.innerHTML = '';
    gridContainer.innerHTML = '';

    featuredCountries.forEach((country, index) => {
        // Create Tab
        const tab = document.createElement('div');
        tab.className = `country-tab ${index === 0 ? 'active' : ''}`;
        tab.innerHTML = `${country.icon} ${country.name}`;
        tab.setAttribute('data-country', country.id);
        tab.setAttribute('data-name', country.name);
        tabsContainer.appendChild(tab);

        // Create Grid for this country
        const group = document.createElement('div');
        group.id = `group-${country.id}`;
        group.className = `collection-group ${index === 0 ? 'active' : ''}`;
        
        const grid = document.createElement('div');
        grid.className = 'collection-grid';

        // Filter products for this country
        // We look for name contains or country field
        const countryProducts = catalogueProducts.filter(p => 
            (p.country && p.country.toLowerCase() === country.name.toLowerCase()) ||
            (p.name.toLowerCase().includes(country.name.toLowerCase()))
        ).slice(0, 4);

        if (countryProducts.length === 0) {
            grid.innerHTML = `<p style="text-align: center; color: var(--text-muted); grid-column: 1/-1;">Coming soon: More premium selections from ${country.name}.</p>`;
        } else {
            countryProducts.forEach(product => {
                const itemHtml = `
                    <div class="product-card reveal">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}" style="max-height: 180px; object-fit: contain;" loading="lazy">
                        </div>
                        <div class="product-info">
                            <h3>${product.name}</h3>
                            <div class="product-size">${product.size} - <span style="color: var(--accent-gold); font-weight: bold;">${product.price}</span></div>
                            <button class="btn btn-primary shop-order-btn" data-product="${product.name} ${product.size}">Order on WA</button>
                        </div>
                    </div>
                `;
                grid.innerHTML += itemHtml;
            });
        }

        group.appendChild(grid);
        gridContainer.appendChild(group);

        // Tab click event
        tab.addEventListener('click', () => {
            // Update tabs
            document.querySelectorAll('.country-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update grids
            document.querySelectorAll('.collection-group').forEach(g => g.classList.remove('active'));
            group.classList.add('active');

            // Update map
            if (mapImage) {
                mapImage.style.opacity = '0';
                setTimeout(() => {
                    mapImage.src = `assets/images/maps/${country.id}.png`;
                    mapImage.style.opacity = '0.08';
                }, 300);
            }
        });
    });

    // Re-attach WhatsApp listeners for new buttons
    gridContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('shop-order-btn')) {
            const productInfo = e.target.getAttribute('data-product');
            window.location.href = buildWhatsAppLink(`Hi Liquify, I want to order ${productInfo} from your Global Collection.`);
        }
    });

    if (typeof reveal === 'function') setTimeout(reveal, 500);
}

// Attach to DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('global-collections')) {
        initGlobalCollections();
    }
});

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
