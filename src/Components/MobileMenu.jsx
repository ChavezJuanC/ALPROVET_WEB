import React from "react";
import { Link } from "react-router-dom";

function MobileMenu({ handleClickedOption }) {
    return (
        <div className="w-1/2 absolute right-0 top-14 text-center bg-CusotmPurpleLight text-lg text-softWhite rounded-bl-lg md:hidden">
            <Link
                to={"/citas"}
                onClick={() => {
                    handleClickedOption(false);
                }}
            >
                <div className="py-1.5 active:bg-CustomPurple">Citas</div>
            </Link>
            <Link
                to={"/contacto"}
                onClick={() => {
                    handleClickedOption(false);
                }}
            >
                <div className="py-1.5 active:bg-CustomPurple">Contacto</div>
            </Link>
            <Link
                to={"/galeria"}
                onClick={() => {
                    handleClickedOption(false);
                }}
            >
                <div className="py-1.5 active:bg-CustomPurple">Geleria</div>
            </Link>
            <Link
                to={"/conocenos"}
                onClick={() => {
                    handleClickedOption(false);
                }}
            >
                <div className="py-1.5 active:bg-CustomPurple">Conocenos</div>
            </Link>
        </div>
    );
}

export default MobileMenu;
