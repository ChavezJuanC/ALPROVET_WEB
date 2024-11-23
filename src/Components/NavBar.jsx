import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LightSwitch from "./LightSwitch";
import { ThemeContext } from "../theme/ThemeProvider";

function NavBar() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="flex justify-between items-center h-14 p-0 bg-CustomPurple">
            <div
                className={`sm:ml-8 ml-4 text-xl ${
                    theme ? "text-softWhite" : "text-slate-950"
                }`}
            >
                <Link to={"/"}>ALPROVET</Link>
            </div>
            <div
                className={`hidden sm:flex pr-8 ${
                    theme ? "text-softWhite" : "text-slate-950"
                }`}
            >
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
            <div
                className={`border-2 rounded-lg flex sm:hidden hover:cursor-pointer mr-4 pb-0.5 px-1 ${
                    theme ? "text-softWhite" : "text-slate-950"
                }`}
                onClick={() => {
                    console.log("Opening Menu");
                }}
            >
                Menu
            </div>
        </div>
    );
}

export default NavBar;
