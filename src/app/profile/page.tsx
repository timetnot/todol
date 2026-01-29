"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

const lifeSpheres = [
    { id: 1, title: "Отношения", icon: "💕", color: "#ec4899", subtitle: "Тепло и забота" },
    { id: 2, title: "Семья", icon: "👨‍👩‍👧", color: "#10b981", subtitle: "Семейное счастье" },
    { id: 3, title: "Карьера", icon: "💼", color: "#f59e0b", subtitle: "Профессиональный рост" },
    { id: 4, title: "Финансы", icon: "💰", color: "#8b5cf6", subtitle: "Финансовая свобода" },
    { id: 5, title: "Питание", icon: "🥗", color: "#f97316", subtitle: "Здоровое питание" },
    { id: 6, title: "Спорт", icon: "🏋️", color: "#ef4444", subtitle: "Физическая форма" },
    { id: 7, title: "Здоровье", icon: "🩺", color: "#3b82f6", subtitle: "Полные силы" },
    { id: 8, title: "Отдых", icon: "😌", color: "#06b6d4", subtitle: "Восстановление сил" },
];

export default function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bio: ''
    });
    const [taskStats, setTaskStats] = useState({
        totalTasks: 0,
        completedTasks: 0,
        totalSubtasks: 0,
        completedSubtasks: 0,
        sphereStats: {} as any
    });
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { user, logout, isAuthenticated, token } = useAuth();

    // Загружаем статистику задач из API
    const loadTaskStats = async () => {
        if (!token) return;
        
        try {
            const response = await fetch('http://localhost:8000/api.php/todos', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            
            if (response.ok) {
                const todos = await response.json();
                
                // Считаем статистику для каждой сферы
                const stats = {
                    totalTasks: 0,
                    completedTasks: 0,
                    totalSubtasks: 0,
                    completedSubtasks: 0,
                    sphereStats: {} as any
                };
                
                // Инициализируем все сферы нулевыми значениями
                lifeSpheres.forEach(sphere => {
                    stats.sphereStats[sphere.id] = { total: 0, completed: 0, percentage: 0 };
                });
                
                // Считаем задачи по сферам
                todos.forEach((todo: any) => {
                    const sphereId = todo.sphere_id || 1;
                    if (stats.sphereStats[sphereId]) {
                        stats.sphereStats[sphereId].total++;
                        if (todo.completed) {
                            stats.sphereStats[sphereId].completed++;
                        }
                    }
                    
                    stats.totalTasks++;
                    if (todo.completed) {
                        stats.completedTasks++;
                    }
                    
                    // Считаем подзадачи (description как подзадача)
                    if (todo.description) {
                        stats.totalSubtasks++;
                        if (todo.completed) {
                            stats.completedSubtasks++;
                        }
                    }
                });
                
                // Вычисляем проценты
                Object.keys(stats.sphereStats).forEach(sphereId => {
                    const sphere = stats.sphereStats[sphereId];
                    sphere.percentage = sphere.total > 0 ? Math.round((sphere.completed / sphere.total) * 100) : 0;
                });
                
                setTaskStats(stats);
            }
        } catch (error) {
            console.error('Failed to load task stats:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!isAuthenticated || !user) {
            router.push('/login');
            return;
        }
        
        setFormData({
            name: user.name || '',
            email: user.email || '',
            bio: user.bio || ''
        });
        
        loadTaskStats();
    }, [isAuthenticated, user, router]);

    useEffect(() => {
        if (!isAuthenticated || !user) {
            router.push('/login');
            return;
        }
        
        setFormData({
            name: user.name || '',
            email: user.email || '',
            bio: user.bio || ''
        });
        
        loadTaskStats();
        
        // Добавляем слушатель для обновления статистики в реальном времени
        const handleStorageChange = () => {
            loadTaskStats();
        };
        
        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('taskUpdated', handleStorageChange);
        
        // Также добавляем периодическое обновление
        const interval = setInterval(loadTaskStats, 5000);
        
        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('taskUpdated', handleStorageChange);
            clearInterval(interval);
        };
    }, [isAuthenticated, user, token, router]);

    const handleSave = () => {
        // В реальном приложении здесь был бы запрос к API для обновления профиля
        // Пока просто обновляем локальное состояние
        setIsEditing(false);
    };

    const handleLogout = async () => {
        await logout();
        router.push('/login');
    };

    // Показываем загрузку, если проверяем авторизацию или загружаем статистику
    if (!isAuthenticated || !user || loading) {
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

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(180deg, #0f172a 0%, #000 100%)', 
            padding: '2rem',
            position: 'relative'
        }}>

            <div style={{ 
                position: 'fixed', 
                inset: 0, 
                pointerEvents: 'none', 
                zIndex: 0 
            }}>
                {Array.from({ length: 30 }, (_, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            width: '3px',
                            height: '3px',
                            opacity: 0.3,
                            animation: `fall-${i} ${10 + (i % 3)}s linear infinite`,
                            top: `${-10 - (i % 2) * 5}px`,
                            left: `${10 + (i * 3) % 85}%`,
                            background: ['#34c759', '#0ea5e9', '#f97316', '#a855f7', '#facc15', '#22c55e', '#ec4899', '#ef4444'][i % 8],
                            animationDelay: `${i * 0.3}s`
                        }}
                    />
                ))}
            </div>


            <div style={{ 
                position: 'relative', 
                zIndex: 10, 
                maxWidth: '600px', 
                margin: '0 auto' 
            }}>

                <div style={{ 
                    textAlign: 'center', 
                    marginBottom: '3rem' 
                }}>
                    <h1 style={{ 
                        fontSize: '2.5rem', 
                        fontWeight: 700, 
                        color: '#ffffff', 
                        marginBottom: '0.5rem',
                        background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a78bfa 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Профиль
                    </h1>
                    <p style={{ 
                        fontSize: '1.1rem', 
                        color: '#94a3b8', 
                        margin: 0,
                        fontWeight: 400
                    }}>
                        Управление вашим аккаунтом
                    </p>
                </div>


                <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '2.5rem'
                }}>
                    {isEditing ? (
                        <div>
                            {/* Аватар */}
                            <div style={{ 
                                textAlign: 'center', 
                                marginBottom: '2rem' 
                            }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1rem',
                                    fontSize: '2rem'
                                }}>
                                    👤
                                </div>
                            </div>


                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ marginBottom: '1.25rem' }}>
                                    <label style={{ 
                                        display: 'block', 
                                        color: '#e2e8f0', 
                                        fontWeight: 500, 
                                        marginBottom: '0.5rem',
                                        fontSize: '0.9rem'
                                    }}>
                                        Имя
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem 1rem',
                                            background: 'rgba(255, 255, 255, 0.08)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            borderRadius: '10px',
                                            color: '#ffffff',
                                            fontSize: '0.9rem',
                                            transition: 'all 0.3s ease',
                                            outline: 'none',
                                            boxSizing: 'border-box',
                                            display: 'block'
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                                            e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                            e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                                        }}
                                    />
                                </div>
                                
                                <div style={{ marginBottom: '1.25rem' }}>
                                    <label style={{ 
                                        display: 'block', 
                                        color: '#e2e8f0', 
                                        fontWeight: 500, 
                                        marginBottom: '0.5rem',
                                        fontSize: '0.9rem'
                                    }}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem 1rem',
                                            background: 'rgba(255, 255, 255, 0.08)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            borderRadius: '10px',
                                            color: '#ffffff',
                                            fontSize: '0.9rem',
                                            transition: 'all 0.3s ease',
                                            outline: 'none',
                                            boxSizing: 'border-box',
                                            display: 'block'
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                                            e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                            e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                                        }}
                                    />
                                </div>
                                
                                <div style={{ marginBottom: '1.25rem' }}>
                                    <label style={{ 
                                        display: 'block', 
                                        color: '#e2e8f0', 
                                        fontWeight: 500, 
                                        marginBottom: '0.5rem',
                                        fontSize: '0.9rem'
                                    }}>
                                        О себе
                                    </label>
                                    <textarea
                                        value={formData.bio}
                                        onChange={(e) => setFormData({...formData, bio: e.target.value})}
                                        rows={4}
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem 1rem',
                                            background: 'rgba(255, 255, 255, 0.08)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            borderRadius: '10px',
                                            color: '#ffffff',
                                            fontSize: '0.9rem',
                                            transition: 'all 0.3s ease',
                                            outline: 'none',
                                            boxSizing: 'border-box',
                                            display: 'block',
                                            resize: 'vertical'
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                                            e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                            e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                                        }}
                                    />
                                </div>
                            </div>


                            <div style={{ 
                                display: 'flex', 
                                gap: '1rem' 
                            }}>
                                <button
                                    onClick={handleSave}
                                    style={{
                                        flex: 1,
                                        padding: '0.875rem',
                                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                        border: 'none',
                                        borderRadius: '10px',
                                        color: '#ffffff',
                                        fontSize: '0.95rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 14px rgba(99, 102, 241, 0.3)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(99, 102, 241, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(99, 102, 241, 0.3)';
                                    }}
                                >
                                    Сохранить
                                </button>
                                <button
                                    onClick={() => setIsEditing(false)}
                                    style={{
                                        flex: 1,
                                        padding: '0.875rem',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: '10px',
                                        color: '#ffffff',
                                        fontSize: '0.95rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    Отмена
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>

                            <div style={{ 
                                textAlign: 'center', 
                                marginBottom: '2rem' 
                            }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1rem',
                                    fontSize: '2rem'
                                }}>
                                    👤
                                </div>
                                <h2 style={{ 
                                    fontSize: '1.5rem', 
                                    fontWeight: 600, 
                                    color: '#ffffff', 
                                    marginBottom: '0.5rem'
                                }}>
                                    {user.name}
                                </h2>
                                <p style={{ 
                                    fontSize: '0.95rem', 
                                    color: '#94a3b8', 
                                    margin: 0
                                }}>
                                    {user.email}
                                </p>
                            </div>

                            {/* Блок с прогрессом задач */}
                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ 
                                    marginBottom: '1.5rem',
                                    padding: '1.5rem',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255, 255, 255, 0.05)'
                                }}>
                                    <div style={{ 
                                        fontSize: '0.85rem', 
                                        color: '#64748b', 
                                        marginBottom: '1rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        fontWeight: 600
                                    }}>
                                        Общий прогресс
                                    </div>
                                    
                                    {/* Общая статистика */}
                                    <div style={{ 
                                        display: 'grid', 
                                        gridTemplateColumns: 'repeat(2, 1fr)', 
                                        gap: '1rem',
                                        marginBottom: '1.5rem'
                                    }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{ 
                                                fontSize: '1.8rem', 
                                                fontWeight: 700, 
                                                color: '#ffffff',
                                                marginBottom: '0.25rem'
                                            }}>
                                                {taskStats.totalTasks}
                                            </div>
                                            <div style={{ 
                                                fontSize: '0.85rem', 
                                                color: '#94a3b8' 
                                            }}>
                                                Всего задач
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{ 
                                                fontSize: '1.8rem', 
                                                fontWeight: 700, 
                                                color: '#22c55e',
                                                marginBottom: '0.25rem'
                                            }}>
                                                {taskStats.completedTasks}
                                            </div>
                                            <div style={{ 
                                                fontSize: '0.85rem', 
                                                color: '#94a3b8' 
                                            }}>
                                                Выполнено
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div style={{ marginBottom: '1rem' }}>
                                        <div style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'space-between',
                                            marginBottom: '0.5rem' 
                                        }}>
                                            <span style={{ 
                                                fontSize: '0.9rem', 
                                                color: '#e2e8f0',
                                                fontWeight: 500
                                            }}>
                                                Прогресс выполнения
                                            </span>
                                            <span style={{ 
                                                fontSize: '0.9rem', 
                                                fontWeight: 700, 
                                                color: '#22c55e'
                                            }}>
                                                {taskStats.totalTasks > 0 ? Math.round((taskStats.completedTasks / taskStats.totalTasks) * 100) : 0}%
                                            </span>
                                        </div>
                                        <div style={{ 
                                            height: '8px', 
                                            background: 'rgba(255, 255, 255, 0.1)', 
                                            borderRadius: '999px',
                                            overflow: 'hidden',
                                            position: 'relative'
                                        }}>
                                            <div
                                                style={{
                                                    height: '100%',
                                                    borderRadius: 'inherit',
                                                    background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)',
                                                    width: `${taskStats.totalTasks > 0 ? (taskStats.completedTasks / taskStats.totalTasks) * 100 : 0}%`,
                                                    transition: 'width 1s cubic-bezier(0.23, 1, 0.32, 1)',
                                                    boxShadow: '0 0 15px rgba(34, 197, 94, 0.3)',
                                                    position: 'relative'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div style={{ 
                                    padding: '1.5rem',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255, 255, 255, 0.05)'
                                }}>
                                    <div style={{ 
                                        fontSize: '0.85rem', 
                                        color: '#64748b', 
                                        marginBottom: '1rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        fontWeight: 600
                                    }}>
                                        Прогресс по сферам
                                    </div>
                                    
                                    <div style={{ 
                                        display: 'grid', 
                                        gridTemplateColumns: 'repeat(2, 1fr)', 
                                        gap: '1rem'
                                    }}>
                                        {lifeSpheres.map((sphere) => {
                                            const stats = taskStats.sphereStats[sphere.id] || { total: 0, completed: 0, percentage: 0 };
                                            return (
                                                <div key={sphere.id} style={{
                                                    padding: '1rem',
                                                    background: 'rgba(255, 255, 255, 0.05)',
                                                    borderRadius: '8px',
                                                    border: '1px solid rgba(255, 255, 255, 0.08)'
                                                }}>
                                                    <div style={{ 
                                                        display: 'flex', 
                                                        alignItems: 'center', 
                                                        justifyContent: 'space-between',
                                                        marginBottom: '0.75rem' 
                                                    }}>
                                                        <div style={{ 
                                                            display: 'flex', 
                                                            alignItems: 'center', 
                                                            gap: '0.5rem'
                                                        }}>
                                                            <span style={{ 
                                                                fontSize: '1.2rem' 
                                                            }}>
                                                                {sphere.icon}
                                                            </span>
                                                            <span style={{ 
                                                                fontSize: '0.85rem', 
                                                                color: '#e2e8f0',
                                                                fontWeight: 500
                                                            }}>
                                                                {sphere.title}
                                                            </span>
                                                        </div>
                                                        <span style={{ 
                                                            fontSize: '0.8rem', 
                                                            fontWeight: 700, 
                                                            color: sphere.color
                                                        }}>
                                                            {stats.percentage}%
                                                        </span>
                                                    </div>
                                                    <div style={{ 
                                                        height: '4px', 
                                                        background: 'rgba(255, 255, 255, 0.1)', 
                                                        borderRadius: '999px',
                                                        overflow: 'hidden'
                                                    }}>
                                                        <div
                                                            style={{
                                                                height: '100%',
                                                                borderRadius: 'inherit',
                                                                background: sphere.color,
                                                                width: `${stats.percentage}%`,
                                                                transition: 'width 1s cubic-bezier(0.23, 1, 0.32, 1)'
                                                            }}
                                                        />
                                                    </div>
                                                    <div style={{ 
                                                        fontSize: '0.75rem', 
                                                        color: '#64748b', 
                                                        marginTop: '0.5rem' 
                                                    }}>
                                                        {stats.completed} из {stats.total} задач
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Кнопки действий */}
                            <div style={{ 
                                display: 'flex', 
                                gap: '1rem',
                                flexDirection: 'column'
                            }}>
                                <button
                                    onClick={() => router.push('/dashboard')}
                                    style={{
                                        width: '100%',
                                        padding: '0.875rem',
                                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                        border: 'none',
                                        borderRadius: '10px',
                                        color: '#ffffff',
                                        fontSize: '0.95rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 14px rgba(99, 102, 241, 0.3)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(99, 102, 241, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(99, 102, 241, 0.3)';
                                    }}
                                >
                                    📊 Перейти к дашборду
                                </button>
                                
                                <button
                                    onClick={() => setIsEditing(true)}
                                    style={{
                                        width: '100%',
                                        padding: '0.875rem',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: '10px',
                                        color: '#ffffff',
                                        fontSize: '0.95rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    ✏️ Редактировать профиль
                                </button>
                                
                                <button
                                    onClick={handleLogout}
                                    style={{
                                        width: '100%',
                                        padding: '0.875rem',
                                        background: 'rgba(239, 68, 68, 0.1)',
                                        border: '1px solid rgba(239, 68, 68, 0.3)',
                                        borderRadius: '10px',
                                        color: '#ef4444',
                                        fontSize: '0.95rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
                                        e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
                                        e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
                                    }}
                                >
                                    🚪 Выйти из аккаунта
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>


            <style jsx>{`
                ${Array.from({ length: 30 }, (_, i) => `
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')}
            `}</style>
        </div>
    );
}
