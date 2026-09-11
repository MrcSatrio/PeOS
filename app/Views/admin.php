<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Retro Billiard | Back Office &amp; Management Dashboard</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700;800&display=swap"
        rel="stylesheet">

    <!-- Admin Stylesheet -->
    <link rel="stylesheet" href="<?= base_url('css/admin.css') ?>">
</head>

<body>
    <div class="admin-app">

        <!-- =============================================================
             TOP BRAND & NAVIGATION BAR
             ============================================================= -->
        <header class="admin-header">
            <div class="admin-brand-group">
                <div class="admin-brand">
                    <img src="<?= base_url('images/logo.jpg') ?>" alt="Retro Billiard Logo" class="admin-brand-logo">
                    <div class="admin-brand-text">
                        <span class="brand-title">RETRO BILLIARD</span>
                        <span class="brand-divider" aria-hidden="true"></span>
                        <span class="brand-station" data-i18n="admin_portal_subtitle">Back Office &amp; Management</span>
                    </div>
                </div>
            </div>

            <!-- Integrated Navigation Pill Switcher (Replaces AI-like glowing pill) -->
            <div class="admin-header-center">
                <div class="admin-nav-switcher" role="tablist" aria-label="Management Sections">
                    <button type="button" class="admin-nav-tab active" id="tab-menu" data-target="section-menu" role="tab" aria-selected="true">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
                            <path d="M7 2v20"></path>
                            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
                        </svg>
                        <span data-i18n="tab_menu_mgmt">Menu Catalog</span>
                        <span class="nav-count-badge" id="badge-menu-count">16</span>
                    </button>

                    <button type="button" class="admin-nav-tab" id="tab-users" data-target="section-users" role="tab" aria-selected="false">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <line x1="19" y1="8" x2="19" y2="14"></line>
                            <line x1="22" y1="11" x2="16" y2="11"></line>
                        </svg>
                        <span data-i18n="tab_user_mgmt">Cashier &amp; Staff</span>
                        <span class="nav-count-badge" id="badge-users-count"><?= count($users) ?></span>
                    </button>
                </div>
            </div>

            <!-- Action Controls: POS Switcher, Language & Admin Profile -->
            <div class="admin-header-actions">
                <!-- Direct Jump to POS Cashier Terminal -->
                <a href="<?= base_url('pos') ?>" class="btn-pos-shortcut" title="Open Cashier POS Terminal">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                    <span data-i18n="btn_pos_terminal">Open POS Terminal</span>
                </a>

                <!-- Bilingual Switcher (EN / ID) -->
                <div class="lang-switch-dropdown" id="lang-menu">
                    <button type="button" class="lang-toggle-btn" id="lang-btn" aria-haspopup="true" aria-expanded="false" title="Switch Language / Ganti Bahasa">
                        <span class="flag-icon" id="active-flag">
                            <svg class="flag-svg" viewBox="0 0 60 40" width="20" height="13">
                                <clipPath id="uk-clip-admin"><rect width="60" height="40" rx="3"/></clipPath>
                                <g clip-path="url(#uk-clip-admin)">
                                    <path fill="#012169" d="M0 0h60v40H0z"/>
                                    <path stroke="#fff" stroke-width="6" d="M0 0l60 40M60 0L0 40"/>
                                    <path stroke="#C8102E" stroke-width="4" d="M0 0l60 40M60 0L0 40"/>
                                    <path stroke="#fff" stroke-width="10" d="M30 0v40M0 20h60"/>
                                    <path stroke="#C8102E" stroke-width="6" d="M30 0v40M0 20h60"/>
                                </g>
                            </svg>
                        </span>
                        <span class="lang-text" id="active-lang-text">EN</span>
                        <svg class="lang-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                    <div class="lang-dropdown-panel" id="lang-dropdown">
                        <button type="button" class="lang-choice active" data-lang="en">
                            <svg class="flag-svg" viewBox="0 0 60 40" width="20" height="13">
                                <clipPath id="uk-clip-opt-admin"><rect width="60" height="40" rx="3"/></clipPath>
                                <g clip-path="url(#uk-clip-opt-admin)">
                                    <path fill="#012169" d="M0 0h60v40H0z"/>
                                    <path stroke="#fff" stroke-width="6" d="M0 0l60 40M60 0L0 40"/>
                                    <path stroke="#C8102E" stroke-width="4" d="M0 0l60 40M60 0L0 40"/>
                                    <path stroke="#fff" stroke-width="10" d="M30 0v40M0 20h60"/>
                                    <path stroke="#C8102E" stroke-width="6" d="M30 0v40M0 20h60"/>
                                </g>
                            </svg>
                            <span>English</span>
                        </button>
                        <button type="button" class="lang-choice" data-lang="id">
                            <svg class="flag-svg" viewBox="0 0 60 40" width="20" height="13">
                                <clipPath id="id-clip-opt-admin"><rect width="60" height="40" rx="3"/></clipPath>
                                <g clip-path="url(#id-clip-opt-admin)">
                                    <rect width="60" height="20" fill="#E70011"/>
                                    <rect y="20" width="60" height="20" fill="#FFFFFF"/>
                                    <rect width="60" height="40" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="1.5"/>
                                </g>
                            </svg>
                            <span>Indonesia</span>
                        </button>
                    </div>
                </div>

                <!-- Admin Profile Pill -->
                <div class="admin-profile-pill">
                    <div class="admin-avatar">
                        <span>AD</span>
                    </div>
                    <div class="admin-user-info">
                        <span class="admin-user-name">Admin Master</span>
                        <span class="admin-user-role" data-i18n="role_administrator">Administrator</span>
                    </div>
                </div>

                <!-- Exit / Sign Out Button -->
                <a href="<?= base_url('logout') ?>" class="admin-exit-btn" title="Sign Out to Login" data-i18n-title="sign_out">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                </a>
            </div>
        </header>

        <!-- =============================================================
             DUAL-PANE WORKBENCH (No generic 4-stat cards!)
             ============================================================= -->
        <main class="admin-workbench">

            <!-- =========================================================
                 LEFT RAIL: Registry Ledger & Low Stock Watchlist
                 ========================================================= -->
            <aside class="admin-sidebar-rail">
                <!-- Interactive Low Stock Watchlist Feed -->
                <div class="watchlist-card">
                    <div class="watchlist-header">
                        <div class="watchlist-title-wrap">
                            <span class="watchlist-indicator"></span>
                            <h4 data-i18n="stat_low_stock">Low Stock Watch</h4>
                        </div>
                        <span class="watchlist-badge-count" id="stat-low-stock-count">0</span>
                    </div>
                    <p class="watchlist-hint" data-i18n="stat_low_stock_hint">Dishes with ≤ 15 units remaining</p>
                    <div class="watchlist-items-list" id="watchlist-items-container">
                        <!-- Populated by admin.js with quick restock buttons -->
                    </div>
                </div>

                <!-- Primary Contextual Action Button -->
                <div class="sidebar-action-box">
                    <button type="button" class="btn-sidebar-add" id="btn-sidebar-action">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        <span id="label-sidebar-action" data-i18n="btn_add_dish">Add New Dish</span>
                    </button>
                </div>
            </aside>

            <!-- =========================================================
                 RIGHT MAIN: Operations Canvas
                 ========================================================= -->
            <div class="admin-main-canvas">

                <!-- SECTION 1: MENU CATALOG MANAGEMENT -->
                <section class="admin-tab-content active" id="section-menu">
                    <div class="canvas-panel-card">
                        <!-- Control Bar: Category Filters & Search -->
                        <div class="canvas-control-bar">
                            <div class="filter-pills" role="radiogroup" aria-label="Category Filters">
                                <button type="button" class="filter-pill active" data-cat="all">
                                    <span data-i18n="cat_all">All</span>
                                    <span class="pill-badge" id="pill-count-all">16</span>
                                </button>
                                <button type="button" class="filter-pill" data-cat="makanan">
                                    <span data-i18n="cat_makanan">Mains</span>
                                    <span class="pill-badge" id="pill-count-makanan">6</span>
                                </button>
                                <button type="button" class="filter-pill" data-cat="hotplate">
                                    <span data-i18n="cat_hotplate">Hotplate</span>
                                    <span class="pill-badge" id="pill-count-hotplate">3</span>
                                </button>
                                <button type="button" class="filter-pill" data-cat="minuman">
                                    <span data-i18n="cat_minuman">Drinks</span>
                                    <span class="pill-badge" id="pill-count-minuman">4</span>
                                </button>
                                <button type="button" class="filter-pill" data-cat="snack">
                                    <span data-i18n="cat_snack">Snacks</span>
                                    <span class="pill-badge" id="pill-count-snack">3</span>
                                </button>
                            </div>

                            <div class="canvas-actions-right">
                                <div class="admin-search-wrapper">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                    <input type="text" id="input-search-dish" placeholder="Search dish name, ID, price..." data-i18n-placeholder="placeholder_search_dish">
                                    <button type="button" class="search-clear-btn" id="btn-clear-dish-search" style="display: none;">✕</button>
                                </div>
                            </div>
                        </div>

                        <!-- Menu Items Table -->
                        <div class="table-responsive-container">
                            <table class="retro-table" id="table-menu-items">
                                <thead>
                                    <tr>
                                        <th style="width: 70px;" data-i18n="th_photo">Photo</th>
                                        <th data-i18n="th_dish_name">Dish Name</th>
                                        <th style="width: 140px;" data-i18n="th_category">Category</th>
                                        <th style="width: 150px;" data-i18n="th_price">Unit Price</th>
                                        <th style="width: 190px;" data-i18n="th_stock">Inventory Stock</th>
                                        <th style="width: 160px; text-align: right;" data-i18n="th_actions">Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="tbody-menu-items">
                                    <!-- Populated by admin.js -->
                                </tbody>
                            </table>

                            <div class="empty-table-state" id="empty-menu-state" style="display: none;">
                                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                </svg>
                                <h4 data-i18n="empty_dishes_title">No Dishes Found</h4>
                                <p data-i18n="empty_dishes_hint">Try adjusting your category filter or search keywords.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- SECTION 2: CASHIER & STAFF USERS MANAGEMENT -->
                <section class="admin-tab-content" id="section-users">
                    <div class="canvas-panel-card">
                        <!-- Control Bar: Role Filters & Search -->
                        <div class="canvas-control-bar">
                            <div class="filter-pills" role="radiogroup" aria-label="Role Filters">
                                <button type="button" class="filter-pill active" data-role="all">
                                    <span data-i18n="role_all">All Staff</span>
                                    <span class="pill-badge" id="pill-count-role-all"><?= count($users) ?></span>
                                </button>
                                <?php foreach ($roles as $role): ?>
                                    <button type="button" class="filter-pill" data-role="<?= esc($role['id_role']) ?>">
                                        <span><?= esc($role['nama_role']) ?></span>
                                        <span class="pill-badge"><?= count(array_filter($users, static fn ($user) => (int) $user['id_role'] === (int) $role['id_role'])) ?></span>
                                    </button>
                                <?php endforeach; ?>
                            </div>

                            <div class="canvas-actions-right">
                                <div class="admin-search-wrapper">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                    <input type="text" id="input-search-user" placeholder="Search cashier name, ID, role..." data-i18n-placeholder="placeholder_search_user">
                                    <button type="button" class="search-clear-btn" id="btn-clear-user-search" style="display: none;">✕</button>
                                </div>
                            </div>
                        </div>

                        <!-- Staff Members Table -->
                        <div class="table-responsive-container">
                            <table class="retro-table" id="table-users-list">
                                <thead>
                                    <tr>
                                        <th style="width: 70px;" data-i18n="th_avatar">Avatar</th>
                                        <th data-i18n="th_staff_name">Staff Member</th>
                                        <th style="width: 170px;" data-i18n="th_staff_id">Staff ID / Username</th>
                                        <th style="width: 160px;" data-i18n="th_role">Assigned Role</th>
                                        <th style="width: 160px; text-align: right;" data-i18n="th_actions">Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="tbody-users-list">
                                    <?php foreach ($users as $user): ?>
                                        <?php
                                        $roleId = (int) $user['id_role'];
                                        $roleKey = 'role-' . $roleId;
                                        $roleName = $user['nama_role'] ?? ($roleId === 1 ? 'Administrator' : ($roleId === 2 ? 'Cashier' : 'Unknown'));
                                        $initials = strtoupper(substr($user['username'], 0, 2));
                                        ?>
                                        <tr data-user-role="<?= esc($roleId) ?>" data-user-search="<?= esc(strtolower($user['username'] . ' ' . $roleName)) ?>">
                                            <td><div class="staff-avatar-cell"><?= esc($initials) ?></div></td>
                                            <td>
                                                <div class="dish-cell-name">
                                                    <span class="dish-main-title"><?= esc($user['username']) ?></span>
                                                </div>
                                            </td>
                                            <td><span class="dish-id-badge" style="font-size: 0.82rem; color: var(--brand-900); font-weight: 700;"><?= esc($user['username']) ?></span></td>
                                            <td><span class="role-badge <?= esc($roleKey) ?>"><?= esc($roleName) ?></span></td>
                                            <td>
                                                <div class="action-buttons-cell">
                                                    <button type="button" class="btn-table-edit btn-edit-user" data-id="<?= esc($user['id_user']) ?>" title="Edit user">Edit</button>
                                                    <button type="button" class="btn-table-delete btn-delete-user" data-id="<?= esc($user['id_user']) ?>" title="Delete user">✕</button>
                                                </div>
                                            </td>
                                        </tr>
                                    <?php endforeach; ?>
                                </tbody>
                            </table>

                            <div class="empty-table-state" id="empty-users-state" style="display: none;">
                                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <line x1="18" y1="8" x2="23" y2="13"></line>
                                    <line x1="23" y1="8" x2="18" y2="13"></line>
                                </svg>
                                <h4 data-i18n="empty_users_title">No Staff Found</h4>
                                <p data-i18n="empty_users_hint">Try adjusting your role filter or search criteria.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    </div>

    <!-- =================================================================
         MODAL 1: ADD / EDIT DISH DIALOG
         ================================================================= -->
    <div class="retro-modal-backdrop" id="modal-dish-backdrop" style="display: none;">
        <div class="retro-modal-window" role="dialog" aria-labelledby="modal-dish-title" aria-modal="true">
            <header class="modal-header">
                <div class="modal-title-wrap">
                    <span class="modal-icon-badge">🍽️</span>
                    <div>
                        <h3 class="modal-title" id="modal-dish-title" data-i18n="modal_add_dish_title">Add New Dish</h3>
                        <p class="modal-subtitle" data-i18n="modal_add_dish_sub">Fill in the dish specifications for the restaurant menu catalog.</p>
                    </div>
                </div>
                <button type="button" class="modal-close-btn" id="btn-close-dish-modal" aria-label="Close">✕</button>
            </header>

            <form id="form-dish-modal">
                <input type="hidden" id="dish-form-mode" value="add">
                <input type="hidden" id="dish-form-id" value="">

                <div class="modal-body-grid">
                    <!-- Dish Name Indonesian -->
                    <div class="form-group-retro">
                        <label for="dish-name-id" class="retro-label">
                            <span data-i18n="label_name_id">Dish Name (Indonesian)</span>
                            <span class="req">*</span>
                        </label>
                        <input type="text" id="dish-name-id" class="retro-input" placeholder="e.g. Ayam Bakar Madu Spesial" required>
                    </div>

                    <!-- Dish Name English -->
                    <div class="form-group-retro">
                        <label for="dish-name-en" class="retro-label">
                            <span data-i18n="label_name_en">Dish Name (English)</span>
                            <span class="req">*</span>
                        </label>
                        <input type="text" id="dish-name-en" class="retro-input" placeholder="e.g. Honey Glazed Grilled Chicken" required>
                    </div>

                    <!-- Category Selection -->
                    <div class="form-group-retro">
                        <label for="dish-category" class="retro-label">
                            <span data-i18n="label_category">Category</span>
                            <span class="req">*</span>
                        </label>
                        <select id="dish-category" class="retro-select" required>
                            <option value="makanan" data-i18n="cat_makanan">Mains / Makanan</option>
                            <option value="hotplate" data-i18n="cat_hotplate">Hotplate</option>
                            <option value="minuman" data-i18n="cat_minuman">Drinks / Minuman</option>
                            <option value="snack" data-i18n="cat_snack">Snacks / Camilan</option>
                        </select>
                    </div>

                    <!-- Unit Price (IDR) -->
                    <div class="form-group-retro">
                        <label for="dish-price" class="retro-label">
                            <span data-i18n="label_price">Unit Price (IDR)</span>
                            <span class="req">*</span>
                        </label>
                        <div class="input-with-affix">
                            <span class="affix-prefix">Rp</span>
                            <input type="number" id="dish-price" class="retro-input" placeholder="35000" min="0" step="500" required>
                        </div>
                    </div>

                    <!-- Initial / Current Stock -->
                    <div class="form-group-retro">
                        <label for="dish-stock" class="retro-label">
                            <span data-i18n="label_stock">Inventory Stock</span>
                            <span class="req">*</span>
                        </label>
                        <input type="number" id="dish-stock" class="retro-input" placeholder="25" min="0" required>
                    </div>

                    <!-- Image URL Field -->
                    <div class="form-group-retro span-full">
                        <label for="dish-image" class="retro-label">
                            <span data-i18n="label_image_url">Photo Image URL / Asset</span>
                            <span class="req">*</span>
                        </label>
                        <div class="image-input-row">
                            <input type="url" id="dish-image" class="retro-input" placeholder="https://images.unsplash.com/... or images/hero-food.jpg" required>
                            <div class="image-preview-box" id="dish-image-preview">
                                <img src="<?= base_url('images/hero-food.jpg') ?>" alt="Preview" id="preview-img-el">
                            </div>
                        </div>

                        <!-- Quick Sample Preset Photos -->
                        <div class="sample-images-row">
                            <span class="sample-label" data-i18n="label_presets">Quick Photo Presets:</span>
                            <button type="button" class="preset-chip" data-img="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=400&q=80">🍗 Chicken</button>
                            <button type="button" class="preset-chip" data-img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80">🍔 Burger</button>
                            <button type="button" class="preset-chip" data-img="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80">🥩 Steak</button>
                            <button type="button" class="preset-chip" data-img="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80">🍹 Cocktail</button>
                            <button type="button" class="preset-chip" data-img="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=400&q=80">🍟 Fries</button>
                        </div>
                    </div>
                </div>

                <footer class="modal-footer">
                    <button type="button" class="btn-retro-secondary" id="btn-cancel-dish-modal" data-i18n="btn_cancel">Cancel</button>
                    <button type="submit" class="btn-retro-primary" id="btn-save-dish">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                            <polyline points="17 21 17 13 7 13 7 21"></polyline>
                            <polyline points="7 3 7 8 15 8"></polyline>
                        </svg>
                        <span data-i18n="btn_save_dish">Save Dish</span>
                    </button>
                </footer>
            </form>
        </div>
    </div>

    <!-- =================================================================
         MODAL 2: ADD / EDIT CASHIER & STAFF USER DIALOG
         ================================================================= -->
    <div class="retro-modal-backdrop" id="modal-user-backdrop" style="display: none;">
        <div class="retro-modal-window" role="dialog" aria-labelledby="modal-user-title" aria-modal="true">
            <header class="modal-header">
                <div class="modal-title-wrap">
                    <span class="modal-icon-badge">👤</span>
                    <div>
                        <h3 class="modal-title" id="modal-user-title" data-i18n="modal_add_user_title">Add Cashier / Staff User</h3>
                        <p class="modal-subtitle" data-i18n="modal_add_user_sub">Configure account credentials and terminal station permissions.</p>
                    </div>
                </div>
                <button type="button" class="modal-close-btn" id="btn-close-user-modal" aria-label="Close">✕</button>
            </header>

            <form id="form-user-modal">
                <input type="hidden" id="user-form-mode" value="add">
                <input type="hidden" id="user-form-id" value="">

                <div class="modal-body-grid">
                    <!-- Username / Staff ID -->
                    <div class="form-group-retro">
                        <label for="user-username" class="retro-label">
                            <span data-i18n="label_staff_username">Staff ID / Username</span>
                            <span class="req">*</span>
                        </label>
                        <input type="text" id="user-username" class="retro-input" placeholder="e.g. cashier_siti or CASH-02" required>
                    </div>

                    <!-- Assigned Role -->
                    <div class="form-group-retro">
                        <label for="user-role" class="retro-label">
                            <span data-i18n="label_role">System Role</span>
                            <span class="req">*</span>
                        </label>
                        <select id="user-role" class="retro-select" required>
                            <?php foreach ($roles as $role): ?>
                                <option value="<?= esc($role['id_role']) ?>"><?= esc($role['nama_role']) ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>

                    <!-- Password / PIN -->
                    <div class="form-group-retro">
                        <label for="user-pin" class="retro-label">
                            <span data-i18n="label_pin">Password</span>
                            <span class="req" id="user-pin-req">*</span>
                        </label>
                        <input type="password" id="user-pin" class="retro-input" placeholder="••••••" minlength="4">
                        <small class="field-hint" id="pin-hint" data-i18n="pin_hint">4-6 digit numeric PIN or alphanumeric password.</small>
                    </div>

                </div>

                <footer class="modal-footer">
                    <button type="button" class="btn-retro-secondary" id="btn-cancel-user-modal" data-i18n="btn_cancel">Cancel</button>
                    <button type="submit" class="btn-retro-primary" id="btn-save-user">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <polyline points="16 11 18 13 22 9"></polyline>
                        </svg>
                        <span data-i18n="btn_save_user">Save Cashier</span>
                    </button>
                </footer>
            </form>
        </div>
    </div>

    <!-- =================================================================
         MODAL 3: DELETE CONFIRMATION DIALOG
         ================================================================= -->
    <div class="retro-modal-backdrop" id="modal-delete-backdrop" style="display: none;">
        <div class="retro-modal-window modal-window-sm" role="dialog" aria-labelledby="modal-delete-title" aria-modal="true">
            <header class="modal-header modal-header-danger">
                <div class="modal-title-wrap">
                    <span class="modal-icon-badge danger">⚠️</span>
                    <div>
                        <h3 class="modal-title" id="modal-delete-title" data-i18n="modal_delete_title">Confirm Deletion</h3>
                        <p class="modal-subtitle" data-i18n="modal_delete_sub">This action cannot be undone.</p>
                    </div>
                </div>
                <button type="button" class="modal-close-btn" id="btn-close-delete-modal" aria-label="Close">✕</button>
            </header>

            <div class="modal-body-confirm">
                <p id="delete-prompt-text">Are you sure you want to permanently delete this item?</p>
                <div class="delete-item-pill" id="delete-target-preview">Target Name</div>
            </div>

            <footer class="modal-footer">
                <button type="button" class="btn-retro-secondary" id="btn-cancel-delete" data-i18n="btn_cancel">Cancel</button>
                <button type="button" class="btn-retro-danger" id="btn-confirm-delete">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                    <span data-i18n="btn_confirm_delete">Delete Permanently</span>
                </button>
            </footer>
        </div>
    </div>

    <!-- Toast Notification Container -->
    <div class="toast-container" id="toast-container" aria-live="polite"></div>

    <!-- Admin Logic JavaScript -->
    <script>
        window.baseUrl = <?= json_encode(rtrim(base_url(), '/') . '/') ?>;
        window.adminUsers = <?= json_encode(array_map(static function (array $user): array {
            return [
                'id' => (string) $user['id_user'],
                'username' => $user['username'],
                'role' => (string) $user['id_role'],
            ];
        }, $users), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP) ?>;
    </script>
    <script src="<?= base_url('js/admin.js') ?>"></script>
</body>

</html>
