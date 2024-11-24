import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";

function conocenos() {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={`w-full h-screen ${theme ? "bg-softWhite" : "bg-black"}`}
        >
            Conocenos
        </div>
    );
}

export default conocenos;
