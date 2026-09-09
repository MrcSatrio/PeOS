/**
 * Restaurant Order System - Staff Terminal Interactions & Bilingual Support (EN / ID)
 * Bjorbun Retro Aesthetic - Staff Only Authentication
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // Password Visibility Toggles
  // =========================================================================
  const toggleButtons = document.querySelectorAll('.password-toggle-btn');
  toggleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (!input) return;

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';

      btn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');

      const eyeIcon = btn.querySelector('.icon-eye');
      const eyeOffIcon = btn.querySelector('.icon-eye-off');
      if (eyeIcon && eyeOffIcon) {
        if (isPassword) {
          eyeIcon.style.display = 'none';
          eyeOffIcon.style.display = 'block';
        } else {
          eyeIcon.style.display = 'block';
          eyeOffIcon.style.display = 'none';
        }
      }
    });
  });

  // =========================================================================
  // Bilingual (English & Indonesian) Translations & Flag Switcher
  // =========================================================================
  const flags = {
    en: `<svg class="flag-svg" viewBox="0 0 60 40" width="20" height="13">
          <clipPath id="uk-clip-main"><rect width="60" height="40" rx="3"/></clipPath>
          <g clip-path="url(#uk-clip-main)">
            <path fill="#012169" d="M0 0h60v40H0z"/>
            <path stroke="#fff" stroke-width="6" d="M0 0l60 40M60 0L0 40"/>
            <path stroke="#C8102E" stroke-width="4" d="M0 0l60 40M60 0L0 40"/>
            <path stroke="#fff" stroke-width="10" d="M30 0v40M0 20h60"/>
            <path stroke="#C8102E" stroke-width="6" d="M30 0v40M0 20h60"/>
          </g>
        </svg>`,
    id: `<svg class="flag-svg" viewBox="0 0 60 40" width="20" height="13">
          <clipPath id="id-clip-main"><rect width="60" height="40" rx="3"/></clipPath>
          <g clip-path="url(#id-clip-main)">
            <rect width="60" height="20" fill="#E70011"/>
            <rect y="20" width="60" height="20" fill="#FFFFFF"/>
            <rect width="60" height="40" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="1.5"/>
          </g>
        </svg>`
  };

  const translations = {
    en: {
      order_dine: 'Order & Dine',
      dish_tag: 'Craft Burgers & Bites',
      dish_price: '100% Fresh Daily',
      hero_headline: 'Crafted with <span>Soul</span>,<br>Served with <span>Passion</span>.',
      hero_subtext: 'Welcome to our online ordering portal. Order your favorite gourmet dishes directly from your table or pick up fresh from the kitchen.',
      rating_caption: 'Gourmet Customer Rating',
      perk_dispatch: 'Instant Table Dispatch',
      perk_queue: 'Real-Time Kitchen Queue',
      login_title: 'Staff Sign In',
      login_subtitle: 'Enter your staff credentials to access your terminal shift.',
      label_username: 'Staff ID or Username',
      placeholder_username: 'Enter your staff ID or username',
      label_password: 'Password / PIN',
      placeholder_password: '••••••••••••',
      remember_me: 'Keep me signed in this shift',
      forgot_password: 'Forgot PIN?',
      btn_signin: 'Sign In to Terminal',
      staff_notice: 'Restricted access for authorized restaurant staff only.',
      staff_help: 'Need credentials or a PIN reset? Contact your <strong>Shift Supervisor</strong>.',
      // Validations
      val_enter_username: 'Please enter your staff ID or username',
      val_enter_password: 'Please enter your password or PIN'
    },
    id: {
      order_dine: 'Pesan & Makan',
      dish_tag: 'Santapan Istimewa',
      dish_price: '100% Segar',
      hero_headline: 'Dibuat dengan <span>Jiwa</span>,<br>Disajikan Penuh <span>Rasa</span>.',
      hero_subtext: 'Selamat datang di portal pemesanan kami. Pesan hidangan gourmet favorit langsung dari meja.',
      rating_caption: 'Penilaian Pelanggan Gourmet',
      perk_dispatch: 'Pesanan Meja Cepat',
      perk_queue: 'Antrean Dapur Real-Time',
      login_title: 'Masuk Staf',
      login_subtitle: 'Masukkan kredensial staf Anda untuk memulai shift terminal.',
      label_username: 'ID Staf atau Nama Pengguna',
      placeholder_username: 'Masukkan ID staf atau nama pengguna',
      label_password: 'Kata Sandi / PIN',
      placeholder_password: '••••••••••••',
      remember_me: 'Ingat saya selama shift ini',
      forgot_password: 'Lupa PIN?',
      btn_signin: 'Masuk ke Terminal',
      staff_notice: 'Akses terbatas khusus untuk staf restoran yang berwenang.',
      staff_help: 'Butuh kredensial atau reset PIN? Hubungi <strong>Supervisor Shift</strong> Anda.',
      // Validations
      val_enter_username: 'Harap masukkan ID staf atau nama pengguna',
      val_enter_password: 'Harap masukkan kata sandi atau PIN'
    }
  };

  let currentLang = localStorage.getItem('restaurant_lang') || 'en';

  const langMenu = document.getElementById('lang-menu');
  const langBtn = document.getElementById('lang-btn');
  const activeFlag = document.getElementById('active-flag');
  const activeLangText = document.getElementById('active-lang-text');
  const langChoices = document.querySelectorAll('.lang-choice');

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('restaurant_lang', lang);

    // Update flag and text indicator
    if (activeFlag) activeFlag.innerHTML = flags[lang];
    if (activeLangText) activeLangText.textContent = lang.toUpperCase();

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update HTML content
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
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
  }

  // Toggle Dropdown
  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('open');
      langBtn.setAttribute('aria-expanded', langMenu.classList.contains('open'));
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!langMenu.contains(e.target)) {
        langMenu.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Choice Selection
  langChoices.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-lang');
      setLanguage(selected);
      if (langMenu) {
        langMenu.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Apply initial language
  setLanguage(currentLang);

  // =========================================================================
  // Validation Helpers (Red Warning Notices)
  // =========================================================================
  function setError(inputEl, errorEl, messageKey) {
    if (!inputEl || !errorEl) return;
    inputEl.classList.add('is-invalid');
    inputEl.classList.remove('input-shake');
    void inputEl.offsetWidth; // trigger reflow
    inputEl.classList.add('input-shake');
    errorEl.textContent = translations[currentLang][messageKey] || messageKey;
    errorEl.classList.add('visible');
  }

  function clearError(inputEl, errorEl) {
    if (!inputEl || !errorEl) return;
    inputEl.classList.remove('is-invalid', 'input-shake');
    errorEl.textContent = '';
    errorEl.classList.remove('visible');
  }

  // Staff Login Form Validation
  const formLogin = document.getElementById('form-login');
  const loginUser = document.getElementById('login-username');
  const loginPass = document.getElementById('login-password');
  const errLoginUser = document.getElementById('error-login-username');
  const errLoginPass = document.getElementById('error-login-password');

  if (loginUser) {
    loginUser.addEventListener('input', () => clearError(loginUser, errLoginUser));
  }
  if (loginPass) {
    loginPass.addEventListener('input', () => clearError(loginPass, errLoginPass));
  }

  if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
      let isValid = true;
      let firstInvalid = null;

      if (!loginUser.value.trim()) {
        setError(loginUser, errLoginUser, 'val_enter_username');
        isValid = false;
        if (!firstInvalid) firstInvalid = loginUser;
      }

      if (!loginPass.value.trim()) {
        setError(loginPass, errLoginPass, 'val_enter_password');
        isValid = false;
        if (!firstInvalid) firstInvalid = loginPass;
      }

      if (!isValid) {
        e.preventDefault();
        firstInvalid.focus();
      }
    });
  }
});
