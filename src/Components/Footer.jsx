import React from "react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

function Footer() {
    return (
        <div className="flex justify-between bg-CustomPurple text-softWhite py-3 px-3 mt-20">
            <div>
                <div className="py-4">
                    <BsInstagram className="inline mx-2 text-2xl" />
                    <BsFacebook className="inline mx-2 text-2xl" />
                    <BsWhatsapp className="inline mx-2 text-2xl" />
                </div>
            </div>
            <div className="pt-1">
                <h1 className="">Lunes - Viernes : 10:30am - 7:00pm</h1>
                <h1 className="">Sabado : 10:30am - 5:00pm</h1>
            </div>
        </div>
    );
}

export default Footer;
