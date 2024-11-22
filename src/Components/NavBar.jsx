import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="flex justify-between items-center">
            <div>
                <Link to={"/"}>ALPROVET</Link>
            </div>
            <div className="flex">
                <Link to={"/citas"}>
                    <div>Citas</div>
                </Link>
                <Link to={"/galeria"}>
                    <div>Galeria</div>
                </Link>
                <Link to={"/conocenos"}>
                    <div>Conocenos</div>
                </Link>
                <Link to={"/contacto"}>
                    <div>Contacto</div>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;
