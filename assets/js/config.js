(() => {
  let theme = "light";
  try {
    if (localStorage.getItem("majestic-theme") === "dark") theme = "dark";
  } catch {}
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#121110" : "#F8F5EF");

  const isGhPages = window.location.pathname.includes("/majestic-residence-hotel");
  const imgRoot = isGhPages ? "/majestic-residence-hotel/assets/images" : "/assets/images";
  const videoRoot = isGhPages ? "/majestic-residence-hotel/assets/video" : "/assets/video";
  const siteRoot = isGhPages ? "/majestic-residence-hotel" : "";

  window.MAJESTIC_CONFIG = Object.freeze({
    siteRoot,
    imgRoot,
    videoRoot,
    WHATSAPP_NUMBER: "2250501752275",
    phonePrimary: "+225 05 01 75 22 75",
    phonePrimaryHref: "+2250501752275",
    phoneSecondary: "+225 07 11 10 83 90",
    phoneSecondaryHref: "+2250711108390",
    phoneTertiary: "+225 05 55 53 15 15",
    phoneTertiaryHref: "+2250555531515",
    phoneNumbers: [
      { display: "+225 05 01 75 22 75", href: "+2250501752275", label: "WhatsApp" },
      { display: "+225 07 11 10 83 90", href: "+2250711108390", label: "Téléphone" },
      { display: "+225 05 55 53 15 15", href: "+2250555531515", label: "Téléphone" }
    ],
    email: "majesticbonoua@gmail.com",
    facebook: "https://web.facebook.com/Majesticbonoua",
    location: "Bonoua, quartier Delanoi, Côte d’Ivoire",
    landmark: "À 10 minutes de l’église Notre-Dame-de-la-Garde",
    tagline: "Des séjours élégants, des instants paisibles.",
    // Catégorie A — chambres à la nuitée : petit-déjeuner inclus et accès gratuit à la piscine.
    formulas: [
      { id: "standard", name: "Chambre standard", duration: "Par nuit", price: "30 000 FCFA" },
      { id: "superior", name: "Chambre supérieure", duration: "Par nuit", price: "40 000 FCFA" },
      { id: "standard-multi", name: "Chambre standard", duration: "Dès 2 nuits", price: "25 000 FCFA" },
      { id: "superior-multi", name: "Chambre supérieure", duration: "Dès 2 nuits", price: "35 000 FCFA" }
    ],
    // Catégorie B — formules de courte durée, section distincte (jamais de grille commune avec A).
    shortFormulas: [
      { id: "repos", title: "SERVICE REPOS", titleEn: "REST SERVICE", name: "Repos", nameEn: "Rest", detail: "duration", duration: "3 heures", durationEn: "3 hours", price: "20 000 FCFA", priceEn: "20,000 FCFA" },
      { id: "sejour", title: "SERVICE SÉJOUR", titleEn: "STAY SERVICE", name: "Séjour", nameEn: "Stay", detail: "schedule", duration: "De midi à midi", durationEn: "Noon to noon", price: "30 000 FCFA", priceEn: "30,000 FCFA" },
      { id: "nuit", title: "SERVICE NUIT", titleEn: "NIGHT SERVICE", name: "Nuit", nameEn: "Night", detail: "schedule", duration: "De 22 h à midi", durationEn: "10 PM to noon", price: "25 000 FCFA", priceEn: "25,000 FCFA" }
    ],
    MEDIA: {
      hero: {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-piscine-hero`,
        alt: "Piscine du Majestic Residence Hotel entourée des bâtiments de la résidence et de palmiers",
        width: 1440,
        height: 1080
      },
      formules: {
        standard: {
          base: `${imgRoot}/majestic-residence-hotel-bonoua-chambre`,
          alt: "Chambre standard du Majestic Residence Hotel avec un lit et une lumière chaleureuse"
        },
        superior: {
          base: `${imgRoot}/majestic-residence-hotel-bonoua-chambre`,
          alt: "Chambre supérieure du Majestic Residence Hotel avec un lit et une lumière chaleureuse"
        },
        "standard-multi": {
          base: `${imgRoot}/majestic-residence-hotel-bonoua-chambre`,
          alt: "Chambre standard du Majestic Residence Hotel avec un lit et une lumière chaleureuse"
        },
        "superior-multi": {
          base: `${imgRoot}/majestic-residence-hotel-bonoua-chambre`,
          alt: "Chambre supérieure du Majestic Residence Hotel avec un lit et une lumière chaleureuse"
        }
      },
      chambre: {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-chambre`,
        title: "La chambre",
        category: "Chambres",
        alt: "Chambre avec un lit double, une décoration murale et une lumière chaleureuse — Majestic Residence Hotel, Bonoua",
        width: 1600,
        height: 1200
      },
      piscineJour: {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-piscine-jour`,
        title: "La piscine",
        category: "Piscine",
        alt: "Vue de jour de la cour et de la piscine depuis le balcon, palmiers et bâtiments de la résidence — Majestic Residence Hotel, Bonoua",
        width: 1600,
        height: 1200
      },
      piscineCour: {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-piscine-cour`,
        title: "La cour",
        category: "Piscine",
        alt: "Piscine de la cour centrale entourée des bâtiments de la résidence — Majestic Residence Hotel, Bonoua",
        width: 1600,
        height: 1200
      },
      // Visuel dédié aux vignettes « La cour » de /gallery/ et de l'aperçu de
      // l'accueil (FR/EN). On réutilise le couple `majestic-residence-hotel-bonoua-cour-piscine-jour-{800,1600}`
      // déjà employé par les pages Services, sans écraser `majestic-residence-hotel-bonoua-piscine-cour-*` (pastille
      // du statement de l'accueil et pages Chambres).
      "cour-panorama": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-cour-piscine-jour`,
        title: "La cour",
        category: "Piscine",
        alt: "Vue d'ensemble de la cour et de la piscine, palmiers et bâtiments blancs et bordeaux — Majestic Residence Hotel, Bonoua",
        width: 1600,
        height: 1200
      },
      exterieur: {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-exterieur`,
        title: "La résidence",
        category: "Extérieurs",
        alt: "Bâtiments et végétation du Majestic Residence Hotel",
        width: 1600,
        height: 1200
      },
      nuitRose: {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-piscine-nuit-rose`,
        title: "La piscine éclairée",
        category: "De nuit",
        alt: "Piscine aux lumières roses sous le ciel nocturne de Bonoua",
        width: 1600,
        height: 1200
      },
      nuitBleue: {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-piscine-nuit-bleue`,
        title: "La résidence de nuit",
        category: "De nuit",
        alt: "Lumières bleues de la piscine se reflétant sur la façade à la nuit tombée — Majestic Residence Hotel, Bonoua",
        width: 1600,
        height: 1200
      },
      nuitTerrasse: {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-piscine-nuit-terrasse`,
        title: "Vue nocturne",
        category: "De nuit",
        alt: "Vue en hauteur sur la piscine et la résidence de nuit — Majestic Residence Hotel, Bonoua",
        width: 1600,
        height: 1200
      },
      "chambre-01": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-chambre-01`,
        title: "Chambre lumineuse",
        category: "Chambres",
        alt: "Chambre aux murs jaunes avec lit double et rideaux bleus — Majestic Residence Hotel, Bonoua",
        width: 1024,
        height: 768
      },
      "chambre-02": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-chambre-02`,
        title: "Chambre avec salon",
        category: "Chambres",
        alt: "Chambre rose avec coin salon, fauteuils blancs et table ronde — Majestic Residence Hotel, Bonoua",
        width: 1024,
        height: 768
      },
      "chambre-03": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-chambre-03`,
        title: "Chambre colorée",
        category: "Chambres",
        alt: "Chambre grise avec couvre-lit multicolore et rideaux dorés — Majestic Residence Hotel, Bonoua",
        width: 1024,
        height: 768
      },
      "chambre-04": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-chambre-04`,
        title: "Chambre élégante",
        category: "Chambres",
        alt: "Chambre avec couvre-lit à motifs circulaires et décor mural — Majestic Residence Hotel, Bonoua",
        width: 1024,
        height: 768
      },
      "chambre-05": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-chambre-05`,
        title: "Chambre mosaïque",
        category: "Chambres",
        alt: "Chambre rose avec mur en mosaïque et lit double — Majestic Residence Hotel, Bonoua",
        width: 1024,
        height: 768
      },
      "chambre-06": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-chambre-06`,
        title: "Chambre rouge",
        category: "Chambres",
        alt: "Chambre au mur rouge avec couvre-lit coloré et télévision — Majestic Residence Hotel, Bonoua",
        width: 1024,
        height: 768
      },
      "chambre-07": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-chambre-07`,
        title: "Chambre avec coin salon",
        category: "Chambres",
        alt: "Chambre blanche avec deux fauteuils et table jaune — Majestic Residence Hotel, Bonoua",
        width: 1024,
        height: 768
      },
      "cour-nuit-verte": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-cour-nuit-verte`,
        title: "Piscine verte de nuit",
        category: "De nuit",
        alt: "Piscine éclairée en vert dans la cour, vue en hauteur — Majestic Residence Hotel, Bonoua",
        width: 1080,
        height: 810
      },
      "cour-nuit-rouge": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-cour-nuit-rouge`,
        title: "Piscine rouge de nuit",
        category: "De nuit",
        alt: "Piscine aux lumières rouges entourée des bâtiments — Majestic Residence Hotel, Bonoua",
        width: 1080,
        height: 810
      },
      "cour-nuit-magenta": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-cour-nuit-magenta`,
        title: "Piscine magenta",
        category: "De nuit",
        alt: "Piscine éclairée en magenta dans la cour centrale — Majestic Residence Hotel, Bonoua",
        width: 1080,
        height: 810
      },
      "cour-nuit-violette": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-cour-nuit-violette`,
        title: "Piscine violette",
        category: "De nuit",
        alt: "Piscine aux reflets violets sous les lumières de la résidence — Majestic Residence Hotel, Bonoua",
        width: 1080,
        height: 810
      },
      "cour-jour-piscine": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-cour-jour-piscine`,
        title: "Piscine de jour",
        category: "Extérieurs",
        alt: "Piscine et bâtiments de la résidence en journée — Majestic Residence Hotel, Bonoua",
        width: 1080,
        height: 810
      },
      "cour-jardin": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-cour-jardin`,
        title: "Jardin de la cour",
        category: "Extérieurs",
        alt: "Pelouse et plantations de la cour centrale — Majestic Residence Hotel, Bonoua",
        width: 1080,
        height: 810
      },
      "cour-vue-aerienne": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-cour-vue-aerienne`,
        title: "Vue aérienne",
        category: "Extérieurs",
        alt: "Vue en hauteur sur la piscine et les toits de la résidence — Majestic Residence Hotel, Bonoua",
        width: 1080,
        height: 810
      },
      "cour-terrasse": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-cour-terrasse`,
        title: "Terrasse ombragée",
        category: "Restauration",
        alt: "Table dressée sur la terrasse ombragée de la résidence — Majestic Residence Hotel, Bonoua",
        width: 1080,
        height: 810
      },
      "plat-poulet": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-restaurant-poulet-braise`,
        title: "Poulet braisé & riz",
        category: "Restauration",
        alt: "Assiette de riz et poulet braisé en sauce — Majestic Residence Hotel, Bonoua",
        width: 810,
        height: 1080
      },
      "plat-escargots": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-restaurant-escargots-sautes`,
        title: "Escargots sautés",
        category: "Restauration",
        alt: "Attiéké, escargots sautés et sauce — Majestic Residence Hotel, Bonoua",
        width: 744,
        height: 992
      },
      "plat-poisson": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-restaurant-attieke-poisson`,
        title: "Attiéké & Poisson",
        category: "Restauration",
        alt: "Attiéké, poisson braisé, tomates et oignons — Majestic Residence Hotel, Bonoua",
        width: 1080,
        height: 810
      },
      "plat-buffet": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-restaurant-buffet`,
        title: "Buffet",
        category: "Restauration",
        alt: "Buffet de plats et accompagnements du Majestic",
        width: 810,
        height: 1080
      },
      "plat-braise": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-restaurant-braise`,
        title: "Poulet braisé",
        category: "Restauration",
        alt: "Plat de poulet braisé garni — Majestic Residence Hotel, Bonoua",
        width: 810,
        height: 1080
      },
      "plat-frites": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-restaurant-frites-poulet`,
        title: "Frites & poulet",
        category: "Restauration",
        alt: "Frites et poulet braisé en sauce — Majestic Residence Hotel, Bonoua",
        width: 810,
        height: 1080
      },
      "plat-attieke": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-restaurant-attieke-sauce`,
        title: "Attiéké & sauce",
        category: "Restauration",
        alt: "Attiéké et sauce graine — Majestic Residence Hotel, Bonoua",
        width: 810,
        height: 1080
      },
      "table-terrasse": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-restaurant-table-terrasse`,
        title: "Table en terrasse",
        category: "Restauration",
        alt: "Table dressée avec nappe rouge sur la terrasse — Majestic Residence Hotel, Bonoua",
        width: 1080,
        height: 810
      },
      "loisir-billard": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-loisirs-billard`,
        title: "Billard",
        category: "Loisirs",
        alt: "Table de billard du Majestic Residence Hotel",
        width: 1280,
        height: 960
      },
      "loisir-babyfoot": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-loisirs-baby-foot`,
        title: "Baby-foot",
        category: "Loisirs",
        alt: "Table de baby-foot pour des moments conviviaux — Majestic Residence Hotel, Bonoua",
        width: 1280,
        height: 960
      },
      "loisir-massage": {
        base: `${imgRoot}/majestic-residence-hotel-bonoua-loisirs-massage`,
        title: "Espace massage",
        category: "Loisirs",
        alt: "Fauteuil de massage de l'espace détente — Majestic Residence Hotel, Bonoua",
        width: 800,
        height: 800
      }
    },
    galleryPreview: ["cour-panorama", "chambre", "nuitBleue", "exterieur", "nuitRose"],
    galleryAll: ["chambre", "piscineJour", "cour-panorama", "exterieur", "nuitRose", "nuitBleue", "nuitTerrasse", "chambre-01", "chambre-02", "chambre-03", "chambre-04", "chambre-05", "chambre-06", "chambre-07", "cour-nuit-verte", "cour-nuit-rouge", "cour-nuit-magenta", "cour-nuit-violette", "cour-jour-piscine", "cour-jardin", "cour-vue-aerienne", "cour-terrasse", "plat-poulet", "plat-escargots", "plat-poisson", "plat-buffet", "plat-braise", "plat-frites", "plat-attieke", "table-terrasse", "loisir-billard", "loisir-babyfoot", "loisir-massage"]
,
    // Galerie « EN IMAGES » de la page Menu : on écarte les gros plans de plats et
    // les doublons du plateau de poulet. Les visuels restent utilisés par galleryAll (/gallery/).
    galleryDining: ["plat-poisson", "plat-buffet", "table-terrasse", "cour-terrasse", "loisir-billard", "loisir-babyfoot", "loisir-massage"],
    galleryRooms: ["chambre-01", "chambre-02", "chambre-03", "chambre-04", "chambre-05", "chambre-06", "chambre-07"],
    videos: [
      { id: "chambre-video-1", title: "Visite de chambre — lumière du jour", titleEn: "Room tour — daylight" },
      { id: "chambre-video-2", title: "Visite de chambre — coin salon", titleEn: "Room tour — lounge corner" },
      { id: "chambre-video-4", title: "Visite de chambre — ambiance", titleEn: "Room tour — atmosphere" },
      { id: "chambre-video-5", title: "Visite de chambre — vue d'ensemble", titleEn: "Room tour — overview" }
    ],
    dining: {
      priceNote: "Prix en francs CFA (FCFA).",
      sections: [
        {
          id: "breakfast", title: "Petit déjeuner", titleEn: "Breakfast",
          items: [
            { name: "Omelette + café au lait", detail: "Accompagnée de pain", price: "1 000 FCFA" },
            { name: "Macaroni", price: "1 000 FCFA" },
            { name: "Petits pois", price: "1 000 FCFA" },
            { name: "Vermicelle", price: "1 000 FCFA" }
          ]
        },
        {
          id: "lunch", title: "Déjeuner", titleEn: "Lunch",
          items: [
            { name: "Poulet pondeuse", detail: "Kédjénou, braisé, grillé, sauce", price: "12 000 FCFA" },
            { name: "Poulet de chair", detail: "Kédjénou, braisé, grillé, sauce", price: "10 000 FCFA" },
            { name: "Escargots sautés", detail: "Kédjénou, braisé, grillé, sauce", price: "10 000 FCFA" },
            { name: "Poisson fumé braisé", price: "8 000 FCFA" },
            { name: "Viande de brousse", detail: "Selon préférence", price: "12 000 FCFA" }
          ]
        },
        {
          id: "sides", title: "Accompagnements", titleEn: "Sides",
          items: [
            { name: "Pain · Attiéké · Riz · Alloco · Frites · Atoukou", price: "" }
          ]
        },
        {
          id: "drinks", title: "Boissons", titleEn: "Drinks",
          items: [
            { name: "Bières", detail: "Lock, Chill, Racine, Tequila, Guinness, Doppel, Beaufort, Ivoire…", price: "800 FCFA" },
            { name: "Boissons sucrées", detail: "Coca, Fanta, Orangina…", price: "500 FCFA" },
            { name: "Eau minérale", detail: "Céleste, Olgane…", price: "500 / 1 000 FCFA" },
            { name: "Vin bouché", detail: "Selon préférence", price: "5 000 FCFA" }
          ]
        }
      ]
    },
    leisure: {
      massage: {
        title: "Espace massage", titleEn: "Massage space",
        intro: "Profitez d'un bon moment de relaxation et de détente.",
        introEn: "Enjoy a moment of relaxation and unwinding.",
        tariffs: [
          { duration: "30 minutes", durationEn: "30 minutes", price: "5 000 FCFA" },
          { duration: "1 heure", durationEn: "1 hour", price: "10 000 FCFA" }
        ]
      },
      games: {
        title: "Billard & baby-foot", titleEn: "Billiards & foosball",
        intro: "Entre amis, en famille, entre collègues — ambiance conviviale, loisirs et détente.",
        introEn: "With friends, family or colleagues — a friendly atmosphere of leisure and relaxation.",
        note: "Sont disponibles au Majestic Residence Hotel.",
        noteEn: "Available at the Majestic Residence Hotel."
      }
    }
  });
})();
