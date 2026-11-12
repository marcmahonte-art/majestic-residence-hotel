(() => {
  const config = window.MAJESTIC_CONFIG;
  const i18n = window.MAJESTIC_I18N;
  const t = i18n.t;
  const isEn = i18n.isEn;
  const pick = (obj, fr, en) => (isEn ? obj[en] || obj[fr] : obj[fr]);

  const lookup = (path) => path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), t);
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = lookup(element.dataset.i18n);
    if (typeof value === "string") element.textContent = value;
  });

  const picture = (base, alt) => `
    <picture>
      <source type="image/avif" srcset="${base}-800.avif 800w, ${base}-1600.avif 1600w" sizes="(max-width: 760px) 92vw, 40vw">
      <img src="${base}-800.webp" srcset="${base}-800.webp 800w, ${base}-1600.webp 1600w" sizes="(max-width: 760px) 92vw, 40vw" width="1600" height="1200" alt="${alt}" loading="lazy" decoding="async">
    </picture>`;

  document.querySelectorAll("[data-dining]").forEach((mount) => {
    mount.innerHTML = config.dining.sections.map((section) => `
      <section class="menu-column" aria-labelledby="menu-${section.id}">
        <h3 id="menu-${section.id}" class="menu-column__title">${pick(section, "title", "titleEn")}</h3>
        <ul class="menu-list">
          ${section.items.map((item) => `
            <li class="menu-item">
              <span class="menu-item__name">${item.name}${item.detail ? `<small>${item.detail}</small>` : ""}</span>
              ${item.price ? `<span class="menu-item__price">${item.price}</span>` : ""}
            </li>`).join("")}
        </ul>
      </section>`).join("");
  });

  const massageMessage = isEn
    ? "Hello Majestic Residence Hotel,\nI would like to book a massage.\nPlease confirm availability."
    : "Bonjour Majestic Residence Hotel,\nJe souhaite réserver un massage.\nMerci de confirmer la disponibilité.";

  document.querySelectorAll("[data-leisure]").forEach((mount) => {
    const massage = config.leisure.massage;
    const games = config.leisure.games;
    mount.innerHTML = `
      <article class="leisure-card" data-reveal="fade">
        <div class="leisure-card__media">${picture(config.MEDIA["loisir-massage"].base, config.MEDIA["loisir-massage"].alt)}</div>
        <div class="leisure-card__body">
          <h3>${pick(massage, "title", "titleEn")}</h3>
          <p>${pick(massage, "intro", "introEn")}</p>
          <ul class="tariff-list">
            ${massage.tariffs.map((tariff) => `<li><span>${pick(tariff, "duration", "durationEn")}</span><strong>${tariff.price}</strong></li>`).join("")}
          </ul>
          <a class="button button--gold" href="https://wa.me/${config.WHATSAPP_NUMBER}?text=${encodeURIComponent(massageMessage)}" target="_blank" rel="noopener noreferrer">${t.menuPage.massageBook}</a>
        </div>
      </article>
      <article class="leisure-card" data-reveal="fade">
        <div class="leisure-card__media">${picture(config.MEDIA["loisir-billard"].base, config.MEDIA["loisir-billard"].alt)}</div>
        <div class="leisure-card__body">
          <h3>${pick(games, "title", "titleEn")}</h3>
          <p>${pick(games, "intro", "introEn")}</p>
          <p class="leisure-card__note">${pick(games, "note", "noteEn")}</p>
        </div>
      </article>`;
  });

  const playIcon = '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M8 5.5v13l11-6.5z"/></svg>';

  document.querySelectorAll("[data-videos]").forEach((mount) => {
    mount.innerHTML = config.videos.map((video) => {
      const title = pick(video, "title", "titleEn");
      return `
      <figure class="video-card" data-reveal="fade">
        <div class="video-card__frame">
          <video class="video-card__video" preload="none" playsinline controls poster="${config.videoRoot}/${video.id}.jpg" aria-label="${title}">
            <source src="${config.videoRoot}/${video.id}.mp4" type="video/mp4">
          </video>
          <button type="button" class="video-card__play" data-video-play aria-label="${t.videoTour.play} : ${title}">${playIcon}</button>
        </div>
        <figcaption>${title}</figcaption>
      </figure>`;
    }).join("");

    const cards = [...mount.querySelectorAll(".video-card")];
    cards.forEach((card) => {
      const video = card.querySelector("video");
      const button = card.querySelector("[data-video-play]");
      const sync = () => {
        const playing = !video.paused && !video.ended;
        card.classList.toggle("is-playing", playing);
        button.setAttribute("aria-label", `${playing ? t.videoTour.pause : t.videoTour.play} : ${video.getAttribute("aria-label")}`);
      };
      button.addEventListener("click", () => {
        if (video.paused) {
          cards.forEach((other) => {
            const otherVideo = other.querySelector("video");
            if (otherVideo !== video) otherVideo.pause();
          });
          video.play();
        } else {
          video.pause();
        }
      });
      video.addEventListener("play", sync);
      video.addEventListener("pause", sync);
      video.addEventListener("ended", sync);
      sync();
    });
  });

  document.querySelectorAll("[data-menu-cta]").forEach((link) => {
    link.href = `https://wa.me/${config.WHATSAPP_NUMBER}`;
    link.textContent = t.menuPage.book;
  });

  const langRoot = `${config.siteRoot}${isEn ? "/en" : ""}`;

  // Catégorie A — chambres à la nuitée (tarif nuit + tarif préférentiel dès 2 nuits).
  document.querySelectorAll("[data-room-cards]").forEach((mount) => {
    mount.innerHTML = ["standard", "superior"].map((id) => {
      const night = window.MajesticBooking.getLocalFormula(id);
      const multi = window.MajesticBooking.getLocalFormula(`${id}-multi`);
      return `
      <article class="room-card" data-reveal="">
        <h3 class="room-card__name">${night.name}</h3>
        <p class="room-card__label">${t.roomsPage.nightRateLabel}</p>
        <p class="room-card__price">${night.price}<span>${t.roomsPage.perNight}</span></p>
        <p class="room-card__deal"><span>${t.roomsPage.preferredRate}</span><strong>${multi.price}<small>${t.roomsPage.perNight}</small></strong></p>
        <ul class="room-card__includes">
          <li>${t.roomsPage.breakfastIncluded}</li>
          <li>${t.roomsPage.poolAccess}</li>
        </ul>
        <a class="button button--outline" href="${langRoot}/booking/?stay=${id}">${t.roomsPage.requestRoom}</a>
      </article>`;
    }).join("");
  });

  // Catégorie B — formules de courte durée (section distincte, jamais mélangée aux nuitées).
  document.querySelectorAll("[data-short-formulas]").forEach((mount) => {
    mount.innerHTML = config.shortFormulas.map((formula) => {
      const detailLabel = formula.detail === "schedule" ? t.roomsPage.scheduleLabel : t.roomsPage.durationLabel;
      return `
      <article class="stay-card" data-reveal="">
        <h3 class="stay-card__title">${pick(formula, "title", "titleEn")}</h3>
        <p class="stay-card__detail"><span class="stay-card__label">${detailLabel}</span><strong>${pick(formula, "duration", "durationEn")}</strong></p>
        <p class="stay-card__price"><span class="stay-card__label">${t.roomsPage.priceLabel}</span><strong>${pick(formula, "price", "priceEn")}</strong></p>
        <a class="button button--gold" data-book-formula="${formula.id}" href="${window.MajesticBooking.createWhatsAppUrl({ formulaId: formula.id })}" target="_blank" rel="noopener noreferrer">${t.roomsPage.book}</a>
      </article>`;
    }).join("");
  });
})();