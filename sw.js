/* =====================================================================
   SERVICE WORKER — met l'appli en cache pour qu'elle marche hors ligne.
   ⚠️ Après chaque modification des fichiers, incrémente CACHE (v2, v3…)
   pour que le téléphone récupère la nouvelle version.
   ===================================================================== */
const CACHE = 'mes-cartes-v2';
const FILES = ['./', './index.html', './qrcode.js', './manifest.json', './icon-192.png', './icon-512.png'];

// Installation : copie des fichiers dans le cache
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

// Activation : suppression des anciennes versions du cache
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Requêtes : on sert le cache d'abord, le réseau seulement si absent
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)));
});
