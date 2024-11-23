import React from "react";
import { Link } from "react-router-dom";
import LightSwitch from "./LightSwitch";

function NavBar() {
    return (
        <div className="flex justify-between items-center border-2 h-14">
            <div className="sm:ml-8 mx-auto">
                <Link to={"/"}>ALPROVET</Link>
            </div>
            <div className="hidden sm:flex pr-8">
                <Link to={"/citas"}>
                    <div className="mx-4">Citas</div>
                </Link>
                <Link to={"/galeria"}>
                    <div className="mx-4">Galeria</div>
                </Link>
                <Link to={"/conocenos"}>
                    <div className="mx-4">Conocenos</div>
                </Link>
                <Link to={"/contacto"}>
                    <div className="mx-4">Contacto</div>
                </Link>
                <LightSwitch />
            </div>
        </div>
    );
}

export default NavBar;
