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
