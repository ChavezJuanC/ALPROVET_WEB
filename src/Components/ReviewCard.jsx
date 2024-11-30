import React from "react";
import { FaStar } from "react-icons/fa";
import { IoNavigate } from "react-icons/io5";

function ReviewCard({ userName, review, img, link }) {
    return (
        <a href={link}>
            <div className="border-2 my-3 rounded-xl shadow-lg hover:shadow-2xl p-6 bg-softWhite">
                <div className="flex justify-between">
                    <div>
                        <img
                            src={img}
                            alt="test"
                            className="rounded-full w-10 m-2 inline"
                        />
                        <div className="inline relative top-3 mx-1">
                            <FaStar className="inline text-sm text-yellow-400" />
                            <FaStar className="inline text-sm text-yellow-400" />
                            <FaStar className="inline text-sm text-yellow-400" />
                            <FaStar className="inline text-sm text-yellow-400" />
                            <FaStar className="inline text-sm text-yellow-400" />
                        </div>
                    </div>
                    <div>
                        <IoNavigate className="text-gray-300" />
                    </div>
                </div>
                <h1 className="text-lg font-semibold text-CustomPurple">
                    {userName}
                </h1>
                <div>
                    <p className="text-base font-normal text-slate-950">
                        {review}
                    </p>
                </div>
            </div>
        </a>
    );
}

export default ReviewCard;
