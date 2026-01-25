"use client";

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { authService, User, LoginRequest, RegisterRequest } from '@/lib/auth';

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (credentials: LoginRequest) => Promise<void>;
    register: (userData: RegisterRequest) => Promise<void>;
    logout: () => void;
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export { AuthContext };

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // При инициализации проверяем авторизацию
        const storedToken = authService.getToken();
        const storedUser = authService.getUserFromStorage();
        
        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(storedUser);
        }
    }, []);

    const login = async (credentials: LoginRequest) => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await authService.login(credentials);
            setUser(response.user || null);
            setToken(response.token || null);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Login failed';
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const register = async (userData: RegisterRequest) => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await authService.register(userData);
            setUser(response.user || null);
            setToken(response.token || null);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Registration failed';
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        authService.logout();
        setUser(null);
        setToken(null);
        setError(null);
    };

    const value: AuthContextType = {
        user,
        token,
        login,
        register,
        logout,
        loading,
        error,
        isAuthenticated: !!(token && user)
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
