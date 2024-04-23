import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png"
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
    return (
        <form action="" className="w-2/5 my-12 align-middle flex justify-center">
            <div className="relative flex items-center text-gray-400 focus-within:text-gray-800">
                <MagnifyingGlassIcon className="w-8 h-8 absolute right-4 pointer-events-none text-c_icons" />
            </div>
            <input
                type="text"
                name="search"
                placeholder="البحث"
                aria-label="Search"
                className="w-full pr-14 py-4 font-semibold placeholder-gray-500 ring-2 rounded-md ring-c_focus" />
            <button className="relative flex items-center text-gray-400 focus-within:text-gray-800">
                <AdjustmentsHorizontalIcon className="w-8 h-8 absolute left-4 text-c_icons" />
            </button>
        </form>
    );
}