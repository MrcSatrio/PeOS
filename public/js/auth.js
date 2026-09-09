/**
 * Restaurant Order System - Auth Interactions & Bilingual Support (EN / ID)
 * Bjorbun Retro Aesthetic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');
  const viewLogin = document.getElementById('view-login');
  const viewRegister = document.getElementById('view-register');
  const linkToRegister = document.getElementById('link-to-register');
  const linkToLogin = document.getElementById('link-to-login');

  // =========================================================================
  // View Switcher (Login vs Register)
  // =========================================================================
  function showLogin() {
    tabLogin.classList.add('active');
    tabLogin.setAttribute('aria-selected', 'true');
    tabRegister.classList.remove('active');
    tabRegister.setAttribute('aria-selected', 'false');

    viewLogin.classList.add('active');
    viewRegister.classList.remove('active');

    if (history.replaceState) {
      history.replaceState(null, '', '#login');
    }
  }

  function showRegister() {
    tabRegister.classList.add('active');
    tabRegister.setAttribute('aria-selected', 'true');
    tabLogin.classList.remove('active');
    tabLogin.setAttribute('aria-selected', 'false');

    viewRegister.classList.add('active');
    viewLogin.classList.remove('active');

    if (history.replaceState) {
      history.replaceState(null, '', '#register');
    }
  }

  if (tabLogin && tabRegister) {
    tabLogin.addEventListener('click', showLogin);
    tabRegister.addEventListener('click', showRegister);
  }

  if (linkToRegister) {
    linkToRegister.addEventListener('click', (e) => {
      e.preventDefault();
      showRegister();
    });
  }

  if (linkToLogin) {
    linkToLogin.addEventListener('click', (e) => {
      e.preventDefault();
      showLogin();
    });
  }

  if (window.location.hash === '#register') {
    showRegister();
  } else {
    showLogin();
  }

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
      tab_signin: 'Sign In',
      tab_register: 'Register',
      login_title: 'Welcome Back!',
      login_subtitle: 'Log in below to start ordering or manage your table.',
      label_username: 'Username',
      placeholder_username: 'Enter your username',
      label_password: 'Password',
      placeholder_password: '••••••••••••',
      remember_me: 'Remember Me',
      forgot_password: 'Forgot Password?',
      btn_signin: 'Sign In',
      no_account: "Don't have an account yet?",
      register_free: 'Register for free',
      reg_title: 'Join The Club!',
      reg_subtitle: 'Create an account to order food, save favorites & earn points.',
      placeholder_reg_username: 'Pick a unique username',
      placeholder_reg_password: 'Minimum 8 characters',
      label_confirm_password: 'Confirm Password',
      placeholder_reg_confirm: 'Repeat your password',
      agree_terms: 'I agree to <a href="#" class="text-link">Terms &amp; Conditions</a>',
      btn_create_account: 'Create Account',
      have_account: 'Already have an account?',
      signin_here: 'Sign in here',
      staff_question: 'Are you a kitchen or front-of-house staff member?',
      staff_action: 'Use your Assigned POS Terminal or PIN',
      // Validations
      val_enter_username: 'Please enter your username',
      val_enter_password: 'Please enter your password',
      val_choose_username: 'Please choose a username',
      val_pass_length: 'Password must be at least 6 characters',
      val_confirm_password: 'Please confirm your password',
      val_pass_mismatch: 'Passwords do not match'
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
      tab_signin: 'Masuk',
      tab_register: 'Daftar',
      login_title: 'Selamat Datang!',
      login_subtitle: 'Masuk di bawah untuk memesan dari meja Anda.',
      label_username: 'Nama Pengguna',
      placeholder_username: 'Masukkan nama pengguna Anda',
      label_password: 'Kata Sandi',
      placeholder_password: '••••••••••••',
      remember_me: 'Ingat Saya',
      forgot_password: 'Lupa Kata Sandi?',
      btn_signin: 'Masuk',
      no_account: 'Belum punya akun?',
      register_free: 'Daftar sekarang',
      reg_title: 'Bergabung Sekarang!',
      reg_subtitle: 'Buat akun untuk memesan makanan, simpan menu favorit & dapatkan promo.',
      placeholder_reg_username: 'Pilih nama pengguna unik',
      placeholder_reg_password: 'Minimal 8 karakter',
      label_confirm_password: 'Konfirmasi Kata Sandi',
      placeholder_reg_confirm: 'Ulangi kata sandi Anda',
      agree_terms: 'Saya setuju dengan <a href="#" class="text-link">Syarat &amp; Ketentuan</a>',
      btn_create_account: 'Buat Akun',
      have_account: 'Sudah memiliki akun?',
      signin_here: 'Masuk di sini',
      staff_question: 'Apakah Anda staf dapur atau staf restoran?',
      staff_action: 'Gunakan Terminal POS atau PIN Khusus Anda',
      // Validations
      val_enter_username: 'Harap masukkan nama pengguna',
      val_enter_password: 'Harap masukkan kata sandi',
      val_choose_username: 'Harap pilih nama pengguna',
      val_pass_length: 'Kata sandi minimal 6 karakter',
      val_confirm_password: 'Harap konfirmasi kata sandi Anda',
      val_pass_mismatch: 'Kata sandi tidak cocok'
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

  // Login Form Validation
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

  // Register Form Validation
  const formRegister = document.getElementById('form-register');
  const regUser = document.getElementById('reg-username');
  const regPass = document.getElementById('reg-password');
  const regConfirmPass = document.getElementById('reg-confirm-password');
  const errRegUser = document.getElementById('error-reg-username');
  const errRegPass = document.getElementById('error-reg-password');
  const errRegConfirmPass = document.getElementById('error-reg-confirm-password');

  if (regUser) {
    regUser.addEventListener('input', () => clearError(regUser, errRegUser));
  }
  if (regPass) {
    regPass.addEventListener('input', () => clearError(regPass, errRegPass));
  }
  if (regConfirmPass) {
    regConfirmPass.addEventListener('input', () => clearError(regConfirmPass, errRegConfirmPass));
  }

  if (formRegister) {
    formRegister.addEventListener('submit', (e) => {
      let isValid = true;
      let firstInvalid = null;

      if (!regUser.value.trim()) {
        setError(regUser, errRegUser, 'val_choose_username');
        isValid = false;
        if (!firstInvalid) firstInvalid = regUser;
      }

      if (!regPass.value.trim()) {
        setError(regPass, errRegPass, 'val_enter_password');
        isValid = false;
        if (!firstInvalid) firstInvalid = regPass;
      } else if (regPass.value.length < 6) {
        setError(regPass, errRegPass, 'val_pass_length');
        isValid = false;
        if (!firstInvalid) firstInvalid = regPass;
      }

      if (!regConfirmPass.value.trim()) {
        setError(regConfirmPass, errRegConfirmPass, 'val_confirm_password');
        isValid = false;
        if (!firstInvalid) firstInvalid = regConfirmPass;
      } else if (regPass.value !== regConfirmPass.value) {
        setError(regConfirmPass, errRegConfirmPass, 'val_pass_mismatch');
        isValid = false;
        if (!firstInvalid) firstInvalid = regConfirmPass;
      }

      if (!isValid) {
        e.preventDefault();
        firstInvalid.focus();
      }
    });
  }
});
