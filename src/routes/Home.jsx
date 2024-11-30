import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import { useNavigate } from "react-router-dom";
import Services from "../Components/Services";
import HomeContact from "../Components/HomeContact";
import Map from "../Components/Map";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";

function Home() {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <div
            className={`w-full h-full ${
                theme
                    ? "bg-gradient-to-b from-softWhite to-CusotmPurpleLight"
                    : "bg-gradient-to-b from-[#6823A2] to-[#2E0A5F]"
            }`}
        >
            <div className="md:flex md:justify-center bg-[#6924a3] pb-20 lg:pb-6 pt-20 lg:pt-5">
                <img
                    src="src/assets/AlproVetLogo.jpeg"
                    alt="LOGO"
                    className="h-1/2 md:w-1/3 lg:w-1/5 md:mr-2 rounded-full"
                />
                <div className="md:w-1/3 my-auto text-center md:ml-2">
                    <h1 className="text-white font-extrabold text-5xl lg:text-8xl mt-16 lg:mt-2 ">
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
            <div className="md:flex justify-between block">
                <div className="hidden 2xl:block w-1/2 pt-10">
                    <HomeContact />
                </div>
                <Services />
            </div>
            <div className="2xl:hidden block md:w-1/2 mx-auto mt-20">
                <HomeContact />
            </div>
            <div className="block xl:flex justify-between">
                <div className="2xl:mx-0 mt-10 xl:w-1/2">
                    <h1 className="text-CustomPurple font-bold text-3xl md:text-4xl lg:text-6xl text-center mb-12 lg:mt-20 mt-28">
                        Ubicacion
                    </h1>
                    <div className="w-full">
                        <Map />
                    </div>
                </div>
                <div className="w-3/4 xl:w-1/2 mx-auto xl:px-24">
                    <h1 className="text-CustomPurple font-bold text-3xl md:text-4xl lg:text-6xl text-center mb-8 mt-24 pt-6">
                        Resenas
                    </h1>
                    <div className="rounded-md border-softWhite overflow-auto bg-transparent shadow-xl">
                        <Reviews />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;

//To Do//

//Turn the review data into a json
//Feed the review section through json

//Create LOCATION CARD

//----FINISH SCHOOL WORK----//

//Find fonts with AI
