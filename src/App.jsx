// ==========================================
// TELEGRAM BOT SOZLAMALARI (O'zingiznikini qo'ying)
// ==========================================
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE'; // Masalan: '7123456789:AAH...'
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';     // Masalan: '123456789'

// ==========================================
// MAHSULOTLAR BAZASI (Hermès kolleksiyasi)
// ==========================================
const products = [
    {
        id: 1,
        category: 'bags',
        price: 12500,
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
        name: { uz: "Hermès Birkin 30 Togo", ru: "Hermès Birkin 30 Togo", en: "Hermès Birkin 30 Togo" },
        desc: { uz: "Tabiiy buzoq terisi, oltin furnitura", ru: "Натуральная телячья кожа, золотая фурнитура", en: "Natural calfskin leather, gold hardware" }
    },
    {
        id: 2,
        category: 'bags',
        price: 10800,
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
        name: { uz: "Hermès Kelly 28 Sellier", ru: "Hermès Kelly 28 Sellier", en: "Hermès Kelly 28 Sellier" },
        desc: { uz: "Klassik dizayn, Epsom terisi", ru: "Классический дизайн, кожа Epsom", en: "Classic design, Epsom leather" }
    },
    {
        id: 3,
        category: 'fragrance',
        price: 165,
        image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
        name: { uz: "Terre d'Hermès Parfum", ru: "Terre d'Hermès Parfum", en: "Terre d'Hermès Parfum" },
        desc: { uz: "Yog'och va sitrus iforlari, 75ml", ru: "Древесные и цитрусовые ноты, 75мл", en: "Woody and citrus notes, 75ml" }
    },
    {
        id: 4,
        category: 'watches',
        price: 3450,
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
        name: { uz: "Heure H Watch 25mm", ru: "Часы Heure H 25мм", en: "Heure H Watch 25mm" },
        desc: { uz: "Shveytsariya mexanizmi, apelsin kamar", ru: "Швейцарский механизм, оранжевый ремешок", en: "Swiss movement, signature orange strap" }
    },
    {
        id: 5,
        category: 'accessories',
        price: 520,
        image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=80',
        name: { uz: "Brides de Gala Ipak Sharf", ru: "Шелковый платок Brides de Gala", en: "Brides de Gala Silk Scarf" },
        desc: { uz: "100% Fransiya ipagi, qo'l mehnati", ru: "100% французский шелк, ручная работа", en: "100% French silk, hand-rolled edges" }
    },
    {
        id: 6,
        category: 'shoes',
        price: 760,
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
        name: { uz: "Oran Charm Shippaklari", ru: "Сандалии Oran", en: "Oran Sandals" },
        desc: { uz: "Ikonik 'H' kesimli yozgi poyabzal", ru: "Культовые летние сандалии с вырезом 'H'", en: "Iconic 'H' cut-out leather sandals" }
    },
    {
        id: 7,
        category: 'accessories',
        price: 920,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
        name: { uz: "Constance H Kamar", ru: "Ремень Constance H", en: "Constance H Belt" },
        desc: { uz: "Ikki tomonlama charm, 18K oltin to'qa", ru: "Двусторонняя кожа, пряжка с позолотой", en: "Reversible leather, gold-plated buckle" }
    },
    {
        id: 8,
        category: 'watches',
        price: 4800,
        image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80',
        name: { uz: "Arceau L'Heure De La Lune", ru: "Часы Arceau L'Heure", en: "Arceau L'Heure Watch" },
        desc: { uz: "Mexanik xronograf, alligator terisi", ru: "Механический хронограф, кожа аллигатора", en: "Mechanical chronograph, alligator strap" }
    }
];

// ==========================================
// 3 TILLI LUG'AT (UZ, RU, EN)
// ==========================================
const translations = {
    uz: {
        nav_home: "Bosh sahifa",
        nav_catalog: "Katalog",
        nav_favorites: "Sevimlilar",
        nav_cart: "Savatcha",
        nav_about: "Biz haqimizda",
        hero_sub: "PARIJ — 1837 YILDAN BERI",
        hero_title: "Vaqt sinovidan o'tgan nafislik",
        hero_desc: "Hermès eksklyuziv kolleksiyasi. Har bir detalda fransuz hunarmandchiligi va mukammallik.",
        hero_btn: "Kolleksiyani ko'rish",
        featured_title: "Tanlangan asarlar",
        search_placeholder: "Mahsulot qidirish...",
        cat_all: "Barchasi",
        cat_bags: "Sumkalar",
        cat_watches: "Soatlar",
        cat_fragrance: "Atirlar",
        cat_accessories: "Aksessuarlar",
        cat_shoes: "Poyabzallar",
        add_to_cart: "Savatchaga",
        added: "Qo'shildi ✓",
        fav_title: "Sevimli mahsulotlar",
        fav_empty: "Sevimlilar ro'yxati hozircha bo'sh.",
        cart_title: "Xarid savatchasi",
        cart_empty: "Savatchangiz bo'sh.",
        total: "Jami summa:",
        checkout_title: "Buyurtmani rasmiylashtirish",
        form_name: "Ism va Familiyangiz",
        form_phone: "Telefon raqamingiz (+998...)",
        form_address: "Yetkazib berish manzili",
        form_comment: "Qo'shimcha izoh (ixtiyoriy)",
        submit_order: "Buyurtma berish (Telegram)",
        order_success: "Buyurtmangiz qabul qilindi! Tez orada bog'lanamiz.",
        about_title: "Hermès tarixi va falsafasi",
        about_text1: "1837-yilda Tyerri Ermes tomonidan Parijda asos solingan Hermès uyi dastlab zodagonlar uchun ot anjomlari ishlab chiqarishdan boshlangan.",
        about_text2: "Bugungi kunda biz an'anaviy qo'l mehnati va zamonaviy san'atni birlashtirgan holda, dunyodagi eng nufuzli charm buyumlar, ipak sharflar, soatlar va parfyumeriyalarni taqdim etamiz."
    },
    ru: {
        nav_home: "Главная",
        nav_catalog: "Каталог",
        nav_favorites: "Избранное",
        nav_cart: "Корзина",
        nav_about: "О бренде",
        hero_sub: "ПАРИЖ — С 1837 ГОДА",
        hero_title: "Элегантность вне времени",
        hero_desc: "Эксклюзивная коллекция Hermès. Французское мастерство и совершенство в каждой детали.",
        hero_btn: "Смотреть коллекцию",
        featured_title: "Избранные шедевры",
        search_placeholder: "Поиск товаров...",
        cat_all: "Все",
        cat_bags: "Сумки",
        cat_watches: "Часы",
        cat_fragrance: "Парфюмерия",
        cat_accessories: "Аксессуары",
        cat_shoes: "Обувь",
        add_to_cart: "В корзину",
        added: "Добавлено ✓",
        fav_title: "Избранные товары",
        fav_empty: "Список избранного пока пуст.",
        cart_title: "Корзина покупок",
        cart_empty: "Ваша корзина пуста.",
        total: "Итоговая сумма:",
        checkout_title: "Оформление заказа",
        form_name: "Ваше Имя и Фамилия",
        form_phone: "Номер телефона (+998...)",
        form_address: "Адрес доставки",
        form_comment: "Комментарий к заказу",
        submit_order: "Оформить заказ (Telegram)",
        order_success: "Ваш заказ принят! Мы скоро свяжемся с вами.",
        about_title: "История и философия Hermès",
        about_text1: "Основанный Тьерри Эрмесом в Париже в 1837 году, дом Hermès начинал как мастерская по изготовлению конской упряжи для европейской знати.",
        about_text2: "Сегодня мы сочетаем вековые традиции ручного труда и современное искусство, создавая самые престижные изделия из кожи, шелка, часы и ароматы."
    },
    en: {
        nav_home: "Home",
        nav_catalog: "Catalog",
        nav_favorites: "Favorites",
        nav_cart: "Cart",
        nav_about: "Heritage",
        hero_sub: "PARIS — SINCE 1837",
        hero_title: "Timeless Elegance",
        hero_desc: "Exclusive Hermès collection. French craftsmanship and perfection in every single detail.",
        hero_btn: "Explore Collection",
        featured_title: "Curated Masterpieces",
        search_placeholder: "Search products...",
        cat_all: "All",
        cat_bags: "Bags",
        cat_watches: "Watches",
        cat_fragrance: "Fragrances",
        cat_accessories: "Accessories",
        cat_shoes: "Shoes",
        add_to_cart: "Add to Cart",
        added: "Added ✓",
        fav_title: "Wishlist / Favorites",
        fav_empty: "Your wishlist is currently empty.",
        cart_title: "Shopping Bag",
        cart_empty: "Your shopping bag is empty.",
        total: "Total Amount:",
        checkout_title: "Client Checkout",
        form_name: "Full Name",
        form_phone: "Phone Number",
        form_address: "Shipping Address",
        form_comment: "Order Notes (optional)",
        submit_order: "Place Order (Telegram)",
        order_success: "Order received! Our concierge will contact you shortly.",
        about_title: "The Hermès Heritage",
        about_text1: "Established in Paris in 1837 by Thierry Hermès, the house began as a harness workshop serving European noblemen.",
        about_text2: "Today, we unite artisanal craftsmanship with contemporary luxury, crafting the world's finest leather goods, silk scarves, timepieces, and fragrances."
    }
};

// ==========================================
// HOLATNI BOSHQARISH (LocalStorage)
// ==========================================
let currentLang = localStorage.getItem('hermes_lang') || 'uz';
let isDark = localStorage.getItem('hermes_theme') === 'dark';
let cart = JSON.parse(localStorage.getItem('hermes_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('hermes_favs')) || [];

function saveState() {
    localStorage.setItem('hermes_lang', currentLang);
    localStorage.setItem('hermes_theme', isDark ? 'dark' : 'light');
    localStorage.setItem('hermes_cart', JSON.stringify(cart));
    localStorage.setItem('hermes_favs', JSON.stringify(favorites));
}

// ==========================================
// HEADER VA FOOTERNI AVTOMATIK CHIZISH
// ==========================================
function renderLayout() {
    const t = translations[currentLang];
    const path = window.location.pathname;
    const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const favCount = favorites.length;

    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    const headerHTML = `
    <div class="bg-[#F37021] text-white text-xs text-center py-1.5 tracking-widest uppercase font-medium">
        HERMÈS PARIS — OFFICIAL BOUTIQUE EXPERIENCE
    </div>
    <header class="sticky top-0 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 transition-colors">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="index.html" class="font-serif text-3xl tracking-[0.25em] font-bold text-zinc-900 dark:text-white">
                HERMÈS
            </a>
            <nav class="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wider font-medium">
                <a href="index.html" class="${path.includes('index') || path === '/' ? 'text-[#F37021]' : 'text-zinc-700 dark:text-zinc-300 hover:text-[#F37021]'} transition">${t.nav_home}</a>
                <a href="catalog.html" class="${path.includes('catalog') ? 'text-[#F37021]' : 'text-zinc-700 dark:text-zinc-300 hover:text-[#F37021]'} transition">${t.nav_catalog}</a>
                <a href="about.html" class="${path.includes('about') ? 'text-[#F37021]' : 'text-zinc-700 dark:text-zinc-300 hover:text-[#F37021]'} transition">${t.nav_about}</a>
            </nav>
            <div class="flex items-center space-x-5">
                <!-- Til tanlash -->
                <select onchange="changeLang(this.value)" class="bg-transparent text-sm font-semibold uppercase tracking-wider border border-gray-300 dark:border-zinc-700 rounded px-2 py-1 text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-[#F37021]">
                    <option value="uz" class="bg-white dark:bg-zinc-800" ${currentLang === 'uz' ? 'selected' : ''}>UZ</option>
                    <option value="ru" class="bg-white dark:bg-zinc-800" ${currentLang === 'ru' ? 'selected' : ''}>RU</option>
                    <option value="en" class="bg-white dark:bg-zinc-800" ${currentLang === 'en' ? 'selected' : ''}>EN</option>
                </select>
                <!-- Dark/Light Mode -->
                <button onclick="toggleTheme()" class="p-2 text-zinc-700 dark:text-zinc-300 hover:text-[#F37021] transition" title="Theme">
                    ${isDark ? '☀️' : '🌙'}
                </button>
                <!-- Sevimlilar -->
                <a href="favorites.html" class="relative p-2 text-zinc-700 dark:text-zinc-300 hover:text-[#F37021] transition">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                    <span class="absolute top-0 right-0 bg-[#F37021] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">${favCount}</span>
                </a>
                <!-- Savatcha -->
                <a href="cart.html" class="relative p-2 text-zinc-700 dark:text-zinc-300 hover:text-[#F37021] transition">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                    <span class="absolute top-0 right-0 bg-[#F37021] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">${cartCount}</span>
                </a>
            </div>
        </div>
        <!-- Mobile menyu -->
        <div class="flex md:hidden justify-around border-t border-gray-200 dark:border-zinc-800 py-2 text-xs uppercase tracking-wider">
            <a href="index.html" class="text-zinc-700 dark:text-zinc-300">${t.nav_home}</a>
            <a href="catalog.html" class="text-zinc-700 dark:text-zinc-300">${t.nav_catalog}</a>
            <a href="about.html" class="text-zinc-700 dark:text-zinc-300">${t.nav_about}</a>
        </div>
    </header>`;

    const footerHTML = `
    <footer class="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-800 mt-20">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <h2 class="font-serif text-2xl tracking-[0.3em] text-white mb-4">HERMÈS</h2>
            <p class="text-xs tracking-widest uppercase mb-6">24, Rue du Faubourg Saint-Honoré, Paris</p>
            <div class="flex justify-center space-x-6 text-sm mb-8">
                <a href="index.html" class="hover:text-[#F37021]">${t.nav_home}</a>
                <a href="catalog.html" class="hover:text-[#F37021]">${t.nav_catalog}</a>
                <a href="favorites.html" class="hover:text-[#F37021]">${t.nav_favorites}</a>
                <a href="cart.html" class="hover:text-[#F37021]">${t.nav_cart}</a>
            </div>
            <p class="text-xs text-zinc-600">© 2026 Hermès International. All rights reserved.</p>
        </div>
    </footer>`;

    const navEl = document.getElementById('app-navbar');
    const footEl = document.getElementById('app-footer');
    if (navEl) navEl.innerHTML = headerHTML;
    if (footEl) footEl.innerHTML = footerHTML;
}

// ==========================================
// MAHSULOT KARTASINI CHIZISH FUNKSIYASI
// ==========================================
function createProductCard(product) {
    const t = translations[currentLang];
    const isFav = favorites.includes(product.id);
    return `
    <div class="group bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-sm overflow-hidden flex flex-col justify-between transition-all hover:shadow-xl">
        <div class="relative overflow-hidden aspect-square bg-gray-100 dark:bg-zinc-800">
            <img src="${product.image}" alt="${product.name[currentLang]}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500">
            <button onclick="toggleFavorite(${product.id})" class="absolute top-3 right-3 p-2.5 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur hover:scale-110 transition">
                <svg class="w-5 h-5 ${isFav ? 'text-[#F37021] fill-current' : 'text-zinc-600 dark:text-zinc-300'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
            </button>
        </div>
        <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
                <h3 class="font-serif text-lg font-medium text-zinc-900 dark:text-white mb-1">${product.name[currentLang]}</h3>
                <p class="text-xs text-zinc-500 dark:text-zinc-400 mb-4">${product.desc[currentLang]}</p>
            </div>
            <div class="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-zinc-800">
                <span class="text-lg font-semibold text-zinc-900 dark:text-white">$${product.price.toLocaleString()}</span>
                <button onclick="addToCart(${product.id}, this)" class="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-[#F37021] dark:hover:bg-[#F37021] dark:hover:text-white text-xs uppercase tracking-wider px-4 py-2.5 font-medium transition">
                    ${t.add_to_cart}
                </button>
            </div>
        </div>
    </div>`;
}

// ==========================================
// AMALLAR (Til, Tema, Savatcha, Sevimlilar)
// ==========================================
function changeLang(lang) {
    currentLang = lang;
    saveState();
    initApp();
}

function toggleTheme() {
    isDark = !isDark;
    saveState();
    initApp();
}

function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    saveState();
    initApp();
}

function addToCart(id, btnEl) {
    const t = translations[currentLang];
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id, qty: 1 });
    }
    saveState();
    renderLayout();
    if (btnEl) {
        const oldText = btnEl.innerText;
        btnEl.innerText = t.added;
        btnEl.classList.add('!bg-[#F37021]', '!text-white');
        setTimeout(() => {
            btnEl.innerText = oldText;
            btnEl.classList.remove('!bg-[#F37021]', '!text-white');
        }, 1000);
    }
}

function updateCartQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    saveState();
    initApp();
}

// ==========================================
// SAHIFALARNI ISHGA TUSHIRISH
// ==========================================
let currentCategory = 'all';
let searchQuery = '';

function filterCategory(cat) {
    currentCategory = cat;
    renderCatalogPage();
}

function handleSearch(val) {
    searchQuery = val.toLowerCase();
    renderCatalogPage();
}

function renderHomePage() {
    const el = document.getElementById('page-home');
    if (!el) return;
    const t = translations[currentLang];
    const featured = products.slice(0, 4);

    el.innerHTML = `
    <!-- Hero Banner -->
    <section class="relative h-[75vh] flex items-center justify-center bg-zinc-900 text-white overflow-hidden">
        <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1920&q=80" class="absolute inset-0 w-full h-full object-cover opacity-45" alt="Hermes Banner">
        <div class="relative z-10 text-center max-w-3xl px-4">
            <p class="text-xs md:text-sm tracking-[0.35em] text-[#F37021] font-semibold mb-4">${t.hero_sub}</p>
            <h1 class="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">${t.hero_title}</h1>
            <p class="text-sm md:text-base text-gray-200 mb-8 max-w-xl mx-auto">${t.hero_desc}</p>
            <a href="catalog.html" class="inline-block bg-[#F37021] hover:bg-orange-600 text-white uppercase tracking-widest text-xs font-semibold px-8 py-4 transition">
                ${t.hero_btn}
            </a>
        </div>
    </section>

    <!-- Tanlangan Mahsulotlar -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center mb-12">
            <h2 class="font-serif text-3xl text-zinc-900 dark:text-white">${t.featured_title}</h2>
            <div class="w-16 h-0.5 bg-[#F37021] mx-auto mt-3"></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            ${featured.map(p => createProductCard(p)).join('')}
        </div>
    </section>`;
}

function renderCatalogPage() {
    const el = document.getElementById('page-catalog');
    if (!el) return;
    const t = translations[currentLang];

    const filtered = products.filter(p => {
        const matchesCat = currentCategory === 'all' || p.category === currentCategory;
        const matchesSearch = p.name[currentLang].toLowerCase().includes(searchQuery) ||
                              p.desc[currentLang].toLowerCase().includes(searchQuery);
        return matchesCat && matchesSearch;
    });

    const categories = [
        { id: 'all', label: t.cat_all },
        { id: 'bags', label: t.cat_bags },
        { id: 'watches', label: t.cat_watches },
        { id: 'fragrance', label: t.cat_fragrance },
        { id: 'accessories', label: t.cat_accessories },
        { id: 'shoes', label: t.cat_shoes }
    ];

    el.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Qidiruv va Filtrlar -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-gray-200 dark:border-zinc-800">
            <div class="flex flex-wrap gap-2">
                ${categories.map(c => `
                    <button onclick="filterCategory('${c.id}')" class="px-4 py-2 text-xs uppercase tracking-wider font-medium border transition ${currentCategory === c.id ? 'bg-[#F37021] text-white border-[#F37021]' : 'border-gray-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-[#F37021]'}">
                        ${c.label}
                    </button>
                `).join('')}
            </div>
            <div class="relative w-full md:w-72">
                <input type="text" value="${searchQuery}" oninput="handleSearch(this.value)" placeholder="${t.search_placeholder}" class="w-full pl-4 pr-10 py-2.5 text-sm bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:border-[#F37021]">
                <span class="absolute right-3 top-2.5 text-zinc-400">🔍</span>
            </div>
        </div>

        <!-- Mahsulotlar Ro'yxati -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            ${filtered.map(p => createProductCard(p)).join('')}
        </div>
    </div>`;
    
    // Input fokusni yo'qotmaslik uchun
    const input = el.querySelector('input');
    if (input && searchQuery) {
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
    }
}

function renderFavoritesPage() {
    const el = document.getElementById('page-favorites');
    if (!el) return;
    const t = translations[currentLang];
    const favProducts = products.filter(p => favorites.includes(p.id));

    el.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 class="font-serif text-3xl text-zinc-900 dark:text-white mb-8">${t.fav_title}</h1>
        ${favProducts.length === 0 ? `
            <div class="text-center py-20 border border-dashed border-gray-300 dark:border-zinc-800">
                <p class="text-zinc-500 mb-6">${t.fav_empty}</p>
                <a href="catalog.html" class="bg-[#F37021] text-white px-6 py-3 text-xs uppercase tracking-widest">${t.hero_btn}</a>
            </div>
        ` : `
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                ${favProducts.map(p => createProductCard(p)).join('')}
            </div>
        `}
    </div>`;
}

function renderCartPage() {
    const el = document.getElementById('page-cart');
    if (!el) return;
    const t = translations[currentLang];

    const cartItems = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        return { ...product, qty: item.qty };
    });

    const totalSum = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

    el.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 class="font-serif text-3xl text-zinc-900 dark:text-white mb-8">${t.cart_title}</h1>
        ${cartItems.length === 0 ? `
            <div class="text-center py-20 border border-dashed border-gray-300 dark:border-zinc-800">
                <p class="text-zinc-500 mb-6">${t.cart_empty}</p>
                <a href="catalog.html" class="bg-[#F37021] text-white px-6 py-3 text-xs uppercase tracking-widest">${t.hero_btn}</a>
            </div>
        ` : `
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <!-- Savatchadagi mahsulotlar -->
                <div class="lg:col-span-2 space-y-6">
                    ${cartItems.map(item => `
                        <div class="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
                            <div class="flex items-center space-x-4">
                                <img src="${item.image}" class="w-20 h-20 object-cover">
                                <div>
                                    <h3 class="font-serif text-lg text-zinc-900 dark:text-white">${item.name[currentLang]}</h3>
                                    <p class="text-sm text-[#F37021] font-semibold">$${item.price.toLocaleString()}</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-3">
                                <button onclick="updateCartQty(${item.id}, -1)" class="w-8 h-8 border border-gray-300 dark:border-zinc-700 text-zinc-800 dark:text-white">-</button>
                                <span class="text-sm font-semibold text-zinc-900 dark:text-white">${item.qty}</span>
                                <button onclick="updateCartQty(${item.id}, 1)" class="w-8 h-8 border border-gray-300 dark:border-zinc-700 text-zinc-800 dark:text-white">+</button>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Rasmiylashtirish va Telegram Formasi -->
                <div class="bg-white dark:bg-zinc-900 p-6 border border-gray-200 dark:border-zinc-800 h-fit">
                    <h2 class="font-serif text-xl text-zinc-900 dark:text-white mb-4 pb-4 border-b border-gray-200 dark:border-zinc-800">${t.checkout_title}</h2>
                    <div class="flex justify-between text-lg font-bold text-zinc-900 dark:text-white mb-6">
                        <span>${t.total}</span> <span class="text-[#F37021]">$${totalSum.toLocaleString()}</span>
                    </div>
                    <form onsubmit="submitOrderToTelegram(event)" class="space-y-4">
                        <input type="text" id="cust_name" required placeholder="${t.form_name}" class="w-full p-3 text-sm bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:border-[#F37021]">
                        <input type="tel" id="cust_phone" required placeholder="${t.form_phone}" class="w-full p-3 text-sm bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:border-[#F37021]">
                        <input type="text" id="cust_address" required placeholder="${t.form_address}" class="w-full p-3 text-sm bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:border-[#F37021]">
                        <textarea id="cust_comment" rows="2" placeholder="${t.form_comment}" class="w-full p-3 text-sm bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:border-[#F37021]"></textarea>
                        <button type="submit" id="submit_btn" class="w-full bg-[#F37021] hover:bg-orange-600 text-white uppercase tracking-widest text-xs font-bold py-4 transition">
                            ${t.submit_order}
                        </button>
                    </form>
                </div>
            </div>
        `}
    </div>`;
}

function renderAboutPage() {
    const el = document.getElementById('page-about');
    if (!el) return;
    const t = translations[currentLang];

    el.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 py-16 text-center">
        <p class="text-xs tracking-[0.3em] text-[#F37021] uppercase mb-3">MAISON HERMÈS</p>
        <h1 class="font-serif text-4xl text-zinc-900 dark:text-white mb-8">${t.about_title}</h1>
        <img src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80" class="w-full h-80 object-cover mb-8 rounded-sm">
        <p class="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 text-lg">${t.about_text1}</p>
        <p class="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">${t.about_text2}</p>
    </div>`;
}

// ==========================================
// TELEGRAM BOTGA BUYURTMA YUBORISH
// ==========================================
async function submitOrderToTelegram(e) {
    e.preventDefault();
    const t = translations[currentLang];
    const name = document.getElementById('cust_name').value;
    const phone = document.getElementById('cust_phone').value;
    const address = document.getElementById('cust_address').value;
    const comment = document.getElementById('cust_comment').value;

    const cartItems = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        return { ...product, qty: item.qty };
    });

    const totalSum = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

    let message = `🛍 <b>HERMÈS — YANGI BUYURTMA!</b>\n\n`;
    message += `👤 <b>Mijoz:</b> ${name}\n`;
    message += `📞 <b>Tel:</b> ${phone}\n`;
    message += `📍 <b>Manzil:</b> ${address}\n`;
    if (comment) message += `💬 <b>Izoh:</b> ${comment}\n`;
    message += `\n📦 <b>Mahsulotlar:</b>\n`;

    cartItems.forEach((item, index) => {
        message += `${index + 1}. ${item.name.uz} (${item.qty} dona) — $${(item.price * item.qty).toLocaleString()}\n`;
    });

    message += `\n💰 <b>JAMI SUMMA: $${totalSum.toLocaleString()}</b>`;

    if (TELEGRAM_BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE' || TELEGRAM_CHAT_ID === 'YOUR_CHAT_ID_HERE') {
        alert("⚠️ Diqqat! app.js faylida TELEGRAM_BOT_TOKEN va TELEGRAM_CHAT_ID o'rnatilmagan.\n\nBuyurtma matni:\n" + message.replace(/<[^>]*>?/gm, ''));
        cart = [];
        saveState();
        initApp();
        return;
    }

    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });

        if (response.ok) {
            alert(t.order_success);
            cart = [];
            saveState();
            initApp();
        } else {
            alert("Telegramga yuborishda xatolik yuz berdi. Token va Chat ID ni tekshiring.");
        }
    } catch (err) {
        alert("Internet yoki tarmoq xatoligi: " + err.message);
    }
}

function initApp() {
    renderLayout();
    renderHomePage();
    renderCatalogPage();
    renderFavoritesPage();
    renderCartPage();
    renderAboutPage();
}

document.addEventListener('DOMContentLoaded', initApp);
