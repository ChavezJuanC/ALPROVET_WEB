import React from "react";
import { BiPhone } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

function HomeContact() {
    return (
        <div className="text-center w-full h-full">
            <h1 className="text-CustomPurple font-bold text-3xl md:text-4xl lg:text-6xl 2xl:mb-5">
                Contacto
            </h1>
            <div
                className="text-slate-950 bg-softWhite md:text-lg py-10 
            text-base border-2 border-softWhite 2xl:w-2/3 w-3/4 mx-auto 2xl:mt-14 mt-8 rounded-md shadow-md"
            >
                <h2 className="py-1 hover:cursor-pointer">
                    <BiPhone className="inline lg:text-2xl text-lg text-blue-400" />{" "}
                    55-1331-4440
                </h2>
                <h2 className="py-1 hover:cursor-pointer">
                    <BsWhatsapp className="inline lg:text-2xl text-lg text-green-500" />{" "}
                    55-1331-4440
                </h2>
                <h2 className="py-1 hover:cursor-pointer">
                    <BsFacebook className="inline lg:text-2xl text-lg text-blue-700" />{" "}
                    @ALPROVET
                </h2>
                <h2 className="py-1 hover:cursor-pointer">
                    <BsInstagram className="inline lg:text-2xl text-lg text-pink-400" />{" "}
                    @ALPROVET
                </h2>
                <div className="mt-6 text-base text-CustomPurple">
                    <p>Lunes - Viernes : 10:30am - 7:00pm</p>
                    <p>Sabado : 10:30am - 5:00pm</p>
                </div>
            </div>
        </div>
    );
}

export default HomeContact;


//urgencias 24/7
