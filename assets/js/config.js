window.MAJESTIC_CONFIG = Object.freeze({
  WHATSAPP_NUMBER: "2250747820171",
  phonePrimary: "+225 07 47 82 01 71",
  phoneSecondary: "+225 07 11 10 83 90",
  phonePrimaryHref: "+2250747820171",
  phoneSecondaryHref: "+2250711108390",
  facebook: "https://web.facebook.com/Majesticbonoua",
  location: "Bonoua, Côte d'Ivoire",
  tagline: "Elegant stays, restful moments.",
  formulas: [
    { id: "day-rest", key: "repos", name: "Day Rest", duration: "3 hours", price: "20,000 FCFA" },
    { id: "full-stay", key: "sejour", name: "Full Stay", duration: "Noon to noon", price: "30,000 FCFA" },
    { id: "night", key: "nuit", name: "Night", duration: "10 pm to noon", price: "25,000 FCFA" }
  ],
  MEDIA: {
    hero: {
      base: "/assets/images/hero",
      alt: "Majestic Residence Hotel pool surrounded by suites and palm trees at dusk",
      width: 1920,
      height: 1080
    },
    formules: {
      "day-rest": {
        base: "/assets/images/chambre",
        alt: "Majestic Residence Hotel room with comfortable bed and warm lighting"
      },
      "full-stay": {
        base: "/assets/images/piscine-cour",
        alt: "Central swimming pool and architecture of Majestic Residence Hotel"
      },
      night: {
        base: "/assets/images/piscine-nuit-terrasse",
        alt: "View of the illuminated swimming pool from the private terrace at night"
      },
      // Backward compatibility aliases
      repos: {
        base: "/assets/images/chambre",
        alt: "Majestic Residence Hotel room with comfortable bed and warm lighting"
      },
      sejour: {
        base: "/assets/images/piscine-cour",
        alt: "Central swimming pool and architecture of Majestic Residence Hotel"
      },
      nuit: {
        base: "/assets/images/piscine-nuit-terrasse",
        alt: "View of the illuminated swimming pool from the private terrace at night"
      }
    },
    chambre: {
      base: "/assets/images/chambre",
      title: "The Suite",
      category: "Rooms",
      alt: "Quiet room with double bed, wall art and ambient warm lighting",
      width: 1600,
      height: 1200
    },
    piscineJour: {
      base: "/assets/images/piscine-jour",
      title: "The Pool",
      category: "Pool",
      alt: "Clear swimming pool reflecting palm trees in the tropical daylight",
      width: 1600,
      height: 1200
    },
    piscineCour: {
      base: "/assets/images/piscine-cour",
      title: "The Courtyard",
      category: "Pool",
      alt: "Central courtyard pool framed by the private suites of the hotel",
      width: 1600,
      height: 1200
    },
    exterieur: {
      base: "/assets/images/residence-exterieur",
      title: "The Residence",
      category: "Exteriors",
      alt: "Hotel grounds, lush tropical garden and private architecture",
      width: 1600,
      height: 1200
    },
    nuitRose: {
      base: "/assets/images/piscine-nuit-rose",
      title: "Lit Pool",
      category: "By night",
      alt: "Swimming pool with vibrant pink lights beneath the Bonoua night sky",
      width: 1600,
      height: 1200
    },
    nuitBleue: {
      base: "/assets/images/piscine-nuit-bleue",
      title: "Residence by Night",
      category: "By night",
      alt: "Quiet night atmosphere with deep blue water lights reflecting on the facade",
      width: 1600,
      height: 1200
    },
    nuitTerrasse: {
      base: "/assets/images/piscine-nuit-terrasse",
      title: "Terrace by Night",
      category: "By night",
      alt: "Overlook from the private terrace across the pool and quiet residence",
      width: 1600,
      height: 1200
    }
  },
  galleryPreview: ["piscineCour", "chambre", "nuitBleue", "exterieur", "nuitRose"],
  galleryAll: ["chambre", "piscineJour", "piscineCour", "exterieur", "nuitRose", "nuitBleue", "nuitTerrasse"]
});
