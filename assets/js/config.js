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
    WHATSAPP_NUMBER: "2250747820171",
    phonePrimary: "+225 07 47 82 01 71",
    phoneSecondary: "+225 07 11 10 83 90",
    phonePrimaryHref: "+2250747820171",
    phoneSecondaryHref: "+2250711108390",
    facebook: "https://web.facebook.com/Majesticbonoua",
    location: "Bonoua, Côte d’Ivoire",
    tagline: "Des séjours élégants, des instants paisibles.",
    formulas: [
      { id: "day-rest", key: "repos", name: "Repos", duration: "3 heures", price: "20 000 FCFA" },
      { id: "full-stay", key: "sejour", name: "Séjour", duration: "De midi à midi", price: "30 000 FCFA" },
      { id: "night", key: "nuit", name: "Nuit", duration: "De 22 h à midi", price: "25 000 FCFA" }
    ],
    MEDIA: {
      hero: {
        base: `${imgRoot}/hero`,
        alt: "Piscine du Majestic Residence Hotel entourée des bâtiments de la résidence et de palmiers",
        width: 1920,
        height: 1080
      },
      formules: {
        "day-rest": {
          base: `${imgRoot}/chambre`,
          alt: "Chambre du Majestic Residence Hotel avec un lit et une lumière chaleureuse"
        },
        "full-stay": {
          base: `${imgRoot}/piscine-cour`,
          alt: "Piscine centrale et architecture du Majestic Residence Hotel"
        },
        night: {
          base: `${imgRoot}/piscine-nuit-terrasse`,
          alt: "Vue sur la piscine éclairée de la résidence à la nuit tombée"
        },
        repos: {
          base: `${imgRoot}/chambre`,
          alt: "Chambre du Majestic Residence Hotel avec un lit et une lumière chaleureuse"
        },
        sejour: {
          base: `${imgRoot}/piscine-cour`,
          alt: "Piscine centrale et architecture du Majestic Residence Hotel"
        },
        nuit: {
          base: `${imgRoot}/piscine-nuit-terrasse`,
          alt: "Vue sur la piscine éclairée de la résidence à la nuit tombée"
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
