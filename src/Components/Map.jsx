import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PinCard from "./PinCard";

function Map() {
    return (
        <MapContainer
            center={[19.279284135190853, -99.12272517461999]} // Updated coordinates
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "80%" }} // Ensure the map has dimensions
            className="mt-8 mx-auto border-2 rounded-md border-softWhite"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[19.279284135190853, -99.12272517461999]}>
                {" "}
                {/* Updated coordinates */}
                <Popup >
                    <PinCard />
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;
