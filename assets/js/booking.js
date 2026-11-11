(() => {
  const config = window.MAJESTIC_CONFIG;

  const getFormula = (id) =>
    config.formulas.find((formula) => formula.id === id || formula.key === id);

  const buildMessage = ({ formulaId, date, name, preferences } = {}) => {
    const formula = getFormula(formulaId);
    const formulaName = formula ? formula.name : "À conseiller";
    const lines = [
      "Bonjour Majestic Residence Hotel,",
      "Je souhaite faire une demande de réservation.",
      `Formule : ${formulaName}`,
      `Date : ${date || "À préciser"}`,
      `Nom : ${name || "À préciser"}`
    ];
    if (preferences) {
      lines.push(`Préférences : ${preferences}`);
    }
    lines.push("Merci de confirmer la disponibilité.");
    return lines.join("\n");
  };

  const createWhatsAppUrl = (details = {}) =>
    `https://wa.me/${config.WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage(details))}`;

  const hydrateLinks = () => {
    document.querySelectorAll("[data-whatsapp], [data-book-formula]").forEach((link) => {
      link.href = createWhatsAppUrl({ formulaId: link.dataset.bookFormula });
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
  };

  const formatDate = (value) => {
    if (!value) return "À préciser";
    try {
      return new Intl.DateTimeFormat("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }).format(new Date(`${value}T12:00:00`));
    } catch {
      return value;
    }
  };

  const initBookingForm = () => {
    const form = document.querySelector("[data-booking-form]");
    if (!form) return;

    const formulaSelect = form.elements.formule || form.elements.stay;
    const dateInput = form.elements.date;
    const nameInput = form.elements.nom || form.elements.name;
    const preferencesInput = form.elements.preferences;
    const status = document.querySelector("[data-booking-status]");
    const fallback = document.querySelector("[data-booking-fallback]");
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
      .toISOString()
      .split("T")[0];
    dateInput.min = localToday;

    const params = new URLSearchParams(window.location.search);
    const requestedFormula = params.get("formule") || params.get("stay");
    if (requestedFormula && getFormula(requestedFormula)) {
      const match = getFormula(requestedFormula);
      formulaSelect.value = match.id;
    }

    const updateSummary = () => {
      const formula = getFormula(formulaSelect.value);
      const summaryFormula = document.querySelector("[data-summary-formula]");
      const summaryDuration = document.querySelector("[data-summary-duration]");
      const summaryPrice = document.querySelector("[data-summary-price]");
      const summaryDate = document.querySelector("[data-summary-date]");

      if (summaryFormula) summaryFormula.textContent = formula?.name || "Choisissez une formule";
      if (summaryDuration) summaryDuration.textContent = formula?.duration || "Sélectionnez la formule souhaitée";
      if (summaryPrice) summaryPrice.textContent = formula?.price || "—";
      if (summaryDate) summaryDate.textContent = formatDate(dateInput.value);
    };

    const setError = (input, message) => {
      if (!input) return;
      const error = document.getElementById(`${input.id}-error`);
      input.setAttribute("aria-invalid", message ? "true" : "false");
      if (error) error.textContent = message;
    };

    const validate = () => {
      let valid = true;
      if (!getFormula(formulaSelect.value)) {
        setError(formulaSelect, "Veuillez choisir une formule.");
        valid = false;
      } else setError(formulaSelect, "");

      if (!dateInput.value || dateInput.value < localToday) {
        setError(dateInput, "Veuillez choisir une date d’arrivée à partir d’aujourd’hui.");
        valid = false;
      } else setError(dateInput, "");

      if (!nameInput.value || nameInput.value.trim().length < 2) {
        setError(nameInput, "Veuillez indiquer votre nom complet.");
        valid = false;
      } else setError(nameInput, "");

      return valid;
    };

    form.addEventListener("input", (event) => {
      if (event.target.matches("select, input, textarea")) setError(event.target, "");
      updateSummary();
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!validate()) {
        form.querySelector("[aria-invalid='true']")?.focus();
        return;
      }

      const details = {
        formulaId: formulaSelect.value,
        date: formatDate(dateInput.value),
        name: nameInput.value.trim(),
        preferences: preferencesInput ? preferencesInput.value.trim() : ""
      };
      const url = createWhatsAppUrl(details);
      if (fallback) {
        fallback.href = url;
        fallback.hidden = false;
      }
      if (status) {
        status.textContent = "Votre demande est prête. Envoyez-la sur WhatsApp pour que l’établissement confirme la disponibilité.";
      }
      window.open(url, "_blank", "noopener,noreferrer");
    });

    updateSummary();
  };

  window.MajesticBooking = { buildMessage, createWhatsAppUrl, hydrateLinks, initBookingForm, getFormula, formatDate };
})();
