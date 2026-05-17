# 🎙️ RUIZ - Asistente de Voz Inteligente

**Ruiz** es una aplicación móvil moderna de control por voz que te permite controlar tu celular completamente con comandos de voz. Simplemente di **"Ey Ruiz"** seguido de tu comando y déjale hacer el trabajo.

## 🚀 Características Principales

✅ **Reconocimiento de Voz en Español** - Entiende perfectamente tu idioma  
✅ **Síntesis de Voz** - Ruiz te responde hablándote  
✅ **Diseño Responsivo** - Se adapta a cualquier tamaño de pantalla  
✅ **Interfaz Intuitiva** - Fácil de usar para todos  
✅ **Historial de Comandos** - Mantiene un registro de lo que dijiste  
✅ **Visualizador de Ondas de Audio** - Efecto visual mientras escucha  
✅ **Aplicación Progresiva (PWA)** - Funciona sin conexión (parcialmente)  
✅ **Sin anuncios ni rastreo** - Tu privacidad es importante  

## 💻 Cómo Usar

### 1. **Abre la Aplicación**
   - Abre `APP.php` en tu navegador o en tu celular
   - Se cargará la interfaz de Ruiz

### 2. **Activa el Micrófono**
   - Toca el botón circular 🎤 en el centro de la pantalla
   - Deberías escuchar un sonido de confirmación
   - El botón cambiará de color a verde

### 3. **Di "Ey Ruiz"**
   - Habla claramente: **"Ey Ruiz"**
   - Espera a que Ruiz responda: "¿Qué necesitas?"
   - Luego da tu comando

## 📋 Lista Completa de Comandos

### 🕐 Información y Hora
- **"Ey Ruiz, ¿qué hora es?"** - Te dice la hora actual
- **"Ey Ruiz, quién eres"** - Información sobre Ruiz

### 😂 Entretenimiento
- **"Ey Ruiz, cuéntame un chiste"** - Un chiste divertido
- **"Ey Ruiz, chiste malo"** - Chistes malos (muy divertidos)
- **"Ey Ruiz, feliz cumpleaños"** - Canta feliz cumpleaños

### 💬 Redes Sociales
- **"Ey Ruiz, abre WhatsApp"** - Abre WhatsApp Web
- **"Ey Ruiz, abre Facebook"** - Abre Facebook
- **"Ey Ruiz, abre Instagram"** - Abre Instagram
- **"Ey Ruiz, abre YouTube"** - Abre YouTube
- **"Ey Ruiz, abre TikTok"** - Abre TikTok

### 🌐 Internet y Navegación
- **"Ey Ruiz, abre navegador"** - Abre Google
- **"Ey Ruiz, abre correo"** - Abre Gmail

### 🛠️ Dispositivo y Control
- **"Ey Ruiz, activar linterna"** - Enciende la linterna
- **"Ey Ruiz, apagar linterna"** - Apaga la linterna
- **"Ey Ruiz, apagar pantalla"** - Apaga la pantalla
- **"Ey Ruiz, encender pantalla"** - Enciende la pantalla
- **"Ey Ruiz, brillo máximo"** - Aumenta el brillo
- **"Ey Ruiz, volumen alto"** - Sube el volumen

### 📱 Aplicaciones
- **"Ey Ruiz, abre cámara"** - Abre la cámara
- **"Ey Ruiz, abre galería"** - Abre la galería de fotos
- **"Ey Ruiz, enviar mensaje"** - Prepara un mensaje
- **"Ey Ruiz, reproducir música"** - Inicia reproducción de música
- **"Ey Ruiz, abre calculadora"** - Abre la calculadora
- **"Ey Ruiz, abre reloj"** - Abre reloj y despertador

### ℹ️ Ayuda
- **"Ey Ruiz, ayuda"** - Muestra todos los comandos disponibles
- **"Ey Ruiz, gracias"** - Respuestas corteses

## 🎤 Variaciones de Activación

Puedes usar cualquiera de estas frases para activar a Ruiz:
- ✅ "**Ey Ruiz**"
- ✅ "**Ei Ruiz**" (sin la 'y')
- ✅ "**Hey Ruiz**"
- ✅ "**Oye Ruiz**"

## 📋 Requisitos

### Navegador Compatible
- ✅ **Google Chrome** (versión 25+)
- ✅ **Microsoft Edge** (versión 79+)
- ✅ **Firefox** (versión 25+)
- ✅ **Safari** (versión 14.1+)

### Permisos Necesarios
Tu navegador te pedirá permiso para:
- 🎤 **Acceso al Micrófono** - Para escuchar tus comandos
- 🔊 **Altavoz** - Para que Ruiz te hable

## 📁 Estructura de Archivos

```
app_ruiz/
├── APP.php              # Archivo principal de la aplicación
├── index.html           # Redirección a APP.php
├── script.js            # Lógica de reconocimiento de voz
├── styles.css           # Estilos y diseño
├── config.js            # Configuración personalizable
├── service-worker.js    # Soporte para PWA (sin conexión)
├── manifest.json        # Configuración de la aplicación
└── README.md           # Este archivo
```

## 🔒 Privacidad y Seguridad

- ✅ **Sin rastreo** - No guardamos datos personales
- ✅ **Sin servidor** - Funciona localmente en tu dispositivo
- ✅ **Sin publicidad** - Experiencia limpia

## 🎉 ¡Disfruta Usando Ruiz!

Esperamos que disfrutes controlando tu celular por voz. 

---

**Ruiz v2.0** - Hecho con ❤️ para ti.
*Tu asistente de voz inteligente*

# Luego abre en tu navegador:
http://localhost:8000/APP.php
```

### Opción 3: Desplegar en un Servidor
1. Sube los archivos a tu hosting
2. Accede a través de una URL HTTPS (requerido para acceso al micrófono)
3. ¡Disfruta!

## 🎤 Requisitos

- **Navegador Moderno**: Chrome, Edge, Firefox o Safari (versión reciente)
- **Micrófono**: Tu dispositivo debe tener micrófono funcional
- **Conexión a Internet**: Para la síntesis de voz y abrir navegador
- **HTTPS**: Si está en un servidor (no es necesario en localhost)

## 🎨 Personalización

### Cambiar Idioma
En `script.js`, busca la línea:
```javascript
recognition.language = 'es-ES';
```

Cámbiala por tu idioma preferido:
- `en-US` para inglés
- `fr-FR` para francés
- `de-DE` para alemán
- etc.

### Agregar Nuevos Comandos
En la función `processCommand()` en `script.js`, añade nuevos `else if`:
```javascript
} else if (commandPart.includes('tu comando')) {
    tuFuncion();
}
```

Luego crea la función:
```javascript
function tuFuncion() {
    const message = 'Tu respuesta aquí';
    ruizResponse.textContent = message;
    speak(message);
}
```

### Cambiar Colores
En `styles.css`, modifica las variables de color:
```css
:root {
    --primary-color: #6366f1;  /* Color principal */
    --background: #0f172a;     /* Fondo */
    --surface: #1e293b;        /* Superficie */
}
```

## 🐛 Solución de Problemas

### No se escucha el micrófono
- Verifica que el navegador tenga permisos para acceder al micrófono
- Revisa que el micrófono esté enchufado y funcionando
- Intenta en otro navegador

### La voz no se sintetiza
- Algunos navegadores tienen limitaciones
- Intenta en Chrome o Edge
- Verifica los ajustes de volumen

### Errores de reconocimiento
- Habla claro y con volumen normal
- Asegúrate de empezar con "Ey Ruiz"
- Verifica tu conexión a internet

## 📊 Compatibilidad

| Navegador | Desktop | Móvil |
|-----------|---------|-------|
| Chrome    | ✅      | ✅    |
| Edge      | ✅      | ✅    |
| Firefox   | ✅      | ✅    |
| Safari    | ✅      | ✅    |
| Opera     | ✅      | ✅    |

## 🔐 Privacidad

- Los comandos se procesan localmente en tu dispositivo
- No se envían datos a servidores externos (excepto al abrir navegador)
- No se guarda historial de voz

## 📝 Notas

- El reconocimiento de voz funciona mejor en navegadores Chromium
- La síntesis de voz depende del navegador y el idioma
- Algunos comandos pueden no funcionar en todos los navegadores

## 🎓 Tecnologías Utilizadas

- **HTML5**: Estructura del documento
- **CSS3**: Estilos y animaciones
- **JavaScript Vanilla**: Lógica de la aplicación
- **Web Speech API**: Reconocimiento y síntesis de voz
- **Media Queries**: Diseño responsive

## 📞 Soporte

Si encuentras problemas:
1. Verifica tu navegador sea compatible
2. Prueba en otro navegador
3. Limpia el caché del navegador
4. Reinicia tu dispositivo

## 📄 Licencia

Este proyecto es de código abierto. Úsalo, modifícalo y comparte libremente.

---

**Versión**: 1.0  
**Última actualización**: 2026  
**Autor**: Tu nombre aquí

¡Disfruta controlando tu celular con Ruiz! 🚀
