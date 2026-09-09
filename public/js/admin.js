/**
 * Retro Billiard - Back Office & Administration Logic
 * Full CRUD for Restaurant Menu Items & Cashier Staff Users
 * Bilingual Support: English (Default) & Indonesian (Dynamic i18n)
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. DEFAULT DATA STORES (Seeded into localStorage if not already present)
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
      name: 'Es Kopi Susu Aren Bjorbun',
      name_en: 'Bjorbun Palm Sugar Iced Latte',
      category: 'minuman',
      price: 24000,
      stock: 50,
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'd2',
      name: 'Retro Tropical Mocktail',
      name_en: 'Retro Tropical Sparkler Mocktail',
      category: 'minuman',
      price: 28000,
      stock: 35,
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'd3',
      name: 'Matcha Cream Frappe',
      name_en: 'Artisan Matcha Cream Frappe',
      category: 'minuman',
      price: 30000,
      stock: 25,
      image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'd4',
      name: 'Lemon Tea Klasik Segar',
      name_en: 'Classic Iced Lemon Tea',
      category: 'minuman',
      price: 18000,
      stock: 60,
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 's1',
      name: 'Kentang Goreng Truffle Herb',
      name_en: 'Truffle & Herb French Fries',
      category: 'snack',
      price: 26000,
      stock: 40,
      image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 's2',
      name: 'Pisang Goreng Keju Karamel',
      name_en: 'Caramel Cheese Fried Bananas',
      category: 'snack',
      price: 22000,
      stock: 25,
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 's3',
      name: 'Crispy Calamari Rings',
      name_en: 'Crispy Calamari with Tartar Dip',
      category: 'snack',
      price: 34000,
      stock: 18,
      image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const DEFAULT_USERS = [
    {
      id: 'u1',
      fullName: 'Novan Adrian',
      username: 'cashier_novan',
      role: 'head_cashier',
      pin: '1234',
      station: 'Front Desk #01 (Shift 1)',
      status: 'active'
    },
    {
      id: 'u2',
      fullName: 'Siti Rahmawati',
      username: 'cashier_siti',
      role: 'cashier',
      pin: '1234',
      station: 'Terminal #02 (Shift 2)',
      status: 'active'
    },
    {
      id: 'u3',
      fullName: 'Budi Santoso',
      username: 'cashier_budi',
      role: 'cashier',
      pin: '1234',
      station: 'Takeaway Counter',
      status: 'active'
    },
    {
      id: 'u4',
      fullName: 'Admin Master',
      username: 'admin_master',
      role: 'admin',
      pin: 'admin123',
      station: 'Central Back Office',
      status: 'active'
    }
  ];

  // Load from localStorage or initialize
  function loadMenuItems() {
    const raw = localStorage.getItem('retro_menu_items');
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {
        console.error('Failed to parse retro_menu_items', e);
      }
    }
    localStorage.setItem('retro_menu_items', JSON.stringify(DEFAULT_MENU_ITEMS));
    return [...DEFAULT_MENU_ITEMS];
  }

  function saveMenuItems(items) {
    localStorage.setItem('retro_menu_items', JSON.stringify(items));
    menuItems = items;
    renderMenuCatalog();
    updateStats();
  }

  function loadUsers() {
    const raw = localStorage.getItem('retro_staff_users');
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {
        console.error('Failed to parse retro_staff_users', e);
      }
    }
    localStorage.setItem('retro_staff_users', JSON.stringify(DEFAULT_USERS));
    return [...DEFAULT_USERS];
  }

  function saveUsers(usersList) {
    localStorage.setItem('retro_staff_users', JSON.stringify(usersList));
    users = usersList;
    renderUsersList();
    updateStats();
  }

  let menuItems = loadMenuItems();
  let users = loadUsers();

  // Active state filters & search
  let activeMenuCategory = 'all';
  let menuSearchQuery = '';
  let activeUserRole = 'all';
  let userSearchQuery = '';

  // Modal deletion targets
  let pendingDeleteType = null; // 'dish' or 'user'
  let pendingDeleteId = null;

  // =========================================================================
  // 2. BILINGUAL TRANSLATION ENGINE (EN / ID)
  // =========================================================================
  const flags = {
    en: `<svg class="flag-svg" viewBox="0 0 60 40" width="20" height="13">
          <clipPath id="uk-clip-admin"><rect width="60" height="40" rx="3"/></clipPath>
          <g clip-path="url(#uk-clip-admin)">
            <path fill="#012169" d="M0 0h60v40H0z"/>
            <path stroke="#fff" stroke-width="6" d="M0 0l60 40M60 0L0 40"/>
            <path stroke="#C8102E" stroke-width="4" d="M0 0l60 40M60 0L0 40"/>
            <path stroke="#fff" stroke-width="10" d="M30 0v40M0 20h60"/>
            <path stroke="#C8102E" stroke-width="6" d="M30 0v40M0 20h60"/>
          </g>
        </svg>`,
    id: `<svg class="flag-svg" viewBox="0 0 60 40" width="20" height="13">
          <clipPath id="id-clip-admin"><rect width="60" height="40" rx="3"/></clipPath>
          <g clip-path="url(#id-clip-admin)">
            <rect width="60" height="20" fill="#E70011"/>
            <rect y="20" width="60" height="20" fill="#FFFFFF"/>
            <rect width="60" height="40" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="1.5"/>
          </g>
        </svg>`
  };

  const translations = {
    en: {
      admin_portal_subtitle: 'Back Office & Management',
      system_online: 'System Live • Terminal Shift',
      btn_pos_terminal: 'Open POS Terminal',
      role_administrator: 'Administrator',
      ledger_title: 'Registry Summary',
      stat_total_dishes: 'Menu Dishes',
      stat_low_stock: 'Low Stock Watch',
      stat_low_stock_hint: 'Items ≤ 15 units',
      stat_staff_count: 'Registered Staff',
      stat_active_shift: 'Active on Shift',
      stat_inventory_value: 'Estimated Stock Value',
      stat_retail_value: 'Retail Price Value',
      tab_menu_mgmt: 'Menu Catalog Management',
      tab_user_mgmt: 'Cashier & Staff Users',
      cat_all: 'All',
      cat_makanan: 'Mains',
      cat_hotplate: 'Hotplate',
      cat_minuman: 'Drinks',
      cat_snack: 'Snacks',
      placeholder_search_dish: 'Search dish name, ID, price...',
      placeholder_search_user: 'Search cashier name, ID, role...',
      btn_add_dish: 'Add New Dish',
      btn_add_cashier: 'Add New Cashier',
      th_photo: 'Photo',
      th_dish_name: 'Dish Name',
      th_category: 'Category',
      th_price: 'Unit Price',
      th_stock: 'Inventory Stock',
      th_actions: 'Actions',
      th_avatar: 'Avatar',
      th_staff_name: 'Staff Member',
      th_staff_id: 'Staff ID / Username',
      th_role: 'Assigned Role',
      th_station: 'Station / Shift',
      th_status: 'Status',
      empty_dishes_title: 'No Dishes Found',
      empty_dishes_hint: 'Try adjusting your category filter or search keywords.',
      empty_users_title: 'No Staff Found',
      empty_users_hint: 'Try adjusting your role filter or search criteria.',
      role_all: 'All Staff',
      role_cashier: 'Cashier',
      role_head_cashier: 'Head Cashier',
      role_admin: 'Administrator',
      status_active: 'Active',
      status_leave: 'On Leave',
      status_inactive: 'Inactive',
      btn_edit: 'Edit',
      btn_delete: 'Delete',
      btn_cancel: 'Cancel',
      btn_save_dish: 'Save Dish',
      btn_save_user: 'Save Cashier',
      btn_confirm_delete: 'Delete Permanently',
      modal_add_dish_title: 'Add New Dish',
      modal_add_dish_sub: 'Fill in the dish specifications for the restaurant menu catalog.',
      modal_edit_dish_title: 'Edit Menu Dish',
      modal_edit_dish_sub: 'Update dish details, pricing, and inventory quantities.',
      modal_add_user_title: 'Add Cashier / Staff User',
      modal_add_user_sub: 'Configure account credentials and terminal station permissions.',
      modal_edit_user_title: 'Edit Staff Profile',
      modal_edit_user_sub: 'Update credentials, station assignment, or account status.',
      modal_delete_title: 'Confirm Deletion',
      modal_delete_sub: 'This action cannot be undone.',
      toast_dish_saved: 'Dish successfully saved!',
      toast_dish_deleted: 'Dish has been removed from catalog.',
      toast_user_saved: 'Cashier account saved successfully!',
      toast_user_deleted: 'Staff account has been removed.',
      toast_stock_updated: 'Stock adjusted successfully.'
    },
    id: {
      admin_portal_subtitle: 'Pusat Manajemen & Admin',
      system_online: 'Sistem Aktif • Shift Kasir',
      btn_pos_terminal: 'Buka POS Kasir',
      role_administrator: 'Administrator',
      ledger_title: 'Ringkasan Registrasi',
      stat_total_dishes: 'Menu Hidangan',
      stat_low_stock: 'Pantau Stok Menipis',
      stat_low_stock_hint: 'Stok ≤ 15 porsi',
      stat_staff_count: 'Staf Terdaftar',
      stat_active_shift: 'Aktif Bertugas',
      stat_inventory_value: 'Estimasi Nilai Stok',
      stat_retail_value: 'Nilai Harga Jual',
      tab_menu_mgmt: 'Manajemen Menu & Harga',
      tab_user_mgmt: 'Akun Kasir & Staf',
      cat_all: 'Semua',
      cat_makanan: 'Makanan',
      cat_hotplate: 'Hotplate',
      cat_minuman: 'Minuman',
      cat_snack: 'Camilan',
      placeholder_search_dish: 'Cari menu, kode ID, harga...',
      placeholder_search_user: 'Cari nama staf, ID, peran...',
      btn_add_dish: 'Tambah Menu Baru',
      btn_add_cashier: 'Tambah Kasir Baru',
      th_photo: 'Foto',
      th_dish_name: 'Nama Menu',
      th_category: 'Kategori',
      th_price: 'Harga Satuan',
      th_stock: 'Stok Tersedia',
      th_actions: 'Aksi',
      th_avatar: 'Foto',
      th_staff_name: 'Nama Staf',
      th_staff_id: 'ID Staf / Username',
      th_role: 'Peran Jabatan',
      th_station: 'Meja / Shift',
      th_status: 'Status',
      empty_dishes_title: 'Menu Tidak Ditemukan',
      empty_dishes_hint: 'Sesuaikan filter kategori atau kata kunci pencarian.',
      empty_users_title: 'Staf Tidak Ditemukan',
      empty_users_hint: 'Sesuaikan filter jabatan atau kata kunci pencarian.',
      role_all: 'Semua Staf',
      role_cashier: 'Kasir',
      role_head_cashier: 'Kepala Kasir',
      role_admin: 'Administrator',
      status_active: 'Aktif',
      status_leave: 'Cuti / Off',
      status_inactive: 'Nonaktif',
      btn_edit: 'Ubah',
      btn_delete: 'Hapus',
      btn_cancel: 'Batal',
      btn_save_dish: 'Simpan Menu',
      btn_save_user: 'Simpan Kasir',
      btn_confirm_delete: 'Hapus Permanen',
      modal_add_dish_title: 'Tambah Menu Baru',
      modal_add_dish_sub: 'Isi detail spesifikasi hidangan untuk katalog restoran.',
      modal_edit_dish_title: 'Ubah Menu Hidangan',
      modal_edit_dish_sub: 'Perbarui rincian, harga satuan, dan jumlah stok.',
      modal_add_user_title: 'Tambah Akun Kasir / Staf',
      modal_add_user_sub: 'Atur kredensial akun dan izin stasiun kerja kasir.',
      modal_edit_user_title: 'Ubah Profil Staf Kasir',
      modal_edit_user_sub: 'Perbarui informasi, stasiun tugas, atau status akun.',
      modal_delete_title: 'Konfirmasi Penghapusan',
      modal_delete_sub: 'Tindakan ini tidak dapat dibatalkan.',
      toast_dish_saved: 'Menu hidangan berhasil disimpan!',
      toast_dish_deleted: 'Menu berhasil dihapus dari katalog.',
      toast_user_saved: 'Akun kasir berhasil disimpan!',
      toast_user_deleted: 'Akun staf berhasil dihapus.',
      toast_stock_updated: 'Stok berhasil diperbarui.'
    }
  };

  let currentLang = localStorage.getItem('restaurant_lang') || 'en';

  function formatIDR(amount) {
    return 'Rp ' + Number(amount || 0).toLocaleString('id-ID');
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('restaurant_lang', lang);

    const activeFlag = document.getElementById('active-flag');
    const activeLangText = document.getElementById('active-lang-text');
    if (activeFlag) activeFlag.innerHTML = flags[lang];
    if (activeLangText) activeLangText.textContent = lang.toUpperCase();

    // Update choices UI
    document.querySelectorAll('.lang-choice').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update all i18n DOM attributes
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    renderMenuCatalog();
    renderUsersList();
    updateStats();
  }

  // Language Dropdown setup
  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });
    document.addEventListener('click', () => langDropdown.classList.remove('show'));
    document.querySelectorAll('.lang-choice').forEach((btn) => {
      btn.addEventListener('click', () => {
        setLanguage(btn.getAttribute('data-lang'));
        langDropdown.classList.remove('show');
      });
    });
  }

  // =========================================================================
  // 3. TOAST NOTIFICATIONS
  // =========================================================================
  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `retro-toast ${type}`;
    const icon = type === 'success' ? '✓' : '⚠️';
    toast.innerHTML = `<span class="toast-icon">${icon}</span> <span>${message}</span>`;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  }

  // =========================================================================
  // 4. STATS SUMMARY CALCULATION
  // =========================================================================
  function updateStats() {
    const statTotalItems = document.getElementById('stat-total-items');
    const statCategoryBreakdown = document.getElementById('stat-category-breakdown');
    const statLowStockCount = document.getElementById('stat-low-stock-count');
    const statTotalUsers = document.getElementById('stat-total-users');
    const statActiveUsers = document.getElementById('stat-active-users');
    const statInventoryValue = document.getElementById('stat-inventory-value');

    const totalDishes = menuItems.length;
    const lowStockDishes = menuItems.filter((m) => m.stock <= 15).length;
    const totalStaff = users.length;
    const activeStaff = users.filter((u) => u.status === 'active').length;

    let totalValuation = 0;
    menuItems.forEach((m) => {
      totalValuation += (m.price || 0) * (m.stock || 0);
    });

    if (statTotalItems) statTotalItems.textContent = totalDishes;
    if (statCategoryBreakdown) {
      const categories = new Set(menuItems.map((m) => m.category)).size;
      statCategoryBreakdown.textContent = `${categories} Categories`;
    }
    if (statLowStockCount) statLowStockCount.textContent = lowStockDishes;
    if (statTotalUsers) statTotalUsers.textContent = totalStaff;
    if (statActiveUsers) {
      statActiveUsers.textContent = `${activeStaff} ${translations[currentLang].stat_active_shift}`;
    }
    if (statInventoryValue) statInventoryValue.textContent = formatIDR(totalValuation);

    // Update Tab Badges
    const badgeMenuCount = document.getElementById('badge-menu-count');
    const badgeUsersCount = document.getElementById('badge-users-count');
    if (badgeMenuCount) badgeMenuCount.textContent = totalDishes;
    if (badgeUsersCount) badgeUsersCount.textContent = totalStaff;

    // Update Category Pill Badges
    const pillAll = document.getElementById('pill-count-all');
    const pillMakanan = document.getElementById('pill-count-makanan');
    const pillHotplate = document.getElementById('pill-count-hotplate');
    const pillMinuman = document.getElementById('pill-count-minuman');
    const pillSnack = document.getElementById('pill-count-snack');

    if (pillAll) pillAll.textContent = totalDishes;
    if (pillMakanan) pillMakanan.textContent = menuItems.filter((m) => m.category === 'makanan').length;
    if (pillHotplate) pillHotplate.textContent = menuItems.filter((m) => m.category === 'hotplate').length;
    if (pillMinuman) pillMinuman.textContent = menuItems.filter((m) => m.category === 'minuman').length;
    if (pillSnack) pillSnack.textContent = menuItems.filter((m) => m.category === 'snack').length;

    // Update Role Pill Badges
    const pillRoleAll = document.getElementById('pill-count-role-all');
    const pillRoleCashier = document.getElementById('pill-count-role-cashier');
    const pillRoleHead = document.getElementById('pill-count-role-head');
    const pillRoleAdmin = document.getElementById('pill-count-role-admin');

    if (pillRoleAll) pillRoleAll.textContent = totalStaff;
    if (pillRoleCashier) pillRoleCashier.textContent = users.filter((u) => u.role === 'cashier').length;
    if (pillRoleHead) pillRoleHead.textContent = users.filter((u) => u.role === 'head_cashier').length;
    if (pillRoleAdmin) pillRoleAdmin.textContent = users.filter((u) => u.role === 'admin').length;

    renderWatchlist();
  }

  // Render Low Stock Watchlist Feed in the Left Rail
  function renderWatchlist() {
    const container = document.getElementById('watchlist-items-container');
    if (!container) return;
    container.innerHTML = '';

    const lowStockItems = menuItems.filter((m) => m.stock <= 15);
    if (lowStockItems.length === 0) {
      container.innerHTML = `
        <div style="font-size: 0.74rem; color: var(--charcoal-500); font-style: italic; padding: 6px 0;">
          All dish inventory levels are healthy.
        </div>
      `;
      return;
    }

    lowStockItems.slice(0, 5).forEach((item) => {
      const row = document.createElement('div');
      row.className = 'watchlist-mini-item';
      const displayName = currentLang === 'en' ? item.name_en : item.name;
      row.innerHTML = `
        <div class="watchlist-mini-info">
          <span class="watchlist-mini-name" title="${displayName}">${displayName}</span>
          <span class="watchlist-mini-qty">${item.stock} left</span>
        </div>
        <button type="button" class="btn-mini-restock" title="Quick restock +5">+5 Restock</button>
      `;
      row.querySelector('.btn-mini-restock').addEventListener('click', () => {
        adjustStock(item.id, 5);
      });
      container.appendChild(row);
    });
  }

  // =========================================================================
  // 5. NAVIGATION TABS & DUAL-PANE WORKBENCH LOGIC
  // =========================================================================
  const navTabs = document.querySelectorAll('.admin-nav-tab');
  const tabContents = document.querySelectorAll('.admin-tab-content');
  const btnSidebarAction = document.getElementById('btn-sidebar-action');
  const labelSidebarAction = document.getElementById('label-sidebar-action');
  let currentActiveTab = 'section-menu';

  function updateSidebarActionButton() {
    if (!labelSidebarAction) return;
    if (currentActiveTab === 'section-menu') {
      labelSidebarAction.textContent = translations[currentLang].btn_add_dish;
    } else {
      labelSidebarAction.textContent = translations[currentLang].btn_add_cashier;
    }
  }

  navTabs.forEach((btn) => {
    btn.addEventListener('click', () => {
      navTabs.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabContents.forEach((c) => c.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const targetId = btn.getAttribute('data-target');
      currentActiveTab = targetId;
      const targetSection = document.getElementById(targetId);
      if (targetSection) targetSection.classList.add('active');
      updateSidebarActionButton();
    });
  });

  if (btnSidebarAction) {
    btnSidebarAction.addEventListener('click', () => {
      if (currentActiveTab === 'section-menu') {
        openAddDishModal();
      } else {
        openAddUserModal();
      }
    });
  }

  // =========================================================================
  // 6. MENU CATALOG CRUD (TABLE RENDERING & OPERATIONS)
  // =========================================================================
  const tbodyMenu = document.getElementById('tbody-menu-items');
  const emptyMenuState = document.getElementById('empty-menu-state');
  const inputSearchDish = document.getElementById('input-search-dish');
  const btnClearDishSearch = document.getElementById('btn-clear-dish-search');

  function renderMenuCatalog() {
    if (!tbodyMenu) return;
    tbodyMenu.innerHTML = '';

    const q = menuSearchQuery.trim().toLowerCase();
    const filtered = menuItems.filter((item) => {
      const matchCat = activeMenuCategory === 'all' || item.category === activeMenuCategory;
      const matchSearch =
        !q ||
        (item.name && item.name.toLowerCase().includes(q)) ||
        (item.name_en && item.name_en.toLowerCase().includes(q)) ||
        (item.id && item.id.toLowerCase().includes(q)) ||
        String(item.price).includes(q);
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      if (emptyMenuState) emptyMenuState.style.display = 'block';
      return;
    }

    if (emptyMenuState) emptyMenuState.style.display = 'none';

    filtered.forEach((item) => {
      const tr = document.createElement('tr');
      const isLowStock = item.stock <= 15;
      const categoryLabel = translations[currentLang][`cat_${item.category}`] || item.category;

      tr.innerHTML = `
        <td>
          <img src="${item.image}" alt="${item.name}" class="table-dish-photo" onerror="this.src='images/hero-food.jpg'">
        </td>
        <td>
          <div class="dish-cell-name">
            <span class="dish-main-title">${currentLang === 'en' ? item.name_en : item.name}</span>
            <span class="dish-en-sub">${currentLang === 'en' ? item.name : item.name_en}</span>
            <span class="dish-id-badge">#${item.id}</span>
          </div>
        </td>
        <td>
          <span class="category-badge ${item.category}">${categoryLabel}</span>
        </td>
        <td>
          <span class="price-cell">${formatIDR(item.price)}</span>
        </td>
        <td>
          <div class="stock-cell-wrap">
            <button type="button" class="quick-stock-btn btn-stock-minus" data-id="${item.id}" title="Decrease stock">−</button>
            <span class="stock-badge ${isLowStock ? 'low' : ''}">${item.stock}</span>
            <button type="button" class="quick-stock-btn btn-stock-plus" data-id="${item.id}" title="Increase stock">+</button>
          </div>
        </td>
        <td>
          <div class="action-buttons-cell">
            <button type="button" class="btn-table-edit" data-id="${item.id}" title="${translations[currentLang].btn_edit}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              <span>${translations[currentLang].btn_edit}</span>
            </button>
            <button type="button" class="btn-table-delete" data-id="${item.id}" title="${translations[currentLang].btn_delete}">✕</button>
          </div>
        </td>
      `;

      // Event listeners for quick actions
      tr.querySelector('.btn-stock-minus').addEventListener('click', () => adjustStock(item.id, -1));
      tr.querySelector('.btn-stock-plus').addEventListener('click', () => adjustStock(item.id, 1));
      tr.querySelector('.btn-table-edit').addEventListener('click', () => openEditDishModal(item.id));
      tr.querySelector('.btn-table-delete').addEventListener('click', () => confirmDeleteDish(item.id));

      tbodyMenu.appendChild(tr);
    });
  }

  function adjustStock(dishId, delta) {
    const dish = menuItems.find((m) => m.id === dishId);
    if (!dish) return;
    const newStock = Math.max(0, (dish.stock || 0) + delta);
    dish.stock = newStock;
    saveMenuItems(menuItems);
    showToast(translations[currentLang].toast_stock_updated, 'success');
  }

  // Category filter pills
  document.querySelectorAll('#section-menu .filter-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#section-menu .filter-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      activeMenuCategory = pill.getAttribute('data-cat') || 'all';
      renderMenuCatalog();
    });
  });

  // Dish Search
  if (inputSearchDish) {
    inputSearchDish.addEventListener('input', (e) => {
      menuSearchQuery = e.target.value;
      if (btnClearDishSearch) {
        btnClearDishSearch.style.display = menuSearchQuery ? 'block' : 'none';
      }
      renderMenuCatalog();
    });
  }

  if (btnClearDishSearch) {
    btnClearDishSearch.addEventListener('click', () => {
      inputSearchDish.value = '';
      menuSearchQuery = '';
      btnClearDishSearch.style.display = 'none';
      renderMenuCatalog();
      inputSearchDish.focus();
    });
  }

  // =========================================================================
  // 7. MENU ADD / EDIT MODAL LOGIC
  // =========================================================================
  const modalDishBackdrop = document.getElementById('modal-dish-backdrop');
  const btnOpenAddDish = document.getElementById('btn-open-add-dish');
  const btnCloseDishModal = document.getElementById('btn-close-dish-modal');
  const btnCancelDishModal = document.getElementById('btn-cancel-dish-modal');
  const formDishModal = document.getElementById('form-dish-modal');

  const dishFormMode = document.getElementById('dish-form-mode');
  const dishFormId = document.getElementById('dish-form-id');
  const modalDishTitle = document.getElementById('modal-dish-title');
  const inputDishNameId = document.getElementById('dish-name-id');
  const inputDishNameEn = document.getElementById('dish-name-en');
  const selectDishCategory = document.getElementById('dish-category');
  const inputDishPrice = document.getElementById('dish-price');
  const inputDishStock = document.getElementById('dish-stock');
  const inputDishImage = document.getElementById('dish-image');
  const previewImgEl = document.getElementById('preview-img-el');

  function openAddDishModal() {
    if (!modalDishBackdrop) return;
    dishFormMode.value = 'add';
    dishFormId.value = '';
    modalDishTitle.textContent = translations[currentLang].modal_add_dish_title;

    formDishModal.reset();
    previewImgEl.src = 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=400&q=80';
    inputDishImage.value = previewImgEl.src;
    modalDishBackdrop.style.display = 'flex';
  }

  function openEditDishModal(dishId) {
    const dish = menuItems.find((m) => m.id === dishId);
    if (!dish || !modalDishBackdrop) return;

    dishFormMode.value = 'edit';
    dishFormId.value = dish.id;
    modalDishTitle.textContent = translations[currentLang].modal_edit_dish_title;

    inputDishNameId.value = dish.name || '';
    inputDishNameEn.value = dish.name_en || '';
    selectDishCategory.value = dish.category || 'makanan';
    inputDishPrice.value = dish.price || 0;
    inputDishStock.value = dish.stock || 0;
    inputDishImage.value = dish.image || '';
    previewImgEl.src = dish.image || 'images/hero-food.jpg';

    modalDishBackdrop.style.display = 'flex';
  }

  function closeDishModal() {
    if (modalDishBackdrop) modalDishBackdrop.style.display = 'none';
  }

  if (btnOpenAddDish) btnOpenAddDish.addEventListener('click', openAddDishModal);
  if (btnCloseDishModal) btnCloseDishModal.addEventListener('click', closeDishModal);
  if (btnCancelDishModal) btnCancelDishModal.addEventListener('click', closeDishModal);

  // Live Image preview
  if (inputDishImage) {
    inputDishImage.addEventListener('input', (e) => {
      previewImgEl.src = e.target.value.trim() || 'images/hero-food.jpg';
    });
  }

  // Image Presets
  document.querySelectorAll('.preset-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const url = chip.getAttribute('data-img');
      if (url && inputDishImage) {
        inputDishImage.value = url;
        previewImgEl.src = url;
      }
    });
  });

  // Save Dish Submit
  if (formDishModal) {
    formDishModal.addEventListener('submit', (e) => {
      e.preventDefault();

      const mode = dishFormMode.value;
      const targetId = dishFormId.value;

      const nameId = inputDishNameId.value.trim();
      const nameEn = inputDishNameEn.value.trim();
      const category = selectDishCategory.value;
      const price = parseInt(inputDishPrice.value, 10) || 0;
      const stock = parseInt(inputDishStock.value, 10) || 0;
      const image = inputDishImage.value.trim() || 'images/hero-food.jpg';

      if (!nameId || !nameEn) {
        alert('Please fill in both Indonesian and English dish names.');
        return;
      }

      if (mode === 'add') {
        const newId = 'm' + Date.now().toString().slice(-4);
        menuItems.unshift({
          id: newId,
          name: nameId,
          name_en: nameEn,
          category,
          price,
          stock,
          image
        });
      } else {
        const existing = menuItems.find((m) => m.id === targetId);
        if (existing) {
          existing.name = nameId;
          existing.name_en = nameEn;
          existing.category = category;
          existing.price = price;
          existing.stock = stock;
          existing.image = image;
        }
      }

      saveMenuItems(menuItems);
      closeDishModal();
      showToast(translations[currentLang].toast_dish_saved, 'success');
    });
  }

  // =========================================================================
  // 8. STAFF USERS CRUD (TABLE RENDERING & OPERATIONS)
  // =========================================================================
  const tbodyUsers = document.getElementById('tbody-users-list');
  const emptyUsersState = document.getElementById('empty-users-state');
  const inputSearchUser = document.getElementById('input-search-user');
  const btnClearUserSearch = document.getElementById('btn-clear-user-search');

  function renderUsersList() {
    if (!tbodyUsers) return;
    tbodyUsers.innerHTML = '';

    const q = userSearchQuery.trim().toLowerCase();
    const filtered = users.filter((user) => {
      const matchRole = activeUserRole === 'all' || user.role === activeUserRole;
      const matchSearch =
        !q ||
        (user.fullName && user.fullName.toLowerCase().includes(q)) ||
        (user.username && user.username.toLowerCase().includes(q)) ||
        (user.station && user.station.toLowerCase().includes(q));
      return matchRole && matchSearch;
    });

    if (filtered.length === 0) {
      if (emptyUsersState) emptyUsersState.style.display = 'block';
      return;
    }

    if (emptyUsersState) emptyUsersState.style.display = 'none';

    filtered.forEach((user) => {
      const tr = document.createElement('tr');
      const initials = (user.fullName || 'User')
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();

      const roleLabel = translations[currentLang][`role_${user.role}`] || user.role;
      const statusLabel = translations[currentLang][`status_${user.status}`] || user.status;

      tr.innerHTML = `
        <td>
          <div class="staff-avatar-cell">${initials}</div>
        </td>
        <td>
          <div class="dish-cell-name">
            <span class="dish-main-title">${user.fullName}</span>
            <span class="dish-en-sub">PIN: ${user.pin ? '••••' : 'None'}</span>
          </div>
        </td>
        <td>
          <span class="dish-id-badge" style="font-size: 0.82rem; color: var(--brand-900); font-weight: 700;">${user.username}</span>
        </td>
        <td>
          <span class="role-badge ${user.role}">${roleLabel}</span>
        </td>
        <td>
          <span style="font-size: 0.8rem; color: var(--charcoal-700);">${user.station || 'Default Station'}</span>
        </td>
        <td>
          <span class="status-indicator ${user.status}">
            <span class="status-dot"></span>
            <span>${statusLabel}</span>
          </span>
        </td>
        <td>
          <div class="action-buttons-cell">
            <button type="button" class="btn-table-edit" data-id="${user.id}" title="${translations[currentLang].btn_edit}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              <span>${translations[currentLang].btn_edit}</span>
            </button>
            <button type="button" class="btn-table-delete" data-id="${user.id}" title="${translations[currentLang].btn_delete}">✕</button>
          </div>
        </td>
      `;

      tr.querySelector('.btn-table-edit').addEventListener('click', () => openEditUserModal(user.id));
      tr.querySelector('.btn-table-delete').addEventListener('click', () => confirmDeleteUser(user.id));

      tbodyUsers.appendChild(tr);
    });
  }

  // Role filter pills
  document.querySelectorAll('#section-users .filter-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#section-users .filter-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      activeUserRole = pill.getAttribute('data-role') || 'all';
      renderUsersList();
    });
  });

  // User search
  if (inputSearchUser) {
    inputSearchUser.addEventListener('input', (e) => {
      userSearchQuery = e.target.value;
      if (btnClearUserSearch) {
        btnClearUserSearch.style.display = userSearchQuery ? 'block' : 'none';
      }
      renderUsersList();
    });
  }

  if (btnClearUserSearch) {
    btnClearUserSearch.addEventListener('click', () => {
      inputSearchUser.value = '';
      userSearchQuery = '';
      btnClearUserSearch.style.display = 'none';
      renderUsersList();
      inputSearchUser.focus();
    });
  }

  // =========================================================================
  // 9. STAFF USER ADD / EDIT MODAL LOGIC
  // =========================================================================
  const modalUserBackdrop = document.getElementById('modal-user-backdrop');
  const btnOpenAddUser = document.getElementById('btn-open-add-user');
  const btnCloseUserModal = document.getElementById('btn-close-user-modal');
  const btnCancelUserModal = document.getElementById('btn-cancel-user-modal');
  const formUserModal = document.getElementById('form-user-modal');

  const userFormMode = document.getElementById('user-form-mode');
  const userFormId = document.getElementById('user-form-id');
  const modalUserTitle = document.getElementById('modal-user-title');
  const inputUserFullName = document.getElementById('user-full-name');
  const inputUserUsername = document.getElementById('user-username');
  const selectUserRole = document.getElementById('user-role');
  const inputUserPin = document.getElementById('user-pin');
  const userPinReq = document.getElementById('user-pin-req');
  const inputUserStation = document.getElementById('user-station');
  const selectUserStatus = document.getElementById('user-status');

  function openAddUserModal() {
    if (!modalUserBackdrop) return;
    userFormMode.value = 'add';
    userFormId.value = '';
    modalUserTitle.textContent = translations[currentLang].modal_add_user_title;

    formUserModal.reset();
    inputUserPin.required = true;
    if (userPinReq) userPinReq.style.display = 'inline';

    modalUserBackdrop.style.display = 'flex';
  }

  function openEditUserModal(userId) {
    const user = users.find((u) => u.id === userId);
    if (!user || !modalUserBackdrop) return;

    userFormMode.value = 'edit';
    userFormId.value = user.id;
    modalUserTitle.textContent = translations[currentLang].modal_edit_user_title;

    inputUserFullName.value = user.fullName || '';
    inputUserUsername.value = user.username || '';
    selectUserRole.value = user.role || 'cashier';
    inputUserPin.value = '';
    inputUserPin.required = false;
    if (userPinReq) userPinReq.style.display = 'none';
    inputUserStation.value = user.station || '';
    selectUserStatus.value = user.status || 'active';

    modalUserBackdrop.style.display = 'flex';
  }

  function closeUserModal() {
    if (modalUserBackdrop) modalUserBackdrop.style.display = 'none';
  }

  if (btnOpenAddUser) btnOpenAddUser.addEventListener('click', openAddUserModal);
  if (btnCloseUserModal) btnCloseUserModal.addEventListener('click', closeUserModal);
  if (btnCancelUserModal) btnCancelUserModal.addEventListener('click', closeUserModal);

  // Save User Submit
  if (formUserModal) {
    formUserModal.addEventListener('submit', (e) => {
      e.preventDefault();

      const mode = userFormMode.value;
      const targetId = userFormId.value;

      const fullName = inputUserFullName.value.trim();
      const username = inputUserUsername.value.trim();
      const role = selectUserRole.value;
      const pin = inputUserPin.value.trim();
      const station = inputUserStation.value.trim() || 'Front Desk Station';
      const status = selectUserStatus.value;

      if (!fullName || !username) {
        alert('Please fill in both full name and staff username.');
        return;
      }

      if (mode === 'add') {
        if (!pin) {
          alert('Please provide a PIN / Password for this cashier.');
          return;
        }
        const newId = 'u' + Date.now().toString().slice(-4);
        users.unshift({
          id: newId,
          fullName,
          username,
          role,
          pin,
          station,
          status
        });
      } else {
        const existing = users.find((u) => u.id === targetId);
        if (existing) {
          existing.fullName = fullName;
          existing.username = username;
          existing.role = role;
          if (pin) existing.pin = pin; // only update if entered
          existing.station = station;
          existing.status = status;
        }
      }

      saveUsers(users);
      closeUserModal();
      showToast(translations[currentLang].toast_user_saved, 'success');
    });
  }

  // =========================================================================
  // 10. DELETE CONFIRMATION DIALOG LOGIC
  // =========================================================================
  const modalDeleteBackdrop = document.getElementById('modal-delete-backdrop');
  const btnCloseDeleteModal = document.getElementById('btn-close-delete-modal');
  const btnCancelDelete = document.getElementById('btn-cancel-delete');
  const btnConfirmDelete = document.getElementById('btn-confirm-delete');
  const deleteTargetPreview = document.getElementById('delete-target-preview');

  function confirmDeleteDish(dishId) {
    const dish = menuItems.find((m) => m.id === dishId);
    if (!dish || !modalDeleteBackdrop) return;
    pendingDeleteType = 'dish';
    pendingDeleteId = dish.id;
    if (deleteTargetPreview) deleteTargetPreview.textContent = dish.name;
    modalDeleteBackdrop.style.display = 'flex';
  }

  function confirmDeleteUser(userId) {
    const user = users.find((u) => u.id === userId);
    if (!user || !modalDeleteBackdrop) return;
    pendingDeleteType = 'user';
    pendingDeleteId = user.id;
    if (deleteTargetPreview) deleteTargetPreview.textContent = `${user.fullName} (${user.username})`;
    modalDeleteBackdrop.style.display = 'flex';
  }

  function closeDeleteModal() {
    if (modalDeleteBackdrop) modalDeleteBackdrop.style.display = 'none';
    pendingDeleteType = null;
    pendingDeleteId = null;
  }

  if (btnCloseDeleteModal) btnCloseDeleteModal.addEventListener('click', closeDeleteModal);
  if (btnCancelDelete) btnCancelDelete.addEventListener('click', closeDeleteModal);

  if (btnConfirmDelete) {
    btnConfirmDelete.addEventListener('click', () => {
      if (pendingDeleteType === 'dish' && pendingDeleteId) {
        menuItems = menuItems.filter((m) => m.id !== pendingDeleteId);
        saveMenuItems(menuItems);
        showToast(translations[currentLang].toast_dish_deleted, 'success');
      } else if (pendingDeleteType === 'user' && pendingDeleteId) {
        users = users.filter((u) => u.id !== pendingDeleteId);
        saveUsers(users);
        showToast(translations[currentLang].toast_user_deleted, 'success');
      }
      closeDeleteModal();
    });
  }

  // Close modals on backdrop click
  [modalDishBackdrop, modalUserBackdrop, modalDeleteBackdrop].forEach((backdrop) => {
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) backdrop.style.display = 'none';
      });
    }
  });

  // =========================================================================
  // 11. INITIALIZE DASHBOARD
  // =========================================================================
  setLanguage(currentLang);
});
