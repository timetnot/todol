module.exports = [
"[project]/src/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiService",
    ()=>apiService,
    "localStorageService",
    ()=>localStorageService
]);
const API_BASE_URL = 'http://localhost:8001/api';
class ApiService {
    getAuthToken() {
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
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
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
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
        if ("TURBOPACK compile-time truthy", 1) return [];
        //TURBOPACK unreachable
        ;
        const tasks = undefined;
    },
    saveTodos: (sphereId, todos)=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
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
}),
"[project]/src/hooks/useTodos.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTodos",
    ()=>useTodos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-ssr] (ecmascript)");
"use client";
;
;
function useTodos({ sphereId, useApi = true }) {
    const [todos, setTodos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Загрузка задач
    const loadTodos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setLoading(true);
        setError(null);
        try {
            if (useApi) {
                const apiTodos = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].getTodos(sphereId);
                setTodos(apiTodos);
                // Синхронизация с localStorage для совместимости
                const localTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localStorageService"].apiToLocalStorage(apiTodos, sphereId);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localStorageService"].saveTodos(sphereId, localTodos);
            } else {
                // Fallback на localStorage
                const localTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localStorageService"].getTodos(sphereId);
                const apiTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localStorageService"].localStorageToApi(localTodos);
                setTodos(apiTodos);
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to load todos';
            setError(errorMessage);
            // В случае ошибки используем localStorage как fallback
            if (useApi) {
                const localTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localStorageService"].getTodos(sphereId);
                const apiTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localStorageService"].localStorageToApi(localTodos);
                setTodos(apiTodos);
            }
        } finally{
            setLoading(false);
        }
    }, [
        sphereId,
        useApi
    ]);
    // Создание задачи
    const createTodo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (todoData)=>{
        try {
            if (useApi) {
                // Добавляем sphere_id к данным задачи
                const todoWithSphere = {
                    ...todoData,
                    sphere_id: sphereId
                };
                const newTodo = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].createTodo(todoWithSphere);
                setTodos((prev)=>[
                        newTodo,
                        ...prev
                    ]);
                // Синхронизация с localStorage
                const localTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localStorageService"].apiToLocalStorage([
                    newTodo,
                    ...todos
                ], sphereId);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localStorageService"].saveTodos(sphereId, localTodos);
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
                setTodos((prev)=>[
                        newTodo,
                        ...prev
                    ]);
                const localTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localStorageService"].apiToLocalStorage([
                    newTodo,
                    ...todos
                ], sphereId);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localStorageService"].saveTodos(sphereId, localTodos);
                // Триггер для обновления статистики в dashboard
                window.dispatchEvent(new Event('taskUpdated'));
                return newTodo;
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to create todo';
            setError(errorMessage);
            throw err;
        }
    }, [
        sphereId,
        useApi,
        todos
    ]);
    // Обновление задачи
    const updateTodo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id, updates)=>{
        try {
            if (useApi) {
                const updatedTodo = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].updateTodo(id, updates);
                setTodos((prev)=>prev.map((todo)=>todo.id === id ? updatedTodo : todo));
                // Синхронизация с localStorage
                const updatedTodos = todos.map((todo)=>todo.id === id ? updatedTodo : todo);
                const localTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localStorageService"].apiToLocalStorage(updatedTodos, sphereId);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localStorageService"].saveTodos(sphereId, localTodos);
                // Триггер для обновления статистики в dashboard
                window.dispatchEvent(new Event('taskUpdated'));
                return updatedTodo;
            } else {
                const updatedTodo = {
                    ...todos.find((t)=>t.id === id),
                    ...updates,
                    updated_at: new Date().toISOString()
                };
                setTodos((prev)=>prev.map((todo)=>todo.id === id ? updatedTodo : todo));
                const updatedTodos = todos.map((todo)=>todo.id === id ? updatedTodo : todo);
                const localTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localStorageService"].apiToLocalStorage(updatedTodos, sphereId);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localStorageService"].saveTodos(sphereId, localTodos);
                // Триггер для обновления статистики в dashboard
                window.dispatchEvent(new Event('taskUpdated'));
                return updatedTodo;
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to update todo';
            setError(errorMessage);
            throw err;
        }
    }, [
        sphereId,
        useApi,
        todos
    ]);
    // Удаление задачи
    const deleteTodo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        try {
            if (useApi) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].deleteTodo(id);
                setTodos((prev)=>prev.filter((todo)=>todo.id !== id));
                // Синхронизация с localStorage
                const updatedTodos = todos.filter((todo)=>todo.id !== id);
                const localTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localStorageService"].apiToLocalStorage(updatedTodos, sphereId);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localStorageService"].saveTodos(sphereId, localTodos);
                // Триггер для обновления статистики в dashboard
                window.dispatchEvent(new Event('taskUpdated'));
            } else {
                setTodos((prev)=>prev.filter((todo)=>todo.id !== id));
                const updatedTodos = todos.filter((todo)=>todo.id !== id);
                const localTodos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localStorageService"].apiToLocalStorage(updatedTodos, sphereId);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localStorageService"].saveTodos(sphereId, localTodos);
                // Триггер для обновления статистики в dashboard
                window.dispatchEvent(new Event('taskUpdated'));
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to delete todo';
            setError(errorMessage);
            throw err;
        }
    }, [
        sphereId,
        useApi,
        todos
    ]);
    // Переключение статуса выполнения
    const toggleTodo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        const todo = todos.find((t)=>t.id === id);
        if (!todo) return;
        return updateTodo(id, {
            completed: !todo.completed
        });
    }, [
        todos,
        updateTodo
    ]);
    // Инициализация при монтировании
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadTodos();
    }, [
        loadTodos
    ]);
    // Слушатель событий localStorage для совместимости
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleStorageChange = ()=>{
            if (!useApi) {
                loadTodos();
            }
        };
        window.addEventListener('taskUpdated', handleStorageChange);
        window.addEventListener('storage', handleStorageChange);
        return ()=>{
            window.removeEventListener('taskUpdated', handleStorageChange);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [
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
}),
"[project]/src/app/areas/4/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinancesSphere
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTodos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTodos.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const financesSphereConfig = {
    title: "Финансы",
    icon: "💰",
    accentColor: "#8b5cf6"
};
function FinancesSphere() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [newMainTaskDescription, setNewMainTaskDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [newSubTaskDescription, setNewSubTaskDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [mainTasksList, setMainTasksList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Используем наш новый хук с API для сферы 4 (Финансы)
    const { todos, loading, error, createTodo, updateTodo, deleteTodo, toggleTodo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTodos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTodos"])({
        sphereId: 4,
        useApi: true
    });
    // Обновляем mainTasksList при изменении todos из API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const convertedTasks = todos.map((todo)=>({
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
                areSubtasksVisible: false
            }));
        setMainTasksList(convertedTasks);
    }, [
        todos
    ]);
    const createMainTask = async ()=>{
        if (newMainTaskDescription.trim()) {
            try {
                await createTodo({
                    title: newMainTaskDescription,
                    description: newSubTaskDescription.trim() || undefined,
                    completed: false
                });
                setNewMainTaskDescription("");
                setNewSubTaskDescription("");
            } catch (error) {
                console.error('Failed to create task:', error);
            }
        }
    };
    const createSubTask = (parentTaskId)=>{
        if (newSubTaskDescription.trim()) {
            setMainTasksList((prevTasks)=>prevTasks.map((task)=>task.id === parentTaskId ? {
                        ...task,
                        subtasks: [
                            ...task.subtasks,
                            {
                                id: Date.now(),
                                description: newSubTaskDescription,
                                isCompleted: false
                            }
                        ],
                        areSubtasksVisible: true
                    } : task));
            setNewSubTaskDescription("");
        }
    };
    const toggleMainTaskCompletion = async (taskId)=>{
        try {
            await toggleTodo(taskId);
        } catch (error) {
            console.error('Failed to toggle task:', error);
        }
    };
    const toggleSubTaskCompletion = (parentTaskId, subTaskId)=>{
        setMainTasksList((prevTasks)=>prevTasks.map((task)=>task.id === parentTaskId ? {
                    ...task,
                    subtasks: task.subtasks.map((subTask)=>subTask.id === subTaskId ? {
                            ...subTask,
                            isCompleted: !subTask.isCompleted
                        } : subTask)
                } : task));
    };
    const toggleSubtasksVisibility = (taskId)=>{
        setMainTasksList((prevTasks)=>prevTasks.map((task)=>task.id === taskId ? {
                    ...task,
                    areSubtasksVisible: !task.areSubtasksVisible
                } : task));
    };
    const removeMainTask = async (taskId)=>{
        try {
            await deleteTodo(taskId);
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    };
    const removeSubTask = (parentTaskId, subTaskId)=>{
        setMainTasksList((prevTasks)=>prevTasks.map((task)=>task.id === parentTaskId ? {
                    ...task,
                    subtasks: task.subtasks.filter((subTask)=>subTask.id !== subTaskId)
                } : task));
    };
    const moveTask = (dragIndex, dropIndex)=>{
        if (dragIndex === dropIndex) return;
        setMainTasksList((prevTasks)=>{
            const newTasks = [
                ...prevTasks
            ];
            const draggedTask = newTasks[dragIndex];
            newTasks.splice(dragIndex, 1);
            newTasks.splice(dropIndex, 0, draggedTask);
            return newTasks;
        });
    };
    const handleDragStart = (e, index)=>{
        e.dataTransfer.setData("text/plain", index.toString());
        e.dataTransfer.effectAllowed = "move";
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };
    const handleDrop = (e, dropIndex)=>{
        e.preventDefault();
        const dragIndex = Number(e.dataTransfer.getData("text/plain"));
        if (!Number.isFinite(dragIndex)) return;
        moveTask(dragIndex, dropIndex);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #0f172a 0%, #000 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Загрузка..."
            }, void 0, false, {
                fileName: "[project]/src/app/areas/4/page.tsx",
                lineNumber: 193,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/areas/4/page.tsx",
            lineNumber: 185,
            columnNumber: 13
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #0f172a 0%, #000 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    "Ошибка: ",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/areas/4/page.tsx",
                lineNumber: 208,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/areas/4/page.tsx",
            lineNumber: 200,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sphere-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-aurora"
            }, void 0, false, {
                fileName: "[project]/src/app/areas/4/page.tsx",
                lineNumber: 215,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header-simple",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "back-btn",
                        onClick: ()=>router.back(),
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/src/app/areas/4/page.tsx",
                        lineNumber: 217,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-compact",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-icon",
                                children: financesSphereConfig.icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/areas/4/page.tsx",
                                lineNumber: 221,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: financesSphereConfig.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/areas/4/page.tsx",
                                lineNumber: 222,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/areas/4/page.tsx",
                        lineNumber: 220,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/areas/4/page.tsx",
                lineNumber: 216,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "main-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tasks-container",
                        children: mainTasksList.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "empty-state",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Создай первую задачу для финансов"
                            }, void 0, false, {
                                fileName: "[project]/src/app/areas/4/page.tsx",
                                lineNumber: 230,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/areas/4/page.tsx",
                            lineNumber: 229,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tasks-scrollable",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "tasks-list",
                                children: mainTasksList.map((task, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "task-item",
                                        draggable: true,
                                        onDragStart: (e)=>handleDragStart(e, index),
                                        onDragOver: handleDragOver,
                                        onDrop: (e)=>handleDrop(e, index),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "task-main",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "task-checkbox",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: task.isCompleted,
                                                                onChange: ()=>toggleMainTaskCompletion(task.id)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/areas/4/page.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "custom-checkbox"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/areas/4/page.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `task-text ${task.isCompleted ? "done" : ""}`,
                                                                children: [
                                                                    task.description,
                                                                    task.subtasks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                        fileName: "[project]/src/app/areas/4/page.tsx",
                                                                        lineNumber: 261,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/areas/4/page.tsx",
                                                                lineNumber: 254,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/areas/4/page.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "task-actions",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "subtasks-toggle",
                                                                onClick: ()=>toggleSubtasksVisibility(task.id),
                                                                children: task.areSubtasksVisible ? "−" : "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/areas/4/page.tsx",
                                                                lineNumber: 275,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "delete-btn",
                                                                onClick: ()=>removeMainTask(task.id),
                                                                children: "×"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/areas/4/page.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/areas/4/page.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/areas/4/page.tsx",
                                                lineNumber: 244,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `subtasks-content ${task.areSubtasksVisible ? "expanded" : ""}`,
                                                children: [
                                                    task.subtasks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "subtasks-list",
                                                        children: task.subtasks.map((subTask)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "subtask-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "subtask-checkbox",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: subTask.isCompleted,
                                                                                onChange: ()=>toggleSubTaskCompletion(task.id, subTask.id)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/areas/4/page.tsx",
                                                                                lineNumber: 306,
                                                                                columnNumber: 65
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "custom-subcheckbox"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/areas/4/page.tsx",
                                                                                lineNumber: 318,
                                                                                columnNumber: 65
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `subtask-text ${subTask.isCompleted ? "done" : ""}`,
                                                                                children: subTask.description
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/areas/4/page.tsx",
                                                                                lineNumber: 319,
                                                                                columnNumber: 65
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/areas/4/page.tsx",
                                                                        lineNumber: 305,
                                                                        columnNumber: 61
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "delete-sub-btn",
                                                                        onClick: ()=>removeSubTask(task.id, subTask.id),
                                                                        children: "×"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/areas/4/page.tsx",
                                                                        lineNumber: 329,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                ]
                                                            }, subTask.id, true, {
                                                                fileName: "[project]/src/app/areas/4/page.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 57
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/areas/4/page.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "add-subtask-section",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "subtask-input",
                                                                value: newSubTaskDescription,
                                                                onChange: (e)=>setNewSubTaskDescription(e.target.value),
                                                                placeholder: "Подзадача...",
                                                                onKeyDown: (e)=>e.key === "Enter" && createSubTask(task.id)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/areas/4/page.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "add-sub-btn",
                                                                onClick: ()=>createSubTask(task.id),
                                                                children: "Добавить"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/areas/4/page.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/areas/4/page.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/areas/4/page.tsx",
                                                lineNumber: 293,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, task.id, true, {
                                        fileName: "[project]/src/app/areas/4/page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/areas/4/page.tsx",
                                lineNumber: 234,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/areas/4/page.tsx",
                            lineNumber: 233,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/areas/4/page.tsx",
                        lineNumber: 227,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "add-task-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "task-input",
                                value: newMainTaskDescription,
                                onChange: (e)=>setNewMainTaskDescription(e.target.value),
                                placeholder: "Например: Создать бюджет на месяц",
                                onKeyDown: (e)=>e.key === "Enter" && createMainTask()
                            }, void 0, false, {
                                fileName: "[project]/src/app/areas/4/page.tsx",
                                lineNumber: 378,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "add-btn",
                                onClick: createMainTask,
                                children: "Добавить"
                            }, void 0, false, {
                                fileName: "[project]/src/app/areas/4/page.tsx",
                                lineNumber: 387,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/areas/4/page.tsx",
                        lineNumber: 377,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/areas/4/page.tsx",
                lineNumber: 226,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/areas/4/page.tsx",
        lineNumber: 214,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_35fc82e5._.js.map