import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";

function LightSwitch() {
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleLights() {
        setTheme(!theme);
    }

    return (
        <button
            className={`border-2 rounded-full w-8 ${
                theme ? "border-softWhite" : "border-slate-950"
            }`}
            onClick={() => {
                toggleLights();
                console.log(theme);
            }}
        >
            {theme ? <>I</> : <>O</>}
        </button>
    );
}

export default LightSwitch;
