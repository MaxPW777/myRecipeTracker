import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "mainbg": "#0D202B",
                "secondarybg": "#102531",
                "accent": "#D47559",
                "border": "#227AAD",
            },
            aspectRatio: {
                "card": "1/1.5",
            }
        },
    },
    plugins: [],
};
export default config;
