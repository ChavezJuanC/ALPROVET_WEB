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
                    55-5653-7366
                </h2>
                <a href="https://wa.link/xor6fb">
                    <h2 className="py-1 hover:cursor-pointer">
                        <BsWhatsapp className="inline lg:text-2xl text-lg text-green-500" />{" "}
                        55-5653-7366
                    </h2>
                </a>
                <a href="https://www.facebook.com/people/Alpro-Vet/pfbid024Jb9E2oab9SQoBeEcQqu1dtAGGHpiQzJa7obwAZbf2tAvJiGcJd3NUJNyYVQ2A1Nl/">
                    <h2 className="py-1 hover:cursor-pointer">
                        <BsFacebook className="inline lg:text-2xl text-lg text-blue-700" />{" "}
                        @ALPROVET
                    </h2>
                </a>
                <a href="https://www.instagram.com/alprovet/">
                    <h2 className="py-1 hover:cursor-pointer">
                        <BsInstagram className="inline lg:text-2xl text-lg text-pink-400" />{" "}
                        @ALPROVET
                    </h2>
                </a>
                <a href="https://www.google.com/maps/place/Alpro+Vet+-+Cl%C3%ADnica+Veterinaria/@19.2791575,-99.1253108,17z/data=!3m1!4b1!4m6!3m5!1s0x85ce01197aa6e3d1:0xd07cffc3dac6eab7!8m2!3d19.2791525!4d-99.1227359!16s%2Fg%2F11rzwwqw6j?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D">
                    <div className="mt-6 text-base text-CustomPurple">
                        <p>Lunes - Viernes : 10:30am - 7:00pm</p>
                        <p>Sabado : 10:30am - 5:00pm</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default HomeContact;

//urgencias 24/7
