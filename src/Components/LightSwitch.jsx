import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";

function LightSwitch() {
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleLights() {
        setTheme(!theme);
    }

    return (
        <button
            className="border-2 rounded-full w-8"
            onClick={() => {
                toggleLights();
                console.log(theme);
            }}
        >
            {theme ? <>O</> : <>I</>}
        </button>
    );
}

export default LightSwitch;
