import Image from "next/image";
import NavBar from "./components/NavBar";
import "./globals.css";


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-12 bg-background">
            <NavBar />
            <h1 className="text-c_black text-3xl font-bold">الدليل الرقمي </h1>
        </main>
    );
}
