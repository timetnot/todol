module.exports = [
"[project]/src/app/auth/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AuthPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isLogin, setIsLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        // Имитация запроса
        setTimeout(()=>{
            setIsLoading(false);
            router.push("/dashboard");
        }, 1500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #0f172a 0%, #000 100%)',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden'
        },
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
            [
                "ef27d756f9422666",
                [
                    Array.from({
                        length: 50
                    }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                ]
            ]
        ]),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    inset: 0,
                    pointerEvents: 'none',
                    zIndex: 0
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "ef27d756f9422666",
                        [
                            Array.from({
                                length: 50
                            }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                        ]
                    ]
                ]),
                children: Array.from({
                    length: 50
                }, (_1, i1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            width: '4px',
                            height: '4px',
                            borderRadius: '0',
                            opacity: 0.6,
                            animation: `pixel-float-${i1} ${8 + i1 % 4}s linear infinite`,
                            top: `${-10 - i1 % 3 * 5}px`,
                            left: `${10 + i1 * 1.8 % 80}%`,
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
                            animationDelay: `${i1 * 0.2}s`,
                            imageRendering: 'pixelated'
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "ef27d756f9422666",
                                [
                                    Array.from({
                                        length: 50
                                    }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                                ]
                            ]
                        ])
                    }, i1, false, {
                        fileName: "[project]/src/app/auth/page.tsx",
                        lineNumber: 41,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/auth/page.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 10,
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "ef27d756f9422666",
                        [
                            Array.from({
                                length: 50
                            }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                        ]
                    ]
                ]),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '100%',
                        maxWidth: '420px',
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '24px',
                        padding: '3rem 2.5rem',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
                    },
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                        [
                            "ef27d756f9422666",
                            [
                                Array.from({
                                    length: 50
                                }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                            ]
                        ]
                    ]),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                marginBottom: '2.5rem'
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "ef27d756f9422666",
                                    [
                                        Array.from({
                                            length: 50
                                        }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                                    ]
                                ]
                            ]),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        fontSize: '2rem',
                                        fontWeight: 700,
                                        color: '#ffffff',
                                        marginBottom: '0.5rem',
                                        background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a78bfa 100%)',
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "ef27d756f9422666",
                                            [
                                                Array.from({
                                                    length: 50
                                                }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                                            ]
                                        ]
                                    ]),
                                    children: isLogin ? 'Вход' : 'Регистрация'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '0.95rem',
                                        color: '#94a3b8',
                                        margin: 0,
                                        fontWeight: 400
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "ef27d756f9422666",
                                            [
                                                Array.from({
                                                    length: 50
                                                }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                                            ]
                                        ]
                                    ]),
                                    children: isLogin ? 'Добро пожаловать обратно' : 'Создайте новый аккаунт'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/auth/page.tsx",
                            lineNumber: 80,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            style: {
                                marginBottom: '2rem'
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "ef27d756f9422666",
                                    [
                                        Array.from({
                                            length: 50
                                        }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                                    ]
                                ]
                            ]),
                            children: [
                                !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '1.5rem'
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "ef27d756f9422666",
                                            [
                                                Array.from({
                                                    length: 50
                                                }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                color: '#e2e8f0',
                                                fontWeight: 500,
                                                marginBottom: '0.5rem',
                                                fontSize: '0.9rem'
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "ef27d756f9422666",
                                                    [
                                                        Array.from({
                                                            length: 50
                                                        }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: "Имя"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/auth/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: name,
                                            onChange: (e)=>setName(e.target.value),
                                            required: !isLogin,
                                            placeholder: "Введите имя",
                                            style: {
                                                width: '100%',
                                                padding: '0.875rem 1rem',
                                                background: 'rgba(255, 255, 255, 0.08)',
                                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                                borderRadius: '12px',
                                                color: '#ffffff',
                                                fontSize: '0.95rem',
                                                transition: 'all 0.3s ease',
                                                outline: 'none'
                                            },
                                            onFocus: (e)=>{
                                                e.target.style.borderColor = 'rgba(99, 102, 241, 0.5)';
                                                e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                                            },
                                            onBlur: (e)=>{
                                                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                                e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "ef27d756f9422666",
                                                    [
                                                        Array.from({
                                                            length: 50
                                                        }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                                                    ]
                                                ]
                                            ])
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/auth/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/auth/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '1.5rem'
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "ef27d756f9422666",
                                            [
                                                Array.from({
                                                    length: 50
                                                }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                color: '#e2e8f0',
                                                fontWeight: 500,
                                                marginBottom: '0.5rem',
                                                fontSize: '0.9rem'
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "ef27d756f9422666",
                                                    [
                                                        Array.from({
                                                            length: 50
                                                        }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/auth/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            required: true,
                                            placeholder: "email@example.com",
                                            style: {
                                                width: '100%',
                                                padding: '0.875rem 1rem',
                                                background: 'rgba(255, 255, 255, 0.08)',
                                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                                borderRadius: '12px',
                                                color: '#ffffff',
                                                fontSize: '0.95rem',
                                                transition: 'all 0.3s ease',
                                                outline: 'none'
                                            },
                                            onFocus: (e)=>{
                                                e.target.style.borderColor = 'rgba(99, 102, 241, 0.5)';
                                                e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                                            },
                                            onBlur: (e)=>{
                                                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                                e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "ef27d756f9422666",
                                                    [
                                                        Array.from({
                                                            length: 50
                                                        }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                                                    ]
                                                ]
                                            ])
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/auth/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/auth/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '2rem'
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "ef27d756f9422666",
                                            [
                                                Array.from({
                                                    length: 50
                                                }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                color: '#e2e8f0',
                                                fontWeight: 500,
                                                marginBottom: '0.5rem',
                                                fontSize: '0.9rem'
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "ef27d756f9422666",
                                                    [
                                                        Array.from({
                                                            length: 50
                                                        }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                                                    ]
                                                ]
                                            ]),
                                            children: "Пароль"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/auth/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            required: true,
                                            placeholder: "•••••••••",
                                            style: {
                                                width: '100%',
                                                padding: '0.875rem 1rem',
                                                background: 'rgba(255, 255, 255, 0.08)',
                                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                                borderRadius: '12px',
                                                color: '#ffffff',
                                                fontSize: '0.95rem',
                                                transition: 'all 0.3s ease',
                                                outline: 'none'
                                            },
                                            onFocus: (e)=>{
                                                e.target.style.borderColor = 'rgba(99, 102, 241, 0.5)';
                                                e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                                            },
                                            onBlur: (e)=>{
                                                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                                e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "ef27d756f9422666",
                                                    [
                                                        Array.from({
                                                            length: 50
                                                        }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                                                    ]
                                                ]
                                            ])
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/auth/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/auth/page.tsx",
                                    lineNumber: 183,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isLoading,
                                    style: {
                                        width: '100%',
                                        padding: '0.875rem',
                                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                        border: 'none',
                                        borderRadius: '12px',
                                        color: '#ffffff',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        cursor: isLoading ? 'not-allowed' : 'pointer',
                                        transition: 'all 0.3s ease',
                                        opacity: isLoading ? 0.7 : 1,
                                        transform: isLoading ? 'none' : 'translateY(0)',
                                        boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)'
                                    },
                                    onMouseEnter: (e)=>{
                                        if (!isLoading) {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(99, 102, 241, 0.6)';
                                        }
                                    },
                                    onMouseLeave: (e)=>{
                                        if (!isLoading) {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 4px 14px rgba(99, 102, 241, 0.4)';
                                        }
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "ef27d756f9422666",
                                            [
                                                Array.from({
                                                    length: 50
                                                }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                                            ]
                                        ]
                                    ]),
                                    children: isLoading ? 'Загрузка...' : isLogin ? 'Войти' : 'Зарегистрироваться'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/auth/page.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center'
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "ef27d756f9422666",
                                    [
                                        Array.from({
                                            length: 50
                                        }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                                    ]
                                ]
                            ]),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#94a3b8',
                                    fontSize: '0.9rem',
                                    margin: 0
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "ef27d756f9422666",
                                        [
                                            Array.from({
                                                length: 50
                                            }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                                        ]
                                    ]
                                ]),
                                children: [
                                    isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?',
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsLogin(!isLogin),
                                        style: {
                                            background: 'none',
                                            border: 'none',
                                            color: '#60a5fa',
                                            fontSize: '0.9rem',
                                            fontWeight: 600,
                                            cursor: 'pointer',
                                            textDecoration: 'none',
                                            padding: 0,
                                            marginLeft: '0.25rem'
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.color = '#818cf8';
                                            e.currentTarget.style.textDecoration = 'underline';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.color = '#60a5fa';
                                            e.currentTarget.style.textDecoration = 'none';
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "ef27d756f9422666",
                                                [
                                                    Array.from({
                                                        length: 50
                                                    }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                                                ]
                                            ]
                                        ]),
                                        children: isLogin ? 'Зарегистрируйтесь' : 'Войдите'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/auth/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/auth/page.tsx",
                                lineNumber: 258,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/page.tsx",
                            lineNumber: 257,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/auth/page.tsx",
                    lineNumber: 69,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/auth/page.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "ef27d756f9422666",
                dynamic: [
                    Array.from({
                        length: 50
                    }, (_, i)=>`
                    @keyframes pixel-float-${i} {
                        0% { 
                            transform: translateY(-10vh) rotate(0deg); 
                            opacity: 0; 
                        }
                        10% { 
                            opacity: 0.6; 
                        }
                        90% { 
                            opacity: 0.6; 
                        }
                        100% { 
                            transform: translateX(${(i % 3 - 1) * 50}vw) translateY(110vh) rotate(360deg); 
                            opacity: 0; 
                        }
                    }
                `).join('')
                ],
                children: ``
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/auth/page.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
}),
"[project]/node_modules/next/dist/compiled/client-only/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/node_modules/styled-jsx/dist/index/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/node_modules/next/dist/compiled/client-only/index.js [app-ssr] (ecmascript)");
var React = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
var isProd = typeof process !== "undefined" && process.env && ("TURBOPACK compile-time value", "development") === "production";
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
        var node = ("TURBOPACK compile-time value", "undefined") !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
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
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && this._optimizeForSpeed) //TURBOPACK unreachable
        ;
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
        if ("TURBOPACK compile-time truthy", 1) {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        //TURBOPACK unreachable
        ;
        var sheet;
        var insertionPoint;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || ("TURBOPACK compile-time value", "undefined") === "undefined") {
            var sheet = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : this._serverSheet;
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
        } else //TURBOPACK unreachable
        {
            var tag;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if ("TURBOPACK compile-time truthy", 1) {
            this._serverSheet.deleteRule(index);
            return;
        }
        //TURBOPACK unreachable
        ;
        var tag;
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if ("TURBOPACK compile-time truthy", 1) {
            return this._serverSheet.cssRules;
        }
        //TURBOPACK unreachable
        ;
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
    if ("TURBOPACK compile-time truthy", 1) {
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
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && !this._fromServer) //TURBOPACK unreachable
        ;
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
    var ref = React.useState(function() {
        return rootRegistry || configuredRegistry || createStyleRegistry();
    }), registry = ref[0];
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
var defaultRegistry = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
function JSXStyle(props) {
    var registry = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        registry.add(props);
        return null;
    }
    //TURBOPACK unreachable
    ;
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
"[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/styled-jsx/dist/index/index.js [app-ssr] (ecmascript)").style;
}),
];

//# sourceMappingURL=_7a473bc2._.js.map