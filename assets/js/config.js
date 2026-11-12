(() => {
  let theme = "light";
  try {
    if (localStorage.getItem("majestic-theme") === "dark") theme = "dark";
  } catch {}
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#121110" : "#F8F5EF");

  const isGhPages = window.location.pathname.includes("/majestic-residence-hotel");
  const imgRoot = isGhPages ? "/majestic-residence-hotel/assets/images" : "/assets/images";
  const siteRoot = isGhPages ? "/majestic-residence-hotel" : "";

  window.MAJESTIC_CONFIG = Object.freeze({
    siteRoot,
    imgRoot,
    WHATSAPP_NUMBER: "2250501752275",
    phonePrimary: "+225 05 01 75 22 75",
    phonePrimaryHref: "+2250501752275",
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
      }
    },
    galleryPreview: ["piscineCour", "chambre", "nuitBleue", "exterieur", "nuitRose"],
    galleryAll: ["chambre", "piscineJour", "piscineCour", "exterieur", "nuitRose", "nuitBleue", "nuitTerrasse"]
  });
})();
