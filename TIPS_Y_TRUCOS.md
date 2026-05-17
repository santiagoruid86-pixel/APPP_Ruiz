# 💡 TIPS Y TRUCOS PARA RUIZ

## 🎯 Optimización de Reconocimiento de Voz

### 1. Ambiente Ideal para Usar Ruiz

**Lo Mejor:**
- 🏠 En casa, en una habitación tranquila
- 🏞️ Al aire libre, en parques silenciosos
- 🎧 Con auriculares (micrófono incorporado)
- 📍 Lugares sin muchas personas

**Lo Peor:**
- 🚗 Dentro de un auto con música
- 🎵 Lugares con mucha música de fondo
- 🏗️ Zonas de construcción
- 👥 Cafeterías o centros comerciales

### 2. Técnica de Pronunciación

**Pronunciación Correcta de "Ey Ruiz":**
```
Ey (rhymes with "Hey")
RUIZ (pronounce "RWEES")
```

**Ejemplo de grabación ideal:**
- Volumen: Normal (no gritar, no susurrar)
- Distancia: 5-10 cm del micrófono
- Ritmo: Velocidad natural
- Entonación: Como si hablaras con un amigo

### 3. Comandos Efectivos

**❌ Mal:**
```
"Eyrruuuuuiiiiiiz" (muy lento)
"ey.ruiz" (con pausas raras)
"ABRE WHATSAPP" (sin el "Ey Ruiz" primero)
```

**✅ Bien:**
```
"Ey Ruiz" (pausa) "abre WhatsApp"
"Ey Ruiz, quién eres"
"Ey Ruiz, ¿qué hora es?"
```

### 4. Usar Variaciones

Si "Ey Ruiz" no funciona, intenta:
```
Opción 1: "Ei Ruiz"     (sin la 'y')
Opción 2: "Hey Ruiz"    (pronunciación inglesa)
Opción 3: "Oye Ruiz"    (español alternativo)
Opción 4: "Ey Rooz"     (variación del acento)
```

---

## 🛠️ Configuración Avanzada

### Cambiar Idioma

Edita `config.js`:
```javascript
// Cambiar a español de México
RUIZ_CONFIG.language = 'es-MX';

// Cambiar a inglés
RUIZ_CONFIG.language = 'en-US';
```

**Idiomas disponibles:**
- `es-ES` - Español (España)
- `es-MX` - Español (México)
- `en-US` - Inglés (USA)
- `en-GB` - Inglés (Reino Unido)
- `fr-FR` - Francés
- `de-DE` - Alemán
- `it-IT` - Italiano
- `pt-BR` - Portugués (Brasil)

### Ajustar Velocidad de Voz

```javascript
// Lento (0.5)
RUIZ_CONFIG.speechRate = 0.5;

// Normal (0.95) - RECOMENDADO
RUIZ_CONFIG.speechRate = 0.95;

// Rápido (1.5)
RUIZ_CONFIG.speechRate = 1.5;

// Muy rápido (2.0)
RUIZ_CONFIG.speechRate = 2.0;
```

### Cambiar Tono de Voz

```javascript
// Voz más baja/grave
RUIZ_CONFIG.speechPitch = 0.5;

// Normal (recomendado)
RUIZ_CONFIG.speechPitch = 1;

// Voz más alta/aguda
RUIZ_CONFIG.speechPitch = 1.5;

// Muy aguda
RUIZ_CONFIG.speechPitch = 2.0;
```

### Ajustar Volumen

```javascript
// Bajo
RUIZ_CONFIG.speechVolume = 0.5;

// Normal (recomendado)
RUIZ_CONFIG.speechVolume = 1;

// Nota: 0.0 - 1.0 es el rango válido
```

---

## 📱 Maximizar Portabilidad

### Instalar en iOS

1. **Abre en Safari**
   - URL: `APP.php` en tu servidor

2. **Toca Compartir**
   - Botón inferior con flecha hacia arriba

3. **Selecciona "Añadir a Pantalla de Inicio"**

4. **Dale un nombre**
   - "Ruiz" o el que prefieras

5. **¡Listo!**
   - Ahora aparecerá como app en tu pantalla

### Instalar en Android

1. **Abre en Chrome**
   - URL: `APP.php` en tu servidor

2. **Toca el Menú**
   - Tres puntos en la esquina superior derecha

3. **Selecciona "Instalar aplicación"**
   - Puede variar según versión de Chrome

4. **Confirma la instalación**

5. **¡Listo!**
   - La app aparecerá en tu pantalla de inicio

---

## 🎨 Personalización de Interfaz

### Cambiar Tema

Edita `config.js`:
```javascript
// Tema oscuro (recomendado para celular)
RUIZ_CONFIG.theme = 'dark';

// Tema claro (más brillante)
RUIZ_CONFIG.theme = 'light';
```

### Modificar Colores

Edita `styles.css`:
```css
:root {
    --primary-color: #6366f1;      /* Azul actual */
    --secondary-color: #ec4899;    /* Rosa actual */
    --success: #10b981;             /* Verde */
    --warning: #f59e0b;             /* Naranja */
    --error: #ef4444;               /* Rojo */
}
```

**Paletas de colores sugeridas:**

Paleta Morada:
```css
--primary-color: #a855f7;     /* Púrpura */
--secondary-color: #d946ef;   /* Magenta */
```

Paleta Cian:
```css
--primary-color: #06b6d4;     /* Cian */
--secondary-color: #0891b2;   /* Cian oscuro */
```

Paleta Verde:
```css
--primary-color: #10b981;     /* Verde */
--secondary-color: #059669;   /* Verde oscuro */
```

---

## 🔒 Privacidad y Seguridad

### Local Storage

Los comandos se guardan localmente en tu navegador:
```javascript
// Habilitar (recomendado)
RUIZ_CONFIG.enableLocalStorage = true;

// Deshabilitar
RUIZ_CONFIG.enableLocalStorage = false;
```

### Borrar Datos

**En el navegador:**
1. Presiona Ctrl+Shift+Delete (Windows) o Cmd+Shift+Delete (Mac)
2. Selecciona "Cookies" y "Caché"
3. Haz clic en "Limpiar datos"

### Privacidad

- ✅ Ruiz **NO** envía datos a servidores
- ✅ Ruiz **NO** almacena comandos en la nube
- ✅ Ruiz **NO** tiene publicidad
- ✅ Ruiz **NO** rastrea tu uso

---

## 🚀 Trucos Avanzados

### Comando de Depuración

Habilita modo debug en `config.js`:
```javascript
RUIZ_CONFIG.debug = true;
```

Luego abre la consola del navegador (F12) para ver:
- Qué escuchó exactamente
- Qué comando procesó
- Errores y advertencias

### Aumentar Historial

Por defecto guarda 10 comandos:
```javascript
// Aumentar a 20
RUIZ_CONFIG.maxHistoryItems = 20;

// Aumentar a 50
RUIZ_CONFIG.maxHistoryItems = 50;
```

### Escuchador Continuo

Ruiz normalmente se detiene después de cada comando:
```javascript
// Activar escuchador continuo (avanzado)
RUIZ_CONFIG.continuous = true;
```

**Nota:** Esto puede gastar más batería. Úsalo solo si es necesario.

---

## 🎤 Mejores Prácticas

### 1. Esperar Respuesta
```
"Ey Ruiz" → [PAUSA] → Ruiz responde
[PAUSA] → "abre WhatsApp"
```

### 2. Pronunciar Claramente
- No susurres
- No grites
- Articula bien

### 3. Ambiente Silencioso
- Cierra ventanas
- Apaga TV/Música
- Alejaos de ruido

### 4. Usar Comandos Completos
```
❌ "Abre navegador"      (sin "Ey Ruiz")
✅ "Ey Ruiz, abre navegador"
```

### 5. Revisar Pantalla
```
Si ves:
"Texto reconocido: Ey rui..."

Significa que Ruiz está procesando.
Si aparece mal, intenta de nuevo.
```

---

## 📊 Monitorear Uso

### Ver Estadísticas (Consola)

Abre la consola (F12) para ver:
```javascript
// Ver historial de comandos
console.log(commandHistory);

// Ver cantidad de comandos
console.log(commandHistory.length);

// Ver último comando
console.log(commandHistory[0]);
```

### Exportar Historial

Copia y pega en la consola:
```javascript
JSON.stringify(commandHistory, null, 2)
```

Luego guarda el resultado en un archivo de texto.

---

## 🐛 Debugging

### Si Ruiz No Escucha

1. **Verificar micrófono:**
```javascript
navigator.mediaDevices.getUserMedia({audio: true})
  .then(() => console.log("Micrófono OK"))
  .catch(err => console.log("Error de micrófono:", err));
```

2. **Ver permisos:**
```
Abre DevTools (F12) → Application → Permissions
```

### Si Ruiz No Habla

```javascript
// Probar síntesis de voz
const utterance = new SpeechSynthesisUtterance("Ruiz está funcionando");
utterance.lang = 'es-ES';
window.speechSynthesis.speak(utterance);
```

---

## 💾 Hacer Backup

### Respaldar Configuración

1. Abre `config.js`
2. Copia el contenido
3. Pégalo en un editor de texto
4. Guarda como `config-backup.js`

### Respaldar Historial

En la consola del navegador:
```javascript
localStorage.setItem('ruiz_backup', JSON.stringify(commandHistory));
console.log("Backup guardado");
```

---

## 🎓 Aprender JavaScript

### Entender el Código

**Estructura básica:**
```javascript
// 1. Detecta voz
navigator.mediaDevices.getUserMedia({audio: true})

// 2. Reconoce lo que dice
SpeechRecognition.onresult

// 3. Procesa comando
if (cmd.includes('ey ruiz')) { ... }

// 4. Responde
window.speechSynthesis.speak(message)
```

### Agregar Tu Propio Comando

En `script.js`, busca esta sección:
```javascript
} else if (commandPart.includes('mi comando')) {
    miComando();
} else {
```

Luego agrega tu función:
```javascript
function miComando() {
    const mensaje = "¡Tu respuesta aquí!";
    ruizResponse.textContent = `🎉 ${mensaje}`;
    speak(mensaje);
}
```

---

## 📞 Soporte Técnico Rápido

### Problema: Voz entrecortada
**Solución:** Reduce la velocidad del habla en config.js a 0.7

### Problema: Ruiz no entiende el acento
**Solución:** Intenta "Hey Ruiz" con pronunciación inglesa

### Problema: Lento en móvil viejo
**Solución:** Deshabilita animaciones: `prefers-reduced-motion: reduce`

### Problema: Micrófono no funciona
**Solución:** Intenta con auriculares con micrófono incorporado

---

## 🎯 Objetivos Diarios

**Día 1:** Aprender a activar Ruiz  
**Día 2:** Probar 5 comandos diferentes  
**Día 3:** Personalizar configuración  
**Día 4:** Instalar en tu móvil  
**Día 5:** Compartir con amigos  

---

## 🏆 Logros Desbloqueables

- 🌟 Usar 10 comandos diferentes
- 🌟 Instalar en tu móvil
- 🌟 Personalizar config.js
- 🌟 Crear un comando nuevo
- 🌟 Usar por una semana completa
- 🌟 Compartir con 5 amigos

---

¡Espero que estos tips te ayuden a aprovechar Ruiz al máximo!

**¿Tienes más tips? ¡Comparte con la comunidad!**

---

*Última actualización: Mayo 2026*
