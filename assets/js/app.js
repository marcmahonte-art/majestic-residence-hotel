(() => {
  const config = window.MAJESTIC_CONFIG;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const recordingMode = document.body.dataset.page === "home" && new URLSearchParams(window.location.search).get("rec") === "1" && !reducedMotion.matches;
  const siteRoot = config.siteRoot || "";
  const imgRoot = config.imgRoot || "/assets/images";
  const i18n = window.MAJESTIC_I18N;
  const t = i18n.t;
  const langRoot = i18n.isEn ? `${siteRoot}/en` : siteRoot;

  const toggleTheme = () => {
    const current = document.documentElement.dataset.theme || "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("majestic-theme", next);
    } catch {}
    updateThemeControls(next);
  };

  const updateThemeControls = (theme) => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#121110" : "#F8F5EF");
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.setAttribute("aria-label", theme === "dark" ? t.theme.toLight : t.theme.toDark);
      const text = button.querySelector(".theme-label");
      if (text) text.textContent = theme === "dark" ? t.theme.light : t.theme.dark;
    });
  };

  // Cibles du sélecteur de langue : on conserve la page courante.
  const currentPath = window.location.pathname;
  const relativePath = currentPath.startsWith(siteRoot) ? currentPath.slice(siteRoot.length) : currentPath;
  const pathWithoutLang = relativePath.replace(/^\/en(?=\/|$)/, "") || "/";
  const langLinks = {
    fr: `${siteRoot}${pathWithoutLang}`,
    en: `${siteRoot}/en${pathWithoutLang}`
  };

  const paths = {
    menu: '<path d="M4 8h16M4 16h16"/>',
    x: '<path d="m6 6 12 12M18 6 6 18"/>',
    "arrow-right": '<path d="M5 12h14m-6-6 6 6-6 6"/>',
    "arrow-up-right": '<path d="M7 17 17 7M7 7h10v10"/>',
    "chevron-left": '<path d="m15 18-6-6 6-6"/>',
    "chevron-right": '<path d="m9 18 6-6-6-6"/>',
    "bed-double": '<path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8M2 16h20M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4M2 20v2M22 20v2"/>',
    car: '<path d="m5 17-2-2v-4l2-5h14l2 5v4l-2 2M5 17v2M19 17v2M3 11h18M7 14h.01M17 14h.01"/>',
    wifi: '<path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a14 14 0 0 1 20 0M12 20h.01"/>',
    "concierge-bell": '<path d="M3 20h18M5 17h14M6 17a6 6 0 0 1 12 0M12 11V8M10 8h4"/>',
    waves: '<path d="M2 6c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2M2 12c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2M2 18c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2"/>',
    "map-pin": '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>',
    "message-circle": '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.5 9.5 0 0 1-4-.9L3 21l1.8-5a8.4 8.4 0 1 1 16.2-4.5Z"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/>',
    expand: '<path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>'
  };

  const icon = (name, className = "") => `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name] || paths["arrow-right"]}</svg>`;

  const navigation = [
    ["home", t.nav.home, `${langRoot}/`],
    ["rooms", t.nav.rooms, `${langRoot}/rooms/`],
    ["services", t.nav.services, `${langRoot}/services/`],
    ["gallery", t.nav.gallery, `${langRoot}/gallery/`],
    ["contact", t.nav.contact, `${langRoot}/contact/`]
  ];

  const renderHeader = () => {
    const mount = document.querySelector("[data-site-header]");
    if (!mount) return;
    const page = document.body.dataset.page;
    const currentTheme = document.documentElement.dataset.theme || "light";
    mount.innerHTML = `
      <header class="site-header" data-header>
        <button class="header__menu" type="button" data-menu-open aria-haspopup="dialog" aria-label="${t.header.menuOpen}">
          ${icon("menu")}<span>${t.header.menu}</span>
        </button>
        <a class="header__logo" href="${langRoot}/" aria-label="${t.header.home}">
          <img src="${imgRoot}/logo-majestic.png" width="560" height="560" alt="Majestic Residence Hotel" fetchpriority="high">
        </a>
        <a class="header__booking" href="${langRoot}/booking/" aria-label="${t.header.bookAria}"><span>${t.header.book}</span>${icon("arrow-up-right")}</a>
      </header>
      <dialog class="menu-overlay" data-menu aria-label="${t.header.primaryNav}">
        <div class="menu-overlay__top">
          <span class="label">MAJESTIC RESIDENCE HOTEL</span>
          <button class="menu-overlay__close" type="button" data-menu-close aria-label="${t.header.closeMenu}">${icon("x")}<span>${t.header.menuClose}</span></button>
        </div>
        <nav class="menu-overlay__nav" aria-label="${t.header.siteSections}">
          ${navigation.map(([id, label, href], index) => `<a href="${href}" ${page === id ? 'aria-current="page"' : ""}><span>0${index + 1}</span>${label}${icon("arrow-up-right")}</a>`).join("")}
        </nav>
        <div class="menu-overlay__settings">
          <div class="menu-overlay__switch-group">
            <button type="button" class="theme-toggle" data-theme-toggle>
              ${icon("sun", "theme-toggle__sun")}${icon("moon", "theme-toggle__moon")}<span class="theme-label"></span>
            </button>
            <div class="lang-switch" role="group" aria-label="${t.langSwitch.group}">
              <a class="lang-switch__item${i18n.isEn ? "" : " is-active"}" href="${langLinks.fr}" hreflang="fr" lang="fr"${i18n.isEn ? "" : ' aria-current="true"'}>FR</a>
              <span class="lang-switch__sep" aria-hidden="true">/</span>
              <a class="lang-switch__item${i18n.isEn ? " is-active" : ""}" href="${langLinks.en}" hreflang="en" lang="en"${i18n.isEn ? ' aria-current="true"' : ""}>EN</a>
            </div>
          </div>
        </div>
        <div class="menu-overlay__bottom">
          <p>${config.location}</p>
          <a class="button button--gold" href="${langRoot}/booking/">${t.header.bookingButton} ${icon("arrow-right")}</a>
        </div>
      </dialog>`;

    updateThemeControls(currentTheme);
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.addEventListener("click", toggleTheme);
    });
  };

  const renderFooter = () => {
    const mount = document.querySelector("[data-site-footer]");
    if (!mount) return;
    mount.innerHTML = `
      <footer class="site-footer">
        <div class="site-footer__main container">
          <div class="site-footer__brand">
            <a href="${langRoot}/" aria-label="${t.header.home}"><img src="${imgRoot}/logo-majestic.png" width="560" height="560" loading="lazy" alt="Majestic Residence Hotel"></a>
            <p>${t.footer.tagline}</p>
          </div>
          <div class="site-footer__column">
            <span class="label">${t.footer.contact}</span>
            <a href="tel:${config.phonePrimaryHref}">${config.phonePrimary}</a>
            <a href="https://wa.me/${config.WHATSAPP_NUMBER}" data-whatsapp>WhatsApp</a>
            <a href="${config.facebook}" target="_blank" rel="noopener noreferrer">Facebook ${icon("arrow-up-right")}</a>
          </div>
          <div class="site-footer__column">
            <span class="label">${t.footer.address}</span>
            <p>${t.footer.city}<br>${t.footer.country}</p>
          </div>
          <nav class="site-footer__column" aria-label="${t.footer.footerNav}">
            <span class="label">${t.footer.navigation}</span>
            ${navigation.map(([, label, href]) => `<a href="${href}">${label}</a>`).join("")}
            <a href="${langRoot}/booking/">${t.footer.booking}</a>
          </nav>
        </div>
        <div class="site-footer__bottom container">
          <span>© ${new Date().getFullYear()} MAJESTIC RESIDENCE HOTEL</span>
          <span>BONOUA · CÔTE D’IVOIRE</span>
        </div>
      </footer>`;
  };

  const renderFormulas = () => {
    document.querySelectorAll("[data-formulas]").forEach((table) => {
      table.innerHTML = config.formulas.map((formula) => {
        const local = t.formulas[formula.id] || t.formulas[formula.key] || formula;
        return `
        <a class="formula-row" href="${langRoot}/booking/?stay=${formula.id}" data-book-formula="${formula.id}" aria-label="${t.formulas.rowAria(local.name, local.duration, local.price)}">
          <span class="formula-row__name">${local.name}</span>
          <span class="formula-row__duration">${local.duration}</span>
          <strong class="formula-row__price">${local.price}</strong>
          <span class="formula-row__action">${t.formulas.book} ${icon("arrow-up-right")}</span>
        </a>`;
      }).join("");
    });
  };

  const hydrateIcons = () => {
    document.querySelectorAll("[data-icon]").forEach((element) => {
      element.innerHTML = icon(element.dataset.icon);
    });
  };

  const splitLetters = () => {
    document.querySelectorAll("[data-split]").forEach((element) => {
      const text = element.textContent.trim();
      let index = 0;
      element.setAttribute("aria-label", text);
      element.textContent = "";
      text.split(/(\s+)/).forEach((part) => {
        if (/^\s+$/.test(part)) {
          element.append(document.createTextNode(" "));
          return;
        }
        const word = document.createElement("span");
        word.className = "word";
        word.setAttribute("aria-hidden", "true");
        [...part].forEach((character) => {
          const letter = document.createElement("span");
          letter.className = "letter";
          letter.style.setProperty("--letter-index", index++);
          letter.textContent = character;
          word.append(letter);
        });
        element.append(word);
      });
    });
  };

  const initMenu = () => {
    const dialog = document.querySelector("[data-menu]");
    const openButton = document.querySelector("[data-menu-open]");
    if (!dialog || !openButton) return;
    openButton.addEventListener("click", () => {
      dialog.showModal();
      document.body.classList.add("menu-open");
    });
    dialog.querySelector("[data-menu-close]")?.addEventListener("click", () => dialog.close());
    dialog.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => dialog.close()));
    dialog.addEventListener("close", () => {
      document.body.classList.remove("menu-open");
      openButton.focus();
    });
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  };

  const initHeader = () => {
    const header = document.querySelector("[data-header]");
    const update = () => {
      const scrolled = window.scrollY > 36;
      header?.classList.toggle("is-scrolled", scrolled);
      document.body.classList.toggle("scrolled-past-hero", window.scrollY > window.innerHeight * 0.7);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  };

  const initReveals = () => {
    const elements = document.querySelectorAll('[data-reveal=""], [data-split], .photo-dot, .formula-row');
    const imageSelector = '[data-reveal="rideau"], [data-reveal="curtain"], [data-reveal="fenetre"], [data-reveal="window"], [data-reveal="fondu"], [data-reveal="fade"]';
    const images = document.querySelectorAll(imageSelector);
    if (reducedMotion.matches) {
      [...elements, ...images].forEach((element) => element.classList.add("is-visible"));
      return;
    }
    if (recordingMode) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -6%" });
    elements.forEach((element) => observer.observe(element));

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const siblings = [...entry.target.parentElement.children].filter((child) => child.matches(imageSelector));
        const index = Math.max(0, siblings.indexOf(entry.target));
        const image = entry.target.querySelector("img");
        // A fully clipped image may not trigger native lazy loading.
        if (image) image.loading = "eager";
        entry.target.style.setProperty("--reveal-delay", `${index * 90}ms`);
        entry.target.classList.add("is-visible");
        const animated = [entry.target, image].filter(Boolean);
        if (!reducedMotion.matches) animated.forEach((element) => { element.style.willChange = "transform, opacity, clip-path, filter"; });
        window.setTimeout(() => animated.forEach((element) => { element.style.willChange = ""; }), 1700 + index * 90);
        imageObserver.unobserve(entry.target);
      });
    }, { threshold: 0.25 });
    images.forEach((element) => imageObserver.observe(element));
    document.addEventListener("majestic:gallery-rendered", (event) => {
      event.detail.querySelectorAll(imageSelector).forEach((element) => imageObserver.observe(element));
    });
  };

  const renderFloatingWhatsApp = () => {
    if (!document.querySelector("[data-floating-whatsapp]")) return;
    const link = document.createElement("a");
    link.className = "floating-whatsapp";
    link.dataset.whatsapp = "";
    link.href = `https://wa.me/${config.WHATSAPP_NUMBER}`;
    link.setAttribute("aria-label", t.floatingWhatsApp);
    link.innerHTML = icon("message-circle");
    document.body.append(link);
  };

  renderHeader();
  renderFooter();
  renderFormulas();
  renderFloatingWhatsApp();
  hydrateIcons();
  splitLetters();
  window.MajesticBooking.hydrateLinks();
  window.MajesticBooking.initBookingForm();
  initMenu();
  initHeader();
  initReveals();

  window.MajesticUI = { icon, recordingMode, reducedMotion, toggleTheme };
})();
