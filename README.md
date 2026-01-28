# Todol App

Todo приложение с Next.js фронтендом и PHP бэкендом.

## Стек технологий

### Фронтенд
- **Next.js 16.1.1** - React фреймворк
- **TypeScript** - Типизация
- **Tailwind CSS** - Стили
- **React Hook Form** - Формы
- **Axios** - HTTP клиент

### Бэкенд
- **PHP 8.2** - Язык программирования
- **SQLite** - База данных
- **PHP-FPM** - Веб-сервер
- **Nginx** - Прокси-сервер

## Функциональность

- ✅ Регистрация пользователей
- ✅ Аутентификация (JWT токены)
- ✅ CRUD операции с задачами
- ✅ Персональные задачи для каждого пользователя
- ✅ CORS поддержка
- ✅ Валидация данных

## Структура проекта

```
├── backend/                 # PHP бэкенд
│   ├── api.php             # Основной API файл
│   ├── database/           # База данных SQLite
│   ├── app/Models/         # Модели Laravel
│   ├── routes/             # Роуты Laravel
│   └── config/             # Конфигурация
├── src/                    # Next.js фронтенд
│   ├── app/                # Страницы App Router
│   ├── components/         # React компоненты
│   ├── lib/                # Утилиты и API клиенты
│   └── types/              # TypeScript типы
├── public/                 # Статические файлы
├── docker-compose.yml      # Docker конфигурация
├── nginx.conf              # Nginx конфигурация
└── README.md               # Этот файл
```

## Запуск проекта

### Вариант 1: Docker (рекомендуется)

```bash
# Запустить все сервисы
docker-compose up --build

# Запустить в фоновом режиме
docker-compose up -d --build

# Остановить сервисы
docker-compose down
```

Доступные адреса:
- **Фронтенд**: http://localhost:3000
- **Бэкенд API**: http://localhost/api.php
- **Nginx**: http://localhost:80

### Вариант 2: Локальная разработка

#### Бэкенд
```bash
cd backend
php -S localhost:8000
```

#### Фронтенд
```bash
npm install
npm run dev
```

## API Эндпоинты

### Аутентификация
- `POST /api.php/auth/register` - Регистрация
- `POST /api.php/auth/login` - Вход
- `GET /api.php/auth/user` - Получение текущего пользователя
- `POST /api.php/auth/logout` - Выход

### Задачи
- `GET /api.php/todos` - Получить все задачи
- `POST /api.php/todos` - Создать задачу
- `GET /api.php/todos/{id}` - Получить задачу
- `PUT /api.php/todos/{id}` - Обновить задачу
- `DELETE /api.php/todos/{id}` - Удалить задачу

## База данных

Используется SQLite с таблицами:
- `users` - Пользователи
- `todos` - Задачи
- `user_sessions` - Сессии пользователей

## Разработка

### Добавление новых функций
1. Создать роут в `backend/api.php`
2. Добавить типы в `src/types/`
3. Реализовать вызов API в `src/lib/`
4. Создать компонент в `src/components/`

### Стили
Используется Tailwind CSS. Конфигурация в `tailwind.config.js`.

### Переменные окружения
Скопируйте `.env.example` в `.env` и настройте:
- `APP_URL` - URL приложения
- `DB_DATABASE` - Путь к БД
- `APP_KEY` - Ключ шифрования

## Деплой

### Docker
```bash
docker-compose -f docker-compose.prod.yml up -d --build
```

### Традиционный хостинг
1. Залить файлы на сервер
2. Настроить Nginx для проксирования
3. Установить PHP 8.2+ и расширения
4. Настроить права доступа к папкам

## Траблшутинг

### Проблемы с Docker
- Убедитесь что Docker daemon запущен
- Проверьте что порты 3000, 8000, 80 свободны
- Используйте `docker-compose logs` для просмотра логов

### Проблемы с API
- Проверьте CORS заголовки
- Убедитесь что БД доступна для записи
- Проверьте права доступа к файлам

### Проблемы с фронтендом
- Очистите кеш: `rm -rf .next`
- Переустановите зависимости: `rm -rf node_modules && npm install`
- Проверьте переменные окружения

## Лицензия

MIT License
