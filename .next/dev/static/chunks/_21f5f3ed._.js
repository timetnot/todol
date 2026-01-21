(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const lifeSpheres = [
    {
        id: 1,
        title: "Отношения",
        icon: "💕",
        color: "#ec4899",
        subtitle: "Тепло и забота"
    },
    {
        id: 2,
        title: "Семья",
        icon: "👨‍👩‍👧",
        color: "#10b981",
        subtitle: "Семейное счастье"
    },
    {
        id: 3,
        title: "Карьера",
        icon: "💼",
        color: "#f59e0b",
        subtitle: "Профессиональный рост"
    },
    {
        id: 4,
        title: "Финансы",
        icon: "💰",
        color: "#8b5cf6",
        subtitle: "Финансовая свобода"
    },
    {
        id: 5,
        title: "Питание",
        icon: "🥗",
        color: "#f97316",
        subtitle: "Здоровое питание"
    },
    {
        id: 6,
        title: "Спорт",
        icon: "🏋️",
        color: "#ef4444",
        subtitle: "Физическая форма"
    },
    {
        id: 7,
        title: "Здоровье",
        icon: "🩺",
        color: "#3b82f6",
        subtitle: "Полные силы"
    },
    {
        id: 8,
        title: "Отдых",
        icon: "😌",
        color: "#06b6d4",
        subtitle: "Восстановление сил"
    }
];
const getTasksForSphere = (sphereId)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const tasks = localStorage.getItem(`sphere_${sphereId}_tasks`);
    if (!tasks) return [];
    try {
        return JSON.parse(tasks);
    } catch  {
        return [];
    }
};
const getTaskStats = (sphereId)=>{
    const tasks = getTasksForSphere(sphereId);
    let completedTasks = 0;
    let totalTasks = 0;
    tasks.forEach((task)=>{
        totalTasks++;
        // Если есть подзадачи, считаем их
        if (task.subtasks && task.subtasks.length > 0) {
            const completedSubtasks = task.subtasks.filter((st)=>st.completed).length;
            if (completedSubtasks === task.subtasks.length) {
                completedTasks++;
            }
        } else {
            // Если нет подзадач, считаем саму задачу
            if (task.completed) {
                completedTasks++;
            }
        }
    });
    return {
        completedTasks,
        totalTasks
    };
};
// Генерируем детерминированные пиксели, летающие вразброс
const generatePixels = ()=>{
    return Array.from({
        length: 80
    }, (_, i)=>{
        // Создаем разные направления движения
        const directions = [
            {
                xMove: 2,
                yMove: 1,
                rotate: 45
            },
            {
                xMove: -2,
                yMove: 1,
                rotate: -45
            },
            {
                xMove: 0,
                yMove: 1.5,
                rotate: 0
            },
            {
                xMove: 1,
                yMove: 0.8,
                rotate: 22
            },
            {
                xMove: -1,
                yMove: 0.8,
                rotate: -22
            },
            {
                xMove: 3,
                yMove: 0.6,
                rotate: 60
            },
            {
                xMove: -3,
                yMove: 0.6,
                rotate: -60
            },
            {
                xMove: 0.5,
                yMove: 2,
                rotate: 15
            },
            {
                xMove: -0.5,
                yMove: 2,
                rotate: -15
            }
        ];
        const direction = directions[i % directions.length];
        return {
            id: i,
            width: 8,
            height: 8,
            top: -20 - i % 4 * 10,
            left: 10 + i * 2.2 % 80,
            animationDuration: 8 + i % 5,
            animationDelay: i * 0.15,
            rotation: direction.rotate,
            xMove: direction.xMove,
            yMove: direction.yMove,
            color: [
                '#34c759',
                '#0ea5e9',
                '#f97316',
                '#a855f7',
                '#facc15',
                '#22c55e',
                '#ec4899',
                '#ef4444'
            ][i % 8]
        };
    });
};
function Dashboard() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pixels, setPixels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(generatePixels());
    const [sphereStats, setSphereStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            setIsClient(true);
            // Загружаем статистику для всех сфер
            const stats = {};
            lifeSpheres.forEach({
                "Dashboard.useEffect": (sphere)=>{
                    stats[sphere.id] = getTaskStats(sphere.id);
                }
            }["Dashboard.useEffect"]);
            setSphereStats(stats);
            // Обновляем статистику при изменении localStorage
            const handleStorageChange = {
                "Dashboard.useEffect.handleStorageChange": ()=>{
                    const newStats = {};
                    lifeSpheres.forEach({
                        "Dashboard.useEffect.handleStorageChange": (sphere)=>{
                            newStats[sphere.id] = getTaskStats(sphere.id);
                        }
                    }["Dashboard.useEffect.handleStorageChange"]);
                    setSphereStats(newStats);
                }
            }["Dashboard.useEffect.handleStorageChange"];
            window.addEventListener('storage', handleStorageChange);
            window.addEventListener('taskUpdated', handleStorageChange);
            return ({
                "Dashboard.useEffect": ()=>{
                    window.removeEventListener('storage', handleStorageChange);
                    window.removeEventListener('taskUpdated', handleStorageChange);
                }
            })["Dashboard.useEffect"];
        }
    }["Dashboard.useEffect"], []);
    const handleCardClick = (sphereId)=>{
        router.push(`/areas/${sphereId}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #0f172a 0%, #000 100%)',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden'
        },
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
            [
                "3bed9ab3fb213ed4",
                [
                    pixels.map((pixel)=>`
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
                `).join('')
                ]
            ]
        ]),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    inset: 0,
                    pointerEvents: 'none',
                    zIndex: 0
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "3bed9ab3fb213ed4",
                        [
                            pixels.map((pixel)=>`
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
                `).join('')
                        ]
                    ]
                ]),
                children: pixels.map((pixel1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            width: `${pixel1.width}px`,
                            height: `${pixel1.height}px`,
                            borderRadius: '0',
                            opacity: 0.8,
                            animation: `pixel-scatter-${pixel1.id} ${pixel1.animationDuration}s linear infinite`,
                            top: `${pixel1.top}px`,
                            left: `${pixel1.left}%`,
                            background: pixel1.color,
                            animationDelay: `${pixel1.animationDelay}s`,
                            imageRendering: 'pixelated',
                            transform: `rotate(${pixel1.rotation}deg)`
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "3bed9ab3fb213ed4",
                                [
                                    pixels.map((pixel)=>`
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
                `).join('')
                                ]
                            ]
                        ]) + " " + "pixel"
                    }, pixel1.id, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 160,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 153,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 10,
                    textAlign: 'center',
                    marginBottom: '3rem'
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "3bed9ab3fb213ed4",
                        [
                            pixels.map((pixel)=>`
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
                `).join('')
                        ]
                    ]
                ]),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: '3.5rem',
                            fontWeight: 900,
                            color: '#ffffff',
                            marginBottom: '1rem',
                            background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a78bfa 100%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "3bed9ab3fb213ed4",
                                [
                                    pixels.map((pixel)=>`
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
                `).join('')
                                ]
                            ]
                        ]),
                        children: "Сферы жизни"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 188,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '1.3rem',
                            color: '#94a3b8',
                            maxWidth: '600px',
                            margin: '0 auto',
                            fontWeight: 500
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "3bed9ab3fb213ed4",
                                [
                                    pixels.map((pixel)=>`
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
                `).join('')
                                ]
                            ]
                        ]),
                        children: "Выберите сферу для развития и прокачайте свою жизнь"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 201,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 182,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '1400px',
                    margin: '0 auto'
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "3bed9ab3fb213ed4",
                        [
                            pixels.map((pixel)=>`
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
                `).join('')
                        ]
                    ]
                ]),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem',
                        marginBottom: '3rem'
                    },
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                        [
                            "3bed9ab3fb213ed4",
                            [
                                pixels.map((pixel)=>`
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
                `).join('')
                            ]
                        ]
                    ]),
                    children: lifeSpheres.map((sphere)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
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
                            },
                            onClick: ()=>handleCardClick(sphere.id),
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                                e.currentTarget.style.borderColor = sphere.color;
                                e.currentTarget.style.boxShadow = `0 20px 60px ${sphere.color}40, 0 0 0 1px ${sphere.color}30`;
                                e.currentTarget.style.background = `linear-gradient(135deg, ${sphere.color}20 0%, rgba(255, 255, 255, 0.1) 100%)`;
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.borderColor = `${sphere.color}20`;
                                e.currentTarget.style.boxShadow = `0 8px 32px ${sphere.color}20`;
                                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)';
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "3bed9ab3fb213ed4",
                                    [
                                        pixels.map((pixel)=>`
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
                `).join('')
                                    ]
                                ]
                            ]),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '4rem',
                                        marginBottom: '1.5rem',
                                        filter: `drop-shadow(0 8px 16px ${sphere.color}40)`,
                                        transition: 'transform 0.3s ease'
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "3bed9ab3fb213ed4",
                                            [
                                                pixels.map((pixel)=>`
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
                `).join('')
                                            ]
                                        ]
                                    ]),
                                    children: sphere.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "3bed9ab3fb213ed4",
                                            [
                                                pixels.map((pixel)=>`
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
                `).join('')
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '1.5rem',
                                                fontWeight: 800,
                                                color: '#ffffff',
                                                marginBottom: '0.5rem',
                                                lineHeight: 1.2
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "3bed9ab3fb213ed4",
                                                    [
                                                        pixels.map((pixel)=>`
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
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: sphere.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '1rem',
                                                color: '#cbd5e1',
                                                lineHeight: 1.6,
                                                marginBottom: '1.5rem',
                                                fontWeight: 500
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "3bed9ab3fb213ed4",
                                                    [
                                                        pixels.map((pixel)=>`
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
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: sphere.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 278,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 268,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: 'auto',
                                        paddingTop: '1.5rem',
                                        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "3bed9ab3fb213ed4",
                                            [
                                                pixels.map((pixel)=>`
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
                `).join('')
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                marginBottom: '0.5rem'
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "3bed9ab3fb213ed4",
                                                    [
                                                        pixels.map((pixel)=>`
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
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '0.9rem',
                                                        color: '#94a3b8',
                                                        fontWeight: 500
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "3bed9ab3fb213ed4",
                                                            [
                                                                pixels.map((pixel)=>`
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
                `).join('')
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "Выполнено задач"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '1rem',
                                                        fontWeight: 700,
                                                        color: sphere.color,
                                                        textShadow: `0 2px 8px ${sphere.color}40`
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "3bed9ab3fb213ed4",
                                                            [
                                                                pixels.map((pixel)=>`
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
                `).join('')
                                                            ]
                                                        ]
                                                    ]),
                                                    children: [
                                                        sphereStats[sphere.id]?.completedTasks || 0,
                                                        "/",
                                                        sphereStats[sphere.id]?.totalTasks || 0
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                height: '8px',
                                                background: 'rgba(255, 255, 255, 0.1)',
                                                borderRadius: '999px',
                                                overflow: 'hidden',
                                                position: 'relative'
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "3bed9ab3fb213ed4",
                                                    [
                                                        pixels.map((pixel)=>`
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
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: '100%',
                                                    borderRadius: 'inherit',
                                                    background: `linear-gradient(90deg, ${sphere.color}, ${sphere.color}80)`,
                                                    width: `${sphereStats[sphere.id] ? sphereStats[sphere.id].completedTasks / sphereStats[sphere.id].totalTasks * 100 : 0}%`,
                                                    transition: 'width 1.5s cubic-bezier(0.23, 1, 0.32, 1)',
                                                    boxShadow: `0 0 15px ${sphere.color}60`,
                                                    position: 'relative'
                                                },
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "3bed9ab3fb213ed4",
                                                        [
                                                            pixels.map((pixel)=>`
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
                `).join('')
                                                        ]
                                                    ]
                                                ])
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 324,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 317,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 290,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        top: '1.5rem',
                                        right: '1.5rem',
                                        fontSize: '1.8rem',
                                        fontWeight: 900,
                                        color: sphere.color,
                                        opacity: 0.8,
                                        transition: 'all 0.3s ease'
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "3bed9ab3fb213ed4",
                                            [
                                                pixels.map((pixel)=>`
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
                `).join('')
                                            ]
                                        ]
                                    ]),
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 339,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        inset: 0,
                                        background: `radial-gradient(circle at 20% 20%, ${sphere.color}20 0%, transparent 60%)`,
                                        borderRadius: 'inherit',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        pointerEvents: 'none'
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "3bed9ab3fb213ed4",
                                            [
                                                pixels.map((pixel)=>`
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
                `).join('')
                                            ]
                                        ]
                                    ])
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 353,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, sphere.id, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 226,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/page.tsx",
                    lineNumber: 219,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 213,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "3bed9ab3fb213ed4",
                dynamic: [
                    pixels.map((pixel)=>`
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
                `).join('')
                ],
                children: `.pixel.__jsx-style-dynamic-selector{opacity:.8;width:8px;height:8px;image-rendering:pixelated;border-radius:0;position:absolute}`
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/page.tsx",
        lineNumber: 145,
        columnNumber: 9
    }, this);
}
_s(Dashboard, "SviLumeHYAS2JmqzNEzfFWEKykk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/client-only/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/node_modules/styled-jsx/dist/index/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
__turbopack_context__.r("[project]/node_modules/next/dist/compiled/client-only/index.js [app-client] (ecmascript)");
var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/ function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var isProd = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && ("TURBOPACK compile-time value", "development") === "production";
var isString = function(o) {
    return Object.prototype.toString.call(o) === "[object String]";
};
var StyleSheet = /*#__PURE__*/ function() {
    function StyleSheet(param) {
        var ref = param === void 0 ? {} : param, _name = ref.name, name = _name === void 0 ? "stylesheet" : _name, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? isProd : _optimizeForSpeed;
        invariant$1(isString(name), "`name` must be a string");
        this._name = name;
        this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
        invariant$1(typeof optimizeForSpeed === "boolean", "`optimizeForSpeed` must be a boolean");
        this._optimizeForSpeed = optimizeForSpeed;
        this._serverSheet = undefined;
        this._tags = [];
        this._injected = false;
        this._rulesCount = 0;
        var node = typeof window !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = node ? node.getAttribute("content") : null;
    }
    var _proto = StyleSheet.prototype;
    _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
        invariant$1(typeof bool === "boolean", "`setOptimizeForSpeed` accepts a boolean");
        invariant$1(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted");
        this.flush();
        this._optimizeForSpeed = bool;
        this.inject();
    };
    _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
        return this._optimizeForSpeed;
    };
    _proto.inject = function inject() {
        var _this = this;
        invariant$1(!this._injected, "sheet already injected");
        this._injected = true;
        if (typeof window !== "undefined" && this._optimizeForSpeed) {
            this._tags[0] = this.makeStyleTag(this._name);
            this._optimizeForSpeed = "insertRule" in this.getSheet();
            if (!this._optimizeForSpeed) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");
                }
                this.flush();
                this._injected = true;
            }
            return;
        }
        this._serverSheet = {
            cssRules: [],
            insertRule: function(rule, index) {
                if (typeof index === "number") {
                    _this._serverSheet.cssRules[index] = {
                        cssText: rule
                    };
                } else {
                    _this._serverSheet.cssRules.push({
                        cssText: rule
                    });
                }
                return index;
            },
            deleteRule: function(index) {
                _this._serverSheet.cssRules[index] = null;
            }
        };
    };
    _proto.getSheetForTag = function getSheetForTag(tag) {
        if (tag.sheet) {
            return tag.sheet;
        }
        // this weirdness brought to you by firefox
        for(var i = 0; i < document.styleSheets.length; i++){
            if (document.styleSheets[i].ownerNode === tag) {
                return document.styleSheets[i];
            }
        }
    };
    _proto.getSheet = function getSheet() {
        return this.getSheetForTag(this._tags[this._tags.length - 1]);
    };
    _proto.insertRule = function insertRule(rule, index) {
        invariant$1(isString(rule), "`insertRule` accepts only strings");
        if (typeof window === "undefined") {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        if (this._optimizeForSpeed) {
            var sheet = this.getSheet();
            if (typeof index !== "number") {
                index = sheet.cssRules.length;
            }
            // this weirdness for perf, and chrome's weird bug
            // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                return -1;
            }
        } else {
            var insertionPoint = this._tags[index];
            this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
        }
        return this._rulesCount++;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || typeof window === "undefined") {
            var sheet = typeof window !== "undefined" ? this.getSheet() : this._serverSheet;
            if (!rule.trim()) {
                rule = this._deletedRulePlaceholder;
            }
            if (!sheet.cssRules[index]) {
                // @TBD Should we throw an error?
                return index;
            }
            sheet.deleteRule(index);
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                // In order to preserve the indices we insert a deleteRulePlaceholder
                sheet.insertRule(this._deletedRulePlaceholder, index);
            }
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "old rule at index `" + index + "` not found");
            tag.textContent = rule;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if (typeof window === "undefined") {
            this._serverSheet.deleteRule(index);
            return;
        }
        if (this._optimizeForSpeed) {
            this.replaceRule(index, "");
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "rule at index `" + index + "` not found");
            tag.parentNode.removeChild(tag);
            this._tags[index] = null;
        }
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if (typeof window !== "undefined") {
            this._tags.forEach(function(tag) {
                return tag && tag.parentNode.removeChild(tag);
            });
            this._tags = [];
        } else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if (typeof window === "undefined") {
            return this._serverSheet.cssRules;
        }
        return this._tags.reduce(function(rules, tag) {
            if (tag) {
                rules = rules.concat(Array.prototype.map.call(_this.getSheetForTag(tag).cssRules, function(rule) {
                    return rule.cssText === _this._deletedRulePlaceholder ? null : rule;
                }));
            } else {
                rules.push(null);
            }
            return rules;
        }, []);
    };
    _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
        if (cssString) {
            invariant$1(isString(cssString), "makeStyleTag accepts only strings as second parameter");
        }
        var tag = document.createElement("style");
        if (this._nonce) tag.setAttribute("nonce", this._nonce);
        tag.type = "text/css";
        tag.setAttribute("data-" + name, "");
        if (cssString) {
            tag.appendChild(document.createTextNode(cssString));
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        if (relativeToTag) {
            head.insertBefore(tag, relativeToTag);
        } else {
            head.appendChild(tag);
        }
        return tag;
    };
    _createClass(StyleSheet, [
        {
            key: "length",
            get: function get() {
                return this._rulesCount;
            }
        }
    ]);
    return StyleSheet;
}();
function invariant$1(condition, message) {
    if (!condition) {
        throw new Error("StyleSheet: " + message + ".");
    }
}
function hash(str) {
    var _$hash = 5381, i = str.length;
    while(i){
        _$hash = _$hash * 33 ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */ return _$hash >>> 0;
}
var stringHash = hash;
var sanitize = function(rule) {
    return rule.replace(/\/style/gi, "\\/style");
};
var cache = {};
/**
 * computeId
 *
 * Compute and memoize a jsx id from a basedId and optionally props.
 */ function computeId(baseId, props) {
    if (!props) {
        return "jsx-" + baseId;
    }
    var propsToString = String(props);
    var key = baseId + propsToString;
    if (!cache[key]) {
        cache[key] = "jsx-" + stringHash(baseId + "-" + propsToString);
    }
    return cache[key];
}
/**
 * computeSelector
 *
 * Compute and memoize dynamic selectors.
 */ function computeSelector(id, css) {
    var selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    // Sanitize SSR-ed CSS.
    // Client side code doesn't need to be sanitized since we use
    // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
    if (typeof window === "undefined") {
        css = sanitize(css);
    }
    var idcss = id + css;
    if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
    }
    return cache[idcss];
}
function mapRulesToStyle(cssRules, options) {
    if (options === void 0) options = {};
    return cssRules.map(function(args) {
        var id = args[0];
        var css = args[1];
        return /*#__PURE__*/ React__default["default"].createElement("style", {
            id: "__" + id,
            // Avoid warnings upon render with a key
            key: "__" + id,
            nonce: options.nonce ? options.nonce : undefined,
            dangerouslySetInnerHTML: {
                __html: css
            }
        });
    });
}
var StyleSheetRegistry = /*#__PURE__*/ function() {
    function StyleSheetRegistry(param) {
        var ref = param === void 0 ? {} : param, _styleSheet = ref.styleSheet, styleSheet = _styleSheet === void 0 ? null : _styleSheet, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? false : _optimizeForSpeed;
        this._sheet = styleSheet || new StyleSheet({
            name: "styled-jsx",
            optimizeForSpeed: optimizeForSpeed
        });
        this._sheet.inject();
        if (styleSheet && typeof optimizeForSpeed === "boolean") {
            this._sheet.setOptimizeForSpeed(optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    }
    var _proto = StyleSheetRegistry.prototype;
    _proto.add = function add(props) {
        var _this = this;
        if (undefined === this._optimizeForSpeed) {
            this._optimizeForSpeed = Array.isArray(props.children);
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        if (typeof window !== "undefined" && !this._fromServer) {
            this._fromServer = this.selectFromServer();
            this._instancesCounts = Object.keys(this._fromServer).reduce(function(acc, tagName) {
                acc[tagName] = 0;
                return acc;
            }, {});
        }
        var ref = this.getIdAndRules(props), styleId = ref.styleId, rules = ref.rules;
        // Deduping: just increase the instances count.
        if (styleId in this._instancesCounts) {
            this._instancesCounts[styleId] += 1;
            return;
        }
        var indices = rules.map(function(rule) {
            return _this._sheet.insertRule(rule);
        }) // Filter out invalid rules
        .filter(function(index) {
            return index !== -1;
        });
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
    };
    _proto.remove = function remove(props) {
        var _this = this;
        var styleId = this.getIdAndRules(props).styleId;
        invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
        this._instancesCounts[styleId] -= 1;
        if (this._instancesCounts[styleId] < 1) {
            var tagFromServer = this._fromServer && this._fromServer[styleId];
            if (tagFromServer) {
                tagFromServer.parentNode.removeChild(tagFromServer);
                delete this._fromServer[styleId];
            } else {
                this._indices[styleId].forEach(function(index) {
                    return _this._sheet.deleteRule(index);
                });
                delete this._indices[styleId];
            }
            delete this._instancesCounts[styleId];
        }
    };
    _proto.update = function update(props, nextProps) {
        this.add(nextProps);
        this.remove(props);
    };
    _proto.flush = function flush() {
        this._sheet.flush();
        this._sheet.inject();
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function(styleId) {
            return [
                styleId,
                _this._fromServer[styleId]
            ];
        }) : [];
        var cssRules = this._sheet.cssRules();
        return fromServer.concat(Object.keys(this._indices).map(function(styleId) {
            return [
                styleId,
                _this._indices[styleId].map(function(index) {
                    return cssRules[index].cssText;
                }).join(_this._optimizeForSpeed ? "" : "\n")
            ];
        }) // filter out empty rules
        .filter(function(rule) {
            return Boolean(rule[1]);
        }));
    };
    _proto.styles = function styles(options) {
        return mapRulesToStyle(this.cssRules(), options);
    };
    _proto.getIdAndRules = function getIdAndRules(props) {
        var css = props.children, dynamic = props.dynamic, id = props.id;
        if (dynamic) {
            var styleId = computeId(id, dynamic);
            return {
                styleId: styleId,
                rules: Array.isArray(css) ? css.map(function(rule) {
                    return computeSelector(styleId, rule);
                }) : [
                    computeSelector(styleId, css)
                ]
            };
        }
        return {
            styleId: computeId(id),
            rules: Array.isArray(css) ? css : [
                css
            ]
        };
    };
    /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */ _proto.selectFromServer = function selectFromServer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
        return elements.reduce(function(acc, element) {
            var id = element.id.slice(2);
            acc[id] = element;
            return acc;
        }, {});
    };
    return StyleSheetRegistry;
}();
function invariant(condition, message) {
    if (!condition) {
        throw new Error("StyleSheetRegistry: " + message + ".");
    }
}
var StyleSheetContext = /*#__PURE__*/ React.createContext(null);
StyleSheetContext.displayName = "StyleSheetContext";
function createStyleRegistry() {
    return new StyleSheetRegistry();
}
function StyleRegistry(param) {
    var configuredRegistry = param.registry, children = param.children;
    var rootRegistry = React.useContext(StyleSheetContext);
    var ref = React.useState({
        "StyleRegistry.useState[ref]": function() {
            return rootRegistry || configuredRegistry || createStyleRegistry();
        }
    }["StyleRegistry.useState[ref]"]), registry = ref[0];
    return /*#__PURE__*/ React__default["default"].createElement(StyleSheetContext.Provider, {
        value: registry
    }, children);
}
function useStyleRegistry() {
    return React.useContext(StyleSheetContext);
}
// Opt-into the new `useInsertionEffect` API in React 18, fallback to `useLayoutEffect`.
// https://github.com/reactwg/react-18/discussions/110
var useInsertionEffect = React__default["default"].useInsertionEffect || React__default["default"].useLayoutEffect;
var defaultRegistry = typeof window !== "undefined" ? createStyleRegistry() : undefined;
function JSXStyle(props) {
    var registry = defaultRegistry ? defaultRegistry : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if (typeof window === "undefined") {
        registry.add(props);
        return null;
    }
    useInsertionEffect({
        "JSXStyle.useInsertionEffect": function() {
            registry.add(props);
            return ({
                "JSXStyle.useInsertionEffect": function() {
                    registry.remove(props);
                }
            })["JSXStyle.useInsertionEffect"];
        // props.children can be string[], will be striped since id is identical
        }
    }["JSXStyle.useInsertionEffect"], [
        props.id,
        String(props.dynamic)
    ]);
    return null;
}
JSXStyle.dynamic = function(info) {
    return info.map(function(tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return computeId(baseId, props);
    }).join(" ");
};
exports.StyleRegistry = StyleRegistry;
exports.createStyleRegistry = createStyleRegistry;
exports.style = JSXStyle;
exports.useStyleRegistry = useStyleRegistry;
}),
"[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/styled-jsx/dist/index/index.js [app-client] (ecmascript)").style;
}),
]);

//# sourceMappingURL=_21f5f3ed._.js.map