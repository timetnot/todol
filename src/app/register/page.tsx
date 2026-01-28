"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
    const [step, setStep] = useState(1); // 1: ввод данных, 2: подтверждение email
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            setError('Пароли не совпадают');
            return;
        }
        
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:8002/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    name, 
                    email, 
                    password, 
                    password_confirmation: confirmPassword 
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Код подтверждения отправлен на email');
                setStep(2);
            } else {
                setError(data.message || 'Ошибка при регистрации');
            }
        } catch (err: any) {
            setError(err.message || 'Ошибка при регистрации');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        
        setIsLoading(true);
        setError('');

        try {
            // Сначала проверяем код
            const verifyResponse = await fetch('http://localhost:8002/api/auth/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email, 
                    code: verificationCode 
                }),
            });

            const verifyData = await verifyResponse.json();

            if (!verifyResponse.ok) {
                setError(verifyData.message || 'Неверный код');
                setIsLoading(false);
                return;
            }

            // Если код верный, завершаем регистрацию
            const completeResponse = await fetch('http://localhost:8002/api/auth/complete-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    name, 
                    email, 
                    password 
                }),
            });

            const completeData = await completeResponse.json();

            if (completeResponse.ok) {
                // Сохраняем токен и пользователя в localStorage
                localStorage.setItem('token', completeData.token);
                localStorage.setItem('user', JSON.stringify(completeData.user));
                
                router.push('/profile');
            } else {
                setError(completeData.message || 'Ошибка при завершении регистрации');
            }
        } catch (err: any) {
            setError(err.message || 'Ошибка при подтверждении');
        } finally {
            setIsLoading(false);
        }
    };

    const handleResendCode = async () => {
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:8002/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    name, 
                    email, 
                    password, 
                    password_confirmation: confirmPassword 
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Код подтверждения отправлен повторно');
            } else {
                setError(data.message || 'Ошибка при отправке кода');
            }
        } catch (err: any) {
            setError(err.message || 'Ошибка при отправке кода');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(180deg, #0f172a 0%, #000 100%)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Анимированный фон */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden'
            }}>
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            background: ['#34c759', '#0ea5e9', '#f97316', '#a855f7', '#facc15'][i % 5],
                            animation: `fall-${i % 3} ${10 + (i % 3) * 2}s linear infinite`,
                            top: `${-10 - (i % 2) * 5}px`,
                            left: `${10 + (i * 5) % 90}%`,
                            animationDelay: `${i * 0.5}s`
                        }}
                    />
                ))}
            </div>

            <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                width: '100%',
                maxWidth: '400px',
                position: 'relative',
                zIndex: 10
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ 
                        fontSize: '2rem', 
                        fontWeight: 700, 
                        color: '#ffffff', 
                        marginBottom: '0.5rem',
                        background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a78bfa 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        {step === 1 ? 'Регистрация' : 'Подтверждение email'}
                    </h1>
                    <p style={{ 
                        fontSize: '0.9rem', 
                        color: '#94a3b8', 
                        margin: 0 
                    }}>
                        {step === 1 ? 'Создайте новый аккаунт' : 'Введите код из email'}
                    </p>
                </div>

                {error && (
                    <div style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        borderRadius: '8px',
                        padding: '0.75rem',
                        marginBottom: '1rem',
                        color: '#ef4444',
                        fontSize: '0.875rem'
                    }}>
                        {error}
                    </div>
                )}

                {message && (
                    <div style={{
                        background: 'rgba(34, 197, 94, 0.1)',
                        border: '1px solid rgba(34, 197, 94, 0.2)',
                        borderRadius: '8px',
                        padding: '0.75rem',
                        marginBottom: '1rem',
                        color: '#22c55e',
                        fontSize: '0.875rem'
                    }}>
                        {message}
                    </div>
                )}

                {step === 1 ? (
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ 
                                display: 'block', 
                                color: '#e2e8f0', 
                                marginBottom: '0.5rem',
                                fontSize: '0.875rem',
                                fontWeight: 500
                            }}>
                                Имя
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '8px',
                                    color: '#ffffff',
                                    fontSize: '0.875rem',
                                    outline: 'none',
                                    transition: 'all 0.2s'
                                }}
                                placeholder="Введите ваше имя"
                            />
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ 
                                display: 'block', 
                                color: '#e2e8f0', 
                                marginBottom: '0.5rem',
                                fontSize: '0.875rem',
                                fontWeight: 500
                            }}>
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '8px',
                                    color: '#ffffff',
                                    fontSize: '0.875rem',
                                    outline: 'none',
                                    transition: 'all 0.2s'
                                }}
                                placeholder="your@email.com"
                            />
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ 
                                display: 'block', 
                                color: '#e2e8f0', 
                                marginBottom: '0.5rem',
                                fontSize: '0.875rem',
                                fontWeight: 500
                            }}>
                                Пароль
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '8px',
                                    color: '#ffffff',
                                    fontSize: '0.875rem',
                                    outline: 'none',
                                    transition: 'all 0.2s'
                                }}
                                placeholder="Минимум 6 символов"
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ 
                                display: 'block', 
                                color: '#e2e8f0', 
                                marginBottom: '0.5rem',
                                fontSize: '0.875rem',
                                fontWeight: 500
                            }}>
                                Подтвердите пароль
                            </label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '8px',
                                    color: '#ffffff',
                                    fontSize: '0.875rem',
                                    outline: 'none',
                                    transition: 'all 0.2s'
                                }}
                                placeholder="Повторите пароль"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            style={{
                                width: '100%',
                                padding: '0.875rem',
                                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                                border: 'none',
                                borderRadius: '8px',
                                color: '#ffffff',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                cursor: isLoading ? 'not-allowed' : 'pointer',
                                transition: 'all 0.2s',
                                opacity: isLoading ? 0.7 : 1
                            }}
                        >
                            {isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleVerify}>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ 
                                display: 'block', 
                                color: '#e2e8f0', 
                                marginBottom: '0.5rem',
                                fontSize: '0.875rem',
                                fontWeight: 500
                            }}>
                                Код подтверждения
                            </label>
                            <input
                                type="text"
                                value={verificationCode}
                                onChange={(e) => setVerificationCode(e.target.value)}
                                required
                                maxLength={6}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '8px',
                                    color: '#ffffff',
                                    fontSize: '1.5rem',
                                    textAlign: 'center',
                                    letterSpacing: '0.25rem',
                                    outline: 'none',
                                    transition: 'all 0.2s'
                                }}
                                placeholder="000000"
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                            <p style={{ 
                                color: '#94a3b8', 
                                fontSize: '0.75rem',
                                margin: 0
                            }}>
                                Код отправлен на {email}
                            </p>
                            <button
                                type="button"
                                onClick={handleResendCode}
                                disabled={isLoading}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: '#3b82f6',
                                    fontSize: '0.75rem',
                                    cursor: isLoading ? 'not-allowed' : 'pointer',
                                    textDecoration: 'underline',
                                    marginTop: '0.5rem'
                                }}
                            >
                                {isLoading ? 'Отправка...' : 'Отправить код повторно'}
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            style={{
                                width: '100%',
                                padding: '0.875rem',
                                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                                border: 'none',
                                borderRadius: '8px',
                                color: '#ffffff',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                cursor: isLoading ? 'not-allowed' : 'pointer',
                                transition: 'all 0.2s',
                                opacity: isLoading ? 0.7 : 1
                            }}
                        >
                            {isLoading ? 'Проверка...' : 'Подтвердить'}
                        </button>
                    </form>
                )}

                <div style={{ 
                    textAlign: 'center', 
                    marginTop: '1.5rem' 
                }}>
                    <p style={{ 
                        color: '#94a3b8', 
                        fontSize: '0.875rem',
                        margin: 0
                    }}>
                        Уже есть аккаунт?{' '}
                        <a 
                            href="/login" 
                            style={{ 
                                color: '#3b82f6', 
                                textDecoration: 'none',
                                fontWeight: 500
                            }}
                        >
                            Войти
                        </a>
                    </p>
                </div>
            </div>

            <style jsx>{`
                @keyframes fall-0 {
                    to { transform: translateY(100vh) rotate(360deg); }
                }
                @keyframes fall-1 {
                    to { transform: translateY(100vh) rotate(-360deg); }
                }
                @keyframes fall-2 {
                    to { transform: translateY(100vh) rotate(720deg); }
                }
            `}</style>
        </div>
    );
}
