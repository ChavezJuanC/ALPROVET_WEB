import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import { RiSunFill, RiMoonFill } from "react-icons/ri";

function LightSwitch() {
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleLights() {
        setTheme(!theme);
    }

    return (
        <button
            className={`border-2 rounded-full w-9  flex items-center px-1 border-softWhite ${
                theme ? "justify-start" : "justify-end"
            }`}
            onClick={() => {
                toggleLights();
            }}
        >
            {theme ? <RiMoonFill /> : <RiSunFill className="text-softWhite" />}
        </button>
    );
}

export default LightSwitch;
