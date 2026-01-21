"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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


interface Task {
    id: string;
    title: string;
    completed: boolean;
    subtasks?: Subtask[];
}

interface Subtask {
    id: string;
    title: string;
    completed: boolean;
}


const getTasksForSphere = (sphereId: number): Task[] => {
    if (typeof window === 'undefined') return [];
    
    const tasks = localStorage.getItem(`sphere_${sphereId}_tasks`);
    if (!tasks) return [];
    
    try {
        return JSON.parse(tasks);
    } catch {
        return [];
    }
};


const getTaskStats = (sphereId: number) => {
    const tasks = getTasksForSphere(sphereId);
    
    let completedTasks = 0;
    let totalTasks = 0;
    
    tasks.forEach(task => {
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

    return { completedTasks, totalTasks };
};


const generatePixels = () => {
    return Array.from({ length: 80 }, (_, i) => {
        const directions = [
            { xMove: 2, yMove: 1, rotate: 45 },
            { xMove: -2, yMove: 1, rotate: -45 },
            { xMove: 0, yMove: 1.5, rotate: 0 },
            { xMove: 1, yMove: 0.8, rotate: 22 },
            { xMove: -1, yMove: 0.8, rotate: -22 },
            { xMove: 3, yMove: 0.6, rotate: 60 },
            { xMove: -3, yMove: 0.6, rotate: -60 },
            { xMove: 0.5, yMove: 2, rotate: 15 },
            { xMove: -0.5, yMove: 2, rotate: -15 },
        ];
        
        const direction = directions[i % directions.length];
        
        return {
            id: i,
            width: 8,
            height: 8,
            top: -20 - (i % 4) * 10,
            left: 10 + (i * 2.2) % 80,
            animationDuration: 8 + (i % 5),
            animationDelay: i * 0.15,
            rotation: direction.rotate,
            xMove: direction.xMove,
            yMove: direction.yMove,
            color: ['#34c759', '#0ea5e9', '#f97316', '#a855f7', '#facc15', '#22c55e', '#ec4899', '#ef4444'][i % 8]
        };
    });
};

export default function Dashboard() {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const [pixels, setPixels] = useState(generatePixels());
    const [sphereStats, setSphereStats] = useState<{ [key: number]: { completedTasks: number; totalTasks: number } }>({});

    useEffect(() => {
        setIsClient(true);
        

        const stats: { [key: number]: { completedTasks: number; totalTasks: number } } = {};
        lifeSpheres.forEach(sphere => {
            stats[sphere.id] = getTaskStats(sphere.id);
        });
        setSphereStats(stats);
        

        const handleStorageChange = () => {
            const newStats: { [key: number]: { completedTasks: number; totalTasks: number } } = {};
            lifeSpheres.forEach(sphere => {
                newStats[sphere.id] = getTaskStats(sphere.id);
            });
            setSphereStats(newStats);
        };
        
        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('taskUpdated', handleStorageChange);
        
        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('taskUpdated', handleStorageChange);
        };
    }, []);

    const handleCardClick = (sphereId: number) => {
        router.push(`/areas/${sphereId}`);
    };

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(180deg, #0f172a 0%, #000 100%)', 
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>

            <div style={{ 
                position: 'fixed', 
                inset: 0, 
                pointerEvents: 'none', 
                zIndex: 0 
            }}>
                {pixels.map((pixel) => (
                    <div
                        key={pixel.id}
                        className="pixel"
                        style={{
                            position: 'absolute',
                            width: `${pixel.width}px`,
                            height: `${pixel.height}px`,
                            borderRadius: '0',
                            opacity: 0.8,
                            animation: `pixel-scatter-${pixel.id} ${pixel.animationDuration}s linear infinite`,
                            top: `${pixel.top}px`,
                            left: `${pixel.left}%`,
                            background: pixel.color,
                            animationDelay: `${pixel.animationDelay}s`,
                            imageRendering: 'pixelated',
                            transform: `rotate(${pixel.rotation}deg)`
                        }}
                    />
                ))}
            </div>


            <div style={{ 
                position: 'relative', 
                zIndex: 10, 
                textAlign: 'center', 
                marginBottom: '3rem' 
            }}>
                <h1 style={{ 
                    fontSize: '3.5rem', 
                    fontWeight: 900, 
                    color: '#ffffff', 
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a78bfa 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
                }}>
                    Сферы жизни
                </h1>
                <p style={{ 
                    fontSize: '1.3rem', 
                    color: '#94a3b8', 
                    maxWidth: '600px', 
                    margin: '0 auto',
                    fontWeight: 500
                }}>
                    Выберите сферу для развития и прокачайте свою жизнь
                </p>
            </div>


            <div style={{ 
                position: 'relative', 
                zIndex: 1, 
                maxWidth: '1400px', 
                margin: '0 auto' 
            }}>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    {lifeSpheres.map((sphere) => (
                        <div
                            key={sphere.id}
                            style={{
                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                                border: `2px solid ${sphere.color}20`,
                                borderRadius: '24px',
                                padding: '2rem',
                                cursor: 'pointer',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                backdropFilter: 'blur(20px)',
                                boxShadow: `0 8px 32px ${sphere.color}20`,
                                minHeight: '280px'
                            }}
                            onClick={() => handleCardClick(sphere.id)}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                                e.currentTarget.style.borderColor = sphere.color;
                                e.currentTarget.style.boxShadow = `0 20px 60px ${sphere.color}40, 0 0 0 1px ${sphere.color}30`;
                                e.currentTarget.style.background = `linear-gradient(135deg, ${sphere.color}20 0%, rgba(255, 255, 255, 0.1) 100%)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.borderColor = `${sphere.color}20`;
                                e.currentTarget.style.boxShadow = `0 8px 32px ${sphere.color}20`;
                                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)';
                            }}
                        >

                            <div style={{ 
                                fontSize: '4rem', 
                                marginBottom: '1.5rem',
                                filter: `drop-shadow(0 8px 16px ${sphere.color}40)`,
                                transition: 'transform 0.3s ease'
                            }}>
                                {sphere.icon}
                            </div>


                            <div style={{ flex: 1 }}>
                                <h3 style={{ 
                                    fontSize: '1.5rem', 
                                    fontWeight: 800, 
                                    color: '#ffffff', 
                                    marginBottom: '0.5rem',
                                    lineHeight: 1.2
                                }}>
                                    {sphere.title}
                                </h3>
                                <p style={{ 
                                    fontSize: '1rem', 
                                    color: '#cbd5e1', 
                                    lineHeight: 1.6,
                                    marginBottom: '1.5rem',
                                    fontWeight: 500
                                }}>
                                    {sphere.subtitle}
                                </p>
                            </div>


                            <div style={{ 
                                marginTop: 'auto', 
                                paddingTop: '1.5rem',
                                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <div style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'space-between',
                                    marginBottom: '0.5rem' 
                                }}>
                                    <span style={{ 
                                        fontSize: '0.9rem', 
                                        color: '#94a3b8',
                                        fontWeight: 500
                                    }}>
                                        Выполнено задач
                                    </span>
                                    <span style={{ 
                                        fontSize: '1rem', 
                                        fontWeight: 700, 
                                        color: sphere.color,
                                        textShadow: `0 2px 8px ${sphere.color}40`
                                    }}>
                                        {sphereStats[sphere.id]?.completedTasks || 0}/{sphereStats[sphere.id]?.totalTasks || 0}
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
                                            background: `linear-gradient(90deg, ${sphere.color}, ${sphere.color}80)`,
                                            width: `${sphereStats[sphere.id] ? (sphereStats[sphere.id].completedTasks / sphereStats[sphere.id].totalTasks) * 100 : 0}%`,
                                            transition: 'width 1.5s cubic-bezier(0.23, 1, 0.32, 1)',
                                            boxShadow: `0 0 15px ${sphere.color}60`,
                                            position: 'relative'
                                        }}
                                    />
                                </div>
                            </div>


                            <div style={{ 
                                position: 'absolute', 
                                top: '1.5rem', 
                                right: '1.5rem',
                                fontSize: '1.8rem',
                                fontWeight: 900,
                                color: sphere.color,
                                opacity: 0.8,
                                transition: 'all 0.3s ease'
                            }}>
                                →
                            </div>


                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: `radial-gradient(circle at 20% 20%, ${sphere.color}20 0%, transparent 60%)`,
                                borderRadius: 'inherit',
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                                pointerEvents: 'none'
                            }} />
                        </div>
                    ))}
                </div>
            </div>
            

            <style jsx>{`
                .pixel {
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    border-radius: 0;
                    opacity: 0.8;
                    image-rendering: pixelated;
                }
                
                ${pixels.map(pixel => `
                    @keyframes pixel-scatter-${pixel.id} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.8; 
                        }
                        90% { 
                            opacity: 0.8; 
                        }
                        100% { 
                            transform: translateX(${pixel.xMove * 100}vw) translateY(${pixel.yMove * 120}vh) rotate(${pixel.rotation + 360}deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')}
            `}</style>
        </div>
    );
}
