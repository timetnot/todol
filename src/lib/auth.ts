const API_BASE_URL = 'http://localhost:8000/api.php';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    created_at: string;
    updated_at: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    password_confirmation?: string;
}

export interface AuthResponse {
    user: User;
    token: string;
}

class AuthService {
    private token: string | null = null;

    constructor() {
        if (typeof window !== 'undefined') {
            this.token = localStorage.getItem('auth_token');
        }
    }

    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        const url = `${API_BASE_URL}${endpoint}`;
        
        const config: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...(this.token && { 'Authorization': `Bearer ${this.token}` }),
                ...options.headers,
            },
            ...options,
        };

        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `HTTP Error: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Auth request failed:', error);
            throw error;
        }
    }

    async login(credentials: LoginRequest): Promise<AuthResponse> {
        try {
            const response = await this.request<AuthResponse>('/auth/login', {
                method: 'POST',
                body: JSON.stringify(credentials),
            });

            this.token = response.token;
            if (typeof window !== 'undefined') {
                localStorage.setItem('auth_token', response.token);
                localStorage.setItem('user', JSON.stringify(response.user));
            }

            return response;
        } catch (error) {
            this.logout();
            throw error;
        }
    }

    async register(userData: RegisterRequest): Promise<AuthResponse> {
        try {
            const response = await this.request<AuthResponse>('/auth/register', {
                method: 'POST',
                body: JSON.stringify(userData),
            });

            this.token = response.token;
            if (typeof window !== 'undefined') {
                localStorage.setItem('auth_token', response.token);
                localStorage.setItem('user', JSON.stringify(response.user));
            }

            return response;
        } catch (error) {
            this.logout();
            throw error;
        }
    }

    async logout(): Promise<void> {
        try {
            if (this.token) {
                await this.request('/auth/logout', {
                    method: 'POST',
                });
            }
        } catch (error) {
            console.error('Logout request failed:', error);
        } finally {
            this.token = null;
            if (typeof window !== 'undefined') {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('user');
            }
        }
    }

    async getCurrentUser(): Promise<User | null> {
        if (!this.token) {
            return null;
        }

        try {
            const user = await this.request<User>('/auth/user');
            return user;
        } catch (error) {
            console.error('Failed to get current user:', error);
            this.logout();
            return null;
        }
    }

    getToken(): string | null {
        return this.token;
    }

    getUserFromStorage(): User | null {
        if (typeof window === 'undefined') return null;
        
        const userData = localStorage.getItem('user');
        if (!userData) return null;
        
        try {
            return JSON.parse(userData);
        } catch {
            return null;
        }
    }

    isAuthenticated(): boolean {
        return !!this.token;
    }
}

export const authService = new AuthService();
