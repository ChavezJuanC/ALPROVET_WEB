import React from "react";
import { useNavigate } from "react-router-dom";

function MobileMenu({ handleClickedOption }) {
    const navigate = useNavigate();

    return (
        <div
            className="w-1/2 absolute right-0 top-14 text-center bg-CusotmPurpleLight text-lg text-softWhite 
        rounded-bl-lg md:hidden z-10"
        >
            <div
                className="py-1.5 active:bg-CustomPurple font-semibold"
                onClick={() => {
                    handleClickedOption(false);
                    navigate("/citas");
                }}
            >
                Citas
            </div>

            <div
                className="py-1.5 active:bg-CustomPurple font-semibold"
                onClick={() => {
                    handleClickedOption(false);
                    navigate("/contacto");
                }}
            >
                Contacto
            </div>

            <div
                className="py-1.5 active:bg-CustomPurple font-semibold"
                onClick={() => {
                    handleClickedOption(false);
                    navigate("/galeria");
                }}
            >
                Geleria
            </div>
            <div
                className="py-1.5 active:bg-CustomPurple font-semibold"
                onClick={() => {
                    handleClickedOption(false);
                    navigate("/conocenos");
                }}
            >
                Conocenos
            </div>
        </div>
    );
}

export default MobileMenu;
