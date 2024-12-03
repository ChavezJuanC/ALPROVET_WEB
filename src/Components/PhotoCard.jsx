import React from "react";

function PhotoCard({ imgSource, imgIndex, imgSetterFunction }) {
    return (
        <div
            className="border-2 border-softWhite rounded-md aspect-square w-32 sm:w-72 mx-3 my-3
        sm:mx-6 sm:my-6 content-center"
            onClick={() => {
                imgSetterFunction(imgIndex);
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
        >
            <img src={imgSource} alt="Photo" />
        </div>
    );
}

export default PhotoCard;
