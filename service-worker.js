// ===== SERVICE WORKER PARA RUIZ =====
// Permite que la app funcione offline

const CACHE_NAME = 'ruiz-v1.0';
const ASSETS_TO_CACHE = [
    './',
    './APP.php',
    './styles.css',
    './script.js',
    './config.js',
    './manifest.json'
];

// ===== INSTALACIÓN =====
self.addEventListener('install', event => {
    console.log('🔧 Service Worker instalándose...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('📦 Cachando assets...');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => {
                console.log('✅ Service Worker instalado');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('❌ Error en instalación:', error);
            })
    );
});

// ===== ACTIVACIÓN =====
self.addEventListener('activate', event => {
    console.log('🚀 Service Worker activándose...');
    
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_NAME) {
                            console.log('🗑️ Eliminando cache antiguo:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('✅ Service Worker activado');
                return self.clients.claim();
            })
    );
});

// ===== FETCH - NETWORK FIRST STRATEGY =====
self.addEventListener('fetch', event => {
    // Solo cachear requests GET
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        // Intentar obtener del network primero
        fetch(event.request)
            .then(response => {
                // Si la respuesta es válida, guardar en cache
                if (response && response.status === 200) {
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });
                }
                return response;
            })
            .catch(error => {
                // Si el network falla, usar el cache
                console.log('📡 Network error, usando cache:', event.request.url);
                return caches.match(event.request)
                    .then(response => {
                        if (response) {
                            return response;
                        }
                        
                        // Si no hay cache, retornar página offline
                        if (event.request.destination === 'document') {
                            return caches.match('./APP.php');
                        }
                        
                        return new Response(
                            'Recurso no disponible offline',
                            { status: 503, statusText: 'Service Unavailable' }
                        );
                    });
            })
    );
});

// ===== MANEJO DE MENSAJES =====
self.addEventListener('message', event => {
    console.log('📨 Mensaje recibido:', event.data);
    
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

console.log('⚙️ Service Worker cargado');
