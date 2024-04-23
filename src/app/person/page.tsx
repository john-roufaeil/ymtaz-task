import Card from "../components/Card";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import nahid from "../../../public/nahid.png"
import crown from "../../../public/crown.png"
import Image from "next/image";
import "./../globals.css";
import { CheckBadgeIcon, StarIcon } from "@heroicons/react/24/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center py-4 px-12 bg-c_background">
            <NavBar />
            <div className="mt-16 flex ">
            </div>
        </main>
    );
}
