# ===== DOCUMENTACIÓN DE API DE RUIZ =====

## Base URL
```
/api.php
```

## Endpoints

### 1. Procesar Comando
**Endpoint**: `/api.php?action=process&command=COMANDO`

**Método**: GET o POST

**Parámetros**:
- `action` (string): "process"
- `command` (string): El comando a procesar

**Respuesta Exitosa**:
```json
{
    "success": true,
    "message": "Respuesta del asistente",
    "type": "response",
    "data": {}
}
```

**Ejemplo**:
```
GET /api.php?action=process&command=qué%20hora%20es
```

---

### 2. Obtener Chiste
**Endpoint**: `/api.php?action=joke`

**Método**: GET

**Respuesta**:
```json
{
    "success": true,
    "message": "¿Cómo se llama un boomerang que no vuelve? Palo."
}
```

---

### 3. Obtener Hora
**Endpoint**: `/api.php?action=time`

**Método**: GET

**Respuesta**:
```json
{
    "success": true,
    "time": "14:30:45",
    "date": "2026-05-17"
}
```

---

### 4. Información del Sistema
**Endpoint**: `/api.php?action=info`

**Método**: GET

**Respuesta**:
```json
{
    "timestamp": "2026-05-17 14:30:45",
    "php_version": "8.0.0",
    "os": "Windows 10",
    "server_name": "localhost"
}
```

---

### 5. Verificar Estado
**Endpoint**: `/api.php?action=health`

**Método**: GET

**Respuesta**:
```json
{
    "status": "ok",
    "message": "Ruiz API está funcionando correctamente"
}
```

---

## Manejo de Errores

### Error de Acción No Especificada
```json
{
    "success": false,
    "message": "Acción no especificada",
    "available_actions": ["process", "joke", "time", "info", "health"]
}
```

### Error HTTP 400
```
Status Code: 400
```

---

## Códigos de Respuesta HTTP

| Código | Significado |
|--------|------------|
| 200 | OK - Solicitud exitosa |
| 400 | Bad Request - Parámetros inválidos |
| 404 | Not Found - Endpoint no existe |
| 500 | Internal Server Error - Error del servidor |

---

## Ejemplos de Uso

### JavaScript/Fetch
```javascript
// Obtener hora
fetch('/api.php?action=time')
    .then(response => response.json())
    .then(data => console.log(data.time))
    .catch(error => console.error('Error:', error));

// Procesar comando
const command = 'qué hora es';
fetch(`/api.php?action=process&command=${encodeURIComponent(command)}`)
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log(data.message);
        }
    });
```

### cURL
```bash
# Obtener chiste
curl "http://localhost:8000/api.php?action=joke"

# Procesar comando
curl "http://localhost:8000/api.php?action=process&command=hola"

# Verificar salud del API
curl "http://localhost:8000/api.php?action=health"
```

### Python
```python
import requests
import urllib.parse

# Obtener información
response = requests.get('http://localhost:8000/api.php?action=info')
data = response.json()
print(data)

# Procesar comando
command = 'qué hora es'
url = f'http://localhost:8000/api.php?action=process&command={urllib.parse.quote(command)}'
response = requests.get(url)
data = response.json()
print(data['message'])
```

---

## CORS (Cross-Origin Resource Sharing)

El API está configurado para aceptar requests desde cualquier origen:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

---

## Autenticación

Actualmente, el API no requiere autenticación. Si necesitas agregar seguridad:

```php
// En api.php, antes de procesar:
if (!isset($_GET['token']) || $_GET['token'] !== 'tu_token_secreto') {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'No autorizado']);
    exit();
}
```

---

## Rate Limiting (Limitación de Velocidad)

Para evitar abuso, considera agregar:

```php
session_start();
$max_requests = 100;  // Máximo de requests
$time_window = 3600;  // En 1 hora

if (!isset($_SESSION['api_calls'])) {
    $_SESSION['api_calls'] = [];
}

// Limpiar requests antiguos
$_SESSION['api_calls'] = array_filter($_SESSION['api_calls'], 
    function($time) use ($time_window) {
        return (time() - $time) < $time_window;
    }
);

if (count($_SESSION['api_calls']) >= $max_requests) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Demasiadas solicitudes']);
    exit();
}

$_SESSION['api_calls'][] = time();
```

---

## Logging

Para registrar API calls, agrega esto en `api.php`:

```php
// Registrar cada request
$log_file = 'api.log';
$log_message = date('Y-m-d H:i:s') . ' - ' . 
    $_SERVER['REQUEST_METHOD'] . ' ' .
    $_SERVER['REQUEST_URI'] . ' - ' .
    $_SERVER['REMOTE_ADDR'] . PHP_EOL;

file_put_contents($log_file, $log_message, FILE_APPEND);
```

---

## Versioning (Versionamiento)

Para agregar versiones de API:

```
/api/v1.0/?action=process
/api/v2.0/?action=process
```

Implementar en `.htaccess`:
```
RewriteRule ^api/v([0-9]+\.[0-9]+)/(.*)$ api.php?version=$1&$2 [QSA,L]
```

---

## Documentación Adicional

- [HTTP Status Codes](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
- [REST API Best Practices](https://restfulapi.net/)
- [JSON Specification](https://www.json.org/json-es.html)

---

**Última actualización**: 2026  
**API Version**: 1.0
