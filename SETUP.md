# ===== INSTRUCCIONES DE INSTALACIÓN =====

## 🚀 Inicio Rápido

### En tu Computadora (Desarrollo)

#### Opción 1: Abrir Directamente en el Navegador
1. Navega a la carpeta `app_ruiz`
2. Haz doble clic en `APP.php`
3. El navegador se abrirá automáticamente

#### Opción 2: Con PHP Server (Recomendado)
```bash
# Abre terminal/CMD en la carpeta del proyecto
php -S localhost:8000

# Abre en tu navegador:
http://localhost:8000/APP.php
```

#### Opción 3: Con Live Server (VS Code)
1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `APP.php` → "Open with Live Server"

---

## 📱 En tu Teléfono/Tablet

### Desde tu Computadora Local
1. Ejecuta PHP Server (ver arriba)
2. En tu móvil, abre el navegador
3. Escribe: `http://[TU_IP]:8000/APP.php`
   - Reemplaza [TU_IP] con la IP de tu computadora (ej: 192.168.1.100)
   - Obtén tu IP con: `ipconfig` (Windows) o `ifconfig` (Mac/Linux)

### Instalar como Aplicación Nativa
1. Abre la app en Chrome/Edge
2. Menú (⋮) → "Instalar aplicación" o "Add to Home Screen"
3. ¡Ahora está como app en tu teléfono!

---

## 🌐 Desplegar en Internet

### Con Heroku (Gratis)
```bash
# 1. Crea cuenta en heroku.com
# 2. Instala Heroku CLI
# 3. En la carpeta del proyecto:

heroku login
heroku create nombre-de-tu-app
git init
git add .
git commit -m "Initial commit"
git push heroku main

# Tu app estará en: https://nombre-de-tu-app.herokuapp.com/APP.php
```

### Con Vercel (Gratis)
```bash
# 1. Crea cuenta en vercel.com
# 2. Instala Vercel CLI
# 3. En la carpeta del proyecto:

vercel

# Sigue las instrucciones
```

### Con Netlify (Gratis)
1. Sube los archivos a GitHub
2. Conecta GitHub a Netlify
3. Netlify desplegará automáticamente

### Con un Hosting Tradicional
1. Contrata hosting con soporte PHP
2. Usa FTP o cPanel para subir los archivos
3. Accede mediante: `https://tu-dominio.com/app_ruiz/APP.php`

---

## 🔧 Requisitos Previos

### Mínimos
- Navegador moderno (Chrome, Edge, Firefox, Safari)
- Micrófono en tu dispositivo
- Internet (para síntesis de voz en la primera ejecución)

### Para Desarrollo
- PHP 7.0+ (si usas PHP Server)
- Git (para repositorio)
- Node.js (opcional, para herramientas de build)

---

## ⚙️ Configuración Inicial

### 1. Editar Configuración
Abre `config.js` y personaliza:
```javascript
const RUIZ_CONFIG = {
    language: 'es-ES',           // Tu idioma
    speechRate: 0.95,            // Velocidad de voz
    maxHistoryItems: 10,         // Historial
    // ... más opciones
};
```

### 2. Agregar Comandos Personalizados
En `script.js`, busca `processCommand()`:
```javascript
} else if (commandPart.includes('tu comando')) {
    tuFuncion();
}
```

### 3. Cambiar Colores
En `styles.css`:
```css
:root {
    --primary-color: #6366f1;    /* Cambiar color principal */
    --secondary-color: #ec4899;  /* Color secundario */
    /* ... más colores */
}
```

---

## 🧪 Pruebas y Debugging

### Ver Logs en Consola
1. Abre la app
2. Presiona `F12` (o `Cmd+Option+I` en Mac)
3. Ve a la pestaña "Console"

### Activar Debug Mode
En `config.js`:
```javascript
debug: true  // Muestra logs detallados
```

### Probar Sin Micrófono
Usa la simulación en la consola del navegador:
```javascript
// En la consola:
recognizedText.textContent = 'ey ruiz, ¿qué hora es?';
processCommand('ey ruiz, ¿qué hora es?');
```

---

## 📊 Compatibilidad

| Característica | Soporte |
|---|---|
| Reconocimiento de Voz | ✅ Chrome, Edge, Firefox |
| Síntesis de Voz | ✅ Todos los navegadores |
| Offline | ✅ Con Service Worker |
| PWA (App Nativa) | ✅ Chrome, Edge, Samsung Internet |
| Historial | ✅ LocalStorage |

---

## 🐛 Solucionar Problemas

### "No funciona el micrófono"
```
✓ Verifica permisos del navegador
✓ Reinicia el navegador
✓ Intenta en otro navegador
✓ Verifica que el micrófono funcione
```

### "No responde con voz"
```
✓ Aumenta el volumen de tu dispositivo
✓ Intenta en Chrome (mejor soporte)
✓ Revisa los ajustes de volumen del navegador
```

### "No reconoce mis comandos"
```
✓ Habla más claro y fuerte
✓ Asegúrate de decir "Ey Ruiz"
✓ Verifica que el idioma sea correcto en config.js
✓ Intenta en un lugar sin ruido
```

### "Errores de CORS en servidor"
```
✓ Usa HTTPS en lugar de HTTP
✓ Configura headers CORS correctamente
✓ Verifica que api.php tenga permisos
```

---

## 📞 Soporte Técnico

### Comunidades
- [Stack Overflow](https://stackoverflow.com) - Búsqueda de problemas
- [GitHub Issues](https://github.com) - Reportar bugs
- Reddit r/webdev - Comunidad web

### Recursos Útiles
- [Web Speech API Docs](https://developer.mozilla.org/es/docs/Web/API/Web_Speech_API)
- [MDN Web Docs](https://developer.mozilla.org/es/)
- [CSS Tricks](https://css-tricks.com)

---

## 📝 Registro de Cambios

### v1.0 (2026)
- ✅ Reconocimiento de voz
- ✅ Síntesis de voz
- ✅ Diseño responsive
- ✅ Historial de comandos
- ✅ PWA (App nativa)
- ✅ Modo offline

---

## 📄 Licencia

Este proyecto es de código abierto. Puedes:
- ✅ Usar la app
- ✅ Modificar el código
- ✅ Distribuir
- ✅ Usar comercialmente

Solo reconoce a los autores originales.

---

## 🎉 ¡Listo para Usar!

Tu app Ruiz está lista. Ahora:
1. Abre `APP.php` en tu navegador
2. Permite acceso al micrófono
3. Haz clic en el botón del micrófono
4. ¡Di "Ey Ruiz" y tus comandos!

**¿Preguntas?** Consulta el README.md o el código comentado.

¡Disfruta! 🚀🎙️
