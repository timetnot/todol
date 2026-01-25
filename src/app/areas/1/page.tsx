"use client";

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useTodos } from "@/hooks/useTodos";
import "../../../styles/relations.css";

const relationsSphereConfig = {
    title: "Отношения",
    icon: "💕",
    accentColor: "#ec4899"
} as const;

type SubTaskItem = {
    id: number;
    description: string;
    isCompleted: boolean
};

type MainTask = {
    id: number;
    description: string;
    isCompleted: boolean;
    subtasks: SubTaskItem[];
    areSubtasksVisible: boolean;
};

export default function RelationsSphere() {
    const router = useRouter();
    const [newMainTaskDescription, setNewMainTaskDescription] = useState("");
    const [newSubTaskDescription, setNewSubTaskDescription] = useState("");
    const [expandedTasks, setExpandedTasks] = useState<Set<number>>(new Set());
    
    // Используем наш новый хук с API
    const { todos, loading, error, createTodo, updateTodo, deleteTodo, toggleTodo } = useTodos({ 
        sphereId: 1, 
        useApi: true 
    });

    // Конвертация API формата в формат компонента
    const mainTasksList: MainTask[] = todos.map(todo => ({
        id: todo.id,
        description: todo.title,
        isCompleted: todo.completed,
        subtasks: todo.description ? [{
            id: todo.id + 1000, // уникальный ID для подзадачи
            description: todo.description,
            isCompleted: todo.completed
        }] : [],
        areSubtasksVisible: expandedTasks.has(todo.id)
    }));

    const createMainTask = async () => {
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

    const createSubTask = async (parentTaskId: number) => {
        if (newSubTaskDescription.trim()) {
            try {
                const parentTodo = todos.find(t => t.id === parentTaskId);
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

    const toggleMainTaskCompletion = async (taskId: number) => {
        try {
            await toggleTodo(taskId);
        } catch (err) {
            console.error("Failed to toggle task:", err);
        }
    };

    const toggleSubTaskCompletion = async (parentTaskId: number, subTaskId: number) => {
        try {
            const parentTodo = todos.find(t => t.id === parentTaskId);
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

    const toggleSubtasksVisibility = (taskId: number) => {
        setExpandedTasks(prev => {
            const newSet = new Set(prev);
            if (newSet.has(taskId)) {
                newSet.delete(taskId);
            } else {
                newSet.add(taskId);
            }
            return newSet;
        });
    };

    const removeMainTask = async (taskId: number) => {
        try {
            await deleteTodo(taskId);
        } catch (err) {
            console.error("Failed to delete task:", err);
        }
    };

    const removeSubTask = async (parentTaskId: number, subTaskId: number) => {
        try {
            const parentTodo = todos.find(t => t.id === parentTaskId);
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

    const moveTask = (dragIndex: number, dropIndex: number) => {
        // Drag & drop можно реализовать позже с API
        if (dragIndex === dropIndex) return;
        console.log('Drag and drop not implemented with API yet');
    };

    const handleDragStart = (e: React.DragEvent, index: number) => {
        e.dataTransfer.setData('text/plain', index.toString());
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e: React.DragEvent, dropIndex: number) => {
        e.preventDefault();
        const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
        moveTask(dragIndex, dropIndex);
    };

    if (loading) {
        return (
            <div className="sphere-page">
                <div className="bg-aurora" />
                <header className="header-simple">
                    <button className="back-btn" onClick={() => router.back()}>
                        ←
                    </button>
                    <div className="hero-compact">
                        <div className="hero-icon">{relationsSphereConfig.icon}</div>
                        <h1>{relationsSphereConfig.title}</h1>
                    </div>
                </header>
                <main className="main-content">
                    <div className="loading-state">
                        <p>Загрузка задач...</p>
                    </div>
                </main>
            </div>
        );
    }

    if (error) {
        return (
            <div className="sphere-page">
                <div className="bg-aurora" />
                <header className="header-simple">
                    <button className="back-btn" onClick={() => router.back()}>
                        ←
                    </button>
                    <div className="hero-compact">
                        <div className="hero-icon">{relationsSphereConfig.icon}</div>
                        <h1>{relationsSphereConfig.title}</h1>
                    </div>
                </header>
                <main className="main-content">
                    <div className="error-state">
                        <p>Ошибка загрузки: {error}</p>
                        <button onClick={() => window.location.reload()}>
                            Попробовать снова
                        </button>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="sphere-page">
            <div className="bg-aurora" />
            <header className="header-simple">
                <button className="back-btn" onClick={() => router.back()}>
                    ←
                </button>
                <div className="hero-compact">
                    <div className="hero-icon">{relationsSphereConfig.icon}</div>
                    <h1>{relationsSphereConfig.title}</h1>
                </div>
            </header>

            <main className="main-content">
                <div className="tasks-container">
                    {mainTasksList.length === 0 ? (
                        <div className="empty-state">
                            <p>Создай первую задачу</p>
                        </div>
                    ) : (
                        <div className="tasks-scrollable">
                            <ul className="tasks-list">
                                {mainTasksList.map((task, index) => (
                                    <li 
                                        key={task.id} 
                                        className="task-item"
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, index)}
                                        onDragOver={handleDragOver}
                                        onDrop={(e) => handleDrop(e, index)}
                                    >
                                        <div className="task-main">
                                            <label className="task-checkbox">
                                                <input
                                                    type="checkbox"
                                                    checked={task.isCompleted}
                                                    onChange={() =>
                                                        toggleMainTaskCompletion(task.id)
                                                    }
                                                />
                                                <span className="custom-checkbox" />
                                                <span
                                                    className={`task-text ${
                                                        task.isCompleted ? "done" : ""
                                                    }`}
                                                >
                                                    {task.description}
                                                    {task.subtasks.length > 0 && (
                                                        <span
                                                            style={{
                                                                opacity: 0.7,
                                                                fontSize: "0.8em",
                                                                marginLeft: "0.5rem",
                                                                fontWeight: 500
                                                            }}
                                                        >
                                                            ({task.subtasks.length})
                                                        </span>
                                                    )}
                                                </span>
                                            </label>
                                            <div className="task-actions">
                                                <button
                                                    className="subtasks-toggle"
                                                    onClick={() =>
                                                        toggleSubtasksVisibility(task.id)
                                                    }
                                                >
                                                    {task.areSubtasksVisible ? "−" : "+"}
                                                </button>
                                                <button
                                                    className="delete-btn"
                                                    onClick={() =>
                                                        removeMainTask(task.id)
                                                    }
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            className={`subtasks-content ${
                                                task.areSubtasksVisible ? "expanded" : ""
                                            }`}
                                        >
                                            {task.subtasks.length > 0 && (
                                                <ul className="subtasks-list">
                                                    {task.subtasks.map(subTask => (
                                                        <li
                                                            key={subTask.id}
                                                            className="subtask-item"
                                                        >
                                                            <label className="subtask-checkbox">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={
                                                                        subTask.isCompleted
                                                                    }
                                                                    onChange={() =>
                                                                        toggleSubTaskCompletion(
                                                                            task.id,
                                                                            subTask.id
                                                                        )
                                                                    }
                                                                />
                                                                <span className="custom-subcheckbox" />
                                                                <span
                                                                    className={`subtask-text ${
                                                                        subTask.isCompleted
                                                                            ? "done"
                                                                            : ""
                                                                    }`}
                                                                >
                                                                    {subTask.description}
                                                                </span>
                                                            </label>
                                                            <button
                                                                className="delete-sub-btn"
                                                                onClick={() =>
                                                                    removeSubTask(
                                                                        task.id,
                                                                        subTask.id
                                                                    )
                                                                }
                                                            >
                                                                ×
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            <div className="add-subtask-section">
                                                <input
                                                    className="subtask-input"
                                                    value={newSubTaskDescription}
                                                    onChange={e =>
                                                        setNewSubTaskDescription(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Подзадача..."
                                                    onKeyDown={e =>
                                                        e.key === "Enter" &&
                                                        createSubTask(task.id)
                                                    }
                                                />
                                                <button
                                                    className="add-sub-btn"
                                                    onClick={() =>
                                                        createSubTask(task.id)
                                                    }
                                                >
                                                    Добавить
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="add-task-section">
                    <input
                        className="task-input"
                        value={newMainTaskDescription}
                        onChange={e =>
                            setNewMainTaskDescription(e.target.value)
                        }
                        placeholder="Например: Позвонить в обед"
                        onKeyDown={e => e.key === "Enter" && createMainTask()}
                    />
                    <button className="add-btn" onClick={createMainTask}>
                        Добавить
                    </button>
                </div>
            </main>
        </div>
    );
}