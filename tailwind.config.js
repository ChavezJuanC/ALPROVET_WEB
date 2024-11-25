/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                softWhite: "#F4F4F4", 
                CustomPurple: "#6823A2",
                CusotmPurpleLight: "#B596CC",
            },
        },
    },
    plugins: [],
};
