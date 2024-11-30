import React from "react";

function Services() {
    return (
        <div className="block bg-[#eeeeec] w-full 2xl:w-1/2 pt-10 pb-20 shadow-md rounded-md">
            <div className="flex justify-center">
                <div className="md:pl-24 pl-10 pt-8 2xl:pt-2">
                    <div className="text-left">
                    <h1 className="text-CustomPurple font-bold text-3xl md:text-4xl lg:text-6xl 2xl:my-5">
                    Servicios Para Tu Amigo
                        </h1>
                    </div>
                    <div className="flex justify-start text-slate-900 2xl:pl-6 md:text-lg text-sm px-5">
                        <ul className="mr-5 list-disc text-xl">
                            <li className="py-1">Consulta</li>
                            <li className="py-1">Vacunas</li>
                            <li className="py-1">Desparacitacion</li>
                            <li className="py-1">
                                Cirugia (anestesia inhalada)
                            </li>
                            <li className="py-1">Profilaxis Dental</li>
                        </ul>
                        <ul className="ml-5 list-disc text-xl">
                            <li className="py-1">Consula Especializada</li>
                            <li className="py-1">Manejo de Dolor</li>
                            <li className="py-1">Fisioterapia</li>
                            <li className="py-1">Ecocardiagrama</li>
                            <li className="py-1">Etc.</li>
                        </ul>
                    </div>
                </div>
                <div className="hidden md:block">
                    <img
                        src="src/assets/services.png"
                        alt="CAT&DOG"
                        className="h-96 py-auto"
                    />
                </div>
            </div>
        </div>
    );
}

export default Services;

