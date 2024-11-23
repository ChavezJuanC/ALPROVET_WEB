import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//Route Elemenets
import Home from "./routes/Home.jsx";
import Citas from "./routes/Citas.jsx";
import Galeria from "./routes/Galeria.jsx";
import Conocenos from "./routes/Conocenos.jsx";
import Contacto from "./routes/Contacto.jsx";
import NavBar from "./Components/NavBar.jsx";
import ThemeProvider from "./theme/ThemeProvider.jsx";

function App() {
    return (
        <>
            <ThemeProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/citas" element={<Citas />} />
                        <Route path="/galeria" element={<Galeria />} />
                        <Route path="/conocenos" element={<Conocenos />} />
                        <Route path="/contacto" element={<Contacto />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;

//create routing
//create routes
//create nav bar component (PROTOTYPE)
//set custom color pallet
//set BG

//set icon to change themes
//review flex and postioning with tailwind css
//create responsive navbar
//add routing to the navbar

//start with homepage
//find a maps service
//create hero section
//create service content section
//create location and contact contact section
//create footer section

//inicio
//citas
//galleria
//conocenos
//contacto
