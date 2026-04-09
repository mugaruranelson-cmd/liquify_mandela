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
        image: "assets/images/jw_black.png"
    },
    {
        name: "Jameson Irish Whiskey",
        category: "whisky",
        size: "750ml",
        price: "[ Price ]",
        description: "A perfect balance of spicy, nutty and vanilla notes with hints of sweet sherry and exceptional smoothness.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=Jameson+Whiskey\nBottle"
    },
    {
        name: "Glenfiddich 15 Year Old",
        category: "whisky",
        size: "750ml",
        price: "[ Price ]",
        description: "A complex single malt characterized by warming spice, honey, and rich fruit notes.",
        image: "assets/images/cat_whisky.png"
    },
    {
        name: "Jack Daniel's Old No. 7",
        category: "whisky",
        size: "1L",
        price: "[ Price ]",
        description: "Mellowed drop by drop through 10-feet of sugar maple charcoal, then matured in handcrafted barrels.",
        image: "https://placehold.co/400x600/0B0B0B/D4AF37/png?text=Jack+Daniels\nBottle"
    },
    {
        name: "Casillero del Diablo Cabernet",
        category: "wine",
        size: "750ml",
        price: "[ Price ]",
        description: "Rich and fruit-forward with aromas of cherries, plums, and a touch of vanilla and toast.",
        image: "https://placehold.co/400x600/3b0018/D4AF37/png?text=Casillero+del+Diablo\nWine"
    },
    {
        name: "Nederburg Cabernet Sauvignon",
        category: "wine",
        size: "750ml",
        price: "[ Price ]",
        description: "Abundant aromas of blackcurrant and cherry with hints of vanilla and spice.",
        image: "https://placehold.co/400x600/3b0018/D4AF37/png?text=Nederburg+Cabernet\nWine"
    },
    {
        name: "Grey Goose",
        category: "vodka",
        size: "1L",
        price: "[ Price ]",
        description: "A premium vodka known for its ultimate smoothness and exceptional taste.",
        image: "https://placehold.co/400x600/e0f7fa/0B0B0B/png?text=Grey+Goose\nVodka"
    },
    {
        name: "Absolut Vodka",
        category: "vodka",
        size: "750ml",
        price: "[ Price ]",
        description: "Rich, full-bodied and complex, yet smooth and mellow with a distinct character of grain.",
        image: "https://placehold.co/400x600/e0f7fa/0B0B0B/png?text=Absolut\nVodka"
    },
    {
        name: "Tanqueray London Dry",
        category: "gin",
        size: "750ml",
        price: "[ Price ]",
        description: "A perfect balance of four botanicals for a smooth, classic taste.",
        image: "https://placehold.co/400x600/004d40/D4AF37/png?text=Tanqueray\nGin"
    },
    {
        name: "Bombay Sapphire",
        category: "gin",
        size: "750ml",
        price: "[ Price ]",
        description: "Vapor-infused with 10 hand-selected botanicals for a bright, complex flavor profile.",
        image: "https://placehold.co/400x600/004d40/D4AF37/png?text=Bombay+Sapphire\nGin"
    },
    {
        name: "Heineken 6-Pack",
        category: "beer",
        size: "500ml",
        price: "[ Price ]",
        description: "A crisp, balanced lager with a subtly bitter, fruity taste.",
        image: "https://placehold.co/400x600/fbc02d/0B0B0B/png?text=Heineken\n6-Pack"
    },
    {
        name: "Tusker Lager 6-Pack",
        category: "beer",
        size: "500ml",
        price: "[ Price ]",
        description: "Kenya's iconic, refreshingly crisp premium lager.",
        image: "https://placehold.co/400x600/fbc02d/0B0B0B/png?text=Tusker\nLager"
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
