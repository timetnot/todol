# Todol App

## Запуск с Docker

### Требования
- Docker
- Docker Compose

### Запуск
```bash
docker-compose up --build
docker-compose up -d --build
docker-compose down
```

### Доступ
- Фронтенд: http://localhost:3000
- Бэкенд API: http://localhost/api.php
- Nginx: http://localhost:80

### Структура
```
├── backend/
├── src/
├── docker-compose.yml
├── nginx.conf
└── .dockerignore
```

### Сервисы
- frontend: Next.js
- backend: PHP-FPM + SQLite
- nginx: Веб-сервер
