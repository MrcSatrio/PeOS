/**
 * Retro Billiard - Reception & Cashier Terminal POS Logic
 * Bjorbun Retro Aesthetic • Tablet & Laptop Interactive POS System
 * Bilingual Support: English (Default markup) & Indonesian (Dynamic i18n)
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. MENU DATA STORE (Artisanal Dishes Matching Reference & Retro Aesthetic)
  // =========================================================================
  const DEFAULT_MENU_ITEMS = [
    {
      id: 'm1',
      name: 'Ayam Bakar Saus Madu',
      name_en: 'Honey Glazed Grilled Chicken',
      category: 'makanan',
      price: 35000,
      stock: 24,
      image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'm2',
      name: 'Ikan Gurame Asam Manis',
      name_en: 'Sweet & Sour Gourami Fish',
      category: 'makanan',
      price: 55000,
      stock: 15,
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'm3',
      name: 'Billiard Artisan Burger',
      name_en: 'Retro Billiard Artisan Burger',
      category: 'makanan',
      price: 48000,
      stock: 30,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'm4',
      name: 'Nasi Goreng Seafood Spesial',
      name_en: 'Special Seafood Fried Rice',
      category: 'makanan',
      price: 38000,
      stock: 28,
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'm5',
      name: 'Ayam Penyet Sambal Matah',
      name_en: 'Smashed Chicken with Sambal Matah',
      category: 'makanan',
      price: 32000,
      stock: 20,
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'm6',
      name: 'Steak Tenderloin Lada Hitam',
      name_en: 'Black Pepper Tenderloin Steak',
      category: 'makanan',
      price: 75000,
      stock: 12,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'h1',
      name: 'Hotplate Sapi Saus Lada Hitam',
      name_en: 'Sizzling Black Pepper Beef',
      category: 'hotplate',
      price: 58000,
      stock: 18,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'h2',
      name: 'Hotplate Ayam Saus Mentega',
      name_en: 'Butter Glazed Sizzling Chicken',
      category: 'hotplate',
      price: 45000,
      stock: 22,
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'h3',
      name: 'Hotplate Cumi Saus Tiram',
      name_en: 'Sizzling Squid in Oyster Sauce',
      category: 'hotplate',
      price: 52000,
      stock: 14,
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'd1',
      name: 'Es Kopi Susu Gula Aren',
      name_en: 'Iced Palm Sugar Latte',
      category: 'minuman',
      price: 22000,
      stock: 45,
      image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'd2',
      name: 'Es Teh Tarik Klasik',
      name_en: 'Classic Iced Teh Tarik',
      category: 'minuman',
      price: 15000,
      stock: 50,
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'd3',
      name: 'Citrus Mint Mocktail',
      name_en: 'Citrus Mint Sparkling Mocktail',
      category: 'minuman',
      price: 28000,
      stock: 35,
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'd4',
      name: 'Fresh Pressed Orange Juice',
      name_en: 'Fresh Pressed Orange Juice',
      category: 'minuman',
      price: 20000,
      stock: 40,
      image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 's1',
      name: 'Kentang Goreng Truffle Herb',
      name_en: 'Truffle & Herb French Fries',
      category: 'snack',
      price: 25000,
      stock: 35,
      image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 's2',
      name: 'Dimsum Ayam Udang (4 pcs)',
      name_en: 'Steamed Chicken & Prawn Siomay',
      category: 'snack',
      price: 26000,
      stock: 25,
      image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 's3',
      name: 'Singkong Goreng Keju Crispy',
      name_en: 'Crispy Garlic & Cheese Cassava',
      category: 'snack',
      price: 18000,
      stock: 30,
      image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=400&q=80'
    }
  ];

  function loadMenuItemsFromStorage() {
    const raw = localStorage.getItem('retro_menu_items');
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {
        console.error('Failed to parse retro_menu_items in POS', e);
      }
    }
    localStorage.setItem('retro_menu_items', JSON.stringify(DEFAULT_MENU_ITEMS));
    return DEFAULT_MENU_ITEMS;
  }

  let MENU_ITEMS = loadMenuItemsFromStorage();

  // Listen to cross-tab / admin changes
  window.addEventListener('storage', (e) => {
    if (e.key === 'retro_menu_items') {
      MENU_ITEMS = loadMenuItemsFromStorage();
      renderCatalog();
      renderCart();
      updateCategoryCounts();
    }
  });

  // =========================================================================
  // 2. BILINGUAL DICTIONARY & I18N STRINGS
  // =========================================================================
  const flags = {
    en: `<svg class="flag-svg" viewBox="0 0 60 40" width="20" height="13">
          <clipPath id="uk-clip-p"><rect width="60" height="40" rx="3"/></clipPath>
          <g clip-path="url(#uk-clip-p)">
            <path fill="#012169" d="M0 0h60v40H0z"/>
            <path stroke="#fff" stroke-width="6" d="M0 0l60 40M60 0L0 40"/>
            <path stroke="#C8102E" stroke-width="4" d="M0 0l60 40M60 0L0 40"/>
            <path stroke="#fff" stroke-width="10" d="M30 0v40M0 20h60"/>
            <path stroke="#C8102E" stroke-width="6" d="M30 0v40M0 20h60"/>
          </g>
        </svg>`,
    id: `<svg class="flag-svg" viewBox="0 0 60 40" width="20" height="13">
          <clipPath id="id-clip-p"><rect width="60" height="40" rx="3"/></clipPath>
          <g clip-path="url(#id-clip-p)">
            <rect width="60" height="20" fill="#E70011"/>
            <rect y="20" width="60" height="20" fill="#FFFFFF"/>
            <rect width="60" height="40" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="1.5"/>
          </g>
        </svg>`
  };

  const translations = {
    en: {
      pos_station: 'Cashier & Front Desk #01',
      search_placeholder: 'Search food, drinks or menu code...',
      queue_label: 'Queue',
      cashier_role: 'Head Cashier',
      admin_btn_title: 'Back Office & Admin Management',
      exit_title: 'Exit / Switch Shift',
      cat_all: 'All',
      cat_makanan: 'Mains',
      cat_hotplate: 'Hotplate',
      cat_minuman: 'Drinks',
      cat_snack: 'Snacks',
      cat_all_title: 'All Restaurant Menu',
      mode_dine_in: 'Dine In',
      mode_takeaway: 'Takeaway',
      order_list_title: 'Order Summary',
      btn_clear: 'Clear',
      label_table: 'Select Table',
      label_customer: 'Guest / Customer Name',
      customer_placeholder: 'e.g. Mr. Adrian',
      subtotal_label: 'Subtotal',
      tax_label: '+ Restaurant Tax & Service (10%)',
      total_label: 'Total Due',
      btn_pay: 'Pay & Affirm Order',
      empty_title: 'No Orders Yet',
      empty_hint: 'Tap any dish from the catalog on the left to add items to this order.',
      modal_pay_title: 'Affirm Order & Payment',
      choose_payment: 'Payment Method',
      method_cash: 'Cash',
      method_qris: 'QRIS / E-Wallet',
      method_card: 'Debit / Card',
      cash_received: 'Cash Tendered Amount',
      chip_exact: 'Exact Cash',
      change_label: 'Change Due',
      qris_prompt: 'Display Dynamic QRIS to Customer',
      qris_auto_verify: 'Payment will automatically verify upon scan.',
      kitchen_note: 'Kitchen Notes (Optional)',
      note_placeholder: 'e.g. Sauce on side, less ice...',
      btn_cancel: 'Cancel',
      btn_confirm_dispatch: 'Affirm & Send to Kitchen',
      success_title: 'Order Successfully Affirmed!',
      success_sub: 'The kitchen ticket has been dispatched to the kitchen queue monitor.',
      btn_print: 'Print Receipt',
      btn_new_order: 'New Order (Done)',
      item_unit_stock: 'In stock: ',
      badge_takeaway: '🛍️ Takeaway',
      badge_dinein: '🍽️ Dine In',
      btn_make_takeaway: 'Takeaway',
      btn_make_dinein: 'Dine In',
      takeaway_counter_label: '🛍️ Takeaway Counter (Front Desk)',
      showing_items: 'Showing {count} items',
      items_count: '{count} item(s)',
      confirm_clear_order: 'Are you sure you want to clear all items from this order?',
      alert_insufficient_cash: 'The cash amount received is less than the total bill.',
      short_change: 'Short ',
      menu_not_found: 'No dishes found',
      menu_not_found_hint: 'Try another search keyword or switch to All categories.',
      receipt_ticket: 'Ticket No:',
      receipt_order_type: 'Order Type:',
      receipt_table_guest: 'Table & Guest:',
      receipt_paid: 'Total Paid:',
      receipt_time: 'Affirmed At:'
    },
    id: {
      pos_station: 'Kasir & Meja Resepsionis #01',
      search_placeholder: 'Cari makanan, minuman atau kode menu...',
      queue_label: 'Antrean',
      cashier_role: 'Kasir Utama',
      admin_btn_title: 'Manajemen Menu & Admin',
      exit_title: 'Keluar / Ganti Shift',
      cat_all: 'Semua',
      cat_makanan: 'Makanan',
      cat_hotplate: 'Hotplate',
      cat_minuman: 'Minuman',
      cat_snack: 'Camilan',
      cat_all_title: 'Semua Menu Restoran',
      mode_dine_in: 'Makan di Tempat',
      mode_takeaway: 'Bawa Pulang',
      order_list_title: 'Ringkasan Pesanan',
      btn_clear: 'Hapus',
      label_table: 'Pilih Meja',
      label_customer: 'Nama Tamu / Pelanggan',
      customer_placeholder: 'Contoh: Bpk. Adrian',
      subtotal_label: 'Subtotal',
      tax_label: '+ Pajak Resto & Layanan (10%)',
      total_label: 'Total Tagihan',
      btn_pay: 'Bayar & Afirmasi Pesanan',
      empty_title: 'Belum Ada Pesanan',
      empty_hint: 'Ketuk menu hidangan di sebelah kiri untuk memasukkan ke dalam pesanan meja ini.',
      modal_pay_title: 'Afirmasi Pesanan & Pembayaran',
      choose_payment: 'Metode Pembayaran',
      method_cash: 'Tunai (Cash)',
      method_qris: 'QRIS / E-Wallet',
      method_card: 'Debit / Kartu',
      cash_received: 'Nominal Diterima',
      chip_exact: 'Uang Pas',
      change_label: 'Uang Kembalian',
      qris_prompt: 'Tunjukkan QRIS Dinamis ke Pelanggan',
      qris_auto_verify: 'Pembayaran akan otomatis terverifikasi setelah pelanggan memindai.',
      kitchen_note: 'Catatan Dapur (Opsional)',
      note_placeholder: 'Contoh: Saus dipisah, es batu sedikit...',
      btn_cancel: 'Batal',
      btn_confirm_dispatch: 'Afirmasi & Kirim ke Dapur',
      success_title: 'Pesanan Berhasil Diafirmasi!',
      success_sub: 'Tiket pesanan telah dikirim langsung ke antrean monitor dapur.',
      btn_print: 'Cetak Struk',
      btn_new_order: 'Pesanan Baru (Selesai)',
      item_unit_stock: 'Stok: ',
      badge_takeaway: '🛍️ Bawa Pulang',
      badge_dinein: '🍽️ Makan di Tempat',
      btn_make_takeaway: 'Bawa Pulang',
      btn_make_dinein: 'Di Tempat',
      takeaway_counter_label: '🛍️ Meja Bawa Pulang (Resepsionis)',
      showing_items: 'Menampilkan {count} menu',
      items_count: '{count} item',
      confirm_clear_order: 'Apakah Anda yakin ingin menghapus semua daftar pesanan ini?',
      alert_insufficient_cash: 'Nominal uang tunai yang diterima belum mencukupi total tagihan.',
      short_change: 'Kurang ',
      menu_not_found: 'Menu tidak ditemukan',
      menu_not_found_hint: 'Coba gunakan kata kunci lain atau pilih kategori Semua.',
      receipt_ticket: 'No. Tiket:',
      receipt_order_type: 'Tipe Pesanan:',
      receipt_table_guest: 'Meja & Tamu:',
      receipt_paid: 'Total Terbayar:',
      receipt_time: 'Waktu Afirmasi:'
    }
  };

  // Follow auth.js convention: default to stored language or 'en'
  let currentLang = localStorage.getItem('restaurant_lang') || 'en';

  // =========================================================================
  // 3. APPLICATION STATE
  // =========================================================================
  let currentCategory = 'all';
  let searchQuery = '';
  let includeTax = true;
  let currentOrderMode = 'dine_in'; // 'dine_in' or 'takeaway'

  // Pre-populate with sample items: All default to Dine In (isTakeaway: false)
  let cart = [
    { id: 'm1', qty: 2, isTakeaway: false },
    { id: 'm2', qty: 1, isTakeaway: false },
    { id: 'h1', qty: 1, isTakeaway: false }
  ];

  let selectedPayMethod = 'cash';
  let activeTicketNumber = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
  let queueCount = 12;

  // Currency Formatter
  function formatIDR(amount) {
    return 'Rp ' + amount.toLocaleString('id-ID');
  }

  // =========================================================================
  // 4. DOM ELEMENTS
  // =========================================================================
  const gridContainer = document.getElementById('pos-product-grid');
  const cartListContainer = document.getElementById('order-items-list');
  const searchInput = document.getElementById('pos-search-input');
  const clearSearchBtn = document.getElementById('btn-clear-search');
  const categoryTabs = document.querySelectorAll('.category-tab');
  const catalogSectionTitle = document.getElementById('catalog-section-title');
  const catalogItemsCount = document.getElementById('catalog-items-count');

  // Mode buttons & header badge
  const modeDineInBtn = document.getElementById('mode-dine-in');
  const modeTakeawayBtn = document.getElementById('mode-takeaway');
  const orderHeaderModeBadge = document.getElementById('order-header-mode-badge');
  const selectTable = document.getElementById('select-table');

  // Summary Elements
  const summarySubtotal = document.getElementById('summary-subtotal');
  const summaryTax = document.getElementById('summary-tax');
  const summaryGrandTotal = document.getElementById('summary-grand-total');
  const totalQtyBadge = document.getElementById('total-qty-badge');
  const btnToggleFee = document.getElementById('btn-toggle-fee');
  const btnClearOrder = document.getElementById('btn-clear-order');
  const btnOpenPayment = document.getElementById('btn-open-payment');

  // Modal Elements
  const modalBackdrop = document.getElementById('modal-payment-backdrop');
  const btnClosePayment = document.getElementById('btn-close-payment-modal');
  const btnCancelPayment = document.getElementById('btn-cancel-payment');
  const btnConfirmOrder = document.getElementById('btn-confirm-order');
  const modalPaySubtitle = document.getElementById('modal-pay-subtitle');
  const modalMiniItems = document.getElementById('modal-mini-items');
  const modalSubtotal = document.getElementById('modal-subtotal');
  const modalTax = document.getElementById('modal-tax');
  const modalTotalAmount = document.getElementById('modal-total-amount');
  const inputTendered = document.getElementById('input-tendered');
  const modalChangeAmount = document.getElementById('modal-change-amount');
  const tenderCashSection = document.getElementById('tender-cash-section');
  const tenderNoncashSection = document.getElementById('tender-noncash-section');
  const payMethodBtns = document.querySelectorAll('.pay-method-btn');
  const cashChips = document.querySelectorAll('.cash-chip');

  // Success Modal Elements
  const modalSuccessBackdrop = document.getElementById('modal-success-backdrop');
  const btnNewOrder = document.getElementById('btn-new-order');
  const btnPrintReceipt = document.getElementById('btn-print-receipt');
  const successTicketSummary = document.getElementById('success-ticket-summary');
  const queueCounterEl = document.getElementById('queue-counter');

  // Language Elements
  const langBtn = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');
  const activeFlag = document.getElementById('active-flag');
  const activeLangText = document.getElementById('active-lang-text');
  const langChoices = document.querySelectorAll('.lang-choice');

  // =========================================================================
  // 5. RENDER CATALOG (Food Product Cards)
  // =========================================================================
  function updateCategoryCounts() {
    const countAll = document.getElementById('count-all');
    const countMakanan = document.getElementById('count-makanan');
    const countHotplate = document.getElementById('count-hotplate');
    const countMinuman = document.getElementById('count-minuman');
    const countSnack = document.getElementById('count-snack');

    if (countAll) countAll.textContent = MENU_ITEMS.length;
    if (countMakanan) countMakanan.textContent = MENU_ITEMS.filter((m) => m.category === 'makanan').length;
    if (countHotplate) countHotplate.textContent = MENU_ITEMS.filter((m) => m.category === 'hotplate').length;
    if (countMinuman) countMinuman.textContent = MENU_ITEMS.filter((m) => m.category === 'minuman').length;
    if (countSnack) countSnack.textContent = MENU_ITEMS.filter((m) => m.category === 'snack').length;
  }

  function renderCatalog() {
    updateCategoryCounts();
    if (!gridContainer) return;
    gridContainer.innerHTML = '';

    const filtered = MENU_ITEMS.filter((item) => {
      const matchCat = currentCategory === 'all' || item.category === currentCategory;
      const itemName = currentLang === 'en' ? item.name_en : item.name;
      const matchSearch = itemName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    const showingTemplate = translations[currentLang].showing_items || 'Showing {count} items';
    if (catalogItemsCount) {
      catalogItemsCount.textContent = showingTemplate.replace('{count}', filtered.length);
    }

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--charcoal-500);">
          <p style="font-family: var(--font-serif); font-size: 1.2rem; margin-bottom: 6px;">${translations[currentLang].menu_not_found}</p>
          <small>${translations[currentLang].menu_not_found_hint}</small>
        </div>
      `;
      return;
    }

    filtered.forEach((item) => {
      const cartEntry = cart.find((c) => c.id === item.id);
      const inCart = !!cartEntry;
      const qty = inCart ? cartEntry.qty : 0;
      const displayName = currentLang === 'en' ? item.name_en : item.name;

      const card = document.createElement('div');
      card.className = `product-card ${inCart ? 'in-cart' : ''}`;
      card.setAttribute('data-id', item.id);

      card.innerHTML = `
        <div class="card-img-wrap">
          <img src="${item.image}" alt="${displayName}" loading="lazy" onerror="this.src='images/hero-food.jpg'">
          <div class="card-selected-badge" title="Selected">✓</div>
          <div class="card-qty-badge">${qty}x</div>
        </div>
        <div class="card-body">
          <h3 class="card-dish-name">${displayName}</h3>
          <div class="card-footer-meta">
            <span class="card-price">${formatIDR(item.price)}</span>
            <span class="card-stock-hint">${translations[currentLang].item_unit_stock}${item.stock}</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        addToCart(item.id);
      });

      gridContainer.appendChild(card);
    });
  }

  // =========================================================================
  // 6. CART MANAGEMENT & CALCULATIONS
  // =========================================================================
  function addToCart(itemId) {
    const existing = cart.find((c) => c.id === itemId);
    if (existing) {
      existing.qty += 1;
    } else {
      // Inherit the currently active top mode (Dine In vs Takeaway)
      cart.push({
        id: itemId,
        qty: 1,
        isTakeaway: currentOrderMode === 'takeaway'
      });
    }
    renderCart();
    renderCatalog();
  }

  function updateQty(itemId, delta) {
    const index = cart.findIndex((c) => c.id === itemId);
    if (index === -1) return;

    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    renderCart();
    renderCatalog();
  }

  function updateOrderHeaderBadge() {
    if (!orderHeaderModeBadge) return;
    if (currentOrderMode === 'takeaway') {
      orderHeaderModeBadge.className = 'order-mode-badge takeaway';
      orderHeaderModeBadge.textContent = translations[currentLang].badge_takeaway;
    } else {
      orderHeaderModeBadge.className = 'order-mode-badge dine-in';
      orderHeaderModeBadge.textContent = translations[currentLang].badge_dinein;
    }
  }

  function removeCartItem(itemId) {
    cart = cart.filter((c) => c.id !== itemId);
    renderCart();
    renderCatalog();
  }

  function calculateTotals() {
    let subtotal = 0;
    let totalItems = 0;

    cart.forEach((c) => {
      const item = MENU_ITEMS.find((m) => m.id === c.id);
      if (item) {
        subtotal += item.price * c.qty;
        totalItems += c.qty;
      }
    });

    const tax = includeTax ? Math.round(subtotal * 0.1) : 0;
    const grandTotal = subtotal + tax;

    return { subtotal, tax, grandTotal, totalItems };
  }

  function renderCart() {
    if (!cartListContainer) return;
    cartListContainer.innerHTML = '';
    const { subtotal, tax, grandTotal, totalItems } = calculateTotals();

    // Summary Labels
    if (summarySubtotal) summarySubtotal.textContent = formatIDR(subtotal);
    if (summaryTax) summaryTax.textContent = formatIDR(tax);
    if (summaryGrandTotal) summaryGrandTotal.textContent = formatIDR(grandTotal);

    const itemsTemplate = translations[currentLang].items_count || '{count} items';

    if (totalQtyBadge) {
      if (currentOrderMode === 'takeaway') {
        totalQtyBadge.textContent = `${totalItems} items (${translations[currentLang].badge_takeaway})`;
      } else {
        totalQtyBadge.textContent = itemsTemplate.replace('{count}', totalItems);
      }
    }

    // Tax toggle styling
    if (btnToggleFee) {
      if (includeTax) {
        btnToggleFee.classList.remove('disabled');
        btnToggleFee.style.color = 'var(--crimson-600)';
      } else {
        btnToggleFee.classList.add('disabled');
        btnToggleFee.style.color = 'var(--charcoal-500)';
      }
    }

    if (cart.length === 0) {
      cartListContainer.innerHTML = `
        <div class="empty-cart-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <p class="empty-cart-title">${translations[currentLang].empty_title}</p>
          <span class="empty-cart-hint">${translations[currentLang].empty_hint}</span>
        </div>
      `;
      if (btnOpenPayment) {
        btnOpenPayment.disabled = true;
        btnOpenPayment.style.opacity = '0.5';
        btnOpenPayment.style.cursor = 'not-allowed';
      }
      return;
    }

    if (btnOpenPayment) {
      btnOpenPayment.disabled = false;
      btnOpenPayment.style.opacity = '1';
      btnOpenPayment.style.cursor = 'pointer';
    }

    cart.forEach((c) => {
      const item = MENU_ITEMS.find((m) => m.id === c.id);
      if (!item) return;

      const lineTotal = item.price * c.qty;
      const displayName = currentLang === 'en' ? item.name_en : item.name;

      const itemEl = document.createElement('div');
      itemEl.className = 'order-item-card';

      // Takeaway tag indicator (only when Takeaway mode is selected on the slider)
      const takeawayTagHtml = currentOrderMode === 'takeaway'
        ? `<div class="item-tag-row"><span class="item-takeaway-tag">${translations[currentLang].badge_takeaway}</span></div>`
        : '';

      itemEl.innerHTML = `
        <div class="item-main-info">
          <div class="item-dish-title" title="${displayName}">${displayName}</div>
          <div class="item-unit-price">${formatIDR(item.price)}</div>
          ${takeawayTagHtml}
        </div>
        <div class="item-stepper-wrap">
          <button type="button" class="qty-btn btn-minus" data-id="${item.id}" aria-label="Decrease quantity">−</button>
          <span class="qty-display-badge">x${c.qty}</span>
          <button type="button" class="qty-btn btn-plus" data-id="${item.id}" aria-label="Increase quantity">+</button>
        </div>
        <div class="item-price-actions">
          <span class="item-subtotal-price">${formatIDR(lineTotal)}</span>
          <button type="button" class="item-remove-btn" data-id="${item.id}" title="Remove item">✕</button>
        </div>
      `;

      itemEl.querySelector('.btn-minus').addEventListener('click', (e) => {
        e.stopPropagation();
        updateQty(item.id, -1);
      });

      itemEl.querySelector('.btn-plus').addEventListener('click', (e) => {
        e.stopPropagation();
        updateQty(item.id, 1);
      });

      itemEl.querySelector('.item-remove-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        removeCartItem(item.id);
      });

      cartListContainer.appendChild(itemEl);
    });
  }

  // =========================================================================
  // 7. ORDER MODE (Dine In vs Takeaway) & HEADER CONTROLS
  // =========================================================================
  function setOrderMode(mode) {
    currentOrderMode = mode;

    if (mode === 'takeaway') {
      if (modeTakeawayBtn) modeTakeawayBtn.classList.add('active');
      if (modeDineInBtn) modeDineInBtn.classList.remove('active');

      // Update existing cart items to takeaway
      cart.forEach((c) => {
        c.isTakeaway = true;
      });

      // Update table selector option to reflect takeaway counter
      if (selectTable) {
        let takeawayOpt = selectTable.querySelector('option[value="Takeaway Counter"]');
        if (!takeawayOpt) {
          takeawayOpt = document.createElement('option');
          takeawayOpt.value = 'Takeaway Counter';
          takeawayOpt.textContent = translations[currentLang].takeaway_counter_label || '🛍️ Takeaway Counter (Front Desk)';
          selectTable.insertBefore(takeawayOpt, selectTable.firstChild);
        }
        selectTable.value = 'Takeaway Counter';
      }
    } else {
      if (modeDineInBtn) modeDineInBtn.classList.add('active');
      if (modeTakeawayBtn) modeTakeawayBtn.classList.remove('active');

      // Revert cart items to default dine in
      cart.forEach((c) => {
        c.isTakeaway = false;
      });

      if (selectTable) {
        if (selectTable.value === 'Takeaway Counter') {
          selectTable.value = 'Table 04';
        }
      }
    }

    updateOrderHeaderBadge();
    renderCart();
  }

  if (modeDineInBtn) {
    modeDineInBtn.addEventListener('click', () => setOrderMode('dine_in'));
  }

  if (modeTakeawayBtn) {
    modeTakeawayBtn.addEventListener('click', () => setOrderMode('takeaway'));
  }

  // Sync table dropdown changes with order mode
  if (selectTable) {
    selectTable.addEventListener('change', (e) => {
      if (e.target.value === 'Takeaway Counter') {
        if (currentOrderMode !== 'takeaway') {
          setOrderMode('takeaway');
        }
      } else {
        if (currentOrderMode === 'takeaway') {
          setOrderMode('dine_in');
        }
      }
    });
  }

  // Tax toggle
  if (btnToggleFee) {
    btnToggleFee.addEventListener('click', () => {
      includeTax = !includeTax;
      renderCart();
    });
  }

  // Clear Order button
  if (btnClearOrder) {
    btnClearOrder.addEventListener('click', () => {
      if (cart.length === 0) return;
      if (confirm(translations[currentLang].confirm_clear_order)) {
        cart = [];
        renderCart();
        renderCatalog();
      }
    });
  }

  // Category Tabs Filter
  categoryTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-category');

      const catTitleMap = {
        all: translations[currentLang].cat_all_title,
        makanan: translations[currentLang].cat_makanan,
        hotplate: 'Hotplate Sizzling Special',
        minuman: translations[currentLang].cat_minuman,
        snack: translations[currentLang].cat_snack
      };

      if (catalogSectionTitle) {
        catalogSectionTitle.textContent = catTitleMap[currentCategory] || translations[currentLang].cat_all_title;
      }
      renderCatalog();
    });
  });

  // Search filter
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      if (clearSearchBtn) clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
      renderCatalog();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      searchQuery = '';
      clearSearchBtn.style.display = 'none';
      renderCatalog();
    });
  }

  // =========================================================================
  // 8. PAYMENT CHECKOUT MODAL
  // =========================================================================
  function openPaymentModal() {
    if (cart.length === 0) return;

    const { subtotal, tax, grandTotal } = calculateTotals();
    const tableVal = selectTable ? selectTable.value : 'Table 04';
    const customerInput = document.getElementById('input-customer-name');
    const customerName = (customerInput && customerInput.value) ? customerInput.value : 'Guest';
    const isTakeaway = currentOrderMode === 'takeaway';
    const orderTypeLabel = isTakeaway
      ? `🛍️ ${translations[currentLang].mode_takeaway}`
      : `🍽️ ${tableVal}`;

    if (modalPaySubtitle) {
      modalPaySubtitle.textContent = `${orderTypeLabel} • ${customerName} • #${activeTicketNumber}`;
    }
    if (modalSubtotal) modalSubtotal.textContent = formatIDR(subtotal);
    if (modalTax) modalTax.textContent = formatIDR(tax);
    if (modalTotalAmount) modalTotalAmount.textContent = formatIDR(grandTotal);

    // Populate mini receipt
    if (modalMiniItems) {
      modalMiniItems.innerHTML = '';
      cart.forEach((c) => {
        const item = MENU_ITEMS.find((m) => m.id === c.id);
        if (!item) return;
        const displayName = currentLang === 'en' ? item.name_en : item.name;
        const takeawayBadge = isTakeaway
          ? ` <span style="font-size: 0.72rem; color: #e65100; font-weight: 700;">(${translations[currentLang].badge_takeaway})</span>`
          : '';

        const row = document.createElement('div');
        row.className = 'receipt-mini-row';
        row.innerHTML = `
          <span>${displayName} x${c.qty}${takeawayBadge}</span>
          <strong>${formatIDR(item.price * c.qty)}</strong>
        `;
        modalMiniItems.appendChild(row);
      });
    }

    // Reset tender input
    if (inputTendered) {
      inputTendered.value = '';
    }
    if (modalChangeAmount) {
      modalChangeAmount.textContent = 'Rp 0';
      modalChangeAmount.style.color = 'var(--charcoal-700)';
    }

    if (modalBackdrop) {
      modalBackdrop.style.display = 'flex';
      setTimeout(() => {
        if (inputTendered) inputTendered.focus();
      }, 150);
    }
  }

  function closePaymentModal() {
    if (modalBackdrop) modalBackdrop.style.display = 'none';
  }

  if (btnOpenPayment) {
    btnOpenPayment.addEventListener('click', openPaymentModal);
  }
  if (btnClosePayment) btnClosePayment.addEventListener('click', closePaymentModal);
  if (btnCancelPayment) btnCancelPayment.addEventListener('click', closePaymentModal);

  // Close on outside backdrop click
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closePaymentModal();
    });
  }

  // Payment Method Switching (Cash, QRIS, Card)
  payMethodBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      payMethodBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      selectedPayMethod = btn.getAttribute('data-method');

      if (selectedPayMethod === 'cash') {
        if (tenderCashSection) tenderCashSection.style.display = 'block';
        if (tenderNoncashSection) tenderNoncashSection.style.display = 'none';
      } else {
        if (tenderCashSection) tenderCashSection.style.display = 'none';
        if (tenderNoncashSection) tenderNoncashSection.style.display = 'block';
      }
    });
  });

  // Calculate change live
  function calculateChange() {
    if (!inputTendered || !modalChangeAmount) return;
    const { grandTotal } = calculateTotals();
    const rawVal = inputTendered.value.replace(/\D/g, '');
    const tendered = parseInt(rawVal, 10) || 0;

    const change = tendered - grandTotal;
    if (change >= 0) {
      modalChangeAmount.textContent = formatIDR(change);
      modalChangeAmount.style.color = 'var(--green-600)';
    } else {
      modalChangeAmount.textContent = translations[currentLang].short_change + formatIDR(Math.abs(change));
      modalChangeAmount.style.color = 'var(--crimson-600)';
    }
  }

  if (inputTendered) {
    inputTendered.addEventListener('input', (e) => {
      const rawVal = e.target.value.replace(/\D/g, '');
      if (rawVal) {
        e.target.value = parseInt(rawVal, 10).toLocaleString('id-ID');
      } else {
        e.target.value = '';
      }
      calculateChange();
    });
  }

  // Quick cash chips
  cashChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const { grandTotal } = calculateTotals();
      const val = chip.getAttribute('data-val');

      if (val === 'exact') {
        if (inputTendered) inputTendered.value = grandTotal.toLocaleString('id-ID');
      } else {
        const nominal = parseInt(val, 10);
        if (inputTendered) inputTendered.value = nominal.toLocaleString('id-ID');
      }
      calculateChange();
    });
  });

  // =========================================================================
  // 9. CONFIRM ORDER & KITCHEN DISPATCH
  // =========================================================================
  if (btnConfirmOrder) {
    btnConfirmOrder.addEventListener('click', () => {
      const { grandTotal } = calculateTotals();
      const rawVal = inputTendered ? inputTendered.value.replace(/\D/g, '') : '0';
      const tendered = parseInt(rawVal, 10) || 0;

      if (selectedPayMethod === 'cash' && tendered < grandTotal) {
        alert(translations[currentLang].alert_insufficient_cash);
        if (inputTendered) inputTendered.focus();
        return;
      }

      // Success dispatch flow
      closePaymentModal();

      // Increment Kitchen Queue
      queueCount += 1;
      if (queueCounterEl) queueCounterEl.textContent = queueCount;

      // Fill success ticket
      const tableVal = selectTable ? selectTable.value : 'Table 04';
      const customerInput = document.getElementById('input-customer-name');
      const customerName = (customerInput && customerInput.value) ? customerInput.value : 'Guest';
      const isTakeaway = currentOrderMode === 'takeaway';
      const orderTypeHeader = isTakeaway
        ? `🛍️ ${translations[currentLang].mode_takeaway}`
        : `🍽️ ${translations[currentLang].mode_dine_in} (${tableVal})`;

      if (successTicketSummary) {
        successTicketSummary.innerHTML = `
          <strong>${translations[currentLang].receipt_ticket}</strong> #${activeTicketNumber}<br>
          <strong>${translations[currentLang].receipt_order_type}</strong> ${orderTypeHeader}<br>
          <strong>${translations[currentLang].receipt_table_guest}</strong> ${tableVal} • ${customerName}<br>
          <strong>${translations[currentLang].receipt_paid}</strong> ${formatIDR(grandTotal)} (${selectedPayMethod.toUpperCase()})<br>
          <strong>${translations[currentLang].receipt_time}</strong> ${new Date().toLocaleTimeString(currentLang === 'en' ? 'en-US' : 'id-ID')}
        `;
      }

      if (modalSuccessBackdrop) modalSuccessBackdrop.style.display = 'flex';
    });
  }

  // Reset to brand new order
  if (btnNewOrder) {
    btnNewOrder.addEventListener('click', () => {
      if (modalSuccessBackdrop) modalSuccessBackdrop.style.display = 'none';
      cart = [];
      activeTicketNumber = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
      const ticketEl = document.getElementById('order-ticket-no');
      if (ticketEl) ticketEl.textContent = '#' + activeTicketNumber;
      setOrderMode('dine_in');
      renderCart();
      renderCatalog();
    });
  }

  if (btnPrintReceipt) {
    btnPrintReceipt.addEventListener('click', () => {
      window.print();
    });
  }

  // =========================================================================
  // 10. BILINGUAL LANGUAGE SWITCHER
  // =========================================================================
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('restaurant_lang', lang);

    if (activeFlag) activeFlag.innerHTML = flags[lang];
    if (activeLangText) activeLangText.textContent = lang.toUpperCase();

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Update Titles
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      if (translations[lang][key]) {
        el.setAttribute('title', translations[lang][key]);
      }
    });

    // Update active dropdown item
    langChoices.forEach((btn) => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update takeaway option label in table select
    if (selectTable) {
      const takeawayOpt = selectTable.querySelector('option[value="Takeaway Counter"]');
      if (takeawayOpt && translations[lang].takeaway_counter_label) {
        takeawayOpt.textContent = translations[lang].takeaway_counter_label;
      }
    }

    updateOrderHeaderBadge();

    renderCatalog();
    renderCart();
  }

  // Toggle Dropdown
  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('open');
      langBtn.setAttribute('aria-expanded', langMenu.classList.contains('open'));
    });

    document.addEventListener('click', (e) => {
      if (!langMenu.contains(e.target)) {
        langMenu.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  langChoices.forEach((btn) => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
      if (langMenu) {
        langMenu.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Initial Boot
  setLanguage(currentLang);
  renderCatalog();
  renderCart();
});
