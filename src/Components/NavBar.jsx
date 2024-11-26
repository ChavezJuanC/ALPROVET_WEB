import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LightSwitch from "./LightSwitch";
import { ThemeContext } from "../theme/ThemeProvider";
import MobileMenu from "./MobileMenu";
import { FaBars } from "react-icons/fa";

function NavBar() {
    const { theme } = useContext(ThemeContext);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    function handleClickedOption() {
        setShowMobileMenu(false);
    }

    return (
        <div className="flex justify-between items-center h-14 p-0 bg-CustomPurple">
            <div className="sm:ml-8 ml-4 text-xl lg:text-2xl font-bold text-softWhite">
                <Link to={"/"}>ALPROVET</Link>
            </div>
            <div
                className={
                    "hidden sm:flex pr-8 text-xl font-semibold text-white"
                }
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
                className="border-2 rounded-lg flex sm:hidden hover:cursor-pointer mr-4 py-1 px-1 text-softWhite"
                onClick={() => {
                    setShowMobileMenu(!showMobileMenu);
                }}
            >
                <FaBars />
            </div>
            {showMobileMenu && (
                <MobileMenu handleClickedOption={handleClickedOption} />
            )}
        </div>
    );
}

export default NavBar;
