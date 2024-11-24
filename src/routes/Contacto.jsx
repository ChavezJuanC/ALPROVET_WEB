import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";

function Contacto() {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={`w-full h-screen ${theme ? "bg-softWhite" : "bg-black"}`}
        >
            contacto
        </div>
    );
}

export default Contacto;
