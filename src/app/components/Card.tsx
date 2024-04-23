import React from 'react';

interface CardProps {
    title: string;
    // children: React.ReactNode
    children: string;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
    return (
        <button className="group hover:bg-gradient-to-br hover:from-c_start hover:to-c_end aspect-square w-1/2 card p-4 rounded-lg transition duration-300 ease-in-out cursor-pointer  items-center justify-center flex flex-col">
            <div className="group-hover:bg-gradient-to-br group-hover:from-c_circle_start group-hover:to-c_circle_end bg-c_white rounded-full w-1/2 h-1/2">hi</div>
            <h2 className=" text-lg font-bold">{title}</h2>
            <div>{children}</div>
        </button>
    );
};

export default Card;
// linear-gradient(to bottom right, #e9c67c, #917332)