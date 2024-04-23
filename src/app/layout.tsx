import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ymtaz Task",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" dir="rtl">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="UTF-8"></meta>
            </Head>
            <body>{children}</body>
        </html>
    );
}

