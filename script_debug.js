// Base WhatsApp Number (Format: 254XXXXXXXXX)
const WA_PHONE = '254141024938'; // Replace with actual number

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
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
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
reveal(); // Trigger on load

// Dynamic WhatsApp Link Generation
function buildWhatsAppLink(text) {
    const encodedText = encodeURIComponent(text);
    return `https://wa.me/${WA_PHONE}?text=${encodedText}`;
}

// Attach listeners to order buttons
document.addEventListener('DOMContentLoaded', () => {
    
    // Removed legacy Category Card WhatsApp router. Routing is now handled inline via index.html

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

// Product Catalogue Data (Mocked from Real Bottles)

















































































































































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
        name: "Johnnie Walker Black Label",
        category: "whisky",
        size: "750ml",
        price: "Ksh 4,500",
        description: "A benchmark premium blended Scotch whisky with a smooth, deep, and complex character.",
        image: "assets/images/real/johnnie_walker_black_label.png",
        isKenyan: false
    },
    {
        name: "Jameson Irish Whiskey",
        category: "whisky",
        size: "750ml",
        price: "Ksh 3,200",
        description: "A perfect balance of spicy, nutty and vanilla notes with hints of sweet sherry and exceptional smoothness.",
        image: "assets/images/real/jameson_irish_whiskey.png",
        isKenyan: false
    },
    {
        name: "Glenfiddich 15 Year Old",
        category: "whisky",
        size: "750ml",
        price: "Ksh 9,500",
        description: "A complex single malt characterized by warming spice, honey, and rich fruit notes.",
        image: "assets/images/real/glenfiddich_15_year_old.png",
        isKenyan: false
    },
    {
        name: "Jack Daniel's Old No. 7",
        category: "whisky",
        size: "1L",
        price: "Ksh 4,800",
        description: "Mellowed drop by drop through 10-feet of sugar maple charcoal, then matured in handcrafted barrels.",
        image: "assets/images/real/jack_daniels_old_no._7.png",
        isKenyan: false
    },
    {
        name: "Chivas Regal 12 Year Old",
        category: "whisky",
        size: "750ml",
        price: "Ksh 4,300",
        description: "A rich and smooth blended Scotch whisky with a warm amber color.",
        image: "assets/images/real/chivas_regal_12_year_old.png",
        isKenyan: false
    },
    {
        name: "Singleton of Dufftown 12",
        category: "whisky",
        size: "750ml",
        price: "Ksh 5,500",
        description: "A smooth single malt Scotch whisky with sweet fruity notes and a lingering finish.",
        image: "assets/images/real/singleton_of_dufftown_12.png",
        isKenyan: false
    },
    {
        name: "Glenmorangie The Original",
        category: "whisky",
        size: "750ml",
        price: "Ksh 6,800",
        description: "An elegant, floral single malt whisky, acclaimed for its alluring complexity.",
        image: "assets/images/real/glenmorangie_the_original.png",
        isKenyan: false
    },
    {
        name: "Famous Grouse",
        category: "whisky",
        size: "750ml",
        price: "Ksh 2,800",
        description: "Scotland's favourite blend, perfectly balanced with notes of dried fruit and soft spice.",
        image: "assets/images/real/famous_grouse.png",
        isKenyan: false
    },
    {
        name: "Black & White",
        category: "whisky",
        size: "750ml",
        price: "Ksh 2,100",
        description: "A classic, approachable and smooth blended Scotch whisky.",
        image: "assets/images/real/black_and_white.png",
        isKenyan: false
    },
    {
        name: "Hunter's Choice",
        category: "whisky",
        size: "750ml",
        price: "Ksh 1,300",
        description: "Kenya's best-selling whisky, a blend that is smooth and consistent.",
        image: "assets/images/kenyan/hunters_choice.png",
        isKenyan: true
    },
    {
        name: "Best Classic Whisky",
        category: "whisky",
        size: "750ml",
        price: "Ksh 1,400",
        description: "A locally blended whisky known for its rich character and affordability.",
        image: "assets/images/kenyan/best_classic_whisky.png",
        isKenyan: true
    },
    {
        name: "County Whisky",
        category: "whisky",
        size: "750ml",
        price: "Ksh 1,100",
        description: "A locally produced spirit that offers a classic whisky experience at a competitive price.",
        image: "assets/images/kenyan/county_whisky.png",
        isKenyan: true
    },
    {
        name: "Casillero del Diablo Cabernet",
        category: "wine",
        size: "750ml",
        price: "Ksh 1,800",
        description: "Rich and fruit-forward with aromas of cherries, plums, and a touch of vanilla.",
        image: "assets/images/real/casillero_del_diablo_cabernet.png",
        isKenyan: false
    },
    {
        name: "Nederburg Cabernet Sauvignon",
        category: "wine",
        size: "750ml",
        price: "Ksh 1,900",
        description: "Abundant aromas of blackcurrant and cherry with hints of vanilla and spice.",
        image: "assets/images/real/nederburg_cabernet_sauvignon.png",
        isKenyan: false
    },
    {
        name: "4th Street Sweet Red",
        category: "wine",
        size: "750ml",
        price: "Ksh 1,200",
        description: "A hugely popular, deliciously sweet and fruity red wine.",
        image: "assets/images/real/4th_street_sweet_red.png",
        isKenyan: false
    },
    {
        name: "Four Cousins Sweet Red",
        category: "wine",
        size: "750ml",
        price: "Ksh 1,400",
        description: "Sweet, fruity, and deeply layered African wine perfect for casual dining.",
        image: "assets/images/real/four_cousins_sweet_red.png",
        isKenyan: false
    },
    {
        name: "Frontera Sweet Red",
        category: "wine",
        size: "750ml",
        price: "Ksh 1,300",
        description: "Fruit forward, highly approachable sweet and smooth everyday wine.",
        image: "assets/images/real/frontera_sweet_red.png",
        isKenyan: false
    },
    {
        name: "Robertson Winery Sweet Red",
        category: "wine",
        size: "750ml",
        price: "Ksh 1,500",
        description: "Natural sweet wine with soft fruit flavours and a smooth finish.",
        image: "assets/images/real/robertson_winery_sweet_red.png",
        isKenyan: false
    },
    {
        name: "Cellar Cask Sweet Red",
        category: "wine",
        size: "750ml",
        price: "Ksh 1,400",
        description: "Deep ruby red color with a soft, sweet, and highly satisfying finish.",
        image: "assets/images/real/cellar_cask_sweet_red.png",
        isKenyan: false
    },
    {
        name: "Grey Goose",
        category: "vodka",
        size: "1L",
        price: "Ksh 8,500",
        description: "A super-premium vodka known for its ultimate smoothness and exceptional taste.",
        image: "assets/images/real/grey_goose.png",
        isKenyan: false
    },
    {
        name: "Absolut Vodka",
        category: "vodka",
        size: "750ml",
        price: "Ksh 2,500",
        description: "Rich, full-bodied and complex, yet smooth and mellow with a distinct character of grain.",
        image: "assets/images/real/absolut_vodka.png",
        isKenyan: false
    },
    {
        name: "Smirnoff Red Label",
        category: "vodka",
        size: "750ml",
        price: "Ksh 1,800",
        description: "The world's most awarded premium vodka, triple distilled for exceptional smoothness.",
        image: "assets/images/real/smirnoff_red_label.png",
        isKenyan: false
    },
    {
        name: "Ciroc Vodka",
        category: "vodka",
        size: "750ml",
        price: "Ksh 5,500",
        description: "Ultra-premium vodka distilled from fine French grapes with an exceptionally smooth finish.",
        image: "assets/images/real/ciroc_vodka.png",
        isKenyan: false
    },
    {
        name: "Ketel One",
        category: "vodka",
        size: "750ml",
        price: "Ksh 3,800",
        description: "Crisp and sophisticated Dutch vodka crafted with modern and traditional distilling.",
        image: "assets/images/real/ketel_one.png",
        isKenyan: false
    },
    {
        name: "Flirt Vodka",
        category: "vodka",
        size: "750ml",
        price: "Ksh 1,500",
        description: "A smooth, continuously distilled clean vodka highly popular in the local nightlife.",
        image: "assets/images/real/flirt_vodka.png",
        isKenyan: false
    },
    {
        name: "Kenya Cane",
        category: "vodka",
        size: "750ml",
        price: "Ksh 1,000",
        description: "Kenya's iconic original smooth cane spirit, incredibly versatile and pure.",
        image: "assets/images/real/kenya_cane.png",
        isKenyan: true
    },
    {
        name: "Kibao Vodka",
        category: "vodka",
        size: "750ml",
        price: "Ksh 1,100",
        description: "A triple-distilled, high-quality vodka produced by KWAL. It's one of Kenya's most popular spirits.",
        image: "assets/images/kenyan/kibao_vodka.png",
        isKenyan: true
    },
    {
        name: "Chrome Vodka",
        category: "vodka",
        size: "750ml",
        price: "Ksh 1,000",
        description: "A crisp, smooth vodka from EABL, designed for a modern style and energy.",
        image: "assets/images/kenyan/chrome_vodka.png",
        isKenyan: true
    },
    {
        name: "Salute Vodka",
        category: "vodka",
        size: "750ml",
        price: "Ksh 900",
        description: "An affordable, smooth vodka manufactured locally for casual social settings.",
        image: "assets/images/kenyan/salute_vodka.png",
        isKenyan: true
    },
    {
        name: "Tanqueray London Dry",
        category: "gin",
        size: "750ml",
        price: "Ksh 3,800",
        description: "A perfect balance of four botanicals for a smooth, uniquely classic taste.",
        image: "assets/images/real/tanqueray_london_dry.png",
        isKenyan: false
    },
    {
        name: "Bombay Sapphire",
        category: "gin",
        size: "750ml",
        price: "Ksh 3,500",
        description: "Vapor-infused with 10 hand-selected botanicals for a bright, complex flavor profile.",
        image: "assets/images/real/bombay_sapphire.png",
        isKenyan: false
    },
    {
        name: "Gordon's London Dry",
        category: "gin",
        size: "750ml",
        price: "Ksh 2,400",
        description: "The world's best-selling London dry gin, distinctively refreshing.",
        image: "assets/images/real/gordons_london_dry.png",
        isKenyan: false
    },
    {
        name: "Gilbey's Special Dry",
        category: "gin",
        size: "750ml",
        price: "Ksh 1,600",
        description: "An immensely popular, perfectly balanced and affordable quality gin, bottled locally.",
        image: "assets/images/real/gilbeys_special_dry.png",
        isKenyan: true
    },
    {
        name: "Best Gin",
        category: "gin",
        size: "750ml",
        price: "Ksh 1,300",
        description: "A refreshing Kenyan gin distilled with local botanicals for a crisp finish.",
        image: "assets/images/kenyan/best_gin.png",
        isKenyan: true
    },
    {
        name: "Chelsea Gin",
        category: "gin",
        size: "750ml",
        price: "Ksh 1,050",
        description: "A classic London Dry style gin produced locally, perfect for mixing.",
        image: "assets/images/kenyan/chelsea_gin.png",
        isKenyan: true
    },
    {
        name: "Hendrick's Gin",
        category: "gin",
        size: "750ml",
        price: "Ksh 7,000",
        description: "Curiously infused with rose petals and cucumber for a truly unique profile.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=Hendrick's+Gin",
        isKenyan: false
    },
    {
        name: "Beefeater London Dry",
        category: "gin",
        size: "750ml",
        price: "Ksh 3,000",
        description: "An authentic London dry gin with big juniper character and strong citrus notes.",
        image: "assets/images/real/beefeater_london_dry.png",
        isKenyan: false
    },
    {
        name: "Heineken 6-Pack",
        category: "beer",
        size: "500ml Cans",
        price: "Ksh 1,800",
        description: "A crisp, balanced premium lager with a subtly bitter, fruity taste.",
        image: "assets/images/real/heineken_6_pack.png",
        isKenyan: false
    },
    {
        name: "Tusker Lager 6-Pack",
        category: "beer",
        size: "500ml Cans",
        price: "Ksh 1,400",
        description: "Kenya's iconic, refreshingly crisp premium national lager.",
        image: "assets/images/real/tusker_lager_6_pack.png",
        isKenyan: true
    },
    {
        name: "Tusker Lite 6-Pack",
        category: "beer",
        size: "500ml Cans",
        price: "Ksh 1,500",
        description: "Crisp, premium low-carb lager for a lighter drinking experience.",
        image: "assets/images/real/tusker_lite_6_pack.png",
        isKenyan: true
    },
    {
        name: "White Cap Lager 6-Pack",
        category: "beer",
        size: "500ml Cans",
        price: "Ksh 1,500",
        description: "A smooth, distinctively classic Kenyan lager with no added sugar.",
        image: "assets/images/real/white_cap_lager_6_pack.png",
        isKenyan: true
    },
    {
        name: "Guinness Extra Stout 6-Pack",
        category: "beer",
        size: "500ml Cans",
        price: "Ksh 1,600",
        description: "A rich, dark, and perfectly balanced stout with roasted malt notes.",
        image: "assets/images/real/guinness_extra_stout_6_pack.png",
        isKenyan: false
    },
    {
        name: "Balozi Lager 6-Pack",
        category: "beer",
        size: "500ml Cans",
        price: "Ksh 1,300",
        description: "A rich malt-flavored Kenyan lager known for its authentic taste.",
        image: "assets/images/real/balozi_lager_6_pack.png",
        isKenyan: true
    },
    {
        name: "Pilsner Lager 6-Pack",
        category: "beer",
        size: "500ml Cans",
        price: "Ksh 1,300",
        description: "A bold and deeply refreshing lager widely popular in East Africa.",
        image: "assets/images/real/pilsner_lager_6_pack.png",
        isKenyan: true
    },
    {
        name: "Caribia Cane",
        category: "rum",
        size: "750ml",
        price: "Ksh 1,000",
        description: "A premium cane spirit with an exotic coconut twist, manufactured locally.",
        image: "assets/images/kenyan/caribia_cane.png",
        isKenyan: true
    },
    {
        name: "Viceroy Brandy",
        category: "brandy",
        size: "750ml",
        price: "Ksh 1,700",
        description: "A legendary brandy bottled locally, known for its smooth and aged character.",
        image: "assets/images/kenyan/viceroy_brandy.png",
        isKenyan: true
    },
    {
        name: "County Brandy",
        category: "brandy",
        size: "750ml",
        price: "Ksh 1,100",
        description: "A locally crafted brandy offering a rich, warming experience.",
        image: "assets/images/kenyan/county_brandy.png",
        isKenyan: true
    },
    {
        name: "Best Cream",
        category: "liqueur",
        size: "750ml",
        price: "Ksh 1,600",
        description: "A smooth, dairy-based liqueur with a rich Kenyan coffee/chocolate undertone.",
        image: "assets/images/kenyan/best_cream.png",
        isKenyan: true
    },
    {
        name: "4Th Roset",
        category: "wine",
        size: "1.5L",
        price: "Ksh 2,640",
        description: "A quality Wine offering exceptional taste.",
        image: "assets/images/real/4th_roset.jpg",
        isKenyan: false
    },
    {
        name: "4Th Street Red Swtt",
        category: "other",
        size: "5L",
        price: "Ksh 6,600",
        description: "A quality Other offering exceptional taste.",
        image: "assets/images/real/4th_street_red_swtt.jpg",
        isKenyan: false
    },
    {
        name: "4Th Street Rosetr",
        category: "wine",
        size: "5L",
        price: "Ksh 5,370",
        description: "A quality Wine offering exceptional taste.",
        image: "assets/images/real/4th_street_rosetr.jpg",
        isKenyan: false
    },
    {
        name: "4Th Street White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,425",
        description: "A quality Other offering exceptional taste.",
        image: "assets/images/real/4th_street_white.jpg",
        isKenyan: false
    },
    {
        name: "4Th Strt Redt",
        category: "other",
        size: "1.5L",
        price: "Ksh 2,640",
        description: "A quality Other offering exceptional taste.",
        image: "assets/images/real/4th_strt_redt.jpg",
        isKenyan: false
    },
    {
        name: "4Th Strt Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,342",
        description: "A quality Other offering exceptional taste.",
        image: "assets/images/real/4th_strt_redt.jpg",
        isKenyan: false
    },
    {
        name: "4Th Strt White Sweett",
        category: "other",
        size: "5L",
        price: "Ksh 6,600",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=4TH%20STRT%20WHITE%20SWEETT",
        isKenyan: false
    },
    {
        name: "Assic Gin",
        category: "gin",
        size: "58CL",
        price: "Ksh 2,055",
        description: "A quality Gin offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ASSIC%20GIN",
        isKenyan: false
    },
    {
        name: "Assic G&T Can",
        category: "other",
        size: "58CL",
        price: "Ksh 315",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ASSIC%20G%26T%20CAN",
        isKenyan: false
    },
    {
        name: "58 Spiced Orange",
        category: "other",
        size: "350ML",
        price: "Ksh 1,050",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=58%20SPICED%20ORANGE",
        isKenyan: false
    },
    {
        name: "58 Spiced Orange",
        category: "other",
        size: "750ML",
        price: "Ksh 2,055",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=58%20SPICED%20ORANGE",
        isKenyan: false
    },
    {
        name: "58 Spiced Orange G&T Can",
        category: "other",
        size: "330ml Can",
        price: "Ksh 315",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=58%20SPICED%20ORANGE%20G%26T%20CAN",
        isKenyan: false
    },
    {
        name: "58 Very Berry G&T Can",
        category: "other",
        size: "330ml Can",
        price: "Ksh 315",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=58%20VERY%20BERRY%20G%26T%20CAN",
        isKenyan: false
    },
    {
        name: "5Th Generationtr Red",
        category: "other",
        size: "5L",
        price: "Ksh 4,500",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=5TH%20GENERATIONTR%20RED",
        isKenyan: false
    },
    {
        name: "5Th Generation Whitetr",
        category: "other",
        size: "5L",
        price: "Ksh 4,500",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=5TH%20GENERATION%20WHITETR",
        isKenyan: false
    },
    {
        name: "#7Gin Blueberry",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A quality Gin offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=%237GIN%20BLUEBERRY",
        isKenyan: false
    },
    {
        name: "#7Gin Lime And Lemon",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A quality Gin offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=%237GIN%20LIME%20AND%20LEMON",
        isKenyan: false
    },
    {
        name: "#7Gin Mixed Berry",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A quality Gin offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=%237GIN%20MIXED%20BERRY",
        isKenyan: false
    },
    {
        name: "#7Gin Orange",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A quality Gin offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=%237GIN%20ORANGE",
        isKenyan: false
    },
    {
        name: "#7Gin Original",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A quality Gin offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=%237GIN%20ORIGINAL",
        isKenyan: false
    },
    {
        name: "#7Gin Passion",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A quality Gin offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=%237GIN%20PASSION",
        isKenyan: false
    },
    {
        name: "#7Gin Pineapple",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A quality Gin offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=%237GIN%20PINEAPPLE",
        isKenyan: false
    },
    {
        name: "7 Hills  Sweetred",
        category: "other",
        size: "750ML",
        price: "Ksh 1,328",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=7%20HILLS%20%20SWEETRED",
        isKenyan: false
    },
    {
        name: "7 Hills Sweet White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,328",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=7%20HILLS%20SWEET%20WHITE",
        isKenyan: false
    },
    {
        name: "8Pmt",
        category: "other",
        size: "1L",
        price: "Ksh 1,950",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=8PMT",
        isKenyan: false
    },
    {
        name: "8Pm Fire",
        category: "other",
        size: "750ML",
        price: "Ksh 1,680",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=8PM%20FIRE",
        isKenyan: false
    },
    {
        name: "8Pm Honey",
        category: "other",
        size: "750ML",
        price: "Ksh 1,680",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=8PM%20HONEY",
        isKenyan: false
    },
    {
        name: "8Pm Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,500",
        description: "A quality Whisky offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=8PM%20WHISKY",
        isKenyan: false
    },
    {
        name: "99 Rosas Chardonnay Viog",
        category: "wine",
        size: "750ml",
        price: "Ksh 1,920",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=99%20ROSAS%20CHARDONNAY%20VIOG",
        isKenyan: false
    },
    {
        name: "99 Rosas Temp Cab Sauv",
        category: "wine",
        size: "750ml",
        price: "Ksh 1,920",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=99%20ROSAS%20TEMP%20CAB%20SAUV",
        isKenyan: false
    },
    {
        name: "Absolute (Pernod)",
        category: "other",
        size: "750ML",
        price: "Ksh 2,955",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ABSOLUTE%20%28PERNOD%29",
        isKenyan: false
    },
    {
        name: "Absolute Litre (Pernod)",
        category: "other",
        size: "750ml",
        price: "Ksh 3,825",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ABSOLUTE%20LITRE%20%28PERNOD%29",
        isKenyan: false
    },
    {
        name: "Absolute Vodkat",
        category: "vodka",
        size: "1L",
        price: "Ksh 3,075",
        description: "Rich, full-bodied and complex, yet smooth and mellow with a distinct character of grain.",
        image: "assets/images/real/absolut_vodka.png",
        isKenyan: false
    },
    {
        name: "Absolute Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 2,925",
        description: "Rich, full-bodied and complex, yet smooth and mellow with a distinct character of grain.",
        image: "assets/images/real/absolut_vodka.png",
        isKenyan: false
    },
    {
        name: "Ac Blackitre",
        category: "other",
        size: "1L",
        price: "Ksh 2,100",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=AC%20BLACKITRE",
        isKenyan: false
    },
    {
        name: "Ac Black",
        category: "other",
        size: "750ML",
        price: "Ksh 1,620",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=AC%20BLACK",
        isKenyan: false
    },
    {
        name: "Afia Energy",
        category: "other",
        size: "330ML",
        price: "Ksh 75",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=AFIA%20ENERGY",
        isKenyan: false
    },
    {
        name: "Afribullcafe",
        category: "other",
        size: "750ml",
        price: "Ksh 2,070",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=AFRIBULLCAFE",
        isKenyan: false
    },
    {
        name: "Air Vodka",
        category: "vodka",
        size: "700ML",
        price: "Ksh 825",
        description: "A quality Vodka offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=AIR%20VODKA",
        isKenyan: false
    },
    {
        name: "Alandra Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,800",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ALANDRA%20RED",
        isKenyan: false
    },
    {
        name: "Alandra White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,800",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ALANDRA%20WHITE",
        isKenyan: false
    },
    {
        name: "All Seasons Whisky",
        category: "whisky",
        size: "250ML",
        price: "Ksh 570",
        description: "A quality Whisky offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ALL%20SEASONS%20WHISKY",
        isKenyan: false
    },
    {
        name: "All Seasons Whisky",
        category: "whisky",
        size: "500ML",
        price: "Ksh 1,178",
        description: "A quality Whisky offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ALL%20SEASONS%20WHISKY",
        isKenyan: false
    },
    {
        name: "All Seasons Whsky",
        category: "other",
        size: "375ML",
        price: "Ksh 878",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ALL%20SEASONS%20WHSKY",
        isKenyan: false
    },
    {
        name: "All Seasons Whsky",
        category: "other",
        size: "750ML",
        price: "Ksh 1,763",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ALL%20SEASONS%20WHSKY",
        isKenyan: false
    },
    {
        name: "Allsops Beer",
        category: "beer",
        size: "750ml",
        price: "Ksh 203",
        description: "A quality Beer offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ALLSOPS%20BEER",
        isKenyan: false
    },
    {
        name: "Alta Wine",
        category: "wine",
        size: "750ml",
        price: "Ksh 1,455",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ALTA%20WINE",
        isKenyan: false
    },
    {
        name: "Alta Wine Tz",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,740",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ALTA%20WINE%20TZ",
        isKenyan: false
    },
    {
        name: "Amani Sweet Red",
        category: "wine",
        size: "750ML",
        price: "Ksh 1,065",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=AMANI%20SWEET%20RED",
        isKenyan: false
    },
    {
        name: "Amani Sweet White",
        category: "wine",
        size: "750ml",
        price: "Ksh 1,065",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=AMANI%20SWEET%20WHITE",
        isKenyan: false
    },
    {
        name: "Amarula",
        category: "liqueur",
        size: "1L",
        price: "Ksh 3,375",
        description: "A quality Liqueur offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=AMARULA",
        isKenyan: false
    },
    {
        name: "Amarula",
        category: "liqueur",
        size: "350ML",
        price: "Ksh 1,500",
        description: "A quality Liqueur offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=AMARULA",
        isKenyan: false
    },
    {
        name: "Amarula",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 2,850",
        description: "A quality Liqueur offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=AMARULA",
        isKenyan: false
    },
    {
        name: "Analivia Sav",
        category: "other",
        size: "750ML",
        price: "Ksh 2,550",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ANALIVIA%20SAV",
        isKenyan: false
    },
    {
        name: "Angostura Bitters",
        category: "liqueur",
        size: "200ML",
        price: "Ksh 3,900",
        description: "A quality Liqueur offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ANGOSTURA%20BITTERS",
        isKenyan: false
    },
    {
        name: "Annabelle Cuvee Rose",
        category: "wine",
        size: "750ML",
        price: "Ksh 2,093",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ANNABELLE%20CUVEE%20ROSE",
        isKenyan: false
    },
    {
        name: "Appleton",
        category: "rum",
        size: "700ML",
        price: "Ksh 5,700",
        description: "A quality Rum offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=APPLETON",
        isKenyan: false
    },
    {
        name: "Aqula",
        category: "other",
        size: "500ML",
        price: "Ksh 750",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=AQULA",
        isKenyan: false
    },
    {
        name: "Arcadia Rum",
        category: "rum",
        size: "750ML",
        price: "Ksh 1,020",
        description: "A quality Rum offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ARCADIA%20RUM",
        isKenyan: false
    },
    {
        name: "Arcadia Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,335",
        description: "A quality Whisky offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ARCADIA%20WHISKY",
        isKenyan: false
    },
    {
        name: "Arcadia White Swt",
        category: "other",
        size: "750ml",
        price: "Ksh 1,170",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ARCADIA%20WHITE%20SWT",
        isKenyan: false
    },
    {
        name: "Asconi Agorlux",
        category: "wine",
        size: "750ml",
        price: "Ksh 2,187",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ASCONI%20AGORLUX",
        isKenyan: false
    },
    {
        name: "Asconi Kiss Me Now",
        category: "wine",
        size: "750ml",
        price: "Ksh 2,268",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ASCONI%20KISS%20ME%20NOW",
        isKenyan: false
    },
    {
        name: "Asconi Moscato Rose",
        category: "wine",
        size: "750ml",
        price: "Ksh 2,268",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ASCONI%20MOSCATO%20ROSE",
        isKenyan: false
    },
    {
        name: "Asconi Moscato Swt Wht",
        category: "wine",
        size: "750ml",
        price: "Ksh 2,187",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ASCONI%20MOSCATO%20SWT%20WHT",
        isKenyan: false
    },
    {
        name: "Asconi Pastoral",
        category: "wine",
        size: "750ML",
        price: "Ksh 2,349",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ASCONI%20PASTORAL",
        isKenyan: false
    },
    {
        name: "Asconi Semi Dry",
        category: "wine",
        size: "750ml",
        price: "Ksh 2,106",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ASCONI%20SEMI%20DRY",
        isKenyan: false
    },
    {
        name: "Asconi Sol Negru",
        category: "wine",
        size: "750ml",
        price: "Ksh 2,187",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ASCONI%20SOL%20NEGRU",
        isKenyan: false
    },
    {
        name: "Aspera Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 277",
        description: "A quality Gin offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ASPERA%20GIN",
        isKenyan: false
    },
    {
        name: "Aspera Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 802",
        description: "A quality Gin offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ASPERA%20GIN",
        isKenyan: false
    },
    {
        name: "Atlas 12 %",
        category: "beer",
        size: "750ml",
        price: "Ksh 420",
        description: "A quality Beer offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=ATLAS%2012%20%25",
        isKenyan: false
    },
    {
        name: "Avalon Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 285",
        description: "A quality Gin offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=AVALON%20GIN",
        isKenyan: false
    },
    {
        name: "Avalon Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 825",
        description: "A quality Gin offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=avalon%20gin",
        isKenyan: false
    },
    {
        name: "Avalon Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 285",
        description: "A quality Vodka offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=AVALON%20VODKA",
        isKenyan: false
    },
    {
        name: "Avalon Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 825",
        description: "A quality Vodka offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=AVALON%20VODKA",
        isKenyan: false
    },
    {
        name: "Bacardi Blance",
        category: "wine",
        size: "1L",
        price: "Ksh 3,420",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BACARDI%20BLANCE",
        isKenyan: false
    },
    {
        name: "Bacardi Blance",
        category: "wine",
        size: "750ml",
        price: "Ksh 2,700",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BACARDI%20BLANCE",
        isKenyan: false
    },
    {
        name: "Bacardi Carta Orot",
        category: "rum",
        size: "1L",
        price: "Ksh 3,420",
        description: "A quality Rum offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BACARDI%20CARTA%20OROT",
        isKenyan: false
    },
    {
        name: "Bacardi Carte Oro",
        category: "rum",
        size: "750ml",
        price: "Ksh 2,550",
        description: "A quality Rum offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BACARDI%20CARTE%20ORO",
        isKenyan: false
    },
    {
        name: "Bacardi Negra",
        category: "rum",
        size: "750ml",
        price: "Ksh 2,550",
        description: "A quality Rum offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BACARDI%20NEGRA",
        isKenyan: false
    },
    {
        name: "Bacardi Oak Heart",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,550",
        description: "A quality Rum offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BACARDI%20OAK%20HEART",
        isKenyan: false
    },
    {
        name: "Bacardi Spcd",
        category: "rum",
        size: "750ML",
        price: "Ksh 2,550",
        description: "A quality Rum offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BACARDI%20SPCD",
        isKenyan: false
    },
    {
        name: "Back Bencher Wsky",
        category: "other",
        size: "750ML",
        price: "Ksh 1,575",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BACK%20BENCHER%20WSKY",
        isKenyan: false
    },
    {
        name: "Baileys",
        category: "liqueur",
        size: "1L",
        price: "Ksh 4,125",
        description: "A quality Liqueur offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BAILEYS",
        isKenyan: false
    },
    {
        name: "Baileys",
        category: "liqueur",
        size: "375ML",
        price: "Ksh 1,830",
        description: "A quality Liqueur offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BAILEYS",
        isKenyan: false
    },
    {
        name: "Baileys",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 3,750",
        description: "A quality Liqueur offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BAILEYS",
        isKenyan: false
    },
    {
        name: "Baileys Delight",
        category: "liqueur",
        size: "350ML",
        price: "Ksh 682",
        description: "A quality Liqueur offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BAILEYS%20DELIGHT",
        isKenyan: false
    },
    {
        name: "Baileys Delight",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 1,230",
        description: "A quality Liqueur offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BAILEYS%20DELIGHT",
        isKenyan: false
    },
    {
        name: "Baileys Strawberry",
        category: "liqueur",
        size: "750ml",
        price: "Ksh 2,250",
        description: "A quality Liqueur offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BAILEYS%20STRAWBERRY",
        isKenyan: false
    },
    {
        name: "Ballantinest",
        category: "other",
        size: "1L",
        price: "Ksh 3,450",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BALLANTINEST",
        isKenyan: false
    },
    {
        name: "Ballantines",
        category: "other",
        size: "350ML",
        price: "Ksh 1,680",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BALLANTINES",
        isKenyan: false
    },
    {
        name: "Ballantines",
        category: "other",
        size: "750ML",
        price: "Ksh 3,000",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BALLANTINES",
        isKenyan: false
    },
    {
        name: "Ballantines(Pernod)",
        category: "other",
        size: "750ML",
        price: "Ksh 3,000",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BALLANTINES%28PERNOD%29",
        isKenyan: false
    },
    {
        name: "Ballantines Litre(Pernod)",
        category: "other",
        size: "750ml",
        price: "Ksh 3,870",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BALLANTINES%20LITRE%28PERNOD%29",
        isKenyan: false
    },
    {
        name: "Balozi Beer",
        category: "beer",
        size: "750ml",
        price: "Ksh 254",
        description: "A quality Beer offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BALOZI%20BEER",
        isKenyan: false
    },
    {
        name: "Balozi Can",
        category: "beer",
        size: "330ml Can",
        price: "Ksh 305",
        description: "A quality Beer offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BALOZI%20CAN",
        isKenyan: false
    },
    {
        name: "Balvenie 14",
        category: "other",
        size: "700ML",
        price: "Ksh 30,000",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BALVENIE%2014",
        isKenyan: false
    },
    {
        name: "Banana Beer",
        category: "beer",
        size: "500ML",
        price: "Ksh 108",
        description: "A quality Beer offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BANANA%20BEER",
        isKenyan: false
    },
    {
        name: "Base Qube Energy",
        category: "other",
        size: "750ml",
        price: "Ksh 165",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BASE%20QUBE%20ENERGY",
        isKenyan: false
    },
    {
        name: "Bavaria(8.6)",
        category: "beer",
        size: "750ml",
        price: "Ksh 413",
        description: "A quality Beer offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BAVARIA%288.6%29",
        isKenyan: false
    },
    {
        name: "Bavaria Apple",
        category: "beer",
        size: "750ml",
        price: "Ksh 203",
        description: "A quality Beer offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BAVARIA%20APPLE",
        isKenyan: false
    },
    {
        name: "Bavaria Orange",
        category: "beer",
        size: "750ml",
        price: "Ksh 203",
        description: "A quality Beer offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BAVARIA%20ORANGE",
        isKenyan: false
    },
    {
        name: "Bavaria Original 0.0",
        category: "beer",
        size: "750ml",
        price: "Ksh 203",
        description: "A quality Beer offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BAVARIA%20ORIGINAL%200.0",
        isKenyan: false
    },
    {
        name: "Beefeater Cleart",
        category: "gin",
        size: "1L",
        price: "Ksh 5,077",
        description: "A quality Gin offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BEEFEATER%20CLEART",
        isKenyan: false
    },
    {
        name: "Beefeater Clear",
        category: "gin",
        size: "750ML",
        price: "Ksh 3,870",
        description: "A quality Gin offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BEEFEATER%20CLEAR",
        isKenyan: false
    },
    {
        name: "Beefeater Orange",
        category: "gin",
        size: "750ML",
        price: "Ksh 3,600",
        description: "A quality Gin offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BEEFEATER%20ORANGE",
        isKenyan: false
    },
    {
        name: "Beefeater Pinkt",
        category: "gin",
        size: "1L",
        price: "Ksh 3,975",
        description: "A quality Gin offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BEEFEATER%20PINKT",
        isKenyan: false
    },
    {
        name: "Beefeater Pink",
        category: "gin",
        size: "750ML",
        price: "Ksh 4,125",
        description: "A quality Gin offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BEEFEATER%20PINK",
        isKenyan: false
    },
    {
        name: "Belaire Bleu",
        category: "wine",
        size: "750ml",
        price: "Ksh 6,600",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BELAIRE%20BLEU",
        isKenyan: false
    },
    {
        name: "Belaire Fantome Gold",
        category: "wine",
        size: "750ml",
        price: "Ksh 6,600",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BELAIRE%20FANTOME%20GOLD",
        isKenyan: false
    },
    {
        name: "Belaire Gold",
        category: "wine",
        size: "750ml",
        price: "Ksh 6,600",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BELAIRE%20GOLD",
        isKenyan: false
    },
    {
        name: "Belaire Gold(Pernod)",
        category: "wine",
        size: "750ml",
        price: "Ksh 7,485",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BELAIRE%20GOLD%28PERNOD%29",
        isKenyan: false
    },
    {
        name: "Belaire Rose Black",
        category: "wine",
        size: "750ml",
        price: "Ksh 6,600",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BELAIRE%20ROSE%20BLACK",
        isKenyan: false
    },
    {
        name: "Belaire Rose Black(Fantome)",
        category: "wine",
        size: "750ml",
        price: "Ksh 6,750",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BELAIRE%20ROSE%20BLACK%28FANTOME%29",
        isKenyan: false
    },
    {
        name: "Belaire Rose Black(Pernod)",
        category: "wine",
        size: "750ml",
        price: "Ksh 7,485",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BELAIRE%20ROSE%20BLACK%28PERNOD%29",
        isKenyan: false
    },
    {
        name: "Belaire Rose Pink",
        category: "wine",
        size: "750ml",
        price: "Ksh 6,600",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BELAIRE%20ROSE%20PINK",
        isKenyan: false
    },
    {
        name: "Bertrams Vo Brdy",
        category: "brandy",
        size: "750ml",
        price: "Ksh 1,275",
        description: "A quality Brandy offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BERTRAMS%20VO%20BRDY",
        isKenyan: false
    },
    {
        name: "Best Cream",
        category: "liqueur",
        size: "250ML",
        price: "Ksh 525",
        description: "A smooth, dairy-based liqueur with a rich Kenyan coffee/chocolate undertone.",
        image: "assets/images/kenyan/best_cream.png",
        isKenyan: false
    },
    {
        name: "Best Cream",
        category: "liqueur",
        size: "750ML",
        price: "Ksh 1,463",
        description: "A smooth, dairy-based liqueur with a rich Kenyan coffee/chocolate undertone.",
        image: "assets/images/kenyan/best_cream.png",
        isKenyan: false
    },
    {
        name: "Best Gin",
        category: "gin",
        size: "250ML",
        price: "Ksh 390",
        description: "A refreshing Kenyan gin distilled with local botanicals for a crisp finish.",
        image: "assets/images/kenyan/best_gin.png",
        isKenyan: false
    },
    {
        name: "Best Gin",
        category: "gin",
        size: "750ML",
        price: "Ksh 1,103",
        description: "A refreshing Kenyan gin distilled with local botanicals for a crisp finish.",
        image: "assets/images/kenyan/best_gin.png",
        isKenyan: false
    },
    {
        name: "Best Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 368",
        description: "A quality Vodka offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BEST%20VODKA",
        isKenyan: false
    },
    {
        name: "Best Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 1,043",
        description: "A quality Vodka offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BEST%20VODKA",
        isKenyan: false
    },
    {
        name: "Best Whisky",
        category: "whisky",
        size: "250ML",
        price: "Ksh 465",
        description: "A quality Whisky offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BEST%20WHISKY",
        isKenyan: false
    },
    {
        name: "Best Whisky",
        category: "whisky",
        size: "750ML",
        price: "Ksh 1,365",
        description: "A quality Whisky offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BEST%20WHISKY",
        isKenyan: false
    },
    {
        name: "Bittolla Red",
        category: "other",
        size: "750ML",
        price: "Ksh 1,800",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=Bittolla%20red",
        isKenyan: false
    },
    {
        name: "Bl",
        category: "other",
        size: "750ml",
        price: "Ksh 3,225",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BL",
        isKenyan: false
    },
    {
        name: "Black Bird Swt Red",
        category: "wine",
        size: "750ml",
        price: "Ksh 1,425",
        description: "A quality Wine offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BLACK%20BIRD%20SWT%20RED",
        isKenyan: false
    },
    {
        name: "Black Ice Beer",
        category: "beer",
        size: "750ml",
        price: "Ksh 242",
        description: "A quality Beer offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BLACK%20ICE%20BEER",
        isKenyan: false
    },
    {
        name: "Black Ice Can",
        category: "beer",
        size: "330ML",
        price: "Ksh 267",
        description: "A quality Beer offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BLACK%20ICE%20CAN",
        isKenyan: false
    },
    {
        name: "Black Ram Honey",
        category: "other",
        size: "750ML",
        price: "Ksh 1,200",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BLACK%20RAM%20HONEY",
        isKenyan: false
    },
    {
        name: "Black Ram Whskyt",
        category: "other",
        size: "1L",
        price: "Ksh 1,560",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BLACK%20RAM%20WHSKYT",
        isKenyan: false
    },
    {
        name: "Black Ram Whsky",
        category: "other",
        size: "750ML",
        price: "Ksh 1,178",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BLACK%20RAM%20WHSKY",
        isKenyan: false
    },
    {
        name: "Black & Whitet",
        category: "other",
        size: "1L",
        price: "Ksh 2,250",
        description: "A classic, approachable and smooth blended Scotch whisky.",
        image: "assets/images/real/black_and_white.png",
        isKenyan: false
    },
    {
        name: "Black & White",
        category: "other",
        size: "250ML",
        price: "Ksh 593",
        description: "A classic, approachable and smooth blended Scotch whisky.",
        image: "assets/images/real/black_and_white.png",
        isKenyan: false
    },
    {
        name: "Black & White",
        category: "other",
        size: "375ML",
        price: "Ksh 863",
        description: "A classic, approachable and smooth blended Scotch whisky.",
        image: "assets/images/real/black_and_white.png",
        isKenyan: false
    },
    {
        name: "Black & White",
        category: "other",
        size: "750ML",
        price: "Ksh 1,695",
        description: "A classic, approachable and smooth blended Scotch whisky.",
        image: "assets/images/real/black_and_white.png",
        isKenyan: false
    },
    {
        name: "Blue Curacao Liqueur",
        category: "liqueur",
        size: "700ML",
        price: "Ksh 3,225",
        description: "A quality Liqueur offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BLUE%20CURACAO%20LIQUEUR",
        isKenyan: false
    },
    {
        name: "Blue Curacao Syrup",
        category: "liqueur",
        size: "700ML",
        price: "Ksh 2,145",
        description: "A quality Liqueur offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BLUE%20CURACAO%20SYRUP",
        isKenyan: false
    },
    {
        name: "Blue Ice Coco",
        category: "other",
        size: "250ml",
        price: "Ksh 225",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BLUE%20ICE%20COCO",
        isKenyan: false
    },
    {
        name: "Blue Ice Coco",
        category: "other",
        size: "750ML",
        price: "Ksh 630",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BLUE%20ICE%20COCO",
        isKenyan: false
    },
    {
        name: "Blue Ice Vodka",
        category: "vodka",
        size: "250ML",
        price: "Ksh 225",
        description: "A quality Vodka offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BLUE%20ICE%20VODKA",
        isKenyan: false
    },
    {
        name: "Blue Ice Vodka",
        category: "vodka",
        size: "750ML",
        price: "Ksh 630",
        description: "A quality Vodka offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BLUE%20ICE%20VODKA",
        isKenyan: false
    },
    {
        name: "Blue Moon",
        category: "other",
        size: "250ML",
        price: "Ksh 270",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BLUE%20MOON",
        isKenyan: false
    },
    {
        name: "Blue Moon 750M",
        category: "other",
        size: "750ml",
        price: "Ksh 705",
        description: "A quality Other offering exceptional taste.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=BLUE%20MOON%20750M",
        isKenyan: false
    }

];

// Initialize Shop Catalogue (for shop.html)
const productGrid = document.getElementById('shop-product-grid');
if (productGrid) {
    // Render Products
    catalogueProducts.forEach(product => {
        const itemHtml = `
            <div class="product-card product-item" data-category="${product.category}" data-kenyan="${product.isKenyan}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" style="border-radius: 10px; max-height: 200px; object-fit: contain;" loading="lazy" decoding="async">
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
    const shopOrderBtns = document.querySelectorAll('.shop-order-btn');
    shopOrderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const productInfo = btn.getAttribute('data-product');
            window.location.href = buildWhatsAppLink(`Hi Liquify, I want to order ${productInfo}. Please confirm availability and delivery to Embakasi.`);
        });
    });

    // Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');
    const searchInput = document.getElementById('shop-search');
    const noProductsMsg = document.getElementById('no-products-message');

    function performFiltering() {
        const activeBtn = document.querySelector('.filter-btn.active');
        const filterValue = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
        const searchQuery = searchInput.value.toLowerCase().trim();
        let visibleCount = 0;

        productItems.forEach(item => {
            const name = item.querySelector('h3').textContent.toLowerCase();
            const desc = item.querySelector('p').textContent.toLowerCase();
            const itemCategory = item.getAttribute('data-category');
            const isKenyan = item.getAttribute('data-kenyan') === 'true';

            let categoryMatch = false;
            if (filterValue === 'all') {
                categoryMatch = true;
            } else if (filterValue === 'kenyan') {
                categoryMatch = isKenyan;
            } else {
                categoryMatch = (filterValue === itemCategory);
            }

            const searchMatch = !searchQuery || name.includes(searchQuery) || desc.includes(searchQuery);

            if (categoryMatch && searchMatch) {
                item.style.display = 'block';
                item.classList.remove('active');
                setTimeout(() => item.classList.add('active'), 10);
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });

        // Show/Hide "No Products" message
        if (visibleCount === 0) {
            noProductsMsg.style.display = 'block';
        } else {
            noProductsMsg.style.display = 'none';
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', performFiltering);
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            performFiltering();
        });
    });

    // Check URL for category query parameter and auto-click filter
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
        const targetBtn = document.querySelector(`.filter-btn[data-filter="${categoryParam}"]`);
        if (targetBtn) {
            targetBtn.click();
            
            // Wait slightly for DOM to render then scroll down to the grid
            setTimeout(() => {
                if(productGrid) {
                    window.scrollTo({
                        top: productGrid.offsetTop - 150,
                        behavior: 'smooth'
                    });
                }
            }, 500);
        }
    }
}
