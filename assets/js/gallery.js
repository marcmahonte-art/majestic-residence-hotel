(() => {
  const config = window.MAJESTIC_CONFIG;
  const galleries = [...document.querySelectorAll("[data-gallery]")];
  if (!galleries.length) return;

  const picture = (item, eager = false) => `
    <picture>
      <source type="image/avif" srcset="${item.base}-800.avif 800w, ${item.base}-1600.avif 1600w" sizes="(max-width: 760px) 82vw, 55vw">
      <img src="${item.base}-800.webp" srcset="${item.base}-800.webp 800w, ${item.base}-1600.webp 1600w" sizes="(max-width: 760px) 82vw, 55vw" width="1600" height="1200" alt="${item.alt}" loading="${eager ? "eager" : "lazy"}" decoding="async">
    </picture>`;

  const createDialog = () => {
    const dialog = document.createElement("dialog");
    dialog.className = "lightbox";
    dialog.setAttribute("aria-label", "Visionneuse de photos en plein écran");
    dialog.innerHTML = `
      <button class="lightbox__close" type="button" data-lightbox-close aria-label="Fermer la photo">${window.MajesticUI.icon("x")}</button>
      <button class="lightbox__nav lightbox__nav--prev" type="button" data-lightbox-prev aria-label="Photo précédente">${window.MajesticUI.icon("chevron-left")}</button>
      <figure class="lightbox__figure">
        <img data-lightbox-image alt="" width="1600" height="1200">
        <figcaption><span data-lightbox-category></span><strong data-lightbox-title></strong><span data-lightbox-count></span></figcaption>
      </figure>
      <button class="lightbox__nav lightbox__nav--next" type="button" data-lightbox-next aria-label="Photo suivante">${window.MajesticUI.icon("chevron-right")}</button>`;
    document.body.append(dialog);
    return dialog;
  };

  const dialog = createDialog();
  const dialogImage = dialog.querySelector("[data-lightbox-image]");
  const dialogCategory = dialog.querySelector("[data-lightbox-category]");
  const dialogTitle = dialog.querySelector("[data-lightbox-title]");
  const dialogCount = dialog.querySelector("[data-lightbox-count]");
  let activeItems = [];
  let activeIndex = 0;
  let activeSource = null;
  let activeTransition = null;
  let touchStartX = 0;

  const stopAnimations = () => {
    const transition = activeTransition;
    activeTransition = null;
    if (transition) transition.skipTransition();
    if (activeSource) activeSource.style.viewTransitionName = "";
    dialogImage.style.viewTransitionName = "";
    dialogImage.getAnimations().forEach((animation) => animation.cancel());
  };

  const showImage = (index, animate = false) => {
    stopAnimations();
    activeIndex = (index + activeItems.length) % activeItems.length;
    const item = activeItems[activeIndex];
    dialogImage.src = `${item.base}-1600.webp`;
    dialogImage.alt = item.alt;
    dialogCategory.textContent = item.category;
    dialogTitle.textContent = item.title;
    dialogCount.textContent = `${activeIndex + 1} / ${activeItems.length}`;
    if (animate && !window.MajesticUI.reducedMotion.matches) {
      dialogImage.animate([
        { opacity: 0.35, transform: "scale(.99)" },
        { opacity: 1, transform: "scale(1)" }
      ], { duration: 300, easing: "cubic-bezier(.22,1,.36,1)" });
    }
  };

  const flipOpen = () => {
    if (!dialog.open || !activeSource || window.MajesticUI.reducedMotion.matches) return;
    const first = activeSource.getBoundingClientRect();
    const last = dialogImage.getBoundingClientRect();
    if (!first.width || !first.height || !last.width || !last.height) return;
    dialogImage.animate([
      {
        opacity: 0.65,
        transformOrigin: "top left",
        transform: `translate(${first.left - last.left}px, ${first.top - last.top}px) scale(${first.width / last.width}, ${first.height / last.height})`
      },
      { opacity: 1, transformOrigin: "top left", transform: "translate(0, 0) scale(1)" }
    ], { duration: 500, easing: "cubic-bezier(.22,1,.36,1)" });
  };

  const openDialog = (items, index, source) => {
    activeItems = items;
    showImage(index);
    activeSource = source;
    const reveal = () => {
      if (!dialog.open) dialog.showModal();
      document.body.classList.add("lightbox-open");
    };
    if (document.startViewTransition && !window.MajesticUI.reducedMotion.matches) {
      source.style.viewTransitionName = "majestic-gallery-image";
      try {
        const transition = document.startViewTransition(() => {
          if (activeTransition !== transition) return;
          source.style.viewTransitionName = "";
          reveal();
          dialogImage.style.viewTransitionName = "majestic-gallery-image";
        });
        activeTransition = transition;
        const cleanup = () => {
          if (activeTransition !== transition) return;
          activeTransition = null;
          source.style.viewTransitionName = "";
          dialogImage.style.viewTransitionName = "";
        };
        transition.ready.then(undefined, () => {
          if (activeTransition !== transition) return;
          stopAnimations();
          reveal();
          flipOpen();
        });
        transition.finished.then(cleanup, cleanup);
        return;
      } catch {
        stopAnimations();
      }
    }
    reveal();
    flipOpen();
  };

  const closeDialog = () => {
    stopAnimations();
    dialog.close();
    document.body.classList.remove("lightbox-open");
    activeSource = null;
  };

  window.MajesticUI.reducedMotion.addEventListener("change", (event) => {
    if (event.matches) stopAnimations();
  });

  dialog.querySelector("[data-lightbox-close]").addEventListener("click", closeDialog);
  dialog.querySelector("[data-lightbox-prev]").addEventListener("click", () => showImage(activeIndex - 1, true));
  dialog.querySelector("[data-lightbox-next]").addEventListener("click", () => showImage(activeIndex + 1, true));
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeDialog();
  });
  dialog.addEventListener("close", () => {
    // A queued close event can arrive after a new opening.
    if (dialog.open) return;
    stopAnimations();
    document.body.classList.remove("lightbox-open");
    activeSource = null;
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog();
  });
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") showImage(activeIndex - 1, true);
    if (event.key === "ArrowRight") showImage(activeIndex + 1, true);
  });
  dialog.addEventListener("pointerdown", (event) => { touchStartX = event.clientX; });
  dialog.addEventListener("pointerup", (event) => {
    const distance = event.clientX - touchStartX;
    if (Math.abs(distance) > 50) showImage(activeIndex + (distance < 0 ? 1 : -1), true);
  });

  galleries.forEach((gallery) => {
    const keys = config[gallery.dataset.gallery === "preview" ? "galleryPreview" : "galleryAll"];
    const items = keys.map((key) => config.MEDIA[key]);
    gallery.innerHTML = items.map((item, index) => `
      <figure class="gallery-item" data-category="${item.category}" data-reveal="fade">
        <button type="button" class="gallery-item__button" data-gallery-index="${index}" aria-label="Agrandir la photo : ${item.title}">
          ${picture(item, gallery.dataset.gallery === "preview" && index === 0)}
          <span class="gallery-item__expand" aria-hidden="true">${window.MajesticUI.icon("expand")}</span>
        </button>
        <figcaption><span>${item.category}</span><strong>${item.title}</strong></figcaption>
      </figure>`).join("");

    if (window.MajesticUI.reducedMotion.matches) {
      gallery.querySelectorAll("[data-reveal]").forEach((element) => element.classList.add("is-visible"));
    }

    const buttons = [...gallery.querySelectorAll("[data-gallery-index]")];
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const visibleButtons = buttons.filter((item) => !item.closest(".gallery-item").hidden);
        const visibleItems = visibleButtons.map((item) => items[Number(item.dataset.galleryIndex)]);
        openDialog(visibleItems, visibleButtons.indexOf(button), button.querySelector("img"));
      });
    });

    const filters = document.querySelector("[data-gallery-filters]");
    if (filters && gallery.dataset.gallery === "full") {
      const categories = ["Toutes", ...new Set(items.map((item) => item.category))];
      filters.innerHTML = categories.map((category, index) => `
        <button type="button" class="filter-button${index === 0 ? " is-active" : ""}" data-filter="${category}" aria-pressed="${index === 0}">${category}</button>`).join("");
      filters.addEventListener("click", (event) => {
        const button = event.target.closest("[data-filter]");
        if (!button) return;
        filters.querySelectorAll(".filter-button").forEach((btn) => {
          btn.classList.toggle("is-active", btn === button);
          btn.setAttribute("aria-pressed", String(btn === button));
        });
        const category = button.dataset.filter;
        gallery.querySelectorAll(".gallery-item").forEach((item) => {
          item.hidden = category !== "Toutes" && item.dataset.category !== category;
        });
      });
    }
  });

  document.dispatchEvent(new CustomEvent("majestic:gallery-rendered", { detail: document }));
})();
