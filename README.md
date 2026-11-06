# Mes Cartes — installation sur Android via GitHub Pages

Appli hors ligne de gestion des cartes cadeaux, bons cadeaux et cartes fidélité.
Les données restent uniquement sur ton téléphone. GitHub sert seulement à télécharger l'appli une fois.

## Fichiers
| Fichier | Rôle |
|---|---|
| `index.html` | L'appli complète (interface + logique, sections numérotées et commentées) |
| `qrcode.js` | Générateur de QR Code (bibliothèque libre MIT, utilisée hors ligne) |
| `sw.js` | Service worker : met l'appli en cache pour le hors ligne |
| `manifest.json` | Nom, icône, couleurs pour l'installation sur l'écran d'accueil |
| `icon-192.png`, `icon-512.png` | Icônes |

## Mise en ligne (≈ 10 min, une seule fois)
1. Crée un compte sur https://github.com (gratuit) si tu n'en as pas.
2. En haut à droite **+ → New repository**. Nom : `mes-cartes`, visibilité **Public**, puis **Create repository**.
   (Public est requis pour GitHub Pages gratuit. Seul le code est public, **jamais tes cartes** : elles sont stockées sur ton téléphone.)
3. Sur la page du dépôt : **uploading an existing file** (ou **Add file → Upload files**), glisse les 6 fichiers
   (pas le dossier, pas le README obligatoire), puis **Commit changes**.
4. **Settings → Pages** : Source = **Deploy from a branch**, Branch = **main** / **(root)**, puis **Save**.
5. Attends 1 à 2 min. L'adresse s'affiche en haut de la page Pages :
   `https://TON-PSEUDO.github.io/mes-cartes/`

## Installation sur le téléphone (Chrome Android)
1. Ouvre l'adresse ci-dessus dans **Chrome**.
2. Menu **⋮ → Installer l'application** (ou « Ajouter à l'écran d'accueil »).
3. Lance-la une fois avec internet. Ensuite elle fonctionne **sans connexion**.

## Bon à savoir
- **Mot de passe maître** : demandé au 1er PIN enregistré. **Oublié = PIN perdus.** Le reste (cartes, soldes) reste accessible.
- **Sauvegarde** : menu ⋮ → Exporter. Fais-le régulièrement (et avant de changer de téléphone).
  Désinstaller l'appli ou effacer les données de Chrome pour ce site **supprime les cartes**.
- **QR Code** : choisis « QR Code » dans « Format du code-barres » et saisis le texte imprimé sous le QR.
- **Code-barres** : automatique (EAN-13 si 13 chiffres valides, sinon Code 128). Si une caisse ne lit pas,
  essaie de forcer l'autre format dans « Modifier », et monte la luminosité.
- **Mettre à jour l'appli** : remplace les fichiers sur GitHub ET passe `CACHE = 'mes-cartes-v1'` à `v2` dans `sw.js`.
  Rouvre l'appli deux fois pour que la nouvelle version s'affiche.
