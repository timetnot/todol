module.exports = [
"[project]/src/app/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../styles/dashboard.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
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
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
    const tasks = undefined;
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
// Генерируем детерминированные пиксели, сыплющиеся вниз
const generatePixels = ()=>{
    return Array.from({
        length: 60
    }, (_, i)=>{
        return {
            id: i,
            width: 4,
            height: 4,
            top: -20 - i % 3 * 15,
            left: 1 + i * 2.5 % 98,
            animationDuration: 3 + i % 2,
            animationDelay: i * 0.08,
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pixels, setPixels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(generatePixels());
    const [sphereStats, setSphereStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
        // Загружаем статистику для всех сфер
        const stats = {};
        lifeSpheres.forEach((sphere)=>{
            stats[sphere.id] = getTaskStats(sphere.id);
        });
        setSphereStats(stats);
        // Обновляем статистику при изменении localStorage
        const handleStorageChange = ()=>{
            const newStats = {};
            lifeSpheres.forEach((sphere)=>{
                newStats[sphere.id] = getTaskStats(sphere.id);
            });
            setSphereStats(newStats);
        };
        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('taskUpdated', handleStorageChange);
        return ()=>{
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('taskUpdated', handleStorageChange);
        };
    }, []);
    const handleCardClick = (sphereId)=>{
        router.push(`/areas/${sphereId}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #0f172a 0%, #000 100%)',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "background-pixels",
                children: pixels.map((pixel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pixel",
                        style: {
                            top: `${pixel.top}px`,
                            left: `${pixel.left}%`,
                            background: pixel.color,
                            animationDelay: `${pixel.animationDelay}s`,
                            animationDuration: `${pixel.animationDuration}s`
                        }
                    }, pixel.id, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 138,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 136,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 10,
                    textAlign: 'center',
                    marginBottom: '3rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
                        children: "Сферы жизни"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 159,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '1.3rem',
                            color: '#94a3b8',
                            maxWidth: '600px',
                            margin: '0 auto',
                            fontWeight: 500
                        },
                        children: "Выберите сферу для развития и прокачайте свою жизнь"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 172,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 153,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '1400px',
                    margin: '0 auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem',
                        marginBottom: '3rem'
                    },
                    children: lifeSpheres.map((sphere)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '4rem',
                                        marginBottom: '1.5rem',
                                        filter: `drop-shadow(0 8px 16px ${sphere.color}40)`,
                                        transition: 'transform 0.3s ease'
                                    },
                                    children: sphere.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '1.5rem',
                                                fontWeight: 800,
                                                color: '#ffffff',
                                                marginBottom: '0.5rem',
                                                lineHeight: 1.2
                                            },
                                            children: sphere.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '1rem',
                                                color: '#cbd5e1',
                                                lineHeight: 1.6,
                                                marginBottom: '1.5rem',
                                                fontWeight: 500
                                            },
                                            children: sphere.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 239,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: 'auto',
                                        paddingTop: '1.5rem',
                                        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                marginBottom: '0.5rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '0.9rem',
                                                        color: '#94a3b8',
                                                        fontWeight: 500
                                                    },
                                                    children: "Выполнено задач"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '1rem',
                                                        fontWeight: 700,
                                                        color: sphere.color,
                                                        textShadow: `0 2px 8px ${sphere.color}40`
                                                    },
                                                    children: [
                                                        sphereStats[sphere.id]?.completedTasks || 0,
                                                        "/",
                                                        sphereStats[sphere.id]?.totalTasks || 0
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 266,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                height: '8px',
                                                background: 'rgba(255, 255, 255, 0.1)',
                                                borderRadius: '999px',
                                                overflow: 'hidden',
                                                position: 'relative'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: '100%',
                                                    borderRadius: 'inherit',
                                                    background: `linear-gradient(90deg, ${sphere.color}, ${sphere.color}80)`,
                                                    width: `${sphereStats[sphere.id] ? sphereStats[sphere.id].completedTasks / sphereStats[sphere.id].totalTasks * 100 : 0}%`,
                                                    transition: 'width 1.5s cubic-bezier(0.23, 1, 0.32, 1)',
                                                    boxShadow: `0 0 15px ${sphere.color}60`,
                                                    position: 'relative'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 295,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 261,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 310,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        inset: 0,
                                        background: `radial-gradient(circle at 20% 20%, ${sphere.color}20 0%, transparent 60%)`,
                                        borderRadius: 'inherit',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        pointerEvents: 'none'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 324,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, sphere.id, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 197,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/page.tsx",
                    lineNumber: 190,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 184,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/page.tsx",
        lineNumber: 128,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_app_dashboard_page_tsx_196c74b5._.js.map