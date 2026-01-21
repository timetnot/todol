(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/areas/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpherePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Данные о сферах
const spheresData = {
    1: {
        title: "Отношения",
        icon: "💕",
        color: "#ec4899",
        subtitle: "Тепло и забота"
    },
    2: {
        title: "Семья",
        icon: "👨‍👩‍👧",
        color: "#10b981",
        subtitle: "Семейное счастье"
    },
    3: {
        title: "Карьера",
        icon: "💼",
        color: "#f59e0b",
        subtitle: "Профессиональный рост"
    },
    4: {
        title: "Финансы",
        icon: "💰",
        color: "#8b5cf6",
        subtitle: "Финансовая свобода"
    },
    5: {
        title: "Питание",
        icon: "🥗",
        color: "#f97316",
        subtitle: "Здоровое питание"
    },
    6: {
        title: "Спорт",
        icon: "🏋️",
        color: "#ef4444",
        subtitle: "Физическая форма"
    },
    7: {
        title: "Здоровье",
        icon: "🩺",
        color: "#3b82f6",
        subtitle: "Полные силы"
    },
    8: {
        title: "Отдых",
        icon: "😌",
        color: "#06b6d4",
        subtitle: "Восстановление сил"
    }
};
// Функция для сохранения задач в localStorage
const saveTasks = (sphereId, tasks)=>{
    localStorage.setItem(`sphere_${sphereId}_tasks`, JSON.stringify(tasks));
    // Отправляем событие для обновления дашборда
    window.dispatchEvent(new Event('taskUpdated'));
};
// Функция для получения задач из localStorage
const getTasks = (sphereId)=>{
    const tasks = localStorage.getItem(`sphere_${sphereId}_tasks`);
    if (!tasks) return [];
    try {
        return JSON.parse(tasks);
    } catch  {
        return [];
    }
};
// Генерируем тематические задачи для каждой сферы
const generateDemoTasks = (sphereId)=>{
    const thematicTasks = {
        1: [
            {
                id: '1',
                title: 'Позвонить родителям',
                completed: false
            },
            {
                id: '2',
                title: 'Организовать свидание с партнером',
                completed: false,
                subtasks: [
                    {
                        id: '2-1',
                        title: 'Выбрать романтическое место',
                        completed: false
                    },
                    {
                        id: '2-2',
                        title: 'Купить цветы',
                        completed: false
                    },
                    {
                        id: '2-3',
                        title: 'Забронировать столик',
                        completed: false
                    }
                ]
            },
            {
                id: '3',
                title: 'Написать старому другу',
                completed: true
            },
            {
                id: '4',
                title: 'Сходить на встречу одноклассников',
                completed: false
            },
            {
                id: '5',
                title: 'Помочь соседу с переездом',
                completed: false
            }
        ],
        2: [
            {
                id: '1',
                title: 'Семейный ужин в воскресенье',
                completed: false,
                subtasks: [
                    {
                        id: '1-1',
                        title: 'Купить продукты',
                        completed: false
                    },
                    {
                        id: '1-2',
                        title: 'Приготовить любимое блюдо',
                        completed: false
                    }
                ]
            },
            {
                id: '2',
                title: 'Помочь детям с домашкой',
                completed: false
            },
            {
                id: '3',
                title: 'Планирование семейного отдыха',
                completed: false,
                subtasks: [
                    {
                        id: '3-1',
                        title: 'Изучить варианты',
                        completed: true
                    },
                    {
                        id: '3-2',
                        title: 'Забронировать отель',
                        completed: false
                    }
                ]
            },
            {
                id: '4',
                title: 'Починить детскую игрушку',
                completed: false
            },
            {
                id: '5',
                title: 'Семейное фото',
                completed: false
            }
        ],
        3: [
            {
                id: '1',
                title: 'Обновить резюме и портфолио',
                completed: false,
                subtasks: [
                    {
                        id: '1-1',
                        title: 'Добавить новые проекты',
                        completed: false
                    },
                    {
                        id: '1-2',
                        title: 'Проверить орфографию',
                        completed: false
                    }
                ]
            },
            {
                id: '2',
                title: 'Пройти онлайн-курс по новой технологии',
                completed: false,
                subtasks: [
                    {
                        id: '2-1',
                        title: 'Модуль 1: Введение',
                        completed: true
                    },
                    {
                        id: '2-2',
                        title: 'Модуль 2: Основы',
                        completed: false
                    },
                    {
                        id: '2-3',
                        title: 'Модуль 3: Практика',
                        completed: false
                    }
                ]
            },
            {
                id: '3',
                title: 'Посетить нетворкинг-мероприятие',
                completed: false
            },
            {
                id: '4',
                title: 'Подготовиться к собеседованию',
                completed: false
            },
            {
                id: '5',
                title: 'Обсудить повышение с начальником',
                completed: false
            }
        ],
        4: [
            {
                id: '1',
                title: 'Составить бюджет на месяц',
                completed: false,
                subtasks: [
                    {
                        id: '1-1',
                        title: 'Учесть все доходы',
                        completed: true
                    },
                    {
                        id: '1-2',
                        title: 'Планировать расходы',
                        completed: false
                    },
                    {
                        id: '1-3',
                        title: 'Запланировать сбережения',
                        completed: false
                    }
                ]
            },
            {
                id: '2',
                title: 'Открыть накопительный счет',
                completed: false
            },
            {
                id: '3',
                title: 'Изучить основы инвестирования',
                completed: false,
                subtasks: [
                    {
                        id: '3-1',
                        title: 'Прочитать книгу об инвестициях',
                        completed: false
                    },
                    {
                        id: '3-2',
                        title: 'Посмотреть видеоуроки',
                        completed: false
                    }
                ]
            },
            {
                id: '4',
                title: 'Отказаться от одной ненужной подписки',
                completed: true
            },
            {
                id: '5',
                title: 'Сравнить условия банковских карт',
                completed: false
            }
        ],
        5: [
            {
                id: '1',
                title: 'Составить план питания на неделю',
                completed: false,
                subtasks: [
                    {
                        id: '1-1',
                        title: 'Завтраки',
                        completed: false
                    },
                    {
                        id: '1-2',
                        title: 'Обеды',
                        completed: false
                    },
                    {
                        id: '1-3',
                        title: 'Ужины',
                        completed: false
                    }
                ]
            },
            {
                id: '2',
                title: 'Купить здоровые продукты',
                completed: false
            },
            {
                id: '3',
                title: 'Приготовить полезный ужин',
                completed: false
            },
            {
                id: '4',
                title: 'Выпить 2 литра воды',
                completed: true
            },
            {
                id: '5',
                title: 'Изучить новые рецепты салатов',
                completed: false,
                subtasks: [
                    {
                        id: '5-1',
                        title: 'Найти 5 рецептов',
                        completed: true
                    },
                    {
                        id: '5-2',
                        title: 'Попробовать приготовить',
                        completed: false
                    }
                ]
            }
        ],
        6: [
            {
                id: '1',
                title: 'Утренняя пробежка 5 км',
                completed: false
            },
            {
                id: '2',
                title: 'Тренировка в зале',
                completed: false,
                subtasks: [
                    {
                        id: '2-1',
                        title: 'Разминка 10 мин',
                        completed: true
                    },
                    {
                        id: '2-2',
                        title: 'Силовые упражнения',
                        completed: false
                    },
                    {
                        id: '2-3',
                        title: 'Растяжка',
                        completed: false
                    }
                ]
            },
            {
                id: '3',
                title: 'Йога или пилатес',
                completed: false
            },
            {
                id: '4',
                title: 'Записаться в бассейн',
                completed: false
            },
            {
                id: '5',
                title: 'Купить новый спортинвентарь',
                completed: false
            }
        ],
        7: [
            {
                id: '1',
                title: 'Записаться к врачу на профилактику',
                completed: false
            },
            {
                id: '2',
                title: 'Пропить курс витаминов',
                completed: false,
                subtasks: [
                    {
                        id: '2-1',
                        title: 'Купить витамины',
                        completed: true
                    },
                    {
                        id: '2-2',
                        title: 'Составить график приема',
                        completed: false
                    }
                ]
            },
            {
                id: '3',
                title: 'Наладить режим сна 8 часов',
                completed: false
            },
            {
                id: '4',
                title: 'Сделать зарядку каждое утро',
                completed: false
            },
            {
                id: '5',
                title: 'Пройти медицинское обследование',
                completed: false
            }
        ],
        8: [
            {
                id: '1',
                title: 'Медитация 15 минут утром',
                completed: false
            },
            {
                id: '2',
                title: 'Прочитать главу книги',
                completed: false,
                subtasks: [
                    {
                        id: '2-1',
                        title: 'Выбрать интересную книгу',
                        completed: true
                    },
                    {
                        id: '2-2',
                        title: 'Выделить время для чтения',
                        completed: false
                    }
                ]
            },
            {
                id: '3',
                title: 'Прогулка в парке',
                completed: false
            },
            {
                id: '4',
                title: 'Посмотреть relaxing фильм',
                completed: false
            },
            {
                id: '5',
                title: 'Принять горячую ванну с пеной',
                completed: false
            }
        ]
    };
    return thematicTasks[sphereId] || [
        {
            id: '1',
            title: 'Новая задача 1',
            completed: false
        },
        {
            id: '2',
            title: 'Новая задача 2',
            completed: false
        },
        {
            id: '3',
            title: 'Новая задача 3',
            completed: false
        }
    ];
};
function SpherePage({ params }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const resolvedParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const sphereId = parseInt(resolvedParams.id);
    const sphere = spheresData[sphereId];
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newTaskTitle, setNewTaskTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [expandedTasks, setExpandedTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpherePage.useEffect": ()=>{
            if (!sphere) {
                router.push('/dashboard');
                return;
            }
            // Загружаем задачи или создаем демо
            const savedTasks = getTasks(sphereId);
            if (savedTasks.length === 0) {
                const demoTasks = generateDemoTasks(sphereId);
                setTasks(demoTasks);
                saveTasks(sphereId, demoTasks);
            } else {
                setTasks(savedTasks);
            }
        }
    }["SpherePage.useEffect"], [
        sphereId,
        sphere,
        router
    ]);
    const addTask = ()=>{
        if (!newTaskTitle.trim()) return;
        const newTask = {
            id: Date.now().toString(),
            title: newTaskTitle,
            completed: false
        };
        const updatedTasks = [
            ...tasks,
            newTask
        ];
        setTasks(updatedTasks);
        saveTasks(sphereId, updatedTasks);
        setNewTaskTitle('');
    };
    const toggleTask = (taskId)=>{
        const updatedTasks = tasks.map((task)=>task.id === taskId ? {
                ...task,
                completed: !task.completed
            } : task);
        setTasks(updatedTasks);
        saveTasks(sphereId, updatedTasks);
    };
    const deleteTask = (taskId)=>{
        const updatedTasks = tasks.filter((task)=>task.id !== taskId);
        setTasks(updatedTasks);
        saveTasks(sphereId, updatedTasks);
    };
    const addSubtask = (taskId, subtaskTitle)=>{
        if (!subtaskTitle.trim()) return;
        const updatedTasks = tasks.map((task)=>{
            if (task.id === taskId) {
                const newSubtask = {
                    id: Date.now().toString(),
                    title: subtaskTitle,
                    completed: false
                };
                return {
                    ...task,
                    subtasks: [
                        ...task.subtasks || [],
                        newSubtask
                    ]
                };
            }
            return task;
        });
        setTasks(updatedTasks);
        saveTasks(sphereId, updatedTasks);
    };
    const toggleSubtask = (taskId, subtaskId)=>{
        const updatedTasks = tasks.map((task)=>{
            if (task.id === taskId) {
                return {
                    ...task,
                    subtasks: task.subtasks?.map((subtask)=>subtask.id === subtaskId ? {
                            ...subtask,
                            completed: !subtask.completed
                        } : subtask)
                };
            }
            return task;
        });
        setTasks(updatedTasks);
        saveTasks(sphereId, updatedTasks);
    };
    const deleteSubtask = (taskId, subtaskId)=>{
        const updatedTasks = tasks.map((task)=>{
            if (task.id === taskId) {
                return {
                    ...task,
                    subtasks: task.subtasks?.filter((subtask)=>subtask.id !== subtaskId)
                };
            }
            return task;
        });
        setTasks(updatedTasks);
        saveTasks(sphereId, updatedTasks);
    };
    const toggleExpanded = (taskId)=>{
        const newExpanded = new Set(expandedTasks);
        if (newExpanded.has(taskId)) {
            newExpanded.delete(taskId);
        } else {
            newExpanded.add(taskId);
        }
        setExpandedTasks(newExpanded);
    };
    if (!sphere) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Сфера не найдена"
        }, void 0, false, {
            fileName: "[project]/src/app/areas/[id]/page.tsx",
            lineNumber: 281,
            columnNumber: 16
        }, this);
    }
    const completedCount = tasks.filter((task)=>{
        if (task.subtasks && task.subtasks.length > 0) {
            return task.subtasks.every((st)=>st.completed);
        }
        return task.completed;
    }).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #0f172a 0%, #000 100%)',
            padding: '2rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/dashboard'),
                        style: {
                            padding: '0.5rem 1rem',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '8px',
                            color: '#ffffff',
                            cursor: 'pointer',
                            fontSize: '1rem'
                        },
                        children: "← Назад"
                    }, void 0, false, {
                        fileName: "[project]/src/app/areas/[id]/page.tsx",
                        lineNumber: 304,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '3rem',
                            marginBottom: '0.5rem',
                            filter: `drop-shadow(0 8px 16px ${sphere.color}40)`
                        },
                        children: sphere.icon
                    }, void 0, false, {
                        fileName: "[project]/src/app/areas/[id]/page.tsx",
                        lineNumber: 319,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: '2rem',
                                    fontWeight: 800,
                                    color: '#ffffff',
                                    marginBottom: '0.25rem'
                                },
                                children: sphere.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/areas/[id]/page.tsx",
                                lineNumber: 328,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '1rem',
                                    color: '#94a3b8',
                                    marginBottom: '0.5rem'
                                },
                                children: sphere.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/app/areas/[id]/page.tsx",
                                lineNumber: 336,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '0.9rem',
                                    color: sphere.color,
                                    fontWeight: 600
                                },
                                children: [
                                    "Выполнено: ",
                                    completedCount,
                                    "/",
                                    tasks.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/areas/[id]/page.tsx",
                                lineNumber: 343,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/areas/[id]/page.tsx",
                        lineNumber: 327,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/areas/[id]/page.tsx",
                lineNumber: 298,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: `2px solid ${sphere.color}30`,
                    borderRadius: '16px',
                    padding: '1.5rem',
                    marginBottom: '2rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: '1rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: newTaskTitle,
                            onChange: (e)=>setNewTaskTitle(e.target.value),
                            onKeyPress: (e)=>e.key === 'Enter' && addTask(),
                            placeholder: "Добавить новую задачу...",
                            style: {
                                flex: 1,
                                padding: '0.75rem 1rem',
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '8px',
                                color: '#ffffff',
                                fontSize: '1rem',
                                outline: 'none'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/areas/[id]/page.tsx",
                            lineNumber: 365,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: addTask,
                            style: {
                                padding: '0.75rem 1.5rem',
                                background: sphere.color,
                                border: 'none',
                                borderRadius: '8px',
                                color: '#ffffff',
                                fontSize: '1rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            },
                            children: "Добавить"
                        }, void 0, false, {
                            fileName: "[project]/src/app/areas/[id]/page.tsx",
                            lineNumber: 382,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/areas/[id]/page.tsx",
                    lineNumber: 361,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/areas/[id]/page.tsx",
                lineNumber: 354,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                },
                children: tasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: `1px solid ${task.completed ? sphere.color : 'rgba(255, 255, 255, 0.1)'}`,
                            borderRadius: '12px',
                            padding: '1rem',
                            transition: 'all 0.3s ease'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    marginBottom: task.subtasks && task.subtasks.length > 0 ? '0.75rem' : '0'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: task.completed,
                                        onChange: ()=>toggleTask(task.id),
                                        style: {
                                            width: '1.25rem',
                                            height: '1.25rem',
                                            cursor: 'pointer',
                                            accentColor: sphere.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/areas/[id]/page.tsx",
                                        lineNumber: 420,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            flex: 1,
                                            fontSize: '1.1rem',
                                            color: task.completed ? '#94a3b8' : '#ffffff',
                                            textDecoration: task.completed ? 'line-through' : 'none',
                                            fontWeight: 500
                                        },
                                        children: task.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/areas/[id]/page.tsx",
                                        lineNumber: 431,
                                        columnNumber: 29
                                    }, this),
                                    task.subtasks && task.subtasks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggleExpanded(task.id),
                                        style: {
                                            padding: '0.25rem 0.5rem',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            borderRadius: '6px',
                                            color: '#ffffff',
                                            fontSize: '0.8rem',
                                            cursor: 'pointer'
                                        },
                                        children: [
                                            expandedTasks.has(task.id) ? '−' : '+',
                                            " ",
                                            task.subtasks.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/areas/[id]/page.tsx",
                                        lineNumber: 442,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>deleteTask(task.id),
                                        style: {
                                            padding: '0.25rem 0.5rem',
                                            background: 'rgba(239, 68, 68, 0.2)',
                                            border: '1px solid rgba(239, 68, 68, 0.3)',
                                            borderRadius: '6px',
                                            color: '#ef4444',
                                            fontSize: '0.8rem',
                                            cursor: 'pointer'
                                        },
                                        children: "Удалить"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/areas/[id]/page.tsx",
                                        lineNumber: 458,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/areas/[id]/page.tsx",
                                lineNumber: 414,
                                columnNumber: 25
                            }, this),
                            task.subtasks && task.subtasks.length > 0 && expandedTasks.has(task.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginLeft: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.5rem',
                                    paddingTop: '0.75rem',
                                    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                                },
                                children: [
                                    task.subtasks.map((subtask)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: subtask.completed,
                                                    onChange: ()=>toggleSubtask(task.id, subtask.id),
                                                    style: {
                                                        width: '1rem',
                                                        height: '1rem',
                                                        cursor: 'pointer',
                                                        accentColor: sphere.color
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/areas/[id]/page.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        flex: 1,
                                                        fontSize: '0.95rem',
                                                        color: subtask.completed ? '#94a3b8' : '#cbd5e1',
                                                        textDecoration: subtask.completed ? 'line-through' : 'none'
                                                    },
                                                    children: subtask.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/areas/[id]/page.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>deleteSubtask(task.id, subtask.id),
                                                    style: {
                                                        padding: '0.2rem 0.4rem',
                                                        background: 'rgba(239, 68, 68, 0.1)',
                                                        border: '1px solid rgba(239, 68, 68, 0.2)',
                                                        borderRadius: '4px',
                                                        color: '#ef4444',
                                                        fontSize: '0.75rem',
                                                        cursor: 'pointer'
                                                    },
                                                    children: "×"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/areas/[id]/page.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, subtask.id, true, {
                                            fileName: "[project]/src/app/areas/[id]/page.tsx",
                                            lineNumber: 485,
                                            columnNumber: 37
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '0.5rem',
                                            marginTop: '0.5rem'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Добавить подзадачу...",
                                            onKeyPress: (e)=>{
                                                if (e.key === 'Enter') {
                                                    const target = e.target;
                                                    addSubtask(task.id, target.value);
                                                    target.value = '';
                                                }
                                            },
                                            style: {
                                                flex: 1,
                                                padding: '0.5rem',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                borderRadius: '6px',
                                                color: '#ffffff',
                                                fontSize: '0.9rem',
                                                outline: 'none'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/areas/[id]/page.tsx",
                                            lineNumber: 532,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/areas/[id]/page.tsx",
                                        lineNumber: 527,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/areas/[id]/page.tsx",
                                lineNumber: 476,
                                columnNumber: 29
                            }, this)
                        ]
                    }, task.id, true, {
                        fileName: "[project]/src/app/areas/[id]/page.tsx",
                        lineNumber: 404,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/areas/[id]/page.tsx",
                lineNumber: 402,
                columnNumber: 13
            }, this),
            tasks.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: '3rem',
                    color: '#94a3b8',
                    fontSize: '1.1rem'
                },
                children: "Нет задач. Добавьте первую задачу выше!"
            }, void 0, false, {
                fileName: "[project]/src/app/areas/[id]/page.tsx",
                lineNumber: 561,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/areas/[id]/page.tsx",
        lineNumber: 292,
        columnNumber: 9
    }, this);
}
_s(SpherePage, "17oGxXKif1HJCNS2VTRANsqhpRs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SpherePage;
var _c;
__turbopack_context__.k.register(_c, "SpherePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_areas_%5Bid%5D_page_tsx_dd3f5336._.js.map