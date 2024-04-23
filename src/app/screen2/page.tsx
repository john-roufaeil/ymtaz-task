import Card from "./../components/Card";
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
                <Link href='/'>
                    <ArrowRightCircleIcon className="w-10 ml-2 hover:text-c_blue" />
                </Link>
                <h1 className="text-c_black text-3xl font-extrabold">محامي مرخص</h1>
            </div>
            <SearchBar />
            <div className='w-4/5 mx-auto flex flex-wrap justify-center gap-6 mb-16'>
                <button className="group hover:bg-gradient-to-br hover:from-c_start hover:to-c_end aspect-square transition-colors duration-300 shadow-md p-4 rounded-lg ease-in-out cursor-pointer  items-center justify-center flex flex-col w-full sm:w-1/3 lg:w-1/4">
                    <div className="mb-6 flex justify-center align-medium items-center text-card_gold_icons group-hover:text-c_white group-hover:bg-gradient-to-br group-hover:from-c_circle_start group-hover:to-c_circle_end bg-c_white rounded-full w-1/2 h-1/2">
                        <Image src={nahid} alt="photo" className="w-full h-full" />
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <CheckBadgeIcon className="text-check_badge w-4 h-4 ml-2" />
                        <h2 className="text-lg font-bold text-c_blue group-hover:text-c_white">عبد العزيز عبد الرحمن الربعي</h2>
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <div className=" text-c_blue group-hover:text-c_white font-thin">مستشار قانوني</div>
                        <Image src={crown} alt="crown" width="16" height="16" className="mr-2" />
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <StarIcon className="text-star w-4 h-4 ml-2" />
                        <div className=" text-c_blue group-hover:text-c_white">4.56 (35 مراجعة)</div>
                    </div>
                </button>
                <button className="group hover:bg-gradient-to-br hover:from-c_start hover:to-c_end aspect-square transition-colors duration-300 shadow-md p-4 rounded-lg ease-in-out cursor-pointer  items-center justify-center flex flex-col w-full sm:w-1/3 lg:w-1/4">
                    <div className="mb-6 flex justify-center align-medium items-center text-card_gold_icons group-hover:text-c_white group-hover:bg-gradient-to-br group-hover:from-c_circle_start group-hover:to-c_circle_end bg-c_white rounded-full w-1/2 h-1/2">
                        <Image src={nahid} alt="photo" className="w-full h-full" />
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <CheckBadgeIcon className="text-check_badge w-4 h-4 ml-2" />
                        <h2 className="text-lg font-bold text-c_blue group-hover:text-c_white">عبد العزيز عبد الرحمن الربعي</h2>
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <div className=" text-c_blue group-hover:text-c_white font-thin">مستشار قانوني</div>
                        <Image src={crown} alt="crown" width="16" height="16" className="mr-2" />
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <StarIcon className="text-star w-4 h-4 ml-2" />
                        <div className=" text-c_blue group-hover:text-c_white">4.56 (35 مراجعة)</div>
                    </div>
                </button>
                <button className="group hover:bg-gradient-to-br hover:from-c_start hover:to-c_end aspect-square transition-colors duration-300 shadow-md p-4 rounded-lg ease-in-out cursor-pointer  items-center justify-center flex flex-col w-full sm:w-1/3 lg:w-1/4">
                    <div className="mb-6 flex justify-center align-medium items-center text-card_gold_icons group-hover:text-c_white group-hover:bg-gradient-to-br group-hover:from-c_circle_start group-hover:to-c_circle_end bg-c_white rounded-full w-1/2 h-1/2">
                        <Image src={nahid} alt="photo" className="w-full h-full" />
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <CheckBadgeIcon className="text-check_badge w-4 h-4 ml-2" />
                        <h2 className="text-lg font-bold text-c_blue group-hover:text-c_white">عبد العزيز عبد الرحمن الربعي</h2>
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <div className=" text-c_blue group-hover:text-c_white font-thin">مستشار قانوني</div>
                        <Image src={crown} alt="crown" width="16" height="16" className="mr-2" />
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <StarIcon className="text-star w-4 h-4 ml-2" />
                        <div className=" text-c_blue group-hover:text-c_white">4.56 (35 مراجعة)</div>
                    </div>
                </button>
                <button className="group hover:bg-gradient-to-br hover:from-c_start hover:to-c_end aspect-square transition-colors duration-300 shadow-md p-4 rounded-lg ease-in-out cursor-pointer  items-center justify-center flex flex-col w-full sm:w-1/3 lg:w-1/4">
                    <div className="mb-6 flex justify-center align-medium items-center text-card_gold_icons group-hover:text-c_white group-hover:bg-gradient-to-br group-hover:from-c_circle_start group-hover:to-c_circle_end bg-c_white rounded-full w-1/2 h-1/2">
                        <Image src={nahid} alt="photo" className="w-full h-full" />
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <CheckBadgeIcon className="text-check_badge w-4 h-4 ml-2" />
                        <h2 className="text-lg font-bold text-c_blue group-hover:text-c_white">عبد العزيز عبد الرحمن الربعي</h2>
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <div className=" text-c_blue group-hover:text-c_white font-thin">مستشار قانوني</div>
                        <Image src={crown} alt="crown" width="16" height="16" className="mr-2" />
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <StarIcon className="text-star w-4 h-4 ml-2" />
                        <div className=" text-c_blue group-hover:text-c_white">4.56 (35 مراجعة)</div>
                    </div>
                </button>
                <button className="group hover:bg-gradient-to-br hover:from-c_start hover:to-c_end aspect-square transition-colors duration-300 shadow-md p-4 rounded-lg ease-in-out cursor-pointer  items-center justify-center flex flex-col w-full sm:w-1/3 lg:w-1/4">
                    <div className="mb-6 flex justify-center align-medium items-center text-card_gold_icons group-hover:text-c_white group-hover:bg-gradient-to-br group-hover:from-c_circle_start group-hover:to-c_circle_end bg-c_white rounded-full w-1/2 h-1/2">
                        <Image src={nahid} alt="photo" className="w-full h-full" />
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <CheckBadgeIcon className="text-check_badge w-4 h-4 ml-2" />
                        <h2 className="text-lg font-bold text-c_blue group-hover:text-c_white">عبد العزيز عبد الرحمن الربعي</h2>
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <div className=" text-c_blue group-hover:text-c_white font-thin">مستشار قانوني</div>
                        <Image src={crown} alt="crown" width="16" height="16" className="mr-2" />
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <StarIcon className="text-star w-4 h-4 ml-2" />
                        <div className=" text-c_blue group-hover:text-c_white">4.56 (35 مراجعة)</div>
                    </div>
                </button>
                <button className="group hover:bg-gradient-to-br hover:from-c_start hover:to-c_end aspect-square transition-colors duration-300 shadow-md p-4 rounded-lg ease-in-out cursor-pointer  items-center justify-center flex flex-col w-full sm:w-1/3 lg:w-1/4">
                    <div className="mb-6 flex justify-center align-medium items-center text-card_gold_icons group-hover:text-c_white group-hover:bg-gradient-to-br group-hover:from-c_circle_start group-hover:to-c_circle_end bg-c_white rounded-full w-1/2 h-1/2">
                        <Image src={nahid} alt="photo" className="w-full h-full" />
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <CheckBadgeIcon className="text-check_badge w-4 h-4 ml-2" />
                        <h2 className="text-lg font-bold text-c_blue group-hover:text-c_white">عبد العزيز عبد الرحمن الربعي</h2>
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <div className=" text-c_blue group-hover:text-c_white font-thin">مستشار قانوني</div>
                        <Image src={crown} alt="crown" width="16" height="16" className="mr-2" />
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <StarIcon className="text-star w-4 h-4 ml-2" />
                        <div className=" text-c_blue group-hover:text-c_white">4.56 (35 مراجعة)</div>
                    </div>
                </button>
            </div>
        </main>
    );
}
