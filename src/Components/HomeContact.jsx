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
            text-base border-4 border-softWhite 2xl:w-1/2 w-3/4 mx-auto 2xl:mt-14 mt-8 rounded-md"
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

//To Do//
//make a review card comp.
//make review section with empty cards
//maybe turn the review data into a json
//feed the review section through json

//Create footer section

//Read through and implement gpt design suggestions
