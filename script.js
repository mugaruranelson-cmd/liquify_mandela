// =============================================================================
// LIQUIFY — Main Application Script
// Data lives in products.js (loaded before this file)
// =============================================================================

// --- CONFIGURATION ---
const WA_PHONE = '254141024938';

// --- UTILITY: WhatsApp Link Builder ---
function buildWhatsAppLink(text) {
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
}

// --- UTILITY: Fisher-Yates Shuffle ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle catalogue immediately on load (before any render)
if (typeof catalogueProducts !== 'undefined') {
    shuffleArray(catalogueProducts);
}

// --- UI: Sticky Navigation ---
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// --- UI: Scroll Reveal ---
function reveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', reveal);

// --- AGE GATE ---
function initAgeGate() {
    if (localStorage.getItem('ageVerified') === 'true') return;

    const html = `
        <div id="ageGate" class="age-gate">
            <div class="age-gate-modal">
                <div class="age-gate-logo">LIQUIFY</div>
                <h2>Age Verification</h2>
                <p>You must be 18 years or older to enter this site. Please confirm your age to proceed.</p>
                <div class="age-gate-btns">
                    <button id="verifyAge" class="btn btn-gold">Yes, I am 18+</button>
                    <button id="rejectAge" class="btn btn-outline">No, I am under 18</button>
                </div>
                <p style="font-size:0.75rem;margin-top:2rem;opacity:0.5;">By entering, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
        </div>`;

    document.body.insertAdjacentHTML('afterbegin', html);
    document.body.style.overflow = 'hidden';

    document.getElementById('verifyAge')?.addEventListener('click', () => {
        localStorage.setItem('ageVerified', 'true');
        const gate = document.getElementById('ageGate');
        if (gate) {
            gate.classList.add('hidden');
            document.body.style.overflow = '';
            setTimeout(() => gate.remove(), 600);
        }
    });

    document.getElementById('rejectAge')?.addEventListener('click', () => {
        window.location.href = 'https://www.google.com';
    });
}

// --- REUSABLE: Product Card Builder ---
function createProductCard(product) {
    const isKenyan = product.isKenyan === true || String(product.isKenyan) === 'true';

    const kenyanBadge = isKenyan ? `
        <div class="kenyan-flag-badge">
            <img src="https://flagcdn.com/w80/ke.png" class="kenyan-flag-img" alt="Kenya">
            <span class="badg-text">KENYAN PRIDE</span>
        </div>` : '';

    const countryTag = (product.country && product.country !== 'Unknown')
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
                <div class="product-size">${product.size} – <span style="color:var(--accent-gold);font-weight:bold;">${product.price}</span></div>
                <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1.5rem;line-height:1.4;">${product.description || ''}</p>
                <button class="btn btn-primary shop-order-btn" data-product="${product.name} ${product.size}">
                    <i class="fab fa-whatsapp"></i> Order on WA
                </button>
            </div>
        </div>`;
}

// --- REUSABLE: Attach order button listeners ---
function attachOrderListeners(container) {
    container.querySelectorAll('.shop-order-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.getAttribute('data-product');
            window.location.href = buildWhatsAppLink(`Hi Liquify, I want to order ${item}. Please confirm availability and delivery to Embakasi.`);
        });
    });
}

// =============================================================================
// HOME PAGE
// =============================================================================
function initHome() {
    const featuredGrid = document.getElementById('featured-products-grid');
    const kenyanGrid   = document.getElementById('kenyan-products-grid');

    if (featuredGrid) {
        const items = catalogueProducts.slice(0, 4);
        featuredGrid.innerHTML = items.map(createProductCard).join('');
        attachOrderListeners(featuredGrid);
    }

    if (kenyanGrid) {
        const kenyanItems = catalogueProducts
            .filter(p => p.isKenyan === true || String(p.isKenyan) === 'true')
            .slice(0, 4);
        kenyanGrid.innerHTML = kenyanItems.map(createProductCard).join('');
        attachOrderListeners(kenyanGrid);
    }
}

// --- HOME: Global Collections (Country Tabs) ---
function initGlobalCollections() {
    const tabsContainer   = document.getElementById('country-tabs');
    const gridContainer   = document.getElementById('collection-grid-container');
    const mapImage        = document.getElementById('country-map');

    if (!tabsContainer || !gridContainer) return;

    const featuredCountries = [
        { name: 'Kenya',        id: 'kenya',        icon: '🇰🇪' },
        { name: 'Scotland',     id: 'scotland',      icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
        { name: 'France',       id: 'france',        icon: '🇫🇷' },
        { name: 'South Africa', id: 'south-africa',  icon: '🇿🇦' },
        { name: 'Ireland',      id: 'ireland',       icon: '🇮🇪' }
    ];

    tabsContainer.innerHTML = '';
    gridContainer.innerHTML = '';

    featuredCountries.forEach((country, index) => {
        const tab = document.createElement('div');
        tab.className = `country-tab ${index === 0 ? 'active' : ''}`;
        tab.innerHTML = `${country.icon} ${country.name}`;
        tab.setAttribute('data-country', country.id);
        tabsContainer.appendChild(tab);

        const group = document.createElement('div');
        group.id = `group-${country.id}`;
        group.className = `collection-group ${index === 0 ? 'active' : ''}`;

        const grid = document.createElement('div');
        grid.className = 'collection-grid';

        const countryProducts = catalogueProducts
            .filter(p => p.country && p.country.toLowerCase() === country.name.toLowerCase())
            .slice(0, 4);

        if (countryProducts.length === 0) {
            grid.innerHTML = `<p style="text-align:center;color:var(--text-muted);grid-column:1/-1;">Coming soon: More premium selections from ${country.name}.</p>`;
        } else {
            grid.innerHTML = countryProducts.map(product => `
                <div class="product-card reveal">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" style="max-height:180px;object-fit:contain;" loading="lazy">
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <div class="product-size">${product.size} – <span style="color:var(--accent-gold);font-weight:bold;">${product.price}</span></div>
                        <button class="btn btn-primary shop-order-btn" data-product="${product.name} ${product.size}">Order on WA</button>
                    </div>
                </div>`).join('');
        }

        group.appendChild(grid);
        gridContainer.appendChild(group);

        tab.addEventListener('click', () => {
            document.querySelectorAll('.country-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.collection-group').forEach(g => g.classList.remove('active'));
            tab.classList.add('active');
            group.classList.add('active');

            if (mapImage) {
                mapImage.style.opacity = '0';
                setTimeout(() => {
                    mapImage.src = `assets/images/maps/${country.id}.png`;
                    mapImage.style.opacity = '0.08';
                }, 300);
            }
        });
    });

    // Event delegation for order buttons
    gridContainer.addEventListener('click', e => {
        const btn = e.target.closest('.shop-order-btn');
        if (btn) {
            const item = btn.getAttribute('data-product');
            window.location.href = buildWhatsAppLink(`Hi Liquify, I want to order ${item} from your Global Collection.`);
        }
    });

    setTimeout(reveal, 500);
}

// =============================================================================
// SHOP PAGE — Batch Rendering with Infinite Scroll
// =============================================================================
function initShop() {
    const productGrid  = document.getElementById('shop-product-grid');
    if (!productGrid) return;

    const filterBtns   = document.querySelectorAll('.filter-btn');
    const searchInput  = document.getElementById('shop-search');
    const noProductMsg = document.getElementById('no-products-message');

    const BATCH_SIZE = 30;
    let filteredData  = [];
    let renderedCount = 0;

    // Loader sentinel for infinite scroll
    const sentinel = document.createElement('div');
    sentinel.className = 'scroll-sentinel';
    sentinel.innerHTML = `<div class="loader-dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>`;

    function renderBatch() {
        const batch = filteredData.slice(renderedCount, renderedCount + BATCH_SIZE);
        if (batch.length === 0) { sentinel.style.display = 'none'; return; }

        const frag = document.createDocumentFragment();
        batch.forEach(product => {
            const isKenyan = product.isKenyan === true || String(product.isKenyan) === 'true';

            const kenyanBadge = isKenyan ? `
                <div class="kenyan-flag-badge">
                    <img src="https://flagcdn.com/w80/ke.png" class="kenyan-flag-img" alt="Kenya">
                    <span class="badg-text">KENYAN PRIDE</span>
                </div>` : '';

            const countryTag = (product.country && product.country !== 'Unknown')
                ? `<div class="country-tag"><i class="fas fa-globe-africa"></i> ${product.country}</div>`
                : '';

            const card = document.createElement('div');
            card.className = 'product-card product-item reveal active';
            card.dataset.category = product.category;
            card.innerHTML = `
                <div class="product-image">
                    ${kenyanBadge}
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    ${countryTag}
                    <h3>${product.name}</h3>
                    <div class="product-size">${product.size} – <span style="color:var(--accent-gold);font-weight:bold;">${product.price}</span></div>
                    <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem;line-height:1.4;">${product.description || ''}</p>
                    <button class="btn btn-primary shop-order-btn" data-product="${product.name} ${product.size}">
                        <i class="fab fa-whatsapp"></i> Order on WA
                    </button>
                </div>`;

            card.querySelector('.shop-order-btn').addEventListener('click', () => {
                window.location.href = buildWhatsAppLink(`Hi Liquify, I want to order ${product.name} ${product.size}. Please confirm availability.`);
            });

            frag.appendChild(card);
        });

        productGrid.insertBefore(frag, sentinel);
        renderedCount += batch.length;
        sentinel.style.display = renderedCount >= filteredData.length ? 'none' : 'flex';
        setTimeout(reveal, 100);
    }

    function applyFilters() {
        const activeBtn     = document.querySelector('.filter-btn.active');
        const filterCat     = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
        const searchQuery   = (searchInput ? searchInput.value : '').toLowerCase().trim();

        filteredData = catalogueProducts.filter(p => {
            const isKenyan      = p.isKenyan === true || String(p.isKenyan) === 'true';
            const catMatch      = filterCat === 'all'
                                  || (filterCat === 'kenyan' && isKenyan)
                                  || p.category === filterCat;
            const searchMatch   = !searchQuery
                                  || p.name.toLowerCase().includes(searchQuery)
                                  || (p.description || '').toLowerCase().includes(searchQuery);
            return catMatch && searchMatch;
        });

        renderedCount = 0;
        productGrid.innerHTML = '';
        productGrid.appendChild(sentinel);

        if (noProductMsg) {
            noProductMsg.style.display = filteredData.length === 0 ? 'block' : 'none';
        }

        renderBatch();
    }

    // Infinite scroll via IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && renderedCount < filteredData.length) {
            renderBatch();
        }
    }, { rootMargin: '300px' });

    productGrid.innerHTML = '';
    productGrid.appendChild(sentinel);
    observer.observe(sentinel);

    // Event listeners
    searchInput?.addEventListener('input', applyFilters);
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilters();
        });
    });

    // Handle URL params like ?category=kenyan
    const urlParams = new URLSearchParams(window.location.search);
    const catParam  = urlParams.get('category') || urlParams.get('filter');
    if (catParam) {
        const targetBtn = document.querySelector(`.filter-btn[data-filter="${catParam}"]`);
        if (targetBtn) { targetBtn.click(); return; }
    }

    applyFilters(); // default: show all
}

// =============================================================================
// BOOTSTRAP — DOMContentLoaded
// =============================================================================
// --- BLOG: Category Filtering ---
function initBlogFilters() {
    const filters = document.querySelectorAll('.blog-filter-btn');
    const cards = document.querySelectorAll('.blog-card-container');

    if (!filters.length || !cards.length) return;

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filters.forEach(f => f.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-filter');

            // Filter cards
            cards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                if (category === 'all' || cardCat === category) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initAgeGate();
    initBlogFilters();
    reveal(); // Initial check

    // General WhatsApp CTA buttons (hero, nav, footer)
    document.querySelectorAll('.btn-general-order').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = buildWhatsAppLink('Hi Liquify, I would like to make an order for delivery in Embakasi.');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const id = this.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
        });
    });

    // Page-specific init
    if (document.getElementById('shop-product-grid'))       initShop();
    if (document.getElementById('featured-products-grid'))  initHome();
    if (document.getElementById('global-collections'))      initGlobalCollections();
});
