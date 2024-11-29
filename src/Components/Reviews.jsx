import React, { useEffect } from "react";
import ReviewCard from "./ReviewCard";
import reviews from "../Data/reviews.json";

function Reviews() {
    useEffect(() => {
        console.log(reviews);
    }, []);
    return (
        <div
            style={{ height: "350px", width: "80%" }}
            className="mx-auto py-4 md:py-6 2xl:py-10"
        >
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
        </div>
    );
}

export default Reviews;
