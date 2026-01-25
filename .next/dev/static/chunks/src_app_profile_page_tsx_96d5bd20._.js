(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/profile/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Profile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Profile() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        bio: ''
    });
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const getTaskStats = ()=>{
        const stats = {
            totalTasks: 0,
            completedTasks: 0,
            totalSubtasks: 0,
            completedSubtasks: 0,
            sphereStats: {}
        };
        for(let i = 1; i <= 8; i++){
            const tasks = JSON.parse(localStorage.getItem(`tasks_sphere_${i}`) || '[]');
            const sphereTasks = tasks.length;
            const sphereCompleted = tasks.filter((task)=>task.completed).length;
            stats.totalTasks += sphereTasks;
            stats.completedTasks += sphereCompleted;
            const subtasks = tasks.reduce((acc, task)=>acc + (task.subtasks?.length || 0), 0);
            const completedSubtasks = tasks.reduce((acc, task)=>acc + (task.subtasks?.filter((st)=>st.completed).length || 0), 0);
            stats.totalSubtasks += subtasks;
            stats.completedSubtasks += completedSubtasks;
            stats.sphereStats[i] = {
                total: sphereTasks,
                completed: sphereCompleted,
                percentage: sphereTasks > 0 ? Math.round(sphereCompleted / sphereTasks * 100) : 0
            };
        }
        return stats;
    };
    const taskStats = getTaskStats();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Profile.useEffect": ()=>{
            const auth = localStorage.getItem('isAuthenticated');
            const userData = localStorage.getItem('user');
            if (auth !== 'true' || !userData) {
                router.push('/login');
                return;
            }
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser);
            setFormData({
                name: parsedUser.name || '',
                email: parsedUser.email || '',
                bio: parsedUser.bio || ''
            });
        }
    }["Profile.useEffect"], [
        router
    ]);
    const handleSave = ()=>{
        const updatedUser = {
            ...user,
            ...formData
        };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
        setIsEditing(false);
    };
    const handleLogout = ()=>{
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
        router.push('/login');
    };
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #0f172a 0%, #000 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Загрузка..."
            }, void 0, false, {
                fileName: "[project]/src/app/profile/page.tsx",
                lineNumber: 97,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/profile/page.tsx",
            lineNumber: 89,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #0f172a 0%, #000 100%)',
            padding: '2rem',
            position: 'relative'
        },
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
            [
                "4691ee0faf29474d",
                [
                    Array.from({
                        length: 30
                    }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
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
                        "4691ee0faf29474d",
                        [
                            Array.from({
                                length: 30
                            }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                        ]
                    ]
                ]),
                children: Array.from({
                    length: 30
                }, (_1, i1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            width: '3px',
                            height: '3px',
                            opacity: 0.3,
                            animation: `fall-${i1} ${10 + i1 % 3}s linear infinite`,
                            top: `${-10 - i1 % 2 * 5}px`,
                            left: `${10 + i1 * 3 % 85}%`,
                            background: [
                                '#34c759',
                                '#0ea5e9',
                                '#f97316',
                                '#a855f7',
                                '#facc15',
                                '#22c55e',
                                '#ec4899',
                                '#ef4444'
                            ][i1 % 8],
                            animationDelay: `${i1 * 0.3}s`
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "4691ee0faf29474d",
                                [
                                    Array.from({
                                        length: 30
                                    }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                ]
                            ]
                        ])
                    }, i1, false, {
                        fileName: "[project]/src/app/profile/page.tsx",
                        lineNumber: 117,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/profile/page.tsx",
                lineNumber: 110,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 10,
                    maxWidth: '600px',
                    margin: '0 auto'
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "4691ee0faf29474d",
                        [
                            Array.from({
                                length: 30
                            }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                        ]
                    ]
                ]),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: '3rem'
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "4691ee0faf29474d",
                                [
                                    Array.from({
                                        length: 30
                                    }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                ]
                            ]
                        ]),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: '2.5rem',
                                    fontWeight: 700,
                                    color: '#ffffff',
                                    marginBottom: '0.5rem',
                                    background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a78bfa 100%)',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "4691ee0faf29474d",
                                        [
                                            Array.from({
                                                length: 30
                                            }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                        ]
                                    ]
                                ]),
                                children: "Профиль"
                            }, void 0, false, {
                                fileName: "[project]/src/app/profile/page.tsx",
                                lineNumber: 146,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '1.1rem',
                                    color: '#94a3b8',
                                    margin: 0,
                                    fontWeight: 400
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "4691ee0faf29474d",
                                        [
                                            Array.from({
                                                length: 30
                                            }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                        ]
                                    ]
                                ]),
                                children: "Управление вашим аккаунтом"
                            }, void 0, false, {
                                fileName: "[project]/src/app/profile/page.tsx",
                                lineNumber: 158,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/profile/page.tsx",
                        lineNumber: 142,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '16px',
                            padding: '2.5rem'
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "4691ee0faf29474d",
                                [
                                    Array.from({
                                        length: 30
                                    }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                ]
                            ]
                        ]),
                        children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "4691ee0faf29474d",
                                    [
                                        Array.from({
                                            length: 30
                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                    ]
                                ]
                            ]),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: 'center',
                                        marginBottom: '2rem'
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "4691ee0faf29474d",
                                            [
                                                Array.from({
                                                    length: 30
                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                            ]
                                        ]
                                    ]),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '80px',
                                            height: '80px',
                                            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 1rem',
                                            fontSize: '2rem'
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "4691ee0faf29474d",
                                                [
                                                    Array.from({
                                                        length: 30
                                                    }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                ]
                                            ]
                                        ]),
                                        children: "👤"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/profile/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/profile/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '2rem'
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "4691ee0faf29474d",
                                            [
                                                Array.from({
                                                    length: 30
                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '1.25rem'
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "4691ee0faf29474d",
                                                    [
                                                        Array.from({
                                                            length: 30
                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'block',
                                                        color: '#e2e8f0',
                                                        fontWeight: 500,
                                                        marginBottom: '0.5rem',
                                                        fontSize: '0.9rem'
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "4691ee0faf29474d",
                                                            [
                                                                Array.from({
                                                                    length: 30
                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "Имя"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: formData.name,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            name: e.target.value
                                                        }),
                                                    style: {
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
                                                    },
                                                    onFocus: (e)=>{
                                                        e.target.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                                                        e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                                                    },
                                                    onBlur: (e)=>{
                                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                                        e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "4691ee0faf29474d",
                                                            [
                                                                Array.from({
                                                                    length: 30
                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                            ]
                                                        ]
                                                    ])
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/profile/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '1.25rem'
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "4691ee0faf29474d",
                                                    [
                                                        Array.from({
                                                            length: 30
                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'block',
                                                        color: '#e2e8f0',
                                                        fontWeight: 500,
                                                        marginBottom: '0.5rem',
                                                        fontSize: '0.9rem'
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "4691ee0faf29474d",
                                                            [
                                                                Array.from({
                                                                    length: 30
                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    value: formData.email,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            email: e.target.value
                                                        }),
                                                    style: {
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
                                                    },
                                                    onFocus: (e)=>{
                                                        e.target.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                                                        e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                                                    },
                                                    onBlur: (e)=>{
                                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                                        e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "4691ee0faf29474d",
                                                            [
                                                                Array.from({
                                                                    length: 30
                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                            ]
                                                        ]
                                                    ])
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/profile/page.tsx",
                                            lineNumber: 238,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '1.25rem'
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "4691ee0faf29474d",
                                                    [
                                                        Array.from({
                                                            length: 30
                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'block',
                                                        color: '#e2e8f0',
                                                        fontWeight: 500,
                                                        marginBottom: '0.5rem',
                                                        fontSize: '0.9rem'
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "4691ee0faf29474d",
                                                            [
                                                                Array.from({
                                                                    length: 30
                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "О себе"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: formData.bio,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            bio: e.target.value
                                                        }),
                                                    rows: 4,
                                                    style: {
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
                                                    },
                                                    onFocus: (e)=>{
                                                        e.target.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                                                        e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                                                    },
                                                    onBlur: (e)=>{
                                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                                        e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "4691ee0faf29474d",
                                                            [
                                                                Array.from({
                                                                    length: 30
                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                            ]
                                                        ]
                                                    ])
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/profile/page.tsx",
                                            lineNumber: 276,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/page.tsx",
                                    lineNumber: 199,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '1rem'
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "4691ee0faf29474d",
                                            [
                                                Array.from({
                                                    length: 30
                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSave,
                                            style: {
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
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(99, 102, 241, 0.4)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 4px 14px rgba(99, 102, 241, 0.3)';
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "4691ee0faf29474d",
                                                    [
                                                        Array.from({
                                                            length: 30
                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: "Сохранить"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/page.tsx",
                                            lineNumber: 321,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsEditing(false),
                                            style: {
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
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "4691ee0faf29474d",
                                                    [
                                                        Array.from({
                                                            length: 30
                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: "Отмена"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/page.tsx",
                                            lineNumber: 347,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/profile/page.tsx",
                            lineNumber: 177,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "4691ee0faf29474d",
                                    [
                                        Array.from({
                                            length: 30
                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                    ]
                                ]
                            ]),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: 'center',
                                        marginBottom: '2rem'
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "4691ee0faf29474d",
                                            [
                                                Array.from({
                                                    length: 30
                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '80px',
                                                height: '80px',
                                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 1rem',
                                                fontSize: '2rem'
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "4691ee0faf29474d",
                                                    [
                                                        Array.from({
                                                            length: 30
                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: "👤"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: '1.5rem',
                                                fontWeight: 600,
                                                color: '#ffffff',
                                                marginBottom: '0.5rem'
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "4691ee0faf29474d",
                                                    [
                                                        Array.from({
                                                            length: 30
                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: user.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/page.tsx",
                                            lineNumber: 392,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '0.95rem',
                                                color: '#94a3b8',
                                                margin: 0
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "4691ee0faf29474d",
                                                    [
                                                        Array.from({
                                                            length: 30
                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: user.email
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/page.tsx",
                                            lineNumber: 400,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/page.tsx",
                                    lineNumber: 375,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '2rem'
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "4691ee0faf29474d",
                                            [
                                                Array.from({
                                                    length: 30
                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '1.5rem',
                                                padding: '1.5rem',
                                                background: 'rgba(255, 255, 255, 0.03)',
                                                borderRadius: '12px',
                                                border: '1px solid rgba(255, 255, 255, 0.05)'
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "4691ee0faf29474d",
                                                    [
                                                        Array.from({
                                                            length: 30
                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '0.85rem',
                                                        color: '#64748b',
                                                        marginBottom: '1rem',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.05em',
                                                        fontWeight: 600
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "4691ee0faf29474d",
                                                            [
                                                                Array.from({
                                                                    length: 30
                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "Общий прогресс"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'grid',
                                                        gridTemplateColumns: 'repeat(2, 1fr)',
                                                        gap: '1rem',
                                                        marginBottom: '1.5rem'
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "4691ee0faf29474d",
                                                            [
                                                                Array.from({
                                                                    length: 30
                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                            ]
                                                        ]
                                                    ]),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                textAlign: 'center'
                                                            },
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                [
                                                                    "4691ee0faf29474d",
                                                                    [
                                                                        Array.from({
                                                                            length: 30
                                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                                    ]
                                                                ]
                                                            ]),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '1.8rem',
                                                                        fontWeight: 700,
                                                                        color: '#ffffff',
                                                                        marginBottom: '0.25rem'
                                                                    },
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                        [
                                                                            "4691ee0faf29474d",
                                                                            [
                                                                                Array.from({
                                                                                    length: 30
                                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                                            ]
                                                                        ]
                                                                    ]),
                                                                    children: taskStats.totalTasks
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '0.85rem',
                                                                        color: '#94a3b8'
                                                                    },
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                        [
                                                                            "4691ee0faf29474d",
                                                                            [
                                                                                Array.from({
                                                                                    length: 30
                                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                                            ]
                                                                        ]
                                                                    ]),
                                                                    children: "Всего задач"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                                    lineNumber: 445,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/profile/page.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                textAlign: 'center'
                                                            },
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                [
                                                                    "4691ee0faf29474d",
                                                                    [
                                                                        Array.from({
                                                                            length: 30
                                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                                    ]
                                                                ]
                                                            ]),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '1.8rem',
                                                                        fontWeight: 700,
                                                                        color: '#22c55e',
                                                                        marginBottom: '0.25rem'
                                                                    },
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                        [
                                                                            "4691ee0faf29474d",
                                                                            [
                                                                                Array.from({
                                                                                    length: 30
                                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                                            ]
                                                                        ]
                                                                    ]),
                                                                    children: taskStats.completedTasks
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                                    lineNumber: 453,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '0.85rem',
                                                                        color: '#94a3b8'
                                                                    },
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                        [
                                                                            "4691ee0faf29474d",
                                                                            [
                                                                                Array.from({
                                                                                    length: 30
                                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                                            ]
                                                                        ]
                                                                    ]),
                                                                    children: "Выполнено"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                                    lineNumber: 461,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/profile/page.tsx",
                                                            lineNumber: 452,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginBottom: '1rem'
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "4691ee0faf29474d",
                                                            [
                                                                Array.from({
                                                                    length: 30
                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
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
                                                                    "4691ee0faf29474d",
                                                                    [
                                                                        Array.from({
                                                                            length: 30
                                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                                    ]
                                                                ]
                                                            ]),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: '0.9rem',
                                                                        color: '#e2e8f0',
                                                                        fontWeight: 500
                                                                    },
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                        [
                                                                            "4691ee0faf29474d",
                                                                            [
                                                                                Array.from({
                                                                                    length: 30
                                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                                            ]
                                                                        ]
                                                                    ]),
                                                                    children: "Прогресс выполнения"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                                    lineNumber: 478,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: '0.9rem',
                                                                        fontWeight: 700,
                                                                        color: '#22c55e'
                                                                    },
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                        [
                                                                            "4691ee0faf29474d",
                                                                            [
                                                                                Array.from({
                                                                                    length: 30
                                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                                            ]
                                                                        ]
                                                                    ]),
                                                                    children: [
                                                                        taskStats.totalTasks > 0 ? Math.round(taskStats.completedTasks / taskStats.totalTasks * 100) : 0,
                                                                        "%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                                    lineNumber: 485,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/profile/page.tsx",
                                                            lineNumber: 472,
                                                            columnNumber: 41
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
                                                                    "4691ee0faf29474d",
                                                                    [
                                                                        Array.from({
                                                                            length: 30
                                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                                    ]
                                                                ]
                                                            ]),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    height: '100%',
                                                                    borderRadius: 'inherit',
                                                                    background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)',
                                                                    width: `${taskStats.totalTasks > 0 ? taskStats.completedTasks / taskStats.totalTasks * 100 : 0}%`,
                                                                    transition: 'width 1s cubic-bezier(0.23, 1, 0.32, 1)',
                                                                    boxShadow: '0 0 15px rgba(34, 197, 94, 0.3)',
                                                                    position: 'relative'
                                                                },
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                    [
                                                                        "4691ee0faf29474d",
                                                                        [
                                                                            Array.from({
                                                                                length: 30
                                                                            }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                                        ]
                                                                    ]
                                                                ])
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/profile/page.tsx",
                                                                lineNumber: 500,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/profile/page.tsx",
                                                            lineNumber: 493,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/profile/page.tsx",
                                            lineNumber: 411,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: '1.5rem',
                                                background: 'rgba(255, 255, 255, 0.03)',
                                                borderRadius: '12px',
                                                border: '1px solid rgba(255, 255, 255, 0.05)'
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "4691ee0faf29474d",
                                                    [
                                                        Array.from({
                                                            length: 30
                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '0.85rem',
                                                        color: '#64748b',
                                                        marginBottom: '1rem',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.05em',
                                                        fontWeight: 600
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "4691ee0faf29474d",
                                                            [
                                                                Array.from({
                                                                    length: 30
                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "Прогресс по сферам"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'grid',
                                                        gridTemplateColumns: 'repeat(2, 1fr)',
                                                        gap: '1rem'
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "4691ee0faf29474d",
                                                            [
                                                                Array.from({
                                                                    length: 30
                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                            ]
                                                        ]
                                                    ]),
                                                    children: Object.entries(taskStats.sphereStats).map(([sphereId, stats])=>{
                                                        const sphereNames = {
                                                            '1': 'Отношения',
                                                            '2': 'Семья',
                                                            '3': 'Карьера',
                                                            '4': 'Финансы',
                                                            '5': 'Питание',
                                                            '6': 'Спорт',
                                                            '7': 'Здоровье',
                                                            '8': 'Отдых'
                                                        };
                                                        const sphereColors = {
                                                            '1': '#ec4899',
                                                            '2': '#f97316',
                                                            '3': '#3b82f6',
                                                            '4': '#22c55e',
                                                            '5': '#f59e0b',
                                                            '6': '#ef4444',
                                                            '7': '#a855f7',
                                                            '8': '#06b6d4'
                                                        };
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: '1rem',
                                                                background: 'rgba(255, 255, 255, 0.05)',
                                                                borderRadius: '8px',
                                                                border: '1px solid rgba(255, 255, 255, 0.08)'
                                                            },
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                [
                                                                    "4691ee0faf29474d",
                                                                    [
                                                                        Array.from({
                                                                            length: 30
                                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
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
                                                                        marginBottom: '0.75rem'
                                                                    },
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                        [
                                                                            "4691ee0faf29474d",
                                                                            [
                                                                                Array.from({
                                                                                    length: 30
                                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                                            ]
                                                                        ]
                                                                    ]),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: '0.85rem',
                                                                                color: '#e2e8f0',
                                                                                fontWeight: 500
                                                                            },
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                                [
                                                                                    "4691ee0faf29474d",
                                                                                    [
                                                                                        Array.from({
                                                                                            length: 30
                                                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                                                    ]
                                                                                ]
                                                                            ]),
                                                                            children: sphereNames[sphereId]
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/profile/page.tsx",
                                                                            lineNumber: 574,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: '0.8rem',
                                                                                fontWeight: 700,
                                                                                color: sphereColors[sphereId]
                                                                            },
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                                [
                                                                                    "4691ee0faf29474d",
                                                                                    [
                                                                                        Array.from({
                                                                                            length: 30
                                                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                                                    ]
                                                                                ]
                                                                            ]),
                                                                            children: [
                                                                                stats.percentage,
                                                                                "%"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/profile/page.tsx",
                                                                            lineNumber: 581,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                                    lineNumber: 568,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        height: '4px',
                                                                        background: 'rgba(255, 255, 255, 0.1)',
                                                                        borderRadius: '999px',
                                                                        overflow: 'hidden'
                                                                    },
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                        [
                                                                            "4691ee0faf29474d",
                                                                            [
                                                                                Array.from({
                                                                                    length: 30
                                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                                            ]
                                                                        ]
                                                                    ]),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            height: '100%',
                                                                            borderRadius: 'inherit',
                                                                            background: sphereColors[sphereId],
                                                                            width: `${stats.percentage}%`,
                                                                            transition: 'width 1s cubic-bezier(0.23, 1, 0.32, 1)'
                                                                        },
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                            [
                                                                                "4691ee0faf29474d",
                                                                                [
                                                                                    Array.from({
                                                                                        length: 30
                                                                                    }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                                                ]
                                                                            ]
                                                                        ])
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/profile/page.tsx",
                                                                        lineNumber: 595,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                                    lineNumber: 589,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '0.75rem',
                                                                        color: '#64748b',
                                                                        marginTop: '0.5rem'
                                                                    },
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                        [
                                                                            "4691ee0faf29474d",
                                                                            [
                                                                                Array.from({
                                                                                    length: 30
                                                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                                            ]
                                                                        ]
                                                                    ]),
                                                                    children: [
                                                                        stats.completed,
                                                                        " из ",
                                                                        stats.total,
                                                                        " задач"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                                    lineNumber: 605,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, sphereId, true, {
                                                            fileName: "[project]/src/app/profile/page.tsx",
                                                            lineNumber: 562,
                                                            columnNumber: 49
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/profile/page.tsx",
                                                    lineNumber: 533,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/profile/page.tsx",
                                            lineNumber: 516,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/page.tsx",
                                    lineNumber: 410,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '1rem',
                                        flexDirection: 'column'
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "4691ee0faf29474d",
                                            [
                                                Array.from({
                                                    length: 30
                                                }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>router.push('/dashboard'),
                                            style: {
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
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(99, 102, 241, 0.4)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 4px 14px rgba(99, 102, 241, 0.3)';
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "4691ee0faf29474d",
                                                    [
                                                        Array.from({
                                                            length: 30
                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: "📊 Перейти к дашборду"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/page.tsx",
                                            lineNumber: 625,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsEditing(true),
                                            style: {
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
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "4691ee0faf29474d",
                                                    [
                                                        Array.from({
                                                            length: 30
                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: "✏️ Редактировать профиль"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/page.tsx",
                                            lineNumber: 652,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleLogout,
                                            style: {
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
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
                                                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
                                                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "4691ee0faf29474d",
                                                    [
                                                        Array.from({
                                                            length: 30
                                                        }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: "🚪 Выйти из аккаунта"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/profile/page.tsx",
                                            lineNumber: 676,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/profile/page.tsx",
                                    lineNumber: 620,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/profile/page.tsx",
                            lineNumber: 373,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/profile/page.tsx",
                        lineNumber: 169,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/profile/page.tsx",
                lineNumber: 135,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "4691ee0faf29474d",
                dynamic: [
                    Array.from({
                        length: 30
                    }, (_, i)=>`
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')
                ],
                children: ``
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/profile/page.tsx",
        lineNumber: 103,
        columnNumber: 9
    }, this);
}
_s(Profile, "WrcGfoE0YLqqf5dMlaC14V70F9k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Profile;
var _c;
__turbopack_context__.k.register(_c, "Profile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_profile_page_tsx_96d5bd20._.js.map