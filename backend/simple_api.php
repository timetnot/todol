<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

try {
    $db = new SQLite3('database/database.sqlite');
    
    // Create table if not exists
    $db->exec('CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        completed INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )');
    
    $method = $_SERVER['REQUEST_METHOD'];
    $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    
    // Remove /api prefix if present
    $path = str_replace('/api', '', $path);
    
    switch ($method) {
        case 'GET':
            if ($path === '/todos' || $path === '/todos/') {
                // Get all todos
                $result = $db->query('SELECT * FROM todos ORDER BY created_at DESC');
                $todos = [];
                while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
                    $todos[] = [
                        'id' => $row['id'],
                        'title' => $row['title'],
                        'description' => $row['description'],
                        'completed' => (bool)$row['completed'],
                        'created_at' => $row['created_at'],
                        'updated_at' => $row['updated_at']
                    ];
                }
                echo json_encode($todos);
            } elseif (preg_match('/^\/todos\/(\d+)$/', $path, $matches)) {
                // Get single todo
                $id = $matches[1];
                $stmt = $db->prepare('SELECT * FROM todos WHERE id = :id');
                $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
                $result = $stmt->execute();
                $row = $result->fetchArray(SQLITE3_ASSOC);
                
                if ($row) {
                    echo json_encode([
                        'id' => $row['id'],
                        'title' => $row['title'],
                        'description' => $row['description'],
                        'completed' => (bool)$row['completed'],
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
                
                $stmt = $db->prepare('INSERT INTO todos (title, description, completed, created_at, updated_at) VALUES (:title, :description, :completed, datetime("now"), datetime("now"))');
                $stmt->bindValue(':title', $input['title'], SQLITE3_TEXT);
                $stmt->bindValue(':description', $input['description'] ?? null, SQLITE3_TEXT);
                $stmt->bindValue(':completed', $input['completed'] ?? false, SQLITE3_INTEGER);
                $stmt->execute();
                
                $id = $db->lastInsertRowID();
                
                // Get the created todo
                $result = $db->query('SELECT * FROM todos WHERE id = ' . $id);
                $row = $result->fetchArray(SQLITE3_ASSOC);
                
                http_response_code(201);
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
            
        case 'PUT':
            if (preg_match('/^\/todos\/(\d+)$/', $path, $matches)) {
                $id = $matches[1];
                $input = json_decode(file_get_contents('php://input'), true);
                
                // Check if todo exists
                $check = $db->query('SELECT id FROM todos WHERE id = ' . $id);
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
                
                // Get updated todo
                $result = $db->query('SELECT * FROM todos WHERE id = ' . $id);
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
                
                // Check if todo exists
                $check = $db->query('SELECT id FROM todos WHERE id = ' . $id);
                if (!$check->fetchArray()) {
                    http_response_code(404);
                    echo json_encode(['error' => 'Todo not found']);
                    break;
                }
                
                $stmt = $db->prepare('DELETE FROM todos WHERE id = :id');
                $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
                $stmt->execute();
                
                http_response_code(204);
            }
            break;
            
        default:
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
            break;
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Internal server error: ' . $e->getMessage()]);
}
?>
