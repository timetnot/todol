"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            await login({ email, password });
            router.push('/profile');
        } catch (err: any) {
            setError(err.message || 'Ошибка при входе');
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
            position: 'relative'
        }}>


            <div style={{
                width: '100%',
                maxWidth: '380px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '2.5rem',
                position: 'relative',
                zIndex: 10
            }}>

                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ 
                        fontSize: '1.75rem', 
                        fontWeight: 700, 
                        color: '#ffffff', 
                        marginBottom: '0.5rem',
                        background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a78bfa 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Вход
                    </h1>
                    <p style={{ 
                        fontSize: '0.95rem', 
                        color: '#94a3b8', 
                        margin: 0,
                        fontWeight: 400
                    }}>
                        Добро пожаловать!
                    </p>
                </div>
                
                {error && (
                    <div style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        borderRadius: '8px',
                        padding: '0.75rem',
                        marginBottom: '1.5rem',
                        textAlign: 'center'
                    }}>
                        <p style={{
                            color: '#f87171',
                            fontSize: '0.875rem',
                            margin: 0,
                            fontWeight: 500
                        }}>
                            {error}
                        </p>
                    </div>
                )}
                
                <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
                    <div style={{ marginBottom: '1.25rem' }}>
                        <label style={{ 
                            display: 'block', 
                            color: '#e2e8f0', 
                            fontWeight: 500, 
                            marginBottom: '0.5rem',
                            fontSize: '0.9rem'
                        }}>
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="email@example.com"
                            style={{
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
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                                e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                            }}
                        />
                    </div>
                    
                    <div style={{ marginBottom: '1.75rem' }}>
                        <label style={{ 
                            display: 'block', 
                            color: '#e2e8f0', 
                            fontWeight: 500, 
                            marginBottom: '0.5rem',
                            fontSize: '0.9rem'
                        }}>
                            Пароль
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="•••••••••"
                            style={{
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
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                                e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                            }}
                        />
                    </div>
                    
                    <button
                        type="submit"
                        disabled={isLoading}
                        style={{
                            width: '100%',
                            padding: '0.875rem',
                            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                            border: 'none',
                            borderRadius: '10px',
                            color: '#ffffff',
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            cursor: isLoading ? 'not-allowed' : 'pointer',
                            transition: 'all 0.3s ease',
                            opacity: isLoading ? 0.6 : 1,
                            transform: isLoading ? 'none' : 'translateY(0)',
                            boxShadow: '0 4px 14px rgba(99, 102, 241, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            if (!isLoading) {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(99, 102, 241, 0.4)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isLoading) {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 14px rgba(99, 102, 241, 0.3)';
                            }
                        }}
                    >
                        {isLoading ? 'Вход...' : 'Войти'}
                    </button>
                </form>
                
                <div style={{ textAlign: 'center' }}>
                    <p style={{ 
                        color: '#94a3b8', 
                        fontSize: '0.85rem',
                        margin: 0
                    }}>
                        Нет аккаунта?{' '}
                        <a 
                            href="/register" 
                            style={{
                                color: '#60a5fa',
                                fontWeight: 600,
                                textDecoration: 'none',
                                marginLeft: '0.25rem'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#818cf8';
                                e.currentTarget.style.textDecoration = 'underline';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#60a5fa';
                                e.currentTarget.style.textDecoration = 'none';
                            }}
                        >
                            Зарегистрироваться
                        </a>
                    </p>
                </div>
            </div>


            <style jsx>{`
                ${Array.from({ length: 30 }, (_, i) => `
                    @keyframes fall-${i} {
                        0% { transform: translateY(-10vh); opacity: 0; }
                        10% { opacity: 0.3; }
                        90% { opacity: 0.3; }
                        100% { transform: translateY(110vh); opacity: 0; }
                    }
                `).join('')}
            `}</style>
        </div>
    );
}
