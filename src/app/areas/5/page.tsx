"use client";

import { useRouter } from "next/navigation";
import { type DragEvent, useState, useEffect } from "react";
import { useTodos } from "@/hooks/useTodos";
import "../../../styles/nutrition.css";

const nutritionSphereConfig = {
    title: "Питание",
    icon: "🥗",
    accentColor: "#f97316"
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

export default function NutritionSphere() {
    const router = useRouter();
    const [newMainTaskDescription, setNewMainTaskDescription] = useState("");
    const [newSubTaskDescription, setNewSubTaskDescription] = useState("");
    const [mainTasksList, setMainTasksList] = useState<MainTask[]>([]);
    
    // Используем наш новый хук с API для сферы 5 (Питание)
    const { todos, loading, error, createTodo, updateTodo, deleteTodo, toggleTodo } = useTodos({ 
        sphereId: 5, 
        useApi: true 
    });

    // Обновляем mainTasksList при изменении todos из API
    useEffect(() => {
        const convertedTasks: MainTask[] = todos.map(todo => ({
            id: todo.id,
            description: todo.title,
            isCompleted: todo.completed,
            subtasks: todo.description ? [{
                id: todo.id + 1000,
                description: todo.description,
                isCompleted: todo.completed
            }] : [],
            areSubtasksVisible: false
        }));
        setMainTasksList(convertedTasks);
    }, [todos]);

    const createMainTask = async () => {
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

    const createSubTask = (parentTaskId: number) => {
        if (newSubTaskDescription.trim()) {
            setMainTasksList(prevTasks =>
                prevTasks.map(task =>
                    task.id === parentTaskId
                        ? {
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
                        }
                        : task
                )
            );
            setNewSubTaskDescription("");
        }
    };

    const toggleMainTaskCompletion = async (taskId: number) => {
        try {
            await toggleTodo(taskId);
        } catch (error) {
            console.error('Failed to toggle task:', error);
        }
    };

    const toggleSubTaskCompletion = (parentTaskId: number, subTaskId: number) => {
        setMainTasksList(prevTasks =>
            prevTasks.map(task =>
                task.id === parentTaskId
                    ? {
                        ...task,
                        subtasks: task.subtasks.map(subTask =>
                            subTask.id === subTaskId
                                ? { ...subTask, isCompleted: !subTask.isCompleted }
                                : subTask
                        )
                    }
                    : task
            )
        );
    };

    const toggleSubtasksVisibility = (taskId: number) => {
        setMainTasksList(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId
                    ? { ...task, areSubtasksVisible: !task.areSubtasksVisible }
                    : task
            )
        );
    };

    const removeMainTask = async (taskId: number) => {
        try {
            await deleteTodo(taskId);
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    };

    const removeSubTask = (parentTaskId: number, subTaskId: number) => {
        setMainTasksList(prevTasks =>
            prevTasks.map(task =>
                task.id === parentTaskId
                    ? {
                        ...task,
                        subtasks: task.subtasks.filter(
                            subTask => subTask.id !== subTaskId
                        )
                    }
                    : task
            )
        );
    };

    const moveTask = (dragIndex: number, dropIndex: number) => {
        if (dragIndex === dropIndex) return;

        setMainTasksList(prevTasks => {
            const newTasks = [...prevTasks];
            const draggedTask = newTasks[dragIndex];
            newTasks.splice(dragIndex, 1);
            newTasks.splice(dropIndex, 0, draggedTask);
            return newTasks;
        });
    };

    const handleDragStart = (e: DragEvent<HTMLLIElement>, index: number) => {
        e.dataTransfer.setData("text/plain", index.toString());
        e.dataTransfer.effectAllowed = "move";
    };

    const handleDragOver = (e: DragEvent<HTMLLIElement>) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };

    const handleDrop = (e: DragEvent<HTMLLIElement>, dropIndex: number) => {
        e.preventDefault();
        const dragIndex = Number(e.dataTransfer.getData("text/plain"));
        if (!Number.isFinite(dragIndex)) return;
        moveTask(dragIndex, dropIndex);
    };

    if (loading) {
        return (
            <div style={{ 
                minHeight: '100vh', 
                background: 'linear-gradient(180deg, #0f172a 0%, #000 100%)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#ffffff'
            }}>
                <div>Загрузка...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ 
                minHeight: '100vh', 
                background: 'linear-gradient(180deg, #0f172a 0%, #000 100%)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#ffffff'
            }}>
                <div>Ошибка: {error}</div>
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
                    <div className="hero-icon">{nutritionSphereConfig.icon}</div>
                    <h1>{nutritionSphereConfig.title}</h1>
                </div>
            </header>

            <main className="main-content">
                <div className="tasks-container">
                    {mainTasksList.length === 0 ? (
                        <div className="empty-state">
                            <p>Создай первую задачу для питания</p>
                        </div>
                    ) : (
                        <div className="tasks-scrollable">
                            <ul className="tasks-list">
                                {mainTasksList.map((task, index) => (
                                    <li
                                        key={task.id}
                                        className="task-item"
                                        draggable
                                        onDragStart={e => handleDragStart(e, index)}
                                        onDragOver={handleDragOver}
                                        onDrop={e => handleDrop(e, index)}
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
                        placeholder="Например: Составить меню на неделю"
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
