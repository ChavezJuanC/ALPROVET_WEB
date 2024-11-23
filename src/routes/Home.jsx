import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";

function Home() {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={`w-full h-screen ${
                theme ? "bg-softWhite" : "bg-slate-600"
            }`}
        >
            HOME
        </div>
    );
}

export default Home;
