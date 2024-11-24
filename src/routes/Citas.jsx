import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";

function Citas() {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={`w-full h-screen ${theme ? "bg-softWhite" : "bg-black"}`}
        >
            Citas
        </div>
    );
}

export default Citas;
