import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import { BiArrowToBottom, BiDownArrow } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";
import DoctorCard from "../Components/DoctorCard";

function conocenos() {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={`w-full ${
                theme
                    ? "bg-gradient-to-b from-softWhite to-CusotmPurpleLight"
                    : "bg-gradient-to-b from-[#6823A2] to-[#2E0A5F]"
            }`}
        >
            <div className="w-full">
                <h1 className="text-CustomPurple font-bold text-3xl md:text-4xl lg:text-6xl 2xl:mb-5 text-center py-10 lg:py-16">
                    Quienes Somos?
                </h1>
                <div className="md:flex justify-center">
                    <img
                        src="src/assets/Services.jpg"
                        alt=""
                        className="w-4/5 block md:hidden mx-auto mb-16 mt-8"
                    />
                    <div className="lg:w-2/5 w-4/5 content-center md:mx-6 xl:mx-10 mx-auto lg:text-lg text-base font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae nemo vel ab quo consequatur, deserunt quia, odio
                        natus cum itaque, sapiente laboriosam! Saepe minus sint
                        voluptatibus. Cum repellendus voluptas facere? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Quae
                        nemo vel ab quo consequatur, deserunt quia, odio natus
                        cum itaque, sapiente laboriosam! Saepe minus sint
                        voluptatibus. Cum repellendus voluptas facere?
                    </div>
                    <img
                        src="src/assets/Services.jpg"
                        alt=""
                        className="w-3/4 lg:w-2/6 mr-6 xl:mx-10 hidden md:block rounded-lg shadow-xl border-2 border-softWhite"
                    />
                </div>
            </div>
            <h1 className="text-CustomPurple font-bold text-3xl lg:text-4xl text-center mt-24 mb-10">
                <BsArrowDown className="mx-6 text-softWhite animate-bounce font-bold inline" />
                Doctores
                <BsArrowDown className="mx-6 text-softWhite animate-bounce font-bold inline" />
            </h1>
            <div className="flex justify-center pb-28 flex-wrap">
                <DoctorCard imgSource={"src/assets/AlproVetLogo.jpeg"} />
                <DoctorCard imgSource={"src/assets/AlproVetLogo.jpeg"} />
                <DoctorCard imgSource={"src/assets/AlproVetLogo.jpeg"} />
            </div>
        </div>
    );
}

export default conocenos;
