import type { ReactNode } from "react";
import ClientLayout from "../components/ClientLayout";
import "../styles/home.css";
import "../styles/layout.css";
import "../styles/areas.css";

export const metadata = {
    title: "Todol",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="ru">
        <body>
            <ClientLayout>{children}</ClientLayout>
        </body>
        </html>
    );
}



