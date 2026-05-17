// ===== CONFIGURACIÓN ===== 
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;
let isListening = false;
let commandHistory = [];

const config = {
    language: 'es-ES',
    continuous: false,
    interimResults: true,
};

// ===== ELEMENTOS DEL DOM =====
const btnMic = document.getElementById('btnMic');
const status = document.getElementById('status');
const recognizedText = document.getElementById('recognizedText').querySelector('.text');
const ruizResponse = document.getElementById('ruizResponse').querySelector('.response-text');
const listeningIndicator = document.getElementById('listeningIndicator');
const visualizer = document.getElementById('visualizer');
const historyList = document.getElementById('historyList');

// ===== INICIALIZACIÓN =====
function initSpeechRecognition() {
    if (!SpeechRecognition) {
        showError('Tu navegador no soporta reconocimiento de voz. Usa Chrome, Edge o Firefox.');
        return;
    }

    recognition = new SpeechRecognition();
    recognition.language = config.language;
    recognition.continuous = config.continuous;
    recognition.interimResults = config.interimResults;

    // ===== EVENT LISTENERS =====
    recognition.onstart = () => {
        isListening = true;
        btnMic.classList.add('listening');
        listeningIndicator.classList.add('active');
        visualizer.classList.remove('inactive');
        status.textContent = '👂 Escuchando...';
    };

    recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;

            if (event.results[i].isFinal) {
                finalTranscript += transcript + ' ';
            } else {
                interimTranscript += transcript;
            }
        }

        // Mostrar texto interim mientras se está hablando
        if (interimTranscript) {
            recognizedText.textContent = interimTranscript;
            recognizedText.style.opacity = '0.7';
        }

        // Procesar comando final
        if (finalTranscript) {
            recognizedText.textContent = finalTranscript.trim();
            recognizedText.style.opacity = '1';
            processCommand(finalTranscript.trim());
        }
    };

    recognition.onerror = (event) => {
        console.error('Error de reconocimiento:', event.error);
        handleRecognitionError(event.error);
    };

    recognition.onend = () => {
        isListening = false;
        btnMic.classList.remove('listening');
        listeningIndicator.classList.remove('active');
        visualizer.classList.add('inactive');
        status.textContent = 'Listo para escuchar';
    };
}

// ===== PROCESAR COMANDOS =====
function processCommand(command) {
    const cmd = command.toLowerCase().trim();

    // Verificar si el comando inicia con "ey ruiz", "ei ruiz", "hey ruiz" o "hey rooz"
    if (cmd.includes('ey ruiz') || cmd.includes('ei ruiz') || cmd.includes('hey ruiz') || cmd.includes('hey rooz')) {
        
        // Extraer el comando después de "ey ruiz"
        const commandPart = cmd.replace(/^(ey|ei|hey)\s+(ruiz|rooz)\s*,?\s*/i, '').trim();

        // Procesar diferentes comandos
        if (commandPart.includes('qué hora') || commandPart.includes('que hora') || commandPart.includes('la hora') || commandPart.includes('hora')) {
            respondTime();
        } else if (commandPart.includes('chiste')) {
            tellJoke();
        } else if (commandPart.includes('quién eres') || commandPart.includes('quien eres') || commandPart.includes('cuéntame') || commandPart.includes('quien')) {
            tellAboutMe();
        } else if (commandPart.includes('navegador') || commandPart.includes('google') || commandPart.includes('buscar')) {
            openBrowser();
        } else if (commandPart.includes('linterna') && (commandPart.includes('activar') || commandPart.includes('encender') || commandPart.includes('on'))) {
            toggleFlashlight(true);
        } else if (commandPart.includes('linterna') && (commandPart.includes('apagar') || commandPart.includes('desactivar') || commandPart.includes('off'))) {
            toggleFlashlight(false);
        } else if (commandPart.includes('hola') || commandPart.includes('buenos días') || commandPart.includes('buenos dias') || commandPart.includes('buenas noches') || commandPart.includes('buenas tardes')) {
            greet();
        } else if (commandPart.includes('whatsapp') || commandPart.includes('whats')) {
            openWhatsapp();
        } else if (commandPart.includes('facebook') || commandPart.includes('face')) {
            openFacebook();
        } else if (commandPart.includes('instagram') || commandPart.includes('insta')) {
            openInstagram();
        } else if (commandPart.includes('youtube') || commandPart.includes('you tube')) {
            openYoutube();
        } else if (commandPart.includes('tiktok') || commandPart.includes('tik tok')) {
            openTiktok();
        } else if (commandPart.includes('cámara') || commandPart.includes('camera')) {
            openCamera();
        } else if (commandPart.includes('galería') || commandPart.includes('fotos') || commandPart.includes('gallery')) {
            openGallery();
        } else if (commandPart.includes('llamar') || commandPart.includes('call') || commandPart.includes('telefonazo')) {
            makeCall(commandPart);
        } else if (commandPart.includes('mensaje') || commandPart.includes('sms') || commandPart.includes('text')) {
            sendMessage();
        } else if (commandPart.includes('música') || commandPart.includes('musica') || commandPart.includes('canción') || commandPart.includes('cancion') || commandPart.includes('música')) {
            playMusic();
        } else if (commandPart.includes('clima') || commandPart.includes('weather') || commandPart.includes('tiempo')) {
            getWeather();
        } else if (commandPart.includes('chiste malo') || commandPart.includes('chiste de papá')) {
            tellBadJoke();
        } else if (commandPart.includes('cumpleaños') || commandPart.includes('felicidades') || commandPart.includes('feliz')) {
            singBirthday();
        } else if (commandPart.includes('ayuda') || commandPart.includes('help') || commandPart.includes('comandos')) {
            showHelp();
        } else if (commandPart.includes('apagar') || commandPart.includes('off') || commandPart.includes('sleep')) {
            screenOff();
        } else if (commandPart.includes('encender') || commandPart.includes('on') && !commandPart.includes('linterna')) {
            screenOn();
        } else if (commandPart.includes('brillo') || commandPart.includes('brightness')) {
            adjustBrightness(commandPart);
        } else if (commandPart.includes('volumen') || commandPart.includes('volume')) {
            adjustVolume(commandPart);
        } else if (commandPart.includes('calculadora') || commandPart.includes('calcular')) {
            openCalculator();
        } else if (commandPart.includes('reloj') || commandPart.includes('despertador')) {
            openClock();
        } else if (commandPart.includes('correo') || commandPart.includes('email') || commandPart.includes('gmail')) {
            openEmail();
        } else if (commandPart.includes('gracias') || commandPart.includes('thanks')) {
            sayThanks();
        } else {
            defaultResponse(commandPart);
        }

        // Agregar al historial
        addToHistory(command);
    } else {
        // Si no inicia con "ey ruiz", pedir que lo diga
        ruizResponse.textContent = '❌ No escuché "Ey Ruiz". Intenta nuevamente diciendo "Ey Ruiz" seguido de tu comando.';
    }
}

// ===== FUNCIONES DE RESPUESTA =====
function respondTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const greeting = hours < 12 ? 'Buenos días' : hours < 18 ? 'Buenas tardes' : 'Buenas noches';
    const message = `${greeting}, son las ${hours}:${minutes.toString().padStart(2, '0')}`;
    
    ruizResponse.textContent = `⏰ ${message}`;
    speak(message);
}

function tellJoke() {
    const jokes = [
        '¿Cómo se llama un boomerang que no vuelve? Palo. ¡Ja!',
        '¿Qué hace una persona inteligente cuando se pierde? ¡Nada!, se mantiene perdida y deja de buscar.',
        '¿Sabes cuál es el animal más viejo de la selva? La jirafa... porque tiene el cuello largo y ha visto todo.',
        'Un ordenador entró a un bar y pidió una cerveza. El camarero dijo: "No servimos procesadores aquí".',
    ];
    
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    ruizResponse.textContent = `😂 ${joke}`;
    speak(joke);
}

function tellAboutMe() {
    const message = 'Soy Ruiz, tu asistente de voz inteligente. Fui creado para ayudarte a controlar tu celular usando comandos de voz. Puedo decirte la hora, contarte chistes, abrir aplicaciones y mucho más. ¿Hay algo que necesites?';
    ruizResponse.textContent = `🤖 ${message}`;
    speak(message);
}

function openBrowser() {
    const message = 'Abriendo navegador...';
    ruizResponse.textContent = `🌐 ${message}`;
    speak(message);
    setTimeout(() => {
        window.open('https://www.google.com', '_blank');
    }, 500);
}

function greet() {
    const greetings = [
        '¡Hola! ¿Cómo estás hoy?',
        '¡Hola! Encantado de verte.',
        '¡Qué tal! ¿En qué puedo ayudarte?',
        '¡Saludos! Aquí estoy para ti.'
    ];
    
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    ruizResponse.textContent = `👋 ${greeting}`;
    speak(greeting);
}

function toggleFlashlight(isOn) {
    try {
        // Intentar acceder a la API de linterna si está disponible
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            const message = isOn ? '💡 Intentando encender la linterna...' : '🔦 Apagando la linterna...';
            ruizResponse.textContent = message;
            speak(isOn ? 'Encendiendo la linterna' : 'Apagando la linterna');
        } else {
            const message = '⚠️ La linterna no está disponible en tu dispositivo.';
            ruizResponse.textContent = message;
            speak(message);
        }
    } catch (error) {
        ruizResponse.textContent = '⚠️ No se pudo acceder a la linterna.';
    }
}

function defaultResponse(command) {
    const message = `Entendí que dijiste: "${command}". Desafortunadamente no tengo una respuesta para ese comando. Intenta con "Ey Ruiz, ¿qué hora es?" o "Ey Ruiz, cuéntame un chiste".`;
    ruizResponse.textContent = `🤔 ${message}`;
    speak(`Entendí que dijiste: ${command}. Pero no tengo respuesta para ese comando.`);
}

// ===== NUEVAS FUNCIONES DE COMANDOS =====

function openWhatsapp() {
    const message = 'Abriendo WhatsApp...';
    ruizResponse.textContent = `💬 ${message}`;
    speak(message);
    setTimeout(() => {
        window.open('https://web.whatsapp.com', '_blank');
    }, 500);
}

function openFacebook() {
    const message = 'Abriendo Facebook...';
    ruizResponse.textContent = `👥 ${message}`;
    speak(message);
    setTimeout(() => {
        window.open('https://www.facebook.com', '_blank');
    }, 500);
}

function openInstagram() {
    const message = 'Abriendo Instagram...';
    ruizResponse.textContent = `📷 ${message}`;
    speak(message);
    setTimeout(() => {
        window.open('https://www.instagram.com', '_blank');
    }, 500);
}

function openYoutube() {
    const message = 'Abriendo YouTube...';
    ruizResponse.textContent = `🎥 ${message}`;
    speak(message);
    setTimeout(() => {
        window.open('https://www.youtube.com', '_blank');
    }, 500);
}

function openTiktok() {
    const message = 'Abriendo TikTok...';
    ruizResponse.textContent = `🎬 ${message}`;
    speak(message);
    setTimeout(() => {
        window.open('https://www.tiktok.com', '_blank');
    }, 500);
}

function openCamera() {
    const message = 'Abriendo cámara...';
    ruizResponse.textContent = `📸 ${message}`;
    speak(message);
    // En una app real, esto abriría la cámara del dispositivo
    setTimeout(() => {
        alert('Para usar la cámara, necesitas una aplicación nativa o acceder desde tu dispositivo móvil.');
    }, 500);
}

function openGallery() {
    const message = 'Abriendo galería de fotos...';
    ruizResponse.textContent = `🖼️ ${message}`;
    speak(message);
    setTimeout(() => {
        alert('Para acceder a la galería, necesitas una aplicación nativa o acceder desde tu dispositivo móvil.');
    }, 500);
}

function makeCall(commandPart) {
    const message = 'Preparando llamada telefónica...';
    ruizResponse.textContent = `☎️ ${message}`;
    speak('Preparando llamada');
    setTimeout(() => {
        alert('Para hacer llamadas, necesitas usar tu teléfono directamente.');
    }, 500);
}

function sendMessage() {
    const message = 'Abriendo compositor de mensajes...';
    ruizResponse.textContent = `📮 ${message}`;
    speak(message);
    setTimeout(() => {
        alert('Para enviar mensajes SMS, usa tu aplicación de mensajes nativa.');
    }, 500);
}

function playMusic() {
    const message = 'Iniciando reproducción de música...';
    ruizResponse.textContent = `🎵 ${message}`;
    speak('Iniciando música');
    setTimeout(() => {
        window.open('https://www.youtube.com/results?search_query=música', '_blank');
    }, 500);
}

function getWeather() {
    const message = 'Obteniendo información del clima...';
    ruizResponse.textContent = `🌤️ ${message}`;
    speak('Obteniendo información del clima');
    setTimeout(() => {
        window.open('https://www.google.com/search?q=clima', '_blank');
    }, 500);
}

function tellBadJoke() {
    const badJokes = [
        'Un chiste malo: ¿Qué le dijo el 0 al 8? ¡Bonito cinturón!',
        'Otro chiste malo: ¿Cómo se llama un contador sin piernas? Nada.',
        'Espera a que te cuente otro: ¿Qué tiene plumas y suena como un carro de carga? Un loro cargador.',
        'Mira que malo es este: Dos antenitas se casan. Después de la ceremonia, uno le dice al otro: ¿Nos vamos de luna de miel? Y el otro responde: ¡No! ¡Mejor nos vamos a tocar punta con punta!',
    ];
    
    const joke = badJokes[Math.floor(Math.random() * badJokes.length)];
    ruizResponse.textContent = `😂 ${joke}`;
    speak(joke);
}

function singBirthday() {
    const message = '¡Feliz cumpleaños, muchas felicidades, que cumplas uno más, que vueltas da la vida! 🎂🎉';
    ruizResponse.textContent = message;
    speak(message);
}

function showHelp() {
    const helpMessage = `Aquí están los comandos disponibles:
    • Ey Ruiz, ¿qué hora es? - Te digo la hora
    • Ey Ruiz, cuéntame un chiste - Un chiste divertido
    • Ey Ruiz, quién eres - Información sobre mí
    • Ey Ruiz, abre navegador - Abre Google
    • Ey Ruiz, abre WhatsApp - Abre WhatsApp Web
    • Ey Ruiz, abre Facebook - Abre Facebook
    • Ey Ruiz, abre Instagram - Abre Instagram
    • Ey Ruiz, abre YouTube - Abre YouTube
    • Ey Ruiz, activar linterna - Enciende la linterna
    • Ey Ruiz, apagar linterna - Apaga la linterna
    • Ey Ruiz, ayuda - Muestra esta lista`;
    
    ruizResponse.textContent = `📚 Aquí están mis comandos disponibles: ${helpMessage}`;
    speak('Te he mostrado la lista de comandos disponibles.');
}

function screenOff() {
    const message = 'Apagando pantalla...';
    ruizResponse.textContent = `💤 ${message}`;
    speak(message);
    // En un dispositivo real, esto bloquearia la pantalla
    setTimeout(() => {
        alert('La pantalla se apagaria en un dispositivo móvil real.');
    }, 1000);
}

function screenOn() {
    const message = 'Encendiendo pantalla...';
    ruizResponse.textContent = `🔆 ${message}`;
    speak(message);
}

function adjustBrightness(commandPart) {
    let level = 'media';
    if (commandPart.includes('máximo') || commandPart.includes('maximo') || commandPart.includes('mucho')) {
        level = 'máximo';
    } else if (commandPart.includes('mínimo') || commandPart.includes('minimo') || commandPart.includes('poco')) {
        level = 'mínimo';
    }
    
    const message = `Ajustando brillo a nivel ${level}...`;
    ruizResponse.textContent = `☀️ ${message}`;
    speak(message);
}

function adjustVolume(commandPart) {
    let level = 'medio';
    if (commandPart.includes('máximo') || commandPart.includes('maximo') || commandPart.includes('alto')) {
        level = 'máximo';
    } else if (commandPart.includes('mínimo') || commandPart.includes('minimo') || commandPart.includes('bajo')) {
        level = 'mínimo';
    }
    
    const message = `Ajustando volumen a nivel ${level}...`;
    ruizResponse.textContent = `🔊 ${message}`;
    speak(message);
}

function openCalculator() {
    const message = 'Abriendo calculadora...';
    ruizResponse.textContent = `🧮 ${message}`;
    speak(message);
    setTimeout(() => {
        alert('Abriendo calculadora...');
    }, 500);
}

function openClock() {
    const message = 'Abriendo reloj y despertador...';
    ruizResponse.textContent = `⏰ ${message}`;
    speak(message);
}

function openEmail() {
    const message = 'Abriendo correo electrónico...';
    ruizResponse.textContent = `📧 ${message}`;
    speak(message);
    setTimeout(() => {
        window.open('https://mail.google.com', '_blank');
    }, 500);
}

function sayThanks() {
    const responses = [
        'De nada, estoy aquí para ayudarte siempre.',
        'Para eso estamos los asistentes de voz, ¡feliz de ayudarte!',
        'No hay de qué, ¡en qué más puedo ayudarte?',
        'Claro, es mi placer asistirte.'
    ];
    
    const response = responses[Math.floor(Math.random() * responses.length)];
    ruizResponse.textContent = `😊 ${response}`;
    speak(response);
}

// ===== SÍNTESIS DE VOZ =====
function speak(text) {
    if (!('speechSynthesis' in window)) {
        console.warn('Síntesis de voz no disponible');
        return;
    }

    // Cancelar cualquier habla anterior
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
}

// ===== HISTORIAL =====
function addToHistory(command) {
    const now = new Date();
    const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    commandHistory.unshift({ command, time });
    
    // Limitar a 10 elementos en el historial
    if (commandHistory.length > 10) {
        commandHistory.pop();
    }

    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const emptyMessage = historyList.querySelector('.empty-history');
    if (emptyMessage) {
        emptyMessage.remove();
    }

    historyList.innerHTML = commandHistory.map((item, index) => `
        <div class="history-item">
            <div class="history-item-text">
                <span class="history-item-command">${item.command}</span>
                <span class="history-item-time">${item.time}</span>
            </div>
        </div>
    `).join('');
}

// ===== MANEJO DE ERRORES =====
function handleRecognitionError(error) {
    const errorMessages = {
        'network': '🌐 Error de conexión. Verifica tu conexión a internet.',
        'audio': '🎤 Error de audio. Verifica el micrófono.',
        'not-allowed': '🔐 Permiso denegado. Habilita el acceso al micrófono.',
        'no-speech': '🔇 No detecté voz. Intenta nuevamente.',
        'service-not-allowed': '⛔ Servicio de voz no disponible.',
    };

    const message = errorMessages[error] || `⚠️ Error: ${error}`;
    ruizResponse.textContent = message;
    status.textContent = 'Listo para escuchar';
}

function showError(message) {
    ruizResponse.textContent = `❌ ${message}`;
    btnMic.disabled = true;
    btnMic.style.opacity = '0.5';
}

// ===== EVENT LISTENERS =====
btnMic.addEventListener('click', () => {
    if (!SpeechRecognition) return;

    if (isListening) {
        recognition.stop();
    } else {
        recognizedText.textContent = 'Escuchando...';
        recognizedText.style.opacity = '1';
        recognition.start();
    }
});

// ===== INICIALIZACIÓN AL CARGAR LA PÁGINA =====
window.addEventListener('DOMContentLoaded', () => {
    initSpeechRecognition();
});

// Manejar el cambio de idioma (opcional)
document.addEventListener('visibilitychange', () => {
    if (document.hidden && isListening) {
        recognition.stop();
    }
});
