import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { Kufam } from "@/ui/fonts"

export const metadata: Metadata = {
  title: "Recipe Tracker",
  description: "by Ludo, Coco and Max",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Kufam.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
