"use client";

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { AuthProvider } from '@/hooks/useAuth';

interface ClientLayoutProps {
    children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
    return (
        <AuthProvider>
            <Header />
            <main>{children}</main>
            <Footer />
        </AuthProvider>
    );
}
