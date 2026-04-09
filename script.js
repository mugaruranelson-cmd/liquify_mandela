// Base WhatsApp Number (Format: 254XXXXXXXXX)
const WA_PHONE = '254700000000'; // Replace with actual number

// Sticky Navigation
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

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
    
    // Category Cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const categoryName = card.querySelector('h3').innerText;
            window.location.href = buildWhatsAppLink(`Hi Liquify, I want to order from the ${categoryName} category.`);
        });
    });

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
        price: "[ Price ]",
        description: "A benchmark premium blended Scotch whisky with a smooth, deep, and complex character.",
        image: "assets/images/real/johnnie_walker_black_label.png"
    },
    {
        name: "Jameson Irish Whiskey",
        category: "whisky",
        size: "750ml",
        price: "[ Price ]",
        description: "A perfect balance of spicy, nutty and vanilla notes with hints of sweet sherry and exceptional smoothness.",
        image: "assets/images/real/jameson_irish_whiskey.png"
    },
    {
        name: "Glenfiddich 15 Year Old",
        category: "whisky",
        size: "750ml",
        price: "[ Price ]",
        description: "A complex single malt characterized by warming spice, honey, and rich fruit notes.",
        image: "assets/images/real/glenfiddich_15_year_old.png"
    },
    {
        name: "Jack Daniel's Old No. 7",
        category: "whisky",
        size: "1L",
        price: "[ Price ]",
        description: "Mellowed drop by drop through 10-feet of sugar maple charcoal, then matured in handcrafted barrels.",
        image: "assets/images/real/jack_daniels_old_no._7.png"
    },
    {
        name: "Chivas Regal 12 Year Old",
        category: "whisky",
        size: "750ml",
        price: "[ Price ]",
        description: "A rich and smooth blended Scotch whisky with a warm amber color.",
        image: "assets/images/real/chivas_regal_12_year_old.png"
    },
    {
        name: "Singleton of Dufftown 12",
        category: "whisky",
        size: "750ml",
        price: "[ Price ]",
        description: "A smooth single malt Scotch whisky with sweet fruity notes and a lingering finish.",
        image: "assets/images/real/singleton_of_dufftown_12.png"
    },
    {
        name: "Glenmorangie The Original",
        category: "whisky",
        size: "750ml",
        price: "[ Price ]",
        description: "An elegant, floral single malt whisky, acclaimed for its alluring complexity.",
        image: "assets/images/real/glenmorangie_the_original.png"
    },
    {
        name: "Famous Grouse",
        category: "whisky",
        size: "750ml",
        price: "[ Price ]",
        description: "Scotland's favourite blend, perfectly balanced with notes of dried fruit and soft spice.",
        image: "assets/images/real/famous_grouse.png"
    },
    {
        name: "Black & White",
        category: "whisky",
        size: "750ml",
        price: "[ Price ]",
        description: "A classic, approachable and smooth blended Scotch whisky.",
        image: "assets/images/real/black_and_white.png"
    },
    {
        name: "Casillero del Diablo Cabernet",
        category: "wine",
        size: "750ml",
        price: "[ Price ]",
        description: "Rich and fruit-forward with aromas of cherries, plums, and a touch of vanilla.",
        image: "assets/images/real/casillero_del_diablo_cabernet.png"
    },
    {
        name: "Nederburg Cabernet Sauvignon",
        category: "wine",
        size: "750ml",
        price: "[ Price ]",
        description: "Abundant aromas of blackcurrant and cherry with hints of vanilla and spice.",
        image: "assets/images/real/nederburg_cabernet_sauvignon.png"
    },
    {
        name: "4th Street Sweet Red",
        category: "wine",
        size: "750ml",
        price: "[ Price ]",
        description: "A hugely popular, deliciously sweet and fruity red wine.",
        image: "assets/images/real/4th_street_sweet_red.png"
    },
    {
        name: "Four Cousins Sweet Red",
        category: "wine",
        size: "750ml",
        price: "[ Price ]",
        description: "Sweet, fruity, and deeply layered African wine perfect for casual dining.",
        image: "assets/images/real/four_cousins_sweet_red.png"
    },
    {
        name: "Frontera Sweet Red",
        category: "wine",
        size: "750ml",
        price: "[ Price ]",
        description: "Fruit forward, highly approachable sweet and smooth everyday wine.",
        image: "assets/images/real/frontera_sweet_red.png"
    },
    {
        name: "Robertson Winery Sweet Red",
        category: "wine",
        size: "750ml",
        price: "[ Price ]",
        description: "Natural sweet wine with soft fruit flavours and a smooth finish.",
        image: "assets/images/real/robertson_winery_sweet_red.png"
    },
    {
        name: "Cellar Cask Sweet Red",
        category: "wine",
        size: "750ml",
        price: "[ Price ]",
        description: "Deep ruby red color with a soft, sweet, and highly satisfying finish.",
        image: "assets/images/real/cellar_cask_sweet_red.png"
    },
    {
        name: "Grey Goose",
        category: "vodka",
        size: "1L",
        price: "[ Price ]",
        description: "A super-premium vodka known for its ultimate smoothness and exceptional taste.",
        image: "assets/images/real/grey_goose.png"
    },
    {
        name: "Absolut Vodka",
        category: "vodka",
        size: "750ml",
        price: "[ Price ]",
        description: "Rich, full-bodied and complex, yet smooth and mellow with a distinct character of grain.",
        image: "assets/images/real/absolut_vodka.png"
    },
    {
        name: "Smirnoff Red Label",
        category: "vodka",
        size: "750ml",
        price: "[ Price ]",
        description: "The world's most awarded premium vodka, triple distilled for exceptional smoothness.",
        image: "assets/images/real/smirnoff_red_label.png"
    },
    {
        name: "Ciroc Vodka",
        category: "vodka",
        size: "750ml",
        price: "[ Price ]",
        description: "Ultra-premium vodka distilled from fine French grapes with an exceptionally smooth finish.",
        image: "assets/images/real/ciroc_vodka.png"
    },
    {
        name: "Ketel One",
        category: "vodka",
        size: "750ml",
        price: "[ Price ]",
        description: "Crisp and sophisticated Dutch vodka crafted with modern and traditional distilling.",
        image: "assets/images/real/ketel_one.png"
    },
    {
        name: "Flirt Vodka",
        category: "vodka",
        size: "750ml",
        price: "[ Price ]",
        description: "A smooth, continuously distilled clean vodka highly popular in the local nightlife.",
        image: "assets/images/real/flirt_vodka.png"
    },
    {
        name: "Kenya Cane",
        category: "vodka",
        size: "750ml",
        price: "[ Price ]",
        description: "Kenya's iconic original smooth cane spirit, incredibly versatile and pure.",
        image: "assets/images/real/kenya_cane.png"
    },
    {
        name: "Tanqueray London Dry",
        category: "gin",
        size: "750ml",
        price: "[ Price ]",
        description: "A perfect balance of four botanicals for a smooth, uniquely classic taste.",
        image: "assets/images/real/tanqueray_london_dry.png"
    },
    {
        name: "Bombay Sapphire",
        category: "gin",
        size: "750ml",
        price: "[ Price ]",
        description: "Vapor-infused with 10 hand-selected botanicals for a bright, complex flavor profile.",
        image: "assets/images/real/bombay_sapphire.png"
    },
    {
        name: "Gordon's London Dry",
        category: "gin",
        size: "750ml",
        price: "[ Price ]",
        description: "The world's best-selling London dry gin, distinctively refreshing.",
        image: "assets/images/real/gordons_london_dry.png"
    },
    {
        name: "Gilbey's Special Dry",
        category: "gin",
        size: "750ml",
        price: "[ Price ]",
        description: "An immensely popular, perfectly balanced and affordable quality gin.",
        image: "assets/images/real/gilbeys_special_dry.png"
    },
    {
        name: "Hendrick's Gin",
        category: "gin",
        size: "750ml",
        price: "[ Price ]",
        description: "Curiously infused with rose petals and cucumber for a truly unique profile.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=Hendrick's+Gin"
    },
    {
        name: "Beefeater London Dry",
        category: "gin",
        size: "750ml",
        price: "[ Price ]",
        description: "An authentic London dry gin with big juniper character and strong citrus notes.",
        image: "assets/images/real/beefeater_london_dry.png"
    },
    {
        name: "Heineken 6-Pack",
        category: "beer",
        size: "500ml Cans",
        price: "[ Price ]",
        description: "A crisp, balanced premium lager with a subtly bitter, fruity taste.",
        image: "assets/images/real/heineken_6_pack.png"
    },
    {
        name: "Tusker Lager 6-Pack",
        category: "beer",
        size: "500ml Cans",
        price: "[ Price ]",
        description: "Kenya's iconic, refreshingly crisp premium national lager.",
        image: "assets/images/real/tusker_lager_6_pack.png"
    },
    {
        name: "Tusker Lite 6-Pack",
        category: "beer",
        size: "500ml Cans",
        price: "[ Price ]",
        description: "Crisp, premium low-carb lager for a lighter drinking experience.",
        image: "assets/images/real/tusker_lite_6_pack.png"
    },
    {
        name: "White Cap Lager 6-Pack",
        category: "beer",
        size: "500ml Cans",
        price: "[ Price ]",
        description: "A smooth, distinctively classic Kenyan lager with no added sugar.",
        image: "assets/images/real/white_cap_lager_6_pack.png"
    },
    {
        name: "Guinness Extra Stout 6-Pack",
        category: "beer",
        size: "500ml Cans",
        price: "[ Price ]",
        description: "A rich, dark, and perfectly balanced stout with roasted malt notes.",
        image: "assets/images/real/guinness_extra_stout_6_pack.png"
    },
    {
        name: "Balozi Lager 6-Pack",
        category: "beer",
        size: "500ml Cans",
        price: "[ Price ]",
        description: "A rich malt-flavored Kenyan lager known for its authentic taste.",
        image: "assets/images/real/balozi_lager_6_pack.png"
    },
    {
        name: "Pilsner Lager 6-Pack",
        category: "beer",
        size: "500ml Cans",
        price: "[ Price ]",
        description: "A bold and deeply refreshing lager widely popular in East Africa.",
        image: "assets/images/real/pilsner_lager_6_pack.png"
    }
];


// Initialize Shop Catalogue (for shop.html)
const productGrid = document.getElementById('shop-product-grid');
if (productGrid) {
    // Render Products
    catalogueProducts.forEach(product => {
        const itemHtml = `
            <div class="product-card product-item" data-category="${product.category}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" style="border-radius: 10px; max-height: 200px; object-fit: contain;">
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

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            productItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (filterValue === 'all' || filterValue === itemCategory) {
                    item.style.display = 'block';
                    item.classList.remove('active');
                    setTimeout(() => item.classList.add('active'), 10);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}
