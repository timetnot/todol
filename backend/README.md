# Todo API Backend

Простой и быстрый backend для управления задачами на PHP с SQLite.

## Установка и запуск

1. Убедитесь, что у вас установлен PHP 8+
2. Запустите сервер:
```bash
cd backend
php -S 127.0.0.1:8002 simple_api.php
```

API будет доступен на `http://127.0.0.1:8002`

## API Эндпоинты

### Получить все задачи
```
GET /api/todos
```

**Пример ответа:**
```json
[
  {
    "id": 1,
    "title": "Новая задача",
    "description": "Описание задачи",
    "completed": false,
    "created_at": "2026-01-22 07:49:15",
    "updated_at": "2026-01-22 07:49:15"
  }
]
```

### Создать задачу
```
POST /api/todos
Content-Type: application/json
```

**Тело запроса:**
```json
{
  "title": "Название задачи",
  "description": "Описание задачи (необязательно)",
  "completed": false
}
```

### Получить конкретную задачу
```
GET /api/todos/{id}
```

### Обновить задачу
```
PUT /api/todos/{id}
Content-Type: application/json
```

**Тело запроса:**
```json
{
  "title": "Обновленное название",
  "description": "Обновленное описание",
  "completed": true
}
```

### Удалить задачу
```
DELETE /api/todos/{id}
```

## Интеграция с Next.js фронтендом

Для интеграции с вашим Next.js приложением, используйте следующие URL:

- `http://127.0.0.1:8002/api/todos` для всех операций

Пример запроса из Next.js:
```javascript
// Получить все задачи
const response = await fetch('http://127.0.0.1:8002/api/todos');
const todos = await response.json();

// Создать задачу
const newTodo = await fetch('http://127.0.0.1:8002/api/todos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Новая задача',
    description: 'Описание',
    completed: false
  })
});
```

## Особенности

- ✅ CORS настроен для работы с любым источником
- ✅ Поддержка всех CRUD операций
- ✅ Валидация входных данных
- ✅ Обработка ошибок
- ✅ SQLite база данных (не требует настройки)
- ✅ Автоматическое создание таблицы
- ✅ Часовые пояса и временные метки

## Структура данных

```json
{
  "id": "уникальный идентификатор",
  "title": "название задачи (обязательно)",
  "description": "описание задачи (необязательно)",
  "completed": "статус выполнения (true/false)",
  "created_at": "дата создания",
  "updated_at": "дата обновления"
}
```
