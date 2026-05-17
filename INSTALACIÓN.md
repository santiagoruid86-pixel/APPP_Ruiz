# 💻 GUÍA DE INSTALACIÓN - RUIZ

## Requisitos Previos

### Hardware
- 💾 **Espacio**: ~5 MB (sin dependencias)
- 🎤 **Micrófono**: Requerido para uso
- 🔊 **Altavoz**: Para escuchar respuestas
- 📱 **Dispositivo**: Computadora, tablet o celular moderno

### Navegador
Elige uno de estos:
- ✅ **Google Chrome** v25+
- ✅ **Mozilla Firefox** v25+
- ✅ **Safari** v14.1+
- ✅ **Microsoft Edge** v79+

---

## Opción 1: Uso Directo (Más Fácil)

### En Computadora Windows

1. **Descarga la carpeta `app_ruiz`**
   ```
   Botón derecho → Guardar en...
   ```

2. **Abre `APP.php`**
   - Doble clic en `APP.php`
   - Se abrirá en tu navegador predeterminado

3. **Permite el micrófono**
   - Haz clic en "Permitir"

4. **¡Listo!**
   - Empieza a usar Ruiz

### En Computadora Mac

1. **Descarga la carpeta `app_ruiz`**

2. **Abre `APP.php`**
   - Botón derecho → Abrir con → Tu navegador

3. **Permite el micrófono**
   - Haz clic en "Permitir"

4. **¡Listo!**

### En Celular Android

1. **Descarga los archivos**
   - En tu carpeta de Descargas

2. **Busca `APP.php`**
   - Abre con Chrome o navegador

3. **Permite el micrófono**
   - Toca "Permitir"

4. **¡Listo!**

### En iPhone/iPad

1. **Accede por navegador**
   - Safari → URL del sitio

2. **Permite el micrófono**
   - Toca "Permitir"

3. **¡Listo!**

---

## Opción 2: Con Servidor PHP Local

### Para Mayor Control

Si tienes **PHP instalado** en tu computadora:

#### Windows

1. **Abre PowerShell o CMD**
   ```powershell
   # Navega a la carpeta
   cd C:\Users\TuUsuario\Downloads\app_ruiz
   ```

2. **Inicia servidor PHP**
   ```powershell
   php -S localhost:8000
   ```

3. **Abre tu navegador**
   ```
   http://localhost:8000/APP.php
   ```

4. **¡Listo!**
   - Servidor corriendo

#### Mac/Linux

1. **Abre Terminal**
   ```bash
   # Navega a la carpeta
   cd ~/Downloads/app_ruiz
   ```

2. **Inicia servidor PHP**
   ```bash
   php -S localhost:8000
   ```

3. **Abre tu navegador**
   ```
   http://localhost:8000/APP.php
   ```

4. **¡Listo!**

---

## Opción 3: Con Servidor Web (Avanzado)

### Usando Apache

#### En Windows
```
1. Instala Apache (XAMPP o WAMPServer)
2. Copia app_ruiz a htdocs/
3. Visita http://localhost/app_ruiz/APP.php
```

#### En Mac
```
1. Instala Apache con Homebrew
   brew install httpd
2. Copia archivos a /Library/WebServer/Documents/
3. Visita http://localhost/app_ruiz/APP.php
```

#### En Linux
```
1. Instala Apache
   sudo apt-get install apache2 php
2. Copia archivos a /var/www/html/app_ruiz/
3. Visita http://localhost/app_ruiz/APP.php
```

---

## Opción 4: Instalación en Celular (PWA)

### Como Aplicación Nativa

#### iPhone

1. **Abre Safari**
   - Navega a tu URL con APP.php

2. **Toca el icono Compartir**
   - Esquina inferior derecha

3. **Selecciona "Añadir a Pantalla de Inicio"**

4. **Dale un nombre**
   - Por defecto: "Ruiz"

5. **Tapa el botón Añadir**

6. **¡Listo!**
   - Aparecerá como app en tu pantalla

#### Android

1. **Abre Chrome**
   - Navega a tu URL con APP.php

2. **Toca el menú (3 puntos)**
   - Esquina superior derecha

3. **Selecciona "Instalar aplicación"**
   - O "Añadir a pantalla de inicio"

4. **Confirma la instalación**

5. **¡Listo!**
   - Aparecerá en tu pantalla de inicio

---

## Verificar Instalación

### Checklist

- [ ] ¿Se abrió APP.php en el navegador?
- [ ] ¿Se solicita permiso de micrófono?
- [ ] ¿El navegador muestra "Ruiz - Asistente de Voz"?
- [ ] ¿Aparece el botón 🎤 en la pantalla?
- [ ] ¿Es responsiva la interfaz?
- [ ] ¿Puedes activar el micrófono?
- [ ] ¿Ruiz responde "¿Qué necesitas?"?

Si todo está ✅, ¡instalación correcta!

---

## Solucionar Problemas de Instalación

### Problema: No se abre APP.php

**Soluciones:**
1. Asegúrate de descargar la carpeta completa
2. Prueba doble clic en APP.php
3. Abre manualmente en el navegador (copiar URL)
4. Intenta desde línea de comandos

### Problema: Dice "Archivo no encontrado" (404)

**Soluciones:**
1. Verifica que APP.php está en la carpeta
2. Revisa la ruta en la URL
3. Asegúrate de ejecutar desde la carpeta correcta
4. Intenta `localhost:8000` en vez de `127.0.0.1:8000`

### Problema: "No se permite el micrófono"

**Soluciones:**
1. Revisa la configuración del navegador
   - Chrome: Configuración → Privacidad → Permisos → Micrófono
2. Permite el sitio para acceder al micrófono
3. Reinicia el navegador
4. Intenta en navegación incógnita

### Problema: Navegador no compatible

**Soluciones:**
1. Descarga un navegador compatible:
   - [Chrome](https://www.google.com/chrome)
   - [Firefox](https://www.mozilla.org/firefox)
   - [Edge](https://www.microsoft.com/edge)
2. Intenta nuevo navegador
3. Actualiza tu navegador actual

---

## Configuración Inicial

### Primer Inicio

Después de instalar, realiza estos pasos:

1. **Permitir Permisos**
   - Micrófono: SÍ
   - Notificaciones: Opcional

2. **Probar Micrófono**
   ```
   "Ey Ruiz" → Respuesta de Ruiz
   ```

3. **Personalizar (Opcional)**
   - Edita `config.js`
   - Cambia idioma, velocidad, etc.

4. **Instalar en Celular (Opcional)**
   - Sigue pasos de PWA arriba

---

## Actualizar a Nueva Versión

### Cómo Actualizar

1. **Descarga la nueva versión**
   - Reemplaza los archivos

2. **Limpia caché del navegador**
   - Ctrl+Shift+Delete
   - Borra Cookies y Caché

3. **Recarga la página**
   - F5 o Ctrl+R

4. **¡Listo!**
   - Tendrás la versión más nueva

---

## Desinstalar

### Desinstalar de Computadora

1. **Elimina la carpeta `app_ruiz`**
2. **¡Listo!**
   - Ruiz ha sido desinstalado

### Desinstalar de iPhone

1. **Toca y mantén el icono de Ruiz**
2. **Selecciona "Quitar de Pantalla de Inicio"**
3. **¡Listo!**

### Desinstalar de Android

1. **Toca y mantén el icono de Ruiz**
2. **Selecciona "Desinstalar"**
3. **¡Listo!**

---

## Requisitos del Sistema (Detallado)

### Windows
- Windows 7 o superior
- Chrome 25+, Firefox 25+, Edge 79+
- RAM: 512 MB mínimo
- Micrófono integrado o USB

### Mac
- macOS 10.12 o superior
- Safari 14.1+, Chrome, Firefox
- RAM: 512 MB mínimo
- Micrófono integrado

### Android
- Android 5.0 o superior
- Chrome o navegador compatible
- RAM: 1 GB mínimo
- Micrófono del dispositivo

### iOS
- iOS 12 o superior
- Safari (preferido)
- RAM: 1 GB mínimo
- Micrófono del dispositivo

---

## Espacio en Disco

| Elemento | Tamaño |
|----------|--------|
| APP.php | ~20 KB |
| script.js | ~25 KB |
| styles.css | ~20 KB |
| Otros archivos | ~15 KB |
| **TOTAL** | **~5 MB** |

---

## Ancho de Banda

| Acción | Datos |
|--------|-------|
| Primera carga | ~100 KB |
| Cada comando | ~1-5 KB |
| Mensajes de voz | ~10-50 KB |
| **Uso mensual típico** | **~10 MB** |

---

## Soporte Técnico

### Si Tienes Problemas

1. **Revisa la Sección "Solucionar Problemas"**
2. **Limpia caché y cookies**
3. **Intenta otro navegador**
4. **Intenta en otra máquina**
5. **Contacta soporte**

### Información de Depuración

Para reportar problemas, incluye:
- Navegador y versión
- Sistema operativo
- Navegador usado
- Mensaje de error (screenshot)
- Pasos para reproducir

---

## ✅ Instalación Completada

Felicidades, ¡Ruiz está instalado!

**Próximos pasos:**
1. Lee [INICIO_RÁPIDO.md](INICIO_RÁPIDO.md)
2. Lee [GUÍA_DE_USO.md](GUÍA_DE_USO.md)
3. Lee [TIPS_Y_TRUCOS.md](TIPS_Y_TRUCOS.md)

---

**¿Necesitas ayuda? Revisa la documentación o recarga la página.**

*Versión: 2.0*  
*Última actualización: Mayo 2026*
