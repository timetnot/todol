"use client";

import { useState } from "react";

export default function Home() {
    const [xp, setXp] = useState(0);


    const handleStart = () => {
        window.location.href = "/dashboard"; // переход на области жизни
    };


    const handleXpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setXp(Number(event.target.value));
    };

    return (
        <div className="app-page">
            <div className="background-pixels">
                {Array.from({ length: 500 }).map((_, i) => (
                    <div key={i} className={`pixel pixel-variant-${(i % 6) + 1}`} />
                ))}
            </div>

            <div className="content-shell">
                <main className="content-main">
                    <section className="dashboard-card">
                        <header className="card-header">
                            <div className="card-header-left">
                                <span className="status-indicator" />
                                <span className="app-name">Todol</span>
                            </div>
                            <span className="pill pill-muted">Today</span>
                        </header>

                        <div className="card-body">
                            <div className="intro-block">
                                <p className="intro-eyebrow">LIFE UPGRADE</p>
                                <h1 className="intro-title">Прокачай свою жизнь</h1>
                                <p className="intro-subtitle">
                                    Каждый день - новый уровень. Планируй задачи, получай XP и
                                    смотри, как растёт твой прогресс.
                                </p>
                            </div>

                            <div className="level-block">
                                <div className="level-progress-wrapper">
                                    <div className="level-progress-bar">
                                        <div
                                            className="level-progress-fill"
                                            style={{ width: `${xp}%` }}
                                        />
                                    </div>

                                    <input
                                        type="range"
                                        min={0}
                                        max={100}
                                        value={xp}
                                        onChange={handleXpChange}
                                        className="xp-slider"
                                    />
                                </div>

                                <span className="level-caption">
                  {xp} / 100 XP до следующего уровня
                </span>
                            </div>
                        </div>

                        <div className="card-actions">
                            <button
                                type="button"
                                className="primary-button"
                                onClick={handleStart}
                            >
                                Начать сейчас
                            </button>
                        </div>
                    </section>
                </main>

                <footer className="app-footer">
          <span className="app-footer-left">
            © {new Date().getFullYear()} Todol
          </span>
                    <span className="app-footer-right">
            Есть вопросы? Напиши нам.
          </span>
                </footer>
            </div>
        </div>
    );
}

