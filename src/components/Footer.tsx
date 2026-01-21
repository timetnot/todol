"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Todol</h3>
                        <p>Система управления жизнью и достижением целей</p>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Разделы</h4>
                        <ul>
                            <li><Link href="/">Главная</Link></li>
                            <li><Link href="/dashboard">Панель управления</Link></li>
                            <li><Link href="/profile">Профиль</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Поддержка</h4>
                        <ul>
                            <li><Link href="/help">Помощь</Link></li>
                            <li><Link href="/contact">Контакты</Link></li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; 2026 Todol. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
}
