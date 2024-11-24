import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";

function Home() {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={`w-full h-screen ${
                theme ? "bg-softWhite" : "bg-black"
            }`}
        >
            HOME
        </div>
    );
}

export default Home;
