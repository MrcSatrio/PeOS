<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Retro Billiard | Reception &amp; Cashier POS Terminal</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap"
        rel="stylesheet">

    <!-- Stylesheet -->
    <link rel="stylesheet" href="<?= base_url('css/pos.css') ?>">
</head>

<body>
    <div class="pos-app">

        <!-- =============================================================
             TOP HEADER BAR: Reception & Cashier Navigation
             ============================================================= -->
        <header class="pos-header">
            <!-- Brand & Reception Identity -->
            <div class="header-brand-group">
                <button type="button" class="header-icon-btn" id="btn-sidebar-toggle" aria-label="Navigation Menu">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>

                <div class="pos-brand">
                    <img src="<?= base_url('images/logo.jpg') ?>" alt="Retro Billiard Logo" class="pos-brand-logo">
                    <div class="pos-brand-text">
                        <span class="brand-title">RETRO BILLIARD</span>
                        <span class="brand-station" data-i18n="pos_station">Cashier &amp; Front Desk #01</span>
                    </div>
                </div>
            </div>

            <!-- Central Live Search Input -->
            <div class="header-search-group">
                <div class="pos-search-wrapper">
                    <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input type="text" id="pos-search-input" placeholder="Search food, drinks or menu code..." data-i18n-placeholder="search_placeholder" autocomplete="off">
                    <button type="button" class="search-clear-btn" id="btn-clear-search" style="display: none;" title="Clear search">✕</button>
                </div>
            </div>

            <!-- Cashier Meta, Language Switch & Action Controls -->
            <div class="header-actions-group">
                <!-- Kitchen Queue Count Badge -->
                <button type="button" class="kitchen-queue-btn" id="btn-kitchen-queue" title="View Kitchen Queue">
                    <svg class="queue-svg-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                    </svg>
                    <span class="queue-info">
                        <strong id="queue-counter">12</strong>
                        <small data-i18n="queue_label">Queue</small>
                    </span>
                </button>

                <!-- Language Switcher Dropdown (EN / ID) -->
                <div class="lang-switch-dropdown" id="lang-menu">
                    <button type="button" class="lang-toggle-btn" id="lang-btn" aria-haspopup="true" aria-expanded="false" title="Switch Language / Ganti Bahasa">
                        <span class="flag-icon" id="active-flag">
                            <svg class="flag-svg" viewBox="0 0 60 40" width="20" height="13">
                                <clipPath id="uk-clip-pos"><rect width="60" height="40" rx="3"/></clipPath>
                                <g clip-path="url(#uk-clip-pos)">
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
                                <clipPath id="uk-clip-opt-pos"><rect width="60" height="40" rx="3"/></clipPath>
                                <g clip-path="url(#uk-clip-opt-pos)">
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
                                <clipPath id="id-clip-opt-pos"><rect width="60" height="40" rx="3"/></clipPath>
                                <g clip-path="url(#id-clip-opt-pos)">
                                    <rect width="60" height="20" fill="#E70011"/>
                                    <rect y="20" width="60" height="20" fill="#FFFFFF"/>
                                    <rect width="60" height="40" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="1.5"/>
                                </g>
                            </svg>
                            <span>Indonesia</span>
                        </button>
                    </div>
                </div>

                <!-- Cashier User Pill -->
                <div class="cashier-profile-pill">
                    <div class="cashier-avatar">
                        <span>NA</span>
                    </div>
                    <div class="cashier-info">
                        <span class="cashier-name">Novan Adrian</span>
                        <span class="cashier-role" data-i18n="cashier_role">Head Cashier</span>
                    </div>
                </div>

                <!-- Admin Back Office Shortcut -->
                <a href="<?= base_url('admin') ?>" class="header-admin-btn" title="Open Admin Back Office" data-i18n-title="admin_btn_title">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                    <span>Admin</span>
                </a>

                <!-- Logout / Exit Button -->
                <a href="<?= base_url('/') ?>" class="header-exit-btn" title="Exit / Switch Shift" data-i18n-title="exit_title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                </a>
            </div>
        </header>

        <!-- =============================================================
             MAIN BODY: Tablet & Laptop Split-Screen Layout
             Left: Catalog / Menu Grid  |  Right: Order Affirmation Sidebar
             ============================================================= -->
        <main class="pos-main-container">

            <!-- =========================================================
                 LEFT CATALOG PANEL: Category Tabs & Food Cards Grid
                 ========================================================= -->
            <section class="pos-catalog-panel">

                <!-- Category Tabs Navigation -->
                <nav class="pos-category-bar" role="tablist" aria-label="Menu Categories">
                    <button type="button" class="category-tab active" data-category="all">
                        <span class="tab-label" data-i18n="cat_all">All</span>
                        <span class="tab-count" id="count-all">16</span>
                    </button>
                    <button type="button" class="category-tab" data-category="makanan">
                        <span class="tab-label" data-i18n="cat_makanan">Mains</span>
                        <span class="tab-count" id="count-makanan">6</span>
                    </button>
                    <button type="button" class="category-tab" data-category="hotplate">
                        <span class="tab-label" data-i18n="cat_hotplate">Hotplate</span>
                        <span class="tab-count" id="count-hotplate">3</span>
                    </button>
                    <button type="button" class="category-tab" data-category="minuman">
                        <span class="tab-label" data-i18n="cat_minuman">Drinks</span>
                        <span class="tab-count" id="count-minuman">4</span>
                    </button>
                    <button type="button" class="category-tab" data-category="snack">
                        <span class="tab-label" data-i18n="cat_snack">Snacks</span>
                        <span class="tab-count" id="count-snack">3</span>
                    </button>
                </nav>

                <!-- Catalog Status Sub-header -->
                <div class="catalog-status-row">
                    <div class="status-left">
                        <span class="catalog-current-heading" id="catalog-section-title" data-i18n="cat_all_title">All Restaurant Menu</span>
                        <span class="catalog-items-count" id="catalog-items-count">Showing 16 items</span>
                    </div>

                    <div class="status-right">
                        <!-- Order Mode Selector Pill (Dine In vs Takeaway) -->
                        <div class="order-mode-pill">
                            <button type="button" class="mode-btn active" id="mode-dine-in" data-mode="dine_in" data-i18n="mode_dine_in">Dine In</button>
                            <button type="button" class="mode-btn" id="mode-takeaway" data-mode="takeaway" data-i18n="mode_takeaway">Takeaway</button>
                        </div>
                    </div>
                </div>

                <!-- Product Cards Grid -->
                <div class="pos-product-grid" id="pos-product-grid">
                    <!-- Populated dynamically by pos.js -->
                </div>

            </section>

            <!-- =========================================================
                 RIGHT SIDEBAR: Order Affirmation & Reception Ticket
                 ========================================================= -->
            <aside class="pos-order-panel">

                <!-- Order Header (Daftar Pesanan & Hapus) -->
                <div class="order-header-box">
                    <div class="order-title-group">
                        <div class="order-icon-badge">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                        </div>
                        <div>
                            <h2 class="order-main-title" data-i18n="order_list_title">Order Summary</h2>
                            <div class="order-meta-badges">
                                <span class="order-ticket-no" id="order-ticket-no">#ORD-0924</span>
                                <span class="order-mode-badge dine-in" id="order-header-mode-badge" data-i18n="badge_dinein">🍽️ Dine In</span>
                            </div>
                        </div>
                    </div>

                    <!-- Clear all button -->
                    <button type="button" class="btn-clear-order" id="btn-clear-order" data-i18n="btn_clear">
                        Clear
                    </button>
                </div>

                <!-- Table & Customer Quick Input Box -->
                <div class="order-meta-card">
                    <div class="table-select-wrapper" id="table-container">
                        <label for="select-table" id="label-table" data-i18n="label_table">Select Table</label>
                        <select id="select-table" class="pos-select">
                            <option value="Takeaway Counter" data-i18n="takeaway_counter_label">🛍️ Takeaway Counter (Front Desk)</option>
                            <option value="Table 01">Table 01 (1st Floor)</option>
                            <option value="Table 02">Table 02 (1st Floor)</option>
                            <option value="Table 03">Table 03 (1st Floor)</option>
                            <option value="Table 04" selected>Table 04 (Billiard VIP)</option>
                            <option value="Table 05">Table 05 (Billiard Regular)</option>
                            <option value="Table 06">Table 06 (2nd Floor)</option>
                            <option value="Table 07">Table 07 (2nd Floor)</option>
                            <option value="Table 08">Table 08 (Outdoor)</option>
                        </select>
                    </div>

                    <div class="customer-input-wrapper">
                        <label for="input-customer-name" data-i18n="label_customer">Guest / Customer Name</label>
                        <input type="text" id="input-customer-name" class="pos-input-sm" placeholder="e.g. Mr. Adrian" data-i18n-placeholder="customer_placeholder" value="Mr. Adrian">
                    </div>
                </div>

                <!-- Scrollable Order Items List Container -->
                <div class="order-items-scrollable" id="order-items-scrollable">
                    <div class="order-items-list" id="order-items-list">
                        <!-- Populated by pos.js -->
                    </div>
                </div>

                <!-- Receipt Calculation & Financials Box -->
                <div class="order-financials-box">
                    <div class="financial-row">
                        <span data-i18n="subtotal_label">Subtotal</span>
                        <strong id="summary-subtotal">Rp 0</strong>
                    </div>

                    <div class="financial-row fee-link-row">
                        <button type="button" class="btn-toggle-fee" id="btn-toggle-fee">
                            <span data-i18n="tax_label">+ Restaurant Tax &amp; Service (10%)</span>
                        </button>
                        <span id="summary-tax">Rp 0</span>
                    </div>

                    <!-- Grand Total Big Display (Retro Fraunces Typography) -->
                    <div class="grand-total-banner">
                        <div class="total-text-group">
                            <span class="total-caption" data-i18n="total_label">Total Due</span>
                            <span class="total-items-badge" id="total-qty-badge">0 items</span>
                        </div>
                        <div class="total-amount-display" id="summary-grand-total">
                            Rp 0
                        </div>
                    </div>
                </div>

                <!-- Bottom POS Affirmation Action Buttons: Full Width Pay & Affirm Button -->
                <footer class="order-footer-actions">
                    <button type="button" class="btn-pos-pay" id="btn-open-payment" data-i18n="btn_pay">
                        <span>Pay &amp; Affirm Order</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </footer>

            </aside>
        </main>

    </div>

    <!-- =================================================================
         MODAL 1: ORDER AFFIRMATION & PAYMENT CHECKOUT
         ================================================================= -->
    <div class="pos-modal-backdrop" id="modal-payment-backdrop" style="display: none;">
        <div class="pos-modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-pay-title">
            <header class="pos-modal-header">
                <div class="modal-title-wrap">
                    <span class="modal-stamp">★ RECEPTION DESK</span>
                    <h3 id="modal-pay-title" data-i18n="modal_pay_title">Affirm Order &amp; Payment</h3>
                    <p class="modal-subtitle" id="modal-pay-subtitle">Table 04 • Mr. Adrian • #ORD-0924</p>
                </div>
                <button type="button" class="modal-close-btn" id="btn-close-payment-modal" aria-label="Close">✕</button>
            </header>

            <div class="pos-modal-body">
                <!-- Left Details: Items mini receipt -->
                <div class="modal-receipt-summary">
                    <div class="receipt-paper">
                        <h4 class="receipt-shop-title">RETRO BILLIARD &amp; DINING</h4>
                        <div class="receipt-dashed"></div>
                        <div class="receipt-mini-items" id="modal-mini-items">
                            <!-- Injected by pos.js -->
                        </div>
                        <div class="receipt-dashed"></div>
                        <div class="receipt-calc-row">
                            <span data-i18n="subtotal_label">Subtotal</span>
                            <span id="modal-subtotal">Rp 0</span>
                        </div>
                        <div class="receipt-calc-row">
                            <span data-i18n="tax_label">Tax (10%)</span>
                            <span id="modal-tax">Rp 0</span>
                        </div>
                        <div class="receipt-calc-row total-highlight">
                            <strong data-i18n="total_label">Total</strong>
                            <strong id="modal-total-amount">Rp 0</strong>
                        </div>
                    </div>
                </div>

                <!-- Right Input: Payment Method & Tender Amount -->
                <div class="modal-tender-form">
                    <!-- Method Selector Tabs -->
                    <label class="tender-label" data-i18n="choose_payment">Payment Method</label>
                    <div class="payment-methods-grid">
                        <button type="button" class="pay-method-btn active" data-method="cash">
                            <span class="method-icon">💵</span>
                            <span class="method-name" data-i18n="method_cash">Cash</span>
                        </button>
                        <button type="button" class="pay-method-btn" data-method="qris">
                            <span class="method-icon">📱</span>
                            <span class="method-name" data-i18n="method_qris">QRIS / E-Wallet</span>
                        </button>
                        <button type="button" class="pay-method-btn" data-method="card">
                            <span class="method-icon">💳</span>
                            <span class="method-name" data-i18n="method_card">Debit / Card</span>
                        </button>
                    </div>

                    <!-- Cash Input Section (Active if cash) -->
                    <div class="tender-cash-section" id="tender-cash-section">
                        <label for="input-tendered" class="tender-label" data-i18n="cash_received">Cash Tendered Amount</label>
                        <div class="tender-input-wrap">
                            <span class="currency-prefix">Rp</span>
                            <input type="text" id="input-tendered" class="pos-input-lg" placeholder="0">
                        </div>

                        <!-- Quick Denomination Buttons -->
                        <div class="quick-cash-chips" id="quick-cash-chips">
                            <button type="button" class="cash-chip" data-val="exact" data-i18n="chip_exact">Exact Cash</button>
                            <button type="button" class="cash-chip" data-val="50000">50.000</button>
                            <button type="button" class="cash-chip" data-val="100000">100.000</button>
                            <button type="button" class="cash-chip" data-val="200000">200.000</button>
                            <button type="button" class="cash-chip" data-val="500000">500.000</button>
                        </div>

                        <!-- Change calculation box -->
                        <div class="change-display-box" id="change-display-box">
                            <span class="change-label" data-i18n="change_label">Change Due</span>
                            <strong class="change-amount" id="modal-change-amount">Rp 0</strong>
                        </div>
                    </div>

                    <!-- Non-cash instructions -->
                    <div class="tender-noncash-section" id="tender-noncash-section" style="display: none;">
                        <div class="qris-card">
                            <div class="qris-box-placeholder">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                    <rect x="3" y="3" width="7" height="7"></rect>
                                    <rect x="14" y="3" width="7" height="7"></rect>
                                    <rect x="14" y="14" width="7" height="7"></rect>
                                    <rect x="3" y="14" width="7" height="7"></rect>
                                </svg>
                                <span data-i18n="qris_prompt">Display Dynamic QRIS to Customer</span>
                            </div>
                            <p class="qris-subnote" data-i18n="qris_auto_verify">Payment will automatically verify upon scan.</p>
                        </div>
                    </div>

                    <!-- Kitchen Order Notes -->
                    <div class="kitchen-note-wrap">
                        <label for="input-kitchen-notes" class="tender-label" data-i18n="kitchen_note">Kitchen Notes (Optional)</label>
                        <input type="text" id="input-kitchen-notes" class="pos-input-sm" placeholder="e.g. Sauce on side, less ice..." data-i18n-placeholder="note_placeholder">
                    </div>
                </div>
            </div>

            <footer class="pos-modal-footer">
                <button type="button" class="modal-btn-cancel" id="btn-cancel-payment" data-i18n="btn_cancel">Cancel</button>
                <button type="button" class="modal-btn-confirm" id="btn-confirm-order">
                    <span data-i18n="btn_confirm_dispatch">Affirm &amp; Send to Kitchen</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>
            </footer>
        </div>
    </div>

    <!-- =================================================================
         MODAL 2: SUCCESS RECEIPT PRINT & DISPATCH NOTIFICATION
         ================================================================= -->
    <div class="pos-modal-backdrop" id="modal-success-backdrop" style="display: none;">
        <div class="pos-success-card">
            <div class="success-icon-badge">✓</div>
            <h3 class="success-headline" data-i18n="success_title">Order Successfully Affirmed!</h3>
            <p class="success-subtext" data-i18n="success_sub">The kitchen ticket has been dispatched to the kitchen queue monitor.</p>

            <div class="success-ticket-summary" id="success-ticket-summary">
                <!-- Summary inserted by pos.js -->
            </div>

            <div class="success-action-row">
                <button type="button" class="btn-print-receipt" id="btn-print-receipt" data-i18n="btn_print">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 6 2 18 2 18 9"></polyline>
                        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                        <rect x="6" y="14" width="12" height="8"></rect>
                    </svg>
                    <span>Print Receipt</span>
                </button>
                <button type="button" class="btn-new-order" id="btn-new-order" data-i18n="btn_new_order">
                    New Order (Done)
                </button>
            </div>
        </div>
    </div>

    <!-- Script -->
    <script src="<?= base_url('js/pos.js') ?>" defer></script>
</body>

</html>
