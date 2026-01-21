"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import "../../styles/home.css";
import "../../styles/layout.css";

export default function HelpPage() {
    const router = useRouter();
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const faqItems = [
        {
            id: "getting-started",
            question: "Как начать пользоваться Todol?",
            answer: "Начните с создания задач в разных сферах жизни. Вы можете добавлять основные задачи и подзадачи, отмечать их выполненными и перетаскивать для изменения порядка."
        },
        {
            id: "areas",
            question: "Что такое сферы жизни?",
            answer: "Сферы жизни — это 8 ключевых областей: Отношения, Семья, Карьера, Финансы, Питание, Спорт, Здоровье и Отдых. Каждая сфера имеет свой цвет и иконку для удобства."
        },
        {
            id: "tasks",
            question: "Как управлять задачами?",
            answer: "Вы можете создавать основные задачи, добавлять подзадачи, отмечать их выполненными, удалять и изменять порядок перетаскиванием. Все изменения сохраняются автоматически."
        },
        {
            id: "progress",
            question: "Как отслеживать прогресс?",
            answer: "На главной странице вы видите прогресс по каждой сфере в процентах. Прогресс рассчитывается на основе выполненных задач и подзадач."
        },
        {
            id: "data",
            question: "Где хранятся мои данные?",
            answer: "Все данные хранятся локально в вашем браузере. Они доступны только вам и не передаются на сервер."
        }
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Помощь</h1>
                <p>Короткие ответы на частые вопросы</p>
            </div>

            <div className="help-content">
                <div className="help-section">
                    <h2>Частые вопросы</h2>
                    <div className="faq-list">
                        {faqItems.map(item => (
                            <div key={item.id} className="faq-item">
                                <button
                                    className="faq-question"
                                    onClick={() => toggleSection(item.id)}
                                >
                                    <span>{item.question}</span>
                                    <span className="faq-toggle">
                                        {expandedSection === item.id ? "−" : "+"}
                                    </span>
                                </button>
                                <div className={`faq-answer ${expandedSection === item.id ? "expanded" : ""}`}>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="help-section">
                    <h2>Быстрые действия</h2>
                    <div className="quick-actions">
                        <button 
                            className="action-btn"
                            onClick={() => router.push("/dashboard")}
                        >
                            Перейти к панели управления
                        </button>
                        <button 
                            className="action-btn"
                            onClick={() => router.push("/profile")}
                        >
                            Перейти в профиль
                        </button>
                        <button 
                            className="action-btn"
                            onClick={() => router.push("/")}
                        >
                            На главную
                        </button>
                    </div>
                </div>

                <div className="help-section">
                    <h2>Связаться с нами</h2>
                    <p>Если ответа не нашлось, напишите нам.</p>
                    <button 
                        className="action-btn primary"
                        onClick={() => router.push("/contact")}
                    >
                        Открыть контакты
                    </button>
                </div>
            </div>
        </div>
    );
}
