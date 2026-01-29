(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiService",
    ()=>apiService,
    "localStorageService",
    ()=>localStorageService
]);
const API_BASE_URL = 'http://localhost:8000/api.php';
class ApiService {
    getAuthToken() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return localStorage.getItem('auth_token');
    }
    async request(endpoint, options = {}) {
        const url = `${API_BASE_URL}${endpoint}`;
        const token = this.getAuthToken();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...token && {
                    'Authorization': `Bearer ${token}`
                },
                ...options.headers
            },
            ...options
        };
        try {
            const response = await fetch(url, config);
            if (!response.ok) {
                if (response.status === 401) {
                    // Токен истек, удаляем его и перенаправляем на страницу входа
                    if ("TURBOPACK compile-time truthy", 1) {
                        localStorage.removeItem('auth_token');
                        localStorage.removeItem('user');
                        window.location.href = '/login';
                    }
                }
                const errorText = await response.text();
                throw new Error(`API Error: ${response.status} - ${errorText}`);
            }
            // Для DELETE запросов с 204 статусом возвращаем null
            if (response.status === 204) {
                return null;
            }
            return await response.json();
        } catch (error) {
            console.error('API Request failed:', error);
            throw error;
        }
    }
    // Получить все задачи
    async getTodos(sphereId) {
        try {
            let url = '/todos';
            // Если указан sphereId, фильтруем на клиенте (поскольку API не поддерживает фильтрацию)
            const todos = await this.request(url);
            if (sphereId) {
                return todos.filter((todo)=>todo.sphere_id === sphereId);
            }
            return todos;
        } catch (error) {
            console.error('Failed to fetch todos:', error);
            // В случае ошибки API возвращаем пустой массив
            return [];
        }
    }
    // Создать задачу
    async createTodo(todo) {
        return this.request('/todos', {
            method: 'POST',
            body: JSON.stringify(todo)
        });
    }
    // Обновить задачу
    async updateTodo(id, updates) {
        return this.request(`/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updates)
        });
    }
    // Удалить задачу
    async deleteTodo(id) {
        return this.request(`/todos/${id}`, {
            method: 'DELETE'
        });
    }
    // Получить одну задачу
    async getTodo(id) {
        return this.request(`/todos/${id}`);
    }
}
const apiService = new ApiService();
const localStorageService = {
    getTodos: (sphereId)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const tasks = localStorage.getItem(`sphere_${sphereId}_tasks`);
        if (!tasks) return [];
        try {
            return JSON.parse(tasks);
        } catch  {
            return [];
        }
    },
    saveTodos: (sphereId, todos)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        localStorage.setItem(`sphere_${sphereId}_tasks`, JSON.stringify(todos));
        // Триггер для обновления других компонентов
        window.dispatchEvent(new Event('taskUpdated'));
    },
    // Конвертация между форматами API и localStorage
    apiToLocalStorage: (apiTodos, sphereId)=>{
        return apiTodos.map((todo)=>({
                id: todo.id.toString(),
                description: todo.title,
                isCompleted: todo.completed,
                subtasks: todo.description ? [
                    {
                        id: `sub-${todo.id}`,
                        description: todo.description,
                        isCompleted: todo.completed
                    }
                ] : []
            }));
    },
    localStorageToApi: (localTodos)=>{
        return localTodos.map((todo)=>({
                title: todo.description,
                description: todo.subtasks?.[0]?.description || '',
                completed: todo.isCompleted
            }));
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useTodos.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTodos",
    ()=>useTodos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useTodos({ sphereId, useApi = true }) {
    _s();
    const [todos, setTodos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Загрузка задач
    const loadTodos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTodos.useCallback[loadTodos]": async ()=>{
            setLoading(true);
            setError(null);
            try {
                if (useApi) {
                    const apiTodos = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].getTodos(sphereId);
                    setTodos(apiTodos);
                    // Синхронизация с localStorage для совместимости
                    const localTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorageService"].apiToLocalStorage(apiTodos, sphereId);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorageService"].saveTodos(sphereId, localTodos);
                } else {
                    // Fallback на localStorage
                    const localTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorageService"].getTodos(sphereId);
                    const apiTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorageService"].localStorageToApi(localTodos);
                    setTodos(apiTodos);
                }
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Failed to load todos';
                setError(errorMessage);
                // В случае ошибки используем localStorage как fallback
                if (useApi) {
                    const localTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorageService"].getTodos(sphereId);
                    const apiTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorageService"].localStorageToApi(localTodos);
                    setTodos(apiTodos);
                }
            } finally{
                setLoading(false);
            }
        }
    }["useTodos.useCallback[loadTodos]"], [
        sphereId,
        useApi
    ]);
    // Создание задачи
    const createTodo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTodos.useCallback[createTodo]": async (todoData)=>{
            try {
                if (useApi) {
                    // Добавляем sphere_id к данным задачи
                    const todoWithSphere = {
                        ...todoData,
                        sphere_id: sphereId
                    };
                    const newTodo = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].createTodo(todoWithSphere);
                    setTodos({
                        "useTodos.useCallback[createTodo]": (prev)=>[
                                newTodo,
                                ...prev
                            ]
                    }["useTodos.useCallback[createTodo]"]);
                    // Синхронизация с localStorage
                    const localTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorageService"].apiToLocalStorage([
                        newTodo,
                        ...todos
                    ], sphereId);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorageService"].saveTodos(sphereId, localTodos);
                    // Триггер для обновления статистики в dashboard
                    window.dispatchEvent(new Event('taskUpdated'));
                    return newTodo;
                } else {
                    // Для localStorage используем существующую логику
                    const newId = Date.now();
                    const newTodo = {
                        id: newId,
                        title: todoData.title,
                        description: todoData.description,
                        completed: todoData.completed || false,
                        sphere_id: sphereId,
                        created_at: new Date().toISOString(),
                        updated_at: new Date().toISOString()
                    };
                    setTodos({
                        "useTodos.useCallback[createTodo]": (prev)=>[
                                newTodo,
                                ...prev
                            ]
                    }["useTodos.useCallback[createTodo]"]);
                    const localTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorageService"].apiToLocalStorage([
                        newTodo,
                        ...todos
                    ], sphereId);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorageService"].saveTodos(sphereId, localTodos);
                    // Триггер для обновления статистики в dashboard
                    window.dispatchEvent(new Event('taskUpdated'));
                    return newTodo;
                }
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Failed to create todo';
                setError(errorMessage);
                throw err;
            }
        }
    }["useTodos.useCallback[createTodo]"], [
        sphereId,
        useApi,
        todos
    ]);
    // Обновление задачи
    const updateTodo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTodos.useCallback[updateTodo]": async (id, updates)=>{
            try {
                if (useApi) {
                    const updatedTodo = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].updateTodo(id, updates);
                    setTodos({
                        "useTodos.useCallback[updateTodo]": (prev)=>prev.map({
                                "useTodos.useCallback[updateTodo]": (todo)=>todo.id === id ? updatedTodo : todo
                            }["useTodos.useCallback[updateTodo]"])
                    }["useTodos.useCallback[updateTodo]"]);
                    // Синхронизация с localStorage
                    const updatedTodos = todos.map({
                        "useTodos.useCallback[updateTodo].updatedTodos": (todo)=>todo.id === id ? updatedTodo : todo
                    }["useTodos.useCallback[updateTodo].updatedTodos"]);
                    const localTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorageService"].apiToLocalStorage(updatedTodos, sphereId);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorageService"].saveTodos(sphereId, localTodos);
                    // Триггер для обновления статистики в dashboard
                    window.dispatchEvent(new Event('taskUpdated'));
                    return updatedTodo;
                } else {
                    const updatedTodo = {
                        ...todos.find({
                            "useTodos.useCallback[updateTodo]": (t)=>t.id === id
                        }["useTodos.useCallback[updateTodo]"]),
                        ...updates,
                        updated_at: new Date().toISOString()
                    };
                    setTodos({
                        "useTodos.useCallback[updateTodo]": (prev)=>prev.map({
                                "useTodos.useCallback[updateTodo]": (todo)=>todo.id === id ? updatedTodo : todo
                            }["useTodos.useCallback[updateTodo]"])
                    }["useTodos.useCallback[updateTodo]"]);
                    const updatedTodos = todos.map({
                        "useTodos.useCallback[updateTodo].updatedTodos": (todo)=>todo.id === id ? updatedTodo : todo
                    }["useTodos.useCallback[updateTodo].updatedTodos"]);
                    const localTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorageService"].apiToLocalStorage(updatedTodos, sphereId);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorageService"].saveTodos(sphereId, localTodos);
                    // Триггер для обновления статистики в dashboard
                    window.dispatchEvent(new Event('taskUpdated'));
                    return updatedTodo;
                }
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Failed to update todo';
                setError(errorMessage);
                throw err;
            }
        }
    }["useTodos.useCallback[updateTodo]"], [
        sphereId,
        useApi,
        todos
    ]);
    // Удаление задачи
    const deleteTodo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTodos.useCallback[deleteTodo]": async (id)=>{
            try {
                if (useApi) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].deleteTodo(id);
                    setTodos({
                        "useTodos.useCallback[deleteTodo]": (prev)=>prev.filter({
                                "useTodos.useCallback[deleteTodo]": (todo)=>todo.id !== id
                            }["useTodos.useCallback[deleteTodo]"])
                    }["useTodos.useCallback[deleteTodo]"]);
                    // Синхронизация с localStorage
                    const updatedTodos = todos.filter({
                        "useTodos.useCallback[deleteTodo].updatedTodos": (todo)=>todo.id !== id
                    }["useTodos.useCallback[deleteTodo].updatedTodos"]);
                    const localTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorageService"].apiToLocalStorage(updatedTodos, sphereId);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorageService"].saveTodos(sphereId, localTodos);
                    // Триггер для обновления статистики в dashboard
                    window.dispatchEvent(new Event('taskUpdated'));
                } else {
                    setTodos({
                        "useTodos.useCallback[deleteTodo]": (prev)=>prev.filter({
                                "useTodos.useCallback[deleteTodo]": (todo)=>todo.id !== id
                            }["useTodos.useCallback[deleteTodo]"])
                    }["useTodos.useCallback[deleteTodo]"]);
                    const updatedTodos = todos.filter({
                        "useTodos.useCallback[deleteTodo].updatedTodos": (todo)=>todo.id !== id
                    }["useTodos.useCallback[deleteTodo].updatedTodos"]);
                    const localTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorageService"].apiToLocalStorage(updatedTodos, sphereId);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorageService"].saveTodos(sphereId, localTodos);
                    // Триггер для обновления статистики в dashboard
                    window.dispatchEvent(new Event('taskUpdated'));
                }
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Failed to delete todo';
                setError(errorMessage);
                throw err;
            }
        }
    }["useTodos.useCallback[deleteTodo]"], [
        sphereId,
        useApi,
        todos
    ]);
    // Переключение статуса выполнения
    const toggleTodo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTodos.useCallback[toggleTodo]": async (id)=>{
            const todo = todos.find({
                "useTodos.useCallback[toggleTodo].todo": (t)=>t.id === id
            }["useTodos.useCallback[toggleTodo].todo"]);
            if (!todo) return;
            return updateTodo(id, {
                completed: !todo.completed
            });
        }
    }["useTodos.useCallback[toggleTodo]"], [
        todos,
        updateTodo
    ]);
    // Инициализация при монтировании
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTodos.useEffect": ()=>{
            loadTodos();
        }
    }["useTodos.useEffect"], [
        loadTodos
    ]);
    // Слушатель событий localStorage для совместимости
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTodos.useEffect": ()=>{
            const handleStorageChange = {
                "useTodos.useEffect.handleStorageChange": ()=>{
                    if (!useApi) {
                        loadTodos();
                    }
                }
            }["useTodos.useEffect.handleStorageChange"];
            window.addEventListener('taskUpdated', handleStorageChange);
            window.addEventListener('storage', handleStorageChange);
            return ({
                "useTodos.useEffect": ()=>{
                    window.removeEventListener('taskUpdated', handleStorageChange);
                    window.removeEventListener('storage', handleStorageChange);
                }
            })["useTodos.useEffect"];
        }
    }["useTodos.useEffect"], [
        loadTodos,
        useApi
    ]);
    return {
        todos,
        loading,
        error,
        createTodo,
        updateTodo,
        deleteTodo,
        toggleTodo,
        refreshTodos: loadTodos
    };
}
_s(useTodos, "gZKevyYpguDNjHWTVjy84PRPTdI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/areas/1/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RelationsSphere
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTodos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTodos.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const relationsSphereConfig = {
    title: "Отношения",
    icon: "💕",
    accentColor: "#ec4899"
};
function RelationsSphere() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [newMainTaskDescription, setNewMainTaskDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newSubTaskDescription, setNewSubTaskDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [expandedTasks, setExpandedTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    // Используем наш новый хук с API
    const { todos, loading, error, createTodo, updateTodo, deleteTodo, toggleTodo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTodos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTodos"])({
        sphereId: 1,
        useApi: true
    });
    // Конвертация API формата в формат компонента
    const mainTasksList = todos.map((todo)=>({
            id: todo.id,
            description: todo.title,
            isCompleted: todo.completed,
            subtasks: todo.description ? [
                {
                    id: todo.id + 1000,
                    description: todo.description,
                    isCompleted: todo.completed
                }
            ] : [],
            areSubtasksVisible: expandedTasks.has(todo.id)
        }));
    const createMainTask = async ()=>{
        if (newMainTaskDescription.trim()) {
            try {
                await createTodo({
                    title: newMainTaskDescription,
                    description: "",
                    completed: false
                });
                setNewMainTaskDescription("");
            } catch (err) {
                console.error("Failed to create task:", err);
            // Здесь можно показать уведомление об ошибке
            }
        }
    };
    const createSubTask = async (parentTaskId)=>{
        if (newSubTaskDescription.trim()) {
            try {
                const parentTodo = todos.find((t)=>t.id === parentTaskId);
                if (parentTodo) {
                    await updateTodo(parentTaskId, {
                        title: parentTodo.title,
                        description: newSubTaskDescription
                    });
                }
                setNewSubTaskDescription("");
            } catch (err) {
                console.error("Failed to create subtask:", err);
            }
        }
    };
    const toggleMainTaskCompletion = async (taskId)=>{
        try {
            await toggleTodo(taskId);
        } catch (err) {
            console.error("Failed to toggle task:", err);
        }
    };
    const toggleSubTaskCompletion = async (parentTaskId, subTaskId)=>{
        try {
            const parentTodo = todos.find((t)=>t.id === parentTaskId);
            if (parentTodo) {
                await updateTodo(parentTaskId, {
                    ...parentTodo,
                    completed: !parentTodo.completed
                });
            }
        } catch (err) {
            console.error("Failed to toggle subtask:", err);
        }
    };
    const toggleSubtasksVisibility = (taskId)=>{
        setExpandedTasks((prev)=>{
            const newSet = new Set(prev);
            if (newSet.has(taskId)) {
                newSet.delete(taskId);
            } else {
                newSet.add(taskId);
            }
            return newSet;
        });
    };
    const removeMainTask = async (taskId)=>{
        try {
            await deleteTodo(taskId);
        } catch (err) {
            console.error("Failed to delete task:", err);
        }
    };
    const removeSubTask = async (parentTaskId, subTaskId)=>{
        try {
            const parentTodo = todos.find((t)=>t.id === parentTaskId);
            if (parentTodo) {
                await updateTodo(parentTaskId, {
                    ...parentTodo,
                    description: ""
                });
            }
        } catch (err) {
            console.error("Failed to remove subtask:", err);
        }
    };
    const moveTask = (dragIndex, dropIndex)=>{
        // Drag & drop можно реализовать позже с API
        if (dragIndex === dropIndex) return;
        console.log('Drag and drop not implemented with API yet');
    };
    const handleDragStart = (e, index)=>{
        e.dataTransfer.setData('text/plain', index.toString());
        e.dataTransfer.effectAllowed = 'move';
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };
    const handleDrop = (e, dropIndex)=>{
        e.preventDefault();
        const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
        moveTask(dragIndex, dropIndex);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sphere-page",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-aurora"
                }, void 0, false, {
                    fileName: "[project]/src/app/areas/1/page.tsx",
                    lineNumber: 167,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "header-simple",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "back-btn",
                            onClick: ()=>router.back(),
                            children: "←"
                        }, void 0, false, {
                            fileName: "[project]/src/app/areas/1/page.tsx",
                            lineNumber: 169,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-compact",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-icon",
                                    children: relationsSphereConfig.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/app/areas/1/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: relationsSphereConfig.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/areas/1/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/areas/1/page.tsx",
                            lineNumber: 172,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/areas/1/page.tsx",
                    lineNumber: 168,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "main-content",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "loading-state",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Загрузка задач..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/areas/1/page.tsx",
                            lineNumber: 179,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/areas/1/page.tsx",
                        lineNumber: 178,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/areas/1/page.tsx",
                    lineNumber: 177,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/areas/1/page.tsx",
            lineNumber: 166,
            columnNumber: 13
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sphere-page",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-aurora"
                }, void 0, false, {
                    fileName: "[project]/src/app/areas/1/page.tsx",
                    lineNumber: 189,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "header-simple",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "back-btn",
                            onClick: ()=>router.back(),
                            children: "←"
                        }, void 0, false, {
                            fileName: "[project]/src/app/areas/1/page.tsx",
                            lineNumber: 191,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-compact",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-icon",
                                    children: relationsSphereConfig.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/app/areas/1/page.tsx",
                                    lineNumber: 195,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: relationsSphereConfig.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/areas/1/page.tsx",
                                    lineNumber: 196,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/areas/1/page.tsx",
                            lineNumber: 194,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/areas/1/page.tsx",
                    lineNumber: 190,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "main-content",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "error-state",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Ошибка загрузки: ",
                                    error
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/areas/1/page.tsx",
                                lineNumber: 201,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>window.location.reload(),
                                children: "Попробовать снова"
                            }, void 0, false, {
                                fileName: "[project]/src/app/areas/1/page.tsx",
                                lineNumber: 202,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/areas/1/page.tsx",
                        lineNumber: 200,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/areas/1/page.tsx",
                    lineNumber: 199,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/areas/1/page.tsx",
            lineNumber: 188,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sphere-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-aurora"
            }, void 0, false, {
                fileName: "[project]/src/app/areas/1/page.tsx",
                lineNumber: 213,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header-simple",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "back-btn",
                        onClick: ()=>router.back(),
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/src/app/areas/1/page.tsx",
                        lineNumber: 215,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-compact",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-icon",
                                children: relationsSphereConfig.icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/areas/1/page.tsx",
                                lineNumber: 219,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: relationsSphereConfig.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/areas/1/page.tsx",
                                lineNumber: 220,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/areas/1/page.tsx",
                        lineNumber: 218,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/areas/1/page.tsx",
                lineNumber: 214,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "main-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tasks-container",
                        children: mainTasksList.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "empty-state",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Создай первую задачу"
                            }, void 0, false, {
                                fileName: "[project]/src/app/areas/1/page.tsx",
                                lineNumber: 228,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/areas/1/page.tsx",
                            lineNumber: 227,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tasks-scrollable",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "tasks-list",
                                children: mainTasksList.map((task, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "task-item",
                                        draggable: true,
                                        onDragStart: (e)=>handleDragStart(e, index),
                                        onDragOver: handleDragOver,
                                        onDrop: (e)=>handleDrop(e, index),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "task-main",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "task-checkbox",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: task.isCompleted,
                                                                onChange: ()=>toggleMainTaskCompletion(task.id)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/areas/1/page.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "custom-checkbox"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/areas/1/page.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `task-text ${task.isCompleted ? "done" : ""}`,
                                                                children: [
                                                                    task.description,
                                                                    task.subtasks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            opacity: 0.7,
                                                                            fontSize: "0.8em",
                                                                            marginLeft: "0.5rem",
                                                                            fontWeight: 500
                                                                        },
                                                                        children: [
                                                                            "(",
                                                                            task.subtasks.length,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/areas/1/page.tsx",
                                                                        lineNumber: 259,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/areas/1/page.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/areas/1/page.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "task-actions",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "subtasks-toggle",
                                                                onClick: ()=>toggleSubtasksVisibility(task.id),
                                                                children: task.areSubtasksVisible ? "−" : "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/areas/1/page.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "delete-btn",
                                                                onClick: ()=>removeMainTask(task.id),
                                                                children: "×"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/areas/1/page.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/areas/1/page.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/areas/1/page.tsx",
                                                lineNumber: 242,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `subtasks-content ${task.areSubtasksVisible ? "expanded" : ""}`,
                                                children: [
                                                    task.subtasks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "subtasks-list",
                                                        children: task.subtasks.map((subTask)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "subtask-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "subtask-checkbox",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: subTask.isCompleted,
                                                                                onChange: ()=>toggleSubTaskCompletion(task.id, subTask.id)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/areas/1/page.tsx",
                                                                                lineNumber: 304,
                                                                                columnNumber: 65
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "custom-subcheckbox"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/areas/1/page.tsx",
                                                                                lineNumber: 316,
                                                                                columnNumber: 65
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `subtask-text ${subTask.isCompleted ? "done" : ""}`,
                                                                                children: subTask.description
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/areas/1/page.tsx",
                                                                                lineNumber: 317,
                                                                                columnNumber: 65
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/areas/1/page.tsx",
                                                                        lineNumber: 303,
                                                                        columnNumber: 61
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "delete-sub-btn",
                                                                        onClick: ()=>removeSubTask(task.id, subTask.id),
                                                                        children: "×"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/areas/1/page.tsx",
                                                                        lineNumber: 327,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                ]
                                                            }, subTask.id, true, {
                                                                fileName: "[project]/src/app/areas/1/page.tsx",
                                                                lineNumber: 299,
                                                                columnNumber: 57
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/areas/1/page.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "add-subtask-section",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "subtask-input",
                                                                value: newSubTaskDescription,
                                                                onChange: (e)=>setNewSubTaskDescription(e.target.value),
                                                                placeholder: "Подзадача...",
                                                                onKeyDown: (e)=>e.key === "Enter" && createSubTask(task.id)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/areas/1/page.tsx",
                                                                lineNumber: 344,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "add-sub-btn",
                                                                onClick: ()=>createSubTask(task.id),
                                                                children: "Добавить"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/areas/1/page.tsx",
                                                                lineNumber: 358,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/areas/1/page.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/areas/1/page.tsx",
                                                lineNumber: 291,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, task.id, true, {
                                        fileName: "[project]/src/app/areas/1/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/areas/1/page.tsx",
                                lineNumber: 232,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/areas/1/page.tsx",
                            lineNumber: 231,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/areas/1/page.tsx",
                        lineNumber: 225,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "add-task-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "task-input",
                                value: newMainTaskDescription,
                                onChange: (e)=>setNewMainTaskDescription(e.target.value),
                                placeholder: "Например: Позвонить в обед",
                                onKeyDown: (e)=>e.key === "Enter" && createMainTask()
                            }, void 0, false, {
                                fileName: "[project]/src/app/areas/1/page.tsx",
                                lineNumber: 376,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "add-btn",
                                onClick: createMainTask,
                                children: "Добавить"
                            }, void 0, false, {
                                fileName: "[project]/src/app/areas/1/page.tsx",
                                lineNumber: 385,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/areas/1/page.tsx",
                        lineNumber: 375,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/areas/1/page.tsx",
                lineNumber: 224,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/areas/1/page.tsx",
        lineNumber: 212,
        columnNumber: 9
    }, this);
}
_s(RelationsSphere, "iM0qVbfcPojUk+Ig+kSrwLpxJYo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTodos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTodos"]
    ];
});
_c = RelationsSphere;
var _c;
__turbopack_context__.k.register(_c, "RelationsSphere");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_597d4665._.js.map