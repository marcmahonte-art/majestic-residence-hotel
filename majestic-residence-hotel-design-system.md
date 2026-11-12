# MAJESTIC RESIDENCE HOTEL
## Design System, spécifications du site et prompt de développement

> L'élégance du séjour, le confort du repos.

| | |
|---|---|
| **Projet** | Site web officiel de Majestic Residence Hotel |
| **Localisation** | Bonoua, Côte d'Ivoire |
| **Positionnement** | Luxury Boutique Hospitality, résidence hôtelière premium |
| **Objectif** | Inspirer confiance, montrer les formules et les tarifs, convertir en réservation (WhatsApp, puis moteur de réservation) |
| **Références** | Aman, Rosewood, Six Senses, Belmond : espace blanc, photographie plein cadre, navigation discrète, typographie éditoriale |
| **Stack cible** | HTML, CSS, JavaScript vanilla, sans framework ni build (évolutif vers un CMS / moteur de réservation) |

---

## Sommaire

1. Informations commerciales
2. Principes de design
3. Design system (tokens, typographie, logo, composants, motion, accessibilité)
4. Spécifications du site (pages, structure, réservation, responsive, SEO)
5. Prompt de développement : sections éditoriales de la page d'accueil
6. Médias à produire
7. Points à confirmer avant mise en production
8. Annexe : tokens CSS prêts à l'emploi

---

## 1. Informations commerciales

**Majestic Residence Hotel** · BONOUA (QUARTIER DELANOI) · CÔTE D'IVOIRE

### Deux offres commerciales distinctes — ne jamais les mélanger dans une seule grille tarifaire

**Catégorie A · NOS CHAMBRES (séjours à la nuitée)**

Sous-titre : « Profitez d'un cadre confortable avec petit-déjeuner inclus et accès gratuit à la piscine. »

| Chambre | Tarif par nuitée | À partir de 2 nuits |
|---|---|---|
| Chambre standard | 30 000 FCFA / nuitée | 25 000 FCFA / nuitée |
| Chambre supérieure | 40 000 FCFA / nuitée | 35 000 FCFA / nuitée |

- Le tarif dès 2 nuits est mis en avant comme offre avantageuse, avec la mention discrète « Tarif préférentiel dès 2 nuitées ».
- Chaque carte rappelle uniquement : « Petit-déjeuner inclus » et « Accès gratuit à la piscine ».

**Catégorie B · NOS FORMULES (courte durée)**

Section séparée, sous-titre : « Une pause détente adaptée à votre emploi du temps. »

| Formule | Détail | Tarif |
|---|---|---|
| SERVICE REPOS | Durée : 3 heures | 20 000 FCFA |
| SERVICE SÉJOUR | Horaire : de midi à midi | 30 000 FCFA |
| SERVICE NUIT | Horaire : de 22 h à midi | 25 000 FCFA |

Chaque carte porte un bouton « RÉSERVER » ouvrant le WhatsApp officiel `wa.me/2250501752275` avec la formule préremplie.

> Petit-déjeuner inclus et accès gratuit à la piscine sont annoncés pour les chambres (catégorie A) ; ils ne sont pas généralisés aux formules de courte durée.

### Commodités

- Parking protégé
- Wi-Fi
- Room Service
- Piscine
- Petit-déjeuner inclus

### Contact

- WhatsApp (contact principal de réservation) : +225 05 01 75 22 75
- Adresse : Bonoua, quartier Delanoi — à 10 minutes de l'église Notre-Dame-de-la-Garde
- Facebook : Majestic Residence Hotel (https://web.facebook.com/Majesticbonoua)

> Les anciens numéros ne sont plus présentés comme contacts de réservation.

### Règle de contenu

Ne jamais inventer de caractéristiques de chambres (superficie, capacité, équipements, avis clients, notes). Les deux catégories officielles (standard / supérieure), les deux commodités fournies et les tarifs / horaires ci-dessus sont les seules informations publiables ; les deux offres restent présentées dans deux sections distinctes.

---

## 2. Principes de design

### Ce que l'interface doit transmettre

- Le prestige et l'élégance.
- La tranquillité et le repos.
- Le confort et l'intimité.
- La confiance et le professionnalisme.

### Direction artistique

Un magazine de voyage haut de gamme, calme et lumineux. Fond ivoire, grandes capitales serif noir profond, petits labels dorés, photographie documentaire chaude et naturelle. Beaucoup d'espace. L'or est une ponctuation, jamais une surface.

### Règle fondamentale

Le site vend une expérience, pas un établissement. Chaque écran aide le visiteur à répondre à trois questions :

1. Où vais-je séjourner ?
2. Combien coûte mon séjour ?
3. Comment puis-je réserver ?

La photographie réelle, la transparence des tarifs et la simplicité de réservation sont prioritaires.

### À éviter

- Interfaces surchargées, collages de cartes, effets brillants.
- Couleurs vives, dégradés excessifs, or en aplat sur de grandes surfaces.
- Fond noir pleine page (le noir est réservé aux sections de prestige : réservation, footer).
- Photos de banque d'images présentées comme l'établissement.
- Animations rapides ou gratuites.

---

## 3. Design system

### 3.1 Couleurs

| Token | Nom | Code | Usage |
|---|---|---|---|
| `--paper` | Ivory | `#F8F5EF` | Fond principal des pages |
| `--paper-deep` | Warm Beige | `#E9DFCE` | Surfaces, cartes, alternance de sections |
| `--ink` | Majestic Black | `#171717` | Titres, menus, sections de prestige |
| `--text` | Charcoal | `#292929` | Texte courant (à 78% d'opacité pour les paragraphes) |
| `--gold` | Champagne Gold | `#C6A15B` | Boutons principaux, filets, icônes, détails |
| `--gold-hover` | Royal Gold | `#D9B66F` | Hover des boutons dorés |
| `--gold-ink` | Gold Ink (dérivé) | `#8C6A2F` | Tout texte doré de 14px ou moins sur fond clair |
| `--white` | Pure White | `#FFFFFF` | Lisibilité, texte sur photo |
| `--hairline` | Filet | `#171717` à 14% | Séparateurs, bordures discrètes |

**Règles**

- Le noir est utilisé pour les sections prestigieuses et les menus.
- L'or est réservé aux accents, boutons importants, icônes et détails.
- L'ivoire constitue le fond principal des pages.
- Le blanc sert à améliorer la lisibilité, notamment sur les photos.
- `#C6A15B` sur ivoire a un contraste trop faible pour du petit texte (environ 2.2:1). Pour les labels et prix en doré sur fond clair, utiliser `--gold-ink` `#8C6A2F` (environ 4.6:1, conforme AA).
- Sur fond noir, `--gold` et `--gold-hover` sont lisibles et peuvent être utilisés pour le texte.

### 3.2 Typographie

| Rôle | Police | Graisse | Notes |
|---|---|---|---|
| Titres, noms des formules, éléments éditoriaux | Cormorant Garamond (serif) | 500 | Titres de sections en capitales, tracking .01em à .02em |
| Navigation, boutons, labels | Montserrat (sans-serif) | 500 à 600 | Labels en capitales, tracking .2em |
| Tarifs | Montserrat | 600 (SemiBold) | Chiffres tabulaires |
| Paragraphes, infos pratiques | DM Sans (sans-serif) | 400 | |

**Échelle typographique**

| Niveau | Desktop | Mobile |
|---|---|---|
| Hero | 64 à 76px (ou 9.6cqw dans la scène hero éditoriale) | 15.6vw |
| Titres de section | 42 à 52px | 30 à 36px |
| Sous-titres | 24 à 30px | 20 à 24px |
| Paragraphes | 15 à 17px | 15 à 16px |
| Labels et petites infos | 12 à 14px (labels capitales : 11px minimum, tracking .2em) | 11 à 13px |

Line-height : titres .8 à 1.06, paragraphes 1.6.

### 3.3 Logo

Utiliser exclusivement le logo officiel fourni par le client : emblème circulaire doré avec M central, signature MAJESTIC / RESIDENCE HOTEL.

**Déclinaisons à prévoir**

- Logo original sur fond transparent (PNG + SVG).
- Version dorée sur fond noir.
- Version blanche sur fond noir ou sur photo.
- Symbole seul (emblème M) pour le favicon et l'emblème de section.
- Version horizontale (emblème à gauche, signature à droite) pour le header et le footer.

**Règles**

- Ne jamais déformer le logo ni modifier les proportions de l'emblème.
- Ne jamais le redessiner ni l'imiter en CSS.
- Zone de protection minimale : la hauteur du M central tout autour.
- Taille minimale : 32px de haut pour l'emblème seul, 120px de large pour la version horizontale.

### 3.4 Composants

**Bouton principal**

- Fond `--gold` `#C6A15B`, texte `--ink` `#171717`.
- Hauteur 52px, padding horizontal 28px, rayon 4px.
- Montserrat SemiBold 13px, capitales, tracking .12em.
- Hover : fond `--gold-hover` `#D9B66F`, transition 300ms.
- Focus : anneau 2px `--gold` décalé de 3px.

**Bouton secondaire**

- Fond transparent, bordure 1px `--gold`.
- Texte `--ink` sur fond clair, `--gold` ou ivoire sur fond sombre.
- Mêmes dimensions que le bouton principal.

**Bouton sur photo (header hero)**

- Bordure 1px ivoire, texte ivoire, hauteur 40px, rayon 4px.

**Pilule d'action**

- Fond `--paper`, rayon 999px, hauteur 48px.
- Icône ronde à gauche, texte label au centre, flèche à droite.

**Cartes**

- Fond ivoire ou blanc, bordure 1px `--hairline`.
- Ombre très légère (0 12px 32px rgba(23,23,23,.06)).
- Rayon 6 à 10px.
- Photographie grand format, information hiérarchisée : nom, horaire, prix, action.

**Tableau des formules**

- Lignes séparées par des filets `--hairline`.
- Libellé en Cormorant 22px `--ink`, horaire en DM Sans, prix en Montserrat SemiBold `--gold-ink` aligné à droite.
- Ligne entière cliquable vers la réservation de la formule.

**Champs de formulaire (réservation)**

- Hauteur 52px, fond blanc, bordure 1px `--hairline`, rayon 4px.
- Label au-dessus en Montserrat 12px.
- Focus : bordure `--gold`.
- Erreur : message en texte sous le champ, jamais uniquement par la couleur.

**Bouton WhatsApp flottant (mobile)**

- Rond 56px, fond `--gold`, icône `--ink`, en bas à droite, visible après le hero.

### 3.5 Icônes

Lucide Icons, trait fin 1.25px, taille 20 à 24px, couleur `--gold` ou `--ink`.

Icônes de référence : `car` (Parking protégé), `wifi` (Wi-Fi), `concierge-bell` (Room Service), `waves` (Piscine), `bed-double` (Formules), `map-pin` (Localisation), `phone`, `menu`, `arrow-right`.

### 3.6 Espacements et grille

| Élément | Desktop | Mobile |
|---|---|---|
| Container max | 1280px (1180px pour les sections éditoriales) | 100% |
| Marges latérales | 64px | 20px |
| Espacement entre sections | 100 à 120px | 60 à 72px |
| Gouttière de grille | 24 à 32px | 16px |
| Pas d'espacement | 4, 8, 12, 16, 24, 32, 48, 64, 96, 120 | idem |

Grille : 12 colonnes desktop, 2 colonnes tablette, 1 colonne mobile.

### 3.7 Grain

Une couche SVG de bruit fractal fixe au-dessus de tout le site, `mix-blend-mode: multiply`, opacité 18%. Plus léger que sur un papier kraft : l'ivoire doit rester propre et lumineux.

### 3.8 Motion

| Token | Valeur | Usage |
|---|---|---|
| `--ease-out` | `cubic-bezier(.22, 1, .36, 1)` | Apparitions, montées de lettres |
| `--ease-spring` | `cubic-bezier(.34, 1.56, .64, 1)` | Pastilles photo (léger rebond) |
| `--dur-fast` | 300ms | Hover, boutons |
| `--dur-base` | 700ms | Apparitions de blocs |
| `--dur-slow` | 1200ms | Dévoilements d'images |
| `--dur-hero` | 2200ms | Zoom d'arrivée de la photo hero |

**Principes**

- Apparition progressive des sections.
- Zoom léger des photographies au survol (scale 1.04, 900ms).
- Transitions douces des boutons.
- Défilement fluide.
- Menu animé (overlay ivoire qui se déploie).
- Typographie de titre révélée lettre par lettre.
- Aucune animation rapide, clignotante ou en boucle agressive.
- `prefers-reduced-motion` respecté partout.

### 3.9 Accessibilité

- Contraste AA minimum sur tout le texte.
- Focus visible doré sur tous les éléments interactifs.
- Navigation complète au clavier, y compris le menu et la visionneuse de galerie.
- Titres découpés en lettres : `aria-label` avec le mot entier, spans de lettres en `aria-hidden`.
- Images avec `alt` descriptif en français.
- Zones tactiles de 44px minimum.

---

## 4. Spécifications du site

### 4.1 Pages

| URL | Contenu |
|---|---|
| `/` | Page d'accueil |
| `/chambres` | Formules, photos des chambres, tarifs |
| `/services` | Commodités |
| `/galerie` | Galerie complète avec visionneuse |
| `/contact` | Coordonnées, carte, itinéraire |
| `/reservation` | Parcours de réservation |

### 4.2 Structure de la page d'accueil

**A. Header**

- Gauche : bouton « MENU » (icône deux traits). Centre : logo officiel. Droite : bouton « RÉSERVER ».
- Le menu ouvre un overlay ivoire plein écran : Accueil, Nos chambres, Nos services, Galerie, Contact, en Cormorant capitales.
- Transparent sur le hero (logo blanc ou doré, texte ivoire), puis fond ivoire avec logo doré et texte noir au scroll.
- Mobile : icônes seules, logo centré, accès rapide à la réservation.

**B. Hero**

- Grande photographie immersive de la résidence (piscine ou façade), voile noir subtil.
- Surtitre : BONOUA · CÔTE D'IVOIRE.
- Titre : MAJESTIC.
- Signature : « L'élégance du séjour, le confort du repos. »
- Pilule d'action : « DÉCOUVRIR NOS FORMULES ».
- Détails complets dans la section 5 (prompt).

**C. Présentation**

- Label : BIENVENUE CHEZ MAJESTIC.
- Déclaration : « VOTRE PARENTHÈSE DE TRANQUILLITÉ À BONOUA », avec deux pastilles photo intégrées.
- Texte : « Un cadre dédié à la tranquillité, à la détente et au repos, avec des services pensés pour rendre chaque séjour confortable. »

**D. Nos formules**

- Titre : TROIS FAÇONS DE SÉJOURNER.
- Tableau des trois formules (nom, horaire, prix FCFA, action Réserver).
- Portrait d'une chambre réelle.
- Badge rotatif « RÉSERVER SUR WHATSAPP ».

**E. Nos commodités**

- Parking protégé, Wi-Fi, Room Service, Piscine, en icônes Lucide.
- Mise en page aérée avec une photographie de la piscine.

**F. Galerie**

- Catégories : Chambres, Piscine, Extérieurs, Espaces de détente, Résidence de nuit.
- Grille éditoriale asymétrique, visionneuse plein écran au clic (clavier, swipe, Échap pour fermer).
- Exclusivement des photographies authentiques de l'établissement.
- Sous-galerie « EN IMAGES » de la page Menu (`config.galleryDining`, FR/EN) : 7 visuels d'ambiance uniquement — Attiéké & Poisson, Buffet, Table en terrasse, Terrasse ombragée, Billard, Baby-foot, Espace massage. Les gros plans de plats et les doublons du plateau de poulet (`plat-poulet`, `plat-escargots`, `plat-braise`, `plat-frites`, `plat-attieke`) n'y figurent pas ; ils restent disponibles dans la galerie complète `config.galleryAll` (`/gallery/`). Ne pas les réintroduire dans `galleryDining`.
- Dénomination officielle du visuel `plat-poisson` : **« Attiéké & Poisson »** (EN : « Attiéké & fish »), et non « Poisson & macaroni ». La photographie montre de l'attiéké, du poisson braisé et une garniture de tomates / oignons ; le titre, l'`alt` et la légende de la visionneuse doivent tous suivre ce libellé dans `config.MEDIA`, `t.media` FR et EN. Le « Macaroni » à 1 000 FCFA de la carte du petit déjeuner (`config.dining`) est un autre mets, distinct : ne pas le supprimer ni le renommer.

**G. Réservation**

- Fond `--ink` avec détails dorés.
- Titre : « Votre séjour commence ici. »
- Texte : « Choisissez votre formule et contactez notre équipe pour organiser votre séjour. »
- Bouton principal : « Réserver sur WhatsApp ».

**H. Localisation**

- Titre : NOUS TROUVER.
- Bonoua, Côte d'Ivoire.
- Carte Google Maps intégrée après confirmation de l'adresse exacte.
- Bouton secondaire « Itinéraire ».

**I. Footer**

- Fond `--ink`, logo doré horizontal.
- Majestic Residence Hotel, Bonoua, Côte d'Ivoire.
- Téléphone (numéro principal confirmé uniquement).
- Lien Facebook.
- Liens : Accueil | Chambres | Services | Galerie | Contact.

### 4.3 Parcours de réservation

1. Le client découvre les formules.
2. Il sélectionne sa formule.
3. Il indique sa date d'arrivée.
4. Il indique son nom et ses préférences.
5. Il est redirigé vers WhatsApp avec un message prérempli.

**Lien :** `https://wa.me/{{WHATSAPP_NUMBER}}?text=...`, numéro défini dans une constante unique `WHATSAPP_NUMBER`.

**Message prérempli (encodé en URL) :**

```
Bonjour Majestic Residence Hotel,
Je souhaite effectuer une réservation.
Formule : [Formule sélectionnée]
Date : [Date souhaitée]
Nom : [Nom du client]
Merci de me confirmer la disponibilité.
```

**Règles**

- Ne jamais afficher une réservation comme confirmée avant validation de l'établissement. Le wording reste « demande de réservation ».
- Architecture évolutive : isoler la logique de réservation dans un module (`booking.js`) pour brancher plus tard un vrai moteur de réservation et la gestion des disponibilités.

### 4.4 Responsive

| Écran | Comportement |
|---|---|
| Desktop (1024px et plus) | Mise en page large et immersive, grands visuels, header minimal avec menu overlay |
| Tablette (761 à 1023px) | Grille de deux colonnes, navigation adaptée |
| Mobile (760px et moins) | Navigation compacte, images optimisées, cartes en une colonne, boutons de réservation accessibles, bouton WhatsApp flottant, aucun scroll horizontal |

### 4.5 Objectifs techniques

- Rapide : Lighthouse 90+ en performance et accessibilité.
- Images WebP/AVIF avec `srcset`, `loading="lazy"` sauf l'image hero (`fetchpriority="high"`).
- Hero : 6 fichiers `hero-{768,1280,1920}.{avif,webp}` + `majestic-og.jpg` (1200×630 pour Open Graph). La photo officielle est une **vue de jour** de la piscine et des bâtiments à Bonoua. On conserve le ratio paysage de la source (1920×1490, ~1.29) : `object-fit: cover` adapte le cadrage au viewport. Ne pas pré-recadrer en 16/9 — le mobile perdrait trop de largeur utile. Les attributs `width`/`height` du `<img>` et `MEDIA.hero` doivent toujours refléter ce ratio pour éviter tout décalage de mise en page.
- Polices Google Fonts avec `display=swap` et préconnexion.
- Responsive sur tous les écrans.
- Accessible (voir 3.9).
- Facile à administrer : contenus (tarifs, horaires, numéro, URLs des médias) centralisés dans un fichier de configuration.

### 4.6 SEO

- `<title>` : Majestic Residence Hotel | Hôtel et résidence à Bonoua, Côte d'Ivoire
- Meta description : « Majestic Residence Hotel à Bonoua : un cadre élégant et calme avec piscine, Wi-Fi, room service et parking protégé. Formules repos, séjour et nuit. Réservez sur WhatsApp. »
- Mots-clés cibles : hôtel à Bonoua, résidence hôtelière Bonoua, hôtel avec piscine Bonoua, réservation hôtel Bonoua.
- Données structurées schema.org `Hotel` : nom, ville, pays, `priceRange`, commodités. Adresse et téléphone ajoutés seulement une fois confirmés.
- Balises Open Graph avec la photo hero.
- Fiche Google Business Profile à aligner avec le site (nom, numéro, horaires).

---

## 5. Prompt de développement : sections éditoriales de la page d'accueil

> Prompt prêt à donner à Codex, Claude Code ou à un développeur. Il s'appuie sur le design system de la section 3.

Construis trois sections empilées de la page d'accueil de **Majestic Residence Hotel** (résidence hôtelière premium, Bonoua, Côte d'Ivoire) en HTML, CSS et JavaScript vanilla, sans framework ni build. Le ton : un magazine de voyage haut de gamme, calme et lumineux. Papier ivoire, grandes capitales Cormorant Garamond noir profond, petits labels dorés, photographie documentaire chaude. Le mouvement est lent et lettre par lettre : le titre MAJESTIC monte derrière le premier plan, la photo du hero se fond dans le papier au scroll, et la typo de chaque section apparaît une lettre à la fois.

### Médias (URLs provisoires conservées)

Les URLs ci-dessous sont des visuels provisoires. Chaque emplacement sera remplacé par une photo authentique de l'établissement, avec les mêmes ratios. Centraliser les URLs dans un seul objet `MEDIA` en haut du JS.

- **Photo hero** (2400×1357, ratio 2688:1520). Cible finale : piscine ou façade de la résidence, ciel doux dans le tiers supérieur.
  Provisoire : https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/934f4b51-d05b-4498-9c4a-8262f044da66.jpg
- **Détourage premier plan** (WebP transparent du même sujet, recadré à sa bounding box). Cible finale : un palmier ou un élément du premier plan de la photo hero.
  Provisoire : https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/5d850aba-1a5b-44eb-bd6c-cd9f87845be7.webp
  Position dans le cadre de la photo : left 26.19%, top 30.99%, width 46.5%. Valeurs à remesurer avec la vraie photo ; les exposer en variables CSS (`--cut-left`, `--cut-top`, `--cut-width`).
- **Pastilles rondes** (carrées) :
  - Pastille 1, cible finale : la piscine de jour.
    Provisoire : https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/a6ea3433-41c4-46b8-aac3-faefa9ad7558.jpg
  - Pastille 2, cible finale : la résidence de nuit.
    Provisoire : https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/9152c213-6763-4147-83f3-b985e6c65a00.jpg
- **Portrait vertical** (2:3). Cible finale : une chambre (lit, lumière naturelle).
  Provisoire : https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/e665edf0-2b16-4b17-ada1-0b928af1dbfa.jpg
- **Logo** : logo officiel Majestic en PNG/SVG transparent, versions dorée et blanche (voir 3.3).

### 5.1 Hero (plein écran)

- **Scène :** une boîte au ratio de la photo (2688:1520) qui couvre le viewport (`width: max(100vw, 100svh * 1.7684)`), centrée, avec `container-type: inline-size`. Trois calques :
  1. la photo (object-fit cover)
  2. le bloc titre
  3. le détourage du premier plan, qui passe devant le bas des lettres centrales de MAJESTIC
- **Bloc titre :** à 19.2% du haut de la scène, centré.
  - Surtitre « BONOUA · CÔTE D'IVOIRE » (style label, 0.66cqw, ivoire).
  - « MAJESTIC » en Cormorant Garamond 500 à 9.6cqw, line-height .8, tracking .02em, ivoire.
  - Signature en Cormorant italique 1.4cqw : « L'élégance du séjour, le confort du repos. »
- **Voile :** `#171717` de 18 à 28%, plus marqué en haut.
- **Navigation (ivoire, sur la photo) :**
  - Gauche : icône menu deux traits + « MENU ».
  - Centre : logo officiel, version blanche ou dorée, 44px de haut.
  - Droite : bouton bordé « RÉSERVER » (1px, 40px de haut, rayon 4px).
  - Au scroll, header sur fond ivoire, logo doré, texte noir.
- **Pilule d'action :** en bas au centre, pilule ivoire « DÉCOUVRIR NOS FORMULES » avec icône ronde (Lucide `bed-double`) et flèche. Elle fait défiler jusqu'à la section 5.3.
- **Séquence de chargement :**
  - La photo passe de scale 1.06 à 1 en 2.2s.
  - Surtitre et nav descendent en fondu.
  - Les lettres de MAJESTIC montent de .18em en sortant d'un flou de 10px, 95ms d'écart, de gauche à droite.
  - La signature apparaît en fondu à environ .9s.
  - La pilule monte en dernier, à environ 1.05s.
- **Scroll (le hero se fond dans le papier) :**
  - La scène descend à .32x du scroll.
  - Un dégradé couleur `--paper` en bas passe de 34% à 100% de la hauteur du hero et atteint l'opacité totale vers 60% d'un viewport scrollé.
  - Photo et détourage flouent jusqu'à 6px. La pilule passe sous le dégradé et disparaît avec la photo.

### 5.2 Déclaration (plein écran, centré)

- **Label :** `--gold-ink` « BIENVENUE CHEZ MAJESTIC ».
- **Déclaration :** trois lignes de Cormorant en capitales à clamp(40px, 7.2vw, 132px), line-height 1.06, `--ink` :
  « VOTRE ● PARENTHÈSE / DE ● TRANQUILLITÉ / À BONOUA »
  - Chaque ● est une pastille photo ronde de 0.86em posée dans la ligne, filet or 1px.
- **Sous-texte :** DM Sans 17px, max 520px, centré : « Un cadre dédié à la tranquillité, à la détente et au repos, avec des services pensés pour rendre chaque séjour confortable. »
- **Emblème :** dessous, l'emblème M officiel en doré, 66px (symbole seul).
- **Apparition (à 35% visible) :**
  - Chaque lettre monte de .55em avec une inclinaison de 4°, 26ms d'écart dans l'ordre de lecture.
  - Les pastilles surgissent depuis scale 0 avec un léger rebond (`--ease-spring`), leur photo zoome de 1.5 à 1.
  - L'emblème entre en tournant depuis -45° et scale .6 (rotation courte : c'est un logo).

### 5.3 Nos formules (plein écran)

- **Mise en page :** colonne de 1180px, filet en haut, trois colonnes (1.12fr / 1.12fr / .96fr).
- **Colonne gauche :**
  - Label `--gold-ink` « MAJESTIC RESIDENCE HOTEL ».
  - « NOS / FORMULES / DE / SÉJOUR » en Cormorant à clamp(34px, 4.25vw, 66px), un mot par ligne.
  - Badge de 84px : anneau de 48 traits radiaux dorés qui tourne une fois toutes les 16s, icône WhatsApp (trait fin) au centre. C'est un lien de réservation.
  - Légende « RÉSERVER SUR WHATSAPP ».
- **Colonne centrale :**
  - Paragraphe DM Sans 15px : « Choisissez votre chambre, indiquez votre date d'arrivée, et notre équipe vous confirme la disponibilité sur WhatsApp. »
  - Tableau des formules (composant 3.4) :
    - Chambre standard · Par nuit · 30 000 FCFA
    - Chambre supérieure · Par nuit · 40 000 FCFA
    - Chambre standard · Dès 2 nuits · 25 000 FCFA
    - Chambre supérieure · Dès 2 nuits · 35 000 FCFA
  - Chaque ligne ouvre WhatsApp avec la formule préremplie.
  - Ligne d'icônes Lucide : Parking protégé · Wi-Fi · Room Service · Piscine · Petit-déjeuner.
  - Bouton principal « RÉSERVER MON SÉJOUR ».
- **Colonne droite :** portrait 2:3, rayon 6px. L'image dérive de ±7% dans son cadre au scroll (parallaxe).
- **Apparition :**
  - Les lettres du titre montent comme celles de la déclaration, 30ms d'écart.
  - Paragraphe et tableau montent de 22px en cascade, les lignes apparaissent une par une.
  - Le portrait se dévoile vers le haut avec `clip-path: inset(100% 0 0 0)` vers `inset(0)` (1.2s), l'image passe de scale 1.25 à 1.

### 5.4 Mode enregistrement (`?rec=1`)

- **Scroll :** toute la page est translatée par une Web Animation de 6.5s au lieu d'un vrai scroll :
  - pause jusqu'à 1.95s
  - glisse vers la section 2 à 3.35s
  - pause jusqu'à 4.25s
  - glisse vers la section 3 à 5.55s
  - pause
- **Apparitions :** créées dès le départ à 0, 2.65s et 4.85s.
- **Effets de scroll :** une boucle rAF lit le translate courant de la page et applique les mêmes effets liés au scroll, pour qu'un enregistreur image par image reste déterministe.

### 5.5 Mobile (760px ou moins)

- **Nav :** icônes seules, logo centré à 34px.
- **Titre hero :** plus haut (top 17%) à 15.6vw pour dégager le premier plan.
- **Déclaration :** 8.6vw.
- **Formules :** une seule colonne, titre à 12vw, photo pleine largeur.
- **Bouton WhatsApp flottant** visible après le hero.
- **Débordement :** aucun scroll horizontal.

### 5.6 Accessibilité et mouvement réduit

- `prefers-reduced-motion` : désactiver les apparitions lettre par lettre, la parallaxe, le flou et la rotation du badge ; afficher le contenu directement.
- Titres découpés : `aria-label` sur le conteneur, lettres en `aria-hidden`.

### 5.7 Vérification (1440×960)

- **Au chargement :** la résidence apparaît dans la lumière, et MAJESTIC monte lettre par lettre derrière le premier plan.
- **Premier scroll :** la photo floute et se fond dans le papier ivoire, puis la déclaration monte lettre par lettre avec les deux pastilles photo qui surgissent dans les espaces.
- **Deuxième scroll :** le titre des formules monte, le tableau des tarifs apparaît, le portrait se dévoile et l'anneau du badge WhatsApp continue de tourner.
- **Contenu :** aucune catégorie de chambre, superficie, capacité, avis ou note inventés. Seuls les tarifs, horaires et commodités fournis apparaissent.

---

## 6. Médias à produire

Shooting professionnel recommandé, lumière naturelle (fin d'après-midi) et une série de nuit.

| Sujet | Détails | Usage |
|---|---|---|
| Chambres | Chaque chambre ou type de chambre, lit, détails textiles, lumière naturelle | Formules, portrait 2:3, galerie |
| Piscine | De jour et de nuit, cadrage large et détails (transats, eau) | Hero, pastilles, commodités |
| Salles de bain | Équipements et finitions | Galerie |
| Extérieurs | Façade, entrée, espaces communs, jardin | Hero, galerie |
| Résidence de nuit | Façade éclairée, piscine illuminée | Pastille 2, section réservation |
| Détourage | Un palmier ou élément du premier plan de la photo hero, détouré en WebP transparent | Effet de profondeur du hero |

Formats : originaux en haute définition, export WebP/AVIF en 2400px de large pour le hero, 1200px pour le reste.

---

## 7. Points à confirmer avant mise en production

1. ~~**Numéro WhatsApp principal**~~ : **confirmé** — +225 05 01 75 22 75 (WhatsApp, contact unique de réservation).
2. ~~**Structure commerciale**~~ : **confirmée** — deux sections distinctes : « NOS CHAMBRES » (standard / supérieure, par nuitée ou dès 2 nuitées) et « NOS FORMULES » (Repos / Séjour / Nuit, courte durée). Aucune grille tarifaire commune.
3. ~~**Adresse exacte**~~ : **confirmée** — Bonoua, quartier Delanoi, à 10 minutes de l'église Notre-Dame-de-la-Garde. La carte Google Maps peut maintenant être intégrée.
4. **Photos authentiques** de l'établissement pour remplacer les visuels provisoires.
5. **Fichiers du logo** en vectoriel (SVG ou AI) pour les déclinaisons.

---

## 8. Annexe : tokens CSS

```css
:root {
  /* Couleurs */
  --paper: #F8F5EF;
  --paper-deep: #E9DFCE;
  --ink: #171717;
  --text: #292929;
  --text-body: rgb(41 41 41 / .78);
  --gold: #C6A15B;
  --gold-hover: #D9B66F;
  --gold-ink: #8C6A2F;
  --white: #FFFFFF;
  --hairline: rgb(23 23 23 / .14);

  /* Typographie */
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-ui: "Montserrat", system-ui, sans-serif;
  --font-body: "DM Sans", system-ui, sans-serif;

  --fs-hero: clamp(64px, 6vw, 76px);
  --fs-h2: clamp(42px, 3.6vw, 52px);
  --fs-h3: clamp(24px, 2.2vw, 30px);
  --fs-body: clamp(15px, 1.1vw, 17px);
  --fs-small: 13px;
  --fs-label: 11px;
  --tracking-label: .2em;

  /* Espacements */
  --container: 1280px;
  --container-editorial: 1180px;
  --gutter: 64px;
  --section-gap: clamp(60px, 9vw, 120px);

  /* Formes */
  --radius-btn: 4px;
  --radius-card: 8px;
  --radius-pill: 999px;
  --shadow-card: 0 12px 32px rgb(23 23 23 / .06);

  /* Motion */
  --ease-out: cubic-bezier(.22, 1, .36, 1);
  --ease-spring: cubic-bezier(.34, 1.56, .64, 1);
  --dur-fast: 300ms;
  --dur-base: 700ms;
  --dur-slow: 1200ms;
  --dur-hero: 2200ms;
}

@media (max-width: 760px) {
  :root { --gutter: 20px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
```
