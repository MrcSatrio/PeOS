<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Retro Billiard | Staff Terminal &amp; POS Sign In</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet">

    <!-- Stylesheet -->
    <link rel="stylesheet" href="<?= base_url('css/auth.css') ?>">
</head>

<body>
    <main class="auth-page">
        <div class="auth-card">

            <!-- =========================================================
                 LEFT PANEL: Operational Showcase & Retro Aesthetic
                 ========================================================= -->
            <section class="showcase-panel">
                <header class="showcase-header">
                    <div class="brand-wrapper">
                        <img src="<?= base_url('images/logo.jpg') ?>" alt="Restaurant Brand Logo"
                            class="brand-logo-img">
                        <div class="brand-text">
                            <span data-i18n="order_dine">Order &amp; Dine</span>
                            <h1>RETRO BILLIARD</h1>
                        </div>
                    </div>
                    <div class="retro-stamp">
                        <span>★ EST. 2024</span>
                    </div>
                </header>

                <div class="showcase-visual">
                    <div class="food-frame">
                        <img src="<?= base_url('images/hero-food.jpg') ?>" alt="Artisanal Burgers and Pub Spread">
                        <div class="food-frame-overlay">
                            <span class="dish-tag" data-i18n="dish_tag">Craft Burgers &amp; Bites</span>
                            <span class="dish-price" data-i18n="dish_price">100% Fresh Daily</span>
                        </div>
                    </div>
                </div>

                <footer class="showcase-footer">
                    <h2 class="retro-headline" data-i18n-html="hero_headline">
                        Crafted with <span>Soul</span>,<br>
                        Served with <span>Passion</span>.
                    </h2>
                    <p class="showcase-subtext" data-i18n="hero_subtext">
                        Welcome to our online ordering portal. Order your favorite gourmet dishes directly from your table or pick up fresh from the kitchen.
                    </p>

                    <div class="organic-showcase-notes">
                        <div class="organic-rating-strip">
                            <span class="rating-num">4.9</span>
                            <div class="rating-details">
                                <div class="rating-stars" aria-label="5 stars rating">
                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                </div>
                                <span class="rating-caption" data-i18n="rating_caption">Gourmet Customer Rating</span>
                            </div>
                        </div>

                        <div class="organic-perks-row">
                            <span class="organic-perk">
                                <em data-i18n="perk_dispatch">Instant Table Dispatch</em>
                            </span>
                            <span class="organic-bullet">✦</span>
                            <span class="organic-perk">
                                <em data-i18n="perk_queue">Real-Time Kitchen Queue</em>
                            </span>
                        </div>
                    </div>
                </footer>
            </section>

            <!-- =========================================================
                 RIGHT PANEL: Staff Authentication Terminal
                 ========================================================= -->
            <section class="form-panel">

                <!-- Top Utility Bar: Language Switcher -->
                <div class="lang-bar">
                    <div class="lang-switch-dropdown" id="lang-menu">
                        <button type="button" class="lang-toggle-btn" id="lang-btn" aria-haspopup="true" aria-expanded="false" title="Switch Language / Ganti Bahasa">
                            <span class="flag-icon" id="active-flag">
                                <svg class="flag-svg" viewBox="0 0 60 40" width="20" height="13">
                                    <clipPath id="uk-clip"><rect width="60" height="40" rx="3"/></clipPath>
                                    <g clip-path="url(#uk-clip)">
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
                                    <clipPath id="uk-clip-opt"><rect width="60" height="40" rx="3"/></clipPath>
                                    <g clip-path="url(#uk-clip-opt)">
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
                                    <clipPath id="id-clip-opt"><rect width="60" height="40" rx="3"/></clipPath>
                                    <g clip-path="url(#id-clip-opt)">
                                        <rect width="60" height="20" fill="#E70011"/>
                                        <rect y="20" width="60" height="20" fill="#FFFFFF"/>
                                        <rect width="60" height="40" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="1.5"/>
                                    </g>
                                </svg>
                                <span>Indonesia</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Flash feedback message placeholders (ready for backend) -->
                <?php if (session()->getFlashdata('error')): ?>
                    <div class="alert-box alert-danger" role="alert">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <span><?= esc(session()->getFlashdata('error')) ?></span>
                    </div>
                <?php endif; ?>

                <?php if (session()->getFlashdata('success')): ?>
                    <div class="alert-box alert-success" role="alert">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span><?= esc(session()->getFlashdata('success')) ?></span>
                    </div>
                <?php endif; ?>

                <div class="form-view-container">
                    <header class="form-header">
                        <h2 class="form-title" data-i18n="login_title">Staff Sign In</h2>
                        <p class="form-subtitle" data-i18n="login_subtitle">Enter your staff credentials to access your terminal shift.</p>
                    </header>

                    <form action="<?= base_url('auth/action_login') ?>" method="post" id="form-login" novalidate>
                        <?= csrf_field() ?>

                        <!-- Username / Staff ID Field -->
                        <div class="form-group">
                            <label for="login-username" class="input-label" data-i18n="label_username">Staff ID or Username</label>
                            <div class="input-wrapper">
                                <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <input type="text" name="username" id="login-username" class="form-input"
                                    placeholder="Enter your staff ID or username" data-i18n-placeholder="placeholder_username" autocomplete="username">
                            </div>
                            <span class="field-error" id="error-login-username"></span>
                        </div>

                        <!-- Password / PIN Field -->
                        <div class="form-group">
                            <label for="login-password" class="input-label" data-i18n="label_password">Password / PIN</label>
                            <div class="input-wrapper">
                                <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                                <input type="password" name="password" id="login-password" class="form-input"
                                    placeholder="••••••••••••" data-i18n-placeholder="placeholder_password" autocomplete="current-password">
                                <button type="button" class="password-toggle-btn" data-target="login-password"
                                    aria-label="Toggle password visibility">
                                    <!-- Eye icon -->
                                    <svg class="icon-eye" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    <!-- Eye off icon -->
                                    <svg class="icon-eye-off" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        style="display: none;">
                                        <path
                                            d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24">
                                        </path>
                                        <line x1="1" y1="1" x2="23" y2="23"></line>
                                    </svg>
                                </button>
                            </div>
                            <span class="field-error" id="error-login-password"></span>
                        </div>

                        <!-- Form Auxiliaries -->
                        <div class="form-aux">
                            <label class="remember-label">
                                <input type="checkbox" name="remember">
                                <span data-i18n="remember_me">Keep me signed in this shift</span>
                            </label>
                            <a href="#" class="text-link" data-i18n="forgot_password">Forgot PIN?</a>
                        </div>

                        <!-- Submit Button -->
                        <button type="submit" class="btn-submit">
                            <span data-i18n="btn_signin">Sign In to Terminal</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </form>
                </div>

                <!-- Security & Supervisor Note -->
                <div class="staff-security-note">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <div class="security-text">
                        <span data-i18n="staff_notice">Restricted access for authorized restaurant staff only.</span>
                        <div data-i18n-html="staff_help">Need credentials or a PIN reset? Contact your <strong>Shift Supervisor</strong>.</div>
                    </div>
                </div>

            </section>
        </div>
    </main>

    <!-- Script -->
    <script src="<?= base_url('js/auth.js') ?>" defer></script>
</body>

</html>