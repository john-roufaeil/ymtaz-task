import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            sans: ['"Almarai"', 'sans-serif']
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'c_blue': '#2C4768',
            'c_background': '#F9F9F9',
            'c_black': '#252525',
            'c_icons': '#B0B0B0',
            'card_gold_icons': '#DDB762',
            'c_focus': '#DADADA',
            'c_white': '#ffffff',
            'c_start': '#e9c67c',
            'c_end': '#917332',
            'c_circle_start': '#d4b36a',
            'c_circle_end': '#6c521a',
            'c_circle': '#fceccc',
            'card_title': '#292019',
            'card_text': '#6F6863',
            'check_badge': '#1D9BF0',
            'star': '#FBB400',
            'gray_text': '#A3A4A5'
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
