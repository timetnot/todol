"use client";

import { useState } from "react";
import "../../styles/home.css";
import "../../styles/layout.css";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        

        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Контакты</h1>
                <p>Обратная связь и поддержка</p>
            </div>

            <div className="contact-content">
                <div className="contact-form-section">
                    <h2>Напишите нам</h2>
                    {isSubmitted ? (
                        <div className="success-message">
                            Спасибо! Мы свяжемся с вами в ближайшее время.
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Ваше имя</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Тема</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Сообщение</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="form-textarea"
                                />
                            </div>

                            <button type="submit" className="submit-btn">
                                Отправить сообщение
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
