import React, { useState } from "react";

function AppointmentForm() {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        name: "",
        phone: "",
        petName: "",
        species: "perro",
        isFirstVisit: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const appointmentMessage = `Nueva Cita! \nFecha:${
            formData.date
        }\nHora:${formData.time}\nTel:${formData.phone}\nNombre:${
            formData.name
        }\nMascota:${formData.petName}\nEspecie:${
            formData.species
        }\nPrimera Vez:${formData.isFirstVisit == true ? "Si" : "No"}`;
        console.log(appointmentMessage);
        setFormData({
            date: "",
            time: "",
            name: "",
            phone: "",
            petName: "",
            species: "perro",
            isFirstVisit: false,
        });
        //notification
    };

    const generateTimeOptions = (day) => {
        const intervals = [];
        const startHour = 10;
        const startMinute = 30;
        const endHour = day === "Saturday" ? 16 : 18;

        for (let hour = startHour; hour <= endHour; hour++) {
            for (
                let minute = hour === startHour ? startMinute : 0;
                minute < 60;
                minute += 15
            ) {
                if (hour === endHour && minute > 0) break;
                const time = `${hour}:${minute.toString().padStart(2, "0")}`;
                intervals.push(
                    <option key={time} value={time}>
                        {time}
                    </option>
                );
            }
        }
        return intervals;
    };

    const dayOfWeek = new Date(formData.date).toLocaleDateString("en-US", {
        weekday: "long",
    });

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-white to-customPurpleSoft">
            <div className="w-full max-w-3xl bg-white shadow-lg p-8 rounded-lg">
                <h1 className="text-2xl font-bold text-customPurple mb-6 text-CustomPurple">
                    Agenda Tu Proxima Visita
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col">
                        <label
                            htmlFor="date"
                            className="text-sm font-medium text-gray-700"
                        >
                            Fecha:
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="border rounded-md p-3 text-gray-700"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="time"
                            className="text-sm font-medium text-gray-700"
                        >
                            Hora:
                        </label>
                        <select
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="border rounded-md p-3 text-gray-700"
                            required
                        >
                            <option value="">Seleccione una hora</option>
                            {generateTimeOptions(dayOfWeek)}
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="name"
                            className="text-sm font-medium text-gray-700"
                        >
                            Nombre:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border rounded-md p-3 text-gray-700"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="phone"
                            className="text-sm font-medium text-gray-700"
                        >
                            Teléfono:
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border rounded-md p-3 text-gray-700"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="petName"
                            className="text-sm font-medium text-gray-700"
                        >
                            Nombre de Mascota:
                        </label>
                        <input
                            type="text"
                            id="petName"
                            name="petName"
                            value={formData.petName}
                            onChange={handleChange}
                            className="border rounded-md p-3 text-gray-700"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="species"
                            className="text-sm font-medium text-gray-700"
                        >
                            Especie:
                        </label>
                        <select
                            id="species"
                            name="species"
                            value={formData.species}
                            onChange={handleChange}
                            className="border rounded-md p-3 text-gray-700"
                            required
                        >
                            <option value="perro">Perro</option>
                            <option value="gato">Gato</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="isFirstVisit"
                            name="isFirstVisit"
                            checked={formData.isFirstVisit}
                            onChange={handleChange}
                            className="w-4 h-4 border-gray-300 rounded"
                        />
                        <label
                            htmlFor="isFirstVisit"
                            className="text-sm font-medium text-gray-700"
                        >
                            Primera vez
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-customPurple text-CustomPurple py-3 rounded-md font-medium 
                        hover:bg-customPurpleLight transition duration-300 shadow-md border-2 hover:shadow-xl"
                    >
                        Agendar Cita
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AppointmentForm;

//Dont forget to write a function that will validate the data make sure day is not sunday and if sat time > 16 make sure to choose a valid date and time
