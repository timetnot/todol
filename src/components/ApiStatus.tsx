"use client";

import { useState, useEffect } from 'react';

export function ApiStatus() {
    const [status, setStatus] = useState<'checking' | 'online' | 'offline'>('checking');
    const [lastCheck, setLastCheck] = useState<string>('');

    useEffect(() => {
        const checkApiStatus = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8002/api/todos');
                if (response.ok) {
                    setStatus('online');
                } else {
                    setStatus('offline');
                }
            } catch (error) {
                setStatus('offline');
            }
            setLastCheck(new Date().toLocaleTimeString('ru-RU'));
        };

        checkApiStatus();
        const interval = setInterval(checkApiStatus, 10000); // Проверяем каждые 10 секунд

        return () => clearInterval(interval);
    }, []);

    const getStatusColor = () => {
        switch (status) {
            case 'online': return '#10b981';
            case 'offline': return '#ef4444';
            case 'checking': return '#f59e0b';
            default: return '#6b7280';
        }
    };

    const getStatusText = () => {
        switch (status) {
            case 'online': return 'API онлайн';
            case 'offline': return 'API оффлайн';
            case 'checking': return 'Проверка...';
            default: return 'Неизвестно';
        }
    };

    return (
        <>
            <div style={{
                position: 'fixed',
                top: '10px',
                right: '10px',
                background: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                zIndex: 9999,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${getStatusColor()}30`
            }}>
                <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: getStatusColor(),
                    animation: status === 'checking' ? 'pulse 1s infinite' : 'none'
                }} />
                <div>
                    <div>{getStatusText()}</div>
                    {lastCheck && (
                        <div style={{ fontSize: '10px', opacity: 0.7 }}>
                            {lastCheck}
                        </div>
                    )}
                </div>
            </div>
            <style jsx>{`
                @keyframes pulse {
                    0% { opacity: 1; }
                    50% { opacity: 0.5; }
                    100% { opacity: 1; }
                }
            `}</style>
        </>
    );
}
