import type {Metadata} from "next";
import "./globals.css";
import Header from "./components/Header";
import ReactQueryProvider from "@/src/providers/ReactQueryProvider";

import {Kufam} from "@/src/ui/fonts"

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
