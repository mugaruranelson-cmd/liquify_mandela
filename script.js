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

    // Initialize Page-Specific Logic
    if (document.getElementById('featured-products-grid')) {
        initHome();
    }
    if (document.getElementById('shop-product-grid')) {
        initShop();
    }
});

// Fisher-Yates Shuffle Algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle catalogue on load
shuffleArray(catalogueProducts);

// --- REUSABLE RENDERING ENGINE ---
function createProductCard(product) {
    const isKenyan = product.isKenyan === true || String(product.isKenyan) === 'true';
    const kenyanBadge = isKenyan
        ? `<div class="kenyan-flag-badge">
                <img src="https://flagcdn.com/w80/ke.png" class="kenyan-flag-img" alt="Kenya">
                <span class="badg-text">KENYAN PRIDE</span>
           </div>`
        : '';
        
    const countryTag = product.country && product.country !== 'Unknown' 
        ? `<div class="country-tag"><i class="fas fa-globe-africa"></i> ${product.country}</div>` 
        : '';

    return `
        <div class="product-card reveal active">
            <div class="product-image">
                ${kenyanBadge}
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                ${countryTag}
                <h3>${product.name}</h3>
                <div class="product-size">${product.size} - <span style="color: var(--accent-gold); font-weight: bold;">${product.price}</span></div>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.4;">${product.description}</p>
                <button class="btn btn-primary shop-order-btn" data-product="${product.name} ${product.size}">Order on WA</button>
            </div>
        </div>
    `;
}

function attachOrderListeners(container) {
    container.querySelectorAll('.shop-order-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const productInfo = btn.getAttribute('data-product');
            window.location.href = buildWhatsAppLink(`Hi Liquify, I want to order ${productInfo}. Please confirm availability.`);
        });
    });
}

// --- HOME PAGE LOGIC ---
function initHome() {
    const featuredGrid = document.getElementById('featured-products-grid');
    const kenyanGrid = document.getElementById('kenyan-products-grid');

    if (!featuredGrid || !kenyanGrid) return;

    // Featured: Just take first 4 from shuffled list
    const featuredItems = catalogueProducts.slice(0, 4);
    
    // Kenyan: Filter and take first 4
    const kenyanItems = catalogueProducts.filter(p => p.isKenyan === true || String(p.isKenyan) === 'true').slice(0, 4);

    featuredGrid.innerHTML = featuredItems.map(createProductCard).join('');
    kenyanGrid.innerHTML = kenyanItems.map(createProductCard).join('');

    attachOrderListeners(featuredGrid);
    attachOrderListeners(kenyanGrid);
}

// --- SHOP PAGE LOGIC ---
function initShop() {
    const shopGrid = document.getElementById('shop-product-grid');
    const searchInput = document.getElementById('shop-search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const noResults = document.getElementById('no-products-message');

    if (!shopGrid) return;

    let currentFilter = 'all';
    let searchQuery = '';

    function renderShop() {
        // Filter logic
        const filtered = catalogueProducts.filter(p => {
            const matchesCategory = currentFilter === 'all' || 
                                  (currentFilter === 'kenyan' && (p.isKenyan === true || String(p.isKenyan) === 'true')) ||
                                  p.category === currentFilter;
            const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 p.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        // Show/Hide no results message
        if (filtered.length === 0) {
            noResults.style.display = 'block';
            shopGrid.innerHTML = '';
            shopGrid.appendChild(noResults);
        } else {
            noResults.style.display = 'none';
            // Render in batches to prevent UI freeze
            shopGrid.innerHTML = filtered.map(createProductCard).join('');
            attachOrderListeners(shopGrid);
        }
    }

    // Search listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderShop();
        });
    }

    // Filter listeners
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderShop();
        });
    });

    // Check URL for initial filter (e.g. ?category=whisky)
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('category') || urlParams.get('filter');
    if (catParam) {
        const targetBtn = document.querySelector(`.filter-btn[data-filter="${catParam}"]`);
        if (targetBtn) targetBtn.click();
    } else {
        renderShop();
    }
}

// --- CATALOGUE DATA ---
/* CATALOGUE_START */
/* CATALOGUE_END */

// Randomized (Shuffle) Arrangement Logic
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Randomize the entire catalogue on every page load
if (typeof catalogueProducts !== 'undefined' && Array.isArray(catalogueProducts)) {
    shuffleArray(catalogueProducts);
}

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

// Initialize Kenyan Section for Home Page
function initKenyanSection() {
    const grid = document.getElementById('kenyan-products-grid');
    if (!grid) return;

    // Filter all Kenyan products
    const kenyanAll = catalogueProducts.filter(p => 
        (p.country && p.country.toLowerCase() === 'kenya') || 
        (p.isKenyan === true || String(p.isKenyan) === 'true')
    );

    // Pick a diverse set (one from each category if possible) to show variety
    const categories = ['beer', 'gin', 'vodka', 'whisky'];
    const chosen = [];
    
    categories.forEach(cat => {
        const item = kenyanAll.find(p => p.category === cat && !chosen.includes(p));
        if (item) chosen.push(item);
    });

    // Fill up to 4 if we haven't reached it
    kenyanAll.forEach(p => {
        if (chosen.length < 4 && !chosen.includes(p)) {
            chosen.push(p);
        }
    });

    grid.innerHTML = '';
    chosen.forEach(product => {
        const card = `
            <div class="product-card kenyan-card reveal">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" style="max-height: 200px; object-fit: contain;" loading="lazy">
                </div>
                <div class="product-info">
                    <span class="kenyan-badge" style="border: none; padding: 0;">${product.category.toUpperCase()}</span>
                    <h3>${product.name}</h3>
                    <div class="product-size">${product.size} - <span style="color: var(--accent-gold); font-weight: bold;">${product.price}</span></div>
                    <button class="btn btn-primary shop-order-btn" data-product="${product.name} ${product.size}">
                        <i class="fab fa-whatsapp"></i> Order Now
                    </button>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });

    // Attach listeners
    grid.querySelectorAll('.shop-order-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const productInfo = btn.getAttribute('data-product');
            window.location.href = buildWhatsAppLink(`Hi Liquify, I want to order ${productInfo} from your 'Made in Kenya' collection.`);
        });
    });

    if (typeof reveal === 'function') setTimeout(reveal, 600);
}

// Attach to DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('global-collections')) {
        initGlobalCollections();
    }
    if (document.getElementById('kenyan-products-grid')) {
        initKenyanSection();
    }
});

// Initialize Shop Catalogue (for shop.html) with Batch Rendering
function initShop() {
    const productGrid = document.getElementById('shop-product-grid');
    if (!productGrid) return;

    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('shop-search');
    const noProductsMsg = document.getElementById('no-products-message');

    // Batching State
    let filteredData = [...catalogueProducts];
    let renderedCount = 0;
    const BATCH_SIZE = 30;
    
    // Create Sentinel for Infinite Scroll
    const sentinel = document.createElement('div');
    sentinel.className = 'scroll-sentinel';
    sentinel.innerHTML = `
        <div class="loader-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    `;

    function renderProductBatch() {
        const nextBatch = filteredData.slice(renderedCount, renderedCount + BATCH_SIZE);
        if (nextBatch.length === 0) {
            sentinel.style.display = 'none';
            return;
        }

        const fragment = document.createDocumentFragment();
        
        nextBatch.forEach(product => {
            const countryTag = product.country && product.country !== 'Unknown' 
                ? `<div class="country-tag"><i class="fas fa-globe-africa"></i> ${product.country}</div>` 
                : '';

            const kenyanBadge = (product.isKenyan === true || String(product.isKenyan) === 'true')
                ? `<div class="kenyan-flag-badge">
                        <img src="https://flagcdn.com/w80/ke.png" class="kenyan-flag-img" alt="Kenya">
                        <span class="badg-text">KENYAN PRIDE</span>
                   </div>`
                : '';

            const col = document.createElement('div');
            col.className = 'product-card product-item reveal active';
            col.setAttribute('data-category', product.category);
            col.setAttribute('data-kenyan', product.isKenyan || false);
            
            col.innerHTML = `
                <div class="product-image">
                    ${kenyanBadge}
                    <img src="${product.image}" alt="${product.name}" style="border-radius: 10px; max-height: 200px; object-fit: contain;" loading="lazy">
                </div>
                <div class="product-info">
                    ${countryTag}
                    <h3>${product.name}</h3>
                    <div class="product-size">${product.size} - <span style="color: var(--accent-gold); font-weight: bold;">${product.price}</span></div>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.4;">${product.description}</p>
                    <button class="btn btn-primary shop-order-btn" data-product="${product.name} ${product.size}">Order on WA</button>
                </div>
            `;
            
            // Attach WhatsApp listener
            col.querySelector('.shop-order-btn').addEventListener('click', () => {
                const productInfo = `${product.name} ${product.size}`;
                window.location.href = buildWhatsAppLink(`Hi Liquify, I want to order ${productInfo}. Please confirm availability.`);
            });

            fragment.appendChild(col);
        });

        productGrid.insertBefore(fragment, sentinel);
        renderedCount += nextBatch.length;
        
        // Check if we reached the end
        if (renderedCount >= filteredData.length) {
            sentinel.style.display = 'none';
        } else {
            sentinel.style.display = 'flex';
        }

        if (typeof reveal === 'function') setTimeout(reveal, 100);
    }

    function performFiltering() {
        const activeBtn = document.querySelector('.filter-btn.active');
        const filterCategory = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
        const searchQuery = (searchInput ? searchInput.value : "").toLowerCase().trim();

        // 1. Filter the Data Array first (Fast)
        filteredData = catalogueProducts.filter(product => {
            const name = product.name.toLowerCase();
            const desc = product.description.toLowerCase();
            const isKenyan = product.isKenyan === true || String(product.isKenyan) === 'true';

            const categoryMatch = (filterCategory === 'all') || 
                                (filterCategory === 'kenyan' && isKenyan) || 
                                (filterCategory === product.category);

            const searchMatch = !searchQuery || name.includes(searchQuery) || desc.includes(searchQuery);

            return categoryMatch && searchMatch;
        });

        // 2. Reset Grid and Batching
        renderedCount = 0;
        productGrid.innerHTML = ''; 
        productGrid.appendChild(sentinel);
        
        if (noProductsMsg) {
            noProductsMsg.style.display = (filteredData.length === 0) ? 'block' : 'none';
        }

        // 3. Render first batch
        renderProductBatch();
    }

    // Initialize Infinite Scroll Observer
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && renderedCount < filteredData.length) {
            renderProductBatch();
        }
    }, { rootMargin: '200px' });

    // Initial Setup
    productGrid.innerHTML = '';
    productGrid.appendChild(sentinel);
    observer.observe(sentinel);

    // Initial Load
    performFiltering();

    // Event Listeners
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            // Debounce or at least delay filtering slightly for perf
            performFiltering();
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            performFiltering();
        });
    });
}

document.addEventListener('DOMContentLoaded', initShop);
