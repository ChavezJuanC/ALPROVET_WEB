import React, { useContext, useState } from "react";
import { ThemeContext } from "../theme/ThemeProvider";

function Contacto() {
    const { theme } = useContext(ThemeContext);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContactMessage = `Nuevo Contacto! \nNombre:${formData.name} \nNumero/Contacto:${formData.email}\nMensaje:${formData.message}`;
        console.log(newContactMessage);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div
            className={`w-full h-screen content-center ${
                theme
                    ? "bg-gradient-to-b from-softWhite to-CusotmPurpleLight"
                    : "bg-gradient-to-b from-[#6823A2] to-[#2E0A5F]"
            }`}
        >
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8 mx-auto relative bottom-10">
                <h1 className="text-3xl font-bold text-center text-CustomPurple mb-6">
                    Contactanos
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-CustomPurple mb-2"
                        >
                            Nombre:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-CustomPurpleSoft rounded-lg focus:ring-2 focus:ring-CustomPurple outline-none"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-CustomPurple mb-2"
                        >
                            Correo / Telefono:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-CustomPurpleSoft rounded-lg focus:ring-2 focus:ring-CustomPurple outline-none"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-CustomPurple mb-2"
                        >
                            Mensaje:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full p-3 border border-CustomPurpleSoft rounded-lg focus:ring-2 focus:ring-CustomPurple outline-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-CustomPurple text-white font-bold py-3 rounded-lg hover:bg-CustomPurpleSoft transition duration-300"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contacto;
