import React from "react";
import { SiGooglemaps } from "react-icons/si";

function PinCard() {
    return (
        <div className="w-44 lg:w-52  bg-white">
            <div>
                <h1 className="text-lg text-slate-950">ALRPO VET</h1>
                <h3 className="text-sm">Clinica Veterinaria</h3>
            </div>
            <div>
                <p className="text-sm">
                    Prol. División del Nte. 5002, <br />
                    San Lorenzo la Cebada, Xochimilco, <br />
                    16035 Ciudad de México, CDMX
                </p>
            </div>
            <div>
                <a href="https://www.google.com.mx/maps/place/Alpro+Vet+-+Cl%C3%ADnica+Veterinaria/@19.2790957,-99.1229002,15z/data=!4m15!1m8!3m7!1s0x85ce01197aa6e3d1:0xd07cffc3dac6eab7!2sAlpro+Vet+-+Cl%C3%ADnica+Veterinaria!8m2!3d19.2791525!4d-99.1227359!10e1!16s%2Fg%2F11rzwwqw6j!3m5!1s0x85ce01197aa6e3d1:0xd07cffc3dac6eab7!8m2!3d19.2791525!4d-99.1227359!16s%2Fg%2F11rzwwqw6j?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D">
                    <div className="text-sm font-normal text-blue-500">
                        Google Maps <SiGooglemaps className="inline" />
                    </div>
                </a>
            </div>
        </div>
    );
}

export default PinCard;
