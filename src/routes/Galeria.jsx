import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";

function Galeria() {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={`w-full h-screen ${theme ? "bg-softWhite" : "bg-black"}`}
        >
            Galeria
        </div>
    );
}

export default Galeria;
