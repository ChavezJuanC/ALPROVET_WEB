/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                softWhite: "#F4F4F4", // Replace with your custom color
                CustomPurple: "#6823A2",
                CusotmPurpleLight: "#B596CC", // Another custom color example
            },
        },
    },
    plugins: [],
};
