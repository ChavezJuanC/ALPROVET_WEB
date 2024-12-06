import React from "react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

function Footer() {
    return (
        <div className="flex justify-between bg-CustomPurple text-softWhite py-3 px-3">
            <div>
                <div className="py-4">
                    <a href="https://www.instagram.com/alprovet/">
                        <BsInstagram className="inline mx-2 text-2xl" />
                    </a>
                    <a href="https://www.facebook.com/people/Alpro-Vet/pfbid024Jb9E2oab9SQoBeEcQqu1dtAGGHpiQzJa7obwAZbf2tAvJiGcJd3NUJNyYVQ2A1Nl/">
                        <BsFacebook className="inline mx-2 text-2xl" />
                    </a>
                    <a href="https://wa.link/xor6fb">
                        <BsWhatsapp className="inline mx-2 text-2xl" />
                    </a>
                </div>
            </div>
            <a href="https://www.google.com/maps/place/Alpro+Vet+-+Cl%C3%ADnica+Veterinaria/@19.2791575,-99.1253108,17z/data=!3m1!4b1!4m6!3m5!1s0x85ce01197aa6e3d1:0xd07cffc3dac6eab7!8m2!3d19.2791525!4d-99.1227359!16s%2Fg%2F11rzwwqw6j?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D">
                <div className="pt-1">
                    <h1 className="">Lunes - Viernes : 10:30am - 7:00pm</h1>
                    <h1 className="">Sabado : 10:30am - 5:00pm</h1>
                </div>
            </a>
        </div>
    );
}

export default Footer;
