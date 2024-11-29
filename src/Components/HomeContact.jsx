import React from "react";
import { BiPhone } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

function HomeContact() {
    return (
        <div className="text-center w-full h-full pt-8">
            <h1 className="text-CustomPurple font-bold text-3xl md:text-4xl lg:text-5xl 2xl:my-5">
                Contacto
            </h1>
            <div
                className="text-slate-950 bg-softWhite md:text-lg py-5 
            text-base border-2 border-softWhite 2xl:w-1/2 w-3/4 mx-auto 2xl:mt-14 mt-8 rounded-md shadow-lg"
            >
                <h2 className="py-1">
                    <BiPhone className="inline lg:text-2xl text-lg" />{" "}
                    55-1331-4440
                </h2>
                <h2 className="py-1">
                    <BsWhatsapp className="inline lg:text-2xl text-lg" />{" "}
                    55-1331-4440
                </h2>
                <h2 className="py-1">
                    <BsFacebook className="inline lg:text-2xl text-lg" />{" "}
                    @ALPROVET
                </h2>
                <h2 className="py-1">
                    <BsInstagram className="inline lg:text-2xl text-lg" />{" "}
                    @ALPROVET
                </h2>
            </div>
        </div>
    );
}

export default HomeContact;

