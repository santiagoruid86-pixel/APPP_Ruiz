<?php
/**
 * RUIZ - API Backend
 * Procesamiento de comandos de voz
 * 
 * Este archivo puede usarse para procesar comandos más complejos
 * que requieran interacción con el servidor.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Manejar requests OPTIONS (CORS preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Obtener datos del request
$input = json_decode(file_get_contents('php://input'), true);
$action = isset($_GET['action']) ? $_GET['action'] : (isset($input['action']) ? $input['action'] : '');
$command = isset($_GET['command']) ? $_GET['command'] : (isset($input['command']) ? $input['command'] : '');

/**
 * Procesa un comando de voz
 */
function processCommand($command) {
    $command = strtolower(trim($command));
    
    $responses = [
        'qué hora es' => [
            'success' => true,
            'message' => 'Te digo la hora actual',
            'data' => date('H:i:s')
        ],
        'chiste' => [
            'success' => true,
            'message' => '¿Cómo se llama un boomerang que no vuelve? Palo.',
            'type' => 'joke'
        ],
        'quién eres' => [
            'success' => true,
            'message' => 'Soy Ruiz, tu asistente de voz inteligente',
            'type' => 'info'
        ],
        'default' => [
            'success' => false,
            'message' => 'Comando no reconocido',
            'type' => 'error'
        ]
    ];
    
    // Buscar coincidencia
    foreach ($responses as $key => $response) {
        if ($key !== 'default' && strpos($command, $key) !== false) {
            return $response;
        }
    }
    
    return $responses['default'];
}

/**
 * Obtiene un chiste aleatorio
 */
function getRandomJoke() {
    $jokes = [
        '¿Cómo se llama un boomerang que no vuelve? Palo.',
        '¿Qué hace una persona inteligente cuando se pierde? Nada, se mantiene perdida.',
        '¿Sabes cuál es el animal más viejo de la selva? La jirafa, porque tiene el cuello largo.',
        'Un ordenador entró a un bar y pidió una cerveza. El camarero dijo: "No servimos procesadores aquí".',
    ];
    
    return $jokes[array_rand($jokes)];
}

/**
 * Obtiene información del sistema
 */
function getSystemInfo() {
    return [
        'timestamp' => date('Y-m-d H:i:s'),
        'php_version' => phpversion(),
        'os' => php_uname(),
        'server_name' => $_SERVER['SERVER_NAME'] ?? 'localhost'
    ];
}

/**
 * Rutas principales
 */
switch ($action) {
    case 'process':
        echo json_encode(processCommand($command));
        break;
    
    case 'joke':
        echo json_encode([
            'success' => true,
            'message' => getRandomJoke()
        ]);
        break;
    
    case 'time':
        echo json_encode([
            'success' => true,
            'time' => date('H:i:s'),
            'date' => date('Y-m-d')
        ]);
        break;
    
    case 'info':
        echo json_encode(getSystemInfo());
        break;
    
    case 'health':
        echo json_encode([
            'status' => 'ok',
            'message' => 'Ruiz API está funcionando correctamente'
        ]);
        break;
    
    default:
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Acción no especificada',
            'available_actions' => ['process', 'joke', 'time', 'info', 'health']
        ]);
        break;
}
?>
