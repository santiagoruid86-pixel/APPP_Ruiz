<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Ruiz - Tu asistente de voz inteligente para controlar tu celular">
    <meta name="theme-color" content="#6366f1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="Ruiz">
    
    <title>Ruiz - Asistente de Voz</title>
    
    <link rel="stylesheet" href="styles.css">
    <link rel="manifest" href="manifest.json">
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'><rect fill='%236366f1' width='192' height='192'/><text x='50%' y='50%' font-size='80' font-family='Arial' font-weight='bold' text-anchor='middle' dominant-baseline='middle' fill='white'>🎙️</text></svg>">
    <link rel="apple-touch-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'><rect fill='%236366f1' width='192' height='192'/><text x='50%' y='50%' font-size='80' font-family='Arial' font-weight='bold' text-anchor='middle' dominant-baseline='middle' fill='white'>🎙️</text></svg>">
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header class="header">
            <div class="header-content">
                <h1 class="app-title">🎙️ Ruiz</h1>
                <p class="subtitle">Tu asistente de voz inteligente</p>
            </div>
        </header>

        <!-- Main Content -->
        <main class="main-content">
            
            <!-- Visualizador de ondas de audio -->
            <div class="visualizer-container">
                <div class="visualizer" id="visualizer">
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                </div>
                <p class="status" id="status">Listo para escuchar</p>
            </div>

            <!-- Panel de control principal -->
            <div class="control-panel">
                <button class="btn-mic" id="btnMic" title="Presiona para activar micrófono">
                    <span class="mic-icon">🎤</span>
                    <span class="btn-text">Activar Micrófono</span>
                </button>
            </div>

            <!-- Indicador de escucha -->
            <div class="listening-indicator" id="listeningIndicator">
                <div class="pulse"></div>
                <p>Escuchando...</p>
            </div>

            <!-- Panel de respuestas y comandos -->
            <div class="response-panel">
                <div class="recognized-text" id="recognizedText">
                    <p class="label">Texto reconocido:</p>
                    <p class="text">Presiona el micrófono para comenzar</p>
                </div>

                <div class="ruiz-response" id="ruizResponse">
                    <p class="label">Respuesta de Ruiz:</p>
                    <p class="response-text">¡Hola! Soy Ruiz, tu asistente de voz. Activa el micrófono y di "Ey Ruiz" para empezar.</p>
                </div>
            </div>

            <!-- Panel de comandos disponibles -->
            <div class="commands-section">
                <h2>📋 Comandos Disponibles</h2>
                <div class="commands-grid" id="commandsGrid">
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, ¿qué hora es?</span>
                        <span class="command-desc">Te digo la hora actual</span>
                    </div>
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, cuéntame un chiste</span>
                        <span class="command-desc">Te cuento algo divertido</span>
                    </div>
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, abre navegador</span>
                        <span class="command-desc">Abre Google</span>
                    </div>
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, abre WhatsApp</span>
                        <span class="command-desc">Abre WhatsApp Web</span>
                    </div>
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, abre Facebook</span>
                        <span class="command-desc">Abre Facebook</span>
                    </div>
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, abre Instagram</span>
                        <span class="command-desc">Abre Instagram</span>
                    </div>
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, abre YouTube</span>
                        <span class="command-desc">Abre YouTube</span>
                    </div>
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, abre TikTok</span>
                        <span class="command-desc">Abre TikTok</span>
                    </div>
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, activar linterna</span>
                        <span class="command-desc">Enciende la linterna</span>
                    </div>
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, apagar linterna</span>
                        <span class="command-desc">Apaga la linterna</span>
                    </div>
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, quién eres</span>
                        <span class="command-desc">Información sobre mí</span>
                    </div>
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, ayuda</span>
                        <span class="command-desc">Muestra todos los comandos</span>
                    </div>
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, abre cámara</span>
                        <span class="command-desc">Abre la cámara</span>
                    </div>
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, abre galería</span>
                        <span class="command-desc">Abre la galería de fotos</span>
                    </div>
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, enviar mensaje</span>
                        <span class="command-desc">Prepara un mensaje</span>
                    </div>
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, reproducir música</span>
                        <span class="command-desc">Inicia reproducción de música</span>
                    </div>
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, clima</span>
                        <span class="command-desc">Información del clima</span>
                    </div>
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, abre calculadora</span>
                        <span class="command-desc">Abre la calculadora</span>
                    </div>
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, abre reloj</span>
                        <span class="command-desc">Abre reloj y despertador</span>
                    </div>
                    <div class="command-item">
                        <span class="command-name">Ey Ruiz, abre correo</span>
                        <span class="command-desc">Abre Gmail</span>
                    </div>
                </div>
            </div>

            <!-- Historial de comandos -->
            <div class="history-section">
                <h2>📜 Historial</h2>
                <div class="history-list" id="historyList">
                    <p class="empty-history">Sin comandos aún</p>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="footer">
            <p>Ruiz v1.0 - Asistente de Voz Inteligente</p>
        </footer>
    </div>

    <!-- Script para configuración -->
    <script src="config.js"></script>
    
    <!-- Script para funcionalidad de voz -->
    <script src="script.js"></script>
    
    <!-- Script para registrar Service Worker (PWA) -->
    <script>
        // Registrar Service Worker para funcionalidad offline
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('service-worker.js')
                    .then(registration => {
                        console.log('✅ Service Worker registrado:', registration);
                    })
                    .catch(error => {
                        console.warn('⚠️ Error registrando Service Worker:', error);
                    });
            });
        }
    </script>
</body>
</html>
