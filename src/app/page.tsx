import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import "./globals.css";


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center py-4 px-12 bg-c_background">
            <NavBar />
            <h1 className="text-c_black text-3xl font-extrabold mt-16">الدليل الرقمي </h1>
            <SearchBar />
        </main>
    );
}
