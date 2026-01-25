"use client";

import { useEffect, useState } from 'react';
import { apiService, localStorageService } from '@/lib/api';

interface TaskStats {
    completedTasks: number;
    totalTasks: number;
}

export function useTaskStats(sphereId: number, useApi: boolean = true) {
    const [stats, setStats] = useState<TaskStats>({ completedTasks: 0, totalTasks: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStats = async () => {
            setLoading(true);
            
            try {
                if (useApi) {
                    const todos = await apiService.getTodos(sphereId);
                    const completedTasks = todos.filter(todo => todo.completed).length;
                    const totalTasks = todos.length;
                    
                    setStats({ completedTasks, totalTasks });
                    
                    // Синхронизация с localStorage для совместимости
                    const localTodos = localStorageService.apiToLocalStorage(todos, sphereId);
                    localStorageService.saveTodos(sphereId, localTodos);
                } else {
                    // Fallback на localStorage
                    const localTodos = localStorageService.getTodos(sphereId);
                    
                    let completedTasks = 0;
                    let totalTasks = 0;
                    
                    localTodos.forEach(task => {
                        totalTasks++;
                        
                        if (task.subtasks && task.subtasks.length > 0) {
                            const completedSubtasks = task.subtasks.filter(st => st.completed).length;
                            if (completedSubtasks === task.subtasks.length) {
                                completedTasks++;
                            }
                        } else {
                            if (task.completed) {
                                completedTasks++;
                            }
                        }
                    });
                    
                    setStats({ completedTasks, totalTasks });
                }
            } catch (error) {
                console.error('Failed to load task stats:', error);
                // В случае ошибки используем localStorage как fallback
                const localTodos = localStorageService.getTodos(sphereId);
                
                let completedTasks = 0;
                let totalTasks = 0;
                
                localTodos.forEach(task => {
                    totalTasks++;
                    
                    if (task.subtasks && task.subtasks.length > 0) {
                        const completedSubtasks = task.subtasks.filter(st => st.completed).length;
                        if (completedSubtasks === task.subtasks.length) {
                            completedTasks++;
                        }
                    } else {
                        if (task.completed) {
                            completedTasks++;
                        }
                    }
                });
                
                setStats({ completedTasks, totalTasks });
            } finally {
                setLoading(false);
            }
        };

        loadStats();

        // Слушатели для обновления статистики
        const handleStorageChange = () => {
            loadStats();
        };

        window.addEventListener('taskUpdated', handleStorageChange);
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('taskUpdated', handleStorageChange);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [sphereId, useApi]);

    return { stats, loading };
}
