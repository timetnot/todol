"use client";

import { useState, useEffect, useCallback } from 'react';
import { apiService, Todo, CreateTodoRequest, UpdateTodoRequest, localStorageService } from '@/lib/api';

interface UseTodosOptions {
    sphereId: number;
    useApi?: boolean; // Использовать API или localStorage
}

export function useTodos({ sphereId, useApi = true }: UseTodosOptions) {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Загрузка задач
    const loadTodos = useCallback(async () => {
        setLoading(true);
        setError(null);
        
        try {
            if (useApi) {
                const apiTodos = await apiService.getTodos(sphereId);
                setTodos(apiTodos);
                
                // Синхронизация с localStorage для совместимости
                const localTodos = localStorageService.apiToLocalStorage(apiTodos, sphereId);
                localStorageService.saveTodos(sphereId, localTodos);
            } else {
                // Fallback на localStorage
                const localTodos = localStorageService.getTodos(sphereId);
                const apiTodos = localStorageService.localStorageToApi(localTodos);
                setTodos(apiTodos as Todo[]);
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to load todos';
            setError(errorMessage);
            
            // В случае ошибки используем localStorage как fallback
            if (useApi) {
                const localTodos = localStorageService.getTodos(sphereId);
                const apiTodos = localStorageService.localStorageToApi(localTodos);
                setTodos(apiTodos as Todo[]);
            }
        } finally {
            setLoading(false);
        }
    }, [sphereId, useApi]);

    // Создание задачи
    const createTodo = useCallback(async (todoData: CreateTodoRequest) => {
        try {
            if (useApi) {
                const newTodo = await apiService.createTodo(todoData);
                setTodos(prev => [newTodo, ...prev]);
                
                // Синхронизация с localStorage
                const localTodos = localStorageService.apiToLocalStorage([newTodo, ...todos], sphereId);
                localStorageService.saveTodos(sphereId, localTodos);
                
                return newTodo;
            } else {
                // Для localStorage используем существующую логику
                const newId = Date.now();
                const newTodo: Todo = {
                    id: newId,
                    ...todoData,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                };
                setTodos(prev => [newTodo, ...prev]);
                
                const localTodos = localStorageService.apiToLocalStorage([newTodo, ...todos], sphereId);
                localStorageService.saveTodos(sphereId, localTodos);
                
                return newTodo;
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to create todo';
            setError(errorMessage);
            throw err;
        }
    }, [sphereId, useApi, todos]);

    // Обновление задачи
    const updateTodo = useCallback(async (id: number, updates: UpdateTodoRequest) => {
        try {
            if (useApi) {
                const updatedTodo = await apiService.updateTodo(id, updates);
                setTodos(prev => prev.map(todo => 
                    todo.id === id ? updatedTodo : todo
                ));
                
                // Синхронизация с localStorage
                const updatedTodos = todos.map(todo => 
                    todo.id === id ? updatedTodo : todo
                );
                const localTodos = localStorageService.apiToLocalStorage(updatedTodos, sphereId);
                localStorageService.saveTodos(sphereId, localTodos);
                
                return updatedTodo;
            } else {
                const updatedTodo: Todo = {
                    ...todos.find(t => t.id === id)!,
                    ...updates,
                    updated_at: new Date().toISOString()
                };
                setTodos(prev => prev.map(todo => 
                    todo.id === id ? updatedTodo : todo
                ));
                
                const updatedTodos = todos.map(todo => 
                    todo.id === id ? updatedTodo : todo
                );
                const localTodos = localStorageService.apiToLocalStorage(updatedTodos, sphereId);
                localStorageService.saveTodos(sphereId, localTodos);
                
                return updatedTodo;
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to update todo';
            setError(errorMessage);
            throw err;
        }
    }, [sphereId, useApi, todos]);

    // Удаление задачи
    const deleteTodo = useCallback(async (id: number) => {
        try {
            if (useApi) {
                await apiService.deleteTodo(id);
                setTodos(prev => prev.filter(todo => todo.id !== id));
                
                // Синхронизация с localStorage
                const updatedTodos = todos.filter(todo => todo.id !== id);
                const localTodos = localStorageService.apiToLocalStorage(updatedTodos, sphereId);
                localStorageService.saveTodos(sphereId, localTodos);
            } else {
                setTodos(prev => prev.filter(todo => todo.id !== id));
                
                const updatedTodos = todos.filter(todo => todo.id !== id);
                const localTodos = localStorageService.apiToLocalStorage(updatedTodos, sphereId);
                localStorageService.saveTodos(sphereId, localTodos);
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to delete todo';
            setError(errorMessage);
            throw err;
        }
    }, [sphereId, useApi, todos]);

    // Переключение статуса выполнения
    const toggleTodo = useCallback(async (id: number) => {
        const todo = todos.find(t => t.id === id);
        if (!todo) return;
        
        return updateTodo(id, { completed: !todo.completed });
    }, [todos, updateTodo]);

    // Инициализация при монтировании
    useEffect(() => {
        loadTodos();
    }, [loadTodos]);

    // Слушатель событий localStorage для совместимости
    useEffect(() => {
        const handleStorageChange = () => {
            if (!useApi) {
                loadTodos();
            }
        };
        
        window.addEventListener('taskUpdated', handleStorageChange);
        window.addEventListener('storage', handleStorageChange);
        
        return () => {
            window.removeEventListener('taskUpdated', handleStorageChange);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [loadTodos, useApi]);

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
