import React, { useContext, useState } from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import PhotoCard from "../Components/PhotoCard";
import FocousedImg from "../Components/FocousedImg";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

function Galeria() {
    const { theme } = useContext(ThemeContext);
    const [currentImgCounter, setCurrentImgCounter] = useState(0);

    //test List
    const ImgList = [
        "src/assets/AlproVetLogo.jpeg",
        "src/assets/Services.jpg",
        "src/assets/AlproVetLogo.jpeg",
        "src/assets/AlproVetLogo.jpeg",
        "src/assets/Services.jpg",
        "src/assets/AlproVetLogo.jpeg",
        "src/assets/Services.jpg",
        "src/assets/AlproVetLogo.jpeg",
        "src/assets/AlproVetLogo.jpeg",
        "src/assets/Services.jpg",
        "src/assets/AlproVetLogo.jpeg",
        "src/assets/Services.jpg",
        "src/assets/AlproVetLogo.jpeg",
        "src/assets/AlproVetLogo.jpeg",
        "src/assets/Services.jpg",
    ];

    const GalleryPhotos = ImgList.map((img, index) => (
        <PhotoCard
            imgSource={img}
            imgIndex={index}
            imgSetterFunction={setCurrentImgCounter}
            key={index}
        />
    ));

    function handleNextPhoto() {
        if (currentImgCounter != ImgList.length - 1) {
            setCurrentImgCounter(currentImgCounter + 1);
        } else {
            setCurrentImgCounter(0);
        }
    }

    function handlePreviousPhoto() {
        if (currentImgCounter > 0) {
            setCurrentImgCounter(currentImgCounter - 1);
        } else {
            setCurrentImgCounter(ImgList.length - 1);
        }
    }

    return (
        <div
            className={`w-full h-full ${
                theme
                    ? "bg-gradient-to-b from-softWhite to-CusotmPurpleLight"
                    : "bg-gradient-to-b from-[#6823A2] to-[#2E0A5F]"
            }`}
        >
            <h1 className="text-CustomPurple font-bold text-3xl md:text-4xl lg:text-6xl 2xl:mb-5 text-center py-10 lg:py-6 lg:pt-10">
                Galeria
            </h1>
            <div className="block">
                <div className="flex content-center">
                    <BiSolidLeftArrow
                        className="my-auto ml-6 lg:ml-8 xl:ml-28 text-2xl text-black relative bottom-12"
                        onClick={handlePreviousPhoto}
                    />
                    <FocousedImg currentImg={ImgList[currentImgCounter]} />
                    <BiSolidRightArrow
                        className="my-auto mr-6 lg:mr-8 xl:mr-28  text-2xl text-black relative bottom-12"
                        onClick={handleNextPhoto}
                    />
                </div>
            </div>
            <div className="w-11/12 mx-auto flex flex-wrap justify-center">
                {GalleryPhotos}
            </div>
            <div className="pb-20"></div>
        </div>
    );
}

export default Galeria;

//add the buttons to switch img
//add imgs to photo card for testing
//rescale if needed
//plan out mobile design
