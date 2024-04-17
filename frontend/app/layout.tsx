import type {Metadata} from "next";
import "./globals.css";
import Header from "./components/Header";
import ReactQueryProvider from "./providers/ReactQueryProvider";

import {Kufam} from "@/ui/fonts"
import { QueryClientProvider } from "react-query";

export const metadata: Metadata = {
    title: "Recipe Tracker",
    description: "by Ludo, Coco and Max",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ReactQueryProvider>
            <html lang="en">
            <body className={Kufam.className}>
            <Header/>
            {children}
            </body>
            </html>
        </ReactQueryProvider>
    );
}
