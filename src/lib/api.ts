const API_BASE_URL = 'http://127.0.0.1:8002/api';

export interface Todo {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    created_at: string;
    updated_at: string;
}

export interface CreateTodoRequest {
    title: string;
    description?: string;
    completed?: boolean;
}

export interface UpdateTodoRequest {
    title?: string;
    description?: string;
    completed?: boolean;
}

class ApiService {
    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        const url = `${API_BASE_URL}${endpoint}`;
        
        const config: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        };

        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`API Error: ${response.status} - ${errorText}`);
            }
            
            // Для DELETE запросов с 204 статусом возвращаем null
            if (response.status === 204) {
                return null as T;
            }
            
            return await response.json();
        } catch (error) {
            console.error('API Request failed:', error);
            throw error;
        }
    }

    // Получить все задачи
    async getTodos(sphereId?: number): Promise<Todo[]> {
        try {
            const todos = await this.request<Todo[]>('/todos');
            
            // Если указан sphereId, фильтруем задачи по сфере
            if (sphereId) {
                // В реальном приложении здесь была бы фильтрация по sphereId
                // Пока возвращаем все задачи для демонстрации
                return todos;
            }
            
            return todos;
        } catch (error) {
            console.error('Failed to fetch todos:', error);
            // В случае ошибки API возвращаем пустой массив
            return [];
        }
    }

    // Создать задачу
    async createTodo(todo: CreateTodoRequest): Promise<Todo> {
        return this.request<Todo>('/todos', {
            method: 'POST',
            body: JSON.stringify(todo),
        });
    }

    // Обновить задачу
    async updateTodo(id: number, updates: UpdateTodoRequest): Promise<Todo> {
        return this.request<Todo>(`/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updates),
        });
    }

    // Удалить задачу
    async deleteTodo(id: number): Promise<void> {
        return this.request<void>(`/todos/${id}`, {
            method: 'DELETE',
        });
    }

    // Получить одну задачу
    async getTodo(id: number): Promise<Todo> {
        return this.request<Todo>(`/todos/${id}`);
    }
}

export const apiService = new ApiService();

// Утилиты для работы с localStorage как fallback
export const localStorageService = {
    getTodos: (sphereId: number): any[] => {
        if (typeof window === 'undefined') return [];
        const tasks = localStorage.getItem(`sphere_${sphereId}_tasks`);
        if (!tasks) return [];
        try {
            return JSON.parse(tasks);
        } catch {
            return [];
        }
    },

    saveTodos: (sphereId: number, todos: any[]): void => {
        if (typeof window === 'undefined') return;
        localStorage.setItem(`sphere_${sphereId}_tasks`, JSON.stringify(todos));
        // Триггер для обновления других компонентов
        window.dispatchEvent(new Event('taskUpdated'));
    },

    // Конвертация между форматами API и localStorage
    apiToLocalStorage: (apiTodos: Todo[], sphereId: number): any[] => {
        return apiTodos.map(todo => ({
            id: todo.id.toString(),
            description: todo.title,
            isCompleted: todo.completed,
            subtasks: todo.description ? [{
                id: `sub-${todo.id}`,
                description: todo.description,
                isCompleted: todo.completed
            }] : []
        }));
    },

    localStorageToApi: (localTodos: any[]): CreateTodoRequest[] => {
        return localTodos.map(todo => ({
            title: todo.description,
            description: todo.subtasks?.[0]?.description || '',
            completed: todo.isCompleted
        }));
    }
};
