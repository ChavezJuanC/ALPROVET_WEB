import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";

function Contacto() {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={`w-full h-screen ${
                theme
                    ? "bg-gradient-to-b from-softWhite to-CusotmPurpleLight"
                    : "bg-gradient-to-b from-[#6823A2] to-[#2E0A5F]"
            }`}
        >
            contacto
        </div>
    );
}

export default Contacto;
