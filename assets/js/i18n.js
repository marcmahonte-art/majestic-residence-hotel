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
        menu: "Menu & Loisirs",
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
        "superior-multi": { name: "Chambre supérieure", duration: "Dès 2 nuits", price: "35 000 FCFA" },
        repos: { name: "Repos", duration: "3 heures", price: "20 000 FCFA" },
        sejour: { name: "Séjour", duration: "De midi à midi", price: "30 000 FCFA" },
        nuit: { name: "Nuit", duration: "De 22 h à midi", price: "25 000 FCFA" }
      },
      roomsPage: {
        chambersLabel: "SÉJOURS À LA NUITÉE",
        chambersTitle: "NOS CHAMBRES",
        chambersIntro: "Profitez d’un cadre confortable avec petit-déjeuner inclus et accès gratuit à la piscine.",
        perNight: "/ nuitée",
        nightRateLabel: "TARIF PAR NUITÉE",
        preferredRate: "Tarif préférentiel dès 2 nuitées",
        breakfastIncluded: "Petit-déjeuner inclus",
        poolAccess: "Accès gratuit à la piscine",
        requestRoom: "DEMANDER",
        formulasLabel: "COURTE DURÉE",
        formulasTitle: "NOS FORMULES",
        formulasIntro: "Une pause détente adaptée à votre emploi du temps.",
        durationLabel: "DURÉE",
        scheduleLabel: "HORAIRE",
        priceLabel: "TARIF",
        book: "RÉSERVER",
        validationNote: "Tarifs en FCFA. Toute réservation reste une demande jusqu’à validation par l’établissement."
      },
      floatingWhatsApp: "Demander une réservation sur WhatsApp",
      menuPage: {
        eyebrow: "RESTAURATION & LOISIRS",
        title: "MENU & LOISIRS",
        signature: "La table du Majestic et ses espaces de détente.",
        diningTitle: "NOTRE MENU",
        diningIntro: "Une cuisine généreuse, servie sur place ou en terrasse.",
        leisureTitle: "ESPACE DÉTENTE",
        massageTitle: "Espace massage",
        gamesTitle: "Billard & baby-foot",
        galleryTitle: "EN IMAGES",
        book: "RÉSERVER SUR WHATSAPP",
        massageBook: "Réserver un massage",
        gamesNote: "Loisirs et détente"
      },
      videoTour: {
        title: "VISITE EN VIDÉO",
        intro: "Découvrez les chambres en mouvement, avant votre séjour.",
        play: "Lire la vidéo",
        pause: "Mettre en pause"
      },
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
        },
        "chambre-01": {
          title: "Chambre lumineuse",
          category: "Chambres",
          alt: "Chambre aux murs jaunes avec lit double et rideaux bleus"
        },
        "chambre-02": {
          title: "Chambre avec salon",
          category: "Chambres",
          alt: "Chambre rose avec coin salon, fauteuils blancs et table ronde"
        },
        "chambre-03": {
          title: "Chambre colorée",
          category: "Chambres",
          alt: "Chambre grise avec couvre-lit multicolore et rideaux dorés"
        },
        "chambre-04": {
          title: "Chambre élégante",
          category: "Chambres",
          alt: "Chambre avec couvre-lit à motifs circulaires et décor mural"
        },
        "chambre-05": {
          title: "Chambre mosaïque",
          category: "Chambres",
          alt: "Chambre rose avec mur en mosaïque et lit double"
        },
        "chambre-06": {
          title: "Chambre rouge",
          category: "Chambres",
          alt: "Chambre au mur rouge avec couvre-lit coloré et télévision"
        },
        "chambre-07": {
          title: "Chambre avec coin salon",
          category: "Chambres",
          alt: "Chambre blanche avec deux fauteuils et table jaune"
        },
        "cour-nuit-verte": {
          title: "Piscine verte de nuit",
          category: "De nuit",
          alt: "Piscine éclairée en vert dans la cour, vue en hauteur"
        },
        "cour-nuit-rouge": {
          title: "Piscine rouge de nuit",
          category: "De nuit",
          alt: "Piscine aux lumières rouges entourée des bâtiments"
        },
        "cour-nuit-magenta": {
          title: "Piscine magenta",
          category: "De nuit",
          alt: "Piscine éclairée en magenta dans la cour centrale"
        },
        "cour-nuit-violette": {
          title: "Piscine violette",
          category: "De nuit",
          alt: "Piscine aux reflets violets sous les lumières de la résidence"
        },
        "cour-jour-piscine": {
          title: "Piscine de jour",
          category: "Extérieurs",
          alt: "Piscine et bâtiments de la résidence en journée"
        },
        "cour-jardin": {
          title: "Jardin de la cour",
          category: "Extérieurs",
          alt: "Pelouse et plantations de la cour centrale"
        },
        "cour-vue-aerienne": {
          title: "Vue aérienne",
          category: "Extérieurs",
          alt: "Vue en hauteur sur la piscine et les toits de la résidence"
        },
        "cour-terrasse": {
          title: "Terrasse ombragée",
          category: "Restauration",
          alt: "Table dressée sur la terrasse ombragée de la résidence"
        },
        "plat-poulet": {
          title: "Poulet braisé & riz",
          category: "Restauration",
          alt: "Assiette de riz et poulet braisé en sauce"
        },
        "plat-escargots": {
          title: "Escargots sautés",
          category: "Restauration",
          alt: "Attiéké, escargots sautés et sauce"
        },
        "plat-poisson": {
          title: "Poisson & macaroni",
          category: "Restauration",
          alt: "Macaroni, poisson braisé et tomates"
        },
        "plat-buffet": {
          title: "Buffet",
          category: "Restauration",
          alt: "Buffet de plats et accompagnements du Majestic"
        },
        "plat-braise": {
          title: "Poulet braisé",
          category: "Restauration",
          alt: "Plat de poulet braisé garni"
        },
        "plat-frites": {
          title: "Frites & poulet",
          category: "Restauration",
          alt: "Frites et poulet braisé en sauce"
        },
        "plat-attieke": {
          title: "Attiéké & sauce",
          category: "Restauration",
          alt: "Attiéké et sauce graine"
        },
        "table-terrasse": {
          title: "Table en terrasse",
          category: "Restauration",
          alt: "Table dressée avec nappe rouge sur la terrasse"
        },
        "loisir-billard": {
          title: "Billard",
          category: "Loisirs",
          alt: "Table de billard du Majestic Residence Hotel"
        },
        "loisir-babyfoot": {
          title: "Baby-foot",
          category: "Loisirs",
          alt: "Table de baby-foot pour des moments conviviaux"
        },
        "loisir-massage": {
          title: "Espace massage",
          category: "Loisirs",
          alt: "Fauteuil de massage de l'espace détente"
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
        menu: "Menu & Leisure",
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
        "superior-multi": { name: "Superior room", duration: "From 2 nights", price: "35,000 FCFA" },
        repos: { name: "Rest", duration: "3 hours", price: "20,000 FCFA" },
        sejour: { name: "Stay", duration: "Noon to noon", price: "30,000 FCFA" },
        nuit: { name: "Night", duration: "10 PM to noon", price: "25,000 FCFA" }
      },
      roomsPage: {
        chambersLabel: "OVERNIGHT STAYS",
        chambersTitle: "OUR ROOMS",
        chambersIntro: "Enjoy a comfortable setting with breakfast included and free pool access.",
        perNight: "/ night",
        nightRateLabel: "PER NIGHT RATE",
        preferredRate: "Preferred rate from 2 nights",
        breakfastIncluded: "Breakfast included",
        poolAccess: "Free pool access",
        requestRoom: "REQUEST",
        formulasLabel: "SHORT STAYS",
        formulasTitle: "OUR PACKAGES",
        formulasIntro: "A relaxing break that fits your schedule.",
        durationLabel: "DURATION",
        scheduleLabel: "HOURS",
        priceLabel: "RATE",
        book: "BOOK",
        validationNote: "Rates in FCFA. Every booking remains a request until confirmed by the residence."
      },
      floatingWhatsApp: "Request a booking on WhatsApp",
      menuPage: {
        eyebrow: "DINING & LEISURE",
        title: "MENU & LEISURE",
        signature: "The Majestic table and its relaxation spaces.",
        diningTitle: "OUR MENU",
        diningIntro: "Generous home cooking, served indoors or on the terrace.",
        leisureTitle: "RELAXATION AREA",
        massageTitle: "Massage space",
        gamesTitle: "Billiards & foosball",
        galleryTitle: "IN PICTURES",
        book: "BOOK ON WHATSAPP",
        massageBook: "Book a massage",
        gamesNote: "Leisure and relaxation"
      },
      videoTour: {
        title: "VIDEO TOUR",
        intro: "Discover the rooms in motion, before your stay.",
        play: "Play video",
        pause: "Pause video"
      },
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
        },
        "chambre-01": {
          title: "Bright room",
          category: "Rooms",
          alt: "Room with yellow walls, double bed and blue curtains"
        },
        "chambre-02": {
          title: "Room with lounge",
          category: "Rooms",
          alt: "Pink room with a lounge corner, white chairs and round table"
        },
        "chambre-03": {
          title: "Colourful room",
          category: "Rooms",
          alt: "Grey room with a multicoloured bedspread and golden curtains"
        },
        "chambre-04": {
          title: "Elegant room",
          category: "Rooms",
          alt: "Room with a circular-pattern bedspread and wall decor"
        },
        "chambre-05": {
          title: "Mosaic room",
          category: "Rooms",
          alt: "Pink room with a mosaic wall and double bed"
        },
        "chambre-06": {
          title: "Red room",
          category: "Rooms",
          alt: "Room with a red wall, colourful bedspread and television"
        },
        "chambre-07": {
          title: "Room with seating",
          category: "Rooms",
          alt: "White room with two armchairs and a yellow table"
        },
        "cour-nuit-verte": {
          title: "Green pool at night",
          category: "At night",
          alt: "Pool lit in green in the courtyard, seen from above"
        },
        "cour-nuit-rouge": {
          title: "Red pool at night",
          category: "At night",
          alt: "Pool lit in red surrounded by the buildings"
        },
        "cour-nuit-magenta": {
          title: "Magenta pool",
          category: "At night",
          alt: "Pool lit in magenta in the central courtyard"
        },
        "cour-nuit-violette": {
          title: "Violet pool",
          category: "At night",
          alt: "Pool with violet reflections under the residence lights"
        },
        "cour-jour-piscine": {
          title: "Pool by day",
          category: "Outdoors",
          alt: "Pool and residence buildings in daylight"
        },
        "cour-jardin": {
          title: "Courtyard garden",
          category: "Outdoors",
          alt: "Lawn and planting of the central courtyard"
        },
        "cour-vue-aerienne": {
          title: "Aerial view",
          category: "Outdoors",
          alt: "Elevated view over the pool and the residence roofs"
        },
        "cour-terrasse": {
          title: "Shaded terrace",
          category: "Dining",
          alt: "Set table on the shaded terrace of the residence"
        },
        "plat-poulet": {
          title: "Braised chicken & rice",
          category: "Dining",
          alt: "Plate of rice and braised chicken in sauce"
        },
        "plat-escargots": {
          title: "Sautéed snails",
          category: "Dining",
          alt: "Attiéké, sautéed snails and sauce"
        },
        "plat-poisson": {
          title: "Fish & macaroni",
          category: "Dining",
          alt: "Macaroni, braised fish and tomatoes"
        },
        "plat-buffet": {
          title: "Buffet",
          category: "Dining",
          alt: "Buffet of dishes and sides at the Majestic"
        },
        "plat-braise": {
          title: "Braised chicken",
          category: "Dining",
          alt: "Garnished plate of braised chicken"
        },
        "plat-frites": {
          title: "Fries & chicken",
          category: "Dining",
          alt: "Fries and braised chicken in sauce"
        },
        "plat-attieke": {
          title: "Attiéké & sauce",
          category: "Dining",
          alt: "Attiéké and palm-nut sauce"
        },
        "table-terrasse": {
          title: "Terrace table",
          category: "Dining",
          alt: "Set table with a red cloth on the terrace"
        },
        "loisir-billard": {
          title: "Billiards",
          category: "Leisure",
          alt: "Billiard table at the Majestic Residence Hotel"
        },
        "loisir-babyfoot": {
          title: "Foosball",
          category: "Leisure",
          alt: "Foosball table for friendly moments"
        },
        "loisir-massage": {
          title: "Massage space",
          category: "Leisure",
          alt: "Massage chair in the relaxation area"
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
