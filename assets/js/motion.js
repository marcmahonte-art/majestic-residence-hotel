(() => {
  const ui = window.MajesticUI;
  const config = window.MAJESTIC_CONFIG;
  if (!ui || !config) return;

  let reducedMotion = ui.reducedMotion.matches;
  let recordingMode = ui.recordingMode;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const desktopGallery = window.matchMedia("(min-width: 761px) and (min-height: 600px)");
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const saveData = Boolean(connection?.saveData || /(^|-)2g/.test(connection?.effectiveType || ""));
  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const lerp = (from, to, amount) => from + (to - from) * amount;
  const time = () => document.timeline.currentTime || performance.now();

  const hero = document.querySelector("[data-hero]");
  const heroMedia = hero?.querySelector(".hero__media");
  const heroImage = heroMedia?.querySelector("img");
  const heroTitle = hero?.querySelector("[data-hero-title]");
  const heroLight = hero?.querySelector(".hero__light");
  const heroForeground = hero?.querySelector("[data-hero-foreground]");
  const dots = [...document.querySelectorAll(".photo-dot")];
  const parallaxFrames = [...document.querySelectorAll("[data-parallax]")];
  const badge = document.querySelector(".whatsapp-badge");
  const badgeRing = badge?.querySelector(".whatsapp-badge__ring");
  const gallerySection = document.querySelector("[data-gallery-scroll]");
  const galleryTrack = gallerySection?.querySelector('[data-gallery="preview"]');
  const galleryContainer = galleryTrack?.parentElement;
  const bookingCta = document.querySelector(".booking-cta");
  const bookingBackground = bookingCta?.querySelector(".booking-cta__background");

  let targetScroll = window.scrollY;
  let smoothScroll = targetScroll;
  let frameId = 0;
  let galleryMetrics = { top: 0, range: 1, distance: 0 };
  let galleryItems = [];
  let galleryProgress = 0;
  let heroBreath = 1;
  let recordingMain = null;

  const pointer = { targetX: 0, targetY: 0, x: 0, y: 0 };
  const watched = new Map();
  const isVisible = (element) => watched.get(element)?.visible || false;
  const anyVisible = (element) => Boolean(element && isVisible(element));

  const setWillChange = (targets, enabled, properties = "transform, opacity") => {
    targets.filter(Boolean).forEach((element) => {
      element.style.willChange = enabled ? properties : "";
    });
  };

  const visibilityObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const item = watched.get(entry.target);
      if (!item) return;
      item.visible = entry.isIntersecting;
      setWillChange(item.targets, item.visible && !reducedMotion, item.properties);
    });
    start();
  });
  const watch = (element, targets = [], properties) => {
    if (!element || watched.has(element)) return;
    watched.set(element, { visible: false, targets, properties });
    visibilityObserver.observe(element);
  };

  watch(hero, [heroMedia, heroImage, heroTitle, heroLight, heroForeground]);
  dots.forEach((dot) => watch(dot, [dot.querySelector("img")]));
  watch(badge, [badgeRing]);
  watch(gallerySection, [galleryTrack]);
  watch(bookingCta, [bookingBackground]);
  parallaxFrames.forEach((frame) => watch(frame, [frame.querySelector("picture")]));

  const initHeroPointer = () => {
    if (!hero) return;
    hero.addEventListener("pointermove", (event) => {
      if (reducedMotion || !finePointer.matches) return;
      const rect = hero.getBoundingClientRect();
      pointer.targetX = clamp((event.clientX - rect.left) / rect.width * 2 - 1, -1, 1);
      pointer.targetY = clamp((event.clientY - rect.top) / rect.height * 2 - 1, -1, 1);
      start();
    });
    hero.addEventListener("pointerleave", () => {
      pointer.targetX = 0;
      pointer.targetY = 0;
      start();
    });
  };

  const updateHero = (timestamp) => {
    if (!hero || !anyVisible(hero)) return;
    pointer.x = lerp(pointer.x, pointer.targetX, 0.06);
    pointer.y = lerp(pointer.y, pointer.targetY, 0.06);
    const progress = clamp(smoothScroll / (window.innerHeight * 0.65));
    heroBreath = 1.0225 - 0.0225 * Math.cos(timestamp / 44000 * Math.PI * 2);
    hero.style.setProperty("--hero-photo-y", `${smoothScroll * 0.32}px`);
    hero.style.setProperty("--hero-title-y", `${smoothScroll * 0.22}px`);
    hero.style.setProperty("--hero-pointer-x", `${pointer.x * 8}px`);
    hero.style.setProperty("--hero-pointer-y", `${pointer.y * 8}px`);
    hero.style.setProperty("--hero-title-pointer-x", `${pointer.x * 4}px`);
    hero.style.setProperty("--hero-title-pointer-y", `${pointer.y * 4}px`);
    hero.style.setProperty("--hero-breath", heroBreath.toFixed(5));
    hero.style.setProperty("--hero-light-x", `${-22 + 44 * (0.5 - 0.5 * Math.cos(timestamp / 36000 * Math.PI * 2))}%`);
    hero.style.setProperty("--hero-blur", `${progress * 6}px`);
    hero.style.setProperty("--hero-fade", progress);
    hero.style.setProperty("--hero-content-opacity", Math.max(0, 1 - progress * 1.35));
    if (heroForeground) {
      const phase = Number(heroForeground.dataset.phase || 0);
      const rotation = Math.sin(timestamp / 7000 * Math.PI * 2 + phase) * 0.6;
      heroForeground.style.transform = `translate3d(${pointer.x * 16}px, ${smoothScroll * 0.12 + pointer.y * 16}px, 0) rotate(${rotation}deg)`;
    }
  };

  const updateDots = (timestamp) => {
    dots.forEach((dot, index) => {
      if (!anyVisible(dot) || !dot.classList.contains("is-visible")) return;
      const phase = index * Math.PI * 0.75;
      const rect = dot.getBoundingClientRect();
      const scrollPhase = clamp((window.innerHeight / 2 - rect.top - (targetScroll - smoothScroll) - rect.height / 2) / window.innerHeight, -1, 1);
      dot.style.setProperty("--dot-x", `${Math.sin(timestamp / 14000 * Math.PI * 2 + phase) * 6}%`);
      dot.style.setProperty("--dot-y", `${Math.cos(timestamp / 14000 * Math.PI * 2 + phase) * 6}%`);
      dot.style.setProperty("--dot-rotate", `${Math.sin(timestamp / 14000 * Math.PI * 2 + phase) * 3}deg`);
      dot.style.setProperty("--dot-scroll", `${scrollPhase * 10}%`);
    });
  };

  const updateParallax = () => {
    parallaxFrames.forEach((frame) => {
      if (!anyVisible(frame)) return;
      const rect = frame.getBoundingClientRect();
      const progress = (window.innerHeight / 2 - rect.top - (targetScroll - smoothScroll) - rect.height / 2) / window.innerHeight;
      frame.style.setProperty("--parallax-y", `${clamp(progress * 12, -7, 7)}%`);
    });
  };

  const updateBadge = (timestamp) => {
    if (!badge || !anyVisible(badge)) return;
    badge.style.setProperty("--badge-rotation", `${(timestamp / 16000 * 360) % 360}deg`);
  };

  const refreshGallery = () => {
    if (!gallerySection || !galleryTrack || !galleryContainer) return;
    galleryItems = [...galleryTrack.querySelectorAll(".gallery-item")].map((element) => ({
      element,
      picture: element.querySelector("picture"),
      left: element.offsetLeft,
      width: element.offsetWidth
    }));
    galleryMetrics = {
      top: gallerySection.offsetTop,
      range: Math.max(1, gallerySection.offsetHeight - gallerySection.querySelector(".gallery-scroll__sticky").offsetHeight),
      distance: Math.max(0, galleryTrack.scrollWidth - galleryContainer.clientWidth),
      left: galleryContainer.getBoundingClientRect().left
    };
  };

  const updateGallery = (force = false) => {
    if (!gallerySection || !galleryTrack || !desktopGallery.matches || reducedMotion || (!force && !anyVisible(gallerySection))) return;
    galleryProgress = clamp((smoothScroll - galleryMetrics.top) / galleryMetrics.range);
    galleryTrack.style.setProperty("--gallery-x", `${-galleryProgress * galleryMetrics.distance}px`);
    galleryItems.forEach(({ element, picture, left, width }) => {
      const position = galleryMetrics.left + left - galleryProgress * galleryMetrics.distance;
      if (position + width < -100 || position > window.innerWidth + 100) return;
      const distance = clamp((position + width / 2 - window.innerWidth / 2) / (window.innerWidth / 2), -1, 1);
      const focus = 1 - Math.abs(distance);
      element.style.setProperty("--gallery-item-scale", (0.92 + focus * 0.08).toFixed(3));
      element.style.setProperty("--gallery-item-opacity", (0.75 + focus * 0.25).toFixed(3));
      picture?.style.setProperty("--gallery-image-x", `${distance * 12}%`);
    });
  };

  const cursor = { active: false, x: -100, y: -100, targetX: -100, targetY: -100, scale: 0, element: null };
  const initGalleryCursor = () => {
    if (cursor.element || !finePointer.matches || reducedMotion || !document.querySelector("[data-gallery]")) return;
    const element = document.createElement("div");
    element.className = "gallery-cursor";
    element.setAttribute("aria-hidden", "true");
    element.textContent = "VOIR";
    document.body.append(element);
    document.body.classList.add("has-gallery-cursor");
    cursor.element = element;
    document.querySelectorAll(".gallery-item__button").forEach((button) => {
      button.addEventListener("pointerenter", (event) => {
        if (reducedMotion || !finePointer.matches) return;
        cursor.active = true;
        cursor.targetX = event.clientX;
        cursor.targetY = event.clientY;
        if (cursor.scale < 0.02) {
          cursor.x = event.clientX;
          cursor.y = event.clientY;
        }
        setWillChange([element], true);
        start();
      });
      button.addEventListener("pointermove", (event) => {
        cursor.targetX = event.clientX;
        cursor.targetY = event.clientY;
        start();
      });
      button.addEventListener("pointerleave", () => {
        cursor.active = false;
        start();
      });
    });
  };

  const updateCursor = () => {
    if (!cursor.element || (!cursor.active && cursor.scale < 0.01)) return;
    cursor.x = lerp(cursor.x, cursor.targetX, 0.15);
    cursor.y = lerp(cursor.y, cursor.targetY, 0.15);
    cursor.scale = lerp(cursor.scale, cursor.active ? 1 : 0, 0.15);
    cursor.element.style.opacity = cursor.scale.toFixed(3);
    cursor.element.style.transform = `translate3d(${cursor.x - 42}px, ${cursor.y - 42}px, 0) scale(${cursor.scale})`;
    if (!cursor.active && cursor.scale < 0.01) setWillChange([cursor.element], false);
  };

  const preview = {
    active: false,
    formula: "",
    x: -300,
    y: -300,
    targetX: -300,
    targetY: -300,
    rotation: 0,
    targetRotation: 0,
    lastClientX: 0,
    until: 0,
    token: 0,
    element: null,
    image: null,
    images: []
  };

  const changePreviewImage = async (id) => {
    const media = config.MEDIA.formules?.[id];
    if (!media || preview.formula === id) return;
    preview.formula = id;
    const token = ++preview.token;
    const next = preview.images.find((image) => image !== preview.image);
    next.src = `${media.base}-800.webp`;
    next.alt = media.alt;
    try {
      await next.decode();
    } catch {
      if (token === preview.token) preview.formula = "";
      return;
    }
    if (token !== preview.token || !preview.active || reducedMotion) return;
    preview.image?.classList.remove("is-current");
    next.classList.add("is-current");
    preview.image = next;
    preview.element.classList.add("is-active");
  };

  const initFormulaPreview = () => {
    const tables = [...document.querySelectorAll(".formula-table")];
    if (preview.element || !finePointer.matches || reducedMotion || !tables.length || !config.MEDIA.formules) return;
    const element = document.createElement("div");
    element.className = "formula-preview";
    element.setAttribute("aria-hidden", "true");
    element.innerHTML = '<div class="formula-preview__frame"><img alt="" width="800" height="1000"><img alt="" width="800" height="1000"></div>';
    document.body.append(element);
    preview.element = element;
    preview.images = [...element.querySelectorAll("img")];

    tables.forEach((table) => {
      table.querySelectorAll("[data-book-formula]").forEach((row) => {
        row.addEventListener("pointerenter", (event) => {
          if (reducedMotion || !finePointer.matches) return;
          preview.active = true;
          preview.targetX = clamp(event.clientX + 28, 20, window.innerWidth - 260);
          preview.targetY = clamp(event.clientY - 120, 90, window.innerHeight - 320);
          if (!element.classList.contains("is-active")) {
            preview.x = preview.targetX;
            preview.y = preview.targetY;
          }
          preview.lastClientX = event.clientX;
          if (preview.image) element.classList.add("is-active");
          setWillChange([element, ...preview.images], true);
          changePreviewImage(row.dataset.bookFormula);
          start();
        });
        row.addEventListener("pointermove", (event) => {
          if (reducedMotion || !finePointer.matches) return;
          const velocity = event.clientX - preview.lastClientX;
          preview.lastClientX = event.clientX;
          preview.targetX = clamp(event.clientX + 28, 20, window.innerWidth - 260);
          preview.targetY = clamp(event.clientY - 120, 90, window.innerHeight - 320);
          preview.targetRotation = clamp(velocity * 0.35, -6, 6);
          if (preview.formula !== row.dataset.bookFormula) changePreviewImage(row.dataset.bookFormula);
          start();
        });
      });
      table.addEventListener("pointerleave", () => {
        preview.active = false;
        preview.formula = "";
        preview.token += 1;
        preview.targetRotation = 0;
        preview.until = time() + 500;
        element.classList.remove("is-active");
        start();
      });
    });
  };

  const updatePreview = () => {
    if (!preview.element) return;
    if (!preview.active && time() > preview.until) {
      setWillChange([preview.element, ...preview.images], false);
      return;
    }
    preview.x = lerp(preview.x, preview.targetX, 0.1);
    preview.y = lerp(preview.y, preview.targetY, 0.1);
    preview.rotation = lerp(preview.rotation, preview.targetRotation, 0.1);
    preview.targetRotation = lerp(preview.targetRotation, 0, 0.08);
    preview.element.style.transform = `translate3d(${preview.x}px, ${preview.y}px, 0) rotate(${preview.rotation}deg)`;
  };

  const fireflies = [];
  const initFireflies = () => {
    if (!bookingCta || reducedMotion || fireflies.length) return;
    const layer = document.createElement("div");
    layer.className = "booking-cta__fireflies";
    layer.setAttribute("aria-hidden", "true");
    for (let index = 0; index < 8; index += 1) {
      const dot = document.createElement("span");
      dot.className = "firefly";
      dot.style.setProperty("--firefly-x", `${8 + ((index * 37) % 86)}%`);
      dot.style.setProperty("--firefly-size", `${2 + (index % 3)}px`);
      layer.append(dot);
      fireflies.push({ element: dot, phase: (index * 0.137) % 1, duration: 18000 + index * 1300 });
    }
    bookingCta.append(layer);
    const watchedBooking = watched.get(bookingCta);
    watchedBooking?.targets.push(...fireflies.map((firefly) => firefly.element));
  };

  const updateBooking = (timestamp) => {
    if (!bookingCta || !anyVisible(bookingCta)) return;
    const rect = bookingCta.getBoundingClientRect();
    const progress = clamp((window.innerHeight - rect.top) / (window.innerHeight + rect.height));
    bookingCta.style.setProperty("--booking-scale", (1.08 - progress * 0.08).toFixed(4));
    fireflies.forEach((firefly) => {
      const local = (timestamp / firefly.duration + firefly.phase) % 1;
      firefly.element.style.setProperty("--firefly-y", `${-local * (rect.height + 40)}px`);
      firefly.element.style.opacity = (Math.sin(local * Math.PI) * 0.4).toFixed(3);
    });
  };

  const initRecording = () => {
    if (!recordingMode) return;
    const main = document.querySelector("main");
    const sections = [...document.querySelectorAll("[data-record-section]")];
    if (!main || sections.length < 3) return;
    recordingMain = main;
    document.body.classList.add("is-recording");
    const offsets = sections.map((section) => section.offsetTop);
    main.animate([
      { transform: "translateY(0px)", offset: 0 },
      { transform: "translateY(0px)", offset: 0.3 },
      { transform: `translateY(${-offsets[1]}px)`, offset: 0.515 },
      { transform: `translateY(${-offsets[1]}px)`, offset: 0.654 },
      { transform: `translateY(${-offsets[2]}px)`, offset: 0.855 },
      { transform: `translateY(${-offsets[2]}px)`, offset: 1 }
    ], { duration: 6500, fill: "forwards", easing: "cubic-bezier(.22,1,.36,1)" });
    sections.forEach((section, index) => {
      window.setTimeout(() => {
        section.querySelectorAll("[data-reveal], [data-split], .photo-dot, .formula-row, .portrait-reveal").forEach((element) => element.classList.add("is-visible"));
      }, [0, 2650, 4850][index]);
    });
  };

  const hasWork = () => {
    if (recordingMode) return true;
    if ([hero, badge, bookingCta, ...dots].some(anyVisible)) return true;
    if (cursor.active || cursor.scale > 0.01) return true;
    if (preview.active || time() < preview.until) return true;
    return Math.abs(targetScroll - smoothScroll) > 0.1;
  };

  const tick = () => {
    frameId = 0;
    if (reducedMotion) return;
    if (recordingMain) {
      const matrix = new DOMMatrixReadOnly(getComputedStyle(recordingMain).transform);
      targetScroll = -matrix.m42;
      smoothScroll = targetScroll;
    } else {
      smoothScroll = Math.abs(targetScroll - smoothScroll) < 0.1 ? targetScroll : lerp(smoothScroll, targetScroll, 0.1);
    }
    const timestamp = time();
    updateHero(timestamp);
    updateDots(timestamp);
    updateParallax();
    updateBadge(timestamp);
    updateGallery();
    updateCursor();
    updatePreview();
    updateBooking(timestamp);
    if (!document.hidden && hasWork()) frameId = requestAnimationFrame(tick);
  };

  function start() {
    if (reducedMotion || frameId || document.hidden) return;
    frameId = requestAnimationFrame(tick);
  }

  const refresh = () => {
    targetScroll = recordingMode ? targetScroll : window.scrollY;
    refreshGallery();
    if (galleryTrack && (!desktopGallery.matches || reducedMotion)) {
      galleryTrack.style.removeProperty("--gallery-x");
    }
    start();
  };

  galleryTrack?.addEventListener("focusin", (event) => {
    const item = event.target.closest(".gallery-item");
    if (!item) return;
    item.classList.add("is-visible");
    if (reducedMotion || !desktopGallery.matches || !galleryMetrics.distance) return;
    const metrics = galleryItems.find((entry) => entry.element === item);
    const progress = clamp((metrics.left + metrics.width / 2 - galleryContainer.clientWidth / 2) / galleryMetrics.distance);
    gallerySection.querySelector(".gallery-scroll__sticky").scrollLeft = 0;
    galleryTrack.scrollLeft = 0;
    smoothScroll = targetScroll = galleryMetrics.top + progress * galleryMetrics.range;
    window.scrollTo({ top: targetScroll, behavior: "instant" });
    updateGallery(true);
    start();
  });

  const suspendMotion = () => {
    cancelAnimationFrame(frameId);
    frameId = 0;
    watched.forEach((item) => setWillChange(item.targets, false));
    setWillChange([cursor.element, preview.element, ...preview.images], false);
  };

  ui.reducedMotion.addEventListener("change", (event) => {
    reducedMotion = event.matches;
    if (reducedMotion) {
      suspendMotion();
      document.querySelectorAll("[data-reveal], [data-split], .photo-dot, .formula-row").forEach((element) => {
        element.classList.add("is-visible");
        element.style.willChange = "";
        element.querySelectorAll("img").forEach((image) => { image.style.willChange = ""; });
      });
      document.getAnimations().forEach((animation) => animation.cancel());
      recordingMain = null;
      recordingMode = false;
      document.body.classList.remove("is-recording", "has-gallery-cursor");
      cursor.active = false;
      cursor.scale = 0;
      preview.active = false;
      preview.formula = "";
      preview.until = 0;
      preview.token += 1;
      preview.element?.classList.remove("is-active");
    } else {
      initGalleryCursor();
      initFormulaPreview();
      initFireflies();
      document.body.classList.toggle("has-gallery-cursor", Boolean(cursor.element) && finePointer.matches);
      watched.forEach((item) => setWillChange(item.targets, item.visible, item.properties));
    }
    smoothScroll = targetScroll = window.scrollY;
    refresh();
  });
  finePointer.addEventListener("change", () => {
    if (finePointer.matches && !reducedMotion) {
      initGalleryCursor();
      initFormulaPreview();
    }
    pointer.targetX = pointer.targetY = 0;
    cursor.active = false;
    preview.active = false;
    preview.element?.classList.remove("is-active");
    document.body.classList.toggle("has-gallery-cursor", Boolean(cursor.element) && finePointer.matches && !reducedMotion);
    start();
  });

  window.addEventListener("scroll", () => {
    if (!recordingMode) targetScroll = window.scrollY;
    start();
  }, { passive: true });
  window.addEventListener("resize", refresh, { passive: true });
  window.addEventListener("load", refresh, { once: true });
  document.fonts?.ready.then(refresh);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      suspendMotion();
    } else {
      watched.forEach((item) => setWillChange(item.targets, item.visible && !reducedMotion, item.properties));
      start();
    }
  });

  initHeroPointer();
  initGalleryCursor();
  initFormulaPreview();
  initFireflies();
  initRecording();
  refresh();

  window.MajesticMotion = {
    refresh,
    getState: () => ({
      running: Boolean(frameId),
      reducedMotion,
      recordingMode,
      saveData,
      smoothScroll,
      heroBreath,
      galleryProgress,
      galleryDistance: galleryMetrics.distance,
      previewActive: preview.active,
      previewFormula: preview.formula,
      fireflies: fireflies.length
    })
  };
})();
