/**
 * Majestic Residence Hotel — dictionnaire d'interface FR / EN.
 *
 * La langue est portée par l'attribut lang de <html> (fr sur les pages
 * racine, en sur les pages /en/). Ce module est chargé avant app.js,
 * booking.js et gallery.js, qui lisent tous window.MAJESTIC_I18N.t.
 */
(() => {
  const raw = (document.documentElement.getAttribute("lang") || "fr").toLowerCase();
  const lang = raw.startsWith("en") ? "en" : "fr";

  const dictionaries = {
    fr: {
      locale: "fr-FR",
      meta: {
        skipLink: "Aller au contenu principal"
      },
      nav: {
        home: "Accueil",
        rooms: "Chambres",
        services: "Services",
        gallery: "Galerie",
        contact: "Contact"
      },
      header: {
        menu: "MENU",
        menuOpen: "Ouvrir le menu",
        menuClose: "FERMER",
        closeMenu: "Fermer le menu",
        home: "Majestic Residence Hotel — Accueil",
        book: "RÉSERVER",
        bookAria: "Demander une réservation",
        primaryNav: "Navigation principale",
        siteSections: "Rubriques du site",
        bookingButton: "DEMANDE DE RÉSERVATION"
      },
      theme: {
        light: "THÈME CLAIR",
        dark: "THÈME SOMBRE",
        toLight: "Passer au thème clair",
        toDark: "Passer au thème sombre"
      },
      langSwitch: {
        group: "Choix de la langue",
        fr: "Français",
        en: "English"
      },
      footer: {
        tagline: "Des séjours élégants,<br>des instants paisibles.",
        contact: "CONTACTEZ-NOUS",
        address: "ADRESSE",
        navigation: "NAVIGATION",
        booking: "Demande de réservation",
        city: "Bonoua, quartier Delanoi",
        landmark: "À 10 minutes de l’église Notre-Dame-de-la-Garde",
        country: "Côte d’Ivoire",
        footerNav: "Navigation de pied de page"
      },
      formulas: {
        book: "RÉSERVER",
        rowAria: (name, duration, price) => `Demander la ${name}, ${duration}, ${price} sur WhatsApp`,
        standard: { name: "Chambre standard", duration: "Par nuit", price: "30 000 FCFA" },
        superior: { name: "Chambre supérieure", duration: "Par nuit", price: "40 000 FCFA" },
        "standard-multi": { name: "Chambre standard", duration: "Dès 2 nuits", price: "25 000 FCFA" },
        "superior-multi": { name: "Chambre supérieure", duration: "Dès 2 nuits", price: "35 000 FCFA" }
      },
      floatingWhatsApp: "Demander une réservation sur WhatsApp",
      booking: {
        fallbackFormula: "À conseiller",
        fallbackDate: "À préciser",
        fallbackName: "À préciser",
        messageIntro: "Bonjour Majestic Residence Hotel,",
        messageRequest: "Je souhaite faire une demande de réservation.",
        messageFormula: "Formule",
        messageDate: "Date",
        messageName: "Nom",
        messagePreferences: "Préférences",
        messageOutro: "Merci de confirmer la disponibilité.",
        summaryEmptyFormula: "Choisissez une formule",
        summaryEmptyDuration: "Sélectionnez la formule souhaitée",
        summaryEmptyDate: "À préciser",
        errorFormula: "Veuillez choisir une formule.",
        errorDate: "Veuillez choisir une date d’arrivée à partir d’aujourd’hui.",
        errorName: "Veuillez indiquer votre nom complet.",
        status: "Votre demande est prête. Envoyez-la sur WhatsApp pour que l’établissement confirme la disponibilité."
      },
      gallery: {
        lightbox: "Visionneuse de photos en plein écran",
        close: "Fermer la photo",
        previous: "Photo précédente",
        next: "Photo suivante",
        zoom: (title) => `Agrandir la photo : ${title}`,
        all: "Toutes",
        filterGroup: "Filtrer les photos par catégorie"
      },
      media: {
        hero: {
          alt: "Piscine du Majestic Residence Hotel au crépuscule"
        },
        chambre: {
          title: "La chambre",
          category: "Chambres",
          alt: "Chambre avec un lit double, une décoration murale et une lumière chaleureuse"
        },
        piscineJour: {
          title: "La piscine",
          category: "Piscine",
          alt: "Piscine reflétant les palmiers à la lumière du jour"
        },
        piscineCour: {
          title: "La cour",
          category: "Piscine",
          alt: "Piscine de la cour centrale entourée des bâtiments de la résidence"
        },
        exterieur: {
          title: "La résidence",
          category: "Extérieurs",
          alt: "Bâtiments et végétation du Majestic Residence Hotel"
        },
        nuitRose: {
          title: "La piscine éclairée",
          category: "De nuit",
          alt: "Piscine aux lumières roses sous le ciel nocturne de Bonoua"
        },
        nuitBleue: {
          title: "La résidence de nuit",
          category: "De nuit",
          alt: "Lumières bleues de la piscine se reflétant sur la façade à la nuit tombée"
        },
        nuitTerrasse: {
          title: "Vue nocturne",
          category: "De nuit",
          alt: "Vue en hauteur sur la piscine et la résidence de nuit"
        }
      }
    },

    en: {
      locale: "en-GB",
      meta: {
        skipLink: "Skip to main content"
      },
      nav: {
        home: "Home",
        rooms: "Rooms",
        services: "Services",
        gallery: "Gallery",
        contact: "Contact"
      },
      header: {
        menu: "MENU",
        menuOpen: "Open the menu",
        menuClose: "CLOSE",
        closeMenu: "Close the menu",
        home: "Majestic Residence Hotel — Home",
        book: "BOOK",
        bookAria: "Request a booking",
        primaryNav: "Main navigation",
        siteSections: "Site sections",
        bookingButton: "BOOKING REQUEST"
      },
      theme: {
        light: "LIGHT THEME",
        dark: "DARK THEME",
        toLight: "Switch to the light theme",
        toDark: "Switch to the dark theme"
      },
      langSwitch: {
        group: "Language selection",
        fr: "Français",
        en: "English"
      },
      footer: {
        tagline: "Elegant stays,<br>restful moments.",
        contact: "CONTACT US",
        address: "ADDRESS",
        navigation: "NAVIGATION",
        booking: "Booking request",
        city: "Delanoi district, Bonoua",
        landmark: "10 minutes from the Notre-Dame-de-la-Garde church",
        country: "Côte d’Ivoire",
        footerNav: "Footer navigation"
      },
      formulas: {
        book: "BOOK",
        rowAria: (name, duration, price) => `Request the ${name}, ${duration}, ${price} on WhatsApp`,
        standard: { name: "Standard room", duration: "Per night", price: "30,000 FCFA" },
        superior: { name: "Superior room", duration: "Per night", price: "40,000 FCFA" },
        "standard-multi": { name: "Standard room", duration: "From 2 nights", price: "25,000 FCFA" },
        "superior-multi": { name: "Superior room", duration: "From 2 nights", price: "35,000 FCFA" }
      },
      floatingWhatsApp: "Request a booking on WhatsApp",
      booking: {
        fallbackFormula: "To be advised",
        fallbackDate: "To be confirmed",
        fallbackName: "To be confirmed",
        messageIntro: "Hello Majestic Residence Hotel,",
        messageRequest: "I would like to make a booking request.",
        messageFormula: "Room",
        messageDate: "Date",
        messageName: "Name",
        messagePreferences: "Preferences",
        messageOutro: "Please confirm availability.",
        summaryEmptyFormula: "Choose a stay",
        summaryEmptyDuration: "Select the stay you would like",
        summaryEmptyDate: "To be confirmed",
        errorFormula: "Please choose a stay.",
        errorDate: "Please choose an arrival date from today onwards.",
        errorName: "Please enter your full name.",
        status: "Your request is ready. Send it on WhatsApp so the residence can confirm availability."
      },
      gallery: {
        lightbox: "Full-screen photo viewer",
        close: "Close the photo",
        previous: "Previous photo",
        next: "Next photo",
        zoom: (title) => `Enlarge the photo: ${title}`,
        all: "All",
        filterGroup: "Filter photos by category"
      },
      media: {
        hero: {
          alt: "Swimming pool of the Majestic Residence Hotel at dusk"
        },
        chambre: {
          title: "The room",
          category: "Rooms",
          alt: "Room with a double bed, wall art and warm lighting"
        },
        piscineJour: {
          title: "The pool",
          category: "Pool",
          alt: "Pool reflecting the palm trees in daylight"
        },
        piscineCour: {
          title: "The courtyard",
          category: "Pool",
          alt: "Pool in the central courtyard surrounded by the residence buildings"
        },
        exterieur: {
          title: "The residence",
          category: "Outdoors",
          alt: "Buildings and greenery of the Majestic Residence Hotel"
        },
        nuitRose: {
          title: "The illuminated pool",
          category: "At night",
          alt: "Pool lit in pink under the night sky of Bonoua"
        },
        nuitBleue: {
          title: "The residence at night",
          category: "At night",
          alt: "Blue pool lights reflecting on the facade after nightfall"
        },
        nuitTerrasse: {
          title: "Night view",
          category: "At night",
          alt: "Elevated view over the pool and the residence at night"
        }
      }
    }
  };

  const t = dictionaries[lang];

  window.MAJESTIC_I18N = {
    lang,
    isEn: lang === "en",
    locale: t.locale,
    t
  };
})();
