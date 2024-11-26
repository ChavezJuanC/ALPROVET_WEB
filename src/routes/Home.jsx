import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import { useNavigate } from "react-router-dom";

function Home() {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <div
            className={`w-full h-screen ${
                theme
                    ? "bg-gradient-to-b from-softWhite to-CusotmPurpleLight"
                    : "bg-gradient-to-b from-[#6823A2] to-[#2E0A5F]"
            }`}
        >
            <div className="md:flex md:justify-center bg-[#6c2c9e] pb-6">
                <img
                    src="src/assets/AlproVetLogo.jpeg"
                    alt="LOGO"
                    className="h-1/2 md:w-1/3 lg:w-1/4 md:mr-2 md:rounded-full"
                />
                <div className="md:w-1/3 my-auto text-center md:ml-2">
                    <h1 className="text-white font-extrabold text-5xl lg:text-8xl mt-2">
                        ALPROVET
                    </h1>
                    <h3 className="text-softWhite font-semibold text-lg lg:text-3xl">
                        Clinica Veterinaria
                    </h3>
                    <div
                        onClick={() => {
                            navigate("/citas");
                        }}
                        className="border-2 border-white text-softWhite rounded-md text-lg px-1
                        py-0.5 w-28 mt-4 mx-auto font-semibold lg:text-2xl lg:w-36 lg:px-2 lg:py-1 lg:border-4
                        lg:animate-pulse duration-1000 shadow-xl"
                    >
                        Haz tu cita
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

//Idead for hero section//

//register all new colors
//turn logo into png so I can change the bg based on theme?
//AI a dark theme version of logo?
//Plan out mobile design
