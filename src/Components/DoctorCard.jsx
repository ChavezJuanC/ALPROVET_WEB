import React from "react";

function DoctorCard({ imgSource }) {
    return (
        <div className="w-80 border-2 mx-10 my-10 rounded-lg shadow-xl">
            <img
                src={imgSource}
                alt="Dr."
                className="w-40 rounded-full mx-auto my-10"
            />
            <h1 className="text-center text-lg mb-4">Dr. Namehere</h1>
            <div>
                <p className="px-6 text-center pb-10 text-base font-normal">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fuga odio neque animi dolore minima, cupiditate
                    exercitationem. Ratione alias earum aut sapiente repudiandae
                    recusandae temporibus rerum illum. Debitis dignissimos saepe
                    velit?
                </p>
            </div>
        </div>
    );
}

export default DoctorCard;
