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
    email: "majesticbonoua@gmail.com",
    facebook: "https://web.facebook.com/Majesticbonoua",
    location: "Bonoua, quartier Delanoi, Côte d’Ivoire",
    landmark: "À 10 minutes de l’église Notre-Dame-de-la-Garde",
    tagline: "Des séjours élégants, des instants paisibles.",
    // Grille tarifaire : petit-déjeuner inclus et accès à la piscine gratuit dans toutes les formules.
    formulas: [
      { id: "standard", name: "Chambre standard", duration: "Par nuit", price: "30 000 FCFA" },
      { id: "superior", name: "Chambre supérieure", duration: "Par nuit", price: "40 000 FCFA" },
      { id: "standard-multi", name: "Chambre standard", duration: "Dès 2 nuits", price: "25 000 FCFA" },
      { id: "superior-multi", name: "Chambre supérieure", duration: "Dès 2 nuits", price: "35 000 FCFA" }
    ],
    MEDIA: {
      hero: {
        base: `${imgRoot}/hero`,
        alt: "Piscine du Majestic Residence Hotel entourée des bâtiments de la résidence et de palmiers",
        width: 1920,
        height: 1080
      },
      formules: {
        standard: {
          base: `${imgRoot}/chambre`,
          alt: "Chambre standard du Majestic Residence Hotel avec un lit et une lumière chaleureuse"
        },
        superior: {
          base: `${imgRoot}/chambre`,
          alt: "Chambre supérieure du Majestic Residence Hotel avec un lit et une lumière chaleureuse"
        },
        "standard-multi": {
          base: `${imgRoot}/chambre`,
          alt: "Chambre standard du Majestic Residence Hotel avec un lit et une lumière chaleureuse"
        },
        "superior-multi": {
          base: `${imgRoot}/chambre`,
          alt: "Chambre supérieure du Majestic Residence Hotel avec un lit et une lumière chaleureuse"
        }
      },
      chambre: {
        base: `${imgRoot}/chambre`,
        title: "La chambre",
        category: "Chambres",
        alt: "Chambre avec un lit double, une décoration murale et une lumière chaleureuse",
        width: 1600,
        height: 1200
      },
      piscineJour: {
        base: `${imgRoot}/piscine-jour`,
        title: "La piscine",
        category: "Piscine",
        alt: "Piscine reflétant les palmiers à la lumière du jour",
        width: 1600,
        height: 1200
      },
      piscineCour: {
        base: `${imgRoot}/piscine-cour`,
        title: "La cour",
        category: "Piscine",
        alt: "Piscine de la cour centrale entourée des bâtiments de la résidence",
        width: 1600,
        height: 1200
      },
      exterieur: {
        base: `${imgRoot}/residence-exterieur`,
        title: "La résidence",
        category: "Extérieurs",
        alt: "Bâtiments et végétation du Majestic Residence Hotel",
        width: 1600,
        height: 1200
      },
      nuitRose: {
        base: `${imgRoot}/piscine-nuit-rose`,
        title: "La piscine éclairée",
        category: "De nuit",
        alt: "Piscine aux lumières roses sous le ciel nocturne de Bonoua",
        width: 1600,
        height: 1200
      },
      nuitBleue: {
        base: `${imgRoot}/piscine-nuit-bleue`,
        title: "La résidence de nuit",
        category: "De nuit",
        alt: "Lumières bleues de la piscine se reflétant sur la façade à la nuit tombée",
        width: 1600,
        height: 1200
      },
      nuitTerrasse: {
        base: `${imgRoot}/piscine-nuit-terrasse`,
        title: "Vue nocturne",
        category: "De nuit",
        alt: "Vue en hauteur sur la piscine et la résidence de nuit",
        width: 1600,
        height: 1200
      },
      "chambre-01": {
        base: `${imgRoot}/chambre-01`,
        title: "Chambre lumineuse",
        category: "Chambres",
        alt: "Chambre aux murs jaunes avec lit double et rideaux bleus",
        width: 1024,
        height: 768
      },
      "chambre-02": {
        base: `${imgRoot}/chambre-02`,
        title: "Chambre avec salon",
        category: "Chambres",
        alt: "Chambre rose avec coin salon, fauteuils blancs et table ronde",
        width: 1024,
        height: 768
      },
      "chambre-03": {
        base: `${imgRoot}/chambre-03`,
        title: "Chambre colorée",
        category: "Chambres",
        alt: "Chambre grise avec couvre-lit multicolore et rideaux dorés",
        width: 1024,
        height: 768
      },
      "chambre-04": {
        base: `${imgRoot}/chambre-04`,
        title: "Chambre élégante",
        category: "Chambres",
        alt: "Chambre avec couvre-lit à motifs circulaires et décor mural",
        width: 1024,
        height: 768
      },
      "chambre-05": {
        base: `${imgRoot}/chambre-05`,
        title: "Chambre mosaïque",
        category: "Chambres",
        alt: "Chambre rose avec mur en mosaïque et lit double",
        width: 1024,
        height: 768
      },
      "chambre-06": {
        base: `${imgRoot}/chambre-06`,
        title: "Chambre rouge",
        category: "Chambres",
        alt: "Chambre au mur rouge avec couvre-lit coloré et télévision",
        width: 1024,
        height: 768
      },
      "chambre-07": {
        base: `${imgRoot}/chambre-07`,
        title: "Chambre avec coin salon",
        category: "Chambres",
        alt: "Chambre blanche avec deux fauteuils et table jaune",
        width: 1024,
        height: 768
      },
      "cour-nuit-verte": {
        base: `${imgRoot}/cour-nuit-verte`,
        title: "Piscine verte de nuit",
        category: "De nuit",
        alt: "Piscine éclairée en vert dans la cour, vue en hauteur",
        width: 1080,
        height: 810
      },
      "cour-nuit-rouge": {
        base: `${imgRoot}/cour-nuit-rouge`,
        title: "Piscine rouge de nuit",
        category: "De nuit",
        alt: "Piscine aux lumières rouges entourée des bâtiments",
        width: 1080,
        height: 810
      },
      "cour-nuit-magenta": {
        base: `${imgRoot}/cour-nuit-magenta`,
        title: "Piscine magenta",
        category: "De nuit",
        alt: "Piscine éclairée en magenta dans la cour centrale",
        width: 1080,
        height: 810
      },
      "cour-nuit-violette": {
        base: `${imgRoot}/cour-nuit-violette`,
        title: "Piscine violette",
        category: "De nuit",
        alt: "Piscine aux reflets violets sous les lumières de la résidence",
        width: 1080,
        height: 810
      },
      "cour-jour-piscine": {
        base: `${imgRoot}/cour-jour-piscine`,
        title: "Piscine de jour",
        category: "Extérieurs",
        alt: "Piscine et bâtiments de la résidence en journée",
        width: 1080,
        height: 810
      },
      "cour-jardin": {
        base: `${imgRoot}/cour-jardin`,
        title: "Jardin de la cour",
        category: "Extérieurs",
        alt: "Pelouse et plantations de la cour centrale",
        width: 1080,
        height: 810
      },
      "cour-vue-aerienne": {
        base: `${imgRoot}/cour-vue-aerienne`,
        title: "Vue aérienne",
        category: "Extérieurs",
        alt: "Vue en hauteur sur la piscine et les toits de la résidence",
        width: 1080,
        height: 810
      },
      "cour-terrasse": {
        base: `${imgRoot}/cour-terrasse`,
        title: "Terrasse ombragée",
        category: "Restauration",
        alt: "Table dressée sur la terrasse ombragée de la résidence",
        width: 1080,
        height: 810
      },
      "plat-poulet": {
        base: `${imgRoot}/plat-poulet`,
        title: "Poulet braisé & riz",
        category: "Restauration",
        alt: "Assiette de riz et poulet braisé en sauce",
        width: 810,
        height: 1080
      },
      "plat-escargots": {
        base: `${imgRoot}/plat-escargots`,
        title: "Escargots sautés",
        category: "Restauration",
        alt: "Attiéké, escargots sautés et sauce",
        width: 744,
        height: 992
      },
      "plat-poisson": {
        base: `${imgRoot}/plat-poisson`,
        title: "Poisson & macaroni",
        category: "Restauration",
        alt: "Macaroni, poisson braisé et tomates",
        width: 1080,
        height: 810
      },
      "plat-buffet": {
        base: `${imgRoot}/plat-buffet`,
        title: "Buffet",
        category: "Restauration",
        alt: "Buffet de plats et accompagnements du Majestic",
        width: 810,
        height: 1080
      },
      "plat-braise": {
        base: `${imgRoot}/plat-braise`,
        title: "Poulet braisé",
        category: "Restauration",
        alt: "Plat de poulet braisé garni",
        width: 810,
        height: 1080
      },
      "plat-frites": {
        base: `${imgRoot}/plat-frites`,
        title: "Frites & poulet",
        category: "Restauration",
        alt: "Frites et poulet braisé en sauce",
        width: 810,
        height: 1080
      },
      "plat-attieke": {
        base: `${imgRoot}/plat-attieke`,
        title: "Attiéké & sauce",
        category: "Restauration",
        alt: "Attiéké et sauce graine",
        width: 810,
        height: 1080
      },
      "table-terrasse": {
        base: `${imgRoot}/table-terrasse`,
        title: "Table en terrasse",
        category: "Restauration",
        alt: "Table dressée avec nappe rouge sur la terrasse",
        width: 1080,
        height: 810
      },
      "loisir-billard": {
        base: `${imgRoot}/loisir-billard`,
        title: "Billard",
        category: "Loisirs",
        alt: "Table de billard du Majestic Residence Hotel",
        width: 1280,
        height: 960
      },
      "loisir-babyfoot": {
        base: `${imgRoot}/loisir-babyfoot`,
        title: "Baby-foot",
        category: "Loisirs",
        alt: "Table de baby-foot pour des moments conviviaux",
        width: 1280,
        height: 960
      },
      "loisir-massage": {
        base: `${imgRoot}/loisir-massage`,
        title: "Espace massage",
        category: "Loisirs",
        alt: "Fauteuil de massage de l'espace détente",
        width: 800,
        height: 800
      }
    },
    galleryPreview: ["piscineCour", "chambre", "nuitBleue", "exterieur", "nuitRose"],
    galleryAll: ["chambre", "piscineJour", "piscineCour", "exterieur", "nuitRose", "nuitBleue", "nuitTerrasse", "chambre-01", "chambre-02", "chambre-03", "chambre-04", "chambre-05", "chambre-06", "chambre-07", "cour-nuit-verte", "cour-nuit-rouge", "cour-nuit-magenta", "cour-nuit-violette", "cour-jour-piscine", "cour-jardin", "cour-vue-aerienne", "cour-terrasse", "plat-poulet", "plat-escargots", "plat-poisson", "plat-buffet", "plat-braise", "plat-frites", "plat-attieke", "table-terrasse", "loisir-billard", "loisir-babyfoot", "loisir-massage"]
,
    galleryDining: ["plat-poulet", "plat-escargots", "plat-poisson", "plat-buffet", "plat-braise", "plat-frites", "plat-attieke", "table-terrasse", "cour-terrasse", "loisir-billard", "loisir-babyfoot", "loisir-massage"],
    videos: [
      { id: "chambre-video-1", title: "Visite de chambre — lumière du jour", titleEn: "Room tour — daylight" },
      { id: "chambre-video-2", title: "Visite de chambre — coin salon", titleEn: "Room tour — lounge corner" },
      { id: "chambre-video-3", title: "Visite de chambre — détails", titleEn: "Room tour — details" },
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
