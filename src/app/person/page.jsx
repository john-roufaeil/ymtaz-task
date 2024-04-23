'use client'

import NavBar from "../components/NavBar";
import React, { useEffect, useState } from 'react';
import SearchBar from "../components/SearchBar";
import nahid from "../../../public/nahid.png"
import quote from "../../../public/quote.png"
import crown from "../../../public/crown.png"
import Image from "next/image";
import "./../globals.css";
import { CheckBadgeIcon, StarIcon } from "@heroicons/react/24/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
    const [data, setData] = useState(null);
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://ymtaz.sa/api/client/lawyer/5218', {
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
            <div className="mt-16 flex flex-col md:flex-row w-full gap-8">
                <div className="flex flex-col w-full md:w-3/5 gap-8">
                    <div className="w-full bg-c_white shadow-md py-6 px-12 rounded-lg">
                        <h2 className="text-c_blue text-2xl font-bold mb-8">المعلومات الشخصية</h2>
                        <div className="flex">
                            <div>
                                <Image src={nahid} alt="photo" className="w-full aspect-square" />
                                <CheckBadgeIcon className="text-check_badge w-4 h-4 ml-2" />
                            </div>
                            <div className="flex flex-col mr-4">
                                <h2 className="text-lg font-bold text-c_blue group-hover:text-c_white">عبد العزيز عبد الرحمن الربعي</h2>
                                <div className="flex my-4 ">
                                    <div className=" text-c_blue group-hover:text-c_white font-thin">مستشار قانوني</div>
                                    <Image src={crown} alt="crown" width="20" height="16" className="mr-2" />
                                </div>
                                <div className="flex items-center justify-center mb-8">
                                    <StarIcon className="text-star w-6 h-6 ml-1" />
                                    <StarIcon className="text-star w-6 h-6 ml-1" />
                                    <StarIcon className="text-star w-6 h-6 ml-1" />
                                    <StarIcon className="text-star w-6 h-6 ml-1" />
                                    <StarIcon className="text-star w-6 h-6 ml-1" />
                                    <div className=" group-hover:text-c_white flex gap-2 text-gray_text">
                                        <p >5.00</p>
                                        <p> التقييم العام من 154 من العملاء</p>
                                    </div>
                                    <button className="text-c_blue mr-6 hover:underline">اظهر التقييمات</button>
                                </div>
                                <div className="w-fit rounded-tl-lg rounded-br-lg bg-c_background p-4 flex">
                                    <div>
                                        <Image className="ml-2" src={quote} width="25" height="25" alt="quote" />
                                    </div>
                                    <div className="text-gray_text">
                                        <p className="text-gray_text mb-6">تميز الاستشاري بالاحترافية والخبرة العالية في المسائل القانونية</p>
                                        <div className="flex justify-between text-sm">
                                            <div className="flex">
                                                <StarIcon className="text-star w-4 h-4 ml-1" />
                                                <StarIcon className="text-star w-4 h-4 ml-1" />
                                                <StarIcon className="text-star w-4 h-4 ml-1" />
                                                <StarIcon className="text-star w-4 h-4 ml-1" />
                                                <StarIcon className="text-star w-4 h-4 ml-1" />
                                            </div>
                                            <p>Abdullah Faleh</p>
                                            <p>الخميس 3 فبراير 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-c_white shadow-md py-6 px-12 rounded-lg">
                        <h2 className="text-c_blue text-2xl font-bold mb-8">النبذة التعريفية</h2>
                        <p className="text-gray_text w-5/6">استشاري القانون عبد العزيز عبد الرحمن الربعي وهو محام مرخص في المملكة العربية السعودية، يحمل درجة البكالوريوس في القانون. يتمتع بخبرة تبلغ سنتين في مجال ممارسة القانون</p>
                    </div>
                </div>
                <div className="w-full md:w-2/5 bg-c_white shadow-md h-fit">
                    <div className="w-full bg-c_white shadow-md py-6 px-12 rounded-lg">
                        <h2 className="text-c_blue text-2xl font-bold mb-8 ">معلومات الحجز</h2>
                        {data.data.lawyer.services.map((service) => {
                            return (
                                <div className="bg-c_background mb-8 p-4 rounded-lg flex flex-col">
                                    <div className="flex justify-between">
                                        <div className="w-3/4 flex">
                                            <div className="w-1/3">
                                                <Image alt="service image" width="25" height="25" src={service.image} />
                                            </div>
                                            <div>
                                                <p className="text-c_blue text-lg font-bold">{service.title}</p>
                                                <p className="text-gray_text">{service.intro}</p>
                                                <p></p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-c_blue font-bold">سعر الخدمة</p>

                                            <p className="text-green">
                                                <span className=" text-2xl"> {service.ymtaz_price}</span>
                                                <span className=" mr-2">ر.س
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="w-11/12 bg-c_start rounded-2xl p-4 m-4  text-c_white">طلب الخدمة</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* <pre>{JSON.stringify(data.data.lawyer.services, null, 2)}</pre> */}

            </div>
        </main>
    );
}
