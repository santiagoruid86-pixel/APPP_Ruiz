// ===== CONFIGURACIÓN DE RUIZ =====
// Edita este archivo para personalizar la aplicación

const RUIZ_CONFIG = {
    // Idioma para reconocimiento de voz
    // es-ES: Español (España)
    // es-MX: Español (México)
    // en-US: Inglés (USA)
    // en-GB: Inglés (Reino Unido)
    // fr-FR: Francés
    // de-DE: Alemán
    // it-IT: Italiano
    // pt-BR: Portugués (Brasil)
    language: 'es-ES',

    // Velocidad de síntesis de voz (0.5 - 2.0)
    speechRate: 0.95,

    // Tono de la voz (0.5 - 2.0)
    speechPitch: 1,

    // Volumen de la voz (0.0 - 1.0)
    speechVolume: 1,

    // Máximo de elementos en el historial
    maxHistoryItems: 10,

    // Escuchador continuo (si es true, sigue escuchando después de cada comando)
    continuous: false,

    // Mostrar resultados interinos mientras se habla
    showInterimResults: true,

    // Mensajes personalizados
    messages: {
        ready: 'Listo para escuchar',
        listening: '👂 Escuchando...',
        processing: '⏳ Procesando...',
        notActivated: '❌ No escuché "Ey Ruiz". Intenta nuevamente.',
        noSpeechDetected: '🔇 No detecté voz. Intenta nuevamente.',
        error: '⚠️ Ocurrió un error.',
        notSupported: '❌ Tu navegador no soporta reconocimiento de voz.'
    },

    // Variaciones de activación (todos se convierten a minúsculas internamente)
    activationPhrases: [
        'ey ruiz',
        'ei ruiz',
        'hey ruiz',
        'oye ruiz'
    ],

    // Respuestas personalizadas para saludos
    greetings: [
        '¡Hola! ¿Cómo estás hoy?',
        '¡Hola! Encantado de verte.',
        '¡Qué tal! ¿En qué puedo ayudarte?',
        '¡Saludos! Aquí estoy para ti.',
        '¡Hola de nuevo! ¿Necesitas algo?'
    ],

    // Chistes personalizados
    jokes: [
        '¿Cómo se llama un boomerang que no vuelve? Palo. ¡Ja!',
        '¿Qué hace una persona inteligente cuando se pierde? ¡Nada!, se mantiene perdida.',
        '¿Sabes cuál es el animal más viejo de la selva? La jirafa, porque tiene el cuello largo y ha visto todo.',
        'Un ordenador entró a un bar y pidió una cerveza. El camarero dijo: "No servimos procesadores aquí".',
        'Dos cosas infinitas: el universo y la estupidez humana. No estoy tan seguro del universo.',
        '¿Por qué los programadores prefieren el dark mode? Porque la luz atrae bugs.'
    ],

    // Información sobre Ruiz
    aboutMessage: 'Soy Ruiz, tu asistente de voz inteligente. Fui creado para ayudarte a controlar tu celular usando comandos de voz. Puedo decirte la hora, contarte chistes, abrir aplicaciones y mucho más. ¿Hay algo que necesites?',

    // URLs para comandos
    urls: {
        browser: 'https://www.google.com',
        maps: 'https://maps.google.com',
        gmail: 'https://mail.google.com',
        youtube: 'https://www.youtube.com'
    },

    // Temas disponibles
    theme: 'dark', // 'dark' o 'light'

    // Habilitar almacenamiento local
    enableLocalStorage: true,

    // Habilitar análisis de comandos
    enableAnalytics: false,

    // Tiempo máximo de escucha en segundos
    maxListeningTime: 30,

    // Mostrar debug en consola
    debug: false
};

// ===== FUNCIONES DE UTILIDAD =====

/**
 * Obtiene un elemento aleatorio de un array
 */
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Guarda configuración en localStorage
 */
function saveConfig(config) {
    if (RUIZ_CONFIG.enableLocalStorage) {
        try {
            localStorage.setItem('ruizConfig', JSON.stringify(config));
        } catch (e) {
            console.warn('No se pudo guardar la configuración:', e);
        }
    }
}

/**
 * Carga configuración desde localStorage
 */
function loadConfig() {
    if (RUIZ_CONFIG.enableLocalStorage) {
        try {
            const saved = localStorage.getItem('ruizConfig');
            if (saved) {
                return JSON.parse(saved);
            }
        } catch (e) {
            console.warn('No se pudo cargar la configuración:', e);
        }
    }
    return RUIZ_CONFIG;
}

/**
 * Log con debug
 */
function debugLog(message, data = null) {
    if (RUIZ_CONFIG.debug) {
        console.log(`[RUIZ] ${message}`, data || '');
    }
}

/**
 * Log de errores
 */
function errorLog(message, error = null) {
    console.error(`[RUIZ ERROR] ${message}`, error || '');
}

/**
 * Log de advertencias
 */
function warnLog(message, warning = null) {
    console.warn(`[RUIZ WARN] ${message}`, warning || '');
}

// ===== EXPORTAR CONFIGURACIÓN =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RUIZ_CONFIG;
}
