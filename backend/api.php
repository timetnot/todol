<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

// Добавляем отладочную информацию
error_log("Request: " . $_SERVER['REQUEST_METHOD'] . " " . $_SERVER['REQUEST_URI']);
error_log("Headers: " . json_encode(getallheaders()));

function getDb() {
    static $db = null;
    if ($db === null) {
        $db = new SQLite3('database/database.sqlite');
        $db->busyTimeout(10000);
        
        // Create tables if not exist
        $db->exec('CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )');
        
        $db->exec('CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            completed INTEGER DEFAULT 0,
            user_id INTEGER NULL,
            sphere_id INTEGER DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )');
        
        $db->exec('CREATE TABLE IF NOT EXISTS user_sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            token VARCHAR(255) UNIQUE NOT NULL,
            expires_at DATETIME NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )');
    }
    return $db;
}

function verifyToken($token) {
    if (!$token) return null;
    
    try {
        $db = getDb();
        $stmt = $db->prepare('SELECT u.* FROM users u 
                              JOIN user_sessions s ON u.id = s.user_id 
                              WHERE s.token = :token AND s.expires_at > datetime("now")');
        $stmt->bindValue(':token', $token, SQLITE3_TEXT);
        $result = $stmt->execute();
        return $result->fetchArray(SQLITE3_ASSOC);
    } catch (Exception $e) {
        error_log("Token verification error: " . $e->getMessage());
        return null;
    }
}

function generateToken($userId) {
    $token = bin2hex(random_bytes(32));
    
    try {
        $db = getDb();
        
        // Удаляем старые сессии пользователя
        $stmt = $db->prepare('DELETE FROM user_sessions WHERE user_id = :user_id');
        $stmt->bindValue(':user_id', $userId, SQLITE3_INTEGER);
        $stmt->execute();
        
        // Создаем новую сессию
        $stmt = $db->prepare('INSERT INTO user_sessions 
                             (user_id, token, expires_at, created_at) 
                             VALUES (:user_id, :token, datetime("now", "+7 days"), datetime("now"))');
        $stmt->bindValue(':user_id', $userId, SQLITE3_INTEGER);
        $stmt->bindValue(':token', $token, SQLITE3_TEXT);
        $stmt->execute();
        
        return $token;
    } catch (Exception $e) {
        error_log("Token generation error: " . $e->getMessage());
        return null;
    }
}

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path = str_replace('/api.php', '', $path);
$path = str_replace('/api', '', $path);

$headers = getallheaders();
$authHeader = $headers['Authorization'] ?? '';
$token = str_replace('Bearer ', '', $authHeader);

// Авторизация
if ($path === '/auth/register' && $method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($input['name']) || !isset($input['email']) || !isset($input['password'])) {
        http_response_code(400);
        echo json_encode(['message' => 'Не все поля заполнены']);
        exit;
    }
    
    if (isset($input['password_confirmation']) && $input['password'] !== $input['password_confirmation']) {
        http_response_code(400);
        echo json_encode(['message' => 'Пароли не совпадают']);
        exit;
    }
    
    $db = getDb();
    $stmt = $db->prepare('SELECT id FROM users WHERE email = :email');
    $stmt->bindValue(':email', $input['email'], SQLITE3_TEXT);
    $result = $stmt->execute();
    
    if ($result->fetchArray()) {
        http_response_code(400);
        echo json_encode(['message' => 'Email уже существует']);
        exit;
    }
    
    $stmt = $db->prepare('INSERT INTO users (name, email, password) VALUES (:name, :email, :password)');
    $stmt->bindValue(':name', $input['name'], SQLITE3_TEXT);
    $stmt->bindValue(':email', $input['email'], SQLITE3_TEXT);
    $stmt->bindValue(':password', password_hash($input['password'], PASSWORD_DEFAULT), SQLITE3_TEXT);
    $stmt->execute();
    
    $userId = $db->lastInsertRowID();
    $token = generateToken($userId);
    
    $stmt = $db->prepare('SELECT id, name, email, created_at, updated_at FROM users WHERE id = :id');
    $stmt->bindValue(':id', $userId, SQLITE3_INTEGER);
    $result = $stmt->execute();
    $user = $result->fetchArray(SQLITE3_ASSOC);
    
    echo json_encode([
        'user' => $user,
        'token' => $token
    ]);
    exit;
}

if ($path === '/auth/login' && $method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    error_log("Login attempt: " . json_encode($input));
    
    if (!isset($input['email']) || !isset($input['password'])) {
        http_response_code(400);
        echo json_encode(['message' => 'Email и пароль обязательны']);
        exit;
    }
    
    $db = getDb();
    $stmt = $db->prepare('SELECT id, name, email, password FROM users WHERE email = :email');
    $stmt->bindValue(':email', $input['email'], SQLITE3_TEXT);
    $result = $stmt->execute();
    $user = $result->fetchArray(SQLITE3_ASSOC);
    
    error_log("User found: " . ($user ? 'yes' : 'no'));
    
    if (!$user || !password_verify($input['password'], $user['password'])) {
        error_log("Password verification failed");
        http_response_code(401);
        echo json_encode(['message' => 'Неверные учетные данные']);
        exit;
    }
    
    $token = generateToken($user['id']);
    
    unset($user['password']);
    
    echo json_encode([
        'user' => $user,
        'token' => $token
    ]);
    exit;
}

if ($path === '/auth/user' && $method === 'GET') {
    $currentUser = verifyToken($token);
    if (!$currentUser) {
        http_response_code(401);
        echo json_encode(['message' => 'Неавторизован']);
        exit;
    }
    
    unset($currentUser['password']);
    echo json_encode($currentUser);
    exit;
}

if ($path === '/auth/logout' && $method === 'POST') {
    $currentUser = verifyToken($token);
    if (!$currentUser) {
        http_response_code(401);
        echo json_encode(['message' => 'Неавторизован']);
        exit;
    }
    
    $db = getDb();
    $stmt = $db->prepare('DELETE FROM user_sessions WHERE token = :token');
    $stmt->bindValue(':token', $token, SQLITE3_TEXT);
    $stmt->execute();
    
    echo json_encode(['message' => 'Выход выполнен успешно']);
    exit;
}

// Для всех остальных роутов требуем авторизацию
$currentUser = verifyToken($token);
if (!$currentUser) {
    http_response_code(401);
    echo json_encode(['message' => 'Неавторизован']);
    exit;
}

$db = getDb();

switch ($method) {
    case 'GET':
        if ($path === '/todos' || $path === '/todos/') {
            $stmt = $db->prepare('SELECT * FROM todos WHERE user_id = :user_id ORDER BY created_at DESC');
            $stmt->bindValue(':user_id', $currentUser['id'], SQLITE3_INTEGER);
            $result = $stmt->execute();
            $todos = [];
            while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
                $todos[] = [
                    'id' => $row['id'],
                    'title' => $row['title'],
                    'description' => $row['description'],
                    'completed' => (bool)$row['completed'],
                    'sphere_id' => $row['sphere_id'],
                    'created_at' => $row['created_at'],
                    'updated_at' => $row['updated_at']
                ];
            }
            echo json_encode($todos);
        } elseif (preg_match('/^\/todos\/(\d+)$/', $path, $matches)) {
            $id = $matches[1];
            $stmt = $db->prepare('SELECT * FROM todos WHERE id = :id AND user_id = :user_id');
            $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
            $stmt->bindValue(':user_id', $currentUser['id'], SQLITE3_INTEGER);
            $result = $stmt->execute();
            $row = $result->fetchArray(SQLITE3_ASSOC);
            
            if ($row) {
                echo json_encode([
                    'id' => $row['id'],
                    'title' => $row['title'],
                    'description' => $row['description'],
                    'completed' => (bool)$row['completed'],
                    'sphere_id' => $row['sphere_id'],
                    'created_at' => $row['created_at'],
                    'updated_at' => $row['updated_at']
                ]);
            } else {
                http_response_code(404);
                echo json_encode(['error' => 'Todo not found']);
            }
        }
        break;
        
    case 'POST':
        if ($path === '/todos' || $path === '/todos/') {
            $input = json_decode(file_get_contents('php://input'), true);
            
            if (!isset($input['title']) || empty($input['title'])) {
                http_response_code(400);
                echo json_encode(['error' => 'Title is required']);
                break;
            }
            
            $sphereId = $input['sphere_id'] ?? 1; // По умолчанию sphere 1
            
            $stmt = $db->prepare('INSERT INTO todos (title, description, completed, user_id, sphere_id, created_at, updated_at) VALUES (:title, :description, :completed, :user_id, :sphere_id, datetime("now"), datetime("now"))');
            $stmt->bindValue(':title', $input['title'], SQLITE3_TEXT);
            $stmt->bindValue(':description', $input['description'] ?? null, SQLITE3_TEXT);
            $stmt->bindValue(':completed', $input['completed'] ?? false, SQLITE3_INTEGER);
            $stmt->bindValue(':user_id', $currentUser['id'], SQLITE3_INTEGER);
            $stmt->bindValue(':sphere_id', $sphereId, SQLITE3_INTEGER);
            $stmt->execute();
            
            $id = $db->lastInsertRowID();
            
            $stmt = $db->prepare('SELECT * FROM todos WHERE id = :id');
            $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
            $result = $stmt->execute();
            $row = $result->fetchArray(SQLITE3_ASSOC);
            
            http_response_code(201);
            echo json_encode([
                'id' => $row['id'],
                'title' => $row['title'],
                'description' => $row['description'],
                'completed' => (bool)$row['completed'],
                'sphere_id' => $row['sphere_id'],
                'created_at' => $row['created_at'],
                'updated_at' => $row['updated_at']
            ]);
        }
        break;
        
    case 'PUT':
        if (preg_match('/^\/todos\/(\d+)$/', $path, $matches)) {
            $id = $matches[1];
            $input = json_decode(file_get_contents('php://input'), true);
            
            $stmt = $db->prepare('SELECT id FROM todos WHERE id = :id AND user_id = :user_id');
            $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
            $stmt->bindValue(':user_id', $currentUser['id'], SQLITE3_INTEGER);
            $check = $stmt->execute();
            if (!$check->fetchArray()) {
                http_response_code(404);
                echo json_encode(['error' => 'Todo not found']);
                break;
            }
            
            $updates = [];
            $params = [];
            
            if (isset($input['title'])) {
                $updates[] = 'title = :title';
                $params[':title'] = $input['title'];
            }
            if (isset($input['description'])) {
                $updates[] = 'description = :description';
                $params[':description'] = $input['description'];
            }
            if (isset($input['completed'])) {
                $updates[] = 'completed = :completed';
                $params[':completed'] = $input['completed'] ? 1 : 0;
            }
            
            if (empty($updates)) {
                http_response_code(400);
                echo json_encode(['error' => 'No valid fields to update']);
                break;
            }
            
            $updates[] = 'updated_at = CURRENT_TIMESTAMP';
            $sql = 'UPDATE todos SET ' . implode(', ', $updates) . ' WHERE id = :id';
            $params[':id'] = $id;
            
            $stmt = $db->prepare($sql);
            foreach ($params as $key => $value) {
                $type = is_int($value) ? SQLITE3_INTEGER : SQLITE3_TEXT;
                $stmt->bindValue($key, $value, $type);
            }
            $stmt->execute();
            
            $stmt = $db->prepare('SELECT * FROM todos WHERE id = :id');
            $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
            $result = $stmt->execute();
            $row = $result->fetchArray(SQLITE3_ASSOC);
            
            echo json_encode([
                'id' => $row['id'],
                'title' => $row['title'],
                'description' => $row['description'],
                'completed' => (bool)$row['completed'],
                'created_at' => $row['created_at'],
                'updated_at' => $row['updated_at']
            ]);
        }
        break;
        
    case 'DELETE':
        if (preg_match('/^\/todos\/(\d+)$/', $path, $matches)) {
            $id = $matches[1];
            
            $stmt = $db->prepare('SELECT id FROM todos WHERE id = :id AND user_id = :user_id');
            $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
            $stmt->bindValue(':user_id', $currentUser['id'], SQLITE3_INTEGER);
            $check = $stmt->execute();
            if (!$check->fetchArray()) {
                http_response_code(404);
                echo json_encode(['error' => 'Todo not found']);
                break;
            }
            
            $stmt = $db->prepare('DELETE FROM todos WHERE id = :id AND user_id = :user_id');
            $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
            $stmt->bindValue(':user_id', $currentUser['id'], SQLITE3_INTEGER);
            $stmt->execute();
            
            http_response_code(204);
        }
        break;
        
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}

?>
