import React from "react";

function FocousedImg({ currentImg }) {
    return (
        <div
            className="border-2 border-softWhite shadow-xl mx-auto mb-20 py-2 rounded-lg bg-opacity-15 bg-black content-center"
            style={{ height: "700px", width: "75%" }}
        >
            <img
                src={currentImg}
                alt="FocousedImg"
                className="max-h-full mx-auto rounded-lg"
            />
        </div>
    );
}

export default FocousedImg;
