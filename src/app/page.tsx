import Card from "./components/Card";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import "./globals.css";
import { BookOpenIcon, BookmarkIcon, PencilIcon, PencilSquareIcon, UserIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center py-4 px-12 bg-c_background">
            <NavBar />
            <h1 className="text-c_black text-3xl font-extrabold mt-16">الدليل الرقمي </h1>
            <SearchBar />
            <div className='w-4/5 mx-auto flex flex-wrap justify-center gap-6 mb-16'>
                <Link href='/screen2' className="group hover:bg-gradient-to-br hover:from-c_start hover:to-c_end aspect-square w-1/2 card p-4 rounded-lg transition duration-300 ease-in-out cursor-pointer  items-center justify-center flex flex-col p-4 w-full sm:w-1/3 lg:w-1/4">
                    <div className="mb-6 flex justify-center align-medium items-center text-card_gold_icons group-hover:text-c_white group-hover:bg-gradient-to-br group-hover:from-c_circle_start group-hover:to-c_circle_end bg-c_white rounded-full w-1/2 h-1/2">
                        <PencilIcon className="w-1/2 h-1/2" />
                    </div>
                    <h2 className=" text-lg font-bold mb-2 text-card_title group-hover:text-c_white">موثق</h2>
                    <div className=" text-card_text group-hover:text-c_white">متوفر عدد 17</div>
                </Link>
                <Link href='/screen2'className="group hover:bg-gradient-to-br hover:from-c_start hover:to-c_end aspect-square w-1/2 card p-4 rounded-lg transition duration-300 ease-in-out cursor-pointer  items-center justify-center flex flex-col p-4 w-full sm:w-1/3 lg:w-1/4">
                    <div className="mb-6 flex justify-center align-medium items-center text-card_gold_icons group-hover:text-c_white group-hover:bg-gradient-to-br group-hover:from-c_circle_start group-hover:to-c_circle_end bg-c_white rounded-full w-1/2 h-1/2">
                        <UserIcon className="w-1/2 h-1/2" />
                    </div>
                    <h2 className=" text-lg font-bold mb-2 text-card_title group-hover:text-c_white">محامي مرخص</h2>
                    <div className=" text-card_text group-hover:text-c_white">متوفر عدد 17</div>
                </Link>
                <Link href='/screen2'className="group hover:bg-gradient-to-br hover:from-c_start hover:to-c_end aspect-square w-1/2 card p-4 rounded-lg transition duration-300 ease-in-out cursor-pointer  items-center justify-center flex flex-col p-4 w-full sm:w-1/3 lg:w-1/4">
                    <div className="mb-6 flex justify-center align-medium items-center text-card_gold_icons group-hover:text-c_white group-hover:bg-gradient-to-br group-hover:from-c_circle_start group-hover:to-c_circle_end bg-c_white rounded-full w-1/2 h-1/2">
                        <DocumentTextIcon className="w-1/2 h-1/2" />
                    </div>
                    <h2 className=" text-lg font-bold mb-2 text-card_title group-hover:text-c_white">محكم</h2>
                    <div className=" text-card_text group-hover:text-c_white">متوفر عدد 17</div>
                </Link>
                <Link href='/screen2'className="group hover:bg-gradient-to-br hover:from-c_start hover:to-c_end aspect-square w-1/2 card p-4 rounded-lg transition duration-300 ease-in-out cursor-pointer  items-center justify-center flex flex-col p-4 w-full sm:w-1/3 lg:w-1/4">
                    <div className="mb-6 flex justify-center align-medium items-center text-card_gold_icons group-hover:text-c_white group-hover:bg-gradient-to-br group-hover:from-c_circle_start group-hover:to-c_circle_end bg-c_white rounded-full w-1/2 h-1/2">
                        <BookmarkIcon className="w-1/2 h-1/2" />
                    </div>
                    <h2 className=" text-lg font-bold mb-2 text-card_title group-hover:text-c_white">باحث قانوني</h2>
                    <div className=" text-card_text group-hover:text-c_white">متوفر عدد 17</div>
                </Link>
                <Link href='/screen2'className="group hover:bg-gradient-to-br hover:from-c_start hover:to-c_end aspect-square w-1/2 card p-4 rounded-lg transition duration-300 ease-in-out cursor-pointer  items-center justify-center flex flex-col p-4 w-full sm:w-1/3 lg:w-1/4">
                    <div className="mb-6 flex justify-center align-medium items-center text-card_gold_icons group-hover:text-c_white group-hover:bg-gradient-to-br group-hover:from-c_circle_start group-hover:to-c_circle_end bg-c_white rounded-full w-1/2 h-1/2">
                        <PencilSquareIcon className="w-1/2 h-1/2" />
                    </div>
                    <h2 className=" text-lg font-bold mb-2 text-card_title group-hover:text-c_white">ناظر وقف</h2>
                    <div className=" text-card_text group-hover:text-c_white">متوفر عدد 17</div>
                </Link>
                <Link href='/screen2'className="group hover:bg-gradient-to-br hover:from-c_start hover:to-c_end aspect-square w-1/2 card p-4 rounded-lg transition duration-300 ease-in-out cursor-pointer  items-center justify-center flex flex-col p-4 w-full sm:w-1/3 lg:w-1/4">
                    <div className="mb-6 flex justify-center align-medium items-center text-card_gold_icons group-hover:text-c_white group-hover:bg-gradient-to-br group-hover:from-c_circle_start group-hover:to-c_circle_end bg-c_white rounded-full w-1/2 h-1/2">
                        <BookOpenIcon className="w-1/2 h-1/2" />
                    </div>
                    <h2 className=" text-lg font-bold mb-2 text-card_title group-hover:text-c_white">مأذون أنكحة</h2>
                    <div className=" text-card_text group-hover:text-c_white">متوفر عدد 17</div>
                </Link>
            </div>
        </main>
    );
}
