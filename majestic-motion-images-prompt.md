# Majestic Residence Hotel : prompt motion des images

> Complément du fichier « majestic-residence-hotel-design-system.md ». Garder les couleurs, typographies et règles du design system. Ce prompt ajoute uniquement le mouvement des images.

Ajoute une couche de motion design sur toutes les images du site Majestic Residence Hotel, en JavaScript vanilla et CSS, sans librairie. Le mouvement doit évoquer la vie lente d'une résidence tropicale : l'eau qui ondule, les palmes qui bougent dans la brise, la lumière de fin de journée qui glisse. Tout est lent, doux, continu. Rien ne claque, rien ne rebondit fort. Référence de ton : Aman, Rosewood, Six Senses.

## Principes

- Une seule boucle `requestAnimationFrame` pour tout le site, qui lit une valeur de scroll partagée et la lisse (lerp 0.08 à 0.12).
- Animer uniquement `transform`, `opacity`, `clip-path` et `filter`. Jamais `top`, `left`, `width` ou `height`.
- `IntersectionObserver` pour démarrer et mettre en pause chaque effet : rien ne tourne hors écran.
- `will-change` posé seulement pendant l'animation, retiré ensuite.
- Effets souris uniquement si `(hover: hover) and (pointer: fine)`.
- `prefers-reduced-motion: reduce` : aucune boucle, aucune parallaxe, images affichées directement.
- `navigator.connection.saveData` ou connexion lente : pas de vidéo, pas d'effet d'eau.
- Objectif : 60 fps sur un portable milieu de gamme, CLS à 0.
- Compatible avec le mode `?rec=1` : tous les effets lisent la même valeur de scroll que la Web Animation, et les boucles ambiantes utilisent `document.timeline.currentTime` pour rester déterministes.

## Tokens motion

```css
:root {
  --ease-out: cubic-bezier(.22, 1, .36, 1);
  --ease-in-out: cubic-bezier(.65, 0, .35, 1);
  --ease-spring: cubic-bezier(.34, 1.4, .64, 1);
  --dur-hover: 900ms;
  --dur-reveal: 1400ms;
  --dur-ambient: 22s;
}
```

## 1. Hero : une image vivante

1. **Respiration lente :** la photo zoome en continu de scale 1 à 1.045 puis revient, 22s, `--ease-in-out`, en boucle alternée (effet Ken Burns très discret).
2. **Profondeur à trois vitesses :**
   - photo à .32x du scroll
   - titre MAJESTIC à .22x
   - détourage du premier plan à .12x
   Le premier plan semble plus proche, la photo plus lointaine.
3. **Parallaxe souris (desktop) :** la photo suit le curseur de ±8px, le détourage de ±16px, le titre de ±4px, avec un lissage lerp 0.06. Retour au centre quand la souris quitte le hero.
4. **Palmier dans la brise :** le détourage (palmier) oscille en rotation de -0.6° à 0.6°, `transform-origin: 50% 100%` (pied du tronc), cycle de 7s, `--ease-in-out`, avec un léger décalage aléatoire au démarrage pour éviter l'effet mécanique.
5. **Lumière qui glisse :** un calque de dégradé radial doré (`#D9B66F` à 10%, `mix-blend-mode: soft-light`) traverse lentement la photo de gauche à droite en 18s, en boucle alternée. On doit le sentir, pas le voir.
6. **Eau vivante (option) :** sur la zone de la piscine uniquement (masque CSS), un filtre SVG `feTurbulence` + `feDisplacementMap` d'intensité 4 à 6, `baseFrequency` animée très lentement. Désactivé sur mobile et en Save-Data.
7. **Variante vidéo (si disponible) :** remplacer la photo par une vidéo cinemagraph de 8 à 12s en boucle (piscine ou palmes), `muted autoplay loop playsinline`, `poster` = la photo hero, 1080p max, moins de 3 Mo, en WebM + MP4. Le détourage reste au-dessus.

## 2. Pastilles rondes de la déclaration

1. **Apparition :** gardée (scale 0 vers 1 avec `--ease-spring`, photo de 1.5 à 1).
2. **Vie intérieure :** une fois visibles, la photo dans chaque pastille dérive lentement (translate de ±6%, rotation de ±3°) en 14s, chaque pastille avec sa propre phase.
3. **Scroll :** l'image dans la pastille glisse verticalement de ±10% avec le scroll.
4. **Survol :** la pastille grandit de 0.86em à 1.4em en poussant légèrement les mots voisins (transition de `width`, interdite ailleurs mais acceptée ici car l'élément est inline et isolé), la photo dézoome de 1.15 à 1. Durée `--dur-hover`.

## 3. Dévoilement des images (toutes sections)

Créer un composant `data-reveal` réutilisable avec trois variantes, choisies selon la place de l'image dans la mise en page :

- **`rideau`** : un panneau `--paper-deep` couvre l'image puis se retire vers le haut (`clip-path: inset(0 0 0 0)` vers `inset(0 0 100% 0)`), pendant que l'image se dévoile de bas en haut avec un décalage de 120ms et passe de scale 1.25 à 1.
- **`fenetre`** : l'image s'ouvre depuis le centre (`clip-path: inset(18% 18% 18% 18% round 8px)` vers `inset(0 round 8px)`), scale de 1.15 à 1.
- **`fondu`** : opacité 0 vers 1, flou 12px vers 0, scale 1.06 vers 1. Pour les petites images.

Durée `--dur-reveal`, easing `--ease-out`, déclenchement à 25% de visibilité, une seule fois. Dans une grille, cascade de 90ms entre images.

## 4. Portrait de la section Formules

1. Dévoilement `rideau` (déjà prévu).
2. Parallaxe interne de ±7% (déjà prévue).
3. **Survol :** zoom lent de 1 à 1.05 en 1.6s et léger réchauffement (`filter: saturate(1.08) brightness(1.03)`).

## 5. Aperçu flottant au survol des formules

Effet éditorial signature, desktop uniquement :

- Au survol d'une ligne du tableau (Repos, Séjour, Nuit), une photo de la formule (format 4:5, 240px de large, rayon 6px) apparaît près du curseur.
- Elle suit le curseur avec un retard (lerp 0.1) et s'incline selon la vitesse horizontale (rotation max ±6°).
- Entrée : `clip-path: inset(100% 0 0 0)` vers `inset(0)` en 500ms, scale de 0.9 à 1.
- Passage d'une ligne à l'autre : l'image change par fondu enchaîné de 300ms, sans disparaître.
- Sortie du tableau : l'image se referme vers le bas en 400ms.
- Images : définies dans `MEDIA.formules.repos`, `MEDIA.formules.sejour`, `MEDIA.formules.nuit` (vraies photos à fournir).

## 6. Galerie

1. **Défilement horizontal piloté par le scroll :** la section est `position: sticky` sur une hauteur de 300vh ; le scroll vertical fait défiler une bande d'images horizontalement.
2. **Parallaxe interne :** chaque image glisse de ±12% dans son cadre, dans le sens inverse du défilement.
3. **Mise en avant :** l'image la plus proche du centre de l'écran passe à scale 1, les autres restent à 0.92 avec une opacité de 0.75.
4. **Curseur personnalisé :** au survol d'une image, un disque ivoire de 84px avec le label « VOIR » remplace le curseur, suivi avec un lerp de 0.15, entrée en scale de 0 à 1.
5. **Visionneuse plein écran :** ouverture par transition d'élément partagé (View Transitions API, `view-transition-name` sur l'image cliquée), repli FLIP manuel si l'API n'est pas supportée. Navigation clavier (flèches, Échap) et swipe sur mobile. Fond `--ink` à 96%.
6. **Mobile :** carrousel horizontal natif avec `scroll-snap`, pas de section sticky.

## 7. Section Réservation (fond noir)

- Photo de la résidence de nuit en fond, à 30% d'opacité sous un voile `--ink`.
- Zoom continu de 1.08 à 1 sur toute la traversée de la section au scroll.
- Quelques points lumineux dorés (6 à 10, 2 à 4px, flou 2px) qui montent très lentement, comme des lucioles autour de la piscine. Opacité max 40%. Désactivés en reduced-motion.

## 8. Transitions entre pages

- View Transitions API (`@view-transition { navigation: auto; }`) : fondu de 400ms entre les pages.
- L'image cliquée dans une carte (par exemple une formule) devient l'image hero de la page suivante grâce à un `view-transition-name` partagé.
- Repli : simple fondu si l'API n'est pas supportée.

## 9. Survol des images (générique)

Toutes les images cliquables :
- zoom de 1 à 1.04 en `--dur-hover`
- léger assombrissement du voile (de 0 à 8%)
- l'éventuelle légende monte de 8px en fondu

## Vérification (1440×960)

- **Hero au repos :** la photo respire, le palmier ondule, la lumière glisse, sans qu'aucun effet n'attire l'œil en premier.
- **Souris sur le hero :** la scène prend du relief sur trois plans.
- **Scroll :** chaque image se dévoile une seule fois, sans saut ni décalage de mise en page.
- **Survol des formules :** la photo flotte, suit le curseur et change de façon fluide d'une ligne à l'autre.
- **Galerie :** le scroll vertical fait défiler les images horizontalement, l'image centrale est mise en avant, le clic ouvre la visionneuse avec une transition continue.
- **Performance :** aucune image sous 55 fps dans le panneau Performance de Chrome, CLS à 0.
- **Reduced motion :** tout le contenu est visible immédiatement, aucune animation en boucle.
