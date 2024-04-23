'use client'

import Card from "./components/Card";
import NavBar from "./components/NavBar";
import React, { useEffect, useState } from 'react';
import SearchBar from "./components/SearchBar";
import "./globals.css";
import { BookOpenIcon, BookmarkIcon, PencilIcon, PencilSquareIcon, UserIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
//digital-guide/categories
export default function Home() {
    const [data, setData] = useState(null);
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://ymtaz.sa/api/client/digital-guide/categories', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,

                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
                console.log(result.data.categories)
            } catch (error) {
                console.error("Fetching error: ", error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }
    return (
        <main className="flex min-h-screen flex-col items-center py-4 px-12 bg-c_background">
            <NavBar />
            <h1 className="text-c_black text-3xl font-extrabold mt-16">الدليل الرقمي </h1>
            <SearchBar />
            <div className='w-4/5 mx-auto flex flex-wrap justify-center gap-6 mb-16'>
                {data.data.categories.map((category) => {
                return (
                <Link href='/screen2' className="group hover:bg-gradient-to-br hover:from-c_start hover:to-c_end aspect-square w-1/2 card p-4 rounded-lg transition duration-300 ease-in-out cursor-pointer  items-center justify-center flex flex-col p-4 w-full sm:w-1/3 lg:w-1/4">
                    <div className="mb-6 flex justify-center align-medium items-center text-card_gold_icons group-hover:text-c_white group-hover:bg-gradient-to-br group-hover:from-c_circle_start group-hover:to-c_circle_end bg-c_white rounded-full w-1/2 h-1/2">
                        <Image alt="category image" width="50" height="50" className="w-1/2 h-1/2" src={category.image} />
                    </div>
                    <h2 className=" text-lg font-bold mb-2 text-card_title group-hover:text-c_white">{category.title}</h2>
                    <div className=" text-card_text group-hover:text-c_white">متوفر عدد {category.lawyers_count}</div>
                    </Link>
                    )
                })}
            </div>
        </main>
    );
}
